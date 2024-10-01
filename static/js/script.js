// Create stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        starsContainer.appendChild(star);
    }
}

// Create planets
function createPlanets() {
    const starsContainer = document.querySelector('.stars');
    const planetCount = 3;
    const colors = ['#ff6b6b', '#4ecdc4', '#45aaf2'];

    for (let i = 0; i < planetCount; i++) {
        const planet = document.createElement('div');
        planet.classList.add('planet');
        planet.style.width = `${Math.random() * 50 + 20}px`;
        planet.style.height = planet.style.width;
        planet.style.backgroundColor = colors[i];
        planet.style.left = `${Math.random() * 100}%`;
        planet.style.top = `${Math.random() * 100}%`;
        planet.style.animationDuration = `${Math.random() * 20 + 10}s`;
        starsContainer.appendChild(planet);
    }
}

// Create space station
function createSpaceStation() {
    const starsContainer = document.querySelector('.stars');
    const spaceStation = document.createElement('div');
    spaceStation.classList.add('space-station');
    spaceStation.style.left = '-100px';
    spaceStation.style.top = `${Math.random() * 50 + 25}%`;
    starsContainer.appendChild(spaceStation);

    // Animate space station
    let position = -100;
    const animate = () => {
        position += 0.5;
        spaceStation.style.left = `${position}px`;
        if (position > window.innerWidth + 100) {
            position = -100;
            spaceStation.style.top = `${Math.random() * 50 + 25}%`;
        }
        requestAnimationFrame(animate);
    };
    animate();
}

// Initialize cosmic background
function initCosmicBackground() {
    createStars();
    createPlanets();
    createSpaceStation();
}

// Run initialization when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCosmicBackground);
