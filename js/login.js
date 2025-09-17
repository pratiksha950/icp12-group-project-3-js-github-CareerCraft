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

const changeOutline = ()=>{
    passwordDiv.style="outline: auto;";
}
function openOverlay() {
  document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
