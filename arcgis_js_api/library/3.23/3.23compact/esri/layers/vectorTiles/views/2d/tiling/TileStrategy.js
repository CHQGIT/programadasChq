// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/tiling/TileStrategy",["require","exports","../../../core/tsSupport/extendsHelper","./TileKey"],function(y,z,A,p){var k=new p(0,0,0,0),d=new Map,h=[],l=[];return function(){function g(a){this._previousResolution=Number.POSITIVE_INFINITY;this.cachePolicy="keep";this.tileIndex=new Map;this.tiles=[];this.acquireTile=a.acquireTile;this.releaseTile=a.releaseTile;this.tileInfoView=a.tileInfoView;a.cachePolicy&&(this.cachePolicy=a.cachePolicy)}g.prototype.destroy=
function(){this.tileIndex.clear()};g.prototype.update=function(a){var q=this,b=this.tileIndex,f=this.tileInfoView.getTileCoverage(a.state);if(f){var e=f.spans,g=f.lodInfo,t=g.level,c=a.state.resolution,m=!a.stationary&&c>this._previousResolution;this._previousResolution=c;b.forEach(function(a){return a.visible=!0});this.tiles.length=0;d.clear();var u=0,v=0;if(0<e.length)for(var r=0;r<e.length;r++){a=e[r];for(var p=a.row,w=a.colTo,n=a.colFrom;n<=w;n++)u++,a=k.set(t,p,g.normalizeCol(n),g.getWorldForColumn(n)).id,
b.has(a)?(c=b.get(a),c.attached?(d.set(a,c),v++):c.attached||m||this._addParentTile(a,d)):(c=this.acquireTile(k),this.tileIndex.set(a,c),m||this._addParentTile(a,d))}var x=v===u;l.length=0;h.length=0;b.forEach(function(a,b){k.set(b);if(!d.has(b)){var c=q.tileInfoView.intersects(f,k);!c||!m&&x?"purge"===q.cachePolicy?h.push(b):(k.level>t||!c)&&h.push(b):a.attached?l.push(b):m&&h.push(b)}});for(e=0;e<l.length;e++)a=l[e],(c=b.get(a))&&c.attached&&d.set(a,c);for(e=0;e<h.length;e++)a=h[e],c=b.get(a),this.releaseTile(c),
b["delete"](a);d.forEach(function(a){return q.tiles.push(a)});b.forEach(function(a){d.has(a.key.id)||(a.visible=!1)});l.length=0;h.length=0;d.clear()}};g.prototype.clear=function(){var a=this,d=this.tileIndex;d.forEach(function(b){a.releaseTile(b)});d.clear()};g.prototype._addParentTile=function(a,d){for(var b=a,f=null;;){b=this.tileInfoView.getTileParentId(b);if(!b)break;if(this.tileIndex.has(b)&&(f=this.tileIndex.get(b))&&f.attached){d.has(f.key.id)||d.set(f.key.id,f);break}}};return g}()});