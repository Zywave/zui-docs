(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{194:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},233:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o(194),i=o(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var l={VueRemarkRoot:n.a},s=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===r(l[e])&&"function"==typeof l[e].render?t[e]=l[e]:o[e]=function(){return l[e]}}))},d=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",g={excerpt:null,title:"Dialogs",parentIdentifier:"components",component:"zui-dialog"};var p=function(e){e.options[c]&&(e.options[c]=g),i.a.util.defineReactive(e.options,c,g),e.options.computed=d.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},h=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("Introduction")]),o("p",[e._v("Dialogs are used to display a message or content on a layer above the current page. Content inside a dialog can vary greatly. Usually, a dialog is centered around a specific action that a user must take. Saving a setting or a permanent delete are examples of when dialogs are useful.")]),o("p",[e._v("Best practice is to avoid including forms within a dialog.")]),o("hr"),o("h2",[e._v("Anatomy")]),o("br"),o("p",[o("img",{attrs:{src:"/images/components/dialogs/dialog_Anatomy.svg",alt:"Dialog Anatomy"}})]),o("br"),o("h3",[e._v("Title")]),o("p",[e._v("H1 title should not span more than 1 line.")]),o("p",[o("br"),o("br")]),o("h3",[e._v("Conent area")]),o("p",[e._v("Content area should be a minimum of 120px tall.")]),o("p",[e._v("Content area width of 415 on SMALL dialogs, 615 on STANDARD dialogs, and 815 on LARGE dialogs.")]),o("p",[o("img",{attrs:{src:"/images/components/dialogs/dialog_Minimum_Height.svg",alt:"Dialog Content Area"}})]),o("p",[o("br"),o("br")]),o("h3",[e._v("Close X")]),o("p",[e._v("The close X icon button is located in the upper-right corner outside the dialog box.")]),o("p",[o("img",{attrs:{src:"/images/components/dialogs/close_Specs.svg",alt:"Close specs"}}),o("img",{attrs:{src:"/images/components/dialogs/close_Hover.svg",alt:"Close hover"}})]),o("p",[o("br"),o("br")]),o("h3",[e._v("Actions area")]),o("ol",[o("li",[o("p",[o("strong",[e._v("Primary action")]),o("br"),e._v("\nPrimary actions are right aligned at the bottom of the dialog 30px below the content area."),o("br"),e._v("\nThe primary action should always appear on the far right.")])]),o("li",[o("p",[o("strong",[e._v("Secondary actions")]),o("br"),e._v("\nSecondary actions appear to the left of the primary action, 30px below the content area")])]),o("li",[o("p",[o("strong",[e._v("Tertiary action")]),o("br"),e._v("\nTertiary actions or help text appear left aligned 30px below the content")])])]),o("p",[o("img",{attrs:{src:"/images/components/dialogs/dialog_Action_Areas.svg",alt:"Dialog Actions"}})]),o("hr"),o("h2",[e._v("Sizing and Spacing")]),o("br"),o("p",[o("strong",[e._v("Typographic heirarchy")])]),o("p",[e._v("Title should be H1.")]),o("p",[e._v("Contents should follow body copy guidelines.\n"),o("br"),o("br")]),o("h3",[e._v("Padding")]),o("ul",[o("li",[e._v("36px padding around entire perimeter.")]),o("li",[e._v("15px padding between Title and main content area.")]),o("li",[e._v("30px padding between main content area and actions area.")])]),o("p",[o("img",{attrs:{src:"/images/components/dialogs/dialog_Padding.svg",alt:"Dialog Padding"}})]),o("p",[e._v("If the dialog is taller than the viewport, 36px padding will be applied between the dialog and the viewport. If the dialog is shorter than the viewport, then it will be centered vertically."),o("br"),e._v("\nDialogs will always be centered horizontally within the viewport.")]),o("hr"),o("h2",[e._v("Variations")]),o("h3",[e._v("Small")]),o("p",[e._v("Commonly used to interrupt the user with messaging you need them to confirm, such as delete and loss of data if navigating to a different page.")]),o("p",[o("img",{attrs:{src:"/images/components/dialogs/dialog_Small.svg",alt:"Small dialog"}}),o("br"),o("br")]),o("h3",[e._v("Standard")]),o("p",[e._v("Standard dialogs should be used for messages that are longer in length, such as legal jargon.")]),o("p",[o("img",{attrs:{src:"/images/components/dialogs/dialog_Standard.svg",alt:"Standard dialog"}}),o("br"),o("br")]),o("h3",[e._v("Large")]),o("p",[e._v("Use a large dialog when there is a more functionality, like a table.")]),o("p",[o("img",{attrs:{src:"/images/components/dialogs/dialog_Large.svg",alt:"Large dialog"}})]),o("hr"),o("h2",[e._v("Interaction")]),o("h3",[e._v("Closing a dialog")]),o("p",[e._v("There are several ways that a dialog can be closed and the one that you choose depends on the type of content that it contains. Most dialogs will have more than one way to close them.")]),o("ol",[o("li",[o("p",[o("strong",[e._v("Clicking into the darkness")]),e._v(" - Standard functionality for closing a dialog; this is best used when the user isn't filling out any data within the dialog. Since we prefer to avoid including forms within a dialog, this functionality will be very common and will be enabled automatically when using ZUI dialog. If your dialog includes data entry please make sure you disable this functionality.")])]),o("li",[o("p",[o("strong",[e._v("Clicking the X")]),e._v(" - This can be used on every dialog to close the message.")])]),o("li",[o("p",[o("strong",[e._v("Clicking a close button")]),e._v(" - Close buttons will only be included if there is no action within the dialog that we want the user to take. One example of this is a dialog that only contains legal information that the user can read, but doesn't need to act upon.")])])]),o("h3",[e._v("Scrolling")]),o("p",[e._v("Best practice is to avoid the need for a dialog to scroll. When scrolling is required, the entire dialog screen will scroll. Remember the to keep 36px padding between the viewport and the dialog when it first appears to the user.")]),o("p",[e._v("Background contents that are underneath the dark overlay will remain static while the dialog scrolls.")])])}),[],!1,null,null,null);"function"==typeof s&&s(h),"function"==typeof p&&p(h);t.default=h.exports}}]);