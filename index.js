document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.querySelector(".hamburger");
    let navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", function () {
        console.log("Hamburger clicked!");  // Check if this is being logged
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("is-active");
    });
});
