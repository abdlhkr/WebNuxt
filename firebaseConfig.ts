// plugins/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxbQs-kWagidWq47aJoz4t0xlSU9khi5U",
  authDomain: "authentication-17b2e.firebaseapp.com",
  projectId: "authentication-17b2e",
  storageBucket: "authentication-17b2e.firebasestorage.app",
  messagingSenderId: "1081508991719",
  appId: "1:1081508991719:web:1f232bab85e73d28e28842",
  measurementId: "G-JZTBW0CYLM"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
