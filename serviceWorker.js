self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        cache.add('/');
        cache.add('index.html');
        cache.add('style.css');
        cache.add('app.js');
        cache.add('about.html');
        cache.add('script.js');
        cache.add('backgroundimage.jpg');
        cache.add('ramadan.png');
        cache.add('ramadan16.png');
        cache.add('ramadan512.png');
        cache.add('tittle-bottom.svg');
       /* cache.add('favicon167.png');
        cache.add('favicon180.png');
        cache.add('favicon32.png');
        cache.add('favicon512.png');
        cache.add('manifest.json');
        cache.add('sw.js');
        cache.add('joynal.jpg');
        cache.add('bannerbg.jpg');
        cache.add('sohojapi-logo.png');
        cache.add('https://kit.fontawesome.com/04a32377bf.js');
        cache.add('https://sohojapi.vercel.app/api/divisions');
        cache.add('https://sohojapi.vercel.app/api/districts');
        cache.add('https://sohojapi.vercel.app/api/upzilas');
    cache.add('https://sohojapi.vercel.app/api/unions'); */
        cache.addAll([

        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});
