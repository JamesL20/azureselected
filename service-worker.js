/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "10b4bf3c5a44a7f181137370c75c2681"
  },
  {
    "url": "assets/css/0.styles.8970f8ee.css",
    "revision": "3598d3815a9dc63cd89273845abe06da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.11a4dd44.js",
    "revision": "60011225569f0665346e7f67e8c7b1af"
  },
  {
    "url": "assets/js/11.6250b594.js",
    "revision": "899014d74df2c763764c2033b6ef6db0"
  },
  {
    "url": "assets/js/12.a59fa861.js",
    "revision": "4d4d88b3678740e129fc5728f19dd6ef"
  },
  {
    "url": "assets/js/13.3df98e0e.js",
    "revision": "7279e5cebea7a7fccc182a7835926343"
  },
  {
    "url": "assets/js/14.679d8610.js",
    "revision": "783ffc3bae66073b83d0b50b899fe54b"
  },
  {
    "url": "assets/js/15.876a6513.js",
    "revision": "cd9281e2244834c36456fe99a2dad63c"
  },
  {
    "url": "assets/js/16.42cc5090.js",
    "revision": "2f32a40472193b030ed14209be721781"
  },
  {
    "url": "assets/js/17.46b98b5b.js",
    "revision": "cf269c4889b76b2931355794a915d055"
  },
  {
    "url": "assets/js/18.653e8c6f.js",
    "revision": "4fa74fa5d90d01d90b180772a82904da"
  },
  {
    "url": "assets/js/19.362e961a.js",
    "revision": "0ce12f1659d901b69c12cef59223996a"
  },
  {
    "url": "assets/js/2.024090f7.js",
    "revision": "ed926cadc31732b620577d49a5699f36"
  },
  {
    "url": "assets/js/20.3be5b2fa.js",
    "revision": "15d322d0b772ce0f4323b20efdb9f34e"
  },
  {
    "url": "assets/js/21.79c6c769.js",
    "revision": "50a3d4c993e04155950a0d3ba307cf7a"
  },
  {
    "url": "assets/js/22.1af229b8.js",
    "revision": "0256bbc86618b944ec4c4144c2becb6e"
  },
  {
    "url": "assets/js/23.0cb4b888.js",
    "revision": "91b2d0a4376994b5c9c437ab1be845f5"
  },
  {
    "url": "assets/js/24.49bf6a32.js",
    "revision": "89526a6baeeed18b9fa91bedc75095e2"
  },
  {
    "url": "assets/js/25.6ecf4a37.js",
    "revision": "c3f30a4928699dccbb69c544dc44d978"
  },
  {
    "url": "assets/js/26.51ad460d.js",
    "revision": "16fd7b8c0f8186713cd452a88e541e3b"
  },
  {
    "url": "assets/js/27.bcc3582d.js",
    "revision": "972b597b36238eab86b462fdaa23f346"
  },
  {
    "url": "assets/js/28.7c28dfac.js",
    "revision": "a4da2c2f661e876b0a244733a3f7080d"
  },
  {
    "url": "assets/js/29.c7d15003.js",
    "revision": "832681f43f6c5aca53485c0e3dc1e10d"
  },
  {
    "url": "assets/js/3.c99638c5.js",
    "revision": "12e20176f3446bc033ced6d68e329889"
  },
  {
    "url": "assets/js/30.f83bd00d.js",
    "revision": "3a09411fe96153e32af9d236316b309f"
  },
  {
    "url": "assets/js/31.9fa29b4e.js",
    "revision": "81218d02b4cbd42992277b49cf64422b"
  },
  {
    "url": "assets/js/32.1a4afa56.js",
    "revision": "f3538c18f39a1a17031e5b0d1a5c9e29"
  },
  {
    "url": "assets/js/33.a69297bf.js",
    "revision": "ca997bccb4910ed8c0067d1b0432d466"
  },
  {
    "url": "assets/js/34.6f38e77e.js",
    "revision": "81e520cf6d738a8a8ef66c95641b9a90"
  },
  {
    "url": "assets/js/35.14d50a90.js",
    "revision": "cf368f38bd41991ecb9f8115f01469a8"
  },
  {
    "url": "assets/js/36.0319abb3.js",
    "revision": "b6aa242e350ab05661308b620078482e"
  },
  {
    "url": "assets/js/37.36ae1d23.js",
    "revision": "ce5c3a9f2f241e9ec410ce740dfb0292"
  },
  {
    "url": "assets/js/38.8bb3345e.js",
    "revision": "5f9f8ff705f9a0b38e7fc6a12e18c5d6"
  },
  {
    "url": "assets/js/39.2581a014.js",
    "revision": "b68b105918cd4b6875876e1323789bf8"
  },
  {
    "url": "assets/js/4.209f09af.js",
    "revision": "6177bcd1f8f58911e44ca80ff7bc469f"
  },
  {
    "url": "assets/js/40.6ca454ff.js",
    "revision": "d243983dcc0d79cad35f285e6663307e"
  },
  {
    "url": "assets/js/41.c7337529.js",
    "revision": "4d0edda1e9ff32a73af7fc15e278905b"
  },
  {
    "url": "assets/js/42.9bbd925f.js",
    "revision": "ea44dad37f4338518080960430559066"
  },
  {
    "url": "assets/js/43.d96de262.js",
    "revision": "a743a5f8ebbf5d888dc5e652f601dbd9"
  },
  {
    "url": "assets/js/44.fdd0b4a2.js",
    "revision": "d4407b48917740053087cb09bc5dcc3c"
  },
  {
    "url": "assets/js/45.4e5cec06.js",
    "revision": "5bcc5d23bc4e03b6e0823a9824dbf5bd"
  },
  {
    "url": "assets/js/46.c17ce920.js",
    "revision": "3b01fd274d17be4f1591cc9ccab2c516"
  },
  {
    "url": "assets/js/47.b28ee385.js",
    "revision": "89c86bd0b7db7547ec72af113fdd8953"
  },
  {
    "url": "assets/js/48.8ec04402.js",
    "revision": "6ce047e747e901a6a24a9b1b6ab0ed8c"
  },
  {
    "url": "assets/js/49.8920b605.js",
    "revision": "1b119bf6f7ecb7b33773b4fabf74d21e"
  },
  {
    "url": "assets/js/5.4abcb495.js",
    "revision": "46c54d19d48d297dae47f0813dc03112"
  },
  {
    "url": "assets/js/50.4c67ce95.js",
    "revision": "2bd53cf2c82826db16e36c221e83ea0c"
  },
  {
    "url": "assets/js/51.22c8db0a.js",
    "revision": "648889c2f9ab0cb14aa4c208774b19cc"
  },
  {
    "url": "assets/js/52.67c09c23.js",
    "revision": "f42f13a11cd0638e1b70ee655be3954f"
  },
  {
    "url": "assets/js/6.5e63877a.js",
    "revision": "41529c4f82ebafb22a2a6d2a4bedae05"
  },
  {
    "url": "assets/js/7.63807aba.js",
    "revision": "894bfe56454ce3304d28e492696b4739"
  },
  {
    "url": "assets/js/8.98289253.js",
    "revision": "a0047c4c720c4ec9144e972dbe1baa0d"
  },
  {
    "url": "assets/js/9.391f898b.js",
    "revision": "e5e20fe1effe4d0866d744efcce73634"
  },
  {
    "url": "assets/js/app.658e53bc.js",
    "revision": "84afeea733d670583270a71e8bda3bba"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "8fc09851f9a147e1fe19117b2c960f0a"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "b91388ac52196128fbb1902519a2bd23"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "f6cb12d5be7bdcb626ffd8b6533d221a"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "ba366e78aab064d67951157f816fcc45"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "c576d2e256f0c9fd7aed38f4912e9c89"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "c9ccf0d1ff8dd97e69aeaad754d2a42c"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "bc27fcfaa12d99f6a462587ef189c1d3"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "0b19d70ef55fbd0b09f9ce1ae7a34c62"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "21bd5a31228f493bd99575a5cf01b940"
  },
  {
    "url": "content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "b4368e976322457396a1c93d976fef85"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "743f71c3d483091782acaad0a586c0f9"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "d6f629c0f60ccf2cab4e8e1cf3166358"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "2bb01a6d537a560cde6bfeb67700bdc1"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "f8419eb88cf2d5e75ee25e4879818733"
  },
  {
    "url": "content/cloud-advocate/2020-03/9-advanced-tips-for-production-machine-learning.html",
    "revision": "b0cda5de901956c963dee64f396d9f1c"
  },
  {
    "url": "content/cloud-advocate/2020-03/a-modern-developer-s-workflow-for-twine.html",
    "revision": "6b2407b9a7040c5cc9fc3c2abc80a93f"
  },
  {
    "url": "content/cloud-advocate/2020-03/create-your-first-model-with-azure-custom-vision-and-python.html",
    "revision": "2278785459f9bcc89356574889cdba32"
  },
  {
    "url": "content/cloud-advocate/2020-03/getting-started-with-azureml-notebook-vms.html",
    "revision": "6aaea2c1aa6056aea1283827efbc28dc"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "5d06aea10b04b04bf8c233d8ed18a0bf"
  },
  {
    "url": "content/index.html",
    "revision": "5601f40b7c8b46592438963438f08642"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "2011673653cb35b190e04093d9c0e270"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "9fa098cd834d75804f4a3627bcd260d3"
  },
  {
    "url": "LICENSE.html",
    "revision": "96fddfd3109ce5f3767f38f752c61796"
  },
  {
    "url": "tags.html",
    "revision": "aa60cebd9d01d50bed4acf96102dd4ab"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "bdec9fe7ebd8701ae831b1c4d7b7f538"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "554e149eaf88849750fbeb1af61a7f69"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "4bc3acfa6df0d641089fa071d1b52ce2"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "2c340f244b642a6769fe6a3285035d7b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "d6756d579cbb72d640a751faa1f4394f"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "419edf4f6582dc0625bedb57b798da6a"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "5b7530038ebe72d4dfb9a54eae5fd60a"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "faf5ec54ffba1399c8c4da7e2bd8cf3b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "c773d160b744c7180d78e106f6438e32"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "8ba56cbcacb1ba3925841cb90a62c59e"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "75bd482c29955310fee2a2a689efbe5b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "e17c363b8ed35e0214c437bef8f810f5"
  },
  {
    "url": "zh-cn/content/index.html",
    "revision": "1b2995c5af6dd515248491ad1420ec58"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "3e354aa472655e33072511c25569ee33"
  },
  {
    "url": "zh-cn/tags.html",
    "revision": "af6429b1cf2867978a20fcffa0a51369"
  },
  {
    "url": "zh-tw/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "f52a51b85151987ce6bb9d14df078e09"
  },
  {
    "url": "zh-tw/content/index.html",
    "revision": "10ec175d50b3bf46ebed6bbdb12f0634"
  },
  {
    "url": "zh-tw/index.html",
    "revision": "a7cd9e579478b6a6f0f3b31846991076"
  },
  {
    "url": "zh-tw/tags.html",
    "revision": "fdf02a931174543d3be18df16c09d494"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
