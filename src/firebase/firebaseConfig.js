
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJqVh2_wuKYTohoOQU1bjp_kn46zT3GMU",
  authDomain: "calisthenics-ai.firebaseapp.com",
  projectId: "calisthenics-ai",
  storageBucket: "calisthenics-ai.firebasestorage.app",
  messagingSenderId: "57382662270",
  appId: "1:57382662270:web:2ccc1902aefe8cec2de82f",
  measurementId: "G-RT6BCT399P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app