const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "index.html",
  "style.css",
  "app.js",
  "script12.js",
  "about.html",
  "backgroundimage.jpg",
  "ramadan.png",
  "ramadan16.png",
  "ramadan512.png"
 // "/icons/icon-192x192.png",
  //"/icons/icon-512x512.png"
];

// ইন্সটল ইভেন্ট
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ফ্যাচ ইভেন্ট (অফলাইনে কাজ করার জন্য)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
