(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{192:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},242:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(192),s=n(0);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},l=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===i(r[t])&&"function"==typeof r[t].render?e[t]=r[t]:n[t]=function(){return r[t]}}))},u=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",p={excerpt:null,title:"Buttons",parentIdentifier:"components",component:"zui-button"};var h=function(t){t.options[c]&&(t.options[c]=p),s.a.util.defineReactive(t.options,c,p),t.options.computed=u.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},b=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h2",[t._v("What is a link? What is a button? - Best practices")]),n("p",[t._v("Links and buttons are different technically, but they can look the same.")]),n("p",[n("strong",[t._v("What is a link?")]),n("br"),t._v('\nThe technical definition of a "link" '),n("code",{pre:!0},[t._v("<a>")]),t._v(" is an element that triggers a context switch. Meaning, it will take the user away from their current workflow and to a new location. For example: when we provide the users with a link to the help site, this takes them out of their current workflow and to a new location/workflow.")]),n("p",[t._v("Typically, you will see these links appear as a text link (plain, underlined text). However, there are instances where we may prefer to have a link displayed using one of our button styles. For example, we may have a link that we want to draw more attention to. This link might be styled as a button, but would take the user to a new workflow.")]),n("p",[n("strong",[t._v("What is a button?")]),n("br"),t._v('\nThe technical definition of a "button" '),n("code",{pre:!0},[t._v("<button>")]),t._v(" is an element that keeps the user within the same context. This action will keep the user within the same workflow.")]),n("p",[t._v("Typically, buttons will look like one of the various button styles we have listed below. In certain circumstances it may make more sense to have a button element styled to look like a text link. One great example of this is an action within a well. These actions could be defined as a link or a button depending on the circumstance, but they will always be styled to look like text regardless.")]),n("p",[n("strong",[t._v("Best practices - should it look like a button or should it look like a text link?")]),n("br"),t._v("\nIn MOST cases it should look like a text link when it appears within a body of text, and it should look like a button when it appears as an action independent of a body of text.")]),n("p",[t._v("If you run into a situation where you are not sure, your decision should be based off the hierarchy of elements on the page. If a link element is very important and needs to stand out more, then consider styling it like a button. If a button element shouldn't be drawing attention to itself, then perhaps a text link style would be best.")]),n("hr"),n("h2",[t._v("Anatomy")]),n("p",[n("img",{attrs:{src:"/images/components/buttons/Button_anatomy.svg",alt:"button anatomy"}})]),n("p",[t._v("For detailed documentation on our button anatomy, view the "),n("a",{attrs:{href:"https://xd.adobe.com/spec/73e1b206-1ffc-4568-5ccf-945d90c5161e-05d0/"}},[t._v("ZUI button design specs")]),t._v(".")]),n("p",[n("strong",[t._v("Sizing and spacing")])]),n("ul",[n("li",[t._v("Button height will always be 36px, button length is determined by the length of text.")]),n("li",[t._v("8px padding above and below the text")]),n("li",[t._v("15px padding to left and right of text")]),n("li",[t._v("10px margin between buttons"),n("br"),n("br")])]),n("p",[n("strong",[t._v("Font")])]),n("ul",[n("li",[t._v("System font, size 14px, semibold"),n("br"),n("br")])]),n("p",[n("strong",[t._v("Rounded corners")])]),n("ul",[n("li",[t._v("The corners should always be rounded to create a half-circle effect. 50px corner radius should be used.\n"),n("br")])]),n("hr"),n("h2",[t._v("Style Variations")]),n("p",[n("strong",[t._v("Primary button")])]),n("p",[n("img",{attrs:{src:"/images/components/buttons/Primary_button.svg",alt:"primary button"}})]),n("ul",[n("li",[t._v("A primary button is used to call attention to the main action a user should take on the page.")]),n("li",[t._v("Avoid using standard buttons within tables.")]),n("li",[t._v("Avoid using more than 1 primary button on a page if possible.")])]),n("Spacer",{attrs:{size:"small"}}),n("p",[n("strong",[t._v("Secondary button")])]),n("p",[n("img",{attrs:{src:"/images/components/buttons/Secondary_button.svg",alt:"secondary button"}})]),n("ul",[n("li",[t._v("A secondary button is used to represent a secondary action on a page.")]),n("li",[t._v("Secondary buttons can be used sparingly within tables.")])]),n("Spacer",{attrs:{size:"small"}}),n("p",[n("strong",[t._v("Link button")])]),n("p",[n("img",{attrs:{src:"/images/components/buttons/link_Button.svg",alt:"link button"}})]),n("p",[t._v("Link buttons can also be used to represent a secondary action on a page. At first glace these will appear as text, but the button shape will appear on hover/focus. This button shape will add extra padding around the text that isn't noticeable at first. Because of this, we recommend trying to avoid using link buttons when they are left-aligned.")]),n("Spacer"),n("p",[n("strong",[t._v("Icon button")])]),n("p",[n("img",{attrs:{src:"/images/components/buttons/icon_Button.svg",alt:"icon buttons"}})]),n("ul",[n("li",[t._v("Icon buttons can be used where text is not necessary to describe the action. The pencil icon for edit, trash can icon for delete, or printer icon for print are great examples of where an icon button would be appropriate.")]),n("li",[t._v("Icon buttons can appear in both primary, secondary and link button styles. Follow the guidelines for the button styles above to determine which one you should use.")]),n("li",[t._v("Icons should be sized to 16x16px with 10px padding around the icon to create a perfect circle.")])]),n("Spacer",{attrs:{size:"small"}}),n("p",[n("strong",[t._v("Adding an icon to a button - when to use this option")])]),n("p",[n("img",{attrs:{src:"/images/components/buttons/Icon_text_button.svg",alt:"icon and text buttons"}})]),n("p",[t._v("In some cases it makes sense to include an icon with your text in a button. This should be used sparingly and only where drawing some extra attention to the button is appropriate. + Add is a great example.")]),n("p",[t._v("Icons should be sized to 16x16px and will always appear to the left of the text within the button. The margin between the icon and the text should be 10px.\n15px padding should remain on the left and right side of the button.")]),n("Spacer",{attrs:{size:"small"}}),n("p",[n("strong",[t._v("Block-level buttons")])]),n("p",[n("img",{attrs:{src:"/images/components/buttons/block-level_Buttons.svg",alt:"block level button example"}})]),n("p",[t._v("Block-level buttons can be used to expand to the width of it's containing element. These should be used when the containing element doesn't span the full width of the page. Block-level buttons can be used to show more visual separation between elements or draw more attention to a smaller button that may otherwise be overlooked.\nThe height should still remain 36px and font size should remain 14px.")]),n("Spacer",{attrs:{size:"small"}}),n("p",[n("strong",[t._v("Loading button")]),n("br"),t._v("\nA loading button appears when the action does not take the user away from the current page, but the process that is kicked off prevents the user from taking additional action on the page.\nOther actions that cannot be taken while the process is loading should become disabled buttons.")]),n("p",[n("em",[t._v("IN PROGESS New design/animation coming soon!")])]),n("Spacer",{attrs:{size:"small"}}),n("p",[n("strong",[t._v("Text links")]),n("br"),t._v("\nText links, unlike link buttons, will appear as underlined text with no padding.")]),n("p",[n("img",{attrs:{src:"/images/components/buttons/text_Links.svg",alt:"text link examples"}})]),n("hr"),n("h2",[t._v("Button States")]),n("p",[n("img",{attrs:{src:"/images/components/buttons/Button_States.svg",alt:"button states"}})]),n("p",[n("strong",[t._v("Normal")]),n("br"),t._v("\nNormal state is the initial state of the button when the page first loads and before any action is taken."),n("br"),n("br")]),n("p",[n("strong",[t._v("Hover")]),n("br"),t._v("\nHover state occurs when the user hovers over a button or link with their mouse."),n("br"),n("br")]),n("p",[n("strong",[t._v("Focus")]),n("br"),t._v("\nFocus state appears when the button is currently selected and awaiting action. This commonly occurs when using a keyboard to navigate."),n("br"),n("br")]),n("p",[n("strong",[t._v("Pressed")]),n("br"),t._v("\nPressed state occurs when a user clicks (or hits enter on a keyboard). This state only appears briefly while the page/action is loading."),n("br"),n("br")]),n("p",[n("strong",[t._v("Disabled")]),n("br"),t._v("\nDisable state occurs when an action currently isn't available.\nDisabled buttons should only be used when an action can be taken within the current UI to enable the button. IF no action can be taken to enable the button, then the button should be hidden instead of disabled.")]),n("p",[t._v("We have added the CSS property pointer-events: none; to this button style that will further prevent users from clicking a disabled button.\n"),n("br")]),n("Spacer",{attrs:{size:"small"}}),n("h3",[t._v("Blue background button states")]),n("p",[n("img",{attrs:{src:"/images/components/buttons/button-blue-bkg.svg",alt:"blue background button states"}})]),n("Spacer",{attrs:{size:"small"}}),n("h3",[t._v("Dark mode button states")]),n("p",[n("img",{attrs:{src:"/images/components/buttons/button-dark-mode.svg",alt:"dark mode button states"}})]),n("hr"),n("h2",[t._v("Button style best practices")]),n("ul",[n("li",[t._v("Try to avoid using more than one primary button per page.")]),n("li",[t._v("If there are 3 buttons next to each other, try to only use 2 styles (for example: 1 primary and 2 link buttons)\nPrimary buttons should never be used within a table.")]),n("li",[t._v("The preferred button style to use within a table is the link button.")])]),n("p",[n("img",{attrs:{src:"/images/components/buttons/Button_table.svg",alt:"buttons in a table"}})])],1)}),[],!1,null,null,null);"function"==typeof l&&l(b),"function"==typeof h&&h(b);e.default=b.exports}}]);