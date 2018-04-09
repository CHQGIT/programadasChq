// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/geomsync","require exports ../../geometry/Geometry ../../geometry/Polygon ../../geometry/Polyline ../../geometry/Point ../../geometry/Extent ../../geometry/Multipoint ../../geometry/jsonUtils ./centroid ../languageUtils ../kernel ../../kernel".split(" "),function(B,t,h,p,q,u,r,x,v,y,c,l,z){function m(c){return w?c.clone():v.fromJson(c.toJson())}function A(c){return 0===z.version.indexOf("4.")?p.fromExtent(c):new p({spatialReference:c.spatialReference,rings:[[[c.xmin,
c.ymin],[c.xmin,c.ymax],[c.xmax,c.ymax],[c.xmax,c.ymin],[c.xmin,c.ymin]]]})}Object.defineProperty(t,"__esModule",{value:!0});var g=null,w=0===z.version.indexOf("4.");t.setGeometryEngine=function(c){g=c};t.registerFunctions=function(e,f){function n(d){c.pcCheck(d,2,2);if(!(d[0]instanceof h&&d[1]instanceof h||d[0]instanceof h&&null===d[1]||d[1]instanceof h&&null===d[0]||null===d[0]&&null===d[1]))throw Error("Illegal Argument");}e.disjoint=function(c,b){return f(c,b,function(k,c,a){n(a);return null===
a[0]||null===a[1]?!0:g.disjoint(a[0],a[1])})};e.intersects=function(c,b){return f(c,b,function(k,c,a){n(a);return null===a[0]||null===a[1]?!1:g.intersects(a[0],a[1])})};e.touches=function(c,b){return f(c,b,function(k,c,a){n(a);return null===a[0]||null===a[1]?!1:g.touches(a[0],a[1])})};e.crosses=function(c,b){return f(c,b,function(k,c,a){n(a);return null===a[0]||null===a[1]?!1:g.crosses(a[0],a[1])})};e.within=function(c,b){return f(c,b,function(k,c,a){n(a);return null===a[0]||null===a[1]?!1:g.within(a[0],
a[1])})};e.contains=function(c,b){return f(c,b,function(c,d,a){n(a);return null===a[0]||null===a[1]?!1:g.contains(a[0],a[1])})};e.overlaps=function(c,b){return f(c,b,function(c,d,a){n(a);return null===a[0]||null===a[1]?!1:g.overlaps(a[0],a[1])})};e.equals=function(d,b){return f(d,b,function(k,d,a){c.pcCheck(a,2,2);return a[0]===a[1]?!0:a[0]instanceof h&&a[1]instanceof h?g.equals(a[0],a[1]):c.isDate(a[0])&&c.isDate(a[1])?a[0].getTime()===a[1].getTime():!1})};e.relate=function(d,b){return f(d,b,function(k,
d,a){c.pcCheck(a,3,3);if(a[0]instanceof h&&a[1]instanceof h)return g.relate(a[0],a[1],c.toString(a[2]));if(a[0]instanceof h&&null===a[1]||a[1]instanceof h&&null===a[0]||null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})};e.intersection=function(c,b){return f(c,b,function(c,d,a){n(a);return null===a[0]||null===a[1]?null:g.intersect(a[0],a[1])})};e.union=function(d,b){return f(d,b,function(k,b,a){k=[];if(0===a.length)throw Error("Function called with wrong number of Parameters");if(1===
a.length)if(c.isArray(a[0]))for(b=0;b<a[0].length;b++){if(null!==a[0][b])if(a[0][b]instanceof h)k.push(a[0][b]);else throw Error("Illegal Argument");}else if(c.isImmutableArray(a[0]))for(a=a[0].toArray(),b=0;b<a.length;b++){if(null!==a[b])if(a[b]instanceof h)k.push(a[b]);else throw Error("Illegal Argument");}else{if(a[0]instanceof h)return c.fixSpatialReference(m(a[0]),d.spatialReference);if(null===a[0])return null;throw Error("Illegal Argument");}else for(b=0;b<a.length;b++)if(null!==a[b])if(a[b]instanceof
h)k.push(a[b]);else throw Error("Illegal Argument");return 0===k.length?null:g.union(k)})};e.difference=function(c,b){return f(c,b,function(c,b,a){n(a);return null!==a[0]&&null===a[1]?m(a[0]):null===a[0]?null:g.difference(a[0],a[1])})};e.symmetricdifference=function(c,b){return f(c,b,function(c,b,a){n(a);return null===a[0]&&null===a[1]?null:null===a[0]?m(a[1]):null===a[1]?m(a[0]):g.symmetricDifference(a[0],a[1])})};e.clip=function(d,b){return f(d,b,function(k,b,a){c.pcCheck(a,2,2);if(!(a[1]instanceof
r)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return null;if(!(a[0]instanceof h))throw Error("Illegal Argument");return null===a[1]?null:g.clip(a[0],a[1])})};e.cut=function(d,b){return f(d,b,function(k,b,a){c.pcCheck(a,2,2);if(!(a[1]instanceof q)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return[];if(!(a[0]instanceof h))throw Error("Illegal Argument");return null===a[1]?[m(a[0])]:g.cut(a[0],a[1])})};e.area=function(d,b){return f(d,b,function(k,b,a){c.pcCheck(a,1,
2);if(null===a[0])return 0;if(!(a[0]instanceof h))throw Error("Illegal Argument");return g.planarArea(a[0],l.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)))})};e.areageodetic=function(d,b){return f(d,b,function(k,b,a){c.pcCheck(a,1,2);if(null===a[0])return 0;if(!(a[0]instanceof h))throw Error("Illegal Argument");return g.geodesicArea(a[0],l.convertSquareUnitsToCode(c.defaultUndefined(a[1],-1)))})};e.length=function(d,b){return f(d,b,function(k,b,a){c.pcCheck(a,1,2);if(null===a[0])return 0;
if(!(a[0]instanceof h))throw Error("Illegal Argument");return g.planarLength(a[0],l.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)))})};e.lengthgeodetic=function(d,b){return f(d,b,function(k,b,a){c.pcCheck(a,1,2);if(null===a[0])return 0;if(!(a[0]instanceof h))throw Error("Illegal Argument");return g.geodesicLength(a[0],l.convertLinearUnitsToCode(c.defaultUndefined(a[1],-1)))})};e.distance=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,2,3);if(!(a[0]instanceof h))throw Error("Illegal Argument");
if(!(a[1]instanceof h))throw Error("Illegal Argument");return g.distance(a[0],a[1],l.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})};e.densify=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof h))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");if(0>=b)throw Error("Illegal Argument");return a[0]instanceof p||a[0]instanceof q?g.densify(a[0],b,l.convertLinearUnitsToCode(c.defaultUndefined(a[2],
-1))):a[0]instanceof r?g.densify(A(a[0]),b,l.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]})};e.densifygeodetic=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof h))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");if(0>=b)throw Error("Illegal Argument");return a[0]instanceof p||a[0]instanceof q?g.geodesicDensify(a[0],b,l.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]instanceof
r?g.geodesicDensify(A(a[0]),b,l.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1))):a[0]})};e.generalize=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,2,4);if(null===a[0])return null;if(!(a[0]instanceof h))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return g.generalize(a[0],b,c.toBoolean(c.defaultUndefined(a[2],!0)),l.convertLinearUnitsToCode(c.defaultUndefined(a[3],-1)))})};e.buffer=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,
2,3);if(null===a[0])return null;if(!(a[0]instanceof h))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return 0===b?m(a[0]):g.buffer(a[0],b,l.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})};e.buffergeodetic=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof h))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return 0===b?m(a[0]):g.geodesicBuffer(a[0],
b,l.convertLinearUnitsToCode(c.defaultUndefined(a[2],-1)))})};e.offset=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,2,6);if(null===a[0])return null;if(!(a[0]instanceof p||a[0]instanceof q))throw Error("Illegal Argument");b=c.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");d=c.toNumber(c.defaultUndefined(a[4],10));if(isNaN(d))throw Error("Illegal Argument");var k=c.toNumber(c.defaultUndefined(a[5],0));if(isNaN(k))throw Error("Illegal Argument");return g.offset(a[0],b,l.convertLinearUnitsToCode(c.defaultUndefined(a[2],
-1)),c.toString(c.defaultUndefined(a[3],"round")).toLowerCase(),d,k)})};e.rotate=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,2,3);b=a[0];if(null===b)return null;if(!(b instanceof h))throw Error("Illegal Argument");b instanceof r&&(b=p.fromExtent(b));d=c.toNumber(a[1]);if(isNaN(d))throw Error("Illegal Argument");a=c.defaultUndefined(a[2],null);if(null===a)return g.rotate(b,d);if(a instanceof u)return g.rotate(b,d,a);throw Error("Illegal Argument");})};e.centroid=function(d,b){return f(d,
b,function(b,g,a){c.pcCheck(a,1,1);if(null===a[0])return null;if(!(a[0]instanceof h))throw Error("Illegal Argument");return a[0]instanceof u?c.fixSpatialReference(m(a[0]),d.spatialReference):a[0]instanceof p?w?a[0].centroid:a[0].getCentroid():a[0]instanceof q?y.centroidPolyline(a[0]):a[0]instanceof x?y.centroidMultiPoint(a[0]):a[0]instanceof r?w?a[0].center:a[0].getExtent().getCenter():null})};e.multiparttosinglepart=function(d,b){return f(d,b,function(b,e,a){c.pcCheck(a,1,1);e=[];if(null===a[0])return null;
if(!(a[0]instanceof h))throw Error("Illegal Argument");if(a[0]instanceof u||a[0]instanceof r)return[c.fixSpatialReference(m(a[0]),d.spatialReference)];b=g.simplify(a[0]);if(b instanceof p){e=[];var f=[];for(a=0;a<b.rings.length;a++)if(b.isClockwise(b.rings[a])){var k=v.fromJson({rings:[b.rings[a]],hasZ:b.hasZ,hasM:b.hasM,spatialReference:b.spatialReference.toJson()});e.push(k)}else f.push({ring:b.rings[a],pt:b.getPoint(a,0)});for(b=0;b<f.length;b++)for(a=0;a<e.length;a++)if(e[a].contains(f[b].pt)){e[a].addRing(f[b].ring);
break}return e}if(b instanceof q){e=[];for(a=0;a<b.paths.length;a++)f=v.fromJson({paths:[b.paths[a]],hasZ:b.hasZ,hasM:b.hasM,spatialReference:b.spatialReference.toJson()}),e.push(f);return e}if(a[0]instanceof x){b=c.fixSpatialReference(m(a[0]),d.spatialReference);for(a=0;a<b.points.length;a++)e.push(b.getPoint(a));return e}return null})};e.issimple=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,1,1);if(null===a[0])return!0;if(a[0]instanceof h)return g.isSimple(a[0]);throw Error("Illegal Argument");
})};e.simplify=function(d,b){return f(d,b,function(b,d,a){c.pcCheck(a,1,1);if(null===a[0])return null;if(a[0]instanceof h)return g.simplify(a[0]);throw Error("Illegal Argument");})}}});