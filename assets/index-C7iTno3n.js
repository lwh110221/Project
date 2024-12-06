(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fs(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ln={},je=[],ee=()=>{},Ui=()=>!1,Ht=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ns=n=>n.startsWith("onUpdate:"),Dn=Object.assign,Hs=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ki=Object.prototype.hasOwnProperty,tn=(n,e)=>Ki.call(n,e),z=Array.isArray,Qe=n=>$t(n)==="[object Map]",io=n=>$t(n)==="[object Set]",V=n=>typeof n=="function",An=n=>typeof n=="string",me=n=>typeof n=="symbol",fn=n=>n!==null&&typeof n=="object",lo=n=>(fn(n)||V(n))&&V(n.then)&&V(n.catch),co=Object.prototype.toString,$t=n=>co.call(n),Wi=n=>$t(n).slice(8,-1),ao=n=>$t(n)==="[object Object]",$s=n=>An(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,nt=Fs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jt=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Vi=/-(\w)/g,Qn=jt(n=>n.replace(Vi,(e,t)=>t?t.toUpperCase():"")),Gi=/\B([A-Z])/g,Oe=jt(n=>n.replace(Gi,"-$1").toLowerCase()),Qt=jt(n=>n.charAt(0).toUpperCase()+n.slice(1)),ts=jt(n=>n?`on${Qt(n)}`:""),De=(n,e)=>!Object.is(n,e),ss=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},uo=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},qi=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Yi=n=>{const e=An(n)?Number(n):NaN;return isNaN(e)?n:e};let lr;const zt=()=>lr||(lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ut(n){if(z(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=An(s)?nl(s):Ut(s);if(r)for(const o in r)e[o]=r[o]}return e}else if(An(n)||fn(n))return n}const Ji=/;(?![^(]*\))/g,Xi=/:([^]+)/,Zi=/\/\*[^]*?\*\//g;function nl(n){const e={};return n.replace(Zi,"").split(Ji).forEach(t=>{if(t){const s=t.split(Xi);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Zn(n){let e="";if(An(n))e=n;else if(z(n))for(let t=0;t<n.length;t++){const s=Zn(n[t]);s&&(e+=s+" ")}else if(fn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const el="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tl=Fs(el);function fo(n){return!!n||n===""}const ho=n=>!!(n&&n.__v_isRef===!0),_n=n=>An(n)?n:n==null?"":z(n)||fn(n)&&(n.toString===co||!V(n.toString))?ho(n)?_n(n.value):JSON.stringify(n,Co,2):String(n),Co=(n,e)=>ho(e)?Co(n,e.value):Qe(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],o)=>(t[rs(s,o)+" =>"]=r,t),{})}:io(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>rs(t))}:me(e)?rs(e):fn(e)&&!z(e)&&!ao(e)?String(e):e,rs=(n,e="")=>{var t;return me(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xn;class Ao{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xn,!e&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=xn;try{return xn=this,e()}finally{xn=t}}}on(){xn=this}off(){xn=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function po(n){return new Ao(n)}function go(){return xn}function sl(n,e=!1){xn&&xn.cleanups.push(n)}let an;const os=new WeakSet;class Do{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xn&&xn.active&&xn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,os.has(this)&&(os.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cr(this),mo(this);const e=an,t=Kn;an=this,Kn=!0;try{return this.fn()}finally{bo(this),an=e,Kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zs(e);this.deps=this.depsTail=void 0,cr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?os.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_s(this)&&this.run()}get dirty(){return _s(this)}}let Bo=0,et,tt;function _o(n,e=!1){if(n.flags|=8,e){n.next=tt,tt=n;return}n.next=et,et=n}function js(){Bo++}function Qs(){if(--Bo>0)return;if(tt){let e=tt;for(tt=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;et;){let e=et;for(et=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function mo(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bo(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),zs(s),rl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function _s(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function vo(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ut))return;n.globalVersion=ut;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!_s(n)){n.flags&=-3;return}const t=an,s=Kn;an=n,Kn=!0;try{mo(n);const r=n.fn(n._value);(e.version===0||De(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{an=t,Kn=s,bo(n),n.flags&=-3}}function zs(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)zs(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function rl(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kn=!0;const yo=[];function be(){yo.push(Kn),Kn=!1}function ve(){const n=yo.pop();Kn=n===void 0?!0:n}function cr(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=an;an=void 0;try{e()}finally{an=t}}}let ut=0;class ol{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Us{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!an||!Kn||an===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==an)t=this.activeLink=new ol(an,this),an.deps?(t.prevDep=an.depsTail,an.depsTail.nextDep=t,an.depsTail=t):an.deps=an.depsTail=t,So(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=an.depsTail,t.nextDep=void 0,an.depsTail.nextDep=t,an.depsTail=t,an.deps===t&&(an.deps=s)}return t}trigger(e){this.version++,ut++,this.notify(e)}notify(e){js();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Qs()}}}function So(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)So(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Tt=new WeakMap,Re=Symbol(""),ms=Symbol(""),ft=Symbol("");function bn(n,e,t){if(Kn&&an){let s=Tt.get(n);s||Tt.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Us),r.map=s,r.key=t),r.track()}}function le(n,e,t,s,r,o){const i=Tt.get(n);if(!i){ut++;return}const c=l=>{l&&l.trigger()};if(js(),e==="clear")i.forEach(c);else{const l=z(n),f=l&&$s(t);if(l&&t==="length"){const a=Number(s);i.forEach((d,C)=>{(C==="length"||C===ft||!me(C)&&C>=a)&&c(d)})}else switch((t!==void 0||i.has(void 0))&&c(i.get(t)),f&&c(i.get(ft)),e){case"add":l?f&&c(i.get("length")):(c(i.get(Re)),Qe(n)&&c(i.get(ms)));break;case"delete":l||(c(i.get(Re)),Qe(n)&&c(i.get(ms)));break;case"set":Qe(n)&&c(i.get(Re));break}}Qs()}function il(n,e){const t=Tt.get(n);return t&&t.get(e)}function Fe(n){const e=X(n);return e===n?e:(bn(e,"iterate",ft),jn(n)?e:e.map(vn))}function Kt(n){return bn(n=X(n),"iterate",ft),n}const ll={__proto__:null,[Symbol.iterator](){return is(this,Symbol.iterator,vn)},concat(...n){return Fe(this).concat(...n.map(e=>z(e)?Fe(e):e))},entries(){return is(this,"entries",n=>(n[1]=vn(n[1]),n))},every(n,e){return se(this,"every",n,e,void 0,arguments)},filter(n,e){return se(this,"filter",n,e,t=>t.map(vn),arguments)},find(n,e){return se(this,"find",n,e,vn,arguments)},findIndex(n,e){return se(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return se(this,"findLast",n,e,vn,arguments)},findLastIndex(n,e){return se(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return se(this,"forEach",n,e,void 0,arguments)},includes(...n){return ls(this,"includes",n)},indexOf(...n){return ls(this,"indexOf",n)},join(n){return Fe(this).join(n)},lastIndexOf(...n){return ls(this,"lastIndexOf",n)},map(n,e){return se(this,"map",n,e,void 0,arguments)},pop(){return qe(this,"pop")},push(...n){return qe(this,"push",n)},reduce(n,...e){return ar(this,"reduce",n,e)},reduceRight(n,...e){return ar(this,"reduceRight",n,e)},shift(){return qe(this,"shift")},some(n,e){return se(this,"some",n,e,void 0,arguments)},splice(...n){return qe(this,"splice",n)},toReversed(){return Fe(this).toReversed()},toSorted(n){return Fe(this).toSorted(n)},toSpliced(...n){return Fe(this).toSpliced(...n)},unshift(...n){return qe(this,"unshift",n)},values(){return is(this,"values",vn)}};function is(n,e,t){const s=Kt(n),r=s[e]();return s!==n&&!jn(n)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=t(o.value)),o}),r}const cl=Array.prototype;function se(n,e,t,s,r,o){const i=Kt(n),c=i!==n&&!jn(n),l=i[e];if(l!==cl[e]){const d=l.apply(n,o);return c?vn(d):d}let f=t;i!==n&&(c?f=function(d,C){return t.call(this,vn(d),C,n)}:t.length>2&&(f=function(d,C){return t.call(this,d,C,n)}));const a=l.call(i,f,s);return c&&r?r(a):a}function ar(n,e,t,s){const r=Kt(n);let o=t;return r!==n&&(jn(n)?t.length>3&&(o=function(i,c,l){return t.call(this,i,c,l,n)}):o=function(i,c,l){return t.call(this,i,vn(c),l,n)}),r[e](o,...s)}function ls(n,e,t){const s=X(n);bn(s,"iterate",ft);const r=s[e](...t);return(r===-1||r===!1)&&Vs(t[0])?(t[0]=X(t[0]),s[e](...t)):r}function qe(n,e,t=[]){be(),js();const s=X(n)[e].apply(n,t);return Qs(),ve(),s}const al=Fs("__proto__,__v_isRef,__isVue"),xo=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(me));function ul(n){me(n)||(n=String(n));const e=X(this);return bn(e,"has",n),e.hasOwnProperty(n)}class Eo{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(r?o?_l:Ro:o?To:wo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const i=z(e);if(!r){let l;if(i&&(l=ll[t]))return l;if(t==="hasOwnProperty")return ul}const c=Reflect.get(e,t,pn(e)?e:s);return(me(t)?xo.has(t):al(t))||(r||bn(e,"get",t),o)?c:pn(c)?i&&$s(t)?c:c.value:fn(c)?r?ko(c):Bt(c):c}}class Po extends Eo{constructor(e=!1){super(!1,e)}set(e,t,s,r){let o=e[t];if(!this._isShallow){const l=ke(o);if(!jn(s)&&!ke(s)&&(o=X(o),s=X(s)),!z(e)&&pn(o)&&!pn(s))return l?!1:(o.value=s,!0)}const i=z(e)&&$s(t)?Number(t)<e.length:tn(e,t),c=Reflect.set(e,t,s,pn(e)?e:r);return e===X(r)&&(i?De(s,o)&&le(e,"set",t,s):le(e,"add",t,s)),c}deleteProperty(e,t){const s=tn(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&le(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!me(t)||!xo.has(t))&&bn(e,"has",t),s}ownKeys(e){return bn(e,"iterate",z(e)?"length":Re),Reflect.ownKeys(e)}}class fl extends Eo{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dl=new Po,hl=new fl,Cl=new Po(!0);const bs=n=>n,vt=n=>Reflect.getPrototypeOf(n);function Al(n,e,t){return function(...s){const r=this.__v_raw,o=X(r),i=Qe(o),c=n==="entries"||n===Symbol.iterator&&i,l=n==="keys"&&i,f=r[n](...s),a=t?bs:e?vs:vn;return!e&&bn(o,"iterate",l?ms:Re),{next(){const{value:d,done:C}=f.next();return C?{value:d,done:C}:{value:c?[a(d[0]),a(d[1])]:a(d),done:C}},[Symbol.iterator](){return this}}}}function yt(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function pl(n,e){const t={get(r){const o=this.__v_raw,i=X(o),c=X(r);n||(De(r,c)&&bn(i,"get",r),bn(i,"get",c));const{has:l}=vt(i),f=e?bs:n?vs:vn;if(l.call(i,r))return f(o.get(r));if(l.call(i,c))return f(o.get(c));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!n&&bn(X(r),"iterate",Re),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=X(o),c=X(r);return n||(De(r,c)&&bn(i,"has",r),bn(i,"has",c)),r===c?o.has(r):o.has(r)||o.has(c)},forEach(r,o){const i=this,c=i.__v_raw,l=X(c),f=e?bs:n?vs:vn;return!n&&bn(l,"iterate",Re),c.forEach((a,d)=>r.call(o,f(a),f(d),i))}};return Dn(t,n?{add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear")}:{add(r){!e&&!jn(r)&&!ke(r)&&(r=X(r));const o=X(this);return vt(o).has.call(o,r)||(o.add(r),le(o,"add",r,r)),this},set(r,o){!e&&!jn(o)&&!ke(o)&&(o=X(o));const i=X(this),{has:c,get:l}=vt(i);let f=c.call(i,r);f||(r=X(r),f=c.call(i,r));const a=l.call(i,r);return i.set(r,o),f?De(o,a)&&le(i,"set",r,o):le(i,"add",r,o),this},delete(r){const o=X(this),{has:i,get:c}=vt(o);let l=i.call(o,r);l||(r=X(r),l=i.call(o,r)),c&&c.call(o,r);const f=o.delete(r);return l&&le(o,"delete",r,void 0),f},clear(){const r=X(this),o=r.size!==0,i=r.clear();return o&&le(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Al(r,n,e)}),t}function Ks(n,e){const t=pl(n,e);return(s,r,o)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(tn(t,r)&&r in s?t:s,r,o)}const gl={get:Ks(!1,!1)},Dl={get:Ks(!1,!0)},Bl={get:Ks(!0,!1)};const wo=new WeakMap,To=new WeakMap,Ro=new WeakMap,_l=new WeakMap;function ml(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bl(n){return n.__v_skip||!Object.isExtensible(n)?0:ml(Wi(n))}function Bt(n){return ke(n)?n:Ws(n,!1,dl,gl,wo)}function Mo(n){return Ws(n,!1,Cl,Dl,To)}function ko(n){return Ws(n,!0,hl,Bl,Ro)}function Ws(n,e,t,s,r){if(!fn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=r.get(n);if(o)return o;const i=bl(n);if(i===0)return n;const c=new Proxy(n,i===2?s:t);return r.set(n,c),c}function Be(n){return ke(n)?Be(n.__v_raw):!!(n&&n.__v_isReactive)}function ke(n){return!!(n&&n.__v_isReadonly)}function jn(n){return!!(n&&n.__v_isShallow)}function Vs(n){return n?!!n.__v_raw:!1}function X(n){const e=n&&n.__v_raw;return e?X(e):n}function Gs(n){return!tn(n,"__v_skip")&&Object.isExtensible(n)&&uo(n,"__v_skip",!0),n}const vn=n=>fn(n)?Bt(n):n,vs=n=>fn(n)?ko(n):n;function pn(n){return n?n.__v_isRef===!0:!1}function $n(n){return Oo(n,!1)}function vl(n){return Oo(n,!0)}function Oo(n,e){return pn(n)?n:new yl(n,e)}class yl{constructor(e,t){this.dep=new Us,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:X(e),this._value=t?e:vn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||jn(e)||ke(e);e=s?e:X(e),De(e,t)&&(this._rawValue=e,this._value=s?e:vn(e),this.dep.trigger())}}function Un(n){return pn(n)?n.value:n}const Sl={get:(n,e,t)=>e==="__v_raw"?n:Un(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return pn(r)&&!pn(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function Io(n){return Be(n)?n:new Proxy(n,Sl)}function xl(n){const e=z(n)?new Array(n.length):{};for(const t in n)e[t]=Pl(n,t);return e}class El{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return il(X(this._object),this._key)}}function Pl(n,e,t){const s=n[e];return pn(s)?s:new El(n,e,t)}class wl{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Us(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ut-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&an!==this)return _o(this,!0),!0}get value(){const e=this.dep.track();return vo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tl(n,e,t=!1){let s,r;return V(n)?s=n:(s=n.get,r=n.set),new wl(s,r,t)}const St={},Rt=new WeakMap;let Pe;function Rl(n,e=!1,t=Pe){if(t){let s=Rt.get(t);s||Rt.set(t,s=[]),s.push(n)}}function Ml(n,e,t=ln){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:c,call:l}=t,f=R=>r?R:jn(R)||r===!1||r===0?ce(R,1):ce(R);let a,d,C,A,y=!1,P=!1;if(pn(n)?(d=()=>n.value,y=jn(n)):Be(n)?(d=()=>f(n),y=!0):z(n)?(P=!0,y=n.some(R=>Be(R)||jn(R)),d=()=>n.map(R=>{if(pn(R))return R.value;if(Be(R))return f(R);if(V(R))return l?l(R,2):R()})):V(n)?e?d=l?()=>l(n,2):n:d=()=>{if(C){be();try{C()}finally{ve()}}const R=Pe;Pe=a;try{return l?l(n,3,[A]):n(A)}finally{Pe=R}}:d=ee,e&&r){const R=d,U=r===!0?1/0:r;d=()=>ce(R(),U)}const j=go(),N=()=>{a.stop(),j&&j.active&&Hs(j.effects,a)};if(o&&e){const R=e;e=(...U)=>{R(...U),N()}}let L=P?new Array(n.length).fill(St):St;const F=R=>{if(!(!(a.flags&1)||!a.dirty&&!R))if(e){const U=a.run();if(r||y||(P?U.some((Z,Y)=>De(Z,L[Y])):De(U,L))){C&&C();const Z=Pe;Pe=a;try{const Y=[U,L===St?void 0:P&&L[0]===St?[]:L,A];l?l(e,3,Y):e(...Y),L=U}finally{Pe=Z}}}else a.run()};return c&&c(F),a=new Do(d),a.scheduler=i?()=>i(F,!1):F,A=R=>Rl(R,!1,a),C=a.onStop=()=>{const R=Rt.get(a);if(R){if(l)l(R,4);else for(const U of R)U();Rt.delete(a)}},e?s?F(!0):L=a.run():i?i(F.bind(null,!0),!0):a.run(),N.pause=a.pause.bind(a),N.resume=a.resume.bind(a),N.stop=N,N}function ce(n,e=1/0,t){if(e<=0||!fn(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,pn(n))ce(n.value,e,t);else if(z(n))for(let s=0;s<n.length;s++)ce(n[s],e,t);else if(io(n)||Qe(n))n.forEach(s=>{ce(s,e,t)});else if(ao(n)){for(const s in n)ce(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&ce(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _t(n,e,t,s){try{return s?n(...s):n()}catch(r){Wt(r,e,t)}}function Vn(n,e,t,s){if(V(n)){const r=_t(n,e,t,s);return r&&lo(r)&&r.catch(o=>{Wt(o,e,t)}),r}if(z(n)){const r=[];for(let o=0;o<n.length;o++)r.push(Vn(n[o],e,t,s));return r}}function Wt(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=e&&e.appContext.config||ln;if(e){let c=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const a=c.ec;if(a){for(let d=0;d<a.length;d++)if(a[d](n,l,f)===!1)return}c=c.parent}if(o){be(),_t(o,null,10,[n,l,f]),ve();return}}kl(n,t,r,s,i)}function kl(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const En=[];let Xn=-1;const ze=[];let Ce=null,He=0;const Lo=Promise.resolve();let Mt=null;function qs(n){const e=Mt||Lo;return n?e.then(this?n.bind(this):n):e}function Ol(n){let e=Xn+1,t=En.length;for(;e<t;){const s=e+t>>>1,r=En[s],o=dt(r);o<n||o===n&&r.flags&2?e=s+1:t=s}return e}function Ys(n){if(!(n.flags&1)){const e=dt(n),t=En[En.length-1];!t||!(n.flags&2)&&e>=dt(t)?En.push(n):En.splice(Ol(e),0,n),n.flags|=1,Fo()}}function Fo(){Mt||(Mt=Lo.then(Ho))}function Il(n){z(n)?ze.push(...n):Ce&&n.id===-1?Ce.splice(He+1,0,n):n.flags&1||(ze.push(n),n.flags|=1),Fo()}function ur(n,e,t=Xn+1){for(;t<En.length;t++){const s=En[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;En.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function No(n){if(ze.length){const e=[...new Set(ze)].sort((t,s)=>dt(t)-dt(s));if(ze.length=0,Ce){Ce.push(...e);return}for(Ce=e,He=0;He<Ce.length;He++){const t=Ce[He];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ce=null,He=0}}const dt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ho(n){try{for(Xn=0;Xn<En.length;Xn++){const e=En[Xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_t(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xn<En.length;Xn++){const e=En[Xn];e&&(e.flags&=-2)}Xn=-1,En.length=0,No(),Mt=null,(En.length||ze.length)&&Ho()}}let wn=null,$o=null;function kt(n){const e=wn;return wn=n,$o=n&&n.type.__scopeId||null,e}function ys(n,e=wn,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&_r(-1);const o=kt(e);let i;try{i=n(...r)}finally{kt(o),s._d&&_r(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Ll(n,e){if(wn===null)return n;const t=Xt(wn),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,i,c,l=ln]=e[r];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&ce(i),s.push({dir:o,instance:t,value:i,oldValue:void 0,arg:c,modifiers:l}))}return n}function ye(n,e,t,s){const r=n.dirs,o=e&&e.dirs;for(let i=0;i<r.length;i++){const c=r[i];o&&(c.oldValue=o[i].value);let l=c.dir[s];l&&(be(),Vn(l,t,8,[n.el,c,n,e]),ve())}}const Fl=Symbol("_vte"),jo=n=>n.__isTeleport,Ae=Symbol("_leaveCb"),xt=Symbol("_enterCb");function Nl(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qt(()=>{n.isMounted=!0}),qo(()=>{n.isUnmounting=!0}),n}const Hn=[Function,Array],Qo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn},zo=n=>{const e=n.subTree;return e.component?zo(e.component):e},Hl={name:"BaseTransition",props:Qo,setup(n,{slots:e}){const t=Ic(),s=Nl();return()=>{const r=e.default&&Wo(e.default(),!0);if(!r||!r.length)return;const o=Uo(r),i=X(n),{mode:c}=i;if(s.isLeaving)return cs(o);const l=fr(o);if(!l)return cs(o);let f=Ss(l,i,s,t,d=>f=d);l.type!==Mn&&ht(l,f);let a=t.subTree&&fr(t.subTree);if(a&&a.type!==Mn&&!Te(l,a)&&zo(t).type!==Mn){let d=Ss(a,i,s,t);if(ht(a,d),c==="out-in"&&l.type!==Mn)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,a=void 0},cs(o);c==="in-out"&&l.type!==Mn?d.delayLeave=(C,A,y)=>{const P=Ko(s,a);P[String(a.key)]=a,C[Ae]=()=>{A(),C[Ae]=void 0,delete f.delayedLeave,a=void 0},f.delayedLeave=()=>{y(),delete f.delayedLeave,a=void 0}}:a=void 0}else a&&(a=void 0);return o}}};function Uo(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Mn){e=t;break}}return e}const $l=Hl;function Ko(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function Ss(n,e,t,s,r){const{appear:o,mode:i,persisted:c=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:a,onEnterCancelled:d,onBeforeLeave:C,onLeave:A,onAfterLeave:y,onLeaveCancelled:P,onBeforeAppear:j,onAppear:N,onAfterAppear:L,onAppearCancelled:F}=e,R=String(n.key),U=Ko(t,n),Z=(_,v)=>{_&&Vn(_,s,9,v)},Y=(_,v)=>{const O=v[1];Z(_,v),z(_)?_.every(E=>E.length<=1)&&O():_.length<=1&&O()},W={mode:i,persisted:c,beforeEnter(_){let v=l;if(!t.isMounted)if(o)v=j||l;else return;_[Ae]&&_[Ae](!0);const O=U[R];O&&Te(n,O)&&O.el[Ae]&&O.el[Ae](),Z(v,[_])},enter(_){let v=f,O=a,E=d;if(!t.isMounted)if(o)v=N||f,O=L||a,E=F||d;else return;let q=!1;const dn=_[xt]=yn=>{q||(q=!0,yn?Z(E,[_]):Z(O,[_]),W.delayedLeave&&W.delayedLeave(),_[xt]=void 0)};v?Y(v,[_,dn]):dn()},leave(_,v){const O=String(n.key);if(_[xt]&&_[xt](!0),t.isUnmounting)return v();Z(C,[_]);let E=!1;const q=_[Ae]=dn=>{E||(E=!0,v(),dn?Z(P,[_]):Z(y,[_]),_[Ae]=void 0,U[O]===n&&delete U[O])};U[O]=n,A?Y(A,[_,q]):q()},clone(_){const v=Ss(_,e,t,s,r);return r&&r(v),v}};return W}function cs(n){if(Vt(n))return n=_e(n),n.children=null,n}function fr(n){if(!Vt(n))return jo(n.type)&&n.children?Uo(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&V(t.default))return t.default()}}function ht(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ht(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Wo(n,e=!1,t){let s=[],r=0;for(let o=0;o<n.length;o++){let i=n[o];const c=t==null?i.key:String(t)+String(i.key!=null?i.key:o);i.type===Pn?(i.patchFlag&128&&r++,s=s.concat(Wo(i.children,e,c))):(e||i.type!==Mn)&&s.push(c!=null?_e(i,{key:c}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Ve(n,e){return V(n)?Dn({name:n.name},e,{setup:n}):n}function Vo(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ot(n,e,t,s,r=!1){if(z(n)){n.forEach((y,P)=>Ot(y,e&&(z(e)?e[P]:e),t,s,r));return}if(st(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ot(n,e,t,s.component.subTree);return}const o=s.shapeFlag&4?Xt(s.component):s.el,i=r?null:o,{i:c,r:l}=n,f=e&&e.r,a=c.refs===ln?c.refs={}:c.refs,d=c.setupState,C=X(d),A=d===ln?()=>!1:y=>tn(C,y);if(f!=null&&f!==l&&(An(f)?(a[f]=null,A(f)&&(d[f]=null)):pn(f)&&(f.value=null)),V(l))_t(l,c,12,[i,a]);else{const y=An(l),P=pn(l);if(y||P){const j=()=>{if(n.f){const N=y?A(l)?d[l]:a[l]:l.value;r?z(N)&&Hs(N,o):z(N)?N.includes(o)||N.push(o):y?(a[l]=[o],A(l)&&(d[l]=a[l])):(l.value=[o],n.k&&(a[n.k]=l.value))}else y?(a[l]=i,A(l)&&(d[l]=i)):P&&(l.value=i,n.k&&(a[n.k]=i))};i?(j.id=-1,Ln(j,t)):j()}}}zt().requestIdleCallback;zt().cancelIdleCallback;const st=n=>!!n.type.__asyncLoader,Vt=n=>n.type.__isKeepAlive;function jl(n,e){Go(n,"a",e)}function Ql(n,e){Go(n,"da",e)}function Go(n,e,t=Bn){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Gt(e,s,t),t){let r=t.parent;for(;r&&r.parent;)Vt(r.parent.vnode)&&zl(s,e,t,r),r=r.parent}}function zl(n,e,t,s){const r=Gt(e,n,s,!0);Yo(()=>{Hs(s[e],r)},t)}function Gt(n,e,t=Bn,s=!1){if(t){const r=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...i)=>{be();const c=mt(t),l=Vn(e,t,n,i);return c(),ve(),l});return s?r.unshift(o):r.push(o),o}}const ae=n=>(e,t=Bn)=>{(!At||n==="sp")&&Gt(n,(...s)=>e(...s),t)},Ul=ae("bm"),qt=ae("m"),Kl=ae("bu"),Wl=ae("u"),qo=ae("bum"),Yo=ae("um"),Vl=ae("sp"),Gl=ae("rtg"),ql=ae("rtc");function Yl(n,e=Bn){Gt("ec",n,e)}const Jo="components";function Jl(n,e){return Zo(Jo,n,!0,e)||n}const Xo=Symbol.for("v-ndc");function Xl(n){return An(n)?Zo(Jo,n,!1)||n:n||Xo}function Zo(n,e,t=!0,s=!1){const r=wn||Bn;if(r){const o=r.type;{const c=$c(o,!1);if(c&&(c===e||c===Qn(e)||c===Qt(Qn(e))))return o}const i=dr(r[n]||o[n],e)||dr(r.appContext[n],e);return!i&&s?o:i}}function dr(n,e){return n&&(n[e]||n[Qn(e)]||n[Qt(Qn(e))])}function rt(n,e,t,s){let r;const o=t,i=z(n);if(i||An(n)){const c=i&&Be(n);let l=!1;c&&(l=!jn(n),n=Kt(n)),r=new Array(n.length);for(let f=0,a=n.length;f<a;f++)r[f]=e(l?vn(n[f]):n[f],f,void 0,o)}else if(typeof n=="number"){r=new Array(n);for(let c=0;c<n;c++)r[c]=e(c+1,c,void 0,o)}else if(fn(n))if(n[Symbol.iterator])r=Array.from(n,(c,l)=>e(c,l,void 0,o));else{const c=Object.keys(n);r=new Array(c.length);for(let l=0,f=c.length;l<f;l++){const a=c[l];r[l]=e(n[a],a,l,o)}}else r=[];return r}const xs=n=>n?mi(n)?Xt(n):xs(n.parent):null,ot=Dn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xs(n.parent),$root:n=>xs(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Js(n),$forceUpdate:n=>n.f||(n.f=()=>{Ys(n.update)}),$nextTick:n=>n.n||(n.n=qs.bind(n.proxy)),$watch:n=>_c.bind(n)}),as=(n,e)=>n!==ln&&!n.__isScriptSetup&&tn(n,e),Zl={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:o,accessCache:i,type:c,appContext:l}=n;let f;if(e[0]!=="$"){const A=i[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return o[e]}else{if(as(s,e))return i[e]=1,s[e];if(r!==ln&&tn(r,e))return i[e]=2,r[e];if((f=n.propsOptions[0])&&tn(f,e))return i[e]=3,o[e];if(t!==ln&&tn(t,e))return i[e]=4,t[e];Es&&(i[e]=0)}}const a=ot[e];let d,C;if(a)return e==="$attrs"&&bn(n.attrs,"get",""),a(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==ln&&tn(t,e))return i[e]=4,t[e];if(C=l.config.globalProperties,tn(C,e))return C[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:o}=n;return as(r,e)?(r[e]=t,!0):s!==ln&&tn(s,e)?(s[e]=t,!0):tn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:o}},i){let c;return!!t[i]||n!==ln&&tn(n,i)||as(e,i)||(c=o[0])&&tn(c,i)||tn(s,i)||tn(ot,i)||tn(r.config.globalProperties,i)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function hr(n){return z(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Es=!0;function nc(n){const e=Js(n),t=n.proxy,s=n.ctx;Es=!1,e.beforeCreate&&Cr(e.beforeCreate,n,"bc");const{data:r,computed:o,methods:i,watch:c,provide:l,inject:f,created:a,beforeMount:d,mounted:C,beforeUpdate:A,updated:y,activated:P,deactivated:j,beforeDestroy:N,beforeUnmount:L,destroyed:F,unmounted:R,render:U,renderTracked:Z,renderTriggered:Y,errorCaptured:W,serverPrefetch:_,expose:v,inheritAttrs:O,components:E,directives:q,filters:dn}=e;if(f&&ec(f,s,null),i)for(const G in i){const nn=i[G];V(nn)&&(s[G]=nn.bind(t))}if(r){const G=r.call(t,t);fn(G)&&(n.data=Bt(G))}if(Es=!0,o)for(const G in o){const nn=o[G],te=V(nn)?nn.bind(t,t):V(nn.get)?nn.get.bind(t,t):ee,ue=!V(nn)&&V(nn.set)?nn.set.bind(t):ee,qn=gn({get:te,set:ue});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>qn.value,set:Rn=>qn.value=Rn})}if(c)for(const G in c)ni(c[G],s,t,G);if(l){const G=V(l)?l.call(t):l;Reflect.ownKeys(G).forEach(nn=>{Et(nn,G[nn])})}a&&Cr(a,n,"c");function on(G,nn){z(nn)?nn.forEach(te=>G(te.bind(t))):nn&&G(nn.bind(t))}if(on(Ul,d),on(qt,C),on(Kl,A),on(Wl,y),on(jl,P),on(Ql,j),on(Yl,W),on(ql,Z),on(Gl,Y),on(qo,L),on(Yo,R),on(Vl,_),z(v))if(v.length){const G=n.exposed||(n.exposed={});v.forEach(nn=>{Object.defineProperty(G,nn,{get:()=>t[nn],set:te=>t[nn]=te})})}else n.exposed||(n.exposed={});U&&n.render===ee&&(n.render=U),O!=null&&(n.inheritAttrs=O),E&&(n.components=E),q&&(n.directives=q),_&&Vo(n)}function ec(n,e,t=ee){z(n)&&(n=Ps(n));for(const s in n){const r=n[s];let o;fn(r)?"default"in r?o=Wn(r.from||s,r.default,!0):o=Wn(r.from||s):o=Wn(r),pn(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):e[s]=o}}function Cr(n,e,t){Vn(z(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function ni(n,e,t,s){let r=s.includes(".")?Ci(t,s):()=>t[s];if(An(n)){const o=e[n];V(o)&&Ue(r,o)}else if(V(n))Ue(r,n.bind(t));else if(fn(n))if(z(n))n.forEach(o=>ni(o,e,t,s));else{const o=V(n.handler)?n.handler.bind(t):e[n.handler];V(o)&&Ue(r,o,n)}}function Js(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=n.appContext,c=o.get(e);let l;return c?l=c:!r.length&&!t&&!s?l=e:(l={},r.length&&r.forEach(f=>It(l,f,i,!0)),It(l,e,i)),fn(e)&&o.set(e,l),l}function It(n,e,t,s=!1){const{mixins:r,extends:o}=e;o&&It(n,o,t,!0),r&&r.forEach(i=>It(n,i,t,!0));for(const i in e)if(!(s&&i==="expose")){const c=tc[i]||t&&t[i];n[i]=c?c(n[i],e[i]):e[i]}return n}const tc={data:Ar,props:pr,emits:pr,methods:Ze,computed:Ze,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:Ze,directives:Ze,watch:rc,provide:Ar,inject:sc};function Ar(n,e){return e?n?function(){return Dn(V(n)?n.call(this,this):n,V(e)?e.call(this,this):e)}:e:n}function sc(n,e){return Ze(Ps(n),Ps(e))}function Ps(n){if(z(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Sn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ze(n,e){return n?Dn(Object.create(null),n,e):e}function pr(n,e){return n?z(n)&&z(e)?[...new Set([...n,...e])]:Dn(Object.create(null),hr(n),hr(e??{})):e}function rc(n,e){if(!n)return e;if(!e)return n;const t=Dn(Object.create(null),n);for(const s in e)t[s]=Sn(n[s],e[s]);return t}function ei(){return{app:null,config:{isNativeTag:Ui,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oc=0;function ic(n,e){return function(s,r=null){V(s)||(s=Dn({},s)),r!=null&&!fn(r)&&(r=null);const o=ei(),i=new WeakSet,c=[];let l=!1;const f=o.app={_uid:oc++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Qc,get config(){return o.config},set config(a){},use(a,...d){return i.has(a)||(a&&V(a.install)?(i.add(a),a.install(f,...d)):V(a)&&(i.add(a),a(f,...d))),f},mixin(a){return o.mixins.includes(a)||o.mixins.push(a),f},component(a,d){return d?(o.components[a]=d,f):o.components[a]},directive(a,d){return d?(o.directives[a]=d,f):o.directives[a]},mount(a,d,C){if(!l){const A=f._ceVNode||Tn(s,r);return A.appContext=o,C===!0?C="svg":C===!1&&(C=void 0),d&&e?e(A,a):n(A,a,C),l=!0,f._container=a,a.__vue_app__=f,Xt(A.component)}},onUnmount(a){c.push(a)},unmount(){l&&(Vn(c,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(a,d){return o.provides[a]=d,f},runWithContext(a){const d=Me;Me=f;try{return a()}finally{Me=d}}};return f}}let Me=null;function Et(n,e){if(Bn){let t=Bn.provides;const s=Bn.parent&&Bn.parent.provides;s===t&&(t=Bn.provides=Object.create(s)),t[n]=e}}function Wn(n,e,t=!1){const s=Bn||wn;if(s||Me){const r=Me?Me._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&V(e)?e.call(s&&s.proxy):e}}function lc(){return!!(Bn||wn||Me)}const ti={},si=()=>Object.create(ti),ri=n=>Object.getPrototypeOf(n)===ti;function cc(n,e,t,s=!1){const r={},o=si();n.propsDefaults=Object.create(null),oi(n,e,r,o);for(const i in n.propsOptions[0])i in r||(r[i]=void 0);t?n.props=s?r:Mo(r):n.type.props?n.props=r:n.props=o,n.attrs=o}function ac(n,e,t,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=n,c=X(r),[l]=n.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const a=n.vnode.dynamicProps;for(let d=0;d<a.length;d++){let C=a[d];if(Yt(n.emitsOptions,C))continue;const A=e[C];if(l)if(tn(o,C))A!==o[C]&&(o[C]=A,f=!0);else{const y=Qn(C);r[y]=ws(l,c,y,A,n,!1)}else A!==o[C]&&(o[C]=A,f=!0)}}}else{oi(n,e,r,o)&&(f=!0);let a;for(const d in c)(!e||!tn(e,d)&&((a=Oe(d))===d||!tn(e,a)))&&(l?t&&(t[d]!==void 0||t[a]!==void 0)&&(r[d]=ws(l,c,d,void 0,n,!0)):delete r[d]);if(o!==c)for(const d in o)(!e||!tn(e,d))&&(delete o[d],f=!0)}f&&le(n.attrs,"set","")}function oi(n,e,t,s){const[r,o]=n.propsOptions;let i=!1,c;if(e)for(let l in e){if(nt(l))continue;const f=e[l];let a;r&&tn(r,a=Qn(l))?!o||!o.includes(a)?t[a]=f:(c||(c={}))[a]=f:Yt(n.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,i=!0)}if(o){const l=X(t),f=c||ln;for(let a=0;a<o.length;a++){const d=o[a];t[d]=ws(r,l,d,f[d],n,!tn(f,d))}}return i}function ws(n,e,t,s,r,o){const i=n[t];if(i!=null){const c=tn(i,"default");if(c&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&V(l)){const{propsDefaults:f}=r;if(t in f)s=f[t];else{const a=mt(r);s=f[t]=l.call(null,e),a()}}else s=l;r.ce&&r.ce._setProp(t,s)}i[0]&&(o&&!c?s=!1:i[1]&&(s===""||s===Oe(t))&&(s=!0))}return s}const uc=new WeakMap;function ii(n,e,t=!1){const s=t?uc:e.propsCache,r=s.get(n);if(r)return r;const o=n.props,i={},c=[];let l=!1;if(!V(n)){const a=d=>{l=!0;const[C,A]=ii(d,e,!0);Dn(i,C),A&&c.push(...A)};!t&&e.mixins.length&&e.mixins.forEach(a),n.extends&&a(n.extends),n.mixins&&n.mixins.forEach(a)}if(!o&&!l)return fn(n)&&s.set(n,je),je;if(z(o))for(let a=0;a<o.length;a++){const d=Qn(o[a]);gr(d)&&(i[d]=ln)}else if(o)for(const a in o){const d=Qn(a);if(gr(d)){const C=o[a],A=i[d]=z(C)||V(C)?{type:C}:Dn({},C),y=A.type;let P=!1,j=!0;if(z(y))for(let N=0;N<y.length;++N){const L=y[N],F=V(L)&&L.name;if(F==="Boolean"){P=!0;break}else F==="String"&&(j=!1)}else P=V(y)&&y.name==="Boolean";A[0]=P,A[1]=j,(P||tn(A,"default"))&&c.push(d)}}const f=[i,c];return fn(n)&&s.set(n,f),f}function gr(n){return n[0]!=="$"&&!nt(n)}const li=n=>n[0]==="_"||n==="$stable",Xs=n=>z(n)?n.map(ne):[ne(n)],fc=(n,e,t)=>{if(e._n)return e;const s=ys((...r)=>Xs(e(...r)),t);return s._c=!1,s},ci=(n,e,t)=>{const s=n._ctx;for(const r in n){if(li(r))continue;const o=n[r];if(V(o))e[r]=fc(r,o,s);else if(o!=null){const i=Xs(o);e[r]=()=>i}}},ai=(n,e)=>{const t=Xs(e);n.slots.default=()=>t},ui=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},dc=(n,e,t)=>{const s=n.slots=si();if(n.vnode.shapeFlag&32){const r=e._;r?(ui(s,e,t),t&&uo(s,"_",r,!0)):ci(e,s)}else e&&ai(n,e)},hc=(n,e,t)=>{const{vnode:s,slots:r}=n;let o=!0,i=ln;if(s.shapeFlag&32){const c=e._;c?t&&c===1?o=!1:ui(r,e,t):(o=!e.$stable,ci(e,r)),i=e}else e&&(ai(n,e),i={default:1});if(o)for(const c in r)!li(c)&&i[c]==null&&delete r[c]},Ln=Ec;function Cc(n){return Ac(n)}function Ac(n,e){const t=zt();t.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:c,createComment:l,setText:f,setElementText:a,parentNode:d,nextSibling:C,setScopeId:A=ee,insertStaticContent:y}=n,P=(u,h,p,B=null,g=null,m=null,w=void 0,x=null,S=!!h.dynamicChildren)=>{if(u===h)return;u&&!Te(u,h)&&(B=D(u),Rn(u,g,m,!0),u=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:b,ref:Q,shapeFlag:k}=h;switch(b){case Jt:j(u,h,p,B);break;case Mn:N(u,h,p,B);break;case ds:u==null&&L(h,p,B,w);break;case Pn:E(u,h,p,B,g,m,w,x,S);break;default:k&1?U(u,h,p,B,g,m,w,x,S):k&6?q(u,h,p,B,g,m,w,x,S):(k&64||k&128)&&b.process(u,h,p,B,g,m,w,x,S,H)}Q!=null&&g&&Ot(Q,u&&u.ref,m,h||u,!h)},j=(u,h,p,B)=>{if(u==null)s(h.el=c(h.children),p,B);else{const g=h.el=u.el;h.children!==u.children&&f(g,h.children)}},N=(u,h,p,B)=>{u==null?s(h.el=l(h.children||""),p,B):h.el=u.el},L=(u,h,p,B)=>{[u.el,u.anchor]=y(u.children,h,p,B,u.el,u.anchor)},F=({el:u,anchor:h},p,B)=>{let g;for(;u&&u!==h;)g=C(u),s(u,p,B),u=g;s(h,p,B)},R=({el:u,anchor:h})=>{let p;for(;u&&u!==h;)p=C(u),r(u),u=p;r(h)},U=(u,h,p,B,g,m,w,x,S)=>{h.type==="svg"?w="svg":h.type==="math"&&(w="mathml"),u==null?Z(h,p,B,g,m,w,x,S):_(u,h,g,m,w,x,S)},Z=(u,h,p,B,g,m,w,x)=>{let S,b;const{props:Q,shapeFlag:k,transition:$,dirs:K}=u;if(S=u.el=i(u.type,m,Q&&Q.is,Q),k&8?a(S,u.children):k&16&&W(u.children,S,null,B,g,us(u,m),w,x),K&&ye(u,null,B,"created"),Y(S,u,u.scopeId,w,B),Q){for(const cn in Q)cn!=="value"&&!nt(cn)&&o(S,cn,null,Q[cn],m,B);"value"in Q&&o(S,"value",null,Q.value,m),(b=Q.onVnodeBeforeMount)&&Jn(b,B,u)}K&&ye(u,null,B,"beforeMount");const J=pc(g,$);J&&$.beforeEnter(S),s(S,h,p),((b=Q&&Q.onVnodeMounted)||J||K)&&Ln(()=>{b&&Jn(b,B,u),J&&$.enter(S),K&&ye(u,null,B,"mounted")},g)},Y=(u,h,p,B,g)=>{if(p&&A(u,p),B)for(let m=0;m<B.length;m++)A(u,B[m]);if(g){let m=g.subTree;if(h===m||pi(m.type)&&(m.ssContent===h||m.ssFallback===h)){const w=g.vnode;Y(u,w,w.scopeId,w.slotScopeIds,g.parent)}}},W=(u,h,p,B,g,m,w,x,S=0)=>{for(let b=S;b<u.length;b++){const Q=u[b]=x?pe(u[b]):ne(u[b]);P(null,Q,h,p,B,g,m,w,x)}},_=(u,h,p,B,g,m,w)=>{const x=h.el=u.el;let{patchFlag:S,dynamicChildren:b,dirs:Q}=h;S|=u.patchFlag&16;const k=u.props||ln,$=h.props||ln;let K;if(p&&Se(p,!1),(K=$.onVnodeBeforeUpdate)&&Jn(K,p,h,u),Q&&ye(h,u,p,"beforeUpdate"),p&&Se(p,!0),(k.innerHTML&&$.innerHTML==null||k.textContent&&$.textContent==null)&&a(x,""),b?v(u.dynamicChildren,b,x,p,B,us(h,g),m):w||nn(u,h,x,null,p,B,us(h,g),m,!1),S>0){if(S&16)O(x,k,$,p,g);else if(S&2&&k.class!==$.class&&o(x,"class",null,$.class,g),S&4&&o(x,"style",k.style,$.style,g),S&8){const J=h.dynamicProps;for(let cn=0;cn<J.length;cn++){const rn=J[cn],kn=k[rn],mn=$[rn];(mn!==kn||rn==="value")&&o(x,rn,kn,mn,g,p)}}S&1&&u.children!==h.children&&a(x,h.children)}else!w&&b==null&&O(x,k,$,p,g);((K=$.onVnodeUpdated)||Q)&&Ln(()=>{K&&Jn(K,p,h,u),Q&&ye(h,u,p,"updated")},B)},v=(u,h,p,B,g,m,w)=>{for(let x=0;x<h.length;x++){const S=u[x],b=h[x],Q=S.el&&(S.type===Pn||!Te(S,b)||S.shapeFlag&70)?d(S.el):p;P(S,b,Q,null,B,g,m,w,!0)}},O=(u,h,p,B,g)=>{if(h!==p){if(h!==ln)for(const m in h)!nt(m)&&!(m in p)&&o(u,m,h[m],null,g,B);for(const m in p){if(nt(m))continue;const w=p[m],x=h[m];w!==x&&m!=="value"&&o(u,m,x,w,g,B)}"value"in p&&o(u,"value",h.value,p.value,g)}},E=(u,h,p,B,g,m,w,x,S)=>{const b=h.el=u?u.el:c(""),Q=h.anchor=u?u.anchor:c("");let{patchFlag:k,dynamicChildren:$,slotScopeIds:K}=h;K&&(x=x?x.concat(K):K),u==null?(s(b,p,B),s(Q,p,B),W(h.children||[],p,Q,g,m,w,x,S)):k>0&&k&64&&$&&u.dynamicChildren?(v(u.dynamicChildren,$,p,g,m,w,x),(h.key!=null||g&&h===g.subTree)&&fi(u,h,!0)):nn(u,h,p,Q,g,m,w,x,S)},q=(u,h,p,B,g,m,w,x,S)=>{h.slotScopeIds=x,u==null?h.shapeFlag&512?g.ctx.activate(h,p,B,w,S):dn(h,p,B,g,m,w,S):yn(u,h,S)},dn=(u,h,p,B,g,m,w)=>{const x=u.component=Oc(u,B,g);if(Vt(u)&&(x.ctx.renderer=H),Lc(x,!1,w),x.asyncDep){if(g&&g.registerDep(x,on,w),!u.el){const S=x.subTree=Tn(Mn);N(null,S,h,p)}}else on(x,u,h,p,g,m,w)},yn=(u,h,p)=>{const B=h.component=u.component;if(Sc(u,h,p))if(B.asyncDep&&!B.asyncResolved){G(B,h,p);return}else B.next=h,B.update();else h.el=u.el,B.vnode=h},on=(u,h,p,B,g,m,w)=>{const x=()=>{if(u.isMounted){let{next:k,bu:$,u:K,parent:J,vnode:cn}=u;{const On=di(u);if(On){k&&(k.el=cn.el,G(u,k,w)),On.asyncDep.then(()=>{u.isUnmounted||x()});return}}let rn=k,kn;Se(u,!1),k?(k.el=cn.el,G(u,k,w)):k=cn,$&&ss($),(kn=k.props&&k.props.onVnodeBeforeUpdate)&&Jn(kn,J,k,cn),Se(u,!0);const mn=fs(u),zn=u.subTree;u.subTree=mn,P(zn,mn,d(zn.el),D(zn),u,g,m),k.el=mn.el,rn===null&&xc(u,mn.el),K&&Ln(K,g),(kn=k.props&&k.props.onVnodeUpdated)&&Ln(()=>Jn(kn,J,k,cn),g)}else{let k;const{el:$,props:K}=h,{bm:J,m:cn,parent:rn,root:kn,type:mn}=u,zn=st(h);if(Se(u,!1),J&&ss(J),!zn&&(k=K&&K.onVnodeBeforeMount)&&Jn(k,rn,h),Se(u,!0),$&&hn){const On=()=>{u.subTree=fs(u),hn($,u.subTree,u,g,null)};zn&&mn.__asyncHydrate?mn.__asyncHydrate($,u,On):On()}else{kn.ce&&kn.ce._injectChildStyle(mn);const On=u.subTree=fs(u);P(null,On,p,B,u,g,m),h.el=On.el}if(cn&&Ln(cn,g),!zn&&(k=K&&K.onVnodeMounted)){const On=h;Ln(()=>Jn(k,rn,On),g)}(h.shapeFlag&256||rn&&st(rn.vnode)&&rn.vnode.shapeFlag&256)&&u.a&&Ln(u.a,g),u.isMounted=!0,h=p=B=null}};u.scope.on();const S=u.effect=new Do(x);u.scope.off();const b=u.update=S.run.bind(S),Q=u.job=S.runIfDirty.bind(S);Q.i=u,Q.id=u.uid,S.scheduler=()=>Ys(Q),Se(u,!0),b()},G=(u,h,p)=>{h.component=u;const B=u.vnode.props;u.vnode=h,u.next=null,ac(u,h.props,B,p),hc(u,h.children,p),be(),ur(u),ve()},nn=(u,h,p,B,g,m,w,x,S=!1)=>{const b=u&&u.children,Q=u?u.shapeFlag:0,k=h.children,{patchFlag:$,shapeFlag:K}=h;if($>0){if($&128){ue(b,k,p,B,g,m,w,x,S);return}else if($&256){te(b,k,p,B,g,m,w,x,S);return}}K&8?(Q&16&&Nn(b,g,m),k!==b&&a(p,k)):Q&16?K&16?ue(b,k,p,B,g,m,w,x,S):Nn(b,g,m,!0):(Q&8&&a(p,""),K&16&&W(k,p,B,g,m,w,x,S))},te=(u,h,p,B,g,m,w,x,S)=>{u=u||je,h=h||je;const b=u.length,Q=h.length,k=Math.min(b,Q);let $;for($=0;$<k;$++){const K=h[$]=S?pe(h[$]):ne(h[$]);P(u[$],K,p,null,g,m,w,x,S)}b>Q?Nn(u,g,m,!0,!1,k):W(h,p,B,g,m,w,x,S,k)},ue=(u,h,p,B,g,m,w,x,S)=>{let b=0;const Q=h.length;let k=u.length-1,$=Q-1;for(;b<=k&&b<=$;){const K=u[b],J=h[b]=S?pe(h[b]):ne(h[b]);if(Te(K,J))P(K,J,p,null,g,m,w,x,S);else break;b++}for(;b<=k&&b<=$;){const K=u[k],J=h[$]=S?pe(h[$]):ne(h[$]);if(Te(K,J))P(K,J,p,null,g,m,w,x,S);else break;k--,$--}if(b>k){if(b<=$){const K=$+1,J=K<Q?h[K].el:B;for(;b<=$;)P(null,h[b]=S?pe(h[b]):ne(h[b]),p,J,g,m,w,x,S),b++}}else if(b>$)for(;b<=k;)Rn(u[b],g,m,!0),b++;else{const K=b,J=b,cn=new Map;for(b=J;b<=$;b++){const In=h[b]=S?pe(h[b]):ne(h[b]);In.key!=null&&cn.set(In.key,b)}let rn,kn=0;const mn=$-J+1;let zn=!1,On=0;const Ge=new Array(mn);for(b=0;b<mn;b++)Ge[b]=0;for(b=K;b<=k;b++){const In=u[b];if(kn>=mn){Rn(In,g,m,!0);continue}let Yn;if(In.key!=null)Yn=cn.get(In.key);else for(rn=J;rn<=$;rn++)if(Ge[rn-J]===0&&Te(In,h[rn])){Yn=rn;break}Yn===void 0?Rn(In,g,m,!0):(Ge[Yn-J]=b+1,Yn>=On?On=Yn:zn=!0,P(In,h[Yn],p,null,g,m,w,x,S),kn++)}const or=zn?gc(Ge):je;for(rn=or.length-1,b=mn-1;b>=0;b--){const In=J+b,Yn=h[In],ir=In+1<Q?h[In+1].el:B;Ge[b]===0?P(null,Yn,p,ir,g,m,w,x,S):zn&&(rn<0||b!==or[rn]?qn(Yn,p,ir,2):rn--)}}},qn=(u,h,p,B,g=null)=>{const{el:m,type:w,transition:x,children:S,shapeFlag:b}=u;if(b&6){qn(u.component.subTree,h,p,B);return}if(b&128){u.suspense.move(h,p,B);return}if(b&64){w.move(u,h,p,H);return}if(w===Pn){s(m,h,p);for(let k=0;k<S.length;k++)qn(S[k],h,p,B);s(u.anchor,h,p);return}if(w===ds){F(u,h,p);return}if(B!==2&&b&1&&x)if(B===0)x.beforeEnter(m),s(m,h,p),Ln(()=>x.enter(m),g);else{const{leave:k,delayLeave:$,afterLeave:K}=x,J=()=>s(m,h,p),cn=()=>{k(m,()=>{J(),K&&K()})};$?$(m,J,cn):cn()}else s(m,h,p)},Rn=(u,h,p,B=!1,g=!1)=>{const{type:m,props:w,ref:x,children:S,dynamicChildren:b,shapeFlag:Q,patchFlag:k,dirs:$,cacheIndex:K}=u;if(k===-2&&(g=!1),x!=null&&Ot(x,null,p,u,!0),K!=null&&(h.renderCache[K]=void 0),Q&256){h.ctx.deactivate(u);return}const J=Q&1&&$,cn=!st(u);let rn;if(cn&&(rn=w&&w.onVnodeBeforeUnmount)&&Jn(rn,h,u),Q&6)bt(u.component,p,B);else{if(Q&128){u.suspense.unmount(p,B);return}J&&ye(u,null,h,"beforeUnmount"),Q&64?u.type.remove(u,h,p,H,B):b&&!b.hasOnce&&(m!==Pn||k>0&&k&64)?Nn(b,h,p,!1,!0):(m===Pn&&k&384||!g&&Q&16)&&Nn(S,h,p),B&&Ie(u)}(cn&&(rn=w&&w.onVnodeUnmounted)||J)&&Ln(()=>{rn&&Jn(rn,h,u),J&&ye(u,null,h,"unmounted")},p)},Ie=u=>{const{type:h,el:p,anchor:B,transition:g}=u;if(h===Pn){Le(p,B);return}if(h===ds){R(u);return}const m=()=>{r(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:w,delayLeave:x}=g,S=()=>w(p,m);x?x(u.el,m,S):S()}else m()},Le=(u,h)=>{let p;for(;u!==h;)p=C(u),r(u),u=p;r(h)},bt=(u,h,p)=>{const{bum:B,scope:g,job:m,subTree:w,um:x,m:S,a:b}=u;Dr(S),Dr(b),B&&ss(B),g.stop(),m&&(m.flags|=8,Rn(w,u,h,p)),x&&Ln(x,h),Ln(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Nn=(u,h,p,B=!1,g=!1,m=0)=>{for(let w=m;w<u.length;w++)Rn(u[w],h,p,B,g)},D=u=>{if(u.shapeFlag&6)return D(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const h=C(u.anchor||u.el),p=h&&h[Fl];return p?C(p):h};let I=!1;const T=(u,h,p)=>{u==null?h._vnode&&Rn(h._vnode,null,null,!0):P(h._vnode||null,u,h,null,null,null,p),h._vnode=u,I||(I=!0,ur(),No(),I=!1)},H={p:P,um:Rn,m:qn,r:Ie,mt:dn,mc:W,pc:nn,pbc:v,n:D,o:n};let sn,hn;return{render:T,hydrate:sn,createApp:ic(T,sn)}}function us({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Se({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pc(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function fi(n,e,t=!1){const s=n.children,r=e.children;if(z(s)&&z(r))for(let o=0;o<s.length;o++){const i=s[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=pe(r[o]),c.el=i.el),!t&&c.patchFlag!==-2&&fi(i,c)),c.type===Jt&&(c.el=i.el)}}function gc(n){const e=n.slice(),t=[0];let s,r,o,i,c;const l=n.length;for(s=0;s<l;s++){const f=n[s];if(f!==0){if(r=t[t.length-1],n[r]<f){e[s]=r,t.push(s);continue}for(o=0,i=t.length-1;o<i;)c=o+i>>1,n[t[c]]<f?o=c+1:i=c;f<n[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,i=t[o-1];o-- >0;)t[o]=i,i=e[i];return t}function di(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:di(e)}function Dr(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Dc=Symbol.for("v-scx"),Bc=()=>Wn(Dc);function Ue(n,e,t){return hi(n,e,t)}function hi(n,e,t=ln){const{immediate:s,deep:r,flush:o,once:i}=t,c=Dn({},t),l=e&&s||!e&&o!=="post";let f;if(At){if(o==="sync"){const A=Bc();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!l){const A=()=>{};return A.stop=ee,A.resume=ee,A.pause=ee,A}}const a=Bn;c.call=(A,y,P)=>Vn(A,a,y,P);let d=!1;o==="post"?c.scheduler=A=>{Ln(A,a&&a.suspense)}:o!=="sync"&&(d=!0,c.scheduler=(A,y)=>{y?A():Ys(A)}),c.augmentJob=A=>{e&&(A.flags|=4),d&&(A.flags|=2,a&&(A.id=a.uid,A.i=a))};const C=Ml(n,e,c);return At&&(f?f.push(C):l&&C()),C}function _c(n,e,t){const s=this.proxy,r=An(n)?n.includes(".")?Ci(s,n):()=>s[n]:n.bind(s,s);let o;V(e)?o=e:(o=e.handler,t=e);const i=mt(this),c=hi(r,o.bind(s),t);return i(),c}function Ci(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const mc=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Qn(e)}Modifiers`]||n[`${Oe(e)}Modifiers`];function bc(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||ln;let r=t;const o=e.startsWith("update:"),i=o&&mc(s,e.slice(7));i&&(i.trim&&(r=t.map(a=>An(a)?a.trim():a)),i.number&&(r=t.map(qi)));let c,l=s[c=ts(e)]||s[c=ts(Qn(e))];!l&&o&&(l=s[c=ts(Oe(e))]),l&&Vn(l,n,6,r);const f=s[c+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Vn(f,n,6,r)}}function Ai(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const o=n.emits;let i={},c=!1;if(!V(n)){const l=f=>{const a=Ai(f,e,!0);a&&(c=!0,Dn(i,a))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!c?(fn(n)&&s.set(n,null),null):(z(o)?o.forEach(l=>i[l]=null):Dn(i,o),fn(n)&&s.set(n,i),i)}function Yt(n,e){return!n||!Ht(e)?!1:(e=e.slice(2).replace(/Once$/,""),tn(n,e[0].toLowerCase()+e.slice(1))||tn(n,Oe(e))||tn(n,e))}function fs(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:c,emit:l,render:f,renderCache:a,props:d,data:C,setupState:A,ctx:y,inheritAttrs:P}=n,j=kt(n);let N,L;try{if(t.shapeFlag&4){const R=r||s,U=R;N=ne(f.call(U,R,a,d,A,C,y)),L=c}else{const R=e;N=ne(R.length>1?R(d,{attrs:c,slots:i,emit:l}):R(d,null)),L=e.props?c:vc(c)}}catch(R){it.length=0,Wt(R,n,1),N=Tn(Mn)}let F=N;if(L&&P!==!1){const R=Object.keys(L),{shapeFlag:U}=F;R.length&&U&7&&(o&&R.some(Ns)&&(L=yc(L,o)),F=_e(F,L,!1,!0))}return t.dirs&&(F=_e(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(t.dirs):t.dirs),t.transition&&ht(F,t.transition),N=F,kt(j),N}const vc=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ht(t))&&((e||(e={}))[t]=n[t]);return e},yc=(n,e)=>{const t={};for(const s in n)(!Ns(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function Sc(n,e,t){const{props:s,children:r,component:o}=n,{props:i,children:c,patchFlag:l}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Br(s,i,f):!!i;if(l&8){const a=e.dynamicProps;for(let d=0;d<a.length;d++){const C=a[d];if(i[C]!==s[C]&&!Yt(f,C))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?Br(s,i,f):!0:!!i;return!1}function Br(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==n[o]&&!Yt(t,o))return!0}return!1}function xc({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const pi=n=>n.__isSuspense;function Ec(n,e){e&&e.pendingBranch?z(n)?e.effects.push(...n):e.effects.push(n):Il(n)}const Pn=Symbol.for("v-fgt"),Jt=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),ds=Symbol.for("v-stc"),it=[];let Fn=null;function un(n=!1){it.push(Fn=n?null:[])}function Pc(){it.pop(),Fn=it[it.length-1]||null}let Ct=1;function _r(n,e=!1){Ct+=n,n<0&&Fn&&e&&(Fn.hasOnce=!0)}function gi(n){return n.dynamicChildren=Ct>0?Fn||je:null,Pc(),Ct>0&&Fn&&Fn.push(n),n}function Cn(n,e,t,s,r,o){return gi(M(n,e,t,s,r,o,!0))}function Di(n,e,t,s,r){return gi(Tn(n,e,t,s,r,!0))}function Lt(n){return n?n.__v_isVNode===!0:!1}function Te(n,e){return n.type===e.type&&n.key===e.key}const Bi=({key:n})=>n??null,Pt=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?An(n)||pn(n)||V(n)?{i:wn,r:n,k:e,f:!!t}:n:null);function M(n,e=null,t=null,s=0,r=null,o=n===Pn?0:1,i=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bi(e),ref:e&&Pt(e),scopeId:$o,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:wn};return c?(Zs(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=An(t)?8:16),Ct>0&&!i&&Fn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Fn.push(l),l}const Tn=wc;function wc(n,e=null,t=null,s=0,r=null,o=!1){if((!n||n===Xo)&&(n=Mn),Lt(n)){const c=_e(n,e,!0);return t&&Zs(c,t),Ct>0&&!o&&Fn&&(c.shapeFlag&6?Fn[Fn.indexOf(n)]=c:Fn.push(c)),c.patchFlag=-2,c}if(jc(n)&&(n=n.__vccOpts),e){e=Tc(e);let{class:c,style:l}=e;c&&!An(c)&&(e.class=Zn(c)),fn(l)&&(Vs(l)&&!z(l)&&(l=Dn({},l)),e.style=Ut(l))}const i=An(n)?1:pi(n)?128:jo(n)?64:fn(n)?4:V(n)?2:0;return M(n,e,t,s,r,i,o,!0)}function Tc(n){return n?Vs(n)||ri(n)?Dn({},n):n:null}function _e(n,e,t=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:c,transition:l}=n,f=e?Rc(r||{},e):r,a={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&Bi(f),ref:e&&e.ref?t&&o?z(o)?o.concat(Pt(e)):[o,Pt(e)]:Pt(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Pn?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&_e(n.ssContent),ssFallback:n.ssFallback&&_e(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&s&&ht(a,l.clone(a)),a}function _i(n=" ",e=0){return Tn(Jt,null,n,e)}function we(n="",e=!1){return e?(un(),Di(Mn,null,n)):Tn(Mn,null,n)}function ne(n){return n==null||typeof n=="boolean"?Tn(Mn):z(n)?Tn(Pn,null,n.slice()):Lt(n)?pe(n):Tn(Jt,null,String(n))}function pe(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:_e(n)}function Zs(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(z(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Zs(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ri(e)?e._ctx=wn:r===3&&wn&&(wn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:wn},t=32):(e=String(e),s&64?(t=16,e=[_i(e)]):t=8);n.children=e,n.shapeFlag|=t}function Rc(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Zn([e.class,s.class]));else if(r==="style")e.style=Ut([e.style,s.style]);else if(Ht(r)){const o=e[r],i=s[r];i&&o!==i&&!(z(o)&&o.includes(i))&&(e[r]=o?[].concat(o,i):i)}else r!==""&&(e[r]=s[r])}return e}function Jn(n,e,t,s=null){Vn(n,e,7,[t,s])}const Mc=ei();let kc=0;function Oc(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||Mc,o={uid:kc++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ao(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ii(s,r),emitsOptions:Ai(s,r),emit:null,emitted:null,propsDefaults:ln,inheritAttrs:s.inheritAttrs,ctx:ln,data:ln,props:ln,attrs:ln,slots:ln,refs:ln,setupState:ln,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=bc.bind(null,o),n.ce&&n.ce(o),o}let Bn=null;const Ic=()=>Bn||wn;let Ft,Ts;{const n=zt(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Ft=e("__VUE_INSTANCE_SETTERS__",t=>Bn=t),Ts=e("__VUE_SSR_SETTERS__",t=>At=t)}const mt=n=>{const e=Bn;return Ft(n),n.scope.on(),()=>{n.scope.off(),Ft(e)}},mr=()=>{Bn&&Bn.scope.off(),Ft(null)};function mi(n){return n.vnode.shapeFlag&4}let At=!1;function Lc(n,e=!1,t=!1){e&&Ts(e);const{props:s,children:r}=n.vnode,o=mi(n);cc(n,s,o,e),dc(n,r,t);const i=o?Fc(n,e):void 0;return e&&Ts(!1),i}function Fc(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zl);const{setup:s}=t;if(s){be();const r=n.setupContext=s.length>1?Hc(n):null,o=mt(n),i=_t(s,n,0,[n.props,r]),c=lo(i);if(ve(),o(),(c||n.sp)&&!st(n)&&Vo(n),c){if(i.then(mr,mr),e)return i.then(l=>{br(n,l,e)}).catch(l=>{Wt(l,n,0)});n.asyncDep=i}else br(n,i,e)}else bi(n,e)}function br(n,e,t){V(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:fn(e)&&(n.setupState=Io(e)),bi(n,t)}let vr;function bi(n,e,t){const s=n.type;if(!n.render){if(!e&&vr&&!s.render){const r=s.template||Js(n).template;if(r){const{isCustomElement:o,compilerOptions:i}=n.appContext.config,{delimiters:c,compilerOptions:l}=s,f=Dn(Dn({isCustomElement:o,delimiters:c},i),l);s.render=vr(r,f)}}n.render=s.render||ee}{const r=mt(n);be();try{nc(n)}finally{ve(),r()}}}const Nc={get(n,e){return bn(n,"get",""),n[e]}};function Hc(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Nc),slots:n.slots,emit:n.emit,expose:e}}function Xt(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Io(Gs(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ot)return ot[t](n)},has(e,t){return t in e||t in ot}})):n.proxy}function $c(n,e=!0){return V(n)?n.displayName||n.name:n.name||e&&n.__name}function jc(n){return V(n)&&"__vccOpts"in n}const gn=(n,e)=>Tl(n,e,At);function nr(n,e,t){const s=arguments.length;return s===2?fn(e)&&!z(e)?Lt(e)?Tn(n,null,[e]):Tn(n,e):Tn(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Lt(t)&&(t=[t]),Tn(n,e,t))}const Qc="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const yr=typeof window<"u"&&window.trustedTypes;if(yr)try{Rs=yr.createPolicy("vue",{createHTML:n=>n})}catch{}const vi=Rs?n=>Rs.createHTML(n):n=>n,zc="http://www.w3.org/2000/svg",Uc="http://www.w3.org/1998/Math/MathML",ie=typeof document<"u"?document:null,Sr=ie&&ie.createElement("template"),Kc={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?ie.createElementNS(zc,n):e==="mathml"?ie.createElementNS(Uc,n):t?ie.createElement(n,{is:t}):ie.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>ie.createTextNode(n),createComment:n=>ie.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ie.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,o){const i=t?t.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===o||!(r=r.nextSibling)););else{Sr.innerHTML=vi(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const c=Sr.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[i?i.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fe="transition",Ye="animation",pt=Symbol("_vtc"),yi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wc=Dn({},Qo,yi),Vc=n=>(n.displayName="Transition",n.props=Wc,n),Gc=Vc((n,{slots:e})=>nr($l,qc(n),e)),xe=(n,e=[])=>{z(n)?n.forEach(t=>t(...e)):n&&n(...e)},xr=n=>n?z(n)?n.some(e=>e.length>1):n.length>1:!1;function qc(n){const e={};for(const E in n)E in yi||(e[E]=n[E]);if(n.css===!1)return e;const{name:t="v",type:s,duration:r,enterFromClass:o=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:f=i,appearToClass:a=c,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:C=`${t}-leave-active`,leaveToClass:A=`${t}-leave-to`}=n,y=Yc(r),P=y&&y[0],j=y&&y[1],{onBeforeEnter:N,onEnter:L,onEnterCancelled:F,onLeave:R,onLeaveCancelled:U,onBeforeAppear:Z=N,onAppear:Y=L,onAppearCancelled:W=F}=e,_=(E,q,dn,yn)=>{E._enterCancelled=yn,Ee(E,q?a:c),Ee(E,q?f:i),dn&&dn()},v=(E,q)=>{E._isLeaving=!1,Ee(E,d),Ee(E,A),Ee(E,C),q&&q()},O=E=>(q,dn)=>{const yn=E?Y:L,on=()=>_(q,E,dn);xe(yn,[q,on]),Er(()=>{Ee(q,E?l:o),re(q,E?a:c),xr(yn)||Pr(q,s,P,on)})};return Dn(e,{onBeforeEnter(E){xe(N,[E]),re(E,o),re(E,i)},onBeforeAppear(E){xe(Z,[E]),re(E,l),re(E,f)},onEnter:O(!1),onAppear:O(!0),onLeave(E,q){E._isLeaving=!0;const dn=()=>v(E,q);re(E,d),E._enterCancelled?(re(E,C),Rr()):(Rr(),re(E,C)),Er(()=>{E._isLeaving&&(Ee(E,d),re(E,A),xr(R)||Pr(E,s,j,dn))}),xe(R,[E,dn])},onEnterCancelled(E){_(E,!1,void 0,!0),xe(F,[E])},onAppearCancelled(E){_(E,!0,void 0,!0),xe(W,[E])},onLeaveCancelled(E){v(E),xe(U,[E])}})}function Yc(n){if(n==null)return null;if(fn(n))return[hs(n.enter),hs(n.leave)];{const e=hs(n);return[e,e]}}function hs(n){return Yi(n)}function re(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[pt]||(n[pt]=new Set)).add(e)}function Ee(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[pt];t&&(t.delete(e),t.size||(n[pt]=void 0))}function Er(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Jc=0;function Pr(n,e,t,s){const r=n._endId=++Jc,o=()=>{r===n._endId&&s()};if(t!=null)return setTimeout(o,t);const{type:i,timeout:c,propCount:l}=Xc(n,e);if(!i)return s();const f=i+"end";let a=0;const d=()=>{n.removeEventListener(f,C),o()},C=A=>{A.target===n&&++a>=l&&d()};setTimeout(()=>{a<l&&d()},c+1),n.addEventListener(f,C)}function Xc(n,e){const t=window.getComputedStyle(n),s=y=>(t[y]||"").split(", "),r=s(`${fe}Delay`),o=s(`${fe}Duration`),i=wr(r,o),c=s(`${Ye}Delay`),l=s(`${Ye}Duration`),f=wr(c,l);let a=null,d=0,C=0;e===fe?i>0&&(a=fe,d=i,C=o.length):e===Ye?f>0&&(a=Ye,d=f,C=l.length):(d=Math.max(i,f),a=d>0?i>f?fe:Ye:null,C=a?a===fe?o.length:l.length:0);const A=a===fe&&/\b(transform|all)(,|$)/.test(s(`${fe}Property`).toString());return{type:a,timeout:d,propCount:C,hasTransform:A}}function wr(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>Tr(t)+Tr(n[s])))}function Tr(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Rr(){return document.body.offsetHeight}function Zc(n,e,t){const s=n[pt];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Nt=Symbol("_vod"),Si=Symbol("_vsh"),na={beforeMount(n,{value:e},{transition:t}){n[Nt]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Je(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:s}){!e!=!t&&(s?e?(s.beforeEnter(n),Je(n,!0),s.enter(n)):s.leave(n,()=>{Je(n,!1)}):Je(n,e))},beforeUnmount(n,{value:e}){Je(n,e)}};function Je(n,e){n.style.display=e?n[Nt]:"none",n[Si]=!e}const ea=Symbol(""),ta=/(^|;)\s*display\s*:/;function sa(n,e,t){const s=n.style,r=An(t);let o=!1;if(t&&!r){if(e)if(An(e))for(const i of e.split(";")){const c=i.slice(0,i.indexOf(":")).trim();t[c]==null&&wt(s,c,"")}else for(const i in e)t[i]==null&&wt(s,i,"");for(const i in t)i==="display"&&(o=!0),wt(s,i,t[i])}else if(r){if(e!==t){const i=s[ea];i&&(t+=";"+i),s.cssText=t,o=ta.test(t)}}else e&&n.removeAttribute("style");Nt in n&&(n[Nt]=o?s.display:"",n[Si]&&(s.display="none"))}const Mr=/\s*!important$/;function wt(n,e,t){if(z(t))t.forEach(s=>wt(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=ra(n,e);Mr.test(t)?n.setProperty(Oe(s),t.replace(Mr,""),"important"):n[s]=t}}const kr=["Webkit","Moz","ms"],Cs={};function ra(n,e){const t=Cs[e];if(t)return t;let s=Qn(e);if(s!=="filter"&&s in n)return Cs[e]=s;s=Qt(s);for(let r=0;r<kr.length;r++){const o=kr[r]+s;if(o in n)return Cs[e]=o}return e}const Or="http://www.w3.org/1999/xlink";function Ir(n,e,t,s,r,o=tl(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Or,e.slice(6,e.length)):n.setAttributeNS(Or,e,t):t==null||o&&!fo(t)?n.removeAttribute(e):n.setAttribute(e,o?"":me(t)?String(t):t)}function Lr(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?vi(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let i=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=fo(t):t==null&&c==="string"?(t="",i=!0):c==="number"&&(t=0,i=!0)}try{n[e]=t}catch{}i&&n.removeAttribute(r||e)}function oa(n,e,t,s){n.addEventListener(e,t,s)}function ia(n,e,t,s){n.removeEventListener(e,t,s)}const Fr=Symbol("_vei");function la(n,e,t,s,r=null){const o=n[Fr]||(n[Fr]={}),i=o[e];if(s&&i)i.value=s;else{const[c,l]=ca(e);if(s){const f=o[e]=fa(s,r);oa(n,c,f,l)}else i&&(ia(n,c,i,l),o[e]=void 0)}}const Nr=/(?:Once|Passive|Capture)$/;function ca(n){let e;if(Nr.test(n)){e={};let s;for(;s=n.match(Nr);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Oe(n.slice(2)),e]}let As=0;const aa=Promise.resolve(),ua=()=>As||(aa.then(()=>As=0),As=Date.now());function fa(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Vn(da(s,t.value),e,5,[s])};return t.value=n,t.attached=ua(),t}function da(n,e){if(z(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ha=(n,e,t,s,r,o)=>{const i=r==="svg";e==="class"?Zc(n,s,i):e==="style"?sa(n,t,s):Ht(e)?Ns(e)||la(n,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ca(n,e,s,i))?(Lr(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ir(n,e,s,i,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!An(s))?Lr(n,Qn(e),s,o,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Ir(n,e,s,i))};function Ca(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Hr(e)&&V(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Hr(e)&&An(t)?!1:e in n}const Aa=Dn({patchProp:ha},Kc);let $r;function pa(){return $r||($r=Cc(Aa))}const ga=(...n)=>{const e=pa().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=Ba(s);if(!r)return;const o=e._component;!V(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=t(r,!1,Da(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e};function Da(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ba(n){return An(n)?document.querySelector(n):n}var _a=!1;/*!
 * pinia v2.2.7
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let xi;const Zt=n=>xi=n,Ei=Symbol();function Ms(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var lt;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(lt||(lt={}));function ma(){const n=po(!0),e=n.run(()=>$n({}));let t=[],s=[];const r=Gs({install(o){Zt(r),r._a=o,o.provide(Ei,r),o.config.globalProperties.$pinia=r,s.forEach(i=>t.push(i)),s=[]},use(o){return!this._a&&!_a?s.push(o):t.push(o),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Pi=()=>{};function jr(n,e,t,s=Pi){n.push(e);const r=()=>{const o=n.indexOf(e);o>-1&&(n.splice(o,1),s())};return!t&&go()&&sl(r),r}function Ne(n,...e){n.slice().forEach(t=>{t(...e)})}const ba=n=>n(),Qr=Symbol(),ps=Symbol();function ks(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,s)=>n.set(s,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const s=e[t],r=n[t];Ms(r)&&Ms(s)&&n.hasOwnProperty(t)&&!pn(s)&&!Be(s)?n[t]=ks(r,s):n[t]=s}return n}const va=Symbol();function ya(n){return!Ms(n)||!n.hasOwnProperty(va)}const{assign:he}=Object;function Sa(n){return!!(pn(n)&&n.effect)}function xa(n,e,t,s){const{state:r,actions:o,getters:i}=e,c=t.state.value[n];let l;function f(){c||(t.state.value[n]=r?r():{});const a=xl(t.state.value[n]);return he(a,o,Object.keys(i||{}).reduce((d,C)=>(d[C]=Gs(gn(()=>{Zt(t);const A=t._s.get(n);return i[C].call(A,A)})),d),{}))}return l=wi(n,f,e,t,s,!0),l}function wi(n,e,t={},s,r,o){let i;const c=he({actions:{}},t),l={deep:!0};let f,a,d=[],C=[],A;const y=s.state.value[n];!o&&!y&&(s.state.value[n]={}),$n({});let P;function j(W){let _;f=a=!1,typeof W=="function"?(W(s.state.value[n]),_={type:lt.patchFunction,storeId:n,events:A}):(ks(s.state.value[n],W),_={type:lt.patchObject,payload:W,storeId:n,events:A});const v=P=Symbol();qs().then(()=>{P===v&&(f=!0)}),a=!0,Ne(d,_,s.state.value[n])}const N=o?function(){const{state:_}=t,v=_?_():{};this.$patch(O=>{he(O,v)})}:Pi;function L(){i.stop(),d=[],C=[],s._s.delete(n)}const F=(W,_="")=>{if(Qr in W)return W[ps]=_,W;const v=function(){Zt(s);const O=Array.from(arguments),E=[],q=[];function dn(G){E.push(G)}function yn(G){q.push(G)}Ne(C,{args:O,name:v[ps],store:U,after:dn,onError:yn});let on;try{on=W.apply(this&&this.$id===n?this:U,O)}catch(G){throw Ne(q,G),G}return on instanceof Promise?on.then(G=>(Ne(E,G),G)).catch(G=>(Ne(q,G),Promise.reject(G))):(Ne(E,on),on)};return v[Qr]=!0,v[ps]=_,v},R={_p:s,$id:n,$onAction:jr.bind(null,C),$patch:j,$reset:N,$subscribe(W,_={}){const v=jr(d,W,_.detached,()=>O()),O=i.run(()=>Ue(()=>s.state.value[n],E=>{(_.flush==="sync"?a:f)&&W({storeId:n,type:lt.direct,events:A},E)},he({},l,_)));return v},$dispose:L},U=Bt(R);s._s.set(n,U);const Y=(s._a&&s._a.runWithContext||ba)(()=>s._e.run(()=>(i=po()).run(()=>e({action:F}))));for(const W in Y){const _=Y[W];if(pn(_)&&!Sa(_)||Be(_))o||(y&&ya(_)&&(pn(_)?_.value=y[W]:ks(_,y[W])),s.state.value[n][W]=_);else if(typeof _=="function"){const v=F(_,W);Y[W]=v,c.actions[W]=_}}return he(U,Y),he(X(U),Y),Object.defineProperty(U,"$state",{get:()=>s.state.value[n],set:W=>{j(_=>{he(_,W)})}}),s._p.forEach(W=>{he(U,i.run(()=>W({store:U,app:s._a,pinia:s,options:c})))}),y&&o&&t.hydrate&&t.hydrate(U.$state,y),f=!0,a=!0,U}/*! #__NO_SIDE_EFFECTS__ */function Ea(n,e,t){let s,r;const o=typeof e=="function";s=n,r=o?t:e;function i(c,l){const f=lc();return c=c||(f?Wn(Ei,null):null),c&&Zt(c),c=xi,c._s.has(s)||(o?wi(s,e,r,c):xa(s,r,c)),c._s.get(s)}return i.$id=s,i}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $e=typeof document<"u";function Ti(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Pa(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Ti(n.default)}const en=Object.assign;function gs(n,e){const t={};for(const s in e){const r=e[s];t[s]=Gn(r)?r.map(n):n(r)}return t}const ct=()=>{},Gn=Array.isArray,Ri=/#/g,wa=/&/g,Ta=/\//g,Ra=/=/g,Ma=/\?/g,Mi=/\+/g,ka=/%5B/g,Oa=/%5D/g,ki=/%5E/g,Ia=/%60/g,Oi=/%7B/g,La=/%7C/g,Ii=/%7D/g,Fa=/%20/g;function er(n){return encodeURI(""+n).replace(La,"|").replace(ka,"[").replace(Oa,"]")}function Na(n){return er(n).replace(Oi,"{").replace(Ii,"}").replace(ki,"^")}function Os(n){return er(n).replace(Mi,"%2B").replace(Fa,"+").replace(Ri,"%23").replace(wa,"%26").replace(Ia,"`").replace(Oi,"{").replace(Ii,"}").replace(ki,"^")}function Ha(n){return Os(n).replace(Ra,"%3D")}function $a(n){return er(n).replace(Ri,"%23").replace(Ma,"%3F")}function ja(n){return n==null?"":$a(n).replace(Ta,"%2F")}function gt(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Qa=/\/$/,za=n=>n.replace(Qa,"");function Ds(n,e,t="/"){let s,r={},o="",i="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=e.slice(0,l),o=e.slice(l+1,c>-1?c:e.length),r=n(o)),c>-1&&(s=s||e.slice(0,c),i=e.slice(c,e.length)),s=Va(s??e,t),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:gt(i)}}function Ua(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function zr(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Ka(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&Ke(e.matched[s],t.matched[r])&&Li(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ke(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Li(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Wa(n[t],e[t]))return!1;return!0}function Wa(n,e){return Gn(n)?Ur(n,e):Gn(e)?Ur(e,n):n===e}function Ur(n,e){return Gn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function Va(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=t.length-1,i,c;for(i=0;i<s.length;i++)if(c=s[i],c!==".")if(c==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const de={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Dt;(function(n){n.pop="pop",n.push="push"})(Dt||(Dt={}));var at;(function(n){n.back="back",n.forward="forward",n.unknown=""})(at||(at={}));function Ga(n){if(!n)if($e){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),za(n)}const qa=/^[^#]+#/;function Ya(n,e){return n.replace(qa,"#")+e}function Ja(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const ns=()=>({left:window.scrollX,top:window.scrollY});function Xa(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Ja(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kr(n,e){return(history.state?history.state.position-e:-1)+n}const Is=new Map;function Za(n,e){Is.set(n,e)}function nu(n){const e=Is.get(n);return Is.delete(n),e}let eu=()=>location.protocol+"//"+location.host;function Fi(n,e){const{pathname:t,search:s,hash:r}=e,o=n.indexOf("#");if(o>-1){let c=r.includes(n.slice(o))?n.slice(o).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),zr(l,"")}return zr(t,n)+s+r}function tu(n,e,t,s){let r=[],o=[],i=null;const c=({state:C})=>{const A=Fi(n,location),y=t.value,P=e.value;let j=0;if(C){if(t.value=A,e.value=C,i&&i===y){i=null;return}j=P?C.position-P.position:0}else s(A);r.forEach(N=>{N(t.value,y,{delta:j,type:Dt.pop,direction:j?j>0?at.forward:at.back:at.unknown})})};function l(){i=t.value}function f(C){r.push(C);const A=()=>{const y=r.indexOf(C);y>-1&&r.splice(y,1)};return o.push(A),A}function a(){const{history:C}=window;C.state&&C.replaceState(en({},C.state,{scroll:ns()}),"")}function d(){for(const C of o)C();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",a)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",a,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function Wr(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?ns():null}}function su(n){const{history:e,location:t}=window,s={value:Fi(n,t)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,f,a){const d=n.indexOf("#"),C=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:eu()+n+l;try{e[a?"replaceState":"pushState"](f,"",C),r.value=f}catch(A){console.error(A),t[a?"replace":"assign"](C)}}function i(l,f){const a=en({},e.state,Wr(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});o(l,a,!0),s.value=l}function c(l,f){const a=en({},r.value,e.state,{forward:l,scroll:ns()});o(a.current,a,!0);const d=en({},Wr(s.value,l,null),{position:a.position+1},f);o(l,d,!1),s.value=l}return{location:s,state:r,push:c,replace:i}}function ru(n){n=Ga(n);const e=su(n),t=tu(n,e.state,e.location,e.replace);function s(o,i=!0){i||t.pauseListeners(),history.go(o)}const r=en({location:"",base:n,go:s,createHref:Ya.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ou(n){return typeof n=="string"||n&&typeof n=="object"}function Ni(n){return typeof n=="string"||typeof n=="symbol"}const Hi=Symbol("");var Vr;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Vr||(Vr={}));function We(n,e){return en(new Error,{type:n,[Hi]:!0},e)}function oe(n,e){return n instanceof Error&&Hi in n&&(e==null||!!(n.type&e))}const Gr="[^/]+?",iu={sensitive:!1,strict:!1,start:!0,end:!0},lu=/[.+*?^${}()[\]/\\]/g;function cu(n,e){const t=en({},iu,e),s=[];let r=t.start?"^":"";const o=[];for(const f of n){const a=f.length?[]:[90];t.strict&&!f.length&&(r+="/");for(let d=0;d<f.length;d++){const C=f[d];let A=40+(t.sensitive?.25:0);if(C.type===0)d||(r+="/"),r+=C.value.replace(lu,"\\$&"),A+=40;else if(C.type===1){const{value:y,repeatable:P,optional:j,regexp:N}=C;o.push({name:y,repeatable:P,optional:j});const L=N||Gr;if(L!==Gr){A+=10;try{new RegExp(`(${L})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${y}" (${L}): `+R.message)}}let F=P?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(F=j&&f.length<2?`(?:/${F})`:"/"+F),j&&(F+="?"),r+=F,A+=20,j&&(A+=-8),P&&(A+=-20),L===".*"&&(A+=-50)}a.push(A)}s.push(a)}if(t.strict&&t.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,t.sensitive?"":"i");function c(f){const a=f.match(i),d={};if(!a)return null;for(let C=1;C<a.length;C++){const A=a[C]||"",y=o[C-1];d[y.name]=A&&y.repeatable?A.split("/"):A}return d}function l(f){let a="",d=!1;for(const C of n){(!d||!a.endsWith("/"))&&(a+="/"),d=!1;for(const A of C)if(A.type===0)a+=A.value;else if(A.type===1){const{value:y,repeatable:P,optional:j}=A,N=y in f?f[y]:"";if(Gn(N)&&!P)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const L=Gn(N)?N.join("/"):N;if(!L)if(j)C.length<2&&(a.endsWith("/")?a=a.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);a+=L}}return a||"/"}return{re:i,score:s,keys:o,parse:c,stringify:l}}function au(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $i(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const o=au(s[t],r[t]);if(o)return o;t++}if(Math.abs(r.length-s.length)===1){if(qr(s))return 1;if(qr(r))return-1}return r.length-s.length}function qr(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const uu={type:0,value:""},fu=/[a-zA-Z0-9_]/;function du(n){if(!n)return[[]];if(n==="/")return[[uu]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(A){throw new Error(`ERR (${t})/"${f}": ${A}`)}let t=0,s=t;const r=[];let o;function i(){o&&r.push(o),o=[]}let c=0,l,f="",a="";function d(){f&&(t===0?o.push({type:0,value:f}):t===1||t===2||t===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:a,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),f="")}function C(){f+=l}for(;c<n.length;){if(l=n[c++],l==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:l==="/"?(f&&d(),i()):l===":"?(d(),t=1):C();break;case 4:C(),t=s;break;case 1:l==="("?t=2:fu.test(l)?C():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?a[a.length-1]=="\\"?a=a.slice(0,-1)+l:t=3:a+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,a="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${f}"`),d(),i(),r}function hu(n,e,t){const s=cu(du(n.path),t),r=en(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Cu(n,e){const t=[],s=new Map;e=Zr({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function o(d,C,A){const y=!A,P=Jr(d);P.aliasOf=A&&A.record;const j=Zr(e,d),N=[P];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of R)N.push(Jr(en({},P,{components:A?A.record.components:P.components,path:U,aliasOf:A?A.record:P})))}let L,F;for(const R of N){const{path:U}=R;if(C&&U[0]!=="/"){const Z=C.record.path,Y=Z[Z.length-1]==="/"?"":"/";R.path=C.record.path+(U&&Y+U)}if(L=hu(R,C,j),A?A.alias.push(L):(F=F||L,F!==L&&F.alias.push(L),y&&d.name&&!Xr(L)&&i(d.name)),ji(L)&&l(L),P.children){const Z=P.children;for(let Y=0;Y<Z.length;Y++)o(Z[Y],L,A&&A.children[Y])}A=A||L}return F?()=>{i(F)}:ct}function i(d){if(Ni(d)){const C=s.get(d);C&&(s.delete(d),t.splice(t.indexOf(C),1),C.children.forEach(i),C.alias.forEach(i))}else{const C=t.indexOf(d);C>-1&&(t.splice(C,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return t}function l(d){const C=gu(d,t);t.splice(C,0,d),d.record.name&&!Xr(d)&&s.set(d.record.name,d)}function f(d,C){let A,y={},P,j;if("name"in d&&d.name){if(A=s.get(d.name),!A)throw We(1,{location:d});j=A.record.name,y=en(Yr(C.params,A.keys.filter(F=>!F.optional).concat(A.parent?A.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),d.params&&Yr(d.params,A.keys.map(F=>F.name))),P=A.stringify(y)}else if(d.path!=null)P=d.path,A=t.find(F=>F.re.test(P)),A&&(y=A.parse(P),j=A.record.name);else{if(A=C.name?s.get(C.name):t.find(F=>F.re.test(C.path)),!A)throw We(1,{location:d,currentLocation:C});j=A.record.name,y=en({},C.params,d.params),P=A.stringify(y)}const N=[];let L=A;for(;L;)N.unshift(L.record),L=L.parent;return{name:j,path:P,params:y,matched:N,meta:pu(N)}}n.forEach(d=>o(d));function a(){t.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:i,clearRoutes:a,getRoutes:c,getRecordMatcher:r}}function Yr(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function Jr(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Au(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Au(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function Xr(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function pu(n){return n.reduce((e,t)=>en(e,t.meta),{})}function Zr(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function gu(n,e){let t=0,s=e.length;for(;t!==s;){const o=t+s>>1;$i(n,e[o])<0?s=o:t=o+1}const r=Du(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function Du(n){let e=n;for(;e=e.parent;)if(ji(e)&&$i(n,e)===0)return e}function ji({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Bu(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Mi," "),i=o.indexOf("="),c=gt(i<0?o:o.slice(0,i)),l=i<0?null:gt(o.slice(i+1));if(c in e){let f=e[c];Gn(f)||(f=e[c]=[f]),f.push(l)}else e[c]=l}return e}function no(n){let e="";for(let t in n){const s=n[t];if(t=Ha(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Gn(s)?s.map(o=>o&&Os(o)):[s&&Os(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function _u(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Gn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const mu=Symbol(""),eo=Symbol(""),es=Symbol(""),Qi=Symbol(""),Ls=Symbol("");function Xe(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ge(n,e,t,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,l)=>{const f=C=>{C===!1?l(We(4,{from:t,to:e})):C instanceof Error?l(C):ou(C)?l(We(2,{from:e,to:C})):(i&&s.enterCallbacks[r]===i&&typeof C=="function"&&i.push(C),c())},a=o(()=>n.call(s&&s.instances[r],e,t,f));let d=Promise.resolve(a);n.length<3&&(d=d.then(f)),d.catch(C=>l(C))})}function Bs(n,e,t,s,r=o=>o()){const o=[];for(const i of n)for(const c in i.components){let l=i.components[c];if(!(e!=="beforeRouteEnter"&&!i.instances[c]))if(Ti(l)){const a=(l.__vccOpts||l)[e];a&&o.push(ge(a,t,s,i,c,r))}else{let f=l();o.push(()=>f.then(a=>{if(!a)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const d=Pa(a)?a.default:a;i.mods[c]=a,i.components[c]=d;const A=(d.__vccOpts||d)[e];return A&&ge(A,t,s,i,c,r)()}))}}return o}function to(n){const e=Wn(es),t=Wn(Qi),s=gn(()=>{const l=Un(n.to);return e.resolve(l)}),r=gn(()=>{const{matched:l}=s.value,{length:f}=l,a=l[f-1],d=t.matched;if(!a||!d.length)return-1;const C=d.findIndex(Ke.bind(null,a));if(C>-1)return C;const A=so(l[f-2]);return f>1&&so(a)===A&&d[d.length-1].path!==A?d.findIndex(Ke.bind(null,l[f-2])):C}),o=gn(()=>r.value>-1&&xu(t.params,s.value.params)),i=gn(()=>r.value>-1&&r.value===t.matched.length-1&&Li(t.params,s.value.params));function c(l={}){if(Su(l)){const f=e[Un(n.replace)?"replace":"push"](Un(n.to)).catch(ct);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:gn(()=>s.value.href),isActive:o,isExactActive:i,navigate:c}}function bu(n){return n.length===1?n[0]:n}const vu=Ve({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(n,{slots:e}){const t=Bt(to(n)),{options:s}=Wn(es),r=gn(()=>({[ro(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[ro(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&bu(e.default(t));return n.custom?o:nr("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},o)}}}),yu=vu;function Su(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function xu(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Gn(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function so(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ro=(n,e,t)=>n??e??t,Eu=Ve({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Wn(Ls),r=gn(()=>n.route||s.value),o=Wn(eo,0),i=gn(()=>{let f=Un(o);const{matched:a}=r.value;let d;for(;(d=a[f])&&!d.components;)f++;return f}),c=gn(()=>r.value.matched[i.value]);Et(eo,gn(()=>i.value+1)),Et(mu,c),Et(Ls,r);const l=$n();return Ue(()=>[l.value,c.value,n.name],([f,a,d],[C,A,y])=>{a&&(a.instances[d]=f,A&&A!==a&&f&&f===C&&(a.leaveGuards.size||(a.leaveGuards=A.leaveGuards),a.updateGuards.size||(a.updateGuards=A.updateGuards))),f&&a&&(!A||!Ke(a,A)||!C)&&(a.enterCallbacks[d]||[]).forEach(P=>P(f))},{flush:"post"}),()=>{const f=r.value,a=n.name,d=c.value,C=d&&d.components[a];if(!C)return oo(t.default,{Component:C,route:f});const A=d.props[a],y=A?A===!0?f.params:typeof A=="function"?A(f):A:null,j=nr(C,en({},y,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[a]=null)},ref:l}));return oo(t.default,{Component:j,route:f})||j}}});function oo(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Pu=Eu;function wu(n){const e=Cu(n.routes,n),t=n.parseQuery||Bu,s=n.stringifyQuery||no,r=n.history,o=Xe(),i=Xe(),c=Xe(),l=vl(de);let f=de;$e&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const a=gs.bind(null,D=>""+D),d=gs.bind(null,ja),C=gs.bind(null,gt);function A(D,I){let T,H;return Ni(D)?(T=e.getRecordMatcher(D),H=I):H=D,e.addRoute(H,T)}function y(D){const I=e.getRecordMatcher(D);I&&e.removeRoute(I)}function P(){return e.getRoutes().map(D=>D.record)}function j(D){return!!e.getRecordMatcher(D)}function N(D,I){if(I=en({},I||l.value),typeof D=="string"){const h=Ds(t,D,I.path),p=e.resolve({path:h.path},I),B=r.createHref(h.fullPath);return en(h,p,{params:C(p.params),hash:gt(h.hash),redirectedFrom:void 0,href:B})}let T;if(D.path!=null)T=en({},D,{path:Ds(t,D.path,I.path).path});else{const h=en({},D.params);for(const p in h)h[p]==null&&delete h[p];T=en({},D,{params:d(h)}),I.params=d(I.params)}const H=e.resolve(T,I),sn=D.hash||"";H.params=a(C(H.params));const hn=Ua(s,en({},D,{hash:Na(sn),path:H.path})),u=r.createHref(hn);return en({fullPath:hn,hash:sn,query:s===no?_u(D.query):D.query||{}},H,{redirectedFrom:void 0,href:u})}function L(D){return typeof D=="string"?Ds(t,D,l.value.path):en({},D)}function F(D,I){if(f!==D)return We(8,{from:I,to:D})}function R(D){return Y(D)}function U(D){return R(en(L(D),{replace:!0}))}function Z(D){const I=D.matched[D.matched.length-1];if(I&&I.redirect){const{redirect:T}=I;let H=typeof T=="function"?T(D):T;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=L(H):{path:H},H.params={}),en({query:D.query,hash:D.hash,params:H.path!=null?{}:D.params},H)}}function Y(D,I){const T=f=N(D),H=l.value,sn=D.state,hn=D.force,u=D.replace===!0,h=Z(T);if(h)return Y(en(L(h),{state:typeof h=="object"?en({},sn,h.state):sn,force:hn,replace:u}),I||T);const p=T;p.redirectedFrom=I;let B;return!hn&&Ka(s,H,T)&&(B=We(16,{to:p,from:H}),qn(H,H,!0,!1)),(B?Promise.resolve(B):v(p,H)).catch(g=>oe(g)?oe(g,2)?g:ue(g):nn(g,p,H)).then(g=>{if(g){if(oe(g,2))return Y(en({replace:u},L(g.to),{state:typeof g.to=="object"?en({},sn,g.to.state):sn,force:hn}),I||p)}else g=E(p,H,!0,u,sn);return O(p,H,g),g})}function W(D,I){const T=F(D,I);return T?Promise.reject(T):Promise.resolve()}function _(D){const I=Le.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(D):D()}function v(D,I){let T;const[H,sn,hn]=Tu(D,I);T=Bs(H.reverse(),"beforeRouteLeave",D,I);for(const h of H)h.leaveGuards.forEach(p=>{T.push(ge(p,D,I))});const u=W.bind(null,D,I);return T.push(u),Nn(T).then(()=>{T=[];for(const h of o.list())T.push(ge(h,D,I));return T.push(u),Nn(T)}).then(()=>{T=Bs(sn,"beforeRouteUpdate",D,I);for(const h of sn)h.updateGuards.forEach(p=>{T.push(ge(p,D,I))});return T.push(u),Nn(T)}).then(()=>{T=[];for(const h of hn)if(h.beforeEnter)if(Gn(h.beforeEnter))for(const p of h.beforeEnter)T.push(ge(p,D,I));else T.push(ge(h.beforeEnter,D,I));return T.push(u),Nn(T)}).then(()=>(D.matched.forEach(h=>h.enterCallbacks={}),T=Bs(hn,"beforeRouteEnter",D,I,_),T.push(u),Nn(T))).then(()=>{T=[];for(const h of i.list())T.push(ge(h,D,I));return T.push(u),Nn(T)}).catch(h=>oe(h,8)?h:Promise.reject(h))}function O(D,I,T){c.list().forEach(H=>_(()=>H(D,I,T)))}function E(D,I,T,H,sn){const hn=F(D,I);if(hn)return hn;const u=I===de,h=$e?history.state:{};T&&(H||u?r.replace(D.fullPath,en({scroll:u&&h&&h.scroll},sn)):r.push(D.fullPath,sn)),l.value=D,qn(D,I,T,u),ue()}let q;function dn(){q||(q=r.listen((D,I,T)=>{if(!bt.listening)return;const H=N(D),sn=Z(H);if(sn){Y(en(sn,{replace:!0,force:!0}),H).catch(ct);return}f=H;const hn=l.value;$e&&Za(Kr(hn.fullPath,T.delta),ns()),v(H,hn).catch(u=>oe(u,12)?u:oe(u,2)?(Y(en(L(u.to),{force:!0}),H).then(h=>{oe(h,20)&&!T.delta&&T.type===Dt.pop&&r.go(-1,!1)}).catch(ct),Promise.reject()):(T.delta&&r.go(-T.delta,!1),nn(u,H,hn))).then(u=>{u=u||E(H,hn,!1),u&&(T.delta&&!oe(u,8)?r.go(-T.delta,!1):T.type===Dt.pop&&oe(u,20)&&r.go(-1,!1)),O(H,hn,u)}).catch(ct)}))}let yn=Xe(),on=Xe(),G;function nn(D,I,T){ue(D);const H=on.list();return H.length?H.forEach(sn=>sn(D,I,T)):console.error(D),Promise.reject(D)}function te(){return G&&l.value!==de?Promise.resolve():new Promise((D,I)=>{yn.add([D,I])})}function ue(D){return G||(G=!D,dn(),yn.list().forEach(([I,T])=>D?T(D):I()),yn.reset()),D}function qn(D,I,T,H){const{scrollBehavior:sn}=n;if(!$e||!sn)return Promise.resolve();const hn=!T&&nu(Kr(D.fullPath,0))||(H||!T)&&history.state&&history.state.scroll||null;return qs().then(()=>sn(D,I,hn)).then(u=>u&&Xa(u)).catch(u=>nn(u,D,I))}const Rn=D=>r.go(D);let Ie;const Le=new Set,bt={currentRoute:l,listening:!0,addRoute:A,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:j,getRoutes:P,resolve:N,options:n,push:R,replace:U,go:Rn,back:()=>Rn(-1),forward:()=>Rn(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:on.add,isReady:te,install(D){const I=this;D.component("RouterLink",yu),D.component("RouterView",Pu),D.config.globalProperties.$router=I,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Un(l)}),$e&&!Ie&&l.value===de&&(Ie=!0,R(r.location).catch(sn=>{}));const T={};for(const sn in de)Object.defineProperty(T,sn,{get:()=>l.value[sn],enumerable:!0});D.provide(es,I),D.provide(Qi,Mo(T)),D.provide(Ls,l);const H=D.unmount;Le.add(D),D.unmount=function(){Le.delete(D),Le.size<1&&(f=de,q&&q(),q=null,l.value=de,Ie=!1,G=!1),H()}}};function Nn(D){return D.reduce((I,T)=>I.then(()=>_(T)),Promise.resolve())}return bt}function Tu(n,e){const t=[],s=[],r=[],o=Math.max(e.matched.length,n.matched.length);for(let i=0;i<o;i++){const c=e.matched[i];c&&(n.matched.find(f=>Ke(f,c))?s.push(c):t.push(c));const l=n.matched[i];l&&(e.matched.find(f=>Ke(f,l))||r.push(l))}return[t,s,r]}function tr(){return Wn(es)}const sr=Ea("quiz",{state:()=>({currentQuizBank:null,currentQuestionIndex:0,userAnswers:new Map,markedQuestions:new Set,score:0,isComplete:!1}),actions:{setQuizBank(n){this.currentQuizBank=n,this.currentQuestionIndex=0,this.userAnswers.clear(),this.score=0,this.isComplete=!1},submitAnswer(n){if(!this.currentQuizBank)return;this.userAnswers.set(this.currentQuestionIndex,n);const e=this.currentQuizBank.questions[this.currentQuestionIndex];if(Array.isArray(n)&&Array.isArray(e.answer)){const t=[...n].sort().join(""),s=[...e.answer].sort().join("");t===s&&this.score++}else n===e.answer&&this.score++},getSavedAnswer(n){return this.userAnswers.get(n)},nextQuestion(){this.currentQuizBank&&(this.currentQuestionIndex<this.currentQuizBank.questions.length-1?this.currentQuestionIndex++:this.isComplete=!0)},previousQuestion(){this.currentQuestionIndex>0&&this.currentQuestionIndex--},toggleMarkQuestion(n){this.markedQuestions.has(n)?this.markedQuestions.delete(n):this.markedQuestions.add(n)},jumpToQuestion(n){n>=0&&this.currentQuizBank&&n<this.currentQuizBank.questions.length&&(this.currentQuestionIndex=n)}},getters:{progress:n=>{if(!n.currentQuizBank)return 0;const e=n.userAnswers.size;return Math.round(e/n.currentQuizBank.questions.length*100)},isAnswerCorrect:n=>e=>{var r;const t=n.userAnswers.get(e),s=(r=n.currentQuizBank)==null?void 0:r.questions[e];if(!t||!s)return!1;if(Array.isArray(t)&&Array.isArray(s.answer)){const o=[...t].sort().join(""),i=[...s.answer].sort().join("");return o===i}return t===s.answer}}}),Ru=`**一、单选题（68 道）**

1. 云计算按服务类型大致分为三类，下列（  ）不属于这三种服务类型。
A. IaaS
B. PaaS
C. DaaS
D. SaaS
答案：C

2. 云计算部署模式包括（  ）。
A. 公有云、私有云和应用云
B. 基础设施云、平台云和混合云
C. 公有云、私有云和混合云
D. 基础设施云、平台云和应用云
答案：C

3. 下面关于 GFS 集群的叙述中，正确是(  )。
A. GFS 所有的元数据都存放在 Chunk Server 上
B. GFS 所有的元数据都是放在硬盘上的
C. 一个 GFS 集群由一个 master 和大量 Chunk Server 构成
D. Chuck 数据块的默认大小为 100M
答案：C

4. GFS 系统中，主要的系统管理技术包含以下①大规模集群安装技术②节点动态加入技术③故障检测技术④节能技术中的哪几个。（）
A. ①②③
B. ①③④
C. ②③④
D. ①②③④
答案：D

5. 下面与 HDFS 类似的框架是（  ）？
A. NTFS
B. FAT32
C. GFS
D. EXT3
答案：C

6. 不属于开源系统的是（  ）。
A. GFS 文件系统
B. HDFS 文件系统
C. HBase 数据管理技术
D. Hadoop MapReduce 数据并行处理技术
答案：A

7. GFS 默认 Chunk 的大小是（  ）。
A. 32MB
B. 64MB
C. 128MB
D. 256M
答案：B

8. 下列关于 MapReduce 说法不正确的是（  ）。
A. MapReduce 是一种计算框架
B. MapReduce 来源于 google 的学术论文
C. MapReduce 程序只能用 java 语言编写
D. MapReduce 隐藏了并行计算的细节，方便使用
答案：C

9. 在 MapReduce 中，下面哪个选项会将输入键值对处理成中间键值对（）。
A. Map
B. Reduce
C. Map 和 Reduce
答案：A

10. 对于使用 Paxos 算法的分布式系统,除了下列(  )选项,其他条件都必须满足。
A. 决议只有在被 proposers 提出后才能批准
B. 每次可以批准多个决议
C. 每次只批准一个决议
D. 只有决议确定被批准后 learners 才能获取这个决议
答案：B

11. Google 的 Chubby 锁服务,支持众多 Google 服务,但不包括以下(  )选项。
A. GFS
B. Mapreduce
C. Bigtable
D. Megestore
答案：B

12. 在设计之初,Chubby 系统的客户端和服务器端通过(  )来连接。
A. RPC(远程过程调用)
B. SOAP(简单对象访问协议)
C. RESTful(REST 式的编程风格)
D. ROA(面向资源的架构)
答案：A

13. 以下关于 Chubby 中的 Paxos 算法描述,错误的是(  )。
A. 客户端每次向容错日志提交新值时,Chubby 自动调用 Paxos 保证副本间数据的一致性。
B. 选择协调者有两种方式:为协调者指派序号,限制协调者可以选择的值。
C. 客户端提交新值后,协调者把包含客户端新值的 accept 消息广播给其他所有副本,其他副本收到后,将接受或拒绝的决定反馈给协调者。
D. 防止单个协调者失效,允许同一时刻有多个协调者。
答案：D

14. 以下关于 Chubby 文件系统,描述错误的是(  )。
A. Chubby 锁服务中,每一个文件就是一个锁,用户通过获取共享锁或独占锁,打开、读取、写入、关闭文件。
B. Chubby 文件系统由许多节点组成,保存除 ACL 以外的多种元数据。
C. Chubby 系统本质是一个分布式、存储大量小文件的文件系统,所有操作在文件基础上完成。
D. 为了避免所有通信都使用序号带来的系统开销增长,Chubby 引入了 Sequencer 概念,在文件操作的句柄函数中,涉及 Sequencer 的有 GetSequencer()、SetSequencer()、CheckSequencer()等。
答案：B

15. 以下关于 Chubby 客户端与服务器端的通信过程的描述,错误的是(  )。
A. 主服务器每次接收到客户端的 KeepAlive 请求,都会立刻做出回应。
B. 只要在宽限期内,客户端收到主服务器的回应信息,客户端就恢复到安全状态。
C. 客户端在某个租约期 Cn 结束时,一直未收到主服务器的回应信息,则客户端到达危险状态临界点,进入宽限期。
D. 旧的主服务器和新选出的主服务器具有不同的纪元号。
答案：A

16. 以下(  )不能提升 Chubby 性能。
A. 适当提高主服务器默认的租约期。
B. 客户端一致性缓存。
C. 代理和分区。
D. 取消 ACL。
答案：D

17. 网页属于(  )数据。
A. 结构化数据
B. 半结构化数据
C. 非结构化数据
D. 都不是
答案：B

18. 关于 Bigtable 以下说法错误的是(  )数据。
A. Bigtable 是全新设计,与传统数据库有极大不同。
B. Bigtable 是 Google 开发的基于 GFS 和 Chubby 的分布式存储系统。
C. Bigtable 可以存储海量数据。
答案：A

19. SSTable 被划分为更小的存储单元(  )。
A. Block 块
B. Chunk 数据块
C. 校验数据
D. 日志
答案：A

20. 以下关于 Bigtable 子表的说法,错误的是(  )。
A. 每个子表服务器由多个 SSTable 和一个日志文件组成
B. 每个 SSTable 都有一个独立的日志文件
C. 每个 SSTable 都有一个独立的索引文件
D. 子表是表中一系列行的集合
答案：B

21. Megastore 中的实体组类似关系数据库中的(  )。
A. 关系数据库
B. 二维表
C. 记录
D. 属性
答案：B

22. Megastore 数据模式中的属性类型不包括(  )。
A. required
B. optional
C. repeated
D. foreign
答案：D

23. 在该数据模式中,局部索引是(  )。
A. name
B. time
C. PhotosByTime
D. tag
答案：C

24. 关于照片共享服务模式以下说法错误的是(  )。
A. 该模式定义了一个根表和一个子表。
B. tag 的属性值可以有多个。
C. thumbnail_url 属性是必须的,
D. Photo 表能创建内联索引
答案：C

25. Megastore 中，能够读取到最新且已经全部生效了的数据的读操作是(  )。
A. current 读
B. snapshot 读
C. inconsistent 读
D. read 读
答案：A

26. Megastore 中,适用于低延迟并能容忍数据过期或不完整的读操作是(  )。
A. current 读
B. snapshot 读
C. inconsistent 读
D. read 读
答案：C

27. Megastore 中写操作事务周期中的读操作的作用是(  )。
A. 获取最后一次提交事务的时间戳和日志位置。
B. 从 Bigtable 读取并将数据变更聚集到日志入口。
C. 将数据更新到 Bigtable。
D. 清理不再需要的数据。
答案：A

28. Megastore 中实体组间的异步通信是通过(  )实现的。
A. 队列
B. 基于 Paxos 的两阶段提交
C. 基于 Paxos 的三阶段提交
D. 全局索引
答案：A

29. Megastore 基本架构中只保存有日志的副本有(  )。
A. 完整副本
B. 见证者副本
C. 只读副本
D. 只写副本
答案：B

30. 该日志实例中,达到了完全一致性的日志位置是(  )。
A. 99
B. 101
C. 102
D. 103
答案：B

31. 如图的数据写入操作,(  )副本执行了失效操作。
A. 副本 A
B. 副本 B
C. 副本 C
D. 副本 D
答案：C

32. Megastore 中,为了保证协调者的可用性,使用了(  )服务。
A. Chubby
B. GFS
C. Bigtable
D. Mapreduce
答案：A

33. 最常用的衡量分布式系统可用性的标准是(  )数据。
A. 1 个 9
B. 2 个 9
C. 3 - 5 个 9
D. 6 个 9
答案：C

34. Dapper 为实现对应用层透明,设计了(  )。 
A. 轻量级核心功能库
B. 二次抽样技术
C. n 次抽样技术
答案：A

35. 对分散在区域 Dapper 存储库的监控记录的直接访问中,借助 MapReduce 对数以十亿计的 Dapper 监控数据并行访问的方法是(  )。 
A. 通过监控 id 访问
B. 批量访问(块访问)
C. 索引访问
D. 通过父区间 id 访问
答案：B

36. 早期典型分布式系统的请求及应答过程中,节点之间通信是通过(  )进行的。 
A. RPC
B. SOAP
C. HTTP RESTful
D. kubernetes
答案：A

37. Dapper 监控系统采用的(  )监控方案。 
A. 黑盒
B. 白盒
C. 基于注释
D. 基于消息
答案：C

38. 要满足广泛可部署性的要求,监控系统设计时要达到(  )设计目标。
A. 广泛可部署性
B. 对应用层透明
C. 低开销
D. 可扩展性
答案：C

39. 在 Dremel 的多层级服务树中,实际对数据源执行查询操作的是____。 
A. 根服务器
B. 中间服务器
C. 叶子服务器
D. 客户端
答案：C

40. Google 系统中实现内存大数据分析的是____。
A. MapReduce
B. Dremel
C. Drill
D. PowerDrill
答案：D

41. “aaaabbbbbbbcccccdddddd”的游程编码是____。
A. [a,1,4][b,5,8][c,12,4][d,14,6]
B. [a,1,4][b,5,11][c,12,16][d,17,22]
C. [a,1,4][b,5,7][c,12,5][d,17,6]
D. [a,1,4][b,5,7][c,12,5]
答案：C

42. 以下____的开发借鉴了 Amazon Dynamo 设计理念。
A. Hbase
B. Facebook Cassandra
C. JSON
D. Redis
答案：B

43. 关于一致性哈希算法,描述错误的是____。
A. 求出设备节点的哈希值,按逆时针方向将设备配置到环上的一个点
B. 计算数据对象键的哈希值,按顺时针方向将其存放到哈希环上标记值大于其哈希值的距其最近的设备节点
C. 添加或删除设备节点时只会影响到其在哈希环上顺时针方向标记值大于其哈希值的离它最近的设备节点
D. 大大降低在添加或删除节点时引起的节点间的数据传输开销
答案：A

44. 关于 quorum 机制,错误的是____。
A. 要求 R + W > N
B. Quorum 又被称为 NWR 协议
C. 对于读效率要求较高的应用场景,一般设:R = 1,W = N
D. W 越小,数据的一致性、可用性越强
答案：D

45. 关于 Dynamo 采用 Merkle 哈希树技术,错误的是____。
A. 加快检测速度
B. 当数据传输出错时,能有效减少数据重传数量
C. 是一种节点临时故障处理方法
D. 可用于快速检测出错的数据
答案：C

46. 关于 EC2 的基本架构,错误的是____。
A. Amazon 机器映像是包含了操作系统、服务器程序、应用程序等软件配置的模板
B. 用户可以定制自己的 AMI
C. EC2 实例实质就是使用 AMI 模板启动的一个云服务器
D. Amaznon EBS 与实例绑定,其中的数据仅在实例的生命周期存在
答案：D

47. EC2 没有采用的安全机制有____。
A. 防火墙
B. 安全组
C. SSH
D. VPC
答案：A

48. 关于 EC2 所使用的 IP 地址,错误的是____。
A. 每个实例会分配一个公共 IP 地址和一个私有 IP 地址
B. 弹性 IP 地址是和用户账号绑定,而不是与实例绑定
C. 当某个实例不可用时,绑定在它上面的弹性 IP 地址会重新绑定在新启动的实例上,从而使服务不中断,增强系统的容错性
D. 弹性 IP 地址是私有 IP 地址
答案：D

49. S3 中的桶类似于资源管理器中的____。
A. 文件夹
B. 文件
C. 卷
D. 磁盘分区
答案：A

50. 关于 S3 中的对象,说法错误的是____。
A. 每个对象在所在的桶中有唯一的键。
B. S3 中对象的存储默认不进行版本控制,开启版本控制,需对桶中所有对象开启,无法对桶中某个对象开启。
C. 元数据和数据的分离使客户可以直接操作元数据来管理和查询数据,在必要的时候才需要加载数据本身。
D. 为最大化 I/O 性能,一个应用的资源对象的键开头最好使用相同的字符串。
答案：D

51. S3 采用的身份认证机制是____。
A. HMAC - SHA1
B. SSL
C. HMAC - MD5
D. RSA
答案：A

52. 以下访问权限中,只对桶有效的是____。
A. READ
B. WRITE
C. READ_ACP
D. WRITE_ACP
E. FULL_CONTROL
答案：B

53. 关于改进的一致性哈希算法,正确的有____。
A. 引入了虚拟节点
B. 虚拟节点的引入考虑了设备节点的性能差异
C. 引入了数据分区
D. 一个虚拟节点负责数据分区的数量是随机分配的
答案：ABC

54. 分布式系统是 CAP 原则是以下____三项不能同时满足,只能三选二。
A. 可靠性（分区容错性）
B. 可用性
C. 廉价性
D. 一致性
答案：ABD

55. 关于 Dynamo 所采用的 Gossip 协议,正确的有____。
A. Gossip 协议可以实现节点间通信
B. 通过 Gossip 协议可以检测失效节点
C. 为了避免新加入的节点之间不能及时发现彼此的存在,Dynamo 设置了种子节点
D. 分布式架构中的节点通过 Gossip 协议交换成员节点信息
答案：ABCD

56. Dynamo 分布式系统中,当虚拟节点 A 失效后,虚拟节点 D 使用带有监听的数据回传机制,会执行以下____操作。
A. 存储写入 A 的数据
B. 存储 A 的位置
C. 周期性检测 A
D. 当 A 重新可用后,将暂存的数据回传 A
答案：ABCD

57. 关于 Amazon 的 Dynamo，以下说法错误的是____。
A. 采用最终一致性模型，在任何时刻用户都能读到最新一致的数据
B. 开发借鉴了 Amazon Dynamo 设计理念的有 Facebook Cassandra 等
C. 采用了改进的一致性哈希算法、基于 Gossip 协议的成员资格和错误检测等技术
D. 其设计时面临数据均衡分布、数据备份等问题，并采取了相应解决方案
答案：A

58. 关于非关系型数据库与传统关系数据库的比较,错误的是____。
A. 关系数据库对数据有更严格的约束
B. 关系数据库满足 CAP 原则的 C 和 A，在 P 方面很弱（可扩展性弱）
C. 非关系型数据库满足 ACID 事务性处理
D. 非关系型数据库通过 API 操作数据，支持简单的查询功能
答案：C

59. 非关系型数据库的缺点是____。
A. 具有高一致性，在 ACID 方面很强，移植性很高
B. 可扩展性方面能力较弱
C. 具有很高的可扩展性，具有很好的并发处理能力
D. 缺乏数据一致性保证，处理事务性问题能力较弱，难以处理跨表、跨服务器的查询
答案：D

60. 关于非关系型数据库服务 SimpleDB 的描述,正确的有____。
A. 每个用户账户中的域名必须是唯一的，每个域中数据的大小具有一定的限制
B. SimpleDB 是 AWS 提供的一种数据库服务，无需下载安装，由 AWS 进行维护管理
C. 和关系数据库一样，SimpleDB 中需要事先定义条目的模式
D. 一个条目的某个属性中可以有多个值
E. 在 AWS 中，通常将相对大的数据对象存储在 S3 中，在 SimpleDB 中只保存指向某个特定对象的位置指针
答案：ABDE

61. 相对于 SimpleDB，DynamoDB 做了____优化。
A. DynamoDB 中取消了对表中数据大小的限制
B. 用户可以自定义 DynamoDB 表的大小，并由系统自动分配到多个服务器上
C. DynamoDB 不再固定使用最终一致性数据模型，而是允许用户选择弱一致性或者强一致性
D. DynamoDB 还在硬件上进行了优化，采用固态硬盘作为支撑，根据用户设定的读/写流量预设来确定数据分布的硬盘数量
答案：ABCD

62. 为了提高安全性，Amazon RDS 允许在 VPC 中运行数据库实例，通过____连接到用户现有 的 IT 基础设施。
A. VPN
B. NAT
C. HTTP
D. DNS
答案：A

63. Amazon 将 RDS 中的 MySQL 服务器实例称做____。
A. DB Instance
B. DB Server
答案：A

64. 标识队列中的不同消息是通过____。
A. 消息 ID
B. 接收句柄
C. 消息体
D. 消息摘要
答案：A

65. SQS 的消息体使用了____加密算法。
A. MD2
B. MD5
C. RSA
D. SHA1
答案：B

66. 关于 SQS，描述不正确的是____。
A. 队列中的消息是被冗余存储的，同一个消息会存放在系统的多个服务器上
B. SQS 采用了基于加权随机分布（Weighted Random Distribution）的消息取样机制
C. 用户发出查询请求后，能够一次性快速查找到所需要的消息
D. 消息的冗余存储保证了系统的高可用性，但给查询队列中的消息带来了麻烦
答案：C

67. 关于 SQS 生命周期，描述不正确的是____。
A. 用户接收消息进行处理，在消息接收到可见性超时值到期这个时间段内，该消息对其他用户不可见
B. 用户接收消息后，会启动可见性超时计时器
C. 可见性超时计时器一旦启动，就不能更改
D. 消息删除有两种情况：接收者处理完消息，进行删除；消息达到了最长消息保存期，被系统自动删除
答案：C

68. 以下实现存储虚拟化的方式中，SAN 属于____。
A. 基于主机的存储虚拟化
B. 基于存储设备的存储虚拟化
C. 基于网络的存储虚拟化
D. 基于文件的存储虚拟化
答案：C


**三、多选题（44 道）**

1. 云计算的 7 个特点是（  ）。
A. 超大规模
B. 虚拟化
C. 高可靠性
D. 通用性
E. 高可伸缩性
F. 按需服务极其廉价
G. 结构复杂
答案：ABCDEF

2. 云计算体系结构包括（  ）。
A. 物理资源层
B. 资源池层
C. 管理中间件层
D. SOA 构建层
答案：ABCD

3. Google 的三篇著名论文，分别讲述了 Google 云计算中的（  ）核心技术。
A. GFS
B. Spanner
C. MapReduce
D. BigTable
答案：ACD

4. Paxos 算法中的三种节点是（  ）。
A. proposers
B. acceptors
C. Prepares
D. lerners
答案：ABD

5. Chubby 系统采用了（  ）。
A. 粗粒度锁服务
B. 细粒度锁服务
C. 建议性锁服务
D. 强制性锁服务
答案：AC

6. 单个 Chubby 服务器副本包含了以下（  ）。
A. 容错的日志
B. 容错的数据库
C. Chubby
D. 用户数据
答案：ABC

7. Chubby 客户端与主服务器端通过 KeepAlive 周期性发送信息，其作用是（  ）。
A. 延迟租约期
B. 携带事件信息
C. 交换用户数据
D. 选举主服务器
答案：AB

8. 以下（  ）使用了 Chubby 的基于 Paxos 算法的一致性解决方案。
A. 从 Chubby 单元的五个副本中选举一个主服务器
B. 客户端读操作
C. 客户端写操作
答案：AC

9. 在 Chubby 的设计中，通过使用代理可以有效的减少（  ）。
A. 主服务器处理 KeepAlive 信息开销
B. 读请求带来的服务器负载
C. 写操作带来的通信量
D. 跨分区的通信量
答案：AB

10. Bigtable 表中的数据 Value 通过（  ）确定。
A. 行关键字（Row Key）
B. 列关键字（Column Key）
C. 时间戳（Time Stamp）
D. 分布式多维映射表
答案：ABC

11. Bigtable 是构建在 Google 的（  ）组件之上的。
A. GFS
B. Chubby
C. Google WorkQueue
D. Mapreduce
答案：ABC

12. Bigtable 主服务器主要作用包括（  ）。
A. 新子表分配给子表服务器
B. 子表服务器状态监控
C. 子表服务器之间的负载均衡
D. 保存客户端的子表到子表服务器的映射
答案：ABCD

13. Megastore 的主要功能包括（  ）。
A. 数据中心之间同步复制副本，实现系统的高可用需求
B. 实现分布式读操作、写操作
C. 通过数据分区实现系统的高可扩展性需求
D. 对分布式系统进行监控
答案：ABC

14. 关于 Megastore，描述正确的是（  ）。
A. Megastore 副本分布在不同的数据中心。
B. 单个实体组内支持 ACID。
C. 实体组集之间具有紧密的一致性。
D. 实体组数据和元数据保存在 Bigtable 中。
答案：ABD

15. Megastore 基本架构中能够参与投票的副本有（  ）。
A. 完整副本
B. 见证者副本
C. 只读副本
D. 只写副本
答案：AB

16. 该日志实例中，达到了多数一致性（包括完全一致性）的日志位置有（  ）。
A. 100
B. 101
C. 102
D. 103
E. 104
答案：ABCD

17. 该日志实例中，执行数据读取，存在需要从多数派读取共识值，执行追赶操作的日志位置有（  ）。
A. 100
B. 101
C. 102
D. 103
E. 104
答案：CD

18. Dapper 监控树的区间记录的信息包括（  ）。
A. 区间名称
B. 父区间 id
C. 区间 id
D. 监控 id
E. 注释
答案：ABCDE

19. Dapper 的“存储 API”简称为 DAPI，提供了对分散在区域 Dapper 存储库的监控记录的直接访问，访问方法有（  ）。
A. 通过监控 id 访问
B. 批量访问（块访问）
C. 索引访问
D. 通过父区间 id 访问
答案：ABC

20. Google 认为监控系统设计的两个基本要求是（  ）。 
A. 广泛可部署性
B. 不间断的监控
C. 低开销
D. 可扩展性
答案：AB

21. 列存储的好处有____。
A. 只处理涉及的列数据
B. 效率低
C. 更利于压缩
D. 实现简单
答案：AC

22. 为满足 Google 平台通用性（不同平台间很好的实现实时交互数据处理）要求，需要____两方面的技术支撑。
A. 统一的存储平台
B. 统一的数据存储格式
C. 统一的开发语言
D. 统一的操作系统
答案：AB

23. Google 的 PowerDrill 从____进行了性能优化。
A. 数据分块
B. 数据编码的优化
C. 全局字典的优化
D. 压缩算法
E. 行的重排
答案：ABCDE

24. PowerDrill 能实现高效的数据处理，在存储部分主要依赖____两方面的技术。
A. 尽可能在查询中略去不需要的数据分块
B. 尽可能地减少数据在内存中的占用，把更核心的数据加载进内存进行处理
C. 行存储
D. 直接从硬盘读取数据
答案：AB

25. 关于改进的一致性哈希算法，正确的有____。
A. 引入了虚拟节点
B. 虚拟节点的引入考虑了设备节点的性能差异
C. 引入了数据分区
D. 一个虚拟节点负责数据分区的数量是随机分配的
答案：ABC

26. 分布式系统是 CAP 原则是以下____三项不能同时满足,只能三选二。
A. 可靠性（分区容错性）
B. 可用性
C. 廉价性
D. 一致性
答案：ABD

27. 关于 Dynamo 所采用的 Gossip 协议,正确的有____。
A. Gossip 协议可以实现节点间通信
B. 通过 Gossip 协议可以检测失效节点
C. 为了避免新加入的节点之间不能及时发现彼此的存在,Dynamo 设置了种子节点
D. 分布式架构中的节点通过 Gossip 协议交换成员节点信息
答案：ABCD

28. Dynamo 分布式系统中,当虚拟节点 A 失效后,虚拟节点 D 使用带有监听的数据回传机制,会执行以下____操作。
A. 存储写入 A 的数据
B. 存储 A 的位置
C. 周期性检测 A
D. 当 A 重新可用后,将暂存的数据回传 A
答案：ABCD

29. EC2 的关键技术有____。
A. 弹性负载均衡
B. 自动缩放
C. 监控服务
D. 弹性 IP
答案：ABCD

30. 关于 S3 中的桶,说法正确的是____。
A. 桶不可以被嵌套,即在桶中不能创建桶。
B. Amazon 限制了每个用户创建桶的数量(100 个),但没有限制每个桶中对象的数量。
C. 桶的名称要求在整个 Amazon S3 的服务器中是全局唯一的。
D. 在对桶命名时,建议采用符合 DNS 要求的命名规则
答案：ABCD

31. S3 中支持对桶和对象的操作,主要包括____。
A. Get
B. Put
C. List
D. Delete
E. Head
F. Update
答案：ABCDE

32. 以下描述正确的是____。
A. 写入一个新的对象并立即读取它,一定能读取到该对象。
B. 写入一个新的对象并立即列出桶中已有的对象,该对象可能不会出现在列表中。
C. 用新数据替换现有的对象并立即读取它,可能读取到的还是原来的旧数据。
D. 删去现有的对象并立即读取它, 可能服务器还会返回被删除的数据。
E. 删去某个对象并立即列出桶中所有对象,列表中可能还会出现刚才已经删除的对象。
答案：BCDE

33. 访问 https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/dev/acl - overview.html,查找在对象上授予 READ ACL 权限的访问策略有____。
A. s3:GetObject
B. s3:GetObjectVersion
C. s3:GetObjectTorrent
D. s3:PutObject
E. s3:ListBucketVersions
F. s3:GetObjectAcl
答案：ABC

34. 关于非关系型数据库服务 SimpleDB 的描述,正确的有____。
A. 每个用户账户中的域名必须是唯一的，每个域中数据的大小具有一定的限制
B. SimpleDB 是 AWS 提供的一种数据库服务，无需下载安装，由 AWS 进行维护管理
C. 和关系数据库一样，SimpleDB 中需要事先定义条目的模式
D. 一个条目的某个属性中可以有多个值
E. 在 AWS 中，通常将相对大的数据对象存储在 S3 中，在 SimpleDB 中只保存指向某个特定对象的位置指针
答案：ABDE

35. 相对于 SimpleDB，DynamoDB 做了____优化。
A. DynamoDB 中取消了对表中数据大小的限制
B. 用户可以自定义 DynamoDB 表的大小，并由系统自动分配到多个服务器上
C. DynamoDB 不再固定使用最终一致性数据模型，而是允许用户选择弱一致性或者强一致性
D. DynamoDB 还在硬件上进行了优化，采用固态硬盘作为支撑，根据用户设定的读/写流量预设来确定数据分布的硬盘数量
答案：ABCD

36. 关于 MySQL 集群,以下说法正确的是____。
A. MySQL 集群方式采用了 Share - Nothing 架构。
B. 每台数据库服务器都是完全独立的计算机系统,通过网络相连,不共享任何资源。
C. 在一定的范围内解决了关系数据库的可扩展性问题。
D. 增加了数据库并发访问的能力。
E. 通过表单划分的方式,把一张大表划分为多张小表,表单划分时可以随意划分。
答案：ABCD

37. SQS 的基本模型包括____组成部分。
A. SQS
B. 组件
C. 队列
D. 消息
答案：BCD

38. SQS 中的系统组件实质上是____。
A. AWS 提供的各种服务对象
B. AWS 的硬件服务器
C. AWS 的虚拟服务器提供的各种服务
答案：AC

39. 关于 Amazon SQS,描述正确的是____。
A. 队列在传递消息时一定能够保证 “先进先出”
B. SQS 提供两种消息队列类型:Standard 和 SQS FIFO
C. 队列是存放消息的容器。
D. 队列的名称在一个 SQS 账户中必须唯一
答案：BCD

40. 传统网络服务模式缺陷有____。
A. 单台网站服务器可以容纳的访问量有限,当遇到热点问题或遭到攻击时,容易崩溃。
B. 没有考虑访问者的地域问题。
C. 不同网络服务提供商服务的用户之间的互访速度也会受到限制
D. 只能访问网站静态内容。
答案：ABC

41. 相较于传统网络服务模式,CDN 通过增加____来实现分流负载。
A. DNS 服务器
B. 边缘节点
C. 智能 DNS 负载均衡系统
D. 防火墙
答案：BC

42. CDN 访问模式的好处有____。
A. 将网站的服务流量以比较均匀的方式分散到边缘节点中,减轻了网站源服务器的负担。
B. 由于边缘节点与访问者的地理位置较近,访问速度快。
C. 智能 DNS 负载均衡系统和各个边缘节点之间始终保持着通信联系,可以确保分配给用户的边缘节点始终可用且在允许的流量范围之内。
D. 加速了网站动态内容的更新
答案：ABC
43. 关于 CloudFront 的描述,正确的是____。
A. CloudFront 适用于静态网站托管。
B. CloudFront 建立的网站服务采用的是最终一致性模型,边缘节点上的内容相较于源服务器上发布的内容,可能会有一定的延迟,所有边缘节点上的数据在同一时刻可能会出现不一致的情况。
C. 文件副本在边缘节点上的存放时间,默认 24 小时,到期自动删除。
答案：ABC
44. 当前版本的 Windows Azure 平台包括____组成部分。
A. Windows Azure
B. SQL Azure
C. Windows Azure AppFabric
D. Windows Azure Marketplace
答案：ABCD

**二、判断题（38 道）**

1. Google 分布式系统设计，没有直接实现一个包含 Paxos 算法的函数库，而是在 Paxos 算法的基础上设计了一个全新的 Chubby 锁服务。（  ）
答案：正确

2. 锁服务包括粗粒度锁服务和细粒度锁服务，两者的差异在于持有锁的时间，细粒度的锁持有时间比较长，从而可以减少因频繁换锁带来的系统开销，所以 Chubby 采用了细粒度锁服务。（  ）
答案：错误

3. ACL 被保存在节点元数据中，用户在进行操作时首先要通过 ACL 获取相应的权限。（  ）
答案：正确

4. 存储 Megastore 的 Bigtable 表的列名实际上是表名和属性名结合在一起得到的，不同实体组(根表或子表)中的实体可存储在同一个 Bigtable 中。（  ）
答案：正确

5. megastore 将副本保存在多个数据中心，通过 Paxos 保证各副本的读写一致性，通过协调者检测失效，通过本地读来实现快速读提高效率，通过 Chubby 锁提高协调者的可用性。（  ）
答案：正确

6. 在 Dapper 监控系统中，一棵监控树中所有区间的监控 id 号相同。 （  ）
答案：正确

7. 在 Dapper 监控系统中，多数监控树中的区间实质就是记录了一次 RPC 请求和应答过程。 （  ）
答案：正确

8. Google 的 Dremel 是第一个在嵌套数据模型基础上实现列存储的系统。（  ）
答案：正确

9. 为了保证稳定性，Amazon 的系统采用完全的分布式、去中心化的架构。（  ）
答案：正确

10. 每个虚拟节点上实际存储了分配给它的，以及备份的前 N - 1 个前驱虚拟节点的数据。通常，相邻虚拟节点位于不同区域的数据中心。（  ）
答案：正确

11. Dynamo 选择通过牺牲一致性来保证系统的可靠性和可用性，采用了最终一致性模型，任何时刻，用户都可以读到最新的一致的数据。（  ）
答案：错误

12. MySQL 集群通过主从备份和读副本技术，提高了可靠性和数据处理能力。（  ）
答案：正确

13. SQS 定期删除过期消息，是为了避免消息队列不断膨胀。（  ）
答案：正确

14. CDN 适用于大型企业，CloudFront 适用于中小型企业。（  ）
答案：正确

15. Windows Azure 只支持微软自己的操作系统 Window Serer。（  ）
答案：错误

16. Windows Azure 存储服务中，为了将负载分散到多个分区服务器和控制存储域内分区的总数，分区管理器可执行负载均衡、拆分、合并操作。（  ）
答案：正确

17. Windows Azure 中，Fabric 控制器是一个分布式应用，拥有对物理服务器、交换机、负载均衡器等各种资源的分配和管理权。（  ）
答案：正确

18. SQL Azure 数据同步包括，SQL Azure 数据库与本地 SQL Server 的数据同步，还包括 SQL Azure 数据库副本之间的数据同步。（  ）
答案：正确

19. 虚拟化技术的核心思想是利用软件或固件管理程序构成虚拟化层，把物理资源映射为虚拟资源。在虚拟资源上可以安装和部署多个虚拟机，实现多用户共享物理资源。（  ）
答案：正确

20. 虚拟机隔离是指虚拟机之间在没有授权许可的情况下，互相之间不可通信、不可联系的一种技术。（  ）
答案：正确

21. 存储虚拟化是将存储网络中的各个分散且异构的存储设备按照一定的策略，映射成一个统一的连续编址的逻辑存储空间，称为虚拟存储池。（  ）
答案：正确

22. 数据中心网络虚拟化分为核心层网络虚拟化、接入层网络虚拟化、虚拟机网络虚拟化三个方面。（  ）
答案：正确

23. 虚拟机网络虚拟化主要体现在虚拟网络交换机、物理网卡虚拟化。（  ）
答案：正确

24. 虚拟交换机的一端是与虚拟机相连的端口组，另一端是与虚拟机所在服务器上的物理以太网适配器相连的外部网络环境。（  ）
答案：正确

25. 对桌面进行升级，只需修改桌面镜像，高效方便。（  ）
答案：正确

26. 通过云桌面建设的机房相较基于 PC 建设的机房的优势有管理维护方便、成本低、桌面镜像升级快速方便。（  ）
答案：正确

27. 云计算的一大特征是无处不在的网络接入，没有高效的网络云计算就什么都不是，就不能提供很好的使用体验。（  ）
答案：正确

28. 要使端口组到达其他 VLAN 上的端口组，必须将 VLAN ID 设置为 4095。（  ）
答案：正确

29. 对于公有边缘节点，通常以小型数据中心的形式部署于地市及以下的自有机房。（  ）
答案：正确

30. 对于公有边缘节点，边缘连接网元和边缘云可以置于同一机房，也可以放置于不同机房。（  ）
答案：正确

31. -Saltstack 是基于 Python 语言开发。（  ）
答案：正确

32. 云计算是对并行计算、网格计算、分布式计算技术的发展与运用。（  ）
答案：正确

33. IaaS 计算实现机制中，系统管理模块的核心功能是负载均衡。（  ）
答案：正确

34. 云计算体系结构的资源管理模块负责资源管理、任务管理用户管理和安全管理等。（  ）
答案：正确

35. 与 SaaS 不同的，PaaS 这种“云”计算形式把开发环境或者运行平台也作为一种服务给用户提供。（  ）
答案：正确

36. 弹性云服务器 ECS 属于 IaaS 层服务。（  ）
答案：正确

37. 云监控服务 Cloud Eye 可以使伸缩组中每一个实例均可分配到应用程序流量。（  ）
答案：错误

38. 弹性负载均衡 ELB 可以使伸缩组中每一个实例均可分配到应用程序流量。（  ）
答案：正确`,Mu=`**一、单选题（30道）**

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
答案：ABCD`,ku=`**一、单选题（30 道）**

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
答案：ABCD `,Ou=`**一、单选题（30 道）**

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
答案：ABCD `,Iu=`**一、单选题（30 道）**

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
答案：ABCD `,Lu=`**一、单选题（60 道）**

1. 计算机系统中，冯·诺依曼结构的核心思想是（  ）。
A. 数据和指令分别存储
B. 数据和指令存储在同一存储器中，按地址访问
C. 采用多指令流单数据流
D. 采用流水线技术
答案：B

2. 计算机中，1GB 等于（  ）。
A. 1024B
B. 1024KB
C. 1024MB
D. 1024TB
答案：C

3. 定点数表示中，若采用原码表示，对于 8 位二进制数，能表示的数值范围是（  ）。
A. -127 ～ +127
B. -128 ～ +127
C. -127 ～ +128
D. -128 ～ +128
答案：A

4. 以下哪种寻址方式中，操作数的地址直接包含在指令中（  ）。
A. 直接寻址
B. 间接寻址
C. 寄存器寻址
D. 立即寻址
答案：A

5. CPU 中的控制器主要由（  ）组成。
A. 算术逻辑单元和通用寄存器
B. 程序计数器、指令寄存器和控制单元
C. 累加器和状态寄存器
D. 数据总线和地址总线
答案：B

6. 总线按功能分类，不包括（  ）。
A. 数据总线
B. 地址总线
C. 控制总线
D. 传输总线
答案：D

7. 微机系统中，BIOS 一般存储在（  ）。
A. 硬盘
B. 内存
C. ROM
D. 寄存器
答案：C

8. 数据结构中，链表相对于数组的优点是（  ）。
A. 存储密度高
B. 随机访问速度快
C. 插入和删除操作方便
D. 占用存储空间小
答案：C

9. 二叉树的前序遍历序列为 ABDCEF，中序遍历序列为 DBAECF，则后序遍历序列为（  ）。
A. DBECFA
B. DBEFCA
C. DEBFCA
D. DBEFCA
答案：A

10. 以下哪种排序算法在最坏情况下时间复杂度为 O(n²)且是稳定排序（  ）。
A. 冒泡排序
B. 快速排序
C. 希尔排序
D. 堆排序
答案：A

11. 计算机网络的拓扑结构中，可靠性最高的是（  ）。
A. 星型
B. 环型
C. 总线型
D. 网状型
答案：D

12. OSI 参考模型中，负责数据加密和解密的是（  ）层。
A. 网络
B. 传输
C. 表示
D. 应用
答案：C

13. 以下哪个 IP 地址属于 C 类地址（  ）。
A. 10.1.1.1
B. 172.16.1.1
C. 192.168.1.1
D. 224.1.1.1
答案：C

14. 操作系统的主要功能不包括（  ）。
A. 进程管理
B. 数据管理
C. 存储管理
D. 设备管理
答案：B

15. 进程在操作系统中有三种基本状态，不包括（  ）。
A. 就绪态
B. 运行态
C. 阻塞态
D. 终止态
答案：D

16. 关系数据库中，主键的作用是（  ）。
A. 唯一标识元组
B. 建立表之间的联系
C. 存储数据
D. 提高查询速度
答案：A

17. SQL 语言中，用于删除表的语句是（  ）。
A. DELETE
B. DROP
C. TRUNCATE
D. CLEAR
答案：B

18. 通信原理中，香农公式 C = Wlog₂(1 + S/N)，其中 S/N 表示（  ）。
A. 信号功率
B. 噪声功率
C. 信噪比
D. 带宽
答案：C

19. 模拟通信系统中，FM 信号的调制指数越大，则（  ）。
A. 频偏越小，带宽越小
B. 频偏越小，带宽越大
C. 频偏越大，带宽越小
D. 频偏越大，带宽越大
答案：D

20. 数字基带传输系统中，为了消除码间干扰，基带传输特性应满足（  ）。
A. 奈奎斯特第一准则
B. 香农定理
C. 抽样定理
D. 傅里叶变换特性
答案：A

21. 数字信号的载波传输中，QPSK 调制是一种（  ）进制数字调制方式。
A. 二
B. 四
C. 八
D. 十六
答案：B

22. 同步原理中，位同步的主要作用是（  ）。
A. 使接收端的本地载波与发送端的载波同频同相
B. 确定每个码元的起止时刻
C. 使接收端的帧同步信号与发送端的帧同步信号一致
D. 提高信号的功率
答案：B

23. 信道编码中，常用的检错码有（  ）。
A. 奇偶校验码
B. 卷积码
C. 汉明码
D. 以上都是
答案：A

24. 通信网理论基础中，链路层的协议不包括（  ）。
A. PPP
B. Ethernet
C. TCP
D. HDLC
答案：C

25. 网络层的路由算法中，动态路由算法是根据（  ）来动态调整路由的。
A. 网络管理员的配置
B. 网络拓扑结构的变化
C. 数据流量的大小
D. 传输层协议的要求
答案：B

26. 光纤通信中，光纤的数值孔径主要影响（  ）。
A. 光纤的传输速度
B. 光纤的弯曲程度
C. 光纤接收光的能力
D. 光纤的损耗
答案：C

27. 光发射机中，半导体激光器（LD）相对半导体发光二极管（LED）的优势在于（  ）。
A. 发光效率更高
B. 谱线宽度更窄
C. 价格更便宜
D. 寿命更长
答案：B

28. 光接收机的主要性能参数不包括（  ）。
A. 灵敏度
B. 动态范围
C. 发射功率
D. 误码率
答案：C

29. 数据挖掘的主要目的是（  ）。
A. 从大量数据中提取潜在有用的信息和知识
B. 存储海量数据
C. 传输数据
D. 加密数据
答案：A

30. 云计算的核心特征不包括（  ）。
A. 按需自助服务
B. 广泛的网络接入
C. 高成本
D. 资源池化
答案：C

31. 计算机组成原理中，高速缓存（Cache）与主存之间的映射方式不包括（  ）。
A. 直接映射
B. 间接映射
C. 全相联映射
D. 组相联映射
答案：B

32. 数据结构中，栈的应用不包括（  ）。
A. 表达式求值
B. 函数调用
C. 队列的实现
D. 括号匹配
答案：C

33. 计算机网络中，交换机工作在（  ）层。
A. 物理
B. 数据链路
C. 网络
D. 传输
答案：B

34. 操作系统中，虚拟存储器的作用是（  ）。
A. 提高外存的存取速度
B. 扩大主存的存储空间
C. 提高内存利用率
D. 提高 CPU 利用率
答案：B

35. 数据库系统中，视图可以（  ）。
A. 提高数据安全性
B. 独立存储数据
C. 提高数据更新速度
D. 替代基本表
答案：A

36. 通信原理中，信号的频谱分析中，傅里叶变换的作用是（  ）。
A. 将时域信号转换为频域信号
B. 将频域信号转换为时域信号
C. 计算信号的能量
D. 计算信号的功率
答案：A

37. 模拟通信系统中，AM 信号的带宽是调制信号带宽的（  ）。
A. 一倍
B. 两倍
C. 三倍
D. 四倍
答案：B

38. 数字基带传输中，常用的码型不包括（  ）。
A. 单极性不归零码
B. 双极性归零码
C. 曼彻斯特码
D. 调频码
答案：D

39. 数字信号的载波传输中，ASK 调制是通过改变载波的（  ）来传输信息。
A. 幅度
B. 频率
C. 相位
D. 带宽
答案：A

40. 通信网理论基础中，多址技术中基于码序列分割的是（  ）。
A. FDMA
B. TDMA
C. CDMA
D. SDMA
答案：C

41. 光纤通信系统中，光滤波器的作用是（  ）。
A. 滤除特定波长的光
B. 增强光信号的强度
C. 改变光信号的传播方向
D. 提高光信号的传输速度
答案：A

42. 数据仓库的特点不包括（  ）。
A. 面向主题
B. 集成性
C. 实时更新
D. 时变性
答案：C

43. 计算机组成原理中，指令系统的指令格式一般由（  ）组成。
A. 操作码和地址码
B. 数据码和控制码
C. 源操作数和目的操作数
D. 指令码和校验码
答案：A

44. 数据结构中，图的最短路径算法有（  ）。
A. 迪杰斯特拉算法
B. 弗洛伊德算法
C. 以上都是
D. 以上都不是
答案：C

45. 计算机网络中，应用层协议 HTTP 用于（  ）。
A. 文件传输
B. 电子邮件发送
C. 网页浏览
D. 远程登录
答案：C

46. 操作系统中，进程同步的主要目的是（  ）。
A. 提高进程的执行速度
B. 保证进程之间的协调运行
C. 减少进程的资源占用
D. 防止进程死锁
答案：B

47. 数据库系统中，关系数据库的完整性约束中，参照完整性是指（  ）。
A. 主键不能为空
B. 外键的值必须在主表中存在
C. 字段的值必须在指定范围内
D. 表中数据不能重复
答案：B

48. 通信原理中，信道容量与（  ）有关。
A. 带宽、信号功率和噪声功率
B. 仅带宽
C. 仅信号功率
D. 仅噪声功率
答案：A

49. 数字信号的载波传输中，PSK 调制比 ASK 调制抗噪声性能（  ）。
A. 更差
B. 相同
C. 更好
D. 无法比较
答案：C

50. 通信网理论基础中，网络可靠性定义中，常用的可靠性指标不包括（  ）。
A. 连通度
B. 可用度
C. 误码率
D. 故障间隔时间
答案：C

51. 光纤通信中，单模光纤的特点是（  ）。
A. 只能传输一种模式的光，传输带宽窄
B. 只能传输一种模式的光，传输带宽宽
C. 可以传输多种模式的光，传输带宽窄
D. 可以传输多种模式的光，传输带宽宽
答案：B

52. 云计算中，提供应用程序开发和运行环境的服务模式是（  ）。
A. IaaS（基础设施即服务）
B. PaaS（平台即服务）
C. SaaS（软件即服务）
D. DaaS（数据即服务）
答案：B

53. 计算机组成原理中，CPU 中的程序计数器（PC）的作用是（  ）。
A. 存储当前指令
B. 存储下一条要执行指令的地址
C. 存储操作数地址
D. 存储运算结果
答案：B

54. 数据结构中，二叉搜索树的查找效率与（  ）有关。
A. 树的高度
B. 节点的数量
C. 数据的分布
D. 以上都是
答案：D

55. 计算机网络安全中，防火墙的主要功能不包括（  ）。
A. 访问控制
B. 入侵检测
C. 数据加密
D. 防止网络攻击
答案：C

56. 操作系统中，设备管理的主要任务不包括（  ）。
A. 设备分配
B. 设备驱动
C. 设备存储
D. 设备回收
答案：C

57. 数据库系统中，SQL 语言中用于插入数据的语句是（  ）。
A. INSERT
B. UPDATE
C. SELECT
D. DELETE
答案：A

58. 通信原理中，随机过程的数字特征不包括（  ）。
A. 均值
B. 方差
C. 相关函数
D. 相位
答案：D

59. 数字基带传输系统中，均衡器的作用是（  ）。
A. 放大信号
B. 滤波信号
C. 补偿信道的失真
D. 提高信号的频率
答案：C

60. 人工智能中，机器学习的主要研究对象是（  ）。
A. 计算机程序
B. 数据
C. 算法
D. 模型
答案：B

**二、判断题（30 道）**

1. 计算机系统的层次结构中，高级语言编写的程序可以直接在硬件上运行。（  ）
答案：错误

2. 浮点数的表示范围比定点数大，但精度比定点数低。（  ）
答案：正确

3. 数据结构中的线性表可以为空表。（  ）
答案：正确

4. 二叉树是一种特殊的树，每个节点最多有两个子节点。（  ）
答案：正确

5. 计算机网络中，网络层的主要功能是实现不同网络之间的互联。（  ）
答案：正确

6. 操作系统是管理计算机硬件与软件资源的程序，同时也是计算机系统的内核与基石。（  ）
答案：正确

7. 关系数据库中，视图可以更新数据，但有一定的限制。（  ）
答案：错误

8. 通信原理中，所有的随机过程都是平稳随机过程。（  ）
答案：错误

9. 模拟通信系统中，FM 信号的抗噪声性能比 AM 信号好。（  ）
答案：正确

10. 数字基带传输系统中，码间干扰只与信道特性有关。（  ）
答案：错误

11. 数字信号的载波传输中，PSK 调制比 FSK 调制频谱利用率高。（  ）
答案：正确

12. 通信网理论基础中，动态路由算法能根据网络拓扑结构的变化自动调整路由。（  ）
答案：正确

13. 光纤通信中，多模光纤的传输距离比单模光纤长。（  ）
答案：错误

14. 数据仓库中的数据是实时更新的。（  ）
答案：错误

15. 云计算中，用户无需关心底层基础设施的管理和维护。（  ）
答案：正确

16. 计算机组成原理中，RISC 指令系统的指令数量比 CISC 少。（  ）
答案：正确

17. 数据结构中，栈和队列都是特殊的线性表。（  ）
答案：正确

18. 计算机网络安全中，加密技术可以完全杜绝网络攻击。（  ）
答案：错误

19. 操作系统中，虚拟存储器的存在提高了程序的执行速度。（  ）
答案：错误

20. 数据库系统中，主键可以有多个。（  ）
答案：错误

21. 通信原理中，信道编码会增加信息传输的冗余度，但能提高可靠性。（  ）
答案：正确

22. 数字信号的载波传输中，多进制数字调制的频谱利用率比二进制数字调制高。（  ）
答案：正确

23. 通信网理论基础中，多址技术是为了让多个用户共享通信资源。（  ）
答案：正确

24. 光纤通信中，光发射机的主要作用是将电信号转换为光信号。（  ）
答案：正确

25. 云计算的按需自助服务意味着用户可以无限制地使用资源。（  ）
答案：错误

26. 计算机组成原理中，Cache 的存在提高了 CPU 访问内存的速度，但可能存在数据不一致问题。（  ）
答案：正确

27. 数据结构中，图的遍历结果是唯一的。（  ）
答案：错误

28. 计算机网络中，传输层的 TCP 协议是面向连接的可靠协议，UDP 是无连接不可靠协议。（  ）
答案：正确

29. 操作系统中，进程调度算法的目标是使系统资源利用率最高且公平性最好。（  ）
答案：正确

30. 数据库系统中，数据库设计的第一步是逻辑结构设计。（  ）
答案：错误

**三、多选题（20 道）**

1. 计算机组成原理中，计算机的性能指标包括（  ）。
A. 主频
B. 字长
C. 存储容量
D. 运算速度
答案：ABCD

2. 数据结构中，线性表的存储结构有（  ）。
A. 顺序存储
B. 链式存储
C. 索引存储
D. 散列存储
答案：AB

3. 计算机网络中，网络拓扑结构有（  ）。
A. 星型
B. 环型
C. 总线型
D. 网状型
答案：ABCD

4. 操作系统的特征包括（  ）。
A. 并发性
B. 共享性
C. 虚拟性
D. 异步性
答案：ABCD

5. 关系数据库的完整性约束有（  ）。
A. 实体完整性
B. 参照完整性
C. 用户自定义完整性
D. 域完整性
答案：ABC

6. 通信原理中，模拟调制的方式有（  ）。
A. AM
B. FM
C. PM
D. DSB
答案：ABCD

7. 数字基带传输系统的主要组成部分包括（  ）。
A. 发送滤波器
B. 信道
C. 接收滤波器
D. 抽样判决器
答案：ABCD

8. 通信网理论基础中，网络层的主要功能有（  ）。
A. 路由选择
B. 分组转发
C. 拥塞控制
D. 网络互联
答案：ABCD

9. 光纤通信中，光纤通信器件包括（  ）。
A. 光放大器
B. 光耦合器
C. 光滤波器
D. 光检测器
答案：ABC

10. 云计算的服务模式有（  ）。
A. IaaS
B. PaaS
C. SaaS
D. DaaS
答案：ABC

11. 计算机组成原理中，指令系统的寻址方式有（  ）。
A. 直接寻址
B. 间接寻址
C. 寄存器寻址
D. 立即寻址
答案：ABCD

12. 数据结构中，树的遍历方式有（  ）。
A. 前序遍历
B. 中序遍历
C. 后序遍历
D. 层次遍历
答案：ABCD

13. 计算机网络中，网络安全技术有（  ）。
A. 防火墙
B. 加密技术
C. 入侵检测系统
D. 数字签名
答案：ABCD

14. 操作系统中，内存管理的功能包括（  ）。
A. 内存分配
B. 内存保护
C. 地址映射
D. 内存扩充
答案：ABCD

15. 数据库系统中，SQL 语言的功能有（  ）。
A. 数据定义
B. 数据查询
C. 数据操纵
D. 数据控制
答案：ABCD

16. 通信原理中，数字信号的载波传输方式有（  ）。
A. ASK
B. FSK
C. PSK
D. QAM
答案：ABCD

17. 通信网理论基础中，链路层的协议有（  ）。
A. PPP
B. Ethernet
C. HDLC
D. ATM
答案：ABC

18. 光纤通信中，光发射机的组成部分有（  ）。
A. 光源器件
B. 调制器
C. 驱动电路
D. 光放大器
答案：ABC

19. 人工智能中，机器学习的类型有（  ）。
A. 监督学习
B. 无监督学习
C. 半监督学习
D. 强化学习
答案：ABCD

20. 数据挖掘的常用算法包括（  ）。
A. 决策树算法
B. 神经网络算法
C. 支持向量机算法
D. 贝叶斯算法
答案：ABCD `,Fu=`**一、单选题（30 道）**

1. 光纤通信中，光纤的主要成分是（  ）。
A. 铜
B. 铝
C. 二氧化硅
D. 塑料
答案：C

2. 光纤的数值孔径主要影响（  ）。
A. 光纤的传输带宽
B. 光纤接收光的能力
C. 光纤的弯曲程度
D. 光纤的传输速度
答案：B

3. 单模光纤与多模光纤相比，（  ）。
A. 芯径较粗，传输距离短
B. 芯径较粗，传输距离长
C. 芯径较细，传输距离短
D. 芯径较细，传输距离长
答案：D

4. 以下哪种光源器件常用于光纤通信中的光发射机（  ）。
A. 白炽灯
B. 发光二极管（LED）
C. 激光二极管（LD）
D. 氙灯
答案：C

5. 半导体激光器（LD）相对半导体发光二极管（LED）的优势在于（  ）。
A. 发光效率更高
B. 谱线宽度更窄
C. 价格更便宜
D. 寿命更长
答案：B

6. 光发射机中，外调制器的主要作用是（  ）。
A. 提高光功率
B. 改变光的波长
C. 对光信号进行编码
D. 实现高速率、高质量的光信号调制
答案：D

7. 光检测器的主要作用是（  ）。
A. 将光信号转换为电信号
B. 将电信号转换为光信号
C. 放大光信号
D. 对光信号进行整形
答案：A

8. 以下哪种光检测器常用于光纤通信中的光接收机（  ）。
A. 光电二极管（PIN）
B. 光电倍增管（PMT）
C. 雪崩光电二极管（APD）
D. 光敏电阻
答案：C

9. 光接收机的主要性能参数不包括（  ）。
A. 灵敏度
B. 动态范围
C. 发射功率
D. 误码率
答案：C

10. 光纤通信器件中，光放大器的作用是（  ）。
A. 放大光信号功率
B. 改变光信号的波长
C. 对光信号进行滤波
D. 连接不同的光纤
答案：A

11. 半导体光放大器的工作原理是基于（  ）。
A. 受激辐射
B. 自发辐射
C. 光的折射
D. 光的反射
答案：A

12. 光耦合器的主要功能是（  ）。
A. 将光信号分成多路
B. 合并多路光信号
C. 隔离光信号
D. 调节光信号的频率
答案：A

13. 光纤通信系统中，光滤波器的作用是（  ）。
A. 滤除特定波长的光
B. 增强光信号的强度
C. 改变光信号的传播方向
D. 提高光信号的传输速度
答案：A

14. 光隔离器的主要作用是（  ）。
A. 防止光信号反射回光源
B. 隔离不同光纤之间的光信号
C. 保护光检测器免受强光损坏
D. 提高光信号的传输效率
答案：A

15. 光纤通信系统中，光环形器的作用是（  ）。
A. 实现光信号的单向传输
B. 增强光信号的稳定性
C. 调节光信号的相位
D. 降低光信号的损耗
答案：A

16. 光衰减器的作用是（  ）。
A. 降低光信号的功率
B. 提高光信号的功率
C. 改变光信号的频率
D. 改变光信号的波长
答案：A

17. 光纤连接器的主要作用是（  ）。
A. 连接不同的光纤
B. 固定光纤的位置
C. 保护光纤的端面
D. 增强光纤的强度
答案：A

18. 光开关的主要功能是（  ）。
A. 控制光信号的通断
B. 切换光信号的传输路径
C. 放大光信号
D. 改变光信号的偏振态
答案：B

19. 光纤通信系统的基本组成部分不包括（  ）。
A. 光发射机
B. 光接收机
C. 光分配器
D. 光纤
答案：C

20. 准同步数字体系（PDH）的主要缺点不包括（  ）。
A. 复用结构复杂
B. 缺乏国际标准
C. 上下路方便
D. 网络管理能力弱
答案：C

21. 同步数字体系（SDH）的帧结构中，用于管理和维护的字节位于（  ）。
A. 段开销（SOH）
B. 管理单元指针（AU - PTR）
C. 信息净负荷（Payload）
D. 通道开销（POH）
答案：A

22. 光传送网（OTN）的主要特点是（  ）。
A. 基于波长交叉连接
B. 只能传输模拟信号
C. 传输距离短
D. 不支持多种业务
答案：A

23. 在光纤通信系统设计中，考虑光纤损耗时，主要影响因素不包括（  ）。
A. 光纤的长度
B. 光信号的波长
C. 光纤的弯曲程度
D. 光信号的频率
答案：D

24. 光纤通信系统中，为了提高传输距离，可采用（  ）。
A. 增加光发射机功率
B. 提高光接收机灵敏度
C. 中间加光放大器
D. 以上都是
答案：D

25. 光纤的时延差主要是由（  ）引起的。
A. 光纤的折射率分布不均匀
B. 光纤的长度不同
C. 光信号的频率不同
D. 光信号的功率不同
答案：A

26. 制作光纤时，预制棒的质量对光纤的（  ）影响较大。
A. 传输带宽
B. 数值孔径
C. 损耗和色散
D. 弯曲半径
答案：C

27. 光发射机的消光比是指（  ）。
A. 光信号“1”码和“0”码的功率之比
B. 光信号“1”码和“0”码的幅度之比
C. 光信号“1”码和“0”码的频率之比
D. 光信号“1”码和“0”码的波长之比
答案：A

28. 光接收机的噪声主要来源于（  ）。
A. 光检测器的噪声
B. 前置放大器的噪声
C. 后置放大器的噪声
D. 以上都是
答案：D

29. 光纤通信中，色散补偿技术主要是为了克服（  ）。
A. 光纤损耗
B. 光纤色散
C. 光信号衰减
D. 光信号干扰
答案：B

30. 光通信系统中，误码率与（  ）有关。
A. 光信号的功率
B. 光接收机的性能
C. 光纤的传输特性
D. 以上都是
答案：D

**二、判断题（20 道）**

1. 光纤只能传输光信号，不能传输电信号。（  ）
答案：正确

2. 多模光纤的数值孔径比单模光纤大。（  ）
答案：正确

3. 半导体发光二极管（LED）的调制速度比半导体激光器（LD）快。（  ）
答案：错误

4. 光接收机的灵敏度越高，说明其能够检测到的光信号越弱。（  ）
答案：正确

5. 光放大器可以无限制地放大光信号功率。（  ）
答案：错误

6. 光耦合器只能将一路光信号分成两路。（  ）
答案：错误

7. 光纤通信系统中，光滤波器可以滤除所有不需要的光信号。（  ）
答案：错误

8. 光隔离器是双向器件，可以允许光信号双向传输。（  ）
答案：错误

9. 光纤连接器的连接损耗越小越好。（  ）
答案：正确

10. 准同步数字体系（PDH）在国际上有统一的标准。（  ）
答案：错误

11. 同步数字体系（SDH）的复用结构比准同步数字体系（PDH）简单。（  ）
答案：正确

12. 光传送网（OTN）是在同步数字体系（SDH）和波分复用（WDM）技术基础上发展起来的。（  ）
答案：正确

13. 光纤的损耗只与光纤的长度有关。（  ）
答案：错误

14. 增加光发射机的功率可以完全消除光纤通信系统中的误码。（  ）
答案：错误

15. 光纤的时延差会导致光信号的脉冲展宽。（  ）
答案：正确

16. 制作光纤时，预制棒的纯度对光纤的损耗影响不大。（  ）
答案：错误

17. 光发射机的消光比越大越好。（  ）
答案：错误

18. 光接收机的噪声会影响系统的误码率。（  ）
答案：正确

19. 光纤通信中，色散补偿技术可以完全消除色散的影响。（  ）
答案：错误

20. 光通信系统的性能只取决于光发射机和光接收机的性能。（  ）
答案：错误

**三、多选题（10 道）**

1. 光纤的类型包括（  ）。
A. 阶跃型光纤
B. 渐变型光纤
C. 单模光纤
D. 多模光纤
答案：ABCD

2. 光发射机的主要组成部分有（  ）。
A. 光源器件
B. 调制器
C. 驱动电路
D. 光放大器
答案：ABC

3. 光接收机的主要组成部分包括（  ）。
A. 光检测器
B. 前置放大器
C. 主放大器
D. 判决再生电路
答案：ABCD

4. 光纤通信器件中，属于无源器件的有（  ）。
A. 光耦合器
B. 光滤波器
C. 光隔离器
D. 光衰减器
答案：ABCD

5. 光纤通信系统的性能指标有（  ）。
A. 误码率
B. 传输距离
C. 带宽
D. 光功率
答案：ABCD

6. 同步数字体系（SDH）的优点有（  ）。
A. 标准统一
B. 复用灵活
C. 管理功能强大
D. 传输速率高
答案：ABC

7. 光传送网（OTN）的分层结构包括（  ）。
A. 光信道层（OCh）
B. 光复用段层（OMS）
C. 光传输段层（OTS）
D. 电层
答案：ABC

8. 光纤通信中，影响光纤损耗的因素有（  ）。
A. 吸收损耗
B. 散射损耗
C. 弯曲损耗
D. 连接损耗
答案：ABC

9. 光纤通信中，色散的类型有（  ）。
A. 模式色散
B. 材料色散
C. 波导色散
D. 偏振模色散
答案：ABCD

10. 光通信系统设计时需要考虑的因素有（  ）。
A. 光纤的特性
B. 光发射机和光接收机的性能
C. 传输距离和带宽要求
D. 系统的成本和可靠性
答案：ABCD `,Nu=`**一、单选题（30 道）**

1. 数据挖掘的主要目的是（  ）。
A. 从大量数据中提取潜在有用的信息和知识
B. 存储海量数据
C. 传输数据
D. 加密数据
答案：A

2. 以下哪种数据挖掘任务是用于预测未知数据的类别（  ）。
A. 分类
B. 聚类
C. 关联分析
D. 回归分析
答案：A

3. 云计算的核心特征不包括（  ）。
A. 按需自助服务
B. 广泛的网络接入
C. 高成本
D. 资源池化
答案：C

4. 在云计算中，提供应用程序开发和运行环境的服务模式是（  ）。
A. IaaS（基础设施即服务）
B. PaaS（平台即服务）
C. SaaS（软件即服务）
D. DaaS（数据即服务）
答案：B

5. 人工智能中，机器学习的主要研究对象是（  ）。
A. 计算机程序
B. 数据
C. 算法
D. 模型
答案：B

6. 深度学习的神经网络结构中，以下哪种结构可以处理序列数据（  ）。
A. 卷积神经网络（CNN）
B. 循环神经网络（RNN）
C. 全连接神经网络
D. 受限玻尔兹曼机
答案：B

7. 数据仓库的特点不包括（  ）。
A. 面向主题
B. 集成性
C. 实时更新
D. 时变性
答案：C

8. 云计算中，弹性扩展是指（  ）。
A. 根据用户需求自动增加或减少资源
B. 资源在不同用户之间共享
C. 资源可以在不同地区分布
D. 资源的成本可以弹性调整
答案：A

9. 在数据挖掘中，关联规则挖掘的典型算法是（  ）。
A. Apriori 算法
B. K-Means 算法
C. 决策树算法
D. 神经网络算法
答案：A

10. 人工智能中，以下哪种技术可以让机器自动识别图像中的物体（  ）。
A. 自然语言处理
B. 计算机视觉
C. 语音识别
D. 专家系统
答案：B

11. 云计算服务提供商中，以下属于国际知名的有（  ）。
A. 阿里云
B. 腾讯云
C. 亚马逊 AWS
D. 华为云
答案：C

12. 数据挖掘过程中的数据预处理不包括（  ）。
A. 数据清洗
B. 数据集成
C. 数据可视化
D. 数据变换
答案：C

13. 在机器学习中，监督学习需要（  ）。
A. 有标记的训练数据
B. 无标记的训练数据
C. 大量的计算资源
D. 先验知识
答案：A

14. 深度学习中，常用的优化算法不包括（  ）。
A. 梯度下降法
B. 随机梯度下降法
C. 牛顿法
D. 冒泡排序法
答案：D

15. 数据仓库的数据来源通常是（  ）。
A. 单一数据库
B. 多个异构数据源
C. 网络数据
D. 传感器数据
答案：B

16. 云计算中的多租户技术是指（  ）。
A. 多个用户共用一个账号
B. 多个用户共享同一组资源，但相互隔离
C. 多个用户可以同时访问不同的资源
D. 多个用户可以随意修改资源配置
答案：B

17. 数据挖掘在商业领域的应用不包括（  ）。
A. 客户细分
B. 市场预测
C. 员工管理
D. 风险管理
答案：C

18. 人工智能中，专家系统的核心组成部分是（  ）。
A. 数据库
B. 推理机
C. 传感器
D. 执行器
答案：B

19. 云计算的安全性主要面临的挑战不包括（  ）。
A. 数据泄露
B. 身份认证
C. 资源浪费
D. 网络攻击
答案：C

20. 在数据挖掘中，聚类分析的目的是（  ）。
A. 将数据分成不同的类别
B. 预测数据的未来值
C. 发现数据中的关联规则
D. 对数据进行降维处理
答案：A

21. 深度学习中的卷积神经网络主要应用于（  ）。
A. 语音识别
B. 文本分类
C. 图像识别与处理
D. 数据预测
答案：C

22. 数据仓库的架构模式不包括（  ）。
A. 星型架构
B. 雪花型架构
C. 总线型架构
D. 环形架构
答案：D

23. 云计算中，服务级别协议（SLA）主要规定了（  ）。
A. 云服务的价格
B. 云服务的功能
C. 云服务提供商和用户的权利和义务
D. 云服务的技术细节
答案：C

24. 数据挖掘中的分类算法评估指标不包括（  ）。
A. 准确率
B. 召回率
C. F1 值
D. 数据量
答案：D

25. 人工智能中，强化学习的主要特点是（  ）。
A. 基于奖励机制
B. 基于大量数据训练
C. 基于规则推理
D. 基于模型预测
答案：A

26. 云计算中，虚拟机的作用是（  ）。
A. 提高物理机的性能
B. 隔离不同用户的应用和数据
C. 存储大量数据
D. 加速数据处理
答案：B

27. 数据挖掘在医疗领域的应用有（  ）。
A. 疾病诊断
B. 药物研发
C. 医疗资源管理
D. 以上都是
答案：D

28. 深度学习中的循环神经网络在处理长序列数据时可能面临的问题是（  ）。
A. 计算复杂度过高
B. 梯度消失或梯度爆炸
C. 数据存储不足
D. 模型过拟合
答案：B

29. 数据仓库的元数据管理主要包括（  ）。
A. 数据定义、数据来源、数据转换规则等信息的管理
B. 数据存储管理
C. 数据备份管理
D. 数据加密管理
答案：A

30. 云计算的部署模式不包括（  ）。
A. 公有云
B. 私有云
C. 混合云
D. 联盟云
答案：D

**二、判断题（20 道）**

1. 数据挖掘就是简单的数据统计分析。（  ）
答案：错误

2. 云计算中，用户无需关心底层基础设施的管理和维护。（  ）
答案：正确

3. 机器学习是人工智能的一个分支领域。（  ）
答案：正确

4. 深度学习的模型训练不需要大量的数据。（  ）
答案：错误

5. 数据仓库中的数据是实时更新的。（  ）
答案：错误

6. 云计算的按需自助服务意味着用户可以无限制地使用资源。（  ）
答案：错误

7. 在数据挖掘中，关联分析只能发现简单的关联规则。（  ）
答案：错误

8. 人工智能中的计算机视觉只能识别图像，不能处理视频。（  ）
答案：错误

9. 云计算服务提供商对用户的数据安全负有全部责任。（  ）
答案：错误

10. 数据挖掘中的聚类分析结果是预先定义好的。（  ）
答案：错误

11. 深度学习中的神经网络结构是固定不变的。（  ）
答案：错误

12. 数据仓库的建立可以提高数据查询和分析的效率。（  ）
答案：正确

13. 云计算中的资源池化可以提高资源的利用率。（  ）
答案：正确

14. 机器学习中的无监督学习不需要任何先验知识。（  ）
答案：错误

15. 人工智能中的专家系统可以解决所有领域的问题。（  ）
答案：错误

16. 云计算的弹性扩展可以在短时间内完成资源的调配。（  ）
答案：正确

17. 数据挖掘在金融领域主要用于诈骗检测。（  ）
答案：错误

18. 深度学习中的模型评估只需要考虑准确率。（  ）
答案：错误

19. 数据仓库的星型架构比雪花型架构更复杂。（  ）
答案：错误

20. 云计算的混合云模式是将公有云和私有云完全隔离使用。（  ）
答案：错误

**三、多选题（10 道）**

1. 数据挖掘的常用算法包括（  ）。
A. 决策树算法
B. 神经网络算法
C. 支持向量机算法
D. 贝叶斯算法
答案：ABCD

2. 云计算的服务模式有（  ）。
A. IaaS
B. PaaS
C. SaaS
D. DaaS
答案：ABC

3. 人工智能的主要研究领域包括（  ）。
A. 机器学习
B. 计算机视觉
C. 自然语言处理
D. 专家系统
答案：ABCD

4. 数据仓库的主要组成部分有（  ）。
A. 数据源
B. 数据存储与管理
C. OLAP 服务器
D. 前端工具与应用
答案：ABCD

5. 云计算的特点包括（  ）。
A. 高可扩展性
B. 快速弹性
C. 按使用付费
D. 高可靠性
答案：ABCD

6. 数据挖掘在以下哪些领域有应用（  ）。
A. 电子商务
B. 教育
C. 交通
D. 娱乐
答案：ABCD

7. 机器学习的学习方式有（  ）。
A. 监督学习
B. 无监督学习
C. 半监督学习
D. 强化学习
答案：ABCD

8. 深度学习中的神经网络类型有（  ）。
A. 卷积神经网络
B. 循环神经网络
C. 递归神经网络
D. 自编码器
答案：ABCD

9. 数据仓库的数据加载方式有（  ）。
A. 全量加载
B. 增量加载
C. 实时加载
D. 定时加载
答案：ABD

10. 云计算的安全技术包括（  ）。
A. 数据加密
B. 身份认证
C. 访问控制
D. 网络安全
答案：ABCD `,Hu=`**一、单选题（30 道）**

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
答案：ABCD `,$u=`**一、单选题（30 道）**

1. 数据结构是指（  ）。
A. 数据元素的组织形式
B. 数据类型
C. 数据存储结构
D. 数据运算
答案：A

2. 以下数据结构中，不属于线性结构的是（  ）。
A. 数组
B. 链表
C. 栈
D. 二叉树
答案：D

3. 数组的特点是（  ）。
A. 插入和删除操作方便
B. 可以动态增长
C. 存储密度大，访问元素速度快
D. 不需要连续的存储空间
答案：C

4. 单向链表中，每个节点包含（  ）。
A. 数据域和指针域
B. 只有数据域
C. 只有指针域
D. 数据域、指针域和索引域
答案：A

5. 栈的操作特性是（  ）。
A. 先进先出
B. 先进后出
C. 随机进出
D. 只进不出
答案：B

6. 队列的操作特性是（  ）。
A. 先进先出
B. 先进后出
C. 随机进出
D. 只进不出
答案：A

7. 递归函数是指（  ）。
A. 函数内部调用自身的函数
B. 函数参数为函数指针的函数
C. 函数返回值为函数类型的函数
D. 函数体为空的函数
答案：A

8. 树是一种（  ）结构。
A. 线性
B. 非线性
C. 顺序
D. 链式
答案：B

9. 二叉树的每个节点最多有（  ）个子节点。
A. 1
B. 2
C. 3
D. 4
答案：B

10. 以下关于图的说法错误的是（  ）。
A. 图由顶点和边组成
B. 图可以分为有向图和无向图
C. 图的边可以有权值
D. 图的顶点之间必须有边相连
答案：D

11. 无向图的邻接矩阵是（  ）。
A. 对称矩阵
B. 三角矩阵
C. 对角矩阵
D. 稀疏矩阵
答案：A

12. 有向图的邻接表中，每个顶点的链表存储的是（  ）。
A. 以该顶点为起点的边的终点顶点
B. 以该顶点为终点的边的起点顶点
C. 与该顶点相邻的所有顶点
D. 与该顶点无关的顶点
答案：A

13. 排序算法中，时间复杂度为 O(n²)的是（  ）。
A. 冒泡排序
B. 快速排序
C. 归并排序
D. 希尔排序
答案：A

14. 快速排序的平均时间复杂度是（  ）。
A. O(n)
B. O(n log n)
C. O(n²)
D. O(log n)
答案：B

15. 归并排序采用的是（  ）思想。
A. 分治
B. 贪心
C. 动态规划
D. 回溯
答案：A

16. 散列函数的作用是（  ）。
A. 将关键字转换为存储地址
B. 对数据进行排序
C. 检查数据的完整性
D. 连接不同的数据结构
答案：A

17. 解决散列冲突的方法不包括（  ）。
A. 开放定址法
B. 链地址法
C. 再哈希法
D. 冒泡法
答案：D

18. 索引结构的主要目的是（  ）。
A. 提高数据的插入速度
B. 提高数据的删除速度
C. 提高数据的查询速度
D. 提高数据的存储密度
答案：C

19. 对于一个长度为 n 的有序数组进行二分查找，最坏情况下的时间复杂度是（  ）。
A. O(n)
B. O(n log n)
C. O(log n)
D. O(1)
答案：C

20. 链表中插入一个新节点的时间复杂度是（  ）。
A. O(1)
B. O(n)
C. O(n log n)
D. O(n²)
答案：A

21. 栈和队列通常采用的存储结构是（  ）。
A. 顺序存储结构
B. 链式存储结构
C. 索引存储结构
D. 散列存储结构
答案：A

22. 二叉搜索树的查找操作平均时间复杂度是（  ）。
A. O(n)
B. O(n log n)
C. O(log n)
D. O(1)
答案：C

23. 图的深度优先搜索遍历类似于树的（  ）遍历。
A. 前序
B. 中序
C. 后序
D. 层次
答案：A

24. 图的广度优先搜索遍历类似于树的（  ）遍历。
A. 前序
B. 中序
C. 后序
D. 层次
答案：D

25. 堆排序是一种（  ）排序算法。
A. 选择
B. 交换
C. 插入
D. 归并
答案：A

26. 线性表采用链式存储结构时，其地址（  ）。
A. 必须是连续的
B. 部分地址必须连续
C. 一定是不连续的
D. 连续与否均可以
答案：D

27. 以下哪种排序算法是稳定的排序算法（  ）。
A. 希尔排序
B. 快速排序
C. 归并排序
D. 选择排序
答案：C

28. 散列表中，装填因子越大，说明（  ）。
A. 散列表越空
B. 散列表越满
C. 散列冲突越少
D. 散列函数越好
答案：B

29. 在二叉树中，叶子节点是指（  ）。
A. 没有子节点的节点
B. 只有左子节点的节点
C. 只有右子节点的节点
D. 有两个子节点的节点
答案：A

30. 数据结构的评价标准不包括（  ）。
A. 时间复杂度
B. 空间复杂度
C. 数据存储密度
D. 数据可视化程度
答案：D

**二、判断题（20 道）**

1. 数据结构的选择只与数据的存储有关，与算法无关。（  ）
答案：错误

2. 链表的存储空间是连续的。（  ）
答案：错误

3. 栈和队列都是操作受限的线性表。（  ）
答案：正确

4. 递归算法一定比非递归算法效率高。（  ）
答案：错误

5. 二叉树的遍历结果是唯一的。（  ）
答案：错误

6. 无向图的边没有方向，所以不存在入度和出度的概念。（  ）
答案：正确

7. 排序算法的稳定性是指相同关键字的元素在排序前后相对位置不变。（  ）
答案：正确

8. 散列函数计算得到的地址一定不会发生冲突。（  ）
答案：错误

9. 索引结构会增加数据的存储开销。（  ）
答案：正确

10. 数组在内存中是按行优先存储的。（  ）
答案：正确

11. 链表中删除一个节点的时间复杂度一定是 O(1)。（  ）
答案：错误

12. 二叉搜索树的插入操作可能会破坏树的平衡性。（  ）
答案：正确

13. 图的最小生成树是唯一的。（  ）
答案：错误

14. 快速排序在最坏情况下的时间复杂度会退化为 O(n²)。（  ）
答案：正确

15. 归并排序需要额外的存储空间。（  ）
答案：正确

16. 散列表的查找效率主要取决于散列函数的设计。（  ）
答案：正确

17. 数据结构中的线性表可以为空。（  ）
答案：正确

18. 二叉树的高度最低为 1。（  ）
答案：错误

19. 图的遍历可以用于检测图是否连通。（  ）
答案：正确

20. 排序算法的时间复杂度和空间复杂度不能同时优化。（  ）
答案：错误

**三、多选题（10 道）**

1. 以下属于线性结构的数据结构有（  ）。
A. 数组
B. 链表
C. 栈
D. 队列
答案：ABCD

2. 二叉树的遍历方式有（  ）。
A. 前序遍历
B. 中序遍历
C. 后序遍历
D. 层次遍历
答案：ABCD

3. 排序算法的时间复杂度为 O(n log n)的有（  ）。
A. 快速排序
B. 归并排序
C. 堆排序
D. 希尔排序
答案：ABC

4. 解决散列冲突的方法有（  ）。
A. 开放定址法
B. 链地址法
C. 再哈希法
D. 线性探测法
答案：ABCD

5. 数据结构的存储方式有（  ）。
A. 顺序存储
B. 链式存储
C. 索引存储
D. 散列存储
答案：ABCD

6. 图的存储表示方式有（  ）。
A. 邻接矩阵
B. 邻接表
C. 十字链表
D. 邻接多重表
答案：ABCD

7. 以下关于栈的应用有（  ）。
A. 表达式求值
B. 函数调用
C. 括号匹配
D. 深度优先搜索
答案：ABCD

8. 队列的应用场景包括（  ）。
A. 操作系统中的进程调度
B. 打印任务排队
C. 广度优先搜索
D. 数据缓存
答案：ABCD

9. 影响散列表性能的因素有（  ）。
A. 散列函数
B. 装填因子
C. 处理冲突的方法
D. 数据元素的数量
答案：ABC

10. 数据结构在以下哪些领域有广泛应用（  ）。
A. 操作系统
B. 数据库管理系统
C. 编译器设计
D. 人工智能
答案：ABCD `,ju=`**一、单选题（30 道）**

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
答案：ABCD `,Qu=`**一、单选题（30 道）**

1. 通信系统中，信息传输的有效性通常用（  ）来衡量。
A. 误码率
B. 传输速率
C. 信噪比
D. 带宽
答案：B

2. 以下哪种信号的频谱是离散的（  ）。
A. 模拟信号
B. 数字信号
C. 周期信号
D. 非周期信号
答案：C

3. 功率信号的能量是（  ）。
A. 有限值
B. 无穷大
C. 零
D. 不确定
答案：B

4. 随机过程的数字特征不包括（  ）。
A. 均值
B. 方差
C. 相关函数
D. 相位
答案：D

5. 恒参信道对信号传输的影响主要是（  ）。
A. 多径衰落
B. 频率选择性衰落
C. 幅频失真和相频失真
D. 瑞利衰落
答案：C

6. 以下哪种调制方式属于幅度调制（  ）。
A. AM
B. FM
C. PM
D. PSK
答案：A

7. AM 信号的带宽是调制信号带宽的（  ）。
A. 一倍
B. 两倍
C. 三倍
D. 四倍
答案：B

8. FM 信号的抗噪声性能比 AM 信号（  ）。
A. 差
B. 相同
C. 好
D. 无法比较
答案：C

9. 数字基带传输系统中，常用的码型不包括（  ）。
A. 单极性不归零码
B. 双极性归零码
C. 曼彻斯特码
D. 调频码
答案：D

10. 数字基带传输中，无码间干扰的最高传输速率称为（  ）。
A. 波特率
B. 比特率
C. 奈奎斯特速率
D. 香农速率
答案：C

11. 眼图可以用来衡量数字基带传输系统的（  ）。
A. 传输速率
B. 误码率
C. 码间干扰和噪声的大小
D. 带宽
答案：C

12. 数字信号的载波传输中，ASK 调制是通过改变载波的（  ）来传输信息。
A. 幅度
B. 频率
C. 相位
D. 带宽
答案：A

13. PSK 调制与 ASK 调制相比，其抗噪声性能（  ）。
A. 更差
B. 相同
C. 更好
D. 不确定
答案：C

14. 多进制数字调制与二进制数字调制相比，其频谱利用率（  ）。
A. 更高
B. 更低
C. 相同
D. 无法比较
答案：A

15. 同步原理中，载波同步的目的是（  ）。
A. 使接收端的本地载波与发送端的载波同频同相
B. 使接收端的时钟与发送端的时钟同步
C. 使接收端的帧同步信号与发送端的帧同步信号一致
D. 使接收端的信号与发送端的信号幅度相同
答案：A

16. 位同步的主要作用是（  ）。
A. 确定每个码元的起止时刻
B. 确定帧的起止位置
C. 确定载波的频率和相位
D. 提高信号的功率
答案：A

17. 帧同步的实现方法不包括（  ）。
A. 起止式同步法
B. 连贯式插入法
C. 间隔式插入法
D. 随机式插入法
答案：D

18. 信道编码的目的是（  ）。
A. 提高信息传输的有效性
B. 提高信息传输的可靠性
C. 降低信息传输的速率
D. 改变信息的内容
答案：B

19. 有扰离散信道的编码定理表明，只要信息传输速率（  ）信道容量，就存在一种编码方法，使错误概率任意小。
A. 小于
B. 大于
C. 等于
D. 无关
答案：A

20. 最小码距与检错和纠错能力的关系是，最小码距越大，（  ）。
A. 检错能力越强，纠错能力越强
B. 检错能力越弱，纠错能力越强
C. 检错能力越强，纠错能力越弱
D. 检错能力越弱，纠错能力越弱
答案：A

21. 常用的检错码不包括（  ）。
A. 奇偶校验码
B. 循环冗余校验码
C. 汉明码
D. 卷积码
答案：D

22. 卷积码的特点是（  ）。
A. 编码效率高
B. 纠错能力强
C. 编码规则简单
D. 适用于长码块传输
答案：B

23. 信号的频谱分析中，傅里叶变换的作用是（  ）。
A. 将时域信号转换为频域信号
B. 将频域信号转换为时域信号
C. 计算信号的能量
D. 计算信号的功率
答案：A

24. 以下哪种信道属于随参信道（  ）。
A. 微波视距中继信道
B. 短波电离层反射信道
C. 同轴电缆信道
D. 光纤信道
答案：B

25. 香农公式 C = Wlog₂(1 + S/N)中，C 表示（  ）。
A. 信号功率
B. 噪声功率
C. 信道容量
D. 带宽
答案：C

26. 在数字信号的载波传输中，QPSK 是一种（  ）进制数字调制方式。
A. 二
B. 四
C. 八
D. 十六
答案：B

27. 数字基带传输系统中，均衡器的作用是（  ）。
A. 放大信号
B. 滤波信号
C. 补偿信道的失真
D. 提高信号的频率
答案：C

28. 通信原理中，信号的带宽与（  ）有关。
A. 信号的最高频率和最低频率
B. 信号的功率
C. 信号的相位
D. 信号的调制方式
答案：A

29. 以下哪种调制方式的频带利用率最高（  ）。
A. 2ASK
B. 2FSK
C. 2PSK
D. 4PSK
答案：D

30. 信道编码中的交织技术主要用于（  ）。
A. 提高编码效率
B. 分散突发错误
C. 增加码距
D. 降低编码复杂度
答案：B

**二、判断题（20 道）**

1. 模拟信号经过抽样后就变成了数字信号。（  ）
答案：错误

2. 能量信号的功率为零。（  ）
答案：错误

3. 随机过程在任意时刻的取值都是随机变量。（  ）
答案：正确

4. 恒参信道的传输特性不随时间变化。（  ）
答案：正确

5. 模拟通信系统中，调制的目的只是为了提高信号的频率。（  ）
答案：错误

6. FM 信号的带宽只与调制信号的幅度有关。（  ）
答案：错误

7. 数字基带传输系统中，码间干扰只与信道特性有关。（  ）
答案：错误

8. 眼图的“眼睛”张开越大，说明系统的性能越好。（  ）
答案：正确

9. 数字信号的载波传输中，ASK 调制的设备复杂度最低。（  ）
答案：正确

10. 多进制数字调制的抗噪声性能比二进制数字调制好。（  ）
答案：错误

11. 载波同步是实现相干解调的必要条件。（  ）
答案：正确

12. 位同步的精度要求比帧同步高。（  ）
答案：正确

13. 信道编码会增加信息传输的冗余度。（  ）
答案：正确

14. 最小码距为 3 时，可以纠正 1 位错误。（  ）
答案：正确

15. 卷积码是一种分组码。（  ）
答案：错误

16. 信号的频谱是唯一的。（  ）
答案：错误

17. 随参信道的衰落特性是可以预测的。（  ）
答案：错误

18. 香农公式给出了信道容量的上限。（  ）
答案：正确

19. 数字基带传输系统中，常用的码型都具有直流分量为零的特点。（  ）
答案：错误

20. 通信系统中，提高传输速率必然会降低传输的可靠性。（  ）
答案：错误

**三、多选题（10 道）**

1. 通信系统的主要性能指标包括（  ）。
A. 有效性
B. 可靠性
C. 安全性
D. 适应性
答案：AB

2. 以下属于确知信号的有（  ）。
A. 正弦波信号
B. 余弦波信号
C. 周期矩形脉冲信号
D. 随机噪声信号
答案：ABC

3. 信道的分类方式有（  ）。
A. 有线信道和无线信道
B. 恒参信道和随参信道
C. 模拟信道和数字信道
D. 单工信道和双工信道
答案：ABC

4. 模拟通信系统的组成部分包括（  ）。
A. 信源
B. 调制器
C. 信道
D. 解调器
答案：ABCD

5. 数字基带传输系统的主要组成部分有（  ）。
A. 发送滤波器
B. 信道
C. 接收滤波器
D. 抽样判决器
答案：ABCD

6. 数字信号的载波传输方式有（  ）。
A. ASK
B. FSK
C. PSK
D. QAM
答案：ABCD

7. 同步系统的类型包括（  ）。
A. 载波同步
B. 位同步
C. 帧同步
D. 网同步
答案：ABCD

8. 信道编码的分类有（  ）。
A. 分组码
B. 卷积码
C. 循环码
D. 交织码
答案：ABC

9. 以下关于信号频谱的说法正确的有（  ）。
A. 非周期信号的频谱是连续的
B. 周期信号的频谱是离散的
C. 信号的频谱反映了信号的频率组成
D. 信号的频谱与信号的幅度无关
答案：ABC

10. 通信原理中，影响信道容量的因素有（  ）。
A. 信道带宽
B. 信号功率
C. 噪声功率
D. 调制方式
答案：ABC `,zu=`**一、单选题（30 道）**

1. 通信网络的基本构成要素不包括（  ）。
A. 终端设备
B. 传输链路
C. 交换节点
D. 数据库服务器
答案：D

2. 在通信网协议体系中，负责数据链路的建立、维护和拆除的是（  ）层协议。
A. 物理层
B. 数据链路层
C. 网络层
D. 传输层
答案：B

3. 链路层的主要功能不包括（  ）。
A. 成帧
B. 差错控制
C. 路由选择
D. 流量控制
答案：C

4. 网络层的路由算法中，动态路由算法是根据（  ）来动态调整路由的。
A. 网络管理员的配置
B. 网络拓扑结构的变化
C. 数据流量的大小
D. 传输层协议的要求
答案：B

5. 以下哪种多址技术是基于时间分割的（  ）。
A. FDMA
B. TDMA
C. CDMA
D. SDMA
答案：B

6. 流量和拥塞控制的主要目的是（  ）。
A. 提高网络传输速度
B. 充分利用网络资源
C. 防止网络拥塞导致性能下降
D. 优化网络拓扑结构
答案：C

7. 通信网的拓扑设计主要考虑的因素不包括（  ）。
A. 可靠性
B. 成本
C. 传输介质类型
D. 可扩展性
答案：C

8. 数字通信网的特点不包括（  ）。
A. 抗干扰能力强
B. 易于加密
C. 传输带宽固定不变
D. 便于集成化
答案：C

9. ISDN 的基本速率接口（BRI）提供的信道包括（  ）。
A. 一个 B 信道和一个 D 信道
B. 两个 B 信道和一个 D 信道
C. 一个 B 信道和两个 D 信道
D. 两个 B 信道和两个 D 信道
答案：B

10. 移动通信系统中，基站与移动台之间的通信采用（  ）。
A. 单工通信方式
B. 半双工通信方式
C. 全双工通信方式
D. 不确定，根据具体业务而定
答案：C

11. 光通信中，光纤的主要传输特性不包括（  ）。
A. 损耗
B. 色散
C. 电磁干扰
D. 非线性效应
答案：C

12. 网络可靠性定义中，常用的可靠性指标不包括（  ）。
A. 连通度
B. 可用度
C. 误码率
D. 故障间隔时间
答案：C

13. 加密传输体系中，对称加密算法的特点是（  ）。
A. 加密和解密使用不同的密钥
B. 加密和解密使用相同的密钥
C. 加密速度慢，安全性高
D. 加密速度快，安全性低
答案：B

14. 在排队系统的延时模型中，平均排队延时与（  ）有关。
A. 到达率和服务率
B. 队列长度
C. 服务器数量
D. 传输介质带宽
答案：A

15. 通信网理论基础中，端到端传输协议主要保障（  ）。
A. 节点到节点的可靠传输
B. 整个通信路径的可靠传输
C. 数据链路层的高效传输
D. 网络层的快速路由
答案：B

16. 以下哪种网络拓扑结构在通信网中常用于骨干网络，以提供高可靠性（  ）。
A. 星型
B. 环型
C. 树型
D. 网状型
答案：D

17. 网络层的 IP 协议在通信网中的作用是（  ）。
A. 提供面向连接的可靠传输
B. 提供无连接的数据报服务，实现网络互联
C. 进行数据链路的控制和管理
D. 负责应用层数据的封装和传输
答案：B

18. 传输层的 TCP 协议在通信网中通过（  ）机制来保障数据的可靠传输。
A. 三次握手建立连接
B. 序列号与确认应答
C. 重传机制
D. 以上都是
答案：D

19. 通信网中，交换机的主要功能是（  ）。
A. 对信号进行放大和整形
B. 根据地址信息进行数据转发
C. 进行信号的调制和解调
D. 连接不同类型的传输链路
答案：B

20. 以下关于通信网发展动态的说法错误的是（  ）。
A. 朝着更高的传输速率发展
B. 更加注重网络安全和隐私保护
C. 网络架构逐渐趋于单一化
D. 与新兴技术如物联网、云计算融合加速
答案：C

21. 通信网中，路由算法的评价指标不包括（  ）。
A. 正确性
B. 简单性
C. 稳定性
D. 美观性
答案：D

22. 在 TDMA 系统中，每个用户在（  ）内占用特定的时隙进行通信。
A. 频率域
B. 时间域
C. 码域
D. 空间域
答案：B

23. 网络安全中的防火墙在通信网中的部署位置通常是（  ）。
A. 内部网络与外部网络之间
B. 服务器与交换机之间
C. 传输链路的中间节点
D. 终端设备内部
答案：A

24. 通信网中，流量整形的作用是（  ）。
A. 调整数据流量的大小
B. 改变数据流量的流向
C. 使数据流量符合特定的规范或要求
D. 提高数据流量的传输速度
答案：C

25. 光通信中的波分复用技术是在（  ）上实现多路信号的复用传输。
A. 时间域
B. 频率域
C. 码域
D. 空间域
答案：B

26. 通信网中，网络层的协议数据单元（PDU）称为（  ）。
A. 帧
B. 分组
C. 报文
D. 信元
答案：B

27. 以下哪种通信网技术适用于短距离、低功耗的通信场景（  ）。
A. Wi-Fi
B. 蓝牙
C. 4G
D. 光纤通信
答案：B

28. 通信网中，差错控制编码的主要目的是（  ）。
A. 检测和纠正传输过程中的错误
B. 提高数据传输的效率
C. 减少数据传输的延迟
D. 增强信号的抗干扰能力
答案：A

29. 网络层的 ICMP 协议在通信网中的作用是（  ）。
A. 报告网络层的差错和异常情况
B. 进行域名解析
C. 提供文件传输服务
D. 实现电子邮件的传输
答案：A

30. 通信网中，网络拓扑结构的选择会影响（  ）。
A. 网络的可靠性、成本和性能
B. 网络的传输介质类型
C. 网络的加密方式
D. 网络的应用层协议
答案：A

**二、判断题（20 道）**

1. 通信网络的协议体系是分层的，各层之间相互独立，没有关联。（  ）
答案：错误

2. 数据链路层的 PPP 协议主要用于广域网连接。（  ）
答案：正确

3. 动态路由算法比静态路由算法更能适应网络拓扑结构的变化，但消耗更多的网络资源。（  ）
答案：正确

4. FDMA 是将信道的总带宽划分为若干互不重叠的子频段，每个子频段分配给一个用户使用。（  ）
答案：正确

5. 通信网中的拥塞控制只需要考虑网络层的流量，与其他层无关。（  ）
答案：错误

6. 数字通信网的传输质量不受距离的影响。（  ）
答案：错误

7. ISDN 可以同时提供语音、数据和视频等多种业务。（  ）
答案：正确

8. 移动通信系统中的小区制可以有效提高频谱利用率和系统容量。（  ）
答案：正确

9. 光通信中，光纤的损耗越小，传输距离越远。（  ）
答案：正确

10. 网络可靠性只与网络设备的质量有关，与网络拓扑结构无关。（  ）
答案：错误

11. 非对称加密算法在加密传输体系中主要用于数字签名和密钥交换。（  ）
答案：正确

12. 排队系统中，到达率大于服务率时，队列会无限增长。（  ）
答案：错误

13. 通信网中的端到端传输协议只保障数据的正确传输，不考虑传输效率。（  ）
答案：错误

14. 星型拓扑结构的通信网中，中心节点的故障会导致整个网络瘫痪。（  ）
答案：正确

15. 网络层的 ARP 协议用于将 IP 地址解析为 MAC 地址。（  ）
答案：正确

16. 传输层的 UDP 协议在通信网中不提供任何可靠性保障，因此没有应用场景。（  ）
答案：错误

17. 通信网中的交换机可以根据网络层的 IP 地址进行数据转发。（  ）
答案：错误

18. 随着通信技术的发展，通信网的安全性已经得到了完全的保障。（  ）
答案：错误

19. 通信网中的流量控制和拥塞控制是同一个概念。（  ）
答案：错误

20. 光通信中的光放大器可以直接放大光信号的功率，而不需要将光信号转换为电信号。（  ）
答案：正确

**三、多选题（10 道）**

1. 通信网络的协议体系包括（  ）等层次。
A. 物理层
B. 数据链路层
C. 网络层
D. 传输层
E. 应用层
答案：ABCDE

2. 链路层的协议有（  ）。
A. Ethernet
B. PPP
C. HDLC
D. ATM
答案：ABC

3. 网络层的主要功能包括（  ）。
A. 路由选择
B. 分组转发
C. 拥塞控制
D. 网络互联
答案：ABCD

4. 多址技术包括（  ）。
A. FDMA
B. TDMA
C. CDMA
D. SDMA
答案：ABCD

5. 通信网的拓扑结构类型有（  ）。
A. 星型
B. 环型
C. 树型
D. 网状型
答案：ABCD

6. 数字通信网的优点有（  ）。
A. 抗干扰能力强
B. 易于加密
C. 便于集成化
D. 传输带宽灵活可变
答案：ABCD

7. 网络可靠性的保障措施包括（  ）。
A. 冗余设计
B. 备份机制
C. 网络监控
D. 容错技术
答案：ABCD

8. 加密传输体系中的加密算法类型有（  ）。
A. 对称加密算法
B. 非对称加密算法
C. 哈希算法
D. 序列算法
答案：AB

9. 通信网中的流量控制方法有（  ）。
A. 基于窗口的流量控制
B. 基于速率的流量控制
C. 基于信用的流量控制
D. 基于优先级的流量控制
答案：ABC

10. 光通信技术包括（  ）。
A. 光纤通信
B. 光传输网络
C. 光交换技术
D. 光接入技术
答案：ABCD `;function Uu(n){const e=n.split("**").filter(r=>r.trim()),t=[];let s="";return e.forEach(r=>{if(r.includes("单选题"))s="single";else if(r.includes("判断题"))s="boolean";else if(r.includes("多选题"))s="multiple";else if(r.trim()){const o=r.split(`
`).filter(i=>i.trim());o.forEach(i=>{if(i.match(/^\d+\./)){const c={type:s,content:i.replace(/^\d+\./,"").trim(),options:[],answer:""};if(s==="single"||s==="multiple"){const l=o.slice(o.indexOf(i)+1),f=[];for(const a of l)if(a.match(/^[A-Z]\./))f.push(a.trim());else if(a.includes("答案：")){s==="multiple"?c.answer=a.replace("答案：","").trim().split(""):c.answer=a.replace("答案：","").trim();break}c.options=f}else if(s==="boolean"){c.options=["正确","错误"];const l=o[o.indexOf(i)+1];l&&l.includes("答案：")&&(c.answer=l.replace("答案：","").trim())}t.push(c)}})}}),{title:"题库",category:"未分类",questions:t}}async function Ku(){var n;try{const e=[],t=Object.assign({"/quizbanks/云计算技术/云计算技术.md":Ru,"/quizbanks/南网信通专业知识基础练习/信息通信-1.md":Mu,"/quizbanks/南网信通专业知识基础练习/信息通信-2.md":ku,"/quizbanks/南网信通专业知识基础练习/信息通信-3.md":Ou,"/quizbanks/南网信通专业知识基础练习/信息通信-4.md":Iu,"/quizbanks/南网信通专业知识基础练习/信息通信考纲题-高难度.md":Lu,"/quizbanks/南网信通专业知识基础练习/光纤通信考点专项-1.md":Fu,"/quizbanks/南网信通专业知识基础练习/数字化新技术基础理专项-1.md":Nu,"/quizbanks/南网信通专业知识基础练习/数据库系统考点专项-1.md":Hu,"/quizbanks/南网信通专业知识基础练习/数据结构考点专项（偏概念）.md":$u,"/quizbanks/南网信通专业知识基础练习/计算机网络考点专项-1.md":ju,"/quizbanks/南网信通专业知识基础练习/通信原理考点专项-1.md":Qu,"/quizbanks/南网信通专业知识基础练习/通信网理论考点专项-1.md":zu});for(const[s,r]of Object.entries(t)){const o=s.split("/"),i=((n=o.pop())==null?void 0:n.replace(".md",""))||"",c=o.length>2?o[2]:"未分类",l=Uu(r);l.title=i,l.category=c,e.push(l)}return e}catch(e){return console.error("Failed to load quiz banks:",e),[]}}const Wu={class:"max-w-4xl mx-auto p-4 custom-scrollbar"},Vu={class:"grid grid-cols-1 gap-6"},Gu=["onClick"],qu={class:"flex items-center justify-between"},Yu={class:"text-xl font-semibold text-white"},Ju={class:"text-blue-100 text-sm mt-1"},Xu={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-4 animate-fadeIn"},Zu=["onClick"],nf={class:"text-lg font-semibold text-gray-800 dark:text-white"},ef={class:"text-gray-600 dark:text-gray-300 mt-1"},tf=Ve({__name:"QuizSelector",setup(n){const e=tr(),t=sr(),s=$n({}),r=$n(new Set);qt(async()=>{const c=await Ku();s.value=c.reduce((l,f)=>{const a=f.category||"未分类";return l[a]||(l[a]=[]),l[a].push(f),l},{})});const o=c=>{r.value.has(c)?r.value.delete(c):r.value.add(c)},i=c=>{t.setQuizBank(c),e.push("/quiz")};return(c,l)=>(un(),Cn("div",Wu,[l[1]||(l[1]=M("h1",{class:"text-2xl font-bold mb-6 text-gray-800 dark:text-white"},"选择题库",-1)),M("div",Vu,[(un(!0),Cn(Pn,null,rt(s.value,(f,a)=>(un(),Cn("div",{key:a},[M("div",{class:"bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 rounded-lg p-4 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5",onClick:d=>o(a)},[M("div",qu,[M("h2",Yu,_n(a),1),(un(),Cn("svg",{class:Zn(["w-6 h-6 transform transition-transform text-white",{"rotate-180":r.value.has(a)}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l[0]||(l[0]=[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))]),M("p",Ju,_n(f.length)+" 个题库",1)],8,Gu),Ll(M("div",Xu,[(un(!0),Cn(Pn,null,rt(f,d=>(un(),Cn("div",{key:d.title,class:"border rounded-lg p-4 cursor-pointer bg-white dark:bg-gray-700 hover:bg-green-50 dark:hover:bg-green-800 transition-all duration-300 shadow-sm hover:shadow-md",onClick:C=>i(d)},[M("h3",nf,_n(d.title),1),M("p",ef,"题数: "+_n(d.questions.length),1)],8,Zu))),128))],512),[[na,r.value.has(a)]])]))),128))])]))}}),zi=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},sf=zi(tf,[["__scopeId","data-v-cf40cb3b"]]),rf={class:"max-w-4xl mx-auto"},of={class:"mb-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3"},lf={class:"relative"},cf={class:"flex mb-2 items-center justify-between"},af={class:"text-sm font-medium text-blue-600 dark:text-blue-400"},uf={class:"h-3 bg-blue-100 dark:bg-blue-900 rounded-full"},ff={class:"p-4 border-b border-gray-200 dark:border-gray-700"},df={class:"flex justify-between items-center"},hf={class:"flex items-center gap-2"},Cf={class:"flex-1 overflow-y-auto p-4 custom-scrollbar"},Af={class:"grid grid-cols-5 gap-2"},pf=["onClick"],gf={key:0,class:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"},Df={key:1,class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg min-h-[600px] flex flex-col"},Bf={class:"flex-1 p-8 overflow-y-auto"},_f={class:"flex justify-between items-center mb-6"},mf={class:"flex items-center gap-4"},bf={class:"text-xl font-bold text-gray-800 dark:text-white"},vf={class:"flex items-center gap-4"},yf={class:"px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"},Sf={class:"text-lg mb-8 text-gray-700 dark:text-gray-200"},xf={class:"space-y-4"},Ef=["onClick"],Pf=["onClick"],wf={class:"border-t border-gray-100 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 rounded-b-xl"},Tf={class:"flex justify-between items-center max-w-2xl mx-auto"},Rf=["disabled"],Mf=["disabled"],kf={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},Of={class:"bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4"},If={class:"flex justify-end gap-4"},Lf=Ve({__name:"QuizQuestion",setup(n){const e=tr(),t=sr(),s=$n(!1),r=$n([]),o=$n(""),i=$n(!1),c=$n(!1),l=gn(()=>{var _;return(_=t.currentQuizBank)==null?void 0:_.questions[t.currentQuestionIndex]}),f=gn(()=>t.currentQuestionIndex),a=gn(()=>t.progress),d=gn(()=>t.currentQuizBank?f.value===t.currentQuizBank.questions.length-1:!1),C=gn(()=>{var _;return((_=t.currentQuizBank)==null?void 0:_.questions.length)||0});Ue(()=>f.value,_=>{const v=t.getSavedAnswer(_);v?(Array.isArray(v)?r.value=v:o.value=v,i.value=!0,s.value=!0):(r.value=[],o.value="",i.value=!1,s.value=!1)},{immediate:!0});const A=_=>{s.value||(o.value=_,i.value=!0,s.value=!0,t.submitAnswer(_))},y=()=>{!l.value||!i.value||(s.value=!0,t.submitAnswer(r.value))},P=()=>{d.value?c.value=!0:t.nextQuestion()},j=()=>{f.value>0&&t.previousQuestion()},N=_=>{var E,q,dn;if(!s.value)return"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const v=o.value===_,O=((E=l.value)==null?void 0:E.type)==="boolean"?((q=l.value)==null?void 0:q.answer)===_:(dn=l.value)==null?void 0:dn.answer.includes(_);return v&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":v&&!O?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!v&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},L=_=>{var E;if(!s.value)return r.value.includes(_)?"bg-blue-100 dark:bg-blue-900/50 border-blue-500 border text-gray-700 dark:text-gray-200":"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const v=r.value.includes(_),O=Array.isArray((E=l.value)==null?void 0:E.answer)&&l.value.answer.includes(_);return v&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":v&&!O?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!v&&O?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},F=_=>{if(s.value)return;const v=r.value.indexOf(_);v===-1?r.value.push(_):r.value.splice(v,1),i.value=r.value.length>0},R=$n(!1),U=gn(()=>t.markedQuestions.has(f.value)),Z=()=>{t.toggleMarkQuestion(f.value)},Y=_=>{t.jumpToQuestion(_),R.value=!1},W=()=>{c.value=!1,e.push("/result")};return(_,v)=>(un(),Cn("div",rf,[R.value?(un(),Cn("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:v[0]||(v[0]=O=>R.value=!1)})):we("",!0),M("div",of,[M("div",lf,[M("div",cf,[v[5]||(v[5]=M("span",{class:"text-sm font-medium text-blue-600 dark:text-blue-400"},"做题进度",-1)),M("span",af,_n(Math.round(a.value))+"%",1)]),M("div",uf,[M("div",{class:"h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500",style:Ut({width:`${a.value}%`})},null,4)])])]),M("div",{class:Zn(["fixed right-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 flex flex-col",R.value?"translate-x-0":"translate-x-full"]),style:{width:"300px"}},[M("div",ff,[M("div",df,[v[7]||(v[7]=M("h3",{class:"text-lg font-bold text-gray-800 dark:text-white"},"题目导航",-1)),M("div",hf,[M("button",{onClick:v[1]||(v[1]=O=>c.value=!0),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-2 py-1 rounded text-white text-sm font-semibold shadow-md hover:opacity-90"},"交卷"),M("button",{onClick:v[2]||(v[2]=O=>R.value=!1),class:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"},v[6]||(v[6]=[M("span",{class:"sr-only"},"关闭",-1),M("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))])])]),M("div",Cf,[M("div",Af,[(un(!0),Cn(Pn,null,rt(C.value,O=>(un(),Cn("button",{key:O-1,onClick:E=>Y(O-1),class:Zn(["w-10 h-10 rounded-lg flex items-center justify-center relative",[f.value===O-1?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 dark:text-gray-200",Un(t).userAnswers.has(O-1)&&Un(t).isAnswerCorrect(O-1)?"border-2 border-green-500":"",Un(t).userAnswers.has(O-1)&&!Un(t).isAnswerCorrect(O-1)?"border-2 border-red-500":""]])},[_i(_n(O)+" ",1),Un(t).markedQuestions.has(O-1)?(un(),Cn("span",gf)):we("",!0)],10,pf))),128))])])],2),l.value?(un(),Cn("div",Df,[M("div",Bf,[M("div",_f,[M("div",mf,[M("h2",bf," 第 "+_n(f.value+1)+" 题 ",1),M("button",{onClick:Z,class:Zn(["p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",{"text-red-500 dark:text-red-400":U.value}])},v[8]||(v[8]=[M("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})],-1)]),2)]),M("div",vf,[M("span",yf,_n(f.value+1)+" / "+_n(C.value),1),M("button",{onClick:v[3]||(v[3]=O=>R.value=!0),class:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"},v[9]||(v[9]=[M("svg",{class:"w-6 h-6 text-gray-600 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])]),M("p",Sf,_n(l.value.content),1),M("div",xf,[l.value.type==="single"||l.value.type==="boolean"?(un(!0),Cn(Pn,{key:0},rt(l.value.options,O=>(un(),Cn("div",{key:O,onClick:E=>A(l.value.type==="boolean"?O:O[0]),class:Zn(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[N(l.value.type==="boolean"?O:O[0])]])},_n(O),11,Ef))),128)):l.value.type==="multiple"?(un(!0),Cn(Pn,{key:1},rt(l.value.options,O=>(un(),Cn("div",{key:O,onClick:E=>F(O[0]),class:Zn(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[L(O[0])]])},_n(O),11,Pf))),128)):we("",!0)])]),M("div",wf,[M("div",Tf,[M("button",{onClick:j,disabled:f.value===0,class:Zn(["px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",f.value===0?"bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500":"bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"])}," 上一题 ",10,Rf),l.value.type==="multiple"&&!s.value?(un(),Cn("button",{key:0,onClick:y,disabled:!i.value,class:"px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"}," 确认答案 ",8,Mf)):we("",!0),M("button",{onClick:P,class:"px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"},_n(d.value?"完成":"下一题"),1)])])])):we("",!0),c.value?(un(),Cn("div",kf,[M("div",Of,[v[10]||(v[10]=M("h3",{class:"text-lg font-bold mb-4 text-gray-800 dark:text-white"},"确认交卷",-1)),v[11]||(v[11]=M("p",{class:"text-gray-600 dark:text-gray-300 mb-6"},"确定要交卷吗？请确认所有题目都已完成。",-1)),M("div",If,[M("button",{onClick:v[4]||(v[4]=O=>c.value=!1),class:"bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 rounded-lg"}," 取消 "),M("button",{onClick:W,class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90"}," 确认交卷 ")])])])):we("",!0)]))}}),Ff=zi(Lf,[["__scopeId","data-v-7b3d6a4e"]]),Nf={class:"max-w-4xl mx-auto p-4"},Hf={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"},$f={class:"space-y-6"},jf={class:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg p-6"},Qf={class:"text-center"},zf={class:"text-4xl font-bold text-blue-600 dark:text-blue-400"},Uf={class:"mt-2 text-gray-600 dark:text-gray-300"},Kf=Ve({__name:"QuizResult",setup(n){tr();const e=sr(),t=gn(()=>e.score),s=gn(()=>{var r;return((r=e.currentQuizBank)==null?void 0:r.questions.length)||0});return(r,o)=>(un(),Cn("div",Nf,[M("div",Hf,[o[0]||(o[0]=M("h2",{class:"text-2xl font-bold text-gray-800 dark:text-white mb-6"},"结果",-1)),M("div",$f,[M("div",jf,[M("div",Qf,[M("div",zf,_n(t.value)+" / "+_n(s.value),1),M("div",Uf," 正确率: "+_n(Math.round(t.value/s.value*100))+"% ",1)])])])])]))}}),Wf=wu({history:ru("/prv-shuati/"),routes:[{path:"/",component:sf},{path:"/quiz",component:Ff},{path:"/result",component:Kf}]}),Vf={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"},Gf={class:"bg-white dark:bg-gray-800 shadow-md"},qf={class:"max-w-4xl mx-auto p-4 flex justify-between items-center"},Yf={class:"flex items-center gap-4"},Jf={key:0,class:"w-6 h-6 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Xf={key:1,class:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Zf={class:"container mx-auto px-4 py-2"},nd=Ve({__name:"App",setup(n){const e=$n(!1),t=()=>{e.value=!e.value,e.value?(document.documentElement.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode","false"))};return qt(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.documentElement.classList.add("dark"))}),(s,r)=>{const o=Jl("router-view");return un(),Cn("div",Vf,[M("header",Gf,[M("div",qf,[r[3]||(r[3]=M("h1",{class:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"}," 小浩刷题系统 ",-1)),M("div",Yf,[M("button",{onClick:t,class:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"},[e.value?(un(),Cn("svg",Jf,r[1]||(r[1]=[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):(un(),Cn("svg",Xf,r[2]||(r[2]=[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])))]),s.$route.path!=="/"?(un(),Cn("button",{key:0,onClick:r[0]||(r[0]=i=>s.$router.push("/")),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow"}," 退出 ")):we("",!0)])])]),M("main",Zf,[Tn(o,null,{default:ys(({Component:i})=>[Tn(Gc,{name:"fade",mode:"out-in"},{default:ys(()=>[(un(),Di(Xl(i)))]),_:2},1024)]),_:1})])])}}}),rr=ga(nd);rr.use(ma());rr.use(Wf);rr.mount("#app");
