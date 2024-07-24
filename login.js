document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Validate form fields here before submitting
  // For simplicity, let's just log the form data for now
  const formData = {
    name: document.getElementById('name').value,
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirmPassword').value,
    email: document.getElementById('email').value
  };
  console.log(formData);
});
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Perform your login authentication logic here
    // For demonstration purposes, let's assume the login is successful
    const loginSuccessful = true;

    if (loginSuccessful) {
      // Redirect to success.html if login is successful
      window.location.href = "logsuccess.html";
    }
  });
});
