document.addEventListener('DOMContentLoaded', () => {
    createStars();
    animateStars();
});

function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

function animateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        setInterval(() => {
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
        }, 10000);
    });
}

// Add hover effect to menu items
const menuItems = document.querySelectorAll('.control-panel a');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.textShadow = 'none';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
