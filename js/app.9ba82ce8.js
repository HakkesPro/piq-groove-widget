(function(t){function e(e){for(var a,r,i=e[0],u=e[1],s=e[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({"ContactPage~Landing~Status":"ContactPage~Landing~Status","ContactPage~Landing":"ContactPage~Landing",ContactPage:"ContactPage",Landing:"Landing",Status:"Status"}[t]||t)+"."+{"ContactPage~Landing~Status":"60b2df7e","ContactPage~Landing":"d5c7e517",ContactPage:"2051fae0",Landing:"7e6171cf",Status:"1ee5ae5d"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"ContactPage~Landing~Status":1,"ContactPage~Landing":1,ContactPage:1,Status:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({"ContactPage~Landing~Status":"ContactPage~Landing~Status","ContactPage~Landing":"ContactPage~Landing",ContactPage:"ContactPage",Landing:"Landing",Status:"Status"}[t]||t)+"."+{"ContactPage~Landing~Status":"e5a2154a","ContactPage~Landing":"29eeb814",ContactPage:"9ffacb78",Landing:"31d6cfe0",Status:"c1347a8b"}[t]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===a||f===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],f=s.getAttribute("data-href");if(f===a||f===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],l.parentNode.removeChild(l),n(c)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(t);var d=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://hakkespro.github.io/piq-groove-widget/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=f;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034a":function(t,e,n){"use strict";var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e?e.postMessage(t,"*"):parent.postMessage(t,"*")},r=function(){window.addEventListener("message",(function(t){var e=t.data,n=e.eventType,a=e.payload;switch(n){case"RECEIVE_PIQ_GROOVE_CONFIGS":return o.setConfigs(a)}}))},o={setConfigs:function(t){window._PaymentIQ_GROOVE_API_CONFIGS_=t}},c=function(){a({eventType:"GET_PIQ_GROOVE_CONFIGS"})},i=function(t){a({eventType:"SET_APP_HEIGHT_AND_WIDTH",payload:t})};e["a"]={__API__:r,_GET_CONFIGS_:c,_SET_APP_HEIGHT_WIDTH_:i}},"2fa3":function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return _})),n.d(e,"c",(function(){return v})),n.d(e,"e",(function(){return S}));n("99af"),n("a15b"),n("fb6a"),n("b64b"),n("d3b7"),n("ac1f"),n("1276");var a=n("53ca"),r=n("5530"),o=(n("96cf"),n("1da1")),c=n("4360"),i=n("034a"),u=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=window._PaymentIQ_GROOVE_API_CONFIGS_&&window._PaymentIQ_GROOVE_API_CONFIGS_.resStatusMock,!a){t.next=5;break}return t.abrupt("return",{status:a,mockedResponse:!0});case 5:return t.next=7,fetch(e,n);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s="https://cors-anywhere.herokuapp.com/",f={GET:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u("".concat(s).concat(t),{method:"GET"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},d=n("6bfe"),l="https://widget-backend.groovehq.com/api/tickets.json?consent=true",p=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,o,c,i,u,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.email,a=e.message,r=e.subject,o=e.page_url,c={subject:r,message:a,tab_id:0,page_url:o,page_title:null,referrer:null,"customer[email]":n,widget_uuid:"2566f48f-5974-fb31-8d80-f128d834ea54",callback:d["a"]},i=h(c,e),Object.keys(i).length>0&&(u=m(i,a),c.message=u),t.next=7,f.GET("".concat(l).concat(v(c)));case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g={createTicket:p},m=function(t,e){var n="\n".concat(e,"\n\n--- Message was sent from our groove widget at ").concat(t.fromPage," ---\n--- ADDITIONAL INFO ---\n");for(var a in t){var r=a.split(/(?=[A-Z])/).join(" "),o=r[0].toUpperCase()+r.slice(1);""!==t[a]&&(n+="\n".concat(o,": ").concat(t[a],"\n"))}return n},h=function(t,e){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(t,a)||(n[a]=e[a]);return n},_=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,n,a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.createTicket(e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),v=function(t){var e="",n=function(t){return encodeURIComponent(t)};for(var a in t)e+="&".concat(n(a),"=").concat(n(t[a]));return e},b=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={},n=150,o=0,t.next=5,new Promise((function(t,a){if(top===self)return t(null),null;var r=function(){window._PaymentIQ_GROOVE_API_CONFIGS_&&(e=window._PaymentIQ_GROOVE_API_CONFIGS_,t(window._PaymentIQ_GROOVE_API_CONFIGS_))};i["a"]._GET_CONFIGS_(),setInterval((function(){o<n?(r(),o++):t(null)}),50)}));case 5:return c["a"].dispatch("setConfig",e),u=Object(r["a"])(Object(r["a"])(Object(r["a"])({},e.additionalTicketData&&Object(r["a"])({},e.additionalTicketData)),e.page_url&&{page_url:e.page_url}),e.fromPage&&{fromPage:e.fromPage}),Object.keys(u).length>0&&c["a"].dispatch("setFormData",u),e.textKeys&&"object"===Object(a["a"])(e.textKeys)&&c["a"].dispatch("setTextKeys",e.textKeys),t.abrupt("return",e);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r,o,c,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:for(u in e=t.sent,n=e.theme,a=n||{},r=a.background,o=a.color,c=document.querySelector("html").style,i={"--theme-bg":r||"#3d6363","--theme-color":o||"#ffffff"},i)c.setProperty(u,i[u]);return t.abrupt("return",null);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},4360:function(t,e,n){"use strict";var a={};n.r(a),n.d(a,"setShowContactForm",(function(){return v})),n.d(a,"setConfig",(function(){return b})),n.d(a,"setFormData",(function(){return S})),n.d(a,"setSendingMsg",(function(){return T})),n.d(a,"setTicketStatus",(function(){return w})),n.d(a,"setTextKeys",(function(){return O}));var r,o=n("5530"),c=n("2b0e"),i=n("2f62"),u=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("ade3")),s={SET_SHOW_CONTACT_FORM:"SET_SHOW_CONTACT_FORM",SET_CONFIG:"SET_CONFIG",SET_FORM_DATA:"SET_FORM_DATA",SET_SENDING_MSG:"SET_SENDING_MSG",SET_TICKET_STATUS:"SET_TICKET_STATUS",SET_TEXT_KEYS:"SET_TEXT_KEYS"},f=function(){return window.location.search.includes("showContactForm")},d={showContactForm:f(),config:{},textKeys:{},sendingMsg:!1,ticketStatus:""},l=(r={},Object(u["a"])(r,s.SET_SHOW_CONTACT_FORM,(function(t,e){t.showContactForm=e})),Object(u["a"])(r,s.SET_CONFIG,(function(t,e){t.config=e})),Object(u["a"])(r,s.SET_SENDING_MSG,(function(t,e){t.sendingMsg=e})),Object(u["a"])(r,s.SET_TICKET_STATUS,(function(t,e){t.ticketStatus=e})),Object(u["a"])(r,s.SET_TEXT_KEYS,(function(t,e){t.textKeys=e})),r),p={state:d,mutations:l},g=(n("5319"),{formData:{subject:"",fullName:"",email:"",transactionId:"",category:"",issueOccuredDate:(new Date).toISOString().replace("T"," ").substr(0,16),message:""}}),m=Object(u["a"])({},s.SET_FORM_DATA,(function(t,e){t.formData=Object(o["a"])(Object(o["a"])({},t.formData),e)})),h={state:g,mutations:m},_={appState:p,userData:h},v=function(t,e){var n=t.commit;n(s.SET_SHOW_CONTACT_FORM,e)},b=function(t,e){var n=t.commit;n(s.SET_CONFIG,e)},S=function(t,e){var n=t.commit;n(s.SET_FORM_DATA,e)},T=function(t,e){var n=t.commit;n(s.SET_SENDING_MSG,e)},w=function(t,e){var n=t.commit;n(s.SET_TICKET_STATUS,e)},O=function(t,e){var n=t.commit;n(s.SET_TEXT_KEYS,e)};c["a"].use(i["a"]);e["a"]=new i["a"].Store({actions:Object(o["a"])({},a),modules:_})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"show",rawName:"v-show",value:t.loadApp,expression:"loadApp"}]},[n("router-view"),n("FloatingHelpBtn")],1)},o=[],c=(n("96cf"),n("1da1")),i=n("2fa3"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"floating-btn"},[n("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.showContactForm,expression:"!showContactForm"}],staticClass:"theme-bg theme-color",attrs:{dark:"",absolute:"",top:"",right:"",rounded:"","x-large":""},on:{click:t.showContantFormMethod}},[n("div",{staticClass:"transition-floating-btn"},[n("v-icon",[t._v("mdi-message")]),n("span",{staticClass:"pl-3 subheading"},[t._v(t._s(t.needHelpText))])],1)]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showContactForm,expression:"showContactForm"}],staticClass:"theme-bg theme-color",attrs:{dark:"",absolute:"",top:"",right:"",rounded:"","x-large":""},on:{click:t.showContantFormMethod}},[n("div",{staticClass:"transition-floating-btn"},[n("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1)])],1)],1)],1)},s=[],f=n("5530"),d=n("2f62"),l=n("034a"),p={name:"Floating-help-btn",data:function(){return{hidden:!1}},computed:Object(f["a"])(Object(f["a"])({},Object(d["c"])({showContactForm:function(t){var e=t.appState;return e.showContactForm},config:function(t){var e=t.appState;return e.config},textKeys:function(t){var e=t.appState;return e.textKeys}})),{},{needHelpText:function(){return this.textKeys.needHelpText||"{needHelpText}"}}),methods:Object(f["a"])(Object(f["a"])({},Object(d["b"])(["setShowContactForm"])),{},{showContantFormMethod:function(){var t=this.showContactForm,e={};t?(e.height="80px",e.width="256px"):(e.height=this.config.height||"800px",e.width=this.config.width||"600px"),l["a"]._SET_APP_HEIGHT_WIDTH_(e),this.setShowContactForm(!t)}})},g=p,m=(n("b03a"),n("2877")),h=n("6544"),_=n.n(h),v=n("8336"),b=n("62ad"),S=n("a523"),T=n("132d"),w=n("0fd9"),O=Object(m["a"])(g,u,s,!1,null,"ac7f081c",null),C=O.exports;_()(O,{VBtn:v["a"],VCol:b["a"],VContainer:S["a"],VIcon:T["a"],VRow:w["a"]});var E={name:"App",components:{FloatingHelpBtn:C},data:function(){return{loadApp:!1}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["e"])();case 2:t.loadApp=!0;case 3:case"end":return e.stop()}}),e)})))()}},y=E,P=(n("5c0b"),n("7496")),I=Object(m["a"])(y,r,o,!1,null,null,null),j=I.exports;_()(I,{VApp:P["a"]});n("d3b7");var x=n("8c4f");n("b0c0"),n("b64b");function F(t){return!!Object.keys(t.query).length}var A=function(t,e,n){try{!F(t)&&F(e)?n({name:t.name,query:e.query}):n()}catch(a){console.error(a)}},k=function(){return Promise.all([n.e("ContactPage~Landing~Status"),n.e("ContactPage~Landing"),n.e("Landing")]).then(n.bind(null,"eabb"))},G=function(){return Promise.all([n.e("ContactPage~Landing~Status"),n.e("ContactPage~Landing"),n.e("ContactPage")]).then(n.bind(null,"df9c"))},N=function(){return Promise.all([n.e("ContactPage~Landing~Status"),n.e("Status")]).then(n.bind(null,"ef35"))};a["a"].use(x["a"]);var L=[{path:"/",name:"Landing",component:k},{path:"/contact",name:"ContactPage",component:G},{path:"/status",name:"Status page",component:N}],R=new x["a"]({base:"/piq-groove-widget/",mode:"history",routes:L});R.beforeEach(A);var D=R,M=n("4360"),H=n("f309");a["a"].use(H["a"]);var K=new H["a"]({});l["a"].__API__(),a["a"].config.productionTip=!1,new a["a"]({router:D,store:M["a"],vuetify:K,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"66a6":function(t,e,n){},"6bfe":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a="__jp0",r={SUCCESS:"SUCCESS",FAILED:"FAILED"}},"9c0c":function(t,e,n){},b03a:function(t,e,n){"use strict";var a=n("66a6"),r=n.n(a);r.a}});
//# sourceMappingURL=app.9ba82ce8.js.map