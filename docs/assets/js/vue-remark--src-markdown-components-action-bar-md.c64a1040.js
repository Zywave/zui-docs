(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1l4t":function(e,t,o){"use strict";o.r(t);var a=o("KHd+"),n=o("UQSp"),i=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var r={VueRemarkRoot:n.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===s(r[e])&&"function"==typeof r[e].render?t[e]=r[e]:o[e]=function(){return r[e]}}))},l=i.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",h={excerpt:null,title:"Action bar",parentIdentifier:"components"};var p=function(e){e.options[d]&&(e.options[d]=h),i.a.util.defineReactive(e.options,d,h),e.options.computed=l.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},b=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("Action bar is used to provide the user with a consistent placement of actions on the screen when interacting with longer, more complex pages.")]),o("hr"),o("h2",[e._v("Usage")]),o("p",[e._v("Action bar keeps the action buttons in a standard state on the screen, even when scrolling. It is the ideal component to use when walking the user through a complex step flow. While the content on the page follows our max-content-widths, the page title and buttons float to the far left and right inside the action bar, using the entire width of the screen.")]),o("h4",[e._v("Alternate considerations")]),o("ul",[o("li",[e._v("Use "),o("a",{attrs:{href:"https://zui.zywave.com/components/dialogs/"}},[e._v("dialog box")]),e._v(" to keep the user focused on the form and input fields and if you have only a few input fields")])]),o("br"),o("h3",[e._v("In a long form")]),o("p",[e._v("When you have a long form that is not broken up into multiple steps")]),o("p",[o("img",{attrs:{src:"/images/components/action-bar/usage-long-form.svg",alt:"in a long form"}})]),o("p",[e._v("For detailed documentation on using Action bar in a long form, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/"}},[e._v("design specs")]),e._v(".")]),o("br"),o("h3",[e._v("In a multi-step form")]),o("p",[e._v("When you have a form that is broken up into multiple steps, the progress indicator is located on the left within the action bar and follows the format "),o("strong",[e._v("# of #: Step title")])]),o("p",[o("img",{attrs:{src:"/images/components/action-bar/usage-multi-step.svg",alt:"in a multi-step form"}})]),o("p",[e._v("For detailed documentation on using Action bar in a multi-step form, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/f418246b-ac48-41b4-ad71-570a8071e6aa"}},[e._v("design specs")]),e._v(".")]),o("br"),o("h3",[e._v("When editing a document")]),o("p",[o("img",{attrs:{src:"/images/components/action-bar/usage-editing.svg",alt:"when editing a document"}})]),o("p",[e._v("For detailed documentation on using Action bar when editing a document, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/a8f96726-827b-41aa-bca1-949362230fa8"}},[e._v("design specs")]),e._v(".")]),o("hr"),o("h2",[e._v("Anatomy")]),o("ol",[o("li",[o("strong",[e._v("Sticky bar:")]),e._v(" Shell-themed bar that is sticky to the bottom of the Top bar")]),o("li",[o("strong",[e._v("Page title:")]),e._v(" Title is located on the left side within the sticky bar")]),o("li",[o("strong",[e._v("Action buttons:")]),e._v(" action buttons are located on the right side of the sticky bar")])]),o("p",[o("img",{attrs:{src:"/images/components/action-bar/anatomy.svg",alt:"anatomy"}})]),o("p",[e._v("For detailed documentation on Action bar anatomy, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/04796dd6-e40a-4de0-b1ca-3175bacf5d38"}},[e._v("design specs")]),e._v(".")]),o("hr"),o("h2",[e._v("Behavior")]),o("p",[e._v("The main purpose of the action bar is to provide the user with a consistent placement of actions. The Top bar and Side nav should remain available in an action bar to not limit the user in their ability to navigate out of the current workflow when necessary. To achieve that, the following behavior should be used:")]),o("ul",[o("li",[e._v("Zywave Top bar behavior should remain unchanged")]),o("li",[e._v("The action bar is sticky and should remain flush up against the bottom of the Top bar, even as the user scrolls down the page to keep the actions in a consistent place on the screen")]),o("li",[e._v("Depending on the task at hand and how the data is being saved, a dialog may need to be displayed before a user navigates away to prevent loss of information")])]),o("br"),o("p",[o("img",{attrs:{src:"/images/components/action-bar/expandednav.svg",alt:"expanded side nav"}}),e._v("\nFocused state with an expanded side nav")]),o("p",[e._v("For detailed documentation on Action bar with an expanded side nav, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/77f2c9b5-cb7b-497a-b868-72ee9c245e25"}},[e._v("design specs")]),e._v(".")]),o("br"),o("p",[o("img",{attrs:{src:"/images/components/action-bar/scrolled.svg",alt:"scrolled focus state"}}),e._v("\nAction bar after scrolling down the page")]),o("p",[e._v("For detailed documentation on Action bar after scrolling down the page, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/e7bc4016-c457-4553-88c6-9dfb12c25ed2-b2ef/screen/8a119f76-5a5f-42c1-ad53-99c88ab13a0d"}},[e._v("design specs")]),e._v(".")]),o("hr"),o("h2",[e._v("Responsiveness")]),o("p",[o("img",{attrs:{src:"/images/components/action-bar/responsiveness.svg",alt:"responsiveness"}})]),o("p",[e._v("The mobile action bar is a bit different from the desktop version.")]),o("ul",[o("li",[e._v("The Top bar should disappear completely when entering a focus state on a mobile device")]),o("li",[e._v("The action bar remains sticky to the top of the page")]),o("li",[e._v("The background of the action bar is white")]),o("li",[e._v('If the action bar uses a "cancel" action, it should be replaced with ZUI-remove and be moved to the left side of the action bar')]),o("li",[e._v("The title or progress indicator should be aligned 20px to the right of the cancel or back button")]),o("li",[e._v("When there are more than two actions, the title can be removed from the action bar")]),o("li",[e._v("If the title is important for the user to see, use an ellipsis in the title if it overlaps the actions in the bar")]),o("li",[e._v("The save or forward directional button should be located on the right")])]),o("p",[e._v("For detailed documentation on Action bar responsiveness, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/fc9c6e16-fcda-4634-b5f9-81f6b3c93d65-a9cf/grid"}},[e._v("design specs")]),e._v(".")]),o("br"),o("p",[e._v("The action bar will stay fixed to the top of the view point when the keyboard is present.")]),o("p",[o("img",{attrs:{src:"/images/components/action-bar/keyboard.svg",alt:"keyboard"}})]),o("br"),o("p",[e._v('ZUI-remove will always be present. When you have a form that is broken up into multiple steps, include an action to go to the previous step such as "Back".')]),o("p",[o("img",{attrs:{src:"/images/components/action-bar/steps.svg",alt:"steps"}})]),o("hr"),o("h2",[e._v("Best practices")]),o("h4",[e._v("Complex forms")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("Do"),o("ul",[o("li",[e._v("Use Action bar for forms that are longer than 5 input fields")])])],1),o("GridCol",{attrs:{col:"span-6"}},[o("DoNot"),o("ul",[o("li",[e._v("Use Action bar for forms that are under 5 input fields")])])],1)],1),o("spacer",{attrs:{size:"small"}}),o("h4",[e._v("Multi-step forms")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("Do"),o("ul",[o("li",[e._v("Use Action bar for step flows where there are more than X steps")])])],1),o("GridCol",{attrs:{col:"span-6"}},[o("DoNot")],1)],1),o("spacer",{attrs:{size:"small"}}),o("h4",[e._v("Action buttons")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("Do"),o("ul",[o("li",[e._v("Use only one primary button")])])],1),o("GridCol",{attrs:{col:"span-6"}},[o("DoNot"),o("ul",[o("li",[e._v("Use more than one primary button")])])],1)],1),o("spacer",{attrs:{size:"small"}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(b),"function"==typeof p&&p(b);t.default=b.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);