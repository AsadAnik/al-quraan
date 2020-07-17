///Applying the Firebase here for Application...
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC0D8BCsAI9WIplCipoIoJXoBp1G453ufQ",
    authDomain: "al-quraan-app.firebaseapp.com",
    databaseURL: "https://al-quraan-app.firebaseio.com",
    projectId: "al-quraan-app",
    storageBucket: "al-quraan-app.appspot.com",
    messagingSenderId: "629249253899",
    appId: "1:629249253899:web:5f00d182b45f404f1c9d0e",
    measurementId: "G-B2NF9Q1YCN"
};

firebase.initializeApp(firebaseConfig);

//for Database..
const firebaseDB = firebase.database();
const full_quraan = firebaseDB.ref('quraan/0');

export {
    full_quraan,
}