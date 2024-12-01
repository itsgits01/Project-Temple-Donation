'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "7dfd24e2384948c1dc304fc46a67c019",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d72f31eb224cf5f88777daf80ce35240",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91546b68b7a98715e730f7089b7bcb4c",
".git/logs/refs/heads/main": "cb71e57878b15f0a1ced852c1c690629",
".git/logs/refs/remotes/origin/main": "2ae5e84bd1c6dfac8c41c37dcad4654a",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/02/3efa8dffc9c7abecd72061bceef313805671ed": "02ce6b8d17d94557cda4f4d325f7c09a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0c/e74af5e2724768377b950ca74edc392c35612c": "2a2567053c3943e714c54bfae14784ff",
".git/objects/13/712125221979c1a400e8de6e4606067a35633a": "b3a292348ede6c04a7093f839758baa7",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/9634af5b35396ab4a5488f6e487b815d2c031f": "63fd8cd931c660861b440958a92c76cd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/fb360e51394faca8d19db6a794ae7bc3f3dc06": "72457ae8b4e1aeab17393e9ef0a14e2b",
".git/objects/22/41ad867827f80965381664c3d900d50f915db5": "52b931ea4c2779d5253ac56dbc8840d1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/aa8588d443d6d2a4c244ebf75715125bf6b4c7": "2a29b8abe87790fc61ed6bd3cdc0afce",
".git/objects/2d/df51c85583ca41fde0ba587ad4672b9cbefd17": "f62404926a5652063272ef5297a46ebc",
".git/objects/32/a832775e48a23125ad971c1805ef225a44f36e": "8a188ac64312cc07b68614a6f638117a",
".git/objects/38/c5b8056daeb4fe7cc4f46fe32cadc82bb1d23e": "fd9e7ad79bc281db2ed8bc6e55c82cfd",
".git/objects/3a/4a14712c06a87c2df41413a8a9c4f8d6681def": "401285c0ab3b0941542cea686976a2df",
".git/objects/44/08791a12709af5014c74eabd8bf25450bf3b0a": "2bb4d6f3645af41ceb1ce348e3fb41e5",
".git/objects/44/f41f87dee3b3a77ced51b37769a3f461497178": "cfbd2f4cfeef24abd2c86cecd00ce2df",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/7432231f50f070cb5c9fa22dd505424f9511e7": "9e1996be15987997b4c57835313f6c2b",
".git/objects/52/9bd0e468113380309e1aa97479949b7faf227e": "8dbe1ca34c7b1ddc6067454a9a29ca68",
".git/objects/57/99baa60b91aa5c66435def26e5f5d2c8aacc5a": "dc37e682e4278fba129b307c70921037",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/5c6c4d418b3c379247c28134f973481292356d": "1f9135f9fd51668bf528632410c02339",
".git/objects/62/e6e1b719d5a791d515f52a161efbeb225b01af": "ede59ce65ecbcdeb69e2f24a3231de77",
".git/objects/63/e2d049e2cc97e11c0733cc6284f36378906ab3": "5373a89b798088564fa06770e90ea565",
".git/objects/6b/554072444649d333a969d82d1ef0074d29dbe2": "3aa4e6f7b95f360d219638ec69379a6e",
".git/objects/6c/e6608fd0cac34fd363dbe0d485879cd6e0872b": "e4f5df65ab7ce2121abf7199b1a67d8d",
".git/objects/6d/ead40a1fe6c3b66e9f58834f3a038ebe961305": "f27aa584017096950a96acda8916a975",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/ab56c33a7c2411c3282fe3703753a444032aa7": "69266ea6fe19cafddccb5609028f3905",
".git/objects/74/950cd7c5ef278993e52c1e879f49372b4b5e90": "8e0c31e1645a81f0249842b9675c1d23",
".git/objects/7f/873585e5058328505d67b24e6c878863cf6034": "798db29bbefe1b7d59c2ebec6f9d0625",
".git/objects/82/497390cae6925bc2c9af85dca34ef9573b9541": "9ee2c843455d8b8a4154609e710bab20",
".git/objects/84/cd88feea7d56f1e4c8f61ae9351aab99284c32": "169e94b4cb82ca1a51b626746943ad27",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/decf33b675f00c24554f61065bc9683ecc4e29": "38fe00f415a97feaa11bd25d120e2ee5",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a3/ae9b9593f2ca09ca2847aadf6c9fbd9db7731b": "bb67238dd8319ccf992b52d9e27b7aa5",
".git/objects/a5/3238fa8d6c16353933d3bfc78734b3ef993cc5": "fc4076f5c03f085ceb6674e2bb43ce8b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/c606596607f43238b1b83a6f0544e703345bc4": "85e13f12a4d6ad9f665dd18d3f2b4cf6",
".git/objects/b1/e79417809c9d67ba63baae9bdd2daaf0dd776c": "1f41cc8a2712def592ce1681a56e02a7",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/4eb392f57e36764c64407db3c5d9526f65a59b": "3a2d4a6e7946c12e95af3892d96b3815",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dff9baeea2a99548137adcaeafbbaf5ac9dc8e": "fdd0074b7abdd6b3e5b4dad73f157709",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/782c93651b0e64e398773bdc7e87f059ec6301": "007ab8c86a75caacd5cef2eee30f7c1b",
".git/objects/c3/77de5e8c2b24bd23b83ce574127162e0c2c99b": "b128c118e1747560743117a69cd6fb11",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/33af834a24191f2db7a66fda8be0392bba11fe": "0e1c57073f93950ba26d3bb3d93332fc",
".git/objects/d0/62eb14128e8f20661cd80e18f8289b0c0fa28a": "ef2ff842b9b593bdb34eeda5333c1e30",
".git/objects/d3/08fece9c8b3dd369db9905df4c7ce3371156c0": "ef60986e9a3ad7b4de66f798d8c4d3da",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/cb43c6e8cb61279653f0bb66454b9989481bf8": "b8d7205e33743e5bdd189bfd721aab45",
".git/objects/da/6d309c6007fd75bb4c655438bb7e1a8cabf77d": "b9f61dd744bd63efb70db67830a90c59",
".git/objects/da/e8750883cb0f566f57fa4065fb3637ed0b5add": "4bca6dfb32ba76343f8415bd82172500",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/677ecbf15a900b193942bff10cc6e317d7d244": "d1d3fc5b92092c112a0c8b1bc7d59471",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/8758d7089d3426c7f21e001a553e9e8cf75548": "a154c2754679e66d1c83af4bef1f8680",
".git/objects/f7/f8d7904dce4092e25be32ba986871ad70e9201": "a35626b9053fca35a918fac02159dae3",
".git/refs/heads/main": "1285899c39a27bc02edbe3a1774f34f9",
".git/refs/remotes/origin/main": "1285899c39a27bc02edbe3a1774f34f9",
"assets/AssetManifest.bin": "8564742be9058202fa60b34034c981aa",
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
"index.html": "eb0b498dec49af5892b82c07f70908b7",
"/": "eb0b498dec49af5892b82c07f70908b7",
"main.dart.js": "323fd3aa47137cef2a428cba205850c8",
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
