importScripts("/precache-manifest.73d00cc5aaa53aff6c8b7141f156cb9f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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


  // workbox.routing.registerRoute(
  //   '/employees',
  //   new workbox.strategies.NetworkFirst({
  //     cacheName: 'ahmeds-cache',
  //   }),
  // );

  
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

