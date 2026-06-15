import { messaging } from "./firebase.js";
import { getToken } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

Notification.requestPermission().then(async (permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted");

    try {
      const token = await getToken(messaging, {
        vapidKey: "BBRpsbEUcAcXQhjX-TtMWKjRT7h00Kqz_dJPycVrlDp_jtddUDPPL9Ydg2pl0yqnx0HWxe-GKdwcf7j_0iVtADo"
      });

      console.log("Device Token:", token);
    } catch (err) {
      console.error("Error getting token:", err);
    }

  } else {
    console.log("Permission denied");
  }
});
