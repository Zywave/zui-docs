(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{194:function(e,t,s){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},231:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(194),o=s(0);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var i={VueRemarkRoot:r.a},p=function(e){var t=e.options.components=e.options.components||{},s=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===n(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:s[e]=function(){return i[e]}}))},l=o.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",c={excerpt:null,title:"CSS guide",parentIdentifier:"developers",weight:5};var _=function(e){e.options[v]&&(e.options[v]=c),o.a.util.defineReactive(e.options,v,c),e.options.computed=l.computed({$frontmatter:function(){return e.options[v]}},e.options.computed)},d=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("VueRemarkRoot",[s("Tabs",{attrs:{tabs:["Responsive design"]}},[s("TabPage",[s("h2",[e._v("Mobile first approach")]),s("p",[e._v("We aim to provide the best user experience possible by taking a mobile-first approach. This means we design for the smallest screen size first ("),s("code",{pre:!0},[e._v("30em")]),e._v(" or "),s("code",{pre:!0},[e._v("480px")]),e._v("), then progressively enhance the experience as more screen real estate becomes available.")]),s("hr"),s("h2",[e._v("Breakpoints")]),s("p",[e._v("Breakpoints are defined points or widths for your site's content to respond to in order to provide the best possible layout for users to consume information.")]),s("p",[e._v("There are 6 breakpoints available. The breakpoints are not named after devices because there are thousands of them. Instead, we use t-shirt sizes. We recommend using "),s("code",{pre:!0},[e._v("em")]),e._v("s in media queries for proper scaling across multiple devices.")]),s("table",[s("thead",[s("tr",[s("th",{attrs:{align:"left"}},[e._v("Sizes")]),s("th",{attrs:{align:"left"}},[e._v("Breakpoints in "),s("code",{pre:!0},[e._v("em")])]),s("th",{attrs:{align:"left"}},[e._v("Breakpoints in "),s("code",{pre:!0},[e._v("px")])])])]),s("tbody",[s("tr",[s("td",{attrs:{align:"left"}},[e._v("XXS")]),s("td",{attrs:{align:"left"}},[e._v("30em")]),s("td",{attrs:{align:"left"}},[e._v("480px")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("XS")]),s("td",{attrs:{align:"left"}},[e._v("45em")]),s("td",{attrs:{align:"left"}},[e._v("720px")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("S")]),s("td",{attrs:{align:"left"}},[e._v("60em")]),s("td",{attrs:{align:"left"}},[e._v("960px")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("M")]),s("td",{attrs:{align:"left"}},[e._v("64em")]),s("td",{attrs:{align:"left"}},[e._v("1024px")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("L")]),s("td",{attrs:{align:"left"}},[e._v("80em")]),s("td",{attrs:{align:"left"}},[e._v("1280px")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("XL")]),s("td",{attrs:{align:"left"}},[e._v("120em")]),s("td",{attrs:{align:"left"}},[e._v("1920px")])])])]),s("p",[s("small",[e._v("*"),s("code",{pre:!0},[e._v("em")]),e._v(" units are based off the browser's default font size of 16px")])]),s("zui-well",{attrs:{type:"info",static:""}},[s("p",[e._v("Did you know we provide SCSS variables for these breakpoints in the "),s("a",{attrs:{href:"https://gitlab.zywave.com/zui/zui"}},[e._v("ZUI Toolkit")]),e._v("?")])]),s("Spacer",{attrs:{size:"small"}}),s("h3",[e._v("Why use "),s("code",{pre:!0},[e._v("em")]),e._v(" values for media queries?")]),s("p",[e._v("During our research, we found that pixels, which are an absolute unit, do not scale appropriately across multiple devices due to various pixel densities. "),s("code",{pre:!0},[e._v("em")]),e._v("s, however, are relative to their direct or nearest parent font size and do a better job of scaling and are more precise. Also, they are more widely supported than "),s("code",{pre:!0},[e._v("rem")]),e._v("s, so we recommend using "),s("code",{pre:!0},[e._v("em")]),e._v("s for all media queries.")]),s("hr"),s("h2",[e._v("Font sizes")]),s("p",[e._v("With ZUI 4, all applications should set their root font size to "),s("code",{pre:!0},[e._v("100%")]),e._v(", which usually equates to "),s("code",{pre:!0},[e._v("16px")]),e._v(" and is the default browser font size. Then, set your body font size in "),s("code",{pre:!0},[e._v("rem")]),e._v(". This helps with accessibility, zooming, and different pixel densities.")]),s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",{pre:!0,attrs:{class:"language-css"}},[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v("html")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),s("span",{pre:!0,attrs:{class:"token unit"}},[e._v("%")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 16 */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v("body")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.875")]),s("span",{pre:!0,attrs:{class:"token unit"}},[e._v("rem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* 14 / 16 */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),s("hr"),s("h2",[e._v("CSS units")]),s("p",[e._v("Ah, the classic debate on which CSS unit to use.")]),s("p",[e._v("We've provided some guidelines below to help you choose the best unit for your project. In ZUI, we encourage the use of "),s("code",{pre:!0},[e._v("em")]),e._v("s, "),s("code",{pre:!0},[e._v("rem")]),e._v("s, and percentages wherever possible because they are scalable and accessible.")]),s("table",[s("thead",[s("tr",[s("th",{attrs:{align:"left"}},[e._v("Name")]),s("th",{attrs:{align:"left"}},[e._v("Unit")]),s("th",{attrs:{align:"left"}},[e._v("Description")])])]),s("tbody",[s("tr",[s("td",{attrs:{align:"left"}},[e._v("Pixel")]),s("td",{attrs:{align:"left"}},[s("code",{pre:!0},[e._v("px")])]),s("td",{attrs:{align:"left"}},[e._v("Absolute unit")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("Percent")]),s("td",{attrs:{align:"left"}},[s("code",{pre:!0},[e._v("%")])]),s("td",{attrs:{align:"left"}},[e._v("Relative to the same property of the parent element")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("Em")]),s("td",{attrs:{align:"left"}},[s("code",{pre:!0},[e._v("em")])]),s("td",{attrs:{align:"left"}},[e._v("Relative to its direct or nearest parent font size")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("Root em")]),s("td",{attrs:{align:"left"}},[s("code",{pre:!0},[e._v("rem")])]),s("td",{attrs:{align:"left"}},[e._v("Relative to the root element's font size")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("Viewport width")]),s("td",{attrs:{align:"left"}},[s("code",{pre:!0},[e._v("vw")])]),s("td",{attrs:{align:"left"}},[e._v("1% of the width of the initial containing block (root element)")])]),s("tr",[s("td",{attrs:{align:"left"}},[e._v("Viewport height")]),s("td",{attrs:{align:"left"}},[s("code",{pre:!0},[e._v("vh")])]),s("td",{attrs:{align:"left"}},[e._v("1% of the height of the initial containing block (root element)")])])])]),s("Spacer",{attrs:{size:"small"}}),s("h3",[e._v("Pixel ("),s("code",{pre:!0},[e._v("px")]),e._v(")")]),s("p",[e._v("Pixels are only recommended for spacing and layout, but not for font-size. As an absolute unit, pixels do not scale if users increase their browser font size. A great example of when to use pixels is border widths.")]),s("zui-well",{attrs:{type:"info",static:""}},[e._v("Still not sure if you should be using pixels? If scaling and proportions are important, you probably shouldn't use pixels. Use relative units instead.")]),s("h3",[e._v("Percent ("),s("code",{pre:!0},[e._v("%")]),e._v(")")]),s("p",[e._v("Percents are great for creating a fluid layout, or for scaling purposes. Elements will resize to a defined percentage of the total space available to them, provided by their parent container. Setting an image's size in percents will allow it to grow and shrink as the screen real estate changes.")]),s("h3",[s("code",{pre:!0},[e._v("em")])]),s("p",[s("code",{pre:!0},[e._v("em")]),e._v("s are recommended for font sizes and when proportions are important. An "),s("code",{pre:!0},[e._v("em")]),e._v(" is equal to its parent's font size. For example, if a container's font size is set to "),s("code",{pre:!0},[e._v("30px")]),e._v(", then "),s("code",{pre:!0},[e._v("1em")]),e._v(" is equal to "),s("code",{pre:!0},[e._v("30px")]),e._v(" and "),s("code",{pre:!0},[e._v("2em")]),e._v(" is equal to "),s("code",{pre:!0},[e._v("60px")]),e._v(".")]),s("h3",[s("code",{pre:!0},[e._v("rem")])]),s("p",[s("code",{pre:!0},[e._v("rem")]),e._v("s are also recommended for font sizes and when proportionsa are important, with one caveat that they will always be relative to the "),s("em",[e._v("root element")]),e._v("'s ("),s("code",{pre:!0},[e._v("<html>")]),e._v(") font size. For example, if a root element's font size is set to "),s("code",{pre:!0},[e._v("16px")]),e._v(", a container's font size is set to "),s("code",{pre:!0},[e._v("18px")]),e._v(", but its padding is set to "),s("code",{pre:!0},[e._v("1rem")]),e._v(", the "),s("code",{pre:!0},[e._v("1rem")]),e._v(" equates to "),s("code",{pre:!0},[e._v("16px")]),e._v(".")]),s("h3",[e._v("Viewport width ("),s("code",{pre:!0},[e._v("vw")]),e._v(")")]),s("p",[s("code",{pre:!0},[e._v("vw")]),e._v(" is similar to "),s("code",{pre:!0},[e._v("%")]),e._v(" with the exception that it depends on the width of the viewport and not its parent element. This unit is best used when your element relys on the width of the viewport, regardless of its parent container.")]),s("h3",[e._v("Viewport height ("),s("code",{pre:!0},[e._v("vh")]),e._v(")")]),s("p",[s("code",{pre:!0},[e._v("vh")]),e._v(" is also similar to "),s("code",{pre:!0},[e._v("%")]),e._v(" with the exception that it depends on the height of the viewport and not its parent element. This unit is best used when your element relys on the height of the viewport, regardless of its parent container.")]),s("hr"),s("h2",[e._v("CSS unit conversions")]),s("p",[e._v("Provided below are two formulas for the most common unit conversions.")]),s("h3",[s("code",{pre:!0},[e._v("px")]),e._v(" to "),s("code",{pre:!0},[e._v("rem")])]),s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",{pre:!0,attrs:{class:"language-shell"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("pixel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root font size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("new rem value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# example")]),e._v("\n30px / 16px "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".875rem")])]),s("h3",[s("code",{pre:!0},[e._v("px")]),e._v(" to "),s("code",{pre:!0},[e._v("%")])]),s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",{pre:!0,attrs:{class:"language-shell"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("pixel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("parent container width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" * "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("new % value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# example")]),e._v("\n600px / 1024px * "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("58.59375")]),e._v("%")])])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof _&&_(d);t.default=d.exports}}]);