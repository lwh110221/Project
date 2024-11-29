(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Is(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const ce={},Hn=[],Ze=()=>{},Hi=()=>!1,Nt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ms=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Ls=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Qi=Object.prototype.hasOwnProperty,te=(e,n)=>Qi.call(e,n),U=Array.isArray,Qn=e=>$t(e)==="[object Map]",oo=e=>$t(e)==="[object Set]",q=e=>typeof e=="function",he=e=>typeof e=="string",_n=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",io=e=>(ue(e)||q(e))&&q(e.then)&&q(e.catch),lo=Object.prototype.toString,$t=e=>lo.call(e),Ui=e=>$t(e).slice(8,-1),co=e=>$t(e)==="[object Object]",Ns=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zn=Is(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ft=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},zi=/-(\w)/g,je=Ft(e=>e.replace(zi,(n,t)=>t?t.toUpperCase():"")),Vi=/\B([A-Z])/g,In=Ft(e=>e.replace(Vi,"-$1").toLowerCase()),jt=Ft(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zt=Ft(e=>e?`on${jt(e)}`:""),vn=(e,n)=>!Object.is(e,n),es=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},uo=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},Ki=e=>{const n=parseFloat(e);return isNaN(n)?e:n},qi=e=>{const n=he(e)?Number(e):NaN;return isNaN(n)?e:n};let or;const Ht=()=>or||(or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qt(e){if(U(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],r=he(s)?Ji(s):Qt(s);if(r)for(const o in r)n[o]=r[o]}return n}else if(he(e)||ue(e))return e}const Wi=/;(?![^(]*\))/g,Gi=/:([^]+)/,Yi=/\/\*[^]*?\*\//g;function Ji(e){const n={};return e.replace(Yi,"").split(Wi).forEach(t=>{if(t){const s=t.split(Gi);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function on(e){let n="";if(he(e))n=e;else if(U(e))for(let t=0;t<e.length;t++){const s=on(e[t]);s&&(n+=s+" ")}else if(ue(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Xi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zi=Is(Xi);function ao(e){return!!e||e===""}const fo=e=>!!(e&&e.__v_isRef===!0),De=e=>he(e)?e:e==null?"":U(e)||ue(e)&&(e.toString===lo||!q(e.toString))?fo(e)?De(e.value):JSON.stringify(e,ho,2):String(e),ho=(e,n)=>fo(n)?ho(e,n.value):Qn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,r],o)=>(t[ns(s,o)+" =>"]=r,t),{})}:oo(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ns(t))}:_n(n)?ns(n):ue(n)&&!U(n)&&!co(n)?String(n):n,ns=(e,n="")=>{var t;return _n(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class po{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!n&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=xe;try{return xe=this,n()}finally{xe=t}}}on(){xe=this}off(){xe=this.parent}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function go(e){return new po(e)}function mo(){return xe}function el(e,n=!1){xe&&xe.cleanups.push(e)}let le;const ts=new WeakSet;class Co{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ts.has(this)&&(ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ao(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ir(this),bo(this);const n=le,t=ze;le=this,ze=!0;try{return this.fn()}finally{_o(this),le=n,ze=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)js(n);this.deps=this.depsTail=void 0,ir(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cs(this)&&this.run()}get dirty(){return Cs(this)}}let vo=0,et,nt;function Ao(e,n=!1){if(e.flags|=8,n){e.next=nt,nt=e;return}e.next=et,et=e}function $s(){vo++}function Fs(){if(--vo>0)return;if(nt){let n=nt;for(nt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;et;){let n=et;for(et=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function bo(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function _o(e){let n,t=e.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),js(s),nl(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=n,e.depsTail=t}function Cs(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(yo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function yo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ct))return;e.globalVersion=ct;const n=e.dep;if(e.flags|=2,n.version>0&&!e.isSSR&&e.deps&&!Cs(e)){e.flags&=-3;return}const t=le,s=ze;le=e,ze=!0;try{bo(e);const r=e.fn(e._value);(n.version===0||vn(r,e._value))&&(e._value=r,n.version++)}catch(r){throw n.version++,r}finally{le=t,ze=s,_o(e),e.flags&=-3}}function js(e,n=!1){const{dep:t,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)js(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function nl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let ze=!0;const Bo=[];function yn(){Bo.push(ze),ze=!1}function Bn(){const e=Bo.pop();ze=e===void 0?!0:e}function ir(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=le;le=void 0;try{n()}finally{le=t}}}let ct=0;class tl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hs{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!le||!ze||le===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==le)t=this.activeLink=new tl(le,this),le.deps?(t.prevDep=le.depsTail,le.depsTail.nextDep=t,le.depsTail=t):le.deps=le.depsTail=t,Do(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=le.depsTail,t.nextDep=void 0,le.depsTail.nextDep=t,le.depsTail=t,le.deps===t&&(le.deps=s)}return t}trigger(n){this.version++,ct++,this.notify(n)}notify(n){$s();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Fs()}}}function Do(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)Do(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Pt=new WeakMap,Rn=Symbol(""),vs=Symbol(""),ut=Symbol("");function be(e,n,t){if(ze&&le){let s=Pt.get(e);s||Pt.set(e,s=new Map);let r=s.get(t);r||(s.set(t,r=new Hs),r.map=s,r.key=t),r.track()}}function ln(e,n,t,s,r,o){const i=Pt.get(e);if(!i){ct++;return}const c=l=>{l&&l.trigger()};if($s(),n==="clear")i.forEach(c);else{const l=U(e),f=l&&Ns(t);if(l&&t==="length"){const u=Number(s);i.forEach((d,p)=>{(p==="length"||p===ut||!_n(p)&&p>=u)&&c(d)})}else switch((t!==void 0||i.has(void 0))&&c(i.get(t)),f&&c(i.get(ut)),n){case"add":l?f&&c(i.get("length")):(c(i.get(Rn)),Qn(e)&&c(i.get(vs)));break;case"delete":l||(c(i.get(Rn)),Qn(e)&&c(i.get(vs)));break;case"set":Qn(e)&&c(i.get(Rn));break}}Fs()}function sl(e,n){const t=Pt.get(e);return t&&t.get(n)}function Nn(e){const n=X(e);return n===e?n:(be(n,"iterate",ut),Fe(e)?n:n.map(_e))}function Ut(e){return be(e=X(e),"iterate",ut),e}const rl={__proto__:null,[Symbol.iterator](){return ss(this,Symbol.iterator,_e)},concat(...e){return Nn(this).concat(...e.map(n=>U(n)?Nn(n):n))},entries(){return ss(this,"entries",e=>(e[1]=_e(e[1]),e))},every(e,n){return nn(this,"every",e,n,void 0,arguments)},filter(e,n){return nn(this,"filter",e,n,t=>t.map(_e),arguments)},find(e,n){return nn(this,"find",e,n,_e,arguments)},findIndex(e,n){return nn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return nn(this,"findLast",e,n,_e,arguments)},findLastIndex(e,n){return nn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return nn(this,"forEach",e,n,void 0,arguments)},includes(...e){return rs(this,"includes",e)},indexOf(...e){return rs(this,"indexOf",e)},join(e){return Nn(this).join(e)},lastIndexOf(...e){return rs(this,"lastIndexOf",e)},map(e,n){return nn(this,"map",e,n,void 0,arguments)},pop(){return Gn(this,"pop")},push(...e){return Gn(this,"push",e)},reduce(e,...n){return lr(this,"reduce",e,n)},reduceRight(e,...n){return lr(this,"reduceRight",e,n)},shift(){return Gn(this,"shift")},some(e,n){return nn(this,"some",e,n,void 0,arguments)},splice(...e){return Gn(this,"splice",e)},toReversed(){return Nn(this).toReversed()},toSorted(e){return Nn(this).toSorted(e)},toSpliced(...e){return Nn(this).toSpliced(...e)},unshift(...e){return Gn(this,"unshift",e)},values(){return ss(this,"values",_e)}};function ss(e,n,t){const s=Ut(e),r=s[n]();return s!==e&&!Fe(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=t(o.value)),o}),r}const ol=Array.prototype;function nn(e,n,t,s,r,o){const i=Ut(e),c=i!==e&&!Fe(e),l=i[n];if(l!==ol[n]){const d=l.apply(e,o);return c?_e(d):d}let f=t;i!==e&&(c?f=function(d,p){return t.call(this,_e(d),p,e)}:t.length>2&&(f=function(d,p){return t.call(this,d,p,e)}));const u=l.call(i,f,s);return c&&r?r(u):u}function lr(e,n,t,s){const r=Ut(e);let o=t;return r!==e&&(Fe(e)?t.length>3&&(o=function(i,c,l){return t.call(this,i,c,l,e)}):o=function(i,c,l){return t.call(this,i,_e(c),l,e)}),r[n](o,...s)}function rs(e,n,t){const s=X(e);be(s,"iterate",ut);const r=s[n](...t);return(r===-1||r===!1)&&zs(t[0])?(t[0]=X(t[0]),s[n](...t)):r}function Gn(e,n,t=[]){yn(),$s();const s=X(e)[n].apply(e,t);return Fs(),Bn(),s}const il=Is("__proto__,__v_isRef,__isVue"),xo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_n));function ll(e){_n(e)||(e=String(e));const n=X(this);return be(n,"has",e),n.hasOwnProperty(e)}class So{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const r=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(r?o?Cl:To:o?Po:Eo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const i=U(n);if(!r){let l;if(i&&(l=rl[t]))return l;if(t==="hasOwnProperty")return ll}const c=Reflect.get(n,t,pe(n)?n:s);return(_n(t)?xo.has(t):il(t))||(r||be(n,"get",t),o)?c:pe(c)?i&&Ns(t)?c:c.value:ue(c)?r?ko(c):Ct(c):c}}class wo extends So{constructor(n=!1){super(!1,n)}set(n,t,s,r){let o=n[t];if(!this._isShallow){const l=On(o);if(!Fe(s)&&!On(s)&&(o=X(o),s=X(s)),!U(n)&&pe(o)&&!pe(s))return l?!1:(o.value=s,!0)}const i=U(n)&&Ns(t)?Number(t)<n.length:te(n,t),c=Reflect.set(n,t,s,pe(n)?n:r);return n===X(r)&&(i?vn(s,o)&&ln(n,"set",t,s):ln(n,"add",t,s)),c}deleteProperty(n,t){const s=te(n,t);n[t];const r=Reflect.deleteProperty(n,t);return r&&s&&ln(n,"delete",t,void 0),r}has(n,t){const s=Reflect.has(n,t);return(!_n(t)||!xo.has(t))&&be(n,"has",t),s}ownKeys(n){return be(n,"iterate",U(n)?"length":Rn),Reflect.ownKeys(n)}}class cl extends So{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const ul=new wo,al=new cl,fl=new wo(!0);const As=e=>e,_t=e=>Reflect.getPrototypeOf(e);function dl(e,n,t){return function(...s){const r=this.__v_raw,o=X(r),i=Qn(o),c=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=r[e](...s),u=t?As:n?bs:_e;return!n&&be(o,"iterate",l?vs:Rn),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function yt(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function hl(e,n){const t={get(r){const o=this.__v_raw,i=X(o),c=X(r);e||(vn(r,c)&&be(i,"get",r),be(i,"get",c));const{has:l}=_t(i),f=n?As:e?bs:_e;if(l.call(i,r))return f(o.get(r));if(l.call(i,c))return f(o.get(c));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&be(X(r),"iterate",Rn),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=X(o),c=X(r);return e||(vn(r,c)&&be(i,"has",r),be(i,"has",c)),r===c?o.has(r):o.has(r)||o.has(c)},forEach(r,o){const i=this,c=i.__v_raw,l=X(c),f=n?As:e?bs:_e;return!e&&be(l,"iterate",Rn),c.forEach((u,d)=>r.call(o,f(u),f(d),i))}};return Ce(t,e?{add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear")}:{add(r){!n&&!Fe(r)&&!On(r)&&(r=X(r));const o=X(this);return _t(o).has.call(o,r)||(o.add(r),ln(o,"add",r,r)),this},set(r,o){!n&&!Fe(o)&&!On(o)&&(o=X(o));const i=X(this),{has:c,get:l}=_t(i);let f=c.call(i,r);f||(r=X(r),f=c.call(i,r));const u=l.call(i,r);return i.set(r,o),f?vn(o,u)&&ln(i,"set",r,o):ln(i,"add",r,o),this},delete(r){const o=X(this),{has:i,get:c}=_t(o);let l=i.call(o,r);l||(r=X(r),l=i.call(o,r)),c&&c.call(o,r);const f=o.delete(r);return l&&ln(o,"delete",r,void 0),f},clear(){const r=X(this),o=r.size!==0,i=r.clear();return o&&ln(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=dl(r,e,n)}),t}function Qs(e,n){const t=hl(e,n);return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(te(t,r)&&r in s?t:s,r,o)}const pl={get:Qs(!1,!1)},gl={get:Qs(!1,!0)},ml={get:Qs(!0,!1)};const Eo=new WeakMap,Po=new WeakMap,To=new WeakMap,Cl=new WeakMap;function vl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(e){return e.__v_skip||!Object.isExtensible(e)?0:vl(Ui(e))}function Ct(e){return On(e)?e:Us(e,!1,ul,pl,Eo)}function Ro(e){return Us(e,!1,fl,gl,Po)}function ko(e){return Us(e,!0,al,ml,To)}function Us(e,n,t,s,r){if(!ue(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=Al(e);if(i===0)return e;const c=new Proxy(e,i===2?s:t);return r.set(e,c),c}function An(e){return On(e)?An(e.__v_raw):!!(e&&e.__v_isReactive)}function On(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function zs(e){return e?!!e.__v_raw:!1}function X(e){const n=e&&e.__v_raw;return n?X(n):e}function Vs(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&uo(e,"__v_skip",!0),e}const _e=e=>ue(e)?Ct(e):e,bs=e=>ue(e)?ko(e):e;function pe(e){return e?e.__v_isRef===!0:!1}function Qe(e){return Oo(e,!1)}function bl(e){return Oo(e,!0)}function Oo(e,n){return pe(e)?e:new _l(e,n)}class _l{constructor(n,t){this.dep=new Hs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:X(n),this._value=t?n:_e(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||Fe(n)||On(n);n=s?n:X(n),vn(n,t)&&(this._rawValue=n,this._value=s?n:_e(n),this.dep.trigger())}}function Ue(e){return pe(e)?e.value:e}const yl={get:(e,n,t)=>n==="__v_raw"?e:Ue(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const r=e[n];return pe(r)&&!pe(t)?(r.value=t,!0):Reflect.set(e,n,t,s)}};function Io(e){return An(e)?e:new Proxy(e,yl)}function Bl(e){const n=U(e)?new Array(e.length):{};for(const t in e)n[t]=xl(e,t);return n}class Dl{constructor(n,t,s){this._object=n,this._key=t,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const n=this._object[this._key];return this._value=n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return sl(X(this._object),this._key)}}function xl(e,n,t){const s=e[n];return pe(s)?s:new Dl(e,n,t)}class Sl{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Hs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ct-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return Ao(this,!0),!0}get value(){const n=this.dep.track();return yo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function wl(e,n,t=!1){let s,r;return q(e)?s=e:(s=e.get,r=e.set),new Sl(s,r,t)}const Bt={},Tt=new WeakMap;let En;function El(e,n=!1,t=En){if(t){let s=Tt.get(t);s||Tt.set(t,s=[]),s.push(e)}}function Pl(e,n,t=ce){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:c,call:l}=t,f=R=>r?R:Fe(R)||r===!1||r===0?Cn(R,1):Cn(R);let u,d,p,g,D=!1,E=!1;if(pe(e)?(d=()=>e.value,D=Fe(e)):An(e)?(d=()=>f(e),D=!0):U(e)?(E=!0,D=e.some(R=>An(R)||Fe(R)),d=()=>e.map(R=>{if(pe(R))return R.value;if(An(R))return f(R);if(q(R))return l?l(R,2):R()})):q(e)?n?d=l?()=>l(e,2):e:d=()=>{if(p){yn();try{p()}finally{Bn()}}const R=En;En=u;try{return l?l(e,3,[g]):e(g)}finally{En=R}}:d=Ze,n&&r){const R=d,z=r===!0?1/0:r;d=()=>Cn(R(),z)}const H=mo(),$=()=>{u.stop(),H&&H.active&&Ls(H.effects,u)};if(o&&n){const R=n;n=(...z)=>{R(...z),$()}}let M=E?new Array(e.length).fill(Bt):Bt;const N=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(n){const z=u.run();if(r||D||(E?z.some((Z,Y)=>vn(Z,M[Y])):vn(z,M))){p&&p();const Z=En;En=u;try{const Y=[z,M===Bt?void 0:E&&M[0]===Bt?[]:M,g];l?l(n,3,Y):n(...Y),M=z}finally{En=Z}}}else u.run()};return c&&c(N),u=new Co(d),u.scheduler=i?()=>i(N,!1):N,g=R=>El(R,!1,u),p=u.onStop=()=>{const R=Tt.get(u);if(R){if(l)l(R,4);else for(const z of R)z();Tt.delete(u)}},n?s?N(!0):M=u.run():i?i(N.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function Cn(e,n=1/0,t){if(n<=0||!ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,pe(e))Cn(e.value,n,t);else if(U(e))for(let s=0;s<e.length;s++)Cn(e[s],n,t);else if(oo(e)||Qn(e))e.forEach(s=>{Cn(s,n,t)});else if(co(e)){for(const s in e)Cn(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Cn(e[s],n,t)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vt(e,n,t,s){try{return s?e(...s):e()}catch(r){zt(r,n,t)}}function Ke(e,n,t,s){if(q(e)){const r=vt(e,n,t,s);return r&&io(r)&&r.catch(o=>{zt(o,n,t)}),r}if(U(e)){const r=[];for(let o=0;o<e.length;o++)r.push(Ke(e[o],n,t,s));return r}}function zt(e,n,t,s=!0){const r=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=n&&n.appContext.config||ce;if(n){let c=n.parent;const l=n.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,f)===!1)return}c=c.parent}if(o){yn(),vt(o,null,10,[e,l,f]),Bn();return}}Tl(e,t,r,s,i)}function Tl(e,n,t,s=!0,r=!1){if(r)throw e;console.error(e)}const Se=[];let Je=-1;const Un=[];let hn=null,Fn=0;const Mo=Promise.resolve();let Rt=null;function Ks(e){const n=Rt||Mo;return e?n.then(this?e.bind(this):e):n}function Rl(e){let n=Je+1,t=Se.length;for(;n<t;){const s=n+t>>>1,r=Se[s],o=at(r);o<e||o===e&&r.flags&2?n=s+1:t=s}return n}function qs(e){if(!(e.flags&1)){const n=at(e),t=Se[Se.length-1];!t||!(e.flags&2)&&n>=at(t)?Se.push(e):Se.splice(Rl(n),0,e),e.flags|=1,Lo()}}function Lo(){Rt||(Rt=Mo.then($o))}function kl(e){U(e)?Un.push(...e):hn&&e.id===-1?hn.splice(Fn+1,0,e):e.flags&1||(Un.push(e),e.flags|=1),Lo()}function cr(e,n,t=Je+1){for(;t<Se.length;t++){const s=Se[t];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Se.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function No(e){if(Un.length){const n=[...new Set(Un)].sort((t,s)=>at(t)-at(s));if(Un.length=0,hn){hn.push(...n);return}for(hn=n,Fn=0;Fn<hn.length;Fn++){const t=hn[Fn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}hn=null,Fn=0}}const at=e=>e.id==null?e.flags&2?-1:1/0:e.id;function $o(e){try{for(Je=0;Je<Se.length;Je++){const n=Se[Je];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),vt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Je<Se.length;Je++){const n=Se[Je];n&&(n.flags&=-2)}Je=-1,Se.length=0,No(),Rt=null,(Se.length||Un.length)&&$o()}}let Me=null,Fo=null;function kt(e){const n=Me;return Me=e,Fo=e&&e.type.__scopeId||null,n}function _s(e,n=Me,t){if(!n||e._n)return e;const s=(...r)=>{s._d&&vr(-1);const o=kt(n);let i;try{i=e(...r)}finally{kt(o),s._d&&vr(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Dn(e,n,t,s){const r=e.dirs,o=n&&n.dirs;for(let i=0;i<r.length;i++){const c=r[i];o&&(c.oldValue=o[i].value);let l=c.dir[s];l&&(yn(),Ke(l,t,8,[e.el,c,e,n]),Bn())}}const Ol=Symbol("_vte"),jo=e=>e.__isTeleport,pn=Symbol("_leaveCb"),Dt=Symbol("_enterCb");function Il(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qt(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const $e=[Function,Array],Ho={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},Qo=e=>{const n=e.subTree;return n.component?Qo(n.component):n},Ml={name:"BaseTransition",props:Ho,setup(e,{slots:n}){const t=Rc(),s=Il();return()=>{const r=n.default&&Vo(n.default(),!0);if(!r||!r.length)return;const o=Uo(r),i=X(e),{mode:c}=i;if(s.isLeaving)return os(o);const l=ur(o);if(!l)return os(o);let f=ys(l,i,s,t,d=>f=d);l.type!==Te&&ft(l,f);let u=t.subTree&&ur(t.subTree);if(u&&u.type!==Te&&!Tn(l,u)&&Qo(t).type!==Te){let d=ys(u,i,s,t);if(ft(u,d),c==="out-in"&&l.type!==Te)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},os(o);c==="in-out"&&l.type!==Te?d.delayLeave=(p,g,D)=>{const E=zo(s,u);E[String(u.key)]=u,p[pn]=()=>{g(),p[pn]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{D(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Uo(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Te){n=t;break}}return n}const Ll=Ml;function zo(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function ys(e,n,t,s,r){const{appear:o,mode:i,persisted:c=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:D,onLeaveCancelled:E,onBeforeAppear:H,onAppear:$,onAfterAppear:M,onAppearCancelled:N}=n,R=String(e.key),z=zo(t,e),Z=(b,B)=>{b&&Ke(b,s,9,B)},Y=(b,B)=>{const O=B[1];Z(b,B),U(b)?b.every(w=>w.length<=1)&&O():b.length<=1&&O()},K={mode:i,persisted:c,beforeEnter(b){let B=l;if(!t.isMounted)if(o)B=H||l;else return;b[pn]&&b[pn](!0);const O=z[R];O&&Tn(e,O)&&O.el[pn]&&O.el[pn](),Z(B,[b])},enter(b){let B=f,O=u,w=d;if(!t.isMounted)if(o)B=$||f,O=M||u,w=N||d;else return;let G=!1;const ae=b[Dt]=ye=>{G||(G=!0,ye?Z(w,[b]):Z(O,[b]),K.delayedLeave&&K.delayedLeave(),b[Dt]=void 0)};B?Y(B,[b,ae]):ae()},leave(b,B){const O=String(e.key);if(b[Dt]&&b[Dt](!0),t.isUnmounting)return B();Z(p,[b]);let w=!1;const G=b[pn]=ae=>{w||(w=!0,B(),ae?Z(E,[b]):Z(D,[b]),b[pn]=void 0,z[O]===e&&delete z[O])};z[O]=e,g?Y(g,[b,G]):G()},clone(b){const B=ys(b,n,t,s,r);return r&&r(B),B}};return K}function os(e){if(Vt(e))return e=bn(e),e.children=null,e}function ur(e){if(!Vt(e))return jo(e.type)&&e.children?Uo(e.children):e;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&q(t.default))return t.default()}}function ft(e,n){e.shapeFlag&6&&e.component?(e.transition=n,ft(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Vo(e,n=!1,t){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const c=t==null?i.key:String(t)+String(i.key!=null?i.key:o);i.type===Pe?(i.patchFlag&128&&r++,s=s.concat(Vo(i.children,n,c))):(n||i.type!==Te)&&s.push(c!=null?bn(i,{key:c}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function qn(e,n){return q(e)?Ce({name:e.name},n,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ot(e,n,t,s,r=!1){if(U(e)){e.forEach((D,E)=>Ot(D,n&&(U(n)?n[E]:n),t,s,r));return}if(tt(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ot(e,n,t,s.component.subTree);return}const o=s.shapeFlag&4?Js(s.component):s.el,i=r?null:o,{i:c,r:l}=e,f=n&&n.r,u=c.refs===ce?c.refs={}:c.refs,d=c.setupState,p=X(d),g=d===ce?()=>!1:D=>te(p,D);if(f!=null&&f!==l&&(he(f)?(u[f]=null,g(f)&&(d[f]=null)):pe(f)&&(f.value=null)),q(l))vt(l,c,12,[i,u]);else{const D=he(l),E=pe(l);if(D||E){const H=()=>{if(e.f){const $=D?g(l)?d[l]:u[l]:l.value;r?U($)&&Ls($,o):U($)?$.includes(o)||$.push(o):D?(u[l]=[o],g(l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else D?(u[l]=i,g(l)&&(d[l]=i)):E&&(l.value=i,e.k&&(u[e.k]=i))};i?(H.id=-1,Ie(H,t)):H()}}}Ht().requestIdleCallback;Ht().cancelIdleCallback;const tt=e=>!!e.type.__asyncLoader,Vt=e=>e.type.__isKeepAlive;function Nl(e,n){qo(e,"a",n)}function $l(e,n){qo(e,"da",n)}function qo(e,n,t=ve){const s=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Kt(n,s,t),t){let r=t.parent;for(;r&&r.parent;)Vt(r.parent.vnode)&&Fl(s,n,t,r),r=r.parent}}function Fl(e,n,t,s){const r=Kt(n,e,s,!0);Go(()=>{Ls(s[n],r)},t)}function Kt(e,n,t=ve,s=!1){if(t){const r=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...i)=>{yn();const c=At(t),l=Ke(n,t,e,i);return c(),Bn(),l});return s?r.unshift(o):r.push(o),o}}const cn=e=>(n,t=ve)=>{(!ht||e==="sp")&&Kt(e,(...s)=>n(...s),t)},jl=cn("bm"),qt=cn("m"),Hl=cn("bu"),Ql=cn("u"),Wo=cn("bum"),Go=cn("um"),Ul=cn("sp"),zl=cn("rtg"),Vl=cn("rtc");function Kl(e,n=ve){Kt("ec",e,n)}const Yo="components";function ql(e,n){return Xo(Yo,e,!0,n)||e}const Jo=Symbol.for("v-ndc");function Wl(e){return he(e)?Xo(Yo,e,!1)||e:e||Jo}function Xo(e,n,t=!0,s=!1){const r=Me||ve;if(r){const o=r.type;{const c=Lc(o,!1);if(c&&(c===n||c===je(n)||c===jt(je(n))))return o}const i=ar(r[e]||o[e],n)||ar(r.appContext[e],n);return!i&&s?o:i}}function ar(e,n){return e&&(e[n]||e[je(n)]||e[jt(je(n))])}function xt(e,n,t,s){let r;const o=t,i=U(e);if(i||he(e)){const c=i&&An(e);let l=!1;c&&(l=!Fe(e),e=Ut(e)),r=new Array(e.length);for(let f=0,u=e.length;f<u;f++)r[f]=n(l?_e(e[f]):e[f],f,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let c=0;c<e;c++)r[c]=n(c+1,c,void 0,o)}else if(ue(e))if(e[Symbol.iterator])r=Array.from(e,(c,l)=>n(c,l,void 0,o));else{const c=Object.keys(e);r=new Array(c.length);for(let l=0,f=c.length;l<f;l++){const u=c[l];r[l]=n(e[u],u,l,o)}}else r=[];return r}const Bs=e=>e?bi(e)?Js(e):Bs(e.parent):null,st=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bs(e.parent),$root:e=>Bs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ws(e),$forceUpdate:e=>e.f||(e.f=()=>{qs(e.update)}),$nextTick:e=>e.n||(e.n=Ks.bind(e.proxy)),$watch:e=>mc.bind(e)}),is=(e,n)=>e!==ce&&!e.__isScriptSetup&&te(e,n),Gl={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:o,accessCache:i,type:c,appContext:l}=e;let f;if(n[0]!=="$"){const g=i[n];if(g!==void 0)switch(g){case 1:return s[n];case 2:return r[n];case 4:return t[n];case 3:return o[n]}else{if(is(s,n))return i[n]=1,s[n];if(r!==ce&&te(r,n))return i[n]=2,r[n];if((f=e.propsOptions[0])&&te(f,n))return i[n]=3,o[n];if(t!==ce&&te(t,n))return i[n]=4,t[n];Ds&&(i[n]=0)}}const u=st[n];let d,p;if(u)return n==="$attrs"&&be(e.attrs,"get",""),u(e);if((d=c.__cssModules)&&(d=d[n]))return d;if(t!==ce&&te(t,n))return i[n]=4,t[n];if(p=l.config.globalProperties,te(p,n))return p[n]},set({_:e},n,t){const{data:s,setupState:r,ctx:o}=e;return is(r,n)?(r[n]=t,!0):s!==ce&&te(s,n)?(s[n]=t,!0):te(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:r,propsOptions:o}},i){let c;return!!t[i]||e!==ce&&te(e,i)||is(n,i)||(c=o[0])&&te(c,i)||te(s,i)||te(st,i)||te(r.config.globalProperties,i)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:te(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function fr(e){return U(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Ds=!0;function Yl(e){const n=Ws(e),t=e.proxy,s=e.ctx;Ds=!1,n.beforeCreate&&dr(n.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:c,provide:l,inject:f,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:D,activated:E,deactivated:H,beforeDestroy:$,beforeUnmount:M,destroyed:N,unmounted:R,render:z,renderTracked:Z,renderTriggered:Y,errorCaptured:K,serverPrefetch:b,expose:B,inheritAttrs:O,components:w,directives:G,filters:ae}=n;if(f&&Jl(f,s,null),i)for(const W in i){const ee=i[W];q(ee)&&(s[W]=ee.bind(t))}if(r){const W=r.call(t,t);ue(W)&&(e.data=Ct(W))}if(Ds=!0,o)for(const W in o){const ee=o[W],en=q(ee)?ee.bind(t,t):q(ee.get)?ee.get.bind(t,t):Ze,un=!q(ee)&&q(ee.set)?ee.set.bind(t):Ze,We=me({get:en,set:un});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ee=>We.value=Ee})}if(c)for(const W in c)Zo(c[W],s,t,W);if(l){const W=q(l)?l.call(t):l;Reflect.ownKeys(W).forEach(ee=>{St(ee,W[ee])})}u&&dr(u,e,"c");function oe(W,ee){U(ee)?ee.forEach(en=>W(en.bind(t))):ee&&W(ee.bind(t))}if(oe(jl,d),oe(qt,p),oe(Hl,g),oe(Ql,D),oe(Nl,E),oe($l,H),oe(Kl,K),oe(Vl,Z),oe(zl,Y),oe(Wo,M),oe(Go,R),oe(Ul,b),U(B))if(B.length){const W=e.exposed||(e.exposed={});B.forEach(ee=>{Object.defineProperty(W,ee,{get:()=>t[ee],set:en=>t[ee]=en})})}else e.exposed||(e.exposed={});z&&e.render===Ze&&(e.render=z),O!=null&&(e.inheritAttrs=O),w&&(e.components=w),G&&(e.directives=G),b&&Ko(e)}function Jl(e,n,t=Ze){U(e)&&(e=xs(e));for(const s in e){const r=e[s];let o;ue(r)?"default"in r?o=Ve(r.from||s,r.default,!0):o=Ve(r.from||s):o=Ve(r),pe(o)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):n[s]=o}}function dr(e,n,t){Ke(U(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function Zo(e,n,t,s){let r=s.includes(".")?hi(t,s):()=>t[s];if(he(e)){const o=n[e];q(o)&&zn(r,o)}else if(q(e))zn(r,e.bind(t));else if(ue(e))if(U(e))e.forEach(o=>Zo(o,n,t,s));else{const o=q(e.handler)?e.handler.bind(t):n[e.handler];q(o)&&zn(r,o,e)}}function Ws(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(n);let l;return c?l=c:!r.length&&!t&&!s?l=n:(l={},r.length&&r.forEach(f=>It(l,f,i,!0)),It(l,n,i)),ue(n)&&o.set(n,l),l}function It(e,n,t,s=!1){const{mixins:r,extends:o}=n;o&&It(e,o,t,!0),r&&r.forEach(i=>It(e,i,t,!0));for(const i in n)if(!(s&&i==="expose")){const c=Xl[i]||t&&t[i];e[i]=c?c(e[i],n[i]):n[i]}return e}const Xl={data:hr,props:pr,emits:pr,methods:Xn,computed:Xn,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Xn,directives:Xn,watch:ec,provide:hr,inject:Zl};function hr(e,n){return n?e?function(){return Ce(q(e)?e.call(this,this):e,q(n)?n.call(this,this):n)}:n:e}function Zl(e,n){return Xn(xs(e),xs(n))}function xs(e){if(U(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Be(e,n){return e?[...new Set([].concat(e,n))]:n}function Xn(e,n){return e?Ce(Object.create(null),e,n):n}function pr(e,n){return e?U(e)&&U(n)?[...new Set([...e,...n])]:Ce(Object.create(null),fr(e),fr(n??{})):n}function ec(e,n){if(!e)return n;if(!n)return e;const t=Ce(Object.create(null),e);for(const s in n)t[s]=Be(e[s],n[s]);return t}function ei(){return{app:null,config:{isNativeTag:Hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nc=0;function tc(e,n){return function(s,r=null){q(s)||(s=Ce({},s)),r!=null&&!ue(r)&&(r=null);const o=ei(),i=new WeakSet,c=[];let l=!1;const f=o.app={_uid:nc++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:$c,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&q(u.install)?(i.add(u),u.install(f,...d)):q(u)&&(i.add(u),u(f,...d))),f},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),f},component(u,d){return d?(o.components[u]=d,f):o.components[u]},directive(u,d){return d?(o.directives[u]=d,f):o.directives[u]},mount(u,d,p){if(!l){const g=f._ceVNode||we(s,r);return g.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),d&&n?n(g,u):e(g,u,p),l=!0,f._container=u,u.__vue_app__=f,Js(g.component)}},onUnmount(u){c.push(u)},unmount(){l&&(Ke(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,d){return o.provides[u]=d,f},runWithContext(u){const d=kn;kn=f;try{return u()}finally{kn=d}}};return f}}let kn=null;function St(e,n){if(ve){let t=ve.provides;const s=ve.parent&&ve.parent.provides;s===t&&(t=ve.provides=Object.create(s)),t[e]=n}}function Ve(e,n,t=!1){const s=ve||Me;if(s||kn){const r=kn?kn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return t&&q(n)?n.call(s&&s.proxy):n}}function sc(){return!!(ve||Me||kn)}const ni={},ti=()=>Object.create(ni),si=e=>Object.getPrototypeOf(e)===ni;function rc(e,n,t,s=!1){const r={},o=ti();e.propsDefaults=Object.create(null),ri(e,n,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);t?e.props=s?r:Ro(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function oc(e,n,t,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,c=X(r),[l]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Wt(e.emitsOptions,p))continue;const g=n[p];if(l)if(te(o,p))g!==o[p]&&(o[p]=g,f=!0);else{const D=je(p);r[D]=Ss(l,c,D,g,e,!1)}else g!==o[p]&&(o[p]=g,f=!0)}}}else{ri(e,n,r,o)&&(f=!0);let u;for(const d in c)(!n||!te(n,d)&&((u=In(d))===d||!te(n,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Ss(l,c,d,void 0,e,!0)):delete r[d]);if(o!==c)for(const d in o)(!n||!te(n,d))&&(delete o[d],f=!0)}f&&ln(e.attrs,"set","")}function ri(e,n,t,s){const[r,o]=e.propsOptions;let i=!1,c;if(n)for(let l in n){if(Zn(l))continue;const f=n[l];let u;r&&te(r,u=je(l))?!o||!o.includes(u)?t[u]=f:(c||(c={}))[u]=f:Wt(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,i=!0)}if(o){const l=X(t),f=c||ce;for(let u=0;u<o.length;u++){const d=o[u];t[d]=Ss(r,l,d,f[d],e,!te(f,d))}}return i}function Ss(e,n,t,s,r,o){const i=e[t];if(i!=null){const c=te(i,"default");if(c&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&q(l)){const{propsDefaults:f}=r;if(t in f)s=f[t];else{const u=At(r);s=f[t]=l.call(null,n),u()}}else s=l;r.ce&&r.ce._setProp(t,s)}i[0]&&(o&&!c?s=!1:i[1]&&(s===""||s===In(t))&&(s=!0))}return s}const ic=new WeakMap;function oi(e,n,t=!1){const s=t?ic:n.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},c=[];let l=!1;if(!q(e)){const u=d=>{l=!0;const[p,g]=oi(d,n,!0);Ce(i,p),g&&c.push(...g)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return ue(e)&&s.set(e,Hn),Hn;if(U(o))for(let u=0;u<o.length;u++){const d=je(o[u]);gr(d)&&(i[d]=ce)}else if(o)for(const u in o){const d=je(u);if(gr(d)){const p=o[u],g=i[d]=U(p)||q(p)?{type:p}:Ce({},p),D=g.type;let E=!1,H=!0;if(U(D))for(let $=0;$<D.length;++$){const M=D[$],N=q(M)&&M.name;if(N==="Boolean"){E=!0;break}else N==="String"&&(H=!1)}else E=q(D)&&D.name==="Boolean";g[0]=E,g[1]=H,(E||te(g,"default"))&&c.push(d)}}const f=[i,c];return ue(e)&&s.set(e,f),f}function gr(e){return e[0]!=="$"&&!Zn(e)}const ii=e=>e[0]==="_"||e==="$stable",Gs=e=>U(e)?e.map(Xe):[Xe(e)],lc=(e,n,t)=>{if(n._n)return n;const s=_s((...r)=>Gs(n(...r)),t);return s._c=!1,s},li=(e,n,t)=>{const s=e._ctx;for(const r in e){if(ii(r))continue;const o=e[r];if(q(o))n[r]=lc(r,o,s);else if(o!=null){const i=Gs(o);n[r]=()=>i}}},ci=(e,n)=>{const t=Gs(n);e.slots.default=()=>t},ui=(e,n,t)=>{for(const s in n)(t||s!=="_")&&(e[s]=n[s])},cc=(e,n,t)=>{const s=e.slots=ti();if(e.vnode.shapeFlag&32){const r=n._;r?(ui(s,n,t),t&&uo(s,"_",r,!0)):li(n,s)}else n&&ci(e,n)},uc=(e,n,t)=>{const{vnode:s,slots:r}=e;let o=!0,i=ce;if(s.shapeFlag&32){const c=n._;c?t&&c===1?o=!1:ui(r,n,t):(o=!n.$stable,li(n,r)),i=n}else n&&(ci(e,n),i={default:1});if(o)for(const c in r)!ii(c)&&i[c]==null&&delete r[c]},Ie=Bc;function ac(e){return fc(e)}function fc(e,n){const t=Ht();t.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:c,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=Ze,insertStaticContent:D}=e,E=(a,h,m,A=null,C=null,_=null,P=void 0,S=null,x=!!h.dynamicChildren)=>{if(a===h)return;a&&!Tn(a,h)&&(A=v(a),Ee(a,C,_,!0),a=null),h.patchFlag===-2&&(x=!1,h.dynamicChildren=null);const{type:y,ref:Q,shapeFlag:k}=h;switch(y){case Gt:H(a,h,m,A);break;case Te:$(a,h,m,A);break;case us:a==null&&M(h,m,A,P);break;case Pe:w(a,h,m,A,C,_,P,S,x);break;default:k&1?z(a,h,m,A,C,_,P,S,x):k&6?G(a,h,m,A,C,_,P,S,x):(k&64||k&128)&&y.process(a,h,m,A,C,_,P,S,x,F)}Q!=null&&C&&Ot(Q,a&&a.ref,_,h||a,!h)},H=(a,h,m,A)=>{if(a==null)s(h.el=c(h.children),m,A);else{const C=h.el=a.el;h.children!==a.children&&f(C,h.children)}},$=(a,h,m,A)=>{a==null?s(h.el=l(h.children||""),m,A):h.el=a.el},M=(a,h,m,A)=>{[a.el,a.anchor]=D(a.children,h,m,A,a.el,a.anchor)},N=({el:a,anchor:h},m,A)=>{let C;for(;a&&a!==h;)C=p(a),s(a,m,A),a=C;s(h,m,A)},R=({el:a,anchor:h})=>{let m;for(;a&&a!==h;)m=p(a),r(a),a=m;r(h)},z=(a,h,m,A,C,_,P,S,x)=>{h.type==="svg"?P="svg":h.type==="math"&&(P="mathml"),a==null?Z(h,m,A,C,_,P,S,x):b(a,h,C,_,P,S,x)},Z=(a,h,m,A,C,_,P,S)=>{let x,y;const{props:Q,shapeFlag:k,transition:j,dirs:V}=a;if(x=a.el=i(a.type,_,Q&&Q.is,Q),k&8?u(x,a.children):k&16&&K(a.children,x,null,A,C,ls(a,_),P,S),V&&Dn(a,null,A,"created"),Y(x,a,a.scopeId,P,A),Q){for(const ie in Q)ie!=="value"&&!Zn(ie)&&o(x,ie,null,Q[ie],_,A);"value"in Q&&o(x,"value",null,Q.value,_),(y=Q.onVnodeBeforeMount)&&Ye(y,A,a)}V&&Dn(a,null,A,"beforeMount");const J=dc(C,j);J&&j.beforeEnter(x),s(x,h,m),((y=Q&&Q.onVnodeMounted)||J||V)&&Ie(()=>{y&&Ye(y,A,a),J&&j.enter(x),V&&Dn(a,null,A,"mounted")},C)},Y=(a,h,m,A,C)=>{if(m&&g(a,m),A)for(let _=0;_<A.length;_++)g(a,A[_]);if(C){let _=C.subTree;if(h===_||gi(_.type)&&(_.ssContent===h||_.ssFallback===h)){const P=C.vnode;Y(a,P,P.scopeId,P.slotScopeIds,C.parent)}}},K=(a,h,m,A,C,_,P,S,x=0)=>{for(let y=x;y<a.length;y++){const Q=a[y]=S?gn(a[y]):Xe(a[y]);E(null,Q,h,m,A,C,_,P,S)}},b=(a,h,m,A,C,_,P)=>{const S=h.el=a.el;let{patchFlag:x,dynamicChildren:y,dirs:Q}=h;x|=a.patchFlag&16;const k=a.props||ce,j=h.props||ce;let V;if(m&&xn(m,!1),(V=j.onVnodeBeforeUpdate)&&Ye(V,m,h,a),Q&&Dn(h,a,m,"beforeUpdate"),m&&xn(m,!0),(k.innerHTML&&j.innerHTML==null||k.textContent&&j.textContent==null)&&u(S,""),y?B(a.dynamicChildren,y,S,m,A,ls(h,C),_):P||ee(a,h,S,null,m,A,ls(h,C),_,!1),x>0){if(x&16)O(S,k,j,m,C);else if(x&2&&k.class!==j.class&&o(S,"class",null,j.class,C),x&4&&o(S,"style",k.style,j.style,C),x&8){const J=h.dynamicProps;for(let ie=0;ie<J.length;ie++){const re=J[ie],Re=k[re],Ae=j[re];(Ae!==Re||re==="value")&&o(S,re,Re,Ae,C,m)}}x&1&&a.children!==h.children&&u(S,h.children)}else!P&&y==null&&O(S,k,j,m,C);((V=j.onVnodeUpdated)||Q)&&Ie(()=>{V&&Ye(V,m,h,a),Q&&Dn(h,a,m,"updated")},A)},B=(a,h,m,A,C,_,P)=>{for(let S=0;S<h.length;S++){const x=a[S],y=h[S],Q=x.el&&(x.type===Pe||!Tn(x,y)||x.shapeFlag&70)?d(x.el):m;E(x,y,Q,null,A,C,_,P,!0)}},O=(a,h,m,A,C)=>{if(h!==m){if(h!==ce)for(const _ in h)!Zn(_)&&!(_ in m)&&o(a,_,h[_],null,C,A);for(const _ in m){if(Zn(_))continue;const P=m[_],S=h[_];P!==S&&_!=="value"&&o(a,_,S,P,C,A)}"value"in m&&o(a,"value",h.value,m.value,C)}},w=(a,h,m,A,C,_,P,S,x)=>{const y=h.el=a?a.el:c(""),Q=h.anchor=a?a.anchor:c("");let{patchFlag:k,dynamicChildren:j,slotScopeIds:V}=h;V&&(S=S?S.concat(V):V),a==null?(s(y,m,A),s(Q,m,A),K(h.children||[],m,Q,C,_,P,S,x)):k>0&&k&64&&j&&a.dynamicChildren?(B(a.dynamicChildren,j,m,C,_,P,S),(h.key!=null||C&&h===C.subTree)&&ai(a,h,!0)):ee(a,h,m,Q,C,_,P,S,x)},G=(a,h,m,A,C,_,P,S,x)=>{h.slotScopeIds=S,a==null?h.shapeFlag&512?C.ctx.activate(h,m,A,P,x):ae(h,m,A,C,_,P,x):ye(a,h,x)},ae=(a,h,m,A,C,_,P)=>{const S=a.component=Tc(a,A,C);if(Vt(a)&&(S.ctx.renderer=F),kc(S,!1,P),S.asyncDep){if(C&&C.registerDep(S,oe,P),!a.el){const x=S.subTree=we(Te);$(null,x,h,m)}}else oe(S,a,h,m,C,_,P)},ye=(a,h,m)=>{const A=h.component=a.component;if(_c(a,h,m))if(A.asyncDep&&!A.asyncResolved){W(A,h,m);return}else A.next=h,A.update();else h.el=a.el,A.vnode=h},oe=(a,h,m,A,C,_,P)=>{const S=()=>{if(a.isMounted){let{next:k,bu:j,u:V,parent:J,vnode:ie}=a;{const ke=fi(a);if(ke){k&&(k.el=ie.el,W(a,k,P)),ke.asyncDep.then(()=>{a.isUnmounted||S()});return}}let re=k,Re;xn(a,!1),k?(k.el=ie.el,W(a,k,P)):k=ie,j&&es(j),(Re=k.props&&k.props.onVnodeBeforeUpdate)&&Ye(Re,J,k,ie),xn(a,!0);const Ae=cs(a),He=a.subTree;a.subTree=Ae,E(He,Ae,d(He.el),v(He),a,C,_),k.el=Ae.el,re===null&&yc(a,Ae.el),V&&Ie(V,C),(Re=k.props&&k.props.onVnodeUpdated)&&Ie(()=>Ye(Re,J,k,ie),C)}else{let k;const{el:j,props:V}=h,{bm:J,m:ie,parent:re,root:Re,type:Ae}=a,He=tt(h);if(xn(a,!1),J&&es(J),!He&&(k=V&&V.onVnodeBeforeMount)&&Ye(k,re,h),xn(a,!0),j&&fe){const ke=()=>{a.subTree=cs(a),fe(j,a.subTree,a,C,null)};He&&Ae.__asyncHydrate?Ae.__asyncHydrate(j,a,ke):ke()}else{Re.ce&&Re.ce._injectChildStyle(Ae);const ke=a.subTree=cs(a);E(null,ke,m,A,a,C,_),h.el=ke.el}if(ie&&Ie(ie,C),!He&&(k=V&&V.onVnodeMounted)){const ke=h;Ie(()=>Ye(k,re,ke),C)}(h.shapeFlag&256||re&&tt(re.vnode)&&re.vnode.shapeFlag&256)&&a.a&&Ie(a.a,C),a.isMounted=!0,h=m=A=null}};a.scope.on();const x=a.effect=new Co(S);a.scope.off();const y=a.update=x.run.bind(x),Q=a.job=x.runIfDirty.bind(x);Q.i=a,Q.id=a.uid,x.scheduler=()=>qs(Q),xn(a,!0),y()},W=(a,h,m)=>{h.component=a;const A=a.vnode.props;a.vnode=h,a.next=null,oc(a,h.props,A,m),uc(a,h.children,m),yn(),cr(a),Bn()},ee=(a,h,m,A,C,_,P,S,x=!1)=>{const y=a&&a.children,Q=a?a.shapeFlag:0,k=h.children,{patchFlag:j,shapeFlag:V}=h;if(j>0){if(j&128){un(y,k,m,A,C,_,P,S,x);return}else if(j&256){en(y,k,m,A,C,_,P,S,x);return}}V&8?(Q&16&&Ne(y,C,_),k!==y&&u(m,k)):Q&16?V&16?un(y,k,m,A,C,_,P,S,x):Ne(y,C,_,!0):(Q&8&&u(m,""),V&16&&K(k,m,A,C,_,P,S,x))},en=(a,h,m,A,C,_,P,S,x)=>{a=a||Hn,h=h||Hn;const y=a.length,Q=h.length,k=Math.min(y,Q);let j;for(j=0;j<k;j++){const V=h[j]=x?gn(h[j]):Xe(h[j]);E(a[j],V,m,null,C,_,P,S,x)}y>Q?Ne(a,C,_,!0,!1,k):K(h,m,A,C,_,P,S,x,k)},un=(a,h,m,A,C,_,P,S,x)=>{let y=0;const Q=h.length;let k=a.length-1,j=Q-1;for(;y<=k&&y<=j;){const V=a[y],J=h[y]=x?gn(h[y]):Xe(h[y]);if(Tn(V,J))E(V,J,m,null,C,_,P,S,x);else break;y++}for(;y<=k&&y<=j;){const V=a[k],J=h[j]=x?gn(h[j]):Xe(h[j]);if(Tn(V,J))E(V,J,m,null,C,_,P,S,x);else break;k--,j--}if(y>k){if(y<=j){const V=j+1,J=V<Q?h[V].el:A;for(;y<=j;)E(null,h[y]=x?gn(h[y]):Xe(h[y]),m,J,C,_,P,S,x),y++}}else if(y>j)for(;y<=k;)Ee(a[y],C,_,!0),y++;else{const V=y,J=y,ie=new Map;for(y=J;y<=j;y++){const Oe=h[y]=x?gn(h[y]):Xe(h[y]);Oe.key!=null&&ie.set(Oe.key,y)}let re,Re=0;const Ae=j-J+1;let He=!1,ke=0;const Wn=new Array(Ae);for(y=0;y<Ae;y++)Wn[y]=0;for(y=V;y<=k;y++){const Oe=a[y];if(Re>=Ae){Ee(Oe,C,_,!0);continue}let Ge;if(Oe.key!=null)Ge=ie.get(Oe.key);else for(re=J;re<=j;re++)if(Wn[re-J]===0&&Tn(Oe,h[re])){Ge=re;break}Ge===void 0?Ee(Oe,C,_,!0):(Wn[Ge-J]=y+1,Ge>=ke?ke=Ge:He=!0,E(Oe,h[Ge],m,null,C,_,P,S,x),Re++)}const sr=He?hc(Wn):Hn;for(re=sr.length-1,y=Ae-1;y>=0;y--){const Oe=J+y,Ge=h[Oe],rr=Oe+1<Q?h[Oe+1].el:A;Wn[y]===0?E(null,Ge,m,rr,C,_,P,S,x):He&&(re<0||y!==sr[re]?We(Ge,m,rr,2):re--)}}},We=(a,h,m,A,C=null)=>{const{el:_,type:P,transition:S,children:x,shapeFlag:y}=a;if(y&6){We(a.component.subTree,h,m,A);return}if(y&128){a.suspense.move(h,m,A);return}if(y&64){P.move(a,h,m,F);return}if(P===Pe){s(_,h,m);for(let k=0;k<x.length;k++)We(x[k],h,m,A);s(a.anchor,h,m);return}if(P===us){N(a,h,m);return}if(A!==2&&y&1&&S)if(A===0)S.beforeEnter(_),s(_,h,m),Ie(()=>S.enter(_),C);else{const{leave:k,delayLeave:j,afterLeave:V}=S,J=()=>s(_,h,m),ie=()=>{k(_,()=>{J(),V&&V()})};j?j(_,J,ie):ie()}else s(_,h,m)},Ee=(a,h,m,A=!1,C=!1)=>{const{type:_,props:P,ref:S,children:x,dynamicChildren:y,shapeFlag:Q,patchFlag:k,dirs:j,cacheIndex:V}=a;if(k===-2&&(C=!1),S!=null&&Ot(S,null,m,a,!0),V!=null&&(h.renderCache[V]=void 0),Q&256){h.ctx.deactivate(a);return}const J=Q&1&&j,ie=!tt(a);let re;if(ie&&(re=P&&P.onVnodeBeforeUnmount)&&Ye(re,h,a),Q&6)bt(a.component,m,A);else{if(Q&128){a.suspense.unmount(m,A);return}J&&Dn(a,null,h,"beforeUnmount"),Q&64?a.type.remove(a,h,m,F,A):y&&!y.hasOnce&&(_!==Pe||k>0&&k&64)?Ne(y,h,m,!1,!0):(_===Pe&&k&384||!C&&Q&16)&&Ne(x,h,m),A&&Mn(a)}(ie&&(re=P&&P.onVnodeUnmounted)||J)&&Ie(()=>{re&&Ye(re,h,a),J&&Dn(a,null,h,"unmounted")},m)},Mn=a=>{const{type:h,el:m,anchor:A,transition:C}=a;if(h===Pe){Ln(m,A);return}if(h===us){R(a);return}const _=()=>{r(m),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(a.shapeFlag&1&&C&&!C.persisted){const{leave:P,delayLeave:S}=C,x=()=>P(m,_);S?S(a.el,_,x):x()}else _()},Ln=(a,h)=>{let m;for(;a!==h;)m=p(a),r(a),a=m;r(h)},bt=(a,h,m)=>{const{bum:A,scope:C,job:_,subTree:P,um:S,m:x,a:y}=a;mr(x),mr(y),A&&es(A),C.stop(),_&&(_.flags|=8,Ee(P,a,h,m)),S&&Ie(S,h),Ie(()=>{a.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ne=(a,h,m,A=!1,C=!1,_=0)=>{for(let P=_;P<a.length;P++)Ee(a[P],h,m,A,C)},v=a=>{if(a.shapeFlag&6)return v(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const h=p(a.anchor||a.el),m=h&&h[Ol];return m?p(m):h};let I=!1;const T=(a,h,m)=>{a==null?h._vnode&&Ee(h._vnode,null,null,!0):E(h._vnode||null,a,h,null,null,null,m),h._vnode=a,I||(I=!0,cr(),No(),I=!1)},F={p:E,um:Ee,m:We,r:Mn,mt:ae,mc:K,pc:ee,pbc:B,n:v,o:e};let se,fe;return{render:T,hydrate:se,createApp:tc(T,se)}}function ls({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function xn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function dc(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ai(e,n,t=!1){const s=e.children,r=n.children;if(U(s)&&U(r))for(let o=0;o<s.length;o++){const i=s[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=gn(r[o]),c.el=i.el),!t&&c.patchFlag!==-2&&ai(i,c)),c.type===Gt&&(c.el=i.el)}}function hc(e){const n=e.slice(),t=[0];let s,r,o,i,c;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(r=t[t.length-1],e[r]<f){n[s]=r,t.push(s);continue}for(o=0,i=t.length-1;o<i;)c=o+i>>1,e[t[c]]<f?o=c+1:i=c;f<e[t[o]]&&(o>0&&(n[s]=t[o-1]),t[o]=s)}}for(o=t.length,i=t[o-1];o-- >0;)t[o]=i,i=n[i];return t}function fi(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:fi(n)}function mr(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const pc=Symbol.for("v-scx"),gc=()=>Ve(pc);function zn(e,n,t){return di(e,n,t)}function di(e,n,t=ce){const{immediate:s,deep:r,flush:o,once:i}=t,c=Ce({},t),l=n&&s||!n&&o!=="post";let f;if(ht){if(o==="sync"){const g=gc();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Ze,g.resume=Ze,g.pause=Ze,g}}const u=ve;c.call=(g,D,E)=>Ke(g,u,D,E);let d=!1;o==="post"?c.scheduler=g=>{Ie(g,u&&u.suspense)}:o!=="sync"&&(d=!0,c.scheduler=(g,D)=>{D?g():qs(g)}),c.augmentJob=g=>{n&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=Pl(e,n,c);return ht&&(f?f.push(p):l&&p()),p}function mc(e,n,t){const s=this.proxy,r=he(e)?e.includes(".")?hi(s,e):()=>s[e]:e.bind(s,s);let o;q(n)?o=n:(o=n.handler,t=n);const i=At(this),c=di(r,o.bind(s),t);return i(),c}function hi(e,n){const t=n.split(".");return()=>{let s=e;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const Cc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${je(n)}Modifiers`]||e[`${In(n)}Modifiers`];function vc(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||ce;let r=t;const o=n.startsWith("update:"),i=o&&Cc(s,n.slice(7));i&&(i.trim&&(r=t.map(u=>he(u)?u.trim():u)),i.number&&(r=t.map(Ki)));let c,l=s[c=Zt(n)]||s[c=Zt(je(n))];!l&&o&&(l=s[c=Zt(In(n))]),l&&Ke(l,e,6,r);const f=s[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ke(f,e,6,r)}}function pi(e,n,t=!1){const s=n.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},c=!1;if(!q(e)){const l=f=>{const u=pi(f,n,!0);u&&(c=!0,Ce(i,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!c?(ue(e)&&s.set(e,null),null):(U(o)?o.forEach(l=>i[l]=null):Ce(i,o),ue(e)&&s.set(e,i),i)}function Wt(e,n){return!e||!Nt(n)?!1:(n=n.slice(2).replace(/Once$/,""),te(e,n[0].toLowerCase()+n.slice(1))||te(e,In(n))||te(e,n))}function cs(e){const{type:n,vnode:t,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:c,emit:l,render:f,renderCache:u,props:d,data:p,setupState:g,ctx:D,inheritAttrs:E}=e,H=kt(e);let $,M;try{if(t.shapeFlag&4){const R=r||s,z=R;$=Xe(f.call(z,R,u,d,g,p,D)),M=c}else{const R=n;$=Xe(R.length>1?R(d,{attrs:c,slots:i,emit:l}):R(d,null)),M=n.props?c:Ac(c)}}catch(R){rt.length=0,zt(R,e,1),$=we(Te)}let N=$;if(M&&E!==!1){const R=Object.keys(M),{shapeFlag:z}=N;R.length&&z&7&&(o&&R.some(Ms)&&(M=bc(M,o)),N=bn(N,M,!1,!0))}return t.dirs&&(N=bn(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(t.dirs):t.dirs),t.transition&&ft(N,t.transition),$=N,kt(H),$}const Ac=e=>{let n;for(const t in e)(t==="class"||t==="style"||Nt(t))&&((n||(n={}))[t]=e[t]);return n},bc=(e,n)=>{const t={};for(const s in e)(!Ms(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function _c(e,n,t){const{props:s,children:r,component:o}=e,{props:i,children:c,patchFlag:l}=n,f=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Cr(s,i,f):!!i;if(l&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(i[p]!==s[p]&&!Wt(f,p))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?Cr(s,i,f):!0:!!i;return!1}function Cr(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(n[o]!==e[o]&&!Wt(t,o))return!0}return!1}function yc({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const gi=e=>e.__isSuspense;function Bc(e,n){n&&n.pendingBranch?U(e)?n.effects.push(...e):n.effects.push(e):kl(e)}const Pe=Symbol.for("v-fgt"),Gt=Symbol.for("v-txt"),Te=Symbol.for("v-cmt"),us=Symbol.for("v-stc"),rt=[];let Le=null;function de(e=!1){rt.push(Le=e?null:[])}function Dc(){rt.pop(),Le=rt[rt.length-1]||null}let dt=1;function vr(e,n=!1){dt+=e,e<0&&Le&&n&&(Le.hasOnce=!0)}function mi(e){return e.dynamicChildren=dt>0?Le||Hn:null,Dc(),dt>0&&Le&&Le.push(e),e}function ge(e,n,t,s,r,o){return mi(L(e,n,t,s,r,o,!0))}function Ci(e,n,t,s,r){return mi(we(e,n,t,s,r,!0))}function Mt(e){return e?e.__v_isVNode===!0:!1}function Tn(e,n){return e.type===n.type&&e.key===n.key}const vi=({key:e})=>e??null,wt=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||pe(e)||q(e)?{i:Me,r:e,k:n,f:!!t}:e:null);function L(e,n=null,t=null,s=0,r=null,o=e===Pe?0:1,i=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&vi(n),ref:n&&wt(n),scopeId:Fo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Me};return c?(Ys(l,t),o&128&&e.normalize(l)):t&&(l.shapeFlag|=he(t)?8:16),dt>0&&!i&&Le&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Le.push(l),l}const we=xc;function xc(e,n=null,t=null,s=0,r=null,o=!1){if((!e||e===Jo)&&(e=Te),Mt(e)){const c=bn(e,n,!0);return t&&Ys(c,t),dt>0&&!o&&Le&&(c.shapeFlag&6?Le[Le.indexOf(e)]=c:Le.push(c)),c.patchFlag=-2,c}if(Nc(e)&&(e=e.__vccOpts),n){n=Sc(n);let{class:c,style:l}=n;c&&!he(c)&&(n.class=on(c)),ue(l)&&(zs(l)&&!U(l)&&(l=Ce({},l)),n.style=Qt(l))}const i=he(e)?1:gi(e)?128:jo(e)?64:ue(e)?4:q(e)?2:0;return L(e,n,t,s,r,i,o,!0)}function Sc(e){return e?zs(e)||si(e)?Ce({},e):e:null}function bn(e,n,t=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:c,transition:l}=e,f=n?wc(r||{},n):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&vi(f),ref:n&&n.ref?t&&o?U(o)?o.concat(wt(n)):[o,wt(n)]:wt(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bn(e.ssContent),ssFallback:e.ssFallback&&bn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&ft(u,l.clone(u)),u}function Ai(e=" ",n=0){return we(Gt,null,e,n)}function Pn(e="",n=!1){return n?(de(),Ci(Te,null,e)):we(Te,null,e)}function Xe(e){return e==null||typeof e=="boolean"?we(Te):U(e)?we(Pe,null,e.slice()):Mt(e)?gn(e):we(Gt,null,String(e))}function gn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:bn(e)}function Ys(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(U(n))t=16;else if(typeof n=="object")if(s&65){const r=n.default;r&&(r._c&&(r._d=!1),Ys(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=n._;!r&&!si(n)?n._ctx=Me:r===3&&Me&&(Me.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else q(n)?(n={default:n,_ctx:Me},t=32):(n=String(n),s&64?(t=16,n=[Ai(n)]):t=8);e.children=n,e.shapeFlag|=t}function wc(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const r in s)if(r==="class")n.class!==s.class&&(n.class=on([n.class,s.class]));else if(r==="style")n.style=Qt([n.style,s.style]);else if(Nt(r)){const o=n[r],i=s[r];i&&o!==i&&!(U(o)&&o.includes(i))&&(n[r]=o?[].concat(o,i):i)}else r!==""&&(n[r]=s[r])}return n}function Ye(e,n,t,s=null){Ke(e,n,7,[t,s])}const Ec=ei();let Pc=0;function Tc(e,n,t){const s=e.type,r=(n?n.appContext:e.appContext)||Ec,o={uid:Pc++,vnode:e,type:s,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(s,r),emitsOptions:pi(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=vc.bind(null,o),e.ce&&e.ce(o),o}let ve=null;const Rc=()=>ve||Me;let Lt,ws;{const e=Ht(),n=(t,s)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Lt=n("__VUE_INSTANCE_SETTERS__",t=>ve=t),ws=n("__VUE_SSR_SETTERS__",t=>ht=t)}const At=e=>{const n=ve;return Lt(e),e.scope.on(),()=>{e.scope.off(),Lt(n)}},Ar=()=>{ve&&ve.scope.off(),Lt(null)};function bi(e){return e.vnode.shapeFlag&4}let ht=!1;function kc(e,n=!1,t=!1){n&&ws(n);const{props:s,children:r}=e.vnode,o=bi(e);rc(e,s,o,n),cc(e,r,t);const i=o?Oc(e,n):void 0;return n&&ws(!1),i}function Oc(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gl);const{setup:s}=t;if(s){yn();const r=e.setupContext=s.length>1?Mc(e):null,o=At(e),i=vt(s,e,0,[e.props,r]),c=io(i);if(Bn(),o(),(c||e.sp)&&!tt(e)&&Ko(e),c){if(i.then(Ar,Ar),n)return i.then(l=>{br(e,l,n)}).catch(l=>{zt(l,e,0)});e.asyncDep=i}else br(e,i,n)}else _i(e,n)}function br(e,n,t){q(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ue(n)&&(e.setupState=Io(n)),_i(e,t)}let _r;function _i(e,n,t){const s=e.type;if(!e.render){if(!n&&_r&&!s.render){const r=s.template||Ws(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:l}=s,f=Ce(Ce({isCustomElement:o,delimiters:c},i),l);s.render=_r(r,f)}}e.render=s.render||Ze}{const r=At(e);yn();try{Yl(e)}finally{Bn(),r()}}}const Ic={get(e,n){return be(e,"get",""),e[n]}};function Mc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Ic),slots:e.slots,emit:e.emit,expose:n}}function Js(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Io(Vs(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in st)return st[t](e)},has(n,t){return t in n||t in st}})):e.proxy}function Lc(e,n=!0){return q(e)?e.displayName||e.name:e.name||n&&e.__name}function Nc(e){return q(e)&&"__vccOpts"in e}const me=(e,n)=>wl(e,n,ht);function Xs(e,n,t){const s=arguments.length;return s===2?ue(n)&&!U(n)?Mt(n)?we(e,null,[n]):we(e,n):we(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Mt(t)&&(t=[t]),we(e,n,t))}const $c="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Es;const yr=typeof window<"u"&&window.trustedTypes;if(yr)try{Es=yr.createPolicy("vue",{createHTML:e=>e})}catch{}const yi=Es?e=>Es.createHTML(e):e=>e,Fc="http://www.w3.org/2000/svg",jc="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,Br=rn&&rn.createElement("template"),Hc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const r=n==="svg"?rn.createElementNS(Fc,e):n==="mathml"?rn.createElementNS(jc,e):t?rn.createElement(e,{is:t}):rn.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>rn.createTextNode(e),createComment:e=>rn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,r,o){const i=t?t.previousSibling:n.lastChild;if(r&&(r===o||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),t),!(r===o||!(r=r.nextSibling)););else{Br.innerHTML=yi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=Br.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}n.insertBefore(c,t)}return[i?i.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},an="transition",Yn="animation",pt=Symbol("_vtc"),Bi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qc=Ce({},Ho,Bi),Uc=e=>(e.displayName="Transition",e.props=Qc,e),zc=Uc((e,{slots:n})=>Xs(Ll,Vc(e),n)),Sn=(e,n=[])=>{U(e)?e.forEach(t=>t(...n)):e&&e(...n)},Dr=e=>e?U(e)?e.some(n=>n.length>1):e.length>1:!1;function Vc(e){const n={};for(const w in e)w in Bi||(n[w]=e[w]);if(e.css===!1)return n;const{name:t="v",type:s,duration:r,enterFromClass:o=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:f=i,appearToClass:u=c,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=e,D=Kc(r),E=D&&D[0],H=D&&D[1],{onBeforeEnter:$,onEnter:M,onEnterCancelled:N,onLeave:R,onLeaveCancelled:z,onBeforeAppear:Z=$,onAppear:Y=M,onAppearCancelled:K=N}=n,b=(w,G,ae,ye)=>{w._enterCancelled=ye,wn(w,G?u:c),wn(w,G?f:i),ae&&ae()},B=(w,G)=>{w._isLeaving=!1,wn(w,d),wn(w,g),wn(w,p),G&&G()},O=w=>(G,ae)=>{const ye=w?Y:M,oe=()=>b(G,w,ae);Sn(ye,[G,oe]),xr(()=>{wn(G,w?l:o),tn(G,w?u:c),Dr(ye)||Sr(G,s,E,oe)})};return Ce(n,{onBeforeEnter(w){Sn($,[w]),tn(w,o),tn(w,i)},onBeforeAppear(w){Sn(Z,[w]),tn(w,l),tn(w,f)},onEnter:O(!1),onAppear:O(!0),onLeave(w,G){w._isLeaving=!0;const ae=()=>B(w,G);tn(w,d),w._enterCancelled?(tn(w,p),Pr()):(Pr(),tn(w,p)),xr(()=>{w._isLeaving&&(wn(w,d),tn(w,g),Dr(R)||Sr(w,s,H,ae))}),Sn(R,[w,ae])},onEnterCancelled(w){b(w,!1,void 0,!0),Sn(N,[w])},onAppearCancelled(w){b(w,!0,void 0,!0),Sn(K,[w])},onLeaveCancelled(w){B(w),Sn(z,[w])}})}function Kc(e){if(e==null)return null;if(ue(e))return[as(e.enter),as(e.leave)];{const n=as(e);return[n,n]}}function as(e){return qi(e)}function tn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[pt]||(e[pt]=new Set)).add(n)}function wn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[pt];t&&(t.delete(n),t.size||(e[pt]=void 0))}function xr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let qc=0;function Sr(e,n,t,s){const r=e._endId=++qc,o=()=>{r===e._endId&&s()};if(t!=null)return setTimeout(o,t);const{type:i,timeout:c,propCount:l}=Wc(e,n);if(!i)return s();const f=i+"end";let u=0;const d=()=>{e.removeEventListener(f,p),o()},p=g=>{g.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},c+1),e.addEventListener(f,p)}function Wc(e,n){const t=window.getComputedStyle(e),s=D=>(t[D]||"").split(", "),r=s(`${an}Delay`),o=s(`${an}Duration`),i=wr(r,o),c=s(`${Yn}Delay`),l=s(`${Yn}Duration`),f=wr(c,l);let u=null,d=0,p=0;n===an?i>0&&(u=an,d=i,p=o.length):n===Yn?f>0&&(u=Yn,d=f,p=l.length):(d=Math.max(i,f),u=d>0?i>f?an:Yn:null,p=u?u===an?o.length:l.length:0);const g=u===an&&/\b(transform|all)(,|$)/.test(s(`${an}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function wr(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>Er(t)+Er(e[s])))}function Er(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pr(){return document.body.offsetHeight}function Gc(e,n,t){const s=e[pt];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Tr=Symbol("_vod"),Yc=Symbol("_vsh"),Jc=Symbol(""),Xc=/(^|;)\s*display\s*:/;function Zc(e,n,t){const s=e.style,r=he(t);let o=!1;if(t&&!r){if(n)if(he(n))for(const i of n.split(";")){const c=i.slice(0,i.indexOf(":")).trim();t[c]==null&&Et(s,c,"")}else for(const i in n)t[i]==null&&Et(s,i,"");for(const i in t)i==="display"&&(o=!0),Et(s,i,t[i])}else if(r){if(n!==t){const i=s[Jc];i&&(t+=";"+i),s.cssText=t,o=Xc.test(t)}}else n&&e.removeAttribute("style");Tr in e&&(e[Tr]=o?s.display:"",e[Yc]&&(s.display="none"))}const Rr=/\s*!important$/;function Et(e,n,t){if(U(t))t.forEach(s=>Et(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=eu(e,n);Rr.test(t)?e.setProperty(In(s),t.replace(Rr,""),"important"):e[s]=t}}const kr=["Webkit","Moz","ms"],fs={};function eu(e,n){const t=fs[n];if(t)return t;let s=je(n);if(s!=="filter"&&s in e)return fs[n]=s;s=jt(s);for(let r=0;r<kr.length;r++){const o=kr[r]+s;if(o in e)return fs[n]=o}return n}const Or="http://www.w3.org/1999/xlink";function Ir(e,n,t,s,r,o=Zi(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Or,n.slice(6,n.length)):e.setAttributeNS(Or,n,t):t==null||o&&!ao(t)?e.removeAttribute(n):e.setAttribute(n,o?"":_n(t)?String(t):t)}function Mr(e,n,t,s,r){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?yi(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let i=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=ao(t):t==null&&c==="string"?(t="",i=!0):c==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(r||n)}function nu(e,n,t,s){e.addEventListener(n,t,s)}function tu(e,n,t,s){e.removeEventListener(n,t,s)}const Lr=Symbol("_vei");function su(e,n,t,s,r=null){const o=e[Lr]||(e[Lr]={}),i=o[n];if(s&&i)i.value=s;else{const[c,l]=ru(n);if(s){const f=o[n]=lu(s,r);nu(e,c,f,l)}else i&&(tu(e,c,i,l),o[n]=void 0)}}const Nr=/(?:Once|Passive|Capture)$/;function ru(e){let n;if(Nr.test(e)){n={};let s;for(;s=e.match(Nr);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):In(e.slice(2)),n]}let ds=0;const ou=Promise.resolve(),iu=()=>ds||(ou.then(()=>ds=0),ds=Date.now());function lu(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Ke(cu(s,t.value),n,5,[s])};return t.value=e,t.attached=iu(),t}function cu(e,n){if(U(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>r=>!r._stopped&&s&&s(r))}else return n}const $r=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uu=(e,n,t,s,r,o)=>{const i=r==="svg";n==="class"?Gc(e,s,i):n==="style"?Zc(e,t,s):Nt(n)?Ms(n)||su(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):au(e,n,s,i))?(Mr(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Ir(e,n,s,i,o,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!he(s))?Mr(e,je(n),s,o,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),Ir(e,n,s,i))};function au(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&$r(n)&&q(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $r(n)&&he(t)?!1:n in e}const fu=Ce({patchProp:uu},Hc);let Fr;function du(){return Fr||(Fr=ac(fu))}const hu=(...e)=>{const n=du().createApp(...e),{mount:t}=n;return n.mount=s=>{const r=gu(s);if(!r)return;const o=n._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=t(r,!1,pu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},n};function pu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function gu(e){return he(e)?document.querySelector(e):e}var mu=!1;/*!
 * pinia v2.2.7
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Di;const Yt=e=>Di=e,xi=Symbol();function Ps(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ot;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ot||(ot={}));function Cu(){const e=go(!0),n=e.run(()=>Qe({}));let t=[],s=[];const r=Vs({install(o){Yt(r),r._a=o,o.provide(xi,r),o.config.globalProperties.$pinia=r,s.forEach(i=>t.push(i)),s=[]},use(o){return!this._a&&!mu?s.push(o):t.push(o),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return r}const Si=()=>{};function jr(e,n,t,s=Si){e.push(n);const r=()=>{const o=e.indexOf(n);o>-1&&(e.splice(o,1),s())};return!t&&mo()&&el(r),r}function $n(e,...n){e.slice().forEach(t=>{t(...n)})}const vu=e=>e(),Hr=Symbol(),hs=Symbol();function Ts(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,s)=>e.set(s,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const s=n[t],r=e[t];Ps(r)&&Ps(s)&&e.hasOwnProperty(t)&&!pe(s)&&!An(s)?e[t]=Ts(r,s):e[t]=s}return e}const Au=Symbol();function bu(e){return!Ps(e)||!e.hasOwnProperty(Au)}const{assign:dn}=Object;function _u(e){return!!(pe(e)&&e.effect)}function yu(e,n,t,s){const{state:r,actions:o,getters:i}=n,c=t.state.value[e];let l;function f(){c||(t.state.value[e]=r?r():{});const u=Bl(t.state.value[e]);return dn(u,o,Object.keys(i||{}).reduce((d,p)=>(d[p]=Vs(me(()=>{Yt(t);const g=t._s.get(e);return i[p].call(g,g)})),d),{}))}return l=wi(e,f,n,t,s,!0),l}function wi(e,n,t={},s,r,o){let i;const c=dn({actions:{}},t),l={deep:!0};let f,u,d=[],p=[],g;const D=s.state.value[e];!o&&!D&&(s.state.value[e]={}),Qe({});let E;function H(K){let b;f=u=!1,typeof K=="function"?(K(s.state.value[e]),b={type:ot.patchFunction,storeId:e,events:g}):(Ts(s.state.value[e],K),b={type:ot.patchObject,payload:K,storeId:e,events:g});const B=E=Symbol();Ks().then(()=>{E===B&&(f=!0)}),u=!0,$n(d,b,s.state.value[e])}const $=o?function(){const{state:b}=t,B=b?b():{};this.$patch(O=>{dn(O,B)})}:Si;function M(){i.stop(),d=[],p=[],s._s.delete(e)}const N=(K,b="")=>{if(Hr in K)return K[hs]=b,K;const B=function(){Yt(s);const O=Array.from(arguments),w=[],G=[];function ae(W){w.push(W)}function ye(W){G.push(W)}$n(p,{args:O,name:B[hs],store:z,after:ae,onError:ye});let oe;try{oe=K.apply(this&&this.$id===e?this:z,O)}catch(W){throw $n(G,W),W}return oe instanceof Promise?oe.then(W=>($n(w,W),W)).catch(W=>($n(G,W),Promise.reject(W))):($n(w,oe),oe)};return B[Hr]=!0,B[hs]=b,B},R={_p:s,$id:e,$onAction:jr.bind(null,p),$patch:H,$reset:$,$subscribe(K,b={}){const B=jr(d,K,b.detached,()=>O()),O=i.run(()=>zn(()=>s.state.value[e],w=>{(b.flush==="sync"?u:f)&&K({storeId:e,type:ot.direct,events:g},w)},dn({},l,b)));return B},$dispose:M},z=Ct(R);s._s.set(e,z);const Y=(s._a&&s._a.runWithContext||vu)(()=>s._e.run(()=>(i=go()).run(()=>n({action:N}))));for(const K in Y){const b=Y[K];if(pe(b)&&!_u(b)||An(b))o||(D&&bu(b)&&(pe(b)?b.value=D[K]:Ts(b,D[K])),s.state.value[e][K]=b);else if(typeof b=="function"){const B=N(b,K);Y[K]=B,c.actions[K]=b}}return dn(z,Y),dn(X(z),Y),Object.defineProperty(z,"$state",{get:()=>s.state.value[e],set:K=>{H(b=>{dn(b,K)})}}),s._p.forEach(K=>{dn(z,i.run(()=>K({store:z,app:s._a,pinia:s,options:c})))}),D&&o&&t.hydrate&&t.hydrate(z.$state,D),f=!0,u=!0,z}/*! #__NO_SIDE_EFFECTS__ */function Bu(e,n,t){let s,r;const o=typeof n=="function";s=e,r=o?t:n;function i(c,l){const f=sc();return c=c||(f?Ve(xi,null):null),c&&Yt(c),c=Di,c._s.has(s)||(o?wi(s,n,r,c):yu(s,r,c)),c._s.get(s)}return i.$id=s,i}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jn=typeof document<"u";function Ei(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Du(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ei(e.default)}const ne=Object.assign;function ps(e,n){const t={};for(const s in n){const r=n[s];t[s]=qe(r)?r.map(e):e(r)}return t}const it=()=>{},qe=Array.isArray,Pi=/#/g,xu=/&/g,Su=/\//g,wu=/=/g,Eu=/\?/g,Ti=/\+/g,Pu=/%5B/g,Tu=/%5D/g,Ri=/%5E/g,Ru=/%60/g,ki=/%7B/g,ku=/%7C/g,Oi=/%7D/g,Ou=/%20/g;function Zs(e){return encodeURI(""+e).replace(ku,"|").replace(Pu,"[").replace(Tu,"]")}function Iu(e){return Zs(e).replace(ki,"{").replace(Oi,"}").replace(Ri,"^")}function Rs(e){return Zs(e).replace(Ti,"%2B").replace(Ou,"+").replace(Pi,"%23").replace(xu,"%26").replace(Ru,"`").replace(ki,"{").replace(Oi,"}").replace(Ri,"^")}function Mu(e){return Rs(e).replace(wu,"%3D")}function Lu(e){return Zs(e).replace(Pi,"%23").replace(Eu,"%3F")}function Nu(e){return e==null?"":Lu(e).replace(Su,"%2F")}function gt(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const $u=/\/$/,Fu=e=>e.replace($u,"");function gs(e,n,t="/"){let s,r={},o="",i="";const c=n.indexOf("#");let l=n.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=n.slice(0,l),o=n.slice(l+1,c>-1?c:n.length),r=e(o)),c>-1&&(s=s||n.slice(0,c),i=n.slice(c,n.length)),s=Uu(s??n,t),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:gt(i)}}function ju(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Qr(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Hu(e,n,t){const s=n.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&Vn(n.matched[s],t.matched[r])&&Ii(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Vn(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ii(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Qu(e[t],n[t]))return!1;return!0}function Qu(e,n){return qe(e)?Ur(e,n):qe(n)?Ur(n,e):e===n}function Ur(e,n){return qe(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function Uu(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=t.length-1,i,c;for(i=0;i<s.length;i++)if(c=s[i],c!==".")if(c==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mt;(function(e){e.pop="pop",e.push="push"})(mt||(mt={}));var lt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(lt||(lt={}));function zu(e){if(!e)if(jn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Fu(e)}const Vu=/^[^#]+#/;function Ku(e,n){return e.replace(Vu,"#")+n}function qu(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const Jt=()=>({left:window.scrollX,top:window.scrollY});function Wu(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;n=qu(r,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function zr(e,n){return(history.state?history.state.position-n:-1)+e}const ks=new Map;function Gu(e,n){ks.set(e,n)}function Yu(e){const n=ks.get(e);return ks.delete(e),n}let Ju=()=>location.protocol+"//"+location.host;function Mi(e,n){const{pathname:t,search:s,hash:r}=n,o=e.indexOf("#");if(o>-1){let c=r.includes(e.slice(o))?e.slice(o).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),Qr(l,"")}return Qr(t,e)+s+r}function Xu(e,n,t,s){let r=[],o=[],i=null;const c=({state:p})=>{const g=Mi(e,location),D=t.value,E=n.value;let H=0;if(p){if(t.value=g,n.value=p,i&&i===D){i=null;return}H=E?p.position-E.position:0}else s(g);r.forEach($=>{$(t.value,D,{delta:H,type:mt.pop,direction:H?H>0?lt.forward:lt.back:lt.unknown})})};function l(){i=t.value}function f(p){r.push(p);const g=()=>{const D=r.indexOf(p);D>-1&&r.splice(D,1)};return o.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:Jt()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function Vr(e,n,t,s=!1,r=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:r?Jt():null}}function Zu(e){const{history:n,location:t}=window,s={value:Mi(e,t)},r={value:n.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(l,f,u){const d=e.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:Ju()+e+l;try{n[u?"replaceState":"pushState"](f,"",p),r.value=f}catch(g){console.error(g),t[u?"replace":"assign"](p)}}function i(l,f){const u=ne({},n.state,Vr(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});o(l,u,!0),s.value=l}function c(l,f){const u=ne({},r.value,n.state,{forward:l,scroll:Jt()});o(u.current,u,!0);const d=ne({},Vr(s.value,l,null),{position:u.position+1},f);o(l,d,!1),s.value=l}return{location:s,state:r,push:c,replace:i}}function ea(e){e=zu(e);const n=Zu(e),t=Xu(e,n.state,n.location,n.replace);function s(o,i=!0){i||t.pauseListeners(),history.go(o)}const r=ne({location:"",base:e,go:s,createHref:Ku.bind(null,e)},n,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function na(e){return typeof e=="string"||e&&typeof e=="object"}function Li(e){return typeof e=="string"||typeof e=="symbol"}const Ni=Symbol("");var Kr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kr||(Kr={}));function Kn(e,n){return ne(new Error,{type:e,[Ni]:!0},n)}function sn(e,n){return e instanceof Error&&Ni in e&&(n==null||!!(e.type&n))}const qr="[^/]+?",ta={sensitive:!1,strict:!1,start:!0,end:!0},sa=/[.+*?^${}()[\]/\\]/g;function ra(e,n){const t=ne({},ta,n),s=[];let r=t.start?"^":"";const o=[];for(const f of e){const u=f.length?[]:[90];t.strict&&!f.length&&(r+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(t.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(sa,"\\$&"),g+=40;else if(p.type===1){const{value:D,repeatable:E,optional:H,regexp:$}=p;o.push({name:D,repeatable:E,optional:H});const M=$||qr;if(M!==qr){g+=10;try{new RegExp(`(${M})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${D}" (${M}): `+R.message)}}let N=E?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(N=H&&f.length<2?`(?:/${N})`:"/"+N),H&&(N+="?"),r+=N,g+=20,H&&(g+=-8),E&&(g+=-20),M===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(t.strict&&t.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,t.sensitive?"":"i");function c(f){const u=f.match(i),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",D=o[p-1];d[D.name]=g&&D.repeatable?g.split("/"):g}return d}function l(f){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:D,repeatable:E,optional:H}=g,$=D in f?f[D]:"";if(qe($)&&!E)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const M=qe($)?$.join("/"):$;if(!M)if(H)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${D}"`);u+=M}}return u||"/"}return{re:i,score:s,keys:o,parse:c,stringify:l}}function oa(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===80?-1:1:e.length>n.length?n.length===1&&n[0]===80?1:-1:0}function $i(e,n){let t=0;const s=e.score,r=n.score;for(;t<s.length&&t<r.length;){const o=oa(s[t],r[t]);if(o)return o;t++}if(Math.abs(r.length-s.length)===1){if(Wr(s))return 1;if(Wr(r))return-1}return r.length-s.length}function Wr(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const ia={type:0,value:""},la=/[a-zA-Z0-9_]/;function ca(e){if(!e)return[[]];if(e==="/")return[[ia]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(g){throw new Error(`ERR (${t})/"${f}": ${g}`)}let t=0,s=t;const r=[];let o;function i(){o&&r.push(o),o=[]}let c=0,l,f="",u="";function d(){f&&(t===0?o.push({type:0,value:f}):t===1||t===2||t===3?(o.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:l==="/"?(f&&d(),i()):l===":"?(d(),t=1):p();break;case 4:p(),t=s;break;case 1:l==="("?t=2:la.test(l)?p():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${f}"`),d(),i(),r}function ua(e,n,t){const s=ra(ca(e.path),t),r=ne(s,{record:e,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function aa(e,n){const t=[],s=new Map;n=Xr({strict:!1,end:!0,sensitive:!1},n);function r(d){return s.get(d)}function o(d,p,g){const D=!g,E=Yr(d);E.aliasOf=g&&g.record;const H=Xr(n,d),$=[E];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of R)$.push(Yr(ne({},E,{components:g?g.record.components:E.components,path:z,aliasOf:g?g.record:E})))}let M,N;for(const R of $){const{path:z}=R;if(p&&z[0]!=="/"){const Z=p.record.path,Y=Z[Z.length-1]==="/"?"":"/";R.path=p.record.path+(z&&Y+z)}if(M=ua(R,p,H),g?g.alias.push(M):(N=N||M,N!==M&&N.alias.push(M),D&&d.name&&!Jr(M)&&i(d.name)),Fi(M)&&l(M),E.children){const Z=E.children;for(let Y=0;Y<Z.length;Y++)o(Z[Y],M,g&&g.children[Y])}g=g||M}return N?()=>{i(N)}:it}function i(d){if(Li(d)){const p=s.get(d);p&&(s.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return t}function l(d){const p=ha(d,t);t.splice(p,0,d),d.record.name&&!Jr(d)&&s.set(d.record.name,d)}function f(d,p){let g,D={},E,H;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Kn(1,{location:d});H=g.record.name,D=ne(Gr(p.params,g.keys.filter(N=>!N.optional).concat(g.parent?g.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&Gr(d.params,g.keys.map(N=>N.name))),E=g.stringify(D)}else if(d.path!=null)E=d.path,g=t.find(N=>N.re.test(E)),g&&(D=g.parse(E),H=g.record.name);else{if(g=p.name?s.get(p.name):t.find(N=>N.re.test(p.path)),!g)throw Kn(1,{location:d,currentLocation:p});H=g.record.name,D=ne({},p.params,d.params),E=g.stringify(D)}const $=[];let M=g;for(;M;)$.unshift(M.record),M=M.parent;return{name:H,path:E,params:D,matched:$,meta:da($)}}e.forEach(d=>o(d));function u(){t.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:i,clearRoutes:u,getRoutes:c,getRecordMatcher:r}}function Gr(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function Yr(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fa(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function fa(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="object"?t[s]:t;return n}function Jr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function da(e){return e.reduce((n,t)=>ne(n,t.meta),{})}function Xr(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}function ha(e,n){let t=0,s=n.length;for(;t!==s;){const o=t+s>>1;$i(e,n[o])<0?s=o:t=o+1}const r=pa(e);return r&&(s=n.lastIndexOf(r,s-1)),s}function pa(e){let n=e;for(;n=n.parent;)if(Fi(n)&&$i(e,n)===0)return n}function Fi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ga(e){const n={};if(e===""||e==="?")return n;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Ti," "),i=o.indexOf("="),c=gt(i<0?o:o.slice(0,i)),l=i<0?null:gt(o.slice(i+1));if(c in n){let f=n[c];qe(f)||(f=n[c]=[f]),f.push(l)}else n[c]=l}return n}function Zr(e){let n="";for(let t in e){const s=e[t];if(t=Mu(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(qe(s)?s.map(o=>o&&Rs(o)):[s&&Rs(s)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function ma(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=qe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return n}const Ca=Symbol(""),eo=Symbol(""),Xt=Symbol(""),ji=Symbol(""),Os=Symbol("");function Jn(){let e=[];function n(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function mn(e,n,t,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,l)=>{const f=p=>{p===!1?l(Kn(4,{from:t,to:n})):p instanceof Error?l(p):na(p)?l(Kn(2,{from:n,to:p})):(i&&s.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),c())},u=o(()=>e.call(s&&s.instances[r],n,t,f));let d=Promise.resolve(u);e.length<3&&(d=d.then(f)),d.catch(p=>l(p))})}function ms(e,n,t,s,r=o=>o()){const o=[];for(const i of e)for(const c in i.components){let l=i.components[c];if(!(n!=="beforeRouteEnter"&&!i.instances[c]))if(Ei(l)){const u=(l.__vccOpts||l)[n];u&&o.push(mn(u,t,s,i,c,r))}else{let f=l();o.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const d=Du(u)?u.default:u;i.mods[c]=u,i.components[c]=d;const g=(d.__vccOpts||d)[n];return g&&mn(g,t,s,i,c,r)()}))}}return o}function no(e){const n=Ve(Xt),t=Ve(ji),s=me(()=>{const l=Ue(e.to);return n.resolve(l)}),r=me(()=>{const{matched:l}=s.value,{length:f}=l,u=l[f-1],d=t.matched;if(!u||!d.length)return-1;const p=d.findIndex(Vn.bind(null,u));if(p>-1)return p;const g=to(l[f-2]);return f>1&&to(u)===g&&d[d.length-1].path!==g?d.findIndex(Vn.bind(null,l[f-2])):p}),o=me(()=>r.value>-1&&ya(t.params,s.value.params)),i=me(()=>r.value>-1&&r.value===t.matched.length-1&&Ii(t.params,s.value.params));function c(l={}){if(_a(l)){const f=n[Ue(e.replace)?"replace":"push"](Ue(e.to)).catch(it);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:me(()=>s.value.href),isActive:o,isExactActive:i,navigate:c}}function va(e){return e.length===1?e[0]:e}const Aa=qn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:no,setup(e,{slots:n}){const t=Ct(no(e)),{options:s}=Ve(Xt),r=me(()=>({[so(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[so(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&va(n.default(t));return e.custom?o:Xs("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},o)}}}),ba=Aa;function _a(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function ya(e,n){for(const t in n){const s=n[t],r=e[t];if(typeof s=="string"){if(s!==r)return!1}else if(!qe(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function to(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const so=(e,n,t)=>e??n??t,Ba=qn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const s=Ve(Os),r=me(()=>e.route||s.value),o=Ve(eo,0),i=me(()=>{let f=Ue(o);const{matched:u}=r.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),c=me(()=>r.value.matched[i.value]);St(eo,me(()=>i.value+1)),St(Ca,c),St(Os,r);const l=Qe();return zn(()=>[l.value,c.value,e.name],([f,u,d],[p,g,D])=>{u&&(u.instances[d]=f,g&&g!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),f&&u&&(!g||!Vn(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(E=>E(f))},{flush:"post"}),()=>{const f=r.value,u=e.name,d=c.value,p=d&&d.components[u];if(!p)return ro(t.default,{Component:p,route:f});const g=d.props[u],D=g?g===!0?f.params:typeof g=="function"?g(f):g:null,H=Xs(p,ne({},D,n,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return ro(t.default,{Component:H,route:f})||H}}});function ro(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Da=Ba;function xa(e){const n=aa(e.routes,e),t=e.parseQuery||ga,s=e.stringifyQuery||Zr,r=e.history,o=Jn(),i=Jn(),c=Jn(),l=bl(fn);let f=fn;jn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ps.bind(null,v=>""+v),d=ps.bind(null,Nu),p=ps.bind(null,gt);function g(v,I){let T,F;return Li(v)?(T=n.getRecordMatcher(v),F=I):F=v,n.addRoute(F,T)}function D(v){const I=n.getRecordMatcher(v);I&&n.removeRoute(I)}function E(){return n.getRoutes().map(v=>v.record)}function H(v){return!!n.getRecordMatcher(v)}function $(v,I){if(I=ne({},I||l.value),typeof v=="string"){const h=gs(t,v,I.path),m=n.resolve({path:h.path},I),A=r.createHref(h.fullPath);return ne(h,m,{params:p(m.params),hash:gt(h.hash),redirectedFrom:void 0,href:A})}let T;if(v.path!=null)T=ne({},v,{path:gs(t,v.path,I.path).path});else{const h=ne({},v.params);for(const m in h)h[m]==null&&delete h[m];T=ne({},v,{params:d(h)}),I.params=d(I.params)}const F=n.resolve(T,I),se=v.hash||"";F.params=u(p(F.params));const fe=ju(s,ne({},v,{hash:Iu(se),path:F.path})),a=r.createHref(fe);return ne({fullPath:fe,hash:se,query:s===Zr?ma(v.query):v.query||{}},F,{redirectedFrom:void 0,href:a})}function M(v){return typeof v=="string"?gs(t,v,l.value.path):ne({},v)}function N(v,I){if(f!==v)return Kn(8,{from:I,to:v})}function R(v){return Y(v)}function z(v){return R(ne(M(v),{replace:!0}))}function Z(v){const I=v.matched[v.matched.length-1];if(I&&I.redirect){const{redirect:T}=I;let F=typeof T=="function"?T(v):T;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=M(F):{path:F},F.params={}),ne({query:v.query,hash:v.hash,params:F.path!=null?{}:v.params},F)}}function Y(v,I){const T=f=$(v),F=l.value,se=v.state,fe=v.force,a=v.replace===!0,h=Z(T);if(h)return Y(ne(M(h),{state:typeof h=="object"?ne({},se,h.state):se,force:fe,replace:a}),I||T);const m=T;m.redirectedFrom=I;let A;return!fe&&Hu(s,F,T)&&(A=Kn(16,{to:m,from:F}),We(F,F,!0,!1)),(A?Promise.resolve(A):B(m,F)).catch(C=>sn(C)?sn(C,2)?C:un(C):ee(C,m,F)).then(C=>{if(C){if(sn(C,2))return Y(ne({replace:a},M(C.to),{state:typeof C.to=="object"?ne({},se,C.to.state):se,force:fe}),I||m)}else C=w(m,F,!0,a,se);return O(m,F,C),C})}function K(v,I){const T=N(v,I);return T?Promise.reject(T):Promise.resolve()}function b(v){const I=Ln.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(v):v()}function B(v,I){let T;const[F,se,fe]=Sa(v,I);T=ms(F.reverse(),"beforeRouteLeave",v,I);for(const h of F)h.leaveGuards.forEach(m=>{T.push(mn(m,v,I))});const a=K.bind(null,v,I);return T.push(a),Ne(T).then(()=>{T=[];for(const h of o.list())T.push(mn(h,v,I));return T.push(a),Ne(T)}).then(()=>{T=ms(se,"beforeRouteUpdate",v,I);for(const h of se)h.updateGuards.forEach(m=>{T.push(mn(m,v,I))});return T.push(a),Ne(T)}).then(()=>{T=[];for(const h of fe)if(h.beforeEnter)if(qe(h.beforeEnter))for(const m of h.beforeEnter)T.push(mn(m,v,I));else T.push(mn(h.beforeEnter,v,I));return T.push(a),Ne(T)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),T=ms(fe,"beforeRouteEnter",v,I,b),T.push(a),Ne(T))).then(()=>{T=[];for(const h of i.list())T.push(mn(h,v,I));return T.push(a),Ne(T)}).catch(h=>sn(h,8)?h:Promise.reject(h))}function O(v,I,T){c.list().forEach(F=>b(()=>F(v,I,T)))}function w(v,I,T,F,se){const fe=N(v,I);if(fe)return fe;const a=I===fn,h=jn?history.state:{};T&&(F||a?r.replace(v.fullPath,ne({scroll:a&&h&&h.scroll},se)):r.push(v.fullPath,se)),l.value=v,We(v,I,T,a),un()}let G;function ae(){G||(G=r.listen((v,I,T)=>{if(!bt.listening)return;const F=$(v),se=Z(F);if(se){Y(ne(se,{replace:!0,force:!0}),F).catch(it);return}f=F;const fe=l.value;jn&&Gu(zr(fe.fullPath,T.delta),Jt()),B(F,fe).catch(a=>sn(a,12)?a:sn(a,2)?(Y(ne(M(a.to),{force:!0}),F).then(h=>{sn(h,20)&&!T.delta&&T.type===mt.pop&&r.go(-1,!1)}).catch(it),Promise.reject()):(T.delta&&r.go(-T.delta,!1),ee(a,F,fe))).then(a=>{a=a||w(F,fe,!1),a&&(T.delta&&!sn(a,8)?r.go(-T.delta,!1):T.type===mt.pop&&sn(a,20)&&r.go(-1,!1)),O(F,fe,a)}).catch(it)}))}let ye=Jn(),oe=Jn(),W;function ee(v,I,T){un(v);const F=oe.list();return F.length?F.forEach(se=>se(v,I,T)):console.error(v),Promise.reject(v)}function en(){return W&&l.value!==fn?Promise.resolve():new Promise((v,I)=>{ye.add([v,I])})}function un(v){return W||(W=!v,ae(),ye.list().forEach(([I,T])=>v?T(v):I()),ye.reset()),v}function We(v,I,T,F){const{scrollBehavior:se}=e;if(!jn||!se)return Promise.resolve();const fe=!T&&Yu(zr(v.fullPath,0))||(F||!T)&&history.state&&history.state.scroll||null;return Ks().then(()=>se(v,I,fe)).then(a=>a&&Wu(a)).catch(a=>ee(a,v,I))}const Ee=v=>r.go(v);let Mn;const Ln=new Set,bt={currentRoute:l,listening:!0,addRoute:g,removeRoute:D,clearRoutes:n.clearRoutes,hasRoute:H,getRoutes:E,resolve:$,options:e,push:R,replace:z,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:oe.add,isReady:en,install(v){const I=this;v.component("RouterLink",ba),v.component("RouterView",Da),v.config.globalProperties.$router=I,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(l)}),jn&&!Mn&&l.value===fn&&(Mn=!0,R(r.location).catch(se=>{}));const T={};for(const se in fn)Object.defineProperty(T,se,{get:()=>l.value[se],enumerable:!0});v.provide(Xt,I),v.provide(ji,Ro(T)),v.provide(Os,l);const F=v.unmount;Ln.add(v),v.unmount=function(){Ln.delete(v),Ln.size<1&&(f=fn,G&&G(),G=null,l.value=fn,Mn=!1,W=!1),F()}}};function Ne(v){return v.reduce((I,T)=>I.then(()=>b(T)),Promise.resolve())}return bt}function Sa(e,n){const t=[],s=[],r=[],o=Math.max(n.matched.length,e.matched.length);for(let i=0;i<o;i++){const c=n.matched[i];c&&(e.matched.find(f=>Vn(f,c))?s.push(c):t.push(c));const l=e.matched[i];l&&(n.matched.find(f=>Vn(f,l))||r.push(l))}return[t,s,r]}function er(){return Ve(Xt)}const nr=Bu("quiz",{state:()=>({currentQuizBank:null,currentQuestionIndex:0,userAnswers:new Map,markedQuestions:new Set,score:0,isComplete:!1}),actions:{setQuizBank(e){this.currentQuizBank=e,this.currentQuestionIndex=0,this.userAnswers.clear(),this.score=0,this.isComplete=!1},submitAnswer(e){if(!this.currentQuizBank)return;this.userAnswers.set(this.currentQuestionIndex,e);const n=this.currentQuizBank.questions[this.currentQuestionIndex];if(Array.isArray(e)&&Array.isArray(n.answer)){const t=[...e].sort().join(""),s=[...n.answer].sort().join("");t===s&&this.score++}else e===n.answer&&this.score++},getSavedAnswer(e){return this.userAnswers.get(e)},nextQuestion(){this.currentQuizBank&&(this.currentQuestionIndex<this.currentQuizBank.questions.length-1?this.currentQuestionIndex++:this.isComplete=!0)},previousQuestion(){this.currentQuestionIndex>0&&this.currentQuestionIndex--},toggleMarkQuestion(e){this.markedQuestions.has(e)?this.markedQuestions.delete(e):this.markedQuestions.add(e)},jumpToQuestion(e){e>=0&&this.currentQuizBank&&e<this.currentQuizBank.questions.length&&(this.currentQuestionIndex=e)}},getters:{progress:e=>{if(!e.currentQuizBank)return 0;const n=e.userAnswers.size;return Math.round(n/e.currentQuizBank.questions.length*100)},isAnswerCorrect:e=>n=>{var r;const t=e.userAnswers.get(n),s=(r=e.currentQuizBank)==null?void 0:r.questions[n];if(!t||!s)return!1;if(Array.isArray(t)&&Array.isArray(s.answer)){const o=[...t].sort().join(""),i=[...s.answer].sort().join("");return o===i}return t===s.answer}}}),wa=`**一、单选题（30道）**

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
答案：ABCD`,Ea=`**一、单选题（30 道）**

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
答案：ABCD `,Pa=`**一、单选题（30 道）**

1. 计算机中，一个字节由（  ）位二进制数组成。
A. 4
B. 8
C. 16
D. 32
答案：B

2. 定点整数在计算机中是如何表示的（  ）。
A. 小数点固定在符号位之后
B. 小数点固定在数值位之后
C. 小数点固定在最低位之后
D. 小数点位置可任意指定
答案：C

3. 下列哪种存储器断电后数据不会丢失（  ）。
A. SRAM
B. DRAM
C. ROM
D. Cache
答案：C

4. 指令流水线技术能提高计算机的（  ）。
A. 存储容量
B. 运算速度
C. 可靠性
D. 兼容性
答案：B

5. 数据结构中，循环队列的优点是（  ）。
A. 可以动态增长
B. 存储空间利用率高
C. 入队和出队操作简单
D. 能存储多种类型的数据
答案：B

6. 二叉搜索树的特点是（  ）。
A. 左子树节点值小于根节点值，右子树节点值大于根节点值
B. 所有节点值都相等
C. 节点值随机分布
D. 左子树节点值大于根节点值，右子树节点值小于根节点值
答案：A

7. 计算机网络的拓扑结构中，可靠性最高的是（  ）。
A. 总线型
B. 星型
C. 环型
D. 网状型
答案：D

8. 网络层的主要设备是（  ）。
A. 路由器
B. 交换机
C. 网桥
D. 集线器
答案：A

9. 操作系统中，进程的同步机制主要用于（  ）。
A. 提高进程的执行速度
B. 协调多个进程对共享资源的访问
C. 减少进程的资源占用
D. 保证进程的顺序执行
答案：B

10. 关系数据库中，主键的作用是（  ）。
A. 唯一标识表中的一行数据
B. 提高数据查询速度
C. 建立表之间的联系
D. 存储数据
答案：A

11. 在通信原理中，随机过程的数字特征不包括（  ）。
A. 均值
B. 方差
C. 协方差
D. 相位
答案：D

12. 模拟通信系统中，角度调制包括（  ）。
A. AM 和 FM
B. FM 和 PM
C. DSB 和 SSB
D. VSB 和 AM
答案：B

13. 数字基带传输中，奈奎斯特速率是指（  ）。
A. 无码间干扰的最高传输速率
B. 最低传输速率
C. 平均传输速率
D. 实际传输速率
答案：A

14. 通信网理论基础中，多址技术不包括（  ）。
A. FDMA
B. TDMA
C. CDMA
D. PDMA
答案：D

15. 光纤通信中，光纤的传播时延与（  ）有关。
A. 光纤的长度和折射率
B. 光信号的频率
C. 光信号的功率
D. 光纤的直径
答案：A

16. 光发射机中，内调制是指（  ）。
A. 在光信号产生过程中对光进行调制
B. 在光信号传输过程中对光进行调制
C. 在光信号接收过程中对光进行调制
D. 在电信号产生过程中对电进行调制
答案：A

17. 光接收机中，判决电路的作用是（  ）。
A. 确定光信号的强度
B. 根据采样值判断传输的是“0”还是“1”
C. 放大光信号
D. 滤除噪声
答案：B

18. 数字化新技术中，数据仓库的特点不包括（  ）。
A. 面向主题
B. 集成性
C. 易变性
D. 时变性
答案：C

19. 人工智能中，自然语言处理的主要任务不包括（  ）。
A. 机器翻译
B. 文本分类
C. 图像识别
D. 语音识别与合成
答案：C

20. 计算机组成原理中，微程序控制器的核心部件是（  ）。
A. 控制存储器
B. 指令寄存器
C. 程序计数器
D. 运算器
答案：A

21. 下列关于浮点数表示的说法错误的是（  ）。
A. 由阶码和尾数两部分组成
B. 阶码决定了数的表示范围
C. 尾数决定了数的精度
D. 浮点数的运算比定点数简单
答案：D

22. 指令系统中，变址寻址方式中，变址寄存器的内容（  ）。
A. 固定不变
B. 由程序设定初始值后不变
C. 可在程序执行过程中改变
D. 由操作系统设定
答案：C

23. 数据结构中，哈希表的查找效率主要取决于（  ）。
A. 表的长度
B. 哈希函数的设计
C. 数据的存储顺序
D. 数据的类型
答案：B

24. 计算机网络中，HTTP 协议默认使用的端口号是（  ）。
A. 21
B. 23
C. 80
D. 443
答案：C

25. 操作系统中，虚拟存储器的页面置换算法不包括（  ）。
A. 先进先出算法
B. 最近最少使用算法
C. 最佳置换算法
D. 随机置换算法
答案：D

26. 数据库系统中，视图是（  ）。
A. 真实存在的表
B. 虚拟表，不存储数据
C. 存储数据的临时表
D. 数据库的备份
答案：B

27. 通信原理中，恒参信道对信号传输的影响主要是（  ）。
A. 幅频失真和相频失真
B. 多径衰落
C. 瑞利衰落
D. 阴影衰落
答案：A

28. 数字信号的载波传输中，QPSK 是（  ）。
A. 二进制数字调制方式
B. 四进制数字调制方式
C. 八进制数字调制方式
D. 十六进制数字调制方式
答案：B

29. 通信网理论基础中，流量整形的主要目的是（  ）。
A. 使流量符合特定的规范
B. 减少流量
C. 增加流量
D. 改变流量的传输路径
答案：A

30. 光纤通信器件中，光耦合器的作用是（  ）。
A. 将光信号分成多路
B. 连接不同类型的光纤
C. 放大光信号
D. 滤除光噪声
答案：A

**二、判断题（20 道）**

1. 计算机系统中，软件可以脱离硬件独立运行。（  ）
答案：错误

2. 补码运算可以将减法转换为加法进行计算。（  ）
答案：正确

3. 主存的存储单元地址是连续的。（  ）
答案：正确

4. 指令的执行过程包括取指令、分析指令和执行指令三个阶段。（  ）
答案：正确

5. 数据结构中的数组在内存中是按列优先存储的。（  ）
答案：错误

6. 无向图的邻接矩阵是对称矩阵。（  ）
答案：正确

7. 计算机网络中，IP 地址分为 A、B、C、D、E 五类，其中 D 类用于组播。（  ）
答案：正确

8. 传输层的 UDP 协议不需要建立连接，直接发送数据。（  ）
答案：正确

9. 操作系统中，线程是进程的一个执行单元，一个进程可以包含多个线程。（  ）
答案：正确

10. 关系数据库中，一个关系可以有多个主键。（  ）
答案：错误

11. 在通信原理中，平稳随机过程的统计特性与时间起点无关。（  ）
答案：正确

12. 模拟通信系统中，DSB 信号的功率利用率比 AM 信号高。（  ）
答案：正确

13. 数字基带传输系统中，采用部分响应技术可以提高频带利用率，但会引入码间干扰。（  ）
答案：错误

14. 通信网理论基础中，路由算法分为静态路由和动态路由。（  ）
答案：正确

15. 光纤通信中，光纤的数值孔径越大，其接收光的能力越强，但也会增加光纤的损耗。（  ）
答案：正确

16. 光发射机中，外调制方式比内调制方式的调制速率更高。（  ）
答案：正确

17. 光接收机的灵敏度越高，说明其能够检测到的光信号越弱。（  ）
答案：正确

18. 数字化新技术中，云计算是一种基于互联网的计算方式，通过共享资源池提供服务。（  ）
答案：正确

19. 人工智能中，深度学习是一种基于人工神经网络的机器学习方法。（  ）
答案：正确

20. 计算机组成原理中，中断处理过程包括中断请求、中断响应、中断服务和中断返回。（  ）
答案：正确

**三、多选题（10 道）**

1. 计算机系统的性能评价指标有（  ）。
A. MIPS
B. MFLOPS
C. CPI
D. 吞吐量
答案：ABCD

2. 以下属于非线性数据结构的有（  ）。
A. 树
B. 图
C. 栈
D. 队列
答案：AB

3. 指令系统的设计原则包括（  ）。
A. 指令长度固定
B. 指令格式规整
C. 寻址方式丰富
D. 指令功能简单
答案：ABC

4. 计算机网络的协议要素包括（  ）。
A. 语法
B. 语义
C. 时序
D. 同步
答案：ABC

5. 操作系统的进程状态有（  ）。
A. 就绪态
B. 运行态
C. 阻塞态
D. 终止态
答案：ABC

6. 数据库系统的完整性约束包括（  ）。
A. 实体完整性
B. 参照完整性
C. 用户自定义完整性
D. 域完整性
答案：ABC

7. 通信原理中，信道容量的影响因素有（  ）。
A. 信道带宽
B. 信号功率
C. 噪声功率
D. 调制方式
答案：ABC

8. 光纤通信系统的组成部分除了光发射机、光纤和光接收机外，还可能包括（  ）。
A. 光放大器
B. 光中继器
C. 光分路器
D. 光连接器
答案：ABCD

9. 数字化新技术中，数据挖掘的应用领域有（  ）。
A. 商业智能
B. 医疗保健
C. 金融风险预测
D. 教育教学
答案：ABCD

10. 人工智能中，专家系统的组成部分包括（  ）。
A. 知识库
B. 推理机
C. 数据库
D. 解释器
答案：ABCD `,Ta=`**一、单选题（30 道）**

1. 计算机网络拓扑结构中，总线型拓扑结构的特点是（  ）。
A. 中心节点故障会导致整个网络瘫痪
B. 所有节点连接成一个闭合环路
C. 节点通过总线进行通信，一个节点故障不影响其他节点通信
D. 网络结构复杂，成本高
答案：C

2. 在计算机网络的 OSI 参考模型中，负责数据加密和解密的是（  ）层。
A. 网络
B. 传输
C. 表示
D. 应用
答案：C

3. 以下哪种通信介质的传输速率最高且抗干扰能力最强（  ）。
A. 双绞线
B. 同轴电缆
C. 光纤
D. 无线电波
答案：C

4. 通信原理中，香农公式 C = Wlog₂(1 + S/N)，其中 C 表示（  ）。
A. 信号功率
B. 噪声功率
C. 信道容量
D. 带宽
答案：C

5. 数字信号的载波传输中，ASK 调制是通过改变（  ）来传输信息的。
A. 载波的幅度
B. 载波的频率
C. 载波的相位
D. 载波的周期
答案：A

6. 计算机组成原理中，CPU 中的（  ）寄存器用于存储下一条要执行指令的地址。
A. 程序计数器
B. 指令寄存器
C. 地址寄存器
D. 数据寄存器
答案：A

7. 以下哪种数据结构适合用于实现优先队列（  ）。
A. 数组
B. 链表
C. 栈
D. 堆
答案：D

8. 计算机网络中，IP 地址 192.168.1.100 属于（  ）类地址。
A. A
B. B
C. C
D. D
答案：C

9. 通信网理论基础中，FDMA 是一种（  ）多址技术。
A. 频分
B. 时分
C. 码分
D. 空分
答案：A

10. 光纤通信中，光纤的数值孔径主要影响（  ）。
A. 光纤的传输速度
B. 光纤的弯曲程度
C. 光纤接收光的能力
D. 光纤的损耗
答案：C

11. 数据结构中，二叉树的遍历方式不包括（  ）。
A. 前序遍历
B. 中序遍历
C. 后序遍历
D. 逆序遍历
答案：D

12. 计算机网络的传输层协议中，TCP 协议通过（  ）机制来保证数据的可靠传输。
A. 校验和
B. 重传
C. 序号与确认
D. 以上都是
答案：D

13. 通信原理中，模拟通信系统中 AM 信号的带宽是（  ）。
A. 与调制信号带宽相同
B. 是调制信号带宽的两倍
C. 是调制信号带宽的一半
D. 与载波频率相同
答案：B

14. 计算机组成原理中，高速缓存（Cache）与主存之间的映射方式不包括（  ）。
A. 直接映射
B. 间接映射
C. 全相联映射
D. 组相联映射
答案：B

15. 以下哪种排序算法的平均时间复杂度为 O(nlogn)且是稳定排序（  ）。
A. 快速排序
B. 归并排序
C. 希尔排序
D. 堆排序
答案：B

16. 计算机网络中，交换机工作在（  ）层。
A. 物理
B. 数据链路
C. 网络
D. 传输
答案：B

17. 通信网理论基础中，路由算法中最短路径算法常用的是（  ）算法。
A. 迪杰斯特拉
B. 弗洛伊德
C. 贝尔曼 - 福特
D. 以上都是
答案：D

18. 光纤通信器件中，光放大器的主要作用是（  ）。
A. 放大光信号功率
B. 改变光信号的波长
C. 对光信号进行滤波
D. 连接不同的光纤
答案：A

19. 数据库系统中，SQL 语言中用于查询数据的语句是（  ）。
A. INSERT
B. UPDATE
C. SELECT
D. DELETE
答案：C

20. 计算机网络安全中，防火墙的主要功能不包括（  ）。
A. 访问控制
B. 入侵检测
C. 数据加密
D. 防止网络攻击
答案：C

21. 计算机组成原理中，指令系统的寻址方式中，相对寻址的相对位移量是相对于（  ）。
A. 程序计数器
B. 指令寄存器
C. 地址寄存器
D. 数据寄存器
答案：A

22. 数据结构中，哈希表解决冲突的方法不包括（  ）。
A. 开放定址法
B. 链地址法
C. 再哈希法
D. 排序法
答案：D

23. 计算机网络中，无线网络的传输标准不包括（  ）。
A. Wi-Fi
B. 蓝牙
C. 4G
D. 以太网
答案：D

24. 通信原理中，数字基带传输系统中，为了消除码间干扰，基带传输特性应满足（  ）。
A. 奈奎斯特第一准则
B. 香农定理
C. 抽样定理
D. 傅里叶变换特性
答案：A

25. 操作系统中，虚拟存储器的作用是（  ）。
A. 提高外存的存取速度
B. 扩大主存的存储空间
C. 提高内存利用率
D. 提高 CPU 利用率
答案：B

26. 数据库系统中，关系数据库的完整性约束中，参照完整性是指（  ）。
A. 主键不能为空
B. 外键的值必须在主表中存在
C. 字段的值必须在指定范围内
D. 表中数据不能重复
答案：B

27. 通信网理论基础中，流量控制的主要目的是（  ）。
A. 提高网络传输速度
B. 防止网络拥塞
C. 优化网络拓扑结构
D. 增加网络可靠性
答案：B

28. 光纤通信中，单模光纤的特点是（  ）。
A. 只能传输一种模式的光，传输带宽窄
B. 只能传输一种模式的光，传输带宽宽
C. 可以传输多种模式的光，传输带宽窄
D. 可以传输多种模式的光，传输带宽宽
答案：B

29. 数字化新技术中，云计算的服务模式不包括（  ）。
A. 基础设施即服务（IaaS）
B. 平台即服务（PaaS）
C. 软件即服务（SaaS）
D. 数据即服务（DaaS）
答案：D

30. 计算机网络中，应用层协议 HTTP 用于（  ）。
A. 文件传输
B. 电子邮件发送
C. 网页浏览
D. 远程登录
答案：C

**二、判断题（20 道）**

1. 计算机网络中，网络层的主要功能是实现不同网络之间的互联。（  ）
答案：正确

2. 通信原理中，所有的随机过程都是平稳随机过程。（  ）
答案：错误

3. 光纤通信中，多模光纤的传输距离比单模光纤长。（  ）
答案：错误

4. 计算机组成原理中，RISC 指令系统的指令数量比 CISC 少。（  ）
答案：正确

5. 数据结构中，栈和队列都是特殊的线性表。（  ）
答案：正确

6. 计算机网络安全中，加密技术可以完全杜绝网络攻击。（  ）
答案：错误

7. 通信网理论基础中，动态路由算法能根据网络拓扑结构的变化自动调整路由。（  ）
答案：正确

8. 数据库系统中，视图可以更新数据。（  ）
答案：错误

9. 计算机网络中，传输层的 UDP 协议比 TCP 协议传输效率高。（  ）
答案：正确

10. 通信原理中，数字信号的载波传输中，PSK 调制比 ASK 调制抗噪声性能好。（  ）
答案：正确

11. 计算机组成原理中，Cache 的存在提高了 CPU 访问内存的速度。（  ）
答案：正确

12. 数据结构中，二叉搜索树的查找效率一定比顺序查找高。（  ）
答案：错误

13. 计算机网络中，IP 地址是固定不变的。（  ）
答案：错误

14. 通信网理论基础中，多址技术是为了让多个用户共享通信资源。（  ）
答案：正确

15. 光纤通信中，光发射机的主要作用是将电信号转换为光信号。（  ）
答案：正确

16. 数据库系统中，主键可以有多个。（  ）
答案：错误

17. 计算机网络中，交换机根据 MAC 地址转发数据帧。（  ）
答案：正确

18. 通信原理中，模拟通信系统中 FM 信号的抗噪声性能比 AM 信号好。（  ）
答案：正确

19. 计算机组成原理中，指令的执行是在控制器的控制下完成的。（  ）
答案：正确

20. 数据结构中，图的最短路径算法只能用于无向图。（  ）
答案：错误

**三、多选题（10 道）**

1. 计算机网络的性能指标包括（  ）。
A. 带宽
B. 时延
C. 误码率
D. 吞吐量
答案：ABCD

2. 通信原理中，信道编码的作用包括（  ）。
A. 提高信息传输的可靠性
B. 检测传输错误
C. 纠正传输错误
D. 提高信息传输的有效性
答案：ABC

3. 计算机组成原理中，存储器的层次结构包括（  ）。
A. 寄存器
B. 高速缓存（Cache）
C. 主存
D. 外存
答案：ABCD

4. 数据结构中，线性表的存储结构有（  ）。
A. 顺序存储
B. 链式存储
C. 索引存储
D. 散列存储
答案：AB

5. 计算机网络中，网络安全技术包括（  ）。
A. 防火墙技术
B. 入侵检测技术
C. 加密技术
D. 数字签名技术
答案：ABCD

6. 通信网理论基础中，链路层的协议有（  ）。
A. PPP
B. Ethernet
C. HDLC
D. ATM
答案：ABC

7. 光纤通信系统的组成部分包括（  ）。
A. 光发射机
B. 光纤
C. 光接收机
D. 光放大器
答案：ABCD

8. 数据库系统中，关系数据库的操作包括（  ）。
A. 查询
B. 插入
C. 更新
D. 删除
答案：ABCD

9. 计算机网络中，无线网络的特点包括（  ）。
A. 移动性好
B. 安装便捷
C. 传输速率高
D. 受环境影响大
答案：ABD

10. 通信原理中，数字基带传输的常用码型有（  ）。
A. NRZ 码
B. RZ 码
C. 曼彻斯特码
D. 差分曼彻斯特码
答案：ABCD `,Ra=`**一、单选题（30 道）**

1. 数据库系统的核心是（  ）。
A. 数据库
B. 数据库管理系统
C. 数据模型
D. 软件工具
答案：B

2. 以下哪种数据模型是基于图结构的（  ）。
A. 层次模型
B. 网状模型
C. 关系模型
D. 面向对象模型
答案：D

3. 在关系数据库中，用于唯一标识元组的属性或属性组称为（  ）。
A. 外键
B. 候选键
C. 主键
D. 超键
答案：C

4. SQL 语言中，用于创建表的语句是（  ）。
A. CREATE TABLE
B. ALTER TABLE
C. DROP TABLE
D. INSERT INTO
答案：A

5. 关系数据库的完整性约束中，实体完整性要求（  ）。
A. 主键属性不能为空
B. 外键属性必须与主表中的主键匹配
C. 字段值在指定范围内
D. 表中不能有重复记录
答案：A

6. 以下关于视图的说法正确的是（  ）。
A. 视图是真实存在的物理表
B. 视图的数据可以独立于基本表存在
C. 视图可以简化复杂查询
D. 视图不能进行更新操作
答案：C

7. SQL 语言中，用于从表中选择特定列数据的关键字是（  ）。
A. SELECT
B. FROM
C. WHERE
D. DISTINCT
答案：A

8. 在关系代数中，用于连接两个关系的操作符是（  ）。
A. ∪
B. -
C. ×
D. ⋈
答案：D

9. 数据库设计的第一阶段是（  ）。
A. 概念结构设计
B. 逻辑结构设计
C. 物理结构设计
D. 需求分析
答案：D

10. 以下哪种数据库恢复技术是基于日志文件的（  ）。
A. 转储恢复
B. 镜像恢复
C. 事务恢复
D. 备份恢复
答案：C

11. 关系数据库中，若要对表中的数据进行排序，可使用（  ）子句。
A. ORDER BY
B. GROUP BY
C. HAVING
D. LIMIT
答案：A

12. SQL 语言中，用于更新表中数据的语句是（  ）。
A. UPDATE
B. DELETE
C. SELECT
D. INSERT
答案：A

13. 数据库系统中，数据独立性包括（  ）。
A. 物理独立性和逻辑独立性
B. 数据独立性和应用独立性
C. 存储独立性和操作独立性
D. 结构独立性和功能独立性
答案：A

14. 在关系数据库中，外键是（  ）。
A. 用于建立表之间联系的属性或属性组
B. 表中唯一标识元组的属性
C. 与主键相同的属性
D. 用于存储数据的属性
答案：A

15. 以下哪种数据模型用二维表来表示数据及数据间的联系（  ）。
A. 层次模型
B. 网状模型
C. 关系模型
D. 实体 - 联系模型
答案：C

16. SQL 语言中，用于删除表中数据的语句是（  ）。
A. DELETE
B. DROP
C. TRUNCATE
D. CLEAR
答案：A

17. 数据库设计中，将 E - R 图转换为关系模型属于（  ）阶段。
A. 概念结构设计
B. 逻辑结构设计
C. 物理结构设计
D. 数据库实施
答案：B

18. 关系数据库中，索引的作用是（  ）。
A. 提高数据插入速度
B. 提高数据查询速度
C. 提高数据更新速度
D. 提高数据删除速度
答案：B

19. SQL 语言中，用于统计查询结果行数的函数是（  ）。
A. SUM
B. AVG
C. COUNT
D. MAX
答案：C

20. 数据库系统的安全性机制不包括（  ）。
A. 用户认证
B. 访问控制
C. 数据加密
D. 数据冗余
答案：D

21. 在关系代数中，选择操作是对（  ）进行筛选。
A. 行
B. 列
C. 表
D. 数据库
答案：A

22. SQL 语言中，用于向表中插入多条数据的语句是（  ）。
A. INSERT INTO VALUES
B. INSERT INTO SELECT
C. INSERT ALL
D. INSERT MULTI
答案：B

23. 数据库设计中，确定数据库存储结构和存取方法属于（  ）阶段。
A. 概念结构设计
B. 逻辑结构设计
C. 物理结构设计
D. 数据库运行与维护
答案：C

24. 关系数据库中，连接操作可以根据（  ）进行连接。
A. 主键
B. 外键
C. 任意属性
D. 以上都可以
答案：D

25. SQL 语言中，用于给查询结果列重命名的关键字是（  ）。
A. AS
B. LIKE
C. BETWEEN
D. IN
答案：A

26. 数据库系统中，数据的共享性是指（  ）。
A. 多个用户可以同时使用数据库中的数据
B. 数据可以在不同数据库之间共享
C. 数据可以被不同应用程序共享
D. 以上都是
答案：D

27. 在关系代数中，投影操作是对（  ）进行筛选。
A. 行
B. 列
C. 表
D. 数据库
答案：B

28. SQL 语言中，用于查询满足特定条件的前 N 条记录的关键字是（  ）。
A. TOP
B. FIRST
C. LIMIT
D. ROWNUM
答案：C

29. 数据库设计中，对数据库性能进行监测和优化属于（  ）阶段。
A. 概念结构设计
B. 逻辑结构设计
C. 物理结构设计
D. 数据库运行与维护
答案：D

30. 关系数据库中，自然连接是一种特殊的（  ）连接。
A. 内连接
B. 外连接
C. 交叉连接
D. 全连接
答案：A

**二、判断题（20 道）**

1. 数据库管理系统是操作系统的一部分。（  ）
答案：错误

2. 关系模型中，属性的顺序是固定的。（  ）
答案：错误

3. 主键可以由多个属性组成。（  ）
答案：正确

4. SQL 语言是关系数据库的唯一标准语言。（  ）
答案：错误

5. 视图可以提高数据的安全性。（  ）
答案：正确

6. 关系代数中的并操作要求参与运算的两个关系具有相同的结构。（  ）
答案：正确

7. 数据库设计中，需求分析阶段只需要了解用户对数据的需求，不需要考虑业务流程。（  ）
答案：错误

8. 事务具有原子性、一致性、隔离性和持久性。（  ）
答案：正确

9. 索引建立得越多，数据库性能就越好。（  ）
答案：错误

10. 数据库系统的逻辑独立性是指应用程序不受数据存储结构变化的影响。（  ）
答案：错误

11. 在关系数据库中，外键可以指向自身表的主键。（  ）
答案：正确

12. SQL 语言中，DELETE 语句删除表中的数据后，表结构也会被删除。（  ）
答案：错误

13. 数据库设计的概念结构设计阶段主要绘制 E - R 图。（  ）
答案：正确

14. 关系代数中的差操作是从一个关系中减去另一个关系中的相同元组。（  ）
答案：正确

15. 数据库系统中的数据冗余是完全可以避免的。（  ）
答案：错误

16. 视图是在数据库运行时动态生成的。（  ）
答案：正确

17. SQL 语言中，INSERT INTO 语句只能插入单条数据。（  ）
答案：错误

18. 数据库设计中，物理结构设计与数据库管理系统密切相关。（  ）
答案：正确

19. 关系数据库中，连接操作的结果表的列数是参与连接的两个表的列数之和。（  ）
答案：错误

20. 数据库系统的安全性只与用户认证和访问控制有关。（  ）
答案：错误

**三、多选题（10 道）**

1. 数据库系统的组成部分包括（  ）。
A. 数据库
B. 数据库管理系统
C. 应用程序
D. 数据库管理员
答案：ABCD

2. 关系数据库的完整性约束有（  ）。
A. 实体完整性
B. 参照完整性
C. 用户自定义完整性
D. 域完整性
答案：ABC

3. SQL 语言的功能包括（  ）。
A. 数据定义
B. 数据查询
C. 数据操纵
D. 数据控制
答案：ABCD

4. 数据库设计的步骤包括（  ）。
A. 需求分析
B. 概念结构设计
C. 逻辑结构设计
D. 物理结构设计
答案：ABCD

5. 数据库恢复技术有（  ）。
A. 基于备份的恢复
B. 基于日志的恢复
C. 基于镜像的恢复
D. 基于事务的恢复
答案：ABCD

6. 关系代数的基本运算有（  ）。
A. 并
B. 差
C. 笛卡尔积
D. 选择
答案：ABCD

7. 数据库系统的特点包括（  ）。
A. 数据结构化
B. 数据共享性高
C. 数据独立性高
D. 数据冗余度低
答案：ABCD

8. 视图的优点有（  ）。
A. 简化复杂查询
B. 提高数据安全性
C. 提供数据独立性
D. 可更新数据
答案：ABC

9. SQL 语言中，用于数据查询的子句有（  ）。
A. WHERE
B. GROUP BY
C. HAVING
D. ORDER BY
答案：ABCD

10. 数据库管理系统的功能模块包括（  ）。
A. 存储管理
B. 查询处理
C. 事务管理
D. 安全管理
答案：ABCD `,ka=`**一、单选题（30 道）**

1. 计算机网络的主要功能不包括（  ）。
A. 数据处理
B. 资源共享
C. 信息传递
D. 分布处理
答案：A

2. 在 OSI 参考模型中，物理层的主要功能是（  ）。
A. 建立、维护和拆除物理链路
B. 进行差错控制
C. 进行流量控制
D. 进行路由选择
答案：A

3. 以下哪种传输介质的传输速率最高（  ）。
A. 双绞线
B. 同轴电缆
C. 光纤
D. 微波
答案：C

4. 网络协议的三要素是（  ）。
A. 数据格式、编码、信号电平
B. 数据格式、控制信息、速度匹配
C. 语法、语义、同步
D. 编码、控制信息、同步
答案：C

5. 以下属于数据链路层协议的是（  ）。
A. IP
B. TCP
C. Ethernet
D. HTTP
答案：C

6. 在 CSMA/CD 协议中，发生冲突后，重传时间间隔会（  ）。
A. 固定不变
B. 随机增加
C. 随机减少
D. 按特定规律变化
答案：B

7. 路由器工作在（  ）。
A. 物理层
B. 数据链路层
C. 网络层
D. 传输层
答案：C

8. IP 地址 127.0.0.1 通常用于（  ）。
A. 网络测试
B. 广播地址
C. 多播地址
D. 无效地址
答案：A

9. 子网掩码的作用是（  ）。
A. 区分网络号和主机号
B. 加密网络数据
C. 提高网络速度
D. 防止网络攻击
答案：A

10. 以下哪种应用层协议用于文件传输（  ）。
A. FTP
B. SMTP
C. DNS
D. Telnet
答案：A

11. HTTP 协议是（  ）协议。
A. 有状态
B. 无状态
C. 面向连接
D. 面向无连接
答案：B

12. 网络安全中的防火墙主要用于（  ）。
A. 检测病毒
B. 防止黑客入侵
C. 控制网络访问
D. 数据加密
答案：C

13. 无线网络中，Wi-Fi 的频段主要是（  ）。
A. 2.4GHz 和 5GHz
B. 900MHz
C. 1.8GHz
D. 3.5GHz
答案：A

14. 在网络拓扑结构中，星型拓扑的优点是（  ）。
A. 成本低
B. 可靠性高
C. 易于扩展
D. 传输距离远
答案：C

15. 以下哪种网络设备可以实现不同网络之间的互联（  ）。
A. 交换机
B. 网桥
C. 路由器
D. 中继器
答案：C

16. 网络层的主要功能不包括（  ）。
A. 拥塞控制
B. 路由选择
C. 流量控制
D. 分组转发
答案：C

17. 传输层的 UDP 协议的特点是（  ）。
A. 面向连接，可靠
B. 面向连接，不可靠
C. 无连接，可靠
D. 无连接，不可靠
答案：D

18. 以下哪种网络攻击方式是针对网络层的（  ）。
A. IP 欺骗
B. 端口扫描
C. 病毒感染
D. 密码破解
答案：A

19. 计算机网络中，带宽的单位通常是（  ）。
A. bps
B. Bps
C. Hz
D. dB
答案：A

20. 以下关于网络性能指标的说法错误的是（  ）。
A. 时延包括发送时延、传播时延、处理时延和排队时延
B. 丢包率是指丢失的数据包与总发送数据包的比例
C. 吞吐量是指单位时间内通过网络的数据量
D. 带宽越大，网络性能一定越好
答案：D

21. 在 OSI 参考模型中，会话层的主要功能是（  ）。
A. 建立、维护和管理会话
B. 进行数据加密
C. 进行数据压缩
D. 进行地址转换
答案：A

22. 以下哪种网络拓扑结构的可靠性最差（  ）。
A. 总线型
B. 星型
C. 环型
D. 网状型
答案：A

23. 网络层的 IP 协议提供的是（  ）服务。
A. 面向连接
B. 无连接
C. 可靠
D. 有序
答案：B

24. 以下属于网络层协议的是（  ）。
A. ARP
B. UDP
C. HTTP
D. FTP
答案：A

25. 无线网络的传输距离主要受（  ）因素影响。
A. 功率
B. 频段
C. 障碍物
D. 以上都是
答案：D

26. 以下哪种网络设备可以放大信号，延长传输距离（  ）。
A. 路由器
B. 交换机
C. 中继器
D. 网桥
答案：C

27. 计算机网络中，数据链路层的差错控制主要采用（  ）技术。
A. 检错码
B. 纠错码
C. 循环冗余校验
D. 以上都是
答案：D

28. 以下关于网络层路由选择算法的说法错误的是（  ）。
A. 静态路由算法是由管理员手动配置的
B. 动态路由算法可以根据网络拓扑结构的变化自动调整路由
C. 距离向量路由算法是一种动态路由算法
D. 链路状态路由算法比距离向量路由算法收敛速度快
答案：D

29. 计算机网络中，应用层协议 DNS 的作用是（  ）。
A. 域名解析
B. 邮件发送
C. 文件传输
D. 远程登录
答案：A

30. 以下哪种网络安全技术可以防止数据被篡改（  ）。
A. 防火墙
B. 数字签名
C. 入侵检测系统
D. 加密技术
答案：B

**二、判断题（20 道）**

1. 计算机网络中的通信子网负责数据的传输、交换和控制。（  ）
答案：正确

2. OSI 参考模型是网络通信的实际标准。（  ）
答案：错误

3. 光纤只能单向传输数据。（  ）
答案：错误

4. 网络协议规定了通信双方的通信规则和数据格式。（  ）
答案：正确

5. 交换机工作在数据链路层，根据 MAC 地址转发数据帧。（  ）
答案：正确

6. 在 CSMA/CD 协议中，先听后发、边听边发、冲突停发、随机重发。（  ）
答案：正确

7. 路由器可以隔离广播域。（  ）
答案：正确

8. 私有 IP 地址可以在互联网上直接访问。（  ）
答案：错误

9. 子网掩码全为 0 的部分表示主机号。（  ）
答案：正确

10. FTP 协议使用两个端口，20 号端口用于传输数据，21 号端口用于传输控制信息。（  ）
答案：正确

11. HTTP 协议是基于 TCP 协议的。（  ）
答案：正确

12. 防火墙可以完全阻止网络攻击。（  ）
答案：错误

13. 无线网络比有线网络更安全。（  ）
答案：错误

14. 网络拓扑结构决定了网络的性能和可靠性。（  ）
答案：正确

15. 网络层的主要功能是实现端到端的通信。（  ）
答案：错误

16. 传输层的 TCP 协议通过三次握手建立连接。（  ）
答案：正确

17. 网络攻击只能来自外部网络。（  ）
答案：错误

18. 网络带宽越大，传输时延越小。（  ）
答案：错误

19. 数据链路层的成帧操作是将网络层的数据包封装成帧。（  ）
答案：正确

20. 网络层的路由选择算法只考虑最短路径。（  ）
答案：错误

**三、多选题（10 道）**

1. 计算机网络的组成部分包括（  ）。
A. 计算机系统
B. 通信线路
C. 通信设备
D. 网络协议
答案：ABCD

2. OSI 参考模型的传输层协议有（  ）。
A. TCP
B. UDP
C. SPX
D. IPX
答案：ABC

3. 以下属于网络传输介质的有（  ）。
A. 双绞线
B. 同轴电缆
C. 光纤
D. 无线电波
答案：ABCD

4. 网络层的主要功能包括（  ）。
A. 路由选择
B. 分组转发
C. 拥塞控制
D. 流量控制
答案：ABC

5. 以下属于应用层协议的有（  ）。
A. HTTP
B. FTP
C. SMTP
D. POP3
答案：ABCD

6. 网络安全技术包括（  ）。
A. 防火墙
B. 加密技术
C. 入侵检测系统
D. 数字签名
答案：ABCD

7. 以下关于 IP 地址的说法正确的有（  ）。
A. IP 地址由网络号和主机号组成
B. IPv4 地址是 32 位
C. IPv6 地址是 128 位
D. 公有 IP 地址可以在互联网上直接使用
答案：ABCD

8. 影响网络性能的因素有（  ）。
A. 带宽
B. 时延
C. 丢包率
D. 网络拓扑结构
答案：ABCD

9. 无线网络的特点包括（  ）。
A. 移动性好
B. 安装便捷
C. 易受干扰
D. 传输速率高
答案：ABC

10. 以下属于网络设备的有（  ）。
A. 路由器
B. 交换机
C. 网桥
D. 中继器
答案：ABCD `;function Oa(e){const n=e.split("**").filter(r=>r.trim()),t=[];let s="";return n.forEach(r=>{if(r.includes("单选题"))s="single";else if(r.includes("判断题"))s="boolean";else if(r.includes("多选题"))s="multiple";else if(r.trim()){const o=r.split(`
`).filter(i=>i.trim());o.forEach(i=>{if(i.match(/^\d+\./)){const c={type:s,content:i.replace(/^\d+\./,"").trim(),options:[],answer:""};if(s==="single"||s==="multiple"){const l=o.slice(o.indexOf(i)+1),f=[];for(const u of l)if(u.match(/^[A-D]\./))f.push(u.trim());else if(u.includes("答案：")){s==="multiple"?c.answer=u.replace("答案：","").trim().split(""):c.answer=u.replace("答案：","").trim();break}c.options=f}else if(s==="boolean"){c.options=["正确","错误"];const l=o[o.indexOf(i)+1];l&&l.includes("答案：")&&(c.answer=l.replace("答案：","").trim())}t.push(c)}})}}),{title:"题库",questions:t}}async function Ia(){var e;try{const n=[],t=Object.assign({"/quizbanks/信息通信-1.md":wa,"/quizbanks/信息通信-2.md":Ea,"/quizbanks/信息通信-3.md":Pa,"/quizbanks/信息通信-4.md":Ta,"/quizbanks/数据库系统大纲专项-1.md":Ra,"/quizbanks/计算机网络大纲专项-1.md":ka});for(const[s,r]of Object.entries(t)){const o=((e=s.split("/").pop())==null?void 0:e.replace(".md",""))||"",i=Oa(r);i.title=o,n.push(i)}return n}catch(n){return console.error("Failed to load quiz banks:",n),[]}}const Ma={class:"max-w-4xl mx-auto p-4"},La={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Na=["onClick"],$a={class:"text-xl font-semibold text-gray-800 dark:text-white"},Fa={class:"text-gray-600 dark:text-gray-300"},ja=qn({__name:"QuizSelector",setup(e){const n=er(),t=nr(),s=Qe([]);qt(async()=>{s.value=await Ia()});const r=o=>{t.setQuizBank(o),n.push("/quiz")};return(o,i)=>(de(),ge("div",Ma,[i[0]||(i[0]=L("h1",{class:"text-2xl font-bold mb-6 text-gray-800 dark:text-white"},"选择题库",-1)),L("div",La,[(de(!0),ge(Pe,null,xt(s.value,c=>(de(),ge("div",{key:c.title,class:"border rounded-lg p-4 cursor-pointer bg-white dark:bg-gray-700 hover:bg-green-200 dark:hover:bg-green-700 transition-colors",onClick:l=>r(c)},[L("h2",$a,De(c.title),1),L("p",Fa,"题数: "+De(c.questions.length),1)],8,Na))),128))])]))}}),Ha={class:"max-w-4xl mx-auto"},Qa={class:"mb-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3"},Ua={class:"relative"},za={class:"flex mb-2 items-center justify-between"},Va={class:"text-sm font-medium text-blue-600 dark:text-blue-400"},Ka={class:"h-3 bg-blue-100 dark:bg-blue-900 rounded-full"},qa={class:"p-4"},Wa={class:"flex justify-between items-center mb-4"},Ga={class:"grid grid-cols-5 gap-2"},Ya=["onClick"],Ja={key:0,class:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"},Xa={key:1,class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg min-h-[600px] flex flex-col"},Za={class:"flex-1 p-8 overflow-y-auto"},ef={class:"flex justify-between items-center mb-6"},nf={class:"flex items-center gap-4"},tf={class:"text-xl font-bold text-gray-800 dark:text-white"},sf={class:"flex items-center gap-4"},rf={class:"px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"},of={class:"text-lg mb-8 text-gray-700 dark:text-gray-200"},lf={class:"space-y-4"},cf=["onClick"],uf=["onClick"],af={class:"border-t border-gray-100 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 rounded-b-xl"},ff={class:"flex justify-between items-center max-w-2xl mx-auto"},df=["disabled"],hf=["disabled"],pf={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},gf={class:"bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4"},mf={class:"flex justify-end gap-4"},Cf=qn({__name:"QuizQuestion",setup(e){const n=er(),t=nr(),s=Qe(!1),r=Qe([]),o=Qe(""),i=Qe(!1),c=Qe(!1),l=me(()=>{var b;return(b=t.currentQuizBank)==null?void 0:b.questions[t.currentQuestionIndex]}),f=me(()=>t.currentQuestionIndex),u=me(()=>t.progress),d=me(()=>t.currentQuizBank?f.value===t.currentQuizBank.questions.length-1:!1),p=me(()=>{var b;return((b=t.currentQuizBank)==null?void 0:b.questions.length)||0});zn(()=>f.value,b=>{const B=t.getSavedAnswer(b);B?(Array.isArray(B)?r.value=B:o.value=B,i.value=!0,s.value=!0):(r.value=[],o.value="",i.value=!1,s.value=!1)},{immediate:!0});const g=b=>{s.value||(o.value=b,i.value=!0,s.value=!0,t.submitAnswer(b))},D=()=>{!l.value||!i.value||(s.value=!0,t.submitAnswer(r.value))},E=()=>{d.value?c.value=!0:t.nextQuestion()},H=()=>{f.value>0&&t.previousQuestion()},$=b=>{var w,G,ae;if(!s.value)return"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const B=o.value===b,O=((w=l.value)==null?void 0:w.type)==="boolean"?((G=l.value)==null?void 0:G.answer)===b:(ae=l.value)==null?void 0:ae.answer.includes(b);return B&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":B&&!O?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!B&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},M=b=>{var w;if(!s.value)return r.value.includes(b)?"bg-blue-100 dark:bg-blue-900/50 border-blue-500 border text-gray-700 dark:text-gray-200":"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const B=r.value.includes(b),O=Array.isArray((w=l.value)==null?void 0:w.answer)&&l.value.answer.includes(b);return B&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":B&&!O?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!B&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},N=b=>{if(s.value)return;const B=r.value.indexOf(b);B===-1?r.value.push(b):r.value.splice(B,1),i.value=r.value.length>0},R=Qe(!1),z=me(()=>t.markedQuestions.has(f.value)),Z=()=>{t.toggleMarkQuestion(f.value)},Y=b=>{t.jumpToQuestion(b),R.value=!1},K=()=>{c.value=!1,n.push("/result")};return(b,B)=>(de(),ge("div",Ha,[R.value?(de(),ge("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:B[0]||(B[0]=O=>R.value=!1)})):Pn("",!0),L("div",Qa,[L("div",Ua,[L("div",za,[B[5]||(B[5]=L("span",{class:"text-sm font-medium text-blue-600 dark:text-blue-400"},"做题进度",-1)),L("span",Va,De(Math.round(u.value))+"%",1)]),L("div",Ka,[L("div",{class:"h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500",style:Qt({width:`${u.value}%`})},null,4)])])]),L("div",{class:on(["fixed right-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50",R.value?"translate-x-0":"translate-x-full"]),style:{width:"300px"}},[L("div",qa,[L("div",Wa,[B[7]||(B[7]=L("h3",{class:"text-lg font-bold text-gray-800 dark:text-white"},"题目导航",-1)),L("button",{onClick:B[1]||(B[1]=O=>c.value=!0),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-2 py-1 rounded text-white text-sm font-semibold shadow-md hover:opacity-90"},"交卷"),L("button",{onClick:B[2]||(B[2]=O=>R.value=!1),class:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"},B[6]||(B[6]=[L("span",{class:"sr-only"},"关闭",-1),L("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),L("div",Ga,[(de(!0),ge(Pe,null,xt(p.value,O=>(de(),ge("button",{key:O-1,onClick:w=>Y(O-1),class:on(["w-10 h-10 rounded-lg flex items-center justify-center relative",[f.value===O-1?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 dark:text-gray-200",Ue(t).userAnswers.has(O-1)&&Ue(t).isAnswerCorrect(O-1)?"border-2 border-green-500":"",Ue(t).userAnswers.has(O-1)&&!Ue(t).isAnswerCorrect(O-1)?"border-2 border-red-500":""]])},[Ai(De(O)+" ",1),Ue(t).markedQuestions.has(O-1)?(de(),ge("span",Ja)):Pn("",!0)],10,Ya))),128))])])],2),l.value?(de(),ge("div",Xa,[L("div",Za,[L("div",ef,[L("div",nf,[L("h2",tf," 第 "+De(f.value+1)+" 题 ",1),L("button",{onClick:Z,class:on(["p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",{"text-red-500 dark:text-red-400":z.value}])},B[8]||(B[8]=[L("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})],-1)]),2)]),L("div",sf,[L("span",rf,De(f.value+1)+" / "+De(p.value),1),L("button",{onClick:B[3]||(B[3]=O=>R.value=!0),class:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"},B[9]||(B[9]=[L("svg",{class:"w-6 h-6 text-gray-600 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])]),L("p",of,De(l.value.content),1),L("div",lf,[l.value.type==="single"||l.value.type==="boolean"?(de(!0),ge(Pe,{key:0},xt(l.value.options,O=>(de(),ge("div",{key:O,onClick:w=>g(l.value.type==="boolean"?O:O[0]),class:on(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[$(l.value.type==="boolean"?O:O[0])]])},De(O),11,cf))),128)):l.value.type==="multiple"?(de(!0),ge(Pe,{key:1},xt(l.value.options,O=>(de(),ge("div",{key:O,onClick:w=>!s.value&&N(O[0]),class:on(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[M(O[0])]])},De(O),11,uf))),128)):Pn("",!0)])]),L("div",af,[L("div",ff,[L("button",{onClick:H,disabled:f.value===0,class:on(["px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",f.value===0?"bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500":"bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"])}," 上一题 ",10,df),l.value.type==="multiple"&&!s.value?(de(),ge("button",{key:0,onClick:D,disabled:!i.value,class:"px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"}," 确认答案 ",8,hf)):Pn("",!0),L("button",{onClick:E,class:"px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"},De(d.value?"完成":"下一题"),1)])])])):Pn("",!0),c.value?(de(),ge("div",pf,[L("div",gf,[B[10]||(B[10]=L("h3",{class:"text-lg font-bold mb-4 text-gray-800 dark:text-white"},"确认交卷",-1)),B[11]||(B[11]=L("p",{class:"text-gray-600 dark:text-gray-300 mb-6"},"确定要交卷吗？请确认所有题目都已完成。",-1)),L("div",mf,[L("button",{onClick:B[4]||(B[4]=O=>c.value=!1),class:"bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 rounded-lg"}," 取消 "),L("button",{onClick:K,class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90"}," 确认交卷 ")])])])):Pn("",!0)]))}}),vf=(e,n)=>{const t=e.__vccOpts||e;for(const[s,r]of n)t[s]=r;return t},Af=vf(Cf,[["__scopeId","data-v-e59ddbf3"]]),bf={class:"max-w-4xl mx-auto p-4"},_f={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"},yf={class:"space-y-6"},Bf={class:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg p-6"},Df={class:"text-center"},xf={class:"text-4xl font-bold text-blue-600 dark:text-blue-400"},Sf={class:"mt-2 text-gray-600 dark:text-gray-300"},wf=qn({__name:"QuizResult",setup(e){er();const n=nr(),t=me(()=>n.score),s=me(()=>{var r;return((r=n.currentQuizBank)==null?void 0:r.questions.length)||0});return(r,o)=>(de(),ge("div",bf,[L("div",_f,[o[0]||(o[0]=L("h2",{class:"text-2xl font-bold text-gray-800 dark:text-white mb-6"},"结果",-1)),L("div",yf,[L("div",Bf,[L("div",Df,[L("div",xf,De(t.value)+" / "+De(s.value),1),L("div",Sf," 正确率: "+De(Math.round(t.value/s.value*100))+"% ",1)])])])])]))}}),Ef=xa({history:ea("/prv-shuati/"),routes:[{path:"/",component:ja},{path:"/quiz",component:Af},{path:"/result",component:wf}]}),Pf={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"},Tf={class:"bg-white dark:bg-gray-800 shadow-md"},Rf={class:"max-w-4xl mx-auto p-4 flex justify-between items-center"},kf={class:"flex items-center gap-4"},Of={key:0,class:"w-6 h-6 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},If={key:1,class:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Mf={class:"container mx-auto px-4 py-2"},Lf=qn({__name:"App",setup(e){const n=Qe(!1),t=()=>{n.value=!n.value,n.value?(document.documentElement.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode","false"))};return qt(()=>{localStorage.getItem("darkMode")==="true"&&(n.value=!0,document.documentElement.classList.add("dark"))}),(s,r)=>{const o=ql("router-view");return de(),ge("div",Pf,[L("header",Tf,[L("div",Rf,[r[3]||(r[3]=L("h1",{class:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"}," 小浩刷题系统 ",-1)),L("div",kf,[L("button",{onClick:t,class:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"},[n.value?(de(),ge("svg",Of,r[1]||(r[1]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):(de(),ge("svg",If,r[2]||(r[2]=[L("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])))]),s.$route.path!=="/"?(de(),ge("button",{key:0,onClick:r[0]||(r[0]=i=>s.$router.push("/")),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow"}," 退出 ")):Pn("",!0)])])]),L("main",Mf,[we(o,null,{default:_s(({Component:i})=>[we(zc,{name:"fade",mode:"out-in"},{default:_s(()=>[(de(),Ci(Wl(i)))]),_:2},1024)]),_:1})])])}}}),tr=hu(Lf);tr.use(Cu());tr.use(Ef);tr.mount("#app");
