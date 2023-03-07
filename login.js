function login() {
    const nameEL = document.querySelector("#name");
    localStorage.setItem("username", nameEL.value);
    window.location.href = "play.html"
}