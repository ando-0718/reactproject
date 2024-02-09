import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbrBlAKZGyfcr6bIkuzrLHF9csOmlpPIE",
    authDomain: "fir-tutorial-f2f5f.firebaseapp.com",
    projectId: "fir-tutorial-f2f5f",
    storageBucket: "fir-tutorial-f2f5f.appspot.com",
    messagingSenderId: "233444733554",
    appId: "1:233444733554:web:1f794cf713130fee4e48eb"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;