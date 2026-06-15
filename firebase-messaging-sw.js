importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDoN46xnpOcyoQI_AYY71aL95Vl5R2fcjo",
  authDomain: "edutracker-1bb93.firebaseapp.com",
  projectId: "edutracker-1bb93",
  messagingSenderId: "805495020559",
  appId: "1:805495020559:web:5c1264c254fbcd306f977a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Background message:", payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
