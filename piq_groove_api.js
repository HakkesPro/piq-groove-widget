!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beta=t():e.beta=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1);var i=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n.page_url=window.location.origin,this.setUpApi(n,o),this.setUpWiget(t,n)}return o(e,[{key:"setUpWiget",value:function(e,t){var n=document.querySelector(e),o=document.createElement("iframe"),r=t.showContactFormAtLoad?"?showContactForm=true":"",i=t.development?"http://localhost:8080/piq-groove-widget":"https://hakkespro.github.io/piq-groove-widget";o.id="_piq-groove-iframe_",o.src=""+i+r,o.style.width=t.showContactFormAtLoad?t.width:"256px",o.style.height=t.showContactFormAtLoad?t.height:"80px",o.style.border="none",n.appendChild(o)}},{key:"setUpApi",value:function(e,t){(0,r.__SET_UP_EVENT_LISTENERS__)(e,t)}}]),e}();window._PaymentIQ_GROOVE_API_=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t?t.postMessage(e,"*"):parent.postMessage(e,"*")}({eventType:"RECEIVE_PIQ_GROOVE_CONFIGS",payload:e},document.querySelector("#_piq-groove-iframe_").contentWindow)};t.__SET_UP_EVENT_LISTENERS__=function(e,t){window.addEventListener("message",(function(t){var n=t.data,r=n.eventType,i=n.payload;switch(r){case"GET_PIQ_GROOVE_CONFIGS":return o(e);case"SET_APP_HEIGHT_AND_WIDTH":return function(e){var t=e.height,n=e.width,o=document.querySelector("#_piq-groove-iframe_");o.style.height=t,o.style.width=n}(i)}}))}}])}));