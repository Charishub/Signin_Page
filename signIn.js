//Email 
const emailAddress = document.getElementById("email")
//Password
const validPassword = document.getElementById("password")
let passwordPattern = document.getElementById("password-pattern")
//Button Messages
let clickMessage = document.getElementById("click")
let warningMessage = document.getElementById("warning")
//Button
const signinButton = document.getElementById("btn")



signinButton.addEventListener("mouseover", () => {
    let validPasswordInput = "passwordPattern";

    // Email Validation 
    if (emailAddress.value.includes("@") && emailAddress.value.includes(".com")) {
        clickMessage.style.display = "block";
        signinButton.style.boxShadow = "-1px 15px 8px 0px rgba(165, 164, 164, 0.761)";
        signinButton.style.transform = "skew(1deg)";


        setTimeout(() => {
            let animate = Math.floor(Math.random() * 200) + "px";
            let animateButton = Math.floor(Math.random() * 200) + "px";
            signinButton.style.top = animate;
            signinButton.style.left = animateButton;
            signinButton.style.right = animate;
        }, 50)

    }
    else {
        clickMessage.style.display = "none";
        warningMessage.style.display = "block";
    }


    // Password Validation
    if (validPassword.value.length <= 10) {
        warningMessage.style.display = "none";
        clickMessage.style.display = "block";
    }
    else if (validPassword.value.length > 10) {
        warningMessage.style.display = "block";
        clickMessage.style.display = "none";
    }
    else if (!validPassword.value.match("validPasswordInput")) {
        warningMessage.style.display = "block";
        clickMessage.style.display = "none";
    }
    else {
        warningMessage.style.display = "none";
        clickMessage.style.display = "block";
    }
})


// Email and Password on Click
emailAddress.onclick = function () {
    signinButton.style.boxShadow = "none";
    signinButton.style.outlineOffset = "none";
    signinButton.style.top = "0px";
    signinButton.style.left = "0px";
}
validPassword.onclick = function () {
    signinButton.style.boxShadow = "none";
    signinButton.style.outlineOffset = "none";
    signinButton.style.top = "0px";
    signinButton.style.left = "0px";
}
