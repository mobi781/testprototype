// Get form elements
const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");

// Registration and Login functionality
document.getElementById("register").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Perform registration logic (e.g., send data to a server)
    // You can add validation here before registration
    
    alert(`Registered: Username - ${username}, Password - ${password}`);
    registrationForm.reset();
});

document.getElementById("login").addEventListener("click", () => {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
    
    // Perform login logic (e.g., check credentials on a server)
    // You can add validation here before login
    
    alert(`Logged in: Username - ${loginUsername}, Password - ${loginPassword}`);
    loginForm.reset();
});

document.getElementById("clear").addEventListener("click", () => {
    registrationForm.reset();
});
