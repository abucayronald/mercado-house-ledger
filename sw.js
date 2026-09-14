// Minimal service worker — required by Chrome/Android for a site to be
// treated as an installable app rather than a plain browser shortcut.
// It doesn't cache anything special; it just passes requests straight
// through to the network.

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});
