(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{194:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},232:function(e,t,o){"use strict";o.r(t);var s=o(1),n=o(194),i=o(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var r={VueRemarkRoot:n.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===a(r[e])&&"function"==typeof r[e].render?t[e]=r[e]:o[e]=function(){return r[e]}}))},c=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Dropdown select",parentIdentifier:"components",component:"zui-select"};var h=function(e){e.options[p]&&(e.options[p]=d),i.a.util.defineReactive(e.options,p,d),e.options.computed=c.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},u=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("What is a dropdown select?")]),o("p",[e._v("A dropdown select is a type of input field in which a user fills an input box with an item from a list of acceptable items. Dropdown selects allow only one option to be chosen.")]),o("hr"),o("h2",[e._v("When to use")]),o("p",[e._v("Use a dropdown select to organize a list of options a user can select from.")]),o("h4",[e._v("Alternate considerations")]),o("ul",[o("li",[e._v("Use a "),o("a",{attrs:{href:"#components/dropdown-multi-select"}},[e._v("dropdown multi-select")]),e._v(" if two or more options can be selected - not necessarily required.")]),o("li",[e._v("Use "),o("a",{attrs:{href:"#components/radio-buttons"}},[e._v("radio buttons")]),e._v(" when there's fewer than 3 options.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"#components/toggles"}},[e._v("toggle")]),e._v(" if the options are a yes or no.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"#components/pickers"}},[e._v("picker")]),e._v(" when the user needs to search for a specific item and select it from a list that is pageable.")])]),o("hr"),o("h2",[e._v("Anatomy")]),o("Grid",[o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Label")]),o("p",[e._v("Text that defines what type of options are in the list.")]),o("p",[o("a",{attrs:{href:"#patterns/forms-layout"}},[e._v("See labeling best practices")])]),o("h4",[e._v("Input")]),o("p",[e._v("The field designated for selecting an individual option from a grouping of related options.")]),o("h4",[e._v("Selection")]),o("p",[e._v("Chosen option from the options list.")]),o("h4",[e._v("Remove selection")]),o("p",[e._v("An X icon appears when a selection is made as a method to delete the chosen selection, clearing the input.")]),o("h4",[e._v("Dropdown chevron")]),o("p",[e._v("The chevron arrow, within the input suggesting that there are items to select within a dropdown.")]),o("h4",[e._v("Selected option")]),o("p",[e._v("An option that is visibly selected.")]),o("h4",[e._v("Options list")]),o("p",[e._v("The grouping of related input options.")]),o("h4",[e._v("Option")]),o("p",[e._v("A unique input option.")]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/spec/55383164-4785-450d-a2e2-1db14f62bd4a/#screen/9809727c-2b06-494d-9575-2c4922d7545c/Select%20base%20specs"}},[e._v("See base design specs")])])]),o("GridCol",{attrs:{col:"span-8"}},[o("p",[o("img",{attrs:{src:"/images/components/dropdown-select/select_label.svg",alt:"Anatomy of a dropdown select"}})]),o("p",[e._v("The anatomy of a dropdown select.")])])],1),o("hr"),o("h2",[e._v("Sizing and Spacing")]),o("p",[e._v("Use the following links to find exact pixel specs for dropdowns select.")]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/spec/55383164-4785-450d-a2e2-1db14f62bd4a/#"}},[e._v("Design specs")])]),o("hr"),o("h2",[e._v("Organizing the list")]),o("p",[e._v("Sort the list in a logical order. For instance, put the most selected option(s) at the top. In many cases we recommend alphabetical order.")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("h4",[e._v("Grouping")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-select/select_grouping_specs.svg",alt:"Spatial specs for options lists with grouping"}})]),o("ul",[o("li",[e._v("Sometimes you'll need to add grouping to a long list of options. Titles can break up options into groups to help users more easily locate them.")])]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/spec/55383164-4785-450d-a2e2-1db14f62bd4a/screen/c1894cc1-12e4-4ccc-aac2-8907842bbb41/Select-grouping-specs/"}},[e._v("See grouping design specs")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h4",[e._v("Icons")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-select/select_icon_specs.svg",alt:"Spatial specs for options lists with icons next to options"}})]),o("ul",[o("li",[e._v("Icons may be used beside select options; they should assist by making selection easier for users.")]),o("li",[e._v("Use icons to distinguish between options.")]),o("li",[e._v("Often icons are used when you have two different types of options in a list.")])]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/spec/55383164-4785-450d-a2e2-1db14f62bd4a/screen/f6923312-a730-4c92-b21a-cc8b2ff5ed0a/Select-icon-specs/"}},[e._v("See icon design specs")])])])],1),o("hr"),o("h2",[e._v("Behavior")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Open / close")]),o("ul",[o("li",[e._v("Normal behavior is to reveal the list down when placement of the select input is high enough within the viewport. When select input is lower on the screen the list will reveal up.")]),o("li",[e._v("Dropdown chevron icon: Rotates 180 degrees clockwise when opened, when closed spins back 180 degrees counter clockwise, returning to the original position.")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Scrolling")]),o("ul",[o("li",[e._v("If the options can be displayed within the viewport it is ideal to not have a scroll bar. Scroll bars should appear when options lists exceed the height of the screen but should not be taller than 300px.")]),o("li",[e._v("Note options lists will appear below or above select inputs depending on where they sit within the viewport (see Open / close).")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Typeahead")]),o("ul",[o("li",[e._v("Present in all dropdown selects, streamlines experience for users.")]),o("li",[e._v("Typeahead is relevant only to options in the list, it will not return group names. Grouping headers are not seen when using typeahead.")])]),o("p",[o("a",{attrs:{href:"#components/typeahead"}},[e._v("See typeahead")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Defaulting a selection")]),o("ul",[o("li",[e._v("A dropdown select shouldn't default a selected option. If you're confident users will likely choose an option you may consider defaulting to a selection.")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Removing the selection")]),o("ul",[o("li",[e._v("Once a selection is chosen from the options list, an X icon will appear in the input.")]),o("li",[e._v("Clicking the X icon will remove the selected choice.")]),o("li",[e._v("Users can also click into the input and remove the selection by backspacing.")])]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/spec/55383164-4785-450d-a2e2-1db14f62bd4a/screen/c1747f4a-0f68-43d1-9ffe-20fab3ccb4bb/Select-removing-selection/"}},[e._v("See removing selection design specs")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/dropdown-select/select_removing_selection.svg",alt:"Removing a selection from an input"}})])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Input states")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-select/select_states.svg",alt:"The various states of an input"}})]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/spec/55383164-4785-450d-a2e2-1db14f62bd4a/screen/a3ad4513-83ed-47db-95cf-1eec6f97808a/Select-states/"}},[e._v("See input states design specs")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Option list states")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-select/select_list_states.svg",alt:"The various states of an options list"}})]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/spec/55383164-4785-450d-a2e2-1db14f62bd4a/screen/2ab7c559-f015-49d0-9be3-1b9e509277df/Select-list-states/"}},[e._v("See option list states design specs")])])])],1),o("h2",[e._v("Responsiveness")]),o("h3",[e._v("Mobile")]),o("p",[e._v("Users on mobile and touch devices should not see our styling; instead the default styles native to the device should override ours, as these typically provide a better UX as they're designed for use on that particular device.")]),o("Spacer")],1)}),[],!1,null,null,null);"function"==typeof l&&l(u),"function"==typeof h&&h(u);t.default=u.exports}}]);