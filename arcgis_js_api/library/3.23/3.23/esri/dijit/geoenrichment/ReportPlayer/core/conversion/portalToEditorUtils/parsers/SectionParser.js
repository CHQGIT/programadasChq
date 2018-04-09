// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/SectionParser","dojo/_base/lang esri/dijit/geoenrichment/utils/JsonXmlConverter esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil ../../../supportClasses/DocumentOptions ../../ConversionUtil ../../../sections/SectionTypes ./ImageParser ./AlignParser".split(" "),function(E,z,F,G,f,h,H,I){function J(a,b,c,d,t){if(a.spannedWidths||a.spannedHeights){var h=a.spannedWidths?
a.spannedWidths.split(";").map(function(a){return f.ptToPx(a)}):[f.ptToPx(a.width)];a=a.spannedHeights?a.spannedHeights.split(";").map(function(a){return f.ptToPx(a)}):[f.ptToPx(a.height)];for(var l=0;l<h.length;l++)for(var p=0;p<a.length;p++){var e=c[t+l],u=b[d+p],e=u.style.fields[e.field]=u.style.fields[e.field]||{};e.width=h[l];e.height=a[p]}}}var t={},K={getElement:function(a,b){var c=f.parseStyleString(a.attributes.style);return{id:"hr",style:{height:f.ptToPx(a.attributes.height),backgroundColor:c.backgroundColor}}}},
v={getElement:function(a,b){var c=f.pxToPt(G.getPageBox(b.templateJson.documentOptions).contentW);if(a.attributes.widths&&Number(a.attributes.width)>c){var d=f.splitTrim(a.attributes.widths,";",!0),C=Number(a.attributes.width)-c,D=Number(d[d.length-1]);D>C&&(d[d.length-1]=D-C,a.attributes.widths=d.join(";"),a.attributes.width=c)}var l=0,p=a.attributes.widths?f.splitTrim(a.attributes.widths,";",!0).map(function(a){return{field:"field"+l++,style:{width:f.ptToPx(a)}}}):[],e=Number(a.attributes.fixedColumns)||
0,u=Number(a.attributes.dynamicColumns)||0,A={},k=[],w,x,y;(function(){a.tags&&(1.1<=b.revisionVersion?a.tags.forEach(function(a){if("tr"===a.name)k.push(a);else switch(a.attributes.type){case h.TABLE_BACKGROUND:w=a;break;case h.TABLE_FOREGROUND:x=a;break;case h.TABLE_FLOATING_PANELS:y=a}}):a.tags.forEach(function(a){"tr"===a.name?k.push(a):"background"===a.name?w=a:"foreground"===a.name?x=a:"floatingElements"===a.name&&(y=a)}))})();var B=k&&k.map(function(){return{style:{fields:{}},fieldInfos:{}}});
k&&k.forEach(function(a,c){var d=B[c];a.attributes&&a.attributes.height&&(d.style.height=f.ptToPx(a.attributes.height));var n=0;if(u&&a.tags&&a.tags.length>e){var h=a.tags.slice(0,e),l=a.tags.slice(e,e+u),k=Math.round((p.length-h.length)/l.length);a.tags=h;for(h=0;h<k;h++)a.tags=a.tags.concat(l)}a.tags&&a.tags.forEach(function(a){function f(a){a=a.tags&&1===a.tags.length&&a.tags[0];if(!a||!a.tags)return null;"b"===a.name?l.fontWeight="bold":"i"===a.name?l.fontStyle="italic":"u"===a.name&&(l.textDecoration=
"underline");return"b"===a.name||"i"===a.name||"u"===a.name?f(a)||{tag:a.tags[0],parentTag:a}:null}function h(a){z.isRichText(a)?d.fieldInfos[e]=F.createFieldInfoFromRichText(a):d[e]=z.unrichHTML(a)}if(1<=b.revisionVersion)for(;A[n+"_"+c];)n++;if(p[n]){var e=p[n].field,g=a.attributes||{},l=d.style.fields[e]={};t.parseTableCellAttributes(g,l,b);g.width&&J(g,B,p,c,n);var q=Number(g.colspan),g=Number(g.rowspan);q&&(d.columnSpans=d.columnSpans||{},d.columnSpans[e]=q);g&&(d.rowSpans=d.rowSpans||{},d.rowSpans[e]=
g);if(1<q||1<g)for(var q=q||1,g=g||1,m=n;m<n+q;m++)for(var k=c;k<c+g;k++)if(m!==n||k!==c)A[m+"_"+k]=!0;m=function(a){var d,b,c;if(a.tags&&a.tags.length)if(c=a.tags.filter(function(a){return"br"!==a.name}),(b=c[0])&&"trigger"===b.name&&c[1]&&"d"===c[1].name)d=b,b=c[1];else{var e=f(a);b=e&&e.tag||c[0];a=e&&e.parentTag||a}return{firstTag:b,triggerTag:d,parentTag:a,hasMultipleTags:c&&1<c.length}}(a);a=m.firstTag;var q=m.parentTag,g=m.triggerTag,m=m.hasMultipleTags,r;m&&!g&&(k=b.parsers.getParser("field").parseRichTextTag(q,
b))&&(d.fieldInfos[e]=k,r=!0);if(a&&!r)if(g=b.parsers.getParser("field").parseField(a,q,g,b),"number"===typeof g)d[e]=g+"",r=!0;else if(g)d.fieldInfos[e]=g,r=!0;else if("chart"===a.name)r=!0;else if("img"===a.name)r=!0;else if("text"===a.name)d[e]=a.attributes.name,r=!0;else if("a"===a.name&&a.tags&&"#text"===a.tags[0].name){if(g=a.attributes.href)d.urls=d.urls||{},d.urls[e]=g,d[e]=a.tags[0].text,r=!0}else"#text"!==a.name||m||(h(a.text),r=!0);r||h(z.getInnerHTML(q));for(n++;A[n+"_"+c];)n++}})});c=
{id:"table",backgroundSectionJson:w&&v._parseTableBackgroundForeground(w,b),foregroundSectionJson:x&&v._parseTableBackgroundForeground(x,b),floatingTablesSectionJson:y&&v._parseFloatingPanels(y,b),data:{columns:p,data:B||[]},style:{width:f.ptToPx(a.attributes.width),left:f.ptToPx(a.attributes.left),spaceBefore:f.ptToPx(a.attributes.spaceBefore),spaceAfter:f.ptToPx(a.attributes.spaceAfter)},attributes:{}};e&&(c.attributes.fixedColumns=e);u&&(c.attributes.dynamicColumns=u);a.attributes.fixedRows&&(c.attributes.fixedRows=
Number(a.attributes.fixedRows)||0);a.attributes.dynamicRows&&(c.attributes.dynamicRows=Number(a.attributes.dynamicRows)||0);return c},_parseTableBackgroundForeground:function(a,b){a.attributes=a.attributes||{};a.attributes.type=h.DETAILS;return t.parseSection(a,b)},_parseFloatingPanels:function(a,b){a.attributes=a.attributes||{};a.attributes.type=h.DETAILS;return t.parseSection(a,b)}};t.parseTableCellAttributes=function(a,b,c){c=c.tableDefaultStyles;b=b||{};a.overrideStyle&&(b.overrideStyle=a.overrideStyle);
a.pad&&(b.horizontalPadding=f.ptToPx(a.pad));a.angle&&(b.angle=Number(a.angle)||0);I.parseAlign(a,b);a.width&&(b.width=f.ptToPx(a.width));a.height&&(b.height=f.ptToPx(a.height));E.mixin(b,f.ptToPxObj(f.parseStyleString(a.style)));if(b.overrideStyle&&c){a=c.getStyle(b.overrideStyle);for(var d in a)delete b[d]}return b};t.parseSection=function(a,b){var c={type:a.attributes.type,stack:[]};c.type||console.log(Error("Section type is not supported!"));a.tags&&a.tags.forEach(function(a){a.attributes=a.attributes||
{};"img"===a.name||"mapImage"===a.name?c.stack.push(H.getElement(a,b)):"hr"===a.name?c.stack.push(K.getElement(a,b)):"pageBreak"===a.name?c.stack.push({id:"pageBreak"}):"table"===a.name&&c.stack.push(v.getElement(a,b))});return c};t.parseTable=function(a,b){return v.getElement(a,b)};return t});