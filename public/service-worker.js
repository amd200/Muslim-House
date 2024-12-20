const CACHE_NAME = "my-react-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js", // أضف المسارات التي تحتاج تخزينها هنا
  "/static/css/main.css",
  "/azkar.json", // المسارات الخاصة بالملفات في مجلد public
  "/Quotes.json",
  "/Quran.json",
  "/azkarPrayer.json",
];

// التثبيت
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching files during install");
      return cache.addAll(urlsToCache).catch((error) => {
        console.error("Service Worker: Error caching files", error);
      });
    })
  );
});

// تفعيل الـ service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// التعامل مع الطلبات
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // إذا كان الطلب موجودًا في الكاش، استخدمه
      if (cachedResponse) {
        return cachedResponse;
      }

      // إذا لم يكن موجودًا في الكاش، استرده من الشبكة
      return fetch(event.request).then((response) => {
        // إذا كانت استجابة الطلب بنجاح، خزّنها في الكاش
        return caches.open(CACHE_NAME).then((cache) => {
          if (response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      });
    })
  );
});

// تأكد من أن جميع الملفات تم تخزينها في الكاش بنجاح
self.addEventListener("message", (event) => {
  if (event.data && event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
