// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/geometry/Point","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ../SpatialReference ./Geometry ../srUtils".split(" "),function(d,e,m,k,l,q,n,p){function f(a,b){89.99999<b?b=89.99999:-89.99999>b&&(b=-89.99999);var c=.017453292519943*b;return[111319.49079327169*a,3189068.5*Math.log((1+Math.sin(c))/(1-Math.sin(c)))]}function g(a,b,c){a=a/6378137*57.29577951308232;return c?[a,57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)))]:[a-360*Math.floor((a+180)/
360),57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)))]}var h={type:"point",x:0,y:0};d=d(n,{declaredClass:"esri.geometry.Point",constructor:function(a,b,c){e.mixin(this,h);e.isArray(a)?(this.x=a[0],this.y=a[1],this.spatialReference=b):e.isObject(a)?(e.mixin(this,a),l.isDefined(this.latitude)&&(this.y=this.latitude),l.isDefined(this.longitude)&&(this.x=this.longitude),this.spatialReference&&(this.spatialReference=p.createSpatialReference(this.spatialReference))):(this.x=a,
this.y=b,this.spatialReference=c);this.verifySR()},offset:function(a,b){return new this.constructor(this.x+a,this.y+b,this.spatialReference)},setX:function(a){this.x=a;this.clearCache();return this},setY:function(a){this.y=a;this.clearCache();return this},setLongitude:function(a){var b=this.spatialReference;b&&(b._isWebMercator()?this.setX(f(a,this.y)[0]):4326===b.wkid&&this.setX(a));return this},setLatitude:function(a){var b=this.spatialReference;b&&(b._isWebMercator()?this.setY(f(this.x,a)[1]):
4326===b.wkid&&this.setY(a));return this},getLongitude:function(){var a=this.spatialReference,b;a&&(a._isWebMercator()?b=g(this.x,this.y)[0]:4326===a.wkid&&(b=this.x));return b},getLatitude:function(){var a=this.spatialReference,b;a&&(a._isWebMercator()?b=g(this.x,this.y)[1]:4326===a.wkid&&(b=this.y));return b},update:function(a,b){this.x=a;this.y=b;this.clearCache();return this},normalize:function(){var a=this.x,b=this.spatialReference;if(b){var c=b._getInfo();c&&(a=this._normalizeX(a,c))}return new this.constructor(a,
this.y,b)},_normalizeX:function(a,b){var c=b.valid[0],d=b.valid[1],e=2*d;a>d?(c=Math.ceil(Math.abs(a-d)/e),a-=c*e):a<c&&(c=Math.ceil(Math.abs(a-c)/e),a+=c*e);return a},toJson:function(){var a={x:this.x,y:this.y},b=this.spatialReference;b&&(a.spatialReference=b.toJson());return a}});d.lngLatToXY=f;d.xyToLngLat=g;d.defaultProps=h;d.metersPerDegree=6378137*Math.PI/180;m("extend-esri")&&(e.setObject("geometry.Point",d,k),k.geometry.defaultPoint=h);return d});