import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqEFncXyBeMAISGcSWs7Mq6CGnnyeZyxg",
  authDomain: "smartroom-c0224.firebaseapp.com",
  projectId: "smartroom-c0224",
  storageBucket: "smartroom-c0224.appspot.com",
  messagingSenderId: "342906157832",
  appId: "1:342906157832:web:87af6cab46d0af819d4abd",
  measurementId: "G-504ZYXL3KF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore =getFirestore(app)