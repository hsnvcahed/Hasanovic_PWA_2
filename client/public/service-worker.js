if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    new RegExp('/images/.*.jpg'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'ahmed-image-cache',
    }),
  );
  workbox.routing.registerRoute(
    '/employees',
    new workbox.strategies.CacheFirst({
      cacheName: 'ahmeds-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}
