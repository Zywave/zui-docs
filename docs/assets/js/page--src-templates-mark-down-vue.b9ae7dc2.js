(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e){},199:function(t,e,n){"use strict";var a=n(196),o=n.n(a);e.default=o.a},247:function(t,e,n){"use strict";n.r(e);n(89);var a={metaInfo:function(){return{title:this.$page.markDown.title}},methods:{hasToolkitTab:function(){return this.$page.markDown.component.length>0}},computed:{pathCustomElementJson:function(){return"/custom-elements-json/".concat(this.$page.markDown.component,".json")},subComponent:function(){return this.$page.markDown.subComponent}}},o=n(1),s=n(199),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("section",{staticClass:"zui-layout",class:[t.$page.markDown.zuiLayoutLargerWidth?"":"zui-layout--slim"]},[n("div",{staticClass:"page-header"},[t.$page.markDown.title&&!t.$page.markDown.hideTitle?n("h1",[t._v(t._s(t.$page.markDown.title))]):t._e(),t.$page.markDown.subtitle?n("h2",[t._v(t._s(t.$page.markDown.subtitle))]):t._e()]),t.hasToolkitTab()?n("div",[n("Tabs",{attrs:{tabs:["Design","API"]}},[n("TabPage",[n("VueRemarkContent")],1),n("TabPage",[n("CustomApiViewer",{attrs:{src:t.pathCustomElementJson,selected:t.subComponent}})],1)],1)],1):n("VueRemarkContent",{staticClass:"content-container"})],1)])}),[],!1,null,"c54b7b12",null);"function"==typeof s.default&&Object(s.default)(i);e.default=i.exports}}]);