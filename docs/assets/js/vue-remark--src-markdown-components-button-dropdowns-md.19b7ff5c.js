(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{189:function(t,o,e){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},232:function(t,o,e){"use strict";e.r(o);var n=e(1),s=e(189),a=e(0);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var r={VueRemarkRoot:s.a},p=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(r).forEach((function(t){"object"===i(r[t])&&"function"==typeof r[t].render?o[t]=r[t]:e[t]=function(){return r[t]}}))},c=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Button dropdowns",parentIdentifier:"components",component:"zui-button-dropdown"};var u=function(t){t.options[l]&&(t.options[l]=d),a.a.util.defineReactive(t.options,l,d),t.options.computed=c.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},h=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("VueRemarkRoot",[e("h2",[t._v("What are button dropdowns?")]),e("p",[t._v("Button dropdowns are buttons that reveal a list of actionable options.")]),e("p",[t._v("A button dropdown consists of two main parts:")]),e("ul",[e("li",[t._v("A button with a label that, when clicked, displays a list of options.")]),e("li",[t._v("The list of options that, when one is selected, executes an action.")])]),e("hr"),e("h2",[t._v("When to use")]),e("p",[t._v("Button dropdowns are ideal for collapsing 3 or more options into a single button to conserve screen space.")]),e("p",[t._v("They are most commonly seen within tables due to space restrictions, but they are not limited to tables.")]),e("h4",[t._v("Alternate considerations")]),e("ul",[e("li",[t._v("Use "),e("a",{attrs:{href:"/components/buttons"}},[t._v("buttons")]),t._v(" if you have a smaller number of options and also want to present choices to users without hiding action options.")]),e("li",[t._v("Use a "),e("a",{attrs:{href:"/components/dropdown-select"}},[t._v("dropdown select")]),t._v(" if an option is not an action. A button dropdown should be used to execute an action, "),e("strong",[t._v("not")]),t._v(" to make a selection from a list.")])]),e("hr"),e("h2",[t._v("Anatomy")]),e("Grid",[e("GridCol",{attrs:{col:"span-6"}},[e("p",[e("strong",[t._v("Button")])]),e("p",[t._v("The shape that encloses the label and chevron."),e("br"),t._v("\nThe dropdown buttons will always be ZUI Blue 500.\nFollow the "),e("a",{attrs:{href:"/components/buttons"}},[t._v("button guidelines")]),t._v(" for sizing and spacing specifications.")]),e("p",[e("strong",[t._v("Button label")])]),e("p",[t._v("Text that defines what type of options are on the list.")]),e("p",[e("strong",[t._v("Dropdown chevron")])]),e("p",[t._v("The action icon within the button that, when clicked, reveals the options list.")]),e("p",[e("strong",[t._v("Option list")])]),e("p",[t._v("The grouping of related actions the user can select.")]),e("p",[e("strong",[t._v("Option")])]),e("p",[t._v("A unique action a user can select.")]),e("p",[e("a",{attrs:{href:"https://xd.adobe.com/view/03e40c6f-aee6-4717-6f27-c561e69a3f3e-75d5/"}},[t._v("See base design specs")])])]),e("GridCol",{attrs:{col:"span-6"}},[e("p",[e("img",{attrs:{src:"/images/components/button-dropdowns/buttons_Dropdown_Anatomy.svg",alt:"Anatomy of a button dropdown"}})])])],1),e("hr"),e("h2",[t._v("Sizing and Spacing")]),e("p",[t._v("Use the following links to find exact pixel specs for button dropdowns.")]),e("p",[e("a",{attrs:{href:"https://xd.adobe.com/view/03e40c6f-aee6-4717-6f27-c561e69a3f3e-75d5/grid"}},[t._v("Dropdown button design specs")])]),e("hr"),e("h2",[t._v("Organizing the list")]),e("p",[t._v("Sort the list in a logical order. For instance, put the most selected option(s) at the top.")]),e("h4",[t._v("Using icons")]),e("p",[t._v("Icons may be used beside options; they should assist by making selection easier for users.")]),e("p",[e("a",{attrs:{href:"https://xd.adobe.com/view/03e40c6f-aee6-4717-6f27-c561e69a3f3e-75d5/screen/a0aff3f2-093a-4242-9dbd-7c3d3afd203a/buttons-Dropdown-Icons"}},[t._v("See icon design specs")])]),e("p",[e("img",{attrs:{src:"/images/components/button-dropdowns/buttons_Dropdown_Icons.svg",alt:"Spatial specs for options lists with icons next to options"}})]),e("hr"),e("h2",[t._v("Labeling")]),e("Grid",[e("GridCol",{attrs:{col:"span-8"}},[e("ul",[e("li",[t._v("The button label should be an umbrella action or category that encompasses all options in the list. After reading a label, the dropdown options should meet a user's expectations.")])]),e("ul",[e("li",[t._v("Use action verbs and clear verb phrases for your labels. For example, "),e("strong",[t._v("'Save to'")]),t._v(" indicates additional options are available, while "),e("strong",[t._v("'Save'")]),t._v(" does not.")]),e("li",[t._v("Use a dropdown button without a label to minimize footprint.")])]),e("ul",[e("li",[t._v("Ideally, button dropdowns should be clearly labeled. If there are circumstances that prevent that from happening, use an icon that clearly and unambiguously represents its list. There may be situations where the list in the button dropdown is too varied for a clear and unambiguous icon. In these situations, consider other options before using a generic icon (like a chevron)."),e("br"),e("a",{attrs:{href:"https://xd.adobe.com/view/03e40c6f-aee6-4717-6f27-c561e69a3f3e-75d5/screen/4465a848-5714-4331-93e2-6bf1b15c82d0/icon-Buttons-Dropdown"}},[t._v("See unlabeled button dropdown design specs")])])])]),e("GridCol",{attrs:{col:"span-4"}},[e("p",[e("img",{attrs:{src:"/images/components/button-dropdowns/icon_Buttons_Dropdown.svg",alt:"Button dropdown with a printer icon and options list revealead"}})])])],1),e("hr"),e("h2",[t._v("Behavior")]),e("h4",[t._v("Interaction behavior")]),e("p",[t._v("Buttons have their own unique behavior that indicates the user's interaction resulted in a change. Button dropdowns follow the same "),e("a",{attrs:{href:"/components/buttons"}},[t._v("guidelines")]),t._v(" as regular buttons when it comes to behavior and interaction.")]),e("Spacer",{attrs:{size:"small"}}),e("Grid",[e("GridCol",{attrs:{col:"span-6"}},[e("p",[e("strong",[t._v("Input states")])]),e("p",[e("img",{attrs:{src:"/images/components/button-dropdowns/buttons_Dropdown_States.svg",alt:"The various states of an input"}})]),e("p",[e("a",{attrs:{href:"https://xd.adobe.com/view/03e40c6f-aee6-4717-6f27-c561e69a3f3e-75d5/screen/9c648e85-cc2f-4a86-abea-0c1f38442adf/buttons-Dropdown-States"}},[t._v("See button states design specs")])])]),e("GridCol",{attrs:{col:"span-6"}},[e("p",[e("strong",[t._v("Option list states")])]),e("p",[e("img",{attrs:{src:"/images/components/button-dropdowns/buttons_Dropdown_Disabled.svg",alt:"The various states of an options list"}})]),e("p",[e("a",{attrs:{href:"https://xd.adobe.com/view/03e40c6f-aee6-4717-6f27-c561e69a3f3e-75d5/screen/896624f4-0332-4222-b02a-938cf2d2457d/button-dropdown-option-list-states"}},[t._v("See option list states design specs")])])])],1),e("Spacer")],1)}),[],!1,null,null,null);"function"==typeof p&&p(h),"function"==typeof u&&u(h);o.default=h.exports}}]);