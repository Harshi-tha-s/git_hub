function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (user === "" || pass === "") {
        msg.style.color = "red";
        msg.innerHTML = "Fields cannot be empty!";
        return;
    }

    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.innerHTML = "Login Successful 🎉";

        // redirect example
        // window.location.href = "home.html";
    } else {
        msg.style.color = "red";
        msg.innerHTML = "Invalid username or password!";
    }
}
