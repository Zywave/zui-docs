(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{194:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},207:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o(194),a=o(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var l={VueRemarkRoot:i.a},r=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===s(l[e])&&"function"==typeof l[e].render?t[e]=l[e]:o[e]=function(){return l[e]}}))},c=a.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",v={excerpt:null,title:"Sidenav",parentIdentifier:"foundations",component:"zui-shell",subComponent:"zui-shell-nav"};var d=function(e){e.options[h]&&(e.options[h]=v),a.a.util.defineReactive(e.options,h,v),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},p=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("What is a Sidenav")]),o("p",[e._v("The Side nav contains the majority of the application and suite level navigation. This includes the applications feature level navigation as well as access to notifications, settings, and help and training.")]),o("h2",[e._v("When to use Sidenav")]),o("p",[e._v("The side navigation is a base component of the Shell. Having the navigation in a standard and reliable place helps grounds the user experience of all our products, so there should be a good reason if you're not going to use it.")]),o("hr"),o("h2",[e._v("What things go in the Sidenav")]),o("p",[e._v("The following are nav items that are recommended for every application, when applicable.")]),o("ol",[o("li",[o("strong",[e._v("Home")]),e._v("  - Every application should start with a home link at the top.  This takes you to the home page of whatever application you are in.")]),o("li",[o("strong",[e._v("Product navigation links")]),e._v(" - These are the application links that take the user to the features they have access to.")]),o("li",[o("strong",[e._v("Notifications")]),e._v(" - Application-specific notifications, when applicable.")]),o("li",[o("strong",[e._v("Settings")]),e._v(" - Application-specific settings, when applicable.")]),o("li",[o("strong",[e._v("Help and Training")]),e._v(" - Links to application specific help and Zywave University.")]),o("li",[o("strong",[e._v("Collapse")]),e._v(" - Gives the user the ability to collapse the Sidenav for more working space in the "),o("a",{attrs:{href:"/foundations/content_area"}},[e._v("content area")]),e._v(".")])]),o("p",[o("img",{attrs:{src:"/images/foundations/sidenav/sidenav-anatomy--desktop-standard-nav-items.svg",alt:"Sidenav - suite standard items"}})]),o("hr"),o("h2",[e._v("Sidenav anatomy")]),o("p",[e._v("These are the building blocks of the Sidenav.")]),o("ol",[o("li",[o("strong",[e._v("Nav Item")])]),o("li",[o("strong",[e._v("Nav Item Icon")])]),o("li",[o("strong",[e._v("Expand Icon")])]),o("li",[o("strong",[e._v("Nav Item (with children)")])]),o("li",[o("strong",[e._v("Subnav Items")])]),o("li",[o("strong",[e._v("Collapse action")])])]),o("p",[o("img",{attrs:{src:"/images/foundations/sidenav/sidenav-anatomy--desktop-expanded.svg",alt:"Sidenav - anatomy"}})]),o("h4",[e._v("Icon rules")]),o("ul",[o("li",[e._v("All top-level nav items should have a corresponding icon to help quickly identify the action. These icons are also used when the menu is collapsed.")]),o("li",[e._v("Child items do not have icons associated with them.")]),o("li",[e._v("For more information "),o("a",{attrs:{href:"/foundations/icons"}},[e._v("view our icon standards")])])]),o("hr"),o("h2",[e._v("The three states of Sidnav")]),o("ol",[o("li",[o("strong",[e._v("Expanded")]),e._v(" - At the "),o("strong",[e._v("breakpoint of ≥720,")]),e._v(" the full expanded side navigation is present.")]),o("li",[o("strong",[e._v("Collapsed")]),e._v(" - When the collapse button is pressed the menu will slim down to show only icons as main navigational items.")]),o("li",[o("strong",[e._v("Mobile")]),e._v(" - At the "),o("strong",[e._v("breakpoint of <720,")]),e._v(" the Sidenav is off-screen and slides in from the left when the hamburger menu is pushed.")])]),o("hr"),o("h2",[e._v("Behavior (expanded state)")]),o("ol",[o("li",[o("strong",[e._v("Unselected Navitem")]),e._v(" - Font color: grey-700; font-weight: 400; icon color: gray-800; background color: none")]),o("li",[o("strong",[e._v("Selected Navitem")]),e._v("  - Font color: blue-500; font weight: 700; icon color: blue-500; background color: none")]),o("li",[o("strong",[e._v("Expand & collapse action icon")]),e._v(" - When clicked the icon rotates 180 degrees.  The icon should always point the direction the action will happen.")]),o("li",[o("strong",[e._v("Selected subnav item")]),e._v(" - Font color: blue-500; font weight: 700; icon color: blue-500; background color: none")]),o("li",[o("strong",[e._v("Hover")]),e._v(" - background color: Gray-50")])]),o("p",[o("img",{attrs:{src:"/images/foundations/sidenav/sidenav-anatomy--desktop-expanded-behavior.svg",alt:"Sidenav - anatomy"}})]),o("h3",[e._v("Parent and children")]),o("ul",[o("li",[e._v("When anywhere on a parent item is clicked, the children will appear below that parent item.")]),o("li",[e._v("Parent items are used only for organizational purposes to reveal their child subnav items, they aren't linked to pages themselves.")]),o("li",[e._v("Parent items can all be open at the same time to show all subnav item for the entire application.")]),o("li",[e._v("After a user clicks on a link, expanded navigation remains expanded. Don't close the navigation until the user pushes to close it.")])]),o("h3",[e._v("Scrolling")]),o("ul",[o("li",[e._v("When the list of expanded items extends the entire height of the viewport,  a small scrollbar appears, allowing the user to scroll the Sidenav.")]),o("li",[e._v("The collapsed nav item remains stuck to the bottom and not part of the scrolling section.")])]),o("h3",[e._v("Collapsing the Sidenav")]),o("ul",[o("li",[e._v("The user can collapse & expand the navigation by clicking the collapse button at the bottom of the Sidenav.")]),o("li",[e._v("When collapsed - The content area will respond and make more room for itself, taking up the area that the Sidnav had been using.")]),o("li",[e._v("There is no need for the expand/collapse Sidenav function in the mobile state, so the button is hidden.")])]),o("hr"),o("h2",[e._v("Behavior (collapsed state)")]),o("ol",[o("li",[o("strong",[e._v("Unselected Nav item")]),e._v(" - icon color: gray-800; background color: none")]),o("li",[o("strong",[e._v("Selected Nav item")]),e._v("  - Slideout shows the full name of the navigation item. The user can then click the icon or the text to navigate to this page. icon color: blue-500; background color: none")]),o("li",[o("strong",[e._v("Hover Nav item with children")]),e._v(" - Slideout shows the Nav item name and list of subnav items. The user can then select the page they wish to navigate to in the list. Background color: gray-50;")]),o("li",[o("strong",[e._v("Hover Subnav item")]),e._v(" - background color: Gray-100")]),o("li",[o("strong",[e._v("Selected item")]),e._v(" - Font color: blue-500; font weight: 700; background color: none")])]),o("p",[o("img",{attrs:{src:"/images/foundations/sidenav/sidenav-anatomy--desktop-collapsed-behavior.svg",alt:"Sidenav - anatomy"}})]),o("hr"),o("h2",[e._v("Behavior (mobile state)")]),o("p",[e._v("The menu slides in over the content. To close the side nav the user will click off to the right of the navigation.")]),o("p",[o("img",{attrs:{src:"/images/foundations/sidenav/sidenav-anatomy--mobile-behavior.svg",alt:"Sidenav - anatomy"}})]),o("hr"),o("h2",[e._v("Sizing & Spacing")]),o("p",[e._v("Use the following links to find exact pixel specs for each state of the Sidenav.")]),o("ul",[o("li",[o("a",{attrs:{href:"https://xd.adobe.com/view/970272fb-9567-4c56-738c-462d2abe2ae3-e133/screen/442c19f5-7eeb-4164-90b5-1693bc59386c/sidenav-sizing-spacing-desktop-expanded"}},[e._v("Expanded state specs")])]),o("li",[o("a",{attrs:{href:"https://xd.adobe.com/view/970272fb-9567-4c56-738c-462d2abe2ae3-e133/"}},[e._v("Collapsed state specs")])]),o("li",[o("a",{attrs:{href:"https://xd.adobe.com/view/970272fb-9567-4c56-738c-462d2abe2ae3-e133/screen/caddde32-914d-4fa5-b328-f3d031e60252/sidenav-sizing-spacing-mobile"}},[e._v("Mobile state specs")])])])])}),[],!1,null,null,null);"function"==typeof r&&r(p),"function"==typeof d&&d(p);t.default=p.exports}}]);