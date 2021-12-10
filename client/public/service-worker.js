if (workbox) {
  self.skipWaiting();
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
  self.addEventListener('push', (event) => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body.message,
      icon: 'img/icons/employees_192x192.png',
    });
  });
} else {
  console.log(`Workbox didn't load`);
}
