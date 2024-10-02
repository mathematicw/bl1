document.addEventListener('DOMContentLoaded', () => {
    createStars();
    animateStars();
    setupMenuInteractions();
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

function setupMenuInteractions() {
    const menuItems = document.querySelectorAll('.control-panel a');
    const contentBox = document.getElementById('content-box');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
            showContent(item.getAttribute('href'));
        });
        item.addEventListener('mouseleave', () => {
            item.style.textShadow = 'none';
        });
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showContent(item.getAttribute('href'));
        });
    });

    function showContent(id) {
        const content = getContent(id);
        if (content) {
            contentBox.innerHTML = content;
            contentBox.style.display = 'block';
            if (id === '#contact') {
                setupContactForm();
            }
        } else {
            contentBox.style.display = 'none';
        }
    }

    function getContent(id) {
        const contents = {
            '#about': `
                <h1>Greetings, Space Traveler</h1>
                <p>I'm an experienced node operator and blockchain aficionado hailing from Bangkok.</p>
                <p>My journey in the blockchain space has been nothing short of exhilarating. From the early days of Bitcoin to the emergence of cutting-edge protocols, I've witnessed the evolution of decentralized technologies firsthand. Each milestone, each breakthrough has deepened my appreciation for the transformative potential of blockchain and inspired me to contribute meaningfully to its advancement.</p>
            `,
            '#validator': `
                <h2>Validator in Multiple Blockchains</h2>
                <p>I've been a validator in various blockchain networks since their inception. My nodes operate smoothly and efficiently, ensuring that your staked tokens are secure and accessible at all times. With my nodes, you can trust that your investments are in safe hands.</p>
            `,
            '#community': `
                <h2>Community Engagement</h2>
                <p>I'm an active member of the blockchain community, always ready to lend a helping hand and share valuable insights.</p>
            `,
            '#transparency': `
                <h2>Transparency</h2>
                <p>I believe in transparency every step of the way.</p>
            `,
            '#security': `
                <h2>Security</h2>
                <ul>
                    <li>Encryption</li>
                    <li>Firewalls</li>
                    <li>Audits</li>
                    <li>MFA (Multi-factor Authentication)</li>
                    <li>Access Control</li>
                    <li>Distributed Architecture</li>
                    <li>Regular Updates</li>
                    <li>Incident Response Plan</li>
                    <li>Uninterrupted Power Supply</li>
                </ul>
                <p>Your security is my top priority!</p>
            `,
            '#faq': `
                <h2>FAQ: How to Stake Tokens in Different PoS Blockchains</h2>
                <p>Content for FAQ goes here.</p>
            `,
            '#contact': `
                <h2>Contact Us</h2>
                <form id="contact-form" action="${process.env.FORMSPREE_ENDPOINT}" method="POST">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                <div id="form-status"></div>
            `
        };
        return contents[id] || null;
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                formStatus.innerHTML = "Thanks for your submission!";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        formStatus.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.innerHTML = "Oops! There was a problem submitting your form";
                    }
                });
            }
        }).catch(error => {
            formStatus.innerHTML = "Oops! There was a problem submitting your form";
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
