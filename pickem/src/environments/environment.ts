// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const environment = {
  production: false,
  fireBase: {
    apiKey: "AIzaSyAwtEjDYzg2AaED120M2umBfbfPLMjFwJo",
    authDomain: "pick-em-1527b.firebaseapp.com",
    projectId: "pick-em-1527b",
    storageBucket: "pick-em-1527b.appspot.com",
    messagingSenderId: "860050900686",
    appId: "1:860050900686:web:f079b6f2d9dba914a0329f",
    measurementId: "G-PV40GL3CKQ",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
