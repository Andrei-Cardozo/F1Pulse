self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/F1Pulse/",                
        "/F1Pulse/index.html",
        "/F1Pulse/css/style.css",
        "/F1Pulse/js/main.js",      
        "/F1Pulse/manifest.json",
        "/F1Pulse/img/icon-192.png",
        "/F1Pulse/img/icon-512.png",
        "/F1Pulse/img/manifest-icon-192.maskable.png"
      ]);
    })
  );
});

// Instalando SW e salvando arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Ativando SW
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
