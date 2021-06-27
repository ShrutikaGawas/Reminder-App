 import firebase from 'firebase';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBXDCn5YCyMNw7COcn3MKP1Mg4VkLaJuAM",
    authDomain: "to-do-list-login-22dce.firebaseapp.com",
    projectId: "to-do-list-login-22dce",
    storageBucket: "to-do-list-login-22dce.appspot.com",
    messagingSenderId: "541951139692",
    appId: "1:541951139692:web:15f781d7d8d1bab2301d49"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire;