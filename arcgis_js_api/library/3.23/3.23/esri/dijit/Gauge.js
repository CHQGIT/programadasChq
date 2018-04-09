// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/Gauge.html":'\x3cdiv class\x3d"gaugeContainer"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"titleNode" class\x3d"gaugeTitle"\x3e${title}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"dataLabelWrapperNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"dataLabelNode"\x3e${dataLabel}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"gaugeNode" style\x3d"margin: -10px auto 10px auto; width: 240px; height: 120px;"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"captionNode" class\x3d"gaugeCaption"\x3e${caption}\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/Gauge","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/number dojo/has dojo/text!./templates/Gauge.html dijit/_WidgetBase dijit/_TemplatedMixin dojox/widget/AnalogGauge dojox/widget/gauge/AnalogArcIndicator ../kernel".split(" "),function(d,e,h,f,l,g,m,n,p,q,r,t,k,u){d=d([q,r],{declaredClass:"esri.dijit.Gauge",templateString:p,widgetsInTemplate:!1,constructor:function(a,c){this.caption="\x26nbsp;";this.color="#000";
this.dataFormat="value";this.maxDataValue=100;this.title="\x26nbsp;";this.unitLabel="";this.fromWebmap=!1;this.feature=null;this.dataLabel="\x26nbsp;";e.mixin(this,a);this._majorTicks="";this.value=0;this.numberFormat=this.numberFormat||{places:0};this.fromWebmap&&(this.dataField=this.field,this.dataFormat=this.valueLabel,this.dataLabelField=this.displayField,this.maxDataValue=this.target,this.unitLabel="");"percentage"==this.dataFormat&&(this.unitLabel="%",this._majorTicks={offset:90,interval:25,
length:3,color:"black"});this.watch("caption",this._updateCaption);this.watch("dataLabel",this._updateDataLabel);this.watch("title",this._updateTitle);this.watch("value",this._updateValue);this.watch("feature",this._updateFeature)},startup:function(){this.inherited(arguments);var a=new k({interactionMode:"indicator",noChange:!0,value:this.maxDataValue,width:20,offset:65,color:[204,204,204,1],title:"value",hideValue:!0,duration:100}),c=new k({interactionMode:"indicator",noChange:!1,value:this.value,
width:20,offset:65,color:this.color,title:"value",hideValue:!0,onDragMove:"",duration:100});this.gaugeWidget=new t({background:[204,204,204,0],width:parseInt(this.gaugeNode.style.width),height:parseInt(this.gaugeNode.style.height)+10,cx:parseInt(this.gaugeNode.style.width)/2,cy:parseInt(this.gaugeNode.style.height),style:"position: absolute;",radius:parseInt(this.gaugeNode.style.width)/2,useTooltip:!1,ranges:[{low:0,high:this.maxDataValue,color:"rgba(255,0,0,0)"}],majorTicks:this._majorTicks,indicators:[a,
c]},f.create("div",null,this.gaugeNode));this.gaugeWidget.startup();this.gaugeWidget._handleMouseDownIndicator=function(){};this.valueNode=f.create("div",{innerHTML:"0"+this.unitLabel,style:{bottom:parseInt(this.gaugeNode.style.height)-(this.gaugeWidget.cy-20)+"px",color:"#000","font-family":"arial","font-size":"1em",left:"-1000px",position:"absolute"}},this.gaugeWidget.domNode);a=l.getContentBox(this.valueNode);g.set(this.valueNode,"left",this.gaugeWidget.cx+"px");g.set(this.valueNode,"marginLeft",
-a.w/2+"px");this.gaugeWidget.cx&&g.set(this.valueNode,"marginBottom",-a.h/2+"px");this.layer&&this._connectMouseOver()},destroy:function(){this._mouseOverHandler&&h.disconnect(this._mouseOverHandler);this.gaugeWidget.destroy();f.empty(this.domNode)},_connectMouseOver:function(){this._mouseOverHandler=h.connect(this.layer,"onMouseOver",e.hitch(this,function(a){this.set("feature",a)}))},_formatValue:function(a){"percentage"===this.dataFormat&&(a=Math.round(a/this.maxDataValue*100));return m.format(a,
this.numberFormat)},_updateCaption:function(a,c,b){this.captionNode.innerHTML=b},_updateTitle:function(a,c,b){this.titleNode.innerHTML=b},_updateValue:function(a,c,b){a=this._formatValue(b);this.valueNode.innerHTML=a+this.unitLabel;"percentage"===this.dataFormat?this.gaugeWidget.indicators[1].update(parseInt(a)):this.gaugeWidget.indicators[1].update(parseInt(b))},_updateDataLabel:function(a,c,b){this.dataLabelNode.innerHTML=b},_updateFeature:function(a,c,b){!b||b.hasOwnPropety&&!b.hasOwnProperty("graphic")&&
"esri.Graphic"==!b.declaredClass?console.log("Gauge Dijit:  a graphic is required to update the gauge."):(this.feature=b.graphic||b,this.set("value",this.feature.attributes[this.dataField]||0),this.set("dataLabel",this.feature.attributes[this.dataLabelField]||this.noDataLabel))}});n("extend-esri")&&e.setObject("dijit.Gauge",d,u);return d});