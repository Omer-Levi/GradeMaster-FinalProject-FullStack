document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        document.getElementById('error-message').innerText = 'אנא מלא את כל השדות.';
        return;
    }

    // Here you would typically send the data to the server for authentication
    // For now, we'll just simulate successful login
    if (username === 'teacher' && password === 'password') {
        window.location.href = 'main.html';
    } else {
        document.getElementById('error-message').innerText = 'שם משתמש או סיסמה שגויים.';
    }
});
