(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},219:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o(194),s=o(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===i(r[e])&&"function"==typeof r[e].render?t[e]=r[e]:o[e]=function(){return r[e]}}))},c=s.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",u={excerpt:null,title:"Messages",subtitle:"A message is a textual communication that tells the user what's going on within our product.",parentIdentifier:"communications"};var p=function(e){e.options[h]&&(e.options[h]=u),s.a.util.defineReactive(e.options,h,u),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},d=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("What is a message?")]),o("p",[e._v("A message is a communication with the user—one that's supposed to convey ideas and evoke a positive emotional response. When thinking about messages, it's essential to think about the content of that communication first, before considering the proper way to style it.")]),o("p",[e._v("In other words, messages consist of two components. First, there's the message type, which refers to the kind of content the message needs to convey. Then, there's the delivery system, which refers to the design element used to present that content.")]),o("p",[e._v("In order to build an effective message, think about what the user needs to know, when they need to know it, and what delivery systems are available to convey the message.")]),o("hr"),o("h2",[e._v("Delivery systems")]),o("p",[e._v("Delivery systems are the vehicles we use to convey a message to the user. Remember, the message type—the information conveyed, the audience, the context on the page, etc.—should determine the type of delivery system used, not the other way around.")]),o("Grid",[o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Well")]),o("p",[e._v("A non-dismissible container with text. For more information, see "),o("a",{attrs:{href:"/components/zui-well"}},[e._v("Wells")]),e._v(".")])]),o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Toast")]),o("p",[e._v("An unobtrusive, dismissible piece of text in a window element. For more information, see "),o("a",{attrs:{href:"/components/zui-notifier"}},[e._v("Toast")]),e._v(".")])]),o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Dialog")]),o("p",[e._v("Text displayed in a content box layered above the current page. For more information, see "),o("a",{attrs:{href:"/components/zui-dialog"}},[e._v("Dialog")]),e._v(".")])]),o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Tooltip")]),o("p",[e._v("A short, helpful piece of text produced by hovering, often an icon next to the field it is referencing. For more information, see "),o("a",{attrs:{href:"/components/zui-tooltip"}},[e._v("Tooltip")]),e._v(".")])]),o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Popover")]),o("p",[e._v("Text displayed in a content box adjacent to the form field or page section it applies to, that opens and closes with a click.")])]),o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Uncontained text")]),o("p",[e._v("Any text without styling around it. Uncontained text is available on screen at all times to give direction and context to the page or section.")])])],1),o("hr"),o("h2",[e._v("Message types")]),o("p",[e._v("The message type refers to the specific content the message needs to convey. In addition to the information that the message contains, message type also considers the importance of the message as well as the tone of the message.")]),o("h3",[e._v("General instruction")]),o("p",[e._v("General instructions are basic page instructions or page section descriptions. General instruction messages provide context, letting the user know where they are or what they can do.")]),o("h4",[e._v("Delivery systems")]),o("p",[o("a",{attrs:{href:"#uncontained-text"}},[e._v("Uncontained text")])]),o("h3",[e._v("Guidance")]),o("p",[e._v("Guidance text offers the user additional information, instruction or context, and usually applies to a specific page element or action. Unlike alerts, guidance precedes the user's action and shouldn't interrupt a workflow. In other words, guidance may be helpful, but shouldn't be "),o("strong",[e._v("necessary")]),e._v(" for a user to complete their desired action.")]),o("p",[e._v("There are three general kinds of guidance messages—suggestions, information and warnings. The boundaries between these kinds of messages may not always be distinct, and often the same set of facts could be conveyed in more than one kind of guidance message. That's why it might be helpful to think of these kinds of message as being on a continuum.")]),o("p",[e._v("The importance of the message and desired tone will ultimately determine whether we think of a message as a suggestion, a piece of information, or a warning. That will also help determine the best the type of delivery system for the message.")]),o("p",[o("img",{attrs:{src:"/images/communications/messages/guidance-spectrum.png",alt:"Guidance spectrum"}})]),o("Grid",[o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Suggestion")]),o("p",[e._v("A suggestion conveys a best practice, ideal workflow or other supplemental information. Suggestions offer specific tips that could make actions easier for many users, but may not apply to all users, and are not strictly necessary to complete the actions at hand.")]),o("h5",[e._v("Delivery systems")]),o("ul",[o("li",[o("a",{attrs:{href:"#well"}},[e._v("Well")])]),o("li",[o("a",{attrs:{href:"#uncontained-text"}},[e._v("Uncontained text")])])])]),o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Information")]),o("p",[e._v("Information guidance gives the user additional information or context that they might find useful. Unlike a suggestion, which mentions best practices or ideal workflows, information takes a neutral stance and does not necessarily advocate for a specific course of action.")]),o("h5",[e._v("Delivery systems")]),o("ul",[o("li",[o("a",{attrs:{href:"#well"}},[e._v("Well")])]),o("li",[o("a",{attrs:{href:"#tooltip"}},[e._v("Tooltip")])]),o("li",[o("a",{attrs:{href:"#popover"}},[e._v("Popover")])]),o("li",[o("a",{attrs:{href:"#uncontained-text"}},[e._v("Uncontained text")])])])]),o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Warning")]),o("p",[e._v("Warning guidance informs the user of the potentially undesirable outcome of a future action. Unlike warning alerts—which interrupt the user's workflow and require additional action before proceeding—the user does not have to acknowledge or otherwise interact with warning guidance. The severity of the potential harm will often determine whether warning guidance or a warning alert is appropriate.")]),o("h5",[e._v("Delivery systems")]),o("ul",[o("li",[o("a",{attrs:{href:"#well"}},[e._v("Well")])])])])],1),o("h3",[e._v("Alerts")]),o("Grid",[o("GridCol",{attrs:{col:"span-4"}},[o("p",[e._v("Alerts inform the user about the outcome of an action—either an action taken by the user or an action that's the result of a system process. Unlike guidance, alerts may interrupt a user's workflow and require additional action to be taken before allowing the user to proceed. Often, alerts inform the user of the outcome of a validation check.")])]),o("GridCol",{attrs:{col:"span-8"}},[o("p",[o("img",{attrs:{src:"/images/communications/messages/alerts-infographic.png",alt:"Alerts infographic"}})])]),o("GridCol",{attrs:{col:"span-3"}},[o("h4",[e._v("Information alert")]),o("p",[e._v("Information alerts tell the user that something has happened as the result of an action, but not necessarily as the result of an action that the user has taken.")]),o("h5",[e._v("Delivery systems")]),o("p",[o("a",{attrs:{href:"#toast"}},[e._v("Toast")]),o("br"),o("a",{attrs:{href:"#dialog"}},[e._v("Dialog")])])]),o("GridCol",{attrs:{col:"span-3"}},[o("h4",[e._v("Success alert")]),o("p",[e._v("A success alert tells the user that an attempted action has succeeded.")]),o("h5",[e._v("Delivery systems")]),o("p",[o("a",{attrs:{href:"#toast"}},[e._v("Toast")]),o("br"),o("a",{attrs:{href:"#uncontained-text"}},[e._v("Uncontained text")])])]),o("GridCol",{attrs:{col:"span-3"}},[o("h4",[e._v("Warning alert")]),o("p",[e._v("A warning alert tells the user about a risk of irreversible destruction to data. Warning alerts are more emphatic than warning guidance messages are and require user action.")]),o("h5",[e._v("Delivery systems")]),o("p",[o("a",{attrs:{href:"#dialog"}},[e._v("Dialog")])])]),o("GridCol",{attrs:{col:"span-3"}},[o("h4",[e._v("Fail alert")]),o("p",[e._v("A fail alert tells the user that an attempted action or product feature has failed.")]),o("h5",[e._v("Delivery systems")]),o("p",[o("a",{attrs:{href:"#toast"}},[e._v("Toast")]),o("br"),o("a",{attrs:{href:"#well"}},[e._v("Well")]),o("br"),o("a",{attrs:{href:"#uncontained-text"}},[e._v("Uncontained text")])])])],1)],1)}),[],!1,null,null,null);"function"==typeof l&&l(d),"function"==typeof p&&p(d);t.default=d.exports}}]);