import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBm66GUYvtwnrG8QcvBkXLqyBLo5Vog_9Y",
  authDomain: "light-intensity-sensor-t-e5e6c.firebaseapp.com",
  databaseURL: "https://light-intensity-sensor-t-e5e6c-default-rtdb.firebaseio.com",
  projectId: "light-intensity-sensor-t-e5e6c",
  storageBucket: "light-intensity-sensor-t-e5e6c.appspot.com",
  messagingSenderId: "951208876463",
  appId: "1:951208876463:web:c2ec4bd9d6ab9e7c65b75a",
  measurementId: "G-J0872041NX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore =getFirestore(app)