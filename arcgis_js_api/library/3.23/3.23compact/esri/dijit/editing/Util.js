// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/Util",["dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel"],function(k,d,l,m){var h={},h={findFeatures:function(c,a,b){var n=a.objectIdField;a=d.filter(a.graphics,function(a){return d.some(c,function(b){return a.attributes[n]===b.objectId})});if(b)b(a);else return a},getSelection:function(c){var a=[];d.forEach(c,function(b){b=b.getSelectedFeatures();d.forEach(b,function(b){a.push(b)})});return a},sortFeaturesById:function(c,a){var b=d.map(c,function(a){return a.featureLayer});
a.sort(function(a,c){var e=a.getLayer(),g=c.getLayer();if(!e)return-1;if(!g)return 1;var f=d.indexOf(b,e),g=d.indexOf(b,g),f=f-g;f||(e=e.objectIdField,f=a.attributes[e]-c.attributes[e]);return f});return a}};l("extend-esri")&&k.setObject("dijit.editing.Util.LayerHelper",h,m);return h});