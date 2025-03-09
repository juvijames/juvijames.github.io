document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(element => observer.observe(element));

    // Mobile menu toggle
    const menuToggle = document.getElementById("mobile-menu-open");
    const menu = document.getElementById("menu");
    const closeMenu = document.getElementById("mobile-menu-close");

    menuToggle.addEventListener("click", function () {
        menu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});
