// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/CreateViewshed.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"createViewshedIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.createViewshed}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.createViewshed}\x3c/a\x3e\r\n                \x3c/nav\x3e                 \r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e              \r\n                \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription" \x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3"\x3e\r\n            \x3ctable style\x3d"width:100%;"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd style\x3d"width:80%"\x3e  \r\n                \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd style\x3d"width:20%"\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton"  data-dojo-attach-point\x3d"_analysisPointDrawBtn"  class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon esriPointIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handleInputDrawPointChange"\x3e\x3c/div\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.viewshedOptionlabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.observerHghtLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"ObserverHeight"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e                    \r\n        \x3c/tr\x3e                  \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n            \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                \x3ctd  style\x3d"width:50%;padding-right:1em;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"value:${observerHeight},intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_obsrHeightInput" style\x3d"width:100%;"\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd colspan\x3d"2"\x3e\r\n            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_obsrUnitsSelect"\x3e\r\n            \x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.targetHghtLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"TargetHeight"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e                    \r\n        \x3c/tr\x3e                  \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n            \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                \x3ctd  style\x3d"width:50%;padding-right:1em;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"value:${targetHeight},intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_targetHgtInput" style\x3d"width:100%;"\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd colspan\x3d"2"\x3e\r\n            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_targetUnitsSelect"\x3e\r\n            \x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.maxDistanceLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MaximumDistance"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e                    \r\n        \x3c/tr\x3e                   \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n            \x3ctable class\x3d"esriFormTable esriLeadingMargin2" style\x3d"width:90%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                \x3ctd  style\x3d"width:50%;padding-right:1em;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"value:${maximumDistance},intermediateChanges:true,invalidMessage:\'${i18n.maxdistanceInValidMsg}\', constraints:{place: \'0,0\'}" data-dojo-attach-point\x3d"_maximumDistanceInput" style\x3d"width:100%;" data-dojo-attach-event\x3d"onChange:_handleMaxDstChange"\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd colspan\x3d"2"\x3e\r\n            \x3cselect class\x3d"longInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_distanceUnitsSelect" data-dojo-attach-event\x3d"onChange:_handleMaxDstUnitsChange"\x3e\r\n            \x3c/select\x3e\r\n                \x3c/td\x3e\r\n               \x3c/tr\x3e                  \r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputLayer"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n     \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n       \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n         ${i18n.useMapExtent}\r\n     \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/CreateViewshed","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/NumberSpinner dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../PopupTemplate ../../layers/FeatureLayer ../../graphic ./utils ./CreditEstimator ../../symbols/PictureMarkerSymbol dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels dojo/i18n!../../nls/jsapi dojo/text!./templates/CreateViewshed.html".split(" "),
function(l,q,d,h,k,H,e,r,I,f,m,t,J,K,u,L,v,w,x,y,z,M,N,O,P,Q,R,S,T,U,V,W,A,X,B,C,Y,Z,n,aa,D,E,g,ba,F,ca,da,ea,p,G){l=q([v,w,x,y,z,C,B],{declaredClass:"esri.dijit.analysis.CreateViewshed",templateString:G,widgetsInTemplate:!0,inputLayer:null,maximumDistance:15,maxDistanceUnits:"Kilometers",targetHeight:0,targetHeightUnits:"Meters",observerHeight:1.75,observerHeightUnits:"Meters",outputLayerName:null,i18n:null,map:null,toolName:"CreateViewshed",helpFileName:"CreateViewshed",resultParameter:"viewshedLayer",
constructor:function(a,c){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);h.forEach(this._pbConnects,k.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,p.findHotSpotsTool);d.mixin(this.i18n,p.createViewshedTool);this.set("drawPointLayerName",this.i18n.pointlayerName)},postCreate:function(){this.inherited(arguments);u.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",
d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_handleModeCrumbClick:function(a){a.preventDefault();this._onClose(!0)},_onClose:function(a){a&&this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),h.forEach(this.inputLayers,function(a,b){a===this._pointfeatureLayer&&(this._analysisSelect.removeOption({value:b+1,label:this._pointfeatureLayer.name}),this.inputLayers.splice(b,1))},this));this._handleInputDrawPointChange(!1);this.emit("close",{save:!a})},
clear:function(){this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),h.forEach(this.inputLayers,function(a,c){a===this._pointfeatureLayer&&(this._analysisSelect.removeOption({value:c+1,label:this._pointfeatureLayer.name}),this.inputLayers.splice(c,1))},this));this._handleInputDrawPointChange(!1)},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&(a.inputLayer=e.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),this.get("maximumDistance")&&
(a.maximumDistance=this.get("maximumDistance"),a.maxDistanceUnits=this.get("maxDistanceUnits")),a.maximumDistance=this.get("maximumDistance"),a.maxDistanceUnits=this.get("maxDistanceUnits"),a.observerHeight=this.get("observerHeight"),a.observerHeightUnits=this.get("observerHeightUnits"),a.targetHeight=this.get("targetHeight"),a.targetHeightUnits=this.get("targetHeightUnits"),this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.returnFeatureCollection||
(a.OutputName=e.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleSaveBtnClick:function(a){if(this._form.validate()){this._saveBtn.set("disabled",!0);a={};var c={},b;a.inputLayer=e.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer")));
a.maximumDistance=this.get("maximumDistance");a.maxDistanceUnits=this.get("maxDistanceUnits");a.observerHeight=this.get("observerHeight");a.observerHeightUnits=this.get("observerHeightUnits");a.targetHeight=this.get("targetHeight");a.targetHeightUnits=this.get("targetHeightUnits");this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this.get("outputLayerName")}}));this.showChooseExtent&&!this.get("disableExtent")&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)}));
this.returnFeatureCollection&&(b={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0)),a.context=e.toJson(b));a.returnFeatureCollection=this.returnFeatureCollection;c.jobParams=a;c.itemParams={description:this.i18n.itemDescription,tags:f.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:a.field?a.field:""}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(c.itemParams.folder=this.get("folderId"));
this.execute(c)}},_save:function(){},_buildUI:function(){this._loadConnections();this.signInPromise.then(d.hitch(this,g.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));var a=!0;this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!g.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),-1!==this.inputLayer.name.indexOf("Drawn Input Points")&&(this.map.addLayer(this.inputLayer),this._pointfeatureLayer=this.inputLayer)),
this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),g.populateAnalysisLayers(this,"inputLayer","inputLayers",{posIncrement:1}));this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);g.addReadyToUseLayerOption(this,[this._analysisSelect]);this._updateAnalysisLayerUI(a);m.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=
a;g.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));m.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");m.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},
{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]);this.maxDistanceUnits&&(this._distanceUnitsSelect.set("value",this.maxDistanceUnits),this._handleMaxDstUnitsChange(this.maxDistanceUnits));this.maximumDistance&&this._maximumDistanceInput.set("value",this.maximumDistance);this._obsrUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",
label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]);this.observerHeightUnits&&this._obsrUnitsSelect.set("value",this.observerHeightUnits);this.observerHeight&&this._obsrHeightInput.set("value",this.observerHeight);this._targetUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]);this.targetHeightUnits&&
this._targetUnitsSelect.set("value",this.targetHeightUnits);this.targetHeight&&this._targetHgtInput.set("value",this.targetHeight)},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!1));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!0))},validateServiceName:function(a){return g.validateServiceName(a,{textInput:this._outputLayerInput})},_handleInputDrawPointChange:function(a){a?(this.emit("drawtool-activate",{}),this._pointfeatureLayer||this._createPointFeatColl(),
this._pointtoolbar.activate(n.POINT)):this._pointtoolbar.deactivate()},_createPointFeatColl:function(){var a=g.createPointFeatureCollection(this.drawPointLayerName);this._pointfeatureLayer=new D(a,{id:this.drawPointLayerName});this.map.addLayer(this._pointfeatureLayer);k.connect(this._pointfeatureLayer,"onClick",d.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},_addPointFeatures:function(a){var c=[],b={},d=(new F({height:24,width:24,contentType:"image/png",type:"esriPMS",url:"http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png"})).setOffset(0,
12);a=new E(a,d);this.map.graphics.add(a);b.description="blayer desc";b.title="blayer";a.setAttributes(b);c.push(a);this._pointfeatureLayer.applyEdits(c,null,null);if(0===this.inputLayers.length||this.inputLayers[this.inputLayers.length-1]!==this._pointfeatureLayer)this.inputLayers.push(this._pointfeatureLayer),c=this.inputLayers.length-1,b=this._analysisSelect.getOptions(),this._analysisSelect.removeOption(b),b=h.map(b,function(a){a.selected=!1;return a}),this._analysisSelect.addOption({value:c+
1,label:this._pointfeatureLayer.name,selected:!0}),this._analysisSelect.addOption(b),this._handleAnalysisLayerChange(c+1)},_handleMaxDstChange:function(){this._maximumDistanceInput.validate()},_handleMaxDstUnitsChange:function(a){var c="",b={places:"0,0"};"Miles"===a?(b.max=31,c=f.substitute(this.i18n.maxDistanceValidMsg,{units:a,limit:31})):"Kilometers"===a?(b.max=50,c=f.substitute(this.i18n.maxDistanceValidMsg,{units:a,limit:50})):"Yards"===a?(b.max=54680,c=f.substitute(this.i18n.maxDistanceValidMsg,
{units:a,limit:54680})):"Feet"===a?(b.max=164041,c=f.substitute(this.i18n.maxDistanceValidMsg,{units:a,limit:164041})):"Meters"===a&&(b.max=5E4,c=f.substitute(this.i18n.maxDistanceValidMsg,{units:a,limit:5E4}));this._maximumDistanceInput.set("constraints",b);this._maximumDistanceInput.set("rangeMessage",c)},_handleAnalysisLayerChange:function(a){"browse"===a?(a=this._browsedlg.browseItems.get("query"),a.custom=['tags:"point"'],this._browsedlg.browseItems.set("query",a),this._analysisPointDrawBtn.reset(),
this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(a=this._browseLyrsdlg.browseItems.get("query"),a.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",a)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint"],this._browseLyrsdlg.show()):(this.inputLayer=this.inputLayers[a-1],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(a){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,
layers:this.inputLayers,layersSelect:this._analysisSelect,posIncrement:1,browseDialog:a.dialog||this._browsedlg,widget:this}).always(d.hitch(this,this._updateAnalysisLayerUI,!0))},_updateAnalysisLayerUI:function(a){this.inputLayer&&(t.set(this._interpolateToolDescription,"innerHTML",f.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),a&&(this.outputLayerName=f.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName),
this._pointfeatureLayer&&this._pointfeatureLayer.name!==this.inputLayer.name&&this._analysisPointDrawBtn.reset())},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayersAttr:function(a){this.inputLayers=a||[]},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_getOutputLayerNameAttr:function(){this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value"));
return this.outputLayerName},_setOutputLayerNameAttr:function(a){this.outputLayerName=a},_setMapAttr:function(a){this.map=a;this._pointtoolbar=new n(this.map);k.connect(this._pointtoolbar,"onDrawEnd",d.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setDisableExtentAttr:function(a){this._useExtentCheck.set("checked",!a);this._useExtentCheck.set("disabled",a)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},
_setMaxDistanceUnitsAttr:function(a){this.maxDistanceUnits=a},_getMaxDistanceUnitsAttr:function(){this._distanceUnitsSelect&&this._distanceUnitsSelect.get("value")&&(this.maxDistanceUnits=this._distanceUnitsSelect.get("value"));return this.maxDistanceUnits},_setMaximumDistanceAttr:function(a){this.maximumDistance=a},_getMaximumDistanceAttr:function(){this._maximumDistanceInput&&this._maximumDistanceInput.get("value")&&(this.maximumDistance=this._maximumDistanceInput.get("value"));return this.maximumDistance},
_setObserverHeightUnitsAttr:function(a){this.observerHeightUnits=a},_getObserverHeightUnitsAttr:function(){this._obsrUnitsSelect&&this._obsrUnitsSelect.get("value")&&(this.observerHeightUnits=this._obsrUnitsSelect.get("value"));return this.observerHeightUnits},_setObserverHeightAttr:function(a){this.observerHeight=a},_getObserverHeightAttr:function(){this._obsrHeightInput&&(this.observerHeight=this._obsrHeightInput.get("value"));return this.observerHeight},_setTargetHeightUnitsAttr:function(a){this.targetHeightUnits=
a},_getTargetHeightUnitsAttr:function(){this._targetUnitsSelect&&this._targetUnitsSelect.get("value")&&(this.targetHeightUnits=this._targetUnitsSelect.get("value"));return this.targetHeightUnits},_setTargetHeightAttr:function(a){this.targetHeight=a},_getTargetHeightAttr:function(){this._targetHgtInput&&this._targetHgtInput.get("value")&&(this.targetHeight=this._targetHgtInput.get("value"));return this.targetHeight},_setDrawPointLayerNameAttr:function(a){this.drawPointLayerName=a},_getDrawPointLayerNameAttr:function(){return this._pointfeatureLayer.name},
_getDrawLayerAttr:function(){var a=[];this._featureLayer&&a.push(this._featureLayer);this._pointfeatureLayer&&a.push(this._pointfeatureLayer);return a},_connect:function(a,c,b){this._pbConnects.push(k.connect(a,c,b))}});r("extend-esri")&&d.setObject("dijit.analysis.CreateViewshed",l,A);return l});