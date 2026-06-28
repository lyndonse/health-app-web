'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5bddaac9ce708b359178afc0d9364a36",
".git/config": "e0fd19da3a88a3accc8b6b86f0d9055f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "e0b5b08e209fa15f48d796e8976bc42b",
".git/hooks/fsmonitor-watchman.sample": "5c90c1740b0cacecb469934e16fe8cb6",
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
".git/index": "78f3bdce402c74d5c97ed2a1a6c56ef7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05e7a8b46e556daf287aae253d7d5232",
".git/logs/refs/heads/main": "36ec9a601661fbd88664d6068de00a56",
".git/logs/refs/remotes/origin/main": "144b455ad6a8c17c14dca25cb3a8217a",
".git/objects/01/7cec5b65461fa0e0cf5b71636ecb2fc34a44a9": "2629caba6d491ad82f3f956102b9be0b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5a7cb53f3b5dc4793a1cf92a1792caddc7b05": "333adafcf820be0c7cf2b3e5213f4915",
".git/objects/07/6681166975b711ecaff5b6021b030c9bc45f4c": "79e333ef4603d510b7a3365899ba3b53",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/74873f6503ce9d4b14f3d43449468b8ddbfa2f": "a67400c5d00dafc2eb2de59676c18a6d",
".git/objects/14/459768302ab1e4dbe1be9e0f4653d295b9a8f8": "6098de9815f8624f730e40830d91b89d",
".git/objects/15/bf0bd33a34d5c602d955958b9a526d58c7d469": "6b6e27e63f06f9d9667fc1c7871a7d31",
".git/objects/1b/2862a73029ef4cd53c9e2afc91796145e3ad20": "8329a8aff9774c24da0342d6b44e6108",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/4024a8aeea1ab9ffd92347210c1b3354c8a1b2": "d5204396be297b7025b8eee44553428a",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2c/3431d99ba62f46138d47484a65be3df2c5ff8c": "c979d22cb3fc0e8cdf6fba56574a8acd",
".git/objects/2f/be3ea3ccddc82b7cd1c346cbe6dedd24e7a3b0": "df21190164679c59245487b45124afc6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/14aa0e77758801f89c6feb6bd88ad3cfa0c5a5": "07c53b19abf44f1723c8b6428e3b3a61",
".git/objects/4d/fef7b07572c467faba6ff867331c502c005398": "c2700f597a30d767c6caaac6a191f2f0",
".git/objects/50/bc83c1d5047c0eb3fce6b7b9e99f6ac69fe2c1": "0ddd14257fbdb0c172b9566e0ef730bc",
".git/objects/53/6dd8cedf10db3e6022e922fb58fbfa243f3d33": "de71c56d3d4d914ee1f3ccec70788987",
".git/objects/5c/cee3f4895ce5fc8be8753ec32440cd1b5964b2": "d2d29cd78ac28293bde744f015dd5c59",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/31adf9e37833f6e71e0ae4a5655598d16a6243": "d7e8ba4d2b80a73bd9cc8fdba7bf1597",
".git/objects/70/b7badaa0525a4b299633f03c56d825b3a740eb": "81d8f24f3e917f41a9d07faef467c0c8",
".git/objects/74/737b3f1402ed90795df471bf78df1dced9f85f": "e4206ebf946bda6df1483b25ff68e462",
".git/objects/7a/5b2522b318e8ee3f5dae7214441dd42db42a7e": "5688dd26e80d661d97b6f2206e887a47",
".git/objects/81/12319f2e293d70d6aa1eeef2f6aaa60b633af1": "1bca555fcf765ce0af570c46d87bbdc4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/ad1921b7abb1bc36b4ed0b471e9048d9ac83b6": "4914548aa877f6d23af5b18e011a4a65",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/5cb3d311332366c5f9af666b4f5f80837eb2b2": "44c4f7869c42430ee06f12528a438b38",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/86eab1b0222da73aa184b6a55c6b2d7ac497d9": "e1a1efe5254da23c6c8ba2b360ea3791",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/6be1f41b38e505ff06732188b76a4df06984d3": "9536935c3ea721f9a01d85f26fd30463",
".git/objects/9b/e7391cbafaa7596199793a5dc0557b6bf1664c": "60d6c4be93794e63560781d5990f14fa",
".git/objects/9d/34ef29d08ed80122fc144314a6cc387a9864d5": "6c481b9b6430fba2a196b95879943ee5",
".git/objects/a6/a4c913ea8fb6c5b0a0552c17660d735fc73659": "b93fd8d48d80b731a368faf69a666dd1",
".git/objects/af/4afc42096bc07b11a5cad5705d198bd5d16d30": "329d8180fba79c9ff1bf8db97cf6aff8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/a09963b72040765ce89f24b91f980dd449b4dc": "ac18581ad418983899ac80c457deebdc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/fda64ca2554e10744c097e885a07026ed613b0": "39487a3f0f308977ebb8336597499399",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/d3a0a3df5e05d772abb9d00305e69ed78f48bf": "7e504e97ba721e79b25c367637e40217",
".git/objects/bb/b15da4f78d78d648b968cf9378aa09d47efd68": "959fced4a0501d4672170d983248bf87",
".git/objects/be/3e92aa960cc680cb108039146e6f77e88acae3": "bed3eaf22bb776f63b3ec176284bdc3e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/5f78484573242eec940400ac9934423c82e6cb": "69663faa4bcd35dc02d9e4d8d4a7b717",
".git/objects/d3/24feef6774718f72b19847db44ef6e868fa1c5": "4fbb46aa56cdde9a3733cf60b91b3528",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8793a97c60215267e9d651cda65dff17f71424": "fab937aa8ecb86bde90ea4480ae581a2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e9/0a54bb1ce0242ae1f2f521421dd5a509449fb3": "b2f131ba8ce0d82df937a90110384930",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/276bd9edfeaaeae164913deb5bc75cd96b407d": "2e29aa0d61e88e6d3bba2c2f7ee05c11",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/5214c844a21c079cfd5de2b6eef55de7a36eaa": "4b297731507de9db5b5d13ad26d02dce",
".git/refs/heads/main": "c4a945c4e353acd81e2e2f9692e29c81",
".git/refs/remotes/origin/main": "c4a945c4e353acd81e2e2f9692e29c81",
"404.html": "6b2be781400e68798922e18a26b687cd",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "69d9b28a9de125490d199421de5fc3ef",
"assets/NOTICES": "d357a3c892b44c445b2251db1b650b6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a3cf383f16da17c0f226e1f5875bbb02",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b2be781400e68798922e18a26b687cd",
"/": "6b2be781400e68798922e18a26b687cd",
"main.dart.js": "ad474ded54aa297cb7abb03b4f3a7721",
"manifest.json": "a57ef4ed57c5ff2479abc42209362ba2",
"version.json": "4a4b6f0307c03be96749302da25c27b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
