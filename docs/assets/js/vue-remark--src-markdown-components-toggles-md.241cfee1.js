(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{189:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},209:function(e,t,o){"use strict";o.r(t);var n=o(1),s=o(189),a=o(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var l={VueRemarkRoot:s.a},r=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===i(l[e])&&"function"==typeof l[e].render?t[e]=l[e]:o[e]=function(){return l[e]}}))},c=a.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",g={excerpt:null,title:"Toggles",parentIdentifier:"components",component:"zui-toggle"};var d=function(e){e.options[h]&&(e.options[h]=g),a.a.util.defineReactive(e.options,h,g),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},u=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("What are toggles?")]),o("p",[e._v("A toggle is a page element used to enable or disable an associated setting or feature. For the most effective toggle usage, consider these toggle best practices:")]),o("ul",[o("li",[o("p",[e._v("Toggle settings should take effect immediately without the need for a confirm or save, just as a light switch is immediate.")])]),o("li",[o("p",[e._v("Subsequent changes to the UI from the change of a toggle setting—such as hiding, showing, enabling, or disabling content—are not only acceptable but expected.")])]),o("li",[o("p",[e._v("Labeling should generally be kept inline, to the left of a toggle and should imply the on/off or yes/no states.")])]),o("li",[o("p",[e._v("If necessary, on/off labels should be kept next to a toggle rather than inside the component itself.")])])]),o("hr"),o("h2",[e._v("When to use toggles")]),o("p",[e._v("Use a toggle when the user must select a single option from a set of two opposing states such as a yes or no, on or off. Toggles should be used sparingly—there are few situations in which a toggle is truly the best component choice. If you are questioning whether or not a toggle is the component you need to use, you may want to consider one of the following options instead.")]),o("h3",[e._v("Alternate considerations")]),o("ul",[o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/dropdown-multi-select/"}},[e._v("dropdown multi-select")]),e._v(" if zero or more options can be selected and for lists larger than 10 items.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/dropdown-select/"}},[e._v("dropdown select")]),e._v(" if only one option can be selected and for lists larger than 10 items.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/radio-buttons/"}},[e._v("radio button")]),e._v(" if only one option can be selected and for lists smaller than 10 items.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/checkboxes/"}},[e._v("checkbox")]),e._v(" if zero or more options can be selected and for lists smaller than 10 items.")])]),o("hr"),o("h2",[e._v("Styling and anatomy")]),o("p",[o("img",{attrs:{src:"/images/components/toggles/toggles.svg",alt:"Toggles"}})]),o("ul",[o("li",[e._v("Toggle height will always be 24px and width will always be 48px")]),o("li",[e._v("Clickable area of the radio button will always be 36px")])]),o("hr"),o("h2",[e._v("Toggle states")]),o("p",[o("img",{attrs:{src:"/images/components/toggles/toggles_states.svg",alt:"Toggle States"}})]),o("h3",[e._v("Normal")]),o("p",[e._v("Normal state is the initial state of the toggle when the page first loads and before any action is taken. Toggles are always in a selected state—on or off—and can be enabled or, less commonly, disabled.")]),o("h3",[e._v("Hover")]),o("p",[e._v("Hover state occurs when the user hovers over the toggle with their mouse.")]),o("h3",[e._v("Focus")]),o("p",[e._v("Focus state appears when the toggle is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate.")]),o("h3",[e._v("Disabled")]),o("p",[e._v("Disabled state occurs when an action currently isn't available. Disabled toggles are locked into their current state and should only be used when an action can be taken within the current UI to enable the toggle. If no action can be taken to enable the toggle, then the toggle should be hidden instead of disabled.")]),o("hr"),o("h2",[e._v("Behavior and interaction")]),o("h3",[e._v("Enabled")]),o("p",[e._v("The handle is flush to one side or the other of the background. When the handle or the background is clicked, the handle slides smoothly, becoming flush with the opposite side of the background.")]),o("h3",[e._v("Disabled")]),o("p",[e._v("When a toggle is locked, the handle is still flush to one side or the other of the background depending on what state the toggle is locked in. However, when the handle or background is clicked, the handle will wiggle in its current position, indicating that the click was received, but the toggle state cannot be changed.")])])}),[],!1,null,null,null);"function"==typeof r&&r(u),"function"==typeof d&&d(u);t.default=u.exports}}]);