let userNameInpEle = document.getElementById("userInput");
let userPassInpELe = document.getElementById("userPassword");
let rideBtnInpEle = document.getElementById("rideBtn");
if (userNameInpEle.value === "") {
    alert("Enter Valid UserName");
    userPassInpELe.textContent = "";
}
userPassInpELe.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (userNameInpEle.value === "219x1a2847" && userPassInpELe.value === "AAKASH123") {
            alert("Login Successful");
            rideBtnInpEle.classList.remove("d-none");
        }
    }
});
