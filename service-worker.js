!function(){"use strict";const e=1600359111206,t="cache"+e,s=["/client/about.e87e6bf6.js","/client/index.c8d69497.js","/client/[slug].239b4507.js","/client/index.5d74c40d.js","/client/client.38ea7bcb.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/successkid.jpg"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
