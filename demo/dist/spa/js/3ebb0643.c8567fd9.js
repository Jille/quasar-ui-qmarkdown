(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3ebb0643"],{"8c1a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("show-markdown",{attrs:{label:"Tables"},scopedSlots:e._u([{key:"markdown",fn:function(){return[e._v("\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nCenter aligned columns\n\n| Option | Description |\n|:------:|:-----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n      ")]},proxy:!0},{key:"input",fn:function(){return[e._v("\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nCenter aligned columns\n\n| Option | Description |\n|:------:|:-----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n      ")]},proxy:!0}])})],1)},a=[],s=n("e63c"),l={components:{ShowMarkdown:s["a"]}},i=l,r=n("2877"),p=Object(r["a"])(i,o,a,!1,null,null,null);t["default"]=p.exports},e63c:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row q-pa-sm"},[n("q-toggle",{attrs:{label:"Disable HTML"},model:{value:e.noHtml,callback:function(t){e.noHtml=t},expression:"noHtml"}}),n("q-toggle",{attrs:{label:"Disable Link"},model:{value:e.noLink,callback:function(t){e.noLink=t},expression:"noLink"}}),n("q-toggle",{attrs:{label:"Disable Linkify"},model:{value:e.noLinkify,callback:function(t){e.noLinkify=t},expression:"noLinkify"}}),n("q-toggle",{attrs:{label:"Disable Typographer"},model:{value:e.noTypographer,callback:function(t){e.noTypographer=t},expression:"noTypographer"}}),n("q-toggle",{attrs:{label:"Disable Breaks"},model:{value:e.noBreaks,callback:function(t){e.noBreaks=t},expression:"noBreaks"}}),n("q-toggle",{attrs:{label:"Disable Highlight"},model:{value:e.noHighlight,callback:function(t){e.noHighlight=t},expression:"noHighlight"}}),n("q-toggle",{attrs:{label:"Disable Emoji"},model:{value:e.noEmoji,callback:function(t){e.noEmoji=t},expression:"noEmoji"}}),n("q-toggle",{attrs:{label:"Disable Subscript"},model:{value:e.noSubscript,callback:function(t){e.noSubscript=t},expression:"noSubscript"}}),n("q-toggle",{attrs:{label:"Disable Superscript"},model:{value:e.noSuperscript,callback:function(t){e.noSuperscript=t},expression:"noSuperscript"}}),n("q-toggle",{attrs:{label:"Disable Footnote"},model:{value:e.noFootnote,callback:function(t){e.noFootnote=t},expression:"noFootnote"}}),n("q-toggle",{attrs:{label:"Disable Deflist"},model:{value:e.noDeflist,callback:function(t){e.noDeflist=t},expression:"noDeflist"}}),n("q-toggle",{attrs:{label:"Disable Abbreviation"},model:{value:e.noAbbreviation,callback:function(t){e.noAbbreviation=t},expression:"noAbbreviation"}}),n("q-toggle",{attrs:{label:"Disable Insert"},model:{value:e.noInsert,callback:function(t){e.noInsert=t},expression:"noInsert"}}),n("q-toggle",{attrs:{label:"Disable Mark"},model:{value:e.noMark,callback:function(t){e.noMark=t},expression:"noMark"}}),n("q-toggle",{attrs:{label:"Disable Image"},model:{value:e.noImage,callback:function(t){e.noImage=t},expression:"noImage"}}),n("q-toggle",{attrs:{label:"Disable Tasklist"},model:{value:e.noTasklist,callback:function(t){e.noTasklist=t},expression:"noTasklist"}}),n("q-toggle",{attrs:{label:"Disable Container"},model:{value:e.noContainer,callback:function(t){e.noContainer=t},expression:"noContainer"}})],1),n("q-list",{attrs:{bordered:""}},[n("q-expansion-item",{attrs:{group:"somegroup",label:e.label,"default-opened":"","header-class":"text-primary"}},[n("q-card",[n("q-card-section",[n("q-markdown",{staticStyle:{overflow:"auto"},attrs:{noHtml:e.noHtml,noLinkify:e.noLinkify,noLink:e.noLink,noTypographer:e.noTypographer,noBreaks:e.noBreaks,noHighlight:e.noHighlight,noEmoji:e.noEmoji,noSubscript:e.noSubscript,noSuperscript:e.noSuperscript,noFootnote:e.noFootnote,noDeflist:e.noDeflist,noAbbreviation:e.noAbbreviation,noInsert:e.noInsert,noMark:e.noMark,noImage:e.noImage,noTasklist:e.noTasklist,noContainer:e.noContainer,toc:e.toc,tocStart:e.tocStart,tocEnd:e.tocEnd,taskListsEnable:e.taskListsEnable,taskListsLabel:e.taskListsLabel,taskListsLabelAfter:e.taskListsLabelAfter},on:{toc:function(t){return e.$emit("toc",t)}}},[e._t("markdown")],2)],1)],1)],1),n("q-separator"),n("q-expansion-item",{attrs:{group:"somegroup",label:"Markup","header-class":"text-teal"}},[n("q-card",[n("q-card-section",[n("pre",[n("code",[e._v("\n            "),e._t("input"),e._v("\n          ")],2)])])],1)],1)],1)],1)},a=[],s=(n("c5f6"),{name:"ShowMarkdown",props:{label:String,toc:Boolean,tocStart:Number,tocEnd:Number,taskListsEnable:Boolean,taskListsLabel:Boolean,taskListsLabelAfter:Boolean},data:function(){return{noHtml:!1,noLinkify:!1,noLink:!1,noTypographer:!1,noBreaks:!1,noHighlight:!1,noEmoji:!1,noSubscript:!1,noSuperscript:!1,noFootnote:!1,noDeflist:!1,noAbbreviation:!1,noInsert:!1,noMark:!1,noImage:!1,noTasklist:!1,noContainer:!1}}}),l=s,i=n("2877"),r=Object(i["a"])(l,o,a,!1,null,null,null);t["a"]=r.exports}}]);