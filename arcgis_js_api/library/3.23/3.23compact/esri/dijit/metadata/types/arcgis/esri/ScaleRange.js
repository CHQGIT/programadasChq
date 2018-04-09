// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/esri/templates/ScaleRange.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- scale range --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'scaleRange\',minOccurs:0,label:\'${i18nArcGIS.scaleRange.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'maxScale\',minOccurs:0,label:\'${i18nArcGIS.scaleRange.maxScale}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n        data-dojo-props\x3d"minValue:0,minValueIsExclusive:true,integerOnly:true,hint:\'${i18nArcGIS.hints.maxScale}\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'minScale\',minOccurs:0,label:\'${i18nArcGIS.scaleRange.minScale}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n        data-dojo-props\x3d"minValue:0,minValueIsExclusive:true,integerOnly:true,hint:\'${i18nArcGIS.hints.minScale}\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/esri/ScaleRange","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/ScaleRange.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.esri.ScaleRange",a,d);return a});