// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/templates/XmlPane.html":'\x3cdiv class\x3d"gxeXmlPane"\x3e\r\n  \x3cdiv class\x3d"gxeMessage" data-dojo-attach-point\x3d"messageNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3ctextarea data-dojo-attach-point\x3d"textAreaNode"\x3e\x3c/textarea\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/XmlPane","dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/has ../base/Templated dojo/text!./templates/XmlPane.html dojo/i18n!../nls/i18nBase ../../../kernel".split(" "),function(b,d,c,e,f,g,h,k){b=b([f],{templateString:g,xmlString:null,xmlTitle:null,postCreate:function(){this.inherited(arguments)},setXml:function(a,b){"undefined"===typeof a?a=null:null!==a&&(a=d.trim(a),0===a.length&&(a=null));null===a?(c.set(this.textAreaNode,"display","none"),this.setNodeText(this.messageNode,
h.editor.noMetadata),c.set(this.messageNode,"display","")):(this.messageNode.innerHTML="",c.set(this.messageNode,"display","none"),c.set(this.textAreaNode,"display",""));this.xmlString=a;this.xmlTitle=b;this.textAreaNode.value=a}});e("extend-esri")&&d.setObject("dijit.metadata.editor.XmlPane",b,k);return b});