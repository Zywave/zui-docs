(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{194:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},212:function(t,e,a){"use strict";a.r(e);var o=a(1),n=a(194),s=a(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},l=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===r(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:a[t]=function(){return i[t]}}))},h=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",p={excerpt:null,title:"Tabs",parentIdentifier:"components",component:"zui-tabs"};var d=function(t){t.options[c]&&(t.options[c]=p),s.a.util.defineReactive(t.options,c,p),t.options.computed=h.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},b=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h2",[t._v("Best practices")]),a("ul",[a("li",[t._v("Tabs provide the user a way of viewing a subset of the information in a given section of content.")]),a("li",[t._v("Tabs can be used to display alternate views of the same content.")]),a("li",[t._v("Tabs can break up a long workflow or page of information into separate buckets.")]),a("li",[t._v("Tab labels should generally be short and sweet—one to two words—and parallel in nature.")]),a("li",[t._v("Tabs can be used as a form of tertiary navigation when necessary.")])]),a("hr"),a("h2",[t._v("States")]),a("p",[t._v("Tabs have three states—selected, unselected, and hover. When a tab is selected, the bar slides over to the selected tab.")]),a("Grid",[a("GridCol",{attrs:{col:"span-3"}},[a("p",[a("strong",[t._v("Selected")])]),a("ul",[a("li",[t._v("Font weight: bold")]),a("li",[t._v("Font color: ZUI Blue 500")]),a("li",[t._v("Bar color: ZUI Blue 500")])]),a("p",[a("strong",[t._v("Unselected")])]),a("ul",[a("li",[t._v("Font weight: regular")]),a("li",[t._v("Font color: ZUI Gray 700")])]),a("p",[a("strong",[t._v("Hover")])]),a("ul",[a("li",[t._v("Font weight: regular")]),a("li",[t._v("Font color: ZUI Gray 700")]),a("li",[t._v("Bar color: ZUI Gray 200")])])]),a("GridCol",{attrs:{col:"span-9"}},[a("Spacer"),a("p",[a("img",{attrs:{src:"/images/components/tabs/tab_States.svg",alt:"Tab states image"}})])],1)],1),a("hr"),a("h2",[t._v("Sizing and spacing")]),a("p",[t._v("The width of a tab depends on the number of characters in the tab label, so try to keep the labels no more than one or two words long.")]),a("p",[a("img",{attrs:{src:"/images/components/tabs/tab_Spacing.svg",alt:"sizing and spacing"}})]),a("p",[t._v("Tab size: tab label + 20px padding on all sides")]),a("p",[t._v("Bar width: length of the text + padding"),a("br"),t._v("\nBar height: 4px")]),a("hr"),a("h2",[t._v("Behavior and interaction")]),a("p",[t._v("Tabs are responsive to the screen size. If there isn't enough horizontal room for all of the tabs to appear on the screen, right and left arrows appear so the user can scroll horizontally through the available tabs.")]),a("p",[t._v("It is recommended to try and avoid the need for horizontal scrolling on desktop screen sizes.")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("p",[a("img",{attrs:{src:"/images/components/tabs/right_Scroll.svg",alt:"tabs right scroll"}})])]),a("GridCol",{attrs:{col:"span-6"}},[a("p",[a("img",{attrs:{src:"/images/components/tabs/right_Left_Scroll.svg",alt:"right left scroll"}})])])],1),a("Spacer",{attrs:{size:"small"}}),a("p",[t._v("When navigating to a page that contains tabs, the first available tab should be selected.")]),a("p",[t._v("When a user hovers over a tab the gray bar appears below the label text.\nWhen a user has selected a tab a blue bar appears below the label text and the label text becomes ZUI blue 500 and bold.")]),a("p",[t._v('On click, the "burst" animation will appear from the position on the tab that the user clicked. The burst will use the color of the app bar.')]),a("hr"),a("h2",[t._v("Types of tabs")]),a("p",[t._v("There are a variety of different ways tabs can appear based on the page layout you are using.")]),a("Spacer",{attrs:{size:"small"}}),a("p",[a("strong",[t._v("Full-width tabs, full width-content")])]),a("p",[a("img",{attrs:{src:"/images/components/tabs/full-width_White.svg",alt:"full width tabs"}})]),a("p",[t._v("Both the tabs and the content stretch the full-width of the page. These tabs can be used on both page layouts with white or gray backgrounds. For more information on page width, "),a("a",{attrs:{href:"/foundations/content-area"}},[t._v("view the guidelines for content area")])]),a("Spacer",{attrs:{size:"small"}}),a("p",[a("strong",[t._v("Fixed width tabs, fixed width content")])]),a("p",[a("img",{attrs:{src:"/images/components/tabs/fixed-width_White.svg",alt:"fixed width tabs"}})]),a("p",[t._v("Both the tabs and content can adhere to a fixed-width page layout. These tabs can be used on both white or gray background layouts. For more information on fixed-width layouts "),a("a",{attrs:{href:"/foundations/content-area"}},[t._v("view the content area guidelines")])]),a("Spacer",{attrs:{size:"small"}}),a("p",[a("strong",[t._v("Gray background, tabs with card")])]),a("p",[a("img",{attrs:{src:"/images/components/tabs/with_Card.svg",alt:"tabs with card"}})]),a("p",[t._v("On layouts that use a gray background, tabs can appear with a card. The tabs will be just above the card and the contents within the card are associated with the selected tab."),a("br"),t._v("\nThis should be used when the contents are text-based to enhance readability or to show separation between the items within the tabbed section and other elements on the page.")]),a("Spacer",{attrs:{size:"small"}}),a("p",[a("strong",[t._v("Gray background, tabs without card")])]),a("p",[a("img",{attrs:{src:"/images/components/tabs/without_Card.svg",alt:"tabs without card"}})]),a("p",[t._v("If the contents within the tabs do not contain large amounts of text and there are no other elements on the page not contained within the tabs, then use the gray background with no card.\nThis will increase contrast so elements like input fields will stand out more against the background.")]),a("Spacer",{attrs:{size:"small"}}),a("p",[a("strong",[t._v("Full-width tabs, fixed width content")])]),a("p",[a("img",{attrs:{src:"/images/components/tabs/tab_Navigation.svg",alt:"full-width tabs and fixed width content"}})]),a("p",[t._v("Tabs can stretch the full width of the page with their contents adhering to a fixed-width. This is a great option when using tabs as a tertiary level of navigation.")])],1)}),[],!1,null,null,null);"function"==typeof l&&l(b),"function"==typeof d&&d(b);e.default=b.exports}}]);