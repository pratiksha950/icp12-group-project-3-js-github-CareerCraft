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

    const userName = document.getElementById("name").value.trim();
    const userEmail = document.getElementById("email").value.trim();
    const userCreatePassword = document.getElementById("create-password").value.trim();
    const userConfirmPassword = document.getElementById("confirm-password").value.trim();

     if (!userName || !userEmail || !userCreatePassword || !userConfirmPassword) {
        alert("All fields are required ❌");
        return;
    }
    if (userCreatePassword !== userConfirmPassword) {
        alert("Passwords do not match ❌");
        return;
    }

    const user = {
        name: userName,
        email: userEmail,
        createPassword: userCreatePassword,
        confirmPassword:userConfirmPassword
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "../index.html";
}

const userLogin = () => {
    const loginEmail = document.getElementById("login-email").value.trim();
    const loginPassword = document.getElementById("password").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (loginEmail === storedUser.email && loginPassword === storedUser.confirmPassword) {
        window.location.href = "../index.html";
    } else {
        alert("Invalid Email or Password");
    }
}

