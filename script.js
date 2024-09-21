// Sign Up Functionality
function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    localStorage.setItem(email, password);
    alert("Sign up successful! You can now log in.");
}

// Login Functionality
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
        alert("Login successful!");
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
        document.getElementById('survey').style.display = 'block';
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
