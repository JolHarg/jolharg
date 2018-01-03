const CACHE_NAME = `jolharg-1`,
    RESPONSE_404_HTML = `/404.html`,
    RESPONSE_404_JS = `/404.js`,
    arrFilesToAdd = [
        '/',
        RESPONSE_404_HTML,
        RESPONSE_404_JS
    ];

self.addEventListener(`install`, async function (event) {
    try {
        const cache = await caches.open(CACHE_NAME),
            openedCache = await cache.addAll(arrFilesToAdd);
    } catch (err) {
        console.error(err);
    }
});

async function getCorrectResponse(event) {
    try {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
            return cachedResponse;
        }
        const liveResponse = await fetch(event.request),
            cache = await caches.open(CACHE_NAME),
            clonedResponse = liveResponse.clone();

        cache.put(event.request, liveResponse);

        return clonedResponse;
    } catch(err) {
        console.log(event);
        throw err;
    }
}

self.addEventListener(`fetch`, async event => {
    try {
        const response = getCorrectResponse(event);
        event.respondWith(response);
    } catch (err) {
        console.error(err, event);
    }
});

self.addEventListener('activate', async event => {
  var cacheWhitelist = [CACHE_NAME];

  try {
      const keyList = await caches.keys(),
        deleteOld = await Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
              return caches.delete(key);
          }
      }));
  } catch(err) {
      console.error(err);
  }
});
