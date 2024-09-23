import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqjwMfdxl8xqjsZKrVH5FDe5S4O24BEQc",
    authDomain: "lazy-2k-side-hustle.firebaseapp.com",
    projectId: "lazy-2k-side-hustle",
    storageBucket: "lazy-2k-side-hustle.appspot.com",
    messagingSenderId: "974423991173",
    appId: "1:974423991173:web:9c389564fa115f2de4daec",
    measurementId: "G-N7NHWFTDFM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle forms
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('survey').style.display = 'none';
});

document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('survey').style.display = 'none';
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            document.getElementById('login').style.display = 'none';
            document.getElementById('survey').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('loginError').textContent = errorMessage;
        });
});

// Sign Up
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Sign up successful!");
            document.getElementById('signup').style.display = 'none';
            document.getElementById('login').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('signupError').textContent = errorMessage;
        });
});

// Google Sign-In
document.getElementById('googleSignIn').addEventListener('click', function() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Google sign-in successful!");
            document.getElementById('login').style.display = 'none';
            document.getElementById('survey').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error("Google Sign-In Error: ", errorMessage);
        });
});

// Survey Submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('surveyMessage').textContent = 'Survey submitted successfully. Thank you!';
});

// Firebase Auth State Change
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('survey').style.display = 'block';
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
    } else {
        document.getElementById('survey').style.display = 'none';
        document.getElementById('login').style.display = 'block';
        document.getElementById('signup').style.display = 'none';
    }
});
