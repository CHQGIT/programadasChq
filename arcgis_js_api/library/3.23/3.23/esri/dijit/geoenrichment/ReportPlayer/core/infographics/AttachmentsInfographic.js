// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/AttachmentsInfographic","dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin esri/dijit/geoenrichment/_Invoke ../supportClasses/images/DefaultAttachment esri/dijit/geoenrichment/ImageNavigator".split(" "),function(e,f,p,d,g,h,k,a,l){function m(){return c?c:c={getAttachments:function(){return[{description:"Esri headquarters in Redlands CA, summer time",getThumbnail:function(){return a}},
{description:"Sample image",getThumbnail:function(){return a}},{description:"Sample image",getThumbnail:function(){return a}}]}}}var c;return e([g,h,k],{templateString:"\x3cdiv data-dojo-attach-point\x3d'viewDiv'\x3e\x3c/div\x3e",viewModel:null,themeContext:null,theme:null,imageNavigator:null,_currentInfographicJson:null,postCreate:function(){this.inherited(arguments);this.imageNavigator=(new l({showNotes:!0,showThumbnails:!1,canEditNotes:!1,canRemoveNotes:!1})).placeAt(this.viewDiv);this.own(this.imageNavigator)},
updateInfographic:function(b){var n=this;if(this.viewDiv){this._currentInfographicJson=b;var a=this.viewModel.getStaticInfographicDefaultStyles(this.theme||this.themeContext);d.set(this.viewDiv,"backgroundColor",b.style.backgroundColor||a&&a.backgroundColor);this._resizeContent();["showNotes","showThumbnails"].forEach(function(a){void 0!==b[a]&&(n.imageNavigator[a]=b[a])});this.invoke("_doUpdateContent",50)}},_doUpdateContent:function(){var b=this,a=this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:
m();this.imageNavigator.update(a,{useCircularMask:this._currentInfographicJson.useCircularMask,alwaysShowCaptions:this._currentInfographicJson.alwaysShowCaptions,scaleToCover:this._currentInfographicJson.scaleToCover,onContentLoadingStart:function(){b.onContentLoadingStart()},onContentLoadingEnd:function(){b.onContentLoadingEnd()}})},_resizeContent:function(){this._currentInfographicJson.style.width=this.width;this._currentInfographicJson.style.height=this.height;d.set(this.viewDiv,{width:this.width+
"px",height:this.height+"px"});this.imageNavigator.setHeight(this.height)},width:null,height:null,resize:function(b,a){void 0!==b&&(this.width=b,this.height=a);this.invoke("_resizeContent",50)},notifyShown:function(){},toJson:function(){return f.clone(this._currentInfographicJson)},getVisualState:function(){return{imageIndex:this.imageNavigator.getImageIndex()}},setVisualState:function(a){a&&void 0!==a.imageIndex&&this.imageNavigator.setImageIndex(a.imageIndex)},onContentLoadingStart:function(){},
onContentLoadingEnd:function(){}})});