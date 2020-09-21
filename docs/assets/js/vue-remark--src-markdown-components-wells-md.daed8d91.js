(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{189:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},200:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a(189),n=a(0);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},r=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===l(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:a[e]=function(){return i[e]}}))},c=n.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",h={excerpt:null,title:"Wells",parentIdentifier:"components",component:"zui-well"};var d=function(e){e.options[p]&&(e.options[p]=h),n.a.util.defineReactive(e.options,p,h),e.options.computed=c.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},m=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h2",[e._v("Usage")]),a("p",[e._v("Wells are messages that provide the user with feedback. They can either be Zywave system-generated or user-initiated.")]),a("p",[e._v("Wells provide a container and give emphasis to text. They should be used to attract the users attention to a message, more than just uncontained text. They are typically always present but in rare cases can animate in.")]),a("p",[e._v("For more information on when a well is the appropriate delivery system, see "),a("a",{attrs:{href:"/communications/messages"}},[e._v("messages.")])]),a("hr"),a("h2",[e._v("Anatomy")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_anatomy.svg",alt:"Anatomy"}})]),a("p",[e._v("We use the following terminology to refer to the parts of a well:")]),a("ol",[a("li",[a("strong",[e._v("Sidebar:")]),e._v(" Defines the type of well by color: info (blue), warning (yellow), error (red).")]),a("li",[a("strong",[e._v("Action (optional):")]),e._v(' A single action typically associated with the message, such as "View details."')]),a("li",[a("strong",[e._v("Icon:")]),e._v(" Defines the type of well by an icon: info, warning, error.")]),a("li",[a("strong",[e._v("Header (optional):")]),e._v(" Briefly describes the message to the user. The header should be H3 and remain on one line, with a max-width of 65 characters without spaces.")]),a("li",[a("strong",[e._v("Close:")]),e._v(" Allows the user to close a dismissible well.")]),a("li",[a("strong",[e._v("Body text:")]),e._v(" Provides the main content for the well. The body text should be three lines or less, with a max-width of 65 characters per line without spaces.")])]),a("p",[e._v("For detailed documentation on our well anatomy, view the "),a("a",{attrs:{href:"https://xd.adobe.com/view/6f1e7711-b6ef-4f78-b179-700ddde71e4a-3a4d/"}},[e._v("ZUI well design specs")]),e._v(".")]),a("hr"),a("h2",[e._v("Types")]),a("p",[e._v("We differentiate wells by both color and icon. These features allow a user skimming the page to know, at a glance, the importance of the message. We have three types of wells which are each color-coded with a unique icon to help convey the criticality of the message within.")]),a("h3",[e._v("Info well")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_info.svg",alt:"Info well"}})]),a("p",[e._v("Gives the user additional information or context that they might find useful.")]),a("br"),a("h3",[e._v("Warning well")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_warning.svg",alt:"Warning well"}})]),a("p",[e._v("Informs the user of the potentially undesirable outcome of a future action.")]),a("br"),a("h3",[e._v("Error well")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_error.svg",alt:"Error well"}})]),a("p",[e._v("Tells the user that an attempted action or product feature has failed.")]),a("br"),a("p",[e._v("For detailed documentation on our well anatomy, view the "),a("a",{attrs:{href:"https://xd.adobe.com/view/053e23bf-3a9c-4524-a302-25c2a431d5e3-506d/"}},[e._v("ZUI well design specs")]),e._v(".")]),a("hr"),a("h2",[e._v("Types")]),a("h4",[e._v("Default well (static)")]),a("p",[e._v("Default wells are best used when the message should be present, regardless of the user's actions.")]),a("br"),a("h4",[e._v("Dismissible well")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_dismissible.svg",alt:"Anatomy"}})]),a("p",[e._v("Sometimes a well doesn't need to be present on the screen at all times. A dismissible well allows the user to close it. Our recommendation is to use dismissible wells for reminders and minimal-impacting messages that appear frequently, but do not impede the user's workflow.")]),a("p",[e._v("When a well is dismissed, we recommend the application remember the user's choice and not show the well again after a page refresh or the back button is pressed to get back to the previous page.")]),a("p",[e._v("The close icon button follows the same state rules as a button. For more information on these states, see "),a("a",{attrs:{href:"/componenets/buttons"}},[e._v("buttons")]),e._v(".")]),a("br"),a("h4",[e._v("Banner well")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_banner.svg",alt:"Anatomy"}}),a("small",[e._v("An example where a banner well would be used is when an employee is reviewing forms before sending to an administrator.")])]),a("p",[e._v("A banner well spans across the entire width of the page. It can be used to deliver site-wide messages; messages that appear on more than one page; or messages that appear in a single workflow.")]),a("p",[e._v("We recommend you always make banner wells static so they don't make the page content jump around.")]),a("hr"),a("h2",[e._v("Behavior")]),a("h4",[e._v("Animated well")]),a("p",[a("img",{attrs:{src:"/images/components/well/zui-well-animation-final.gif",alt:"Anatomy"}})]),a("p",[e._v("A well can be animated to call attention to it, but only after a user takes action to trigger its appearance. Our recommendation is to use animated wells sparingly and only when a message is triggered by the user.")]),a("p",[e._v("Note: animating a well will push content down on the page, causing a jarring user experience.")]),a("br"),a("h4",[e._v("Positioning")]),a("p",[e._v("By default, wells are always either anchored to the top-left of the page or near the content that it's associated with. Whereas, user-initiated wells should appear by the action that triggered it.")]),a("br"),a("h4",[e._v("Multiple")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_actionable.svg",alt:"Actionable well"}})]),a("p",[e._v("Multiple wells should be used sparingly and only seen in certain circumstances. For example, a well appears on the screen and a user-initiated well is triggered.")]),a("p",[e._v("If there are multiple wells on a page, they should be the same width, with the exception of banner wells appearing with default wells.")]),a("hr"),a("h2",[e._v("Best-practices")]),a("h4",[e._v("Adding actions to wells")]),a("p",[a("img",{attrs:{src:"/images/components/well/well_actionable.svg",alt:"Anatomy"}})]),a("p",[e._v("Wells can include a single action associated with the message. Actions in wells are styled like text links and are the same color as the well sidebar. This contrasts the action against the well message and calls additional attention to it.")]),a("p",[e._v("To not confuse users, we recommend calling out one action per well.")]),a("p",[e._v("Well action buttons are styled similar to text links but are the same color as the well sidebar. For more information on these states, see the "),a("a",{attrs:{href:"https://xd.adobe.com/view/053e23bf-3a9c-4524-a302-25c2a431d5e3-506d/"}},[e._v("ZUI well design specs")]),e._v(".")]),a("br"),a("h4",[e._v("Lines of text (default well)")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("Do"),a("ul",[a("li",[e._v("Use concise language and keep it to one paragraph.")]),a("li",[e._v("Use 1-3 lines of text (just right).")])])],1),a("GridCol",{attrs:{col:"span-6"}},[a("DoNot"),a("ul",[a("li",[e._v("Avoid multi-paragraph wells.")]),a("li",[e._v("Avoid using only 1-5 words (too short).")])])],1)],1),a("spacer",{attrs:{size:"small"}}),a("h4",[e._v("Multiple wells")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("Do"),a("ul",[a("li",[e._v("Use default wells that are the same length.")]),a("li",[e._v("Use of a default well and a banner well on the same page is ok.")])])],1),a("GridCol",{attrs:{col:"span-6"}},[a("DoNot"),a("ul",[a("li",[e._v("Avoid setting default wells at different lengths.")]),a("li",[e._v("Avoid setting a banner well to the same width as a default well when both appear on the same page.")])])],1)],1),a("spacer",{attrs:{size:"small"}}),a("h4",[e._v("Well actions (number of actions)")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("Do"),a("p",[e._v("Use one action.")])],1),a("GridCol",{attrs:{col:"span-6"}},[a("DoNot"),a("p",[e._v("Avoid using more than one action.")])],1)],1),a("spacer",{attrs:{size:"small"}}),a("h4",[e._v("Well action style")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("Do"),a("p",[e._v("Match the text link action color to the well sidebar color.")])],1),a("GridCol",{attrs:{col:"span-6"}},[a("DoNot"),a("p",[e._v("Avoid using the primary and secondary ZUI buttons as the action.")])],1)],1),a("spacer",{attrs:{size:"small"}}),a("h4",[e._v("Labeling well actions")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("Do"),a("p",[e._v('Use an actionable label such as "View details."')])],1),a("GridCol",{attrs:{col:"span-6"}},[a("DoNot"),a("p",[e._v('Avoid using a non-actionable label such as "Details."')])],1)],1),a("spacer",{attrs:{size:"small"}}),a("h4",[e._v("Banner wells behavior")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("Do"),a("p",[e._v("Use a static banner well.")])],1),a("GridCol",{attrs:{col:"span-6"}},[a("DoNot"),a("p",[e._v("Avoid animating the banner well.")])],1)],1),a("spacer",{attrs:{size:"small"}}),a("h4",[e._v("Positioning of wells")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("Do"),a("p",[e._v("Default info wells appear before or after something.")])],1),a("GridCol",{attrs:{col:"span-6"}},[a("DoNot"),a("p",[e._v("Do not position a default info well at the very bottom of the page when its association is further up the page.")])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof r&&r(m),"function"==typeof d&&d(m);t.default=m.exports}}]);