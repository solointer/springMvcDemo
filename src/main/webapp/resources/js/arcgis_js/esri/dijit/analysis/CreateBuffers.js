// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.12/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/CreateBuffers.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\n      \x3cdiv data-dojo-attach-point\x3d"_bufferToolContentTitle" class\x3d"analysisTitle"\x3e\n         \x3ctable class\x3d"esriFormTable" \x3e\n            \x3ctr\x3e\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"buffersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\n              \x3ctd class\x3d"esriAlignLeading"\x3e${i18n.createBuffers}\x3c/td\x3e\n              \x3ctd\x3e\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\n                    \x3c/div\x3e\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\n                    \x3c/div\x3e              \n                \x3c/div\x3e  \n              \x3c/td\x3e\n            \x3c/tr\x3e\n         \x3c/table\x3e\n      \x3c/div\x3e\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_bufferTable"\x3e\n       \x3ctbody\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"2" class\x3d"sectionHeader esriLeadingMargin1" data-dojo-attach-point\x3d"_bufferToolDescription" \x3e\n            \x3cdiv\x3e${i18n.bufferDefine}\x3c/div\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd class\x3d"longTextInput" style\x3d"padding-top:5px;"\x3e\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n            \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d""\x3e${i18n.sizeLabel}\x3c/label\x3e\n          \x3c/td\x3e\n          \x3ctd\x3e\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"BufferSize"\x3e\x3c/a\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"2"\x3e\n            \x3ctable\x3e\n              \x3ctr\x3e\n                \x3ctd\x3e\n                  \x3cdiv class\x3d"esriLeadingMargin4 bufferSelector selected" data-dojo-attach-point\x3d"_Distance" \x3e\n                    \x3cdiv class\x3d"bufferIcon bufferDistanceIcon"\x3e\x3c/div\x3e\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.distance}\x3c/label\x3e\x3c/div\x3e\n                  \x3c/div\x3e\n                \x3c/td\x3e\n                \x3ctd\x3e\n                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Attribute"\x3e\n                    \x3cdiv class\x3d"bufferIcon bufferAttributeIcon"\x3e\x3c/div\x3e\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.field}\x3c/label\x3e\x3c/div\x3e\n                  \x3c/div\x3e\n                \x3c/td\x3e\n              \x3c/tr\x3e\n            \x3c/table\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n         \x3ctd colspan\x3d"2"\x3e\n         \x3ctable style\x3d"width:99%;"\x3e\n          \x3ctr\x3e\n          \x3ctd style\x3d"width:45%;"\x3e\n            \x3cinput type\x3d"text" class\x3d"" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"intermediateChanges:true,value:\'1\',required:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_bufferDist" style\x3d"width:95%;"\x3e\x3c/input\x3e\n            \x3cselect class\x3d"" data-dojo-attach-point\x3d"_bufferDistAttribute" data-dojo-type\x3d"dijit/form/Select" style\x3d"display:none; width:95%;table-layout:fixed;"\x3e\x3c/select\x3e\n          \x3c/td\x3e\n          \x3ctd style\x3d"width:55%;"\x3e \n            \x3c!-- Default, Centimeters, DecimalDegrees, Feet, Inches, Kilometers, Meters, Miles, Millimeters, NauticalMiles, Points, Yards --\x3e\n            \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_bufferUnits" style\x3d"width:105%;table-layout:fixed;"\x3e\n              \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\n              \x3coption value\x3d"Yards"\x3e${i18n.yards}\x3c/option\x3e\n              \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\n              \x3coption type\x3d"separator"\x3e\x3c/option\x3e\n              \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\n              \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\n              \x3coption value\x3d"NauticalMiles"\x3e${i18n.nautMiles}\x3c/option\x3e\n            \x3c/select\x3e\n          \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd class\x3d"shortTextInput" colspan\x3d"2" align\x3d"center" data-dojo-attach-point\x3d"_sizeHelp"\x3e\n              \x3clabel class\x3d"esriSmallLabel"\x3e${i18n.sizeHelp}\x3c/label\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n         \x3c/table\x3e\n         \x3c/td\x3e\n        \x3c/tr\x3e\n\n        \x3ctr data-dojo-attach-point\x3d"_optionsRow"\x3e\n          \x3ctd colspan\x3d"2" style\x3d"padding:5px 0px;"\x3e\n            \x3cdiv class\x3d"optionsClose" style\x3d"width:99%" data-dojo-attach-point\x3d"_optionsDiv"\x3e\n              \x3cdiv class\x3d"dijitTreeExpando" data-dojo-attach-event\x3d"onclick:_handleOptionsBtnClick"\x3e\x3clabel class\x3d"esriLeadingMargin2 noWrapLabel"\x3e${i18n.optionsLabel}\x3c/label\x3e\x3c/div\x3e\n              \x3ca style\x3d"position:relative; top:-16px; left:1px; "href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_bufferOptionsHelpLink" esriHelpTopic\x3d"BufferOptionPoly"\x3e\x3c/a\x3e\n              \x3ctable class\x3d"esriFormTable optionsTable"\x3e\n                \x3ctbody\x3e\n\n                \x3ctr\x3e\n                  \x3ctd colspan\x3d"2" align\x3d""\x3e\n                    \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2"\x3e${i18n.typeLabel}\x3c/div\x3e\n                  \x3c/td\x3e\n                \x3c/tr\x3e \n\n                \x3ctr\x3e\n                  \x3ctd\x3e\n                    \x3ctable\x3e\n                      \x3ctr\x3e\n                        \x3ctd\x3e\n                          \x3cdiv class\x3d"esriLeadingMargin4 bufferSelector selected" data-dojo-attach-point\x3d"_Overlap"\x3e\n                            \x3cdiv class\x3d"bufferIcon bufferOverlapIcon"\x3e\x3c/div\x3e\n                            \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.overlap}\x3c/label\x3e\x3c/div\x3e\n                          \x3c/div\x3e\n                        \x3c/td\x3e\n                        \x3ctd\x3e\n                          \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Dissolve"\x3e\n                            \x3cdiv class\x3d"bufferIcon bufferDissolveIcon"\x3e\x3c/div\x3e\n                            \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.dissolve}\x3c/label\x3e\x3c/div\x3e\n                          \x3c/div\x3e\n                        \x3c/td\x3e\n                      \x3c/tr\x3e\n                    \x3c/table\x3e\n                  \x3c/td\x3e\n                \x3c/tr\x3e\n\n                \x3ctr\x3e\n                  \x3ctd colspan\x3d"2" align\x3d""\x3e\n                    \x3ctable data-dojo-attach-point\x3d"polygonTypes" style\x3d"display:none;"\x3e\n                      \x3ctr\x3e\n                        \x3ctd colspan\x3d"2" align\x3d""\x3e\n                          \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2"\x3e${i18n.areaofInputPoly}\x3c/div\x3e\n                        \x3c/td\x3e\n                      \x3c/tr\x3e\n                      \x3ctr\x3e\n                        \x3ctd\x3e\n                          \x3ctable\x3e\n                            \x3ctr\x3e\n                              \x3ctd\x3e\n                                \x3cdiv class\x3d"esriLeadingMargin4 bufferSelector selected" data-dojo-attach-point\x3d"_Include"\x3e\n                                  \x3cdiv class\x3d"bufferIcon bufferIncludeIcon"\x3e\x3c/div\x3e\n                                  \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.include}\x3c/label\x3e\x3c/div\x3e\n                                \x3c/div\x3e\n                              \x3c/td\x3e\n                              \x3ctd\x3e\n                                \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Exclude"\x3e\n                                  \x3cdiv class\x3d"bufferIcon bufferExcludeIcon"\x3e\x3c/div\x3e\n                                  \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.exclude}\x3c/label\x3e\x3c/div\x3e\n                                \x3c/div\x3e\n                              \x3c/td\x3e\n                            \x3c/tr\x3e\n                          \x3c/table\x3e\n                        \x3c/td\x3e\n                      \x3c/tr\x3e\n                    \x3c/table\x3e\n                  \x3c/td\x3e\n                \x3c/tr\x3e\n\n\n\n                \x3ctr\x3e\n                  \x3ctd colspan\x3d"2"\x3e\n                    \x3cdiv\x3e\n                    \x3ctable data-dojo-attach-point\x3d"sideTypes" style\x3d"display:none;"\x3e\n                      \x3ctr\x3e\n                        \x3ctd align\x3d"center" colspan\x3d"3"\x3e\n                          \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2"\x3e${i18n.sideType}\x3c/div\x3e\n                        \x3c/td\x3e\n                      \x3c/tr\x3e\n                      \x3ctr\x3e\n                          \x3ctd\x3e\n                            \x3cdiv class\x3d"esriLeadingMargin4 bufferSelector selected" data-dojo-attach-point\x3d"_Around"\x3e\n                              \x3cdiv class\x3d"bufferIcon bufferAroundIcon"\x3e\x3c/div\x3e\n                              \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.around}\x3c/label\x3e\x3c/div\x3e\n                            \x3c/div\x3e\n                          \x3c/td\x3e\n                          \x3ctd\x3e\n                            \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Left" \x3e\n                              \x3cdiv class\x3d"bufferIcon bufferLeftIcon"\x3e\x3c/div\x3e\n                              \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.left}\x3c/label\x3e\x3c/div\x3e\n                            \x3c/div\x3e\n                          \x3c/td\x3e\n                          \x3ctd\x3e\n                            \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Right"\x3e\n                              \x3cdiv class\x3d"bufferIcon bufferRightIcon"\x3e\x3c/div\x3e\n                              \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.right}\x3c/label\x3e\x3c/div\x3e\n                            \x3c/div\x3e\n                          \x3c/td\x3e\n                      \x3c/tr\x3e\n                     \x3c/table\x3e\n                    \x3c/div\x3e\n                    \x3cdiv\x3e\n                     \x3ctable data-dojo-attach-point\x3d"endTypes" style\x3d"display:none;"\x3e\n                      \x3ctr\x3e\n                        \x3ctd align\x3d"center" colspan\x3d"2"\x3e\n                          \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2"\x3e${i18n.endType}\x3c/div\x3e\n                        \x3c/td\x3e\n                      \x3c/tr\x3e\n                      \x3ctr\x3e\n                          \x3ctd\x3e\n                            \x3cdiv class\x3d"esriLeadingMargin4 bufferSelector selected" data-dojo-attach-point\x3d"_Round" \x3e\n                              \x3cdiv class\x3d"bufferIcon bufferRoundIcon"\x3e\x3c/div\x3e\n                              \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.round}\x3c/label\x3e\x3c/div\x3e\n                            \x3c/div\x3e\n                          \x3c/td\x3e\n                          \x3ctd\x3e\n                            \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Flat"\x3e\n                              \x3cdiv class\x3d"bufferIcon bufferFlatIcon"\x3e\x3c/div\x3e\n                              \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.flat}\x3c/label\x3e\x3c/div\x3e\n                            \x3c/div\x3e\n                          \x3c/td\x3e\n                      \x3c/tr\x3e\n                    \x3c/table\x3e\n                    \x3c/div\x3e\n                  \x3c/td\x3e\n                \x3c/tr\x3e\n\n                \x3ctr\x3e\n                  \x3ctd colspan\x3d"2" align\x3d"center"\x3e\n                    \x3ctable data-dojo-attach-point\x3d"ringTypes" style\x3d"display:none;"\x3e\n                      \x3ctr\x3e\n                        \x3ctd colspan\x3d2 align\x3d"center"\x3e\n                          \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin2"\x3e${i18n.multipleDistance}\x3c/div\x3e\n                        \x3c/td\x3e\n                      \x3c/tr\x3e\n                      \x3ctr\x3e\n                          \x3ctd\x3e\n                            \x3cdiv\x3e\n                            \x3ctable\x3e\n                            \x3ctr\x3e\n                            \x3ctd\x3e\n                              \x3cdiv class\x3d"esriLeadingMargin4 bufferSelector selected" data-dojo-attach-point\x3d"_Rings"\x3e\n                                \x3cdiv class\x3d"bufferIcon bufferRingsIcon"\x3e\x3c/div\x3e\n                                \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.rings}\x3c/label\x3e\x3c/div\x3e\n                              \x3c/div\x3e\n                            \x3c/td\x3e\n                            \x3ctd\x3e\n                              \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Disks"\x3e\n                                \x3cdiv class\x3d"bufferIcon bufferDisksIcon"\x3e\x3c/div\x3e\n                                \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.disks}\x3c/label\x3e\x3c/div\x3e\n                              \x3c/div\x3e\n                            \x3c/td\x3e\n                            \x3c/tr\x3e\n                            \x3c/table\x3e\n                            \x3c/div\x3e\n                          \x3c/td\x3e  \n                      \x3c/tr\x3e\n                    \x3c/table\x3e\n                  \x3c/td\x3e\n                \x3c/tr\x3e\n    \n\n\n                \x3c/tbody\x3e\n              \x3c/table\x3e\n            \x3c/div\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n    \n        \x3ctr\x3e\n          \x3ctd  class\x3d"longTextInput" style\x3d"padding:5px 0px;"\x3e\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\n            \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d""\x3e${i18n.resultLabel}\x3c/label\x3e\n          \x3c/td\x3e\n          \x3ctd\x3e\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"BufferLayer"\x3e\x3c/a\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"2"\x3e\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput" data-dojo-props\x3d"required:true,trim:true" data-dojo-attach-point\x3d"outputLayerInput"  value\x3d""\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"3"\x3e\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\n               \x3cinput class\x3d"longInput" dojoAttachPoint\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true" style\x3d"width:60%;height:auto"\x3e\x3c/input\x3e\n             \x3c/div\x3e              \n          \x3c/td\x3e\n        \x3c/tr\x3e         \n       \x3c/tbody\x3e\n      \x3c/table\x3e\n\n    \x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_bufferToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\n           ${i18n.useMapExtent}\n       \x3c/label\x3e\n      \x3c/div\x3e\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\n          ${i18n.runAnalysis}\n      \x3c/button\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\n    \x3c/div\x3e    \n\x3c/div\x3e\n'}});
define("esri/dijit/analysis/CreateBuffers","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox dijit/Dialog ../../kernel ../../lang ./AnalysisBase ./utils ./CreditEstimator dojo/i18n!../../nls/jsapi dojo/text!./templates/CreateBuffers.html".split(" "),
function(l,q,d,g,e,f,r,B,h,b,p,C,D,c,k,s,t,u,v,w,E,F,G,H,I,J,K,L,M,N,x,m,y,n,O,z,A){l=q([s,t,u,v,w,y],{declaredClass:"esri.dijit.analysis.CreateBuffers",templateString:A,basePath:l.toUrl("."),widgetsInTemplate:!0,inputLayer:null,inputType:null,outputLayerName:null,bufferDistance:null,units:null,showSelectFolder:!1,showChooseExtent:!0,showHelp:!0,showCredits:!0,returnFeatureCollection:!1,i18n:null,toolName:"CreateBuffers",helpFileName:"CreateBuffers",resultParameter:"BufferLayer",constructor:function(a,
b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,e.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,z.bufferTool)},postCreate:function(){this.inherited(arguments);c.add(this._form,"esriSimpleForm");this.outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),
this.emit("save",{save:!0}));this.emit("close",{save:a})},_toUpperFirstLetter:function(a){return a.slice(0,1).toUpperCase()+a.slice(1)},_handleSaveBtnClick:function(a){a={};var b={},c;if(this._form.validate()){this._saveBtn.set("disabled",!0);a.InputLayer=f.toJson(n.constructAnalysisInputLyrObj(this.inputLayer));a.DissolveType=this._DissolveType&&"dissolve"===this._DissolveType?"Dissolve":"None";"attribute"===this.bufferDistType?a.Field=this._bufferDistAttribute.get("value"):a.Distances=this.bufferDistance;
a.Units=this._bufferUnits.get("value");this.bufferDistance.length&&(this._RingType||(this._RingType="rings"),a.RingType="rings"===this._RingType?"Rings":"Disks");if("esriGeometryPolyline"===this.inputLayer.geometryType||"esriGeometryPolygon"===this.inputLayer.geometryType)a.SideType="esriGeometryPolyline"===this.inputLayer.geometryType?this._SideType&&"left"===this._SideType?"Left":this._SideType&&"right"===this._SideType?"Right":"Full":this._SideType&&"outside"===this._SideType?"Outside":"Full",
a.EndType=this._EndType&&"flat"===this._EndType?"Flat":"Round";this.returnFeatureCollection||(a.OutputName=f.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&(c.extent=this.map.extent._normalize(!0)),a.context=f.toJson(c));b.jobParams=a;b.itemParams={description:h.substitute(this.i18n.itemDescription,
{layername:this.inputLayer.name,distance_field:a.Distances||a.Field,units:a.Units}),tags:h.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");this.execute(b)}},_handleLayerChange:function(a){},_handleRadiusTypeChange:function(a){this.bufferDistType=a;c.remove(this._Distance,"selected");c.remove(this._Attribute,"selected");
var d=this._bufferDist.get("value").split(" ");"attribute"===a?(b.set(this._bufferDistAttribute.domNode,"display","block"),b.set(this._bufferDist.domNode,"display","none"),b.set(this._sizeHelp,"visibility","hidden"),b.set(this.ringTypes,"display","none"),"polygon"===this.inputType?(b.set(this.polygonTypes,"display","block"),b.set(this.sideTypes,"display","none"),b.set(this.endTypes,"display","none")):"line"===this.inputType&&(b.set(this.sideTypes,"display","block"),b.set(this.endTypes,"display","block"),
b.set(this.polygonTypes,"display","none")),c.add(this._Attribute,"selected")):"distance"===a&&(b.set(this._bufferDistAttribute.domNode,"display","none"),b.set(this._bufferDist.domNode,"display","block"),b.set(this._sizeHelp,"visibility","visible"),c.add(this._Distance,"selected"),1<d.length?(b.set(this.ringTypes,"display","block"),b.set(this.sideTypes,"display","none"),b.set(this.endTypes,"display","none"),b.set(this.polygonTypes,"display","none")):"polygon"===this.inputType?(b.set(this.ringTypes,
"display","none"),b.set(this.sideTypes,"display","none"),b.set(this.endTypes,"display","none"),b.set(this.polygonTypes,"display","block")):"line"===this.inputType&&(b.set(this.ringTypes,"display","none"),b.set(this.sideTypes,"display","block"),b.set(this.endTypes,"display","block"),b.set(this.polygonTypes,"display","none")))},_handleDissolveTypeChange:function(a){this._DissolveType=a;c.remove(this._Overlap,"selected");c.remove(this._Dissolve,"selected");c.add("none"===a?this._Overlap:this._Dissolve,
"selected")},_handleRingTypeChange:function(a){this._RingType=a;c.remove(this._Rings,"selected");c.remove(this._Disks,"selected");c.add("rings"===a?this._Rings:this._Disks,"selected")},_handlePolygonTypeChange:function(a){this._SideType=a;c.remove(this._Include,"selected");c.remove(this._Exclude,"selected");c.add("full"===a?this._Include:this._Exclude,"selected")},_handleSideTypeChange:function(a,b){this._SideType=b;c.remove(this._Around,"selected");c.remove(this._Left,"selected");c.remove(this._Right,
"selected");c.add(a,"selected")},_handleEndTypeChange:function(a){this._EndType=a;c.remove(this._Round,"selected");c.remove(this._Flat,"selected");c.add("round"===a?this._Round:this._Flat,"selected")},_handleOptionsBtnClick:function(){c.contains(this._optionsDiv,"disabled")||(c.contains(this._optionsDiv,"optionsClose")?(c.remove(this._optionsDiv,"optionsClose"),c.add(this._optionsDiv,"optionsOpen")):c.contains(this._optionsDiv,"optionsOpen")&&(c.remove(this._optionsDiv,"optionsOpen"),c.add(this._optionsDiv,
"optionsClose")))},_handleDistanceChange:function(){var a=d.trim(this._bufferDist.get("value")).split(" "),c=[];1<a.length?(b.set(this.ringTypes,"display","block"),b.set(this.sideTypes,"display","none"),b.set(this.endTypes,"display","none"),b.set(this.polygonTypes,"display","none")):("line"===this.inputType?(b.set(this.sideTypes,"display","block"),b.set(this.endTypes,"display","block")):"polygon"===this.inputType&&b.set(this.polygonTypes,"display","block"),b.set(this.ringTypes,"display","none"));
g.forEach(a,function(a){c.push(k.parse(a))});this.bufferDistance=c},_handleShowCreditsClick:function(a){a.preventDefault();a={};if(this._form.validate()){a.InputLayer=f.toJson(n.constructAnalysisInputLyrObj(this.inputLayer));a.DissolveType=this._DissolveType&&"dissolve"===this._DissolveType?"Dissolve":"None";"attribute"===this.bufferDistType?a.Field=this._bufferDistAttribute.get("value"):a.Distances=f.toJson(this.bufferDistance);a.Units=this._bufferUnits.get("value");this.bufferDistance.length&&(this._RingType||
(this._RingType="rings"),a.RingType="rings"===this._RingType?"Rings":"Disks");if("esriGeometryPolyline"===this.inputLayer.geometryType||"esriGeometryPolygon"===this.inputLayer.geometryType)a.SideType="esriGeometryPolyline"===this.inputLayer.geometryType?this._SideType&&"left"===this._SideType?"Left":this._SideType&&"right"===this._SideType?"Right":"Full":this._SideType&&"outside"===this._SideType?"Outside":"Full",a.EndType=this._EndType&&"flat"===this._EndType?"Flat":"Round";this.returnFeatureCollection||
(a.OutputName=f.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)}));console.log(a);this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_save:function(){},_buildUI:function(){this._loadConnections();n.initHelpLinks(this.domNode,this.showHelp);this.inputLayer&&(p.set(this._bufferToolDescription,
"innerHTML",h.substitute(this.i18n.bufferDefine,{layername:this.inputLayer.name})),this.outputLayerInput.set("value",h.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),g.forEach(this.inputLayer.fields,function(a){if("esriFieldTypeDouble"===a.type||"esriFieldTypeInteger"===a.type||"esriFieldTypeSmallInteger"===a.type||"esriFieldTypeSingle"===a.type)this._bufferDistAttribute.addOption({value:a.name,label:m.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this),p.set(this._bufferOptionsHelpLink,
"esriHelpTopic","polygon"===this.inputType?"OptionPoly":"line"===this.inputType?"OptionLine":"OptionPoint"));this._bufferDist.set("validator",d.hitch(this,this.validateDistance));this.bufferDistance?this._bufferDist.set("value",this.bufferDistance.toString().replace(/,/g," ")):(this.bufferDistance=[],this.bufferDistance.push(this._bufferDist.get("value")));"line"===this.inputType?(b.set(this.sideTypes,"display","block"),b.set(this.endTypes,"display","block")):"polygon"===this.inputType&&b.set(this.polygonTypes,
"display","block");this.outputLayerName&&this.outputLayerInput.set("value",this.outputLayerName);this.units&&this._bufferUnits.set("value",this.units);b.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;this._webMapFolderSelect.set("store",a);this._webMapFolderSelect.set("value",this.portalUser.username)}));b.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"block":
"none");b.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none")},validateDistance:function(){var a=this,b,c=[],e,f;this._handleDistanceChange();b=d.trim(this._bufferDist.get("value")).split(" ");if(0===b.length)return!1;g.forEach(b,function(b){b=k.parse(b);if(isNaN(b))return c.push(0),!1;e=k.format(b,{locale:"root"});m.isDefined(e)?m.isDefined(e)||(e=k.format(b,{locale:"en-us"})):e=k.format(b,{locale:"en"});m.isDefined(e)&&(f=d.trim(e).match(/\D/g));f&&g.forEach(f,function(b){"."===
b||","===b?c.push(1):"-"===b&&"polygon"===a.inputType?c.push(1):c.push(0)})});return-1!==g.indexOf(c,0)?!1:!0},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));e.connect(this._Distance,"onclick",d.hitch(this,"_handleRadiusTypeChange","distance"));e.connect(this._Attribute,"onclick",d.hitch(this,"_handleRadiusTypeChange","attribute"));e.connect(this._Overlap,"onclick",d.hitch(this,"_handleDissolveTypeChange",
"none"));e.connect(this._Dissolve,"onclick",d.hitch(this,"_handleDissolveTypeChange","dissolve"));e.connect(this._Include,"onclick",d.hitch(this,"_handlePolygonTypeChange","full"));e.connect(this._Exclude,"onclick",d.hitch(this,"_handlePolygonTypeChange","outside"));e.connect(this._Rings,"onclick",d.hitch(this,"_handleRingTypeChange","rings"));e.connect(this._Disks,"onclick",d.hitch(this,"_handleRingTypeChange","disks"));e.connect(this._Around,"onclick",d.hitch(this,"_handleSideTypeChange",this._Around,
"full"));e.connect(this._Left,"onclick",d.hitch(this,"_handleSideTypeChange",this._Left,"left"));e.connect(this._Right,"onclick",d.hitch(this,"_handleSideTypeChange",this._Right,"right"));e.connect(this._Round,"onclick",d.hitch(this,"_handleEndTypeChange","round"));e.connect(this._Flat,"onclick",d.hitch(this,"_handleEndTypeChange","flat"))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){"esriGeometryPolygon"===
a.geometryType?(this.inputLayer=a,this.inputType="polygon"):"esriGeometryPolyline"===a.geometryType?(this.inputLayer=a,this.inputType="line"):"esriGeometryPoint"===a.geometryType&&(this.inputLayer=a,this.inputType="point")},_setLayerAttr:function(a){"esriGeometryPolygon"===a.geometryType?this.inputType="polygon":"esriGeometryPolyline"===a.geometryType?this.inputType="line":"esriGeometryPoint"===a.geometryType&&(this.inputType="point");this.inputLayer=a},_setLayersAttr:function(a){this._setLayerAttr(a)},
_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){var b=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(a);return 0===a.length||0===h.trim(a).length?(this.outputLayerInput.set("invalidMessage",this.i18n.requiredValue),!1):b?(this.outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName),!1):98<a.length?(this.outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength),!1):!0},_setShowSelectFolderAttr:function(a){this.showSelectFolder=
a},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setMapAttr:function(a){this.map=a},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(a){this.showHelp=a},_getShowHelpAttr:function(){return this.showHelp},_setShowChooseExtentAttr:function(a){this.showChooseExtent=a},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setShowCreditsAttr:function(a){this.showCredits=a},_getShowCreditsAttr:function(){return this.showCredits},_setUnitsAttr:function(a){this.units=
a},_getUnitsAttr:function(){return this.units=this._bufferUnits.get("value")},_setReturnFeatureCollectionAttr:function(a){this.returnFeatureCollection=a},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_connect:function(a,b,c){this._pbConnects.push(e.connect(a,b,c))}});r("extend-esri")&&d.setObject("dijit.analysis.CreateBuffers",l,x);return l});