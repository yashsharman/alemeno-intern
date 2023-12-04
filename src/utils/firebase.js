import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-e2DebOkVgddpgxReLQ0Lc-uOzmRuYTA",
  authDomain: "learn-it-bab93.firebaseapp.com",
  projectId: "learn-it-bab93",
  storageBucket: "learn-it-bab93.appspot.com",
  messagingSenderId: "302254115824",
  appId: "1:302254115824:web:b326035c535e92dba76b35",
};

export const GetData = async () => {
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const coursesCollection = collection(db, "courses");
  const querySnapshot = await getDocs(coursesCollection);
  const coursesData = [];

  querySnapshot.forEach((doc) => {
    coursesData.push({ id: doc.id, ...doc.data() });
  });
  return coursesData;
};
