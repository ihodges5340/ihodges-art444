function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

function toggleFaq(element) {
    element.classList.toggle('open');
}

function applyTheme(isDark) {
    const theme = document.getElementById("lightMode");
    const background = document.querySelector(".light-mode-background");
    const button = document.querySelector(".light-mode-button");

    if (isDark) {
        theme.setAttribute("href", "css/darkmode.css");
        background.classList.add("toggled");
        button.classList.add("toggled");
        document.body.classList.add("dark-mode");
    } else {
        theme.setAttribute("href", "css/styles.css");
        background.classList.remove("toggled");
        button.classList.remove("toggled");
        document.body.classList.remove("dark-mode");
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    applyTheme(!isDark);
}

function updateTheme() {
    const hour = new Date().getHours();
    applyTheme(hour >= 18 || hour < 6);
}

updateTheme();


//faq//
const items = document.querySelectorAll(".faq-box");
items.forEach(item => item.addEventListener('click', function () {
    const isOpen = this.classList.contains('open');
    items.forEach(i => i.classList.remove('open'));
    if (!isOpen) this.classList.add('open');
}));