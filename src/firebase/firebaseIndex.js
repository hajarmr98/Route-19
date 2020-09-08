
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCE2PVQG7a_Ii1SAdzqDY5jYEntNQAKKPw",
  authDomain: "modals-ce7c0.firebaseapp.com",
  databaseURL: "https://modals-ce7c0.firebaseio.com",
  projectId: "modals-ce7c0",
  storageBucket: "modals-ce7c0.appspot.com",
  messagingSenderId: "660012164964",
  appId: "1:660012164964:web:ed6b0a9c3e43eccbde7c71"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.auth()

export default {
  firebaseConfig, 
}

// import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/app'

// var firebaseConfig = {
//   // apiKey: "AIzaSyCE2PVQG7a_Ii1SAdzqDY5jYEntNQAKKPw", 
//   // authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   // databaseURL: process.env.REACT_APP_BASEURL,
//   // projectId: process.env.REACT_APP_PROJECT_ID,
//   // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   // appId: process.env.REACT_APP_APP_ID

//       apiKey: "AIzaSyCE2PVQG7a_Ii1SAdzqDY5jYEntNQAKKPw",
//       authDomain: "modals-ce7c0.firebaseapp.com",
//       databaseURL: "https://modals-ce7c0.firebaseio.com",
//       projectId: "modals-ce7c0",
//       storageBucket: "modals-ce7c0.appspot.com",
//       messagingSenderId: "660012164964",
//       appId: "1:660012164964:web:ed6b0a9c3e43eccbde7c71"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
// firebase.auth()

