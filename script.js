const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle sticky header on scroll
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu and navbar display on icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle icon (e.g., from bx-menu to bx-x)
    navbar.classList.toggle('open'); // Toggle navbar visibility
};

// Close menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
