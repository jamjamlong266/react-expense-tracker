import * as firebase from 'firebase';
require('dotenv').config()

// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// }
export const firebaseConfig = {
    apiKey: "AIzaSyBq6ccJxnZgX8PFFUpZr28JvTO9uHcx6Z4",
    authDomain: "moneytracking-aac42.firebaseapp.com",
    databaseURL: "https://moneytracking-aac42.firebaseio.com",
    projectId: "moneytracking-aac42",
    storageBucket: "moneytracking-aac42.appspot.com",
    messagingSenderId: "394706155220",
    appId: "1:394706155220:web:8842f5c394e1e0837cad41"
}

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;