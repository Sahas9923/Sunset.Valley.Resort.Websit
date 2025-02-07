document.addEventListener('DOMContentLoaded', function() {
    const authButtons = document.getElementById('authButtons');
    const profile = document.getElementById('profile');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const heroMessage = document.getElementById('heroMessage');

    fetch('check_login.php')
        .then(response => response.json())
        .then(data => {
            if (data.isLoggedIn) {
                authButtons.style.display = 'none';
                profile.style.display = 'block';
                welcomeMessage.textContent = "Welcome, " + data.username + "!";
                heroMessage.textContent = "Welcome, " + data.username + "!";
            } else {
                authButtons.style.display = 'block';
                profile.style.display = 'none';
            }
        });
});

function logout() {
    fetch('logout.php', { method: 'POST' })
        .then(response => {
            if (response.ok) {
                window.location.href = 'login.html';
            } else {
                console.error("Logout failed.");
            }
        });
}


// Carousel script (paste your code here)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

// Initialize the carousel
showSlide(0);

// Add event listeners for prev/next buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    moveSlide(-1);
});

nextButton.addEventListener('click', () => {
    moveSlide(1);
});