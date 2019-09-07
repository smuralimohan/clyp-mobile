import firebase from "firebase";

const config = {  
  apiKey: "AIzaSyBjrTbczaa6xf-H4k7lg2zQI9Fk-91-J3U",  
  authDomain: "xyz",  
  databaseURL: "xyz",  
  projectId: "xyz",  
  storageBucket: "xyz",  
  messagingSenderId: "xyz"  
}; 

var firebaseConfig = {
    apiKey: "AIzaSyBjrTbczaa6xf-H4k7lg2zQI9Fk-91-J3U",
    authDomain: "centering-star-249905.firebaseapp.com",
    databaseURL: "https://centering-star-249905.firebaseio.com",
    projectId: "centering-star-249905",
    storageBucket: "centering-star-249905.appspot.com",
    messagingSenderId: "sender-id",
    appID: "1:606960811999:android:8db69fa750b330ec",
  };

firebase.initializeApp(config);