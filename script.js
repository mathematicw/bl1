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
    const dropdowns = document.querySelectorAll('.dropdown');

    // Hide all dropdown menus on page load
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.textShadow = 'none';
        });
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showContent(item.getAttribute('href'));
        });
    });

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        if (window.innerWidth > 768) {
            // Desktop behavior
            dropdown.addEventListener('mouseenter', () => {
                dropdownContent.style.display = 'block';
            });
            dropdown.addEventListener('mouseleave', () => {
                dropdownContent.style.display = 'none';
            });
        } else {
            // Mobile behavior
            dropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                        d.querySelector('.dropdown-content').style.display = 'none';
                    }
                });
                dropdown.classList.toggle('active');
                dropdownContent.style.display = dropdown.classList.contains('active') ? 'block' : 'none';
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            dropdown.querySelector('.dropdown-content').style.display = 'none';
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
                <p>We are a team of experienced node operators and blockchain aficionados from Bangkok.</p>
                <p>Our journey in blockchain space has been nothing short of exhilarating. From the early days of Bitcoin to the emergence of cutting-edge protocols, we've witnessed the evolution of decentralized technologies firsthand. Each milestone, each breakthrough has deepened our appreciation for the transformative potential of blockchain and inspired us to contribute meaningfully to its advancement.</p>
            `,
            '#validator': `
                <h2>Validator Hardware Specifications</h2>
                <h3>Mainnet Node</h3>
                <ul>
                    <li>CPU: Intel Core i7-7700</li>
                    <li>RAM: 64 GB</li>
                    <li>Storage: 1TB NVMe SSD with RAID1 configuration</li>
                </ul>
                <h3>Testnet Nodes</h3>
                <ul>
                    <li>CPU: AMD Ryzen 9 5950X</li>
                    <li>RAM: 128 GB</li>
                    <li>Storage: 2TB NVMe SSD</li>
                </ul>
                <p></p>
                <ul>
                    <li>CPU: AMD Ryzen 7</li>
                    <li>RAM: 64 GB</li>
                    <li>Storage: 1TB NVMe SSD RAID1</li>
                </ul>
                <p>All our mainnet and testnet validators are housed in Tier 3 data centers with 24/7 monitoring, ensuring 99.998% uptime and optimal performance for your staked assets. Our hardware and redundant systems guarantee reliable and efficient validation services for your blockchain needs.</p>
            `,
            '#community': `
                <h2>Community Engagement</h2>
                <p>We're active members of the blockchain community, always ready to lend a helping hand and share valuable insights.</p>
            `,
            '#transparency': `
                <h2>Transparency</h2>
                <p>We believe in the way towards adequate transparency.</p>
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
                <p>Your security is our top priority!</p>
            `,
            '#faq': `
                <h2>FAQ: How to Stake Tokens in Different PoS Blockchains</h2>
                <p>Content for FAQ goes here.</p>
            `,
            '#contact': `
                <h2>Contact Us</h2>
                <form id="contact-form" action="https://formspree.io/f/xqkvazvk" method="POST">
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

    if (!form) {
        console.error('Contact form not found in the DOM');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        fetch(this.action, {
            method: 'POST',
            body: new FormData(this),
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
            console.error('Error submitting form:', error);
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

// Call setupMenuInteractions on page load and window resize
window.addEventListener('load', setupMenuInteractions);
window.addEventListener('resize', setupMenuInteractions);
