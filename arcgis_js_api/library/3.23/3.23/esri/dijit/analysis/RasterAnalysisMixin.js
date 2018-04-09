// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/RasterAnalysisMixin","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/store/Memory dojo/string dojo/has dojo/dom-class dojo/dom-style dojo/dom-attr ../../kernel ../../lang ../../symbols/SimpleFillSymbol ../../Color ../../renderers/ClassBreaksRenderer ../../tasks/AlgorithmicColorRamp ../../tasks/MultipartColorRamp ../RasterFunctionEditor/utils ./AnalysisBase ./_AnalysisOptions ./utils ../../layers/RasterFunction".split(" "),function(l,
f,r,t,h,u,n,v,w,m,x,y,z,A,p,B,C,D,E,F,G,k,q){l=l([G,F],{declaredClass:"esri.dijit.analysis.RasterAnalysisMixin",map:null,outputLayerName:null,resultParameter:"outputRaster",rasterGPToolName:"GenerateRaster",analysisType:"raster",i18n:null,returnProcessInfo:null,_geometryService:null,_findDeepestArgsForRerun:!1,constructor:function(a,c){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);r.forEach(this._pbConnects,t.disconnect);delete this._pbConnects},
postMixInProperties:function(){this.inherited(arguments);f.mixin(this.i18n,this.toolNlsName)},postCreate:function(){this.inherited(arguments);w.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",f.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},validateServiceName:function(a){return k.validateServiceName(a,{textInput:this._outputLayerInput})},_getJobParameters:function(){},_getRasterFunction:function(){},_getRasterArguments:function(){},_getRasterObject:function(a){a=
a||this.get("inputLayer");return E.getRasterJsonFromLayer(a)},_getOutputRasterLayerName:function(){},_getOutputItemProperties:function(){},_setDefaultInputs:function(){},_resetUI:function(){},_getDefaultOutputItemProperties:function(a,c,b){c=this._getDefaultRenderingRule(c);var d=this._getDefaultRenderer(),e=this._getDefaultPopupInfo();a={visibility:!0,opacity:a||1,interpolation:b||"RSP_NearestNeighbor",popupInfo:e};c&&(a.renderingRule=c);d&&(a.layerDefinition={},a.layerDefinition.drawingInfo={},
a.layerDefinition.drawingInfo.renderer=d.toJson());return a},_getDefaultRenderingRule:function(a){var c=new q;c.functionName="Stretch";c.functionArguments={StretchType:5,DRA:!1,Gamma:[1],UseGamma:!0};c.outputPixelType="U8";var b=new q;b.functionName="Colormap";b.functionArguments={colorRamp:a||"Aspect",Raster:c};return b},_getDefaultRenderer:function(){if(this.colorValues&&this.colorValues.length&&this.classMaxValues&&this.classMaxValues.length&&this.labels&&this.labels.length){var a=this.colorValues.length;
if(a===this.classMaxValues.length&&a===this.labels.length){var c=new B({field:"Value",showInAscendingOrder:!0,classificationMethod:"natural-breaks"}),b=new D,d,e,g,f;b.colorRamps=[];for(g=0;g<a;g++)f=this.colorValues[g],d&&(e=new C,e.algorithm="hsv",e.fromColor=new p(d),e.toColor=new p(f),b.colorRamps.push(e)),d=f;b&&(c.authoringInfo={},c.authoringInfo.colorRamp=b.toJson());b=[];d=-1;for(g=0;g<a;g++)e=this.colorValues[g],e=new A("solid",null,new p({r:e[0],g:e[1],b:e[2],a:e[3]})),b.push({minValue:d,
maxValue:this.classMaxValues[g],label:this.labels[g],symbol:e}),d=this.classMaxValues[g];c.infos=b;c.attributeField="Value";return c}}},_getDefaultPopupInfo:function(){return{title:this.get("outputLayerName"),description:null,fieldInfos:[{fieldName:"Raster.ServicePixelValue",label:"Service Pixel Value",isEditable:!1,isEditableOnLayer:!1,visible:!1,format:{places:2,digitSeparator:!0}},{fieldName:"Raster.ServicePixelValue.Raw",label:"Pixel Value",isEditable:!1,isEditableOnLayer:!1,visible:!0,format:{places:2,
digitSeparator:!0}}],showAttachments:!1,layerOptions:{showNoDataRecords:!0},mediaInfos:[]}},_getReRunRFxArgs:function(a,c){var b={};this._findFunction(a,c,b);return b&&b.rasterFunctionArguments},_findFunction:function(a,c,b){var d=a&&a.rasterFunction,e=this._getRasterFunction();if(d&&b&&"object"===typeof b){if(d===e&&(b.rasterFunction=a.rasterFunction,b.rasterFunctionArguments=a.rasterFunctionArguments,!c))return;this._findFunction(a.rasterFunctionArguments&&a.rasterFunctionArguments.Raster,c,b)}},
_getSelectedLayerIndexFromUI:function(a,c){if(!a||!c)return-1;var b=-1;r.forEach(a,function(a,e){a&&a.label.toLowerCase()===c.toLowerCase()&&(b=e)});return b},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.rasterGPToolName))},_setInputLayersAttr:function(a){this.inputLayers=a},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_getOutputLayerNameAttr:function(){this._outputLayerInput&&
(this.outputLayerName=this._outputLayerInput.get("value"));return this.outputLayerName},_setOutputLayerNameAttr:function(a){this.outputLayerName=a},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setDisableExtentAttr:function(a){this._useExtentCheck.set("checked",!a);this._useExtentCheck.set("disabled",a)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_setMapAttr:function(a){this.map=a},_getMapAttr:function(){return this.map},_handleModeCrumbClick:function(a){a.preventDefault();
this._onClose(!0)},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:!a})},_save:function(){},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&(a.inputLayer=h.toJson(k.constructAnalysisInputLyrObj(this.get("inputLayer"))),a.OutputName=h.toJson({serviceProperties:{name:this.get("outputLayerName")}}),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=h.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,
a).then(f.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleSaveBtnClick:function(a){if(this._form.validate()){this._saveBtn.set("disabled",!0);var c=this._webLayerTypeSelect.get("value");this.get("inputLayer");a={};var b=this._getJobParameters();if(!z.isDefined(b)){var b={},d={};this._useRFT?d=this._getRasterFunction():(d.rasterFunction=this._getRasterFunction(),d.rasterFunctionArguments=this._getRasterArguments());b.rasterFunction=h.toJson(d);(d=this._getRasterObject())&&
!this._useRFT&&(b.functionArguments=h.toJson({raster:d}))}b.OutputName=h.toJson({serviceProperties:{name:this.get("outputLayerName")}});b.returnProcessInfo=this.returnProcessInfo;d={};this.showChooseExtent&&!this.get("disableExtent")&&this._useExtentCheck.get("checked")&&(d.extent=this.map.extent._normalize(!0));b.context=h.toJson(d);a.jobParams=b;if("permanentLayer"===c){a.itemParams={description:this.i18n.itemDescription,tags:n.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:b.field||
"",valuelayername:b.valuelayername||""}),snippet:this.i18n.itemSnippet};if(c=this._getOutputItemProperties())a.itemParams.text=c;this.showSelectFolder&&(a.itemParams.folder=this.get("folderId"));a.analysisType=this.analysisType;this.execute(a)}else"dynamicLayer"===c&&this._handleSaveDynamicLayer(b)}},_handleSaveDynamicLayer:function(a){this.get("inputLayer");this.analysisGpServer.replace("RasterAnalysisTools/GPServer","RasterRendering/ImageServer?viewId\x3d");h.fromJson(a.OutputName);a=new q;a.functionName=
this._getRasterFunction();a.functionArguments=this._getRasterArguments()},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"'),this._browsedlg.show()):(this.inputLayer=this.inputLayers[a],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){this.inputLayer&&(this._interpolateToolDescription&&x.set(this._interpolateToolDescription,
"innerHTML",n.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),a&&(this.outputLayerName=this._getOutputRasterLayerName()||n.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName));this._resetUI()},_handleBrowseItemsSelect:function(a){a&&a.selection&&k.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:this._browsedlg,widget:this}).always(f.hitch(this,
this._updateAnalysisLayerUI,!0))},_buildUI:function(){var a=!0;this._loadConnections();this.signInPromise.then(f.hitch(this,k.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer,analysisMode:"raster"}));if(this.rasterFunction){var c=this._getReRunRFxArgs(this.rasterFunction,this._findDeepestArgsForRerun);c&&f.mixin(this,c)}this.functionArguments&&this.functionArguments.Raster&&this.set("inputLayer",this.functionArguments.Raster);this.get("showSelectAnalysisLayer")&&(this.inputLayers&&
this.inputLayer&&!k.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),k.populateAnalysisLayers(this,"inputLayer","inputLayers"));k.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);m.set(this._chooseFolderRow,"display",
!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(f.hitch(this,function(a){this.folderStore=a;k.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));this._chooseLayerTypeRow&&(m.set(this._chooseLayerTypeRow,"display",!0===this.showSelectLayerType?"block":"none"),a=new u({data:[{name:this.i18n.permanentLayer,id:"permanentLayer"},
{name:this.i18n.dynamicLayer,id:"dynamicLayer"}]}),this._webLayerTypeSelect.set("store",a),this._webLayerTypeSelect.set("value","permanentLayer"));m.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");m.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._setDefaultInputs()},_loadConnections:function(){this.on("start",f.hitch(this,"_onClose",!1));this._connect(this._closeBtn,"onclick",f.hitch(this,"_onClose",!0))},_connect:function(a,c,
b){this._pbConnects.push(t.connect(a,c,b))}});v("extend-esri")&&f.setObject("dijit.analysis.RasterAnalysisMixin",l,y);return l});