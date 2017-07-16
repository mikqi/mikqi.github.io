importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.99f60c2833bbba258886.js",
    "revision": "2db5ab8ce4334f9f9340fefd28de660d"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.57a61bf8ebb383114255.js",
    "revision": "b132b79bfdddc769c6daac40a447dec3"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.862ac4fabe1af957ab9a.js",
    "revision": "e6ad5feb6b4101d381243e871136abf3"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "5a9fce145230e4b12d4827e88eb8fde3"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.5372245b6d1fe65fafa1.js",
    "revision": "67936bf04b15d9b5451ac948d7c724f0"
  },
  {
    "url": "/_nuxt/manifest.f0911af8.json",
    "revision": "0c850037cbbfebea6150941d13acfdee"
  },
  {
    "url": "/_nuxt/nuxt.bundle.d9c4bd6cc14ac6ee51f1.js",
    "revision": "28ef572f63cf179659e2e51bacfef1cf"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "99768b271b9c40d79268f45faed8540e"
  },
  {
    "url": "/_nuxt/vendor.bundle.e47da8286013b7bb67aa.js",
    "revision": "06dd4c7d5381c5ca629d62cda049b20b"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-personal-site_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
