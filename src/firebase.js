import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAp5MBtdOHDn_viMvYKSEleigx78Xpt5Xc",
    authDomain: "slack-clone-oh.firebaseapp.com",
    projectId: "slack-clone-oh",
    storageBucket: "slack-clone-oh.appspot.com",
    messagingSenderId: "579875058329",
    appId: "1:579875058329:web:a7e02a0ba3b9faf94b7e08"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;