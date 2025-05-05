
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.DHbutLuY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.CJSeGQJw.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage.BMQLI-Gr.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.CpKvKPD_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.DzXmKYE0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.DiGd-Doi.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.9Coh8vR6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayOptInDisclaimer.CA0jobbE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShipmentBreakdown.BtnzKO1x.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MerchandiseModal.BYPRNS-A.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StackedMerchandisePreview.CACE4oQq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.BfdpWs9X.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.CgyQZxEf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger.M8bOTNfy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.DO6bRHSw.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.CyzGTaJl.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DmqjTkNB.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/helvetica/helvetica_n4.fe093fe9ca22a15354813c912484945a36b79146.woff2?h1=d3RmbGV4Lmlu&hmac=e3966f239e3821b049be472508a3568b6f1a8ec31d75f61f2584a4a8f3821cf3","https://fonts.shopifycdn.com/helvetica/helvetica_n7.39bee04bd277a9c4e94e2fd42d53f4e3c0afb8a5.woff2?h1=d3RmbGV4Lmlu&hmac=2de34c8dad5ee0cb6f4fec10ee4d2914349ac0e85d49f9d9bf726c956e59daaf","https://fonts.shopifycdn.com/righteous/righteous_n4.ae12f723ca3ef357f8426575ae5515969ffe8b06.woff2?h1=d3RmbGV4Lmlu&hmac=8ad9acf18395bd90067d8cbd3310fe464439ef8e152d4a78efe34caeb6cb3c41"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0615/4551/3126/files/logo_wtf_x320.png?v=1655663734"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  