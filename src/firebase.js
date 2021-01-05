// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
   
        apiKey: "AIzaSyARXcl-OZGBIWsl3wZiUw5B0cvWOghfl0I",
        authDomain: "instagram-clone-adafa.firebaseapp.com",
        databaseURL: "https://instagram-clone-adafa-default-rtdb.firebaseio.com",
        projectId: "instagram-clone-adafa",
        storageBucket: "instagram-clone-adafa.appspot.com",
        messagingSenderId: "145516059569",
        appId: "1:145516059569:web:1bcf4d92ea4bbd0e40fb90",
        measurementId: "G-1TD5MBZDDF"
      });



  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export {db,auth,storage};

//   export default db;