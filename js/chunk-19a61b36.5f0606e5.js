(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19a61b36"],{"4df4":function(e,t,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),c=r("68ee"),l=r("50c4"),s=r("8418"),d=r("9a1f"),u=r("35a1");e.exports=function(e){var t=a(e),r=c(this),b=arguments.length,m=b>1?arguments[1]:void 0,p=void 0!==m;p&&(m=n(m,b>2?arguments[2]:void 0,2));var f,g,v,h,y,O,j=u(t),x=0;if(!j||this==Array&&i(j))for(f=l(t.length),g=r?new this(f):Array(f);f>x;x++)O=p?m(t[x],x):t[x],s(g,x,O);else for(h=d(t,j),y=h.next,g=r?new this:[];!(v=y.call(h)).done;x++)O=p?o(h,m,[v.value,x],!0):v.value,s(g,x,O);return g.length=x,g}},"935e":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"pb-10 mx-2 mt-10 md:w-1/2 md:mx-auto poppins"},o=Object(n["createElementVNode"])("div",{class:"p-3 my-3"},[Object(n["createElementVNode"])("h1",{class:"text-2xl font-semibold text-center"},"Special Revision Plan")],-1),i={class:"mb-3"},c=Object(n["createElementVNode"])("label",{class:"inline-block mb-2 dark:text-white"},"Name",-1),l={class:"mb-3"},s=Object(n["createElementVNode"])("label",{class:"inline-block mb-2 dark:text-white"},"Email",-1),d={class:"mb-3"},u=Object(n["createElementVNode"])("label",{class:"inline-block mb-2 dark:text-white"},"Phone Number",-1),b={class:"mb-3"},m=Object(n["createElementVNode"])("label",{class:"inline-block mb-2 dark:text-white"},"Division",-1),p=Object(n["createElementVNode"])("option",{value:"",selected:"",disabled:""},"Select Your Division",-1),f=["value"],g={class:"mb-3"},v=Object(n["createElementVNode"])("label",{class:"inline-block mb-2 dark:text-white"},"District",-1),h=Object(n["createElementVNode"])("option",{value:"",selected:"",disabled:""},"Select Your District",-1),y=["value"],O={class:"mb-3"},j=Object(n["createElementVNode"])("label",{class:"inline-block mb-2 dark:text-white"},"Upazila",-1),x=Object(n["createElementVNode"])("option",{value:"",selected:"",disabled:""},"Select Your Upazila",-1),k=["value"],w={class:"mb-3"},N=Object(n["createElementVNode"])("label",{class:"inline-block mb-2 dark:text-white"},"College",-1),_=["disabled"];function V(e,t,r,V,E,S){var D=Object(n["resolveComponent"])("vee-field"),z=Object(n["resolveComponent"])("ErrorMessage"),A=Object(n["resolveComponent"])("vee-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[o,Object(n["createVNode"])(A,{"validation-schema":E.schema,onSubmit:S.register,"initial-values":E.userData},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",i,[c,Object(n["createVNode"])(D,{type:"text",name:"name",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Name"}),Object(n["createVNode"])(z,{class:"text-red-600 dark:text-red-500",name:"name"})]),Object(n["createElementVNode"])("div",l,[s,Object(n["createVNode"])(D,{type:"email",name:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),Object(n["createVNode"])(z,{class:"text-red-600 dark:text-red-500",name:"email"})]),Object(n["createElementVNode"])("div",d,[u,Object(n["createVNode"])(D,{type:"tel",name:"phone",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"e.g. 01612345678"}),Object(n["createVNode"])(z,{class:"text-red-600 dark:text-red-500",name:"phone"})]),Object(n["createElementVNode"])("div",b,[m,Object(n["createVNode"])(D,{name:"division",as:"select",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",onChange:t[0]||(t[0]=function(e){return S.getDistricts(e.target.value)})},{default:Object(n["withCtx"])((function(){return[p,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(E.divisions,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:t,value:e},Object(n["toDisplayString"])(e),9,f)})),128))]})),_:1}),Object(n["createVNode"])(z,{class:"text-red-600 dark:text-red-500",name:"Division"})]),Object(n["createElementVNode"])("div",g,[v,Object(n["createVNode"])(D,{as:"select",name:"district",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",onInput:t[1]||(t[1]=function(e){return S.getUpazilas(e.target.value)}),placeholder:"District"},{default:Object(n["withCtx"])((function(){return[h,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(E.districts,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:t,value:e},Object(n["toDisplayString"])(e),9,y)})),128))]})),_:1}),Object(n["createVNode"])(z,{class:"text-red-600 dark:text-red-500",name:"district"})]),Object(n["createElementVNode"])("div",O,[j,Object(n["createVNode"])(D,{as:"select",name:"upazila",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Upazila"},{default:Object(n["withCtx"])((function(){return[x,(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(E.upazilas,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{key:t,value:e},Object(n["toDisplayString"])(e),9,k)})),128))]})),_:1}),Object(n["createVNode"])(z,{class:"text-red-600 dark:text-red-500",name:"upazila"})]),Object(n["createElementVNode"])("div",w,[N,Object(n["createVNode"])(D,{type:"college",name:"college",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"College Name"}),Object(n["createVNode"])(z,{class:"text-red-600 dark:text-red-500",name:"college"})]),E.reg_show_alert?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:0,class:Object(n["normalizeClass"])([E.reg_alert_variant,"p-5 my-4 font-bold text-center text-white"])},Object(n["toDisplayString"])(E.reg_alert_msg),3)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("button",{type:"submit",class:"block w-full bg-red-500 text-white py-1.5 px-3 rounded transition hover:bg-red-600",disabled:E.reg_in_submission},Object(n["toDisplayString"])(E.reg_in_submission?"Please wait...":"Register"),9,_)]})),_:1},8,["validation-schema","onSubmit","initial-values"])])}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e){if(Array.isArray(e))return E(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function D(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0");function z(e,t){if(e){if("string"===typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}function A(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e){return S(e)||D(e)||z(e)||A()}var C=r("1da1"),q=(r("96cf"),r("6062"),r("d81d"),r("4de4"),r("0053")),U={name:"RegisterFrom",data:function(){return{schema:{name:"required|min:3|max:100",email:"required|min:3|max:100|email",phone:"required|min:11|max:15",college:"required|min:4|max:100",division:"required",district:"required:min:4",upazila:"required|min:2"},userData:{phone:this.$route.query.phone},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"bg-blue-500",reg_alert_msg:"Please wait! Untill your registration has been completed.",divisions:[],districts:[],upazilas:[]}},methods:{register:function(e){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.reg_show_alert=!0,t.reg_in_submission=!0,t.reg_alert_variant="bg-blue-500",t.reg_alert_msg="Please wait! Untill your registration has been completed",n=e.phone.length,a=e.phone.substring(n-10,n),r.prev=6,o=JSON.stringify({ttrx:t.$route.query.ttrx,userentry:!0,userDetails:[e.name,a,e.email,e.college,e.division,e.district,e.upazila]}),t.$store.dispatch("register",{body:o,router:t.$router,phone:a}),r.next=18;break;case 11:return r.prev=11,r.t0=r["catch"](6),console.log(r.t0),t.reg_in_submission=!1,t.reg_alert_variant="bg-red-500",t.reg_alert_msg="An Unexpected error occurred. Please try again later.",r.abrupt("return");case 18:t.reg_alert_variant="bg-green-500",t.reg_alert_msg="Success! Your account has been registered.";case 20:case"end":return r.stop()}}),r,null,[[6,11]])})))()},getDivisions:function(){this.divisions=B(new Set(q["a"].map((function(e){return e.division}))))},getDistricts:function(e){this.districts=B(new Set(q["a"].filter((function(t){return t.division==e})).map((function(e){return e.district})))),this.upazilas=[]},getUpazilas:function(e){this.upazilas=q["a"].filter((function(t){return t.district==e})).map((function(e){return e.upazila})),this.upazilas.push("Others")}},created:function(){this.getDivisions()}},$=r("6b0d"),P=r.n($);const R=P()(U,[["render",V]]);t["default"]=R},"9bdd":function(e,t,r){var n=r("825a"),a=r("2a62");e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){a(e,"throw",i)}}},a630:function(e,t,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:a})},d28b:function(e,t,r){var n=r("746f");n("iterator")},e01a:function(e,t,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("5135"),c=r("1626"),l=r("861d"),s=r("9bf2").f,d=r("e893"),u=o.Symbol;if(a&&c(u)&&(!("description"in u.prototype)||void 0!==u().description)){var b={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new u(e):void 0===e?u():u(e);return""===e&&(b[t]=!0),t};d(m,u);var p=m.prototype=u.prototype;p.constructor=m;var f=p.toString,g="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=f.call(e);if(i(b,e))return"";var r=g?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}},fb6a:function(e,t,r){"use strict";var n=r("23e7"),a=r("e8b5"),o=r("68ee"),i=r("861d"),c=r("23cb"),l=r("50c4"),s=r("fc6a"),d=r("8418"),u=r("b622"),b=r("1dde"),m=b("slice"),p=u("species"),f=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!m},{slice:function(e,t){var r,n,u,b=s(this),m=l(b.length),v=c(e,m),h=c(void 0===t?m:t,m);if(a(b)&&(r=b.constructor,o(r)&&(r===Array||a(r.prototype))?r=void 0:i(r)&&(r=r[p],null===r&&(r=void 0)),r===Array||void 0===r))return f.call(b,v,h);for(n=new(void 0===r?Array:r)(g(h-v,0)),u=0;v<h;v++,u++)v in b&&d(n,u,b[v]);return n.length=u,n}})}}]);