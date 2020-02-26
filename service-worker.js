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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about/index 2.html","af4bd9df50ddde66268b845b5c607482"],["about/index.html","af4bd9df50ddde66268b845b5c607482"],["archives/2019/03/index 2.html","2683b4747db827332288eb46a5cdf681"],["archives/2019/03/index.html","edaa1386ab8ba1ce15035db26517cfbc"],["archives/2019/08/index 2.html","cfdb3ef70fe49692a930d10490f75447"],["archives/2019/08/index.html","23c1f5f904daec831fa6366939a4d409"],["archives/2019/09/index 2.html","f4e4378d8d1b6c0cddd7bea611ebf374"],["archives/2019/09/index.html","388e59dca5648e751f1f3d7e68462a64"],["archives/2019/index 2.html","437ce5f11b20f9274931f62276c26f09"],["archives/2019/index.html","82fe5f5c50d3c57485ec342bdc4721c6"],["archives/2020/02/index 2.html","c004e1324113eda2a0bd35ecac735e57"],["archives/2020/02/index.html","8628478323446b73051761c678eeed76"],["archives/2020/index 2.html","eca94e51c47a30dbae725efc2fbf1946"],["archives/2020/index.html","60986244d3e1b16994090b72cb000bc0"],["archives/index.html","a61f8a0283759835bff9ec31b92c25d6"],["assets/algolia/algoliasearch 2.js","61caddb3e91165f4a39231b58959ea65"],["assets/algolia/algoliasearch.js","61caddb3e91165f4a39231b58959ea65"],["assets/algolia/algoliasearch.min 2.js","d9ef9ebf6b31419239cff8047b30e15e"],["assets/algolia/algoliasearch.min.js","d9ef9ebf6b31419239cff8047b30e15e"],["assets/algolia/algoliasearchLite 2.js","0fea8fbf28c472c562fcaed32fbe94e7"],["assets/algolia/algoliasearchLite.js","0fea8fbf28c472c562fcaed32fbe94e7"],["assets/algolia/algoliasearchLite.min 2.js","26355d018bb30d571119f4722036c0b6"],["assets/algolia/algoliasearchLite.min.js","26355d018bb30d571119f4722036c0b6"],["categories/Python3-Django/index 2.html","727783f847fe992c9a147708beeb584e"],["categories/Python3-Django/index.html","4d1f1a1d056702161caf8817e4bf6533"],["categories/index.html","50ee0d30cf6f701bfae831a69ed50157"],["categories/编程语言/index 2.html","8ce928aa35493c16b5d5b8aff59f7e41"],["categories/编程语言/index.html","f8cf293e441dc2abcb69ce08964628b7"],["css/index.css","8b41b84e630787ce1f4f71936b555e2b"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index 2.html","e23dcc58de2cc5a2fb7db2b753a8d21e"],["gallery/index.html","dd35defeecc4f845b5aab622b0ca5a8f"],["img/404 2.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/algolia 2.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar 2.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg 2.png","04208f25e34b8f29f072efbb2e212c86"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/favicon-16x16-next 2.png","d09b99233202f0f9052d1ba734c835fe"],["img/favicon-16x16-next.png","d09b99233202f0f9052d1ba734c835fe"],["img/favicon-32x32-next 2.png","99772059b5095b79d132abb775e0fa6b"],["img/favicon-32x32-next.png","99772059b5095b79d132abb775e0fa6b"],["img/friend_404 2.gif","68af0be9d22722e74665ef44dd532ba8"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["index.html","2ed88b1a80f71d28ff47bb6772a8f3e7"],["js/activate-power-mode 2.js","2345780cb71f6e17a20d9ca2283accda"],["js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/baidupush 2.js","7d26211fa55bebac2e0c0abeee05a267"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main 2.js","271a385637d800281b43cde7c1b34fbd"],["js/main.js","271a385637d800281b43cde7c1b34fbd"],["js/nightshift 2.js","dd8c911cdf57df1c85186feceffdcda0"],["js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["js/runtimeshow 2.js","6bc5dc7652b39605152475b840e88899"],["js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["js/search/algolia 2.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["js/search/local-search 2.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["js/third-party/anime.min 2.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest 2.js","876c47c6a2edc066781c264adf33aec2"],["js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["js/third-party/canvas-ribbon 2.js","6ca731e8db63562c0dd6461eabbd65d7"],["js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["js/third-party/fireworks 2.js","080fdfcacffc6828826484645140af50"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min 2.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min 2.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao 2.js","d7a4ef27420717adccfca1c1287f8c44"],["js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["js/tw_cn 2.js","fbc127c110435085bde10997850bbc55"],["js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["js/utils 2.js","816e7d34d69996e6a4f0b92a81c16cca"],["js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["live2dw/assets/moc/miku.2048/texture_00 2.png","f69191e3aa1aa64d66bef43d38bb45e8"],["live2dw/assets/moc/miku.2048/texture_00.png","f69191e3aa1aa64d66bef43d38bb45e8"],["live2dw/lib/L2Dwidget.0.min 2.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min 2.js","094cbace49a39548bed64abff5988b05"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["photos/default-skin/default-skin 2.png","e3f799c6dec9af194c86decdf7392405"],["photos/default-skin/default-skin.css","0c85d224b5ac12b4898cfe434f9752ce"],["photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["photos/index.html","1f6973b244b9d5891daf0f32fc4ae91e"],["photos/ins.css","016b69dbd669b467646855580bbd1384"],["photos/ins.js","dfe164565a26516cf02ad5145ad29b4b"],["photos/photoswipe.css","2a577ba7f3a53056a7b77ca6788d8225"],["post/1770f1b2 2.html","c00f42606c354f35b71bdb2708fd6d6b"],["post/1770f1b2.html","c26c0bbc4abe6a5b22c92ad7ba0f774d"],["post/254ad4f7 2.html","70bebe51e86ca3ffb99a559468bb314a"],["post/254ad4f7.html","6d4f73c0c2e76b25ee9002ac9bf6edff"],["post/3c51e5b6 2.html","f69aef753a6784a452be0b4705058fd8"],["post/3c51e5b6.html","192f3344eb6c3e2814fb7df0c05d0b44"],["post/4d280a8b 2.html","29b7ff371a91e5c212c3a1e8a5cd926a"],["post/4d280a8b.html","4112f86bbf7ba48f057819836abad16b"],["post/6cd3ce39 2.html","87bf2f76d4267c9b150894bf6b8a6528"],["post/6cd3ce39.html","c1e641fdc6ca66fb085425b2018bc8c3"],["post/b55ce8c8 2.html","df069670a10b0bdcc72024e2c71fe5de"],["post/b55ce8c8.html","0d8d129b20aecd676da66a8440e9e004"],["post/eb6ee242 2.html","f22a17f56decf45a9da7439c6a9ed38f"],["post/eb6ee242.html","c398198f281db3605a0f17954f3c0bef"],["post/eeec02ce 2.html","00feeed117cedd7c1addd6c1faa18e4b"],["post/eeec02ce.html","00feeed117cedd7c1addd6c1faa18e4b"],["robot/index 2.html","fecb3532b198ce5a7bd92341a3ec2f77"],["robot/index.html","fecb3532b198ce5a7bd92341a3ec2f77"],["tags/Django/index 2.html","6987e8d2de4ab247df923f9b9200d4f7"],["tags/Django/index.html","a91529a1b2765dc0abd645b233e754e7"],["tags/Hexo/index 2.html","1b55263494e14c5bb59ab8c99f6d68b5"],["tags/Hexo/index.html","5dd2116fce80a64607d2355a622ffea1"],["tags/Java/index 2.html","9ec3df1670359f3525a09d083931fbff"],["tags/Java/index.html","7a303563f0f7c6d0bba9c36ee3b5b25d"],["tags/NexT/index 2.html","04ae8c0a7240fb29ea17d057b22dfcb6"],["tags/NexT/index.html","9d9f3af9318506dc319d87735eb82806"],["tags/index.html","6af15a090eb4ab4732417a4bd6f319d3"],["tags/历史人物/index 2.html","9ed3ed7aefbc0a78a1412a1c32ac6cfc"],["tags/历史人物/index.html","c1f0c93189159f5796c2255e6d7309e4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
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







