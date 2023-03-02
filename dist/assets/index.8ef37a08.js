function Vp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Wp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),Hp=Symbol.for("react.portal"),Kp=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),Qp=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Yp=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),Xp=Symbol.for("react.suspense"),Zp=Symbol.for("react.memo"),em=Symbol.for("react.lazy"),nu=Symbol.iterator;function tm(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,od={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=od,this.updater=n||rd}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sd(){}sd.prototype=Kn.prototype;function Wa(e,t,n){this.props=e,this.context=t,this.refs=od,this.updater=n||rd}var Ha=Wa.prototype=new sd;Ha.constructor=Wa;id(Ha,Kn.prototype);Ha.isPureReactComponent=!0;var ru=Array.isArray,ad=Object.prototype.hasOwnProperty,Ka={current:null},ld={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)ad.call(t,r)&&!ld.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gr,type:e,key:o,ref:s,props:i,_owner:Ka.current}}function nm(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ga(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function rm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rm(""+e.key):t.toString(36)}function ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Gr:case Hp:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Yo(s,0):r,ru(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),ki(i,t,n,"",function(u){return u})):i!=null&&(Ga(i)&&(i=nm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ru(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Yo(o,a);s+=ki(o,t,n,l,i)}else if(l=tm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Yo(o,a++),s+=ki(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function si(e,t,n){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function im(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ti={transition:null},om={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:Ka};L.Children={map:si,forEach:function(e,t,n){si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return si(e,function(){t++}),t},toArray:function(e){return si(e,function(t){return t})||[]},only:function(e){if(!Ga(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Kn;L.Fragment=Kp;L.Profiler=Qp;L.PureComponent=Wa;L.StrictMode=Gp;L.Suspense=Xp;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=id({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ka.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ad.call(t,l)&&!ld.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Gr,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:Yp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qp,_context:e},e.Consumer=e};L.createElement=ud;L.createFactory=function(e){var t=ud.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Jp,render:e}};L.isValidElement=Ga;L.lazy=function(e){return{$$typeof:em,_payload:{_status:-1,_result:e},_init:im}};L.memo=function(e,t){return{$$typeof:Zp,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return fe.current.useCallback(e,t)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,t){return fe.current.useEffect(e,t)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return fe.current.useMemo(e,t)};L.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.2.0";(function(e){e.exports=L})(x);const cd=Wp(x.exports),Fs=Vp({__proto__:null,default:cd},[x.exports]);var zs={},dd={exports:{}},ke={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,O){var A=I.length;I.push(O);e:for(;0<A;){var G=A-1>>>1,Z=I[G];if(0<i(Z,O))I[G]=O,I[A]=Z,A=G;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],A=I.pop();if(A!==O){I[0]=A;e:for(var G=0,Z=I.length,ii=Z>>>1;G<ii;){var Vt=2*(G+1)-1,qo=I[Vt],Wt=Vt+1,oi=I[Wt];if(0>i(qo,A))Wt<Z&&0>i(oi,qo)?(I[G]=oi,I[Wt]=A,G=Wt):(I[G]=qo,I[Vt]=A,G=Vt);else if(Wt<Z&&0>i(oi,A))I[G]=oi,I[Wt]=A,G=Wt;else break e}}return O}function i(I,O){var A=I.sortIndex-O.sortIndex;return A!==0?A:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,p=null,m=3,g=!1,_=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=I)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function v(I){if(y=!1,h(I),!_)if(n(l)!==null)_=!0,Go(S);else{var O=n(u);O!==null&&Qo(v,O.startTime-I)}}function S(I,O){_=!1,y&&(y=!1,d(C),C=-1),g=!0;var A=m;try{for(h(O),p=n(l);p!==null&&(!(p.expirationTime>O)||I&&!De());){var G=p.callback;if(typeof G=="function"){p.callback=null,m=p.priorityLevel;var Z=G(p.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&r(l),h(O)}else r(l);p=n(l)}if(p!==null)var ii=!0;else{var Vt=n(u);Vt!==null&&Qo(v,Vt.startTime-O),ii=!1}return ii}finally{p=null,m=A,g=!1}}var k=!1,T=null,C=-1,$=5,D=-1;function De(){return!(e.unstable_now()-D<$)}function Xn(){if(T!==null){var I=e.unstable_now();D=I;var O=!0;try{O=T(!0,I)}finally{O?Zn():(k=!1,T=null)}}else k=!1}var Zn;if(typeof c=="function")Zn=function(){c(Xn)};else if(typeof MessageChannel<"u"){var tu=new MessageChannel,bp=tu.port2;tu.port1.onmessage=Xn,Zn=function(){bp.postMessage(null)}}else Zn=function(){R(Xn,0)};function Go(I){T=I,k||(k=!0,Zn())}function Qo(I,O){C=R(function(){I(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){_||g||(_=!0,Go(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var A=m;m=O;try{return I()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=m;m=I;try{return O()}finally{m=A}},e.unstable_scheduleCallback=function(I,O,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,I){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=A+Z,I={id:f++,callback:O,priorityLevel:I,startTime:A,expirationTime:Z,sortIndex:-1},A>G?(I.sortIndex=A,t(u,I),n(l)===null&&I===n(u)&&(y?(d(C),C=-1):y=!0,Qo(v,A-G))):(I.sortIndex=Z,t(l,I),_||g||(_=!0,Go(S))),I},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(I){var O=m;return function(){var A=m;m=O;try{return I.apply(this,arguments)}finally{m=A}}}})(hd);(function(e){e.exports=hd})(fd);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=x.exports,Ie=fd.exports;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var md=new Set,Tr={};function hn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)md.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$s=Object.prototype.hasOwnProperty,sm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},su={};function am(e){return $s.call(su,e)?!0:$s.call(ou,e)?!1:sm.test(e)?su[e]=!0:(ou[e]=!0,!1)}function lm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function um(e,t,n,r){if(t===null||typeof t>"u"||lm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qa=/[\-:]([a-z])/g;function qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qa,qa);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qa,qa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qa,qa);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,t,n,r){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(um(t,n,i,r)&&(n=null),r||i===null?am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ai=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),js=Symbol.for("react.profiler"),gd=Symbol.for("react.provider"),vd=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),bs=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),yd=Symbol.for("react.offscreen"),au=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Jo;function ur(e){if(Jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jo=t&&t[1]||""}return`
`+Jo+e}var Xo=!1;function Zo(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function cm(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Zo(e.type,!1),e;case 11:return e=Zo(e.type.render,!1),e;case 1:return e=Zo(e.type,!0),e;default:return""}}function Vs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case js:return"Profiler";case Ja:return"StrictMode";case Bs:return"Suspense";case bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vd:return(e.displayName||"Context")+".Consumer";case gd:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Za:return t=e.displayName||null,t!==null?t:Vs(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return Vs(e(t))}catch{}}return null}function dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vs(t);case 8:return t===Ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fm(e){var t=wd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=fm(e))}function _d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ws(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sd(e,t){t=t.checked,t!=null&&Ya(e,"checked",t,!1)}function Hs(e,t){Sd(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ks(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ks(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Gs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(cr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Ed(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,kd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hm=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){hm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function Td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function Cd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Td(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var pm=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qs(e,t){if(t){if(pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Js=null;function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xs=null,On=null,An=null;function fu(e){if(e=Yr(e)){if(typeof Xs!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ko(t),Xs(e.stateNode,e.type,t))}}function Rd(e){On?An?An.push(e):An=[e]:On=e}function Pd(){if(On){var e=On,t=An;if(An=On=null,fu(e),t)for(e=0;e<t.length;e++)fu(t[e])}}function Nd(e,t){return e(t)}function xd(){}var es=!1;function Od(e,t,n){if(es)return e(t,n);es=!0;try{return Nd(e,t,n)}finally{es=!1,(On!==null||An!==null)&&(xd(),Pd())}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Zs=!1;if(st)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Zs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Zs=!1}function mm(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var mr=!1,Bi=null,bi=!1,ea=null,gm={onError:function(e){mr=!0,Bi=e}};function vm(e,t,n,r,i,o,s,a,l){mr=!1,Bi=null,mm.apply(gm,arguments)}function ym(e,t,n,r,i,o,s,a,l){if(vm.apply(this,arguments),mr){if(mr){var u=Bi;mr=!1,Bi=null}else throw Error(w(198));bi||(bi=!0,ea=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hu(e){if(pn(e)!==e)throw Error(w(188))}function wm(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hu(i),e;if(o===r)return hu(i),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Dd(e){return e=wm(e),e!==null?Ld(e):null}function Ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ld(e);if(t!==null)return t;e=e.sibling}return null}var Md=Ie.unstable_scheduleCallback,pu=Ie.unstable_cancelCallback,_m=Ie.unstable_shouldYield,Sm=Ie.unstable_requestPaint,Q=Ie.unstable_now,Em=Ie.unstable_getCurrentPriorityLevel,tl=Ie.unstable_ImmediatePriority,Ud=Ie.unstable_UserBlockingPriority,Vi=Ie.unstable_NormalPriority,Im=Ie.unstable_LowPriority,Fd=Ie.unstable_IdlePriority,_o=null,We=null;function km(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Rm,Tm=Math.log,Cm=Math.LN2;function Rm(e){return e>>>=0,e===0?32:31-(Tm(e)/Cm|0)|0}var ci=64,di=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=dr(a):(o&=s,o!==0&&(r=dr(o)))}else s=n&~i,s!==0?r=dr(s):o!==0&&(r=dr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Pm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ze(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=Pm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zd(){var e=ci;return ci<<=1,(ci&4194240)===0&&(ci=64),e}function ts(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function xm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function $d(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var jd,rl,Bd,bd,Vd,na=!1,fi=[],Ct=null,Rt=null,Pt=null,Pr=new Map,Nr=new Map,yt=[],Om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function nr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yr(t),t!==null&&rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Am(e,t,n,r,i){switch(t){case"focusin":return Ct=nr(Ct,e,t,n,r,i),!0;case"dragenter":return Rt=nr(Rt,e,t,n,r,i),!0;case"mouseover":return Pt=nr(Pt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Pr.set(o,nr(Pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nr.set(o,nr(Nr.get(o)||null,e,t,n,r,i)),!0}return!1}function Wd(e){var t=Qt(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ad(n),t!==null){e.blockedOn=t,Vd(e.priority,function(){Bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Js=r,n.target.dispatchEvent(r),Js=null}else return t=Yr(n),t!==null&&rl(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Ci(e)&&n.delete(t)}function Dm(){na=!1,Ct!==null&&Ci(Ct)&&(Ct=null),Rt!==null&&Ci(Rt)&&(Rt=null),Pt!==null&&Ci(Pt)&&(Pt=null),Pr.forEach(gu),Nr.forEach(gu)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Dm)))}function xr(e){function t(i){return rr(i,e)}if(0<fi.length){rr(fi[0],e);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&rr(Ct,e),Rt!==null&&rr(Rt,e),Pt!==null&&rr(Pt,e),Pr.forEach(t),Nr.forEach(t),n=0;n<yt.length;n++)r=yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yt.length&&(n=yt[0],n.blockedOn===null);)Wd(n),n.blockedOn===null&&yt.shift()}var Dn=ft.ReactCurrentBatchConfig,Hi=!0;function Lm(e,t,n,r){var i=U,o=Dn.transition;Dn.transition=null;try{U=1,il(e,t,n,r)}finally{U=i,Dn.transition=o}}function Mm(e,t,n,r){var i=U,o=Dn.transition;Dn.transition=null;try{U=4,il(e,t,n,r)}finally{U=i,Dn.transition=o}}function il(e,t,n,r){if(Hi){var i=ra(e,t,n,r);if(i===null)ds(e,t,r,Ki,n),mu(e,r);else if(Am(i,e,t,n,r))r.stopPropagation();else if(mu(e,r),t&4&&-1<Om.indexOf(e)){for(;i!==null;){var o=Yr(i);if(o!==null&&jd(o),o=ra(e,t,n,r),o===null&&ds(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ds(e,t,r,null,n)}}var Ki=null;function ra(e,t,n,r){if(Ki=null,e=el(r),e=Qt(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function Hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Em()){case tl:return 1;case Ud:return 4;case Vi:case Im:return 16;case Fd:return 536870912;default:return 16}default:return 16}}var It=null,ol=null,Ri=null;function Kd(){if(Ri)return Ri;var e,t=ol,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hi(){return!0}function vu(){return!1}function Te(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hi:vu,this.isPropagationStopped=vu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hi)},persist:function(){},isPersistent:hi}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Te(Gn),qr=H({},Gn,{view:0,detail:0}),Um=Te(qr),ns,rs,ir,So=H({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(ns=e.screenX-ir.screenX,rs=e.screenY-ir.screenY):rs=ns=0,ir=e),ns)},movementY:function(e){return"movementY"in e?e.movementY:rs}}),yu=Te(So),Fm=H({},So,{dataTransfer:0}),zm=Te(Fm),$m=H({},qr,{relatedTarget:0}),is=Te($m),jm=H({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bm=Te(jm),bm=H({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vm=Te(bm),Wm=H({},Gn,{data:0}),wu=Te(Wm),Hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gm[e])?!!t[e]:!1}function al(){return Qm}var qm=H({},qr,{key:function(e){if(e.key){var t=Hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=Te(qm),Jm=H({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=Te(Jm),Xm=H({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),Zm=Te(Xm),eg=H({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=Te(eg),ng=H({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=Te(ng),ig=[9,13,27,32],ll=st&&"CompositionEvent"in window,gr=null;st&&"documentMode"in document&&(gr=document.documentMode);var og=st&&"TextEvent"in window&&!gr,Gd=st&&(!ll||gr&&8<gr&&11>=gr),Su=String.fromCharCode(32),Eu=!1;function Qd(e,t){switch(e){case"keyup":return ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function sg(e,t){switch(e){case"compositionend":return qd(t);case"keypress":return t.which!==32?null:(Eu=!0,Su);case"textInput":return e=t.data,e===Su&&Eu?null:e;default:return null}}function ag(e,t){if(_n)return e==="compositionend"||!ll&&Qd(e,t)?(e=Kd(),Ri=ol=It=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gd&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function Yd(e,t,n,r){Rd(r),t=Gi(t,"onChange"),0<t.length&&(n=new sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,Or=null;function ug(e){lf(e,0)}function Eo(e){var t=In(e);if(_d(t))return e}function cg(e,t){if(e==="change")return t}var Jd=!1;if(st){var os;if(st){var ss="oninput"in document;if(!ss){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),ss=typeof ku.oninput=="function"}os=ss}else os=!1;Jd=os&&(!document.documentMode||9<document.documentMode)}function Tu(){vr&&(vr.detachEvent("onpropertychange",Xd),Or=vr=null)}function Xd(e){if(e.propertyName==="value"&&Eo(Or)){var t=[];Yd(t,Or,e,el(e)),Od(ug,t)}}function dg(e,t,n){e==="focusin"?(Tu(),vr=t,Or=n,vr.attachEvent("onpropertychange",Xd)):e==="focusout"&&Tu()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eo(Or)}function hg(e,t){if(e==="click")return Eo(t)}function pg(e,t){if(e==="input"||e==="change")return Eo(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var je=typeof Object.is=="function"?Object.is:mg;function Ar(e,t){if(je(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$s.call(t,i)||!je(e[i],t[i]))return!1}return!0}function Cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ru(e,t){var n=Cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cu(n)}}function Zd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ef(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=ef(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zd(n.ownerDocument.documentElement,n)){if(r!==null&&ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ru(n,o);var s=Ru(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vg=st&&"documentMode"in document&&11>=document.documentMode,Sn=null,ia=null,yr=null,oa=!1;function Pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||Sn==null||Sn!==ji(r)||(r=Sn,"selectionStart"in r&&ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Ar(yr,r)||(yr=r,r=Gi(ia,"onSelect"),0<r.length&&(t=new sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:pi("Animation","AnimationEnd"),animationiteration:pi("Animation","AnimationIteration"),animationstart:pi("Animation","AnimationStart"),transitionend:pi("Transition","TransitionEnd")},as={},tf={};st&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Io(e){if(as[e])return as[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tf)return as[e]=t[n];return e}var nf=Io("animationend"),rf=Io("animationiteration"),of=Io("animationstart"),sf=Io("transitionend"),af=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){af.set(e,t),hn(t,[e])}for(var ls=0;ls<Nu.length;ls++){var us=Nu[ls],yg=us.toLowerCase(),wg=us[0].toUpperCase()+us.slice(1);jt(yg,"on"+wg)}jt(nf,"onAnimationEnd");jt(rf,"onAnimationIteration");jt(of,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(sf,"onTransitionEnd");zn("onMouseEnter",["mouseout","mouseover"]);zn("onMouseLeave",["mouseout","mouseover"]);zn("onPointerEnter",["pointerout","pointerover"]);zn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_g=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ym(r,t,void 0,e),e.currentTarget=null}function lf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;xu(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;xu(i,a,u),o=l}}}if(bi)throw e=ea,bi=!1,ea=null,e}function j(e,t){var n=t[ca];n===void 0&&(n=t[ca]=new Set);var r=e+"__bubble";n.has(r)||(uf(t,e,2,!1),n.add(r))}function cs(e,t,n){var r=0;t&&(r|=4),uf(n,e,r,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[mi]){e[mi]=!0,md.forEach(function(n){n!=="selectionchange"&&(_g.has(n)||cs(n,!1,e),cs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,cs("selectionchange",!1,t))}}function uf(e,t,n,r){switch(Hd(t)){case 1:var i=Lm;break;case 4:i=Mm;break;default:i=il}n=i.bind(null,t,n,e),i=void 0,!Zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ds(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Qt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Od(function(){var u=o,f=el(n),p=[];e:{var m=af.get(e);if(m!==void 0){var g=sl,_=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":g=Ym;break;case"focusin":_="focus",g=is;break;case"focusout":_="blur",g=is;break;case"beforeblur":case"afterblur":g=is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Zm;break;case nf:case rf:case of:g=Bm;break;case sf:g=tg;break;case"scroll":g=Um;break;case"wheel":g=rg;break;case"copy":case"cut":case"paste":g=Vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=_u}var y=(t&4)!==0,R=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var c=u,h;c!==null;){h=c;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,d!==null&&(v=Rr(c,d),v!=null&&y.push(Lr(c,v,h)))),R)break;c=c.return}0<y.length&&(m=new g(m,_,null,n,f),p.push({event:m,listeners:y}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Js&&(_=n.relatedTarget||n.fromElement)&&(Qt(_)||_[at]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Qt(_):null,_!==null&&(R=pn(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=yu,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=_u,v="onPointerLeave",d="onPointerEnter",c="pointer"),R=g==null?m:In(g),h=_==null?m:In(_),m=new y(v,c+"leave",g,n,f),m.target=R,m.relatedTarget=h,v=null,Qt(f)===u&&(y=new y(d,c+"enter",_,n,f),y.target=h,y.relatedTarget=R,v=y),R=v,g&&_)t:{for(y=g,d=_,c=0,h=y;h;h=gn(h))c++;for(h=0,v=d;v;v=gn(v))h++;for(;0<c-h;)y=gn(y),c--;for(;0<h-c;)d=gn(d),h--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=gn(y),d=gn(d)}y=null}else y=null;g!==null&&Ou(p,m,g,y,!1),_!==null&&R!==null&&Ou(p,R,_,y,!0)}}e:{if(m=u?In(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=cg;else if(Iu(m))if(Jd)S=pg;else{S=fg;var k=dg}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=hg);if(S&&(S=S(e,u))){Yd(p,S,n,f);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&Ks(m,"number",m.value)}switch(k=u?In(u):window,e){case"focusin":(Iu(k)||k.contentEditable==="true")&&(Sn=k,ia=u,yr=null);break;case"focusout":yr=ia=Sn=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,Pu(p,n,f);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":Pu(p,n,f)}var T;if(ll)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else _n?Qd(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Gd&&n.locale!=="ko"&&(_n||C!=="onCompositionStart"?C==="onCompositionEnd"&&_n&&(T=Kd()):(It=f,ol="value"in It?It.value:It.textContent,_n=!0)),k=Gi(u,C),0<k.length&&(C=new wu(C,e,null,n,f),p.push({event:C,listeners:k}),T?C.data=T:(T=qd(n),T!==null&&(C.data=T)))),(T=og?sg(e,n):ag(e,n))&&(u=Gi(u,"onBeforeInput"),0<u.length&&(f=new wu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=T))}lf(p,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Rr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=Rr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Rr(n,o),l!=null&&s.unshift(Lr(n,l,a))):i||(l=Rr(n,o),l!=null&&s.push(Lr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Sg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function Au(e){return(typeof e=="string"?e:""+e).replace(Sg,`
`).replace(Eg,"")}function gi(e,t,n){if(t=Au(t),Au(e)!==t&&n)throw Error(w(425))}function Qi(){}var sa=null,aa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Ig=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(Tg)}:ua;function Tg(e){setTimeout(function(){throw e})}function fs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xr(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Qn,Mr="__reactProps$"+Qn,at="__reactContainer$"+Qn,ca="__reactEvents$"+Qn,Cg="__reactListeners$"+Qn,Rg="__reactHandles$"+Qn;function Qt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[Ve])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[Ve]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ko(e){return e[Mr]||null}var da=[],kn=-1;function Bt(e){return{current:e}}function B(e){0>kn||(e.current=da[kn],da[kn]=null,kn--)}function z(e,t){kn++,da[kn]=e.current,e.current=t}var $t={},le=Bt($t),ge=Bt(!1),nn=$t;function $n(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ve(e){return e=e.childContextTypes,e!=null}function qi(){B(ge),B(le)}function Mu(e,t,n){if(le.current!==$t)throw Error(w(168));z(le,t),z(ge,n)}function cf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,dm(e)||"Unknown",i));return H({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,nn=le.current,z(le,e),z(ge,ge.current),!0}function Uu(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=cf(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(le),z(le,e)):B(ge),z(ge,n)}var Ze=null,To=!1,hs=!1;function df(e){Ze===null?Ze=[e]:Ze.push(e)}function Pg(e){To=!0,df(e)}function bt(){if(!hs&&Ze!==null){hs=!0;var e=0,t=U;try{var n=Ze;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,To=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Md(tl,bt),i}finally{U=t,hs=!1}}return null}var Tn=[],Cn=0,Ji=null,Xi=0,Ce=[],Re=0,rn=null,tt=1,nt="";function Ht(e,t){Tn[Cn++]=Xi,Tn[Cn++]=Ji,Ji=e,Xi=t}function ff(e,t,n){Ce[Re++]=tt,Ce[Re++]=nt,Ce[Re++]=rn,rn=e;var r=tt;e=nt;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var o=32-ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,tt=1<<32-ze(t)+i|n<<i|r,nt=o+e}else tt=1<<o|n<<i|r,nt=e}function cl(e){e.return!==null&&(Ht(e,1),ff(e,1,0))}function dl(e){for(;e===Ji;)Ji=Tn[--Cn],Tn[Cn]=null,Xi=Tn[--Cn],Tn[Cn]=null;for(;e===rn;)rn=Ce[--Re],Ce[Re]=null,nt=Ce[--Re],Ce[Re]=null,tt=Ce[--Re],Ce[Re]=null}var Se=null,_e=null,b=!1,Fe=null;function hf(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,_e=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:tt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,_e=null,!0):!1;default:return!1}}function fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ha(e){if(b){var t=_e;if(t){var n=t;if(!Fu(e,t)){if(fa(e))throw Error(w(418));t=Nt(n.nextSibling);var r=Se;t&&Fu(e,t)?hf(r,n):(e.flags=e.flags&-4097|2,b=!1,Se=e)}}else{if(fa(e))throw Error(w(418));e.flags=e.flags&-4097|2,b=!1,Se=e}}}function zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function vi(e){if(e!==Se)return!1;if(!b)return zu(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=_e)){if(fa(e))throw pf(),Error(w(418));for(;t;)hf(e,t),t=Nt(t.nextSibling)}if(zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Se?Nt(e.stateNode.nextSibling):null;return!0}function pf(){for(var e=_e;e;)e=Nt(e.nextSibling)}function jn(){_e=Se=null,b=!1}function fl(e){Fe===null?Fe=[e]:Fe.push(e)}var Ng=ft.ReactCurrentBatchConfig;function Me(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zi=Bt(null),eo=null,Rn=null,hl=null;function pl(){hl=Rn=eo=null}function ml(e){var t=Zi.current;B(Zi),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){eo=e,hl=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(me=!0),e.firstContext=null)}function Oe(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(eo===null)throw Error(w(308));Rn=e,eo.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var qt=null;function gl(e){qt===null?qt=[e]:qt.push(e)}function mf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gl(t)):(n.next=i.next,i.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(M&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,lt(e,n)}return i=r.interleaved,i===null?(t.next=t,gl(r)):(t.next=i.next,i.next=t),r.interleaved=t,lt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}function $u(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function to(e,t,n,r){var i=e.updateQueue;vt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,f=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,y=a;switch(m=t,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){p=_.call(g,p,m);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,m=typeof _=="function"?_.call(g,p,m):_,m==null)break e;p=H({},p,m);break e;case 2:vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=p):f=f.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=p}}function ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var vf=new pd.Component().refs;function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=At(e),o=ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&($e(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=At(e),o=ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&($e(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=At(e),i=ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&($e(t,e,r,n),Ni(t,e,r))}};function Bu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,o):!0}function yf(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Oe(o):(i=ve(t)?nn:le.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function ga(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=vf,vl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Oe(o):(o=ve(t)?nn:le.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ma(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),to(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===vf&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vu(e){var t=e._init;return t(e._payload)}function wf(e){function t(d,c){if(e){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Dt(d,c),d.index=0,d.sibling=null,d}function o(d,c,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=2,c):h):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,h,v){return c===null||c.tag!==6?(c=_s(h,d.mode,v),c.return=d,c):(c=i(c,h),c.return=d,c)}function l(d,c,h,v){var S=h.type;return S===wn?f(d,c,h.props.children,v,h.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&Vu(S)===c.type)?(v=i(c,h.props),v.ref=or(d,c,h),v.return=d,v):(v=Mi(h.type,h.key,h.props,null,d.mode,v),v.ref=or(d,c,h),v.return=d,v)}function u(d,c,h,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Ss(h,d.mode,v),c.return=d,c):(c=i(c,h.children||[]),c.return=d,c)}function f(d,c,h,v,S){return c===null||c.tag!==7?(c=en(h,d.mode,v,S),c.return=d,c):(c=i(c,h),c.return=d,c)}function p(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_s(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ai:return h=Mi(c.type,c.key,c.props,null,d.mode,h),h.ref=or(d,null,c),h.return=d,h;case yn:return c=Ss(c,d.mode,h),c.return=d,c;case gt:var v=c._init;return p(d,v(c._payload),h)}if(cr(c)||er(c))return c=en(c,d.mode,h,null),c.return=d,c;yi(d,c)}return null}function m(d,c,h,v){var S=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:a(d,c,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ai:return h.key===S?l(d,c,h,v):null;case yn:return h.key===S?u(d,c,h,v):null;case gt:return S=h._init,m(d,c,S(h._payload),v)}if(cr(h)||er(h))return S!==null?null:f(d,c,h,v,null);yi(d,h)}return null}function g(d,c,h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(h)||null,a(c,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ai:return d=d.get(v.key===null?h:v.key)||null,l(c,d,v,S);case yn:return d=d.get(v.key===null?h:v.key)||null,u(c,d,v,S);case gt:var k=v._init;return g(d,c,h,k(v._payload),S)}if(cr(v)||er(v))return d=d.get(h)||null,f(c,d,v,S,null);yi(c,v)}return null}function _(d,c,h,v){for(var S=null,k=null,T=c,C=c=0,$=null;T!==null&&C<h.length;C++){T.index>C?($=T,T=null):$=T.sibling;var D=m(d,T,h[C],v);if(D===null){T===null&&(T=$);break}e&&T&&D.alternate===null&&t(d,T),c=o(D,c,C),k===null?S=D:k.sibling=D,k=D,T=$}if(C===h.length)return n(d,T),b&&Ht(d,C),S;if(T===null){for(;C<h.length;C++)T=p(d,h[C],v),T!==null&&(c=o(T,c,C),k===null?S=T:k.sibling=T,k=T);return b&&Ht(d,C),S}for(T=r(d,T);C<h.length;C++)$=g(T,d,C,h[C],v),$!==null&&(e&&$.alternate!==null&&T.delete($.key===null?C:$.key),c=o($,c,C),k===null?S=$:k.sibling=$,k=$);return e&&T.forEach(function(De){return t(d,De)}),b&&Ht(d,C),S}function y(d,c,h,v){var S=er(h);if(typeof S!="function")throw Error(w(150));if(h=S.call(h),h==null)throw Error(w(151));for(var k=S=null,T=c,C=c=0,$=null,D=h.next();T!==null&&!D.done;C++,D=h.next()){T.index>C?($=T,T=null):$=T.sibling;var De=m(d,T,D.value,v);if(De===null){T===null&&(T=$);break}e&&T&&De.alternate===null&&t(d,T),c=o(De,c,C),k===null?S=De:k.sibling=De,k=De,T=$}if(D.done)return n(d,T),b&&Ht(d,C),S;if(T===null){for(;!D.done;C++,D=h.next())D=p(d,D.value,v),D!==null&&(c=o(D,c,C),k===null?S=D:k.sibling=D,k=D);return b&&Ht(d,C),S}for(T=r(d,T);!D.done;C++,D=h.next())D=g(T,d,C,D.value,v),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?C:D.key),c=o(D,c,C),k===null?S=D:k.sibling=D,k=D);return e&&T.forEach(function(Xn){return t(d,Xn)}),b&&Ht(d,C),S}function R(d,c,h,v){if(typeof h=="object"&&h!==null&&h.type===wn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ai:e:{for(var S=h.key,k=c;k!==null;){if(k.key===S){if(S=h.type,S===wn){if(k.tag===7){n(d,k.sibling),c=i(k,h.props.children),c.return=d,d=c;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gt&&Vu(S)===k.type){n(d,k.sibling),c=i(k,h.props),c.ref=or(d,k,h),c.return=d,d=c;break e}n(d,k);break}else t(d,k);k=k.sibling}h.type===wn?(c=en(h.props.children,d.mode,v,h.key),c.return=d,d=c):(v=Mi(h.type,h.key,h.props,null,d.mode,v),v.ref=or(d,c,h),v.return=d,d=v)}return s(d);case yn:e:{for(k=h.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),c=i(c,h.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ss(h,d.mode,v),c.return=d,d=c}return s(d);case gt:return k=h._init,R(d,c,k(h._payload),v)}if(cr(h))return _(d,c,h,v);if(er(h))return y(d,c,h,v);yi(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,h),c.return=d,d=c):(n(d,c),c=_s(h,d.mode,v),c.return=d,d=c),s(d)):n(d,c)}return R}var Bn=wf(!0),_f=wf(!1),Jr={},He=Bt(Jr),Ur=Bt(Jr),Fr=Bt(Jr);function Yt(e){if(e===Jr)throw Error(w(174));return e}function yl(e,t){switch(z(Fr,t),z(Ur,e),z(He,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qs(t,e)}B(He),z(He,t)}function bn(){B(He),B(Ur),B(Fr)}function Sf(e){Yt(Fr.current);var t=Yt(He.current),n=Qs(t,e.type);t!==n&&(z(Ur,e),z(He,n))}function wl(e){Ur.current===e&&(B(He),B(Ur))}var V=Bt(0);function no(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function _l(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var xi=ft.ReactCurrentDispatcher,ms=ft.ReactCurrentBatchConfig,on=0,W=null,Y=null,ee=null,ro=!1,wr=!1,zr=0,xg=0;function oe(){throw Error(w(321))}function Sl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!je(e[n],t[n]))return!1;return!0}function El(e,t,n,r,i,o){if(on=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?Lg:Mg,e=n(r,i),wr){o=0;do{if(wr=!1,zr=0,25<=o)throw Error(w(301));o+=1,ee=Y=null,t.updateQueue=null,xi.current=Ug,e=n(r,i)}while(wr)}if(xi.current=io,t=Y!==null&&Y.next!==null,on=0,ee=Y=W=null,ro=!1,t)throw Error(w(300));return e}function Il(){var e=zr!==0;return zr=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?W.memoizedState=ee=e:ee=ee.next=e,ee}function Ae(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=ee===null?W.memoizedState:ee.next;if(t!==null)ee=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},ee===null?W.memoizedState=ee=e:ee=ee.next=e}return ee}function $r(e,t){return typeof t=="function"?t(e):t}function gs(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((on&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,W.lanes|=f,sn|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,je(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,W.lanes|=o,sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vs(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);je(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ef(){}function If(e,t){var n=W,r=Ae(),i=t(),o=!je(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,kl(Cf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,jr(9,Tf.bind(null,n,r,i,t),void 0,null),te===null)throw Error(w(349));(on&30)!==0||kf(n,t,i)}return i}function kf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tf(e,t,n,r){t.value=n,t.getSnapshot=r,Rf(t)&&Pf(e)}function Cf(e,t,n){return n(function(){Rf(t)&&Pf(e)})}function Rf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!je(e,n)}catch{return!0}}function Pf(e){var t=lt(e,1);t!==null&&$e(t,e,1,-1)}function Wu(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Dg.bind(null,W,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nf(){return Ae().memoizedState}function Oi(e,t,n,r){var i=be();W.flags|=e,i.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&Sl(r,s.deps)){i.memoizedState=jr(t,n,o,r);return}}W.flags|=e,i.memoizedState=jr(1|t,n,o,r)}function Hu(e,t){return Oi(8390656,8,e,t)}function kl(e,t){return Ro(2048,8,e,t)}function xf(e,t){return Ro(4,2,e,t)}function Of(e,t){return Ro(4,4,e,t)}function Af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Df(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,Af.bind(null,t,e),n)}function Tl(){}function Lf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uf(e,t,n){return(on&21)===0?(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n):(je(n,t)||(n=zd(),W.lanes|=n,sn|=n,e.baseState=!0),t)}function Og(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ms.transition;ms.transition={};try{e(!1),t()}finally{U=n,ms.transition=r}}function Ff(){return Ae().memoizedState}function Ag(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zf(e))$f(t,n);else if(n=mf(e,t,n,r),n!==null){var i=de();$e(n,e,r,i),jf(n,t,r)}}function Dg(e,t,n){var r=At(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zf(e))$f(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,je(a,s)){var l=t.interleaved;l===null?(i.next=i,gl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=mf(e,t,i,r),n!==null&&(i=de(),$e(n,e,r,i),jf(n,t,r))}}function zf(e){var t=e.alternate;return e===W||t!==null&&t===W}function $f(e,t){wr=ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nl(e,n)}}var io={readContext:Oe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Lg={readContext:Oe,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Oe,useEffect:Hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4194308,4,Af.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oi(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ag.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:Wu,useDebugValue:Tl,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=Wu(!1),t=e[0];return e=Og.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,i=be();if(b){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));(on&30)!==0||kf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hu(Cf.bind(null,r,o,e),[e]),r.flags|=2048,jr(9,Tf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=be(),t=te.identifierPrefix;if(b){var n=nt,r=tt;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mg={readContext:Oe,useCallback:Lf,useContext:Oe,useEffect:kl,useImperativeHandle:Df,useInsertionEffect:xf,useLayoutEffect:Of,useMemo:Mf,useReducer:gs,useRef:Nf,useState:function(){return gs($r)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ae();return Uf(t,Y.memoizedState,e)},useTransition:function(){var e=gs($r)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ef,useSyncExternalStore:If,useId:Ff,unstable_isNewReconciler:!1},Ug={readContext:Oe,useCallback:Lf,useContext:Oe,useEffect:kl,useImperativeHandle:Df,useInsertionEffect:xf,useLayoutEffect:Of,useMemo:Mf,useReducer:vs,useRef:Nf,useState:function(){return vs($r)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ae();return Y===null?t.memoizedState=e:Uf(t,Y.memoizedState,e)},useTransition:function(){var e=vs($r)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ef,useSyncExternalStore:If,useId:Ff,unstable_isNewReconciler:!1};function Vn(e,t){try{var n="",r=t;do n+=cm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ys(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Fg=typeof WeakMap=="function"?WeakMap:Map;function Bf(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){so||(so=!0,Ra=r),va(e,t)},n}function bf(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){va(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){va(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Jg.bind(null,e,t,n),t.then(e,e))}function Gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var zg=ft.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?_f(t,null,n,r):Bn(t,e.child,n,r)}function qu(e,t,n,r,i){n=n.render;var o=t.ref;return Ln(t,i),r=El(e,t,n,r,o,i),n=Il(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(b&&n&&cl(t),t.flags|=1,ce(e,t,r,i),t.child)}function Yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vf(e,t,o,r,i)):(e=Mi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(s,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Dt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ar(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(me=!0);else return t.lanes=e.lanes,ut(e,t,i)}return ya(e,t,n,r,i)}function Wf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Nn,we),we|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Nn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Nn,we),we|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,z(Nn,we),we|=r;return ce(e,t,i,n),t.child}function Hf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ya(e,t,n,r,i){var o=ve(n)?nn:le.current;return o=$n(t,o),Ln(t,i),n=El(e,t,n,r,o,i),r=Il(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(b&&r&&cl(t),t.flags|=1,ce(e,t,n,i),t.child)}function Ju(e,t,n,r,i){if(ve(n)){var o=!0;Yi(t)}else o=!1;if(Ln(t,i),t.stateNode===null)Ai(e,t),yf(t,n,r),ga(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Oe(u):(u=ve(n)?nn:le.current,u=$n(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bu(t,s,r,u),vt=!1;var m=t.memoizedState;s.state=m,to(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ge.current||vt?(typeof f=="function"&&(ma(t,n,f,r),l=t.memoizedState),(a=vt||Bu(t,n,a,r,m,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,gf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Me(t.type,a),s.props=u,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Oe(l):(l=ve(n)?nn:le.current,l=$n(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&bu(t,s,r,l),vt=!1,m=t.memoizedState,s.state=m,to(t,r,s,i);var _=t.memoizedState;a!==p||m!==_||ge.current||vt?(typeof g=="function"&&(ma(t,n,g,r),_=t.memoizedState),(u=vt||Bu(t,n,u,r,m,_,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return wa(e,t,n,r,o,i)}function wa(e,t,n,r,i,o){Hf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Uu(t,n,!1),ut(e,t,o);r=t.stateNode,zg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&Uu(t,n,!0),t.child}function Kf(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),yl(e,t.containerInfo)}function Xu(e,t,n,r,i){return jn(),fl(i),t.flags|=256,ce(e,t,n,r),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gf(e,t,n){var r=t.pendingProps,i=V.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(V,i&1),e===null)return ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=xo(s,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Sa(n),t.memoizedState=_a,e):Cl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $g(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Dt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Dt(a,o):(o=en(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Sa(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=_a,r}return o=e.child,e=o.sibling,r=Dt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cl(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&fl(r),Bn(t,e.child,null,n),e=Cl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $g(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ys(Error(w(422))),wi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xo({mode:"visible",children:r.children},i,0,null),o=en(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Bn(t,e.child,null,s),t.child.memoizedState=Sa(s),t.memoizedState=_a,o);if((t.mode&1)===0)return wi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(w(419)),r=ys(o,r,void 0),wi(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,lt(e,i),$e(r,e,i,-1))}return Al(),r=ys(Error(w(421))),wi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_e=Nt(i.nextSibling),Se=t,b=!0,Fe=null,e!==null&&(Ce[Re++]=tt,Ce[Re++]=nt,Ce[Re++]=rn,tt=e.id,nt=e.overflow,rn=t),t=Cl(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function ws(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Qf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=V.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(V,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&no(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ws(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&no(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ws(t,!0,n,null,o);break;case"together":ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ai(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jg(e,t,n){switch(t.tag){case 3:Kf(t),jn();break;case 5:Sf(t);break;case 1:ve(t.type)&&Yi(t);break;case 4:yl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Zi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(V,V.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gf(e,t,n):(z(V,V.current&1),e=ut(e,t,n),e!==null?e.sibling:null);z(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Qf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Wf(e,t,n)}return ut(e,t,n)}var qf,Ea,Yf,Jf;qf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ea=function(){};Yf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yt(He.current);var o=null;switch(n){case"input":i=Ws(e,i),r=Ws(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=Gs(e,i),r=Gs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qi)}qs(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&j("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bg(e,t,n){var r=t.pendingProps;switch(dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&qi(),se(t),null;case 3:return r=t.stateNode,bn(),B(ge),B(le),_l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fe!==null&&(xa(Fe),Fe=null))),Ea(e,t),se(t),null;case 5:wl(t);var i=Yt(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Yf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=Yt(He.current),vi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)j(fr[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":lu(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":cu(r,o),j("invalid",r)}qs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gi(r.textContent,a,e),i=["children",""+a]):Tr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":li(r),uu(r,o,!0);break;case"textarea":li(r),du(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Id(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ve]=t,e[Mr]=r,qf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ys(n,r),n){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)j(fr[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":lu(e,r),i=Ws(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),j("invalid",e);break;case"textarea":cu(e,r),i=Gs(e,r),j("invalid",e);break;default:i=r}qs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Cd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cr(e,l):typeof l=="number"&&Cr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&j("scroll",e):l!=null&&Ya(e,o,l,s))}switch(n){case"input":li(e),uu(e,r,!1);break;case"textarea":li(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Yt(Fr.current),Yt(He.current),vi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:gi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return se(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&_e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)pf(),jn(),t.flags|=98560,o=!1;else if(o=vi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Ve]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Fe!==null&&(xa(Fe),Fe=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(V.current&1)!==0?J===0&&(J=3):Al())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return bn(),Ea(e,t),e===null&&Dr(t.stateNode.containerInfo),se(t),null;case 10:return ml(t.type._context),se(t),null;case 17:return ve(t.type)&&qi(),se(t),null;case 19:if(B(V),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)sr(o,!1);else{if(J!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=no(e),s!==null){for(t.flags|=128,sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>Wn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=no(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!b)return se(t),null}else 2*Q()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=V.current,z(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(we&1073741824)!==0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function bg(e,t){switch(dl(t),t.tag){case 1:return ve(t.type)&&qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),B(ge),B(le),_l(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return wl(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return bn(),null;case 10:return ml(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var _i=!1,ae=!1,Vg=typeof WeakSet=="function"?WeakSet:Set,E=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ia(e,t,n){try{n()}catch(r){K(e,t,r)}}var ec=!1;function Wg(e,t){if(sa=Hi,e=ef(),ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++f===r&&(l=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(aa={focusedElem:e,selectionRange:n},Hi=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var _=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,R=_.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Me(t.type,y),R);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return _=ec,ec=!1,_}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ia(t,n,o)}i=i.next}while(i!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ka(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Mr],delete t[ca],delete t[Cg],delete t[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zf(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}var ne=null,Ue=!1;function pt(e,t,n){for(n=n.child;n!==null;)eh(e,t,n),n=n.sibling}function eh(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:ae||Pn(n,t);case 6:var r=ne,i=Ue;ne=null,pt(e,t,n),ne=r,Ue=i,ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ue?(e=ne,n=n.stateNode,e.nodeType===8?fs(e.parentNode,n):e.nodeType===1&&fs(e,n),xr(e)):fs(ne,n.stateNode));break;case 4:r=ne,i=Ue,ne=n.stateNode.containerInfo,Ue=!0,pt(e,t,n),ne=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Ia(n,t,s),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!ae&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,pt(e,t,n),ae=r):pt(e,t,n);break;default:pt(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vg),t.forEach(function(r){var i=Zg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ue=!1;break e;case 3:ne=a.stateNode.containerInfo,Ue=!0;break e;case 4:ne=a.stateNode.containerInfo,Ue=!0;break e}a=a.return}if(ne===null)throw Error(w(160));eh(o,s,i),ne=null,Ue=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)th(t,e),t=t.sibling}function th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Be(e),r&4){try{_r(3,e,e.return),Po(3,e)}catch(y){K(e,e.return,y)}try{_r(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:Le(t,e),Be(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Le(t,e),Be(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Cr(i,"")}catch(y){K(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Sd(i,o),Ys(a,s);var u=Ys(a,o);for(s=0;s<l.length;s+=2){var f=l[s],p=l[s+1];f==="style"?Cd(i,p):f==="dangerouslySetInnerHTML"?kd(i,p):f==="children"?Cr(i,p):Ya(i,f,p,u)}switch(a){case"input":Hs(i,o);break;case"textarea":Ed(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?xn(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?xn(i,!!o.multiple,o.defaultValue,!0):xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(y){K(e,e.return,y)}}break;case 6:if(Le(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){K(e,e.return,y)}}break;case 3:if(Le(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xr(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:Le(t,e),Be(e);break;case 13:Le(t,e),Be(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nl=Q())),r&4&&nc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||f,Le(t,e),ae=u):Le(t,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&(e.mode&1)!==0)for(E=e,f=e.child;f!==null;){for(p=E=f;E!==null;){switch(m=E,g=m.child,m.tag){case 0:case 11:case 14:case 15:_r(4,m,m.return);break;case 1:Pn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:Pn(m,m.return);break;case 22:if(m.memoizedState!==null){ic(p);continue}}g!==null?(g.return=m,E=g):ic(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Td("display",s))}catch(y){K(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){K(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),Be(e),r&4&&nc(e);break;case 21:break;default:Le(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Cr(i,""),r.flags&=-33);var o=tc(e);Ca(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=tc(e);Ta(e,a,s);break;default:throw Error(w(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hg(e,t,n){E=e,nh(e)}function nh(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_i;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ae;a=_i;var u=ae;if(_i=s,(ae=l)&&!u)for(E=i;E!==null;)s=E,l=s.child,s.tag===22&&s.memoizedState!==null?oc(i):l!==null?(l.return=s,E=l):oc(i);for(;o!==null;)E=o,nh(o),o=o.sibling;E=i,_i=a,ae=u}rc(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,E=o):rc(e)}}function rc(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ae||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ju(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ju(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&xr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&ka(t)}catch(m){K(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function ic(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function oc(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var o=t.return;try{ka(t)}catch(l){K(t,o,l)}break;case 5:var s=t.return;try{ka(t)}catch(l){K(t,s,l)}}}catch(l){K(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var Kg=Math.ceil,oo=ft.ReactCurrentDispatcher,Rl=ft.ReactCurrentOwner,Ne=ft.ReactCurrentBatchConfig,M=0,te=null,q=null,re=0,we=0,Nn=Bt(0),J=0,Br=null,sn=0,No=0,Pl=0,Sr=null,pe=null,Nl=0,Wn=1/0,Xe=null,so=!1,Ra=null,Ot=null,Si=!1,kt=null,ao=0,Er=0,Pa=null,Di=-1,Li=0;function de(){return(M&6)!==0?Q():Di!==-1?Di:Di=Q()}function At(e){return(e.mode&1)===0?1:(M&2)!==0&&re!==0?re&-re:Ng.transition!==null?(Li===0&&(Li=zd()),Li):(e=U,e!==0||(e=window.event,e=e===void 0?16:Hd(e.type)),e)}function $e(e,t,n,r){if(50<Er)throw Er=0,Pa=null,Error(w(185));Qr(e,n,r),((M&2)===0||e!==te)&&(e===te&&((M&2)===0&&(No|=n),J===4&&wt(e,re)),ye(e,r),n===1&&M===0&&(t.mode&1)===0&&(Wn=Q()+500,To&&bt()))}function ye(e,t){var n=e.callbackNode;Nm(e,t);var r=Wi(e,e===te?re:0);if(r===0)n!==null&&pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pu(n),t===1)e.tag===0?Pg(sc.bind(null,e)):df(sc.bind(null,e)),kg(function(){(M&6)===0&&bt()}),n=null;else{switch($d(r)){case 1:n=tl;break;case 4:n=Ud;break;case 16:n=Vi;break;case 536870912:n=Fd;break;default:n=Vi}n=ch(n,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rh(e,t){if(Di=-1,Li=0,(M&6)!==0)throw Error(w(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Wi(e,e===te?re:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=lo(e,r);else{t=r;var i=M;M|=2;var o=oh();(te!==e||re!==t)&&(Xe=null,Wn=Q()+500,Zt(e,t));do try{qg();break}catch(a){ih(e,a)}while(1);pl(),oo.current=o,M=i,q!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(i=ta(e),i!==0&&(r=i,t=Na(e,i))),t===1)throw n=Br,Zt(e,0),wt(e,r),ye(e,Q()),n;if(t===6)wt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Gg(i)&&(t=lo(e,r),t===2&&(o=ta(e),o!==0&&(r=o,t=Na(e,o))),t===1))throw n=Br,Zt(e,0),wt(e,r),ye(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Kt(e,pe,Xe);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Nl+500-Q(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ua(Kt.bind(null,e,pe,Xe),t);break}Kt(e,pe,Xe);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kg(r/1960))-r,10<r){e.timeoutHandle=ua(Kt.bind(null,e,pe,Xe),r);break}Kt(e,pe,Xe);break;case 5:Kt(e,pe,Xe);break;default:throw Error(w(329))}}}return ye(e,Q()),e.callbackNode===n?rh.bind(null,e):null}function Na(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=lo(e,t),e!==2&&(t=pe,pe=n,t!==null&&xa(t)),e}function xa(e){pe===null?pe=e:pe.push.apply(pe,e)}function Gg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!je(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Pl,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if((M&6)!==0)throw Error(w(327));Mn();var t=Wi(e,0);if((t&1)===0)return ye(e,Q()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=ta(e);r!==0&&(t=r,n=Na(e,r))}if(n===1)throw n=Br,Zt(e,0),wt(e,t),ye(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,pe,Xe),ye(e,Q()),null}function xl(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Wn=Q()+500,To&&bt())}}function an(e){kt!==null&&kt.tag===0&&(M&6)===0&&Mn();var t=M;M|=1;var n=Ne.transition,r=U;try{if(Ne.transition=null,U=1,e)return e()}finally{U=r,Ne.transition=n,M=t,(M&6)===0&&bt()}}function Ol(){we=Nn.current,B(Nn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ig(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qi();break;case 3:bn(),B(ge),B(le),_l();break;case 5:wl(r);break;case 4:bn();break;case 13:B(V);break;case 19:B(V);break;case 10:ml(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(te=e,q=e=Dt(e.current,null),re=we=t,J=0,Br=null,Pl=No=sn=0,pe=Sr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}qt=null}return e}function ih(e,t){do{var n=q;try{if(pl(),xi.current=io,ro){for(var r=W.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ro=!1}if(on=0,ee=Y=W=null,wr=!1,zr=0,Rl.current=null,n===null||n.return===null){J=1,Br=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if((f.mode&1)===0&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Gu(s);if(g!==null){g.flags&=-257,Qu(g,s,a,o,t),g.mode&1&&Ku(o,u,t),t=g,l=u;var _=t.updateQueue;if(_===null){var y=new Set;y.add(l),t.updateQueue=y}else _.add(l);break e}else{if((t&1)===0){Ku(o,u,t),Al();break e}l=Error(w(426))}}else if(b&&a.mode&1){var R=Gu(s);if(R!==null){(R.flags&65536)===0&&(R.flags|=256),Qu(R,s,a,o,t),fl(Vn(l,a));break e}}o=l=Vn(l,a),J!==4&&(J=2),Sr===null?Sr=[o]:Sr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Bf(o,l,t);$u(o,d);break e;case 1:a=l;var c=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ot===null||!Ot.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=bf(o,a,t);$u(o,v);break e}}o=o.return}while(o!==null)}ah(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function oh(){var e=oo.current;return oo.current=io,e===null?io:e}function Al(){(J===0||J===3||J===2)&&(J=4),te===null||(sn&268435455)===0&&(No&268435455)===0||wt(te,re)}function lo(e,t){var n=M;M|=2;var r=oh();(te!==e||re!==t)&&(Xe=null,Zt(e,t));do try{Qg();break}catch(i){ih(e,i)}while(1);if(pl(),M=n,oo.current=r,q!==null)throw Error(w(261));return te=null,re=0,J}function Qg(){for(;q!==null;)sh(q)}function qg(){for(;q!==null&&!_m();)sh(q)}function sh(e){var t=uh(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?ah(e):q=t,Rl.current=null}function ah(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Bg(n,t,we),n!==null){q=n;return}}else{if(n=bg(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Kt(e,t,n){var r=U,i=Ne.transition;try{Ne.transition=null,U=1,Yg(e,t,n,r)}finally{Ne.transition=i,U=r}return null}function Yg(e,t,n,r){do Mn();while(kt!==null);if((M&6)!==0)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xm(e,o),e===te&&(q=te=null,re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Si||(Si=!0,ch(Vi,function(){return Mn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ne.transition,Ne.transition=null;var s=U;U=1;var a=M;M|=4,Rl.current=null,Wg(e,n),th(n,e),gg(aa),Hi=!!sa,aa=sa=null,e.current=n,Hg(n),Sm(),M=a,U=s,Ne.transition=o}else e.current=n;if(Si&&(Si=!1,kt=e,ao=i),o=e.pendingLanes,o===0&&(Ot=null),km(n.stateNode),ye(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(so)throw so=!1,e=Ra,Ra=null,e;return(ao&1)!==0&&e.tag!==0&&Mn(),o=e.pendingLanes,(o&1)!==0?e===Pa?Er++:(Er=0,Pa=e):Er=0,bt(),null}function Mn(){if(kt!==null){var e=$d(ao),t=Ne.transition,n=U;try{if(Ne.transition=null,U=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,ao=0,(M&6)!==0)throw Error(w(331));var i=M;for(M|=4,E=e.current;E!==null;){var o=E,s=o.child;if((E.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var f=E;switch(f.tag){case 0:case 11:case 15:_r(8,f,o)}var p=f.child;if(p!==null)p.return=f,E=p;else for(;E!==null;){f=E;var m=f.sibling,g=f.return;if(Xf(f),f===u){E=null;break}if(m!==null){m.return=g,E=m;break}E=g}}}var _=o.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}E=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:_r(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var c=e.current;for(E=c;E!==null;){s=E;var h=s.child;if((s.subtreeFlags&2064)!==0&&h!==null)h.return=s,E=h;else e:for(s=c;E!==null;){if(a=E,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Po(9,a)}}catch(S){K(a,a.return,S)}if(a===s){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(M=i,bt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{U=n,Ne.transition=t}}return!1}function ac(e,t,n){t=Vn(n,t),t=Bf(e,t,1),e=xt(e,t,1),t=de(),e!==null&&(Qr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)ac(e,e,n);else for(;t!==null;){if(t.tag===3){ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Vn(n,e),e=bf(t,e,1),t=xt(t,e,1),e=de(),t!==null&&(Qr(t,1,e),ye(t,e));break}}t=t.return}}function Jg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Q()-Nl?Zt(e,0):Pl|=n),ye(e,t)}function lh(e,t){t===0&&((e.mode&1)===0?t=1:(t=di,di<<=1,(di&130023424)===0&&(di=4194304)));var n=de();e=lt(e,t),e!==null&&(Qr(e,t,n),ye(e,n))}function Xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function Zg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),lh(e,n)}var uh;uh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return me=!1,jg(e,t,n);me=(e.flags&131072)!==0}else me=!1,b&&(t.flags&1048576)!==0&&ff(t,Xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ai(e,t),e=t.pendingProps;var i=$n(t,le.current);Ln(t,n),i=El(null,t,r,e,i,n);var o=Il();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,Yi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vl(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,ga(t,r,e,n),t=wa(null,t,r,!0,o,n)):(t.tag=0,b&&o&&cl(t),ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ai(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tv(r),e=Me(r,e),i){case 0:t=ya(null,t,r,e,n);break e;case 1:t=Ju(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=Yu(null,t,r,Me(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),ya(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Ju(e,t,r,i,n);case 3:e:{if(Kf(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,i=o.element,gf(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vn(Error(w(423)),t),t=Xu(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(w(424)),t),t=Xu(e,t,r,n,i);break e}else for(_e=Nt(t.stateNode.containerInfo.firstChild),Se=t,b=!0,Fe=null,n=_f(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===i){t=ut(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Sf(t),e===null&&ha(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,la(r,i)?s=null:o!==null&&la(r,o)&&(t.flags|=32),Hf(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&ha(t),null;case 13:return Gf(e,t,n);case 4:return yl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),qu(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,z(Zi,r._currentValue),r._currentValue=s,o!==null)if(je(o.value,s)){if(o.children===i.children&&!ge.current){t=ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=ot(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),pa(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(w(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ln(t,n),i=Oe(i),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,i=Me(r,t.pendingProps),i=Me(r.type,i),Yu(e,t,r,i,n);case 15:return Vf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Me(r,i),Ai(e,t),t.tag=1,ve(r)?(e=!0,Yi(t)):e=!1,Ln(t,n),yf(t,r,i),ga(t,r,i,n),wa(null,t,r,!0,e,n);case 19:return Qf(e,t,n);case 22:return Wf(e,t,n)}throw Error(w(156,t.tag))};function ch(e,t){return Md(e,t)}function ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new ev(e,t,n,r)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tv(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Za)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Dl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wn:return en(n.children,i,o,t);case Ja:s=8,i|=8;break;case js:return e=Pe(12,n,t,i|2),e.elementType=js,e.lanes=o,e;case Bs:return e=Pe(13,n,t,i),e.elementType=Bs,e.lanes=o,e;case bs:return e=Pe(19,n,t,i),e.elementType=bs,e.lanes=o,e;case yd:return xo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gd:s=10;break e;case vd:s=9;break e;case Xa:s=11;break e;case Za:s=14;break e;case gt:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Pe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function xo(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=yd,e.lanes=n,e.stateNode={isHidden:!1},e}function _s(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function Ss(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ts(0),this.expirationTimes=ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ll(e,t,n,r,i,o,s,a,l){return e=new nv(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vl(o),e}function rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dh(e){if(!e)return $t;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ve(n))return cf(e,n,t)}return t}function fh(e,t,n,r,i,o,s,a,l){return e=Ll(n,r,!0,e,i,o,s,a,l),e.context=dh(null),n=e.current,r=de(),i=At(n),o=ot(r,i),o.callback=t!=null?t:null,xt(n,o,i),e.current.lanes=i,Qr(e,i,r),ye(e,r),e}function Oo(e,t,n,r){var i=t.current,o=de(),s=At(i);return n=dh(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,s),e!==null&&($e(e,i,s,o),Ni(e,i,s)),s}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ml(e,t){lc(e,t),(e=e.alternate)&&lc(e,t)}function iv(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}Ao.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Oo(e,t,null,null)};Ao.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){Oo(null,e,null,null)}),t[at]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=bd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yt.length&&t!==0&&t<yt[n].priority;n++);yt.splice(n,0,e),n===0&&Wd(e)}};function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Do(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function ov(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=uo(s);o.call(u)}}var s=fh(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=s,e[at]=s.current,Dr(e.nodeType===8?e.parentNode:e),an(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uo(l);a.call(u)}}var l=Ll(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=l,e[at]=l.current,Dr(e.nodeType===8?e.parentNode:e),an(function(){Oo(t,l,n,r)}),l}function Lo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=uo(s);a.call(l)}}Oo(t,s,e,i)}else s=ov(n,t,e,i,r);return uo(s)}jd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(nl(t,n|1),ye(t,Q()),(M&6)===0&&(Wn=Q()+500,bt()))}break;case 13:an(function(){var r=lt(e,1);if(r!==null){var i=de();$e(r,e,1,i)}}),Ml(e,1)}};rl=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=de();$e(t,e,134217728,n)}Ml(e,134217728)}};Bd=function(e){if(e.tag===13){var t=At(e),n=lt(e,t);if(n!==null){var r=de();$e(n,e,t,r)}Ml(e,t)}};bd=function(){return U};Vd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Xs=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ko(r);if(!i)throw Error(w(90));_d(r),Hs(r,i)}}}break;case"textarea":Ed(e,n);break;case"select":t=n.value,t!=null&&xn(e,!!n.multiple,t,!1)}};Nd=xl;xd=an;var sv={usingClientEntryPoint:!1,Events:[Yr,In,ko,Rd,Pd,xl]},ar={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},av={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Dd(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ei.isDisabled&&Ei.supportsFiber)try{_o=Ei.inject(av),We=Ei}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fl(t))throw Error(w(200));return rv(e,t,null,n)};ke.createRoot=function(e,t){if(!Fl(e))throw Error(w(299));var n=!1,r="",i=hh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ll(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Ul(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Dd(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return an(e)};ke.hydrate=function(e,t,n){if(!Do(t))throw Error(w(200));return Lo(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Fl(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=hh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=fh(t,null,e,1,n!=null?n:null,i,!1,o,s),e[at]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ao(t)};ke.render=function(e,t,n){if(!Do(t))throw Error(w(200));return Lo(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Do(e))throw Error(w(40));return e._reactRootContainer?(an(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};ke.unstable_batchedUpdates=xl;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Do(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Lo(e,t,n,!1,r)};ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=ke})(dd);var cc=dd.exports;zs.createRoot=cc.createRoot,zs.hydrateRoot=cc.hydrateRoot;/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function br(){return br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},br.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const dc="popstate";function lv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Oa("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:co(i)}return cv(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uv(){return Math.random().toString(36).substr(2,8)}function fc(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qn(t):t,{state:n,key:t&&t.key||r||uv()})}function co(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Tt.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(br({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){a=Tt.Pop;let R=f(),d=R==null?null:R-u;u=R,l&&l({action:a,location:y.location,delta:d})}function m(R,d){a=Tt.Push;let c=Oa(y.location,R,d);n&&n(c,R),u=f()+1;let h=fc(c,u),v=y.createHref(c);try{s.pushState(h,"",v)}catch{i.location.assign(v)}o&&l&&l({action:a,location:y.location,delta:1})}function g(R,d){a=Tt.Replace;let c=Oa(y.location,R,d);n&&n(c,R),u=f();let h=fc(c,u),v=y.createHref(c);s.replaceState(h,"",v),o&&l&&l({action:a,location:y.location,delta:0})}function _(R){let d=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof R=="string"?R:co(R);return X(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return a},get location(){return e(i,s)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dc,p),l=R,()=>{i.removeEventListener(dc,p),l=null}},createHref(R){return t(i,R)},createURL:_,encodeLocation(R){let d=_(R);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:g,go(R){return s.go(R)}};return y}var hc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hc||(hc={}));function dv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qn(t):t,i=gh(r.pathname||"/",n);if(i==null)return null;let o=ph(e);fv(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Sv(o[a],kv(i));return s}function ph(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Lt([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(X(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ph(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:wv(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of mh(o.path))i(o,s,l)}),t}function mh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=mh(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function fv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_v(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hv=/^:\w+$/,pv=3,mv=2,gv=1,vv=10,yv=-2,pc=e=>e==="*";function wv(e,t){let n=e.split("/"),r=n.length;return n.some(pc)&&(r+=yv),t&&(r+=mv),n.filter(i=>!pc(i)).reduce((i,o)=>i+(hv.test(o)?pv:o===""?gv:vv),r)}function _v(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Sv(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=Ev({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let p=a.route;o.push({params:r,pathname:Lt([i,f.pathname]),pathnameBase:Pv(Lt([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Lt([i,f.pathnameBase]))}return o}function Ev(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Iv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let m=a[p]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[f]=Tv(a[p]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Iv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),zl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function kv(e){try{return decodeURI(e)}catch(t){return zl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Tv(e,t){try{return decodeURIComponent(e)}catch(n){return zl(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function zl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qn(e):e;return{pathname:n?n.startsWith("/")?n:Rv(n,t):t,search:Nv(r),hash:xv(i)}}function Rv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Es(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qn(e):(i=br({},e),X(!i.pathname||!i.pathname.includes("?"),Es("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),Es("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),Es("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let l=Cv(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Lt=e=>e.join("/").replace(/\/\/+/g,"/"),Pv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,xv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ov(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Av=["post","put","patch","delete"];[...Av];var Mo={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=x.exports,Lv=Symbol.for("react.element"),Mv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Fv=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zv={key:!0,ref:!0,__self:!0,__source:!0};function wh(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Uv.call(t,r)&&!zv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lv,type:e,key:o,ref:s,props:i,_owner:Fv.current}}Uo.Fragment=Mv;Uo.jsx=wh;Uo.jsxs=wh;(function(e){e.exports=Uo})(Mo);const $v=Mo.exports.Fragment,P=Mo.exports.jsx,Hn=Mo.exports.jsxs;/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Aa.apply(this,arguments)}function jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Bv=typeof Object.is=="function"?Object.is:jv,{useState:bv,useEffect:Vv,useLayoutEffect:Wv,useDebugValue:Hv}=Fs;function Kv(e,t,n){const r=t(),[{inst:i},o]=bv({inst:{value:r,getSnapshot:t}});return Wv(()=>{i.value=r,i.getSnapshot=t,Is(i)&&o({inst:i})},[e,r,t]),Vv(()=>(Is(i)&&o({inst:i}),e(()=>{Is(i)&&o({inst:i})})),[e]),Hv(r),r}function Is(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Bv(n,r)}catch{return!0}}function Gv(e,t,n){return t()}const Qv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qv=!Qv,Yv=qv?Gv:Kv;"useSyncExternalStore"in Fs&&(e=>e.useSyncExternalStore)(Fs);const _h=x.exports.createContext(null),Sh=x.exports.createContext(null),Fo=x.exports.createContext(null),zo=x.exports.createContext(null),Yn=x.exports.createContext({outlet:null,matches:[]}),Eh=x.exports.createContext(null);function Jv(e,t){let{relative:n}=t===void 0?{}:t;Xr()||X(!1);let{basename:r,navigator:i}=x.exports.useContext(Fo),{hash:o,pathname:s,search:a}=Ih(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Lt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Xr(){return x.exports.useContext(zo)!=null}function $o(){return Xr()||X(!1),x.exports.useContext(zo).location}function Xv(){Xr()||X(!1);let{basename:e,navigator:t}=x.exports.useContext(Fo),{matches:n}=x.exports.useContext(Yn),{pathname:r}=$o(),i=JSON.stringify(vh(n).map(a=>a.pathnameBase)),o=x.exports.useRef(!1);return x.exports.useEffect(()=>{o.current=!0}),x.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=yh(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Lt([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Ih(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=x.exports.useContext(Yn),{pathname:i}=$o(),o=JSON.stringify(vh(r).map(s=>s.pathnameBase));return x.exports.useMemo(()=>yh(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Zv(e,t){Xr()||X(!1);let{navigator:n}=x.exports.useContext(Fo),r=x.exports.useContext(Sh),{matches:i}=x.exports.useContext(Yn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=$o(),u;if(t){var f;let y=typeof t=="string"?qn(t):t;a==="/"||((f=y.pathname)==null?void 0:f.startsWith(a))||X(!1),u=y}else u=l;let p=u.pathname||"/",m=a==="/"?p:p.slice(a.length)||"/",g=dv(e,{pathname:m}),_=ry(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Lt([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Lt([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&_?P(zo.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Tt.Pop},children:_}):_}function ey(){let e=ay(),t=Ov(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return Hn($v,{children:[P("h2",{children:"Unexpected Application Error!"}),P("h3",{style:{fontStyle:"italic"},children:t}),n?P("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}class ty extends x.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P(Yn.Provider,{value:this.props.routeContext,children:P(Eh.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function ny(e){let{routeContext:t,match:n,children:r}=e,i=x.exports.useContext(_h);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P(Yn.Provider,{value:t,children:r})}function ry(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||X(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||P(ey,{}):null,f=t.concat(r.slice(0,a+1)),p=()=>P(ny,{match:s,routeContext:{outlet:o,matches:f},children:l?u:s.route.element!==void 0?s.route.element:o});return n&&(s.route.errorElement||a===0)?P(ty,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:f}}):p()},null)}var mc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(mc||(mc={}));var fo;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(fo||(fo={}));function iy(e){let t=x.exports.useContext(Sh);return t||X(!1),t}function oy(e){let t=x.exports.useContext(Yn);return t||X(!1),t}function sy(e){let t=oy(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function ay(){var e;let t=x.exports.useContext(Eh),n=iy(fo.UseRouteError),r=sy(fo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function hr(e){X(!1)}function ly(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tt.Pop,navigator:o,static:s=!1}=e;Xr()&&X(!1);let a=t.replace(/^\/*/,"/"),l=x.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=qn(r));let{pathname:u="/",search:f="",hash:p="",state:m=null,key:g="default"}=r,_=x.exports.useMemo(()=>{let y=gh(u,a);return y==null?null:{pathname:y,search:f,hash:p,state:m,key:g}},[a,u,f,p,m,g]);return _==null?null:P(Fo.Provider,{value:l,children:P(zo.Provider,{children:n,value:{location:_,navigationType:i}})})}function uy(e){let{children:t,location:n}=e,r=x.exports.useContext(_h),i=r&&!t?r.router.routes:Da(t);return Zv(i,n)}var gc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(gc||(gc={}));new Promise(()=>{});function Da(e,t){t===void 0&&(t=[]);let n=[];return x.exports.Children.forEach(e,(r,i)=>{if(!x.exports.isValidElement(r))return;if(r.type===x.exports.Fragment){n.push.apply(n,Da(r.props.children,t));return}r.type!==hr&&X(!1),!r.props.index||!r.props.children||X(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Da(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fy(e,t){return e.button===0&&(!t||t==="_self")&&!dy(e)}const hy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function py(e){let{basename:t,children:n,window:r}=e,i=x.exports.useRef();i.current==null&&(i.current=lv({window:r,v5Compat:!0}));let o=i.current,[s,a]=x.exports.useState({action:o.action,location:o.location});return x.exports.useLayoutEffect(()=>o.listen(a),[o]),P(ly,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const my=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lr=x.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f}=t,p=cy(t,hy),m,g=!1;if(my&&typeof u=="string"&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(u)){m=u;let d=new URL(window.location.href),c=u.startsWith("//")?new URL(d.protocol+u):new URL(u);c.origin===d.origin?u=c.pathname+c.search+c.hash:g=!0}let _=Jv(u,{relative:i}),y=gy(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i});function R(d){r&&r(d),d.defaultPrevented||y(d)}return P("a",{...p,href:m||_,onClick:g||o?r:R,ref:n,target:l})});var vc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(vc||(vc={}));var yc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yc||(yc={}));function gy(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=Xv(),l=$o(),u=Ih(e,{relative:s});return x.exports.useCallback(f=>{if(fy(f,n)){f.preventDefault();let p=r!==void 0?r:co(l)===co(u);a(e,{replace:p,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}function vy(){const[e,t]=x.exports.useState(!1),[n,r]=x.exports.useState(!0),i=()=>t(!e),o=()=>t(!1),s=()=>{window.innerWidth<=960?r(!1):r(!0)};return window.addEventListener("resize",s),P("nav",{className:"navbar",children:Hn("div",{className:"navbar-container",children:[P(lr,{to:"/",className:"navbar-logo",children:P("span",{style:{fontWeight:"bold"},children:"Invesitre"})}),P("div",{className:"menu-icon",onClick:i,children:P("i",{className:e?"fas fa-times":"fas fa-bars"})}),Hn("ul",{className:e?"nav-menu active":"nav-menu",children:[P("li",{className:"nav-item",children:P(lr,{to:"/login",className:"nav-links",onClick:o,children:"Login"})}),P("li",{className:"nav-item",children:P(lr,{to:"/portfolio",className:"nav-links",onClick:o,children:"Portfolio"})}),P("li",{className:"nav-item",children:P(lr,{to:"/Account",className:"nav-links",onClick:o,children:"Account"})}),P("li",{className:"nav-item",children:P(lr,{to:"/about",className:"nav-links",onClick:o,children:"About"})})]})]})})}function yy(){return P("div",{children:"About"})}function wy(){return P("div",{children:"Portfolio"})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},_y=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,p=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[f],n[p],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(kh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_y(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const _=u<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Sy=function(e){const t=kh(e);return Th.encodeByteArray(t,!0)},Ch=function(e){return Sy(e).replace(/\./g,"")},Rh=function(e){try{return Th.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=()=>Ey().__FIREBASE_DEFAULTS__,ky=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ty=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rh(e[1]);return t&&JSON.parse(t)},$l=()=>{try{return Iy()||ky()||Ty()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Cy=e=>{var t,n;return(n=(t=$l())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ry=()=>{var e;return(e=$l())===null||e===void 0?void 0:e.config},Ph=e=>{var t;return(t=$l())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ny(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function Nh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function xy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oy(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Oh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Ay(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="FirebaseError";class Je extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Dy,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Ly(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Je(i,a,r)}}function Ly(e,t){return e.replace(My,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const My=/\{\$([^}]+)}/g;function Uy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(wc(o)&&wc(s)){if(!Vr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Fy(e,t){const n=new zy(e,t);return n.subscribe.bind(n)}class zy{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$y(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ks),i.error===void 0&&(i.error=ks),i.complete===void 0&&(i.complete=ks);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $y(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ks(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=1e3,By=2,by=4*60*60*1e3,Vy=.5;function _c(e,t=jy,n=By){const r=t*Math.pow(n,e),i=Math.round(Vy*r*(Math.random()-.5)*2);return Math.min(by,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return e&&e._delegate?e._delegate:e}class qe{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Py;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ky(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hy(e){return e===Gt?void 0:e}function Ky(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wy(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(F||(F={}));const Qy={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},qy=F.INFO,Yy={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Jy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Yy[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jl{constructor(t){this.name=t,this._logLevel=qy,this._logHandler=Jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Xy=(e,t)=>t.some(n=>e instanceof n);let Sc,Ec;function Zy(){return Sc||(Sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e0(){return Ec||(Ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ah=new WeakMap,La=new WeakMap,Dh=new WeakMap,Ts=new WeakMap,Bl=new WeakMap;function t0(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Mt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Ah.set(n,e)}).catch(()=>{}),Bl.set(t,e),t}function n0(e){if(La.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});La.set(e,t)}let Ma={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return La.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Dh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function r0(e){Ma=e(Ma)}function i0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cs(this),t,...n);return Dh.set(r,t.sort?t.sort():[t]),Mt(r)}:e0().includes(e)?function(...t){return e.apply(Cs(this),t),Mt(Ah.get(this))}:function(...t){return Mt(e.apply(Cs(this),t))}}function o0(e){return typeof e=="function"?i0(e):(e instanceof IDBTransaction&&n0(e),Xy(e,Zy())?new Proxy(e,Ma):e)}function Mt(e){if(e instanceof IDBRequest)return t0(e);if(Ts.has(e))return Ts.get(e);const t=o0(e);return t!==e&&(Ts.set(e,t),Bl.set(t,e)),t}const Cs=e=>Bl.get(e);function s0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Mt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Mt(s.result),l.oldVersion,l.newVersion,Mt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const a0=["get","getKey","getAll","getAllKeys","count"],l0=["put","add","delete","clear"],Rs=new Map;function Ic(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rs.get(t))return Rs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=l0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||a0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Rs.set(t,o),o}r0(e=>({...e,get:(t,n,r)=>Ic(t,n)||e.get(t,n,r),has:(t,n)=>!!Ic(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function c0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ua="@firebase/app",kc="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new jl("@firebase/app"),d0="@firebase/app-compat",f0="@firebase/analytics-compat",h0="@firebase/analytics",p0="@firebase/app-check-compat",m0="@firebase/app-check",g0="@firebase/auth",v0="@firebase/auth-compat",y0="@firebase/database",w0="@firebase/database-compat",_0="@firebase/functions",S0="@firebase/functions-compat",E0="@firebase/installations",I0="@firebase/installations-compat",k0="@firebase/messaging",T0="@firebase/messaging-compat",C0="@firebase/performance",R0="@firebase/performance-compat",P0="@firebase/remote-config",N0="@firebase/remote-config-compat",x0="@firebase/storage",O0="@firebase/storage-compat",A0="@firebase/firestore",D0="@firebase/firestore-compat",L0="firebase",M0="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="[DEFAULT]",U0={[Ua]:"fire-core",[d0]:"fire-core-compat",[h0]:"fire-analytics",[f0]:"fire-analytics-compat",[m0]:"fire-app-check",[p0]:"fire-app-check-compat",[g0]:"fire-auth",[v0]:"fire-auth-compat",[y0]:"fire-rtdb",[w0]:"fire-rtdb-compat",[_0]:"fire-fn",[S0]:"fire-fn-compat",[E0]:"fire-iid",[I0]:"fire-iid-compat",[k0]:"fire-fcm",[T0]:"fire-fcm-compat",[C0]:"fire-perf",[R0]:"fire-perf-compat",[P0]:"fire-rc",[N0]:"fire-rc-compat",[x0]:"fire-gcs",[O0]:"fire-gcs-compat",[A0]:"fire-fst",[D0]:"fire-fst-compat","fire-js":"fire-js",[L0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map,za=new Map;function F0(e,t){try{e.container.addComponent(t)}catch(n){ln.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ct(e){const t=e.name;if(za.has(t))return ln.debug(`There were multiple attempts to register component ${t}.`),!1;za.set(t,e);for(const n of ho.values())F0(n,e);return!0}function Jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new mn("app","Firebase",z0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=M0;function Lh(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Fa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=Ry()),!n)throw Ut.create("no-options");const o=ho.get(i);if(o){if(Vr(n,o.options)&&Vr(r,o.config))return o;throw Ut.create("duplicate-app",{appName:i})}const s=new Gy(i);for(const l of za.values())s.addComponent(l);const a=new $0(n,r,s);return ho.set(i,a),a}function Mh(e=Fa){const t=ho.get(e);if(!t&&e===Fa)return Lh();if(!t)throw Ut.create("no-app",{appName:e});return t}function Ke(e,t,n){var r;let i=(r=U0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}ct(new qe(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebase-heartbeat-database",B0=1,Wr="firebase-heartbeat-store";let Ps=null;function Uh(){return Ps||(Ps=s0(j0,B0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wr)}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),Ps}async function b0(e){try{return(await Uh()).transaction(Wr).objectStore(Wr).get(Fh(e))}catch(t){if(t instanceof Je)ln.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ln.warn(n.message)}}}async function Tc(e,t){try{const r=(await Uh()).transaction(Wr,"readwrite");return await r.objectStore(Wr).put(t,Fh(e)),r.done}catch(n){if(n instanceof Je)ln.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function Fh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=1024,W0=30*24*60*60*1e3;class H0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new G0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=W0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cc(),{heartbeatsToSend:n,unsentEntries:r}=K0(this._heartbeatsCache.heartbeats),i=Ch(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cc(){return new Date().toISOString().substring(0,10)}function K0(e,t=V0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Rc(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class G0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?Oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await b0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rc(e){return Ch(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(e){ct(new qe("platform-logger",t=>new u0(t),"PRIVATE")),ct(new qe("heartbeat",t=>new H0(t),"PRIVATE")),Ke(Ua,kc,e),Ke(Ua,kc,"esm2017"),Ke("fire-js","")}Q0("");function bl(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function zh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q0=zh,$h=new mn("auth","Firebase",zh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new jl("@firebase/auth");function Ui(e,...t){Pc.logLevel<=F.ERROR&&Pc.error(`Auth (${jo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,...t){throw Vl(e,...t)}function Ge(e,...t){return Vl(e,...t)}function jh(e,t,n){const r=Object.assign(Object.assign({},q0()),{[t]:n});return new mn("auth","Firebase",r).create(t,{appName:e.name})}function Y0(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ye(e,"argument-error"),jh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return $h.create(e,...t)}function N(e,t,...n){if(!e)throw Vl(t,...n)}function rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ui(t),new Error(t)}function dt(e,t){e||rt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Map;function it(e){dt(e instanceof Function,"Expected a class definition");let t=Nc.get(e);return t?(dt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Nc.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(e,t){const n=Jn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vr(o,t!=null?t:{}))return i;Ye(i,"already-initialized")}return n.initialize({options:t})}function X0(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Z0(){return xc()==="http:"||xc()==="https:"}function xc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z0()||Nh()||"connection"in navigator)?navigator.onLine:!0}function tw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,n){this.shortDelay=t,this.longDelay=n,dt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ny()||xy()}get(){return ew()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(e,t){dt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new ei(3e4,6e4);function bh(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Bo(e,t,n,r,i={}){return Vh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Zr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Bh.fetch()(Hh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Vh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},nw),t);try{const i=new iw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Ii(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Ii(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Ii(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jh(e,f,u);Ye(e,f)}}catch(i){if(i instanceof Je)throw i;Ye(e,"network-request-failed")}}async function Wh(e,t,n,r,i={}){const o=await Bo(e,t,n,r,i);return"mfaPendingCredential"in o&&Ye(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Hh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Wl(e.config,i):`${e.config.apiScheme}://${i}`}class iw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),rw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ii(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(e,t){return Bo(e,"POST","/v1/accounts:delete",t)}async function sw(e,t){return Bo(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function aw(e,t=!1){const n=ht(e),r=await n.getIdToken(t),i=Hl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ir(Ns(i.auth_time)),issuedAtTime:Ir(Ns(i.iat)),expirationTime:Ir(Ns(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ns(e){return Number(e)*1e3}function Hl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rh(n);return i?JSON.parse(i):(Ui("Failed to decode base64 JWT payload"),null)}catch(i){return Ui("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lw(e){const t=Hl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Je&&uw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function uw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Hr(e,sw(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?hw(o.providerUserInfo):[],a=fw(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Kh(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function dw(e){const t=ht(e);await po(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function hw(e){return e.map(t=>{var{providerId:n}=t,r=bl(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(e,t){const n=await Vh(e,{},async()=>{const r=Zr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Hh(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):lw(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await pw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Kr;return r&&(N(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=bl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Kh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Hr(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return aw(this,t)}reload(){return dw(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Hr(this,ow(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:h,emailVerified:v,isAnonymous:S,providerData:k,stsTokenManager:T}=n;N(h&&T,t,"internal-error");const C=Kr.fromJSON(this.name,T);N(typeof h=="string",t,"internal-error"),mt(p,t.name),mt(m,t.name),N(typeof v=="boolean",t,"internal-error"),N(typeof S=="boolean",t,"internal-error"),mt(g,t.name),mt(_,t.name),mt(y,t.name),mt(R,t.name),mt(d,t.name),mt(c,t.name);const $=new tn({uid:h,auth:t,email:m,emailVerified:v,displayName:p,isAnonymous:S,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:C,createdAt:d,lastLoginAt:c});return k&&Array.isArray(k)&&($.providerData=k.map(D=>Object.assign({},D))),R&&($._redirectEventId=R),$}static async _fromIdTokenResponse(t,n,r=!1){const i=new Kr;i.updateFromServerResponse(n);const o=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await po(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Gh.type="NONE";const Oc=Gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e,t,n){return`firebase:${e}:${t}:${n}`}class Un{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Fi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Fi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Un(it(Oc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||it(Oc);const s=Fi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const p=tn._fromJSON(t,f);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Un(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Un(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xh(t))return"Blackberry";if(Zh(t))return"Webos";if(Kl(t))return"Safari";if((t.includes("chrome/")||qh(t))&&!t.includes("edge/"))return"Chrome";if(Jh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qh(e=ue()){return/firefox\//i.test(e)}function Kl(e=ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function qh(e=ue()){return/crios\//i.test(e)}function Yh(e=ue()){return/iemobile/i.test(e)}function Jh(e=ue()){return/android/i.test(e)}function Xh(e=ue()){return/blackberry/i.test(e)}function Zh(e=ue()){return/webos/i.test(e)}function bo(e=ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function mw(e=ue()){var t;return bo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function gw(){return Oy()&&document.documentMode===10}function ep(e=ue()){return bo(e)||Jh(e)||Zh(e)||Xh(e)||/windows phone/i.test(e)||Yh(e)}function vw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e,t=[]){let n;switch(e){case"Browser":n=Ac(ue());break;case"Worker":n=`${Ac(ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${jo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dc(this),this.idTokenSubscription=new Dc(this),this.beforeStateQueue=new yw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await po(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ht(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new mn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&it(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ti(e){return ht(e)}class Dc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Fy(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _w(e,t,n){const r=ti(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=np(t),{host:s,port:a}=Sw(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ew()}function np(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Sw(e){const t=np(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Lc(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Lc(s)}}}function Lc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ew(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(t){return rt("not implemented")}_linkToIdToken(t,n){return rt("not implemented")}_getReauthenticationResolver(t){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(e,t){return Wh(e,"POST","/v1/accounts:signInWithIdp",bh(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="http://localhost";class un extends rp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new un(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=bl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new un(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Fn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fn(t,n)}buildRequest(){const t={requestUri:Iw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Zr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Gl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ni{constructor(){super("facebook.com")}static credential(t){return un._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return un._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return et.credentialFromTaggedObject(t)}static credentialFromError(t){return et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return et.credential(n,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends ni{constructor(){super("github.com")}static credential(t){return un._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ni{constructor(){super("twitter.com")}static credential(t,n){return un._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(e,t){return Wh(e,"POST","/v1/accounts:signUp",bh(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tn._fromIdTokenResponse(t,r,i),s=Mc(r);return new cn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Mc(r);return new cn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Mc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Je{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new mo(t,n,r,i)}}function ip(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(e,o,t,r):o})}async function Tw(e,t,n=!1){const r=await Hr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Hr(e,ip(r,i,t,e),n);N(o.idToken,r,"internal-error");const s=Hl(o.idToken);N(s,r,"internal-error");const{sub:a}=s;return N(e.uid===a,r,"user-mismatch"),cn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(e,t,n=!1){const r="signIn",i=await ip(e,r,t),o=await cn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Pw(e,t,n){const r=ti(e),i=await kw(r,{returnSecureToken:!0,email:t,password:n}),o=await cn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function Nw(e,t,n,r){return ht(e).onIdTokenChanged(t,n,r)}function xw(e,t,n){return ht(e).beforeAuthStateChanged(t,n)}function Ow(e){return ht(e).signOut()}const go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){const e=ue();return Kl(e)||bo(e)}const Dw=1e3,Lw=10;class sp extends op{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Aw()&&vw(),this.fallbackToPolling=ep(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);gw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Lw):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}sp.type="LOCAL";const Mw=sp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends op{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ap.type="SESSION";const lp=ap;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Vo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Uw(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Ql("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function zw(e){Qe().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function $w(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jw(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Bw(){return up()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="firebaseLocalStorageDb",bw=1,vo="firebaseLocalStorage",dp="fbase_key";class ri{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wo(e,t){return e.transaction([vo],t?"readwrite":"readonly").objectStore(vo)}function Vw(){const e=indexedDB.deleteDatabase(cp);return new ri(e).toPromise()}function ja(){const e=indexedDB.open(cp,bw);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vo,{keyPath:dp})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vo)?t(r):(r.close(),await Vw(),t(await ja()))})})}async function Uc(e,t,n){const r=Wo(e,!0).put({[dp]:t,value:n});return new ri(r).toPromise()}async function Ww(e,t){const n=Wo(e,!1).get(t),r=await new ri(n).toPromise();return r===void 0?null:r.value}function Fc(e,t){const n=Wo(e,!0).delete(t);return new ri(n).toPromise()}const Hw=800,Kw=3;class fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Kw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(Bw()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $w(),!this.activeServiceWorker)return;this.sender=new Fw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||jw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ja();return await Uc(t,go,"1"),await Fc(t,go),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Ww(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Wo(i,!1).getAll();return new ri(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fp.type="LOCAL";const Gw=fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function qw(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Ge("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Qw().appendChild(r)})}function Yw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(e,t){return t?it(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends rp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Jw(e){return Rw(e.auth,new ql(e),e.bypassAuthState)}function Xw(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Cw(n,new ql(e),e.bypassAuthState)}async function Zw(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Tw(n,new ql(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Jw;case"linkViaPopup":case"linkViaRedirect":return Zw;case"reauthViaPopup":case"reauthViaRedirect":return Xw;default:Ye(this.auth,"internal-error")}}resolve(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new ei(2e3,1e4);async function t1(e,t,n){const r=ti(e);Y0(e,t,Gl);const i=hp(r,n);return new Jt(r,"signInViaPopup",t,i).executeNotNull()}class Jt extends pp{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const t=Ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,e1.get())};t()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="pendingRedirect",zi=new Map;class r1 extends pp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=zi.get(this.auth._key());if(!t){try{const r=await i1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}zi.set(this.auth._key(),t)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function i1(e,t){const n=a1(t),r=s1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function o1(e,t){zi.set(e._key(),t)}function s1(e){return it(e._redirectPersistence)}function a1(e){return Fi(n1,e.config.apiKey,e.name)}async function l1(e,t,n=!1){const r=ti(e),i=hp(r,t),s=await new r1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=10*60*1e3;class c1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!d1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!mp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=u1&&this.cachedEventUids.clear(),this.cachedEventUids.has(zc(t))}saveEventToCache(t){this.cachedEventUids.add(zc(t)),this.lastProcessedEventTime=Date.now()}}function zc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function mp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function d1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(e,t={}){return Bo(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p1=/^https?/;async function m1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await f1(e);for(const n of t)try{if(g1(n))return}catch{}Ye(e,"unauthorized-domain")}function g1(e){const t=$a(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!p1.test(n))return!1;if(h1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new ei(3e4,6e4);function $c(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function y1(e){return new Promise((t,n)=>{var r,i,o;function s(){$c(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$c(),n(Ge(e,"network-request-failed"))},timeout:v1.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Qe().gapi)===null||o===void 0)&&o.load)s();else{const a=Yw("iframefcb");return Qe()[a]=()=>{gapi.load?s():n(Ge(e,"network-request-failed"))},qw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw $i=null,t})}let $i=null;function w1(e){return $i=$i||y1(e),$i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=new ei(5e3,15e3),S1="__/auth/iframe",E1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T1(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wl(t,E1):`https://${e.config.authDomain}/${S1}`,r={apiKey:t.apiKey,appName:e.name,v:jo},i=k1.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Zr(r).slice(1)}`}async function C1(e){const t=await w1(e),n=Qe().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:T1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Ge(e,"network-request-failed"),a=Qe().setTimeout(()=>{o(s)},_1.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P1=500,N1=600,x1="_blank",O1="http://localhost";class jc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A1(e,t,n,r=P1,i=N1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},R1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ue().toLowerCase();n&&(a=qh(u)?x1:n),Qh(u)&&(t=t||O1,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if(mw(u)&&a!=="_self")return D1(t||"",a),new jc(null);const p=window.open(t||"",a,f);N(p,e,"popup-blocked");try{p.focus()}catch{}return new jc(p)}function D1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="__/auth/handler",M1="emulator/auth/handler";function Bc(e,t,n,r,i,o){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:jo,eventId:i};if(t instanceof Gl){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Uy(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof ni){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${U1(e)}?${Zr(a).slice(1)}`}function U1({config:e}){return e.emulator?Wl(e,M1):`https://${e.authDomain}/${L1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="webStorageSupport";class F1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lp,this._completeRedirectFn=l1,this._overrideRedirectResult=o1}async _openPopup(t,n,r,i){var o;dt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Bc(t,n,r,$a(),i);return A1(t,s,Ql())}async _openRedirect(t,n,r,i){return await this._originValidation(t),zw(Bc(t,n,r,$a(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await C1(t),r=new c1(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xs,{type:xs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[xs];s!==void 0&&n(!!s),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ep()||Kl()||bo()}}const z1=F1;var bc="@firebase/auth",Vc="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function B1(e){ct(new qe("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tp(e)},f=new ww(a,l,u);return X0(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ct(new qe("auth-internal",t=>{const n=ti(t.getProvider("auth").getImmediate());return(r=>new $1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(bc,Vc,j1(e)),Ke(bc,Vc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=5*60,V1=Ph("authIdTokenMaxAge")||b1;let Wc=null;const W1=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>V1)return;const i=n==null?void 0:n.token;Wc!==i&&(Wc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function H1(e=Mh()){const t=Jn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=J0(e,{popupRedirectResolver:z1,persistence:[Gw,Mw,lp]}),r=Ph("authTokenSyncURL");if(r){const o=W1(r);xw(n,o,()=>o(n.currentUser)),Nw(n,s=>o(s))}const i=Cy("auth");return i&&_w(n,`http://${i}`),n}B1("Browser");var K1="firebase",G1="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(K1,G1,"app");const Q1=(e,t)=>t.some(n=>e instanceof n);let Hc,Kc;function q1(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y1(){return Kc||(Kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,Ba=new WeakMap,vp=new WeakMap,Os=new WeakMap,Yl=new WeakMap;function J1(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Ft(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&gp.set(n,e)}).catch(()=>{}),Yl.set(t,e),t}function X1(e){if(Ba.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Ba.set(e,t)}let ba={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ba.get(e);if(t==="objectStoreNames")return e.objectStoreNames||vp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Z1(e){ba=e(ba)}function e_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(As(this),t,...n);return vp.set(r,t.sort?t.sort():[t]),Ft(r)}:Y1().includes(e)?function(...t){return e.apply(As(this),t),Ft(gp.get(this))}:function(...t){return Ft(e.apply(As(this),t))}}function t_(e){return typeof e=="function"?e_(e):(e instanceof IDBTransaction&&X1(e),Q1(e,q1())?new Proxy(e,ba):e)}function Ft(e){if(e instanceof IDBRequest)return J1(e);if(Os.has(e))return Os.get(e);const t=t_(e);return t!==e&&(Os.set(e,t),Yl.set(t,e)),t}const As=e=>Yl.get(e);function n_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Ft(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ft(s.result),l.oldVersion,l.newVersion,Ft(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const r_=["get","getKey","getAll","getAllKeys","count"],i_=["put","add","delete","clear"],Ds=new Map;function Gc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ds.get(t))return Ds.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=i_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||r_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ds.set(t,o),o}Z1(e=>({...e,get:(t,n,r)=>Gc(t,n)||e.get(t,n,r),has:(t,n)=>!!Gc(t,n)||e.has(t,n)}));const yp="@firebase/installations",Jl="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=1e4,_p=`w:${Jl}`,Sp="FIS_v2",o_="https://firebaseinstallations.googleapis.com/v1",s_=60*60*1e3,a_="installations",l_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},dn=new mn(a_,l_,u_);function Ep(e){return e instanceof Je&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip({projectId:e}){return`${o_}/projects/${e}/installations`}function kp(e){return{token:e.token,requestStatus:2,expiresIn:d_(e.expiresIn),creationTime:Date.now()}}async function Tp(e,t){const r=(await t.json()).error;return dn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function c_(e,{refreshToken:t}){const n=Cp(e);return n.append("Authorization",f_(t)),n}async function Rp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function d_(e){return Number(e.replace("s","000"))}function f_(e){return`${Sp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Ip(e),i=Cp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Sp,appId:e.appId,sdkVersion:_p},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Rp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:kp(u.authToken)}}else throw await Tp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=/^[cdef][\w-]{21}$/,Va="";function g_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=v_(e);return m_.test(n)?n:Va}catch{return Va}}function v_(e){return p_(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=new Map;function xp(e,t){const n=Ho(e);Op(n,t),y_(n,t)}function Op(e,t){const n=Np.get(e);if(!!n)for(const r of n)r(t)}function y_(e,t){const n=w_();n&&n.postMessage({key:e,fid:t}),__()}let Xt=null;function w_(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=e=>{Op(e.data.key,e.data.fid)}),Xt}function __(){Np.size===0&&Xt&&(Xt.close(),Xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebase-installations-database",E_=1,fn="firebase-installations-store";let Ls=null;function Xl(){return Ls||(Ls=n_(S_,E_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fn)}}})),Ls}async function yo(e,t){const n=Ho(e),i=(await Xl()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&xp(e,t.fid),t}async function Ap(e){const t=Ho(e),r=(await Xl()).transaction(fn,"readwrite");await r.objectStore(fn).delete(t),await r.done}async function Ko(e,t){const n=Ho(e),i=(await Xl()).transaction(fn,"readwrite"),o=i.objectStore(fn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&xp(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(e){let t;const n=await Ko(e.appConfig,r=>{const i=I_(r),o=k_(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Va?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function I_(e){const t=e||{fid:g_(),registrationStatus:0};return Dp(t)}function k_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=T_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:C_(e)}:{installationEntry:t}}async function T_(e,t){try{const n=await h_(e,t);return yo(e.appConfig,n)}catch(n){throw Ep(n)&&n.customData.serverCode===409?await Ap(e.appConfig):await yo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function C_(e){let t=await Qc(e.appConfig);for(;t.registrationStatus===1;)await Pp(100),t=await Qc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zl(e);return r||n}return t}function Qc(e){return Ko(e,t=>{if(!t)throw dn.create("installation-not-found");return Dp(t)})}function Dp(e){return R_(e)?{fid:e.fid,registrationStatus:0}:e}function R_(e){return e.registrationStatus===1&&e.registrationTime+wp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_({appConfig:e,heartbeatServiceProvider:t},n){const r=N_(e,n),i=c_(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:_p,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Rp(()=>fetch(r,a));if(l.ok){const u=await l.json();return kp(u)}else throw await Tp("Generate Auth Token",l)}function N_(e,{fid:t}){return`${Ip(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(e,t=!1){let n;const r=await Ko(e.appConfig,o=>{if(!Lp(o))throw dn.create("not-registered");const s=o.authToken;if(!t&&A_(s))return o;if(s.requestStatus===1)return n=x_(e,t),o;{if(!navigator.onLine)throw dn.create("app-offline");const a=L_(o);return n=O_(e,a),a}});return n?await n:r.authToken}async function x_(e,t){let n=await qc(e.appConfig);for(;n.authToken.requestStatus===1;)await Pp(100),n=await qc(e.appConfig);const r=n.authToken;return r.requestStatus===0?eu(e,t):r}function qc(e){return Ko(e,t=>{if(!Lp(t))throw dn.create("not-registered");const n=t.authToken;return M_(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function O_(e,t){try{const n=await P_(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await yo(e.appConfig,r),n}catch(n){if(Ep(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ap(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await yo(e.appConfig,r)}throw n}}function Lp(e){return e!==void 0&&e.registrationStatus===2}function A_(e){return e.requestStatus===2&&!D_(e)}function D_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+s_}function L_(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function M_(e){return e.requestStatus===1&&e.requestTime+wp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(e){const t=e,{installationEntry:n,registrationPromise:r}=await Zl(t);return r?r.catch(console.error):eu(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(e,t=!1){const n=e;return await z_(n),(await eu(n,t)).token}async function z_(e){const{registrationPromise:t}=await Zl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(e){if(!e||!e.options)throw Ms("App Configuration");if(!e.name)throw Ms("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ms(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ms(e){return dn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="installations",j_="installations-internal",B_=e=>{const t=e.getProvider("app").getImmediate(),n=$_(t),r=Jn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},b_=e=>{const t=e.getProvider("app").getImmediate(),n=Jn(t,Mp).getImmediate();return{getId:()=>U_(n),getToken:i=>F_(n,i)}};function V_(){ct(new qe(Mp,B_,"PUBLIC")),ct(new qe(j_,b_,"PRIVATE"))}V_();Ke(yp,Jl);Ke(yp,Jl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="analytics",W_="firebase_id",H_="origin",K_=60*1e3,G_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Up="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new jl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Q_(e,t){const n=document.createElement("script");n.src=`${Up}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function q_(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Y_(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Fp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Ee.error(a)}e("config",i,o)}async function J_(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Fp(n);for(const l of s){const u=a.find(p=>p.measurementId===l),f=u&&t[u.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Ee.error(o)}}function X_(e,t,n,r){async function i(o,s,a){try{o==="event"?await J_(e,t,n,s,a):o==="config"?await Y_(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Ee.error(l)}}return i}function Z_(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=X_(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function eS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Up)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},xe=new mn("analytics","Analytics",tS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=30,rS=1e3;class iS{constructor(t={},n=rS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zp=new iS;function oS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function sS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:oS(r)},o=G_.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function aS(e,t=zp,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw xe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw xe.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cS;return setTimeout(async()=>{a.abort()},n!==void 0?n:K_),$p({appId:r,apiKey:i,measurementId:o},s,a,t)}async function $p(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=zp){var o;const{appId:s,measurementId:a}=e;try{await lS(r,t)}catch(l){if(a)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await sS(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!uS(u)){if(i.deleteThrottleMetadata(s),a)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?_c(n,i.intervalMillis,nS):_c(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),Ee.debug(`Calling attemptFetch again in ${f} millis`),$p(e,p,r,i)}}function lS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(xe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function uS(e){if(!(e instanceof Je)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class cS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function dS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(){if(xh())try{await Oh()}catch(e){return Ee.warn(xe.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ee.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hS(e,t,n,r,i,o,s){var a;const l=aS(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ee.error(g)),t.push(l);const u=fS().then(g=>{if(g)return r.getId()}),[f,p]=await Promise.all([l,u]);eS(o)||Q_(o,f.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[H_]="firebase",m.update=!0,p!=null&&(m[W_]=p),i("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(t){this.app=t}_delete(){return delete kr[this.app.options.appId],Promise.resolve()}}let kr={},Yc=[];const Jc={};let Us="dataLayer",mS="gtag",Xc,jp,Zc=!1;function gS(){const e=[];if(Nh()&&e.push("This is a browser extension environment."),Ay()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=xe.create("invalid-analytics-context",{errorInfo:t});Ee.warn(n.message)}}function vS(e,t,n){gS();const r=e.options.appId;if(!r)throw xe.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(kr[r]!=null)throw xe.create("already-exists",{id:r});if(!Zc){q_(Us);const{wrappedGtag:o,gtagCore:s}=Z_(kr,Yc,Jc,Us,mS);jp=o,Xc=s,Zc=!0}return kr[r]=hS(e,Yc,Jc,t,Xc,Us,n),new pS(e)}function yS(e=Mh()){e=ht(e);const t=Jn(e,wo);return t.isInitialized()?t.getImmediate():wS(e)}function wS(e,t={}){const n=Jn(e,wo);if(n.isInitialized()){const i=n.getImmediate();if(Vr(t,n.getOptions()))return i;throw xe.create("already-initialized")}return n.initialize({options:t})}function _S(e,t,n,r){e=ht(e),dS(jp,kr[e.app.options.appId],t,n,r).catch(i=>Ee.error(i))}const ed="@firebase/analytics",td="0.9.3";function SS(){ct(new qe(wo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return vS(r,i,n)},"PUBLIC")),ct(new qe("analytics-internal",e,"PRIVATE")),Ke(ed,td),Ke(ed,td,"esm2017");function e(t){try{const n=t.getProvider(wo).getImmediate();return{logEvent:(r,i,o)=>_S(n,r,i,o)}}catch(n){throw xe.create("interop-component-reg-failed",{reason:n})}}}SS();const ES={apiKey:"AIzaSyCjhI_PqhjWprcmA0eI46_sd12mDYuj_Xo",authDomain:"stocktradingapp-65dbe.firebaseapp.com",projectId:"stocktradingapp-65dbe",storageBucket:"stocktradingapp-65dbe.appspot.com",messagingSenderId:"404695737169",appId:"1:404695737169:web:bbf5ff1c941a7d2dab2970",measurementId:"G-N1VX6ZKSY5"},Bp=Lh(ES);yS(Bp);const vn=H1(Bp),IS=new et,kS=()=>{var a;const[e,t]=x.exports.useState(""),[n,r]=x.exports.useState("");return console.log((a=vn==null?void 0:vn.currentUser)==null?void 0:a.email),Hn("div",{children:[P("input",{placeholder:"Email...",onChange:l=>t(l.target.value)}),P("input",{placeholder:"Password...",type:"password",onChange:l=>r(l.target.value)}),P("button",{onClick:async()=>{try{await Pw(vn,e,n)}catch(l){console.error(l)}},children:"Sign In"}),P("button",{onClick:async()=>{try{await t1(vn,IS)}catch(l){console.error(l)}},children:"Sign In With Google"}),P("button",{onClick:async()=>{try{await Ow(vn)}catch(l){console.error(l)}},children:"Logout"})]})};function TS(){return P("div",{children:P(kS,{})})}function CS(){return P("div",{children:"Account"})}function RS(){return P("div",{className:"footer",children:P("p",{children:"This is a footer"})})}function PS(){return P("div",{children:Hn(py,{children:[P(vy,{}),Hn(uy,{children:[P(hr,{exact:!0,path:"/about",element:P(yy,{})}),P(hr,{exact:!0,path:"/login",element:P(TS,{})}),P(hr,{exact:!0,path:"/portfolio",element:P(wy,{})}),P(hr,{exact:!0,path:"/account",element:P(CS,{})})]}),P(RS,{})]})})}const NS="modulepreload",xS=function(e){return"/"+e},nd={},OS=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=xS(o),o in nd)return;nd[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const p=i[f];if(p.href===o&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":NS,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},AS=e=>{e&&e instanceof Function&&OS(()=>import("./web-vitals.67dce932.js"),[]).then(({getCLS:t,getFID:n,getFCP:r,getLCP:i,getTTFB:o})=>{t(e),n(e),r(e),i(e),o(e)})},DS=zs.createRoot(document.getElementById("root"));DS.render(P(cd.StrictMode,{children:P(PS,{})}));AS();
