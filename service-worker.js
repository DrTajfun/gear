!function() {
    "use strict";
    const e = 1600376189999
      , t = "cache" + e
      , n = ["/client/about.077df5f9.js", "/client/index.31f856a9.js", "/client/client.91a4ae41.js"].concat(["/service-worker-index.html", "/apple-touch-icon.png", "/favicon.png", "/global.css", "/logo-192.png", "/logo-512.png", "/manifest.json", "/successkid.jpg"])
      , s = new Set(n);
    self.addEventListener("install", e=>{
        e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{
            self.skipWaiting()
        }
        ).then(console.log("install ASSETS", t)))
    }
    ),
    self.addEventListener("activate", e=>{
        e.waitUntil(caches.keys().then(async e=>{
            for (const n of e)
                n !== t && await caches.delete(n);
            self.clients.claim()
        }
        ))
    }
    ),
    self.addEventListener("fetch", t=>{
        if ("GET" !== t.request.method || t.request.headers.has("range"))
            return;
        const n = new URL(t.request.url);
        n.protocol.startsWith("http") && (n.hostname === self.location.hostname && n.port !== self.location.port || (n.host === self.location.host && s.has(n.pathname) ? t.respondWith(caches.match(t.request)) : "only-if-cached" !== t.request.cache && t.respondWith(caches.open("offline" + e).then(async e=>{
            try {
                const n = await fetch(t.request);
                return e.put(t.request, n.clone()),
                n
            } catch (n) {
                const s = await e.match(t.request);
                if (s)
                    return s;
                throw n
            }
        }
        ))))
    }
    )
}();
