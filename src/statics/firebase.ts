import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCm_cJBDLbjSTovptETDlHxoRaiXyGNj6k",
    authDomain: "ren-v1.firebaseapp.com",
    databaseURL: "https://ren-v1.firebaseio.com",
    projectId: "ren-v1",
    storageBucket: "ren-v1.appspot.com",
    messagingSenderId: "46870486878",
    appId: "1:46870486878:web:7be6e3bda3fcee017f39cf",
    measurementId: "G-81VMZMBRHH"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()