document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createPlanets();
    animateCosmicObjects();
});

function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        starsContainer.appendChild(star);
    }
}

function createPlanets() {
    const planetsContainer = document.querySelector('.planets');
    const planetColors = ['#ff6b6b', '#4ecdc4', '#45aaf2', '#fed330'];
    
    for (let i = 0; i < 3; i++) {
        const planet = document.createElement('div');
        planet.classList.add('planet');
        planet.style.left = `${Math.random() * 90 + 5}%`;
        planet.style.top = `${Math.random() * 90 + 5}%`;
        planet.style.backgroundColor = planetColors[Math.floor(Math.random() * planetColors.length)];
        planet.style.width = `${Math.random() * 30 + 10}px`;
        planet.style.height = planet.style.width;
        planetsContainer.appendChild(planet);
    }
}

function animateCosmicObjects() {
    const stars = document.querySelectorAll('.star');
    const planets = document.querySelectorAll('.planet');

    stars.forEach(star => {
        star.style.animation = `twinkle ${Math.random() * 3 + 1}s infinite alternate`;
    });

    planets.forEach(planet => {
        planet.style.animation = `rotate ${Math.random() * 100 + 50}s linear infinite`;
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
