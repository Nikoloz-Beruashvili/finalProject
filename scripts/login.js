
function handleLogin() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let conPassword = document.getElementById(cPassword);
    let result = document.getElementById("result");

    if (username.value.length >= 6) {
        if (password.value.length >= 8) {
            if (conPassword === password){
                result.innerHTML = "Correct Format! you may procceed";
                result.style.color = "green";
                username.style.borderColor = "green";
                } else {
                    result.innerHTML = "Passwors don't match!";
                    result.style.color = "red";
                    password.style.borderColor = "red";
                }
        } else {
            result.innerHTML = "Password must be at least 8characters long!";
            result.style.color = "red";
            password.style.borderColor = "red";
            }
    } else {
        result.innerHTML = "Username must be at least 6 characters long!";
        result.style.color = "red";
    };
} 



let login = document.querySelector(".login");
let create = document.querySelector(".create");
let container = document.querySelector(".container");

login.onclick = function () {
  container.classList.add("signinForm");
};

create.onclick = function () {
  container.classList.remove("signinForm");
};