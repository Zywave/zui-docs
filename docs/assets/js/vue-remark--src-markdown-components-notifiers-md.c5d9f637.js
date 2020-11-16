(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{192:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},220:function(e,t,o){"use strict";o.r(t);var i=o(1),s=o(192),r=o(0);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var a={VueRemarkRoot:s.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(a).forEach((function(e){"object"===n(a[e])&&"function"==typeof a[e].render?t[e]=a[e]:o[e]=function(){return a[e]}}))},l=r.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",m={excerpt:null,title:"Notifiers",parentIdentifier:"components",component:"zui-notifier"};var p=function(e){e.options[h]&&(e.options[h]=m),r.a.util.defineReactive(e.options,h,m),e.options.computed=l.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},u=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("Usage")]),o("p",[e._v("Notifiers are unobtrusive messages that provide the user with a simple feedback alert.  Notifiers can be either Zywave system generated or user-initiated.")]),o("p",[e._v("Notifiers should be used:")]),o("ul",[o("li",[e._v("to give the user general information about the product or current process.")]),o("li",[e._v("to alert the user and inform them that something happened in the system.")]),o("li",[e._v("to inform the user of server-side issues or errors that are not at the fault of the user.")]),o("li",[e._v("to provide a timely alert that does not interfere with the current actions of the user.")])]),o("p",[e._v("For more information on when a notifier is the appropriate delivery component, see "),o("a",{attrs:{href:"/communications/messages/"}},[e._v("messages")]),e._v(".")]),o("hr"),o("h2",[e._v("Anatomy")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/notifier_anatomy.svg",alt:"Notifier anatomy"}})]),o("p",[e._v("Notifiers consist of an opaque background, drop shadow, icon, text, and close button to dismiss the notifier.")]),o("ul",[o("li",[o("strong",[e._v("Top bar:")]),e._v(" Defines the type of notifier by color: info (blue), success (green), error (red).")]),o("li",[o("strong",[e._v("Icon:")]),e._v(" Defines the type of notifier by an icon: info, success, error.")]),o("li",[o("strong",[e._v("Header:")]),e._v(" Briefly describes the message to the user. The header should be H3 and remain on one line, with a max-width of 50 characters without spaces.")]),o("li",[o("strong",[e._v("Body text:")]),e._v(" Provides supporting content for the header. The body text should be kept simple and span no longer than 3 lines.")]),o("li",[o("strong",[e._v("Action (optional):")]),e._v(" A single action typically associated with the message, such as 'View details.'")]),o("li",[o("strong",[e._v("Close:")]),e._v(" A close button allows the user to dismiss the message.")])]),o("p",[e._v("For detailed documentation on our notifier anatomy, view the "),o("a",{attrs:{href:"https://xd.adobe.com/view/759fc73f-c8df-44b6-adb5-b600e2badaf3-20cc/grid/"}},[e._v("ZUI notifier design specs")]),e._v(".")]),o("hr"),o("h2",[e._v("Types")]),o("p",[e._v("We have three types of notifiers to help convey a message and each is color-coded with a unique icon. These features allow a user to know, at a glance, how important the message in that notifier is.")]),o("h3",[e._v("Info notifier")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/info_notifier.svg",alt:"Info notifier"}})]),o("p",[e._v("Used to give the user general information about the product or current process.")]),o("h3",[e._v("Success notifier")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/success_notifier.svg",alt:"Success notifier"}})]),o("p",[e._v("Used to inform the user that an action or workflow has been completed successfully.")]),o("h3",[e._v("Error notifier")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/error_notifier.svg",alt:"Error notifier"}})]),o("p",[e._v("Used to alert the user of server-side issues or errors that are not at the fault of the user.")]),o("hr"),o("h2",[e._v("Responsive layout (WIP)")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/mobile-notifier.svg",alt:"Mobile notifier"}})]),o("p",[e._v("While the behavior remains unchanged, the location of Notifiers is different on mobile devices with viewports smaller than 720px. The Notifiers on mobile devices should be pinned to the bottom of the screen instead of the top. This makes it easier for the user to dismiss the message or click the action contained within.")]),o("hr"),o("h2",[e._v("Behavior")]),o("h3",[e._v("Positioning")]),o("p",[e._v("Notifiers are anchored to the top right of the viewport, above all content in z-space.")]),o("p",[e._v("For example, if the user is within a dialog and triggers a notifier, the notifier will appear in the top right of the viewport, above all content on the screen, including the dialog.")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/notifier_placement.svg",alt:"Notifier positioning"}})]),o("h3",[e._v("Timing")]),o("p",[e._v("By default, notifiers will be on a timer and disappear on their own without interaction from the user. The notifier must also still include a close button in the upper right corner that will allow the user to manually dismiss the message.  When a notifier includes an action, timing should be disabled so that the user has a chance to click the action it contains.")]),o("p",[e._v("A timer "),o("em",[e._v("should be")]),e._v(" used in cases where the notifier includes non-crucial information, for example:")]),o("ul",[o("li",[e._v("when there is general information about the product or current process, such as syncing that does not require the user to take action.")]),o("li",[e._v("when there is an action or workflow that has been completed successfully, such as the user successfully adding an account.")])]),o("p",[e._v("A timer "),o("em",[e._v("should not be")]),e._v(" used in cases where the notifier includes an action or error, for example:")]),o("ul",[o("li",[e._v("when there is an action that the user may choose to explore, such as viewing details on an imported file.")]),o("li",[e._v("when a server-side issue or error that is not at the fault of the user has occurred, such as a lost connection.")])]),o("p",[e._v("The default length of time a notifier will remain on the screen, after animating in, is 5 seconds. This time can be adjusted based on the length of the message. We recommend not reducing the time for shorter messages, but longer messages can be extended—an additional 1 second for every 120 characters is a good rule of thumb.")]),o("h3",[e._v("Animation")]),o("p",[e._v("Notifiers slide up and fade in as they appear on the screen, and slide down and fade out when they disappear.")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/zui-notifier-animation-demo.gif",alt:"Notifier animation"}})]),o("hr"),o("h2",[e._v("Best practices")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/notifier/do_general.svg",alt:"Notifier information do"}})]),o("Do"),o("p",[e._v("Use a notifier to give the user general information, such as notifying the user of a document ready for review.")])],1),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/notifier/donot_indepth.svg",alt:"Notifier information do not"}})]),o("DoNot"),o("p",[e._v("A notifier should not be used to give the user in-depth information that requires more emphasis or to remain on the page, a well or dialog should be used in this case.")])],1)],1),o("Spacer",{attrs:{size:"small"}}),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/notifier/do_success.svg",alt:"Notifier success do"}})]),o("Do"),o("p",[e._v("Use a notifier to alert the user that their action was successful, such as informing the user that their import is complete.")])],1),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/notifier/donot_overuse.svg",alt:"Notifier success do not"}})]),o("DoNot"),o("p",[e._v("A notifier should not be used to alert the user that every action is successful, this should be used for larger actions such as import or the completion of a larger workflow.")])],1)],1),o("Spacer",{attrs:{size:"small"}}),o("h3",[e._v("Actions")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/notifier_action.svg",alt:"Notifier actions"}})]),o("p",[e._v("Notifiers can include a single action associated with the message. Notifier actions are styled similar to text links, but are the same color as the notifier top bar.")]),o("p",[e._v("Actions should only be used when there is more information associated with the message that the user may choose to explore. When the action is pressed, the notifier is dismissed and the user is routed to the correct location.")]),o("p",[e._v("Examples of when actions could be used:")]),o("ul",[o("li",[e._v("in an informational notifier with a message about a new enhancement and a link to more information.")]),o("li",[e._v("in a success notifier with a message that an import was successful and a link to view the import.")])]),o("p",[e._v("If the action must remain visible to the user or is critical for the user to take, a "),o("a",{attrs:{href:"/components/wells/"}},[e._v("well")]),e._v(" or "),o("a",{attrs:{href:"/components/dialogs/"}},[e._v("dialog")]),e._v(" may be the appropriate delivery component.")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/notifier/do_actioncolor.svg",alt:"Notifier action do"}})]),o("Do"),o("p",[e._v("Use the same action color as the notifier color.")])],1),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/notifier/donot_actioncolor.svg",alt:"Notifier action do not"}})]),o("DoNot"),o("p",[e._v("An action should not use a different color than the notifier.")])],1)],1),o("Spacer",{attrs:{size:"small"}}),o("h3",[e._v("Multiple notifiers (WIP)")]),o("p",[o("img",{attrs:{src:"/images/components/notifier/notifier-multiple.svg",alt:"Multiple notifiers"}})]),o("p",[e._v("When multiple notifiers appear at one time on the screen, they should vertically stack to allow the user to see all messages at once and dismiss or choose an action as needed.")]),o("p",[e._v("There should not be more than three notifiers on the screen at one time, one of the three current notifiers must be dismissed or allowed to time out before a new notifier may appear.")]),o("p",[e._v("Multiple notifiers should be used sparingly and only seen in certain circumstances, for example:")]),o("ul",[o("li",[e._v("multiple errors occurring on the same page.")]),o("li",[e._v("multiple notifications appearing from the same workflow.")])]),o("hr"),o("h2",[e._v("Alternate considerations")]),o("p",[e._v("In the case of messaging:")]),o("ul",[o("li",[e._v("A "),o("a",{attrs:{href:"/components/wells/"}},[e._v("well")]),e._v(" may be the appropriate component if the message needs moderate emphasis or an action should remain visible to the user without a timed dismissal.")]),o("li",[e._v("A "),o("a",{attrs:{href:"/components/dialogs/"}},[e._v("dialog")]),e._v(" may be the appropriate component if the message needs high emphasis or a specific action the user must take.")])]),o("p",[e._v("In the case of errors:")]),o("ul",[o("li",[e._v("A "),o("a",{attrs:{href:"/communications/error-messages/"}},[e._v("banner well")]),e._v(" may be the appropriate component when a feature or resource error occurs, such as a 404 resource not found error.")]),o("li",[e._v("An "),o("a",{attrs:{href:"/communications/error-messages/"}},[e._v("error page")]),e._v(" may be the appropriate component when a critical system error occurs, such as a 500 internal server error.")])]),o("p",[e._v("For more information on when a notifier is the appropriate delivery component, see "),o("a",{attrs:{href:"/communications/messages/"}},[e._v("messages")]),e._v(".")])],1)}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof p&&p(u);t.default=u.exports}}]);