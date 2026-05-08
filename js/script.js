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


const galleryImages = document.querySelectorAll('.galleryimage');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentIndex = 0;
const imgArray = Array.from(galleryImages);

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
});

lightboxNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgArray.length;
    lightboxImg.src = imgArray[currentIndex].src;
});

lightboxPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    lightboxImg.src = imgArray[currentIndex].src;
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('active');
    if (e.key === 'ArrowRight') lightboxNext.click();
    if (e.key === 'ArrowLeft') lightboxPrev.click();
});

      