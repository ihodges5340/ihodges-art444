function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

function toggleTheme() {
    const theme = document.getElementById("lightMode");
    const current = theme.getAttribute("href");
    const button = document.querySelector(".light-mode-button");
    const logos = document.querySelectorAll(".nav-logo");

    if (current === "css/styles.css") {
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
