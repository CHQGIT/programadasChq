// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/builder/_ChartDataUtil",["../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/ObjectUtil","../ChartTypes"],function(g,k,d){d={formatNumber:function(a,b,c,d){a=k.formatNumber(a||0,{places:b.dataLabelsDecimals||0,preserveTrailingZeroes:!0});c&&(a+="%");return a},undefinedToDefault:function(a,b){return void 0===a?b:a}};var l=[1E3,1200,500,150,70,900,110,300,80,200,1700],h=[1,.7,1.2,
.5,1.1,1.3,.3,2,.4];d.getPreviewValue=function(a,b,c,d,e,m,f,n,p,q){e.dynamicReportInfo?(b=n?q.getFieldValueAt(a.fieldInfo.name,p):g.getFieldDataValue(a.fieldInfo,e.dynamicReportInfo.fieldData,m),b=k.parseNumber(b),isNaN(b)&&console.log("Can't render chart value for field \x3d\x3e "+(a.fieldInfo?a.fieldInfo.name:"missing field"))):(f=f||l,b=f[b%f.length],h[c]||(h[c]=.5+(.3-.6*Math.random())),c=b*=h[c],a=a.fieldInfo&&a.fieldInfo.statefulName&&a.fieldInfo.statefulName.charAt(0),"p"===a&&(c=Number((c/
25).toFixed(1))),"i"===a&&(c=Number((c/15).toFixed(1))),b=c);return b};d.getCaptionValue=function(a,b){return a.captionFieldInfo?b.dynamicReportInfo?g.getFieldDataValue(a.captionFieldInfo,b.dynamicReportInfo.fieldData):g.renderFieldInfoInTableCell(a.captionFieldInfo):""};d.getChartData=function(a,b){var c=l.slice();c.length=Math.min(c.length,b);var d=-Infinity;c.forEach(function(a){d=Math.max(d,a)});var e=1.1*a.max/d;return c=c.map(function(a){return a*e})};return d});