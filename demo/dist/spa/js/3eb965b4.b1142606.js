(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3eb965b4"],{"622b":function(n,o,e){"use strict";e.r(o);var t=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("show-markdown",{attrs:{label:"Code"},scopedSlots:n._u([{key:"markdown",fn:function(){return[n._v('\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n      ')]},proxy:!0},{key:"input",fn:function(){return[n._v('\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code "fences"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n      ')]},proxy:!0}])})],1)},a=[],l=e("e63c"),i={components:{ShowMarkdown:l["a"]}},s=i,r=e("2877"),c=Object(r["a"])(s,t,a,!1,null,null,null);o["default"]=c.exports},e63c:function(n,o,e){"use strict";var t=function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",[e("div",{staticClass:"row q-pa-sm"},[e("q-toggle",{attrs:{label:"Disable HTML"},model:{value:n.noHtml,callback:function(o){n.noHtml=o},expression:"noHtml"}}),e("q-toggle",{attrs:{label:"Disable Link"},model:{value:n.noLink,callback:function(o){n.noLink=o},expression:"noLink"}}),e("q-toggle",{attrs:{label:"Disable Linkify"},model:{value:n.noLinkify,callback:function(o){n.noLinkify=o},expression:"noLinkify"}}),e("q-toggle",{attrs:{label:"Disable Typographer"},model:{value:n.noTypographer,callback:function(o){n.noTypographer=o},expression:"noTypographer"}}),e("q-toggle",{attrs:{label:"Disable Breaks"},model:{value:n.noBreaks,callback:function(o){n.noBreaks=o},expression:"noBreaks"}}),e("q-toggle",{attrs:{label:"Disable Highlight"},model:{value:n.noHighlight,callback:function(o){n.noHighlight=o},expression:"noHighlight"}}),e("q-toggle",{attrs:{label:"Disable Emoji"},model:{value:n.noEmoji,callback:function(o){n.noEmoji=o},expression:"noEmoji"}}),e("q-toggle",{attrs:{label:"Disable Subscript"},model:{value:n.noSubscript,callback:function(o){n.noSubscript=o},expression:"noSubscript"}}),e("q-toggle",{attrs:{label:"Disable Superscript"},model:{value:n.noSuperscript,callback:function(o){n.noSuperscript=o},expression:"noSuperscript"}}),e("q-toggle",{attrs:{label:"Disable Footnote"},model:{value:n.noFootnote,callback:function(o){n.noFootnote=o},expression:"noFootnote"}}),e("q-toggle",{attrs:{label:"Disable Deflist"},model:{value:n.noDeflist,callback:function(o){n.noDeflist=o},expression:"noDeflist"}}),e("q-toggle",{attrs:{label:"Disable Abbreviation"},model:{value:n.noAbbreviation,callback:function(o){n.noAbbreviation=o},expression:"noAbbreviation"}}),e("q-toggle",{attrs:{label:"Disable Insert"},model:{value:n.noInsert,callback:function(o){n.noInsert=o},expression:"noInsert"}}),e("q-toggle",{attrs:{label:"Disable Mark"},model:{value:n.noMark,callback:function(o){n.noMark=o},expression:"noMark"}}),e("q-toggle",{attrs:{label:"Disable Image"},model:{value:n.noImage,callback:function(o){n.noImage=o},expression:"noImage"}}),e("q-toggle",{attrs:{label:"Disable Tasklist"},model:{value:n.noTasklist,callback:function(o){n.noTasklist=o},expression:"noTasklist"}}),e("q-toggle",{attrs:{label:"Disable Container"},model:{value:n.noContainer,callback:function(o){n.noContainer=o},expression:"noContainer"}})],1),e("q-list",{attrs:{bordered:""}},[e("q-expansion-item",{attrs:{group:"somegroup",label:n.label,"default-opened":"","header-class":"text-primary"}},[e("q-card",[e("q-card-section",[e("q-markdown",{staticStyle:{overflow:"auto"},attrs:{noHtml:n.noHtml,noLinkify:n.noLinkify,noLink:n.noLink,noTypographer:n.noTypographer,noBreaks:n.noBreaks,noHighlight:n.noHighlight,noEmoji:n.noEmoji,noSubscript:n.noSubscript,noSuperscript:n.noSuperscript,noFootnote:n.noFootnote,noDeflist:n.noDeflist,noAbbreviation:n.noAbbreviation,noInsert:n.noInsert,noMark:n.noMark,noImage:n.noImage,noTasklist:n.noTasklist,noContainer:n.noContainer,toc:n.toc,tocStart:n.tocStart,tocEnd:n.tocEnd,taskListsEnable:n.taskListsEnable,taskListsLabel:n.taskListsLabel,taskListsLabelAfter:n.taskListsLabelAfter},on:{toc:function(o){return n.$emit("toc",o)}}},[n._t("markdown")],2)],1)],1)],1),e("q-separator"),e("q-expansion-item",{attrs:{group:"somegroup",label:"Markup","header-class":"text-teal"}},[e("q-card",[e("q-card-section",[e("pre",[e("code",[n._v("\n            "),n._t("input"),n._v("\n          ")],2)])])],1)],1)],1)],1)},a=[],l=(e("c5f6"),{name:"ShowMarkdown",props:{label:String,toc:Boolean,tocStart:Number,tocEnd:Number,taskListsEnable:Boolean,taskListsLabel:Boolean,taskListsLabelAfter:Boolean},data:function(){return{noHtml:!1,noLinkify:!1,noLink:!1,noTypographer:!1,noBreaks:!1,noHighlight:!1,noEmoji:!1,noSubscript:!1,noSuperscript:!1,noFootnote:!1,noDeflist:!1,noAbbreviation:!1,noInsert:!1,noMark:!1,noImage:!1,noTasklist:!1,noContainer:!1}}}),i=l,s=e("2877"),r=Object(s["a"])(i,t,a,!1,null,null,null);o["a"]=r.exports}}]);