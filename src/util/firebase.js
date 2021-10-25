import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACIdSDRh8etOoR7YPGBifusDZE2iReAt0",
  authDomain: "smart-weather-station-a1402.firebaseapp.com",
  databaseURL: "https://smart-weather-station-a1402-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-weather-station-a1402",
  storageBucket: "smart-weather-station-a1402.appspot.com",
  messagingSenderId: "565471199639",
  appId: "1:565471199639:web:d40c6ce2d763e890dc44d2",
  measurementId: "G-0ZS3LRG115"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase as  default};