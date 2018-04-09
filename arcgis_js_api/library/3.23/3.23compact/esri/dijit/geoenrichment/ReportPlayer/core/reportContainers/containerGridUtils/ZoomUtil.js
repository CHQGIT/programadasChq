// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/containerGridUtils/ZoomUtil",["dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","dojo/sniff"],function(k,l,f,g){function e(a){if(a.__zoomInfo&&1!==a.__zoomInfo.scale){var b=a.__zoomInfo;b.isFitPageScale=b.scale===c._getFitPageScale(b.originalW,b.originalH,a);b.isFitPageWidthScale=b.scale===c._getFitPageWidthScale(b.originalW,a);return b}return a.__zoomInfo={scale:1,originalW:f.get(a.mainContainer,"width"),originalH:f.get(a.mainContainer,
"height"),isFitPageScale:!1,isFitPageWidthScale:!1}}function d(a,b){a.__zoomInfo=b;var h=a.scalableContainer.style;b&&(b.scale=Math.max(.2,Math.min(2,b.scale)));var c=b&&b.scale||1,e=1!==c?"0% 0%":"",c=1!==c?"scale("+c+")":"",d=g("webkit")?"webkitTransformOrigin":"transformOrigin",f=g("webkit")?"webkitTransform":"transform";h[d]=e;h[f]=c;a._syncFillerContainer();a.onZoomChanged()}var c={getZoomInfo:function(a){return k.mixin({},e(a))},setZoomInfo:function(a,b){d(a,b)},zoomIn:function(a){var b=e(a);
b.scale+=.2;d(a,b)},zoomOut:function(a){var b=e(a);b.scale-=.2;d(a,b)},zoomToFitPage:function(a){c.reset(a);var b=e(a);b.scale=c._getFitPageScale(b.originalW,b.originalH,a);d(a,b)},zoomToFitPageWidth:function(a){c.reset(a);var b=e(a);b.scale=c._getFitPageWidthScale(b.originalW,a);d(a,b)},_getFitPageScale:function(a,b,c){c=c.getCurrentPageDim();return Math.min(a/(c.w+30),b/(c.h+30))},_getFitPageWidthScale:function(a,b){return a/(b.getCurrentPageDim().w+30)},setZoomPercent:function(a,b){var c=e(a);
c.scale=b/100;d(a,c)},setBestZoom:function(a){var b=e(a),d=a.getCurrentPageDim();(b.originalW<d.w||b.originalH<d.h)&&c.zoomToFitPage(a)},reset:function(a){d(a,null)}};return c});