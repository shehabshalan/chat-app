import firebase from 'firebase'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDozK6XGnYc48KpQ-VrkRSvhKBTxoM2iFI",
    authDomain: "chat-system-bf593.firebaseapp.com",
    databaseURL: "https://chat-system-bf593.firebaseio.com",
    projectId: "chat-system-bf593",
    storageBucket: "chat-system-bf593.appspot.com",
    messagingSenderId: "467607987764",
    appId: "1:467607987764:web:78cb1e55ce889f3ba9cc61"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()