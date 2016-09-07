// Use a cacheName for cache versioning
var cacheName = 'v1:static',
    cacheFiles = [
                '/',
                'css/style.min.css',
                'js/libs.min.js',
                'js/app.js',
                'js/controllers.js',
                'js/directives.js',
                'js/filters.js',
                'js/services.js',
                'pokemons.json',
            ]

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(cacheFiles).then(function() {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});