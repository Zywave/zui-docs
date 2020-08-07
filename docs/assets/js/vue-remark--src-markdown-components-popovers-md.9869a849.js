(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{189:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},214:function(e,o,t){"use strict";t.r(o);var n=t(1),i=t(189),r=t(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var s={VueRemarkRoot:i.a},p=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===a(s[e])&&"function"==typeof s[e].render?o[e]=s[e]:t[e]=function(){return s[e]}}))},c=r.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",h={excerpt:null,title:"Popovers",parentIdentifier:"components",component:"zui-popover"};var u=function(e){e.options[l]&&(e.options[l]=h),r.a.util.defineReactive(e.options,l,h),e.options.computed=c.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},v=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("VueRemarkRoot",[t("h2",[e._v("Usage")]),t("p",[e._v("Popovers are unobtrusive messages that provide the user with more detailed information when clicking on a page element. Popovers are anchored to the page element in which they are referencing and should not be critical for the user to read. Unlike tooltips, there may be actions included within popovers such as close, next, back, and text links. Popovers also trigger on click and remain active until the user either clicks off of the page element or clicks close on the popover.")]),t("p",[e._v("Popovers should be used:")]),t("ul",[t("li",[e._v("to help users understand unknown or unfamiliar controls, features, or workflows that are not described directly on the page.")]),t("li",[e._v("to provide information to users when they need it, and to help free up screen space.")]),t("li",[e._v("when more detailed information is needed, such as a header and multiple lines of body text.")]),t("li",[e._v("to provide more actions to the user, such as a walkthrough or text link.")]),t("li",[e._v("when the content needs to remain open without being moused over.")])]),t("h3",[e._v("Alternate considerations")]),t("p",[e._v("A "),t("a",{attrs:{href:"http://zui.zywave.com/components/tooltips/"}},[e._v("tooltip")]),e._v(" may be the appropriate component if the message is a small text hint explaining the anchored element, if the message needs to only be visible on hover, and if the message can disappear when the user moves away from the element.")]),t("hr"),t("h2",[e._v("Anatomy")]),t("p",[t("img",{attrs:{src:"/images/components/popovers/popover_anatomy.svg",alt:"Image of popover"}})]),t("p",[e._v("Popovers consist of a shape background, shadow, text, and can include a variety of components. For detailed documentation on our popover anatomy, view the "),t("a",{attrs:{href:"https://xd.adobe.com/view/35952280-c758-4fd8-6dc4-07f88b1fe619-43a4/grid"}},[e._v("ZUI popover design specs")]),e._v(".")]),t("h3",[e._v("Required")]),t("p",[e._v("Popovers must always include a blue top bar, a close button in the top right, and either header text or body text to provide information.")]),t("h3",[e._v("Optional")]),t("p",[e._v("Popovers can include primary and secondary buttons for walkthroughs, and text links to link users to more information.")]),t("hr"),t("h2",[e._v("States")]),t("p",[t("img",{attrs:{src:"/images/components/popovers/popover_states.svg",alt:"Image of popover states"}})]),t("h3",[e._v("Normal")]),t("p",[e._v("Normal state is the initial state of the popover when it first appears and before any action is taken.")]),t("h3",[e._v("Hover")]),t("p",[e._v("Hover state occurs when the user hovers over the action with their mouse.")]),t("h3",[e._v("Focus")]),t("p",[e._v("Focus state appears when the action is currently selected and awaiting activity. This commonly occurs when using a keyboard to navigate.")]),t("h3",[e._v("Pressed")]),t("p",[e._v("Pressed state occurs when a user clicks (or hits enter on a keyboard). This state only appears briefly while the page/action is loading.")]),t("hr"),t("h2",[e._v("Positioning")]),t("p",[t("img",{attrs:{src:"/images/components/popovers/popover_positioning.svg",alt:"Image of popover positioning"}})]),t("ul",[t("li",[e._v("The popover positioning will default to the right of whatever page element is being clicked.")]),t("li",[e._v("Special use cases may arrive in which the bottom, top, and left tooltip positions may be used if there is not sufficient space to display the popover, such as a top bar popover.")])]),t("hr"),t("h2",[e._v("Best practices")]),t("Grid",[t("GridCol",{attrs:{col:"span-6"}},[t("p",[t("img",{attrs:{src:"/images/components/popovers/popover_do.svg",alt:"Popover Do"}})]),t("Do"),t("p",[e._v("A popover can hold more detailed information and multiple lines of text.")])],1),t("GridCol",{attrs:{col:"span-6"}},[t("p",[t("img",{attrs:{src:"/images/components/popovers/popover_dont.svg",alt:"Popover Don&#x27;t"}})]),t("DoNot"),t("p",[e._v("A tooltip should not contain detailed information and multiple lines of text.")])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof p&&p(v),"function"==typeof u&&u(v);o.default=v.exports}}]);