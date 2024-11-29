(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ms(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ce={},Ft=[],Ze=()=>{},Qi=()=>!1,$n=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Is=e=>e.startsWith("onUpdate:"),ge=Object.assign,ks=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vi=Object.prototype.hasOwnProperty,ne=(e,t)=>Vi.call(e,t),V=Array.isArray,jt=e=>Nn(e)==="[object Map]",oo=e=>Nn(e)==="[object Set]",q=e=>typeof e=="function",de=e=>typeof e=="string",yt=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",io=e=>(ue(e)||q(e))&&q(e.then)&&q(e.catch),lo=Object.prototype.toString,Nn=e=>lo.call(e),Ui=e=>Nn(e).slice(8,-1),co=e=>Nn(e)==="[object Object]",Ls=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yt=Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zi=/-(\w)/g,He=Fn(e=>e.replace(zi,(t,n)=>n?n.toUpperCase():"")),Ki=/\B([A-Z])/g,Tt=Fn(e=>e.replace(Ki,"-$1").toLowerCase()),jn=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xn=Fn(e=>e?`on${jn(e)}`:""),vt=(e,t)=>!Object.is(e,t),Zn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},uo=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},qi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Wi=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let or;const Hn=()=>or||(or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qn(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=de(s)?Xi(s):Qn(s);if(r)for(const o in r)t[o]=r[o]}return t}else if(de(e)||ue(e))return e}const Gi=/;(?![^(]*\))/g,Ji=/:([^]+)/,Yi=/\/\*[^]*?\*\//g;function Xi(e){const t={};return e.replace(Yi,"").split(Gi).forEach(n=>{if(n){const s=n.split(Ji);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ot(e){let t="";if(de(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const s=ot(e[n]);s&&(t+=s+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Zi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",el=Ms(Zi);function ao(e){return!!e||e===""}const fo=e=>!!(e&&e.__v_isRef===!0),we=e=>de(e)?e:e==null?"":V(e)||ue(e)&&(e.toString===lo||!q(e.toString))?fo(e)?we(e.value):JSON.stringify(e,ho,2):String(e),ho=(e,t)=>fo(t)?ho(e,t.value):jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],o)=>(n[es(s,o)+" =>"]=r,n),{})}:oo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>es(n))}:yt(t)?es(t):ue(t)&&!V(t)&&!co(t)?String(t):t,es=(e,t="")=>{var n;return yt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function go(e){return new po(e)}function mo(){return Se}function tl(e,t=!1){Se&&Se.cleanups.push(e)}let le;const ts=new WeakSet;class vo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ts.has(this)&&(ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ir(this),yo(this);const t=le,n=Ve;le=this,Ve=!0;try{return this.fn()}finally{Co(this),le=t,Ve=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Fs(t);this.deps=this.depsTail=void 0,ir(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ms(this)&&this.run()}get dirty(){return ms(this)}}let bo=0,Xt,Zt;function _o(e,t=!1){if(e.flags|=8,t){e.next=Zt,Zt=e;return}e.next=Xt,Xt=e}function $s(){bo++}function Ns(){if(--bo>0)return;if(Zt){let t=Zt;for(Zt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Xt;){let t=Xt;for(Xt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function yo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Co(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Fs(s),nl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function ms(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(xo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function xo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ln))return;e.globalVersion=ln;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ms(e)){e.flags&=-3;return}const n=le,s=Ve;le=e,Ve=!0;try{yo(e);const r=e.fn(e._value);(t.version===0||vt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{le=n,Ve=s,Co(e),e.flags&=-3}}function Fs(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Fs(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function nl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ve=!0;const Ao=[];function Ct(){Ao.push(Ve),Ve=!1}function xt(){const e=Ao.pop();Ve=e===void 0?!0:e}function ir(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let ln=0;class sl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class js{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!Ve||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new sl(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,wo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(t){this.version++,ln++,this.notify(t)}notify(t){$s();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ns()}}}function wo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)wo(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Dn=new WeakMap,Dt=Symbol(""),vs=Symbol(""),cn=Symbol("");function ye(e,t,n){if(Ve&&le){let s=Dn.get(e);s||Dn.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new js),r.map=s,r.key=n),r.track()}}function it(e,t,n,s,r,o){const i=Dn.get(e);if(!i){ln++;return}const c=l=>{l&&l.trigger()};if($s(),t==="clear")i.forEach(c);else{const l=V(e),f=l&&Ls(n);if(l&&n==="length"){const u=Number(s);i.forEach((d,p)=>{(p==="length"||p===cn||!yt(p)&&p>=u)&&c(d)})}else switch((n!==void 0||i.has(void 0))&&c(i.get(n)),f&&c(i.get(cn)),t){case"add":l?f&&c(i.get("length")):(c(i.get(Dt)),jt(e)&&c(i.get(vs)));break;case"delete":l||(c(i.get(Dt)),jt(e)&&c(i.get(vs)));break;case"set":jt(e)&&c(i.get(Dt));break}}Ns()}function rl(e,t){const n=Dn.get(e);return n&&n.get(t)}function kt(e){const t=X(e);return t===e?t:(ye(t,"iterate",cn),je(e)?t:t.map(Ce))}function Vn(e){return ye(e=X(e),"iterate",cn),e}const ol={__proto__:null,[Symbol.iterator](){return ns(this,Symbol.iterator,Ce)},concat(...e){return kt(this).concat(...e.map(t=>V(t)?kt(t):t))},entries(){return ns(this,"entries",e=>(e[1]=Ce(e[1]),e))},every(e,t){return tt(this,"every",e,t,void 0,arguments)},filter(e,t){return tt(this,"filter",e,t,n=>n.map(Ce),arguments)},find(e,t){return tt(this,"find",e,t,Ce,arguments)},findIndex(e,t){return tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return tt(this,"findLast",e,t,Ce,arguments)},findLastIndex(e,t){return tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ss(this,"includes",e)},indexOf(...e){return ss(this,"indexOf",e)},join(e){return kt(this).join(e)},lastIndexOf(...e){return ss(this,"lastIndexOf",e)},map(e,t){return tt(this,"map",e,t,void 0,arguments)},pop(){return Kt(this,"pop")},push(...e){return Kt(this,"push",e)},reduce(e,...t){return lr(this,"reduce",e,t)},reduceRight(e,...t){return lr(this,"reduceRight",e,t)},shift(){return Kt(this,"shift")},some(e,t){return tt(this,"some",e,t,void 0,arguments)},splice(...e){return Kt(this,"splice",e)},toReversed(){return kt(this).toReversed()},toSorted(e){return kt(this).toSorted(e)},toSpliced(...e){return kt(this).toSpliced(...e)},unshift(...e){return Kt(this,"unshift",e)},values(){return ns(this,"values",Ce)}};function ns(e,t,n){const s=Vn(e),r=s[t]();return s!==e&&!je(e)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const il=Array.prototype;function tt(e,t,n,s,r,o){const i=Vn(e),c=i!==e&&!je(e),l=i[t];if(l!==il[t]){const d=l.apply(e,o);return c?Ce(d):d}let f=n;i!==e&&(c?f=function(d,p){return n.call(this,Ce(d),p,e)}:n.length>2&&(f=function(d,p){return n.call(this,d,p,e)}));const u=l.call(i,f,s);return c&&r?r(u):u}function lr(e,t,n,s){const r=Vn(e);let o=n;return r!==e&&(je(e)?n.length>3&&(o=function(i,c,l){return n.call(this,i,c,l,e)}):o=function(i,c,l){return n.call(this,i,Ce(c),l,e)}),r[t](o,...s)}function ss(e,t,n){const s=X(e);ye(s,"iterate",cn);const r=s[t](...n);return(r===-1||r===!1)&&Vs(n[0])?(n[0]=X(n[0]),s[t](...n)):r}function Kt(e,t,n=[]){Ct(),$s();const s=X(e)[t].apply(e,n);return Ns(),xt(),s}const ll=Ms("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(yt));function cl(e){yt(e)||(e=String(e));const t=X(this);return ye(t,"has",e),t.hasOwnProperty(e)}class Eo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?bl:Po:o?Do:Bo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=V(t);if(!r){let l;if(i&&(l=ol[n]))return l;if(n==="hasOwnProperty")return cl}const c=Reflect.get(t,n,he(t)?t:s);return(yt(n)?So.has(n):ll(n))||(r||ye(t,"get",n),o)?c:he(c)?i&&Ls(n)?c:c.value:ue(c)?r?To(c):mn(c):c}}class Ro extends Eo{constructor(t=!1){super(!1,t)}set(t,n,s,r){let o=t[n];if(!this._isShallow){const l=Ot(o);if(!je(s)&&!Ot(s)&&(o=X(o),s=X(s)),!V(t)&&he(o)&&!he(s))return l?!1:(o.value=s,!0)}const i=V(t)&&Ls(n)?Number(n)<t.length:ne(t,n),c=Reflect.set(t,n,s,he(t)?t:r);return t===X(r)&&(i?vt(s,o)&&it(t,"set",n,s):it(t,"add",n,s)),c}deleteProperty(t,n){const s=ne(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&it(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!yt(n)||!So.has(n))&&ye(t,"has",n),s}ownKeys(t){return ye(t,"iterate",V(t)?"length":Dt),Reflect.ownKeys(t)}}class ul extends Eo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const al=new Ro,fl=new ul,dl=new Ro(!0);const bs=e=>e,Cn=e=>Reflect.getPrototypeOf(e);function hl(e,t,n){return function(...s){const r=this.__v_raw,o=X(r),i=jt(o),c=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=r[e](...s),u=n?bs:t?_s:Ce;return!t&&ye(o,"iterate",l?vs:Dt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function xn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function pl(e,t){const n={get(r){const o=this.__v_raw,i=X(o),c=X(r);e||(vt(r,c)&&ye(i,"get",r),ye(i,"get",c));const{has:l}=Cn(i),f=t?bs:e?_s:Ce;if(l.call(i,r))return f(o.get(r));if(l.call(i,c))return f(o.get(c));o!==i&&o.get(r)},get size(){const r=this.__v_raw;return!e&&ye(X(r),"iterate",Dt),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,i=X(o),c=X(r);return e||(vt(r,c)&&ye(i,"has",r),ye(i,"has",c)),r===c?o.has(r):o.has(r)||o.has(c)},forEach(r,o){const i=this,c=i.__v_raw,l=X(c),f=t?bs:e?_s:Ce;return!e&&ye(l,"iterate",Dt),c.forEach((u,d)=>r.call(o,f(u),f(d),i))}};return ge(n,e?{add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear")}:{add(r){!t&&!je(r)&&!Ot(r)&&(r=X(r));const o=X(this);return Cn(o).has.call(o,r)||(o.add(r),it(o,"add",r,r)),this},set(r,o){!t&&!je(o)&&!Ot(o)&&(o=X(o));const i=X(this),{has:c,get:l}=Cn(i);let f=c.call(i,r);f||(r=X(r),f=c.call(i,r));const u=l.call(i,r);return i.set(r,o),f?vt(o,u)&&it(i,"set",r,o):it(i,"add",r,o),this},delete(r){const o=X(this),{has:i,get:c}=Cn(o);let l=i.call(o,r);l||(r=X(r),l=i.call(o,r)),c&&c.call(o,r);const f=o.delete(r);return l&&it(o,"delete",r,void 0),f},clear(){const r=X(this),o=r.size!==0,i=r.clear();return o&&it(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=hl(r,e,t)}),n}function Hs(e,t){const n=pl(e,t);return(s,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,o)}const gl={get:Hs(!1,!1)},ml={get:Hs(!1,!0)},vl={get:Hs(!0,!1)};const Bo=new WeakMap,Do=new WeakMap,Po=new WeakMap,bl=new WeakMap;function _l(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yl(e){return e.__v_skip||!Object.isExtensible(e)?0:_l(Ui(e))}function mn(e){return Ot(e)?e:Qs(e,!1,al,gl,Bo)}function Oo(e){return Qs(e,!1,dl,ml,Do)}function To(e){return Qs(e,!0,fl,vl,Po)}function Qs(e,t,n,s,r){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const i=yl(e);if(i===0)return e;const c=new Proxy(e,i===2?s:n);return r.set(e,c),c}function bt(e){return Ot(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ot(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function Vs(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Us(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&uo(e,"__v_skip",!0),e}const Ce=e=>ue(e)?mn(e):e,_s=e=>ue(e)?To(e):e;function he(e){return e?e.__v_isRef===!0:!1}function Ye(e){return Mo(e,!1)}function Cl(e){return Mo(e,!0)}function Mo(e,t){return he(e)?e:new xl(e,t)}class xl{constructor(t,n){this.dep=new js,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:Ce(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||je(t)||Ot(t);t=s?t:X(t),vt(t,n)&&(this._rawValue=t,this._value=s?t:Ce(t),this.dep.trigger())}}function Fe(e){return he(e)?e.value:e}const Al={get:(e,t,n)=>t==="__v_raw"?e:Fe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return he(r)&&!he(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Io(e){return bt(e)?e:new Proxy(e,Al)}function wl(e){const t=V(e)?new Array(e.length):{};for(const n in e)t[n]=El(e,n);return t}class Sl{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return rl(X(this._object),this._key)}}function El(e,t,n){const s=e[t];return he(s)?s:new Sl(e,t,n)}class Rl{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new js(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ln-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return _o(this,!0),!0}get value(){const t=this.dep.track();return xo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bl(e,t,n=!1){let s,r;return q(e)?s=e:(s=e.get,r=e.set),new Rl(s,r,n)}const An={},Pn=new WeakMap;let Rt;function Dl(e,t=!1,n=Rt){if(n){let s=Pn.get(n);s||Pn.set(n,s=[]),s.push(e)}}function Pl(e,t,n=ce){const{immediate:s,deep:r,once:o,scheduler:i,augmentJob:c,call:l}=n,f=O=>r?O:je(O)||r===!1||r===0?mt(O,1):mt(O);let u,d,p,g,A=!1,B=!1;if(he(e)?(d=()=>e.value,A=je(e)):bt(e)?(d=()=>f(e),A=!0):V(e)?(B=!0,A=e.some(O=>bt(O)||je(O)),d=()=>e.map(O=>{if(he(O))return O.value;if(bt(O))return f(O);if(q(O))return l?l(O,2):O()})):q(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){Ct();try{p()}finally{xt()}}const O=Rt;Rt=u;try{return l?l(e,3,[g]):e(g)}finally{Rt=O}}:d=Ze,t&&r){const O=d,U=r===!0?1/0:r;d=()=>mt(O(),U)}const H=mo(),N=()=>{u.stop(),H&&H.active&&ks(H.effects,u)};if(o&&t){const O=t;t=(...U)=>{O(...U),N()}}let k=B?new Array(e.length).fill(An):An;const L=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const U=u.run();if(r||A||(B?U.some((Z,J)=>vt(Z,k[J])):vt(U,k))){p&&p();const Z=Rt;Rt=u;try{const J=[U,k===An?void 0:B&&k[0]===An?[]:k,g];l?l(t,3,J):t(...J),k=U}finally{Rt=Z}}}else u.run()};return c&&c(L),u=new vo(d),u.scheduler=i?()=>i(L,!1):L,g=O=>Dl(O,!1,u),p=u.onStop=()=>{const O=Pn.get(u);if(O){if(l)l(O,4);else for(const U of O)U();Pn.delete(u)}},t?s?L(!0):k=u.run():i?i(L.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function mt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,he(e))mt(e.value,t,n);else if(V(e))for(let s=0;s<e.length;s++)mt(e[s],t,n);else if(oo(e)||jt(e))e.forEach(s=>{mt(s,t,n)});else if(co(e)){for(const s in e)mt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&mt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vn(e,t,n,s){try{return s?e(...s):e()}catch(r){Un(r,t,n)}}function ze(e,t,n,s){if(q(e)){const r=vn(e,t,n,s);return r&&io(r)&&r.catch(o=>{Un(o,t,n)}),r}if(V(e)){const r=[];for(let o=0;o<e.length;o++)r.push(ze(e[o],t,n,s));return r}}function Un(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ce;if(t){let c=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,f)===!1)return}c=c.parent}if(o){Ct(),vn(o,null,10,[e,l,f]),xt();return}}Ol(e,n,r,s,i)}function Ol(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const Ee=[];let Je=-1;const Ht=[];let dt=null,$t=0;const ko=Promise.resolve();let On=null;function zs(e){const t=On||ko;return e?t.then(this?e.bind(this):e):t}function Tl(e){let t=Je+1,n=Ee.length;for(;t<n;){const s=t+n>>>1,r=Ee[s],o=un(r);o<e||o===e&&r.flags&2?t=s+1:n=s}return t}function Ks(e){if(!(e.flags&1)){const t=un(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=un(n)?Ee.push(e):Ee.splice(Tl(t),0,e),e.flags|=1,Lo()}}function Lo(){On||(On=ko.then(No))}function Ml(e){V(e)?Ht.push(...e):dt&&e.id===-1?dt.splice($t+1,0,e):e.flags&1||(Ht.push(e),e.flags|=1),Lo()}function cr(e,t,n=Je+1){for(;n<Ee.length;n++){const s=Ee[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ee.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $o(e){if(Ht.length){const t=[...new Set(Ht)].sort((n,s)=>un(n)-un(s));if(Ht.length=0,dt){dt.push(...t);return}for(dt=t,$t=0;$t<dt.length;$t++){const n=dt[$t];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dt=null,$t=0}}const un=e=>e.id==null?e.flags&2?-1:1/0:e.id;function No(e){try{for(Je=0;Je<Ee.length;Je++){const t=Ee[Je];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),vn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Je<Ee.length;Je++){const t=Ee[Je];t&&(t.flags&=-2)}Je=-1,Ee.length=0,$o(),On=null,(Ee.length||Ht.length)&&No()}}let ke=null,Fo=null;function Tn(e){const t=ke;return ke=e,Fo=e&&e.type.__scopeId||null,t}function ys(e,t=ke,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&br(-1);const o=Tn(t);let i;try{i=e(...r)}finally{Tn(o),s._d&&br(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function At(e,t,n,s){const r=e.dirs,o=t&&t.dirs;for(let i=0;i<r.length;i++){const c=r[i];o&&(c.oldValue=o[i].value);let l=c.dir[s];l&&(Ct(),ze(l,n,8,[e.el,c,e,t]),xt())}}const Il=Symbol("_vte"),jo=e=>e.__isTeleport,ht=Symbol("_leaveCb"),wn=Symbol("_enterCb");function kl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qs(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const Ne=[Function,Array],Ho={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ne,onEnter:Ne,onAfterEnter:Ne,onEnterCancelled:Ne,onBeforeLeave:Ne,onLeave:Ne,onAfterLeave:Ne,onLeaveCancelled:Ne,onBeforeAppear:Ne,onAppear:Ne,onAfterAppear:Ne,onAppearCancelled:Ne},Qo=e=>{const t=e.subTree;return t.component?Qo(t.component):t},Ll={name:"BaseTransition",props:Ho,setup(e,{slots:t}){const n=Tc(),s=kl();return()=>{const r=t.default&&zo(t.default(),!0);if(!r||!r.length)return;const o=Vo(r),i=X(e),{mode:c}=i;if(s.isLeaving)return rs(o);const l=ur(o);if(!l)return rs(o);let f=Cs(l,i,s,n,d=>f=d);l.type!==Pe&&an(l,f);let u=n.subTree&&ur(n.subTree);if(u&&u.type!==Pe&&!Bt(l,u)&&Qo(n).type!==Pe){let d=Cs(u,i,s,n);if(an(u,d),c==="out-in"&&l.type!==Pe)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},rs(o);c==="in-out"&&l.type!==Pe?d.delayLeave=(p,g,A)=>{const B=Uo(s,u);B[String(u.key)]=u,p[ht]=()=>{g(),p[ht]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{A(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Vo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}const $l=Ll;function Uo(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Cs(e,t,n,s,r){const{appear:o,mode:i,persisted:c=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:A,onLeaveCancelled:B,onBeforeAppear:H,onAppear:N,onAfterAppear:k,onAppearCancelled:L}=t,O=String(e.key),U=Uo(n,e),Z=(y,w)=>{y&&ze(y,s,9,w)},J=(y,w)=>{const M=w[1];Z(y,w),V(y)?y.every(R=>R.length<=1)&&M():y.length<=1&&M()},K={mode:i,persisted:c,beforeEnter(y){let w=l;if(!n.isMounted)if(o)w=H||l;else return;y[ht]&&y[ht](!0);const M=U[O];M&&Bt(e,M)&&M.el[ht]&&M.el[ht](),Z(w,[y])},enter(y){let w=f,M=u,R=d;if(!n.isMounted)if(o)w=N||f,M=k||u,R=L||d;else return;let G=!1;const ae=y[wn]=xe=>{G||(G=!0,xe?Z(R,[y]):Z(M,[y]),K.delayedLeave&&K.delayedLeave(),y[wn]=void 0)};w?J(w,[y,ae]):ae()},leave(y,w){const M=String(e.key);if(y[wn]&&y[wn](!0),n.isUnmounting)return w();Z(p,[y]);let R=!1;const G=y[ht]=ae=>{R||(R=!0,w(),ae?Z(B,[y]):Z(A,[y]),y[ht]=void 0,U[M]===e&&delete U[M])};U[M]=e,g?J(g,[y,G]):G()},clone(y){const w=Cs(y,t,n,s,r);return r&&r(w),w}};return K}function rs(e){if(zn(e))return e=_t(e),e.children=null,e}function ur(e){if(!zn(e))return jo(e.type)&&e.children?Vo(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&q(n.default))return n.default()}}function an(e,t){e.shapeFlag&6&&e.component?(e.transition=t,an(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zo(e,t=!1,n){let s=[],r=0;for(let o=0;o<e.length;o++){let i=e[o];const c=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===De?(i.patchFlag&128&&r++,s=s.concat(zo(i.children,t,c))):(t||i.type!==Pe)&&s.push(c!=null?_t(i,{key:c}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function bn(e,t){return q(e)?ge({name:e.name},t,{setup:e}):e}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Mn(e,t,n,s,r=!1){if(V(e)){e.forEach((A,B)=>Mn(A,t&&(V(t)?t[B]:t),n,s,r));return}if(en(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Mn(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Ys(s.component):s.el,i=r?null:o,{i:c,r:l}=e,f=t&&t.r,u=c.refs===ce?c.refs={}:c.refs,d=c.setupState,p=X(d),g=d===ce?()=>!1:A=>ne(p,A);if(f!=null&&f!==l&&(de(f)?(u[f]=null,g(f)&&(d[f]=null)):he(f)&&(f.value=null)),q(l))vn(l,c,12,[i,u]);else{const A=de(l),B=he(l);if(A||B){const H=()=>{if(e.f){const N=A?g(l)?d[l]:u[l]:l.value;r?V(N)&&ks(N,o):V(N)?N.includes(o)||N.push(o):A?(u[l]=[o],g(l)&&(d[l]=u[l])):(l.value=[o],e.k&&(u[e.k]=l.value))}else A?(u[l]=i,g(l)&&(d[l]=i)):B&&(l.value=i,e.k&&(u[e.k]=i))};i?(H.id=-1,Ie(H,n)):H()}}}Hn().requestIdleCallback;Hn().cancelIdleCallback;const en=e=>!!e.type.__asyncLoader,zn=e=>e.type.__isKeepAlive;function Nl(e,t){qo(e,"a",t)}function Fl(e,t){qo(e,"da",t)}function qo(e,t,n=ve){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Kn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)zn(r.parent.vnode)&&jl(s,t,n,r),r=r.parent}}function jl(e,t,n,s){const r=Kn(t,e,s,!0);Go(()=>{ks(s[t],r)},n)}function Kn(e,t,n=ve,s=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{Ct();const c=_n(n),l=ze(t,n,e,i);return c(),xt(),l});return s?r.unshift(o):r.push(o),o}}const lt=e=>(t,n=ve)=>{(!dn||e==="sp")&&Kn(e,(...s)=>t(...s),n)},Hl=lt("bm"),qs=lt("m"),Ql=lt("bu"),Vl=lt("u"),Wo=lt("bum"),Go=lt("um"),Ul=lt("sp"),zl=lt("rtg"),Kl=lt("rtc");function ql(e,t=ve){Kn("ec",e,t)}const Jo="components";function Wl(e,t){return Xo(Jo,e,!0,t)||e}const Yo=Symbol.for("v-ndc");function Gl(e){return de(e)?Xo(Jo,e,!1)||e:e||Yo}function Xo(e,t,n=!0,s=!1){const r=ke||ve;if(r){const o=r.type;{const c=$c(o,!1);if(c&&(c===t||c===He(t)||c===jn(He(t))))return o}const i=ar(r[e]||o[e],t)||ar(r.appContext[e],t);return!i&&s?o:i}}function ar(e,t){return e&&(e[t]||e[He(t)]||e[jn(He(t))])}function Sn(e,t,n,s){let r;const o=n,i=V(e);if(i||de(e)){const c=i&&bt(e);let l=!1;c&&(l=!je(e),e=Vn(e)),r=new Array(e.length);for(let f=0,u=e.length;f<u;f++)r[f]=t(l?Ce(e[f]):e[f],f,void 0,o)}else if(typeof e=="number"){r=new Array(e);for(let c=0;c<e;c++)r[c]=t(c+1,c,void 0,o)}else if(ue(e))if(e[Symbol.iterator])r=Array.from(e,(c,l)=>t(c,l,void 0,o));else{const c=Object.keys(e);r=new Array(c.length);for(let l=0,f=c.length;l<f;l++){const u=c[l];r[l]=t(e[u],u,l,o)}}else r=[];return r}const xs=e=>e?yi(e)?Ys(e):xs(e.parent):null,tn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ws(e),$forceUpdate:e=>e.f||(e.f=()=>{Ks(e.update)}),$nextTick:e=>e.n||(e.n=zs.bind(e.proxy)),$watch:e=>vc.bind(e)}),os=(e,t)=>e!==ce&&!e.__isScriptSetup&&ne(e,t),Jl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:c,appContext:l}=e;let f;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(os(s,t))return i[t]=1,s[t];if(r!==ce&&ne(r,t))return i[t]=2,r[t];if((f=e.propsOptions[0])&&ne(f,t))return i[t]=3,o[t];if(n!==ce&&ne(n,t))return i[t]=4,n[t];As&&(i[t]=0)}}const u=tn[t];let d,p;if(u)return t==="$attrs"&&ye(e.attrs,"get",""),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==ce&&ne(n,t))return i[t]=4,n[t];if(p=l.config.globalProperties,ne(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:o}=e;return os(r,t)?(r[t]=n,!0):s!==ce&&ne(s,t)?(s[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let c;return!!n[i]||e!==ce&&ne(e,i)||os(t,i)||(c=o[0])&&ne(c,i)||ne(s,i)||ne(tn,i)||ne(r.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function fr(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let As=!0;function Yl(e){const t=Ws(e),n=e.proxy,s=e.ctx;As=!1,t.beforeCreate&&dr(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:i,watch:c,provide:l,inject:f,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:B,deactivated:H,beforeDestroy:N,beforeUnmount:k,destroyed:L,unmounted:O,render:U,renderTracked:Z,renderTriggered:J,errorCaptured:K,serverPrefetch:y,expose:w,inheritAttrs:M,components:R,directives:G,filters:ae}=t;if(f&&Xl(f,s,null),i)for(const W in i){const ee=i[W];q(ee)&&(s[W]=ee.bind(n))}if(r){const W=r.call(n,n);ue(W)&&(e.data=mn(W))}if(As=!0,o)for(const W in o){const ee=o[W],et=q(ee)?ee.bind(n,n):q(ee.get)?ee.get.bind(n,n):Ze,ct=!q(ee)&&q(ee.set)?ee.set.bind(n):Ze,qe=pe({get:et,set:ct});Object.defineProperty(s,W,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Be=>qe.value=Be})}if(c)for(const W in c)Zo(c[W],s,n,W);if(l){const W=q(l)?l.call(n):l;Reflect.ownKeys(W).forEach(ee=>{En(ee,W[ee])})}u&&dr(u,e,"c");function oe(W,ee){V(ee)?ee.forEach(et=>W(et.bind(n))):ee&&W(ee.bind(n))}if(oe(Hl,d),oe(qs,p),oe(Ql,g),oe(Vl,A),oe(Nl,B),oe(Fl,H),oe(ql,K),oe(Kl,Z),oe(zl,J),oe(Wo,k),oe(Go,O),oe(Ul,y),V(w))if(w.length){const W=e.exposed||(e.exposed={});w.forEach(ee=>{Object.defineProperty(W,ee,{get:()=>n[ee],set:et=>n[ee]=et})})}else e.exposed||(e.exposed={});U&&e.render===Ze&&(e.render=U),M!=null&&(e.inheritAttrs=M),R&&(e.components=R),G&&(e.directives=G),y&&Ko(e)}function Xl(e,t,n=Ze){V(e)&&(e=ws(e));for(const s in e){const r=e[s];let o;ue(r)?"default"in r?o=Ue(r.from||s,r.default,!0):o=Ue(r.from||s):o=Ue(r),he(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function dr(e,t,n){ze(V(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zo(e,t,n,s){let r=s.includes(".")?hi(n,s):()=>n[s];if(de(e)){const o=t[e];q(o)&&Qt(r,o)}else if(q(e))Qt(r,e.bind(n));else if(ue(e))if(V(e))e.forEach(o=>Zo(o,t,n,s));else{const o=q(e.handler)?e.handler.bind(n):t[e.handler];q(o)&&Qt(r,o,e)}}function Ws(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(t);let l;return c?l=c:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(f=>In(l,f,i,!0)),In(l,t,i)),ue(t)&&o.set(t,l),l}function In(e,t,n,s=!1){const{mixins:r,extends:o}=t;o&&In(e,o,n,!0),r&&r.forEach(i=>In(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const c=Zl[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Zl={data:hr,props:pr,emits:pr,methods:Jt,computed:Jt,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Jt,directives:Jt,watch:tc,provide:hr,inject:ec};function hr(e,t){return t?e?function(){return ge(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function ec(e,t){return Jt(ws(e),ws(t))}function ws(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Jt(e,t){return e?ge(Object.create(null),e,t):t}function pr(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:ge(Object.create(null),fr(e),fr(t??{})):t}function tc(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const s in t)n[s]=Ae(e[s],t[s]);return n}function ei(){return{app:null,config:{isNativeTag:Qi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nc=0;function sc(e,t){return function(s,r=null){q(s)||(s=ge({},s)),r!=null&&!ue(r)&&(r=null);const o=ei(),i=new WeakSet,c=[];let l=!1;const f=o.app={_uid:nc++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Fc,get config(){return o.config},set config(u){},use(u,...d){return i.has(u)||(u&&q(u.install)?(i.add(u),u.install(f,...d)):q(u)&&(i.add(u),u(f,...d))),f},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),f},component(u,d){return d?(o.components[u]=d,f):o.components[u]},directive(u,d){return d?(o.directives[u]=d,f):o.directives[u]},mount(u,d,p){if(!l){const g=f._ceVNode||Re(s,r);return g.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(g,u):e(g,u,p),l=!0,f._container=u,u.__vue_app__=f,Ys(g.component)}},onUnmount(u){c.push(u)},unmount(){l&&(ze(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,d){return o.provides[u]=d,f},runWithContext(u){const d=Pt;Pt=f;try{return u()}finally{Pt=d}}};return f}}let Pt=null;function En(e,t){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[e]=t}}function Ue(e,t,n=!1){const s=ve||ke;if(s||Pt){const r=Pt?Pt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&q(t)?t.call(s&&s.proxy):t}}function rc(){return!!(ve||ke||Pt)}const ti={},ni=()=>Object.create(ti),si=e=>Object.getPrototypeOf(e)===ti;function oc(e,t,n,s=!1){const r={},o=ni();e.propsDefaults=Object.create(null),ri(e,t,r,o);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?e.props=s?r:Oo(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function ic(e,t,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=e,c=X(r),[l]=e.propsOptions;let f=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(qn(e.emitsOptions,p))continue;const g=t[p];if(l)if(ne(o,p))g!==o[p]&&(o[p]=g,f=!0);else{const A=He(p);r[A]=Ss(l,c,A,g,e,!1)}else g!==o[p]&&(o[p]=g,f=!0)}}}else{ri(e,t,r,o)&&(f=!0);let u;for(const d in c)(!t||!ne(t,d)&&((u=Tt(d))===d||!ne(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Ss(l,c,d,void 0,e,!0)):delete r[d]);if(o!==c)for(const d in o)(!t||!ne(t,d))&&(delete o[d],f=!0)}f&&it(e.attrs,"set","")}function ri(e,t,n,s){const[r,o]=e.propsOptions;let i=!1,c;if(t)for(let l in t){if(Yt(l))continue;const f=t[l];let u;r&&ne(r,u=He(l))?!o||!o.includes(u)?n[u]=f:(c||(c={}))[u]=f:qn(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,i=!0)}if(o){const l=X(n),f=c||ce;for(let u=0;u<o.length;u++){const d=o[u];n[d]=Ss(r,l,d,f[d],e,!ne(f,d))}}return i}function Ss(e,t,n,s,r,o){const i=e[n];if(i!=null){const c=ne(i,"default");if(c&&s===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&q(l)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const u=_n(r);s=f[n]=l.call(null,t),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}i[0]&&(o&&!c?s=!1:i[1]&&(s===""||s===Tt(n))&&(s=!0))}return s}const lc=new WeakMap;function oi(e,t,n=!1){const s=n?lc:t.propsCache,r=s.get(e);if(r)return r;const o=e.props,i={},c=[];let l=!1;if(!q(e)){const u=d=>{l=!0;const[p,g]=oi(d,t,!0);ge(i,p),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return ue(e)&&s.set(e,Ft),Ft;if(V(o))for(let u=0;u<o.length;u++){const d=He(o[u]);gr(d)&&(i[d]=ce)}else if(o)for(const u in o){const d=He(u);if(gr(d)){const p=o[u],g=i[d]=V(p)||q(p)?{type:p}:ge({},p),A=g.type;let B=!1,H=!0;if(V(A))for(let N=0;N<A.length;++N){const k=A[N],L=q(k)&&k.name;if(L==="Boolean"){B=!0;break}else L==="String"&&(H=!1)}else B=q(A)&&A.name==="Boolean";g[0]=B,g[1]=H,(B||ne(g,"default"))&&c.push(d)}}const f=[i,c];return ue(e)&&s.set(e,f),f}function gr(e){return e[0]!=="$"&&!Yt(e)}const ii=e=>e[0]==="_"||e==="$stable",Gs=e=>V(e)?e.map(Xe):[Xe(e)],cc=(e,t,n)=>{if(t._n)return t;const s=ys((...r)=>Gs(t(...r)),n);return s._c=!1,s},li=(e,t,n)=>{const s=e._ctx;for(const r in e){if(ii(r))continue;const o=e[r];if(q(o))t[r]=cc(r,o,s);else if(o!=null){const i=Gs(o);t[r]=()=>i}}},ci=(e,t)=>{const n=Gs(t);e.slots.default=()=>n},ui=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},uc=(e,t,n)=>{const s=e.slots=ni();if(e.vnode.shapeFlag&32){const r=t._;r?(ui(s,t,n),n&&uo(s,"_",r,!0)):li(t,s)}else t&&ci(e,t)},ac=(e,t,n)=>{const{vnode:s,slots:r}=e;let o=!0,i=ce;if(s.shapeFlag&32){const c=t._;c?n&&c===1?o=!1:ui(r,t,n):(o=!t.$stable,li(t,r)),i=t}else t&&(ci(e,t),i={default:1});if(o)for(const c in r)!ii(c)&&i[c]==null&&delete r[c]},Ie=wc;function fc(e){return dc(e)}function dc(e,t){const n=Hn();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:c,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=Ze,insertStaticContent:A}=e,B=(a,h,m,_=null,v=null,C=null,D=void 0,E=null,S=!!h.dynamicChildren)=>{if(a===h)return;a&&!Bt(a,h)&&(_=b(a),Be(a,v,C,!0),a=null),h.patchFlag===-2&&(S=!1,h.dynamicChildren=null);const{type:x,ref:Q,shapeFlag:T}=h;switch(x){case Wn:H(a,h,m,_);break;case Pe:N(a,h,m,_);break;case cs:a==null&&k(h,m,_,D);break;case De:R(a,h,m,_,v,C,D,E,S);break;default:T&1?U(a,h,m,_,v,C,D,E,S):T&6?G(a,h,m,_,v,C,D,E,S):(T&64||T&128)&&x.process(a,h,m,_,v,C,D,E,S,F)}Q!=null&&v&&Mn(Q,a&&a.ref,C,h||a,!h)},H=(a,h,m,_)=>{if(a==null)s(h.el=c(h.children),m,_);else{const v=h.el=a.el;h.children!==a.children&&f(v,h.children)}},N=(a,h,m,_)=>{a==null?s(h.el=l(h.children||""),m,_):h.el=a.el},k=(a,h,m,_)=>{[a.el,a.anchor]=A(a.children,h,m,_,a.el,a.anchor)},L=({el:a,anchor:h},m,_)=>{let v;for(;a&&a!==h;)v=p(a),s(a,m,_),a=v;s(h,m,_)},O=({el:a,anchor:h})=>{let m;for(;a&&a!==h;)m=p(a),r(a),a=m;r(h)},U=(a,h,m,_,v,C,D,E,S)=>{h.type==="svg"?D="svg":h.type==="math"&&(D="mathml"),a==null?Z(h,m,_,v,C,D,E,S):y(a,h,v,C,D,E,S)},Z=(a,h,m,_,v,C,D,E)=>{let S,x;const{props:Q,shapeFlag:T,transition:j,dirs:z}=a;if(S=a.el=i(a.type,C,Q&&Q.is,Q),T&8?u(S,a.children):T&16&&K(a.children,S,null,_,v,is(a,C),D,E),z&&At(a,null,_,"created"),J(S,a,a.scopeId,D,_),Q){for(const ie in Q)ie!=="value"&&!Yt(ie)&&o(S,ie,null,Q[ie],C,_);"value"in Q&&o(S,"value",null,Q.value,C),(x=Q.onVnodeBeforeMount)&&Ge(x,_,a)}z&&At(a,null,_,"beforeMount");const Y=hc(v,j);Y&&j.beforeEnter(S),s(S,h,m),((x=Q&&Q.onVnodeMounted)||Y||z)&&Ie(()=>{x&&Ge(x,_,a),Y&&j.enter(S),z&&At(a,null,_,"mounted")},v)},J=(a,h,m,_,v)=>{if(m&&g(a,m),_)for(let C=0;C<_.length;C++)g(a,_[C]);if(v){let C=v.subTree;if(h===C||gi(C.type)&&(C.ssContent===h||C.ssFallback===h)){const D=v.vnode;J(a,D,D.scopeId,D.slotScopeIds,v.parent)}}},K=(a,h,m,_,v,C,D,E,S=0)=>{for(let x=S;x<a.length;x++){const Q=a[x]=E?pt(a[x]):Xe(a[x]);B(null,Q,h,m,_,v,C,D,E)}},y=(a,h,m,_,v,C,D)=>{const E=h.el=a.el;let{patchFlag:S,dynamicChildren:x,dirs:Q}=h;S|=a.patchFlag&16;const T=a.props||ce,j=h.props||ce;let z;if(m&&wt(m,!1),(z=j.onVnodeBeforeUpdate)&&Ge(z,m,h,a),Q&&At(h,a,m,"beforeUpdate"),m&&wt(m,!0),(T.innerHTML&&j.innerHTML==null||T.textContent&&j.textContent==null)&&u(E,""),x?w(a.dynamicChildren,x,E,m,_,is(h,v),C):D||ee(a,h,E,null,m,_,is(h,v),C,!1),S>0){if(S&16)M(E,T,j,m,v);else if(S&2&&T.class!==j.class&&o(E,"class",null,j.class,v),S&4&&o(E,"style",T.style,j.style,v),S&8){const Y=h.dynamicProps;for(let ie=0;ie<Y.length;ie++){const re=Y[ie],Oe=T[re],be=j[re];(be!==Oe||re==="value")&&o(E,re,Oe,be,v,m)}}S&1&&a.children!==h.children&&u(E,h.children)}else!D&&x==null&&M(E,T,j,m,v);((z=j.onVnodeUpdated)||Q)&&Ie(()=>{z&&Ge(z,m,h,a),Q&&At(h,a,m,"updated")},_)},w=(a,h,m,_,v,C,D)=>{for(let E=0;E<h.length;E++){const S=a[E],x=h[E],Q=S.el&&(S.type===De||!Bt(S,x)||S.shapeFlag&70)?d(S.el):m;B(S,x,Q,null,_,v,C,D,!0)}},M=(a,h,m,_,v)=>{if(h!==m){if(h!==ce)for(const C in h)!Yt(C)&&!(C in m)&&o(a,C,h[C],null,v,_);for(const C in m){if(Yt(C))continue;const D=m[C],E=h[C];D!==E&&C!=="value"&&o(a,C,E,D,v,_)}"value"in m&&o(a,"value",h.value,m.value,v)}},R=(a,h,m,_,v,C,D,E,S)=>{const x=h.el=a?a.el:c(""),Q=h.anchor=a?a.anchor:c("");let{patchFlag:T,dynamicChildren:j,slotScopeIds:z}=h;z&&(E=E?E.concat(z):z),a==null?(s(x,m,_),s(Q,m,_),K(h.children||[],m,Q,v,C,D,E,S)):T>0&&T&64&&j&&a.dynamicChildren?(w(a.dynamicChildren,j,m,v,C,D,E),(h.key!=null||v&&h===v.subTree)&&ai(a,h,!0)):ee(a,h,m,Q,v,C,D,E,S)},G=(a,h,m,_,v,C,D,E,S)=>{h.slotScopeIds=E,a==null?h.shapeFlag&512?v.ctx.activate(h,m,_,D,S):ae(h,m,_,v,C,D,S):xe(a,h,S)},ae=(a,h,m,_,v,C,D)=>{const E=a.component=Oc(a,_,v);if(zn(a)&&(E.ctx.renderer=F),Mc(E,!1,D),E.asyncDep){if(v&&v.registerDep(E,oe,D),!a.el){const S=E.subTree=Re(Pe);N(null,S,h,m)}}else oe(E,a,h,m,v,C,D)},xe=(a,h,m)=>{const _=h.component=a.component;if(xc(a,h,m))if(_.asyncDep&&!_.asyncResolved){W(_,h,m);return}else _.next=h,_.update();else h.el=a.el,_.vnode=h},oe=(a,h,m,_,v,C,D)=>{const E=()=>{if(a.isMounted){let{next:T,bu:j,u:z,parent:Y,vnode:ie}=a;{const Te=fi(a);if(Te){T&&(T.el=ie.el,W(a,T,D)),Te.asyncDep.then(()=>{a.isUnmounted||E()});return}}let re=T,Oe;wt(a,!1),T?(T.el=ie.el,W(a,T,D)):T=ie,j&&Zn(j),(Oe=T.props&&T.props.onVnodeBeforeUpdate)&&Ge(Oe,Y,T,ie),wt(a,!0);const be=ls(a),Qe=a.subTree;a.subTree=be,B(Qe,be,d(Qe.el),b(Qe),a,v,C),T.el=be.el,re===null&&Ac(a,be.el),z&&Ie(z,v),(Oe=T.props&&T.props.onVnodeUpdated)&&Ie(()=>Ge(Oe,Y,T,ie),v)}else{let T;const{el:j,props:z}=h,{bm:Y,m:ie,parent:re,root:Oe,type:be}=a,Qe=en(h);if(wt(a,!1),Y&&Zn(Y),!Qe&&(T=z&&z.onVnodeBeforeMount)&&Ge(T,re,h),wt(a,!0),j&&fe){const Te=()=>{a.subTree=ls(a),fe(j,a.subTree,a,v,null)};Qe&&be.__asyncHydrate?be.__asyncHydrate(j,a,Te):Te()}else{Oe.ce&&Oe.ce._injectChildStyle(be);const Te=a.subTree=ls(a);B(null,Te,m,_,a,v,C),h.el=Te.el}if(ie&&Ie(ie,v),!Qe&&(T=z&&z.onVnodeMounted)){const Te=h;Ie(()=>Ge(T,re,Te),v)}(h.shapeFlag&256||re&&en(re.vnode)&&re.vnode.shapeFlag&256)&&a.a&&Ie(a.a,v),a.isMounted=!0,h=m=_=null}};a.scope.on();const S=a.effect=new vo(E);a.scope.off();const x=a.update=S.run.bind(S),Q=a.job=S.runIfDirty.bind(S);Q.i=a,Q.id=a.uid,S.scheduler=()=>Ks(Q),wt(a,!0),x()},W=(a,h,m)=>{h.component=a;const _=a.vnode.props;a.vnode=h,a.next=null,ic(a,h.props,_,m),ac(a,h.children,m),Ct(),cr(a),xt()},ee=(a,h,m,_,v,C,D,E,S=!1)=>{const x=a&&a.children,Q=a?a.shapeFlag:0,T=h.children,{patchFlag:j,shapeFlag:z}=h;if(j>0){if(j&128){ct(x,T,m,_,v,C,D,E,S);return}else if(j&256){et(x,T,m,_,v,C,D,E,S);return}}z&8?(Q&16&&$e(x,v,C),T!==x&&u(m,T)):Q&16?z&16?ct(x,T,m,_,v,C,D,E,S):$e(x,v,C,!0):(Q&8&&u(m,""),z&16&&K(T,m,_,v,C,D,E,S))},et=(a,h,m,_,v,C,D,E,S)=>{a=a||Ft,h=h||Ft;const x=a.length,Q=h.length,T=Math.min(x,Q);let j;for(j=0;j<T;j++){const z=h[j]=S?pt(h[j]):Xe(h[j]);B(a[j],z,m,null,v,C,D,E,S)}x>Q?$e(a,v,C,!0,!1,T):K(h,m,_,v,C,D,E,S,T)},ct=(a,h,m,_,v,C,D,E,S)=>{let x=0;const Q=h.length;let T=a.length-1,j=Q-1;for(;x<=T&&x<=j;){const z=a[x],Y=h[x]=S?pt(h[x]):Xe(h[x]);if(Bt(z,Y))B(z,Y,m,null,v,C,D,E,S);else break;x++}for(;x<=T&&x<=j;){const z=a[T],Y=h[j]=S?pt(h[j]):Xe(h[j]);if(Bt(z,Y))B(z,Y,m,null,v,C,D,E,S);else break;T--,j--}if(x>T){if(x<=j){const z=j+1,Y=z<Q?h[z].el:_;for(;x<=j;)B(null,h[x]=S?pt(h[x]):Xe(h[x]),m,Y,v,C,D,E,S),x++}}else if(x>j)for(;x<=T;)Be(a[x],v,C,!0),x++;else{const z=x,Y=x,ie=new Map;for(x=Y;x<=j;x++){const Me=h[x]=S?pt(h[x]):Xe(h[x]);Me.key!=null&&ie.set(Me.key,x)}let re,Oe=0;const be=j-Y+1;let Qe=!1,Te=0;const zt=new Array(be);for(x=0;x<be;x++)zt[x]=0;for(x=z;x<=T;x++){const Me=a[x];if(Oe>=be){Be(Me,v,C,!0);continue}let We;if(Me.key!=null)We=ie.get(Me.key);else for(re=Y;re<=j;re++)if(zt[re-Y]===0&&Bt(Me,h[re])){We=re;break}We===void 0?Be(Me,v,C,!0):(zt[We-Y]=x+1,We>=Te?Te=We:Qe=!0,B(Me,h[We],m,null,v,C,D,E,S),Oe++)}const sr=Qe?pc(zt):Ft;for(re=sr.length-1,x=be-1;x>=0;x--){const Me=Y+x,We=h[Me],rr=Me+1<Q?h[Me+1].el:_;zt[x]===0?B(null,We,m,rr,v,C,D,E,S):Qe&&(re<0||x!==sr[re]?qe(We,m,rr,2):re--)}}},qe=(a,h,m,_,v=null)=>{const{el:C,type:D,transition:E,children:S,shapeFlag:x}=a;if(x&6){qe(a.component.subTree,h,m,_);return}if(x&128){a.suspense.move(h,m,_);return}if(x&64){D.move(a,h,m,F);return}if(D===De){s(C,h,m);for(let T=0;T<S.length;T++)qe(S[T],h,m,_);s(a.anchor,h,m);return}if(D===cs){L(a,h,m);return}if(_!==2&&x&1&&E)if(_===0)E.beforeEnter(C),s(C,h,m),Ie(()=>E.enter(C),v);else{const{leave:T,delayLeave:j,afterLeave:z}=E,Y=()=>s(C,h,m),ie=()=>{T(C,()=>{Y(),z&&z()})};j?j(C,Y,ie):ie()}else s(C,h,m)},Be=(a,h,m,_=!1,v=!1)=>{const{type:C,props:D,ref:E,children:S,dynamicChildren:x,shapeFlag:Q,patchFlag:T,dirs:j,cacheIndex:z}=a;if(T===-2&&(v=!1),E!=null&&Mn(E,null,m,a,!0),z!=null&&(h.renderCache[z]=void 0),Q&256){h.ctx.deactivate(a);return}const Y=Q&1&&j,ie=!en(a);let re;if(ie&&(re=D&&D.onVnodeBeforeUnmount)&&Ge(re,h,a),Q&6)yn(a.component,m,_);else{if(Q&128){a.suspense.unmount(m,_);return}Y&&At(a,null,h,"beforeUnmount"),Q&64?a.type.remove(a,h,m,F,_):x&&!x.hasOnce&&(C!==De||T>0&&T&64)?$e(x,h,m,!1,!0):(C===De&&T&384||!v&&Q&16)&&$e(S,h,m),_&&Mt(a)}(ie&&(re=D&&D.onVnodeUnmounted)||Y)&&Ie(()=>{re&&Ge(re,h,a),Y&&At(a,null,h,"unmounted")},m)},Mt=a=>{const{type:h,el:m,anchor:_,transition:v}=a;if(h===De){It(m,_);return}if(h===cs){O(a);return}const C=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(a.shapeFlag&1&&v&&!v.persisted){const{leave:D,delayLeave:E}=v,S=()=>D(m,C);E?E(a.el,C,S):S()}else C()},It=(a,h)=>{let m;for(;a!==h;)m=p(a),r(a),a=m;r(h)},yn=(a,h,m)=>{const{bum:_,scope:v,job:C,subTree:D,um:E,m:S,a:x}=a;mr(S),mr(x),_&&Zn(_),v.stop(),C&&(C.flags|=8,Be(D,a,h,m)),E&&Ie(E,h),Ie(()=>{a.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},$e=(a,h,m,_=!1,v=!1,C=0)=>{for(let D=C;D<a.length;D++)Be(a[D],h,m,_,v)},b=a=>{if(a.shapeFlag&6)return b(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const h=p(a.anchor||a.el),m=h&&h[Il];return m?p(m):h};let I=!1;const P=(a,h,m)=>{a==null?h._vnode&&Be(h._vnode,null,null,!0):B(h._vnode||null,a,h,null,null,null,m),h._vnode=a,I||(I=!0,cr(),$o(),I=!1)},F={p:B,um:Be,m:qe,r:Mt,mt:ae,mc:K,pc:ee,pbc:w,n:b,o:e};let se,fe;return{render:P,hydrate:se,createApp:sc(P,se)}}function is({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function hc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ai(e,t,n=!1){const s=e.children,r=t.children;if(V(s)&&V(r))for(let o=0;o<s.length;o++){const i=s[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=pt(r[o]),c.el=i.el),!n&&c.patchFlag!==-2&&ai(i,c)),c.type===Wn&&(c.el=i.el)}}function pc(e){const t=e.slice(),n=[0];let s,r,o,i,c;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(r=n[n.length-1],e[r]<f){t[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)c=o+i>>1,e[n[c]]<f?o=c+1:i=c;f<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function fi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:fi(t)}function mr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const gc=Symbol.for("v-scx"),mc=()=>Ue(gc);function Qt(e,t,n){return di(e,t,n)}function di(e,t,n=ce){const{immediate:s,deep:r,flush:o,once:i}=n,c=ge({},n),l=t&&s||!t&&o!=="post";let f;if(dn){if(o==="sync"){const g=mc();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Ze,g.resume=Ze,g.pause=Ze,g}}const u=ve;c.call=(g,A,B)=>ze(g,u,A,B);let d=!1;o==="post"?c.scheduler=g=>{Ie(g,u&&u.suspense)}:o!=="sync"&&(d=!0,c.scheduler=(g,A)=>{A?g():Ks(g)}),c.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=Pl(e,t,c);return dn&&(f?f.push(p):l&&p()),p}function vc(e,t,n){const s=this.proxy,r=de(e)?e.includes(".")?hi(s,e):()=>s[e]:e.bind(s,s);let o;q(t)?o=t:(o=t.handler,n=t);const i=_n(this),c=di(r,o.bind(s),n);return i(),c}function hi(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const bc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${Tt(t)}Modifiers`];function _c(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ce;let r=n;const o=t.startsWith("update:"),i=o&&bc(s,t.slice(7));i&&(i.trim&&(r=n.map(u=>de(u)?u.trim():u)),i.number&&(r=n.map(qi)));let c,l=s[c=Xn(t)]||s[c=Xn(He(t))];!l&&o&&(l=s[c=Xn(Tt(t))]),l&&ze(l,e,6,r);const f=s[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ze(f,e,6,r)}}function pi(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const o=e.emits;let i={},c=!1;if(!q(e)){const l=f=>{const u=pi(f,t,!0);u&&(c=!0,ge(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!c?(ue(e)&&s.set(e,null),null):(V(o)?o.forEach(l=>i[l]=null):ge(i,o),ue(e)&&s.set(e,i),i)}function qn(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,Tt(t))||ne(e,t))}function ls(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:i,attrs:c,emit:l,render:f,renderCache:u,props:d,data:p,setupState:g,ctx:A,inheritAttrs:B}=e,H=Tn(e);let N,k;try{if(n.shapeFlag&4){const O=r||s,U=O;N=Xe(f.call(U,O,u,d,g,p,A)),k=c}else{const O=t;N=Xe(O.length>1?O(d,{attrs:c,slots:i,emit:l}):O(d,null)),k=t.props?c:yc(c)}}catch(O){nn.length=0,Un(O,e,1),N=Re(Pe)}let L=N;if(k&&B!==!1){const O=Object.keys(k),{shapeFlag:U}=L;O.length&&U&7&&(o&&O.some(Is)&&(k=Cc(k,o)),L=_t(L,k,!1,!0))}return n.dirs&&(L=_t(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&an(L,n.transition),N=L,Tn(H),N}const yc=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},Cc=(e,t)=>{const n={};for(const s in e)(!Is(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function xc(e,t,n){const{props:s,children:r,component:o}=e,{props:i,children:c,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?vr(s,i,f):!!i;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(i[p]!==s[p]&&!qn(f,p))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?vr(s,i,f):!0:!!i;return!1}function vr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(t[o]!==e[o]&&!qn(n,o))return!0}return!1}function Ac({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const gi=e=>e.__isSuspense;function wc(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Ml(e)}const De=Symbol.for("v-fgt"),Wn=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),cs=Symbol.for("v-stc"),nn=[];let Le=null;function me(e=!1){nn.push(Le=e?null:[])}function Sc(){nn.pop(),Le=nn[nn.length-1]||null}let fn=1;function br(e,t=!1){fn+=e,e<0&&Le&&t&&(Le.hasOnce=!0)}function mi(e){return e.dynamicChildren=fn>0?Le||Ft:null,Sc(),fn>0&&Le&&Le.push(e),e}function _e(e,t,n,s,r,o){return mi($(e,t,n,s,r,o,!0))}function vi(e,t,n,s,r){return mi(Re(e,t,n,s,r,!0))}function kn(e){return e?e.__v_isVNode===!0:!1}function Bt(e,t){return e.type===t.type&&e.key===t.key}const bi=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||he(e)||q(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function $(e,t=null,n=null,s=0,r=null,o=e===De?0:1,i=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bi(t),ref:t&&Rn(t),scopeId:Fo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ke};return c?(Js(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),fn>0&&!i&&Le&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Le.push(l),l}const Re=Ec;function Ec(e,t=null,n=null,s=0,r=null,o=!1){if((!e||e===Yo)&&(e=Pe),kn(e)){const c=_t(e,t,!0);return n&&Js(c,n),fn>0&&!o&&Le&&(c.shapeFlag&6?Le[Le.indexOf(e)]=c:Le.push(c)),c.patchFlag=-2,c}if(Nc(e)&&(e=e.__vccOpts),t){t=Rc(t);let{class:c,style:l}=t;c&&!de(c)&&(t.class=ot(c)),ue(l)&&(Vs(l)&&!V(l)&&(l=ge({},l)),t.style=Qn(l))}const i=de(e)?1:gi(e)?128:jo(e)?64:ue(e)?4:q(e)?2:0;return $(e,t,n,s,r,i,o,!0)}function Rc(e){return e?Vs(e)||si(e)?ge({},e):e:null}function _t(e,t,n=!1,s=!1){const{props:r,ref:o,patchFlag:i,children:c,transition:l}=e,f=t?Bc(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&bi(f),ref:t&&t.ref?n&&o?V(o)?o.concat(Rn(t)):[o,Rn(t)]:Rn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&an(u,l.clone(u)),u}function _i(e=" ",t=0){return Re(Wn,null,e,t)}function qt(e="",t=!1){return t?(me(),vi(Pe,null,e)):Re(Pe,null,e)}function Xe(e){return e==null||typeof e=="boolean"?Re(Pe):V(e)?Re(De,null,e.slice()):kn(e)?pt(e):Re(Wn,null,String(e))}function pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function Js(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Js(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!si(t)?t._ctx=ke:r===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),s&64?(n=16,t=[_i(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ot([t.class,s.class]));else if(r==="style")t.style=Qn([t.style,s.style]);else if($n(r)){const o=t[r],i=s[r];i&&o!==i&&!(V(o)&&o.includes(i))&&(t[r]=o?[].concat(o,i):i)}else r!==""&&(t[r]=s[r])}return t}function Ge(e,t,n,s=null){ze(e,t,7,[n,s])}const Dc=ei();let Pc=0;function Oc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Dc,o={uid:Pc++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oi(s,r),emitsOptions:pi(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=_c.bind(null,o),e.ce&&e.ce(o),o}let ve=null;const Tc=()=>ve||ke;let Ln,Es;{const e=Hn(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),o=>{r.length>1?r.forEach(i=>i(o)):r[0](o)}};Ln=t("__VUE_INSTANCE_SETTERS__",n=>ve=n),Es=t("__VUE_SSR_SETTERS__",n=>dn=n)}const _n=e=>{const t=ve;return Ln(e),e.scope.on(),()=>{e.scope.off(),Ln(t)}},_r=()=>{ve&&ve.scope.off(),Ln(null)};function yi(e){return e.vnode.shapeFlag&4}let dn=!1;function Mc(e,t=!1,n=!1){t&&Es(t);const{props:s,children:r}=e.vnode,o=yi(e);oc(e,s,o,t),uc(e,r,n);const i=o?Ic(e,t):void 0;return t&&Es(!1),i}function Ic(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Jl);const{setup:s}=n;if(s){Ct();const r=e.setupContext=s.length>1?Lc(e):null,o=_n(e),i=vn(s,e,0,[e.props,r]),c=io(i);if(xt(),o(),(c||e.sp)&&!en(e)&&Ko(e),c){if(i.then(_r,_r),t)return i.then(l=>{yr(e,l,t)}).catch(l=>{Un(l,e,0)});e.asyncDep=i}else yr(e,i,t)}else Ci(e,t)}function yr(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Io(t)),Ci(e,n)}let Cr;function Ci(e,t,n){const s=e.type;if(!e.render){if(!t&&Cr&&!s.render){const r=s.template||Ws(e).template;if(r){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:l}=s,f=ge(ge({isCustomElement:o,delimiters:c},i),l);s.render=Cr(r,f)}}e.render=s.render||Ze}{const r=_n(e);Ct();try{Yl(e)}finally{xt(),r()}}}const kc={get(e,t){return ye(e,"get",""),e[t]}};function Lc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,kc),slots:e.slots,emit:e.emit,expose:t}}function Ys(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Io(Us(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tn)return tn[n](e)},has(t,n){return n in t||n in tn}})):e.proxy}function $c(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function Nc(e){return q(e)&&"__vccOpts"in e}const pe=(e,t)=>Bl(e,t,dn);function Xs(e,t,n){const s=arguments.length;return s===2?ue(t)&&!V(t)?kn(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kn(n)&&(n=[n]),Re(e,t,n))}const Fc="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rs;const xr=typeof window<"u"&&window.trustedTypes;if(xr)try{Rs=xr.createPolicy("vue",{createHTML:e=>e})}catch{}const xi=Rs?e=>Rs.createHTML(e):e=>e,jc="http://www.w3.org/2000/svg",Hc="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,Ar=rt&&rt.createElement("template"),Qc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?rt.createElementNS(jc,e):t==="mathml"?rt.createElementNS(Hc,e):n?rt.createElement(e,{is:n}):rt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,o){const i=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ar.innerHTML=xi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=Ar.content;if(s==="svg"||s==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ut="transition",Wt="animation",hn=Symbol("_vtc"),Ai={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Vc=ge({},Ho,Ai),Uc=e=>(e.displayName="Transition",e.props=Vc,e),zc=Uc((e,{slots:t})=>Xs($l,Kc(e),t)),St=(e,t=[])=>{V(e)?e.forEach(n=>n(...t)):e&&e(...t)},wr=e=>e?V(e)?e.some(t=>t.length>1):e.length>1:!1;function Kc(e){const t={};for(const R in e)R in Ai||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:f=i,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,A=qc(r),B=A&&A[0],H=A&&A[1],{onBeforeEnter:N,onEnter:k,onEnterCancelled:L,onLeave:O,onLeaveCancelled:U,onBeforeAppear:Z=N,onAppear:J=k,onAppearCancelled:K=L}=t,y=(R,G,ae,xe)=>{R._enterCancelled=xe,Et(R,G?u:c),Et(R,G?f:i),ae&&ae()},w=(R,G)=>{R._isLeaving=!1,Et(R,d),Et(R,g),Et(R,p),G&&G()},M=R=>(G,ae)=>{const xe=R?J:k,oe=()=>y(G,R,ae);St(xe,[G,oe]),Sr(()=>{Et(G,R?l:o),nt(G,R?u:c),wr(xe)||Er(G,s,B,oe)})};return ge(t,{onBeforeEnter(R){St(N,[R]),nt(R,o),nt(R,i)},onBeforeAppear(R){St(Z,[R]),nt(R,l),nt(R,f)},onEnter:M(!1),onAppear:M(!0),onLeave(R,G){R._isLeaving=!0;const ae=()=>w(R,G);nt(R,d),R._enterCancelled?(nt(R,p),Dr()):(Dr(),nt(R,p)),Sr(()=>{R._isLeaving&&(Et(R,d),nt(R,g),wr(O)||Er(R,s,H,ae))}),St(O,[R,ae])},onEnterCancelled(R){y(R,!1,void 0,!0),St(L,[R])},onAppearCancelled(R){y(R,!0,void 0,!0),St(K,[R])},onLeaveCancelled(R){w(R),St(U,[R])}})}function qc(e){if(e==null)return null;if(ue(e))return[us(e.enter),us(e.leave)];{const t=us(e);return[t,t]}}function us(e){return Wi(e)}function nt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[hn]||(e[hn]=new Set)).add(t)}function Et(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[hn];n&&(n.delete(t),n.size||(e[hn]=void 0))}function Sr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Wc=0;function Er(e,t,n,s){const r=e._endId=++Wc,o=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:i,timeout:c,propCount:l}=Gc(e,t);if(!i)return s();const f=i+"end";let u=0;const d=()=>{e.removeEventListener(f,p),o()},p=g=>{g.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},c+1),e.addEventListener(f,p)}function Gc(e,t){const n=window.getComputedStyle(e),s=A=>(n[A]||"").split(", "),r=s(`${ut}Delay`),o=s(`${ut}Duration`),i=Rr(r,o),c=s(`${Wt}Delay`),l=s(`${Wt}Duration`),f=Rr(c,l);let u=null,d=0,p=0;t===ut?i>0&&(u=ut,d=i,p=o.length):t===Wt?f>0&&(u=Wt,d=f,p=l.length):(d=Math.max(i,f),u=d>0?i>f?ut:Wt:null,p=u?u===ut?o.length:l.length:0);const g=u===ut&&/\b(transform|all)(,|$)/.test(s(`${ut}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function Rr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Br(n)+Br(e[s])))}function Br(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Dr(){return document.body.offsetHeight}function Jc(e,t,n){const s=e[hn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Pr=Symbol("_vod"),Yc=Symbol("_vsh"),Xc=Symbol(""),Zc=/(^|;)\s*display\s*:/;function eu(e,t,n){const s=e.style,r=de(n);let o=!1;if(n&&!r){if(t)if(de(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&Bn(s,c,"")}else for(const i in t)n[i]==null&&Bn(s,i,"");for(const i in n)i==="display"&&(o=!0),Bn(s,i,n[i])}else if(r){if(t!==n){const i=s[Xc];i&&(n+=";"+i),s.cssText=n,o=Zc.test(n)}}else t&&e.removeAttribute("style");Pr in e&&(e[Pr]=o?s.display:"",e[Yc]&&(s.display="none"))}const Or=/\s*!important$/;function Bn(e,t,n){if(V(n))n.forEach(s=>Bn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=tu(e,t);Or.test(n)?e.setProperty(Tt(s),n.replace(Or,""),"important"):e[s]=n}}const Tr=["Webkit","Moz","ms"],as={};function tu(e,t){const n=as[t];if(n)return n;let s=He(t);if(s!=="filter"&&s in e)return as[t]=s;s=jn(s);for(let r=0;r<Tr.length;r++){const o=Tr[r]+s;if(o in e)return as[t]=o}return t}const Mr="http://www.w3.org/1999/xlink";function Ir(e,t,n,s,r,o=el(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Mr,t.slice(6,t.length)):e.setAttributeNS(Mr,t,n):n==null||o&&!ao(n)?e.removeAttribute(t):e.setAttribute(t,o?"":yt(n)?String(n):n)}function kr(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?xi(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ao(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(r||t)}function nu(e,t,n,s){e.addEventListener(t,n,s)}function su(e,t,n,s){e.removeEventListener(t,n,s)}const Lr=Symbol("_vei");function ru(e,t,n,s,r=null){const o=e[Lr]||(e[Lr]={}),i=o[t];if(s&&i)i.value=s;else{const[c,l]=ou(t);if(s){const f=o[t]=cu(s,r);nu(e,c,f,l)}else i&&(su(e,c,i,l),o[t]=void 0)}}const $r=/(?:Once|Passive|Capture)$/;function ou(e){let t;if($r.test(e)){t={};let s;for(;s=e.match($r);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Tt(e.slice(2)),t]}let fs=0;const iu=Promise.resolve(),lu=()=>fs||(iu.then(()=>fs=0),fs=Date.now());function cu(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ze(uu(s,n.value),t,5,[s])};return n.value=e,n.attached=lu(),n}function uu(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Nr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,au=(e,t,n,s,r,o)=>{const i=r==="svg";t==="class"?Jc(e,s,i):t==="style"?eu(e,n,s):$n(t)?Is(t)||ru(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fu(e,t,s,i))?(kr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ir(e,t,s,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(s))?kr(e,He(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Ir(e,t,s,i))};function fu(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Nr(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nr(t)&&de(n)?!1:t in e}const du=ge({patchProp:au},Qc);let Fr;function hu(){return Fr||(Fr=fc(du))}const pu=(...e)=>{const t=hu().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=mu(s);if(!r)return;const o=t._component;!q(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=n(r,!1,gu(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};function gu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mu(e){return de(e)?document.querySelector(e):e}var vu=!1;/*!
 * pinia v2.2.7
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let wi;const Gn=e=>wi=e,Si=Symbol();function Bs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var sn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(sn||(sn={}));function bu(){const e=go(!0),t=e.run(()=>Ye({}));let n=[],s=[];const r=Us({install(o){Gn(r),r._a=o,o.provide(Si,r),o.config.globalProperties.$pinia=r,s.forEach(i=>n.push(i)),s=[]},use(o){return!this._a&&!vu?s.push(o):n.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Ei=()=>{};function jr(e,t,n,s=Ei){e.push(t);const r=()=>{const o=e.indexOf(t);o>-1&&(e.splice(o,1),s())};return!n&&mo()&&tl(r),r}function Lt(e,...t){e.slice().forEach(n=>{n(...t)})}const _u=e=>e(),Hr=Symbol(),ds=Symbol();function Ds(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,s)=>e.set(s,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],r=e[n];Bs(r)&&Bs(s)&&e.hasOwnProperty(n)&&!he(s)&&!bt(s)?e[n]=Ds(r,s):e[n]=s}return e}const yu=Symbol();function Cu(e){return!Bs(e)||!e.hasOwnProperty(yu)}const{assign:ft}=Object;function xu(e){return!!(he(e)&&e.effect)}function Au(e,t,n,s){const{state:r,actions:o,getters:i}=t,c=n.state.value[e];let l;function f(){c||(n.state.value[e]=r?r():{});const u=wl(n.state.value[e]);return ft(u,o,Object.keys(i||{}).reduce((d,p)=>(d[p]=Us(pe(()=>{Gn(n);const g=n._s.get(e);return i[p].call(g,g)})),d),{}))}return l=Ri(e,f,t,n,s,!0),l}function Ri(e,t,n={},s,r,o){let i;const c=ft({actions:{}},n),l={deep:!0};let f,u,d=[],p=[],g;const A=s.state.value[e];!o&&!A&&(s.state.value[e]={}),Ye({});let B;function H(K){let y;f=u=!1,typeof K=="function"?(K(s.state.value[e]),y={type:sn.patchFunction,storeId:e,events:g}):(Ds(s.state.value[e],K),y={type:sn.patchObject,payload:K,storeId:e,events:g});const w=B=Symbol();zs().then(()=>{B===w&&(f=!0)}),u=!0,Lt(d,y,s.state.value[e])}const N=o?function(){const{state:y}=n,w=y?y():{};this.$patch(M=>{ft(M,w)})}:Ei;function k(){i.stop(),d=[],p=[],s._s.delete(e)}const L=(K,y="")=>{if(Hr in K)return K[ds]=y,K;const w=function(){Gn(s);const M=Array.from(arguments),R=[],G=[];function ae(W){R.push(W)}function xe(W){G.push(W)}Lt(p,{args:M,name:w[ds],store:U,after:ae,onError:xe});let oe;try{oe=K.apply(this&&this.$id===e?this:U,M)}catch(W){throw Lt(G,W),W}return oe instanceof Promise?oe.then(W=>(Lt(R,W),W)).catch(W=>(Lt(G,W),Promise.reject(W))):(Lt(R,oe),oe)};return w[Hr]=!0,w[ds]=y,w},O={_p:s,$id:e,$onAction:jr.bind(null,p),$patch:H,$reset:N,$subscribe(K,y={}){const w=jr(d,K,y.detached,()=>M()),M=i.run(()=>Qt(()=>s.state.value[e],R=>{(y.flush==="sync"?u:f)&&K({storeId:e,type:sn.direct,events:g},R)},ft({},l,y)));return w},$dispose:k},U=mn(O);s._s.set(e,U);const J=(s._a&&s._a.runWithContext||_u)(()=>s._e.run(()=>(i=go()).run(()=>t({action:L}))));for(const K in J){const y=J[K];if(he(y)&&!xu(y)||bt(y))o||(A&&Cu(y)&&(he(y)?y.value=A[K]:Ds(y,A[K])),s.state.value[e][K]=y);else if(typeof y=="function"){const w=L(y,K);J[K]=w,c.actions[K]=y}}return ft(U,J),ft(X(U),J),Object.defineProperty(U,"$state",{get:()=>s.state.value[e],set:K=>{H(y=>{ft(y,K)})}}),s._p.forEach(K=>{ft(U,i.run(()=>K({store:U,app:s._a,pinia:s,options:c})))}),A&&o&&n.hydrate&&n.hydrate(U.$state,A),f=!0,u=!0,U}/*! #__NO_SIDE_EFFECTS__ */function wu(e,t,n){let s,r;const o=typeof t=="function";s=e,r=o?n:t;function i(c,l){const f=rc();return c=c||(f?Ue(Si,null):null),c&&Gn(c),c=wi,c._s.has(s)||(o?Ri(s,t,r,c):Au(s,r,c)),c._s.get(s)}return i.$id=s,i}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Nt=typeof document<"u";function Bi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Su(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Bi(e.default)}const te=Object.assign;function hs(e,t){const n={};for(const s in t){const r=t[s];n[s]=Ke(r)?r.map(e):e(r)}return n}const rn=()=>{},Ke=Array.isArray,Di=/#/g,Eu=/&/g,Ru=/\//g,Bu=/=/g,Du=/\?/g,Pi=/\+/g,Pu=/%5B/g,Ou=/%5D/g,Oi=/%5E/g,Tu=/%60/g,Ti=/%7B/g,Mu=/%7C/g,Mi=/%7D/g,Iu=/%20/g;function Zs(e){return encodeURI(""+e).replace(Mu,"|").replace(Pu,"[").replace(Ou,"]")}function ku(e){return Zs(e).replace(Ti,"{").replace(Mi,"}").replace(Oi,"^")}function Ps(e){return Zs(e).replace(Pi,"%2B").replace(Iu,"+").replace(Di,"%23").replace(Eu,"%26").replace(Tu,"`").replace(Ti,"{").replace(Mi,"}").replace(Oi,"^")}function Lu(e){return Ps(e).replace(Bu,"%3D")}function $u(e){return Zs(e).replace(Di,"%23").replace(Du,"%3F")}function Nu(e){return e==null?"":$u(e).replace(Ru,"%2F")}function pn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Fu=/\/$/,ju=e=>e.replace(Fu,"");function ps(e,t,n="/"){let s,r={},o="",i="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=t.slice(0,l),o=t.slice(l+1,c>-1?c:t.length),r=e(o)),c>-1&&(s=s||t.slice(0,c),i=t.slice(c,t.length)),s=Uu(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:pn(i)}}function Hu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Qr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Qu(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Vt(t.matched[s],n.matched[r])&&Ii(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ii(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Vu(e[n],t[n]))return!1;return!0}function Vu(e,t){return Ke(e)?Vr(e,t):Ke(t)?Vr(t,e):e===t}function Vr(e,t){return Ke(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Uu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,i,c;for(i=0;i<s.length;i++)if(c=s[i],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var gn;(function(e){e.pop="pop",e.push="push"})(gn||(gn={}));var on;(function(e){e.back="back",e.forward="forward",e.unknown=""})(on||(on={}));function zu(e){if(!e)if(Nt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ju(e)}const Ku=/^[^#]+#/;function qu(e,t){return e.replace(Ku,"#")+t}function Wu(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Jn=()=>({left:window.scrollX,top:window.scrollY});function Gu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Wu(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ur(e,t){return(history.state?history.state.position-t:-1)+e}const Os=new Map;function Ju(e,t){Os.set(e,t)}function Yu(e){const t=Os.get(e);return Os.delete(e),t}let Xu=()=>location.protocol+"//"+location.host;function ki(e,t){const{pathname:n,search:s,hash:r}=t,o=e.indexOf("#");if(o>-1){let c=r.includes(e.slice(o))?e.slice(o).length:1,l=r.slice(c);return l[0]!=="/"&&(l="/"+l),Qr(l,"")}return Qr(n,e)+s+r}function Zu(e,t,n,s){let r=[],o=[],i=null;const c=({state:p})=>{const g=ki(e,location),A=n.value,B=t.value;let H=0;if(p){if(n.value=g,t.value=p,i&&i===A){i=null;return}H=B?p.position-B.position:0}else s(g);r.forEach(N=>{N(n.value,A,{delta:H,type:gn.pop,direction:H?H>0?on.forward:on.back:on.unknown})})};function l(){i=n.value}function f(p){r.push(p);const g=()=>{const A=r.indexOf(p);A>-1&&r.splice(A,1)};return o.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:Jn()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:f,destroy:d}}function zr(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Jn():null}}function ea(e){const{history:t,location:n}=window,s={value:ki(e,n)},r={value:t.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,f,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Xu()+e+l;try{t[u?"replaceState":"pushState"](f,"",p),r.value=f}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function i(l,f){const u=te({},t.state,zr(r.value.back,l,r.value.forward,!0),f,{position:r.value.position});o(l,u,!0),s.value=l}function c(l,f){const u=te({},r.value,t.state,{forward:l,scroll:Jn()});o(u.current,u,!0);const d=te({},zr(s.value,l,null),{position:u.position+1},f);o(l,d,!1),s.value=l}return{location:s,state:r,push:c,replace:i}}function ta(e){e=zu(e);const t=ea(e),n=Zu(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=te({location:"",base:e,go:s,createHref:qu.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function na(e){return typeof e=="string"||e&&typeof e=="object"}function Li(e){return typeof e=="string"||typeof e=="symbol"}const $i=Symbol("");var Kr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Kr||(Kr={}));function Ut(e,t){return te(new Error,{type:e,[$i]:!0},t)}function st(e,t){return e instanceof Error&&$i in e&&(t==null||!!(e.type&t))}const qr="[^/]+?",sa={sensitive:!1,strict:!1,start:!0,end:!0},ra=/[.+*?^${}()[\]/\\]/g;function oa(e,t){const n=te({},sa,t),s=[];let r=n.start?"^":"";const o=[];for(const f of e){const u=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(ra,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:B,optional:H,regexp:N}=p;o.push({name:A,repeatable:B,optional:H});const k=N||qr;if(k!==qr){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${A}" (${k}): `+O.message)}}let L=B?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(L=H&&f.length<2?`(?:/${L})`:"/"+L),H&&(L+="?"),r+=L,g+=20,H&&(g+=-8),B&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function c(f){const u=f.match(i),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",A=o[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:A,repeatable:B,optional:H}=g,N=A in f?f[A]:"";if(Ke(N)&&!B)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const k=Ke(N)?N.join("/"):N;if(!k)if(H)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);u+=k}}return u||"/"}return{re:i,score:s,keys:o,parse:c,stringify:l}}function ia(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Ni(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const o=ia(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Wr(s))return 1;if(Wr(r))return-1}return r.length-s.length}function Wr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const la={type:0,value:""},ca=/[a-zA-Z0-9_]/;function ua(e){if(!e)return[[]];if(e==="/")return[[la]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let c=0,l,f="",u="";function d(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;c<e.length;){if(l=e[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),i()):l===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:ca.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),i(),r}function aa(e,t,n){const s=oa(ua(e.path),n),r=te(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function fa(e,t){const n=[],s=new Map;t=Xr({strict:!1,end:!0,sensitive:!1},t);function r(d){return s.get(d)}function o(d,p,g){const A=!g,B=Jr(d);B.aliasOf=g&&g.record;const H=Xr(t,d),N=[B];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of O)N.push(Jr(te({},B,{components:g?g.record.components:B.components,path:U,aliasOf:g?g.record:B})))}let k,L;for(const O of N){const{path:U}=O;if(p&&U[0]!=="/"){const Z=p.record.path,J=Z[Z.length-1]==="/"?"":"/";O.path=p.record.path+(U&&J+U)}if(k=aa(O,p,H),g?g.alias.push(k):(L=L||k,L!==k&&L.alias.push(k),A&&d.name&&!Yr(k)&&i(d.name)),Fi(k)&&l(k),B.children){const Z=B.children;for(let J=0;J<Z.length;J++)o(Z[J],k,g&&g.children[J])}g=g||k}return L?()=>{i(L)}:rn}function i(d){if(Li(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return n}function l(d){const p=pa(d,n);n.splice(p,0,d),d.record.name&&!Yr(d)&&s.set(d.record.name,d)}function f(d,p){let g,A={},B,H;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Ut(1,{location:d});H=g.record.name,A=te(Gr(p.params,g.keys.filter(L=>!L.optional).concat(g.parent?g.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),d.params&&Gr(d.params,g.keys.map(L=>L.name))),B=g.stringify(A)}else if(d.path!=null)B=d.path,g=n.find(L=>L.re.test(B)),g&&(A=g.parse(B),H=g.record.name);else{if(g=p.name?s.get(p.name):n.find(L=>L.re.test(p.path)),!g)throw Ut(1,{location:d,currentLocation:p});H=g.record.name,A=te({},p.params,d.params),B=g.stringify(A)}const N=[];let k=g;for(;k;)N.unshift(k.record),k=k.parent;return{name:H,path:B,params:A,matched:N,meta:ha(N)}}e.forEach(d=>o(d));function u(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:i,clearRoutes:u,getRoutes:c,getRecordMatcher:r}}function Gr(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Jr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:da(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function da(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Yr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ha(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Xr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function pa(e,t){let n=0,s=t.length;for(;n!==s;){const o=n+s>>1;Ni(e,t[o])<0?s=o:n=o+1}const r=ga(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function ga(e){let t=e;for(;t=t.parent;)if(Fi(t)&&Ni(e,t)===0)return t}function Fi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ma(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Pi," "),i=o.indexOf("="),c=pn(i<0?o:o.slice(0,i)),l=i<0?null:pn(o.slice(i+1));if(c in t){let f=t[c];Ke(f)||(f=t[c]=[f]),f.push(l)}else t[c]=l}return t}function Zr(e){let t="";for(let n in e){const s=e[n];if(n=Lu(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(s)?s.map(o=>o&&Ps(o)):[s&&Ps(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function va(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ke(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const ba=Symbol(""),eo=Symbol(""),Yn=Symbol(""),ji=Symbol(""),Ts=Symbol("");function Gt(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function gt(e,t,n,s,r,o=i=>i()){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,l)=>{const f=p=>{p===!1?l(Ut(4,{from:n,to:t})):p instanceof Error?l(p):na(p)?l(Ut(2,{from:t,to:p})):(i&&s.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),c())},u=o(()=>e.call(s&&s.instances[r],t,n,f));let d=Promise.resolve(u);e.length<3&&(d=d.then(f)),d.catch(p=>l(p))})}function gs(e,t,n,s,r=o=>o()){const o=[];for(const i of e)for(const c in i.components){let l=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(Bi(l)){const u=(l.__vccOpts||l)[t];u&&o.push(gt(u,n,s,i,c,r))}else{let f=l();o.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const d=Su(u)?u.default:u;i.mods[c]=u,i.components[c]=d;const g=(d.__vccOpts||d)[t];return g&&gt(g,n,s,i,c,r)()}))}}return o}function to(e){const t=Ue(Yn),n=Ue(ji),s=pe(()=>{const l=Fe(e.to);return t.resolve(l)}),r=pe(()=>{const{matched:l}=s.value,{length:f}=l,u=l[f-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Vt.bind(null,u));if(p>-1)return p;const g=no(l[f-2]);return f>1&&no(u)===g&&d[d.length-1].path!==g?d.findIndex(Vt.bind(null,l[f-2])):p}),o=pe(()=>r.value>-1&&Aa(n.params,s.value.params)),i=pe(()=>r.value>-1&&r.value===n.matched.length-1&&Ii(n.params,s.value.params));function c(l={}){if(xa(l)){const f=t[Fe(e.replace)?"replace":"push"](Fe(e.to)).catch(rn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:pe(()=>s.value.href),isActive:o,isExactActive:i,navigate:c}}function _a(e){return e.length===1?e[0]:e}const ya=bn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(e,{slots:t}){const n=mn(to(e)),{options:s}=Ue(Yn),r=pe(()=>({[so(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[so(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&_a(t.default(n));return e.custom?o:Xs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),Ca=ya;function xa(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Aa(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ke(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function no(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const so=(e,t,n)=>e??t??n,wa=bn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ue(Ts),r=pe(()=>e.route||s.value),o=Ue(eo,0),i=pe(()=>{let f=Fe(o);const{matched:u}=r.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),c=pe(()=>r.value.matched[i.value]);En(eo,pe(()=>i.value+1)),En(ba,c),En(Ts,r);const l=Ye();return Qt(()=>[l.value,c.value,e.name],([f,u,d],[p,g,A])=>{u&&(u.instances[d]=f,g&&g!==u&&f&&f===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),f&&u&&(!g||!Vt(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(B=>B(f))},{flush:"post"}),()=>{const f=r.value,u=e.name,d=c.value,p=d&&d.components[u];if(!p)return ro(n.default,{Component:p,route:f});const g=d.props[u],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,H=Xs(p,te({},A,t,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return ro(n.default,{Component:H,route:f})||H}}});function ro(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sa=wa;function Ea(e){const t=fa(e.routes,e),n=e.parseQuery||ma,s=e.stringifyQuery||Zr,r=e.history,o=Gt(),i=Gt(),c=Gt(),l=Cl(at);let f=at;Nt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hs.bind(null,b=>""+b),d=hs.bind(null,Nu),p=hs.bind(null,pn);function g(b,I){let P,F;return Li(b)?(P=t.getRecordMatcher(b),F=I):F=b,t.addRoute(F,P)}function A(b){const I=t.getRecordMatcher(b);I&&t.removeRoute(I)}function B(){return t.getRoutes().map(b=>b.record)}function H(b){return!!t.getRecordMatcher(b)}function N(b,I){if(I=te({},I||l.value),typeof b=="string"){const h=ps(n,b,I.path),m=t.resolve({path:h.path},I),_=r.createHref(h.fullPath);return te(h,m,{params:p(m.params),hash:pn(h.hash),redirectedFrom:void 0,href:_})}let P;if(b.path!=null)P=te({},b,{path:ps(n,b.path,I.path).path});else{const h=te({},b.params);for(const m in h)h[m]==null&&delete h[m];P=te({},b,{params:d(h)}),I.params=d(I.params)}const F=t.resolve(P,I),se=b.hash||"";F.params=u(p(F.params));const fe=Hu(s,te({},b,{hash:ku(se),path:F.path})),a=r.createHref(fe);return te({fullPath:fe,hash:se,query:s===Zr?va(b.query):b.query||{}},F,{redirectedFrom:void 0,href:a})}function k(b){return typeof b=="string"?ps(n,b,l.value.path):te({},b)}function L(b,I){if(f!==b)return Ut(8,{from:I,to:b})}function O(b){return J(b)}function U(b){return O(te(k(b),{replace:!0}))}function Z(b){const I=b.matched[b.matched.length-1];if(I&&I.redirect){const{redirect:P}=I;let F=typeof P=="function"?P(b):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=k(F):{path:F},F.params={}),te({query:b.query,hash:b.hash,params:F.path!=null?{}:b.params},F)}}function J(b,I){const P=f=N(b),F=l.value,se=b.state,fe=b.force,a=b.replace===!0,h=Z(P);if(h)return J(te(k(h),{state:typeof h=="object"?te({},se,h.state):se,force:fe,replace:a}),I||P);const m=P;m.redirectedFrom=I;let _;return!fe&&Qu(s,F,P)&&(_=Ut(16,{to:m,from:F}),qe(F,F,!0,!1)),(_?Promise.resolve(_):w(m,F)).catch(v=>st(v)?st(v,2)?v:ct(v):ee(v,m,F)).then(v=>{if(v){if(st(v,2))return J(te({replace:a},k(v.to),{state:typeof v.to=="object"?te({},se,v.to.state):se,force:fe}),I||m)}else v=R(m,F,!0,a,se);return M(m,F,v),v})}function K(b,I){const P=L(b,I);return P?Promise.reject(P):Promise.resolve()}function y(b){const I=It.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(b):b()}function w(b,I){let P;const[F,se,fe]=Ra(b,I);P=gs(F.reverse(),"beforeRouteLeave",b,I);for(const h of F)h.leaveGuards.forEach(m=>{P.push(gt(m,b,I))});const a=K.bind(null,b,I);return P.push(a),$e(P).then(()=>{P=[];for(const h of o.list())P.push(gt(h,b,I));return P.push(a),$e(P)}).then(()=>{P=gs(se,"beforeRouteUpdate",b,I);for(const h of se)h.updateGuards.forEach(m=>{P.push(gt(m,b,I))});return P.push(a),$e(P)}).then(()=>{P=[];for(const h of fe)if(h.beforeEnter)if(Ke(h.beforeEnter))for(const m of h.beforeEnter)P.push(gt(m,b,I));else P.push(gt(h.beforeEnter,b,I));return P.push(a),$e(P)}).then(()=>(b.matched.forEach(h=>h.enterCallbacks={}),P=gs(fe,"beforeRouteEnter",b,I,y),P.push(a),$e(P))).then(()=>{P=[];for(const h of i.list())P.push(gt(h,b,I));return P.push(a),$e(P)}).catch(h=>st(h,8)?h:Promise.reject(h))}function M(b,I,P){c.list().forEach(F=>y(()=>F(b,I,P)))}function R(b,I,P,F,se){const fe=L(b,I);if(fe)return fe;const a=I===at,h=Nt?history.state:{};P&&(F||a?r.replace(b.fullPath,te({scroll:a&&h&&h.scroll},se)):r.push(b.fullPath,se)),l.value=b,qe(b,I,P,a),ct()}let G;function ae(){G||(G=r.listen((b,I,P)=>{if(!yn.listening)return;const F=N(b),se=Z(F);if(se){J(te(se,{replace:!0,force:!0}),F).catch(rn);return}f=F;const fe=l.value;Nt&&Ju(Ur(fe.fullPath,P.delta),Jn()),w(F,fe).catch(a=>st(a,12)?a:st(a,2)?(J(te(k(a.to),{force:!0}),F).then(h=>{st(h,20)&&!P.delta&&P.type===gn.pop&&r.go(-1,!1)}).catch(rn),Promise.reject()):(P.delta&&r.go(-P.delta,!1),ee(a,F,fe))).then(a=>{a=a||R(F,fe,!1),a&&(P.delta&&!st(a,8)?r.go(-P.delta,!1):P.type===gn.pop&&st(a,20)&&r.go(-1,!1)),M(F,fe,a)}).catch(rn)}))}let xe=Gt(),oe=Gt(),W;function ee(b,I,P){ct(b);const F=oe.list();return F.length?F.forEach(se=>se(b,I,P)):console.error(b),Promise.reject(b)}function et(){return W&&l.value!==at?Promise.resolve():new Promise((b,I)=>{xe.add([b,I])})}function ct(b){return W||(W=!b,ae(),xe.list().forEach(([I,P])=>b?P(b):I()),xe.reset()),b}function qe(b,I,P,F){const{scrollBehavior:se}=e;if(!Nt||!se)return Promise.resolve();const fe=!P&&Yu(Ur(b.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return zs().then(()=>se(b,I,fe)).then(a=>a&&Gu(a)).catch(a=>ee(a,b,I))}const Be=b=>r.go(b);let Mt;const It=new Set,yn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,clearRoutes:t.clearRoutes,hasRoute:H,getRoutes:B,resolve:N,options:e,push:O,replace:U,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:oe.add,isReady:et,install(b){const I=this;b.component("RouterLink",Ca),b.component("RouterView",Sa),b.config.globalProperties.$router=I,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Fe(l)}),Nt&&!Mt&&l.value===at&&(Mt=!0,O(r.location).catch(se=>{}));const P={};for(const se in at)Object.defineProperty(P,se,{get:()=>l.value[se],enumerable:!0});b.provide(Yn,I),b.provide(ji,Oo(P)),b.provide(Ts,l);const F=b.unmount;It.add(b),b.unmount=function(){It.delete(b),It.size<1&&(f=at,G&&G(),G=null,l.value=at,Mt=!1,W=!1),F()}}};function $e(b){return b.reduce((I,P)=>I.then(()=>y(P)),Promise.resolve())}return yn}function Ra(e,t){const n=[],s=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const c=t.matched[i];c&&(e.matched.find(f=>Vt(f,c))?s.push(c):n.push(c));const l=e.matched[i];l&&(t.matched.find(f=>Vt(f,l))||r.push(l))}return[n,s,r]}function er(){return Ue(Yn)}const tr=wu("quiz",{state:()=>({currentQuizBank:null,currentQuestionIndex:0,userAnswers:new Map,markedQuestions:new Set,score:0,isComplete:!1}),actions:{setQuizBank(e){this.currentQuizBank=e,this.currentQuestionIndex=0,this.userAnswers.clear(),this.score=0,this.isComplete=!1},submitAnswer(e){if(!this.currentQuizBank)return;this.userAnswers.set(this.currentQuestionIndex,e);const t=this.currentQuizBank.questions[this.currentQuestionIndex];if(Array.isArray(e)&&Array.isArray(t.answer)){const n=[...e].sort().join(""),s=[...t.answer].sort().join("");n===s&&this.score++}else e===t.answer&&this.score++},getSavedAnswer(e){return this.userAnswers.get(e)},nextQuestion(){this.currentQuizBank&&(this.currentQuestionIndex<this.currentQuizBank.questions.length-1?this.currentQuestionIndex++:this.isComplete=!0)},previousQuestion(){this.currentQuestionIndex>0&&this.currentQuestionIndex--},toggleMarkQuestion(e){this.markedQuestions.has(e)?this.markedQuestions.delete(e):this.markedQuestions.add(e)},jumpToQuestion(e){e>=0&&this.currentQuizBank&&e<this.currentQuizBank.questions.length&&(this.currentQuestionIndex=e)}},getters:{progress:e=>{if(!e.currentQuizBank)return 0;const t=e.userAnswers.size;return Math.round(t/e.currentQuizBank.questions.length*100)},isAnswerCorrect:e=>t=>{var r;const n=e.userAnswers.get(t),s=(r=e.currentQuizBank)==null?void 0:r.questions[t];if(!n||!s)return!1;if(Array.isArray(n)&&Array.isArray(s.answer)){const o=[...n].sort().join(""),i=[...s.answer].sort().join("");return o===i}return n===s.answer}}}),Ba=`**一、单选题（30道）**

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
答案：ABCD`,Da=`**一、单选题（30 道）**

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
答案：ABCD `;function Pa(e){const t=e.split("**").filter(r=>r.trim()),n=[];let s="";return t.forEach(r=>{if(r.includes("单选题"))s="single";else if(r.includes("判断题"))s="boolean";else if(r.includes("多选题"))s="multiple";else if(r.trim()){const o=r.split(`
`).filter(i=>i.trim());o.forEach(i=>{if(i.match(/^\d+\./)){const c={type:s,content:i.replace(/^\d+\./,"").trim(),options:[],answer:""};if(s==="single"||s==="multiple"){const l=o.slice(o.indexOf(i)+1),f=[];for(const u of l)if(u.match(/^[A-D]\./))f.push(u.trim());else if(u.includes("答案：")){s==="multiple"?c.answer=u.replace("答案：","").trim().split(""):c.answer=u.replace("答案：","").trim();break}c.options=f}else if(s==="boolean"){c.options=["正确","错误"];const l=o[o.indexOf(i)+1];l&&l.includes("答案：")&&(c.answer=l.replace("答案：","").trim())}n.push(c)}})}}),{title:"题库",questions:n}}async function Oa(){var e;try{const t=[],n=Object.assign({"/quizbanks/信息通信-1.md":Ba,"/quizbanks/信息通信-2.md":Da});for(const[s,r]of Object.entries(n)){const o=((e=s.split("/").pop())==null?void 0:e.replace(".md",""))||"",i=Pa(r);i.title=o,t.push(i)}return t}catch(t){return console.error("Failed to load quiz banks:",t),[]}}const Ta={class:"max-w-4xl mx-auto p-4"},Ma={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Ia=["onClick"],ka={class:"text-xl font-semibold"},La={class:"text-gray-600"},$a=bn({__name:"QuizSelector",setup(e){const t=er(),n=tr(),s=Ye([]);qs(async()=>{s.value=await Oa()});const r=o=>{n.setQuizBank(o),t.push("/quiz")};return(o,i)=>(me(),_e("div",Ta,[i[0]||(i[0]=$("h1",{class:"text-2xl font-bold mb-6"},"选择题库",-1)),$("div",Ma,[(me(!0),_e(De,null,Sn(s.value,c=>(me(),_e("div",{key:c.title,class:"border rounded-lg p-4 cursor-pointer bg-gray-300 hover:bg-green-200",onClick:l=>r(c)},[$("h2",ka,we(c.title),1),$("p",La,"题数: "+we(c.questions.length),1)],8,Ia))),128))])]))}}),Na={class:"max-w-4xl mx-auto"},Fa={class:"mb-1 bg-white rounded-xl shadow-sm p-3"},ja={class:"relative"},Ha={class:"flex mb-2 items-center justify-between"},Qa={class:"text-sm font-medium text-blue-600"},Va={class:"h-3 bg-blue-100 rounded-full"},Ua={class:"p-4"},za={class:"flex justify-between items-center mb-4"},Ka={class:"grid grid-cols-5 gap-2"},qa=["onClick"],Wa={key:0,class:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"},Ga={key:0,class:"bg-white rounded-xl shadow-lg min-h-[600px] flex flex-col"},Ja={class:"flex-1 p-8 overflow-y-auto"},Ya={class:"flex justify-between items-center mb-6"},Xa={class:"flex items-center gap-4"},Za={class:"text-xl font-bold text-gray-800"},ef={class:"flex items-center gap-4"},tf={class:"px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"},nf={class:"text-lg mb-8 text-gray-700"},sf={class:"space-y-4"},rf=["onClick"],of=["onClick"],lf={class:"border-t border-gray-100 p-6 bg-white rounded-b-xl"},cf={class:"flex justify-between items-center max-w-2xl mx-auto"},uf=["disabled"],af=["disabled"],ff=["disabled"],df={key:1,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},hf={class:"bg-white rounded-lg p-6 max-w-sm w-full mx-4"},pf={class:"flex justify-end gap-4"},gf=bn({__name:"QuizQuestion",setup(e){const t=er(),n=tr(),s=Ye(!1),r=Ye([]),o=Ye(""),i=Ye(!1),c=Ye(!1),l=pe(()=>{var y;return(y=n.currentQuizBank)==null?void 0:y.questions[n.currentQuestionIndex]}),f=pe(()=>n.currentQuestionIndex),u=pe(()=>n.progress),d=pe(()=>n.currentQuizBank?f.value===n.currentQuizBank.questions.length-1:!1),p=pe(()=>{var y;return((y=n.currentQuizBank)==null?void 0:y.questions.length)||0});Qt(()=>f.value,y=>{const w=n.getSavedAnswer(y);w?(Array.isArray(w)?r.value=w:o.value=w,i.value=!0,s.value=!0):(r.value=[],o.value="",i.value=!1,s.value=!1)},{immediate:!0});const g=y=>{s.value||(o.value=y,i.value=!0,s.value=!0,n.submitAnswer(y))},A=()=>{!l.value||!i.value||(s.value=!0,n.submitAnswer(r.value))},B=()=>{d.value?c.value=!0:f.value<p.value-1&&n.nextQuestion()},H=()=>{f.value>0&&n.previousQuestion()},N=y=>{var R,G,ae;if(!s.value)return"hover:bg-gray-100 border border-gray-200";const w=o.value===y,M=((R=l.value)==null?void 0:R.type)==="boolean"?((G=l.value)==null?void 0:G.answer)===y:(ae=l.value)==null?void 0:ae.answer.includes(y);return w&&M?"bg-green-100 border-green-500 border":w&&!M?"bg-red-100 border-red-500 border":!w&&M?"bg-green-100 border-green-500 border":"border border-gray-200"},k=y=>{var R;if(!s.value)return r.value.includes(y)?"bg-blue-100 border-blue-500 border":"hover:bg-gray-100 border border-gray-200";const w=r.value.includes(y),M=Array.isArray((R=l.value)==null?void 0:R.answer)&&l.value.answer.includes(y);return w&&M?"bg-green-100 border-green-500 border":w&&!M?"bg-red-100 border-red-500 border":!w&&M?"bg-green-100 border-green-500 border":"border border-gray-200"},L=y=>{if(s.value)return;const w=r.value.indexOf(y);w===-1?r.value.push(y):r.value.splice(w,1),i.value=r.value.length>0},O=Ye(!1),U=pe(()=>n.markedQuestions.has(f.value)),Z=()=>{n.toggleMarkQuestion(f.value)},J=y=>{n.jumpToQuestion(y),O.value=!1},K=()=>{c.value=!1,t.push("/result")};return(y,w)=>(me(),_e("div",Na,[$("div",Fa,[$("div",ja,[$("div",Ha,[w[4]||(w[4]=$("span",{class:"text-sm font-medium text-blue-600"},"做题进度",-1)),$("span",Qa,we(Math.round(u.value))+"%",1)]),$("div",Va,[$("div",{class:"h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500",style:Qn({width:`${u.value}%`})},null,4)])])]),$("div",{class:ot(["fixed right-0 top-0 h-full bg-white shadow-lg transform transition-transform duration-300",O.value?"translate-x-0":"translate-x-full"]),style:{width:"300px"}},[$("div",Ua,[$("div",za,[w[6]||(w[6]=$("h3",{class:"text-lg font-bold"},"题目导航",-1)),$("button",{onClick:w[0]||(w[0]=M=>c.value=!0),class:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200"},"交卷 "),$("button",{onClick:w[1]||(w[1]=M=>O.value=!1),class:"text-gray-500 hover:text-gray-700"},w[5]||(w[5]=[$("span",{class:"sr-only"},"关闭",-1),$("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),$("div",Ka,[(me(!0),_e(De,null,Sn(p.value,M=>(me(),_e("button",{key:M-1,onClick:R=>J(M-1),class:ot(["w-10 h-10 rounded-lg flex items-center justify-center relative",[f.value===M-1?"bg-blue-600 text-white":"bg-gray-100",Fe(n).userAnswers.has(M-1)&&Fe(n).isAnswerCorrect(M-1)?"border-2 border-green-500":"",Fe(n).userAnswers.has(M-1)&&!Fe(n).isAnswerCorrect(M-1)?"border-2 border-red-500":""]])},[_i(we(M)+" ",1),Fe(n).markedQuestions.has(M-1)?(me(),_e("span",Wa)):qt("",!0)],10,qa))),128))])])],2),l.value?(me(),_e("div",Ga,[$("div",Ja,[$("div",Ya,[$("div",Xa,[$("h2",Za," 第 "+we(f.value+1)+" 题 ",1),$("button",{onClick:Z,class:ot(["p-2 rounded-full hover:bg-gray-100",{"text-red-500":U.value}])},w[7]||(w[7]=[$("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"})],-1)]),2)]),$("div",ef,[$("span",tf,we(f.value+1)+" / "+we(p.value),1),$("button",{onClick:w[2]||(w[2]=M=>O.value=!0),class:"p-2 rounded-full hover:bg-gray-100"},w[8]||(w[8]=[$("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]))])]),$("p",nf,we(l.value.content),1),$("div",sf,[l.value.type==="single"||l.value.type==="boolean"?(me(!0),_e(De,{key:0},Sn(l.value.options,M=>(me(),_e("div",{key:M,onClick:R=>g(l.value.type==="boolean"?M:M[0]),class:ot(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[N(l.value.type==="boolean"?M:M[0])]])},we(M),11,rf))),128)):l.value.type==="multiple"?(me(!0),_e(De,{key:1},Sn(l.value.options,M=>(me(),_e("div",{key:M,onClick:R=>!s.value&&L(M[0]),class:ot(["p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",[k(M[0])]])},we(M),11,of))),128)):qt("",!0)])]),$("div",lf,[$("div",cf,[$("button",{onClick:H,disabled:f.value===0,class:ot(["px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",f.value===0?"bg-gray-100 text-gray-400":"bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"])}," 上一题 ",10,uf),l.value.type==="multiple"&&!s.value?(me(),_e("button",{key:0,onClick:A,disabled:!i.value,class:"px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"}," 确认答案 ",8,af)):qt("",!0),$("button",{onClick:B,disabled:!d.value&&!i.value,class:"px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"},we(d.value?"完成":"下一题"),9,ff)])])])):qt("",!0),c.value?(me(),_e("div",df,[$("div",hf,[w[9]||(w[9]=$("h3",{class:"text-lg font-bold mb-4"},"确认交卷",-1)),w[10]||(w[10]=$("p",{class:"text-gray-600 mb-6"},"确定要交卷吗？请确认所有题目都已完成。",-1)),$("div",pf,[$("button",{onClick:w[3]||(w[3]=M=>c.value=!1),class:"px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"}," 取消 "),$("button",{onClick:K,class:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"}," 确认交卷 ")])])])):qt("",!0)]))}}),Hi=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},mf=Hi(gf,[["__scopeId","data-v-8ea85c15"]]),vf={class:"max-w-4xl mx-auto p-4"},bf={class:"bg-white rounded-xl shadow-lg p-8"},_f={class:"space-y-6"},yf={class:"bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6"},Cf={class:"text-center"},xf={class:"text-4xl font-bold text-blue-600"},Af={class:"mt-2 text-gray-600"},wf={class:"text-center"},Sf=bn({__name:"QuizResult",setup(e){const t=er(),n=tr(),s=pe(()=>n.score),r=pe(()=>{var o;return((o=n.currentQuizBank)==null?void 0:o.questions.length)||0});return(o,i)=>(me(),_e("div",vf,[$("div",bf,[i[1]||(i[1]=$("h2",{class:"text-2xl font-bold text-gray-800 mb-6"},"结果",-1)),$("div",_f,[$("div",yf,[$("div",Cf,[$("div",xf,we(s.value)+" / "+we(r.value),1),$("div",Af," 正确率: "+we(Math.round(s.value/r.value*100))+"% ",1)])]),$("div",wf,[$("button",{onClick:i[0]||(i[0]=c=>Fe(t).push("/")),class:"px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-all duration-200"}," 返回题库选择 ")])])])]))}}),Ef=Ea({history:ta("/prv-shuati/"),routes:[{path:"/",component:$a},{path:"/quiz",component:mf},{path:"/result",component:Sf}]}),Rf={},Bf={class:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50"},Df={class:"container mx-auto px-4 py-2"};function Pf(e,t){const n=Wl("router-view");return me(),_e("div",Bf,[t[0]||(t[0]=$("header",{class:"bg-white shadow-md"},[$("div",{class:"max-w-4xl mx-auto p-4"},[$("h1",{class:"text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"}," 小浩刷题系统 ")])],-1)),$("main",Df,[Re(n,null,{default:ys(({Component:s})=>[Re(zc,{name:"fade",mode:"out-in"},{default:ys(()=>[(me(),vi(Gl(s)))]),_:2},1024)]),_:1})])])}const Of=Hi(Rf,[["render",Pf]]),nr=pu(Of);nr.use(bu());nr.use(Ef);nr.mount("#app");
