(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{189:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},212:function(t,e,o){"use strict";o.r(e);var a=o(1),n=o(189),s=o(0);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var r={VueRemarkRoot:n.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===i(r[t])&&"function"==typeof r[t].render?e[t]=r[t]:o[t]=function(){return r[t]}}))},d=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",c={excerpt:null,title:"Radio buttons",parentIdentifier:"components",component:"zui-radio"};var h=function(t){t.options[u]&&(t.options[u]=c),s.a.util.defineReactive(t.options,u,c),t.options.computed=d.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},p=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h2",[t._v("What are radio buttons?")]),o("p",[t._v("A radio button is a selection control that allows the user to make a single selection. Unlike some other selection controls, radio buttons display all of the options, so the user has a chance to see all options before making a selection. They most commonly appear in forms.")]),o("hr"),o("h2",[t._v("When to use radio buttons")]),o("p",[t._v("Use a radio button when the user must select a single option from a list of mutually exclusive options less than 10. Meaning that a user can choose only one option, and once an option is selected, the previous option deselects.")]),o("h3",[t._v("Alternate considerations")]),o("ul",[o("li",[t._v("Use a "),o("a",{attrs:{href:"http://zui.zywave.com/components/dropdown-multi-select/"}},[t._v("dropdown multi-select")]),t._v(" if zero or more options can be selected and for lists larger than 10 items.")]),o("li",[t._v("Use a "),o("a",{attrs:{href:"http://zui.zywave.com/components/dropdown-select/"}},[t._v("dropdown select")]),t._v(" if only one option can be selected and for lists larger than 10 items.")]),o("li",[t._v("Use a "),o("a",{attrs:{href:"http://zui.zywave.com/components/checkboxes/"}},[t._v("checkbox")]),t._v(" if zero or more options can be selected or for lists smaller than 10 items.")]),o("li",[t._v("Use a "),o("a",{attrs:{href:"http://zui.zywave.com/components/toggles/"}},[t._v("toggle")]),t._v(" if the options are two opposing states such as a yes or no, on or off.")])]),o("hr"),o("h2",[t._v("Style variations")]),o("h3",[t._v("Standard radio button")]),o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/standardradio_small_outline.svg",alt:"Image of a standard radio button"}})]),o("p",[t._v("Standard radio buttons are the most common. They allow the user to make a selection and quickly move on to the next task.")]),o("ul",[o("li",[t._v("Use when the number of options is easy for the user to process, generally fewer than 10.")]),o("li",[t._v("Unless you want to emphasize the selection, this is usually the radio button you should use.")])]),o("Spacer",{attrs:{size:"small"}}),o("h3",[t._v("Inline radio button")]),o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/inlineradio_small_outline.svg",alt:"Image of an inline radio button"}})]),o("p",[t._v("Inline radio buttons are more prominently styled than standard radio buttons. They often feature an icon, and they’re designed to emphasize the selection being made.")]),o("ul",[o("li",[t._v("Reserve for especially important selections.")]),o("li",[t._v("Limit the number of options to what can fit on a single line.")]),o("li",[t._v("Use an icon, if appropriate, to further emphasize the importance of the selection.")]),o("li",[t._v("Don't use multiple groups of inline radio buttons on the same page.")])]),o("Spacer",{attrs:{size:"small"}}),o("h3",[t._v("Gallery radio button")]),o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/galleryradio_small_outline.svg",alt:"Image of a gallery radio button"}})]),o("p",[t._v("Gallery radio buttons are more prominent than both standard and inline radio buttons. They often feature an icon and take up a great deal of space on the page.")]),o("ul",[o("li",[t._v("Because they're so large, they should generally be reserved for when there is only one selection the user can make on that page.")]),o("li",[t._v("Icons both emphasize the selections and reinforce the contrast between the options.")])]),o("hr"),o("h2",[t._v("Anatomy")]),o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radiobutton_anatomy.svg",alt:"Image of all radio buttons"}})]),o("p",[t._v("For detailed documentation on our radio button anatomy, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/e2ecbbb0-c8a2-4009-6f25-de65bcda7cf1-94dd/grid"}},[t._v("ZUI radio button design specs")]),t._v(".")]),o("h3",[t._v("Standard radio buttons")]),o("ul",[o("li",[t._v("Radio button height and width will always be 24px")]),o("li",[t._v("Clickable area of the radio button will always be 36px, and include the label if applicable")]),o("li",[t._v("System font, size 14px, regular")])]),o("h3",[t._v("Inline radio buttons")]),o("ul",[o("li",[t._v("Radio button height will always be 42px, button width is determined by the length of the text")]),o("li",[t._v("0px margin between radio buttons, the buttons should be connected and added to the right of the first")]),o("li",[t._v("System font, size 14px, semibold")])]),o("h3",[t._v("Gallery radio buttons")]),o("ul",[o("li",[t._v("Radio button height and width is determined by height and width of text")]),o("li",[t._v("System font, size 14px, semibold")])]),o("hr"),o("h2",[t._v("Radio button states")]),o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radiobutton_states_standard.svg",alt:"Image of standard radio button states"}})]),o("h3",[t._v("Normal")]),o("p",[t._v("Normal state is the initial state of the radio button when the page first loads and before any action is taken.")]),o("h3",[t._v("Hover")]),o("p",[t._v("Hover state occurs when the user hovers over the radio button with their mouse.")]),o("h3",[t._v("Focus")]),o("p",[t._v("Focus state appears when the radio button is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.")]),o("h3",[t._v("Disabled")]),o("p",[t._v("Disabled state occurs when an action currently isn’t available. Disabled radio buttons should only be used when an action can be taken within the current UI to enable the radio button. If no action can be taken to enable the radio button, then the radio button should be hidden instead of disabled.")]),o("hr"),o("h2",[t._v("Radio button best practices")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radiogroup_do_outline.svg",alt:"Card Width Do"}})]),o("Do"),o("p",[t._v("Radio buttons should always be used when there is a list of two or more options, up to 10, and the user must select only one.")])],1),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radiogroup_dont_outline.svg",alt:"Card Width Don&#x27;t"}})]),o("DoNot"),o("p",[t._v("A single radio button should never be used alone.")])],1)],1),o("Spacer",{attrs:{size:"small"}}),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radioselection_do_outline.svg",alt:"Card Width Do"}})]),o("Do"),o("p",[t._v("Radio buttons should always have at least one option selected as default.")])],1),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radioselection_dont_outline.svg",alt:"Card Width Don&#x27;t"}})]),o("DoNot"),o("p",[t._v("A group of radio buttons should never be shown without a default selection.")])],1)],1),o("Spacer",{attrs:{size:"small"}}),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radiolabel_do_outline.svg",alt:"Card Width Do"}})]),o("Do"),o("p",[t._v("Radio buttons should always have a label.")])],1),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/radio-buttons/Assets_02-20/radiolabel_dont_outline.svg",alt:"Card Width Don&#x27;t"}})]),o("DoNot"),o("p",[t._v("A radio button without a label is unusable; the user will not know what selection they are making without text.")])],1)],1),o("hr"),o("p",[t._v("For more information on selection controls and keyboard accessibility "),o("a",{attrs:{href:"http://zui.zywave.com/patterns/forms/"}},[t._v("view form standards")]),t._v(".")])],1)}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof h&&h(p);e.default=p.exports}}]);