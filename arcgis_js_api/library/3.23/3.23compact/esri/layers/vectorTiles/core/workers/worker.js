// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
/* eslint-env worker */

/**
 * @classdesc
 * The worker class is the script which initializes the WebWorkers. It is functioning as a bootstrap-loader allowing the
 * calling API to use it to load desired modules.
 * The worker is the object who listens to incoming messages and depending on the connection ID channels the messages
 * unto the proper connection/module object.
 * @module esri/code/workers/worker
 * @since 4.0
 */

//--------------------------------------------------------------------------
//
//  Variables
//
//--------------------------------------------------------------------------

/**
 * A dictionary of connection. Each connection is identified by ID
 * @type {{WorkerConnection}} and array of worker connections
 * @private
 */
var connections = new Map();

/**
 * A queue to hold onto promises of outgoing static messages
 * @type {[number, Promise]}
 */
var outgoingStaticMessages = new Map();

/**
 * A counter to provide unique kernel message IDs
 * @type {number}
 */
var staticMsgCount = 0;

var isInitialized = false;

//--------------------------------------------------------------------------
//
//  Public Methods
//
//--------------------------------------------------------------------------

/**
 *
 * @param staticMsg
 * @param data
 * @return {boolean}
 */
function invokeStaticMessage(staticMsg, data) {
  // Deferred has already been loaded at this point
  var Deferred = require("dojo/Deferred");

  var msgId = staticMsgCount++;

  var deferred = new Deferred(function(reason) {
    // post a cancel message in order to allow cancellation on the main thread
    postMessage({
      type: "<cancel>",
      staticMsg: staticMsg,
      id: msgId,
      data: { reason: reason },
      connection: null
    });

    mapDelete(outgoingStaticMessages, msgId);
  });

  // add the deferred to the queue
  outgoingStaticMessages.set(msgId, deferred);

  // post the message to the main thread
  postMessage({
    type: "<static-message>",
    staticMsg: staticMsg,
    id: msgId,
    data: data,
    connection: null
  });

  return deferred.promise;
}

//--------------------------------------------------------------------------
//
//  Private Methods
//
//--------------------------------------------------------------------------

function mapDelete(map, key) {
  /*eslint-disable */
  map["delete"](key);
  /*eslint-enable */
}

/**
 * onmessage event handler which listens to messages coming from the main thread. Depending on the type of the message,
 * the worker will either open a connection, close connection or forward the message onto the target connection object.
 * The API handles five types of messages:
 * 1. <worker-init> fired by the worker to indicate that the worker is up an running
 * 2. <open-connection> request from to open a new connection and load a module
 * 3. <close-connection> request to close and dispose a worker connection
 * 4. <response> any type of response, indicating loading module status, error or a valid response
 * 5. <cancel> a request to cancel an ongoing or awaiting job
 * @private
 * @param e {Object} message data
 */
function messageHandler(e) {
  var data = e.data;
  if (!data) {
    return;
  }

  var connectionID = e.data.connection;

  if (data.type === "<configure>") {
    var configuration = data.configure;

    if (!isInitialized) {
      self.dojoConfig = configuration.dojoConfig;
      self.importScripts(configuration.loaderUrl);

      require([
        "dojo/_base/lang",
        "esri/config"
      ], function(lang, esriConfig) {
        lang.mixin(esriConfig, configuration.esriConfig);
        self.postMessage({
          type: "<worker-configured>"
        });
      });
    }
    // else {
      // simply update the config. We already loaded the config so it must be loaded by now
      // not working at 4.1
      // var cfg = require("esri/config");
      // cfg.copy(configure.esriConfig);
    // }
  }
  else if (data.type === "<open-connection>") {
    // invoke the AMD module loader function require
    var path = data.data.path;
    var jobID = data.id;

    // this is simply to reassure that the connection/module does not already exist
    if (connections.has(connectionID)) {
      self.postMessage({
        type: "<response>",
        id: jobID,
        connection: connectionID
      });

      return;
    }

    require([
      "esri/layers/vectorTiles/core/workers/WorkerConnection", // TODO: see whether it is possible to make relative?
      path
    ],
    function(WorkerConnection, Module) {
      // we need to create the connection, then add it to the connections dictionary
      connections.set(connectionID, new WorkerConnection(Module, this, connectionID));

      // send an init message indicating that the worker has loaded the requested module
      self.postMessage({
        type: "<response>",
        id: jobID,
        data: {
          connection: connectionID
        },
        error: undefined
      });
    });
  }
  else if (data.type === "<close-connection>") {
    if (connections.has(connectionID)) {
      mapDelete(connections, connectionID);
    }
  }
  else if (data.type === "<static-message>") { // it is a kernel message therefore it is not distributed to a connection
    var msgId = data.id;
    if (outgoingStaticMessages.has(msgId)) {
      var deferred = outgoingStaticMessages.get(msgId);
      mapDelete(outgoingStaticMessages, msgId);

      if (data.error) {
        deferred.reject(data.error);
      }
      else {
        deferred.resolve(data.data);
      }
    }
  }
  else {
    // we need to distribute the message to the named module
    var type = e.data.type;

    if (type) {
      var connection = connections.get(connectionID);
      if (connection) {
        connection.proxy.message(e);
      }
    }
  }
}

self.addEventListener("message", messageHandler);

// fire a loaded message in order to notify the workers dispatcher that this worker is ready to process messages
self.postMessage({ type: "<worker-loaded>" });
