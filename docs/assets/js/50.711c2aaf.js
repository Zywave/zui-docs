(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{Ll4M:function(e,t,n){"use strict";n.r(t),n.d(t,"ApiViewer",(function(){return Rn}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function s(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}},a=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,p=new RegExp(`${l}|${c}`);class d{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],s=document.createTreeWalker(t.content,133,null,!1);let i=0,o=-1,a=0;const{strings:c,values:{length:d}}=e;for(;a<d;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)h(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=c[a],n=m.exec(t)[2],r=n.toLowerCase()+"$lit$",s=e.getAttribute(r);e.removeAttribute(r);const i=s.split(p);this.parts.push({type:"attribute",index:o,name:n,strings:i}),a+=i.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const r=e.parentNode,s=t.split(p),i=s.length-1;for(let t=0;t<i;t++){let n,i=s[t];if(""===i)n=g();else{const e=m.exec(i);null!==e&&h(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++o})}""===s[i]?(r.insertBefore(g(),e),n.push(e)):e.data=s[i],a+=i}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&o!==i||(o++,t.insertBefore(g(),e)),i=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(n.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=r.pop()}for(const e of n)e.parentNode.removeChild(e)}}const h=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,g=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,s=document.createTreeWalker(n,133,null,!1);let i=v(r),o=r[i],a=-1,l=0;const c=[];let p=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(c.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==o&&o.index===a;)o.index=null!==p?-1:o.index-l,i=v(r,i),o=r[i]}c.forEach(e=>e.parentNode.removeChild(e))}const b=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},v=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(u(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=new WeakMap,_=e=>(...t)=>{const n=e(...t);return y.set(n,!0),n},x=e=>"function"==typeof e&&y.has(e),w={},k={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class S{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let s,o=0,a=0,l=r.nextNode();for(;o<n.length;)if(s=n[o],u(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),$=` ${l} `;class T{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const i=m.exec(e);t+=null===i?e+(n?$:c):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==A&&(t=A.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const C=e=>null===e||!("object"==typeof e||"function"==typeof e),P=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class N{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new E(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!P(e))return e}let r="";for(let s=0;s<t;s++){r+=e[s];const t=n[s];if(void 0!==t){const e=t.value;if(C(e)||!P(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===w||C(e)&&e===this.value||(this.value=e,x(e)||(this.committer.dirty=!0))}commit(){for(;x(this.value);){const e=this.value;this.value=w,e(this)}this.value!==w&&this.committer.commit()}}class R{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}const e=this.__pendingValue;e!==w&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof T?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):P(e)?this.__commitIterable(e):e===k?(this.value=k,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof S&&this.value.template===t)this.value.update(e.values);else{const n=new S(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)n=t[r],void 0===n&&(n=new R(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class L{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}if(this.__pendingValue===w)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=w}}class z extends N{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends E{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class D{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}if(this.__pendingValue===w)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=w}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function U(e){let t=I.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},I.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(l);return n=t.keyString.get(r),void 0===n&&(n=new d(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const I=new Map,F=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,r){const s=t[0];if("."===s){return new z(e,t.slice(1),n).parts}if("@"===s)return[new D(e,t.slice(1),r.eventContext)];if("?"===s)return[new L(e,t.slice(1),n)];return new N(e,t,n).parts}handleTextExpression(e){return new R(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const q=(e,...t)=>new T(e,t,"html",V),B=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const W=e=>t=>{const n=B(t.type,e);let r=I.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},I.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(l);if(s=r.keyString.get(i),void 0===s){const n=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,e),s=new d(t,n),r.keyString.set(i,s)}return r.stringsArray.set(t.strings,s),s},Z=["html","svg"],K=new Set,G=(e,t,n)=>{K.add(e);const r=n?n.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{Z.forEach(t=>{const n=I.get(B(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let o=v(s),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===n&&(a=b(t),n.parentNode.insertBefore(t,n));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=v(s,o);return}o=v(s,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),f(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const J={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),Y={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:X};class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Y){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdateInternal(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Y}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=X){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||J,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||J.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=Y){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const s=this.constructor;n=n||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ee=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),te=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ne(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):te(e,t)}const re=Element.prototype;re.msMatchesSelector||re.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const se=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class oe{constructor(e,t){if(t!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ae=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof oe)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new oe(n,ie)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const le={};class ce extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!se){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new oe(String(t),ie)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==le&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return le}}ce.finalized=!0,ce.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,s=F.has(t),i=H&&11===t.nodeType&&!!t.host,o=i&&!K.has(r),l=o?document.createDocumentFragment():t;if(((e,t,n)=>{let r=F.get(t);void 0===r&&(a(t,t.firstChild),F.set(t,r=new R(Object.assign({templateFactory:U},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:W(r)},n)),o){const e=F.get(l);F.delete(l);const n=e.value instanceof S?e.value.template:void 0;G(r,l,n),a(t,t.firstChild),t.appendChild(l),F.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const pe=new WeakMap,de=_((...e)=>t=>{let n=pe.get(t);void 0===n&&(n={lastRenderedIndex:2147483647,values:[]},pe.set(t,n));const r=n.values;let s=r.length;n.values=e;for(let i=0;i<e.length&&!(i>n.lastRenderedIndex);i++){const o=e[i];if(C(o)||"function"!=typeof o.then){t.setValue(o),n.lastRenderedIndex=i;break}i<s&&o===r[i]||(n.lastRenderedIndex=2147483647,s=0,Promise.resolve(o).then(e=>{const r=n.values.indexOf(o);r>-1&&r<n.lastRenderedIndex&&(n.lastRenderedIndex=r,t.setValue(e),t.commit())}))}}),he=e=>""===e?"Default":e[0].toUpperCase()+e.slice(1);let ue=[];const ge=(e,t)=>e.dataset.element===t,me=e=>"host"===e.dataset.target,fe=e=>ue.find(t=>ge(t,e)&&!me(t)),be=e=>ue.some(t=>ge(t,e)&&!me(t)),ve=e=>0===e.length,ye=(e="")=>e.replace(" | undefined","").replace(" | null","")
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,_e=new WeakMap,xe=_(e=>t=>{if(!(t instanceof R))throw new Error("cache can only be used in text bindings");let n=_e.get(t);void 0===n&&(n=new WeakMap,_e.set(t,n));const r=t.value;if(r instanceof S){if(e instanceof T&&r.template===t.options.templateFactory(e))return void t.setValue(e);{let e=n.get(r.template);void 0===e&&(e={instance:r,nodes:document.createDocumentFragment()},n.set(r.template,e)),o(e.nodes,t.startNode.nextSibling,t.endNode)}}if(e instanceof T){const r=t.options.templateFactory(e),s=n.get(r);void 0!==s&&(t.setValue(s.nodes),t.commit(),t.value=s.instance)}t.setValue(e)}),we={name:"",description:"",slots:[],attributes:[],properties:[],events:[],cssParts:[],cssProperties:[]},ke=new WeakMap,Se=_(e=>t=>{if(!(t instanceof R))throw new Error("unsafeHTML can only be used in text bindings");const n=ke.get(t);if(void 0!==n&&C(e)&&e===n.value&&t.value===n.fragment)return;const r=document.createElement("template");r.innerHTML=e;const s=document.importNode(r.content,!0);t.setValue(s),ke.set(t,{value:e,fragment:s})});var Ae=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}));Ae.defaults,Ae.getDefaults,Ae.changeDefaults;const $e=/[&<>"']/,Te=/[&<>"']/g,Ce=/[<>"']|&(?!#?\w+;)/,Pe=/[<>"']|&(?!#?\w+;)/g,Ne={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ee=e=>Ne[e];const Re=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Le(e){return e.replace(Re,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const ze=/(^|[^\[])\^/g;const Oe=/[^\w:]/g,Me=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const De={},je=/^[^:]+:\/*[^/]*$/,Ue=/^([^:]+:)[\s\S]*$/,Ie=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Fe(e,t){De[" "+e]||(je.test(e)?De[" "+e]=e+"/":De[" "+e]=Ve(e,"/",!0));const n=-1===(e=De[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(Ue,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(Ie,"$1")+t:e+t}function Ve(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}var qe={escape:function(e,t){if(t){if($e.test(e))return e.replace(Te,Ee)}else if(Ce.test(e))return e.replace(Pe,Ee);return e},unescape:Le,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(ze,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(Le(n)).replace(Oe,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Me.test(n)&&(n=Fe(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:Fe,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:Ve,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}};const{noopTest:Be,edit:He,merge:We}=qe,Ze={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:Be,table:Be,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};Ze.def=He(Ze.def).replace("label",Ze._label).replace("title",Ze._title).getRegex(),Ze.bullet=/(?:[*+-]|\d{1,9}\.)/,Ze.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,Ze.item=He(Ze.item,"gm").replace(/bull/g,Ze.bullet).getRegex(),Ze.list=He(Ze.list).replace(/bull/g,Ze.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+Ze.def.source+")").getRegex(),Ze._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ze._comment=/<!--(?!-?>)[\s\S]*?-->/,Ze.html=He(Ze.html,"i").replace("comment",Ze._comment).replace("tag",Ze._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ze.paragraph=He(Ze._paragraph).replace("hr",Ze.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",Ze._tag).getRegex(),Ze.blockquote=He(Ze.blockquote).replace("paragraph",Ze.paragraph).getRegex(),Ze.normal=We({},Ze),Ze.gfm=We({},Ze.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),Ze.gfm.nptable=He(Ze.gfm.nptable).replace("hr",Ze.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",Ze._tag).getRegex(),Ze.gfm.table=He(Ze.gfm.table).replace("hr",Ze.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",Ze._tag).getRegex(),Ze.pedantic=We({},Ze.normal,{html:He("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Ze._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:Be,paragraph:He(Ze.normal._paragraph).replace("hr",Ze.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Ze.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Ke={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Be,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Be,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};Ke.em=He(Ke.em).replace(/punctuation/g,Ke._punctuation).getRegex(),Ke._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Ke._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Ke._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Ke.autolink=He(Ke.autolink).replace("scheme",Ke._scheme).replace("email",Ke._email).getRegex(),Ke._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Ke.tag=He(Ke.tag).replace("comment",Ze._comment).replace("attribute",Ke._attribute).getRegex(),Ke._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ke._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,Ke._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Ke.link=He(Ke.link).replace("label",Ke._label).replace("href",Ke._href).replace("title",Ke._title).getRegex(),Ke.reflink=He(Ke.reflink).replace("label",Ke._label).getRegex(),Ke.normal=We({},Ke),Ke.pedantic=We({},Ke.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:He(/^!?\[(label)\]\((.*?)\)/).replace("label",Ke._label).getRegex(),reflink:He(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ke._label).getRegex()}),Ke.gfm=We({},Ke.normal,{escape:He(Ke.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),Ke.gfm.url=He(Ke.gfm.url,"i").replace("email",Ke.gfm._extended_email).getRegex(),Ke.breaks=We({},Ke.gfm,{br:He(Ke.br).replace("{2,}","*").getRegex(),text:He(Ke.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var Ge={block:Ze,inline:Ke};const{defaults:Je}=Ae,{block:Xe}=Ge,{rtrim:Ye,splitCells:Qe,escape:et}=qe;var tt=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Je,this.rules=Xe.normal,this.options.pedantic?this.rules=Xe.pedantic:this.options.gfm&&(this.rules=Xe.gfm)}static get rules(){return Xe}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,r,s,i,o,a,l,c,p,d,h,u,g,m,f,b;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),t&&"paragraph"===t.type?t.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:Ye(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(e))&&(a={type:"table",header:Qe(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(s[0].length),h=0;h<a.align.length;h++)/^ *-+: *$/.test(a.align[h])?a.align[h]="right":/^ *:-+: *$/.test(a.align[h])?a.align[h]="center":/^ *:-+ *$/.test(a.align[h])?a.align[h]="left":a.align[h]=null;for(h=0;h<a.cells.length;h++)a.cells[h]=Qe(a.cells[h],a.header.length);this.tokens.push(a)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),i=s[2],m=i.length>1,l={type:"list_start",ordered:m,start:m?+i:"",loose:!1},this.tokens.push(l),s=s[0].match(this.rules.item),c=[],n=!1,g=s.length,h=0;h<g;h++)a=s[h],d=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(d-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+d+"}","gm"),"")),h!==g-1&&(o=Xe.bullet.exec(s[h+1])[0],(i.length>1?1===o.length:o.length>1||this.options.smartLists&&o!==i)&&(e=s.slice(h+1).join("\n")+e,h=g-1)),r=n||/\n\n(?!\s*$)/.test(a),h!==g-1&&(n="\n"===a.charAt(a.length-1),r||(r=n)),r&&(l.loose=!0),f=/^\[[ xX]\] /.test(a),b=void 0,f&&(b=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),p={type:"list_item_start",task:f,checked:b,loose:r},c.push(p),this.tokens.push(p),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(l.loose)for(g=c.length,h=0;h<g;h++)c[h].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):et(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),u=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[u]||(this.tokens.links[u]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(e))&&(a={type:"table",header:Qe(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(s[0].length),h=0;h<a.align.length;h++)/^ *-+: *$/.test(a.align[h])?a.align[h]="right":/^ *:-+: *$/.test(a.align[h])?a.align[h]="center":/^ *:-+ *$/.test(a.align[h])?a.align[h]="left":a.align[h]=null;for(h=0;h<a.cells.length;h++)a.cells[h]=Qe(a.cells[h].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}};const{defaults:nt}=Ae,{cleanUrl:rt,escape:st}=qe;var it=class{constructor(e){this.options=e||nt}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+st(r,!0)+'">'+(n?e:st(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:st(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=rt(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+st(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=rt(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}},ot=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}};const{defaults:at}=Ae,{inline:lt}=Ge,{findClosingBracket:ct,escape:pt}=qe;var dt=class e{constructor(e,t){if(this.options=t||at,this.links=e,this.rules=lt.normal,this.options.renderer=this.options.renderer||new it,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=lt.pedantic:this.options.gfm&&(this.options.breaks?this.rules=lt.breaks:this.rules=lt.gfm)}static get rules(){return lt}static output(t,n,r){return new e(n,r).output(t)}output(t){let n,r,s,i,o,a,l="";for(;t;)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),l+=pt(o[1]);else if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),t=t.substring(o[0].length),l+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):pt(o[0]):o[0]);else if(o=this.rules.link.exec(t)){const r=ct(o[2],"()");if(r>-1){const e=(0===o[0].indexOf("!")?5:4)+o[1].length+r;o[2]=o[2].substring(0,r),o[0]=o[0].substring(0,e).trim(),o[3]=""}t=t.substring(o[0].length),this.inLink=!0,s=o[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),n?(s=n[1],i=n[3]):i=""):i=o[3]?o[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(o,{href:e.escapes(s),title:e.escapes(i)}),this.inLink=!1}else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),n=(o[2]||o[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){l+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,l+=this.outputLink(o,n),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),l+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),l+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),l+=this.renderer.codespan(pt(o[2].trim(),!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),l+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),l+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),"@"===o[2]?(r=pt(this.mangle(o[1])),s="mailto:"+r):(r=pt(o[1]),s=r),l+=this.renderer.link(s,null,r);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.inRawBlock?l+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):pt(o[0]):o[0]):l+=this.renderer.text(pt(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===o[2])r=pt(o[0]),s="mailto:"+r;else{do{a=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(a!==o[0]);r=pt(o[0]),s="www."===o[1]?"http://"+r:r}t=t.substring(o[0].length),l+=this.renderer.link(s,null,r)}return l}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,r=t.title?pt(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,pt(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,r="",s=0;for(;s<t;s++)n=e.charCodeAt(s),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}},ht=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}};const{defaults:ut}=Ae,{merge:gt,unescape:mt}=qe;var ft=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||ut,this.options.renderer=this.options.renderer||new it,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new ot}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new dt(e.links,this.options),this.inlineText=new dt(e.links,gt({},this.options,{renderer:new ht})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,mt(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,r,s,i="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",s=0;s<n.length;s++)r+=this.renderer.tablecell(this.inline.output(n[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(r)}return this.renderer.table(i,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,r=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,r,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}};const{merge:bt,checkSanitizeDeprecation:vt,escape:yt}=qe,{getDefaults:_t,changeDefaults:xt,defaults:wt}=Ae;function kt(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=bt({},kt.defaults,t||{}),vt(t);const r=t.highlight;let s,i,o=0;try{s=tt.lex(e,t)}catch(e){return n(e)}i=s.length;const a=function(e){if(e)return t.highlight=r,n(e);let i;try{i=ft.parse(s,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,i)};if(!r||r.length<3)return a();if(delete t.highlight,!i)return a();for(;o<s.length;o++)!function(e){"code"!==e.type?--i||a():r(e.text,e.lang,(function(t,n){return t?a(t):null==n||n===e.text?--i||a():(e.text=n,e.escaped=!0,void(--i||a()))}))}(s[o])}else try{return t=bt({},kt.defaults,t||{}),vt(t),ft.parse(tt.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||kt.defaults).silent)return"<p>An error occurred:</p><pre>"+yt(e.message+"",!0)+"</pre>";throw e}}kt.options=kt.setOptions=function(e){return bt(kt.defaults,e),xt(kt.defaults),kt},kt.getDefaults=_t,kt.defaults=wt,kt.Parser=ft,kt.parser=ft.parse,kt.Renderer=it,kt.TextRenderer=ht,kt.Lexer=tt,kt.lexer=tt.lex,kt.InlineLexer=dt,kt.inlineLexer=dt.output,kt.Slugger=ot,kt.parse=kt;var St=kt,At=n("wMS7"),$t=n.n(At);const Tt=e=>e?q`
    ${Se($t.a.sanitize(St(e)))}
  `:q`
      ${k}
    `;let Ct=0,Pt=class extends ce{static get styles(){return ae`
      :host {
        display: block;
        box-sizing: border-box;
        width: 100%;
      }

      :host([hidden]) {
        display: none !important;
      }
    `}render(){return q`
      <slot></slot>
    `}firstUpdated(){this.setAttribute("role","tabpanel"),this.id||(this.id="api-viewer-panel-"+Ct++)}};Pt=s([ee("api-viewer-panel")],Pt);let Nt=0,Et=class extends ce{constructor(){super(...arguments),this.selected=!1,this.heading="",this.active=!1,this._mousedown=!1}static get styles(){return ae`
      :host {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        box-sizing: border-box;
        position: relative;
        max-width: 150px;
        overflow: hidden;
        min-height: 3rem;
        padding: 0 1rem;
        color: var(--ave-tab-color);
        font-size: 0.875rem;
        line-height: 1.2;
        font-weight: 500;
        text-transform: uppercase;
        outline: none;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: var(--ave-tab-indicator-size);
        background-color: var(--ave-primary-color);
        opacity: 0;
      }

      :host([selected]) {
        color: var(--ave-primary-color);
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--ave-primary-color);
        opacity: 0;
        transition: opacity 0.1s linear;
      }

      :host(:hover)::after {
        opacity: 0.08;
      }

      :host([focus-ring])::after {
        opacity: 0.12;
      }

      :host([active])::after {
        opacity: 0.16;
      }

      @media (max-width: 600px) {
        :host {
          justify-content: center;
          text-align: center;
        }

        :host::before {
          top: auto;
          right: 0;
          width: 100%;
          height: var(--ave-tab-indicator-size);
        }
      }
    `}render(){return q`
      ${this.heading}
    `}firstUpdated(){this.setAttribute("role","tab"),this.id||(this.id="api-viewer-tab-"+Nt++),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)})}updated(e){e.has("selected")&&(this.setAttribute("aria-selected",String(this.selected)),this.setAttribute("tabindex",this.selected?"0":"-1"))}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}};s([ne({type:Boolean,reflect:!0})],Et.prototype,"selected",void 0),s([ne({type:String})],Et.prototype,"heading",void 0),s([ne({type:Boolean})],Et.prototype,"active",void 0),Et=s([ee("api-viewer-tab")],Et);const Rt=40,Lt=37,zt=39,Ot=38,Mt=36,Dt=35;let jt=class extends ce{constructor(){super(...arguments),this._boundSlotChange=this._onSlotChange.bind(this)}static get styles(){return ae`
      :host {
        display: flex;
      }

      .tabs {
        display: block;
      }

      @media (max-width: 600px) {
        :host {
          flex-direction: column;
        }

        .tabs {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
      }
    `}render(){return q`
      <div class="tabs">
        <slot name="tab"></slot>
      </div>
      <slot name="panel"></slot>
    `}firstUpdated(){this.setAttribute("role","tablist"),this.addEventListener("keydown",this._onKeyDown),this.addEventListener("click",this._onClick);const[e,t]=Array.from(this.renderRoot.querySelectorAll("slot"));e&&t&&(e.addEventListener("slotchange",this._boundSlotChange),t.addEventListener("slotchange",this._boundSlotChange)),Promise.all([...this._allTabs(),...this._allPanels()].map(e=>e.updateComplete)).then(()=>{this._linkPanels()})}_onSlotChange(){this._linkPanels()}_linkPanels(){const e=this._allTabs();e.forEach(e=>{const t=e.nextElementSibling;e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)});const t=e.find(e=>e.selected)||e[0];this._selectTab(t)}_allPanels(){return Array.from(this.querySelectorAll("api-viewer-panel"))}_allTabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const n=this._allTabs(),r=n.length;for(let s=0;"number"==typeof e&&s<r;s++,e+=t||1){e<0?e=r-1:e>=r&&(e=0);if(!n[e].hasAttribute("hidden"))return e}return-1}_panelForTab(e){const t=e.getAttribute("aria-controls");return this.querySelector("#"+t)}_prevTab(){const e=this._allTabs(),t=this._getAvailableIndex(e.findIndex(e=>e.selected)-1,-1);return e[(t+e.length)%e.length]}_firstTab(){return this._allTabs()[0]}_lastTab(){const e=this._allTabs();return e[e.length-1]}_nextTab(){const e=this._allTabs(),t=this._getAvailableIndex(e.findIndex(e=>e.selected)+1,1);return e[t%e.length]}reset(){const e=this._allTabs(),t=this._allPanels();e.forEach(e=>{e.selected=!1}),t.forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._allTabs(),t=this._getAvailableIndex(0,1);this._selectTab(e[t%e.length])}_selectTab(e){this.reset();const t=this._panelForTab(e);if(!t)throw new Error("No panel with for tab");e.selected=!0,t.hidden=!1}_onKeyDown(e){const{target:t}=e;if(!1===(t&&t instanceof Et))return;if(e.altKey)return;let n;switch(e.keyCode){case Lt:case Ot:n=this._prevTab();break;case zt:case Rt:n=this._nextTab();break;case Mt:n=this._firstTab();break;case Dt:n=this._lastTab();break;default:return}e.preventDefault(),this._selectTab(n),n.focus()}_onClick(e){const{target:t}=e;t&&t instanceof Et&&(this._selectTab(t),t.focus())}};jt=s([ee("api-viewer-tabs")],jt);const Ut=(e,t,n,r,s)=>q`
    <div part="docs-item">
      <div part="docs-row">
        <div part="docs-column">
          <div part="docs-label">Name</div>
          <div part="docs-value" class="accent">${e}</div>
        </div>
        ${void 0===r?k:q`
              <div part="docs-column">
                <div part="docs-label">Attribute</div>
                <div part="docs-value">${r}</div>
              </div>
            `}
        ${void 0===n?k:q`
              <div part="docs-column" class="column-type">
                <div part="docs-label">Type</div>
                <div part="docs-value">
                  ${n}
                  ${void 0===s?k:q`
                        = <span class="accent">${s}</span>
                      `}
                </div>
              </div>
            `}
      </div>
      <div ?hidden="${void 0===t}">
        <div part="docs-label">Description</div>
        <div part="docs-markdown">${Tt(t)}</div>
      </div>
    </div>
  `,It=(e,t,n)=>{const r=0===t;return q`
    <api-viewer-tab
      heading="${e}"
      slot="tab"
      part="tab"
      ?hidden="${r}"
    ></api-viewer-tab>
    <api-viewer-panel slot="panel" part="tab-panel" ?hidden="${r}">
      ${n}
    </api-viewer-panel>
  `};let Ft=class extends ce{constructor(){super(...arguments),this.name="",this.props=[],this.attrs=[],this.slots=[],this.events=[],this.cssParts=[],this.cssProps=[]}createRenderRoot(){return this}render(){const{slots:e,props:t,attrs:n,events:r,cssParts:s,cssProps:i}=this,o=t||[],a=((e,t)=>e.filter(({name:e})=>!t.some(t=>t.attribute===e||t.name===e)))(n||[],o);return[o,a,e,r,i,s].every(ve)?q`
          <div part="warning">
            The element &lt;${this.name}&gt; does not provide any documented
            API.
          </div>
        `:q`
          <api-viewer-tabs>
            ${It("Properties",o.length,q`
                ${o.map(e=>{const{name:t,description:n,type:r,attribute:s}=e;return Ut(t,n,r,s,e.default)})}
              `)}
            ${It("Attributes",a.length,q`
                ${a.map(({name:e,description:t,type:n})=>Ut(e,t,n))}
              `)}
            ${It("Slots",e.length,q`
                ${e.map(({name:e,description:t})=>Ut(e,t))}
              `)}
            ${It("Events",r.length,q`
                ${r.map(({name:e,description:t})=>Ut(e,t))}
              `)}
            ${It("CSS Custom Properties",i.length,q`
                ${i.map(({name:e,description:t})=>Ut(e,t))}
              `)}
            ${It("CSS Shadow Parts",s.length,q`
                ${s.map(({name:e,description:t})=>Ut(e,t))}
              `)}
          </api-viewer-tabs>
        `}updated(e){if(e.has("name")&&e.get("name")){const e=this.renderRoot.querySelector("api-viewer-tabs");e instanceof jt&&e.selectFirst()}}};s([ne({type:String})],Ft.prototype,"name",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Ft.prototype,"props",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Ft.prototype,"attrs",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Ft.prototype,"slots",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Ft.prototype,"events",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Ft.prototype,"cssParts",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Ft.prototype,"cssProps",void 0),Ft=s([ee("api-viewer-docs")],Ft);const Vt=new WeakMap,qt=e=>"object"==typeof e&&Promise.resolve(e)===e;const Bt=_((e,t,n,r)=>s=>{if(!(s instanceof R))throw new Error("renderer can only be used in text bindings");let i=Vt.get(s);if(void 0===i||i.tagName.toLowerCase()!==e){const t=(e=>{const t=ue.find(t=>ge(t,e)&&me(t));return t&&t.content.firstElementChild})(e);i=t?t.cloneNode(!0):document.createElement(e),s.setValue(i),s.commit();const n=fe(e);if(n instanceof HTMLTemplateElement){const e=document.importNode(n.content,!0);i.appendChild(e)}Vt.set(s,i);const r=s.value;(async function(e){let t=!1;const n=e,r=n.updateComplete;qt(r)&&(await r,t=!0);const s=!!n.componentOnReady&&n.componentOnReady();return qt(s)&&(await s,t=!0),t||await new Promise(e=>setTimeout(()=>e())),n})(r).then(()=>{r.dispatchEvent(new CustomEvent("rendered",{detail:{component:i},bubbles:!0,composed:!0}))})}((e,t)=>{Object.keys(t).forEach(n=>{const{type:r,attribute:s,value:i}=t[n];"boolean"===ye(r)?e.toggleAttribute(s||n,Boolean(i)):e[n]=i})})(i,t),!be(e)&&n.length&&((e,t)=>{for(;e.firstChild;)e.removeChild(e.firstChild);t.forEach(t=>{const n=document.createElement("div"),{name:r,content:s}=t;r&&n.setAttribute("slot",r),n.textContent=s,e.appendChild(n)})})(i,n),r.length&&((e,t)=>{t.forEach(t=>{const{name:n,value:r}=t;r&&(r===t.defaultValue?e.style.removeProperty(n):e.style.setProperty(n,r))})})(i,r)}),Ht=(e,t)=>{const{name:n,value:r}=e;return q`
    <input
      id="${t}"
      type="text"
      .value="${String(r)}"
      data-name="${n}"
      part="input"
    />
  `},Wt=(e,t)=>{const{name:n,type:r,value:s}=e,i=(e=>{switch(ye(e)){case"boolean":return"checkbox";case"number":return"number";default:return"text"}})(r);let o;return o=void 0===s?q`
      <input
        id="${t}"
        type="${i}"
        data-name="${n}"
        data-type="${r}"
        part="input"
      />
    `:"boolean"===ye(r)?q`
      <input
        id="${t}"
        type="checkbox"
        .checked="${Boolean(s)}"
        data-name="${n}"
        data-type="${r}"
        part="checkbox"
      />
    `:q`
      <input
        id="${t}"
        type="${i}"
        .value="${String(s)}"
        data-name="${n}"
        data-type="${r}"
        part="input"
      />
    `,o},Zt=(e,t)=>{const{name:n,content:r}=e;return q`
    <input
      id="${t}"
      type="text"
      .value="${r}"
      data-type="slot"
      data-slot="${n}"
      part="input"
    />
  `},Kt=(e,t,n)=>{const r=e.map(e=>{const{name:r}=e,s=`${t}-${r||"default"}`,i="slot"===t?he(r):r;return q`
      <tr>
        <td>
          <label for="${s}" part="knob-label">${i}</label>
        </td>
        <td>${n(e,s)}</td>
      </tr>
    `});return q`
    <table>
      ${r}
    </table>
  `};var Gt={text:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},join:function(e){return e.join("")},wrap:function(e,t){return'<span class="'+e+'">'+t+"</span>"}};function Jt(e){return e&&e.source||e}var Xt={exec:function(){return null}};function Yt(e,t,n){return new RegExp(Jt(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}function Qt(e){var t=[];var n=[];function s(e){if(e.variants&&e.variants.length){for(var t=0,s=n;t<s.length;t++){var i=s[t],o=i[0],a=i[1];if(e===o)return a}var l=e.variants.map((function(t){return r({},e,{variants:void 0},t)}));return n.push([e,l]),l}}var i=function n(i,o,a){var l=function(e){for(var n=0,r=t;n<r.length;n++){var s=r[n],i=s[0],o=s[1];if(e===i)return o}}(i);if(l)return l;var c,p={lexemesRe:Yt(e,i.lexemes||/\w+/,!0),relevance:null==i.relevance?1:i.relevance,contains:[],terminators:Xt,subLanguage:null==i.subLanguage?void 0:"string"==typeof i.subLanguage?[i.subLanguage]:i.subLanguage};t.push([i,p]),i.className&&(p.className=i.className),i.illegal&&(p.illegalRe=Yt(e,i.illegal));for(var d=0,h=["endsParent","endsWithParent","skip","excludeBegin","excludeEnd","returnBegin","returnEnd"];d<h.length;d++){var u=h[d];i[u]&&(p[u]=!0)}if(o){var g=i.beginKeywords?"\\b("+i.beginKeywords.split(/\s+/).join("|")+")\\b":i.begin||/\B|\b/;i.begin=g,p.beginRe=Yt(e,g);var m=i.end||i.endsWithParent?i.end:/\B|\b/;m&&(i.end=m,p.endRe=Yt(e,m)),c=Jt(m)||"",i.endsWithParent&&a&&(c+=(m?"|":"")+a)}var f=i.keywords||i.beginKeywords;if(f){var b={},v=function(t,n){e.case_insensitive&&(n=n.toLowerCase());for(var r=0,s=n.split(/\s+/);r<s.length;r++){var i=s[r].split(/\|/),o=i[0],a=i[1];b[o]=[t,a?Number(a):1]}};if("string"==typeof f)v("keyword",f);else for(var y in f)v(y,f[y]);p.keywords=b}var _=[];if(i.contains&&i.contains.length){for(var x=0,w=i.contains;x<w.length;x++)for(var k=w[x],S="self"===k?i:k,A=0,$=s(S)||S.endsWithParent&&[r({},S)]||[S];A<$.length;A++){var T=$[A];_.push(T)}p.contains=_.map((function(e){return n(e,p,c)}))}i.starts&&(p.starts=n(i.starts,o,a));var C=_.map((function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin})).concat([c,i.illegal]).map(Jt).filter(Boolean);return C.length&&(p.terminators=Yt(e,C.join("|"),!0)),p}(e);return e.case_insensitive&&(i.case_insensitive=!0),i}var en={},tn={};function nn(e){if(en[e.name]=e,e.aliases)for(var t=0,n=e.aliases;t<n.length;t++){var r=n[t];tn[r]=e.name}}function rn(e){e=(e||"").toLowerCase(),e=tn[e]||e;var t=en[e];if(t)return function(e){return"lexemesRe"in e}(t)?t:en[e]=Qt(t)}var sn={begin:"\\\\[\\s\\S]",relevance:0},on={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[sn]},an={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[sn]},ln={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};function cn(e,t,n){void 0===n&&(n={});var s=r({className:"comment",begin:e,end:t,contains:[]},n),i=s.contains;return i&&(i.push(ln),i.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0})),s}cn("//","$");var pn=cn("/\\*","\\*/"),dn=(cn("#","$"),{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0}),hn={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]},un={name:"xml",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},cn("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[hn],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[hn],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},hn]}]};function gn(e,t){var n=e&&e.exec(t);return n&&0===n.index||!1}function mn(e,t,n,r,s,i){var o=[{content:[]}];function a(e){var t=o[0].content;"string"==typeof e&&t.length&&"string"==typeof t[t.length-1]?t[t.length-1]+=e:t.push(e)}function l(e){a(t.text(e))}function c(t,n){n||(t=e.classPrefix+t),o.unshift({className:t,content:[]})}function p(t){t=e.classPrefix+t,o.push({className:t,content:[]})}function d(){if(o.length<2)throw"unbalanced";var e=o.shift(),n=e.className,r=e.content,s=t.join(r);a(n?t.wrap(n,s):s)}function h(){null!=b.subLanguage?function(n){var r=1==n.length&&n[0];if(!r||rn(r)){var s=r?mn(e,t,r,y,!0,v[r]):fn(e,t,y,n.length?b.subLanguage:void 0);b.relevance>0&&(_+=s.relevance),r&&s.top&&(v[r]=s.top),c(s.language,!0),a(s.value),d()}else l(y)}(b.subLanguage):function(){if(b.keywords){var e=0;b.lexemesRe.lastIndex=0;for(var t=b.lexemesRe.exec(y);t;){l(y.substring(e,t.index));var n=m.case_insensitive?t[0].toLowerCase():t[0],r=b.keywords.hasOwnProperty(n)&&b.keywords[n];r?(_+=r[1],c(r[0],!1),l(t[0]),d()):l(t[0]),e=b.lexemesRe.lastIndex,t=b.lexemesRe.exec(y)}l(y.substr(e))}else l(y)}(),y=""}function u(e){e.className&&c(e.className,!1),b=Object.create(e,{parent:{value:b}})}function g(e,t){if(y+=e,null==t)return h(),0;for(var n,r=0,i=b.contains;r<i.length;r++){var o=i[r];if(gn(o.beginRe,t)){n=o;break}}if(n)return n.skip?y+=t:(n.excludeBegin&&(y+=t),h(),n.returnBegin||n.excludeBegin||(y=t)),u(n),n.returnBegin?0:t.length;var a=function e(t,n){if(gn(t.endRe,n)){for(;t.endsParent&&t.parent;t=t.parent);return t}if(t.endsWithParent&&t.parent)return e(t.parent,n)}(b,t);if(a){var l=b;l.skip?y+=t:(l.returnEnd||l.excludeEnd||(y+=t),h(),l.excludeEnd&&(y=t));do{b.className&&d(),b.skip||b.subLanguage||(_+=b.relevance),b=b.parent}while(b!==a.parent);return a.starts&&u(a.starts),l.returnEnd?0:t.length}if(!s&&gn(b.illegalRe,t))throw new Error('Illegal lexeme "'+t+'" for mode "'+(b.className||"<unnamed>")+'"');return y+=t,t.length||1}var m=rn(n);if(!m)throw new Error('Unknown language: "'+n+'"');var f,b=i||m,v={};for(f=b;f&&f!==m;f=f.parent)f.className&&p(f.className);var y="",_=0;try{for(var x=void 0,w=void 0,k=0;b.terminators.lastIndex=k,x=b.terminators.exec(r);)w=g(r.substring(k,x.index),x[0]),k=x.index+w;for(g(r.substr(k)),f=b;f.parent;f=f.parent)f.className&&d();if(1!=o.length)throw"unbalanced";var S=o[0],A=S.className,$=S.content,T=t.join($),C=A?t.wrap(A,T):T;return{language:n,relevance:_,value:C,top:b}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{language:n,relevance:0,value:t.text(r)};throw e}}function fn(e,t,n,r){void 0===r&&(r=e.languages||Object.keys(en));var s={language:"",relevance:0,value:t.text(n)};if(""!=n){for(var i=s,o=0,a=r.filter(rn);o<a.length;o++){var l=mn(e,t,a[o],n,!1);l.relevance>i.relevance&&(i=l),l.relevance>s.relevance&&(i=s,s=l)}i.language&&(s.second_best=i)}return s}var bn={classPrefix:"hljs-",useBr:!1};var vn=ae`
  pre {
    margin: 0;
    color: black;
    background: none;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 4;
    hyphens: none;
    text-shadow: none;
  }

  code {
    font-family: inherit;
  }

  .comment {
    color: slategray;
  }

  .attr,
  .selector-tag {
    color: #690;
  }

  .css {
    color: #333;
  }

  .built_in {
    color: #dd4a68;
  }

  .meta {
    color: #e90;
    font-weight: bold;
  }

  .string {
    color: #07a;
  }

  .tag {
    color: #999;
  }

  .attribute,
  .name,
  .number {
    color: #905;
  }
`;!function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=e;n<r.length;n++){var s=r[n];nn(s)}}({name:"css",case_insensitive:!0,illegal:/[=/|'$]/,contains:[pn,{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[on,an]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[pn,{begin:/(?:[A-Z_.-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[on,an,dn]}]},dn,an,on,pn,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]}]}]},un);const yn=(void 0===(_n={classPrefix:""})&&(_n={}),{render:Gt,options:r({},bn,_n)});var _n;const xn=(e,t,n,r)=>{let s="<"+e;Object.keys(t).sort((e,t)=>e>t?1:-1).forEach(e=>{const n=t[e],r=n.attribute||e;switch(ye(n.type)){case"boolean":s+=n.value?" "+r:"";break;default:s+=null!=n.value?` ${r}="${n.value}"`:""}}),s+=">";const i=fe(e);if(i instanceof HTMLTemplateElement){const e=i.innerHTML.replace(/\s+$/,"").replace(/(="")/g,"");s+=(e=>{if(!e)return e;const t=e.replace(/\t/g,"  ").split("\n"),n=t.reduce((e,t)=>{if(/^\s*$/.test(t))return e;const n=t.match(/^(\s*)/),r=n&&n[0].length;return null===e||r<e?r:e},null);return t.map(e=>"  "+e.substr(n)).join("\n")})(e),s+="\n"}else n.length&&(n.forEach(e=>{const{name:t,content:n}=e;s+=`\n  ${t?`<div slot="${t}">`:"<div>"}${n}</div>`}),s+="\n");s+=`</${e}>`;const o=r.filter(e=>e.value!==e.defaultValue);o.length&&(s+=`\n<style>\n  ${e} {\n`,o.forEach(e=>{e.value&&(s+=`    ${e.name}: ${e.value};\n`)}),s+="  }\n</style>");const{value:a}=function(e,t,n){var r=e.render,s=e.options;return"string"==typeof n?mn(s,r,n,t,!1):fn(s,r,t,n)}(yn,s,["xml","css"]);return q`
    <pre><code>${Se(a)}</code></pre>
  `};let wn=class extends ce{constructor(){super(...arguments),this.tag="",this.knobs={},this.slots=[],this.cssProps=[]}static get styles(){return[vn,ae`
        :host {
          display: block;
          padding: 0.75rem 1rem;
        }
      `]}render(){return q`
      ${xn(this.tag,this.knobs,this.slots,this.cssProps)}
    `}get source(){return this.renderRoot.querySelector("code")}};s([ne({type:String})],wn.prototype,"tag",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],wn.prototype,"knobs",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],wn.prototype,"slots",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],wn.prototype,"cssProps",void 0),wn=s([ee("api-viewer-demo-snippet")],wn);const kn=e=>q`
    ${e.map(e=>q`
        <p part="event-record">
          event: "${e.type}". detail: ${(e=>{const t=e;return"value"in e&&void 0===e.value&&(t.value="undefined"),JSON.stringify(e).replace('"undefined"',"undefined")})(e.detail)}
        </p>
      `)}
  `;let Sn=class extends ce{constructor(){super(...arguments),this.log=[]}createRenderRoot(){return this}render(){const{log:e}=this;return q`
      <button
        @click="${this._onClearClick}"
        ?hidden="${!e.length}"
        part="button"
      >
        Clear
      </button>
      ${xe(e.length?kn(e):q`
              <p part="event-record">
                Interact with component to see the event log.
              </p>
            `)}
    `}_onClearClick(){this.dispatchEvent(new CustomEvent("clear"))}};s([ne({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"log",void 0),Sn=s([ee("api-viewer-demo-events")],Sn);const An=e=>{switch(ye(e.type)){case"boolean":return"false"!==e.default;case"number":return Number(e.default);default:return e.default}};let $n=class extends ce{constructor(){super(...arguments),this.tag="",this.props=[],this.slots=[],this.events=[],this.cssProps=[],this.processedSlots=[],this.processedCss=[],this.eventLog=[],this.knobs={},this.copyBtnText="copy"}createRenderRoot(){return this}render(){const e=ve(this.events),t=ve(this.cssProps),n=ve(this.slots),r=ve(this.props)&&n;return q`
      <div part="demo-output" @rendered="${this._onRendered}">
        ${Bt(this.tag,this.knobs,this.processedSlots,this.processedCss)}
      </div>
      <api-viewer-tabs part="demo-tabs">
        <api-viewer-tab heading="Source" slot="tab" part="tab"></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <button @click="${this._onCopyClick}" part="button">
            ${this.copyBtnText}
          </button>
          <api-viewer-demo-snippet
            .tag="${this.tag}"
            .knobs="${this.knobs}"
            .slots="${this.processedSlots}"
            .cssProps="${this.processedCss}"
          ></api-viewer-demo-snippet>
        </api-viewer-panel>
        <api-viewer-tab
          heading="Knobs"
          slot="tab"
          part="tab"
          ?hidden="${r}"
        ></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs" ?hidden="${r}">
            <section part="knobs-column" @change="${this._onPropChanged}">
              <h3 part="knobs-header">Properties</h3>
              ${Kt(this.props,"prop",Wt)}
            </section>
            <section
              ?hidden="${be(this.tag)||n}"
              part="knobs-column"
              @change="${this._onSlotChanged}"
            >
              <h3 part="knobs-header">Slots</h3>
              ${Kt(this.processedSlots,"slot",Zt)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab
          heading="Styles"
          slot="tab"
          part="tab"
          ?hidden="${t}"
        ></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <div part="knobs" ?hidden="${t}">
            <section part="knobs-column" @change="${this._onCssChanged}">
              <h3 part="knobs-header">Custom CSS Properties</h3>
              ${Kt(this.cssProps,"css-prop",Ht)}
            </section>
          </div>
        </api-viewer-panel>
        <api-viewer-tab
          id="events"
          heading="Events"
          slot="tab"
          part="tab"
          ?hidden="${e}"
        ></api-viewer-tab>
        <api-viewer-panel slot="panel" part="tab-panel">
          <api-viewer-demo-events
            ?hidden="${e}"
            .log="${this.eventLog}"
            @clear="${this._onLogClear}"
            part="event-log"
          ></api-viewer-demo-events>
        </api-viewer-panel>
      </api-viewer-tabs>
    `}firstUpdated(e){if(e.has("props")){const e=document.createElement(this.tag);this.props=this.props.filter(({name:t})=>!((e,t)=>{if(e){const n=function e(n){return n===HTMLElement?void 0:Object.getOwnPropertyDescriptor(n.prototype,t)||e(Object.getPrototypeOf(n))}(e.constructor);return Boolean(n&&n.get&&void 0===n.set)}return!1})(e,t)).map(e=>"string"==typeof e.default?{...e,value:An(e)}:e)}}updated(e){e.has("slots")&&this.slots&&(this.processedSlots=this.slots.sort((e,t)=>""===e.name?1:""===t.name?-1:e.name.localeCompare(t.name)).map(e=>({...e,content:he(e.name)})))}_getProp(e){return this.props.find(t=>t.attribute===e||t.name===e)}_onLogClear(){this.eventLog=[];const e=this.renderRoot.querySelector("#events");e&&e.focus()}_onCopyClick(){const e=this.renderRoot.querySelector("api-viewer-demo-snippet");if(e&&e.source){const t=document.createRange();t.selectNodeContents(e.source);const n=window.getSelection();n.removeAllRanges(),n.addRange(t);try{document.execCommand("copy"),this.copyBtnText="done"}catch(e){console.error(e),this.copyBtnText="error"}setTimeout(()=>{this.copyBtnText="copy"},1e3),n.removeAllRanges()}}_onCssChanged(e){const t=e.composedPath()[0],{value:n,dataset:r}=t,{name:s}=r;this.processedCss=this.processedCss.map(e=>e.name===s?{...e,value:n}:e)}_onPropChanged(e){const t=e.composedPath()[0],{name:n,type:r}=t.dataset;let s;switch(ye(r)){case"boolean":s=t.checked;break;case"number":s=""===t.value?null:Number(t.value);break;default:s=t.value}const{attribute:i}=this._getProp(n);this.knobs=Object.assign(this.knobs,{[n]:{type:r,value:s,attribute:i}})}_onSlotChanged(e){const t=e.composedPath()[0],n=t.dataset.slot,r=t.value;this.processedSlots=this.processedSlots.map(e=>e.name===n?{...e,content:r}:e)}_onRendered(e){const{component:t}=e.detail;var n;if(n=this.tag,ue.some(e=>ge(e,n)&&me(e))&&this.props.filter(e=>{const{name:n,type:r}=e,s=An(e);return t[n]!==s||"boolean"===ye(r)&&s}).forEach(e=>{this._syncKnob(t,e)}),this.events.forEach(e=>{this._listen(t,e.name)}),this.cssProps.length){const e=getComputedStyle(t);this.processedCss=this.cssProps.map(t=>{let n=e.getPropertyValue(t.name);const r=t;return n&&(n=n.trim(),r.defaultValue=n,r.value=n),r})}}_listen(e,t){e.addEventListener(t,n=>{const r="-changed";if(t.endsWith(r)){const n=this._getProp(t.replace(r,""));n&&this._syncKnob(e,n)}this.eventLog.push(n)})}_syncKnob(e,t){const{name:n,type:r,attribute:s}=t,i=e[n];this.knobs=Object.assign(this.knobs,{[n]:{type:r,value:i,attribute:s}}),this.props=this.props.map(e=>e.name===n?{...e,value:i}:e)}};s([ne({type:String})],$n.prototype,"tag",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"props",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"slots",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"events",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"cssProps",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"processedSlots",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"processedCss",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"eventLog",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],$n.prototype,"knobs",void 0),s([ne({type:String})],$n.prototype,"copyBtnText",void 0),$n=s([ee("api-viewer-demo-layout")],$n);let Tn=class extends ce{constructor(){super(...arguments),this.name="",this.props=[],this.slots=[],this.events=[],this.cssProps=[],this.whenDefined=Promise.resolve()}async renderDemoLayout(e){return await e,q`
      <api-viewer-demo-layout
        .tag="${this.name}"
        .props="${this.props}"
        .slots="${this.slots}"
        .events="${this.events}"
        .cssProps="${this.cssProps}"
      ></api-viewer-demo-layout>
    `}createRenderRoot(){return this}render(){const{name:e}=this;return e&&this.lastName!==e&&(this.lastName=e,this.whenDefined=customElements.whenDefined(e)),q`
      ${de(this.renderDemoLayout(this.whenDefined),q`
          <div part="warning">
            Element "${this.name}" is not defined. Have you imported it?
          </div>
        `)}
    `}};s([ne({type:String})],Tn.prototype,"name",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Tn.prototype,"props",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Tn.prototype,"slots",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Tn.prototype,"events",void 0),s([ne({attribute:!1,hasChanged:()=>!0})],Tn.prototype,"cssProps",void 0),Tn=s([ee("api-viewer-demo")],Tn);let Cn=0,Pn=class extends ce{constructor(){super(),this.elements=[],this.selected=0,this.section="docs",this._id=++Cn}createRenderRoot(){return this}render(){const{elements:e,selected:t,section:n}=this,{name:r,description:s,properties:i,attributes:o,slots:a,events:l,cssParts:c,cssProperties:p}={...we,...e[t]||{}},d=(p||[]).sort((e,t)=>e.name>t.name?1:-1);return q`
      <header part="header">
        <div class="tag-name">&lt;${r}&gt;</div>
        <nav>
          <input
            id="docs"
            type="radio"
            name="section-${this._id}"
            value="docs"
            ?checked="${"docs"===n}"
            @change="${this._onToggle}"
            part="radio-button"
          />
          <label part="radio-label" for="docs">Docs</label>
          <input
            id="demo"
            type="radio"
            name="section-${this._id}"
            value="demo"
            ?checked="${"demo"===n}"
            @change="${this._onToggle}"
            part="radio-button"
          />
          <label part="radio-label" for="demo">Demo</label>
          <label part="select-label">
            <select
              @change="${this._onSelect}"
              .value="${String(t)}"
              ?hidden="${1===e.length}"
              part="select"
            >
              ${e.map((e,t)=>q`
                  <option value="${t}">${e.name}</option>
                `)}
            </select>
          </label>
        </nav>
      </header>
      ${xe("docs"===n?q`
              <div ?hidden="${""===s}" part="docs-description">
                ${Tt(s)}
              </div>
              <api-viewer-docs
                .name="${r}"
                .props="${i}"
                .attrs="${o}"
                .events="${l}"
                .slots="${a}"
                .cssParts="${c}"
                .cssProps="${d}"
              ></api-viewer-docs>
            `:q`
              <api-viewer-demo
                .name="${r}"
                .props="${i}"
                .slots="${a}"
                .events="${l}"
                .cssProps="${d}"
              ></api-viewer-demo>
            `)}
    `}_onSelect(e){this.selected=Number(e.target.value)}_onToggle(e){this.section=e.target.value}};s([ne({attribute:!1})],Pn.prototype,"elements",void 0),s([ne({type:Number})],Pn.prototype,"selected",void 0),s([ne({type:String})],Pn.prototype,"section",void 0),Pn=s([ee("api-viewer-content")],Pn);class Nn extends ce{constructor(){super(...arguments),this.section="docs",this.jsonFetched=Promise.resolve([])}render(){const{src:e}=this;return e&&this.lastSrc!==e&&(this.lastSrc=e,this.jsonFetched=async function(e){let t=[];try{const n=await fetch(e),r=await n.json();Array.isArray(r.tags)&&r.tags.length?t=r.tags:console.error("No element definitions found at "+e)}catch(e){console.error(e)}return t}(e)),q`
      ${de(async function(e,t,n){const r=await e,s=r.findIndex(e=>e.name===n);return r.length?q`
        <api-viewer-content
          .elements="${r}"
          .section="${t}"
          .selected="${s>=0?s:0}"
        ></api-viewer-content>
      `:q`
        <div part="warning">
          No custom elements found in the JSON file.
        </div>
      `}(this.jsonFetched,this.section,this.selected))}
    `}firstUpdated(){var e;e=this,ue=Array.from(e.querySelectorAll("template"))}}s([ne({type:String})],Nn.prototype,"src",void 0),s([ne({type:String})],Nn.prototype,"section",void 0),s([ne({type:String})],Nn.prototype,"selected",void 0);var En=ae`
  :host {
    display: block;
    text-align: left;
    box-sizing: border-box;
    max-width: 800px;
    min-width: 360px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Oxygen-Sans', Ubuntu, Cantarell, sans-serif;
    border: 1px solid var(--ave-border-color);
    border-radius: var(--ave-border-radius);

    --ave-primary-color: #01579b;
    --ave-accent-color: #d63200;
    --ave-border-color: rgba(0, 0, 0, 0.12);
    --ave-border-radius: 4px;
    --ave-header-color: #fff;
    --ave-item-color: rgba(0, 0, 0, 0.87);
    --ave-label-color: #424242;
    --ave-link-color: #01579b;
    --ave-link-hover-color: #d63200;
    --ave-tab-indicator-size: 2px;
    --ave-tab-color: rgba(0, 0, 0, 0.54);
    --ave-monospace-font: Menlo, 'DejaVu Sans Mono', 'Liberation Mono', Consolas,
      'Courier New', monospace;
  }

  [hidden] {
    display: none !important;
  }

  p,
  ul,
  ol {
    margin: 1rem 0;
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  pre {
    white-space: pre-wrap;
  }

  a {
    color: var(--ave-link-color);
  }

  a:hover {
    color: var(--ave-link-hover-color);
  }

  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
    background: var(--ave-button-background, rgba(0, 0, 0, 0.3));
    color: var(--ave-button-color, #fff);
  }

  button:focus,
  button:hover {
    background: var(--ave-button-active-background, rgba(0, 0, 0, 0.6));
  }

  api-viewer-content,
  api-viewer-docs,
  api-viewer-demo,
  api-viewer-demo-layout {
    display: block;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    background: var(--ave-primary-color);
    border-top-left-radius: var(--ave-border-radius);
    border-top-right-radius: var(--ave-border-radius);
  }

  .tag-name {
    color: var(--ave-header-color);
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  nav {
    display: flex;
    align-items: center;
  }

  [part='warning'] {
    padding: 1rem;
  }

  [part='radio-label'] {
    margin: 0 0.75rem 0 0.25rem;
    color: var(--ave-header-color);
    font-size: 0.875rem;
  }

  [part='select-label'] {
    margin-left: 0.5rem;
  }

  /* Docs styles */
  [part='tab'][heading^='CSS'] {
    font-size: 0.8125rem;
  }

  [part='docs-item'] {
    display: block;
    padding: 0.5rem;
    color: var(--ave-item-color);
  }

  [part='docs-description'] {
    display: block;
    padding: 0 1rem;
    border-bottom: solid 1px var(--ave-border-color);
  }

  [part='docs-row'] {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  [part='docs-column'] {
    box-sizing: border-box;
    flex-basis: 25%;
    padding-right: 0.5rem;
  }

  [part='docs-column']:only-child {
    flex-basis: 100%;
  }

  .column-type {
    flex-basis: 50%;
  }

  [part='docs-label'] {
    color: var(--ave-label-color);
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1rem;
  }

  [part='docs-value'] {
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  [part='docs-markdown'] p,
  [part='docs-markdown'] ul,
  [part='docs-markdown'] ol {
    margin: 0.5rem 0;
  }

  .accent {
    color: var(--ave-accent-color);
  }

  /* Demo styles */
  [part='docs-item']:not(:first-of-type),
  [part='demo-tabs'],
  [part='demo-output'] {
    border-top: solid 1px var(--ave-border-color);
  }

  [part='demo-tabs'] [part='tab-panel'] {
    box-sizing: border-box;
    position: relative;
    background: #fafafa;
  }

  [part='demo-output'] {
    padding: 1.5rem;
    text-align: initial;
    transform: translateZ(0);
    overflow: hidden;
  }

  .source {
    position: relative;
  }

  [part='knobs'] {
    display: flex;
    padding: 1rem;
  }

  [part='knobs-column'] {
    width: 50%;
  }

  [part='knobs-header'] {
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 0.25rem;
  }

  td {
    padding: 0.25rem 0.25rem 0.25rem 0;
    font-size: 0.9375rem;
    white-space: nowrap;
  }

  [part='event-log'] {
    display: block;
    padding: 0 1rem;
    min-height: 50px;
    max-height: 200px;
    overflow: auto;
  }

  [part='event-record'] {
    margin: 0 0 0.25rem;
    font-family: var(--ave-monospace-font);
    font-size: 0.875rem;
  }

  [part='event-record']:first-of-type {
    margin-top: 1rem;
  }

  [part='event-record']:last-of-type {
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    header {
      flex-direction: column;
    }

    nav {
      margin-top: 0.5rem;
    }

    .api-col-type {
      flex-basis: 100%;
      margin-top: 1rem;
    }

    .columns {
      flex-direction: column;
    }

    [part='knobs-column']:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;let Rn=class extends Nn{static get styles(){return En}};Rn=s([ee("api-viewer")],Rn)},wMS7:function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.freeze,s=Object.seal,i=Object.create,o="undefined"!=typeof Reflect&&Reflect,a=o.apply,l=o.construct;a||(a=function(e,t,n){return e.apply(t,n)}),r||(r=function(e){return e}),s||(s=function(e){return e}),l||(l=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var c,p=_(Array.prototype.forEach),d=_(Array.prototype.pop),h=_(Array.prototype.push),u=_(String.prototype.toLowerCase),g=_(String.prototype.match),m=_(String.prototype.replace),f=_(String.prototype.indexOf),b=_(String.prototype.trim),v=_(RegExp.prototype.test),y=(c=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(c,t)});function _(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return a(e,t,r)}}function x(e,r){t&&t(e,null);for(var s=r.length;s--;){var i=r[s];if("string"==typeof i){var o=u(i);o!==i&&(n(r)||(r[s]=o),i=o)}e[i]=!0}return e}function w(t){var n=i(null),r=void 0;for(r in t)a(e,t,[r])&&(n[r]=t[r]);return n}var k=r(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),S=r(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),A=r(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),$=r(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),T=r(["#text"]),C=r(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),P=r(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),N=r(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),E=r(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),R=s(/\{\{[\s\S]*|[\s\S]*\}\}/gm),L=s(/<%[\s\S]*|[\s\S]*%>/gm),z=s(/^data-[\-\w.\u00B7-\uFFFF]/),O=s(/^aria-[\-\w]+$/),M=s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),D=s(/^(?:\w+script|data):/i),j=s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function I(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var F=function(){return"undefined"==typeof window?null:window},V=function(e,t){if("object"!==(void 0===e?"undefined":U(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F(),n=function(t){return e(t)};if(n.version="2.2.2",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var s=t.document,i=t.document,o=t.DocumentFragment,a=t.HTMLTemplateElement,l=t.Node,c=t.NodeFilter,_=t.NamedNodeMap,q=void 0===_?t.NamedNodeMap||t.MozNamedAttrMap:_,B=t.Text,H=t.Comment,W=t.DOMParser,Z=t.trustedTypes;if("function"==typeof a){var K=i.createElement("template");K.content&&K.content.ownerDocument&&(i=K.content.ownerDocument)}var G=V(Z,s),J=G&&Ce?G.createHTML(""):"",X=i,Y=X.implementation,Q=X.createNodeIterator,ee=X.getElementsByTagName,te=X.createDocumentFragment,ne=s.importNode,re={};try{re=w(i).documentMode?i.documentMode:{}}catch(e){}var se={};n.isSupported=Y&&void 0!==Y.createHTMLDocument&&9!==re;var ie=R,oe=L,ae=z,le=O,ce=D,pe=j,de=M,he=null,ue=x({},[].concat(I(k),I(S),I(A),I($),I(T))),ge=null,me=x({},[].concat(I(C),I(P),I(N),I(E))),fe=null,be=null,ve=!0,ye=!0,_e=!1,xe=!1,we=!1,ke=!1,Se=!1,Ae=!1,$e=!1,Te=!0,Ce=!1,Pe=!0,Ne=!0,Ee=!1,Re={},Le=x({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),ze=null,Oe=x({},["audio","video","img","source","image","track"]),Me=null,De=x({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),je=null,Ue=i.createElement("form"),Ie=function(e){je&&je===e||(e&&"object"===(void 0===e?"undefined":U(e))||(e={}),e=w(e),he="ALLOWED_TAGS"in e?x({},e.ALLOWED_TAGS):ue,ge="ALLOWED_ATTR"in e?x({},e.ALLOWED_ATTR):me,Me="ADD_URI_SAFE_ATTR"in e?x(w(De),e.ADD_URI_SAFE_ATTR):De,ze="ADD_DATA_URI_TAGS"in e?x(w(Oe),e.ADD_DATA_URI_TAGS):Oe,fe="FORBID_TAGS"in e?x({},e.FORBID_TAGS):{},be="FORBID_ATTR"in e?x({},e.FORBID_ATTR):{},Re="USE_PROFILES"in e&&e.USE_PROFILES,ve=!1!==e.ALLOW_ARIA_ATTR,ye=!1!==e.ALLOW_DATA_ATTR,_e=e.ALLOW_UNKNOWN_PROTOCOLS||!1,xe=e.SAFE_FOR_TEMPLATES||!1,we=e.WHOLE_DOCUMENT||!1,Ae=e.RETURN_DOM||!1,$e=e.RETURN_DOM_FRAGMENT||!1,Te=!1!==e.RETURN_DOM_IMPORT,Ce=e.RETURN_TRUSTED_TYPE||!1,Se=e.FORCE_BODY||!1,Pe=!1!==e.SANITIZE_DOM,Ne=!1!==e.KEEP_CONTENT,Ee=e.IN_PLACE||!1,de=e.ALLOWED_URI_REGEXP||de,xe&&(ye=!1),$e&&(Ae=!0),Re&&(he=x({},[].concat(I(T))),ge=[],!0===Re.html&&(x(he,k),x(ge,C)),!0===Re.svg&&(x(he,S),x(ge,P),x(ge,E)),!0===Re.svgFilters&&(x(he,A),x(ge,P),x(ge,E)),!0===Re.mathMl&&(x(he,$),x(ge,N),x(ge,E))),e.ADD_TAGS&&(he===ue&&(he=w(he)),x(he,e.ADD_TAGS)),e.ADD_ATTR&&(ge===me&&(ge=w(ge)),x(ge,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&x(Me,e.ADD_URI_SAFE_ATTR),Ne&&(he["#text"]=!0),we&&x(he,["html","head","body"]),he.table&&(x(he,["tbody"]),delete fe.tbody),r&&r(e),je=e)},Fe=function(e){h(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=J}},Ve=function(e,t){try{h(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){h(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},qe=function(e){var t=void 0,n=void 0;if(Se)e="<remove></remove>"+e;else{var r=g(e,/^[\r\n\t ]+/);n=r&&r[0]}var s=G?G.createHTML(e):e;try{t=(new W).parseFromString(s,"text/html")}catch(e){}if(!t||!t.documentElement){var o=(t=Y.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=s}return e&&n&&t.body.insertBefore(i.createTextNode(n),t.body.childNodes[0]||null),ee.call(t,we?"html":"body")[0]},Be=function(e){return Q.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,(function(){return c.FILTER_ACCEPT}),!1)},He=function(e){return!(e instanceof B||e instanceof H||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof q&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},We=function(e){return"object"===(void 0===l?"undefined":U(l))?e instanceof l:e&&"object"===(void 0===e?"undefined":U(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Ze=function(e,t,r){se[e]&&p(se[e],(function(e){e.call(n,t,r,je)}))},Ke=function(e){var t=void 0;if(Ze("beforeSanitizeElements",e,null),He(e))return Fe(e),!0;if(g(e.nodeName,/[\u0080-\uFFFF]/))return Fe(e),!0;var r=u(e.nodeName);if(Ze("uponSanitizeElement",e,{tagName:r,allowedTags:he}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br, form, table").length)return Fe(e),!0;if(!We(e.firstElementChild)&&(!We(e.content)||!We(e.content.firstElementChild))&&v(/<[!/\w]/g,e.innerHTML)&&v(/<[!/\w]/g,e.textContent))return Fe(e),!0;if(!he[r]||fe[r]){if(Ne&&!Le[r]&&"function"==typeof e.insertAdjacentHTML)try{var s=e.innerHTML;e.insertAdjacentHTML("AfterEnd",G?G.createHTML(s):s)}catch(e){}return Fe(e),!0}return"noscript"!==r&&"noembed"!==r||!v(/<\/no(script|embed)/i,e.innerHTML)?(xe&&3===e.nodeType&&(t=e.textContent,t=m(t,ie," "),t=m(t,oe," "),e.textContent!==t&&(h(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ze("afterSanitizeElements",e,null),!1):(Fe(e),!0)},Ge=function(e,t,n){if(Pe&&("id"===t||"name"===t)&&(n in i||n in Ue))return!1;if(ye&&v(ae,t));else if(ve&&v(le,t));else{if(!ge[t]||be[t])return!1;if(Me[t]);else if(v(de,m(n,pe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==f(n,"data:")||!ze[e])if(_e&&!v(ce,m(n,pe,"")));else if(n)return!1}return!0},Je=function(e){var t=void 0,r=void 0,s=void 0,i=void 0;Ze("beforeSanitizeAttributes",e,null);var o=e.attributes;if(o){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ge};for(i=o.length;i--;){var l=t=o[i],c=l.name,p=l.namespaceURI;if(r=b(t.value),s=u(c),a.attrName=s,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,Ze("uponSanitizeAttribute",e,a),r=a.attrValue,!a.forceKeepAttr&&(Ve(c,e),a.keepAttr))if(v(/\/>/i,r))Ve(c,e);else{xe&&(r=m(r,ie," "),r=m(r,oe," "));var h=e.nodeName.toLowerCase();if(Ge(h,s,r))try{p?e.setAttributeNS(p,c,r):e.setAttribute(c,r),d(n.removed)}catch(e){}}}Ze("afterSanitizeAttributes",e,null)}},Xe=function e(t){var n=void 0,r=Be(t);for(Ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ze("uponSanitizeShadowNode",n,null),Ke(n)||(n.content instanceof o&&e(n.content),Je(n));Ze("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var i=void 0,a=void 0,c=void 0,p=void 0,d=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!We(e)){if("function"!=typeof e.toString)throw y("toString is not a function");if("string"!=typeof(e=e.toString()))throw y("dirty is not a string, aborting")}if(!n.isSupported){if("object"===U(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(We(e))return t.toStaticHTML(e.outerHTML)}return e}if(ke||Ie(r),n.removed=[],"string"==typeof e&&(Ee=!1),Ee);else if(e instanceof l)1===(a=(i=qe("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?i=a:i.appendChild(a);else{if(!Ae&&!xe&&!we&&-1===e.indexOf("<"))return G&&Ce?G.createHTML(e):e;if(!(i=qe(e)))return Ae?null:J}i&&Se&&Fe(i.firstChild);for(var h=Be(Ee?e:i);c=h.nextNode();)3===c.nodeType&&c===p||Ke(c)||(c.content instanceof o&&Xe(c.content),Je(c),p=c);if(p=null,Ee)return e;if(Ae){if($e)for(d=te.call(i.ownerDocument);i.firstChild;)d.appendChild(i.firstChild);else d=i;return Te&&(d=ne.call(s,d,!0)),d}var u=we?i.outerHTML:i.innerHTML;return xe&&(u=m(u,ie," "),u=m(u,oe," ")),G&&Ce?G.createHTML(u):u},n.setConfig=function(e){Ie(e),ke=!0},n.clearConfig=function(){je=null,ke=!1},n.isValidAttribute=function(e,t,n){je||Ie({});var r=u(e),s=u(t);return Ge(r,s,n)},n.addHook=function(e,t){"function"==typeof t&&(se[e]=se[e]||[],h(se[e],t))},n.removeHook=function(e){se[e]&&d(se[e])},n.removeHooks=function(e){se[e]&&(se[e]=[])},n.removeAllHooks=function(){se={}},n}()}()}}]);