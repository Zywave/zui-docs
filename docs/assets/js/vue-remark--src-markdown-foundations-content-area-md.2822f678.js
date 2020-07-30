(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{189:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},223:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(189),i=a(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:o.a},l=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===r(s[t])&&"function"==typeof s[t].render?e[t]=s[t]:a[t]=function(){return s[t]}}))},d=i.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",p={excerpt:null,title:"Content area",parentIdentifier:"foundations",component:"zui-shell",subComponent:"zui-shell-content"};var f=function(t){t.options[h]&&(t.options[h]=p),i.a.util.defineReactive(t.options,h,p),t.options.computed=d.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},c=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h2",[t._v("Basics")]),a("p",[t._v("The standard content area is the the body of our applications where all the the features and funcionality gets placed. When building features in our applications it's important to understand the size of the canvas you'll be building on. A user should always understand the boundaries of our application, so the standard content area should not change from page to page.")]),a("p",[a("img",{attrs:{src:"/images/foundations/standard-content-area/content-area_basics.svg",alt:"Basics of the content area"}})]),a("hr"),a("h2",[t._v("Standard padding")]),a("p",[t._v("Common page padding is important to keep the content in one place and give it some breathing room. Padding is automatically added to our standard content area. Depending on the size of the viewport, there may be more or less padding. The amount of padding added is dependant on breakpoints. Here is a list of padding that is applied at each breakpoint.")]),a("p",[a("a",{attrs:{href:"https://xd.adobe.com/view/927bdb91-0983-4101-4d30-b4705d927192-e44a/grid"}},[t._v("View padding specs")])]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[t._v("Breakpoints*")]),a("th",{attrs:{align:"left"}},[t._v("Padding")]),a("th",{attrs:{align:"left"}},[t._v("Notes")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤30em or ≤480px")]),a("td",{attrs:{align:"left"}},[t._v("20px")]),a("td",{attrs:{align:"left"}},[t._v("Side navigation hides; mobile menu becomes available")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤45em or ≤720px")]),a("td",{attrs:{align:"left"}},[t._v("20px")]),a("td",{attrs:{align:"left"}},[t._v("Collapsed side navigation appears")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤60em or ≤960px")]),a("td",{attrs:{align:"left"}},[t._v("20px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤64em or ≤1024px")]),a("td",{attrs:{align:"left"}},[t._v("20px")]),a("td",{attrs:{align:"left"}},[t._v("Side navigation collapses")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤80em or ≤1280px")]),a("td",{attrs:{align:"left"}},[t._v("30px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤90em or ≤1440px")]),a("td",{attrs:{align:"left"}},[t._v("30px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤120em or ≤1920px")]),a("td",{attrs:{align:"left"}},[t._v("30px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤160em or ≤2560px")]),a("td",{attrs:{align:"left"}},[t._v("30px")]),a("td",{attrs:{align:"left"}})])])]),a("p",[a("small",[t._v("*"),a("code",{pre:!0},[t._v("em")]),t._v(" units are based off the browser's default font size of 16px")])]),a("hr"),a("h2",[t._v("Content area max-width")]),a("h3",[t._v("Standard max-width")]),a("p",[t._v("In most cases the content on the page should fill the full width of the content area, stretching end to end of the available screen real estate leaving room for only standard padding. However, enforce a max-width of 1600px as the viewport gets larger. For good user experience, it is typically not helpful to continue stretching past our recommended max-width. In cases where the content doesn't need to be stretched or would be more appealing at a smaller size, use the max-width of 900px.")]),a("p",[t._v("Our standard content area max-width is: "),a("strong",[t._v("1600px")]),t._v(" or "),a("strong",[t._v("100em")])]),a("p",[a("a",{attrs:{href:"https://xd.adobe.com/view/01cb99e4-9c91-4a72-7ff9-08f865c98c89-77fa/grid"}},[t._v("View standard max-width specs")])]),a("h3",[t._v("Component specific max-width")]),a("p",[t._v("In special cases, a component should not fill the full width of the content area, instead it should stop at a specific width to ensure good user experience. Enforcing these max-widths will allow the user to read and understand information easier than if the component was stretched.")]),a("p",[t._v("Components with an enforced max-width should remain the same size when the content area grows wider to suit a larger viewport. However, once a component's max-width reaches the limit of the content area max-width, it should stop growing to not overflow.")]),a("p",[a("a",{attrs:{href:"https://xd.adobe.com/view/1da35ebb-d8fd-40ae-76db-cd4d77144a78-6b92/grid"}},[t._v("View component specific max-width specs")])]),a("h4",[t._v("Cards")]),a("p",[t._v("Depending on content within Cards, and the rest of the components on the page, Cards can have two different max-widths; either 900px or 1600px (regarded as full-width). 900px width means that the Cards and all components on the page extend to a max-width of only 900px and then stop growing. 1600px width means that the page components are full-width, padding still in effect, on the page until they hit 1600px then stop growing.")]),a("p",[t._v("Because Cards can hold a variety of different components and content, all specific max-widths still apply. For example, because a Text Input has a max-width of 730px, this will remain in effect in larger card sizes even though there may be empty space.")]),a("p",[a("a",{attrs:{href:"https://xd.adobe.com/view/2f5a2586-b842-455b-5880-5b127dea1ba8-596b/grid"}},[t._v("View card max-width specs")])]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[t._v("Breakpoints*")]),a("th",{attrs:{align:"left"}},[t._v("Content width")]),a("th",{attrs:{align:"left"}},[t._v("Notes")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤30em or ≤480px")]),a("td",{attrs:{align:"left"}},[t._v("full-width 440px")]),a("td",{attrs:{align:"left"}},[t._v("Side navigation hides; mobile menu becomes available")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤45em or ≤720px")]),a("td",{attrs:{align:"left"}},[t._v("full-width 430px")]),a("td",{attrs:{align:"left"}},[t._v("Collapsed side navigation appears")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤60em or ≤960px")]),a("td",{attrs:{align:"left"}},[t._v("full-width 670px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤64em or ≤1024px")]),a("td",{attrs:{align:"left"}},[t._v("full-width 734px")]),a("td",{attrs:{align:"left"}},[t._v("Side navigation collapses")])]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤80em or ≤1280px")]),a("td",{attrs:{align:"left"}},[t._v("900px/full-width 970px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤90em or ≤1440px")]),a("td",{attrs:{align:"left"}},[t._v("900px/full-width 1130px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤120em or ≤1920px")]),a("td",{attrs:{align:"left"}},[t._v("900px/1600px")]),a("td",{attrs:{align:"left"}})]),a("tr",[a("td",{attrs:{align:"left"}},[t._v("≤160em or ≤2560px")]),a("td",{attrs:{align:"left"}},[t._v("900px/1600px")]),a("td",{attrs:{align:"left"}})])])]),a("p",[a("small",[t._v("*"),a("code",{pre:!0},[t._v("em")]),t._v(" units are based off the browser's default font size of 16px")])]),a("h4",[t._v("Text areas")]),a("p",[t._v("Studies have shown that between 45 to 75 characters per single line of text is the optimal length for reading. Anything shorter than this can cause the readers' eyes to bounce around too much. Anything longer and the reader can become fatigued and lose their place when moving to the beginning of the next line. Depending on font type and size, this character length equates to about 700 pixels in width. Meaning that when there is a Text Area on the page or within a card, the max-width of that area should be 700px. Regardless of card size, ranging from 900px to full-width (up to 1600px), the Text Area should never be larger than 700px and be left-aligned with the card.")]),a("h4",[t._v("Text inputs")]),a("p",[t._v("Using the same studies and conclusion as Text Areas, Text Inputs should also have a max-width of 700px for a single line of text. There is also 15px of interior left and right padding within Text Inputs, therefore the max-width of a text input should overall equal 730px. Meaning that when there is a Text Input on the page or within a card, the max-width of that input should be 730px. Regardless of card size, ranging from 900px to full-width (up to 1600px), the Text Input should never be larger than 730px.")]),a("p",[a("a",{attrs:{href:"http://zui.zywave.com/foundations/fonts-typography/"}},[t._v("View text standards")])]),a("p",[a("a",{attrs:{href:"http://zui.zywave.com/patterns/forms/"}},[t._v("View form standards")])]),a("h4",[t._v("Tables")]),a("p",[t._v("Tables can have a large amount of information, options, and details within them; because of this, it is acceptable that they expand to the full 1600px width of the page where applicable.")]),a("hr"),a("h2",[t._v("Content area best practices")]),a("p",[t._v("Even though there may be empty space within components such as cards, all components on a page or in a workflow should always follow these rules. This will allow the user to move between pages easily visually because the components and pages are not jumping sizes to react to the content within.")]),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("p",[a("img",{attrs:{src:"/images/foundations/standard-content-area/cardwidth_do.svg",alt:"Card Width Do"}})]),a("Do"),a("p",[t._v("When adding a form, make sure that it meets our max-width standards. When the content area is 900px and below, the form must always be full-width. When the content area is between 900px and 1600px, the form must be either 900px or full-width. When the content area is larger than 1600px, the form must be either 900px or 1600px.")])],1),a("GridCol",{attrs:{col:"span-6"}},[a("p",[a("img",{attrs:{src:"/images/foundations/standard-content-area/cardwidth_dont.svg",alt:"Card Width Don&#x27;t"}})]),a("DoNot"),a("p",[t._v("There should never be a situation where the form is smaller than 900px or full-width when the content area is larger than 900px.")])],1)],1),a("Grid",[a("GridCol",{attrs:{col:"span-6"}},[a("p",[a("img",{attrs:{src:"/images/foundations/standard-content-area/pagecomponent_do.svg",alt:"Page Components Do"}})]),a("Do"),a("p",[t._v("When adding multiple components to a page or within the same workflow, all elements should have the same width.")])],1),a("GridCol",{attrs:{col:"span-6"}},[a("p",[a("img",{attrs:{src:"/images/foundations/standard-content-area/pagecomponent_dont.svg",alt:"Page Components Don&#x27;t"}})]),a("DoNot"),a("p",[t._v("There should never be a situation where a form has a max-width of 900px, and a table below it is full-width.")])],1)],1),a("hr"),a("h2",[t._v("Background coloring")]),a("p",[t._v("Grey and white background colors are available, depending on the situation.")]),a("p",[a("strong",[t._v("When to use a grey Background")])]),a("p",[t._v("For most applications, our standard is to use a grey background. We use grey because it creates a base layer we can build off of and highlight, allowing the user to to focus on the task at hand. Most of our components and containers are specifically built to help draw the users attention and a grey background helps with that.")]),a("p",[a("strong",[t._v("When to use a white Background")])]),a("p",[t._v("Use a white background when the content is mainly text based to enhance readability.")]),a("Spacer")],1)}),[],!1,null,null,null);"function"==typeof l&&l(c),"function"==typeof f&&f(c);e.default=c.exports}}]);