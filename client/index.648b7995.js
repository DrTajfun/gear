import{S as s,i as e,s as t,h as a,e as c,a as r,n as l,d as n,b as i,t as o,c as u,f as h,g as f,j as d,k as v,l as p,m,o as g,q as x,p as y,r as w,u as E,v as k,w as $,x as b,y as G,z as T}from"./client.396f3534.js";function I(s){let e,t,a=s[2].message+"";return{c(){e=i("p"),t=o(a),this.h()},l(s){e=u(s,"P",{style:!0});var c=h(e);t=f(c,a),c.forEach(n),this.h()},h(){d(e,"color","red")},m(s,a){r(s,e,a),v(e,t)},p(s,e){1&e&&a!==(a=s[2].message+"")&&p(t,a)},d(s){s&&n(e)}}}function P(s){let e,t;return{c(){e=i("p"),t=o(s[0])},l(a){e=u(a,"P",{});var c=h(e);t=f(c,s[0]),c.forEach(n)},m(s,a){r(s,e,a),v(e,t)},p(s,e){1&e&&p(t,s[0])},d(s){s&&n(e)}}}function S(s){let e,t;return{c(){e=i("p"),t=o("...waiting")},l(s){e=u(s,"P",{});var a=h(e);t=f(a,"...waiting"),a.forEach(n)},m(s,a){r(s,e,a),v(e,t)},p:l,d(s){s&&n(e)}}}function j(s){let e,t,i={ctx:s,current:null,token:null,hasCatch:!0,pending:S,then:P,catch:I,value:1,error:2};return a(t=s[0],i),{c(){e=c(),i.block.c()},l(s){e=c(),i.block.l(s)},m(s,t){r(s,e,t),i.block.m(s,i.anchor=t),i.mount=()=>e.parentNode,i.anchor=e},p(e,[c]){if(s=e,i.ctx=s,1&c&&t!==(t=s[0])&&a(t,i));else{const e=s.slice();e[1]=e[2]=i.resolved,i.block.p(e,c)}},i:l,o:l,d(s){s&&n(e),i.block.d(s),i.token=null,i=null}}}function H(s,e,t){let{article:a}=e;return s.$$set=s=>{"article"in s&&t(0,a=s.article)},[a]}class N extends s{constructor(s){super(),e(this,s,H,j,t,{article:0})}}function C(s){let e,t,a,c,l,d,I,P,S,j,H,C,F,M,O,R,q,z,A,D,K,U,V,X,Y,B=s[0].x+"",J=s[0].y+"";return U=new N({}),{c(){e=m(),t=i("h1"),a=o("Great success!"),c=m(),l=i("figure"),d=i("img"),P=m(),S=i("figcaption"),j=o("Have fun with Sapper!"),H=m(),C=i("p"),F=i("strong"),M=o("Try editing this file (src/routes/index.svelte) to test live reloading."),O=m(),R=i("div"),q=o("The mouse position is "),z=o(B),A=o(" x "),D=o(J),K=m(),g(U.$$.fragment),this.h()},l(s){x('[data-svelte="svelte-172a8b3"]',document.head).forEach(n),e=y(s),t=u(s,"H1",{class:!0});var r=h(t);a=f(r,"Great success!"),r.forEach(n),c=y(s),l=u(s,"FIGURE",{class:!0});var i=h(l);d=u(i,"IMG",{alt:!0,src:!0,class:!0}),P=y(i),S=u(i,"FIGCAPTION",{});var o=h(S);j=f(o,"Have fun with Sapper!"),o.forEach(n),i.forEach(n),H=y(s),C=u(s,"P",{class:!0});var v=h(C);F=u(v,"STRONG",{});var p=h(F);M=f(p,"Try editing this file (src/routes/index.svelte) to test live reloading."),p.forEach(n),v.forEach(n),O=y(s),R=u(s,"DIV",{class:!0});var m=h(R);q=f(m,"The mouse position is "),z=f(m,B),A=f(m," x "),D=f(m,J),m.forEach(n),K=y(s),w(U.$$.fragment,s),this.h()},h(){document.title="My gear collection",E(t,"class","svelte-1ls25yw"),E(d,"alt","Success Kid"),d.src!==(I="successkid.jpg")&&E(d,"src","successkid.jpg"),E(d,"class","svelte-1ls25yw"),E(l,"class","svelte-1ls25yw"),E(C,"class","svelte-1ls25yw"),E(R,"class","svelte-1ls25yw")},m(n,i){r(n,e,i),r(n,t,i),v(t,a),r(n,c,i),r(n,l,i),v(l,d),v(l,P),v(l,S),v(S,j),r(n,H,i),r(n,C,i),v(C,F),v(F,M),r(n,O,i),r(n,R,i),v(R,q),v(R,z),v(R,A),v(R,D),r(n,K,i),k(U,n,i),V=!0,X||(Y=$(R,"mousemove",s[1]),X=!0)},p(s,[e]){(!V||1&e)&&B!==(B=s[0].x+"")&&p(z,B),(!V||1&e)&&J!==(J=s[0].y+"")&&p(D,J)},i(s){V||(b(U.$$.fragment,s),V=!0)},o(s){G(U.$$.fragment,s),V=!1},d(s){s&&n(e),s&&n(t),s&&n(c),s&&n(l),s&&n(H),s&&n(C),s&&n(O),s&&n(R),s&&n(K),T(U,s),X=!1,Y()}}}function F(s,e,t){let a={x:0,y:0};return[a,s=>t(0,a={x:s.clientX,y:s.clientY})]}export default class extends s{constructor(s){super(),e(this,s,F,C,t,{})}}
