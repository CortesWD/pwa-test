/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/css/style.min.css","93b5e811c9fdec9ade007f261bb12a70"],["/fonts/glyphicons-halflings-regular.eot","7ad17c6085dee9a33787bac28fb23d46"],["/fonts/glyphicons-halflings-regular.svg","a0f6fe8cea771f29666c3b374be1339a"],["/fonts/glyphicons-halflings-regular.ttf","e49d52e74b7689a0727def99da31f3eb"],["/fonts/glyphicons-halflings-regular.woff","68ed1dac06bf0409c18ae7bc62889170"],["/images/icons/icon-128x128.png","bbced04bb5970fdafd411d67bae85402"],["/images/icons/icon-144x144.png","c77b9d1f6b6cd8f52184af4c9536d7f9"],["/images/icons/icon-152x152.png","c6395866204b4e855d46d6072c895492"],["/images/icons/icon-192x192.png","871471c20001af2ca0ef85153605ed11"],["/images/icons/icon-256x256.png","bab04399d4840b93cf96d9ab55f3c3d0"],["/images/logo.png","140d5327e6bc7c704f244260b9dffe7a"],["/images/pokemons/abra.jpg","72046e0a1cdc78ab9177da347c449799"],["/images/pokemons/aerodactyl.jpg","9587a8ec98f6cd0ade73db85aad3d8ae"],["/images/pokemons/alakazam.jpg","4502e51bc93a5bffce94a928b2228522"],["/images/pokemons/arbok.jpg","c8f1ec6b6cef6152d4e9f1dd6d2a2517"],["/images/pokemons/arcanine.jpg","70e9114ca70ec128fe78b76616d95bad"],["/images/pokemons/articuno.jpg","bdde2af0c18396d381c35ebb944a026f"],["/images/pokemons/beedrill.jpg","7ca4f1439061d941cdc7b5950294232c"],["/images/pokemons/bellsprout.jpg","6b8072a9d2da9ae98d7adbc1c8ce88c2"],["/images/pokemons/blastoise.jpg","8c129889647af5a4ddc83f5d046f7227"],["/images/pokemons/bulbasaur.jpg","56104bc67c654fec019ac715ea15f261"],["/images/pokemons/butterfree.jpg","5524a40bc7b77898df9fe17a2657130d"],["/images/pokemons/caterpie.jpg","829fe95153ff98d38ee003df4eb6ccfe"],["/images/pokemons/chansey.jpg","2832ed5113ca6860c30c1b2c840d472e"],["/images/pokemons/charizard.jpg","de5375f8854da7ab1caea06475b80856"],["/images/pokemons/charmander.jpg","628ef511e6903dde768a0196f0d73818"],["/images/pokemons/charmeleon.jpg","5eed68b8576de456a71798e88356586a"],["/images/pokemons/clefable.jpg","a25096a08878e2785b9cfacf06af3cfa"],["/images/pokemons/clefairy.jpg","e5d93a0aa9e358faf6fe747bd122b9e5"],["/images/pokemons/cloyster.jpg","f63e36a045e1f1f25f458a5e6504ee5d"],["/images/pokemons/cubone.jpg","5a60787882a73784a56b3cf30db033a2"],["/images/pokemons/dewgong.jpg","8d7118bf6b20a1aa489bf120b592a895"],["/images/pokemons/diglett.jpg","b558c6ac36af2e1f7701288217258a5f"],["/images/pokemons/ditto.jpg","5ca39676897506525b56db38d33f5fc3"],["/images/pokemons/dodrio.jpg","ba4634ded38ab393296cd6fc368a2526"],["/images/pokemons/doduo.jpg","28f8ab49a17896c7b50c8c10db9268c0"],["/images/pokemons/dragonair.jpg","f625fec6145909ae815b7f236226d11e"],["/images/pokemons/dragonite.jpg","4a0438c3b29d909aeca15c7580934bc7"],["/images/pokemons/dratini.jpg","21f9dfae68052b609a0453f5b012e551"],["/images/pokemons/drowzee.jpg","ba9fa470987c255a4fb167fee6f7ce57"],["/images/pokemons/dugtrio.jpg","7cdab5343860219274b6793a8c43316a"],["/images/pokemons/eevee.jpg","2501fec16f3008082cbc8dd5029ef214"],["/images/pokemons/ekans.jpg","ea1202b1d48f59c2231eca96a8997bb2"],["/images/pokemons/electabuzz.jpg","27abac20350f18592deada565d2cef68"],["/images/pokemons/electrode.jpg","4ca9ad357dbdb3d1e204ea8de2d5936c"],["/images/pokemons/exeggcute.jpg","834a448e0293d06ec001624cf0a29254"],["/images/pokemons/exeggutor.jpg","7dd4b45f0247d3a160fb20e84a9f9b9b"],["/images/pokemons/farfetchd.jpg","10f24d7e79b673d1abbcad955e5503f6"],["/images/pokemons/fearow.jpg","16f467f4aa6bc41ffe63c955b084f3d3"],["/images/pokemons/flareon.jpg","e3c2aa9fd06443732306bb7c7cffa803"],["/images/pokemons/gastly.jpg","a3200fb64ab0932a7f82303a121f7bb8"],["/images/pokemons/gengar.jpg","4bdecf178f684db5d18e9df131986b80"],["/images/pokemons/geodude.jpg","2eda141c4fd9190d482fe5adf8c47481"],["/images/pokemons/gloom.jpg","50d4f4b5727208ee7f251f50eed68e32"],["/images/pokemons/golbat.jpg","8ac0a2df3530f49183fd5e7fd8875e09"],["/images/pokemons/goldeen.jpg","b54cd886135f74d4230640d4060626de"],["/images/pokemons/golduck.jpg","6e2000decf05b81b020735e514257b04"],["/images/pokemons/golem.jpg","1406fab81f99e2bbed91fbaa5a478cf9"],["/images/pokemons/graveler.jpg","ac5292e2495b6fc8629f8eb1044039d7"],["/images/pokemons/grimer.jpg","632c65b7bea079318a3dadc8ab1326dd"],["/images/pokemons/growlithe.jpg","77530eeb0056acd2ef50df2917f287e9"],["/images/pokemons/gyarados.jpg","7e4ff9d92c59970fb8464e842faeab9a"],["/images/pokemons/haunter.jpg","4e83d586e156cb6ffa20996dfa1e7ee6"],["/images/pokemons/hitmonchan.jpg","c33e9d16199ba53b79bb327bf0a042d7"],["/images/pokemons/hitmonlee.jpg","d773a9a8c2336d94a34c5137893cf4f7"],["/images/pokemons/horsea.jpg","9bf3554f7eba47ba09f0b6415401e2cd"],["/images/pokemons/hypno.jpg","7be478c0863499ce4506ae1b1d446d5c"],["/images/pokemons/ivysaur.jpg","8e05aa51c1c99e8a66645303276f5c42"],["/images/pokemons/jigglypuff.jpg","a3c5cc27980bfe6480a9fd21f784ffab"],["/images/pokemons/jolteon.jpg","769613c2bbc21ebb0fcb707d434c126d"],["/images/pokemons/jynx.jpg","ad8cab0c055495be57e2f17d2245ffc7"],["/images/pokemons/kabuto.jpg","9c7150b3aec8c9b4e5f369fe536a3b19"],["/images/pokemons/kabutops.jpg","2c036ba353760d89eb235878d52e6aaf"],["/images/pokemons/kadabra.jpg","cb8f342916eb665054759402e567b3d7"],["/images/pokemons/kakuna.jpg","c976ca2b82c4fbafcaca90099f426f1f"],["/images/pokemons/kangaskhan.jpg","f2ed4fa582785332271006c01b4b70a7"],["/images/pokemons/kingler.jpg","663e6f78a3af8178c7de3aafe55c42a5"],["/images/pokemons/koffing.jpg","540cc89da89f465cfa05cf02998d061a"],["/images/pokemons/krabby.jpg","a630f1a0fb3b1c4ba0957c3c8c832491"],["/images/pokemons/lapras.jpg","476569d0fa0f966f9c886c687ccb46ab"],["/images/pokemons/lickitung.jpg","a8d0d38d5bebd889030f1c218890e1a6"],["/images/pokemons/machamp.jpg","215f35d8f43da191d03490ce079d3e6c"],["/images/pokemons/machoke.jpg","e8e88c0e605320dc680aa6492bc77174"],["/images/pokemons/machop.jpg","0f36fc77b5ebfefc3245289f914775cd"],["/images/pokemons/magikarp.jpg","068dec16ae29821a8d57441f6c9be01e"],["/images/pokemons/magmar.jpg","8f0a322b09e55b31d904ed873d10f0a6"],["/images/pokemons/magnemite.jpg","3caca4dd26ae9f21f8df9de7709e9dbc"],["/images/pokemons/magneton.jpg","60342a95f89d5d61dc68d5d489fa4078"],["/images/pokemons/mankey.jpg","d1f40cd14c31844f172d498adfacb9a9"],["/images/pokemons/marowak.jpg","c832d861be05b93f3a89aa145191177b"],["/images/pokemons/meowth.jpg","02f8f01ebb9d8a043bb61165cda39c44"],["/images/pokemons/metapod.jpg","367584076c17c00399dd88669c894987"],["/images/pokemons/mew.jpg","e7b24285a2b1475cd21d548c995d39a7"],["/images/pokemons/mewtwo.jpg","b982a3950ee61217933f7a6857074116"],["/images/pokemons/moltres.jpg","a09554e358f8b36693790af3c1318ffc"],["/images/pokemons/mrmime.jpg","8bbf7ba48a0df0ccb3391bc31fe61e18"],["/images/pokemons/muk.jpg","b900bad31fd16815c4dd6f4b115b6774"],["/images/pokemons/nidoking.jpg","d88748a6b98888e9baf33e82996585f3"],["/images/pokemons/nidoqueen.jpg","f81f340513fed25be271a46969cb7d93"],["/images/pokemons/nidoranf.jpg","e1b0a14e0ae0dd5d5d843e1dbca68a8f"],["/images/pokemons/nidoranm.jpg","087f12c3302e2092a81b4e0612e0df4a"],["/images/pokemons/nidorina.jpg","8ae0b59290e37f05fe60ca11a86a00b6"],["/images/pokemons/nidorino.jpg","a3e56ef3d6b473f4df49144b75d6cca8"],["/images/pokemons/ninetales.jpg","08f9b3a74f214aa13c8d3c7cf74232df"],["/images/pokemons/oddish.jpg","fd7a72c4734b59128bbace65204cdb59"],["/images/pokemons/omanyte.jpg","6ffcacf4d6074ccaa77340b4e3dbc044"],["/images/pokemons/omastar.jpg","04420730779d6d89eecb921434ca227b"],["/images/pokemons/onix.jpg","aaae3f1cb23a72ac4bdc8c12e3550363"],["/images/pokemons/paras.jpg","ffd7e776bd44b9bba8626020f1c9c548"],["/images/pokemons/parasect.jpg","b52531923d888795abba786bbc854789"],["/images/pokemons/persian.jpg","72a3993fbe6f7fc3cbe6051cf58625d1"],["/images/pokemons/pidgeot.jpg","00b34cd48ede103180faefe7812aca55"],["/images/pokemons/pidgeotto.jpg","262859cb824d0315e0c252aa54f8e01d"],["/images/pokemons/pidgey.jpg","17d43db71ce2c6e4e989b07ccd166e20"],["/images/pokemons/pikachu.jpg","02bcc7cdbe30cefffe512dbd16c30303"],["/images/pokemons/pinsir.jpg","470f640dc949e8f8d13d0d054386345a"],["/images/pokemons/poliwag.jpg","8aaccb5bfa2bb107d36a308f94385a4b"],["/images/pokemons/poliwhirl.jpg","b81d7da18d9bf29f77fce8505bce69d4"],["/images/pokemons/poliwrath.jpg","a03201503d6e14496c981ef5cb9bea50"],["/images/pokemons/ponyta.jpg","18edad54974ad2bdcacecb0ba6222f34"],["/images/pokemons/porygon.jpg","de5fc2465404094cbd8783f46df3dd84"],["/images/pokemons/primeape.jpg","87a96e6a974f80e89be9a433eee2cc3f"],["/images/pokemons/psyduck.jpg","5bff136e99d8ce1501ce8355ea8d8797"],["/images/pokemons/raichu.jpg","3bf89865ff08f6f234ca1996b91a17bd"],["/images/pokemons/rapidash.jpg","163c615039abb95ee37f6b7ff7140a3d"],["/images/pokemons/raticate.jpg","d3ffb1f31f4f7a7d3252d48179c99603"],["/images/pokemons/rattata.jpg","32001b400274fc41226a745acf067bfd"],["/images/pokemons/rhydon.jpg","594852dd51005d0006ba1f65ede46d48"],["/images/pokemons/rhyhorn.jpg","d11548eba27dbab54a42ec25aab4659b"],["/images/pokemons/sandshrew.jpg","53e44a17e940140383af8dccbea04dd8"],["/images/pokemons/sandslash.jpg","fa3ab13442e912dbf6981b4d1705a99f"],["/images/pokemons/scyther.jpg","37ef4f9b011197babaa8b43fe1014d00"],["/images/pokemons/seadra.jpg","5b92e6f0a1113a7f1a3ce4eeacfabe8e"],["/images/pokemons/seaking.jpg","6658ca48a8dedf7b937df75a1cf0f7d4"],["/images/pokemons/seel.jpg","a751a52dc2db97e0f45ed1f0d22b4365"],["/images/pokemons/shellder.jpg","d13ccfa8340025ae290754d344130fd9"],["/images/pokemons/slowbro.jpg","1488a8d290ed0bc1c7bd4e0e2e4363cb"],["/images/pokemons/slowpoke.jpg","344e228de3c264d1841eb84989f9a0f5"],["/images/pokemons/snorlax.jpg","e132448bc5a2d8fe660f191f9660ddc5"],["/images/pokemons/spearow.jpg","66ffa5bbdab5cf737de85a83d62fcce8"],["/images/pokemons/squirtle.jpg","23b0ae971a12ebc700c4b363bfdd3de9"],["/images/pokemons/starmie.jpg","8db839eef34c8e5faa28047e891c02a7"],["/images/pokemons/staryu.jpg","7f444417f2fca22c7740d2ca1b4614fa"],["/images/pokemons/tangela.jpg","dd9d265cc35382002941446847878347"],["/images/pokemons/tauros.jpg","eba2ab7d39ebdc2850ca03e37d25253b"],["/images/pokemons/tentacool.jpg","d8045aefa271595981d1fc9ea04477e4"],["/images/pokemons/tentacruel.jpg","bd70083c831353de8dca19ddf45caba9"],["/images/pokemons/vaporeon.jpg","c158cd024aa73cea5523e1441d88bf77"],["/images/pokemons/venomoth.jpg","7335d01219c9883c23dc426eb4a06a1d"],["/images/pokemons/venonat.jpg","ddcfcc281e0e74c21b4133cd4538ab89"],["/images/pokemons/venusaur.jpg","8036a71d247822297522e405b886c8fc"],["/images/pokemons/victreebel.jpg","2838a4809850adff8371946a393b5d9f"],["/images/pokemons/vileplume.jpg","1b5633533a564f7c0d63b66e7810fbc0"],["/images/pokemons/voltorb.jpg","c69fbfbc14054bd8d3c670c0bfe6bd4e"],["/images/pokemons/vulpix.jpg","dfb892f3de091d1935b7689905d49667"],["/images/pokemons/wartortle.jpg","76415ec334833bfb386a608b880b2956"],["/images/pokemons/weedle.jpg","a9642902d2b818618c1ad0c6605cd50e"],["/images/pokemons/weepinbell.jpg","534773f52bbb9fdab1bb491f0bcf1d61"],["/images/pokemons/weezing.jpg","ab18a97d7b684f90406070be3163f509"],["/images/pokemons/wigglytuff.jpg","2cdbf652cf754a8994f4e4c5f367b8d9"],["/images/pokemons/zapdos.jpg","5f35c400beae93e26e309bbcdbad4afa"],["/images/pokemons/zubat.jpg","50d43a019bfc6e0773274af7059e413e"],["/index.html","dcf1a2347c3203822ce871dc728b600e"],["/js/app.js","96f2f456312ef98a04b46b57a4191d40"],["/js/controllers.js","1faa286d5c6269c9418f35d8a9a2e6d6"],["/js/directives.js","aa834cc586a20d2f33f1c692efb64492"],["/js/filters.js","e6ba9f305671b2b1f7b4b7ba18cba28c"],["/js/libs.min.js","4ceed5200184233ca711df45b63947e3"],["/js/libs/angular-route.min.js","5e6c18650e89b9cbb56503e3d77a3f14"],["/js/libs/angular.min.js","d66eef9868ee8eeb7d4c7914ed62a240"],["/js/libs/underscore-min.js","50fd5c8d7995f5d5c5c477657f4e8e9b"],["/js/main-apedal.js","ac6742b0b62ca8c8cb2690e793915f24"],["/js/main.js","dfb97fa159aaedb4c881432d76a70b2b"],["/js/services.js","f045f5a9dfb082b25f7f2811f8d42291"],["/js/sw/sw-toolbox.js","b89d2e3cea91431916a73bdb8e5020ad"],["/offline.html","65e2aa392e44514da6f16a30e786bd3f"],["/partials/pokemon-comments.html","d72a8db1b209b66acd90a1fd57559b04"],["/partials/pokemon-data.html","fa581172ec55fc67cac6cc42901704e4"],["/partials/pokemon-evolution.html","bcfd4c0cc1d0869a55fef9327b593778"],["/partials/pokemon-image.html","16054f3764f89b5b0bdd3900bc231408"],["/partials/pokemon-name.html","fd3eaf9df37e9af97d6caf78693fd569"],["/partials/pokemon-stats.html","7427476808a32d96735d18f9d98dd3a6"],["/partials/pokemon-type.html","1e285651cd354fab3d2553d933d4a352"],["/sw-apedal.js","9786a34b96e8af7baebcc63b727b20bf"],["/sw.js","d2f58f455b0e0c2f8bb246cba3346f8f"],["/views/error.html","5d3b0365398e4de3450f30de0784a718"],["/views/pokedex.html","8624a537c9b077e0e42137f58d3a263e"],["/views/pokemon.html","302f4355d323003c46e1d28ae068f1dd"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







