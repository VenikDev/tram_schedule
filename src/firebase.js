import firebase from 'firebase';
import 'firebase/firestore';

/**
 * Конфиги подключения firebase
 * @type {firebase.app.App}
 */
const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBULD2vM8wWVUSNftYNufm3sKqjDswrogA',
    authDomain: 'vue-tran.firebaseapp.com',
    databaseURL: 'https://vue-tran-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'vue-tran',
    storageBucket: 'vue-tran.appspot.com',
    messagingSenderId: '453942492678',
    appId: '1:453942492678:web:090c2f164d3a7437f14d87',
    measurementId: 'G-MGP2NVP67T'
});

/**
 * Подключкние к realtime database google firebase
 * @type {firebase.database.Reference}
 */
const db = firebaseApp.database().ref('schems');

export { db };
