// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/citation/templates/CitationElements_Full.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n  \r\n    \x3c!-- titles and dates --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.citation.section.titlesAndDates}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'resTitle\',minOccurs:1,label:\'${i18nArcGIS.citation.resTitle}\'"\x3e\r\n      \x3c/div\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'resAltTitle\',minOccurs:0,label:\'${i18nArcGIS.citation.resAltTitle}\'"\x3e\r\n      \x3c/div\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'collTitle\',minOccurs:0,label:\'${i18nArcGIS.citation.collTitle}\'"\x3e\r\n      \x3c/div\x3e  \r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'date\',minOccurs:1,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'createDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.createDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'pubDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.pubDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'reviseDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.reviseDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'notavailDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.notavailDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'inforceDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.inforceDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'adoptDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.adoptDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'deprecDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.deprecDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/CitationDateElement"\r\n          data-dojo-props\x3d"target:\'supersDate\',minOccurs:0,label:\'${i18nArcGIS.citation.date.supersDate}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputCitationDate"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e      \r\n      \x3c/div\x3e  \r\n      \r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- online resource --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.citation.section.links}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'citOnlineRes\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.cntOnlineRes.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/OnlineResourceElements"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- identifiers --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.citation.section.identifiers}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'isbn\',minOccurs:0,label:\'${i18nArcGIS.citation.isbn}\'"\x3e\r\n      \x3c/div\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'issn\',minOccurs:0,label:\'${i18nArcGIS.citation.issn}\'"\x3e\r\n      \x3c/div\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'citId\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.citation.citId.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'identCode\',minOccurs:1,label:\'${i18nArcGIS.citation.citId.identCode}\'"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'identAuth\',minOccurs:0,label:\'${i18nArcGIS.citation.citId.identAuth}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'resTitle\',minOccurs:1,label:\'${i18nArcGIS.citation.resTitle}\'"\x3e\r\n          \x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n            data-dojo-props\x3d"target:\'date\',minOccurs:1,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n              data-dojo-props\x3d"target:\'pubDate\',minOccurs:1,label:\'${i18nArcGIS.citation.date.pubDate}\'"\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'resEd\',minOccurs:0,label:\'${i18nArcGIS.citation.resEd}\'"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'resEdDate\',minOccurs:0,label:\'${i18nArcGIS.citation.resEdDate}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:false"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'datasetSeries\',minOccurs:0,label:\'${i18nArcGIS.citation.section.series}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'seriesName\',minOccurs:0,label:\'${i18nArcGIS.citation.datasetSeries.seriesName}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'issId\',minOccurs:0,label:\'${i18nArcGIS.citation.datasetSeries.issId}\'"\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'artPage\',minOccurs:0,label:\'${i18nArcGIS.citation.datasetSeries.artPage}\'"\x3e\r\n        \x3c/div\x3e  \r\n      \x3c/div\x3e  \r\n    \x3c/div\x3e\r\n  \r\n    \x3c!-- presentation form --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.citation.section.presentation}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'presForm\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.citation.section.presentation}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'PresFormCd\',minOccurs:0,label:\'${i18nArcGIS.codelist.CI_PresentationFormCode}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n            data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n              data-dojo-props\x3d"codelistType:\'CI_PresentationFormCode\'"\x3e\r\n            \x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n          data-dojo-props\x3d"target:\'fgdcGeoform\',minOccurs:0,label:\'${i18nArcGIS.codelist.PresentationForm}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n            data-dojo-props\x3d"codelistType:\'PresentationForm\'"\x3e\r\n          \x3c/div\x3e          \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e        \r\n    \x3c/div\x3e  \r\n\r\n    \x3c!-- other details --\x3e    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.citation.section.other}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n        data-dojo-props\x3d"target:\'otherCitDet\',minOccurs:0,label:\'${i18nArcGIS.citation.otherCitDet}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3c!-- citation contact --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.contact.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'citRespParty\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.citation.contactCaption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/ContactElements"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e    \r\n  \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/citation/CitationElements_Full","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/CitationElements_Full.html ../form/CitationDateElement ../form/InputCitationDate ./ContactElements ./OnlineResourceElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.citation.CitationElements_Full",a,d);return a});