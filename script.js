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

// Login Function
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Hide forms and show survey
            document.getElementById('login').style.display = 'none';
            document.getElementById('signup').style.display = 'none';
            document.getElementById('survey').style.display = 'block';
            loadSurveyQuestions(); // Load survey questions
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
            // Hide signup and show login
            document.getElementById('signup').style.display = 'none';
            document.getElementById('login').style.display = 'block';
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('signupError').textContent = errorMessage;
        });
});

// Load Survey Questions
function loadSurveyQuestions() {
    const questions = Array.from({ length: 50 }, (_, index) => ({
        question: `Question ${index + 1}: How do you feel about topic X?`,
        options: [
            'Very Satisfied',
            'Satisfied',
            'Neutral',
            'Dissatisfied',
            'Very Dissatisfied'
        ]
    }));

    const surveyQuestionsDiv = document.getElementById('surveyQuestions');
    surveyQuestionsDiv.innerHTML = ''; // Clear previous questions

    questions.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach(option => {
            questionDiv.innerHTML += `
                <label class="toggle">
                    <input type="radio" name="question${q.question}" value="${option}">
                    <span class="slider"></span> ${option}
                </label>
            `;
        });
        surveyQuestionsDiv.appendChild(questionDiv);
    });
}

// Handle survey form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('surveyMessage').textContent = 'Survey submitted successfully. Thank you!';
});

// Wait for the window to fully load
window.onload = function() {
    document.getElementById('loading-animation').style.display = 'none';
    document.getElementById('login').style.display = 'block';
};
