(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},odiv:function(e,t,o){"use strict";o.r(t);var s=o("KHd+"),i=o("UQSp"),n=o("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var l={VueRemarkRoot:i.a},r=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===a(l[e])&&"function"==typeof l[e].render?t[e]=l[e]:o[e]=function(){return l[e]}}))},c=n.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Dropdown multi-select",parentIdentifier:"components",component:"zui-select"};var h=function(e){e.options[p]&&(e.options[p]=d),n.a.util.defineReactive(e.options,p,d),e.options.computed=c.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},u=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",[e._v("What is a dropdown multi-select?")]),o("p",[e._v("A dropdown multi-select is a type of input field in which a user fills an input box with one or many items from a list of acceptable inputs.")]),o("hr"),o("h2",[e._v("When to use")]),o("p",[e._v("Appropriate for lists larger than 2 options that may require a user to select more than 1 option.")]),o("h4",[e._v("Alternate considerations")]),o("ul",[o("li",[e._v("Use "),o("a",{attrs:{href:"/components/checkboxes"}},[e._v("checkboxes")]),e._v(" for lists smaller than 3 items.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/dropdown-select"}},[e._v("dropdown select")]),e._v(" if users can only select 1 option.")]),o("li",[e._v("Use a "),o("a",{attrs:{href:"/components/pickers"}},[e._v("multi-picker")]),e._v(" when the user needs to search for specific items and select them from a list with more than 7 – 10 items.")])]),o("hr"),o("h2",[e._v("Anatomy")]),o("Grid",[o("GridCol",{attrs:{col:"span-4"}},[o("h4",[e._v("Label")]),o("p",[e._v("Text that defines what type of options are in the list.")]),o("p",[o("a",{attrs:{href:"/patterns/forms-layout"}},[e._v("See labeling best practices")])]),o("h4",[e._v("Input")]),o("p",[e._v("The field designated for selecting an individual option from a grouping of related options.")]),o("h4",[e._v("Selection")]),o("p",[e._v("Once an option is chosen, it becomes a selection. Selections are visually defined by the encapsulation of the text in a gray rectangle.")]),o("h4",[e._v("Dropdown chevron")]),o("p",[e._v("The chevron arrow, within the input suggesting that there are items to select within a dropdown.")]),o("h4",[e._v("Selected option")]),o("p",[e._v("An option that is visibly selected.")]),o("h4",[e._v("Options list")]),o("p",[e._v("The grouping of related input options.")]),o("h4",[e._v("Option")]),o("p",[e._v("A unique input option.")]),o("h4",[e._v("Option checkbox")]),o("p",[e._v("A selectable checkbox beside an option.")]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/grid"}},[e._v("See base design specs")])])]),o("GridCol",{attrs:{col:"span-8"}},[o("p",[o("img",{attrs:{src:"/images/components/dropdown-multi-select/multi_select_label.svg",alt:"Anatomy of a dropdown multi-select"}})]),o("p",[e._v("The anatomy of a dropdown select.")])])],1),o("hr"),o("h2",[e._v("Sizing and Spacing")]),o("p",[e._v("Use the following links to find exact pixel specs for dropdowns multi-select.")]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/grid"}},[e._v("Design specs")])]),o("hr"),o("h2",[e._v("Organizing the list")]),o("p",[e._v("Sort the list in a logical order. For instance, put the most selected option(s) at the top. In many cases we recommend alphabetical order.")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("h4",[e._v("Grouping")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-multi-select/multiselect_grouping_specs.svg",alt:"Spatial specs for options lists with grouping"}})]),o("ul",[o("li",[e._v("Sometimes you'll need to add grouping to a long list of options. Titles can break up options into groups to help users more easily locate them.")])]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/c12aa28c-727d-406a-bd44-5bcec364f935/"}},[e._v("See grouping design specs")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h4",[e._v("Icons")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-multi-select/multiselect_icon_specs.svg",alt:"Spatial specs for options lists with icons next to options"}})]),o("ul",[o("li",[e._v("Use icons to distinguish between options.")]),o("li",[e._v("Often icons are used when you have two different types of options in a list.")])]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/ccefcc03-0603-4624-94b5-8f40c1f6969a/"}},[e._v("See icon design specs")])])])],1),o("hr"),o("h2",[e._v("Behavior")]),o("Grid",[o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Open / close")]),o("ul",[o("li",[e._v("Normal behavior is to reveal the list down when placement of the select input is high enough within the viewport. When select input is lower on the screen the list will reveal up.")]),o("li",[e._v("Dropdrown chevron icon: rotates 180 degrees clockwise when opened, when closed spins back 180 degrees counter clockwise, returning to the original position.")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Scrolling")]),o("ul",[o("li",[e._v("If the options can be displayed within the viewport it is ideal to not have a scroll bar. Scroll bars should appear when an options list exceeds the height of the screen but should not be taller than 300px.")]),o("li",[e._v("Note options lists will appear below or above select inputs depending on where they sit within the viewport (see Open / close).")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Typeahead")]),o("ul",[o("li",[e._v("Present in all dropdown selects, streamlines experience for users.")]),o("li",[e._v("Typeahead is relevant only to options in the list, it will not return group names. Grouping headers are not seen when using typeahead.")])]),o("p",[o("a",{attrs:{href:"#components/typeahead"}},[e._v("See typeahead")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Defaulting a selection")]),o("ul",[o("li",[e._v("A dropdown select shouldn't default a selected option. If you're confident users will likely choose an option you may consider defaulting to a selection.")]),o("li",[e._v("Sometimes choosing 'none' as an option is necessary, if none of the options are applicable to the user. None should appear at the top of the list.")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Input states")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-multi-select/multiselect_states.svg",alt:"The various states of an input"}})]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/7b6c4ddd-55fa-4521-8598-7e5b280b5aec/"}},[e._v("See input states design specs")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Option list states")]),o("p",[o("img",{attrs:{src:"/images/components/dropdown-multi-select/multiselect_list_states.svg",alt:"The various states of an option list"}})]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/c6b9b274-0fab-4b09-895a-28d141fe96ca/"}},[e._v("See option list states design specs")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("h3",[e._v("Selection wrapping")]),o("ul",[o("li",[e._v("When multiple options are selected in a multi-select list, selections will populate the input and eventually will have to wrap, in order to fit.")])]),o("p",[o("a",{attrs:{href:"https://xd.adobe.com/view/92759d6f-effe-410f-b096-7076edaecf0b-c726/screen/38048d13-2726-4db4-84aa-54048de9c1f1/"}},[e._v("See selection wrapping design specs")])])]),o("GridCol",{attrs:{col:"span-6"}},[o("p",[o("img",{attrs:{src:"/images/components/dropdown-multi-select/tag_specs.svg",alt:"Removing a selection from an input"}})])])],1),o("h3",[e._v("Removing the selection")]),o("ul",[o("li",[e._v("After a user has chosen an option it turns into a selection within the input. Users can remove a selection by using one of three methods.")]),o("li",[e._v("Selections can be removed by clicking on the X icon within the selection.")]),o("li",[e._v("Backspacing over a selection in the input removes it.")]),o("li",[e._v("By deselecting the checkbox within an option list will also remove the selection.")])]),o("hr"),o("h2",[e._v("Responsiveness")]),o("h3",[e._v("Mobile")]),o("p",[e._v("Users on mobile and touch devices should not see our styling; instead the default styles native to the device should override ours, as these typically provide a better UX as they're designed for use on that particular device.")])],1)}),[],!1,null,null,null);"function"==typeof r&&r(u),"function"==typeof h&&h(u);t.default=u.exports}}]);