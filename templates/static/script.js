// Demo login function
function login() {
    const demoUsername = "or4193@srmist.edu.in";
    const demoPassword = "1234";
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
    if (enteredUsername === demoUsername && enteredPassword === demoPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Toggle between sign-in and sign-up modes
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const signInForm = document.querySelector(".sign-in-form");

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;
    if (username === "omkar" && password === "omkar") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Chat functions
function chat(message) {
    // Your chat function implementation
    // ...
}

function displayMessage(sender, message, type) {
    // Your message display logic
    // ...
}

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;

    if (message.trim() !== "") {
        // Your logic for sending the message or initiating a call
        // ...

        // Check if the message contains "I am not well"
        if (message.toLowerCase().includes("i am not well")) {
            // Create a button to connect to the doctor
            createConnectToDoctorButton();
        }

        // For demonstration purposes, redirect to the doctor_call.html page if "demo" is typed
        if (message.toLowerCase() === "demo") {
            window.location.href = "/doctor_call";
        }

        // Clear the message input after sending
        messageInput.value = "";
    }
}

function createConnectToDoctorButton() {
    var chatBox = document.getElementById("chat-box");

    // Create a new button
    var connectToDoctorButton = document.createElement("button");
    connectToDoctorButton.textContent = "Connect to Doctor";
    connectToDoctorButton.onclick = function () {
        // Redirect to the doctor_call.html page
        window.location.href = "/doctor_call";
    };

    // Append the button to the chat box
    chatBox.appendChild(connectToDoctorButton);
}

// Other functions
function stayAnonymous() {
    alert("You chose to stay anonymous. Start exploring EaseMinds anonymously!");
}

function freeToTalk() {
    alert("You're free to talk openly. Begin your conversation on EaseMinds!");
}

function toggleAnonymity() {
    let anonymityCheckbox = document.getElementById('anonymity');
    let isAnonymous = anonymityCheckbox.checked;
    let message = isAnonymous ? 'You are now anonymous.' : 'You are no longer anonymous.';
    displayMessage('System', message, 'system');
}

function logout() {
    window.location.href = 'index.html';
}
