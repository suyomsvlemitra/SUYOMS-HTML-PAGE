
(function () {
  'use strict';

  const firebaseConfig = {
    apiKey: "AIzaSyDOYUIvE7yWCNEf_K6dHEGfEqtUwLy3rdM",
    authDomain: "suyoms-login.firebaseapp.com",
    databaseURL: "https://suyoms-login-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "suyoms-login",
    storageBucket: "suyoms-login.firebasestorage.app",
    messagingSenderId: "1084425019811",
    appId: "1:1084425019811:web:f036c2b42cb5eb4ee5ba16",
    measurementId: "G-M5D0GP7DBD"
  };

  window.getSuyomsFirebase = function () {
    if (!window.firebase || !firebase.database) {
      console.warn("Firebase SDK लोड झालेले नाही.");
      return null;
    }

    try {
      let app;

      try {
        app = firebase.app("suyomsPrintQueue");
      } catch (error) {
        app = firebase.initializeApp(
          firebaseConfig,
          "suyomsPrintQueue"
        );
      }

      return {
        app: app,
        db: firebase.database(app)
      };
    } catch (error) {
      console.warn("Suyoms Firebase initialization failed:", error);
      return null;
    }
  };
})();
