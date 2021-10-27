const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const link = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
link.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}