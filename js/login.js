const passwordInput = document.getElementById("password");
const toggleImg = document.getElementById("toggle-icon");
const passwordDiv = document.getElementById("password-div");

function toggleImgView() {
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        toggleImg.src = '../login-img/closed.png';
    }
    else {
        passwordInput.type = "password";
        toggleImg.src = '../login-img/open.png';
    }
}

const changeOutline = () => {
    passwordDiv.style = "outline: auto;";
}
function openOverlay() {
    document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

const addUserDetails = () => {

    const userName = document.getElementById("name");
    const userEmail = document.getElementById("email");
    const userCreatePassword = document.getElementById("create-password");
    const userConfirmPassword = document.getElementById("confirm-password");

    localStorage.setItem("name", userName.value);
    localStorage.setItem("email", userEmail.value);
    localStorage.setItem("createPassword", userCreatePassword.value);
    localStorage.setItem("confirmPassword", userConfirmPassword.value);
}

const userLogin = () => {
    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("password");

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("confirmPassword");
    if (loginEmail.value === storedEmail && loginPassword.value === storedPassword) {
        window.location.href = "../index.html";
    } else {
        alert("Invalid Email or Password");
    }
}

