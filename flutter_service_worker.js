'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3028bbc3e443afe0dc20bf9849bb2e46",
".git/config": "00595ab2cd1f30eac2de1d7fee789c4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "162694ef8bfdef5b79e943ac8084d311",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0a5fae870f2e88a0bffcabbb5ff6dc04",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8a63ee092541f179ed8d708d2c0fcb0",
".git/logs/refs/heads/main": "e8a63ee092541f179ed8d708d2c0fcb0",
".git/logs/refs/remotes/origin/HEAD": "7c985bf04eb156c71800822ae746efe5",
".git/logs/refs/remotes/origin/main": "6d9a72601610ed7d3bc406eb40902b00",
".git/objects/01/300b7cf99c7209cafcad9e9eb5b97bfaea55ac": "5d6a16bc51da650faa38a516a40ee807",
".git/objects/05/07b38c40a908a5083e214a933db4c473e0a2ea": "db966c7da4f99c2db67afdaaeca93c79",
".git/objects/09/a35f402917d3434ec771be3f877d39957fc632": "bd44d4424a2fb693444a6cc30b4eacfd",
".git/objects/0c/45ba2bd1359b889c7bc313824033034c0544ee": "708d3683f2f651fcd373ed69dbb60f21",
".git/objects/17/52db6723233ca056858c7ba8437430b10171e0": "3d8bf7b55b2e3a5c377ff30f43a48636",
".git/objects/1d/4f6817e1d29b5b4035355258ffe1f311bbda3b": "bfbf0d91bc6db327a1de35923fba1acc",
".git/objects/20/0e42a55c0c6bf26a65287fb4877c2895cd79bf": "0b25dd96062f7b313349b6369bd5ee29",
".git/objects/20/5019c61ac36508220eb71fb60f90613c5d5213": "543b3673353835688686d399fb80753e",
".git/objects/29/9fd7f4dd67ade642fedc722f4b94c704e3c726": "91390e627bb947100213011e4d9d7e84",
".git/objects/2a/f8218de5e28fe82652065671430e68893683ae": "8740bbda704e4306c5dbf868280f7fd9",
".git/objects/2b/a6106359572db1182ff0048b1c195ba37975e2": "23ae81c4e2c50a108d583b57e2a59305",
".git/objects/2b/df3d3d3e174b3a9eca423e80c9060b14ac0b1d": "b9bfae4dbda1421a63bbe44b01b3a1cb",
".git/objects/31/b008d615ec12c9718efa249ff952fac470598d": "dc1f5b2cb2d413ee0106d7102c353f19",
".git/objects/33/35279f0b51f151f86f8c5a4584368dd2b537da": "bf1aee3960d07875f30834379807f01c",
".git/objects/35/25714c37f95efe9fd1159167ef4a076ff1c988": "5cc62719e56f60eea1ff4994cc5c6345",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/9e737049e8322f769c2125f2617e7db8027e6f": "40c5b3de23c674e0ddb5969cfc6556e1",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/58f711a67ab4ca8c6f9d8fe59bcce5581ea38e": "ec09c1bb7b6cecb6c7d0f22838b7ae89",
".git/objects/41/9daa21e3a9e4383ecc76fbfcda0ddb5b154187": "69f2c71394f914aade32332460949c71",
".git/objects/4d/df0abd7f4e45d40958aca69000821076ab9e91": "cd2d55769e2e57da381d182647d20734",
".git/objects/4e/d00ad03538a01360c9fbea70a2846b371be9c4": "b3dc708e34bc76f51096821f82225896",
".git/objects/57/ee2ba5d51b607035397614cabde39fa915c59c": "9d1c7db787e49c486c3031cd0f6005a2",
".git/objects/58/45f1f2a1cc09e78d1d9a7b115a497efbb9cece": "843931fb8ab7fac79aa4fe4bbdef1f5d",
".git/objects/5c/df0c76494a00053ee55d10e4a6953c17ee4f6c": "4520d2113fed9dc3d60ae3eb405d378e",
".git/objects/62/46d2742b44b311d97b9e21430f882c5a9f74af": "605419fcd835f350c00f0e2d3551975d",
".git/objects/65/16969c6ce34f723ddad62fa477b30933621863": "f1087f8da68c4fc4b6bb50ccb3c15e12",
".git/objects/65/c36c4691f2da4b98cd0971eefa18cdb289a434": "e79a45f2838478fe8a49a40313679322",
".git/objects/68/8728ef84e9c438dcd8324f8edd3c87e5087dd3": "da15554714d63a8bd15ba762991e2ef1",
".git/objects/68/d4c26f4caf7720a9f81fb87ceeb8f7550b6eda": "fd33168be3798c782860c1836a81e60c",
".git/objects/69/2a2f6e5498e6d19ce295c48589920b6c2d7e69": "beb6b90b0f58647385b7b964fa856667",
".git/objects/69/98bf884605deeb554a82a4cb066ffcce0053cc": "6b6896de8ee123fcc3823dd8aae42684",
".git/objects/6a/d65157368667dd2e9787d17275f938596743fa": "6c15f664b65bf14ca83d29f2f690288d",
".git/objects/6e/b7ca3882681afb9b7a4f847f3e20434656ebc5": "f711b600f442b3f511e1b9e18d9c2a23",
".git/objects/73/0efb9d949b9a91f61e98321df88fd82463257a": "c3ccc65a3de17cdff5916c715ba40da1",
".git/objects/75/f457e495d15c6b96d02bd983a0c63abc1080b8": "a63cbef9f052920727e53780e14cb6a5",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/078db2485ed574a0bd9c60edd640ba323e717b": "37edad42fa32f86b7c8bacd97b0fe734",
".git/objects/8b/4ab7e20b2d240fcbe43b88a072130692af0e5a": "289297a1221ed65cbfdc8c8be06c6fea",
".git/objects/95/496a5eb82c56f158c6eca4d90eae18a1c16ead": "8bb2720313e478707935593adcf17fcd",
".git/objects/95/7b29709c0fec4b57a8c7c55144009dc547f072": "4b7fbc540f1c8b43f8b34f25cecbe4fa",
".git/objects/99/b4cda7c1b8da5d9f033922f93c7c19ebe73e30": "da50c26af9364206aefb7516381d8d35",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a2/38931fba676c617f897aee6e0c00264a72a91c": "2bb2a89813f3d755be4026b85c900d6f",
".git/objects/a2/fa226365eb0cc47ff429b98371100d765d4086": "d2821659c882b103275f00f596a6aa64",
".git/objects/a3/83608e9b801634e4e1df00cee685726ec7dc72": "b3b1546970a9a07506648d493bbbb26c",
".git/objects/a6/cb5f25008f957f32809016581c37978bc46abc": "1cd5b0d57dcd460b98217a1ca2b8aed6",
".git/objects/ac/54f174c7f333dc6bf9039a7df324c75f56c8d1": "267edcd3ab2cdec3fb96471189d790ec",
".git/objects/af/7b61e06ea8a967c5be0924e9a3f9c99f7e415c": "fee44553e5d65b3e2df126418589a8ec",
".git/objects/b0/52598fc96e49d76c9b3013a96e0898ea0d771f": "4027398d308b5909c727f0ad04c0f3e8",
".git/objects/bb/5568445b31c8b0a3e112c6b2501f6d0557ee39": "88251d93e3ef56fcf4df6cea0ab5aee3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/35931da97e734c6cb21429cb0abd4825802ba1": "35f43ed6b9ee6758aee7fb27def3babd",
".git/objects/bd/35e93168cbe8c50688a64d90fc5368b3546b78": "231eae83fb2b0eb105d59e8f7b09f8a2",
".git/objects/be/ae4e82a25195eceb1c080f1a825ad1baa94531": "cce46cf120932c303a14e2c74fd15aa3",
".git/objects/c2/7ddc7ef3aff4251c183a1f4a488d1a7d095f68": "ac5d5e4644f402f8cb67d6275fb7b5dc",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/3dda6ca5f57ff7852cc9a9e5dc628f95378057": "9bb6e441ac818b133734dc32f70f9ed9",
".git/objects/ca/806177d092935508bed74543087b493862320d": "024575903f8d192e2254ae1a2d4cc7d7",
".git/objects/cc/97d6b1c0934af97d16e770640869e128968b5b": "6552bf878071342ca87f7d42d12919b9",
".git/objects/cf/a439930ae5e273dea9eadfaa7f03681881a748": "f4c0d70abaf248a9879269df0d06bc45",
".git/objects/d1/6ef861134708d577428c6831bef0a9f2a78fa2": "d9e9f9869323ff87c281015cbde92297",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d2/e21c40c7d38496de5abe1e0d56dea64c36b4d5": "3f5eff94b1f158922b03dc1895970b34",
".git/objects/d3/1c7e6dd8f3a59eed78df6df6c8db36ee987136": "eb1cfd6e46555e487f3ed5a9d5174348",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/f7619dfffe51cfbab3de953bc7a1ebe4ba6a74": "6dfae0d4ff798a6f7f002255d593a611",
".git/objects/d8/d110fd3367f988083224c8482ca2ec78649b91": "1ed831a184d80f2091527254f5e04a5d",
".git/objects/d9/1d19cedbabad8ddd0d2d5dde38346fd559c86a": "c2c1acb7c39cf8c2458d476d476abd41",
".git/objects/d9/1f3341e4c4df05cf88b0a1d9752a74e30c935c": "3848ef5595e964630112efa13dd041a1",
".git/objects/dc/01cd69752d1cb9b0d766d9f106c9ac5a5a4f3d": "6026d8855d5e680f4a1fa71f4f3c1474",
".git/objects/dc/9014ace3d0cecb71e3969868b584aaab0d3087": "8e1926f28afb020250686d72254507c0",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/8eab79b834cd71a0337cf7faf2c3f452e167b2": "6fdafe4d7fbfacc81afb523ebda078c9",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e4/c414a13a66aa351fbe37de745fa9c71a658604": "7330e01a6e6bc203a88ea2067327ddb9",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e9/1f8a53586a111cdb41fcb2fee5c551f3833ea0": "02f33b6ca1f948419fb969e3d0b4f545",
".git/objects/ea/129747a7b541bc68a23b863c63036d5f263c92": "e6da1ceebf6fecb38693843d718e02ff",
".git/objects/ea/7d55e002f3a2a4e5c28f2f5f41bf10c2b16db2": "b66c9c384c0c91b8e395a665c6e0c900",
".git/objects/ec/f6c7eb05a18b74b23f871c7763741aad0b71c3": "f781bc19e51622ddbae813db227f7b4e",
".git/objects/f3/02221fdbd03b979ce663dc4b5750f81cf487f6": "236ce2b2d2ba9fb9be8f889390242455",
".git/objects/f3/6a461266b2e4432c83f503bfdc7204cf898d14": "ba25657df7d8d85b93f6719732de482e",
".git/objects/f3/b169166b8ae3fd0d38216f4582321c8ad60453": "4cd29ec235fd4cbac766213cd0a22e1b",
".git/objects/f4/cfce72cd97f7ce16e1b779eaf68edbbb153f15": "268f607536422a53eedc66ef64bd6dac",
".git/objects/f6/596de4c111b51421897034c8fde7f2e4ad9d3f": "52df5cea064ab543a5d1ff2b60c1bf0e",
".git/objects/f8/6ac6251a66dfc37b8faa328dfc7a2464a54097": "882fbcf0ef0ed6c16ab749062a76a915",
".git/objects/fa/20f04b471844e3992dfa9280f799a5b0a5a3b4": "665e8b47fc22bf93494062cba7c0da30",
".git/objects/fa/68465ba9e15da1962db83ecf05cd0c1eb7efb3": "4d850607aef620d2f77472086654544f",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/pack/pack-7c87ac0d9d40e15267afc01349e0c63a8b9919d0.idx": "9373703f88680c44c72900446810971b",
".git/objects/pack/pack-7c87ac0d9d40e15267afc01349e0c63a8b9919d0.pack": "9712654a0ef9c88c8c4b700dabc79cbe",
".git/ORIG_HEAD": "556108736e7893a8c7f772450e3bf304",
".git/packed-refs": "8edadc82074cc82a149c29423cccae2b",
".git/refs/heads/main": "853d683837f5856fc3dde94afff29f7e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "5702c72469b8fae6cb76bb67fecfcb00",
".git/sourcetreeconfig.json": "c80b39e1da50ec4a52ca5a2eebc447cc",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "a38c50a3e46c26f84206586caf91822b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "4d9e09bd6970c0c59b66617daa70969b",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "bee17dcbe27ed6834b599215753da8db",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c346bd40a0db260320cb19157edc6b90",
"/": "c346bd40a0db260320cb19157edc6b90",
"LICENSE": "9529f967a5e63f069b867746efb4c476",
"main.dart.js": "3bf06542c1915f583dd8e6771d9e7ac3",
"manifest.json": "e0666139c93f08ad9bef0367c52637d5",
"README.md": "ed86023d4051cd8d99498070254e1ad7",
"version.json": "b5201afffda8f1430be188838f5359bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
