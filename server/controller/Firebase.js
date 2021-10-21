// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// // Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAgK7NVIbyquS8RNse0fgaOGcbztwTpkUw",
//   authDomain: "backend-5b2d5.firebaseapp.com",
//   projectId: "backend-5b2d5",
//   storageBucket: "backend-5b2d5.appspot.com",
//   messagingSenderId: "251217355551",
//   appId: "1:251217355551:web:2e1455e4f70682f529c62a",
//   measurementId: "G-JEM1QHXQS9"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// class Firebase {

//     constructor() {
//         this.collector = Firebase.firestore(app).collector('productos')
//     }

//     readForId = async (archivo, id) => {

//         if (id) {

//             container = OrderCollections.where("id", "==", id)
//             const response = await container.get()

//             if (!response.empty) {
//                 return response.docs.map( item => ({id: item.id, ...item.data()})))    
//             }

//         } return this.collector

//     }

//     download = async (archivo, data) => {
//         await this.collector.add(data).then( ({id}) => {

//             return(id)
//             clear()

//         }).catch(err => {
           
//             console.log(err)
//         })
//     }

//     update = async (archivo, data, id) => {}

//     delete =  async (archivo, id) => {}

// }