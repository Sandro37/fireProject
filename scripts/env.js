var firebaseConfig = {
    apiKey: "AIzaSyDJaDjAwKUyXKkWXzJMt-EB0xx9IBd0-xo",
    authDomain: "fireproject-a2614.firebaseapp.com",
    projectId: "fireproject-a2614",
    storageBucket: "fireproject-a2614.appspot.com",
    messagingSenderId: "558146992126",
    appId: "1:558146992126:web:85b95d04278a6f3694f2af",
    measurementId: "G-ZC7J81TV7X"
  };
  // Initialize Firebase
  
  if (!firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig)
        var db = firebase.firestore();
    } catch (err) {
        console.error("‘Firebase initialization error raised’," + err)
    }
  }
  