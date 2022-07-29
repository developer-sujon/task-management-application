/*! For license information please see 321.44fc912d.chunk.js.LICENSE.txt */
(self.webpackChunkappname=self.webpackChunkappname||[]).push([[321],{8321:function(e,t,r){"use strict";r.r(t);var n=r(885),o=r(2791),u=r(6871),a=r(972),i=r.n(a),l=r(2988),c=r(329),s=r(2507),f=r(184);t.default=function(){var e=(0,o.useState)(""),t=(0,n.Z)(e,2),r=t[0],a=t[1],p=s.Z.getOtpEmail(),d=(0,u.s0)();return(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("div",{className:"row justify-content-center",children:(0,f.jsx)("div",{className:"col-md-7 col-lg-6 center-screen",children:(0,f.jsx)("div",{className:"card w-90  p-4",style:{marginTop:"100px"},children:(0,f.jsxs)("div",{className:"card-body",children:[(0,f.jsx)("h4",{children:"OTP VERIFICATION "}),(0,f.jsxs)("p",{children:["A 6 Digit verification code has been sent to your email address."," "]}),(0,f.jsx)(i(),{onChange:function(e){return a(e)},inputStyle:{fontFamily:"monospace",MozAppearance:"textfield",margin:"4px",paddingLeft:"8px",width:"55px",borderRadius:"3px",height:"45px",fontSize:"32px",border:"1px solid lightskyblue",boxSizing:"border-box",color:"black",backgroundColor:"white",borderColor:"lightgrey",outline:0},fields:6,type:"text"}),(0,f.jsx)("br",{})," ",(0,f.jsx)("br",{}),(0,f.jsx)("button",{onClick:function(){!r.length>6?c.Z.errorMessage("Invalid OTP Code"):l.Z.VerifyOtpCode(p,r).then((function(e){e&&(c.Z.successMessage(e.data.message),s.Z.setOtp(r),d("/create-password"))}))},className:"btn w-100 animated fadeInUp float-end btn-primary",children:"Next"})]})})})})})}},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,u){for(var a,i,l=o(e),c=1;c<arguments.length;c++){for(var s in a=Object(arguments[c]))r.call(a,s)&&(l[s]=a[s]);if(t){i=t(a);for(var f=0;f<i.length;f++)n.call(a,i[f])&&(l[i[f]]=a[i[f]])}}return l}},972:function(e,t,r){var n;"undefined"!=typeof self&&self,e.exports=(n=r(1855),function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),a=s(u),i=s(r(2)),l=s(r(5)),c=r(6);function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=e.fields,o=e.type,u=e.isValid,a=e.disabled,i=e.filterKeyCodes,l=e.forceUppercase,s=e.value;l&&(s=s.toUpperCase()),r.state={value:s,fields:n,type:o,input:[],isValid:u,disabled:a,filterKeyCodes:i,defaultInputStyle:{fontFamily:"monospace",MozAppearance:"textfield",borderRadius:"6px",border:"1px solid",boxShadow:"0px 0px 10px 0px rgba(0,0,0,.10)",margin:"4px",paddingLeft:"8px",width:"36px",height:"42px",fontSize:"32px",boxSizing:"border-box"}};for(var f=0;f<Number(r.state.fields);f+=1)if(f<32){var p=r.state.value[f]||"";r.state.input.push(p)}return r.textInput=[],r.uuid=(0,c.uuidv4)(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({isValid:e.isValid,value:e.value,disabled:e.disabled})}},{key:"handleBlur",value:function(e){this.handleTouch(e.target.value)}},{key:"handleTouch",value:function(e){var t=this.props,r=t.touch,n=t.untouch,o=t.name;"function"==typeof r&&"function"==typeof n&&(""===e?r(o):n(o))}},{key:"handleChange",value:function(e){var t=this,r=this.props.filterChars,n=String(e.target.value);this.props.forceUppercase&&(n=n.toUpperCase()),"number"===this.state.type&&(n=n.replace(/[^\d]/g,""));var o=n=n.split("").filter((function(e){return!r.includes(e)})).join("");if(""!==n){var u=this.state.input.slice();n.length>1?n.split("").map((function(r,n){return Number(e.target.dataset.id)+n<t.props.fields&&(u[Number(e.target.dataset.id)+n]=r),!1})):u[Number(e.target.dataset.id)]=n,u.map((function(e,r){return t.textInput[r]&&(t.textInput[r].value=e),!1}));var a=this.textInput[e.target.dataset.id<u.length?Number(e.target.dataset.id)+1:e.target.dataset.id];a&&(a.focus(),a.select()),o=u.join(""),this.setState({value:u.join(""),input:u})}this.props.onChange&&o&&this.props.onChange(o),this.handleTouch(o)}},{key:"handleKeyDown",value:function(e){var t=Number(e.target.dataset.id),r=this.textInput[t+1],n=this.textInput[t-1],o=void 0,u=void 0;switch(this.state.filterKeyCodes.length>0&&this.state.filterKeyCodes.map((function(t){if(t===e.keyCode)return e.preventDefault(),!0})),e.keyCode){case 8:e.preventDefault(),this.textInput[t].value="",(o=this.state.input.slice())[t]="",u=o.join(""),this.setState({value:u,input:o}),""===this.textInput[t].value&&n&&(n.focus(),n.select()),this.props.onChange&&this.props.onChange(u);break;case 37:e.preventDefault(),n&&(n.focus(),n.select());break;case 39:e.preventDefault(),r&&(r.focus(),r.select());break;case 38:case 40:e.preventDefault();break;case 69:if("number"===e.target.type){e.preventDefault();break}}this.handleTouch(u)}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,o=t.style,u=void 0===o?{}:o,i=t.inputStyle,c=void 0===i?{}:i,s=t.inputStyleInvalid,f=void 0===s?{}:s,p=t.type,d=t.autoFocus,y=t.pattern,h=t.inputMode,b=this.state,v=b.disabled,m=b.input,g=b.isValid,x=b.defaultInputStyle,j={container:u,input:g?c:f};return Object.assign(j.container,{display:"inline-block"}),r||0!==Object.keys(c).length||Object.assign(c,n({},x,{color:"black",backgroundColor:"white",borderColor:"lightgrey"})),r||0!==Object.keys(f).length||Object.assign(f,n({},x,{color:"#b94a48",backgroundColor:"#f2dede",borderColor:"#eed3d7"})),v&&Object.assign(j.input,{cursor:"not-allowed",color:"lightgrey",borderColor:"lightgrey",backgroundColor:"#efeff1"}),a.default.createElement("div",{className:(0,l.default)(r,"react-code-input"),style:j.container},m.map((function(t,r){return a.default.createElement("input",{ref:function(t){e.textInput[r]=t},id:e.uuid+"-"+r,"data-id":r,autoFocus:d&&0===r?"autoFocus":"",value:t,key:"input_"+r,type:p,min:0,max:9,maxLength:m.length===r+1?1:m.length,style:j.input,autoComplete:"off",onFocus:function(e){return e.target.select(e)},onBlur:function(t){return e.handleBlur(t)},onChange:function(t){return e.handleChange(t)},onKeyDown:function(t){return e.handleKeyDown(t)},disabled:v,"data-valid":g,pattern:y,inputMode:h})})))}}]),t}();f.defaultProps={autoFocus:!0,isValid:!0,disabled:!1,forceUppercase:!1,fields:4,value:"",type:"text",filterKeyCodes:[189,190],filterChars:["-","."]},f.propTypes={type:i.default.oneOf(["text","number","password","tel"]),fields:i.default.number,value:i.default.string,onChange:i.default.func,name:i.default.string,touch:i.default.func,untouch:i.default.func,className:i.default.string,isValid:i.default.bool,disabled:i.default.bool,style:i.default.object,inputStyle:i.default.object,inputStyleInvalid:i.default.object,autoFocus:i.default.bool,forceUppercase:i.default.bool,filterKeyCodes:i.default.array,filterChars:i.default.array,pattern:i.default.string,inputMode:i.default.oneOf(["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"])},t.default=f},function(e,t){e.exports=n},function(e,t,r){e.exports=r(3)()},function(e,t,r){"use strict";var n=r(4);function o(){}e.exports=function(){function e(e,t,r,o,u,a){if(a!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=o,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===u)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}]))},3966:function(e,t,r){"use strict";var n=r(1725),o="function"===typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,b="function"===typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function j(){}function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=x.prototype;var k=O.prototype=new j;k.constructor=O,n(k,x.prototype),k.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},a=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:a,ref:i,props:o,_owner:C.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g,I=[];function R(e,t,r,n){if(I.length){var o=I.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function N(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case u:case a:i=!0}}if(i)return r(n,e,""===t?"."+M(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=t+M(o=e[l],l);i+=N(o,c,r,n)}else if(null===e||"object"!==typeof e?c=null:c="function"===typeof(c=b&&e[b]||e["@@iterator"])?c:null,"function"===typeof c)for(e=c.call(e),l=0;!(o=e.next()).done;)i+=N(o=o.value,c=t+M(o,l++),r,n);else if("object"===o)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function $(e,t,r){return null==e?0:N(e,"",t,r)}function M(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(E,"$&/")+"/"),$(e,U,t=R(t,u,n,o)),T(t)}var F={current:null};function V(){var e=F.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,A,t=R(null,null,t,r)),T(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(v(143));return e}},t.Component=x,t.Fragment=i,t.Profiler=c,t.PureComponent=O,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error(v(267,e));var o=n({},e.props),a=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=C.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)S.call(t,s)&&!_.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:u,type:e.type,key:a,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return V().useCallback(e,t)},t.useContext=function(e,t){return V().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return V().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return V().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return V().useLayoutEffect(e,t)},t.useMemo=function(e,t){return V().useMemo(e,t)},t.useReducer=function(e,t,r){return V().useReducer(e,t,r)},t.useRef=function(e){return V().useRef(e)},t.useState=function(e){return V().useState(e)},t.version="16.14.0"},1855:function(e,t,r){"use strict";e.exports=r(3966)}}]);
//# sourceMappingURL=321.44fc912d.chunk.js.map