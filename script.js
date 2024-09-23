// Toggle forms (Login, Sign Up, Survey)
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

document.getElementById('showSurvey').addEventListener('click', function() {
    document.getElementById('survey').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
});

// Login Function
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            document.getElementById('login').style.display = 'none';
            document.getElementById('survey').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('loginError').textContent = errorMessage;
        });
});

// Sign-Up Function
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Sign up successful!");
            document.getElementById('signup').style.display = 'none';
            document.getElementById('login').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('signupError').textContent = errorMessage;
        });
});

// Handle survey form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('surveyMessage').textContent = 'Survey submitted successfully. Thank you!';
});

// Wait for the window to fully load
window.onload = function() {
    // Hide the loading animation
    document.getElementById('loading-animation').style.display = 'none';
    // Show the login form
    document.getElementById('login').style.display = 'block';
};

// Monitor authentication state
auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, show the survey
        document.getElementById('survey').style.display = 'block';
        document.getElementById('login').style.display = 'none';
    } else {
        // No user is signed in, show the login form
        document.getElementById('survey').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }
});
