(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{194:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},216:function(e,t,o){"use strict";o.r(t);var a=o(1),s=o(194),n=o(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var r={VueRemarkRoot:s.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===i(r[e])&&"function"==typeof r[e].render?t[e]=r[e]:o[e]=function(){return r[e]}}))},h=n.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",u={excerpt:null,title:"Focused state",parentIdentifier:"patterns"};var d=function(e){e.options[c]&&(e.options[c]=u),n.a.util.defineReactive(e.options,c,u),e.options.computed=h.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("Focused state is used to minimize distractions for the user while they are completing forms or complex tasks. Focused state also keeps the action buttons in a standard state on the screen, even when scrolling. It is also the ideal pattern to use when walking the user through a complex step flow.\nThe "),o("a",{attrs:{href:"https://xd.adobe.com/view/cc14d242-954c-4229-4f07-ee7233a9efa9-ba25/"}},[e._v("Focused state specs")]),e._v(" contains information on sizing and spacing.")]),o("Spacer",{attrs:{size:"small"}}),o("h2",[e._v("Focused state types")]),o("h3",[e._v("Focused state - standard")]),o("ul",[o("li",[e._v("Focused state uses a blue bar that is sticky to the bottom of the Top bar")]),o("li",[e._v("The page title is located on the left side within the blue bar")]),o("li",[e._v("Action buttons are located on the right within the blue bar")]),o("li",[e._v("While the content on the page follow our max-content widths, the page title and buttons float to the far left and right using the entire width of the screen.")])]),o("p",[o("img",{attrs:{src:"/images/patterns/focused-state/focused-state-standard.svg",alt:"standard focused state"}})]),o("Spacer"),o("h3",[e._v("Focused state - step flow")]),o("ul",[o("li",[e._v("Focused state step flow uses the same sticky blue bar at the top of the page")]),o("li",[e._v("The progress indicator is located on the left within the blue bar and follows the format # of #: Step title")]),o("li",[e._v("Directional buttons are located on the right within the blue bar")]),o("li",[e._v("While the content on the page follow our max-content widths, the page title and buttons float to the far left and right using the entire width of the screen")])]),o("p",[o("img",{attrs:{src:"/images/patterns/focused-state/focused-state-step-flow.svg",alt:"step flow focused state"}})]),o("Spacer"),o("h3",[e._v("Focused state - mobile")]),o("p",[e._v("The mobile Focused state is a bit different from the desktop version.")]),o("ul",[o("li",[e._v("The Top bar should disappear completely when entering a Focus state on a mobile device")]),o("li",[e._v("The blue bar remains sticky to the top of the page")]),o("li",[e._v("The cancel or back directional button should move to the left side of the screen")]),o("li",[e._v("The title or progress indicator should be centered and will be truncated if it is too long")]),o("li",[e._v("The save or forward directional button should be located on the right")])]),o("p",[o("img",{attrs:{src:"/images/patterns/focused-state/focused-state-mobile.svg",alt:"mobile focused state"}})]),o("Spacer"),o("h2",[e._v("Behavior")]),o("p",[e._v("The main purpose of the focus state is to reduce distractions and increase the screen real estate for the actions. The Top bar and Side nav should remain available in a focused state to not limit the user in their ability to navigate out of the current workflow when necessary. To achieve that, the following behavior should be used:")]),o("br"),o("ul",[o("li",[e._v("Zywave Top bar behavior should remain unchanged")]),o("li",[e._v("The Side nav should automatically collapse when the user enters the Focus state")]),o("li",[e._v("Aside from being collapsed automatically, no other behavior of the Side nav should change"),o("ul",[o("li",[e._v("Hover behavior remains the same")]),o("li",[e._v("Users should still be able to expand the Side nav if they wish - the content within the page will respond to this change, moving to the right or changing size to make room for the Side nav.")])])]),o("li",[e._v("The Focused state header is sticky and should remain flush up against the bottom of the Top bar, even as the user scrolls down the page to keep the actions in a consistent place on the screen")]),o("li",[e._v("Depending on the task at hand and how the data is being saved, a warning message may need to be displayed before a user navigates away to prevent loss of information")])]),o("p",[o("img",{attrs:{src:"/images/patterns/focused-state/focused-state-expanded-nav.svg",alt:"expanded side nav"}}),e._v("\nThis image shows what it would look like if the Side nav is expanded.")]),o("br"),o("p",[o("img",{attrs:{src:"/images/patterns/focused-state/focused-state-scroll.svg",alt:"scrolled focus state"}}),e._v("\nThis image shows what it would look like if the user scrolls down the page. The blue bar remains stuck at the top of the page while the Top bar disappears as it normally does.")]),o("Spacer"),o("h2",[e._v("Best practices")]),o("ul",[o("li",[e._v("Focused state can be used for complicated forms that are longer than 5 input fields")]),o("li",[e._v("Focused state can be used for step flows where one or more of the steps is complex")]),o("li",[e._v("There should only be one save or continue button when using a Focused state"),o("ul",[o("li",[e._v("The primary button in the Focused state blue bar should be your only save")]),o("li",[e._v("This eliminates confusion around what portions of the page are saving when different buttons are being pressed")])])]),o("li",[e._v("Focused state can contain expanders that are editable")]),o("li",[e._v("Editable expanders should not include their own save action")]),o("li",[e._v("Be consistent with your expanders. Do not combine editable and not editable expanding components within one UI")])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof d&&d(p);t.default=p.exports}}]);