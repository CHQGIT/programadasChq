// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/MapBuilder","dojo/_base/Color dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/Evented dojo/when dojo/dom-construct dojo/dom-style dojo/dom-geometry esri/graphic esri/layers/GraphicsLayer esri/arcgis/utils esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/graphicsUtils ./WebMapsUtil ../../../dataProviders/supportClasses/AreaDataUtil esri/dijit/geoenrichment/utils/ImageUtil esri/dijit/geoenrichment/utils/UrlUtil".split(" "),
function(l,c,t,m,u,v,h,f,w,x,y,z,p,A,n,B,q,C,D,E){var F=c(u,{_mapImageInfo:null,_mapImage:null,loaded:!1,error:!1,constructor:function(a,b){this._mapImageInfo=a;this._mapImage=h.create("img",{"class":"esriGEAbsoluteStretched"},b);f.set(this._mapImage,{width:f.get(b,"width")+"px",height:f.get(b,"height")+"px"});f.set(b,"position","relative")},load:function(){function a(a){b.error=!0;a&&console.log(a);b.destroy();e.resolve()}var b=this,e=new m;if(!this._mapImageInfo.url)return a(Error("No URL specified.")),
e.promise;this._mapImage.onload=function(){b.loaded=!0;e.resolve()};this._mapImage.onerror=a;this._mapImage.src=this._mapImageInfo.url;return e.promise},destroy:function(){h.destroy(this._mapImage)}});c=c(null,{_mapDivs:null,_mapDivId:0,_mapImageInfos:null,renderMapsFromCalculators:!1,constructor:function(a){t.mixin(this,a);this.reset()},setArcgisUrl:function(a){a&&(z.arcgisUrl=E.combine(a,"/sharing/rest/content/items"))},reset:function(){this._mapDivs={};this._mapImageInfos=null},collectAreaMaps:function(a){var b=
[];a=a||0;var e=this._mapDivs[a],c;for(c in e){var g=e[c];if(g.parentNode){var k=w.position(g);b.push({areaIndex:a,node:g,x:k.x,y:k.y,position:-1,map:g._map,itemId:g._itemId})}}b.sort(function(b,a){return b.x-a.x});b.sort(function(b,a){return b.y-a.y});b.forEach(function(b,a){b.position=a});return b},collectAllAreasMaps:function(){var a=[],b;for(b in this._mapDivs)a=a.concat(this.collectAreaMaps(b));return a},setFallbackMapImageInfos:function(a){a?(this._mapImageInfos={},a.forEach(function(b){var a=
b.areaIndex||0;(this._mapImageInfos[a]=this._mapImageInfos[a]||{})[b.itemId]=b},this)):this._mapImageInfos=null},createMap:function(a,b){function e(d){return q.createMap(d,a,{extent:B.graphicsExtent(b.features).expand(b.expandFactor||1.5),sliderPosition:!1===b.sliderPosition?"none":b.sliderPosition||"top-right",defaultBasemapId:b.defaultBasemapId}).then(function(a){return a&&a.map?c(a.map):(new m).reject(Error("Can't create a map."))})}function c(d){var r=new y;d.addLayer(r);b.features.forEach(function(a){var b=
a.getLayer(),d=b&&b.renderer&&b.renderer.getSymbol(a)||a.symbol,c=a.geometry;d||("point"===a.geometry.type?d=new p(p.STYLE_CIRCLE,20,new n(n.STYLE_SOLID,new l([255,255,255,.7]),2),new l([255,0,0,.7])):(d=new A,d.setOutline(new n(n.STYLE_SOLID,new l([255,0,0,1]),2)),d.setColor(new l([100,100,100,.25]))));c=new x(c,d,a.attributes);c.setInfoTemplate(b&&b.infoTemplate||a.infoTemplate);r.add(c)});void 0===a.__mapDivId&&(a.__mapDivId=f._mapDivId++);a._map=d;a._itemId=b.webMapId;(f._mapDivs[k]=f._mapDivs[k]||
{})[a.__mapDivId]=a;return d}function g(b){var c=b&&new F(b,a);return c&&c.load().then(function(){return c.loaded?c:null})}b=b||{};var k=b.areaIndex||0,f=this;if(this.renderMapsFromCalculators&&b.calculatorFieldName){var h=C.getAreaDataValue(b.calculatorFieldName,b.fieldData);if(h)return g({url:D.base64DataToDataURL(h)})}return v(q.getItem(b.webMapId),function(a){if(!a)return(new m).reject(Error("Can't load an item or the item is incorrect."));var b=new m;try{e(a).then(b.resolve,b.reject)}catch(G){b.reject(G)}return b.promise}).otherwise(function(){return g()})}});
c.EXPAND_FACTOR=1.5;return c});