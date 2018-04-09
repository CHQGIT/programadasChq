// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/workers/JobProxy","require exports dojo/_base/kernel dojo/_base/lang dojo/Deferred ../../kernel ../../config ../../request ../Logger ../Error ../sniff ../urlUtils ./WorkerFallbackImpl".split(" "),function(t,F,w,h,u,x,k,y,z,A,B,l,m){function C(){if(!B("esri-workers"))return p(new m);if(!D){var b=void 0;try{b=new Worker(q)}catch(a){n.warn("Failed to create Worker. Fallback to execute module in main thread",event),b=new m}return p(b)}r||(r=y(q,{responseType:"text"}));
return r.then(function(a){return new Worker(URL.createObjectURL(new Blob([a.data],{type:"text/javascript"})))}).otherwise(function(a){n.warn("Failed to create Worker. Fallback to execute module in main thread",a);return new m}).then(function(a){return p(a)})}function p(b){function a(c){if(c&&c.data&&c.data.type)if(c=c.data.type,"\x3cworker-loaded\x3e"===c){c=b;var d;null!=k["default"]?(d=h.mixin({},k),delete d["default"],d=JSON.parse(JSON.stringify(d))):d=JSON.parse(JSON.stringify(k));var e={async:!0,
baseUrl:E,locale:w.locale,has:{},paths:{}};h.mixin(e,k.workers.loaderConfig);e.has=h.mixin({"esri-cors":1,"dojo-test-sniff":0,"config-deferredInstrumentation":0,"host-webworker":1,"events-keypress-typed":0},e.has);e.paths=h.mixin({esri:"../esri",dojo:"../dojo",dojox:"../dojox",dstore:"../dstore",moment:"../moment"},e.paths);c.postMessage({type:"\x3cconfigure\x3e",configure:{esriConfig:d,dojoConfig:e,loaderUrl:v}})}else"\x3cworker-configured\x3e"===c&&(b.removeEventListener("message",a),b.removeEventListener("error",
g),f.resolve(b))}function g(c){c.preventDefault();b.removeEventListener("message",a);b.removeEventListener("error",g);n.warn("Failed to create Worker. Fallback to execute module in main thread",c);b=new m;b.addEventListener("message",a);b.addEventListener("error",g)}var f=new u;b.addEventListener("message",a);b.addEventListener("error",g);return f.promise}var n=z.getLogger("esri.core.workers.JobProxy"),q=l.normalize(t.toUrl("./worker.js")),v=l.makeAbsolute(t.toUrl("./worker-init.js")),E=l.makeAbsolute("../../../../../",
v)+"/",D=!l.hasSameOrigin(q,location.href),r=null;return function(){function b(a,b,f){this.connections=a;this.index=b;this.worker=f;this.msgCount=0;this.outgoingJobs=new Map;this.incomingJobs=new Map;this.incomingStaticJobs=new Map;this.worker.addEventListener("message",this.message.bind(this));this.worker.addEventListener("error",function(a){a.preventDefault();n.error(a)})}b.create=function(a,g){return C().then(function(f){return new b(a,g,f)})};b.prototype.terminate=function(){this.worker.terminate()};
b.prototype.openConnection=function(a,b){return this.invoke("\x3copen-connection\x3e",{path:a},void 0,b)};b.prototype.closeConnection=function(a){this.invoke("\x3cclose-connection\x3e",void 0,void 0,a)};b.prototype.hasOutgoingJobs=function(){return 0<this.outgoingJobs.size};b.prototype.invoke=function(a,b,f,c){var d=this,e=++this.msgCount,g=new u(function(a){d.worker.postMessage({type:"\x3ccancel\x3e",id:e,connection:c,data:{reason:a}});if(d.outgoingJobs.has(e))d.outgoingJobs["delete"](e)});this.outgoingJobs.set(e,
g);this.worker.postMessage({type:a,id:e,connection:c,data:b},f);return g.promise};b.prototype.message=function(a){var b=this;if(a&&a.data){var f=a.data.type;if(f){var c=a.data,d=a.data.id;if("\x3cresponse\x3e"===f&&d){if(a=this.outgoingJobs.get(d))this.outgoingJobs["delete"](d),c.error?a.reject(A.fromJSON(c.error)):a.resolve(c.data)}else if("\x3ccancel\x3e"===f&&d)(a=this.incomingJobs.get(d))&&a.cancel(c.data.reason),c.staticMsg&&(a=this.incomingStaticJobs.get(d))&&a.cancel(c.data.reason);else if("\x3cstatic-message\x3e"===
f){var e=c.staticMsg;(a=x.workerMessages[e])&&"function"===typeof a?(c=a.call(this,c.data),this.incomingStaticJobs.set(d,c),c.then(function(a){b.worker.postMessage({type:"\x3cstatic-message\x3e",staticMsg:e,id:d,data:a.data},a.buffers)}).otherwise(function(a){a||(a={message:"Error encountered at method"+e});a.dojoType&&"cancel"===a.dojoType||b.worker.postMessage({type:"\x3cstatic-message\x3e",staticMsg:e,id:d,error:a})}).always(function(){b.incomingStaticJobs["delete"](d)})):this.worker.postMessage({type:"\x3cstatic-message\x3e",
staticMsg:e,id:d,error:e+" message type is not available on the kernel!"})}else{var h=c.connection;if(a=this.connections.get(h))if(a=a.client){var k=a[f];"function"===typeof k&&(c=k.call(a,c.data),this.incomingJobs.set(d,c),c.then(function(a){b.worker.postMessage({type:"\x3cresponse\x3e",id:d,connection:h,error:a.error,data:a.data},a.buffers)}).otherwise(function(a){a||(a={message:"Error encountered at method"+f});a.dojoType&&"cancel"===a.dojoType||b.worker.postMessage({type:"\x3cresponse\x3e",id:d,
connection:h,error:a})}).always(function(){b.incomingJobs["delete"](d)}))}}}}};return b}()});