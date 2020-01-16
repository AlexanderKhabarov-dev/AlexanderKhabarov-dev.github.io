var cache_name = 'gih-cache';
var cached_urls = [
  '/clothes.html',
  '/rent.html',
  '/vintage.html',
  '/build/css/style.css',
  '/src/js/hidden-menu.js',
  '/src/js/preloader.js',
  '/src/js/scroll-animation.js',
  '/src/js/swiper.min.js',
  '/src/js/swiper-main__init.js',
  '/src/js/swiper-category__init.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cache_name)
    .then(function(cache) {
      return cache.addAll(cached_urls);
    })
  );
});