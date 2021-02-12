import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCnS86lhoaeTlHm_pk2UihAcMHufaSnt0M",
    authDomain: "hostit-6862f.firebaseapp.com",
    projectId: "hostit-6862f",
    storageBucket: "hostit-6862f.appspot.com",
    messagingSenderId: "961515998228",
    appId: "1:961515998228:web:f791f1705ddcb1ed94eb01"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.database = app.firestore();
        this.auth = app.auth();
    }

    project_ref = () => this.database.collection('projects');

    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    logOut = () => this.auth.signOut();
}

export default Firebase;