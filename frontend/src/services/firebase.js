import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCenHuhDER2MN5S5jt8j7DMWaPBQcYFQAw",
    authDomain: "uploadfiletofirebase-ae63f.firebaseapp.com",
    projectId: "uploadfiletofirebase-ae63f",
    storageBucket: "uploadfiletofirebase-ae63f.appspot.com",
    messagingSenderId: "548678075768",
    appId: "1:548678075768:web:d9a471afe85756f666348d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default storage;