// script.js

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

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    // Fake login logic (replace with real validation)
    if (email === 'test@lazy2k.com' && password === 'password') {
        alert('Login successful!');
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
        document.getElementById('survey').style.display = 'block';
        document.getElementById('showSurvey').style.display = 'inline';
    } else {
        document.getElementById('loginError').textContent = 'Invalid email or password.';
    }
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    // Fake sign-up logic (replace with real validation)
    if (username && email && password) {
        alert('Sign-up successful! Please log in.');
        document.getElementById('signup').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    } else {
        document.getElementById('signupError').textContent = 'Please fill in all fields.';
    }
});

// Handle survey form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('surveyMessage').textContent = 'Survey submitted successfully. Thank you!';
});
