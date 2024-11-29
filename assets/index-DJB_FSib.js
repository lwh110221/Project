(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ms(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ce={},jt=[],Ze=()=>{},Hi=()=>!1,$n=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Is=e=>e.startsWith("onUpdate:"),ve=Object.assign,Ls=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qi=Object.prototype.hasOwnProperty,ne=(e,t)=>Qi.call(e,t),V=Array.isArray,Ht=e=>Nn(e)==="[object Map]",oo=e=>Nn(e)==="[object Set]",q=e=>typeof e=="function",he=e=>typeof e=="string",_t=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",io=e=>(ue(e)||q(e))&&q(e.then)&&q(e.catch),lo=Object.prototype.toString,Nn=e=>lo.call(e),Vi=e=>Nn(e).slice(8,-1),co=e=>Nn(e)==="[object Object]",$s=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xt=Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zi=/-(\w)/g,je=Fn(e=>e.replace(zi,(t,n)=>n?n.toUpperCase():"")),Ui=/\B([A-Z])/g,Tt=Fn(e=>e.replace(Ui,"-$1").toLowerCase()),jn=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zn=Fn(e=>e?`on${jn(e)}`:""),vt=(e,t)=>!Object.is(e,t),es=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},uo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Ki=e=>{const t=parseFloat(e);return isNaN(t)?e:t},qi=e=>{const t=he(e)?Number(e):NaN;return isNaN(t)?e:t};let or;const Hn=()=>or||(or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qn(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=he(s)?Yi(s):Qn(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(he(e)||ue(e))return e}const Wi=/;(?![^(]*\))/g,Gi=/:([^]+)/,Ji=/\/\*[^]*?\*\//g;function Yi(e){const t={};return e.replace(Ji,"").split(Wi).forEach(n=>{if(n){const s=n.split(Gi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ot(e){let t="";if(he(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const s=ot(e[n]);s&&(t+=s+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zi=Ms(Xi);function ao(e){return!!e||e===""}const fo=e=>!!(e&&e.__v_isRef===!0),Ae=e=>he(e)?e:e==null?"":V(e)||ue(e)&&(e.toString===lo||!q(e.toString))?fo(e)?Ae(e.value):JSON.stringify(e,ho,2):String(e),ho=(e,t)=>fo(t)?ho(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[ts(s,o)+" =>"]=r,n),{})}:oo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ts(n))}:_t(t)?ts(t):ue(t)&&!V(t)&&!co(t)?String(t):t,ts=(e,t="")=>{var n;return _t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function go(e){return new po(e)}function mo(){return Se}function el(e,t=!1){Se&&Se.cleanups.push(e)}let le;const ns=new WeakSet;class vo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ns.has(this)&&(ns.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ir(this),_o(this);const t=le,n=ze;le=this,ze=!0;try{return this.fn()}finally{xo(this),le=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)js(t);this.deps=this.depsTail=void 0,ir(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ns.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vs(this)&&this.run()}get dirty(){return vs(this)}}let bo=0,Zt,en;function yo(e,t=!1){if(e.flags|=8,t){e.next=en,en=e;return}e.next=Zt,Zt=e}function Ns(){bo++}function Fs(){if(--bo>0)return;if(en){let t=en;for(en=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Zt;){let t=Zt;for(Zt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function _o(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xo(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),js(s),tl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function vs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Co(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Co(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===cn))return;e.globalVersion=cn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!vs(e)){e.flags&=-3;return}const n=le,s=ze;le=e,ze=!0;try{_o(e);const r=e.fn(e._value);(t.version===0||vt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{le=n,ze=s,xo(e),e.flags&=-3}}function js(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)js(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function tl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const wo=[];function xt(){wo.push(ze),ze=!1}function Ct(){const e=wo.pop();ze=e===void 0?!0:e}function ir(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let cn=0;class nl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!ze||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new nl(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,Ao(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(t){this.version++,cn++,this.notify(t)}notify(t){Ns();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fs()}}}function Ao(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ao(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Rn=new WeakMap,Dt=Symbol(""),bs=Symbol(""),un=Symbol("");function _e(e,t,n){if(ze&&le){let s=Rn.get(e);s||Rn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new Hs),r.map=s,r.key=n),r.track()}}function it(e,t,n,s,r,o){const i=Rn.get(e);if(!i){cn++;return}const c=l=>{l&&l.trigger()};if(Ns(),t==="clear")i.forEach(c);else{const l=V(e),f=l&&$s(n);if(l&&n==="length"){const u=Number(s);i.forEach((d,p)=>{(p==="length"||p===un||!_t(p)&&p>=u)&&c(d)})}else switch((n!==void 0||i.has(void 0))&&c(i.get(n)),f&&c(i.get(un)),t){case"add":l?f&&c(i.get("length")):(c(i.get(Dt)),Ht(e)&&c(i.get(bs)));break;case"delete":l||(c(i.get(Dt)),Ht(e)&&c(i.get(bs)));break;case"set":Ht(e)&&c(i.get(Dt));break}}Fs()}function sl(e,t){const n=Rn.get(e);return n&&n.get(t)}function Lt(e){const t=X(e);return t===e?t:(_e(t,"iterate",un),Fe(e)?t:t.map(xe))}function Vn(e){return _e(e=X(e),"iterate",un),e}const rl={__proto__:null,[Symbol.iterator](){return ss(this,Symbol.iterator,xe)},concat(...e){return Lt(this).concat(...e.map(t=>V(t)?Lt(t):t))},entries(){return ss(this,"entries",e=>(e[1]=xe(e[1]),e))},every(e,t){return tt(this,"every",e,t,void 0,arguments)},filter(e,t){return tt(this,"filter",e,t,n=>n.map(xe),arguments)},find(e,t){return tt(this,"find",e,t,xe,arguments)},findIndex(e,t){return tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tt(this,"findLast",e,t,xe,arguments)},findLastIndex(e,t){return tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return rs(this,"includes",e)},indexOf(...e){return rs(this,"indexOf",e)},join(e){return Lt(this).join(e)},lastIndexOf(...e){return rs(this,"lastIndexOf",e)},map(e,t){return tt(this,"map",e,t,void 0,arguments)},pop(){return Wt(this,"pop")},push(...e){return Wt(this,"push",e)},reduce(e,...t){return lr(this,"reduce",e,t)},reduceRight(e,...t){return lr(this,"reduceRight",e,t)},shift(){return Wt(this,"shift")},some(e,t){return tt(this,"some",e,t,void 0,arguments)},splice(...e){return Wt(this,"splice",e)},toReversed(){return Lt(this).toReversed()},toSorted(e){return Lt(this).toSorted(e)},toSpliced(...e){return Lt(this).toSpliced(...e)},unshift(...e){return Wt(this,"unshift",e)},values(){return ss(this,"values",xe)}};function ss(e,t,n){const s=Vn(e),r=s[t]();return s!==e&&!Fe(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const ol=Array.prototype;function tt(e,t,n,s,r,o){const i=Vn(e),c=i!==e&&!Fe(e),l=i[t];if(l!==ol[t]){const d=l.apply(e,o);return c?xe(d):d}let f=n;i!==e&&(c?f=function(d,p){return n.call(this,xe(d),p,e)}:n.length>2&&(f=function(d,p){return n.call(this,d,p,e)}));const u=l.call(i,f,s);return c&&r?r(u):u}function lr(e,t,n,s){const r=Vn(e);let o=n;return r!==e&&(Fe(e)?n.length>3&&(o=function(i,c,l){return n.call(this,i,c,l,e)}):o=function(i,c,l){return n.call(this,i,xe(c),l,e)}),r[t](o,...s)}function rs(e,t,n){const s=X(e);_e(s,"iterate",un);const r=s[t](...n);return(r===-1||r===!1)&&zs(n[0])?(n[0]=X(n[0]),s[t](...n)):r}function Wt(e,t,n=[]){xt(),Ns();const s=X(e)[t].apply(e,n);return Fs(),Ct(),s}const il=Ms("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function ll(e){_t(e)||(e=String(e));const t=X(this);return _e(t,"has",e),t.hasOwnProperty(e)}class Eo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?vl:Do:o?Ro:Bo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=V(t);if(!r){let l;if(i&&(l=rl[n]))return l;if(n==="hasOwnProperty")return ll}const c=Reflect.get(t,n,pe(t)?t:s);return(_t(n)?So.has(n):il(n))||(r||_e(t,"get",n),o)?c:pe(c)?i&&$s(n)?c:c.value:ue(c)?r?Oo(c):vn(c):c}}class ko extends Eo{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const l=Ot(o);if(!Fe(s)&&!Ot(s)&&(o=X(o),s=X(s)),!V(t)&&pe(o)&&!pe(s))return l?!1:(o.value=s,!0)}const i=V(t)&&$s(n)?Number(n)<t.length:ne(t,n),c=Reflect.set(t,n,s,pe(t)?t:r);return t===X(r)&&(i?vt(s,o)&&it(t,"set",n,s):it(t,"add",n,s)),c}deleteProperty(t,n){const s=ne(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&it(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!_t(n)||!So.has(n))&&_e(t,"has",n),s}ownKeys(t){return _e(t,"iterate",V(t)?"length":Dt),Reflect.ownKeys(t)}}class cl extends Eo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ul=new ko,al=new cl,fl=new ko(!0);const ys=e=>e,xn=e=>Reflect.getPrototypeOf(e);function dl(e,t,n){return function(...s){const r=this.__v_raw,o=X(r),i=Ht(o),c=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=r[e](...s),u=n?ys:t?_s:xe;return!t&&_e(o,"iterate",l?bs:Dt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Cn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function hl(e,t){const n={get(r){const o=this.__v_raw,i=X(o),c=X(r);e||(vt(r,c)&&_e(i,"get",r),_e(i,"get",c));const{has:l}=xn(i),f=t?ys:e?_s:xe;if(l.call(i,r))return f(o.get(r));if(l.call(i,c))return f(o.get(c));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&_e(X(r),"iterate",Dt),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=X(o),c=X(r);return e||(vt(r,c)&&_e(i,"has",r),_e(i,"has",c)),r===c?o.has(r):o.has(r)||o.has(c)},forEach(r,o){const i=this,c=i.__v_raw,l=X(c),f=t?ys:e?_s:xe;return!e&&_e(l,"iterate",Dt),c.forEach((u,d)=>r.call(o,f(u),f(d),i))}};return ve(n,e?{add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear")}:{add(r){!t&&!Fe(r)&&!Ot(r)&&(r=X(r));const o=X(this);return xn(o).has.call(o,r)||(o.add(r),it(o,"add",r,r)),this},set(r,o){!t&&!Fe(o)&&!Ot(o)&&(o=X(o));const i=X(this),{has:c,get:l}=xn(i);let f=c.call(i,r);f||(r=X(r),f=c.call(i,r));const u=l.call(i,r);return i.set(r,o),f?vt(o,u)&&it(i,"set",r,o):it(i,"add",r,o),this},delete(r){const o=X(this),{has:i,get:c}=xn(o);let l=i.call(o,r);l||(r=X(r),l=i.call(o,r)),c&&c.call(o,r);const f=o.delete(r);return l&&it(o,"delete",r,void 0),f},clear(){const r=X(this),o=r.size!==0,i=r.clear();return o&&it(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=dl(r,e,t)}),n}function Qs(e,t){const n=hl(e,t);return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,o)}const pl={get:Qs(!1,!1)},gl={get:Qs(!1,!0)},ml={get:Qs(!0,!1)};const Bo=new WeakMap,Ro=new WeakMap,Do=new WeakMap,vl=new WeakMap;function bl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yl(e){return e.__v_skip||!Object.isExtensible(e)?0:bl(Vi(e))}function vn(e){return Ot(e)?e:Vs(e,!1,ul,pl,Bo)}function Po(e){return Vs(e,!1,fl,gl,Ro)}function Oo(e){return Vs(e,!0,al,ml,Do)}function Vs(e,t,n,s,r){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=yl(e);if(i===0)return e;const c=new Proxy(e,i===2?s:n);return r.set(e,c),c}function bt(e){return Ot(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function zs(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Us(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&uo(e,"__v_skip",!0),e}const xe=e=>ue(e)?vn(e):e,_s=e=>ue(e)?Oo(e):e;function pe(e){return e?e.__v_isRef===!0:!1}function Qe(e){return To(e,!1)}function _l(e){return To(e,!0)}function To(e,t){return pe(e)?e:new xl(e,t)}class xl{constructor(t,n){this.dep=new Hs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:xe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Fe(t)||Ot(t);t=s?t:X(t),vt(t,n)&&(this._rawValue=t,this._value=s?t:xe(t),this.dep.trigger())}}function Ve(e){return pe(e)?e.value:e}const Cl={get:(e,t,n)=>t==="__v_raw"?e:Ve(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return pe(r)&&!pe(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Mo(e){return bt(e)?e:new Proxy(e,Cl)}function wl(e){const t=V(e)?new Array(e.length):{};for(const n in e)t[n]=Sl(e,n);return t}class Al{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return sl(X(this._object),this._key)}}function Sl(e,t,n){const s=e[t];return pe(s)?s:new Al(e,t,n)}class El{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Hs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return yo(this,!0),!0}get value(){const t=this.dep.track();return Co(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function kl(e,t,n=!1){let s,r;return q(e)?s=e:(s=e.get,r=e.set),new El(s,r,n)}const wn={},Dn=new WeakMap;let kt;function Bl(e,t=!1,n=kt){if(n){let s=Dn.get(n);s||Dn.set(n,s=[]),s.push(e)}}function Rl(e,t,n=ce){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:c,call:l}=n,f=P=>r?P:Fe(P)||r===!1||r===0?mt(P,1):mt(P);let u,d,p,g,A=!1,B=!1;if(pe(e)?(d=()=>e.value,A=Fe(e)):bt(e)?(d=()=>f(e),A=!0):V(e)?(B=!0,A=e.some(P=>bt(P)||Fe(P)),d=()=>e.map(P=>{if(pe(P))return P.value;if(bt(P))return f(P);if(q(P))return l?l(P,2):P()})):q(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){xt();try{p()}finally{Ct()}}const P=kt;kt=u;try{return l?l(e,3,[g]):e(g)}finally{kt=P}}:d=Ze,t&&r){const P=d,z=r===!0?1/0:r;d=()=>mt(P(),z)}const H=mo(),N=()=>{u.stop(),H&&H.active&&Ls(H.effects,u)};if(o&&t){const P=t;t=(...z)=>{P(...z),N()}}let I=B?new Array(e.length).fill(wn):wn;const $=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(t){const z=u.run();if(r||A||(B?z.some((Z,J)=>vt(Z,I[J])):vt(z,I))){p&&p();const Z=kt;kt=u;try{const J=[z,I===wn?void 0:B&&I[0]===wn?[]:I,g];l?l(t,3,J):t(...J),I=z}finally{kt=Z}}}else u.run()};return c&&c($),u=new vo(d),u.scheduler=i?()=>i($,!1):$,g=P=>Bl(P,!1,u),p=u.onStop=()=>{const P=Dn.get(u);if(P){if(l)l(P,4);else for(const z of P)z();Dn.delete(u)}},t?s?$(!0):I=u.run():i?i($.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function mt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,pe(e))mt(e.value,t,n);else if(V(e))for(let s=0;s<e.length;s++)mt(e[s],t,n);else if(oo(e)||Ht(e))e.forEach(s=>{mt(s,t,n)});else if(co(e)){for(const s in e)mt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&mt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bn(e,t,n,s){try{return s?e(...s):e()}catch(r){zn(r,t,n)}}function Ke(e,t,n,s){if(q(e)){const r=bn(e,t,n,s);return r&&io(r)&&r.catch(o=>{zn(o,t,n)}),r}if(V(e)){const r=[];for(let o=0;o<e.length;o++)r.push(Ke(e[o],t,n,s));return r}}function zn(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ce;if(t){let c=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,f)===!1)return}c=c.parent}if(o){xt(),bn(o,null,10,[e,l,f]),Ct();return}}Dl(e,n,r,s,i)}function Dl(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Ee=[];let Ye=-1;const Qt=[];let dt=null,Nt=0;const Io=Promise.resolve();let Pn=null;function Ks(e){const t=Pn||Io;return e?t.then(this?e.bind(this):e):t}function Pl(e){let t=Ye+1,n=Ee.length;for(;t<n;){const s=t+n>>>1,r=Ee[s],o=an(r);o<e||o===e&&r.flags&2?t=s+1:n=s}return t}function qs(e){if(!(e.flags&1)){const t=an(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=an(n)?Ee.push(e):Ee.splice(Pl(t),0,e),e.flags|=1,Lo()}}function Lo(){Pn||(Pn=Io.then(No))}function Ol(e){V(e)?Qt.push(...e):dt&&e.id===-1?dt.splice(Nt+1,0,e):e.flags&1||(Qt.push(e),e.flags|=1),Lo()}function cr(e,t,n=Ye+1){for(;n<Ee.length;n++){const s=Ee[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ee.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $o(e){if(Qt.length){const t=[...new Set(Qt)].sort((n,s)=>an(n)-an(s));if(Qt.length=0,dt){dt.push(...t);return}for(dt=t,Nt=0;Nt<dt.length;Nt++){const n=dt[Nt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dt=null,Nt=0}}const an=e=>e.id==null?e.flags&2?-1:1/0:e.id;function No(e){try{for(Ye=0;Ye<Ee.length;Ye++){const t=Ee[Ye];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),bn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ye<Ee.length;Ye++){const t=Ee[Ye];t&&(t.flags&=-2)}Ye=-1,Ee.length=0,$o(),Pn=null,(Ee.length||Qt.length)&&No()}}let Ie=null,Fo=null;function On(e){const t=Ie;return Ie=e,Fo=e&&e.type.__scopeId||null,t}function xs(e,t=Ie,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&br(-1);const o=On(t);let i;try{i=e(...r)}finally{On(o),s._d&&br(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function wt(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const c=r[i];o&&(c.oldValue=o[i].value);let l=c.dir[s];l&&(xt(),Ke(l,n,8,[e.el,c,e,t]),Ct())}}const Tl=Symbol("_vte"),jo=e=>e.__isTeleport,ht=Symbol("_leaveCb"),An=Symbol("_enterCb");function Ml(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qn(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const Ne=[Function,Array],Ho={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ne,onEnter:Ne,onAfterEnter:Ne,onEnterCancelled:Ne,onBeforeLeave:Ne,onLeave:Ne,onAfterLeave:Ne,onLeaveCancelled:Ne,onBeforeAppear:Ne,onAppear:Ne,onAfterAppear:Ne,onAppearCancelled:Ne},Qo=e=>{const t=e.subTree;return t.component?Qo(t.component):t},Il={name:"BaseTransition",props:Ho,setup(e,{slots:t}){const n=Pc(),s=Ml();return()=>{const r=t.default&&Uo(t.default(),!0);if(!r||!r.length)return;const o=Vo(r),i=X(e),{mode:c}=i;if(s.isLeaving)return os(o);const l=ur(o);if(!l)return os(o);let f=Cs(l,i,s,n,d=>f=d);l.type!==De&&fn(l,f);let u=n.subTree&&ur(n.subTree);if(u&&u.type!==De&&!Rt(l,u)&&Qo(n).type!==De){let d=Cs(u,i,s,n);if(fn(u,d),c==="out-in"&&l.type!==De)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},os(o);c==="in-out"&&l.type!==De?d.delayLeave=(p,g,A)=>{const B=zo(s,u);B[String(u.key)]=u,p[ht]=()=>{g(),p[ht]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{A(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Vo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==De){t=n;break}}return t}const Ll=Il;function zo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Cs(e,t,n,s,r){const{appear:o,mode:i,persisted:c=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:A,onLeaveCancelled:B,onBeforeAppear:H,onAppear:N,onAfterAppear:I,onAppearCancelled:$}=t,P=String(e.key),z=zo(n,e),Z=(_,w)=>{_&&Ke(_,s,9,w)},J=(_,w)=>{const T=w[1];Z(_,w),V(_)?_.every(k=>k.length<=1)&&T():_.length<=1&&T()},K={mode:i,persisted:c,beforeEnter(_){let w=l;if(!n.isMounted)if(o)w=H||l;else return;_[ht]&&_[ht](!0);const T=z[P];T&&Rt(e,T)&&T.el[ht]&&T.el[ht](),Z(w,[_])},enter(_){let w=f,T=u,k=d;if(!n.isMounted)if(o)w=N||f,T=I||u,k=$||d;else return;let G=!1;const ae=_[An]=Ce=>{G||(G=!0,Ce?Z(k,[_]):Z(T,[_]),K.delayedLeave&&K.delayedLeave(),_[An]=void 0)};w?J(w,[_,ae]):ae()},leave(_,w){const T=String(e.key);if(_[An]&&_[An](!0),n.isUnmounting)return w();Z(p,[_]);let k=!1;const G=_[ht]=ae=>{k||(k=!0,w(),ae?Z(B,[_]):Z(A,[_]),_[ht]=void 0,z[T]===e&&delete z[T])};z[T]=e,g?J(g,[_,G]):G()},clone(_){const w=Cs(_,t,n,s,r);return r&&r(w),w}};return K}function os(e){if(Un(e))return e=yt(e),e.children=null,e}function ur(e){if(!Un(e))return jo(e.type)&&e.children?Vo(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&q(n.default))return n.default()}}function fn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,fn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Uo(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const c=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===Re?(i.patchFlag&128&&r++,s=s.concat(Uo(i.children,t,c))):(t||i.type!==De)&&s.push(c!=null?yt(i,{key:c}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Kt(e,t){return q(e)?ve({name:e.name},t,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Tn(e,t,n,s,r=!1){if(V(e)){e.forEach((A,B)=>Tn(A,t&&(V(t)?t[B]:t),n,s,r));return}if(tn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Tn(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Ys(s.component):s.el,i=r?null:o,{i:c,r:l}=e,f=t&&t.r,u=c.refs===ce?c.refs={}:c.refs,d=c.setupState,p=X(d),g=d===ce?()=>!1:A=>ne(p,A);if(f!=null&&f!==l&&(he(f)?(u[f]=null,g(f)&&(d[f]=null)):pe(f)&&(f.value=null)),q(l))bn(l,c,12,[i,u]);else{const A=he(l),B=pe(l);if(A||B){const H=()=>{if(e.f){const N=A?g(l)?d[l]:u[l]:l.value;r?V(N)&&Ls(N,o):V(N)?N.includes(o)||N.push(o):A?(u[l]=[o],g(l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else A?(u[l]=i,g(l)&&(d[l]=i)):B&&(l.value=i,e.k&&(u[e.k]=i))};i?(H.id=-1,Me(H,n)):H()}}}Hn().requestIdleCallback;Hn().cancelIdleCallback;const tn=e=>!!e.type.__asyncLoader,Un=e=>e.type.__isKeepAlive;function $l(e,t){qo(e,"a",t)}function Nl(e,t){qo(e,"da",t)}function qo(e,t,n=be){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Kn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Un(r.parent.vnode)&&Fl(s,t,n,r),r=r.parent}}function Fl(e,t,n,s){const r=Kn(t,e,s,!0);Go(()=>{Ls(s[t],r)},n)}function Kn(e,t,n=be,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{xt();const c=yn(n),l=Ke(t,n,e,i);return c(),Ct(),l});return s?r.unshift(o):r.push(o),o}}const lt=e=>(t,n=be)=>{(!hn||e==="sp")&&Kn(e,(...s)=>t(...s),n)},jl=lt("bm"),qn=lt("m"),Hl=lt("bu"),Ql=lt("u"),Wo=lt("bum"),Go=lt("um"),Vl=lt("sp"),zl=lt("rtg"),Ul=lt("rtc");function Kl(e,t=be){Kn("ec",e,t)}const Jo="components";function ql(e,t){return Xo(Jo,e,!0,t)||e}const Yo=Symbol.for("v-ndc");function Wl(e){return he(e)?Xo(Jo,e,!1)||e:e||Yo}function Xo(e,t,n=!0,s=!1){const r=Ie||be;if(r){const o=r.type;{const c=Lc(o,!1);if(c&&(c===t||c===je(t)||c===jn(je(t))))return o}const i=ar(r[e]||o[e],t)||ar(r.appContext[e],t);return!i&&s?o:i}}function ar(e,t){return e&&(e[t]||e[je(t)]||e[jn(je(t))])}function Sn(e,t,n,s){let r;const o=n,i=V(e);if(i||he(e)){const c=i&&bt(e);let l=!1;c&&(l=!Fe(e),e=Vn(e)),r=new Array(e.length);for(let f=0,u=e.length;f<u;f++)r[f]=t(l?xe(e[f]):e[f],f,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let c=0;c<e;c++)r[c]=t(c+1,c,void 0,o)}else if(ue(e))if(e[Symbol.iterator])r=Array.from(e,(c,l)=>t(c,l,void 0,o));else{const c=Object.keys(e);r=new Array(c.length);for(let l=0,f=c.length;l<f;l++){const u=c[l];r[l]=t(e[u],u,l,o)}}else r=[];return r}const ws=e=>e?_i(e)?Ys(e):ws(e.parent):null,nn=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ws(e.parent),$root:e=>ws(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ws(e),$forceUpdate:e=>e.f||(e.f=()=>{qs(e.update)}),$nextTick:e=>e.n||(e.n=Ks.bind(e.proxy)),$watch:e=>mc.bind(e)}),is=(e,t)=>e!==ce&&!e.__isScriptSetup&&ne(e,t),Gl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:c,appContext:l}=e;let f;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(is(s,t))return i[t]=1,s[t];if(r!==ce&&ne(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&ne(f,t))return i[t]=3,o[t];if(n!==ce&&ne(n,t))return i[t]=4,n[t];As&&(i[t]=0)}}const u=nn[t];let d,p;if(u)return t==="$attrs"&&_e(e.attrs,"get",""),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==ce&&ne(n,t))return i[t]=4,n[t];if(p=l.config.globalProperties,ne(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return is(r,t)?(r[t]=n,!0):s!==ce&&ne(s,t)?(s[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let c;return!!n[i]||e!==ce&&ne(e,i)||is(t,i)||(c=o[0])&&ne(c,i)||ne(s,i)||ne(nn,i)||ne(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fr(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let As=!0;function Jl(e){const t=Ws(e),n=e.proxy,s=e.ctx;As=!1,t.beforeCreate&&dr(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:c,provide:l,inject:f,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:B,deactivated:H,beforeDestroy:N,beforeUnmount:I,destroyed:$,unmounted:P,render:z,renderTracked:Z,renderTriggered:J,errorCaptured:K,serverPrefetch:_,expose:w,inheritAttrs:T,components:k,directives:G,filters:ae}=t;if(f&&Yl(f,s,null),i)for(const W in i){const ee=i[W];q(ee)&&(s[W]=ee.bind(n))}if(r){const W=r.call(n,n);ue(W)&&(e.data=vn(W))}if(As=!0,o)for(const W in o){const ee=o[W],et=q(ee)?ee.bind(n,n):q(ee.get)?ee.get.bind(n,n):Ze,ct=!q(ee)&&q(ee.set)?ee.set.bind(n):Ze,We=me({get:et,set:ct});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>We.value,set:Be=>We.value=Be})}if(c)for(const W in c)Zo(c[W],s,n,W);if(l){const W=q(l)?l.call(n):l;Reflect.ownKeys(W).forEach(ee=>{En(ee,W[ee])})}u&&dr(u,e,"c");function oe(W,ee){V(ee)?ee.forEach(et=>W(et.bind(n))):ee&&W(ee.bind(n))}if(oe(jl,d),oe(qn,p),oe(Hl,g),oe(Ql,A),oe($l,B),oe(Nl,H),oe(Kl,K),oe(Ul,Z),oe(zl,J),oe(Wo,I),oe(Go,P),oe(Vl,_),V(w))if(w.length){const W=e.exposed||(e.exposed={});w.forEach(ee=>{Object.defineProperty(W,ee,{get:()=>n[ee],set:et=>n[ee]=et})})}else e.exposed||(e.exposed={});z&&e.render===Ze&&(e.render=z),T!=null&&(e.inheritAttrs=T),k&&(e.components=k),G&&(e.directives=G),_&&Ko(e)}function Yl(e,t,n=Ze){V(e)&&(e=Ss(e));for(const s in e){const r=e[s];let o;ue(r)?"default"in r?o=Ue(r.from||s,r.default,!0):o=Ue(r.from||s):o=Ue(r),pe(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function dr(e,t,n){Ke(V(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zo(e,t,n,s){let r=s.includes(".")?hi(n,s):()=>n[s];if(he(e)){const o=t[e];q(o)&&Vt(r,o)}else if(q(e))Vt(r,e.bind(n));else if(ue(e))if(V(e))e.forEach(o=>Zo(o,t,n,s));else{const o=q(e.handler)?e.handler.bind(n):t[e.handler];q(o)&&Vt(r,o,e)}}function Ws(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(t);let l;return c?l=c:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(f=>Mn(l,f,i,!0)),Mn(l,t,i)),ue(t)&&o.set(t,l),l}function Mn(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&Mn(e,o,n,!0),r&&r.forEach(i=>Mn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const c=Xl[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Xl={data:hr,props:pr,emits:pr,methods:Yt,computed:Yt,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Yt,directives:Yt,watch:ec,provide:hr,inject:Zl};function hr(e,t){return t?e?function(){return ve(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function Zl(e,t){return Yt(Ss(e),Ss(t))}function Ss(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Yt(e,t){return e?ve(Object.create(null),e,t):t}function pr(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:ve(Object.create(null),fr(e),fr(t??{})):t}function ec(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const s in t)n[s]=we(e[s],t[s]);return n}function ei(){return{app:null,config:{isNativeTag:Hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tc=0;function nc(e,t){return function(s,r=null){q(s)||(s=ve({},s)),r!=null&&!ue(r)&&(r=null);const o=ei(),i=new WeakSet,c=[];let l=!1;const f=o.app={_uid:tc++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Nc,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&q(u.install)?(i.add(u),u.install(f,...d)):q(u)&&(i.add(u),u(f,...d))),f},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),f},component(u,d){return d?(o.components[u]=d,f):o.components[u]},directive(u,d){return d?(o.directives[u]=d,f):o.directives[u]},mount(u,d,p){if(!l){const g=f._ceVNode||ke(s,r);return g.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(g,u):e(g,u,p),l=!0,f._container=u,u.__vue_app__=f,Ys(g.component)}},onUnmount(u){c.push(u)},unmount(){l&&(Ke(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,d){return o.provides[u]=d,f},runWithContext(u){const d=Pt;Pt=f;try{return u()}finally{Pt=d}}};return f}}let Pt=null;function En(e,t){if(be){let n=be.provides;const s=be.parent&&be.parent.provides;s===n&&(n=be.provides=Object.create(s)),n[e]=t}}function Ue(e,t,n=!1){const s=be||Ie;if(s||Pt){const r=Pt?Pt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s&&s.proxy):t}}function sc(){return!!(be||Ie||Pt)}const ti={},ni=()=>Object.create(ti),si=e=>Object.getPrototypeOf(e)===ti;function rc(e,t,n,s=!1){const r={},o=ni();e.propsDefaults=Object.create(null),ri(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:Po(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function oc(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,c=X(r),[l]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Wn(e.emitsOptions,p))continue;const g=t[p];if(l)if(ne(o,p))g!==o[p]&&(o[p]=g,f=!0);else{const A=je(p);r[A]=Es(l,c,A,g,e,!1)}else g!==o[p]&&(o[p]=g,f=!0)}}}else{ri(e,t,r,o)&&(f=!0);let u;for(const d in c)(!t||!ne(t,d)&&((u=Tt(d))===d||!ne(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Es(l,c,d,void 0,e,!0)):delete r[d]);if(o!==c)for(const d in o)(!t||!ne(t,d))&&(delete o[d],f=!0)}f&&it(e.attrs,"set","")}function ri(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,c;if(t)for(let l in t){if(Xt(l))continue;const f=t[l];let u;r&&ne(r,u=je(l))?!o||!o.includes(u)?n[u]=f:(c||(c={}))[u]=f:Wn(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,i=!0)}if(o){const l=X(n),f=c||ce;for(let u=0;u<o.length;u++){const d=o[u];n[d]=Es(r,l,d,f[d],e,!ne(f,d))}}return i}function Es(e,t,n,s,r,o){const i=e[n];if(i!=null){const c=ne(i,"default");if(c&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&q(l)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const u=yn(r);s=f[n]=l.call(null,t),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}i[0]&&(o&&!c?s=!1:i[1]&&(s===""||s===Tt(n))&&(s=!0))}return s}const ic=new WeakMap;function oi(e,t,n=!1){const s=n?ic:t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},c=[];let l=!1;if(!q(e)){const u=d=>{l=!0;const[p,g]=oi(d,t,!0);ve(i,p),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return ue(e)&&s.set(e,jt),jt;if(V(o))for(let u=0;u<o.length;u++){const d=je(o[u]);gr(d)&&(i[d]=ce)}else if(o)for(const u in o){const d=je(u);if(gr(d)){const p=o[u],g=i[d]=V(p)||q(p)?{type:p}:ve({},p),A=g.type;let B=!1,H=!0;if(V(A))for(let N=0;N<A.length;++N){const I=A[N],$=q(I)&&I.name;if($==="Boolean"){B=!0;break}else $==="String"&&(H=!1)}else B=q(A)&&A.name==="Boolean";g[0]=B,g[1]=H,(B||ne(g,"default"))&&c.push(d)}}const f=[i,c];return ue(e)&&s.set(e,f),f}function gr(e){return e[0]!=="$"&&!Xt(e)}const ii=e=>e[0]==="_"||e==="$stable",Gs=e=>V(e)?e.map(Xe):[Xe(e)],lc=(e,t,n)=>{if(t._n)return t;const s=xs((...r)=>Gs(t(...r)),n);return s._c=!1,s},li=(e,t,n)=>{const s=e._ctx;for(const r in e){if(ii(r))continue;const o=e[r];if(q(o))t[r]=lc(r,o,s);else if(o!=null){const i=Gs(o);t[r]=()=>i}}},ci=(e,t)=>{const n=Gs(t);e.slots.default=()=>n},ui=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},cc=(e,t,n)=>{const s=e.slots=ni();if(e.vnode.shapeFlag&32){const r=t._;r?(ui(s,t,n),n&&uo(s,"_",r,!0)):li(t,s)}else t&&ci(e,t)},uc=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=ce;if(s.shapeFlag&32){const c=t._;c?n&&c===1?o=!1:ui(r,t,n):(o=!t.$stable,li(t,r)),i=t}else t&&(ci(e,t),i={default:1});if(o)for(const c in r)!ii(c)&&i[c]==null&&delete r[c]},Me=wc;function ac(e){return fc(e)}function fc(e,t){const n=Hn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:c,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=Ze,insertStaticContent:A}=e,B=(a,h,m,y=null,v=null,x=null,R=void 0,E=null,S=!!h.dynamicChildren)=>{if(a===h)return;a&&!Rt(a,h)&&(y=b(a),Be(a,v,x,!0),a=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:C,ref:Q,shapeFlag:O}=h;switch(C){case Gn:H(a,h,m,y);break;case De:N(a,h,m,y);break;case us:a==null&&I(h,m,y,R);break;case Re:k(a,h,m,y,v,x,R,E,S);break;default:O&1?z(a,h,m,y,v,x,R,E,S):O&6?G(a,h,m,y,v,x,R,E,S):(O&64||O&128)&&C.process(a,h,m,y,v,x,R,E,S,F)}Q!=null&&v&&Tn(Q,a&&a.ref,x,h||a,!h)},H=(a,h,m,y)=>{if(a==null)s(h.el=c(h.children),m,y);else{const v=h.el=a.el;h.children!==a.children&&f(v,h.children)}},N=(a,h,m,y)=>{a==null?s(h.el=l(h.children||""),m,y):h.el=a.el},I=(a,h,m,y)=>{[a.el,a.anchor]=A(a.children,h,m,y,a.el,a.anchor)},$=({el:a,anchor:h},m,y)=>{let v;for(;a&&a!==h;)v=p(a),s(a,m,y),a=v;s(h,m,y)},P=({el:a,anchor:h})=>{let m;for(;a&&a!==h;)m=p(a),r(a),a=m;r(h)},z=(a,h,m,y,v,x,R,E,S)=>{h.type==="svg"?R="svg":h.type==="math"&&(R="mathml"),a==null?Z(h,m,y,v,x,R,E,S):_(a,h,v,x,R,E,S)},Z=(a,h,m,y,v,x,R,E)=>{let S,C;const{props:Q,shapeFlag:O,transition:j,dirs:U}=a;if(S=a.el=i(a.type,x,Q&&Q.is,Q),O&8?u(S,a.children):O&16&&K(a.children,S,null,y,v,ls(a,x),R,E),U&&wt(a,null,y,"created"),J(S,a,a.scopeId,R,y),Q){for(const ie in Q)ie!=="value"&&!Xt(ie)&&o(S,ie,null,Q[ie],x,y);"value"in Q&&o(S,"value",null,Q.value,x),(C=Q.onVnodeBeforeMount)&&Je(C,y,a)}U&&wt(a,null,y,"beforeMount");const Y=dc(v,j);Y&&j.beforeEnter(S),s(S,h,m),((C=Q&&Q.onVnodeMounted)||Y||U)&&Me(()=>{C&&Je(C,y,a),Y&&j.enter(S),U&&wt(a,null,y,"mounted")},v)},J=(a,h,m,y,v)=>{if(m&&g(a,m),y)for(let x=0;x<y.length;x++)g(a,y[x]);if(v){let x=v.subTree;if(h===x||gi(x.type)&&(x.ssContent===h||x.ssFallback===h)){const R=v.vnode;J(a,R,R.scopeId,R.slotScopeIds,v.parent)}}},K=(a,h,m,y,v,x,R,E,S=0)=>{for(let C=S;C<a.length;C++){const Q=a[C]=E?pt(a[C]):Xe(a[C]);B(null,Q,h,m,y,v,x,R,E)}},_=(a,h,m,y,v,x,R)=>{const E=h.el=a.el;let{patchFlag:S,dynamicChildren:C,dirs:Q}=h;S|=a.patchFlag&16;const O=a.props||ce,j=h.props||ce;let U;if(m&&At(m,!1),(U=j.onVnodeBeforeUpdate)&&Je(U,m,h,a),Q&&wt(h,a,m,"beforeUpdate"),m&&At(m,!0),(O.innerHTML&&j.innerHTML==null||O.textContent&&j.textContent==null)&&u(E,""),C?w(a.dynamicChildren,C,E,m,y,ls(h,v),x):R||ee(a,h,E,null,m,y,ls(h,v),x,!1),S>0){if(S&16)T(E,O,j,m,v);else if(S&2&&O.class!==j.class&&o(E,"class",null,j.class,v),S&4&&o(E,"style",O.style,j.style,v),S&8){const Y=h.dynamicProps;for(let ie=0;ie<Y.length;ie++){const re=Y[ie],Pe=O[re],ye=j[re];(ye!==Pe||re==="value")&&o(E,re,Pe,ye,v,m)}}S&1&&a.children!==h.children&&u(E,h.children)}else!R&&C==null&&T(E,O,j,m,v);((U=j.onVnodeUpdated)||Q)&&Me(()=>{U&&Je(U,m,h,a),Q&&wt(h,a,m,"updated")},y)},w=(a,h,m,y,v,x,R)=>{for(let E=0;E<h.length;E++){const S=a[E],C=h[E],Q=S.el&&(S.type===Re||!Rt(S,C)||S.shapeFlag&70)?d(S.el):m;B(S,C,Q,null,y,v,x,R,!0)}},T=(a,h,m,y,v)=>{if(h!==m){if(h!==ce)for(const x in h)!Xt(x)&&!(x in m)&&o(a,x,h[x],null,v,y);for(const x in m){if(Xt(x))continue;const R=m[x],E=h[x];R!==E&&x!=="value"&&o(a,x,E,R,v,y)}"value"in m&&o(a,"value",h.value,m.value,v)}},k=(a,h,m,y,v,x,R,E,S)=>{const C=h.el=a?a.el:c(""),Q=h.anchor=a?a.anchor:c("");let{patchFlag:O,dynamicChildren:j,slotScopeIds:U}=h;U&&(E=E?E.concat(U):U),a==null?(s(C,m,y),s(Q,m,y),K(h.children||[],m,Q,v,x,R,E,S)):O>0&&O&64&&j&&a.dynamicChildren?(w(a.dynamicChildren,j,m,v,x,R,E),(h.key!=null||v&&h===v.subTree)&&ai(a,h,!0)):ee(a,h,m,Q,v,x,R,E,S)},G=(a,h,m,y,v,x,R,E,S)=>{h.slotScopeIds=E,a==null?h.shapeFlag&512?v.ctx.activate(h,m,y,R,S):ae(h,m,y,v,x,R,S):Ce(a,h,S)},ae=(a,h,m,y,v,x,R)=>{const E=a.component=Dc(a,y,v);if(Un(a)&&(E.ctx.renderer=F),Oc(E,!1,R),E.asyncDep){if(v&&v.registerDep(E,oe,R),!a.el){const S=E.subTree=ke(De);N(null,S,h,m)}}else oe(E,a,h,m,v,x,R)},Ce=(a,h,m)=>{const y=h.component=a.component;if(xc(a,h,m))if(y.asyncDep&&!y.asyncResolved){W(y,h,m);return}else y.next=h,y.update();else h.el=a.el,y.vnode=h},oe=(a,h,m,y,v,x,R)=>{const E=()=>{if(a.isMounted){let{next:O,bu:j,u:U,parent:Y,vnode:ie}=a;{const Oe=fi(a);if(Oe){O&&(O.el=ie.el,W(a,O,R)),Oe.asyncDep.then(()=>{a.isUnmounted||E()});return}}let re=O,Pe;At(a,!1),O?(O.el=ie.el,W(a,O,R)):O=ie,j&&es(j),(Pe=O.props&&O.props.onVnodeBeforeUpdate)&&Je(Pe,Y,O,ie),At(a,!0);const ye=cs(a),He=a.subTree;a.subTree=ye,B(He,ye,d(He.el),b(He),a,v,x),O.el=ye.el,re===null&&Cc(a,ye.el),U&&Me(U,v),(Pe=O.props&&O.props.onVnodeUpdated)&&Me(()=>Je(Pe,Y,O,ie),v)}else{let O;const{el:j,props:U}=h,{bm:Y,m:ie,parent:re,root:Pe,type:ye}=a,He=tn(h);if(At(a,!1),Y&&es(Y),!He&&(O=U&&U.onVnodeBeforeMount)&&Je(O,re,h),At(a,!0),j&&fe){const Oe=()=>{a.subTree=cs(a),fe(j,a.subTree,a,v,null)};He&&ye.__asyncHydrate?ye.__asyncHydrate(j,a,Oe):Oe()}else{Pe.ce&&Pe.ce._injectChildStyle(ye);const Oe=a.subTree=cs(a);B(null,Oe,m,y,a,v,x),h.el=Oe.el}if(ie&&Me(ie,v),!He&&(O=U&&U.onVnodeMounted)){const Oe=h;Me(()=>Je(O,re,Oe),v)}(h.shapeFlag&256||re&&tn(re.vnode)&&re.vnode.shapeFlag&256)&&a.a&&Me(a.a,v),a.isMounted=!0,h=m=y=null}};a.scope.on();const S=a.effect=new vo(E);a.scope.off();const C=a.update=S.run.bind(S),Q=a.job=S.runIfDirty.bind(S);Q.i=a,Q.id=a.uid,S.scheduler=()=>qs(Q),At(a,!0),C()},W=(a,h,m)=>{h.component=a;const y=a.vnode.props;a.vnode=h,a.next=null,oc(a,h.props,y,m),uc(a,h.children,m),xt(),cr(a),Ct()},ee=(a,h,m,y,v,x,R,E,S=!1)=>{const C=a&&a.children,Q=a?a.shapeFlag:0,O=h.children,{patchFlag:j,shapeFlag:U}=h;if(j>0){if(j&128){ct(C,O,m,y,v,x,R,E,S);return}else if(j&256){et(C,O,m,y,v,x,R,E,S);return}}U&8?(Q&16&&$e(C,v,x),O!==C&&u(m,O)):Q&16?U&16?ct(C,O,m,y,v,x,R,E,S):$e(C,v,x,!0):(Q&8&&u(m,""),U&16&&K(O,m,y,v,x,R,E,S))},et=(a,h,m,y,v,x,R,E,S)=>{a=a||jt,h=h||jt;const C=a.length,Q=h.length,O=Math.min(C,Q);let j;for(j=0;j<O;j++){const U=h[j]=S?pt(h[j]):Xe(h[j]);B(a[j],U,m,null,v,x,R,E,S)}C>Q?$e(a,v,x,!0,!1,O):K(h,m,y,v,x,R,E,S,O)},ct=(a,h,m,y,v,x,R,E,S)=>{let C=0;const Q=h.length;let O=a.length-1,j=Q-1;for(;C<=O&&C<=j;){const U=a[C],Y=h[C]=S?pt(h[C]):Xe(h[C]);if(Rt(U,Y))B(U,Y,m,null,v,x,R,E,S);else break;C++}for(;C<=O&&C<=j;){const U=a[O],Y=h[j]=S?pt(h[j]):Xe(h[j]);if(Rt(U,Y))B(U,Y,m,null,v,x,R,E,S);else break;O--,j--}if(C>O){if(C<=j){const U=j+1,Y=U<Q?h[U].el:y;for(;C<=j;)B(null,h[C]=S?pt(h[C]):Xe(h[C]),m,Y,v,x,R,E,S),C++}}else if(C>j)for(;C<=O;)Be(a[C],v,x,!0),C++;else{const U=C,Y=C,ie=new Map;for(C=Y;C<=j;C++){const Te=h[C]=S?pt(h[C]):Xe(h[C]);Te.key!=null&&ie.set(Te.key,C)}let re,Pe=0;const ye=j-Y+1;let He=!1,Oe=0;const qt=new Array(ye);for(C=0;C<ye;C++)qt[C]=0;for(C=U;C<=O;C++){const Te=a[C];if(Pe>=ye){Be(Te,v,x,!0);continue}let Ge;if(Te.key!=null)Ge=ie.get(Te.key);else for(re=Y;re<=j;re++)if(qt[re-Y]===0&&Rt(Te,h[re])){Ge=re;break}Ge===void 0?Be(Te,v,x,!0):(qt[Ge-Y]=C+1,Ge>=Oe?Oe=Ge:He=!0,B(Te,h[Ge],m,null,v,x,R,E,S),Pe++)}const sr=He?hc(qt):jt;for(re=sr.length-1,C=ye-1;C>=0;C--){const Te=Y+C,Ge=h[Te],rr=Te+1<Q?h[Te+1].el:y;qt[C]===0?B(null,Ge,m,rr,v,x,R,E,S):He&&(re<0||C!==sr[re]?We(Ge,m,rr,2):re--)}}},We=(a,h,m,y,v=null)=>{const{el:x,type:R,transition:E,children:S,shapeFlag:C}=a;if(C&6){We(a.component.subTree,h,m,y);return}if(C&128){a.suspense.move(h,m,y);return}if(C&64){R.move(a,h,m,F);return}if(R===Re){s(x,h,m);for(let O=0;O<S.length;O++)We(S[O],h,m,y);s(a.anchor,h,m);return}if(R===us){$(a,h,m);return}if(y!==2&&C&1&&E)if(y===0)E.beforeEnter(x),s(x,h,m),Me(()=>E.enter(x),v);else{const{leave:O,delayLeave:j,afterLeave:U}=E,Y=()=>s(x,h,m),ie=()=>{O(x,()=>{Y(),U&&U()})};j?j(x,Y,ie):ie()}else s(x,h,m)},Be=(a,h,m,y=!1,v=!1)=>{const{type:x,props:R,ref:E,children:S,dynamicChildren:C,shapeFlag:Q,patchFlag:O,dirs:j,cacheIndex:U}=a;if(O===-2&&(v=!1),E!=null&&Tn(E,null,m,a,!0),U!=null&&(h.renderCache[U]=void 0),Q&256){h.ctx.deactivate(a);return}const Y=Q&1&&j,ie=!tn(a);let re;if(ie&&(re=R&&R.onVnodeBeforeUnmount)&&Je(re,h,a),Q&6)_n(a.component,m,y);else{if(Q&128){a.suspense.unmount(m,y);return}Y&&wt(a,null,h,"beforeUnmount"),Q&64?a.type.remove(a,h,m,F,y):C&&!C.hasOnce&&(x!==Re||O>0&&O&64)?$e(C,h,m,!1,!0):(x===Re&&O&384||!v&&Q&16)&&$e(S,h,m),y&&Mt(a)}(ie&&(re=R&&R.onVnodeUnmounted)||Y)&&Me(()=>{re&&Je(re,h,a),Y&&wt(a,null,h,"unmounted")},m)},Mt=a=>{const{type:h,el:m,anchor:y,transition:v}=a;if(h===Re){It(m,y);return}if(h===us){P(a);return}const x=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(a.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:E}=v,S=()=>R(m,x);E?E(a.el,x,S):S()}else x()},It=(a,h)=>{let m;for(;a!==h;)m=p(a),r(a),a=m;r(h)},_n=(a,h,m)=>{const{bum:y,scope:v,job:x,subTree:R,um:E,m:S,a:C}=a;mr(S),mr(C),y&&es(y),v.stop(),x&&(x.flags|=8,Be(R,a,h,m)),E&&Me(E,h),Me(()=>{a.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},$e=(a,h,m,y=!1,v=!1,x=0)=>{for(let R=x;R<a.length;R++)Be(a[R],h,m,y,v)},b=a=>{if(a.shapeFlag&6)return b(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const h=p(a.anchor||a.el),m=h&&h[Tl];return m?p(m):h};let M=!1;const D=(a,h,m)=>{a==null?h._vnode&&Be(h._vnode,null,null,!0):B(h._vnode||null,a,h,null,null,null,m),h._vnode=a,M||(M=!0,cr(),$o(),M=!1)},F={p:B,um:Be,m:We,r:Mt,mt:ae,mc:K,pc:ee,pbc:w,n:b,o:e};let se,fe;return{render:D,hydrate:se,createApp:nc(D,se)}}function ls({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function At({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function dc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ai(e,t,n=!1){const s=e.children,r=t.children;if(V(s)&&V(r))for(let o=0;o<s.length;o++){const i=s[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=pt(r[o]),c.el=i.el),!n&&c.patchFlag!==-2&&ai(i,c)),c.type===Gn&&(c.el=i.el)}}function hc(e){const t=e.slice(),n=[0];let s,r,o,i,c;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)c=o+i>>1,e[n[c]]<f?o=c+1:i=c;f<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function fi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:fi(t)}function mr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const pc=Symbol.for("v-scx"),gc=()=>Ue(pc);function Vt(e,t,n){return di(e,t,n)}function di(e,t,n=ce){const{immediate:s,deep:r,flush:o,once:i}=n,c=ve({},n),l=t&&s||!t&&o!=="post";let f;if(hn){if(o==="sync"){const g=gc();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Ze,g.resume=Ze,g.pause=Ze,g}}const u=be;c.call=(g,A,B)=>Ke(g,u,A,B);let d=!1;o==="post"?c.scheduler=g=>{Me(g,u&&u.suspense)}:o!=="sync"&&(d=!0,c.scheduler=(g,A)=>{A?g():qs(g)}),c.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=Rl(e,t,c);return hn&&(f?f.push(p):l&&p()),p}function mc(e,t,n){const s=this.proxy,r=he(e)?e.includes(".")?hi(s,e):()=>s[e]:e.bind(s,s);let o;q(t)?o=t:(o=t.handler,n=t);const i=yn(this),c=di(r,o.bind(s),n);return i(),c}function hi(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const vc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${je(t)}Modifiers`]||e[`${Tt(t)}Modifiers`];function bc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ce;let r=n;const o=t.startsWith("update:"),i=o&&vc(s,t.slice(7));i&&(i.trim&&(r=n.map(u=>he(u)?u.trim():u)),i.number&&(r=n.map(Ki)));let c,l=s[c=Zn(t)]||s[c=Zn(je(t))];!l&&o&&(l=s[c=Zn(Tt(t))]),l&&Ke(l,e,6,r);const f=s[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ke(f,e,6,r)}}function pi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},c=!1;if(!q(e)){const l=f=>{const u=pi(f,t,!0);u&&(c=!0,ve(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!c?(ue(e)&&s.set(e,null),null):(V(o)?o.forEach(l=>i[l]=null):ve(i,o),ue(e)&&s.set(e,i),i)}function Wn(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,Tt(t))||ne(e,t))}function cs(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:c,emit:l,render:f,renderCache:u,props:d,data:p,setupState:g,ctx:A,inheritAttrs:B}=e,H=On(e);let N,I;try{if(n.shapeFlag&4){const P=r||s,z=P;N=Xe(f.call(z,P,u,d,g,p,A)),I=c}else{const P=t;N=Xe(P.length>1?P(d,{attrs:c,slots:i,emit:l}):P(d,null)),I=t.props?c:yc(c)}}catch(P){sn.length=0,zn(P,e,1),N=ke(De)}let $=N;if(I&&B!==!1){const P=Object.keys(I),{shapeFlag:z}=$;P.length&&z&7&&(o&&P.some(Is)&&(I=_c(I,o)),$=yt($,I,!1,!0))}return n.dirs&&($=yt($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&fn($,n.transition),N=$,On(H),N}const yc=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},_c=(e,t)=>{const n={};for(const s in e)(!Is(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function xc(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:c,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?vr(s,i,f):!!i;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(i[p]!==s[p]&&!Wn(f,p))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?vr(s,i,f):!0:!!i;return!1}function vr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!Wn(n,o))return!0}return!1}function Cc({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const gi=e=>e.__isSuspense;function wc(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const Re=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),De=Symbol.for("v-cmt"),us=Symbol.for("v-stc"),sn=[];let Le=null;function de(e=!1){sn.push(Le=e?null:[])}function Ac(){sn.pop(),Le=sn[sn.length-1]||null}let dn=1;function br(e,t=!1){dn+=e,e<0&&Le&&t&&(Le.hasOnce=!0)}function mi(e){return e.dynamicChildren=dn>0?Le||jt:null,Ac(),dn>0&&Le&&Le.push(e),e}function ge(e,t,n,s,r,o){return mi(L(e,t,n,s,r,o,!0))}function vi(e,t,n,s,r){return mi(ke(e,t,n,s,r,!0))}function In(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const bi=({key:e})=>e??null,kn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||pe(e)||q(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function L(e,t=null,n=null,s=0,r=null,o=e===Re?0:1,i=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bi(t),ref:t&&kn(t),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ie};return c?(Js(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),dn>0&&!i&&Le&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Le.push(l),l}const ke=Sc;function Sc(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Yo)&&(e=De),In(e)){const c=yt(e,t,!0);return n&&Js(c,n),dn>0&&!o&&Le&&(c.shapeFlag&6?Le[Le.indexOf(e)]=c:Le.push(c)),c.patchFlag=-2,c}if($c(e)&&(e=e.__vccOpts),t){t=Ec(t);let{class:c,style:l}=t;c&&!he(c)&&(t.class=ot(c)),ue(l)&&(zs(l)&&!V(l)&&(l=ve({},l)),t.style=Qn(l))}const i=he(e)?1:gi(e)?128:jo(e)?64:ue(e)?4:q(e)?2:0;return L(e,t,n,s,r,i,o,!0)}function Ec(e){return e?zs(e)||si(e)?ve({},e):e:null}function yt(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:c,transition:l}=e,f=t?kc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&bi(f),ref:t&&t.ref?n&&o?V(o)?o.concat(kn(t)):[o,kn(t)]:kn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yt(e.ssContent),ssFallback:e.ssFallback&&yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&fn(u,l.clone(u)),u}function yi(e=" ",t=0){return ke(Gn,null,e,t)}function Bt(e="",t=!1){return t?(de(),vi(De,null,e)):ke(De,null,e)}function Xe(e){return e==null||typeof e=="boolean"?ke(De):V(e)?ke(Re,null,e.slice()):In(e)?pt(e):ke(Gn,null,String(e))}function pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:yt(e)}function Js(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Js(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!si(t)?t._ctx=Ie:r===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),s&64?(n=16,t=[yi(t)]):n=8);e.children=t,e.shapeFlag|=n}function kc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ot([t.class,s.class]));else if(r==="style")t.style=Qn([t.style,s.style]);else if($n(r)){const o=t[r],i=s[r];i&&o!==i&&!(V(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Je(e,t,n,s=null){Ke(e,t,7,[n,s])}const Bc=ei();let Rc=0;function Dc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Bc,o={uid:Rc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(s,r),emitsOptions:pi(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=bc.bind(null,o),e.ce&&e.ce(o),o}let be=null;const Pc=()=>be||Ie;let Ln,ks;{const e=Hn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Ln=t("__VUE_INSTANCE_SETTERS__",n=>be=n),ks=t("__VUE_SSR_SETTERS__",n=>hn=n)}const yn=e=>{const t=be;return Ln(e),e.scope.on(),()=>{e.scope.off(),Ln(t)}},yr=()=>{be&&be.scope.off(),Ln(null)};function _i(e){return e.vnode.shapeFlag&4}let hn=!1;function Oc(e,t=!1,n=!1){t&&ks(t);const{props:s,children:r}=e.vnode,o=_i(e);rc(e,s,o,t),cc(e,r,n);const i=o?Tc(e,t):void 0;return t&&ks(!1),i}function Tc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gl);const{setup:s}=n;if(s){xt();const r=e.setupContext=s.length>1?Ic(e):null,o=yn(e),i=bn(s,e,0,[e.props,r]),c=io(i);if(Ct(),o(),(c||e.sp)&&!tn(e)&&Ko(e),c){if(i.then(yr,yr),t)return i.then(l=>{_r(e,l,t)}).catch(l=>{zn(l,e,0)});e.asyncDep=i}else _r(e,i,t)}else xi(e,t)}function _r(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Mo(t)),xi(e,n)}let xr;function xi(e,t,n){const s=e.type;if(!e.render){if(!t&&xr&&!s.render){const r=s.template||Ws(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:l}=s,f=ve(ve({isCustomElement:o,delimiters:c},i),l);s.render=xr(r,f)}}e.render=s.render||Ze}{const r=yn(e);xt();try{Jl(e)}finally{Ct(),r()}}}const Mc={get(e,t){return _e(e,"get",""),e[t]}};function Ic(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Mc),slots:e.slots,emit:e.emit,expose:t}}function Ys(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Mo(Us(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nn)return nn[n](e)},has(t,n){return n in t||n in nn}})):e.proxy}function Lc(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function $c(e){return q(e)&&"__vccOpts"in e}const me=(e,t)=>kl(e,t,hn);function Xs(e,t,n){const s=arguments.length;return s===2?ue(t)&&!V(t)?In(t)?ke(e,null,[t]):ke(e,t):ke(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&In(n)&&(n=[n]),ke(e,t,n))}const Nc="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bs;const Cr=typeof window<"u"&&window.trustedTypes;if(Cr)try{Bs=Cr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ci=Bs?e=>Bs.createHTML(e):e=>e,Fc="http://www.w3.org/2000/svg",jc="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,wr=rt&&rt.createElement("template"),Hc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?rt.createElementNS(Fc,e):t==="mathml"?rt.createElementNS(jc,e):n?rt.createElement(e,{is:n}):rt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{wr.innerHTML=Ci(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=wr.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ut="transition",Gt="animation",pn=Symbol("_vtc"),wi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qc=ve({},Ho,wi),Vc=e=>(e.displayName="Transition",e.props=Qc,e),zc=Vc((e,{slots:t})=>Xs(Ll,Uc(e),t)),St=(e,t=[])=>{V(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ar=e=>e?V(e)?e.some(t=>t.length>1):e.length>1:!1;function Uc(e){const t={};for(const k in e)k in wi||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:f=i,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,A=Kc(r),B=A&&A[0],H=A&&A[1],{onBeforeEnter:N,onEnter:I,onEnterCancelled:$,onLeave:P,onLeaveCancelled:z,onBeforeAppear:Z=N,onAppear:J=I,onAppearCancelled:K=$}=t,_=(k,G,ae,Ce)=>{k._enterCancelled=Ce,Et(k,G?u:c),Et(k,G?f:i),ae&&ae()},w=(k,G)=>{k._isLeaving=!1,Et(k,d),Et(k,g),Et(k,p),G&&G()},T=k=>(G,ae)=>{const Ce=k?J:I,oe=()=>_(G,k,ae);St(Ce,[G,oe]),Sr(()=>{Et(G,k?l:o),nt(G,k?u:c),Ar(Ce)||Er(G,s,B,oe)})};return ve(t,{onBeforeEnter(k){St(N,[k]),nt(k,o),nt(k,i)},onBeforeAppear(k){St(Z,[k]),nt(k,l),nt(k,f)},onEnter:T(!1),onAppear:T(!0),onLeave(k,G){k._isLeaving=!0;const ae=()=>w(k,G);nt(k,d),k._enterCancelled?(nt(k,p),Rr()):(Rr(),nt(k,p)),Sr(()=>{k._isLeaving&&(Et(k,d),nt(k,g),Ar(P)||Er(k,s,H,ae))}),St(P,[k,ae])},onEnterCancelled(k){_(k,!1,void 0,!0),St($,[k])},onAppearCancelled(k){_(k,!0,void 0,!0),St(K,[k])},onLeaveCancelled(k){w(k),St(z,[k])}})}function Kc(e){if(e==null)return null;if(ue(e))return[as(e.enter),as(e.leave)];{const t=as(e);return[t,t]}}function as(e){return qi(e)}function nt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[pn]||(e[pn]=new Set)).add(t)}function Et(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[pn];n&&(n.delete(t),n.size||(e[pn]=void 0))}function Sr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let qc=0;function Er(e,t,n,s){const r=e._endId=++qc,o=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:c,propCount:l}=Wc(e,t);if(!i)return s();const f=i+"end";let u=0;const d=()=>{e.removeEventListener(f,p),o()},p=g=>{g.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},c+1),e.addEventListener(f,p)}function Wc(e,t){const n=window.getComputedStyle(e),s=A=>(n[A]||"").split(", "),r=s(`${ut}Delay`),o=s(`${ut}Duration`),i=kr(r,o),c=s(`${Gt}Delay`),l=s(`${Gt}Duration`),f=kr(c,l);let u=null,d=0,p=0;t===ut?i>0&&(u=ut,d=i,p=o.length):t===Gt?f>0&&(u=Gt,d=f,p=l.length):(d=Math.max(i,f),u=d>0?i>f?ut:Gt:null,p=u?u===ut?o.length:l.length:0);const g=u===ut&&/\b(transform|all)(,|$)/.test(s(`${ut}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function kr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Br(n)+Br(e[s])))}function Br(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Rr(){return document.body.offsetHeight}function Gc(e,t,n){const s=e[pn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Dr=Symbol("_vod"),Jc=Symbol("_vsh"),Yc=Symbol(""),Xc=/(^|;)\s*display\s*:/;function Zc(e,t,n){const s=e.style,r=he(n);let o=!1;if(n&&!r){if(t)if(he(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&Bn(s,c,"")}else for(const i in t)n[i]==null&&Bn(s,i,"");for(const i in n)i==="display"&&(o=!0),Bn(s,i,n[i])}else if(r){if(t!==n){const i=s[Yc];i&&(n+=";"+i),s.cssText=n,o=Xc.test(n)}}else t&&e.removeAttribute("style");Dr in e&&(e[Dr]=o?s.display:"",e[Jc]&&(s.display="none"))}const Pr=/\s*!important$/;function Bn(e,t,n){if(V(n))n.forEach(s=>Bn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=eu(e,t);Pr.test(n)?e.setProperty(Tt(s),n.replace(Pr,""),"important"):e[s]=n}}const Or=["Webkit","Moz","ms"],fs={};function eu(e,t){const n=fs[t];if(n)return n;let s=je(t);if(s!=="filter"&&s in e)return fs[t]=s;s=jn(s);for(let r=0;r<Or.length;r++){const o=Or[r]+s;if(o in e)return fs[t]=o}return t}const Tr="http://www.w3.org/1999/xlink";function Mr(e,t,n,s,r,o=Zi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Tr,t.slice(6,t.length)):e.setAttributeNS(Tr,t,n):n==null||o&&!ao(n)?e.removeAttribute(t):e.setAttribute(t,o?"":_t(n)?String(n):n)}function Ir(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ci(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ao(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(r||t)}function tu(e,t,n,s){e.addEventListener(t,n,s)}function nu(e,t,n,s){e.removeEventListener(t,n,s)}const Lr=Symbol("_vei");function su(e,t,n,s,r=null){const o=e[Lr]||(e[Lr]={}),i=o[t];if(s&&i)i.value=s;else{const[c,l]=ru(t);if(s){const f=o[t]=lu(s,r);tu(e,c,f,l)}else i&&(nu(e,c,i,l),o[t]=void 0)}}const $r=/(?:Once|Passive|Capture)$/;function ru(e){let t;if($r.test(e)){t={};let s;for(;s=e.match($r);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let ds=0;const ou=Promise.resolve(),iu=()=>ds||(ou.then(()=>ds=0),ds=Date.now());function lu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ke(cu(s,n.value),t,5,[s])};return n.value=e,n.attached=iu(),n}function cu(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Nr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uu=(e,t,n,s,r,o)=>{const i=r==="svg";t==="class"?Gc(e,s,i):t==="style"?Zc(e,n,s):$n(t)?Is(t)||su(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):au(e,t,s,i))?(Ir(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Mr(e,t,s,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!he(s))?Ir(e,je(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Mr(e,t,s,i))};function au(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Nr(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nr(t)&&he(n)?!1:t in e}const fu=ve({patchProp:uu},Hc);let Fr;function du(){return Fr||(Fr=ac(fu))}const hu=(...e)=>{const t=du().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=gu(s);if(!r)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,pu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function pu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function gu(e){return he(e)?document.querySelector(e):e}var mu=!1;/*!
 * pinia v2.2.7
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Ai;const Jn=e=>Ai=e,Si=Symbol();function Rs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var rn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(rn||(rn={}));function vu(){const e=go(!0),t=e.run(()=>Qe({}));let n=[],s=[];const r=Us({install(o){Jn(r),r._a=o,o.provide(Si,r),o.config.globalProperties.$pinia=r,s.forEach(i=>n.push(i)),s=[]},use(o){return!this._a&&!mu?s.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Ei=()=>{};function jr(e,t,n,s=Ei){e.push(t);const r=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),s())};return!n&&mo()&&el(r),r}function $t(e,...t){e.slice().forEach(n=>{n(...t)})}const bu=e=>e(),Hr=Symbol(),hs=Symbol();function Ds(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,s)=>e.set(s,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],r=e[n];Rs(r)&&Rs(s)&&e.hasOwnProperty(n)&&!pe(s)&&!bt(s)?e[n]=Ds(r,s):e[n]=s}return e}const yu=Symbol();function _u(e){return!Rs(e)||!e.hasOwnProperty(yu)}const{assign:ft}=Object;function xu(e){return!!(pe(e)&&e.effect)}function Cu(e,t,n,s){const{state:r,actions:o,getters:i}=t,c=n.state.value[e];let l;function f(){c||(n.state.value[e]=r?r():{});const u=wl(n.state.value[e]);return ft(u,o,Object.keys(i||{}).reduce((d,p)=>(d[p]=Us(me(()=>{Jn(n);const g=n._s.get(e);return i[p].call(g,g)})),d),{}))}return l=ki(e,f,t,n,s,!0),l}function ki(e,t,n={},s,r,o){let i;const c=ft({actions:{}},n),l={deep:!0};let f,u,d=[],p=[],g;const A=s.state.value[e];!o&&!A&&(s.state.value[e]={}),Qe({});let B;function H(K){let _;f=u=!1,typeof K=="function"?(K(s.state.value[e]),_={type:rn.patchFunction,storeId:e,events:g}):(Ds(s.state.value[e],K),_={type:rn.patchObject,payload:K,storeId:e,events:g});const w=B=Symbol();Ks().then(()=>{B===w&&(f=!0)}),u=!0,$t(d,_,s.state.value[e])}const N=o?function(){const{state:_}=n,w=_?_():{};this.$patch(T=>{ft(T,w)})}:Ei;function I(){i.stop(),d=[],p=[],s._s.delete(e)}const $=(K,_="")=>{if(Hr in K)return K[hs]=_,K;const w=function(){Jn(s);const T=Array.from(arguments),k=[],G=[];function ae(W){k.push(W)}function Ce(W){G.push(W)}$t(p,{args:T,name:w[hs],store:z,after:ae,onError:Ce});let oe;try{oe=K.apply(this&&this.$id===e?this:z,T)}catch(W){throw $t(G,W),W}return oe instanceof Promise?oe.then(W=>($t(k,W),W)).catch(W=>($t(G,W),Promise.reject(W))):($t(k,oe),oe)};return w[Hr]=!0,w[hs]=_,w},P={_p:s,$id:e,$onAction:jr.bind(null,p),$patch:H,$reset:N,$subscribe(K,_={}){const w=jr(d,K,_.detached,()=>T()),T=i.run(()=>Vt(()=>s.state.value[e],k=>{(_.flush==="sync"?u:f)&&K({storeId:e,type:rn.direct,events:g},k)},ft({},l,_)));return w},$dispose:I},z=vn(P);s._s.set(e,z);const J=(s._a&&s._a.runWithContext||bu)(()=>s._e.run(()=>(i=go()).run(()=>t({action:$}))));for(const K in J){const _=J[K];if(pe(_)&&!xu(_)||bt(_))o||(A&&_u(_)&&(pe(_)?_.value=A[K]:Ds(_,A[K])),s.state.value[e][K]=_);else if(typeof _=="function"){const w=$(_,K);J[K]=w,c.actions[K]=_}}return ft(z,J),ft(X(z),J),Object.defineProperty(z,"$state",{get:()=>s.state.value[e],set:K=>{H(_=>{ft(_,K)})}}),s._p.forEach(K=>{ft(z,i.run(()=>K({store:z,app:s._a,pinia:s,options:c})))}),A&&o&&n.hydrate&&n.hydrate(z.$state,A),f=!0,u=!0,z}/*! #__NO_SIDE_EFFECTS__ */function wu(e,t,n){let s,r;const o=typeof t=="function";s=e,r=o?n:t;function i(c,l){const f=sc();return c=c||(f?Ue(Si,null):null),c&&Jn(c),c=Ai,c._s.has(s)||(o?ki(s,t,r,c):Cu(s,r,c)),c._s.get(s)}return i.$id=s,i}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ft=typeof document<"u";function Bi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Au(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Bi(e.default)}const te=Object.assign;function ps(e,t){const n={};for(const s in t){const r=t[s];n[s]=qe(r)?r.map(e):e(r)}return n}const on=()=>{},qe=Array.isArray,Ri=/#/g,Su=/&/g,Eu=/\//g,ku=/=/g,Bu=/\?/g,Di=/\+/g,Ru=/%5B/g,Du=/%5D/g,Pi=/%5E/g,Pu=/%60/g,Oi=/%7B/g,Ou=/%7C/g,Ti=/%7D/g,Tu=/%20/g;function Zs(e){return encodeURI(""+e).replace(Ou,"|").replace(Ru,"[").replace(Du,"]")}function Mu(e){return Zs(e).replace(Oi,"{").replace(Ti,"}").replace(Pi,"^")}function Ps(e){return Zs(e).replace(Di,"%2B").replace(Tu,"+").replace(Ri,"%23").replace(Su,"%26").replace(Pu,"`").replace(Oi,"{").replace(Ti,"}").replace(Pi,"^")}function Iu(e){return Ps(e).replace(ku,"%3D")}function Lu(e){return Zs(e).replace(Ri,"%23").replace(Bu,"%3F")}function $u(e){return e==null?"":Lu(e).replace(Eu,"%2F")}function gn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Nu=/\/$/,Fu=e=>e.replace(Nu,"");function gs(e,t,n="/"){let s,r={},o="",i="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=t.slice(0,l),o=t.slice(l+1,c>-1?c:t.length),r=e(o)),c>-1&&(s=s||t.slice(0,c),i=t.slice(c,t.length)),s=Vu(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:gn(i)}}function ju(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Qr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Hu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&zt(t.matched[s],n.matched[r])&&Mi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function zt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Qu(e[n],t[n]))return!1;return!0}function Qu(e,t){return qe(e)?Vr(e,t):qe(t)?Vr(t,e):e===t}function Vr(e,t){return qe(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Vu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,i,c;for(i=0;i<s.length;i++)if(c=s[i],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mn;(function(e){e.pop="pop",e.push="push"})(mn||(mn={}));var ln;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ln||(ln={}));function zu(e){if(!e)if(Ft){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Fu(e)}const Uu=/^[^#]+#/;function Ku(e,t){return e.replace(Uu,"#")+t}function qu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Yn=()=>({left:window.scrollX,top:window.scrollY});function Wu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=qu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function zr(e,t){return(history.state?history.state.position-t:-1)+e}const Os=new Map;function Gu(e,t){Os.set(e,t)}function Ju(e){const t=Os.get(e);return Os.delete(e),t}let Yu=()=>location.protocol+"//"+location.host;function Ii(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let c=r.includes(e.slice(o))?e.slice(o).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),Qr(l,"")}return Qr(n,e)+s+r}function Xu(e,t,n,s){let r=[],o=[],i=null;const c=({state:p})=>{const g=Ii(e,location),A=n.value,B=t.value;let H=0;if(p){if(n.value=g,t.value=p,i&&i===A){i=null;return}H=B?p.position-B.position:0}else s(g);r.forEach(N=>{N(n.value,A,{delta:H,type:mn.pop,direction:H?H>0?ln.forward:ln.back:ln.unknown})})};function l(){i=n.value}function f(p){r.push(p);const g=()=>{const A=r.indexOf(p);A>-1&&r.splice(A,1)};return o.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:Yn()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function Ur(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Yn():null}}function Zu(e){const{history:t,location:n}=window,s={value:Ii(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,f,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Yu()+e+l;try{t[u?"replaceState":"pushState"](f,"",p),r.value=f}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function i(l,f){const u=te({},t.state,Ur(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});o(l,u,!0),s.value=l}function c(l,f){const u=te({},r.value,t.state,{forward:l,scroll:Yn()});o(u.current,u,!0);const d=te({},Ur(s.value,l,null),{position:u.position+1},f);o(l,d,!1),s.value=l}return{location:s,state:r,push:c,replace:i}}function ea(e){e=zu(e);const t=Zu(e),n=Xu(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=te({location:"",base:e,go:s,createHref:Ku.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function ta(e){return typeof e=="string"||e&&typeof e=="object"}function Li(e){return typeof e=="string"||typeof e=="symbol"}const $i=Symbol("");var Kr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kr||(Kr={}));function Ut(e,t){return te(new Error,{type:e,[$i]:!0},t)}function st(e,t){return e instanceof Error&&$i in e&&(t==null||!!(e.type&t))}const qr="[^/]+?",na={sensitive:!1,strict:!1,start:!0,end:!0},sa=/[.+*?^${}()[\]/\\]/g;function ra(e,t){const n=te({},na,t),s=[];let r=n.start?"^":"";const o=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(sa,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:B,optional:H,regexp:N}=p;o.push({name:A,repeatable:B,optional:H});const I=N||qr;if(I!==qr){g+=10;try{new RegExp(`(${I})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${A}" (${I}): `+P.message)}}let $=B?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;d||($=H&&f.length<2?`(?:/${$})`:"/"+$),H&&($+="?"),r+=$,g+=20,H&&(g+=-8),B&&(g+=-20),I===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function c(f){const u=f.match(i),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",A=o[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:A,repeatable:B,optional:H}=g,N=A in f?f[A]:"";if(qe(N)&&!B)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const I=qe(N)?N.join("/"):N;if(!I)if(H)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=I}}return u||"/"}return{re:i,score:s,keys:o,parse:c,stringify:l}}function oa(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ni(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=oa(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Wr(s))return 1;if(Wr(r))return-1}return r.length-s.length}function Wr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ia={type:0,value:""},la=/[a-zA-Z0-9_]/;function ca(e){if(!e)return[[]];if(e==="/")return[[ia]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let c=0,l,f="",u="";function d(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),i()):l===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:la.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),i(),r}function ua(e,t,n){const s=ra(ca(e.path),n),r=te(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function aa(e,t){const n=[],s=new Map;t=Xr({strict:!1,end:!0,sensitive:!1},t);function r(d){return s.get(d)}function o(d,p,g){const A=!g,B=Jr(d);B.aliasOf=g&&g.record;const H=Xr(t,d),N=[B];if("alias"in d){const P=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of P)N.push(Jr(te({},B,{components:g?g.record.components:B.components,path:z,aliasOf:g?g.record:B})))}let I,$;for(const P of N){const{path:z}=P;if(p&&z[0]!=="/"){const Z=p.record.path,J=Z[Z.length-1]==="/"?"":"/";P.path=p.record.path+(z&&J+z)}if(I=ua(P,p,H),g?g.alias.push(I):($=$||I,$!==I&&$.alias.push(I),A&&d.name&&!Yr(I)&&i(d.name)),Fi(I)&&l(I),B.children){const Z=B.children;for(let J=0;J<Z.length;J++)o(Z[J],I,g&&g.children[J])}g=g||I}return $?()=>{i($)}:on}function i(d){if(Li(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return n}function l(d){const p=ha(d,n);n.splice(p,0,d),d.record.name&&!Yr(d)&&s.set(d.record.name,d)}function f(d,p){let g,A={},B,H;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Ut(1,{location:d});H=g.record.name,A=te(Gr(p.params,g.keys.filter($=>!$.optional).concat(g.parent?g.parent.keys.filter($=>$.optional):[]).map($=>$.name)),d.params&&Gr(d.params,g.keys.map($=>$.name))),B=g.stringify(A)}else if(d.path!=null)B=d.path,g=n.find($=>$.re.test(B)),g&&(A=g.parse(B),H=g.record.name);else{if(g=p.name?s.get(p.name):n.find($=>$.re.test(p.path)),!g)throw Ut(1,{location:d,currentLocation:p});H=g.record.name,A=te({},p.params,d.params),B=g.stringify(A)}const N=[];let I=g;for(;I;)N.unshift(I.record),I=I.parent;return{name:H,path:B,params:A,matched:N,meta:da(N)}}e.forEach(d=>o(d));function u(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:i,clearRoutes:u,getRoutes:c,getRecordMatcher:r}}function Gr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Jr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fa(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fa(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Yr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function da(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Xr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function ha(e,t){let n=0,s=t.length;for(;n!==s;){const o=n+s>>1;Ni(e,t[o])<0?s=o:n=o+1}const r=pa(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function pa(e){let t=e;for(;t=t.parent;)if(Fi(t)&&Ni(e,t)===0)return t}function Fi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ga(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Di," "),i=o.indexOf("="),c=gn(i<0?o:o.slice(0,i)),l=i<0?null:gn(o.slice(i+1));if(c in t){let f=t[c];qe(f)||(f=t[c]=[f]),f.push(l)}else t[c]=l}return t}function Zr(e){let t="";for(let n in e){const s=e[n];if(n=Iu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(qe(s)?s.map(o=>o&&Ps(o)):[s&&Ps(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function ma(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=qe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const va=Symbol(""),eo=Symbol(""),Xn=Symbol(""),ji=Symbol(""),Ts=Symbol("");function Jt(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function gt(e,t,n,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,l)=>{const f=p=>{p===!1?l(Ut(4,{from:n,to:t})):p instanceof Error?l(p):ta(p)?l(Ut(2,{from:t,to:p})):(i&&s.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),c())},u=o(()=>e.call(s&&s.instances[r],t,n,f));let d=Promise.resolve(u);e.length<3&&(d=d.then(f)),d.catch(p=>l(p))})}function ms(e,t,n,s,r=o=>o()){const o=[];for(const i of e)for(const c in i.components){let l=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(Bi(l)){const u=(l.__vccOpts||l)[t];u&&o.push(gt(u,n,s,i,c,r))}else{let f=l();o.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const d=Au(u)?u.default:u;i.mods[c]=u,i.components[c]=d;const g=(d.__vccOpts||d)[t];return g&&gt(g,n,s,i,c,r)()}))}}return o}function to(e){const t=Ue(Xn),n=Ue(ji),s=me(()=>{const l=Ve(e.to);return t.resolve(l)}),r=me(()=>{const{matched:l}=s.value,{length:f}=l,u=l[f-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(zt.bind(null,u));if(p>-1)return p;const g=no(l[f-2]);return f>1&&no(u)===g&&d[d.length-1].path!==g?d.findIndex(zt.bind(null,l[f-2])):p}),o=me(()=>r.value>-1&&Ca(n.params,s.value.params)),i=me(()=>r.value>-1&&r.value===n.matched.length-1&&Mi(n.params,s.value.params));function c(l={}){if(xa(l)){const f=t[Ve(e.replace)?"replace":"push"](Ve(e.to)).catch(on);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:me(()=>s.value.href),isActive:o,isExactActive:i,navigate:c}}function ba(e){return e.length===1?e[0]:e}const ya=Kt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(e,{slots:t}){const n=vn(to(e)),{options:s}=Ue(Xn),r=me(()=>({[so(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[so(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&ba(t.default(n));return e.custom?o:Xs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),_a=ya;function xa(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ca(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!qe(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function no(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const so=(e,t,n)=>e??t??n,wa=Kt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ue(Ts),r=me(()=>e.route||s.value),o=Ue(eo,0),i=me(()=>{let f=Ve(o);const{matched:u}=r.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),c=me(()=>r.value.matched[i.value]);En(eo,me(()=>i.value+1)),En(va,c),En(Ts,r);const l=Qe();return Vt(()=>[l.value,c.value,e.name],([f,u,d],[p,g,A])=>{u&&(u.instances[d]=f,g&&g!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),f&&u&&(!g||!zt(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(B=>B(f))},{flush:"post"}),()=>{const f=r.value,u=e.name,d=c.value,p=d&&d.components[u];if(!p)return ro(n.default,{Component:p,route:f});const g=d.props[u],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,H=Xs(p,te({},A,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return ro(n.default,{Component:H,route:f})||H}}});function ro(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Aa=wa;function Sa(e){const t=aa(e.routes,e),n=e.parseQuery||ga,s=e.stringifyQuery||Zr,r=e.history,o=Jt(),i=Jt(),c=Jt(),l=_l(at);let f=at;Ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ps.bind(null,b=>""+b),d=ps.bind(null,$u),p=ps.bind(null,gn);function g(b,M){let D,F;return Li(b)?(D=t.getRecordMatcher(b),F=M):F=b,t.addRoute(F,D)}function A(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function B(){return t.getRoutes().map(b=>b.record)}function H(b){return!!t.getRecordMatcher(b)}function N(b,M){if(M=te({},M||l.value),typeof b=="string"){const h=gs(n,b,M.path),m=t.resolve({path:h.path},M),y=r.createHref(h.fullPath);return te(h,m,{params:p(m.params),hash:gn(h.hash),redirectedFrom:void 0,href:y})}let D;if(b.path!=null)D=te({},b,{path:gs(n,b.path,M.path).path});else{const h=te({},b.params);for(const m in h)h[m]==null&&delete h[m];D=te({},b,{params:d(h)}),M.params=d(M.params)}const F=t.resolve(D,M),se=b.hash||"";F.params=u(p(F.params));const fe=ju(s,te({},b,{hash:Mu(se),path:F.path})),a=r.createHref(fe);return te({fullPath:fe,hash:se,query:s===Zr?ma(b.query):b.query||{}},F,{redirectedFrom:void 0,href:a})}function I(b){return typeof b=="string"?gs(n,b,l.value.path):te({},b)}function $(b,M){if(f!==b)return Ut(8,{from:M,to:b})}function P(b){return J(b)}function z(b){return P(te(I(b),{replace:!0}))}function Z(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let F=typeof D=="function"?D(b):D;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=I(F):{path:F},F.params={}),te({query:b.query,hash:b.hash,params:F.path!=null?{}:b.params},F)}}function J(b,M){const D=f=N(b),F=l.value,se=b.state,fe=b.force,a=b.replace===!0,h=Z(D);if(h)return J(te(I(h),{state:typeof h=="object"?te({},se,h.state):se,force:fe,replace:a}),M||D);const m=D;m.redirectedFrom=M;let y;return!fe&&Hu(s,F,D)&&(y=Ut(16,{to:m,from:F}),We(F,F,!0,!1)),(y?Promise.resolve(y):w(m,F)).catch(v=>st(v)?st(v,2)?v:ct(v):ee(v,m,F)).then(v=>{if(v){if(st(v,2))return J(te({replace:a},I(v.to),{state:typeof v.to=="object"?te({},se,v.to.state):se,force:fe}),M||m)}else v=k(m,F,!0,a,se);return T(m,F,v),v})}function K(b,M){const D=$(b,M);return D?Promise.reject(D):Promise.resolve()}function _(b){const M=It.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(b):b()}function w(b,M){let D;const[F,se,fe]=Ea(b,M);D=ms(F.reverse(),"beforeRouteLeave",b,M);for(const h of F)h.leaveGuards.forEach(m=>{D.push(gt(m,b,M))});const a=K.bind(null,b,M);return D.push(a),$e(D).then(()=>{D=[];for(const h of o.list())D.push(gt(h,b,M));return D.push(a),$e(D)}).then(()=>{D=ms(se,"beforeRouteUpdate",b,M);for(const h of se)h.updateGuards.forEach(m=>{D.push(gt(m,b,M))});return D.push(a),$e(D)}).then(()=>{D=[];for(const h of fe)if(h.beforeEnter)if(qe(h.beforeEnter))for(const m of h.beforeEnter)D.push(gt(m,b,M));else D.push(gt(h.beforeEnter,b,M));return D.push(a),$e(D)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),D=ms(fe,"beforeRouteEnter",b,M,_),D.push(a),$e(D))).then(()=>{D=[];for(const h of i.list())D.push(gt(h,b,M));return D.push(a),$e(D)}).catch(h=>st(h,8)?h:Promise.reject(h))}function T(b,M,D){c.list().forEach(F=>_(()=>F(b,M,D)))}function k(b,M,D,F,se){const fe=$(b,M);if(fe)return fe;const a=M===at,h=Ft?history.state:{};D&&(F||a?r.replace(b.fullPath,te({scroll:a&&h&&h.scroll},se)):r.push(b.fullPath,se)),l.value=b,We(b,M,D,a),ct()}let G;function ae(){G||(G=r.listen((b,M,D)=>{if(!_n.listening)return;const F=N(b),se=Z(F);if(se){J(te(se,{replace:!0,force:!0}),F).catch(on);return}f=F;const fe=l.value;Ft&&Gu(zr(fe.fullPath,D.delta),Yn()),w(F,fe).catch(a=>st(a,12)?a:st(a,2)?(J(te(I(a.to),{force:!0}),F).then(h=>{st(h,20)&&!D.delta&&D.type===mn.pop&&r.go(-1,!1)}).catch(on),Promise.reject()):(D.delta&&r.go(-D.delta,!1),ee(a,F,fe))).then(a=>{a=a||k(F,fe,!1),a&&(D.delta&&!st(a,8)?r.go(-D.delta,!1):D.type===mn.pop&&st(a,20)&&r.go(-1,!1)),T(F,fe,a)}).catch(on)}))}let Ce=Jt(),oe=Jt(),W;function ee(b,M,D){ct(b);const F=oe.list();return F.length?F.forEach(se=>se(b,M,D)):console.error(b),Promise.reject(b)}function et(){return W&&l.value!==at?Promise.resolve():new Promise((b,M)=>{Ce.add([b,M])})}function ct(b){return W||(W=!b,ae(),Ce.list().forEach(([M,D])=>b?D(b):M()),Ce.reset()),b}function We(b,M,D,F){const{scrollBehavior:se}=e;if(!Ft||!se)return Promise.resolve();const fe=!D&&Ju(zr(b.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return Ks().then(()=>se(b,M,fe)).then(a=>a&&Wu(a)).catch(a=>ee(a,b,M))}const Be=b=>r.go(b);let Mt;const It=new Set,_n={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:H,getRoutes:B,resolve:N,options:e,push:P,replace:z,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:oe.add,isReady:et,install(b){const M=this;b.component("RouterLink",_a),b.component("RouterView",Aa),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(l)}),Ft&&!Mt&&l.value===at&&(Mt=!0,P(r.location).catch(se=>{}));const D={};for(const se in at)Object.defineProperty(D,se,{get:()=>l.value[se],enumerable:!0});b.provide(Xn,M),b.provide(ji,Po(D)),b.provide(Ts,l);const F=b.unmount;It.add(b),b.unmount=function(){It.delete(b),It.size<1&&(f=at,G&&G(),G=null,l.value=at,Mt=!1,W=!1),F()}}};function $e(b){return b.reduce((M,D)=>M.then(()=>_(D)),Promise.resolve())}return _n}function Ea(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const c=t.matched[i];c&&(e.matched.find(f=>zt(f,c))?s.push(c):n.push(c));const l=e.matched[i];l&&(t.matched.find(f=>zt(f,l))||r.push(l))}return[n,s,r]}function er(){return Ue(Xn)}const tr=wu("quiz",{state:()=>({currentQuizBank:null,currentQuestionIndex:0,userAnswers:new Map,markedQuestions:new Set,score:0,isComplete:!1}),actions:{setQuizBank(e){this.currentQuizBank=e,this.currentQuestionIndex=0,this.userAnswers.clear(),this.score=0,this.isComplete=!1},submitAnswer(e){if(!this.currentQuizBank)return;this.userAnswers.set(this.currentQuestionIndex,e);const t=this.currentQuizBank.questions[this.currentQuestionIndex];if(Array.isArray(e)&&Array.isArray(t.answer)){const n=[...e].sort().join(""),s=[...t.answer].sort().join("");n===s&&this.score++}else e===t.answer&&this.score++},getSavedAnswer(e){return this.userAnswers.get(e)},nextQuestion(){this.currentQuizBank&&(this.currentQuestionIndex<this.currentQuizBank.questions.length-1?this.currentQuestionIndex++:this.isComplete=!0)},previousQuestion(){this.currentQuestionIndex>0&&this.currentQuestionIndex--},toggleMarkQuestion(e){this.markedQuestions.has(e)?this.markedQuestions.delete(e):this.markedQuestions.add(e)},jumpToQuestion(e){e>=0&&this.currentQuizBank&&e<this.currentQuizBank.questions.length&&(this.currentQuestionIndex=e)}},getters:{progress:e=>{if(!e.currentQuizBank)return 0;const t=e.userAnswers.size;return Math.round(t/e.currentQuizBank.questions.length*100)},isAnswerCorrect:e=>t=>{var r;const n=e.userAnswers.get(t),s=(r=e.currentQuizBank)==null?void 0:r.questions[t];if(!n||!s)return!1;if(Array.isArray(n)&&Array.isArray(s.answer)){const o=[...n].sort().join(""),i=[...s.answer].sort().join("");return o===i}return n===s.answer}}}),ka=`**一、单选题（30道）**

1. 计算机系统的层次结构中，最底层是（  ）
A. 微程序设计级
B. 机器语言级
C. 操作系统级
D. 汇编语言级
答案：A

2. 以下哪种数制转换是正确的：二进制数101转换为十进制数是（  ）
A. 4
B. 5
C. 6
D. 7
答案：B

3. 在定点数表示中，小数点的位置（  ）
A. 固定不变
B. 可以随意移动
C. 根据数据大小确定
D. 由用户临时指定
答案：A

4. 以下哪种存储器属于易失性存储器（  ）
A. ROM
B. RAM
C. CD - ROM
D. 闪存
答案：B

5. 指令系统中，操作码字段的作用是（  ）
A. 指出操作数的地址
B. 指出操作的类型
C. 指出数据的存储方式
D. 指出指令的长度
答案：B

6. CISC的特点是（  ）
A. 指令系统简单
B. 指令数量多
C. 指令格式固定
D. 指令执行效率高
答案：B

7. CPU主要由（  ）组成。
A. 运算器和控制器
B. 存储器和控制器
C. 运算器和存储器
D. 加法器和寄存器
答案：A

8. 微型计算机的三大总线不包括（  ）
A. 数据总线
B. 地址总线
C. 控制总线
D. 存储总线
答案：D

9. 数据结构中，链表的特点是（  ）
A. 存储空间连续
B. 插入和删除操作复杂
C. 可以方便地进行随机访问
D. 节点之间通过指针相连
答案：D

10. 栈的操作原则是（  ）
A. 先进先出
B. 先进后出
C. 随机进出
D. 只进不出
答案：B

11. 以下哪种排序方法是稳定排序（  ）
A. 快速排序
B. 希尔排序
C. 冒泡排序
D. 堆排序
答案：C

12. 计算机网络拓扑结构不包括（  ）
A. 星型
B. 环型
C. 树型
D. 立体型
答案：D

13. 计算机网络的主要性能指标不包括（  ）
A. 带宽
B. 时延
C. 误码率
D. 亮度
答案：D

14. 数据链路层的主要功能不包括（  ）
A. 帧同步
B. 差错控制
C. 路由选择
D. 流量控制
答案：C

15. 操作系统的基本特征不包括（  ）
A. 并发
B. 共享
C. 虚拟
D. 单一
答案：D

16. 进程管理中，进程的三种基本状态不包括（  ）
A. 就绪
B. 执行
C. 阻塞
D. 休眠
答案：D

17. 数据库系统中，关系模型的基本数据结构是（  ）
A. 树
B. 图
C. 二维表
D. 链表
答案：C

18. 关系数据库的标准语言是（  ）
A. SQL
B. C++
C. Java
D. Python
答案：A

19. 在通信原理中，功率信号的能量是（  ）
A. 有限的
B. 无限的
C. 为0
D. 不确定
答案：B

20. 以下哪种信道属于恒参信道（  ）
A. 短波电离层反射信道
B. 微波视距中继信道
C. 对流层散射信道
D. 超短波流星余迹散射信道
答案：B

21. 模拟通信系统中，幅度调制的本质是（  ）
A. 改变信号的频率
B. 改变信号的相位
C. 改变信号的幅度
D. 改变信号的带宽
答案：C

22. 数字基带传输中，无码间干扰的基带传输特性要求（  ）
A. 系统带宽无限大
B. 系统带宽为信号带宽的一半
C. 系统带宽等于信号带宽
D. 满足奈奎斯特第一准则
答案：D

23. 通信网理论基础中，链路层协议主要负责（  ）
A. 端到端的可靠传输
B. 节点到节点的传输
C. 网络拓扑设计
D. 流量和拥塞控制
答案：B

24. 光纤通信中，光纤的数值孔径反映了（  ）
A. 光纤的粗细程度
B. 光纤接收光的能力
C. 光纤的传输速度
D. 光纤的损耗大小
答案：B

25. 光发射机中，半导体激光器（LD）与半导体发光二极管（LED）相比，（  ）
A. LD发光效率更高
B. LED谱线宽度更窄
C. LD输出功率更大
D. LED调制速度更快
答案：C

26. 光接收机的主要性能参数不包括（  ）
A. 灵敏度
B. 动态范围
C. 发射功率
D. 误码率
答案：C

27. 数字化新技术中，数据挖掘的常用算法不包括（  ）
A. 决策树算法
B. 朴素贝叶斯算法
C. 冒泡排序算法
D. K - 均值算法
答案：C

28. 云计算的基本特点不包括（  ）
A. 超大规模
B. 实体化
C. 高可扩展性
D. 通用性
答案：B

29. 人工智能中，机器学习的主要任务不包括（  ）
A. 监督学习
B. 无监督学习
C. 半监督学习
D. 无学习
答案：D

30. 以下关于计算机组成原理的性能指标说法错误的是（  ）
A. 主频越高，运算速度越快
B. 字长越长，数据处理精度越高
C. 存储容量越大越好
D. CPI与指令系统无关
答案：D


**二、判断题（20道）**

1. 计算机系统中的软件系统包括系统软件和应用软件。（  ）
答案：正确

2. 二进制数的运算规则比十进制数简单。（  ）
答案：正确

3. 浮点数的表示范围比定点数小。（  ）
答案：错误

4. 高速缓冲存储器（Cache）位于CPU和主存之间，用于提高存储速度。（  ）
答案：正确

5. RISC指令系统的指令长度是固定的。（  ）
答案：正确

6. 微型计算机的时钟频率决定了CPU的运行速度。（  ）
答案：正确

7. 数据结构中的数组可以动态改变大小。（  ）
答案：错误

8. 栈和队列都是线性数据结构。（  ）
答案：正确

9. 快速排序是一种时间复杂度为O(nlogn)的排序算法。（  ）
答案：正确

10. 计算机网络是将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统。（  ）
答案：正确

11. 网络层主要负责主机之间的通信。（  ）
答案：正确

12. 操作系统是管理计算机硬件与软件资源的程序。（  ）
答案：正确

13. 进程是程序的一次执行过程。（  ）
答案：正确

14. 数据库系统中，实体完整性是指主键不能为NULL。（  ）
答案：正确

15. 通信原理中，信号的频谱是指信号的频率组成。（  ）
答案：正确

16. 随参信道的传输特性是随时间随机变化的。（  ）
答案：正确

17. 数字信号的载波传输中，二进制数字调制方式有ASK、FSK、PSK。（  ）
答案：正确

18. 通信网理论基础中，排队系统的延时与到达率和服务率有关。（  ）
答案：正确

19. 光纤通信中，光纤的损耗越小，传输距离越远。（  ）
答案：正确

20. 云计算中的虚拟化技术可以提高资源利用率。（  ）
答案：正确


**三、多选题（10道）**

1. 计算机系统的性能指标包括（  ）
A. 主频
B. 字长
C. 存储容量
D. 运算速度
答案：ABCD

2. 以下属于存储器类型的有（  ）
A. 硬盘
B. 内存条
C. U盘
D. 光盘
答案：ABCD

3. 指令系统的寻址方式有（  ）
A. 立即寻址
B. 直接寻址
C. 间接寻址
D. 寄存器寻址
答案：ABCD

4. 数据结构中，树的遍历方式有（  ）
A. 先序遍历
B. 中序遍历
C. 后序遍历
D. 层次遍历
答案：ABCD

5. 计算机网络的应用层协议有（  ）
A. HTTP
B. FTP
C. SMTP
D. DNS
答案：ABCD

6. 操作系统的存储管理功能包括（  ）
A. 内存分配
B. 内存保护
C. 地址映射
D. 内存扩充
答案：ABCD

7. 数据库系统的安全性措施包括（  ）
A. 用户认证
B. 访问控制
C. 数据加密
D. 视图保护
答案：ABCD

8. 通信原理中，数字基带传输的常用码型有（  ）
A. 单极性不归零码
B. 双极性不归零码
C. 单极性归零码
D. 曼彻斯特码
答案：ABCD

9. 光纤通信系统的主要组成部分包括（  ）
A. 光发射机
B. 光纤
C. 光放大器
D. 光接收机
答案：ABD

10. 数字化新技术中的人工智能涉及的领域有（  ）
A. 自然语言处理
B. 计算机视觉
C. 机器人学
D. 语音识别
答案：ABCD`,Ba=`**一、单选题（30 道）**

1. 计算机中，1MB 等于（  ）
A. 1000B
B. 1024B
C. 1000KB
D. 1024KB
答案：D

2. 以下哪种编码方式常用于计算机内部数据表示，且具有唯一性（  ）
A. ASCII 码
B. 格雷码
C. 补码
D. 移码
答案：C

3. 虚拟存储器的作用是（  ）
A. 提高外存的存取速度
B. 扩大主存的存储空间
C. 提高外存的利用率
D. 扩大 CPU 可寻址的存储空间
答案：B

4. 指令周期是指（  ）
A. CPU 从主存取出一条指令的时间
B. CPU 执行一条指令的时间
C. CPU 从主存取出一条指令加上执行这条指令的时间
D. 时钟周期时间
答案：C

5. 数据结构中，若线性表采用链式存储结构，则其地址（  ）
A. 必须是连续的
B. 一定是不连续的
C. 部分地址必须连续
D. 连续与否均可以
答案：D

6. 对一个有向图进行拓扑排序，得到的拓扑序列（  ）
A. 唯一
B. 不唯一
C. 一定是逆序的
D. 一定是顺序的
答案：B

7. 计算机网络中，IP 地址的作用是（  ）
A. 标识网络中的设备
B. 进行数据加密
C. 控制网络流量
D. 选择传输路径
答案：A

8. 传输层的 TCP 协议提供的是（  ）
A. 无连接不可靠服务
B. 无连接可靠服务
C. 面向连接不可靠服务
D. 面向连接可靠服务
答案：D

9. 操作系统中，死锁产生的必要条件不包括（  ）
A. 互斥条件
B. 请求与保持条件
C. 可剥夺条件
D. 顺序执行条件
答案：D

10. 关系数据库中，实现实体之间多对多联系是通过（  ）
A. 外键
B. 主键
C. 关系表
D. 索引
答案：C

11. 在通信原理中，信号带宽是指（  ）
A. 信号最高频率与最低频率之差
B. 信号的平均频率
C. 信号的中心频率
D. 信号的瞬时频率变化范围
答案：A

12. 以下哪种调制方式抗噪声性能最好（  ）
A. AM
B. FM
C. DSB
D. SSB
答案：B

13. 数字基带传输系统中，眼图可以用来衡量（  ）
A. 码间干扰和噪声的大小
B. 信号的带宽
C. 信号的功率
D. 信号的频率
答案：A

14. 通信网理论基础中，网络层的路由算法目标不包括（  ）
A. 提高网络带宽利用率
B. 降低传输延迟
C. 减少网络拥塞
D. 增加网络节点数量
答案：D

15. 光纤通信中，单模光纤相比于多模光纤（  ）
A. 传输距离短，带宽窄
B. 传输距离长，带宽宽
C. 传输距离短，带宽宽
D. 传输距离长，带宽窄
答案：B

16. 光发射机中，光调制的目的是（  ）
A. 提高光功率
B. 改变光的波长
C. 将电信号加载到光载波上
D. 降低光噪声
答案：C

17. 光接收机中，前置放大器的主要作用是（  ）
A. 放大光信号
B. 放大电信号
C. 对光信号进行解调
D. 对电信号进行编码
答案：B

18. 数字化新技术中，云计算的服务模式不包括（  ）
A. IaaS
B. PaaS
C. SaaS
D. TaaS
答案：D

19. 人工智能中，深度学习的典型模型是（  ）
A. 决策树
B. 神经网络
C. 贝叶斯网络
D. 支持向量机
答案：B

20. 计算机组成原理中，中断向量地址是（  ）
A. 中断服务程序的入口地址
B. 中断服务程序的返回地址
C. 中断源的识别码
D. 中断控制器的地址
答案：A

21. 以下哪种存储器的读写速度最快（  ）
A. 硬盘
B. 内存
C. 高速缓存（Cache）
D. 光盘
答案：C

22. 指令系统中，间接寻址方式中，操作数的地址存放在（  ）
A. 指令中
B. 寄存器中
C. 内存单元中
D. 外存单元中
答案：C

23. 数据结构中，平衡二叉树的特点是（  ）
A. 左右子树高度差不超过 1
B. 所有节点的度都为 2
C. 所有叶子节点在同一层
D. 节点值按顺序排列
答案：A

24. 计算机网络中，交换机工作在（  ）
A. 物理层
B. 数据链路层
C. 网络层
D. 传输层
答案：B

25. 操作系统中，文件系统的目录结构不包括（  ）
A. 单级目录结构
B. 二级目录结构
C. 三级目录结构
D. 五级目录结构
答案：D

26. 数据库系统中，SQL 语言中的 DELETE 语句用于（  ）
A. 删除数据库
B. 删除表
C. 删除表中的数据
D. 删除表的结构
答案：C

27. 通信原理中，香农公式表明了（  ）
A. 信号带宽与信道容量的关系
B. 信号功率与信道容量的关系
C. 信号带宽、功率与信道容量的关系
D. 信号误码率与信道容量的关系
答案：C

28. 数字信号的载波传输中，多进制数字调制与二进制数字调制相比（  ）
A. 频谱利用率低，抗干扰能力强
B. 频谱利用率高，抗干扰能力强
C. 频谱利用率低，抗干扰能力弱
D. 频谱利用率高，抗干扰能力弱
答案：D

29. 通信网理论基础中，流量控制的主要目的是（  ）
A. 提高网络传输速度
B. 防止网络拥塞
C. 优化网络拓扑结构
D. 增加网络可靠性
答案：B

30. 光纤通信器件中，光放大器的主要作用是（  ）
A. 放大光信号功率
B. 改变光信号的波长
C. 对光信号进行滤波
D. 连接不同的光纤
答案：A

**二、判断题（20 道）**

1. 计算机系统中，硬件和软件是相互独立的，没有关联。（  ）
答案：错误

2. 原码、反码和补码对于正数的表示是相同的。（  ）
答案：正确

3. 高速缓冲存储器（Cache）的内容是主存内容的副本。（  ）
答案：正确

4. 指令的寻址方式越多，指令系统越复杂，计算机的性能就越好。（  ）
答案：错误

5. 数据结构中的链表只能是单向链表。（  ）
答案：错误

6. 图的最小生成树是唯一的。（  ）
答案：错误

7. 计算机网络中，MAC 地址是全球唯一的物理地址。（  ）
答案：正确

8. UDP 协议适用于对数据传输可靠性要求不高，但对传输效率要求较高的应用场景。（  ）
答案：正确

9. 操作系统中的进程调度算法只有先来先服务和短作业优先两种。（  ）
答案：错误

10. 关系数据库中，外键可以取空值。（  ）
答案：正确

11. 在通信原理中，所有的信号都是能量信号。（  ）
答案：错误

12. 模拟通信系统中，调制的目的只是为了提高信号的频率。（  ）
答案：错误

13. 数字基带传输系统中，码间干扰只与信道特性有关。（  ）
答案：错误

14. 通信网理论基础中，网络拓扑结构一旦确定就不能改变。（  ）
答案：错误

15. 光纤通信中，光纤的弯曲半径越小越好。（  ）
答案：错误

16. 光发射机中，光源的发光功率越大越好。（  ）
答案：错误

17. 光接收机的误码率只与光检测器的性能有关。（  ）
答案：错误

18. 数字化新技术中，数据挖掘就是从大量数据中提取有用信息的过程。（  ）
答案：正确

19. 人工智能中，机器学习就是让计算机自己学习编程。（  ）
答案：错误

20. 计算机组成原理中，总线的带宽只取决于总线的宽度。（  ）
答案：错误

**三、多选题（10 道）**

1. 计算机系统的硬件组成包括（  ）
A. 运算器
B. 控制器
C. 存储器
D. 输入输出设备
答案：ABCD

2. 以下属于数据结构的逻辑结构类型的有（  ）
A. 线性结构
B. 树形结构
C. 图形结构
D. 顺序结构
答案：ABC

3. 指令系统的指令格式通常包括（  ）
A. 操作码字段
B. 地址码字段
C. 数据码字段
D. 校验码字段
答案：AB

4. 计算机网络的传输介质有（  ）
A. 双绞线
B. 同轴电缆
C. 光纤
D. 无线电波
答案：ABCD

5. 操作系统的功能模块包括（  ）
A. 进程管理
B. 存储管理
C. 设备管理
D. 文件管理
答案：ABCD

6. 数据库系统的三级模式结构包括（  ）
A. 外模式
B. 概念模式
C. 内模式
D. 物理模式
答案：ABC

7. 通信原理中，信道编码的目的包括（  ）
A. 提高信息传输的可靠性
B. 提高信息传输的有效性
C. 检测和纠正传输中的错误
D. 增加信息的保密性
答案：AC

8. 光纤通信系统的性能指标有（  ）
A. 误码率
B. 传输距离
C. 带宽
D. 光功率
答案：ABCD

9. 数字化新技术中，云计算的特点有（  ）
A. 按需服务
B. 高可扩展性
C. 资源池化
D. 快速弹性
答案：ABCD

10. 人工智能中，机器学习的方法包括（  ）
A. 监督学习
B. 无监督学习
C. 强化学习
D. 迁移学习
答案：ABCD `;function Ra(e){const t=e.split("**").filter(r=>r.trim()),n=[];let s="";return t.forEach(r=>{if(r.includes("单选题"))s="single";else if(r.includes("判断题"))s="boolean";else if(r.includes("多选题"))s="multiple";else if(r.trim()){const o=r.split(`
`).filter(i=>i.trim());o.forEach(i=>{if(i.match(/^\d+\./)){const c={type:s,content:i.replace(/^\d+\./,"").trim(),options:[],answer:""};if(s==="single"||s==="multiple"){const l=o.slice(o.indexOf(i)+1),f=[];for(const u of l)if(u.match(/^[A-D]\./))f.push(u.trim());else if(u.includes("答案：")){s==="multiple"?c.answer=u.replace("答案：","").trim().split(""):c.answer=u.replace("答案：","").trim();break}c.options=f}else if(s==="boolean"){c.options=["正确","错误"];const l=o[o.indexOf(i)+1];l&&l.includes("答案：")&&(c.answer=l.replace("答案：","").trim())}n.push(c)}})}}),{title:"题库",questions:n}}async function Da(){var e;try{const t=[],n=Object.assign({"/quizbanks/信息通信-1.md":ka,"/quizbanks/信息通信-2.md":Ba});for(const[s,r]of Object.entries(n)){const o=((e=s.split("/").pop())==null?void 0:e.replace(".md",""))||"",i=Ra(r);i.title=o,t.push(i)}return t}catch(t){return console.error("Failed to load quiz banks:",t),[]}}const Pa={class:"max-w-4xl mx-auto p-4"},Oa={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Ta=["onClick"],Ma={class:"text-xl font-semibold text-gray-800 dark:text-white"},Ia={class:"text-gray-600 dark:text-gray-300"},La=Kt({__name:"QuizSelector",setup(e){const t=er(),n=tr(),s=Qe([]);qn(async()=>{s.value=await Da()});const r=o=>{n.setQuizBank(o),t.push("/quiz")};return(o,i)=>(de(),ge("div",Pa,[i[0]||(i[0]=L("h1",{class:"text-2xl font-bold mb-6 text-gray-800 dark:text-white"},"选择题库",-1)),L("div",Oa,[(de(!0),ge(Re,null,Sn(s.value,c=>(de(),ge("div",{key:c.title,class:"border rounded-lg p-4 cursor-pointer bg-white dark:bg-gray-700 hover:bg-green-200 dark:hover:bg-green-700 transition-colors",onClick:l=>r(c)},[L("h2",Ma,Ae(c.title),1),L("p",Ia,"题数: "+Ae(c.questions.length),1)],8,Ta))),128))])]))}}),$a={class:"max-w-4xl mx-auto"},Na={class:"mb-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3"},Fa={class:"relative"},ja={class:"flex mb-2 items-center justify-between"},Ha={class:"text-sm font-medium text-blue-600 dark:text-blue-400"},Qa={class:"h-3 bg-blue-100 dark:bg-blue-900 rounded-full"},Va={class:"p-4"},za={class:"flex justify-between items-center mb-4"},Ua={class:"grid grid-cols-5 gap-2"},Ka=["onClick"],qa={key:0,class:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"},Wa={key:1,class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg min-h-[600px] flex flex-col"},Ga={class:"flex-1 p-8 overflow-y-auto"},Ja={class:"flex justify-between items-center mb-6"},Ya={class:"flex items-center gap-4"},Xa={class:"text-xl font-bold text-gray-800 dark:text-white"},Za={class:"flex items-center gap-4"},ef={class:"px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"},tf={class:"text-lg mb-8 text-gray-700 dark:text-gray-200"},nf={class:"space-y-4"},sf=["onClick"],rf=["onClick"],of={class:"border-t border-gray-100 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 rounded-b-xl"},lf={class:"flex justify-between items-center max-w-2xl mx-auto"},cf=["disabled"],uf=["disabled"],af={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},ff={class:"bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4"},df={class:"flex justify-end gap-4"},hf=Kt({__name:"QuizQuestion",setup(e){const t=er(),n=tr(),s=Qe(!1),r=Qe([]),o=Qe(""),i=Qe(!1),c=Qe(!1),l=me(()=>{var _;return(_=n.currentQuizBank)==null?void 0:_.questions[n.currentQuestionIndex]}),f=me(()=>n.currentQuestionIndex),u=me(()=>n.progress),d=me(()=>n.currentQuizBank?f.value===n.currentQuizBank.questions.length-1:!1),p=me(()=>{var _;return((_=n.currentQuizBank)==null?void 0:_.questions.length)||0});Vt(()=>f.value,_=>{const w=n.getSavedAnswer(_);w?(Array.isArray(w)?r.value=w:o.value=w,i.value=!0,s.value=!0):(r.value=[],o.value="",i.value=!1,s.value=!1)},{immediate:!0});const g=_=>{s.value||(o.value=_,i.value=!0,s.value=!0,n.submitAnswer(_))},A=()=>{!l.value||!i.value||(s.value=!0,n.submitAnswer(r.value))},B=()=>{d.value?c.value=!0:n.nextQuestion()},H=()=>{f.value>0&&n.previousQuestion()},N=_=>{var k,G,ae;if(!s.value)return"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const w=o.value===_,T=((k=l.value)==null?void 0:k.type)==="boolean"?((G=l.value)==null?void 0:G.answer)===_:(ae=l.value)==null?void 0:ae.answer.includes(_);return w&&T?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":w&&!T?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!w&&T?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},I=_=>{var k;if(!s.value)return r.value.includes(_)?"bg-blue-100 dark:bg-blue-900/50 border-blue-500 border text-gray-700 dark:text-gray-200":"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const w=r.value.includes(_),T=Array.isArray((k=l.value)==null?void 0:k.answer)&&l.value.answer.includes(_);return w&&T?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":w&&!T?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!w&&T?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},$=_=>{if(s.value)return;const w=r.value.indexOf(_);w===-1?r.value.push(_):r.value.splice(w,1),i.value=r.value.length>0},P=Qe(!1),z=me(()=>n.markedQuestions.has(f.value)),Z=()=>{n.toggleMarkQuestion(f.value)},J=_=>{n.jumpToQuestion(_),P.value=!1},K=()=>{c.value=!1,t.push("/result")};return(_,w)=>(de(),ge("div",$a,[P.value?(de(),ge("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:w[0]||(w[0]=T=>P.value=!1)})):Bt("",!0),L("div",Na,[L("div",Fa,[L("div",ja,[w[5]||(w[5]=L("span",{class:"text-sm font-medium text-blue-600 dark:text-blue-400"},"做题进度",-1)),L("span",Ha,Ae(Math.round(u.value))+"%",1)]),L("div",Qa,[L("div",{class:"h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500",style:Qn({width:`${u.value}%`})},null,4)])])]),L("div",{class:ot(["fixed right-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50",P.value?"translate-x-0":"translate-x-full"]),style:{width:"300px"}},[L("div",Va,[L("div",za,[w[7]||(w[7]=L("h3",{class:"text-lg font-bold text-gray-800 dark:text-white"},"题目导航",-1)),L("button",{onClick:w[1]||(w[1]=T=>c.value=!0),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-2 py-1 rounded text-white text-sm font-semibold shadow-md hover:opacity-90"},"交卷"),L("button",{onClick:w[2]||(w[2]=T=>P.value=!1),class:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"},w[6]||(w[6]=[L("span",{class:"sr-only"},"关闭",-1),L("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),L("div",Ua,[(de(!0),ge(Re,null,Sn(p.value,T=>(de(),ge("button",{key:T-1,onClick:k=>J(T-1),class:ot(["w-10 h-10 rounded-lg flex items-center justify-center relative",[f.value===T-1?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 dark:text-gray-200",Ve(n).userAnswers.has(T-1)&&Ve(n).isAnswerCorrect(T-1)?"border-2 border-green-500":"",Ve(n).userAnswers.has(T-1)&&!Ve(n).isAnswerCorrect(T-1)?"border-2 border-red-500":""]])},[yi(Ae(T)+" ",1),Ve(n).markedQuestions.has(T-1)?(de(),ge("span",qa)):Bt("",!0)],10,Ka))),128))])])],2),l.value?(de(),ge("div",Wa,[L("div",Ga,[L("div",Ja,[L("div",Ya,[L("h2",Xa," 第 "+Ae(f.value+1)+" 题 ",1),L("button",{onClick:Z,class:ot(["p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",{"text-red-500 dark:text-red-400":z.value}])},w[8]||(w[8]=[L("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})],-1)]),2)]),L("div",Za,[L("span",ef,Ae(f.value+1)+" / "+Ae(p.value),1),L("button",{onClick:w[3]||(w[3]=T=>P.value=!0),class:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"},w[9]||(w[9]=[L("svg",{class:"w-6 h-6 text-gray-600 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])]),L("p",tf,Ae(l.value.content),1),L("div",nf,[l.value.type==="single"||l.value.type==="boolean"?(de(!0),ge(Re,{key:0},Sn(l.value.options,T=>(de(),ge("div",{key:T,onClick:k=>g(l.value.type==="boolean"?T:T[0]),class:ot(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[N(l.value.type==="boolean"?T:T[0])]])},Ae(T),11,sf))),128)):l.value.type==="multiple"?(de(!0),ge(Re,{key:1},Sn(l.value.options,T=>(de(),ge("div",{key:T,onClick:k=>!s.value&&$(T[0]),class:ot(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[I(T[0])]])},Ae(T),11,rf))),128)):Bt("",!0)])]),L("div",of,[L("div",lf,[L("button",{onClick:H,disabled:f.value===0,class:ot(["px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",f.value===0?"bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500":"bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"])}," 上一题 ",10,cf),l.value.type==="multiple"&&!s.value?(de(),ge("button",{key:0,onClick:A,disabled:!i.value,class:"px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"}," 确认答案 ",8,uf)):Bt("",!0),L("button",{onClick:B,class:"px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"},Ae(d.value?"完成":"下一题"),1)])])])):Bt("",!0),c.value?(de(),ge("div",af,[L("div",ff,[w[10]||(w[10]=L("h3",{class:"text-lg font-bold mb-4 text-gray-800 dark:text-white"},"确认交卷",-1)),w[11]||(w[11]=L("p",{class:"text-gray-600 dark:text-gray-300 mb-6"},"确定要交卷吗？请确认所有题目都已完成。",-1)),L("div",df,[L("button",{onClick:w[4]||(w[4]=T=>c.value=!1),class:"bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 rounded-lg"}," 取消 "),L("button",{onClick:K,class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90"}," 确认交卷 ")])])])):Bt("",!0)]))}}),pf=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},gf=pf(hf,[["__scopeId","data-v-e59ddbf3"]]),mf={class:"max-w-4xl mx-auto p-4"},vf={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"},bf={class:"space-y-6"},yf={class:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg p-6"},_f={class:"text-center"},xf={class:"text-4xl font-bold text-blue-600 dark:text-blue-400"},Cf={class:"mt-2 text-gray-600 dark:text-gray-300"},wf=Kt({__name:"QuizResult",setup(e){er();const t=tr(),n=me(()=>t.score),s=me(()=>{var r;return((r=t.currentQuizBank)==null?void 0:r.questions.length)||0});return(r,o)=>(de(),ge("div",mf,[L("div",vf,[o[0]||(o[0]=L("h2",{class:"text-2xl font-bold text-gray-800 dark:text-white mb-6"},"结果",-1)),L("div",bf,[L("div",yf,[L("div",_f,[L("div",xf,Ae(n.value)+" / "+Ae(s.value),1),L("div",Cf," 正确率: "+Ae(Math.round(n.value/s.value*100))+"% ",1)])])])])]))}}),Af=Sa({history:ea("/prv-shuati/"),routes:[{path:"/",component:La},{path:"/quiz",component:gf},{path:"/result",component:wf}]}),Sf={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"},Ef={class:"bg-white dark:bg-gray-800 shadow-md"},kf={class:"max-w-4xl mx-auto p-4 flex justify-between items-center"},Bf={class:"flex items-center gap-4"},Rf={key:0,class:"w-6 h-6 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Df={key:1,class:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Pf={class:"container mx-auto px-4 py-2"},Of=Kt({__name:"App",setup(e){const t=Qe(!1),n=()=>{t.value=!t.value,t.value?(document.documentElement.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode","false"))};return qn(()=>{localStorage.getItem("darkMode")==="true"&&(t.value=!0,document.documentElement.classList.add("dark"))}),(s,r)=>{const o=ql("router-view");return de(),ge("div",Sf,[L("header",Ef,[L("div",kf,[r[3]||(r[3]=L("h1",{class:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"}," 小浩刷题系统 ",-1)),L("div",Bf,[L("button",{onClick:n,class:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"},[t.value?(de(),ge("svg",Rf,r[1]||(r[1]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):(de(),ge("svg",Df,r[2]||(r[2]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])))]),s.$route.path!=="/"?(de(),ge("button",{key:0,onClick:r[0]||(r[0]=i=>s.$router.push("/")),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow"}," 退出 ")):Bt("",!0)])])]),L("main",Pf,[ke(o,null,{default:xs(({Component:i})=>[ke(zc,{name:"fade",mode:"out-in"},{default:xs(()=>[(de(),vi(Wl(i)))]),_:2},1024)]),_:1})])])}}}),nr=hu(Of);nr.use(vu());nr.use(Af);nr.mount("#app");
