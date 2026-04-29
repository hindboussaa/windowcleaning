const CACHE_NAME = "window-cleaning-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/services.html",
  "/contact.html",
  "/ourwork.html",
  "/style.css"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch (offline support)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});