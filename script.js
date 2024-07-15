document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password match your criteria
    if (username === 'admin' && password === 'admin1234') {
        // Redirect to dashboard or perform other actions upon successful login
        alert('Login successful!');
        // Example redirect
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-msg').innerText = 'Invalid username or password. Please try again.';
    }
});
