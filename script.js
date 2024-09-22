// Mock user data (for demo purposes, no backend yet)
const users = JSON.parse(localStorage.getItem('users')) || {};
let loggedInUser = null;

// Initialize points (stored in local storage)
let points = parseInt(localStorage.getItem('points')) || 0;

// Display points
document.getElementById('points').innerText = points;

// Show forms based on navigation
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('survey').style.display = 'none';
});

document.getElementById('showSignup').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('survey').style.display = 'none';
});

document.getElementById('showSurvey').addEventListener('click', function() {
    if (loggedInUser) {
        document.getElementById('survey').style.display = 'block';
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
        document.getElementById('points-section').style.display = 'block';
    }
});

// Handle signup form submission
document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (users[email]) {
        document.getElementById('signupError').innerText = 'User already exists!';
    } else {
        users[email] = { username, password, points: 0 };
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign up successful! Please log in.');
        document.getElementById('signupForm').reset();
        document.getElementById('signup').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }
};

// Handle login form submission
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (users[email] && users[email].password === password) {
        loggedInUser = email;
        alert('Login successful!');
        document.getElementById('login').style.display = 'none';
        document.getElementById('showSurvey').style.display = 'inline';
        document.getElementById('points').innerText = users[loggedInUser].points;
        document.getElementById('points-section').style.display = 'block';
    } else {
        document.getElementById('loginError').innerText = 'Invalid email or password!';
    }
};

// Handle survey form submission
document.getElementById('surveyForm').onsubmit = function(event) {
    event.preventDefault();

    if (loggedInUser) {
        points += 10; // Award points
        users[loggedInUser].points += 10;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('points', points);

        // Update points display
        document.getElementById('points').innerText = points;

        alert('Survey submitted! You earned 10 points.');
        document.getElementById('surveyForm').reset();
    } else {
        alert('Please log in to complete the survey.');
    }
};
