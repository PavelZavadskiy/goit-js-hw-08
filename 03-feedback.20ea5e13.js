!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return m.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),s?p(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function T(){var e=y();if(S(e))return O(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,d&&r?p(e):(r=i=void 0,u)}function w(){var e=y(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=h(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(h(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:O(y())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector("[name = 'email']"),S=document.querySelector("[name = 'message']"),T=document.querySelector(".feedback-form"),O="feedback-form-state",w={email:"",message:""};w=function(){try{var e=localStorage.getItem(O);return null===e?{email:"",message:""}:JSON.parse(e)}catch(e){return console.error("loadForm state error: ",e.message),{email:"",message:""}}}(),j.value=w.email,S.value=w.message;var x=e(t)((function(e){!function(e){try{localStorage.setItem(O,JSON.stringify(e))}catch(e){console.error("saveForm state error: ",e.message)}}(e)}),500);j.addEventListener("input",(function(e){w.email=e.currentTarget.value.trim(),x(w)})),S.addEventListener("input",(function(e){w.message=e.currentTarget.value.trim(),x(w)})),T.addEventListener("submit",(function(e){console.log(w),w={email:"",message:""},j.value=w.email,S.value=w.message,localStorage.removeItem(O)}))}();
//# sourceMappingURL=03-feedback.20ea5e13.js.map
