'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8564742be9058202fa60b34034c981aa",
"assets/AssetManifest.bin.json": "7e6de6a569ddedd317f55e56a1847ace",
"assets/AssetManifest.json": "8ff65e5625d60fff4d728f6253c1210e",
"assets/assets/gallery/g1.jpg": "8af3c2f7ea8e7e36bd8a043100cf54d5",
"assets/assets/gallery/g10.jpg": "2825995d25da1958126f4329c47abd4d",
"assets/assets/gallery/g11.jpg": "57e49b77aebf5c4f77a0d9130ff2916c",
"assets/assets/gallery/g12.jpg": "3af8b93bd516afbab1ffe48f79c16f55",
"assets/assets/gallery/g13.jpg": "05cd396e71c89241f0f3691c043ad06d",
"assets/assets/gallery/g14.jpg": "45334453d19c706aa976c6fb621aafdd",
"assets/assets/gallery/g15.jpg": "7405f976cb3d96edadcf69c6fb5538ac",
"assets/assets/gallery/g16.jpg": "57a7496a81c28e36fcd459a107d111cb",
"assets/assets/gallery/g17.jpg": "3d0d67c381bd34f585023364a5ef6b57",
"assets/assets/gallery/g2.jpg": "eb8c23b734b4e88b61ec5b0d738506b6",
"assets/assets/gallery/g3.jpg": "1f8fbad9cd07b48082837f85cd5b4f35",
"assets/assets/gallery/g4.jpg": "52ea85cbdc0d5342c9418c8a5ac5d06d",
"assets/assets/gallery/g5.jpg": "28b54d434c67d11a027c1bf5b5fdf920",
"assets/assets/gallery/g6.jpg": "6072ea43efb18f54ec18c8a5c49427bc",
"assets/assets/gallery/g7.jpg": "94186285e3fb2b3f6c392ad925a9b912",
"assets/assets/gallery/g8.jpg": "b2a9b77c40d3549c85e04235eaab6bdf",
"assets/assets/gallery/g9.jpg": "d27f4e10136f27213a2d691ba515c1b3",
"assets/assets/images/devi_gif.gif": "52440836a20d80a70483253fde937f56",
"assets/assets/images/front_anaya.jpg": "1f8fbad9cd07b48082837f85cd5b4f35",
"assets/assets/images/front_page.jpg": "3d0d67c381bd34f585023364a5ef6b57",
"assets/assets/images/front_three.jpg": "6340c6a51f22b82764c7ab4358f86ccf",
"assets/assets/images/front_two.jpg": "d9b7fcfd96208c7d8ee0b9abfe129d39",
"assets/assets/images/mandir_final.gif": "3e388fa83721a1766c70581bd33afb7b",
"assets/assets/images/mandir_gif.gif": "dfbed922835158b6d44097c5a1c2203e",
"assets/assets/images/mandir_photo.jpg": "636fd3220d1ca42d97a9d8e65a9ff214",
"assets/assets/images/santu_mata.jpg": "1e34ea1b27fd8387c14d4152837ca601",
"assets/assets/images/santu_mata_animation.gif": "a17ad63a6b7cf5901f9ef45a99fcfbf7",
"assets/assets/images/santu_mata_profile.jpg": "6607808b4b58b53c5a4f426711b6c41e",
"assets/assets/images/second_gif.gif": "139942a52ae9e61e2b10b2bcd069224c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "67c38958200b927dd73204a99dbc7ad5",
"assets/NOTICES": "02a046364be8dd37102cbeecf061677e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "37fbaf88ed6e73934608de98f2b00904",
"/": "37fbaf88ed6e73934608de98f2b00904",
"main.dart.js": "1d754c5c9f96afc51f4780402097c5be",
"manifest.json": "102d6f5d29a72d84b5518214a729c572",
"version.json": "f3401347654816fbb78dd4e4d875e7f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
