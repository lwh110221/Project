(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ns(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ln={},je=[],ee=()=>{},Ki=()=>!1,$t=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fs=n=>n.startsWith("onUpdate:"),Bn=Object.assign,$s=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},zi=Object.prototype.hasOwnProperty,tn=(n,e)=>zi.call(n,e),Q=Array.isArray,Ue=n=>Ht(n)==="[object Map]",io=n=>Ht(n)==="[object Set]",q=n=>typeof n=="function",Cn=n=>typeof n=="string",ve=n=>typeof n=="symbol",fn=n=>n!==null&&typeof n=="object",lo=n=>(fn(n)||q(n))&&q(n.then)&&q(n.catch),co=Object.prototype.toString,Ht=n=>co.call(n),Vi=n=>Ht(n).slice(8,-1),uo=n=>Ht(n)==="[object Object]",Hs=n=>Cn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,nt=Ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jt=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},qi=/-(\w)/g,Un=jt(n=>n.replace(qi,(e,t)=>t?t.toUpperCase():"")),Wi=/\B([A-Z])/g,Me=jt(n=>n.replace(Wi,"-$1").toLowerCase()),Ut=jt(n=>n.charAt(0).toUpperCase()+n.slice(1)),ts=jt(n=>n?`on${Ut(n)}`:""),Be=(n,e)=>!Object.is(n,e),ss=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ao=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Gi=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Yi=n=>{const e=Cn(n)?Number(n):NaN;return isNaN(e)?n:e};let lr;const Qt=()=>lr||(lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kt(n){if(Q(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=Cn(s)?nl(s):Kt(s);if(r)for(const o in r)e[o]=r[o]}return e}else if(Cn(n)||fn(n))return n}const Ji=/;(?![^(]*\))/g,Xi=/:([^]+)/,Zi=/\/\*[^]*?\*\//g;function nl(n){const e={};return n.replace(Zi,"").split(Ji).forEach(t=>{if(t){const s=t.split(Xi);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Zn(n){let e="";if(Cn(n))e=n;else if(Q(n))for(let t=0;t<n.length;t++){const s=Zn(n[t]);s&&(e+=s+" ")}else if(fn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const el="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tl=Ns(el);function fo(n){return!!n||n===""}const ho=n=>!!(n&&n.__v_isRef===!0),mn=n=>Cn(n)?n:n==null?"":Q(n)||fn(n)&&(n.toString===co||!q(n.toString))?ho(n)?mn(n.value):JSON.stringify(n,po,2):String(n),po=(n,e)=>ho(e)?po(n,e.value):Ue(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],o)=>(t[rs(s,o)+" =>"]=r,t),{})}:io(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>rs(t))}:ve(e)?rs(e):fn(e)&&!Q(e)&&!uo(e)?String(e):e,rs=(n,e="")=>{var t;return ve(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sn;class Co{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Sn,!e&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Sn;try{return Sn=this,e()}finally{Sn=t}}}on(){Sn=this}off(){Sn=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ao(n){return new Co(n)}function go(){return Sn}function sl(n,e=!1){Sn&&Sn.cleanups.push(n)}let un;const os=new WeakSet;class Bo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Sn&&Sn.active&&Sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,os.has(this)&&(os.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,cr(this),vo(this);const e=un,t=zn;un=this,zn=!0;try{return this.fn()}finally{bo(this),un=e,zn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qs(e);this.deps=this.depsTail=void 0,cr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?os.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ms(this)&&this.run()}get dirty(){return ms(this)}}let Do=0,et,tt;function mo(n,e=!1){if(n.flags|=8,e){n.next=tt,tt=n;return}n.next=et,et=n}function js(){Do++}function Us(){if(--Do>0)return;if(tt){let e=tt;for(tt=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;et;){let e=et;for(et=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function vo(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function bo(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Qs(s),rl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function ms(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_o(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function _o(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===at))return;n.globalVersion=at;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ms(n)){n.flags&=-3;return}const t=un,s=zn;un=n,zn=!0;try{vo(n);const r=n.fn(n._value);(e.version===0||Be(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{un=t,zn=s,bo(n),n.flags&=-3}}function Qs(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Qs(o,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function rl(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let zn=!0;const yo=[];function be(){yo.push(zn),zn=!1}function _e(){const n=yo.pop();zn=n===void 0?!0:n}function cr(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=un;un=void 0;try{e()}finally{un=t}}}let at=0;class ol{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ks{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!un||!zn||un===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==un)t=this.activeLink=new ol(un,this),un.deps?(t.prevDep=un.depsTail,un.depsTail.nextDep=t,un.depsTail=t):un.deps=un.depsTail=t,xo(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=un.depsTail,t.nextDep=void 0,un.depsTail.nextDep=t,un.depsTail=t,un.deps===t&&(un.deps=s)}return t}trigger(e){this.version++,at++,this.notify(e)}notify(e){js();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Us()}}}function xo(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)xo(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Tt=new WeakMap,Re=Symbol(""),vs=Symbol(""),ft=Symbol("");function bn(n,e,t){if(zn&&un){let s=Tt.get(n);s||Tt.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new Ks),r.map=s,r.key=t),r.track()}}function le(n,e,t,s,r,o){const i=Tt.get(n);if(!i){at++;return}const c=l=>{l&&l.trigger()};if(js(),e==="clear")i.forEach(c);else{const l=Q(n),f=l&&Hs(t);if(l&&t==="length"){const u=Number(s);i.forEach((d,p)=>{(p==="length"||p===ft||!ve(p)&&p>=u)&&c(d)})}else switch((t!==void 0||i.has(void 0))&&c(i.get(t)),f&&c(i.get(ft)),e){case"add":l?f&&c(i.get("length")):(c(i.get(Re)),Ue(n)&&c(i.get(vs)));break;case"delete":l||(c(i.get(Re)),Ue(n)&&c(i.get(vs)));break;case"set":Ue(n)&&c(i.get(Re));break}}Us()}function il(n,e){const t=Tt.get(n);return t&&t.get(e)}function Ne(n){const e=X(n);return e===n?e:(bn(e,"iterate",ft),jn(n)?e:e.map(_n))}function zt(n){return bn(n=X(n),"iterate",ft),n}const ll={__proto__:null,[Symbol.iterator](){return is(this,Symbol.iterator,_n)},concat(...n){return Ne(this).concat(...n.map(e=>Q(e)?Ne(e):e))},entries(){return is(this,"entries",n=>(n[1]=_n(n[1]),n))},every(n,e){return se(this,"every",n,e,void 0,arguments)},filter(n,e){return se(this,"filter",n,e,t=>t.map(_n),arguments)},find(n,e){return se(this,"find",n,e,_n,arguments)},findIndex(n,e){return se(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return se(this,"findLast",n,e,_n,arguments)},findLastIndex(n,e){return se(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return se(this,"forEach",n,e,void 0,arguments)},includes(...n){return ls(this,"includes",n)},indexOf(...n){return ls(this,"indexOf",n)},join(n){return Ne(this).join(n)},lastIndexOf(...n){return ls(this,"lastIndexOf",n)},map(n,e){return se(this,"map",n,e,void 0,arguments)},pop(){return Ge(this,"pop")},push(...n){return Ge(this,"push",n)},reduce(n,...e){return ur(this,"reduce",n,e)},reduceRight(n,...e){return ur(this,"reduceRight",n,e)},shift(){return Ge(this,"shift")},some(n,e){return se(this,"some",n,e,void 0,arguments)},splice(...n){return Ge(this,"splice",n)},toReversed(){return Ne(this).toReversed()},toSorted(n){return Ne(this).toSorted(n)},toSpliced(...n){return Ne(this).toSpliced(...n)},unshift(...n){return Ge(this,"unshift",n)},values(){return is(this,"values",_n)}};function is(n,e,t){const s=zt(n),r=s[e]();return s!==n&&!jn(n)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=t(o.value)),o}),r}const cl=Array.prototype;function se(n,e,t,s,r,o){const i=zt(n),c=i!==n&&!jn(n),l=i[e];if(l!==cl[e]){const d=l.apply(n,o);return c?_n(d):d}let f=t;i!==n&&(c?f=function(d,p){return t.call(this,_n(d),p,n)}:t.length>2&&(f=function(d,p){return t.call(this,d,p,n)}));const u=l.call(i,f,s);return c&&r?r(u):u}function ur(n,e,t,s){const r=zt(n);let o=t;return r!==n&&(jn(n)?t.length>3&&(o=function(i,c,l){return t.call(this,i,c,l,n)}):o=function(i,c,l){return t.call(this,i,_n(c),l,n)}),r[e](o,...s)}function ls(n,e,t){const s=X(n);bn(s,"iterate",ft);const r=s[e](...t);return(r===-1||r===!1)&&qs(t[0])?(t[0]=X(t[0]),s[e](...t)):r}function Ge(n,e,t=[]){be(),js();const s=X(n)[e].apply(n,t);return Us(),_e(),s}const ul=Ns("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ve));function al(n){ve(n)||(n=String(n));const e=X(this);return bn(e,"has",n),e.hasOwnProperty(n)}class wo{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(r?o?ml:Ro:o?To:Po).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const i=Q(e);if(!r){let l;if(i&&(l=ll[t]))return l;if(t==="hasOwnProperty")return al}const c=Reflect.get(e,t,An(e)?e:s);return(ve(t)?So.has(t):ul(t))||(r||bn(e,"get",t),o)?c:An(c)?i&&Hs(t)?c:c.value:fn(c)?r?ko(c):Dt(c):c}}class Eo extends wo{constructor(e=!1){super(!1,e)}set(e,t,s,r){let o=e[t];if(!this._isShallow){const l=ke(o);if(!jn(s)&&!ke(s)&&(o=X(o),s=X(s)),!Q(e)&&An(o)&&!An(s))return l?!1:(o.value=s,!0)}const i=Q(e)&&Hs(t)?Number(t)<e.length:tn(e,t),c=Reflect.set(e,t,s,An(e)?e:r);return e===X(r)&&(i?Be(s,o)&&le(e,"set",t,s):le(e,"add",t,s)),c}deleteProperty(e,t){const s=tn(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&le(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!ve(t)||!So.has(t))&&bn(e,"has",t),s}ownKeys(e){return bn(e,"iterate",Q(e)?"length":Re),Reflect.ownKeys(e)}}class fl extends wo{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dl=new Eo,hl=new fl,pl=new Eo(!0);const bs=n=>n,_t=n=>Reflect.getPrototypeOf(n);function Cl(n,e,t){return function(...s){const r=this.__v_raw,o=X(r),i=Ue(o),c=n==="entries"||n===Symbol.iterator&&i,l=n==="keys"&&i,f=r[n](...s),u=t?bs:e?_s:_n;return!e&&bn(o,"iterate",l?vs:Re),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function yt(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Al(n,e){const t={get(r){const o=this.__v_raw,i=X(o),c=X(r);n||(Be(r,c)&&bn(i,"get",r),bn(i,"get",c));const{has:l}=_t(i),f=e?bs:n?_s:_n;if(l.call(i,r))return f(o.get(r));if(l.call(i,c))return f(o.get(c));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!n&&bn(X(r),"iterate",Re),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=X(o),c=X(r);return n||(Be(r,c)&&bn(i,"has",r),bn(i,"has",c)),r===c?o.has(r):o.has(r)||o.has(c)},forEach(r,o){const i=this,c=i.__v_raw,l=X(c),f=e?bs:n?_s:_n;return!n&&bn(l,"iterate",Re),c.forEach((u,d)=>r.call(o,f(u),f(d),i))}};return Bn(t,n?{add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear")}:{add(r){!e&&!jn(r)&&!ke(r)&&(r=X(r));const o=X(this);return _t(o).has.call(o,r)||(o.add(r),le(o,"add",r,r)),this},set(r,o){!e&&!jn(o)&&!ke(o)&&(o=X(o));const i=X(this),{has:c,get:l}=_t(i);let f=c.call(i,r);f||(r=X(r),f=c.call(i,r));const u=l.call(i,r);return i.set(r,o),f?Be(o,u)&&le(i,"set",r,o):le(i,"add",r,o),this},delete(r){const o=X(this),{has:i,get:c}=_t(o);let l=i.call(o,r);l||(r=X(r),l=i.call(o,r)),c&&c.call(o,r);const f=o.delete(r);return l&&le(o,"delete",r,void 0),f},clear(){const r=X(this),o=r.size!==0,i=r.clear();return o&&le(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Cl(r,n,e)}),t}function zs(n,e){const t=Al(n,e);return(s,r,o)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(tn(t,r)&&r in s?t:s,r,o)}const gl={get:zs(!1,!1)},Bl={get:zs(!1,!0)},Dl={get:zs(!0,!1)};const Po=new WeakMap,To=new WeakMap,Ro=new WeakMap,ml=new WeakMap;function vl(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bl(n){return n.__v_skip||!Object.isExtensible(n)?0:vl(Vi(n))}function Dt(n){return ke(n)?n:Vs(n,!1,dl,gl,Po)}function Oo(n){return Vs(n,!1,pl,Bl,To)}function ko(n){return Vs(n,!0,hl,Dl,Ro)}function Vs(n,e,t,s,r){if(!fn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=r.get(n);if(o)return o;const i=bl(n);if(i===0)return n;const c=new Proxy(n,i===2?s:t);return r.set(n,c),c}function De(n){return ke(n)?De(n.__v_raw):!!(n&&n.__v_isReactive)}function ke(n){return!!(n&&n.__v_isReadonly)}function jn(n){return!!(n&&n.__v_isShallow)}function qs(n){return n?!!n.__v_raw:!1}function X(n){const e=n&&n.__v_raw;return e?X(e):n}function Ws(n){return!tn(n,"__v_skip")&&Object.isExtensible(n)&&ao(n,"__v_skip",!0),n}const _n=n=>fn(n)?Dt(n):n,_s=n=>fn(n)?ko(n):n;function An(n){return n?n.__v_isRef===!0:!1}function Hn(n){return Mo(n,!1)}function _l(n){return Mo(n,!0)}function Mo(n,e){return An(n)?n:new yl(n,e)}class yl{constructor(e,t){this.dep=new Ks,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:X(e),this._value=t?e:_n(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||jn(e)||ke(e);e=s?e:X(e),Be(e,t)&&(this._rawValue=e,this._value=s?e:_n(e),this.dep.trigger())}}function Kn(n){return An(n)?n.value:n}const xl={get:(n,e,t)=>e==="__v_raw"?n:Kn(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return An(r)&&!An(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function Io(n){return De(n)?n:new Proxy(n,xl)}function Sl(n){const e=Q(n)?new Array(n.length):{};for(const t in n)e[t]=El(n,t);return e}class wl{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return il(X(this._object),this._key)}}function El(n,e,t){const s=n[e];return An(s)?s:new wl(n,e,t)}class Pl{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ks(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=at-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&un!==this)return mo(this,!0),!0}get value(){const e=this.dep.track();return _o(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tl(n,e,t=!1){let s,r;return q(n)?s=n:(s=n.get,r=n.set),new Pl(s,r,t)}const xt={},Rt=new WeakMap;let Ee;function Rl(n,e=!1,t=Ee){if(t){let s=Rt.get(t);s||Rt.set(t,s=[]),s.push(n)}}function Ol(n,e,t=ln){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:c,call:l}=t,f=R=>r?R:jn(R)||r===!1||r===0?ce(R,1):ce(R);let u,d,p,C,y=!1,E=!1;if(An(n)?(d=()=>n.value,y=jn(n)):De(n)?(d=()=>f(n),y=!0):Q(n)?(E=!0,y=n.some(R=>De(R)||jn(R)),d=()=>n.map(R=>{if(An(R))return R.value;if(De(R))return f(R);if(q(R))return l?l(R,2):R()})):q(n)?e?d=l?()=>l(n,2):n:d=()=>{if(p){be();try{p()}finally{_e()}}const R=Ee;Ee=u;try{return l?l(n,3,[C]):n(C)}finally{Ee=R}}:d=ee,e&&r){const R=d,K=r===!0?1/0:r;d=()=>ce(R(),K)}const j=go(),F=()=>{u.stop(),j&&j.active&&$s(j.effects,u)};if(o&&e){const R=e;e=(...K)=>{R(...K),F()}}let L=E?new Array(n.length).fill(xt):xt;const N=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(e){const K=u.run();if(r||y||(E?K.some((Z,Y)=>Be(Z,L[Y])):Be(K,L))){p&&p();const Z=Ee;Ee=u;try{const Y=[K,L===xt?void 0:E&&L[0]===xt?[]:L,C];l?l(e,3,Y):e(...Y),L=K}finally{Ee=Z}}}else u.run()};return c&&c(N),u=new Bo(d),u.scheduler=i?()=>i(N,!1):N,C=R=>Rl(R,!1,u),p=u.onStop=()=>{const R=Rt.get(u);if(R){if(l)l(R,4);else for(const K of R)K();Rt.delete(u)}},e?s?N(!0):L=u.run():i?i(N.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function ce(n,e=1/0,t){if(e<=0||!fn(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,An(n))ce(n.value,e,t);else if(Q(n))for(let s=0;s<n.length;s++)ce(n[s],e,t);else if(io(n)||Ue(n))n.forEach(s=>{ce(s,e,t)});else if(uo(n)){for(const s in n)ce(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&ce(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mt(n,e,t,s){try{return s?n(...s):n()}catch(r){Vt(r,e,t)}}function qn(n,e,t,s){if(q(n)){const r=mt(n,e,t,s);return r&&lo(r)&&r.catch(o=>{Vt(o,e,t)}),r}if(Q(n)){const r=[];for(let o=0;o<n.length;o++)r.push(qn(n[o],e,t,s));return r}}function Vt(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=e&&e.appContext.config||ln;if(e){let c=e.parent;const l=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,f)===!1)return}c=c.parent}if(o){be(),mt(o,null,10,[n,l,f]),_e();return}}kl(n,t,r,s,i)}function kl(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const wn=[];let Xn=-1;const Qe=[];let pe=null,$e=0;const Lo=Promise.resolve();let Ot=null;function Gs(n){const e=Ot||Lo;return n?e.then(this?n.bind(this):n):e}function Ml(n){let e=Xn+1,t=wn.length;for(;e<t;){const s=e+t>>>1,r=wn[s],o=dt(r);o<n||o===n&&r.flags&2?e=s+1:t=s}return e}function Ys(n){if(!(n.flags&1)){const e=dt(n),t=wn[wn.length-1];!t||!(n.flags&2)&&e>=dt(t)?wn.push(n):wn.splice(Ml(e),0,n),n.flags|=1,No()}}function No(){Ot||(Ot=Lo.then($o))}function Il(n){Q(n)?Qe.push(...n):pe&&n.id===-1?pe.splice($e+1,0,n):n.flags&1||(Qe.push(n),n.flags|=1),No()}function ar(n,e,t=Xn+1){for(;t<wn.length;t++){const s=wn[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;wn.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Fo(n){if(Qe.length){const e=[...new Set(Qe)].sort((t,s)=>dt(t)-dt(s));if(Qe.length=0,pe){pe.push(...e);return}for(pe=e,$e=0;$e<pe.length;$e++){const t=pe[$e];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}pe=null,$e=0}}const dt=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $o(n){try{for(Xn=0;Xn<wn.length;Xn++){const e=wn[Xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mt(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xn<wn.length;Xn++){const e=wn[Xn];e&&(e.flags&=-2)}Xn=-1,wn.length=0,Fo(),Ot=null,(wn.length||Qe.length)&&$o()}}let Pn=null,Ho=null;function kt(n){const e=Pn;return Pn=n,Ho=n&&n.type.__scopeId||null,e}function ys(n,e=Pn,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&mr(-1);const o=kt(e);let i;try{i=n(...r)}finally{kt(o),s._d&&mr(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Ll(n,e){if(Pn===null)return n;const t=Xt(Pn),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[o,i,c,l=ln]=e[r];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&ce(i),s.push({dir:o,instance:t,value:i,oldValue:void 0,arg:c,modifiers:l}))}return n}function ye(n,e,t,s){const r=n.dirs,o=e&&e.dirs;for(let i=0;i<r.length;i++){const c=r[i];o&&(c.oldValue=o[i].value);let l=c.dir[s];l&&(be(),qn(l,t,8,[n.el,c,n,e]),_e())}}const Nl=Symbol("_vte"),jo=n=>n.__isTeleport,Ce=Symbol("_leaveCb"),St=Symbol("_enterCb");function Fl(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gt(()=>{n.isMounted=!0}),Go(()=>{n.isUnmounting=!0}),n}const $n=[Function,Array],Uo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},Qo=n=>{const e=n.subTree;return e.component?Qo(e.component):e},$l={name:"BaseTransition",props:Uo,setup(n,{slots:e}){const t=Ic(),s=Fl();return()=>{const r=e.default&&Vo(e.default(),!0);if(!r||!r.length)return;const o=Ko(r),i=X(n),{mode:c}=i;if(s.isLeaving)return cs(o);const l=fr(o);if(!l)return cs(o);let f=xs(l,i,s,t,d=>f=d);l.type!==On&&ht(l,f);let u=t.subTree&&fr(t.subTree);if(u&&u.type!==On&&!Te(l,u)&&Qo(t).type!==On){let d=xs(u,i,s,t);if(ht(u,d),c==="out-in"&&l.type!==On)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},cs(o);c==="in-out"&&l.type!==On?d.delayLeave=(p,C,y)=>{const E=zo(s,u);E[String(u.key)]=u,p[Ce]=()=>{C(),p[Ce]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{y(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Ko(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==On){e=t;break}}return e}const Hl=$l;function zo(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function xs(n,e,t,s,r){const{appear:o,mode:i,persisted:c=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:C,onAfterLeave:y,onLeaveCancelled:E,onBeforeAppear:j,onAppear:F,onAfterAppear:L,onAppearCancelled:N}=e,R=String(n.key),K=zo(t,n),Z=(m,_)=>{m&&qn(m,s,9,_)},Y=(m,_)=>{const M=_[1];Z(m,_),Q(m)?m.every(w=>w.length<=1)&&M():m.length<=1&&M()},V={mode:i,persisted:c,beforeEnter(m){let _=l;if(!t.isMounted)if(o)_=j||l;else return;m[Ce]&&m[Ce](!0);const M=K[R];M&&Te(n,M)&&M.el[Ce]&&M.el[Ce](),Z(_,[m])},enter(m){let _=f,M=u,w=d;if(!t.isMounted)if(o)_=F||f,M=L||u,w=N||d;else return;let G=!1;const dn=m[St]=yn=>{G||(G=!0,yn?Z(w,[m]):Z(M,[m]),V.delayedLeave&&V.delayedLeave(),m[St]=void 0)};_?Y(_,[m,dn]):dn()},leave(m,_){const M=String(n.key);if(m[St]&&m[St](!0),t.isUnmounting)return _();Z(p,[m]);let w=!1;const G=m[Ce]=dn=>{w||(w=!0,_(),dn?Z(E,[m]):Z(y,[m]),m[Ce]=void 0,K[M]===n&&delete K[M])};K[M]=n,C?Y(C,[m,G]):G()},clone(m){const _=xs(m,e,t,s,r);return r&&r(_),_}};return V}function cs(n){if(qt(n))return n=me(n),n.children=null,n}function fr(n){if(!qt(n))return jo(n.type)&&n.children?Ko(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&q(t.default))return t.default()}}function ht(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ht(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Vo(n,e=!1,t){let s=[],r=0;for(let o=0;o<n.length;o++){let i=n[o];const c=t==null?i.key:String(t)+String(i.key!=null?i.key:o);i.type===En?(i.patchFlag&128&&r++,s=s.concat(Vo(i.children,e,c))):(e||i.type!==On)&&s.push(c!=null?me(i,{key:c}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function qe(n,e){return q(n)?Bn({name:n.name},e,{setup:n}):n}function qo(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mt(n,e,t,s,r=!1){if(Q(n)){n.forEach((y,E)=>Mt(y,e&&(Q(e)?e[E]:e),t,s,r));return}if(st(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Mt(n,e,t,s.component.subTree);return}const o=s.shapeFlag&4?Xt(s.component):s.el,i=r?null:o,{i:c,r:l}=n,f=e&&e.r,u=c.refs===ln?c.refs={}:c.refs,d=c.setupState,p=X(d),C=d===ln?()=>!1:y=>tn(p,y);if(f!=null&&f!==l&&(Cn(f)?(u[f]=null,C(f)&&(d[f]=null)):An(f)&&(f.value=null)),q(l))mt(l,c,12,[i,u]);else{const y=Cn(l),E=An(l);if(y||E){const j=()=>{if(n.f){const F=y?C(l)?d[l]:u[l]:l.value;r?Q(F)&&$s(F,o):Q(F)?F.includes(o)||F.push(o):y?(u[l]=[o],C(l)&&(d[l]=u[l])):(l.value=[o],n.k&&(u[n.k]=l.value))}else y?(u[l]=i,C(l)&&(d[l]=i)):E&&(l.value=i,n.k&&(u[n.k]=i))};i?(j.id=-1,Ln(j,t)):j()}}}Qt().requestIdleCallback;Qt().cancelIdleCallback;const st=n=>!!n.type.__asyncLoader,qt=n=>n.type.__isKeepAlive;function jl(n,e){Wo(n,"a",e)}function Ul(n,e){Wo(n,"da",e)}function Wo(n,e,t=Dn){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Wt(e,s,t),t){let r=t.parent;for(;r&&r.parent;)qt(r.parent.vnode)&&Ql(s,e,t,r),r=r.parent}}function Ql(n,e,t,s){const r=Wt(e,n,s,!0);Yo(()=>{$s(s[e],r)},t)}function Wt(n,e,t=Dn,s=!1){if(t){const r=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...i)=>{be();const c=vt(t),l=qn(e,t,n,i);return c(),_e(),l});return s?r.unshift(o):r.push(o),o}}const ue=n=>(e,t=Dn)=>{(!Ct||n==="sp")&&Wt(n,(...s)=>e(...s),t)},Kl=ue("bm"),Gt=ue("m"),zl=ue("bu"),Vl=ue("u"),Go=ue("bum"),Yo=ue("um"),ql=ue("sp"),Wl=ue("rtg"),Gl=ue("rtc");function Yl(n,e=Dn){Wt("ec",n,e)}const Jo="components";function Jl(n,e){return Zo(Jo,n,!0,e)||n}const Xo=Symbol.for("v-ndc");function Xl(n){return Cn(n)?Zo(Jo,n,!1)||n:n||Xo}function Zo(n,e,t=!0,s=!1){const r=Pn||Dn;if(r){const o=r.type;{const c=Hc(o,!1);if(c&&(c===e||c===Un(e)||c===Ut(Un(e))))return o}const i=dr(r[n]||o[n],e)||dr(r.appContext[n],e);return!i&&s?o:i}}function dr(n,e){return n&&(n[e]||n[Un(e)]||n[Ut(Un(e))])}function rt(n,e,t,s){let r;const o=t,i=Q(n);if(i||Cn(n)){const c=i&&De(n);let l=!1;c&&(l=!jn(n),n=zt(n)),r=new Array(n.length);for(let f=0,u=n.length;f<u;f++)r[f]=e(l?_n(n[f]):n[f],f,void 0,o)}else if(typeof n=="number"){r=new Array(n);for(let c=0;c<n;c++)r[c]=e(c+1,c,void 0,o)}else if(fn(n))if(n[Symbol.iterator])r=Array.from(n,(c,l)=>e(c,l,void 0,o));else{const c=Object.keys(n);r=new Array(c.length);for(let l=0,f=c.length;l<f;l++){const u=c[l];r[l]=e(n[u],u,l,o)}}else r=[];return r}const Ss=n=>n?vi(n)?Xt(n):Ss(n.parent):null,ot=Bn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ss(n.parent),$root:n=>Ss(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Js(n),$forceUpdate:n=>n.f||(n.f=()=>{Ys(n.update)}),$nextTick:n=>n.n||(n.n=Gs.bind(n.proxy)),$watch:n=>mc.bind(n)}),us=(n,e)=>n!==ln&&!n.__isScriptSetup&&tn(n,e),Zl={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:o,accessCache:i,type:c,appContext:l}=n;let f;if(e[0]!=="$"){const C=i[e];if(C!==void 0)switch(C){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return o[e]}else{if(us(s,e))return i[e]=1,s[e];if(r!==ln&&tn(r,e))return i[e]=2,r[e];if((f=n.propsOptions[0])&&tn(f,e))return i[e]=3,o[e];if(t!==ln&&tn(t,e))return i[e]=4,t[e];ws&&(i[e]=0)}}const u=ot[e];let d,p;if(u)return e==="$attrs"&&bn(n.attrs,"get",""),u(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==ln&&tn(t,e))return i[e]=4,t[e];if(p=l.config.globalProperties,tn(p,e))return p[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:o}=n;return us(r,e)?(r[e]=t,!0):s!==ln&&tn(s,e)?(s[e]=t,!0):tn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:o}},i){let c;return!!t[i]||n!==ln&&tn(n,i)||us(e,i)||(c=o[0])&&tn(c,i)||tn(s,i)||tn(ot,i)||tn(r.config.globalProperties,i)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function hr(n){return Q(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ws=!0;function nc(n){const e=Js(n),t=n.proxy,s=n.ctx;ws=!1,e.beforeCreate&&pr(e.beforeCreate,n,"bc");const{data:r,computed:o,methods:i,watch:c,provide:l,inject:f,created:u,beforeMount:d,mounted:p,beforeUpdate:C,updated:y,activated:E,deactivated:j,beforeDestroy:F,beforeUnmount:L,destroyed:N,unmounted:R,render:K,renderTracked:Z,renderTriggered:Y,errorCaptured:V,serverPrefetch:m,expose:_,inheritAttrs:M,components:w,directives:G,filters:dn}=e;if(f&&ec(f,s,null),i)for(const W in i){const nn=i[W];q(nn)&&(s[W]=nn.bind(t))}if(r){const W=r.call(t,t);fn(W)&&(n.data=Dt(W))}if(ws=!0,o)for(const W in o){const nn=o[W],te=q(nn)?nn.bind(t,t):q(nn.get)?nn.get.bind(t,t):ee,ae=!q(nn)&&q(nn.set)?nn.set.bind(t):ee,Gn=gn({get:te,set:ae});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>Gn.value,set:Rn=>Gn.value=Rn})}if(c)for(const W in c)ni(c[W],s,t,W);if(l){const W=q(l)?l.call(t):l;Reflect.ownKeys(W).forEach(nn=>{wt(nn,W[nn])})}u&&pr(u,n,"c");function on(W,nn){Q(nn)?nn.forEach(te=>W(te.bind(t))):nn&&W(nn.bind(t))}if(on(Kl,d),on(Gt,p),on(zl,C),on(Vl,y),on(jl,E),on(Ul,j),on(Yl,V),on(Gl,Z),on(Wl,Y),on(Go,L),on(Yo,R),on(ql,m),Q(_))if(_.length){const W=n.exposed||(n.exposed={});_.forEach(nn=>{Object.defineProperty(W,nn,{get:()=>t[nn],set:te=>t[nn]=te})})}else n.exposed||(n.exposed={});K&&n.render===ee&&(n.render=K),M!=null&&(n.inheritAttrs=M),w&&(n.components=w),G&&(n.directives=G),m&&qo(n)}function ec(n,e,t=ee){Q(n)&&(n=Es(n));for(const s in n){const r=n[s];let o;fn(r)?"default"in r?o=Vn(r.from||s,r.default,!0):o=Vn(r.from||s):o=Vn(r),An(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):e[s]=o}}function pr(n,e,t){qn(Q(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function ni(n,e,t,s){let r=s.includes(".")?pi(t,s):()=>t[s];if(Cn(n)){const o=e[n];q(o)&&Ke(r,o)}else if(q(n))Ke(r,n.bind(t));else if(fn(n))if(Q(n))n.forEach(o=>ni(o,e,t,s));else{const o=q(n.handler)?n.handler.bind(t):e[n.handler];q(o)&&Ke(r,o,n)}}function Js(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=n.appContext,c=o.get(e);let l;return c?l=c:!r.length&&!t&&!s?l=e:(l={},r.length&&r.forEach(f=>It(l,f,i,!0)),It(l,e,i)),fn(e)&&o.set(e,l),l}function It(n,e,t,s=!1){const{mixins:r,extends:o}=e;o&&It(n,o,t,!0),r&&r.forEach(i=>It(n,i,t,!0));for(const i in e)if(!(s&&i==="expose")){const c=tc[i]||t&&t[i];n[i]=c?c(n[i],e[i]):e[i]}return n}const tc={data:Cr,props:Ar,emits:Ar,methods:Ze,computed:Ze,beforeCreate:xn,created:xn,beforeMount:xn,mounted:xn,beforeUpdate:xn,updated:xn,beforeDestroy:xn,beforeUnmount:xn,destroyed:xn,unmounted:xn,activated:xn,deactivated:xn,errorCaptured:xn,serverPrefetch:xn,components:Ze,directives:Ze,watch:rc,provide:Cr,inject:sc};function Cr(n,e){return e?n?function(){return Bn(q(n)?n.call(this,this):n,q(e)?e.call(this,this):e)}:e:n}function sc(n,e){return Ze(Es(n),Es(e))}function Es(n){if(Q(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function xn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ze(n,e){return n?Bn(Object.create(null),n,e):e}function Ar(n,e){return n?Q(n)&&Q(e)?[...new Set([...n,...e])]:Bn(Object.create(null),hr(n),hr(e??{})):e}function rc(n,e){if(!n)return e;if(!e)return n;const t=Bn(Object.create(null),n);for(const s in e)t[s]=xn(n[s],e[s]);return t}function ei(){return{app:null,config:{isNativeTag:Ki,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oc=0;function ic(n,e){return function(s,r=null){q(s)||(s=Bn({},s)),r!=null&&!fn(r)&&(r=null);const o=ei(),i=new WeakSet,c=[];let l=!1;const f=o.app={_uid:oc++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Uc,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&q(u.install)?(i.add(u),u.install(f,...d)):q(u)&&(i.add(u),u(f,...d))),f},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),f},component(u,d){return d?(o.components[u]=d,f):o.components[u]},directive(u,d){return d?(o.directives[u]=d,f):o.directives[u]},mount(u,d,p){if(!l){const C=f._ceVNode||Tn(s,r);return C.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(C,u):n(C,u,p),l=!0,f._container=u,u.__vue_app__=f,Xt(C.component)}},onUnmount(u){c.push(u)},unmount(){l&&(qn(c,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(u,d){return o.provides[u]=d,f},runWithContext(u){const d=Oe;Oe=f;try{return u()}finally{Oe=d}}};return f}}let Oe=null;function wt(n,e){if(Dn){let t=Dn.provides;const s=Dn.parent&&Dn.parent.provides;s===t&&(t=Dn.provides=Object.create(s)),t[n]=e}}function Vn(n,e,t=!1){const s=Dn||Pn;if(s||Oe){const r=Oe?Oe._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&q(e)?e.call(s&&s.proxy):e}}function lc(){return!!(Dn||Pn||Oe)}const ti={},si=()=>Object.create(ti),ri=n=>Object.getPrototypeOf(n)===ti;function cc(n,e,t,s=!1){const r={},o=si();n.propsDefaults=Object.create(null),oi(n,e,r,o);for(const i in n.propsOptions[0])i in r||(r[i]=void 0);t?n.props=s?r:Oo(r):n.type.props?n.props=r:n.props=o,n.attrs=o}function uc(n,e,t,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=n,c=X(r),[l]=n.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Yt(n.emitsOptions,p))continue;const C=e[p];if(l)if(tn(o,p))C!==o[p]&&(o[p]=C,f=!0);else{const y=Un(p);r[y]=Ps(l,c,y,C,n,!1)}else C!==o[p]&&(o[p]=C,f=!0)}}}else{oi(n,e,r,o)&&(f=!0);let u;for(const d in c)(!e||!tn(e,d)&&((u=Me(d))===d||!tn(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Ps(l,c,d,void 0,n,!0)):delete r[d]);if(o!==c)for(const d in o)(!e||!tn(e,d))&&(delete o[d],f=!0)}f&&le(n.attrs,"set","")}function oi(n,e,t,s){const[r,o]=n.propsOptions;let i=!1,c;if(e)for(let l in e){if(nt(l))continue;const f=e[l];let u;r&&tn(r,u=Un(l))?!o||!o.includes(u)?t[u]=f:(c||(c={}))[u]=f:Yt(n.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,i=!0)}if(o){const l=X(t),f=c||ln;for(let u=0;u<o.length;u++){const d=o[u];t[d]=Ps(r,l,d,f[d],n,!tn(f,d))}}return i}function Ps(n,e,t,s,r,o){const i=n[t];if(i!=null){const c=tn(i,"default");if(c&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&q(l)){const{propsDefaults:f}=r;if(t in f)s=f[t];else{const u=vt(r);s=f[t]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(t,s)}i[0]&&(o&&!c?s=!1:i[1]&&(s===""||s===Me(t))&&(s=!0))}return s}const ac=new WeakMap;function ii(n,e,t=!1){const s=t?ac:e.propsCache,r=s.get(n);if(r)return r;const o=n.props,i={},c=[];let l=!1;if(!q(n)){const u=d=>{l=!0;const[p,C]=ii(d,e,!0);Bn(i,p),C&&c.push(...C)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!o&&!l)return fn(n)&&s.set(n,je),je;if(Q(o))for(let u=0;u<o.length;u++){const d=Un(o[u]);gr(d)&&(i[d]=ln)}else if(o)for(const u in o){const d=Un(u);if(gr(d)){const p=o[u],C=i[d]=Q(p)||q(p)?{type:p}:Bn({},p),y=C.type;let E=!1,j=!0;if(Q(y))for(let F=0;F<y.length;++F){const L=y[F],N=q(L)&&L.name;if(N==="Boolean"){E=!0;break}else N==="String"&&(j=!1)}else E=q(y)&&y.name==="Boolean";C[0]=E,C[1]=j,(E||tn(C,"default"))&&c.push(d)}}const f=[i,c];return fn(n)&&s.set(n,f),f}function gr(n){return n[0]!=="$"&&!nt(n)}const li=n=>n[0]==="_"||n==="$stable",Xs=n=>Q(n)?n.map(ne):[ne(n)],fc=(n,e,t)=>{if(e._n)return e;const s=ys((...r)=>Xs(e(...r)),t);return s._c=!1,s},ci=(n,e,t)=>{const s=n._ctx;for(const r in n){if(li(r))continue;const o=n[r];if(q(o))e[r]=fc(r,o,s);else if(o!=null){const i=Xs(o);e[r]=()=>i}}},ui=(n,e)=>{const t=Xs(e);n.slots.default=()=>t},ai=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},dc=(n,e,t)=>{const s=n.slots=si();if(n.vnode.shapeFlag&32){const r=e._;r?(ai(s,e,t),t&&ao(s,"_",r,!0)):ci(e,s)}else e&&ui(n,e)},hc=(n,e,t)=>{const{vnode:s,slots:r}=n;let o=!0,i=ln;if(s.shapeFlag&32){const c=e._;c?t&&c===1?o=!1:ai(r,e,t):(o=!e.$stable,ci(e,r)),i=e}else e&&(ui(n,e),i={default:1});if(o)for(const c in r)!li(c)&&i[c]==null&&delete r[c]},Ln=wc;function pc(n){return Cc(n)}function Cc(n,e){const t=Qt();t.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:c,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:p,setScopeId:C=ee,insertStaticContent:y}=n,E=(a,h,A,D=null,g=null,v=null,P=void 0,S=null,x=!!h.dynamicChildren)=>{if(a===h)return;a&&!Te(a,h)&&(D=B(a),Rn(a,g,v,!0),a=null),h.patchFlag===-2&&(x=!1,h.dynamicChildren=null);const{type:b,ref:U,shapeFlag:k}=h;switch(b){case Jt:j(a,h,A,D);break;case On:F(a,h,A,D);break;case ds:a==null&&L(h,A,D,P);break;case En:w(a,h,A,D,g,v,P,S,x);break;default:k&1?K(a,h,A,D,g,v,P,S,x):k&6?G(a,h,A,D,g,v,P,S,x):(k&64||k&128)&&b.process(a,h,A,D,g,v,P,S,x,$)}U!=null&&g&&Mt(U,a&&a.ref,v,h||a,!h)},j=(a,h,A,D)=>{if(a==null)s(h.el=c(h.children),A,D);else{const g=h.el=a.el;h.children!==a.children&&f(g,h.children)}},F=(a,h,A,D)=>{a==null?s(h.el=l(h.children||""),A,D):h.el=a.el},L=(a,h,A,D)=>{[a.el,a.anchor]=y(a.children,h,A,D,a.el,a.anchor)},N=({el:a,anchor:h},A,D)=>{let g;for(;a&&a!==h;)g=p(a),s(a,A,D),a=g;s(h,A,D)},R=({el:a,anchor:h})=>{let A;for(;a&&a!==h;)A=p(a),r(a),a=A;r(h)},K=(a,h,A,D,g,v,P,S,x)=>{h.type==="svg"?P="svg":h.type==="math"&&(P="mathml"),a==null?Z(h,A,D,g,v,P,S,x):m(a,h,g,v,P,S,x)},Z=(a,h,A,D,g,v,P,S)=>{let x,b;const{props:U,shapeFlag:k,transition:H,dirs:z}=a;if(x=a.el=i(a.type,v,U&&U.is,U),k&8?u(x,a.children):k&16&&V(a.children,x,null,D,g,as(a,v),P,S),z&&ye(a,null,D,"created"),Y(x,a,a.scopeId,P,D),U){for(const cn in U)cn!=="value"&&!nt(cn)&&o(x,cn,null,U[cn],v,D);"value"in U&&o(x,"value",null,U.value,v),(b=U.onVnodeBeforeMount)&&Jn(b,D,a)}z&&ye(a,null,D,"beforeMount");const J=Ac(g,H);J&&H.beforeEnter(x),s(x,h,A),((b=U&&U.onVnodeMounted)||J||z)&&Ln(()=>{b&&Jn(b,D,a),J&&H.enter(x),z&&ye(a,null,D,"mounted")},g)},Y=(a,h,A,D,g)=>{if(A&&C(a,A),D)for(let v=0;v<D.length;v++)C(a,D[v]);if(g){let v=g.subTree;if(h===v||Ai(v.type)&&(v.ssContent===h||v.ssFallback===h)){const P=g.vnode;Y(a,P,P.scopeId,P.slotScopeIds,g.parent)}}},V=(a,h,A,D,g,v,P,S,x=0)=>{for(let b=x;b<a.length;b++){const U=a[b]=S?Ae(a[b]):ne(a[b]);E(null,U,h,A,D,g,v,P,S)}},m=(a,h,A,D,g,v,P)=>{const S=h.el=a.el;let{patchFlag:x,dynamicChildren:b,dirs:U}=h;x|=a.patchFlag&16;const k=a.props||ln,H=h.props||ln;let z;if(A&&xe(A,!1),(z=H.onVnodeBeforeUpdate)&&Jn(z,A,h,a),U&&ye(h,a,A,"beforeUpdate"),A&&xe(A,!0),(k.innerHTML&&H.innerHTML==null||k.textContent&&H.textContent==null)&&u(S,""),b?_(a.dynamicChildren,b,S,A,D,as(h,g),v):P||nn(a,h,S,null,A,D,as(h,g),v,!1),x>0){if(x&16)M(S,k,H,A,g);else if(x&2&&k.class!==H.class&&o(S,"class",null,H.class,g),x&4&&o(S,"style",k.style,H.style,g),x&8){const J=h.dynamicProps;for(let cn=0;cn<J.length;cn++){const rn=J[cn],kn=k[rn],vn=H[rn];(vn!==kn||rn==="value")&&o(S,rn,kn,vn,g,A)}}x&1&&a.children!==h.children&&u(S,h.children)}else!P&&b==null&&M(S,k,H,A,g);((z=H.onVnodeUpdated)||U)&&Ln(()=>{z&&Jn(z,A,h,a),U&&ye(h,a,A,"updated")},D)},_=(a,h,A,D,g,v,P)=>{for(let S=0;S<h.length;S++){const x=a[S],b=h[S],U=x.el&&(x.type===En||!Te(x,b)||x.shapeFlag&70)?d(x.el):A;E(x,b,U,null,D,g,v,P,!0)}},M=(a,h,A,D,g)=>{if(h!==A){if(h!==ln)for(const v in h)!nt(v)&&!(v in A)&&o(a,v,h[v],null,g,D);for(const v in A){if(nt(v))continue;const P=A[v],S=h[v];P!==S&&v!=="value"&&o(a,v,S,P,g,D)}"value"in A&&o(a,"value",h.value,A.value,g)}},w=(a,h,A,D,g,v,P,S,x)=>{const b=h.el=a?a.el:c(""),U=h.anchor=a?a.anchor:c("");let{patchFlag:k,dynamicChildren:H,slotScopeIds:z}=h;z&&(S=S?S.concat(z):z),a==null?(s(b,A,D),s(U,A,D),V(h.children||[],A,U,g,v,P,S,x)):k>0&&k&64&&H&&a.dynamicChildren?(_(a.dynamicChildren,H,A,g,v,P,S),(h.key!=null||g&&h===g.subTree)&&fi(a,h,!0)):nn(a,h,A,U,g,v,P,S,x)},G=(a,h,A,D,g,v,P,S,x)=>{h.slotScopeIds=S,a==null?h.shapeFlag&512?g.ctx.activate(h,A,D,P,x):dn(h,A,D,g,v,P,x):yn(a,h,x)},dn=(a,h,A,D,g,v,P)=>{const S=a.component=Mc(a,D,g);if(qt(a)&&(S.ctx.renderer=$),Lc(S,!1,P),S.asyncDep){if(g&&g.registerDep(S,on,P),!a.el){const x=S.subTree=Tn(On);F(null,x,h,A)}}else on(S,a,h,A,g,v,P)},yn=(a,h,A)=>{const D=h.component=a.component;if(xc(a,h,A))if(D.asyncDep&&!D.asyncResolved){W(D,h,A);return}else D.next=h,D.update();else h.el=a.el,D.vnode=h},on=(a,h,A,D,g,v,P)=>{const S=()=>{if(a.isMounted){let{next:k,bu:H,u:z,parent:J,vnode:cn}=a;{const Mn=di(a);if(Mn){k&&(k.el=cn.el,W(a,k,P)),Mn.asyncDep.then(()=>{a.isUnmounted||S()});return}}let rn=k,kn;xe(a,!1),k?(k.el=cn.el,W(a,k,P)):k=cn,H&&ss(H),(kn=k.props&&k.props.onVnodeBeforeUpdate)&&Jn(kn,J,k,cn),xe(a,!0);const vn=fs(a),Qn=a.subTree;a.subTree=vn,E(Qn,vn,d(Qn.el),B(Qn),a,g,v),k.el=vn.el,rn===null&&Sc(a,vn.el),z&&Ln(z,g),(kn=k.props&&k.props.onVnodeUpdated)&&Ln(()=>Jn(kn,J,k,cn),g)}else{let k;const{el:H,props:z}=h,{bm:J,m:cn,parent:rn,root:kn,type:vn}=a,Qn=st(h);if(xe(a,!1),J&&ss(J),!Qn&&(k=z&&z.onVnodeBeforeMount)&&Jn(k,rn,h),xe(a,!0),H&&hn){const Mn=()=>{a.subTree=fs(a),hn(H,a.subTree,a,g,null)};Qn&&vn.__asyncHydrate?vn.__asyncHydrate(H,a,Mn):Mn()}else{kn.ce&&kn.ce._injectChildStyle(vn);const Mn=a.subTree=fs(a);E(null,Mn,A,D,a,g,v),h.el=Mn.el}if(cn&&Ln(cn,g),!Qn&&(k=z&&z.onVnodeMounted)){const Mn=h;Ln(()=>Jn(k,rn,Mn),g)}(h.shapeFlag&256||rn&&st(rn.vnode)&&rn.vnode.shapeFlag&256)&&a.a&&Ln(a.a,g),a.isMounted=!0,h=A=D=null}};a.scope.on();const x=a.effect=new Bo(S);a.scope.off();const b=a.update=x.run.bind(x),U=a.job=x.runIfDirty.bind(x);U.i=a,U.id=a.uid,x.scheduler=()=>Ys(U),xe(a,!0),b()},W=(a,h,A)=>{h.component=a;const D=a.vnode.props;a.vnode=h,a.next=null,uc(a,h.props,D,A),hc(a,h.children,A),be(),ar(a),_e()},nn=(a,h,A,D,g,v,P,S,x=!1)=>{const b=a&&a.children,U=a?a.shapeFlag:0,k=h.children,{patchFlag:H,shapeFlag:z}=h;if(H>0){if(H&128){ae(b,k,A,D,g,v,P,S,x);return}else if(H&256){te(b,k,A,D,g,v,P,S,x);return}}z&8?(U&16&&Fn(b,g,v),k!==b&&u(A,k)):U&16?z&16?ae(b,k,A,D,g,v,P,S,x):Fn(b,g,v,!0):(U&8&&u(A,""),z&16&&V(k,A,D,g,v,P,S,x))},te=(a,h,A,D,g,v,P,S,x)=>{a=a||je,h=h||je;const b=a.length,U=h.length,k=Math.min(b,U);let H;for(H=0;H<k;H++){const z=h[H]=x?Ae(h[H]):ne(h[H]);E(a[H],z,A,null,g,v,P,S,x)}b>U?Fn(a,g,v,!0,!1,k):V(h,A,D,g,v,P,S,x,k)},ae=(a,h,A,D,g,v,P,S,x)=>{let b=0;const U=h.length;let k=a.length-1,H=U-1;for(;b<=k&&b<=H;){const z=a[b],J=h[b]=x?Ae(h[b]):ne(h[b]);if(Te(z,J))E(z,J,A,null,g,v,P,S,x);else break;b++}for(;b<=k&&b<=H;){const z=a[k],J=h[H]=x?Ae(h[H]):ne(h[H]);if(Te(z,J))E(z,J,A,null,g,v,P,S,x);else break;k--,H--}if(b>k){if(b<=H){const z=H+1,J=z<U?h[z].el:D;for(;b<=H;)E(null,h[b]=x?Ae(h[b]):ne(h[b]),A,J,g,v,P,S,x),b++}}else if(b>H)for(;b<=k;)Rn(a[b],g,v,!0),b++;else{const z=b,J=b,cn=new Map;for(b=J;b<=H;b++){const In=h[b]=x?Ae(h[b]):ne(h[b]);In.key!=null&&cn.set(In.key,b)}let rn,kn=0;const vn=H-J+1;let Qn=!1,Mn=0;const We=new Array(vn);for(b=0;b<vn;b++)We[b]=0;for(b=z;b<=k;b++){const In=a[b];if(kn>=vn){Rn(In,g,v,!0);continue}let Yn;if(In.key!=null)Yn=cn.get(In.key);else for(rn=J;rn<=H;rn++)if(We[rn-J]===0&&Te(In,h[rn])){Yn=rn;break}Yn===void 0?Rn(In,g,v,!0):(We[Yn-J]=b+1,Yn>=Mn?Mn=Yn:Qn=!0,E(In,h[Yn],A,null,g,v,P,S,x),kn++)}const or=Qn?gc(We):je;for(rn=or.length-1,b=vn-1;b>=0;b--){const In=J+b,Yn=h[In],ir=In+1<U?h[In+1].el:D;We[b]===0?E(null,Yn,A,ir,g,v,P,S,x):Qn&&(rn<0||b!==or[rn]?Gn(Yn,A,ir,2):rn--)}}},Gn=(a,h,A,D,g=null)=>{const{el:v,type:P,transition:S,children:x,shapeFlag:b}=a;if(b&6){Gn(a.component.subTree,h,A,D);return}if(b&128){a.suspense.move(h,A,D);return}if(b&64){P.move(a,h,A,$);return}if(P===En){s(v,h,A);for(let k=0;k<x.length;k++)Gn(x[k],h,A,D);s(a.anchor,h,A);return}if(P===ds){N(a,h,A);return}if(D!==2&&b&1&&S)if(D===0)S.beforeEnter(v),s(v,h,A),Ln(()=>S.enter(v),g);else{const{leave:k,delayLeave:H,afterLeave:z}=S,J=()=>s(v,h,A),cn=()=>{k(v,()=>{J(),z&&z()})};H?H(v,J,cn):cn()}else s(v,h,A)},Rn=(a,h,A,D=!1,g=!1)=>{const{type:v,props:P,ref:S,children:x,dynamicChildren:b,shapeFlag:U,patchFlag:k,dirs:H,cacheIndex:z}=a;if(k===-2&&(g=!1),S!=null&&Mt(S,null,A,a,!0),z!=null&&(h.renderCache[z]=void 0),U&256){h.ctx.deactivate(a);return}const J=U&1&&H,cn=!st(a);let rn;if(cn&&(rn=P&&P.onVnodeBeforeUnmount)&&Jn(rn,h,a),U&6)bt(a.component,A,D);else{if(U&128){a.suspense.unmount(A,D);return}J&&ye(a,null,h,"beforeUnmount"),U&64?a.type.remove(a,h,A,$,D):b&&!b.hasOnce&&(v!==En||k>0&&k&64)?Fn(b,h,A,!1,!0):(v===En&&k&384||!g&&U&16)&&Fn(x,h,A),D&&Ie(a)}(cn&&(rn=P&&P.onVnodeUnmounted)||J)&&Ln(()=>{rn&&Jn(rn,h,a),J&&ye(a,null,h,"unmounted")},A)},Ie=a=>{const{type:h,el:A,anchor:D,transition:g}=a;if(h===En){Le(A,D);return}if(h===ds){R(a);return}const v=()=>{r(A),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(a.shapeFlag&1&&g&&!g.persisted){const{leave:P,delayLeave:S}=g,x=()=>P(A,v);S?S(a.el,v,x):x()}else v()},Le=(a,h)=>{let A;for(;a!==h;)A=p(a),r(a),a=A;r(h)},bt=(a,h,A)=>{const{bum:D,scope:g,job:v,subTree:P,um:S,m:x,a:b}=a;Br(x),Br(b),D&&ss(D),g.stop(),v&&(v.flags|=8,Rn(P,a,h,A)),S&&Ln(S,h),Ln(()=>{a.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Fn=(a,h,A,D=!1,g=!1,v=0)=>{for(let P=v;P<a.length;P++)Rn(a[P],h,A,D,g)},B=a=>{if(a.shapeFlag&6)return B(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const h=p(a.anchor||a.el),A=h&&h[Nl];return A?p(A):h};let I=!1;const T=(a,h,A)=>{a==null?h._vnode&&Rn(h._vnode,null,null,!0):E(h._vnode||null,a,h,null,null,null,A),h._vnode=a,I||(I=!0,ar(),Fo(),I=!1)},$={p:E,um:Rn,m:Gn,r:Ie,mt:dn,mc:V,pc:nn,pbc:_,n:B,o:n};let sn,hn;return{render:T,hydrate:sn,createApp:ic(T,sn)}}function as({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function xe({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ac(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function fi(n,e,t=!1){const s=n.children,r=e.children;if(Q(s)&&Q(r))for(let o=0;o<s.length;o++){const i=s[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=Ae(r[o]),c.el=i.el),!t&&c.patchFlag!==-2&&fi(i,c)),c.type===Jt&&(c.el=i.el)}}function gc(n){const e=n.slice(),t=[0];let s,r,o,i,c;const l=n.length;for(s=0;s<l;s++){const f=n[s];if(f!==0){if(r=t[t.length-1],n[r]<f){e[s]=r,t.push(s);continue}for(o=0,i=t.length-1;o<i;)c=o+i>>1,n[t[c]]<f?o=c+1:i=c;f<n[t[o]]&&(o>0&&(e[s]=t[o-1]),t[o]=s)}}for(o=t.length,i=t[o-1];o-- >0;)t[o]=i,i=e[i];return t}function di(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:di(e)}function Br(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Bc=Symbol.for("v-scx"),Dc=()=>Vn(Bc);function Ke(n,e,t){return hi(n,e,t)}function hi(n,e,t=ln){const{immediate:s,deep:r,flush:o,once:i}=t,c=Bn({},t),l=e&&s||!e&&o!=="post";let f;if(Ct){if(o==="sync"){const C=Dc();f=C.__watcherHandles||(C.__watcherHandles=[])}else if(!l){const C=()=>{};return C.stop=ee,C.resume=ee,C.pause=ee,C}}const u=Dn;c.call=(C,y,E)=>qn(C,u,y,E);let d=!1;o==="post"?c.scheduler=C=>{Ln(C,u&&u.suspense)}:o!=="sync"&&(d=!0,c.scheduler=(C,y)=>{y?C():Ys(C)}),c.augmentJob=C=>{e&&(C.flags|=4),d&&(C.flags|=2,u&&(C.id=u.uid,C.i=u))};const p=Ol(n,e,c);return Ct&&(f?f.push(p):l&&p()),p}function mc(n,e,t){const s=this.proxy,r=Cn(n)?n.includes(".")?pi(s,n):()=>s[n]:n.bind(s,s);let o;q(e)?o=e:(o=e.handler,t=e);const i=vt(this),c=hi(r,o.bind(s),t);return i(),c}function pi(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const vc=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Un(e)}Modifiers`]||n[`${Me(e)}Modifiers`];function bc(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||ln;let r=t;const o=e.startsWith("update:"),i=o&&vc(s,e.slice(7));i&&(i.trim&&(r=t.map(u=>Cn(u)?u.trim():u)),i.number&&(r=t.map(Gi)));let c,l=s[c=ts(e)]||s[c=ts(Un(e))];!l&&o&&(l=s[c=ts(Me(e))]),l&&qn(l,n,6,r);const f=s[c+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,qn(f,n,6,r)}}function Ci(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const o=n.emits;let i={},c=!1;if(!q(n)){const l=f=>{const u=Ci(f,e,!0);u&&(c=!0,Bn(i,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!o&&!c?(fn(n)&&s.set(n,null),null):(Q(o)?o.forEach(l=>i[l]=null):Bn(i,o),fn(n)&&s.set(n,i),i)}function Yt(n,e){return!n||!$t(e)?!1:(e=e.slice(2).replace(/Once$/,""),tn(n,e[0].toLowerCase()+e.slice(1))||tn(n,Me(e))||tn(n,e))}function fs(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:c,emit:l,render:f,renderCache:u,props:d,data:p,setupState:C,ctx:y,inheritAttrs:E}=n,j=kt(n);let F,L;try{if(t.shapeFlag&4){const R=r||s,K=R;F=ne(f.call(K,R,u,d,C,p,y)),L=c}else{const R=e;F=ne(R.length>1?R(d,{attrs:c,slots:i,emit:l}):R(d,null)),L=e.props?c:_c(c)}}catch(R){it.length=0,Vt(R,n,1),F=Tn(On)}let N=F;if(L&&E!==!1){const R=Object.keys(L),{shapeFlag:K}=N;R.length&&K&7&&(o&&R.some(Fs)&&(L=yc(L,o)),N=me(N,L,!1,!0))}return t.dirs&&(N=me(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(t.dirs):t.dirs),t.transition&&ht(N,t.transition),F=N,kt(j),F}const _c=n=>{let e;for(const t in n)(t==="class"||t==="style"||$t(t))&&((e||(e={}))[t]=n[t]);return e},yc=(n,e)=>{const t={};for(const s in n)(!Fs(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function xc(n,e,t){const{props:s,children:r,component:o}=n,{props:i,children:c,patchFlag:l}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Dr(s,i,f):!!i;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(i[p]!==s[p]&&!Yt(f,p))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?Dr(s,i,f):!0:!!i;return!1}function Dr(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==n[o]&&!Yt(t,o))return!0}return!1}function Sc({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ai=n=>n.__isSuspense;function wc(n,e){e&&e.pendingBranch?Q(n)?e.effects.push(...n):e.effects.push(n):Il(n)}const En=Symbol.for("v-fgt"),Jt=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),ds=Symbol.for("v-stc"),it=[];let Nn=null;function an(n=!1){it.push(Nn=n?null:[])}function Ec(){it.pop(),Nn=it[it.length-1]||null}let pt=1;function mr(n,e=!1){pt+=n,n<0&&Nn&&e&&(Nn.hasOnce=!0)}function gi(n){return n.dynamicChildren=pt>0?Nn||je:null,Ec(),pt>0&&Nn&&Nn.push(n),n}function pn(n,e,t,s,r,o){return gi(O(n,e,t,s,r,o,!0))}function Bi(n,e,t,s,r){return gi(Tn(n,e,t,s,r,!0))}function Lt(n){return n?n.__v_isVNode===!0:!1}function Te(n,e){return n.type===e.type&&n.key===e.key}const Di=({key:n})=>n??null,Et=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Cn(n)||An(n)||q(n)?{i:Pn,r:n,k:e,f:!!t}:n:null);function O(n,e=null,t=null,s=0,r=null,o=n===En?0:1,i=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Di(e),ref:e&&Et(e),scopeId:Ho,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pn};return c?(Zs(l,t),o&128&&n.normalize(l)):t&&(l.shapeFlag|=Cn(t)?8:16),pt>0&&!i&&Nn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Nn.push(l),l}const Tn=Pc;function Pc(n,e=null,t=null,s=0,r=null,o=!1){if((!n||n===Xo)&&(n=On),Lt(n)){const c=me(n,e,!0);return t&&Zs(c,t),pt>0&&!o&&Nn&&(c.shapeFlag&6?Nn[Nn.indexOf(n)]=c:Nn.push(c)),c.patchFlag=-2,c}if(jc(n)&&(n=n.__vccOpts),e){e=Tc(e);let{class:c,style:l}=e;c&&!Cn(c)&&(e.class=Zn(c)),fn(l)&&(qs(l)&&!Q(l)&&(l=Bn({},l)),e.style=Kt(l))}const i=Cn(n)?1:Ai(n)?128:jo(n)?64:fn(n)?4:q(n)?2:0;return O(n,e,t,s,r,i,o,!0)}function Tc(n){return n?qs(n)||ri(n)?Bn({},n):n:null}function me(n,e,t=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:c,transition:l}=n,f=e?Rc(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&Di(f),ref:e&&e.ref?t&&o?Q(o)?o.concat(Et(e)):[o,Et(e)]:Et(e):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==En?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&me(n.ssContent),ssFallback:n.ssFallback&&me(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&s&&ht(u,l.clone(u)),u}function mi(n=" ",e=0){return Tn(Jt,null,n,e)}function Pe(n="",e=!1){return e?(an(),Bi(On,null,n)):Tn(On,null,n)}function ne(n){return n==null||typeof n=="boolean"?Tn(On):Q(n)?Tn(En,null,n.slice()):Lt(n)?Ae(n):Tn(Jt,null,String(n))}function Ae(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:me(n)}function Zs(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(Q(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Zs(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!ri(e)?e._ctx=Pn:r===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),s&64?(t=16,e=[mi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Rc(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Zn([e.class,s.class]));else if(r==="style")e.style=Kt([e.style,s.style]);else if($t(r)){const o=e[r],i=s[r];i&&o!==i&&!(Q(o)&&o.includes(i))&&(e[r]=o?[].concat(o,i):i)}else r!==""&&(e[r]=s[r])}return e}function Jn(n,e,t,s=null){qn(n,e,7,[t,s])}const Oc=ei();let kc=0;function Mc(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||Oc,o={uid:kc++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ii(s,r),emitsOptions:Ci(s,r),emit:null,emitted:null,propsDefaults:ln,inheritAttrs:s.inheritAttrs,ctx:ln,data:ln,props:ln,attrs:ln,slots:ln,refs:ln,setupState:ln,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=bc.bind(null,o),n.ce&&n.ce(o),o}let Dn=null;const Ic=()=>Dn||Pn;let Nt,Ts;{const n=Qt(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Nt=e("__VUE_INSTANCE_SETTERS__",t=>Dn=t),Ts=e("__VUE_SSR_SETTERS__",t=>Ct=t)}const vt=n=>{const e=Dn;return Nt(n),n.scope.on(),()=>{n.scope.off(),Nt(e)}},vr=()=>{Dn&&Dn.scope.off(),Nt(null)};function vi(n){return n.vnode.shapeFlag&4}let Ct=!1;function Lc(n,e=!1,t=!1){e&&Ts(e);const{props:s,children:r}=n.vnode,o=vi(n);cc(n,s,o,e),dc(n,r,t);const i=o?Nc(n,e):void 0;return e&&Ts(!1),i}function Nc(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zl);const{setup:s}=t;if(s){be();const r=n.setupContext=s.length>1?$c(n):null,o=vt(n),i=mt(s,n,0,[n.props,r]),c=lo(i);if(_e(),o(),(c||n.sp)&&!st(n)&&qo(n),c){if(i.then(vr,vr),e)return i.then(l=>{br(n,l,e)}).catch(l=>{Vt(l,n,0)});n.asyncDep=i}else br(n,i,e)}else bi(n,e)}function br(n,e,t){q(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:fn(e)&&(n.setupState=Io(e)),bi(n,t)}let _r;function bi(n,e,t){const s=n.type;if(!n.render){if(!e&&_r&&!s.render){const r=s.template||Js(n).template;if(r){const{isCustomElement:o,compilerOptions:i}=n.appContext.config,{delimiters:c,compilerOptions:l}=s,f=Bn(Bn({isCustomElement:o,delimiters:c},i),l);s.render=_r(r,f)}}n.render=s.render||ee}{const r=vt(n);be();try{nc(n)}finally{_e(),r()}}}const Fc={get(n,e){return bn(n,"get",""),n[e]}};function $c(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Fc),slots:n.slots,emit:n.emit,expose:e}}function Xt(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Io(Ws(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ot)return ot[t](n)},has(e,t){return t in e||t in ot}})):n.proxy}function Hc(n,e=!0){return q(n)?n.displayName||n.name:n.name||e&&n.__name}function jc(n){return q(n)&&"__vccOpts"in n}const gn=(n,e)=>Tl(n,e,Ct);function nr(n,e,t){const s=arguments.length;return s===2?fn(e)&&!Q(e)?Lt(e)?Tn(n,null,[e]):Tn(n,e):Tn(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Lt(t)&&(t=[t]),Tn(n,e,t))}const Uc="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const yr=typeof window<"u"&&window.trustedTypes;if(yr)try{Rs=yr.createPolicy("vue",{createHTML:n=>n})}catch{}const _i=Rs?n=>Rs.createHTML(n):n=>n,Qc="http://www.w3.org/2000/svg",Kc="http://www.w3.org/1998/Math/MathML",ie=typeof document<"u"?document:null,xr=ie&&ie.createElement("template"),zc={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?ie.createElementNS(Qc,n):e==="mathml"?ie.createElementNS(Kc,n):t?ie.createElement(n,{is:t}):ie.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>ie.createTextNode(n),createComment:n=>ie.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ie.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,o){const i=t?t.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===o||!(r=r.nextSibling)););else{xr.innerHTML=_i(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const c=xr.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[i?i.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},fe="transition",Ye="animation",At=Symbol("_vtc"),yi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vc=Bn({},Uo,yi),qc=n=>(n.displayName="Transition",n.props=Vc,n),Wc=qc((n,{slots:e})=>nr(Hl,Gc(n),e)),Se=(n,e=[])=>{Q(n)?n.forEach(t=>t(...e)):n&&n(...e)},Sr=n=>n?Q(n)?n.some(e=>e.length>1):n.length>1:!1;function Gc(n){const e={};for(const w in n)w in yi||(e[w]=n[w]);if(n.css===!1)return e;const{name:t="v",type:s,duration:r,enterFromClass:o=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:f=i,appearToClass:u=c,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:C=`${t}-leave-to`}=n,y=Yc(r),E=y&&y[0],j=y&&y[1],{onBeforeEnter:F,onEnter:L,onEnterCancelled:N,onLeave:R,onLeaveCancelled:K,onBeforeAppear:Z=F,onAppear:Y=L,onAppearCancelled:V=N}=e,m=(w,G,dn,yn)=>{w._enterCancelled=yn,we(w,G?u:c),we(w,G?f:i),dn&&dn()},_=(w,G)=>{w._isLeaving=!1,we(w,d),we(w,C),we(w,p),G&&G()},M=w=>(G,dn)=>{const yn=w?Y:L,on=()=>m(G,w,dn);Se(yn,[G,on]),wr(()=>{we(G,w?l:o),re(G,w?u:c),Sr(yn)||Er(G,s,E,on)})};return Bn(e,{onBeforeEnter(w){Se(F,[w]),re(w,o),re(w,i)},onBeforeAppear(w){Se(Z,[w]),re(w,l),re(w,f)},onEnter:M(!1),onAppear:M(!0),onLeave(w,G){w._isLeaving=!0;const dn=()=>_(w,G);re(w,d),w._enterCancelled?(re(w,p),Rr()):(Rr(),re(w,p)),wr(()=>{w._isLeaving&&(we(w,d),re(w,C),Sr(R)||Er(w,s,j,dn))}),Se(R,[w,dn])},onEnterCancelled(w){m(w,!1,void 0,!0),Se(N,[w])},onAppearCancelled(w){m(w,!0,void 0,!0),Se(V,[w])},onLeaveCancelled(w){_(w),Se(K,[w])}})}function Yc(n){if(n==null)return null;if(fn(n))return[hs(n.enter),hs(n.leave)];{const e=hs(n);return[e,e]}}function hs(n){return Yi(n)}function re(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[At]||(n[At]=new Set)).add(e)}function we(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[At];t&&(t.delete(e),t.size||(n[At]=void 0))}function wr(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Jc=0;function Er(n,e,t,s){const r=n._endId=++Jc,o=()=>{r===n._endId&&s()};if(t!=null)return setTimeout(o,t);const{type:i,timeout:c,propCount:l}=Xc(n,e);if(!i)return s();const f=i+"end";let u=0;const d=()=>{n.removeEventListener(f,p),o()},p=C=>{C.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},c+1),n.addEventListener(f,p)}function Xc(n,e){const t=window.getComputedStyle(n),s=y=>(t[y]||"").split(", "),r=s(`${fe}Delay`),o=s(`${fe}Duration`),i=Pr(r,o),c=s(`${Ye}Delay`),l=s(`${Ye}Duration`),f=Pr(c,l);let u=null,d=0,p=0;e===fe?i>0&&(u=fe,d=i,p=o.length):e===Ye?f>0&&(u=Ye,d=f,p=l.length):(d=Math.max(i,f),u=d>0?i>f?fe:Ye:null,p=u?u===fe?o.length:l.length:0);const C=u===fe&&/\b(transform|all)(,|$)/.test(s(`${fe}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:C}}function Pr(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>Tr(t)+Tr(n[s])))}function Tr(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Rr(){return document.body.offsetHeight}function Zc(n,e,t){const s=n[At];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ft=Symbol("_vod"),xi=Symbol("_vsh"),nu={beforeMount(n,{value:e},{transition:t}){n[Ft]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Je(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:s}){!e!=!t&&(s?e?(s.beforeEnter(n),Je(n,!0),s.enter(n)):s.leave(n,()=>{Je(n,!1)}):Je(n,e))},beforeUnmount(n,{value:e}){Je(n,e)}};function Je(n,e){n.style.display=e?n[Ft]:"none",n[xi]=!e}const eu=Symbol(""),tu=/(^|;)\s*display\s*:/;function su(n,e,t){const s=n.style,r=Cn(t);let o=!1;if(t&&!r){if(e)if(Cn(e))for(const i of e.split(";")){const c=i.slice(0,i.indexOf(":")).trim();t[c]==null&&Pt(s,c,"")}else for(const i in e)t[i]==null&&Pt(s,i,"");for(const i in t)i==="display"&&(o=!0),Pt(s,i,t[i])}else if(r){if(e!==t){const i=s[eu];i&&(t+=";"+i),s.cssText=t,o=tu.test(t)}}else e&&n.removeAttribute("style");Ft in n&&(n[Ft]=o?s.display:"",n[xi]&&(s.display="none"))}const Or=/\s*!important$/;function Pt(n,e,t){if(Q(t))t.forEach(s=>Pt(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=ru(n,e);Or.test(t)?n.setProperty(Me(s),t.replace(Or,""),"important"):n[s]=t}}const kr=["Webkit","Moz","ms"],ps={};function ru(n,e){const t=ps[e];if(t)return t;let s=Un(e);if(s!=="filter"&&s in n)return ps[e]=s;s=Ut(s);for(let r=0;r<kr.length;r++){const o=kr[r]+s;if(o in n)return ps[e]=o}return e}const Mr="http://www.w3.org/1999/xlink";function Ir(n,e,t,s,r,o=tl(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Mr,e.slice(6,e.length)):n.setAttributeNS(Mr,e,t):t==null||o&&!fo(t)?n.removeAttribute(e):n.setAttribute(e,o?"":ve(t)?String(t):t)}function Lr(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?_i(t):t);return}const o=n.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let i=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=fo(t):t==null&&c==="string"?(t="",i=!0):c==="number"&&(t=0,i=!0)}try{n[e]=t}catch{}i&&n.removeAttribute(r||e)}function ou(n,e,t,s){n.addEventListener(e,t,s)}function iu(n,e,t,s){n.removeEventListener(e,t,s)}const Nr=Symbol("_vei");function lu(n,e,t,s,r=null){const o=n[Nr]||(n[Nr]={}),i=o[e];if(s&&i)i.value=s;else{const[c,l]=cu(e);if(s){const f=o[e]=fu(s,r);ou(n,c,f,l)}else i&&(iu(n,c,i,l),o[e]=void 0)}}const Fr=/(?:Once|Passive|Capture)$/;function cu(n){let e;if(Fr.test(n)){e={};let s;for(;s=n.match(Fr);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Me(n.slice(2)),e]}let Cs=0;const uu=Promise.resolve(),au=()=>Cs||(uu.then(()=>Cs=0),Cs=Date.now());function fu(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;qn(du(s,t.value),e,5,[s])};return t.value=n,t.attached=au(),t}function du(n,e){if(Q(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const $r=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hu=(n,e,t,s,r,o)=>{const i=r==="svg";e==="class"?Zc(n,s,i):e==="style"?su(n,t,s):$t(e)?Fs(e)||lu(n,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pu(n,e,s,i))?(Lr(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ir(n,e,s,i,o,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Cn(s))?Lr(n,Un(e),s,o,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Ir(n,e,s,i))};function pu(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&$r(e)&&q(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $r(e)&&Cn(t)?!1:e in n}const Cu=Bn({patchProp:hu},zc);let Hr;function Au(){return Hr||(Hr=pc(Cu))}const gu=(...n)=>{const e=Au().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=Du(s);if(!r)return;const o=e._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=t(r,!1,Bu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e};function Bu(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Du(n){return Cn(n)?document.querySelector(n):n}var mu=!1;/*!
 * pinia v2.2.7
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Si;const Zt=n=>Si=n,wi=Symbol();function Os(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var lt;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(lt||(lt={}));function vu(){const n=Ao(!0),e=n.run(()=>Hn({}));let t=[],s=[];const r=Ws({install(o){Zt(r),r._a=o,o.provide(wi,r),o.config.globalProperties.$pinia=r,s.forEach(i=>t.push(i)),s=[]},use(o){return!this._a&&!mu?s.push(o):t.push(o),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const Ei=()=>{};function jr(n,e,t,s=Ei){n.push(e);const r=()=>{const o=n.indexOf(e);o>-1&&(n.splice(o,1),s())};return!t&&go()&&sl(r),r}function Fe(n,...e){n.slice().forEach(t=>{t(...e)})}const bu=n=>n(),Ur=Symbol(),As=Symbol();function ks(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,s)=>n.set(s,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const s=e[t],r=n[t];Os(r)&&Os(s)&&n.hasOwnProperty(t)&&!An(s)&&!De(s)?n[t]=ks(r,s):n[t]=s}return n}const _u=Symbol();function yu(n){return!Os(n)||!n.hasOwnProperty(_u)}const{assign:he}=Object;function xu(n){return!!(An(n)&&n.effect)}function Su(n,e,t,s){const{state:r,actions:o,getters:i}=e,c=t.state.value[n];let l;function f(){c||(t.state.value[n]=r?r():{});const u=Sl(t.state.value[n]);return he(u,o,Object.keys(i||{}).reduce((d,p)=>(d[p]=Ws(gn(()=>{Zt(t);const C=t._s.get(n);return i[p].call(C,C)})),d),{}))}return l=Pi(n,f,e,t,s,!0),l}function Pi(n,e,t={},s,r,o){let i;const c=he({actions:{}},t),l={deep:!0};let f,u,d=[],p=[],C;const y=s.state.value[n];!o&&!y&&(s.state.value[n]={}),Hn({});let E;function j(V){let m;f=u=!1,typeof V=="function"?(V(s.state.value[n]),m={type:lt.patchFunction,storeId:n,events:C}):(ks(s.state.value[n],V),m={type:lt.patchObject,payload:V,storeId:n,events:C});const _=E=Symbol();Gs().then(()=>{E===_&&(f=!0)}),u=!0,Fe(d,m,s.state.value[n])}const F=o?function(){const{state:m}=t,_=m?m():{};this.$patch(M=>{he(M,_)})}:Ei;function L(){i.stop(),d=[],p=[],s._s.delete(n)}const N=(V,m="")=>{if(Ur in V)return V[As]=m,V;const _=function(){Zt(s);const M=Array.from(arguments),w=[],G=[];function dn(W){w.push(W)}function yn(W){G.push(W)}Fe(p,{args:M,name:_[As],store:K,after:dn,onError:yn});let on;try{on=V.apply(this&&this.$id===n?this:K,M)}catch(W){throw Fe(G,W),W}return on instanceof Promise?on.then(W=>(Fe(w,W),W)).catch(W=>(Fe(G,W),Promise.reject(W))):(Fe(w,on),on)};return _[Ur]=!0,_[As]=m,_},R={_p:s,$id:n,$onAction:jr.bind(null,p),$patch:j,$reset:F,$subscribe(V,m={}){const _=jr(d,V,m.detached,()=>M()),M=i.run(()=>Ke(()=>s.state.value[n],w=>{(m.flush==="sync"?u:f)&&V({storeId:n,type:lt.direct,events:C},w)},he({},l,m)));return _},$dispose:L},K=Dt(R);s._s.set(n,K);const Y=(s._a&&s._a.runWithContext||bu)(()=>s._e.run(()=>(i=Ao()).run(()=>e({action:N}))));for(const V in Y){const m=Y[V];if(An(m)&&!xu(m)||De(m))o||(y&&yu(m)&&(An(m)?m.value=y[V]:ks(m,y[V])),s.state.value[n][V]=m);else if(typeof m=="function"){const _=N(m,V);Y[V]=_,c.actions[V]=m}}return he(K,Y),he(X(K),Y),Object.defineProperty(K,"$state",{get:()=>s.state.value[n],set:V=>{j(m=>{he(m,V)})}}),s._p.forEach(V=>{he(K,i.run(()=>V({store:K,app:s._a,pinia:s,options:c})))}),y&&o&&t.hydrate&&t.hydrate(K.$state,y),f=!0,u=!0,K}/*! #__NO_SIDE_EFFECTS__ */function wu(n,e,t){let s,r;const o=typeof e=="function";s=n,r=o?t:e;function i(c,l){const f=lc();return c=c||(f?Vn(wi,null):null),c&&Zt(c),c=Si,c._s.has(s)||(o?Pi(s,e,r,c):Su(s,r,c)),c._s.get(s)}return i.$id=s,i}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const He=typeof document<"u";function Ti(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Eu(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Ti(n.default)}const en=Object.assign;function gs(n,e){const t={};for(const s in e){const r=e[s];t[s]=Wn(r)?r.map(n):n(r)}return t}const ct=()=>{},Wn=Array.isArray,Ri=/#/g,Pu=/&/g,Tu=/\//g,Ru=/=/g,Ou=/\?/g,Oi=/\+/g,ku=/%5B/g,Mu=/%5D/g,ki=/%5E/g,Iu=/%60/g,Mi=/%7B/g,Lu=/%7C/g,Ii=/%7D/g,Nu=/%20/g;function er(n){return encodeURI(""+n).replace(Lu,"|").replace(ku,"[").replace(Mu,"]")}function Fu(n){return er(n).replace(Mi,"{").replace(Ii,"}").replace(ki,"^")}function Ms(n){return er(n).replace(Oi,"%2B").replace(Nu,"+").replace(Ri,"%23").replace(Pu,"%26").replace(Iu,"`").replace(Mi,"{").replace(Ii,"}").replace(ki,"^")}function $u(n){return Ms(n).replace(Ru,"%3D")}function Hu(n){return er(n).replace(Ri,"%23").replace(Ou,"%3F")}function ju(n){return n==null?"":Hu(n).replace(Tu,"%2F")}function gt(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Uu=/\/$/,Qu=n=>n.replace(Uu,"");function Bs(n,e,t="/"){let s,r={},o="",i="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=e.slice(0,l),o=e.slice(l+1,c>-1?c:e.length),r=n(o)),c>-1&&(s=s||e.slice(0,c),i=e.slice(c,e.length)),s=qu(s??e,t),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:gt(i)}}function Ku(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Qr(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function zu(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&ze(e.matched[s],t.matched[r])&&Li(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ze(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Li(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Vu(n[t],e[t]))return!1;return!0}function Vu(n,e){return Wn(n)?Kr(n,e):Wn(e)?Kr(e,n):n===e}function Kr(n,e){return Wn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function qu(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=t.length-1,i,c;for(i=0;i<s.length;i++)if(c=s[i],c!==".")if(c==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const de={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bt;(function(n){n.pop="pop",n.push="push"})(Bt||(Bt={}));var ut;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ut||(ut={}));function Wu(n){if(!n)if(He){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Qu(n)}const Gu=/^[^#]+#/;function Yu(n,e){return n.replace(Gu,"#")+e}function Ju(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const ns=()=>({left:window.scrollX,top:window.scrollY});function Xu(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Ju(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zr(n,e){return(history.state?history.state.position-e:-1)+n}const Is=new Map;function Zu(n,e){Is.set(n,e)}function na(n){const e=Is.get(n);return Is.delete(n),e}let ea=()=>location.protocol+"//"+location.host;function Ni(n,e){const{pathname:t,search:s,hash:r}=e,o=n.indexOf("#");if(o>-1){let c=r.includes(n.slice(o))?n.slice(o).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),Qr(l,"")}return Qr(t,n)+s+r}function ta(n,e,t,s){let r=[],o=[],i=null;const c=({state:p})=>{const C=Ni(n,location),y=t.value,E=e.value;let j=0;if(p){if(t.value=C,e.value=p,i&&i===y){i=null;return}j=E?p.position-E.position:0}else s(C);r.forEach(F=>{F(t.value,y,{delta:j,type:Bt.pop,direction:j?j>0?ut.forward:ut.back:ut.unknown})})};function l(){i=t.value}function f(p){r.push(p);const C=()=>{const y=r.indexOf(p);y>-1&&r.splice(y,1)};return o.push(C),C}function u(){const{history:p}=window;p.state&&p.replaceState(en({},p.state,{scroll:ns()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function Vr(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?ns():null}}function sa(n){const{history:e,location:t}=window,s={value:Ni(n,t)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,f,u){const d=n.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:ea()+n+l;try{e[u?"replaceState":"pushState"](f,"",p),r.value=f}catch(C){console.error(C),t[u?"replace":"assign"](p)}}function i(l,f){const u=en({},e.state,Vr(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});o(l,u,!0),s.value=l}function c(l,f){const u=en({},r.value,e.state,{forward:l,scroll:ns()});o(u.current,u,!0);const d=en({},Vr(s.value,l,null),{position:u.position+1},f);o(l,d,!1),s.value=l}return{location:s,state:r,push:c,replace:i}}function ra(n){n=Wu(n);const e=sa(n),t=ta(n,e.state,e.location,e.replace);function s(o,i=!0){i||t.pauseListeners(),history.go(o)}const r=en({location:"",base:n,go:s,createHref:Yu.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function oa(n){return typeof n=="string"||n&&typeof n=="object"}function Fi(n){return typeof n=="string"||typeof n=="symbol"}const $i=Symbol("");var qr;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(qr||(qr={}));function Ve(n,e){return en(new Error,{type:n,[$i]:!0},e)}function oe(n,e){return n instanceof Error&&$i in n&&(e==null||!!(n.type&e))}const Wr="[^/]+?",ia={sensitive:!1,strict:!1,start:!0,end:!0},la=/[.+*?^${}()[\]/\\]/g;function ca(n,e){const t=en({},ia,e),s=[];let r=t.start?"^":"";const o=[];for(const f of n){const u=f.length?[]:[90];t.strict&&!f.length&&(r+="/");for(let d=0;d<f.length;d++){const p=f[d];let C=40+(t.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(la,"\\$&"),C+=40;else if(p.type===1){const{value:y,repeatable:E,optional:j,regexp:F}=p;o.push({name:y,repeatable:E,optional:j});const L=F||Wr;if(L!==Wr){C+=10;try{new RegExp(`(${L})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${y}" (${L}): `+R.message)}}let N=E?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;d||(N=j&&f.length<2?`(?:/${N})`:"/"+N),j&&(N+="?"),r+=N,C+=20,j&&(C+=-8),E&&(C+=-20),L===".*"&&(C+=-50)}u.push(C)}s.push(u)}if(t.strict&&t.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,t.sensitive?"":"i");function c(f){const u=f.match(i),d={};if(!u)return null;for(let p=1;p<u.length;p++){const C=u[p]||"",y=o[p-1];d[y.name]=C&&y.repeatable?C.split("/"):C}return d}function l(f){let u="",d=!1;for(const p of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const C of p)if(C.type===0)u+=C.value;else if(C.type===1){const{value:y,repeatable:E,optional:j}=C,F=y in f?f[y]:"";if(Wn(F)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const L=Wn(F)?F.join("/"):F;if(!L)if(j)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=L}}return u||"/"}return{re:i,score:s,keys:o,parse:c,stringify:l}}function ua(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Hi(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const o=ua(s[t],r[t]);if(o)return o;t++}if(Math.abs(r.length-s.length)===1){if(Gr(s))return 1;if(Gr(r))return-1}return r.length-s.length}function Gr(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const aa={type:0,value:""},fa=/[a-zA-Z0-9_]/;function da(n){if(!n)return[[]];if(n==="/")return[[aa]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(C){throw new Error(`ERR (${t})/"${f}": ${C}`)}let t=0,s=t;const r=[];let o;function i(){o&&r.push(o),o=[]}let c=0,l,f="",u="";function d(){f&&(t===0?o.push({type:0,value:f}):t===1||t===2||t===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;c<n.length;){if(l=n[c++],l==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:l==="/"?(f&&d(),i()):l===":"?(d(),t=1):p();break;case 4:p(),t=s;break;case 1:l==="("?t=2:fa.test(l)?p():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${f}"`),d(),i(),r}function ha(n,e,t){const s=ca(da(n.path),t),r=en(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function pa(n,e){const t=[],s=new Map;e=Zr({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function o(d,p,C){const y=!C,E=Jr(d);E.aliasOf=C&&C.record;const j=Zr(e,d),F=[E];if("alias"in d){const R=typeof d.alias=="string"?[d.alias]:d.alias;for(const K of R)F.push(Jr(en({},E,{components:C?C.record.components:E.components,path:K,aliasOf:C?C.record:E})))}let L,N;for(const R of F){const{path:K}=R;if(p&&K[0]!=="/"){const Z=p.record.path,Y=Z[Z.length-1]==="/"?"":"/";R.path=p.record.path+(K&&Y+K)}if(L=ha(R,p,j),C?C.alias.push(L):(N=N||L,N!==L&&N.alias.push(L),y&&d.name&&!Xr(L)&&i(d.name)),ji(L)&&l(L),E.children){const Z=E.children;for(let Y=0;Y<Z.length;Y++)o(Z[Y],L,C&&C.children[Y])}C=C||L}return N?()=>{i(N)}:ct}function i(d){if(Fi(d)){const p=s.get(d);p&&(s.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return t}function l(d){const p=ga(d,t);t.splice(p,0,d),d.record.name&&!Xr(d)&&s.set(d.record.name,d)}function f(d,p){let C,y={},E,j;if("name"in d&&d.name){if(C=s.get(d.name),!C)throw Ve(1,{location:d});j=C.record.name,y=en(Yr(p.params,C.keys.filter(N=>!N.optional).concat(C.parent?C.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),d.params&&Yr(d.params,C.keys.map(N=>N.name))),E=C.stringify(y)}else if(d.path!=null)E=d.path,C=t.find(N=>N.re.test(E)),C&&(y=C.parse(E),j=C.record.name);else{if(C=p.name?s.get(p.name):t.find(N=>N.re.test(p.path)),!C)throw Ve(1,{location:d,currentLocation:p});j=C.record.name,y=en({},p.params,d.params),E=C.stringify(y)}const F=[];let L=C;for(;L;)F.unshift(L.record),L=L.parent;return{name:j,path:E,params:y,matched:F,meta:Aa(F)}}n.forEach(d=>o(d));function u(){t.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:i,clearRoutes:u,getRoutes:c,getRecordMatcher:r}}function Yr(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function Jr(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Ca(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ca(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function Xr(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Aa(n){return n.reduce((e,t)=>en(e,t.meta),{})}function Zr(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function ga(n,e){let t=0,s=e.length;for(;t!==s;){const o=t+s>>1;Hi(n,e[o])<0?s=o:t=o+1}const r=Ba(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function Ba(n){let e=n;for(;e=e.parent;)if(ji(e)&&Hi(n,e)===0)return e}function ji({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Da(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Oi," "),i=o.indexOf("="),c=gt(i<0?o:o.slice(0,i)),l=i<0?null:gt(o.slice(i+1));if(c in e){let f=e[c];Wn(f)||(f=e[c]=[f]),f.push(l)}else e[c]=l}return e}function no(n){let e="";for(let t in n){const s=n[t];if(t=$u(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Wn(s)?s.map(o=>o&&Ms(o)):[s&&Ms(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function ma(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Wn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const va=Symbol(""),eo=Symbol(""),es=Symbol(""),Ui=Symbol(""),Ls=Symbol("");function Xe(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ge(n,e,t,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,l)=>{const f=p=>{p===!1?l(Ve(4,{from:t,to:e})):p instanceof Error?l(p):oa(p)?l(Ve(2,{from:e,to:p})):(i&&s.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),c())},u=o(()=>n.call(s&&s.instances[r],e,t,f));let d=Promise.resolve(u);n.length<3&&(d=d.then(f)),d.catch(p=>l(p))})}function Ds(n,e,t,s,r=o=>o()){const o=[];for(const i of n)for(const c in i.components){let l=i.components[c];if(!(e!=="beforeRouteEnter"&&!i.instances[c]))if(Ti(l)){const u=(l.__vccOpts||l)[e];u&&o.push(ge(u,t,s,i,c,r))}else{let f=l();o.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const d=Eu(u)?u.default:u;i.mods[c]=u,i.components[c]=d;const C=(d.__vccOpts||d)[e];return C&&ge(C,t,s,i,c,r)()}))}}return o}function to(n){const e=Vn(es),t=Vn(Ui),s=gn(()=>{const l=Kn(n.to);return e.resolve(l)}),r=gn(()=>{const{matched:l}=s.value,{length:f}=l,u=l[f-1],d=t.matched;if(!u||!d.length)return-1;const p=d.findIndex(ze.bind(null,u));if(p>-1)return p;const C=so(l[f-2]);return f>1&&so(u)===C&&d[d.length-1].path!==C?d.findIndex(ze.bind(null,l[f-2])):p}),o=gn(()=>r.value>-1&&Sa(t.params,s.value.params)),i=gn(()=>r.value>-1&&r.value===t.matched.length-1&&Li(t.params,s.value.params));function c(l={}){if(xa(l)){const f=e[Kn(n.replace)?"replace":"push"](Kn(n.to)).catch(ct);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:gn(()=>s.value.href),isActive:o,isExactActive:i,navigate:c}}function ba(n){return n.length===1?n[0]:n}const _a=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(n,{slots:e}){const t=Dt(to(n)),{options:s}=Vn(es),r=gn(()=>({[ro(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[ro(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&ba(e.default(t));return n.custom?o:nr("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},o)}}}),ya=_a;function xa(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Sa(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Wn(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function so(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ro=(n,e,t)=>n??e??t,wa=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Vn(Ls),r=gn(()=>n.route||s.value),o=Vn(eo,0),i=gn(()=>{let f=Kn(o);const{matched:u}=r.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),c=gn(()=>r.value.matched[i.value]);wt(eo,gn(()=>i.value+1)),wt(va,c),wt(Ls,r);const l=Hn();return Ke(()=>[l.value,c.value,n.name],([f,u,d],[p,C,y])=>{u&&(u.instances[d]=f,C&&C!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=C.leaveGuards),u.updateGuards.size||(u.updateGuards=C.updateGuards))),f&&u&&(!C||!ze(u,C)||!p)&&(u.enterCallbacks[d]||[]).forEach(E=>E(f))},{flush:"post"}),()=>{const f=r.value,u=n.name,d=c.value,p=d&&d.components[u];if(!p)return oo(t.default,{Component:p,route:f});const C=d.props[u],y=C?C===!0?f.params:typeof C=="function"?C(f):C:null,j=nr(p,en({},y,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return oo(t.default,{Component:j,route:f})||j}}});function oo(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ea=wa;function Pa(n){const e=pa(n.routes,n),t=n.parseQuery||Da,s=n.stringifyQuery||no,r=n.history,o=Xe(),i=Xe(),c=Xe(),l=_l(de);let f=de;He&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gs.bind(null,B=>""+B),d=gs.bind(null,ju),p=gs.bind(null,gt);function C(B,I){let T,$;return Fi(B)?(T=e.getRecordMatcher(B),$=I):$=B,e.addRoute($,T)}function y(B){const I=e.getRecordMatcher(B);I&&e.removeRoute(I)}function E(){return e.getRoutes().map(B=>B.record)}function j(B){return!!e.getRecordMatcher(B)}function F(B,I){if(I=en({},I||l.value),typeof B=="string"){const h=Bs(t,B,I.path),A=e.resolve({path:h.path},I),D=r.createHref(h.fullPath);return en(h,A,{params:p(A.params),hash:gt(h.hash),redirectedFrom:void 0,href:D})}let T;if(B.path!=null)T=en({},B,{path:Bs(t,B.path,I.path).path});else{const h=en({},B.params);for(const A in h)h[A]==null&&delete h[A];T=en({},B,{params:d(h)}),I.params=d(I.params)}const $=e.resolve(T,I),sn=B.hash||"";$.params=u(p($.params));const hn=Ku(s,en({},B,{hash:Fu(sn),path:$.path})),a=r.createHref(hn);return en({fullPath:hn,hash:sn,query:s===no?ma(B.query):B.query||{}},$,{redirectedFrom:void 0,href:a})}function L(B){return typeof B=="string"?Bs(t,B,l.value.path):en({},B)}function N(B,I){if(f!==B)return Ve(8,{from:I,to:B})}function R(B){return Y(B)}function K(B){return R(en(L(B),{replace:!0}))}function Z(B){const I=B.matched[B.matched.length-1];if(I&&I.redirect){const{redirect:T}=I;let $=typeof T=="function"?T(B):T;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=L($):{path:$},$.params={}),en({query:B.query,hash:B.hash,params:$.path!=null?{}:B.params},$)}}function Y(B,I){const T=f=F(B),$=l.value,sn=B.state,hn=B.force,a=B.replace===!0,h=Z(T);if(h)return Y(en(L(h),{state:typeof h=="object"?en({},sn,h.state):sn,force:hn,replace:a}),I||T);const A=T;A.redirectedFrom=I;let D;return!hn&&zu(s,$,T)&&(D=Ve(16,{to:A,from:$}),Gn($,$,!0,!1)),(D?Promise.resolve(D):_(A,$)).catch(g=>oe(g)?oe(g,2)?g:ae(g):nn(g,A,$)).then(g=>{if(g){if(oe(g,2))return Y(en({replace:a},L(g.to),{state:typeof g.to=="object"?en({},sn,g.to.state):sn,force:hn}),I||A)}else g=w(A,$,!0,a,sn);return M(A,$,g),g})}function V(B,I){const T=N(B,I);return T?Promise.reject(T):Promise.resolve()}function m(B){const I=Le.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(B):B()}function _(B,I){let T;const[$,sn,hn]=Ta(B,I);T=Ds($.reverse(),"beforeRouteLeave",B,I);for(const h of $)h.leaveGuards.forEach(A=>{T.push(ge(A,B,I))});const a=V.bind(null,B,I);return T.push(a),Fn(T).then(()=>{T=[];for(const h of o.list())T.push(ge(h,B,I));return T.push(a),Fn(T)}).then(()=>{T=Ds(sn,"beforeRouteUpdate",B,I);for(const h of sn)h.updateGuards.forEach(A=>{T.push(ge(A,B,I))});return T.push(a),Fn(T)}).then(()=>{T=[];for(const h of hn)if(h.beforeEnter)if(Wn(h.beforeEnter))for(const A of h.beforeEnter)T.push(ge(A,B,I));else T.push(ge(h.beforeEnter,B,I));return T.push(a),Fn(T)}).then(()=>(B.matched.forEach(h=>h.enterCallbacks={}),T=Ds(hn,"beforeRouteEnter",B,I,m),T.push(a),Fn(T))).then(()=>{T=[];for(const h of i.list())T.push(ge(h,B,I));return T.push(a),Fn(T)}).catch(h=>oe(h,8)?h:Promise.reject(h))}function M(B,I,T){c.list().forEach($=>m(()=>$(B,I,T)))}function w(B,I,T,$,sn){const hn=N(B,I);if(hn)return hn;const a=I===de,h=He?history.state:{};T&&($||a?r.replace(B.fullPath,en({scroll:a&&h&&h.scroll},sn)):r.push(B.fullPath,sn)),l.value=B,Gn(B,I,T,a),ae()}let G;function dn(){G||(G=r.listen((B,I,T)=>{if(!bt.listening)return;const $=F(B),sn=Z($);if(sn){Y(en(sn,{replace:!0,force:!0}),$).catch(ct);return}f=$;const hn=l.value;He&&Zu(zr(hn.fullPath,T.delta),ns()),_($,hn).catch(a=>oe(a,12)?a:oe(a,2)?(Y(en(L(a.to),{force:!0}),$).then(h=>{oe(h,20)&&!T.delta&&T.type===Bt.pop&&r.go(-1,!1)}).catch(ct),Promise.reject()):(T.delta&&r.go(-T.delta,!1),nn(a,$,hn))).then(a=>{a=a||w($,hn,!1),a&&(T.delta&&!oe(a,8)?r.go(-T.delta,!1):T.type===Bt.pop&&oe(a,20)&&r.go(-1,!1)),M($,hn,a)}).catch(ct)}))}let yn=Xe(),on=Xe(),W;function nn(B,I,T){ae(B);const $=on.list();return $.length?$.forEach(sn=>sn(B,I,T)):console.error(B),Promise.reject(B)}function te(){return W&&l.value!==de?Promise.resolve():new Promise((B,I)=>{yn.add([B,I])})}function ae(B){return W||(W=!B,dn(),yn.list().forEach(([I,T])=>B?T(B):I()),yn.reset()),B}function Gn(B,I,T,$){const{scrollBehavior:sn}=n;if(!He||!sn)return Promise.resolve();const hn=!T&&na(zr(B.fullPath,0))||($||!T)&&history.state&&history.state.scroll||null;return Gs().then(()=>sn(B,I,hn)).then(a=>a&&Xu(a)).catch(a=>nn(a,B,I))}const Rn=B=>r.go(B);let Ie;const Le=new Set,bt={currentRoute:l,listening:!0,addRoute:C,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:j,getRoutes:E,resolve:F,options:n,push:R,replace:K,go:Rn,back:()=>Rn(-1),forward:()=>Rn(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:on.add,isReady:te,install(B){const I=this;B.component("RouterLink",ya),B.component("RouterView",Ea),B.config.globalProperties.$router=I,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Kn(l)}),He&&!Ie&&l.value===de&&(Ie=!0,R(r.location).catch(sn=>{}));const T={};for(const sn in de)Object.defineProperty(T,sn,{get:()=>l.value[sn],enumerable:!0});B.provide(es,I),B.provide(Ui,Oo(T)),B.provide(Ls,l);const $=B.unmount;Le.add(B),B.unmount=function(){Le.delete(B),Le.size<1&&(f=de,G&&G(),G=null,l.value=de,Ie=!1,W=!1),$()}}};function Fn(B){return B.reduce((I,T)=>I.then(()=>m(T)),Promise.resolve())}return bt}function Ta(n,e){const t=[],s=[],r=[],o=Math.max(e.matched.length,n.matched.length);for(let i=0;i<o;i++){const c=e.matched[i];c&&(n.matched.find(f=>ze(f,c))?s.push(c):t.push(c));const l=n.matched[i];l&&(e.matched.find(f=>ze(f,l))||r.push(l))}return[t,s,r]}function tr(){return Vn(es)}const sr=wu("quiz",{state:()=>({currentQuizBank:null,currentQuestionIndex:0,userAnswers:new Map,markedQuestions:new Set,score:0,isComplete:!1}),actions:{setQuizBank(n){this.currentQuizBank=n,this.currentQuestionIndex=0,this.userAnswers.clear(),this.score=0,this.isComplete=!1},submitAnswer(n){if(!this.currentQuizBank)return;this.userAnswers.set(this.currentQuestionIndex,n);const e=this.currentQuizBank.questions[this.currentQuestionIndex];if(Array.isArray(n)&&Array.isArray(e.answer)){const t=[...n].sort().join(""),s=[...e.answer].sort().join("");t===s&&this.score++}else n===e.answer&&this.score++},getSavedAnswer(n){return this.userAnswers.get(n)},nextQuestion(){this.currentQuizBank&&(this.currentQuestionIndex<this.currentQuizBank.questions.length-1?this.currentQuestionIndex++:this.isComplete=!0)},previousQuestion(){this.currentQuestionIndex>0&&this.currentQuestionIndex--},toggleMarkQuestion(n){this.markedQuestions.has(n)?this.markedQuestions.delete(n):this.markedQuestions.add(n)},jumpToQuestion(n){n>=0&&this.currentQuizBank&&n<this.currentQuizBank.questions.length&&(this.currentQuestionIndex=n)}},getters:{progress:n=>{if(!n.currentQuizBank)return 0;const e=n.userAnswers.size;return Math.round(e/n.currentQuizBank.questions.length*100)},isAnswerCorrect:n=>e=>{var r;const t=n.userAnswers.get(e),s=(r=n.currentQuizBank)==null?void 0:r.questions[e];if(!t||!s)return!1;if(Array.isArray(t)&&Array.isArray(s.answer)){const o=[...t].sort().join(""),i=[...s.answer].sort().join("");return o===i}return t===s.answer}}}),Ra=`**一、单选题（30道）**

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
答案：ABCD`,Oa=`**一、单选题（30 道）**

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
答案：ABCD `,ka=`**一、单选题（30 道）**

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
答案：ABCD `,Ma=`**一、单选题（30 道）**

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
答案：ABCD `,Ia=`**一、单选题（60 道）**

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
答案：ABCD `,La=`**一、单选题（30 道）**

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
答案：ABCD `,Na=`**一、单选题（30 道）**

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
答案：ABCD `,Fa=`**一、单选题（30 道）**

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
答案：ABCD `,$a=`**一、单选题（30 道）**

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
答案：ABCD `,Ha=`**一、单选题（30 道）**

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
答案：ABCD `,ja=`**一、单选题（30 道）**

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
答案：ABC `,Ua=`**一、单选题（30 道）**

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
答案：ABCD `;function Qa(n){const e=n.split("**").filter(r=>r.trim()),t=[];let s="";return e.forEach(r=>{if(r.includes("单选题"))s="single";else if(r.includes("判断题"))s="boolean";else if(r.includes("多选题"))s="multiple";else if(r.trim()){const o=r.split(`
`).filter(i=>i.trim());o.forEach(i=>{if(i.match(/^\d+\./)){const c={type:s,content:i.replace(/^\d+\./,"").trim(),options:[],answer:""};if(s==="single"||s==="multiple"){const l=o.slice(o.indexOf(i)+1),f=[];for(const u of l)if(u.match(/^[A-D]\./))f.push(u.trim());else if(u.includes("答案：")){s==="multiple"?c.answer=u.replace("答案：","").trim().split(""):c.answer=u.replace("答案：","").trim();break}c.options=f}else if(s==="boolean"){c.options=["正确","错误"];const l=o[o.indexOf(i)+1];l&&l.includes("答案：")&&(c.answer=l.replace("答案：","").trim())}t.push(c)}})}}),{title:"题库",questions:t}}async function Ka(){var n;try{const e=[],t=Object.assign({"/quizbanks/南网信通专业知识基础练习/信息通信-1.md":Ra,"/quizbanks/南网信通专业知识基础练习/信息通信-2.md":Oa,"/quizbanks/南网信通专业知识基础练习/信息通信-3.md":ka,"/quizbanks/南网信通专业知识基础练习/信息通信-4.md":Ma,"/quizbanks/南网信通专业知识基础练习/信息通信考纲题-高难度.md":Ia,"/quizbanks/南网信通专业知识基础练习/光纤通信考点专项-1.md":La,"/quizbanks/南网信通专业知识基础练习/数字化新技术基础理专项-1.md":Na,"/quizbanks/南网信通专业知识基础练习/数据库系统考点专项-1.md":Fa,"/quizbanks/南网信通专业知识基础练习/数据结构考点专项（偏概念）.md":$a,"/quizbanks/南网信通专业知识基础练习/计算机网络考点专项-1.md":Ha,"/quizbanks/南网信通专业知识基础练习/通信原理考点专项-1.md":ja,"/quizbanks/南网信通专业知识基础练习/通信网理论考点专项-1.md":Ua});for(const[s,r]of Object.entries(t)){const o=s.split("/"),i=((n=o.pop())==null?void 0:n.replace(".md",""))||"",c=o.length>2?o[2]:"未分类",l=Qa(r);l.title=i,l.category=c,e.push(l)}return e}catch(e){return console.error("Failed to load quiz banks:",e),[]}}const za={class:"max-w-4xl mx-auto p-4 custom-scrollbar"},Va={class:"grid grid-cols-1 gap-6"},qa=["onClick"],Wa={class:"flex items-center justify-between"},Ga={class:"text-xl font-semibold text-white"},Ya={class:"text-blue-100 text-sm mt-1"},Ja={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ml-4 animate-fadeIn"},Xa=["onClick"],Za={class:"text-lg font-semibold text-gray-800 dark:text-white"},nf={class:"text-gray-600 dark:text-gray-300 mt-1"},ef=qe({__name:"QuizSelector",setup(n){const e=tr(),t=sr(),s=Hn({}),r=Hn(new Set);Gt(async()=>{const c=await Ka();s.value=c.reduce((l,f)=>{const u=f.category||"未分类";return l[u]||(l[u]=[]),l[u].push(f),l},{})});const o=c=>{r.value.has(c)?r.value.delete(c):r.value.add(c)},i=c=>{t.setQuizBank(c),e.push("/quiz")};return(c,l)=>(an(),pn("div",za,[l[1]||(l[1]=O("h1",{class:"text-2xl font-bold mb-6 text-gray-800 dark:text-white"},"选择题库",-1)),O("div",Va,[(an(!0),pn(En,null,rt(s.value,(f,u)=>(an(),pn("div",{key:u},[O("div",{class:"bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 rounded-lg p-4 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5",onClick:d=>o(u)},[O("div",Wa,[O("h2",Ga,mn(u),1),(an(),pn("svg",{class:Zn(["w-6 h-6 transform transition-transform text-white",{"rotate-180":r.value.has(u)}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l[0]||(l[0]=[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))]),O("p",Ya,mn(f.length)+" 个题库",1)],8,qa),Ll(O("div",Ja,[(an(!0),pn(En,null,rt(f,d=>(an(),pn("div",{key:d.title,class:"border rounded-lg p-4 cursor-pointer bg-white dark:bg-gray-700 hover:bg-green-50 dark:hover:bg-green-800 transition-all duration-300 shadow-sm hover:shadow-md",onClick:p=>i(d)},[O("h3",Za,mn(d.title),1),O("p",nf,"题数: "+mn(d.questions.length),1)],8,Xa))),128))],512),[[nu,r.value.has(u)]])]))),128))])]))}}),Qi=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},tf=Qi(ef,[["__scopeId","data-v-cf40cb3b"]]),sf={class:"max-w-4xl mx-auto"},rf={class:"mb-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3"},of={class:"relative"},lf={class:"flex mb-2 items-center justify-between"},cf={class:"text-sm font-medium text-blue-600 dark:text-blue-400"},uf={class:"h-3 bg-blue-100 dark:bg-blue-900 rounded-full"},af={class:"p-4 border-b border-gray-200 dark:border-gray-700"},ff={class:"flex justify-between items-center"},df={class:"flex items-center gap-2"},hf={class:"flex-1 overflow-y-auto p-4 custom-scrollbar"},pf={class:"grid grid-cols-5 gap-2"},Cf=["onClick"],Af={key:0,class:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"},gf={key:1,class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg min-h-[600px] flex flex-col"},Bf={class:"flex-1 p-8 overflow-y-auto"},Df={class:"flex justify-between items-center mb-6"},mf={class:"flex items-center gap-4"},vf={class:"text-xl font-bold text-gray-800 dark:text-white"},bf={class:"flex items-center gap-4"},_f={class:"px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"},yf={class:"text-lg mb-8 text-gray-700 dark:text-gray-200"},xf={class:"space-y-4"},Sf=["onClick"],wf=["onClick"],Ef={class:"border-t border-gray-100 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 rounded-b-xl"},Pf={class:"flex justify-between items-center max-w-2xl mx-auto"},Tf=["disabled"],Rf=["disabled"],Of={key:2,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},kf={class:"bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4"},Mf={class:"flex justify-end gap-4"},If=qe({__name:"QuizQuestion",setup(n){const e=tr(),t=sr(),s=Hn(!1),r=Hn([]),o=Hn(""),i=Hn(!1),c=Hn(!1),l=gn(()=>{var m;return(m=t.currentQuizBank)==null?void 0:m.questions[t.currentQuestionIndex]}),f=gn(()=>t.currentQuestionIndex),u=gn(()=>t.progress),d=gn(()=>t.currentQuizBank?f.value===t.currentQuizBank.questions.length-1:!1),p=gn(()=>{var m;return((m=t.currentQuizBank)==null?void 0:m.questions.length)||0});Ke(()=>f.value,m=>{const _=t.getSavedAnswer(m);_?(Array.isArray(_)?r.value=_:o.value=_,i.value=!0,s.value=!0):(r.value=[],o.value="",i.value=!1,s.value=!1)},{immediate:!0});const C=m=>{s.value||(o.value=m,i.value=!0,s.value=!0,t.submitAnswer(m))},y=()=>{!l.value||!i.value||(s.value=!0,t.submitAnswer(r.value))},E=()=>{d.value?c.value=!0:t.nextQuestion()},j=()=>{f.value>0&&t.previousQuestion()},F=m=>{var w,G,dn;if(!s.value)return"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const _=o.value===m,M=((w=l.value)==null?void 0:w.type)==="boolean"?((G=l.value)==null?void 0:G.answer)===m:(dn=l.value)==null?void 0:dn.answer.includes(m);return _&&M?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":_&&!M?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!_&&M?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},L=m=>{var w;if(!s.value)return r.value.includes(m)?"bg-blue-100 dark:bg-blue-900/50 border-blue-500 border text-gray-700 dark:text-gray-200":"hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200";const _=r.value.includes(m),M=Array.isArray((w=l.value)==null?void 0:w.answer)&&l.value.answer.includes(m);return _&&M?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":_&&!M?"bg-red-100 dark:bg-red-900/50 border-red-500 border text-gray-700 dark:text-gray-200":!_&&M?"bg-green-100 dark:bg-green-900/50 border-green-500 border text-gray-700 dark:text-gray-200":"border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"},N=m=>{if(s.value)return;const _=r.value.indexOf(m);_===-1?r.value.push(m):r.value.splice(_,1),i.value=r.value.length>0},R=Hn(!1),K=gn(()=>t.markedQuestions.has(f.value)),Z=()=>{t.toggleMarkQuestion(f.value)},Y=m=>{t.jumpToQuestion(m),R.value=!1},V=()=>{c.value=!1,e.push("/result")};return(m,_)=>(an(),pn("div",sf,[R.value?(an(),pn("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:_[0]||(_[0]=M=>R.value=!1)})):Pe("",!0),O("div",rf,[O("div",of,[O("div",lf,[_[5]||(_[5]=O("span",{class:"text-sm font-medium text-blue-600 dark:text-blue-400"},"做题进度",-1)),O("span",cf,mn(Math.round(u.value))+"%",1)]),O("div",uf,[O("div",{class:"h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500",style:Kt({width:`${u.value}%`})},null,4)])])]),O("div",{class:Zn(["fixed right-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 flex flex-col",R.value?"translate-x-0":"translate-x-full"]),style:{width:"300px"}},[O("div",af,[O("div",ff,[_[7]||(_[7]=O("h3",{class:"text-lg font-bold text-gray-800 dark:text-white"},"题目导航",-1)),O("div",df,[O("button",{onClick:_[1]||(_[1]=M=>c.value=!0),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-2 py-1 rounded text-white text-sm font-semibold shadow-md hover:opacity-90"},"交卷"),O("button",{onClick:_[2]||(_[2]=M=>R.value=!1),class:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"},_[6]||(_[6]=[O("span",{class:"sr-only"},"关闭",-1),O("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))])])]),O("div",hf,[O("div",pf,[(an(!0),pn(En,null,rt(p.value,M=>(an(),pn("button",{key:M-1,onClick:w=>Y(M-1),class:Zn(["w-10 h-10 rounded-lg flex items-center justify-center relative",[f.value===M-1?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 dark:text-gray-200",Kn(t).userAnswers.has(M-1)&&Kn(t).isAnswerCorrect(M-1)?"border-2 border-green-500":"",Kn(t).userAnswers.has(M-1)&&!Kn(t).isAnswerCorrect(M-1)?"border-2 border-red-500":""]])},[mi(mn(M)+" ",1),Kn(t).markedQuestions.has(M-1)?(an(),pn("span",Af)):Pe("",!0)],10,Cf))),128))])])],2),l.value?(an(),pn("div",gf,[O("div",Bf,[O("div",Df,[O("div",mf,[O("h2",vf," 第 "+mn(f.value+1)+" 题 ",1),O("button",{onClick:Z,class:Zn(["p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",{"text-red-500 dark:text-red-400":K.value}])},_[8]||(_[8]=[O("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})],-1)]),2)]),O("div",bf,[O("span",_f,mn(f.value+1)+" / "+mn(p.value),1),O("button",{onClick:_[3]||(_[3]=M=>R.value=!0),class:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"},_[9]||(_[9]=[O("svg",{class:"w-6 h-6 text-gray-600 dark:text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])]),O("p",yf,mn(l.value.content),1),O("div",xf,[l.value.type==="single"||l.value.type==="boolean"?(an(!0),pn(En,{key:0},rt(l.value.options,M=>(an(),pn("div",{key:M,onClick:w=>C(l.value.type==="boolean"?M:M[0]),class:Zn(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[F(l.value.type==="boolean"?M:M[0])]])},mn(M),11,Sf))),128)):l.value.type==="multiple"?(an(!0),pn(En,{key:1},rt(l.value.options,M=>(an(),pn("div",{key:M,onClick:w=>!s.value&&N(M[0]),class:Zn(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[L(M[0])]])},mn(M),11,wf))),128)):Pe("",!0)])]),O("div",Ef,[O("div",Pf,[O("button",{onClick:j,disabled:f.value===0,class:Zn(["px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",f.value===0?"bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500":"bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50"])}," 上一题 ",10,Tf),l.value.type==="multiple"&&!s.value?(an(),pn("button",{key:0,onClick:y,disabled:!i.value,class:"px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"}," 确认答案 ",8,Rf)):Pe("",!0),O("button",{onClick:E,class:"px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"},mn(d.value?"完成":"下一题"),1)])])])):Pe("",!0),c.value?(an(),pn("div",Of,[O("div",kf,[_[10]||(_[10]=O("h3",{class:"text-lg font-bold mb-4 text-gray-800 dark:text-white"},"确认交卷",-1)),_[11]||(_[11]=O("p",{class:"text-gray-600 dark:text-gray-300 mb-6"},"确定要交卷吗？请确认所有题目都已完成。",-1)),O("div",Mf,[O("button",{onClick:_[4]||(_[4]=M=>c.value=!1),class:"bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 rounded-lg"}," 取消 "),O("button",{onClick:V,class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold hover:opacity-90"}," 确认交卷 ")])])])):Pe("",!0)]))}}),Lf=Qi(If,[["__scopeId","data-v-5f6d0687"]]),Nf={class:"max-w-4xl mx-auto p-4"},Ff={class:"bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"},$f={class:"space-y-6"},Hf={class:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-lg p-6"},jf={class:"text-center"},Uf={class:"text-4xl font-bold text-blue-600 dark:text-blue-400"},Qf={class:"mt-2 text-gray-600 dark:text-gray-300"},Kf=qe({__name:"QuizResult",setup(n){tr();const e=sr(),t=gn(()=>e.score),s=gn(()=>{var r;return((r=e.currentQuizBank)==null?void 0:r.questions.length)||0});return(r,o)=>(an(),pn("div",Nf,[O("div",Ff,[o[0]||(o[0]=O("h2",{class:"text-2xl font-bold text-gray-800 dark:text-white mb-6"},"结果",-1)),O("div",$f,[O("div",Hf,[O("div",jf,[O("div",Uf,mn(t.value)+" / "+mn(s.value),1),O("div",Qf," 正确率: "+mn(Math.round(t.value/s.value*100))+"% ",1)])])])])]))}}),zf=Pa({history:ra("/prv-shuati/"),routes:[{path:"/",component:tf},{path:"/quiz",component:Lf},{path:"/result",component:Kf}]}),Vf={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"},qf={class:"bg-white dark:bg-gray-800 shadow-md"},Wf={class:"max-w-4xl mx-auto p-4 flex justify-between items-center"},Gf={class:"flex items-center gap-4"},Yf={key:0,class:"w-6 h-6 text-yellow-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Jf={key:1,class:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Xf={class:"container mx-auto px-4 py-2"},Zf=qe({__name:"App",setup(n){const e=Hn(!1),t=()=>{e.value=!e.value,e.value?(document.documentElement.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.documentElement.classList.remove("dark"),localStorage.setItem("darkMode","false"))};return Gt(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.documentElement.classList.add("dark"))}),(s,r)=>{const o=Jl("router-view");return an(),pn("div",Vf,[O("header",qf,[O("div",Wf,[r[3]||(r[3]=O("h1",{class:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"}," 小浩刷题系统 ",-1)),O("div",Gf,[O("button",{onClick:t,class:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"},[e.value?(an(),pn("svg",Yf,r[1]||(r[1]=[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]))):(an(),pn("svg",Jf,r[2]||(r[2]=[O("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])))]),s.$route.path!=="/"?(an(),pn("button",{key:0,onClick:r[0]||(r[0]=i=>s.$router.push("/")),class:"cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-4 py-1.5 rounded text-white text-sm font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow"}," 退出 ")):Pe("",!0)])])]),O("main",Xf,[Tn(o,null,{default:ys(({Component:i})=>[Tn(Wc,{name:"fade",mode:"out-in"},{default:ys(()=>[(an(),Bi(Xl(i)))]),_:2},1024)]),_:1})])])}}}),rr=gu(Zf);rr.use(vu());rr.use(zf);rr.mount("#app");
