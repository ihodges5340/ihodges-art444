function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

function toggleFaq(element) {
    element.classList.toggle('open');
}

function applyTheme(isDark) {
    const theme = document.getElementById("lightMode");
    const button = document.querySelector(".light-mode-button");
    const logos = document.querySelectorAll(".nav-logo");

    if (isDark) {
        theme.setAttribute("href", "css/darkmode.css");
        button.classList.add("toggled");
        logos.forEach(logo => logo.setAttribute("src", "images/DFTI-Website-logo-dark.png"));
        document.body.classList.add("dark-mode");
    } else {
        theme.setAttribute("href", "css/styles.css");
        button.classList.remove("toggled");
        logos.forEach(logo => logo.setAttribute("src", "images/DFTI-Website-logo.png"));
        document.body.classList.remove("dark-mode");
    }
}

function toggleTheme() {
    const current = document.getElementById("lightMode").getAttribute("href");
    applyTheme(current === "css/styles.css");
}

function updateTheme() {
    const hour = new Date().getHours();
    applyTheme(hour >= 18 || hour < 6);
}

// Run on page load
updateTheme();

