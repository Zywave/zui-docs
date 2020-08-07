(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{194:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},237:function(e,t,o){"use strict";o.r(t);var s=o(1),n=o(194),a=o(0);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},r=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===c(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:o[e]=function(){return i[e]}}))},l=a.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",p={excerpt:null,title:"Checkboxes",parentIdentifier:"components",component:"zui-checkbox"};var d=function(e){e.options[h]&&(e.options[h]=p),a.a.util.defineReactive(e.options,h,p),e.options.computed=l.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},u=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("What are checkboxes?")]),o("p",[e._v("Checkboxes are selection controls that allow the user to make multiple selections from a list of options. Unlike some other selection controls, checkboxes display all of the options, so the user has a chance to see all options before and while making their selections. They most commonly appear in forms.")]),o("hr"),o("h2",[e._v("When to use checkboxes")]),o("p",[e._v("A checkbox should be used when selecting zero, one, or more independent options from a list or to show a list of sub-selections. A standalone checkbox can also be used to select a single option in certain environments and situations.")]),o("h3",[e._v("Alternate considerations")]),o("ul",[o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/dropdown-multi-select/"}},[e._v("dropdown multi-select")]),e._v(" if zero or more options can be selected and for lists larger than 10 items.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/dropdown-select/"}},[e._v("dropdown select")]),e._v(" if only one option can be selected and for lists larger than 10 items.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/radio-buttons/"}},[e._v("radio button")]),e._v(" if only one option can be selected and for lists smaller than 10 items.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/toggles/"}},[e._v("toggle")]),e._v(" if the options are two opposing states such as a yes or no, on or off.")])]),o("hr"),o("h2",[e._v("Style variations")]),o("h3",[e._v("Standard checkbox")]),o("p",[o("img",{attrs:{src:"/images/components/checkboxes/Assets_03-20/standardcheck_small.svg",alt:"Image of a standard checkbox"}})]),o("p",[e._v("Standard checkboxes are the most common. They allow the user to make selections and quickly move on to the next task.")]),o("ul",[o("li",[e._v("Use when the number of options is easy for the user to process, generally fewer than 10.")]),o("li",[e._v("Unless you want to emphasize the selection, these are usually the checkboxes you should use.")])]),o("Spacer",{attrs:{size:"small"}}),o("h3",[e._v("Gallery checkbox")]),o("p",[o("img",{attrs:{src:"/images/components/checkboxes/Assets_03-20/gallerycheck_small.svg",alt:"Image of a gallery checkbox"}})]),o("p",[e._v("Gallery checkboxes are more prominent than standard checkboxes. They often feature an icon and take up a great deal of space on the page. They are generally used when they control the only selection the user can make on that page.")]),o("ul",[o("li",[e._v("Because they’re so large, they should generally be reserved for when that selection is the only one the user can make on that page.")]),o("li",[e._v("Icons both emphasize the selection and reinforce the contrast between the options.")])]),o("hr"),o("h2",[e._v("Anatomy")]),o("p",[o("img",{attrs:{src:"/images/components/checkboxes/Assets_03-20/checkbox_anatomy.svg",alt:"Image of all checkboxes"}})]),o("p",[e._v("For detailed documentation on our checkbox anatomy, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/93be6c9d-e5f1-40af-7116-323e57943237-e58f/grid"}},[e._v("ZUI checkbox design specs")]),e._v(".")]),o("h3",[e._v("Standard checkbox")]),o("ul",[o("li",[e._v("Checkbox height and width will always be 24px")]),o("li",[e._v("Clickable area of the checkbox will always be 36px, and include the label if applicable")]),o("li",[e._v("System font, size 14px, regular")])]),o("h3",[e._v("Gallery checkbox")]),o("ul",[o("li",[e._v("Checkbox height and width is determined by height and width of text")]),o("li",[e._v("System font, size 14px, semibold")])]),o("hr"),o("h2",[e._v("Checkbox states")]),o("p",[o("img",{attrs:{src:"/images/components/checkboxes/Assets_03-20/checkbox_states_standard.svg",alt:"Image of standard checkbox states"}})]),o("h3",[e._v("Normal")]),o("p",[e._v("Normal state is the initial state of the checkbox when the page first loads and before any action is taken.")]),o("h3",[e._v("Hover")]),o("p",[e._v("Hover state occurs when the user hovers over the checkbox with their mouse.")]),o("h3",[e._v("Focus")]),o("p",[e._v("Focus state appears when the checkbox is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.")]),o("h3",[e._v("Disabled")]),o("p",[e._v("Disabled state occurs when an action currently isn’t available. Disabled checkboxes should only be used when an action can be taken within the current UI to enable the checkbox. If no action can be taken to enable the checkbox, then the checkbox should be hidden instead of disabled.")]),o("hr"),o("h2",[e._v("Checkbox best practices")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/checkboxes/Assets_03-20/checklabel_do.svg",alt:"Checkbox Label Do"}})]),o("Do"),o("p",[e._v("Checkboxes should always have a label.")])],1),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/checkboxes/Assets_03-20/checklabel_dont.svg",alt:"Checkbox Label Don&#x27;t"}})]),o("DoNot"),o("p",[e._v("A checkbox without a label is unusable; the user will not know what selection they are making without text.")])],1)],1),o("hr"),o("p",[e._v("For more information on selection controls and keyboard accessibility "),o("a",{attrs:{href:"http://zui.zywave.com/patterns/forms/"}},[e._v("view form standards")]),e._v(".")])],1)}),[],!1,null,null,null);"function"==typeof r&&r(u),"function"==typeof d&&d(u);t.default=u.exports}}]);