(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{189:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},227:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(189),i=a(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var r={VueRemarkRoot:o.a},d=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===s(r[e])&&"function"==typeof r[e].render?t[e]=r[e]:a[e]=function(){return r[e]}}))},l=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",c={excerpt:null,title:"Expanders",parentIdentifier:"components",component:"zui-expander"};var h=function(e){e.options[p]&&(e.options[p]=c),i.a.util.defineReactive(e.options,p,c),e.options.computed=l.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},m=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h2",[e._v("Usage")]),a("p",[e._v("An Expander (sometimes referred to as an Accordion) is a useful pattern for progressive disclosure—highlighting important details of a section and revealing more details upon a tap or click. The purpose of an Expander is to organize and manage an overabundance of content and allow users to get the big picture before focusing on details. They are composed of multiple sections that can reveal and hide the content contained within. A header title gives the user a sense of what content they are digging into without necessarily forcing the user to open the section. Because they conserve vertical space, expanders can be especially good for mobile.")]),a("hr"),a("h2",[e._v("Table of contents")]),a("ul",[a("li",[a("a",{attrs:{href:"#expander--anatomy"}},[e._v("Anatomy")])]),a("li",[a("a",{attrs:{href:"#expander--basic"}},[e._v("Basic Expander")])]),a("li",[a("a",{attrs:{href:"#expander--header-details"}},[e._v("Adding header details")])]),a("li",[a("a",{attrs:{href:"#expander--actions"}},[e._v("Adding actions")])]),a("li",[a("a",{attrs:{href:"#expander--peek-a-boo"}},[e._v("Peek-a-boo Expander")])]),a("li",[a("a",{attrs:{href:"#expander--best-practices"}},[e._v("Best practices")])]),a("li",[a("a",{attrs:{href:"#expander--alternative-considerations"}},[e._v("Alternative considerations")])])]),a("hr"),a("h2",[e._v("Design specs")]),a("p",[a("a",{attrs:{href:"https://xd.adobe.com/view/d391f1e9-b657-47de-42a6-90e28fcaf4ce-a5a0/grid",title:"Expander Design Specs"}},[e._v("Click here for Expander design specs & guidelines")]),e._v(", where you will find the following:")]),a("ul",[a("li",[e._v("Sizing and spacing details")]),a("li",[e._v("States and coloring")]),a("li",[e._v("Typography guidelines and hierarchy")])]),a("hr"),a("div",{attrs:{id:"expander--anatomy"}}),a("h2",[e._v("Anatomy")]),a("p",[e._v("We use the following terminology to refer to the parts of an expander:")]),a("ol",[a("li",[a("strong",[e._v("Section:")]),e._v(" consists of a header and a content area that makes up an Expander. All expanders (except for Peek-a-boos) consist of at least two sections.")]),a("li",[a("strong",[e._v("Header:")]),e._v(" contains a label and optional elements—such as an icon, an action, and/or content details—that gives the user the information they need to determine how and whether to expand a section.")]),a("li",[a("strong",[e._v("Header title:")]),e._v(" the name of an Expander section.")]),a("li",[a("strong",[e._v("Header details:")]),e._v(" read-only information visible in the header even when the section is collapsed.")]),a("li",[a("strong",[e._v("Indicator Icon:")]),e._v(" an icon appearing in the header that indicates the section can be expanded and collapsed.")]),a("li",[a("strong",[e._v("Content area:")]),e._v(" the area that appears when a section is expanded.")]),a("li",[a("strong",[e._v("Action area:")]),e._v(" If there is data in the content area that needs to be saved, this is a common place to put actions.")])]),a("p",[a("img",{attrs:{src:"/images/components/expanders/expander-anatomy.svg",alt:"Anatomy"}})]),a("hr"),a("h2",[e._v("Expander options")]),a("div",{attrs:{id:"expander--basic"}}),a("h3",[e._v("Basic Expander")]),a("p",[e._v("The Basic Expander is the most common type of Expander. It's typically used as a sub-navigation in the content area and helps organize complex content.")]),a("p",[a("img",{attrs:{src:"/images/components/expanders/basic-expander--collapsed.svg",alt:"Example of a collapsed Expander"}}),a("em",[e._v("example of a Basic Expander in a collapsed state")])]),a("br"),a("p",[a("img",{attrs:{src:"/images/components/expanders/basic-expander--expanded.svg",alt:"Example of an expanded Expander"}}),a("em",[e._v("example of a Basic Expander in an expanded state")])]),a("br"),a("p",[a("img",{attrs:{src:"/images/components/expanders/expander--mobile.svg",alt:"Example of a mobile Expander"}})]),a("p",[a("em",[e._v("example of a basic Expander in a mobile responsive state")])]),a("Spacer",{attrs:{size:"large"}}),a("div",{attrs:{id:"expander--header-details"}}),a("h3",[e._v("Adding header details")]),a("p",[e._v("In some cases it is helpful to give the user more information on what they will find in the section, beyond just the title.")]),a("p",[a("img",{attrs:{src:"/images/components/expanders/basic-expander--with-header-details-collapsed.svg",alt:"Example of an expanded Expander"}}),a("em",[e._v("example header details in a collapsed state")])]),a("br"),a("p",[a("img",{attrs:{src:"/images/components/expanders/basic-expander--with-header-details-expanded.svg",alt:"Example of an expanded Expander"}}),a("em",[e._v("example header details in an expanded state")])]),a("Spacer",{attrs:{size:"large"}}),a("div",{attrs:{id:"expander--actions"}}),a("h3",[e._v("Adding actions")]),a("p",[e._v("In some cases Expanders can be used to perform lightweight actions, such as updating an email address.")]),a("p",[a("img",{attrs:{src:"/images/components/expanders/basic-expander--actions.svg",alt:"Example of a expanded Expander"}}),a("em",[e._v("example of adding actions to an Expander")])]),a("Spacer",{attrs:{size:"large"}}),a("div",{attrs:{id:"expander--peek-a-boo"}}),a("h3",[e._v("Peek-a-boo")]),a("p",[e._v("A Peek-a-boo Expander is a single-section Expander that hides some of its content to help make room in the UI.")]),a("p",[a("img",{attrs:{src:"/images/components/expanders/peek-a-boo--collapsed.svg",alt:"Example of a collapsed Peek-a-boo Expander"}}),a("em",[e._v("example of a collapsed Peek-a-boo expander")])]),a("br"),a("p",[a("img",{attrs:{src:"/images/components/expanders/peek-a-boo--expanded.svg",alt:"Example of an expanded Peek-a-boo Expander"}}),a("em",[e._v("example of an expanded Peek-a-boo expander")])]),a("hr"),a("div",{attrs:{id:"expander--best-practices"}}),a("h2",[e._v("Best practices")]),a("h3",[e._v("Sections")]),a("ul",[a("li",[e._v("By default, all sections can be opened at the same time. If there are actions within the Expander, then limit opening one section at a time.")]),a("li",[e._v("If opening a section makes the content longer than the viewport, do not auto-scroll to show that content. Auto scrolling will disorientate the user if they aren't expecting it, so leave the decision to scroll up to them.")]),a("li",[e._v("Expanders generally work best when the user can focus on a single task, or a very small number of closely-related tasks. It is not good practice to nest a table, long forms, or tabs inside an Expander section.")])]),a("h3",[e._v("Header information")]),a("ul",[a("li",[e._v("The title should be descriptive and clearly suggest what the content will show when expanded.")]),a("li",[e._v("It's important to consider plain, concise language when naming your section title. Long titles will truncate, but consider the length of your title and how it will look on mobile. If there are also header details, it is very important to keep your title short so there isn't too much text in the header, making everything hard to scan.")]),a("li",[e._v("Add header details when the user needs some indication of what content is in the section.")]),a("li",[e._v("When the section is in an expanded state, typically the header details should be removed and reiterated in the content area since all the relevant information the user needs is now visible.")])]),a("h3",[e._v("Adding actions")]),a("ul",[a("li",[e._v("Actions in Expanders are best used for lightweight editing of an element, such as selecting a value for a setting.")]),a("li",[e._v("If there are other actions on the page, make sure you only have one save button available to the user at one time to avoid confusion.")])]),a("hr"),a("div",{attrs:{id:"expander--alternative-considerations"}}),a("h2",[e._v("Alternative considerations")]),a("ul",[a("li",[e._v("Consider using "),a("strong",[e._v("Cards")]),e._v(" when you need to the ability to view and edit a group of information all at once. Show read only data on the card with an edit button that changes everything to be editable.")]),a("li",[e._v("Consider using "),a("a",{attrs:{href:"/components/tabs/"}},[a("strong",[e._v("Tabs")])]),e._v(" instead of Expanders when there is a lot of information in the content area of a section that would push other sections out of the user's viewport, or if there is a lot of complex information.")]),a("li",[e._v("Consider using "),a("strong",[e._v("Jump links")]),e._v(" when it would be best to have all the content visible and the user just needs to jump to different sections on the page.")])])],1)}),[],!1,null,null,null);"function"==typeof d&&d(m),"function"==typeof h&&h(m);t.default=m.exports}}]);