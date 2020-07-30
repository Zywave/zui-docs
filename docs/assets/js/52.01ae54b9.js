(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{192:function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
e.exports=function(){"use strict";var e=Object.hasOwnProperty,t=Object.setPrototypeOf,n=Object.isFrozen,r=Object.keys,s=Object.freeze,i=Object.seal,o="undefined"!=typeof Reflect&&Reflect,a=o.apply,l=o.construct;a||(a=function(e,t,n){return e.apply(t,n)}),s||(s=function(e){return e}),i||(i=function(e){return e}),l||(l=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var c=k(Array.prototype.forEach),p=k(Array.prototype.indexOf),d=k(Array.prototype.join),h=k(Array.prototype.pop),u=k(Array.prototype.push),g=k(Array.prototype.slice),m=k(String.prototype.toLowerCase),f=k(String.prototype.match),b=k(String.prototype.replace),v=k(String.prototype.indexOf),y=k(String.prototype.trim),_=k(RegExp.prototype.test),x=S(RegExp),w=S(TypeError);function k(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return a(e,t,r)}}function S(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return l(e,n)}}function A(e,r){t&&t(e,null);for(var s=r.length;s--;){var i=r[s];if("string"==typeof i){var o=m(i);o!==i&&(n(r)||(r[s]=o),i=o)}e[i]=!0}return e}function $(t){var n={},r=void 0;for(r in t)a(e,t,[r])&&(n[r]=t[r]);return n}var T=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),C=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),P=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),N=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),E=s(["#text"]),R=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),L=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),O=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),z=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),D=i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),M=i(/<%[\s\S]*|[\s\S]*%>/gm),U=i(/^data-[\-\w.\u00B7-\uFFFF]/),j=i(/^aria-[\-\w]+$/),I=i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),F=i(/^(?:\w+script|data):/i),V=i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function B(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var H=function(){return"undefined"==typeof window?null:window},W=function(e,t){if("object"!==(void 0===e?"undefined":q(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H(),n=function(t){return e(t)};if(n.version="2.0.12",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var i=t.document,o=!1,a=t.document,l=t.DocumentFragment,k=t.HTMLTemplateElement,S=t.Node,Z=t.NodeFilter,G=t.NamedNodeMap,K=void 0===G?t.NamedNodeMap||t.MozNamedAttrMap:G,J=t.Text,X=t.Comment,Y=t.DOMParser,Q=t.trustedTypes;if("function"==typeof k){var ee=a.createElement("template");ee.content&&ee.content.ownerDocument&&(a=ee.content.ownerDocument)}var te=W(Q,i),ne=te&&Oe?te.createHTML(""):"",re=a,se=re.implementation,ie=re.createNodeIterator,oe=re.getElementsByTagName,ae=re.createDocumentFragment,le=i.importNode,ce={};n.isSupported=se&&void 0!==se.createHTMLDocument&&9!==a.documentMode;var pe=D,de=M,he=U,ue=j,ge=F,me=V,fe=I,be=null,ve=A({},[].concat(B(T),B(C),B(P),B(N),B(E))),ye=null,_e=A({},[].concat(B(R),B(L),B(O),B(z))),xe=null,we=null,ke=!0,Se=!0,Ae=!1,$e=!1,Te=!1,Ce=!1,Pe=!1,Ne=!1,Ee=!1,Re=!1,Le=!1,Oe=!1,ze=!0,De=!0,Me=!1,Ue={},je=A({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ie=null,Fe=A({},["audio","video","img","source","image","track"]),Ve=null,qe=A({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Be=null,He=a.createElement("form"),We=function(e){Be&&Be===e||(e&&"object"===(void 0===e?"undefined":q(e))||(e={}),be="ALLOWED_TAGS"in e?A({},e.ALLOWED_TAGS):ve,ye="ALLOWED_ATTR"in e?A({},e.ALLOWED_ATTR):_e,Ve="ADD_URI_SAFE_ATTR"in e?A($(qe),e.ADD_URI_SAFE_ATTR):qe,Ie="ADD_DATA_URI_TAGS"in e?A($(Fe),e.ADD_DATA_URI_TAGS):Fe,xe="FORBID_TAGS"in e?A({},e.FORBID_TAGS):{},we="FORBID_ATTR"in e?A({},e.FORBID_ATTR):{},Ue="USE_PROFILES"in e&&e.USE_PROFILES,ke=!1!==e.ALLOW_ARIA_ATTR,Se=!1!==e.ALLOW_DATA_ATTR,Ae=e.ALLOW_UNKNOWN_PROTOCOLS||!1,$e=e.SAFE_FOR_JQUERY||!1,Te=e.SAFE_FOR_TEMPLATES||!1,Ce=e.WHOLE_DOCUMENT||!1,Ee=e.RETURN_DOM||!1,Re=e.RETURN_DOM_FRAGMENT||!1,Le=e.RETURN_DOM_IMPORT||!1,Oe=e.RETURN_TRUSTED_TYPE||!1,Ne=e.FORCE_BODY||!1,ze=!1!==e.SANITIZE_DOM,De=!1!==e.KEEP_CONTENT,Me=e.IN_PLACE||!1,fe=e.ALLOWED_URI_REGEXP||fe,Te&&(Se=!1),Re&&(Ee=!0),Ue&&(be=A({},[].concat(B(E))),ye=[],!0===Ue.html&&(A(be,T),A(ye,R)),!0===Ue.svg&&(A(be,C),A(ye,L),A(ye,z)),!0===Ue.svgFilters&&(A(be,P),A(ye,L),A(ye,z)),!0===Ue.mathMl&&(A(be,N),A(ye,O),A(ye,z))),e.ADD_TAGS&&(be===ve&&(be=$(be)),A(be,e.ADD_TAGS)),e.ADD_ATTR&&(ye===_e&&(ye=$(ye)),A(ye,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&A(Ve,e.ADD_URI_SAFE_ATTR),De&&(be["#text"]=!0),Ce&&A(be,["html","head","body"]),be.table&&(A(be,["tbody"]),delete xe.tbody),s&&s(e),Be=e)},Ze=function(e){u(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=ne}},Ge=function(e,t){try{u(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){u(n.removed,{attribute:null,from:t})}t.removeAttribute(e)},Ke=function(e){var t=void 0,n=void 0;if(Ne)e="<remove></remove>"+e;else{var r=f(e,/^[\r\n\t ]+/);n=r&&r[0]}var s=te?te.createHTML(e):e;try{t=(new Y).parseFromString(s,"text/html")}catch(e){}if(o&&A(xe,["title"]),!t||!t.documentElement){var i=(t=se.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=s}return e&&n&&t.body.insertBefore(a.createTextNode(n),t.body.childNodes[0]||null),oe.call(t,Ce?"html":"body")[0]};n.isSupported&&function(){try{var e=Ke("<x/><title>&lt;/title&gt;&lt;img&gt;");_(/<\/title/,e.querySelector("title").innerHTML)&&(o=!0)}catch(e){}}();var Je=function(e){return ie.call(e.ownerDocument||e,e,Z.SHOW_ELEMENT|Z.SHOW_COMMENT|Z.SHOW_TEXT,(function(){return Z.FILTER_ACCEPT}),!1)},Xe=function(e){return!(e instanceof J||e instanceof X||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof K&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI)},Ye=function(e){return"object"===(void 0===S?"undefined":q(S))?e instanceof S:e&&"object"===(void 0===e?"undefined":q(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Qe=function(e,t,r){ce[e]&&c(ce[e],(function(e){e.call(n,t,r,Be)}))},et=function(e){var t=void 0;if(Qe("beforeSanitizeElements",e,null),Xe(e))return Ze(e),!0;var r=m(e.nodeName);if(Qe("uponSanitizeElement",e,{tagName:r,allowedTags:be}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br").length)return Ze(e),!0;if(!be[r]||xe[r]){if(De&&!je[r]&&"function"==typeof e.insertAdjacentHTML)try{var s=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(s):s)}catch(e){}return Ze(e),!0}return"noscript"===r&&_(/<\/noscript/i,e.innerHTML)||"noembed"===r&&_(/<\/noembed/i,e.innerHTML)?(Ze(e),!0):(!$e||e.firstElementChild||e.content&&e.content.firstElementChild||!_(/</g,e.textContent)||(u(n.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=b(e.innerHTML,/</g,"&lt;"):e.innerHTML=b(e.textContent,/</g,"&lt;")),Te&&3===e.nodeType&&(t=e.textContent,t=b(t,pe," "),t=b(t,de," "),e.textContent!==t&&(u(n.removed,{element:e.cloneNode()}),e.textContent=t)),Qe("afterSanitizeElements",e,null),!1)},tt=function(e,t,n){if(ze&&("id"===t||"name"===t)&&(n in a||n in He))return!1;if(Se&&_(he,t));else if(ke&&_(ue,t));else{if(!ye[t]||we[t])return!1;if(Ve[t]);else if(_(fe,b(n,me,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==v(n,"data:")||!Ie[e])if(Ae&&!_(ge,b(n,me,"")));else if(n)return!1}return!0},nt=function(e){var t=void 0,s=void 0,i=void 0,o=void 0,a=void 0;Qe("beforeSanitizeAttributes",e,null);var l=e.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ye};for(a=l.length;a--;){var u=t=l[a],f=u.name,v=u.namespaceURI;if(s=y(t.value),i=m(f),c.attrName=i,c.attrValue=s,c.keepAttr=!0,c.forceKeepAttr=void 0,Qe("uponSanitizeAttribute",e,c),s=c.attrValue,!c.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&l.id)o=l.id,l=g(l,[]),Ge("id",e),Ge(f,e),p(l,o)>a&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===s&&c.keepAttr&&(ye[i]||!we[i]))continue;"id"===f&&e.setAttribute(f,""),Ge(f,e)}if(c.keepAttr)if($e&&_(/\/>/i,s))Ge(f,e);else if(_(/svg|math/i,e.namespaceURI)&&_(x("</("+d(r(je),"|")+")","i"),s))Ge(f,e);else{Te&&(s=b(s,pe," "),s=b(s,de," "));var w=e.nodeName.toLowerCase();if(tt(w,i,s))try{v?e.setAttributeNS(v,f,s):e.setAttribute(f,s),h(n.removed)}catch(e){}}}}Qe("afterSanitizeAttributes",e,null)}},rt=function e(t){var n=void 0,r=Je(t);for(Qe("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Qe("uponSanitizeShadowNode",n,null),et(n)||(n.content instanceof l&&e(n.content),nt(n));Qe("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,r){var s=void 0,o=void 0,a=void 0,c=void 0,p=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ye(e)){if("function"!=typeof e.toString)throw w("toString is not a function");if("string"!=typeof(e=e.toString()))throw w("dirty is not a string, aborting")}if(!n.isSupported){if("object"===q(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(Ye(e))return t.toStaticHTML(e.outerHTML)}return e}if(Pe||We(r),n.removed=[],"string"==typeof e&&(Me=!1),Me);else if(e instanceof S)1===(o=(s=Ke("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===o.nodeName||"HTML"===o.nodeName?s=o:s.appendChild(o);else{if(!Ee&&!Te&&!Ce&&-1===e.indexOf("<"))return te&&Oe?te.createHTML(e):e;if(!(s=Ke(e)))return Ee?null:ne}s&&Ne&&Ze(s.firstChild);for(var d=Je(Me?e:s);a=d.nextNode();)3===a.nodeType&&a===c||et(a)||(a.content instanceof l&&rt(a.content),nt(a),c=a);if(c=null,Me)return e;if(Ee){if(Re)for(p=ae.call(s.ownerDocument);s.firstChild;)p.appendChild(s.firstChild);else p=s;return Le&&(p=le.call(i,p,!0)),p}var h=Ce?s.outerHTML:s.innerHTML;return Te&&(h=b(h,pe," "),h=b(h,de," ")),te&&Oe?te.createHTML(h):h},n.setConfig=function(e){We(e),Pe=!0},n.clearConfig=function(){Be=null,Pe=!1},n.isValidAttribute=function(e,t,n){Be||We({});var r=m(e),s=m(t);return tt(r,s,n)},n.addHook=function(e,t){"function"==typeof t&&(ce[e]=ce[e]||[],u(ce[e],t))},n.removeHook=function(e){ce[e]&&h(ce[e])},n.removeHooks=function(e){ce[e]&&(ce[e]=[])},n.removeAllHooks=function(){ce={}},n}()}()},195:function(e,t,n){"use strict";n.r(t),n.d(t,"ApiViewer",(function(){return Nn}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function s(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}
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
 */const A=` ${l} `;class ${constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const i=m.exec(e);t+=null===i?e+(n?A:c):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const T=e=>null===e||!("object"==typeof e||"function"==typeof e),C=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class P{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(T(e)||!C(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===w||T(e)&&e===this.value||(this.value=e,x(e)||(this.committer.dirty=!0))}commit(){for(;x(this.value);){const e=this.value;this.value=w,e(this)}this.value!==w&&this.committer.commit()}}class E{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}const e=this.__pendingValue;e!==w&&(T(e)?e!==this.value&&this.__commitText(e):e instanceof $?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):C(e)?this.__commitIterable(e):e===k?(this.value=k,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof S&&this.value.template===t)this.value.update(e.values);else{const n=new S(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const s of e)n=t[r],void 0===n&&(n=new E(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(s),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){a(this.startNode.parentNode,e.nextSibling,this.endNode)}}class R{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}if(this.__pendingValue===w)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=w}}class L extends P{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends N{}let z=!1;(()=>{try{const e={get capture(){return z=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class D{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=w,e(this)}if(this.__pendingValue===w)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=w}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const M=e=>e&&(z?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function U(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(l);return n=t.keyString.get(r),void 0===n&&(n=new d(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const j=new Map,I=new WeakMap;
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
 */const F=new
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
class{handleAttributeExpressions(e,t,n,r){const s=t[0];if("."===s){return new L(e,t.slice(1),n).parts}if("@"===s)return[new D(e,t.slice(1),r.eventContext)];if("?"===s)return[new R(e,t.slice(1),n)];return new P(e,t,n).parts}handleTextExpression(e){return new E(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(e,...t)=>new $(e,t,"html",F),q=(e,t)=>`${e}--${t}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const H=e=>t=>{const n=q(t.type,e);let r=j.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},j.set(n,r));let s=r.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(l);if(s=r.keyString.get(i),void 0===s){const n=t.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(n,e),s=new d(t,n),r.keyString.set(i,s)}return r.stringsArray.set(t.strings,s),s},W=["html","svg"],Z=new Set,G=(e,t,n)=>{Z.add(e);const r=n?n.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{W.forEach(t=>{const n=j.get(q(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:s}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let o=v(s),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===n&&(a=b(t),n.parentNode.insertBefore(t,n));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=v(s,o);return}o=v(s,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),f(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const K={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),X={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:J};class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=X){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||X}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=J){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||K,s="function"==typeof r?r:r.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||K.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=X){const r=this.constructor,s=r._attributeNameForProperty(e,n);if(void 0!==s){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,s=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Y.finalized=!0;
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
const Q=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),ee=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function te(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):ee(e,t)}
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
const ne="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol();class se{constructor(e,t){if(t!==re)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ne?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof se)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new se(n,re)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const oe={};class ae extends Y{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ne?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==oe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return oe}}ae.finalized=!0,ae.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,s=I.has(t),i=B&&11===t.nodeType&&!!t.host,o=i&&!Z.has(r),l=o?document.createDocumentFragment():t;if(((e,t,n)=>{let r=I.get(t);void 0===r&&(a(t,t.firstChild),I.set(t,r=new E(Object.assign({templateFactory:U},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:H(r)},n)),o){const e=I.get(l);I.delete(l);const n=e.value instanceof S?e.value.template:void 0;G(r,l,n),a(t,t.firstChild),t.appendChild(l),I.set(t,e)}!s&&i&&window.ShadyCSS.styleElement(t.host)};
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
const le=new WeakMap,ce=_((...e)=>t=>{let n=le.get(t);void 0===n&&(n={lastRenderedIndex:2147483647,values:[]},le.set(t,n));const r=n.values;let s=r.length;n.values=e;for(let i=0;i<e.length&&!(i>n.lastRenderedIndex);i++){const o=e[i];if(T(o)||"function"!=typeof o.then){t.setValue(o),n.lastRenderedIndex=i;break}i<s&&o===r[i]||(n.lastRenderedIndex=2147483647,s=0,Promise.resolve(o).then(e=>{const r=n.values.indexOf(o);r>-1&&r<n.lastRenderedIndex&&(n.lastRenderedIndex=r,t.setValue(e),t.commit())}))}}),pe=e=>""===e?"Default":e[0].toUpperCase()+e.slice(1);let de=[];const he=(e,t)=>e.dataset.element===t,ue=e=>"host"===e.dataset.target,ge=e=>de.find(t=>he(t,e)&&!ue(t)),me=e=>de.some(t=>he(t,e)&&!ue(t)),fe=e=>0===e.length,be=(e="")=>e.replace(" | undefined","").replace(" | null","")
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
 */,ve=new WeakMap,ye=_(e=>t=>{if(!(t instanceof E))throw new Error("cache can only be used in text bindings");let n=ve.get(t);void 0===n&&(n=new WeakMap,ve.set(t,n));const r=t.value;if(r instanceof S){if(e instanceof $&&r.template===t.options.templateFactory(e))return void t.setValue(e);{let e=n.get(r.template);void 0===e&&(e={instance:r,nodes:document.createDocumentFragment()},n.set(r.template,e)),o(e.nodes,t.startNode.nextSibling,t.endNode)}}if(e instanceof $){const r=t.options.templateFactory(e),s=n.get(r);void 0!==s&&(t.setValue(s.nodes),t.commit(),t.value=s.instance)}t.setValue(e)}),_e={name:"",description:"",slots:[],attributes:[],properties:[],events:[],cssParts:[],cssProperties:[]},xe=new WeakMap,we=_(e=>t=>{if(!(t instanceof E))throw new Error("unsafeHTML can only be used in text bindings");const n=xe.get(t);if(void 0!==n&&T(e)&&e===n.value&&t.value===n.fragment)return;const r=document.createElement("template");r.innerHTML=e;const s=document.importNode(r.content,!0);t.setValue(s),xe.set(t,{value:e,fragment:s})});var ke=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}));ke.defaults,ke.getDefaults,ke.changeDefaults;const Se=/[&<>"']/,Ae=/[&<>"']/g,$e=/[<>"']|&(?!#?\w+;)/,Te=/[<>"']|&(?!#?\w+;)/g,Ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Pe=e=>Ce[e];const Ne=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Ee(e){return e.replace(Ne,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const Re=/(^|[^\[])\^/g;const Le=/[^\w:]/g,Oe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const ze={},De=/^[^:]+:\/*[^/]*$/,Me=/^([^:]+:)[\s\S]*$/,Ue=/^([^:]+:\/*[^/]*)[\s\S]*$/;function je(e,t){ze[" "+e]||(De.test(e)?ze[" "+e]=e+"/":ze[" "+e]=Ie(e,"/",!0));const n=-1===(e=ze[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(Me,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(Ue,"$1")+t:e+t}function Ie(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}var Fe={escape:function(e,t){if(t){if(Se.test(e))return e.replace(Ae,Pe)}else if($e.test(e))return e.replace(Te,Pe);return e},unescape:Ee,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(Re,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(Ee(n)).replace(Le,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!Oe.test(n)&&(n=je(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:je,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"}).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:Ie,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}};const{noopTest:Ve,edit:qe,merge:Be}=Fe,He={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:Ve,table:Ve,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};He.def=qe(He.def).replace("label",He._label).replace("title",He._title).getRegex(),He.bullet=/(?:[*+-]|\d{1,9}\.)/,He.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,He.item=qe(He.item,"gm").replace(/bull/g,He.bullet).getRegex(),He.list=qe(He.list).replace(/bull/g,He.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+He.def.source+")").getRegex(),He._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",He._comment=/<!--(?!-?>)[\s\S]*?-->/,He.html=qe(He.html,"i").replace("comment",He._comment).replace("tag",He._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),He.paragraph=qe(He._paragraph).replace("hr",He.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",He._tag).getRegex(),He.blockquote=qe(He.blockquote).replace("paragraph",He.paragraph).getRegex(),He.normal=Be({},He),He.gfm=Be({},He.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),He.gfm.nptable=qe(He.gfm.nptable).replace("hr",He.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",He._tag).getRegex(),He.gfm.table=qe(He.gfm.table).replace("hr",He.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",He._tag).getRegex(),He.pedantic=Be({},He.normal,{html:qe("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",He._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:Ve,paragraph:qe(He.normal._paragraph).replace("hr",He.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",He.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const We={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ve,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ve,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};We.em=qe(We.em).replace(/punctuation/g,We._punctuation).getRegex(),We._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,We._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,We._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,We.autolink=qe(We.autolink).replace("scheme",We._scheme).replace("email",We._email).getRegex(),We._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,We.tag=qe(We.tag).replace("comment",He._comment).replace("attribute",We._attribute).getRegex(),We._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,We._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,We._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,We.link=qe(We.link).replace("label",We._label).replace("href",We._href).replace("title",We._title).getRegex(),We.reflink=qe(We.reflink).replace("label",We._label).getRegex(),We.normal=Be({},We),We.pedantic=Be({},We.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:qe(/^!?\[(label)\]\((.*?)\)/).replace("label",We._label).getRegex(),reflink:qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",We._label).getRegex()}),We.gfm=Be({},We.normal,{escape:qe(We.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),We.gfm.url=qe(We.gfm.url,"i").replace("email",We.gfm._extended_email).getRegex(),We.breaks=Be({},We.gfm,{br:qe(We.br).replace("{2,}","*").getRegex(),text:qe(We.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var Ze={block:He,inline:We};const{defaults:Ge}=ke,{block:Ke}=Ze,{rtrim:Je,splitCells:Xe,escape:Ye}=Fe;var Qe=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ge,this.rules=Ke.normal,this.options.pedantic?this.rules=Ke.pedantic:this.options.gfm&&(this.rules=Ke.gfm)}static get rules(){return Ke}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,r,s,i,o,a,l,c,p,d,h,u,g,m,f,b;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(s[0].length),t&&"paragraph"===t.type?t.text+="\n"+s[0].trimRight():(s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?s:Je(s,"\n")}))}else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if((s=this.rules.nptable.exec(e))&&(a={type:"table",header:Xe(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(s[0].length),h=0;h<a.align.length;h++)/^ *-+: *$/.test(a.align[h])?a.align[h]="right":/^ *:-+: *$/.test(a.align[h])?a.align[h]="center":/^ *:-+ *$/.test(a.align[h])?a.align[h]="left":a.align[h]=null;for(h=0;h<a.cells.length;h++)a.cells[h]=Xe(a.cells[h],a.header.length);this.tokens.push(a)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),i=s[2],m=i.length>1,l={type:"list_start",ordered:m,start:m?+i:"",loose:!1},this.tokens.push(l),s=s[0].match(this.rules.item),c=[],n=!1,g=s.length,h=0;h<g;h++)a=s[h],d=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(d-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+d+"}","gm"),"")),h!==g-1&&(o=Ke.bullet.exec(s[h+1])[0],(i.length>1?1===o.length:o.length>1||this.options.smartLists&&o!==i)&&(e=s.slice(h+1).join("\n")+e,h=g-1)),r=n||/\n\n(?!\s*$)/.test(a),h!==g-1&&(n="\n"===a.charAt(a.length-1),r||(r=n)),r&&(l.loose=!0),f=/^\[[ xX]\] /.test(a),b=void 0,f&&(b=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),p={type:"list_item_start",task:f,checked:b,loose:r},c.push(p),this.tokens.push(p),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(l.loose)for(g=c.length,h=0;h<g;h++)c[h].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):Ye(s[0]):s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),u=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[u]||(this.tokens.links[u]={href:s[2],title:s[3]});else if((s=this.rules.table.exec(e))&&(a={type:"table",header:Xe(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(s[0].length),h=0;h<a.align.length;h++)/^ *-+: *$/.test(a.align[h])?a.align[h]="right":/^ *:-+: *$/.test(a.align[h])?a.align[h]="center":/^ *:-+ *$/.test(a.align[h])?a.align[h]="left":a.align[h]=null;for(h=0;h<a.cells.length;h++)a.cells[h]=Xe(a.cells[h].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2].charAt(0)?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}};const{defaults:et}=ke,{cleanUrl:tt,escape:nt}=Fe;var rt=class{constructor(e){this.options=e||et}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+nt(r,!0)+'">'+(n?e:nt(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:nt(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=tt(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+nt(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=tt(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}},st=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}};const{defaults:it}=ke,{inline:ot}=Ze,{findClosingBracket:at,escape:lt}=Fe;var ct=class e{constructor(e,t){if(this.options=t||it,this.links=e,this.rules=ot.normal,this.options.renderer=this.options.renderer||new rt,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=ot.pedantic:this.options.gfm&&(this.options.breaks?this.rules=ot.breaks:this.rules=ot.gfm)}static get rules(){return ot}static output(t,n,r){return new e(n,r).output(t)}output(t){let n,r,s,i,o,a,l="";for(;t;)if(o=this.rules.escape.exec(t))t=t.substring(o[0].length),l+=lt(o[1]);else if(o=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),t=t.substring(o[0].length),l+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):lt(o[0]):o[0]);else if(o=this.rules.link.exec(t)){const r=at(o[2],"()");if(r>-1){const e=(0===o[0].indexOf("!")?5:4)+o[1].length+r;o[2]=o[2].substring(0,r),o[0]=o[0].substring(0,e).trim(),o[3]=""}t=t.substring(o[0].length),this.inLink=!0,s=o[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s),n?(s=n[1],i=n[3]):i=""):i=o[3]?o[3].slice(1,-1):"",s=s.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(o,{href:e.escapes(s),title:e.escapes(i)}),this.inLink=!1}else if((o=this.rules.reflink.exec(t))||(o=this.rules.nolink.exec(t))){if(t=t.substring(o[0].length),n=(o[2]||o[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){l+=o[0].charAt(0),t=o[0].substring(1)+t;continue}this.inLink=!0,l+=this.outputLink(o,n),this.inLink=!1}else if(o=this.rules.strong.exec(t))t=t.substring(o[0].length),l+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(t))t=t.substring(o[0].length),l+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(t))t=t.substring(o[0].length),l+=this.renderer.codespan(lt(o[2].trim(),!0));else if(o=this.rules.br.exec(t))t=t.substring(o[0].length),l+=this.renderer.br();else if(o=this.rules.del.exec(t))t=t.substring(o[0].length),l+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(t))t=t.substring(o[0].length),"@"===o[2]?(r=lt(this.mangle(o[1])),s="mailto:"+r):(r=lt(o[1]),s=r),l+=this.renderer.link(s,null,r);else if(this.inLink||!(o=this.rules.url.exec(t))){if(o=this.rules.text.exec(t))t=t.substring(o[0].length),this.inRawBlock?l+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):lt(o[0]):o[0]):l+=this.renderer.text(lt(this.smartypants(o[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===o[2])r=lt(o[0]),s="mailto:"+r;else{do{a=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(a!==o[0]);r=lt(o[0]),s="www."===o[1]?"http://"+r:r}t=t.substring(o[0].length),l+=this.renderer.link(s,null,r)}return l}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,r=t.title?lt(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,lt(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,r="",s=0;for(;s<t;s++)n=e.charCodeAt(s),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}},pt=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}};const{defaults:dt}=ke,{merge:ht,unescape:ut}=Fe;var gt=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||dt,this.options.renderer=this.options.renderer||new rt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new st}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new ct(e.links,this.options),this.inlineText=new ct(e.links,ht({},this.options,{renderer:new pt})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,ut(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,r,s,i="";for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",s=0;s<n.length;s++)r+=this.renderer.tablecell(this.inline.output(n[s]),{header:!1,align:this.token.align[s]});e+=this.renderer.tablerow(r)}return this.renderer.table(i,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,r=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,r,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}};const{merge:mt,checkSanitizeDeprecation:ft,escape:bt}=Fe,{getDefaults:vt,changeDefaults:yt,defaults:_t}=ke;function xt(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=mt({},xt.defaults,t||{}),ft(t);const r=t.highlight;let s,i,o=0;try{s=Qe.lex(e,t)}catch(e){return n(e)}i=s.length;const a=function(e){if(e)return t.highlight=r,n(e);let i;try{i=gt.parse(s,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,i)};if(!r||r.length<3)return a();if(delete t.highlight,!i)return a();for(;o<s.length;o++)!function(e){"code"!==e.type?--i||a():r(e.text,e.lang,(function(t,n){return t?a(t):null==n||n===e.text?--i||a():(e.text=n,e.escaped=!0,void(--i||a()))}))}(s[o])}else try{return t=mt({},xt.defaults,t||{}),ft(t),gt.parse(Qe.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||xt.defaults).silent)return"<p>An error occurred:</p><pre>"+bt(e.message+"",!0)+"</pre>";throw e}}xt.options=xt.setOptions=function(e){return mt(xt.defaults,e),yt(xt.defaults),xt},xt.getDefaults=vt,xt.defaults=_t,xt.Parser=gt,xt.parser=gt.parse,xt.Renderer=rt,xt.TextRenderer=pt,xt.Lexer=Qe,xt.lexer=Qe.lex,xt.InlineLexer=ct,xt.inlineLexer=ct.output,xt.Slugger=st,xt.parse=xt;var wt=xt,kt=n(192),St=n.n(kt);const At=e=>e?V`
    ${we(St.a.sanitize(wt(e)))}
  `:V`
      ${k}
    `;let $t=0,Tt=class extends ae{static get styles(){return ie`
      :host {
        display: block;
        box-sizing: border-box;
        width: 100%;
      }

      :host([hidden]) {
        display: none !important;
      }
    `}render(){return V`
      <slot></slot>
    `}firstUpdated(){this.setAttribute("role","tabpanel"),this.id||(this.id="api-viewer-panel-"+$t++)}};Tt=s([Q("api-viewer-panel")],Tt);let Ct=0,Pt=class extends ae{constructor(){super(...arguments),this.selected=!1,this.heading="",this.active=!1,this._mousedown=!1}static get styles(){return ie`
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
    `}render(){return V`
      ${this.heading}
    `}firstUpdated(){this.setAttribute("role","tab"),this.id||(this.id="api-viewer-tab-"+Ct++),this.addEventListener("focus",()=>this._setFocused(!0),!0),this.addEventListener("blur",()=>{this._setFocused(!1),this._setActive(!1)},!0),this.addEventListener("mousedown",()=>{this._setActive(this._mousedown=!0);const e=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)})}updated(e){e.has("selected")&&(this.setAttribute("aria-selected",String(this.selected)),this.setAttribute("tabindex",this.selected?"0":"-1"))}_setActive(e){this.toggleAttribute("active",e)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&!this._mousedown)}};s([te({type:Boolean,reflect:!0})],Pt.prototype,"selected",void 0),s([te({type:String})],Pt.prototype,"heading",void 0),s([te({type:Boolean})],Pt.prototype,"active",void 0),Pt=s([Q("api-viewer-tab")],Pt);const Nt=40,Et=37,Rt=39,Lt=38,Ot=36,zt=35;let Dt=class extends ae{constructor(){super(...arguments),this._boundSlotChange=this._onSlotChange.bind(this)}static get styles(){return ie`
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
    `}render(){return V`
      <div class="tabs">
        <slot name="tab"></slot>
      </div>
      <slot name="panel"></slot>
    `}firstUpdated(){this.setAttribute("role","tablist"),this.addEventListener("keydown",this._onKeyDown),this.addEventListener("click",this._onClick);const[e,t]=Array.from(this.renderRoot.querySelectorAll("slot"));e&&t&&(e.addEventListener("slotchange",this._boundSlotChange),t.addEventListener("slotchange",this._boundSlotChange)),Promise.all([...this._allTabs(),...this._allPanels()].map(e=>e.updateComplete)).then(()=>{this._linkPanels()})}_onSlotChange(){this._linkPanels()}_linkPanels(){const e=this._allTabs();e.forEach(e=>{const t=e.nextElementSibling;e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)});const t=e.find(e=>e.selected)||e[0];this._selectTab(t)}_allPanels(){return Array.from(this.querySelectorAll("api-viewer-panel"))}_allTabs(){return Array.from(this.querySelectorAll("api-viewer-tab"))}_getAvailableIndex(e,t){const n=this._allTabs(),r=n.length;for(let s=0;"number"==typeof e&&s<r;s++,e+=t||1){e<0?e=r-1:e>=r&&(e=0);if(!n[e].hasAttribute("hidden"))return e}return-1}_panelForTab(e){const t=e.getAttribute("aria-controls");return this.querySelector("#"+t)}_prevTab(){const e=this._allTabs(),t=this._getAvailableIndex(e.findIndex(e=>e.selected)-1,-1);return e[(t+e.length)%e.length]}_firstTab(){return this._allTabs()[0]}_lastTab(){const e=this._allTabs();return e[e.length-1]}_nextTab(){const e=this._allTabs(),t=this._getAvailableIndex(e.findIndex(e=>e.selected)+1,1);return e[t%e.length]}reset(){const e=this._allTabs(),t=this._allPanels();e.forEach(e=>{e.selected=!1}),t.forEach(e=>{e.hidden=!0})}selectFirst(){const e=this._allTabs(),t=this._getAvailableIndex(0,1);this._selectTab(e[t%e.length])}_selectTab(e){this.reset();const t=this._panelForTab(e);if(!t)throw new Error("No panel with for tab");e.selected=!0,t.hidden=!1}_onKeyDown(e){const{target:t}=e;if(!1===(t&&t instanceof Pt))return;if(e.altKey)return;let n;switch(e.keyCode){case Et:case Lt:n=this._prevTab();break;case Rt:case Nt:n=this._nextTab();break;case Ot:n=this._firstTab();break;case zt:n=this._lastTab();break;default:return}e.preventDefault(),this._selectTab(n),n.focus()}_onClick(e){const{target:t}=e;t&&t instanceof Pt&&(this._selectTab(t),t.focus())}};Dt=s([Q("api-viewer-tabs")],Dt);const Mt=(e,t,n,r,s)=>V`
    <div part="docs-item">
      <div part="docs-row">
        <div part="docs-column">
          <div part="docs-label">Name</div>
          <div part="docs-value" class="accent">${e}</div>
        </div>
        ${void 0===r?k:V`
              <div part="docs-column">
                <div part="docs-label">Attribute</div>
                <div part="docs-value">${r}</div>
              </div>
            `}
        ${void 0===n?k:V`
              <div part="docs-column" class="column-type">
                <div part="docs-label">Type</div>
                <div part="docs-value">
                  ${n}
                  ${void 0===s?k:V`
                        = <span class="accent">${s}</span>
                      `}
                </div>
              </div>
            `}
      </div>
      <div ?hidden="${void 0===t}">
        <div part="docs-label">Description</div>
        <div part="docs-markdown">${At(t)}</div>
      </div>
    </div>
  `,Ut=(e,t,n)=>{const r=0===t;return V`
    <api-viewer-tab
      heading="${e}"
      slot="tab"
      part="tab"
      ?hidden="${r}"
    ></api-viewer-tab>
    <api-viewer-panel slot="panel" part="tab-panel" ?hidden="${r}">
      ${n}
    </api-viewer-panel>
  `};let jt=class extends ae{constructor(){super(...arguments),this.name="",this.props=[],this.attrs=[],this.slots=[],this.events=[],this.cssParts=[],this.cssProps=[]}createRenderRoot(){return this}render(){const{slots:e,props:t,attrs:n,events:r,cssParts:s,cssProps:i}=this,o=t||[],a=((e,t)=>e.filter(({name:e})=>!t.some(t=>t.attribute===e||t.name===e)))(n||[],o);return[o,a,e,r,i,s].every(fe)?V`
          <div part="warning">
            The element &lt;${this.name}&gt; does not provide any documented
            API.
          </div>
        `:V`
          <api-viewer-tabs>
            ${Ut("Properties",o.length,V`
                ${o.map(e=>{const{name:t,description:n,type:r,attribute:s}=e;return Mt(t,n,r,s,e.default)})}
              `)}
            ${Ut("Attributes",a.length,V`
                ${a.map(({name:e,description:t,type:n})=>Mt(e,t,n))}
              `)}
            ${Ut("Slots",e.length,V`
                ${e.map(({name:e,description:t})=>Mt(e,t))}
              `)}
            ${Ut("Events",r.length,V`
                ${r.map(({name:e,description:t})=>Mt(e,t))}
              `)}
            ${Ut("CSS Custom Properties",i.length,V`
                ${i.map(({name:e,description:t})=>Mt(e,t))}
              `)}
            ${Ut("CSS Shadow Parts",s.length,V`
                ${s.map(({name:e,description:t})=>Mt(e,t))}
              `)}
          </api-viewer-tabs>
        `}updated(e){if(e.has("name")&&e.get("name")){const e=this.renderRoot.querySelector("api-viewer-tabs");e instanceof Dt&&e.selectFirst()}}};s([te({type:String})],jt.prototype,"name",void 0),s([te({attribute:!1,hasChanged:()=>!0})],jt.prototype,"props",void 0),s([te({attribute:!1,hasChanged:()=>!0})],jt.prototype,"attrs",void 0),s([te({attribute:!1,hasChanged:()=>!0})],jt.prototype,"slots",void 0),s([te({attribute:!1,hasChanged:()=>!0})],jt.prototype,"events",void 0),s([te({attribute:!1,hasChanged:()=>!0})],jt.prototype,"cssParts",void 0),s([te({attribute:!1,hasChanged:()=>!0})],jt.prototype,"cssProps",void 0),jt=s([Q("api-viewer-docs")],jt);const It=new WeakMap,Ft=e=>"object"==typeof e&&Promise.resolve(e)===e;const Vt=_((e,t,n,r)=>s=>{if(!(s instanceof E))throw new Error("renderer can only be used in text bindings");let i=It.get(s);if(void 0===i||i.tagName.toLowerCase()!==e){const t=(e=>{const t=de.find(t=>he(t,e)&&ue(t));return t&&t.content.firstElementChild})(e);i=t?t.cloneNode(!0):document.createElement(e),s.setValue(i),s.commit();const n=ge(e);if(n instanceof HTMLTemplateElement){const e=document.importNode(n.content,!0);i.appendChild(e)}It.set(s,i);const r=s.value;(async function(e){let t=!1;const n=e,r=n.updateComplete;Ft(r)&&(await r,t=!0);const s=!!n.componentOnReady&&n.componentOnReady();return Ft(s)&&(await s,t=!0),t||await new Promise(e=>setTimeout(()=>e())),n})(r).then(()=>{r.dispatchEvent(new CustomEvent("rendered",{detail:{component:i},bubbles:!0,composed:!0}))})}((e,t)=>{Object.keys(t).forEach(n=>{const{type:r,attribute:s,value:i}=t[n];"boolean"===be(r)?e.toggleAttribute(s||n,Boolean(i)):e[n]=i})})(i,t),!me(e)&&n.length&&((e,t)=>{for(;e.firstChild;)e.removeChild(e.firstChild);t.forEach(t=>{const n=document.createElement("div"),{name:r,content:s}=t;r&&n.setAttribute("slot",r),n.textContent=s,e.appendChild(n)})})(i,n),r.length&&((e,t)=>{t.forEach(t=>{const{name:n,value:r}=t;r&&(r===t.defaultValue?e.style.removeProperty(n):e.style.setProperty(n,r))})})(i,r)}),qt=(e,t)=>{const{name:n,value:r}=e;return V`
    <input
      id="${t}"
      type="text"
      .value="${String(r)}"
      data-name="${n}"
      part="input"
    />
  `},Bt=(e,t)=>{const{name:n,type:r,value:s}=e,i=(e=>{switch(be(e)){case"boolean":return"checkbox";case"number":return"number";default:return"text"}})(r);let o;return o=void 0===s?V`
      <input
        id="${t}"
        type="${i}"
        data-name="${n}"
        data-type="${r}"
        part="input"
      />
    `:"boolean"===be(r)?V`
      <input
        id="${t}"
        type="checkbox"
        .checked="${Boolean(s)}"
        data-name="${n}"
        data-type="${r}"
        part="checkbox"
      />
    `:V`
      <input
        id="${t}"
        type="${i}"
        .value="${String(s)}"
        data-name="${n}"
        data-type="${r}"
        part="input"
      />
    `,o},Ht=(e,t)=>{const{name:n,content:r}=e;return V`
    <input
      id="${t}"
      type="text"
      .value="${r}"
      data-type="slot"
      data-slot="${n}"
      part="input"
    />
  `},Wt=(e,t,n)=>{const r=e.map(e=>{const{name:r}=e,s=`${t}-${r||"default"}`,i="slot"===t?pe(r):r;return V`
      <tr>
        <td>
          <label for="${s}" part="knob-label">${i}</label>
        </td>
        <td>${n(e,s)}</td>
      </tr>
    `});return V`
    <table>
      ${r}
    </table>
  `};var Zt={text:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},join:function(e){return e.join("")},wrap:function(e,t){return'<span class="'+e+'">'+t+"</span>"}};function Gt(e){return e&&e.source||e}var Kt={exec:function(){return null}};function Jt(e,t,n){return new RegExp(Gt(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}function Xt(e){var t=[];var n=[];function s(e){if(e.variants&&e.variants.length){for(var t=0,s=n;t<s.length;t++){var i=s[t],o=i[0],a=i[1];if(e===o)return a}var l=e.variants.map((function(t){return r({},e,{variants:void 0},t)}));return n.push([e,l]),l}}var i=function n(i,o,a){var l=function(e){for(var n=0,r=t;n<r.length;n++){var s=r[n],i=s[0],o=s[1];if(e===i)return o}}(i);if(l)return l;var c,p={lexemesRe:Jt(e,i.lexemes||/\w+/,!0),relevance:null==i.relevance?1:i.relevance,contains:[],terminators:Kt,subLanguage:null==i.subLanguage?void 0:"string"==typeof i.subLanguage?[i.subLanguage]:i.subLanguage};t.push([i,p]),i.className&&(p.className=i.className),i.illegal&&(p.illegalRe=Jt(e,i.illegal));for(var d=0,h=["endsParent","endsWithParent","skip","excludeBegin","excludeEnd","returnBegin","returnEnd"];d<h.length;d++){var u=h[d];i[u]&&(p[u]=!0)}if(o){var g=i.beginKeywords?"\\b("+i.beginKeywords.split(/\s+/).join("|")+")\\b":i.begin||/\B|\b/;i.begin=g,p.beginRe=Jt(e,g);var m=i.end||i.endsWithParent?i.end:/\B|\b/;m&&(i.end=m,p.endRe=Jt(e,m)),c=Gt(m)||"",i.endsWithParent&&a&&(c+=(m?"|":"")+a)}var f=i.keywords||i.beginKeywords;if(f){var b={},v=function(t,n){e.case_insensitive&&(n=n.toLowerCase());for(var r=0,s=n.split(/\s+/);r<s.length;r++){var i=s[r].split(/\|/),o=i[0],a=i[1];b[o]=[t,a?Number(a):1]}};if("string"==typeof f)v("keyword",f);else for(var y in f)v(y,f[y]);p.keywords=b}var _=[];if(i.contains&&i.contains.length){for(var x=0,w=i.contains;x<w.length;x++)for(var k=w[x],S="self"===k?i:k,A=0,$=s(S)||S.endsWithParent&&[r({},S)]||[S];A<$.length;A++){var T=$[A];_.push(T)}p.contains=_.map((function(e){return n(e,p,c)}))}i.starts&&(p.starts=n(i.starts,o,a));var C=_.map((function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin})).concat([c,i.illegal]).map(Gt).filter(Boolean);return C.length&&(p.terminators=Jt(e,C.join("|"),!0)),p}(e);return e.case_insensitive&&(i.case_insensitive=!0),i}var Yt={},Qt={};function en(e){if(Yt[e.name]=e,e.aliases)for(var t=0,n=e.aliases;t<n.length;t++){var r=n[t];Qt[r]=e.name}}function tn(e){e=(e||"").toLowerCase(),e=Qt[e]||e;var t=Yt[e];if(t)return function(e){return"lexemesRe"in e}(t)?t:Yt[e]=Xt(t)}var nn={begin:"\\\\[\\s\\S]",relevance:0},rn={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[nn]},sn={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[nn]},on={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/};function an(e,t,n){void 0===n&&(n={});var s=r({className:"comment",begin:e,end:t,contains:[]},n),i=s.contains;return i&&(i.push(on),i.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0})),s}an("//","$");var ln=an("/\\*","\\*/"),cn=(an("#","$"),{className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0}),pn={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]},dn={name:"xml",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},an("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[pn],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[pn],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},pn]}]};function hn(e,t){var n=e&&e.exec(t);return n&&0===n.index||!1}function un(e,t,n,r,s,i){var o=[{content:[]}];function a(e){var t=o[0].content;"string"==typeof e&&t.length&&"string"==typeof t[t.length-1]?t[t.length-1]+=e:t.push(e)}function l(e){a(t.text(e))}function c(t,n){n||(t=e.classPrefix+t),o.unshift({className:t,content:[]})}function p(t){t=e.classPrefix+t,o.push({className:t,content:[]})}function d(){if(o.length<2)throw"unbalanced";var e=o.shift(),n=e.className,r=e.content,s=t.join(r);a(n?t.wrap(n,s):s)}function h(){null!=b.subLanguage?function(n){var r=1==n.length&&n[0];if(!r||tn(r)){var s=r?un(e,t,r,y,!0,v[r]):gn(e,t,y,n.length?b.subLanguage:void 0);b.relevance>0&&(_+=s.relevance),r&&s.top&&(v[r]=s.top),c(s.language,!0),a(s.value),d()}else l(y)}(b.subLanguage):function(){if(b.keywords){var e=0;b.lexemesRe.lastIndex=0;for(var t=b.lexemesRe.exec(y);t;){l(y.substring(e,t.index));var n=m.case_insensitive?t[0].toLowerCase():t[0],r=b.keywords.hasOwnProperty(n)&&b.keywords[n];r?(_+=r[1],c(r[0],!1),l(t[0]),d()):l(t[0]),e=b.lexemesRe.lastIndex,t=b.lexemesRe.exec(y)}l(y.substr(e))}else l(y)}(),y=""}function u(e){e.className&&c(e.className,!1),b=Object.create(e,{parent:{value:b}})}function g(e,t){if(y+=e,null==t)return h(),0;for(var n,r=0,i=b.contains;r<i.length;r++){var o=i[r];if(hn(o.beginRe,t)){n=o;break}}if(n)return n.skip?y+=t:(n.excludeBegin&&(y+=t),h(),n.returnBegin||n.excludeBegin||(y=t)),u(n),n.returnBegin?0:t.length;var a=function e(t,n){if(hn(t.endRe,n)){for(;t.endsParent&&t.parent;t=t.parent);return t}if(t.endsWithParent&&t.parent)return e(t.parent,n)}(b,t);if(a){var l=b;l.skip?y+=t:(l.returnEnd||l.excludeEnd||(y+=t),h(),l.excludeEnd&&(y=t));do{b.className&&d(),b.skip||b.subLanguage||(_+=b.relevance),b=b.parent}while(b!==a.parent);return a.starts&&u(a.starts),l.returnEnd?0:t.length}if(!s&&hn(b.illegalRe,t))throw new Error('Illegal lexeme "'+t+'" for mode "'+(b.className||"<unnamed>")+'"');return y+=t,t.length||1}var m=tn(n);if(!m)throw new Error('Unknown language: "'+n+'"');var f,b=i||m,v={};for(f=b;f&&f!==m;f=f.parent)f.className&&p(f.className);var y="",_=0;try{for(var x=void 0,w=void 0,k=0;b.terminators.lastIndex=k,x=b.terminators.exec(r);)w=g(r.substring(k,x.index),x[0]),k=x.index+w;for(g(r.substr(k)),f=b;f.parent;f=f.parent)f.className&&d();if(1!=o.length)throw"unbalanced";var S=o[0],A=S.className,$=S.content,T=t.join($),C=A?t.wrap(A,T):T;return{language:n,relevance:_,value:C,top:b}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{language:n,relevance:0,value:t.text(r)};throw e}}function gn(e,t,n,r){void 0===r&&(r=e.languages||Object.keys(Yt));var s={language:"",relevance:0,value:t.text(n)};if(""!=n){for(var i=s,o=0,a=r.filter(tn);o<a.length;o++){var l=un(e,t,a[o],n,!1);l.relevance>i.relevance&&(i=l),l.relevance>s.relevance&&(i=s,s=l)}i.language&&(s.second_best=i)}return s}var mn={classPrefix:"hljs-",useBr:!1};var fn=ie`
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
`;!function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0,r=e;n<r.length;n++){var s=r[n];en(s)}}({name:"css",case_insensitive:!0,illegal:/[=/|'$]/,contains:[ln,{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[rn,sn]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[ln,{begin:/(?:[A-Z_.-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[rn,sn,cn]}]},cn,sn,rn,ln,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]}]}]},dn);const bn=(void 0===(vn={classPrefix:""})&&(vn={}),{render:Zt,options:r({},mn,vn)});var vn;const yn=(e,t,n,r)=>{let s="<"+e;Object.keys(t).sort((e,t)=>e>t?1:-1).forEach(e=>{const n=t[e],r=n.attribute||e;switch(be(n.type)){case"boolean":s+=n.value?" "+r:"";break;default:s+=null!=n.value?` ${r}="${n.value}"`:""}}),s+=">";const i=ge(e);if(i instanceof HTMLTemplateElement){const e=i.innerHTML.replace(/\s+$/,"").replace(/(="")/g,"");s+=(e=>{if(!e)return e;const t=e.replace(/\t/g,"  ").split("\n"),n=t.reduce((e,t)=>{if(/^\s*$/.test(t))return e;const n=t.match(/^(\s*)/),r=n&&n[0].length;return null===e||r<e?r:e},null);return t.map(e=>"  "+e.substr(n)).join("\n")})(e),s+="\n"}else n.length&&(n.forEach(e=>{const{name:t,content:n}=e;s+=`\n  ${t?`<div slot="${t}">`:"<div>"}${n}</div>`}),s+="\n");s+=`</${e}>`;const o=r.filter(e=>e.value!==e.defaultValue);o.length&&(s+=`\n<style>\n  ${e} {\n`,o.forEach(e=>{e.value&&(s+=`    ${e.name}: ${e.value};\n`)}),s+="  }\n</style>");const{value:a}=function(e,t,n){var r=e.render,s=e.options;return"string"==typeof n?un(s,r,n,t,!1):gn(s,r,t,n)}(bn,s,["xml","css"]);return V`
    <pre><code>${we(a)}</code></pre>
  `};let _n=class extends ae{constructor(){super(...arguments),this.tag="",this.knobs={},this.slots=[],this.cssProps=[]}static get styles(){return[fn,ie`
        :host {
          display: block;
          padding: 0.75rem 1rem;
        }
      `]}render(){return V`
      ${yn(this.tag,this.knobs,this.slots,this.cssProps)}
    `}get source(){return this.renderRoot.querySelector("code")}};s([te({type:String})],_n.prototype,"tag",void 0),s([te({attribute:!1,hasChanged:()=>!0})],_n.prototype,"knobs",void 0),s([te({attribute:!1,hasChanged:()=>!0})],_n.prototype,"slots",void 0),s([te({attribute:!1,hasChanged:()=>!0})],_n.prototype,"cssProps",void 0),_n=s([Q("api-viewer-demo-snippet")],_n);const xn=e=>V`
    ${e.map(e=>V`
        <p part="event-record">
          event: "${e.type}". detail: ${(e=>{const t=e;return"value"in e&&void 0===e.value&&(t.value="undefined"),JSON.stringify(e).replace('"undefined"',"undefined")})(e.detail)}
        </p>
      `)}
  `;let wn=class extends ae{constructor(){super(...arguments),this.log=[]}createRenderRoot(){return this}render(){const{log:e}=this;return V`
      <button
        @click="${this._onClearClick}"
        ?hidden="${!e.length}"
        part="button"
      >
        Clear
      </button>
      ${ye(e.length?xn(e):V`
              <p part="event-record">
                Interact with component to see the event log.
              </p>
            `)}
    `}_onClearClick(){this.dispatchEvent(new CustomEvent("clear"))}};s([te({attribute:!1,hasChanged:()=>!0})],wn.prototype,"log",void 0),wn=s([Q("api-viewer-demo-events")],wn);const kn=e=>{switch(be(e.type)){case"boolean":return"false"!==e.default;case"number":return Number(e.default);default:return e.default}};let Sn=class extends ae{constructor(){super(...arguments),this.tag="",this.props=[],this.slots=[],this.events=[],this.cssProps=[],this.processedSlots=[],this.processedCss=[],this.eventLog=[],this.knobs={},this.copyBtnText="copy"}createRenderRoot(){return this}render(){const e=fe(this.events),t=fe(this.cssProps),n=fe(this.slots),r=fe(this.props)&&n;return V`
      <div part="demo-output" @rendered="${this._onRendered}">
        ${Vt(this.tag,this.knobs,this.processedSlots,this.processedCss)}
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
              ${Wt(this.props,"prop",Bt)}
            </section>
            <section
              ?hidden="${me(this.tag)||n}"
              part="knobs-column"
              @change="${this._onSlotChanged}"
            >
              <h3 part="knobs-header">Slots</h3>
              ${Wt(this.processedSlots,"slot",Ht)}
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
              ${Wt(this.cssProps,"css-prop",qt)}
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
    `}firstUpdated(e){if(e.has("props")){const e=document.createElement(this.tag);this.props=this.props.filter(({name:t})=>!((e,t)=>{if(e){const n=function e(n){return n===HTMLElement?void 0:Object.getOwnPropertyDescriptor(n.prototype,t)||e(Object.getPrototypeOf(n))}(e.constructor);return Boolean(n&&n.get&&void 0===n.set)}return!1})(e,t)).map(e=>"string"==typeof e.default?{...e,value:kn(e)}:e)}}updated(e){e.has("slots")&&this.slots&&(this.processedSlots=this.slots.sort((e,t)=>""===e.name?1:""===t.name?-1:e.name.localeCompare(t.name)).map(e=>({...e,content:pe(e.name)})))}_getProp(e){return this.props.find(t=>t.attribute===e||t.name===e)}_onLogClear(){this.eventLog=[];const e=this.renderRoot.querySelector("#events");e&&e.focus()}_onCopyClick(){const e=this.renderRoot.querySelector("api-viewer-demo-snippet");if(e&&e.source){const t=document.createRange();t.selectNodeContents(e.source);const n=window.getSelection();n.removeAllRanges(),n.addRange(t);try{document.execCommand("copy"),this.copyBtnText="done"}catch(e){console.error(e),this.copyBtnText="error"}setTimeout(()=>{this.copyBtnText="copy"},1e3),n.removeAllRanges()}}_onCssChanged(e){const t=e.composedPath()[0],{value:n,dataset:r}=t,{name:s}=r;this.processedCss=this.processedCss.map(e=>e.name===s?{...e,value:n}:e)}_onPropChanged(e){const t=e.composedPath()[0],{name:n,type:r}=t.dataset;let s;switch(be(r)){case"boolean":s=t.checked;break;case"number":s=""===t.value?null:Number(t.value);break;default:s=t.value}const{attribute:i}=this._getProp(n);this.knobs=Object.assign(this.knobs,{[n]:{type:r,value:s,attribute:i}})}_onSlotChanged(e){const t=e.composedPath()[0],n=t.dataset.slot,r=t.value;this.processedSlots=this.processedSlots.map(e=>e.name===n?{...e,content:r}:e)}_onRendered(e){const{component:t}=e.detail;var n;if(n=this.tag,de.some(e=>he(e,n)&&ue(e))&&this.props.filter(e=>{const{name:n,type:r}=e,s=kn(e);return t[n]!==s||"boolean"===be(r)&&s}).forEach(e=>{this._syncKnob(t,e)}),this.events.forEach(e=>{this._listen(t,e.name)}),this.cssProps.length){const e=getComputedStyle(t);this.processedCss=this.cssProps.map(t=>{let n=e.getPropertyValue(t.name);const r=t;return n&&(n=n.trim(),r.defaultValue=n,r.value=n),r})}}_listen(e,t){e.addEventListener(t,n=>{const r="-changed";if(t.endsWith(r)){const n=this._getProp(t.replace(r,""));n&&this._syncKnob(e,n)}this.eventLog.push(n)})}_syncKnob(e,t){const{name:n,type:r,attribute:s}=t,i=e[n];this.knobs=Object.assign(this.knobs,{[n]:{type:r,value:i,attribute:s}}),this.props=this.props.map(e=>e.name===n?{...e,value:i}:e)}};s([te({type:String})],Sn.prototype,"tag",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"props",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"slots",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"events",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"cssProps",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"processedSlots",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"processedCss",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"eventLog",void 0),s([te({attribute:!1,hasChanged:()=>!0})],Sn.prototype,"knobs",void 0),s([te({type:String})],Sn.prototype,"copyBtnText",void 0),Sn=s([Q("api-viewer-demo-layout")],Sn);let An=class extends ae{constructor(){super(...arguments),this.name="",this.props=[],this.slots=[],this.events=[],this.cssProps=[],this.whenDefined=Promise.resolve()}async renderDemoLayout(e){return await e,V`
      <api-viewer-demo-layout
        .tag="${this.name}"
        .props="${this.props}"
        .slots="${this.slots}"
        .events="${this.events}"
        .cssProps="${this.cssProps}"
      ></api-viewer-demo-layout>
    `}createRenderRoot(){return this}render(){const{name:e}=this;return e&&this.lastName!==e&&(this.lastName=e,this.whenDefined=customElements.whenDefined(e)),V`
      ${ce(this.renderDemoLayout(this.whenDefined),V`
          <div part="warning">
            Element "${this.name}" is not defined. Have you imported it?
          </div>
        `)}
    `}};s([te({type:String})],An.prototype,"name",void 0),s([te({attribute:!1,hasChanged:()=>!0})],An.prototype,"props",void 0),s([te({attribute:!1,hasChanged:()=>!0})],An.prototype,"slots",void 0),s([te({attribute:!1,hasChanged:()=>!0})],An.prototype,"events",void 0),s([te({attribute:!1,hasChanged:()=>!0})],An.prototype,"cssProps",void 0),An=s([Q("api-viewer-demo")],An);let $n=0,Tn=class extends ae{constructor(){super(),this.elements=[],this.selected=0,this.section="docs",this._id=++$n}createRenderRoot(){return this}render(){const{elements:e,selected:t,section:n}=this,{name:r,description:s,properties:i,attributes:o,slots:a,events:l,cssParts:c,cssProperties:p}={..._e,...e[t]||{}},d=(p||[]).sort((e,t)=>e.name>t.name?1:-1);return V`
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
              ${e.map((e,t)=>V`
                  <option value="${t}">${e.name}</option>
                `)}
            </select>
          </label>
        </nav>
      </header>
      ${ye("docs"===n?V`
              <div ?hidden="${""===s}" part="docs-description">
                ${At(s)}
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
            `:V`
              <api-viewer-demo
                .name="${r}"
                .props="${i}"
                .slots="${a}"
                .events="${l}"
                .cssProps="${d}"
              ></api-viewer-demo>
            `)}
    `}_onSelect(e){this.selected=Number(e.target.value)}_onToggle(e){this.section=e.target.value}};s([te({attribute:!1})],Tn.prototype,"elements",void 0),s([te({type:Number})],Tn.prototype,"selected",void 0),s([te({type:String})],Tn.prototype,"section",void 0),Tn=s([Q("api-viewer-content")],Tn);class Cn extends ae{constructor(){super(...arguments),this.section="docs",this.jsonFetched=Promise.resolve([])}render(){const{src:e}=this;return e&&this.lastSrc!==e&&(this.lastSrc=e,this.jsonFetched=async function(e){let t=[];try{const n=await fetch(e),r=await n.json();Array.isArray(r.tags)&&r.tags.length?t=r.tags:console.error("No element definitions found at "+e)}catch(e){console.error(e)}return t}(e)),V`
      ${ce(async function(e,t,n){const r=await e,s=r.findIndex(e=>e.name===n);return r.length?V`
        <api-viewer-content
          .elements="${r}"
          .section="${t}"
          .selected="${s>=0?s:0}"
        ></api-viewer-content>
      `:V`
        <div part="warning">
          No custom elements found in the JSON file.
        </div>
      `}(this.jsonFetched,this.section,this.selected))}
    `}firstUpdated(){var e;e=this,de=Array.from(e.querySelectorAll("template"))}}s([te({type:String})],Cn.prototype,"src",void 0),s([te({type:String})],Cn.prototype,"section",void 0),s([te({type:String})],Cn.prototype,"selected",void 0);var Pn=ie`
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
`;let Nn=class extends Cn{static get styles(){return Pn}};Nn=s([Q("api-viewer")],Nn)}}]);