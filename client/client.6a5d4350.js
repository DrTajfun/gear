function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function _(t){return b(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function E(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function k(t){S=t}function R(){if(!S)throw new Error("Function called outside component initialization");return S}const N=[],P=[],A=[],L=[],j=Promise.resolve();let q=!1;function O(t){A.push(t)}let U=!1;const C=new Set;function T(){if(!U){U=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];k(e),I(e.$$)}for(k(null),N.length=0;P.length;)P.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];C.has(e)||(C.add(e),e())}A.length=0}while(N.length);for(;L.length;)L.pop()();q=!1,U=!1,C.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const J=new Set;let B;function K(){B={r:0,c:[],p:B}}function M(){B.r||o(B.c),B=B.p}function V(t,e){t&&t.i&&(J.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),B.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function D(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;void 0!==o&&(c=c.slice(),c[o]=s);const i=t&&(e.current=t)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==r&&t&&(K(),z(t,1,1,()=>{e.blocks[n]=null}),M())}):e.block.d(1),i.c(),V(i,1),i.m(e.mount(),e.anchor),a=!0),e.block=i,e.blocks&&(e.blocks[r]=i),a&&T()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=R();if(t.then(t=>{k(n),r(e.then,1,e.value,t),k(null)},t=>{if(k(n),r(e.catch,2,e.error,t),k(null),!e.hasCatch)throw t}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function H(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,r),O(()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(O)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(N.push(t),q||(q=!0,j.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,c,i,a,l=[-1]){const u=S;k(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&Q(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&V(e.$$.fragment),W(e,n.target,n.anchor),T()}k(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={};function ot(t){let e,n;const r=t[1].default,o=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(r,t,t[0],null);return{c(){e=p("main"),o&&o.c(),this.h()},l(t){e=v(t,"MAIN",{class:!0});var n=y(e);o&&o.l(n),n.forEach(f),this.h()},h(){$(e,"class","svelte-1uhnsl8")},m(t,r){u(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&a(o,r,t,t[0],e,null,null)},i(t){n||(V(o,t),n=!0)},o(t){z(o,t),n=!1},d(t){t&&f(e),o&&o.d(t)}}}function st(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ct extends tt{constructor(t){super(),Z(this,t,st,ot,c,{})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=v(t,"PRE",{});var o=y(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&f(e)}}}function at(e){let n,r,o,s,c,i,a,g,w,S=e[1].message+"";document.title=n=e[0];let k=e[2]&&e[1].stack&&it(e);return{c(){r=h(),o=p("h1"),s=d(e[0]),c=h(),i=p("p"),a=d(S),g=h(),k&&k.c(),w=m(),this.h()},l(t){E('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=v(t,"H1",{class:!0});var n=y(o);s=b(n,e[0]),n.forEach(f),c=_(t),i=v(t,"P",{class:!0});var l=y(i);a=b(l,S),l.forEach(f),g=_(t),k&&k.l(t),w=m(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(i,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,i,e),l(i,a),u(t,g,e),k&&k.m(t,e),u(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&S!==(S=t[1].message+"")&&x(a,S),t[2]&&t[1].stack?k?k.p(t,e):(k=it(t),k.c(),k.m(w.parentNode,w)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(i),t&&f(g),k&&k.d(t),t&&f(w)}}}function lt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class ut extends tt{constructor(t){super(),Z(this,t,lt,at,c,{status:0,error:1})}}function ft(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&F(n.$$.fragment),r=m()},l(t){n&&G(n.$$.fragment,t),r=m()},m(t,e){n&&W(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?H(s,[Y(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){K();const t=n;z(t.$$.fragment,1,0,()=>{X(t,1)}),M()}c?(n=new c(i()),F(n.$$.fragment),V(n.$$.fragment,1),W(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&V(n.$$.fragment,t),o=!0)},o(t){n&&z(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&X(n,t)}}}function pt(t){let e,n;return e=new ut({props:{error:t[0],status:t[1]}}),{c(){F(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){W(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function dt(t){let e,n,r,o;const s=[pt,ft],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(K(),z(c[a],1,1,()=>{c[a]=null}),M(),n=c[e],n||(n=c[e]=s[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){o||(V(n),o=!0)},o(t){z(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function ht(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[dt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ct({props:s}),{c(){F(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,e){W(n,t,e),r=!0},p(t,[e]){const r=12&e?H(o,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){z(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function mt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=rt,p=r,R().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class gt extends tt{constructor(t){super(),Z(this,t,mt,ht,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const $t=[],yt=[{js:()=>Promise.all([import("./index.c786fbf3.js"),__inject_styles(["client-1890402d.css","index-c59b5316.css"])]).then(t=>t[0])}],vt=[{pattern:/^\/$/,parts:[{i:0}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function bt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function _t(t,e={noscroll:!1,replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(Ct[e.replaceState?"replaceState":"pushState"]({id:Ot},"",t),Kt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,Et,St,kt=!1,Rt=[],Nt="{}";const Pt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(xt&&xt.session)};let At,Lt;Pt.session.subscribe(t=>bt(void 0,void 0,void 0,(function*(){if(At=t,!kt)return;Lt=!0;const e=Jt(new URL(location.href)),n=Et={},{redirect:r,props:o,branch:s}=yield Vt(e);n===Et&&(r?yield _t(r.location,{replaceState:!0}):yield Mt(s,o,e.page))})));let jt,qt=null;let Ot,Ut=1;const Ct="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function It(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!$t.some(t=>t.test(e)))for(let n=0;n<vt.length;n+=1){const r=vt[n],o=r.pattern.exec(e);if(o){const n=It(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function Bt(){return{x:pageXOffset,y:pageYOffset}}function Kt(t,e,n,r){return bt(this,void 0,void 0,(function*(){if(e)Ot=e;else{const t=Bt();Tt[Ot]=t,e=Ot=++Ut,Tt[Ot]=n?t:{x:0,y:0}}Ot=e,wt&&Pt.preloading.set(!0);const o=qt&&qt.href===t.href?qt.promise:Vt(t);qt=null;const s=Et={},c=yield o,{redirect:i}=c;if(s===Et){if(i)yield _t(i.location,{replaceState:!0});else{const{props:e,branch:n}=c;yield Mt(n,e,t.page)}if(document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Tt[Ot]=t,t&&(i?scrollTo(0,0):scrollTo(t.x,t.y))}}}))}function Mt(t,e,n){return bt(this,void 0,void 0,(function*(){Pt.page.set(n),Pt.preloading.set(!1),wt?wt.$set(e):(e.stores={page:{subscribe:Pt.page.subscribe},preloading:{subscribe:Pt.preloading.subscribe},session:Pt.session},e.level0={props:yield St},e.notify=Pt.page.notify,wt=new gt({target:jt,props:e,hydrate:!0})),Rt=t,Nt=JSON.stringify(n.query),kt=!0,Lt=!1}))}function Vt(t){return bt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!St){const t=()=>{};St=xt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},At)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map((e,i)=>bt(this,void 0,void 0,(function*(){const f=r[i];if(function(t,e,n,r){if(r!==Nt)return!0;const o=Rt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:f};const p=a++;if(!Lt&&!u&&Rt[i]&&Rt[i].part===e.i)return Rt[i];u=!1;const{default:d,preload:h}=yield function(t){const e=[t.js()];return Promise.all(e).then(t=>t[0])}(yt[e.i]);let m;return m=kt||!xt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},At):{}:xt.preloaded[i+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}function zt(t){const e=Jt(new URL(t,document.baseURI));if(e)return qt&&t===qt.href||function(t,e){qt={href:t,promise:e}}(t,Vt(e)),qt.promise}let Dt;function Ht(t){clearTimeout(Dt),Dt=setTimeout(()=>{Yt(t)},20)}function Yt(t){const e=Gt(t.target);e&&"prefetch"===e.rel&&zt(e.href)}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Gt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Kt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Ct.pushState({id:Ot},"",o.href)}}function Gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Wt(t){if(Tt[Ot]=Bt(),t.state){const e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Ut=Ut+1,function(t){Ot=t}(Ut),Ct.replaceState({id:Ot},"",location.href)}var Xt;Xt={target:document.querySelector("#sapper")},"scrollRestoration"in Ct&&(Ct.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ct.scrollRestoration="auto"}),addEventListener("load",()=>{Ct.scrollRestoration="manual"}),function(t){jt=t}(Xt.target),addEventListener("click",Ft),addEventListener("popstate",Wt),addEventListener("touchstart",Yt),addEventListener("mousemove",Ht),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ct.replaceState({id:Ut},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:i}=xt;St||(St=s&&s[0]),Mt([],{error:i,status:c,session:o,level0:{props:St},level1:{props:{status:c,error:i},component:ut},segments:s},{host:e,path:n,query:It(r),params:{}})}();const r=Jt(n);return r?Kt(r,Ut,!0,t):void 0});export{tt as S,u as a,p as b,v as c,f as d,m as e,y as f,b as g,D as h,Z as i,w as j,l as k,h as l,F as m,t as n,_ as o,G as p,E as q,$ as r,c as s,d as t,W as u,g as v,x as w,V as x,z as y,X as z};

import __inject_styles from './inject_styles.js';