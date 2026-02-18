// ============================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// Modern animations and interactions
// ============================================

// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu before scrolling
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
            
            // Scroll to target
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = navMenu.style.display === 'flex';
        navMenu.style.display = isVisible ? 'none' : 'flex';
    });
}

// Close mobile menu when a link is clicked (only on mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && window.innerWidth <= 768) {
            navMenu.style.display = 'none';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.style.display === 'flex') {
        const isClickOnMenu = navMenu.contains(e.target);
        const isClickOnHamburger = hamburger && hamburger.contains(e.target);
        
        if (!isClickOnMenu && !isClickOnHamburger) {
            navMenu.style.display = 'none';
        }
    }
});

// PHOTO UPLOAD removed — static profile used instead

// ============================================

document.getElementById('downloadCV').addEventListener('click', function() {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to the CV file path
    // Make sure cv.pdf is in the same directory as index.html
    link.href = 'cv.pdf';
    
    // Set the download attribute to specify the filename
    link.download = 'Kamsini_Sivakuru_CV.pdf';
    
    // Append to body (required for Firefox)
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Remove the link from the DOM
    document.body.removeChild(link);
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that should fade in on scroll
document.querySelectorAll('.skill-card, .project-card, .stat-card, .contact-card').forEach(el => {
    el.classList.remove('fade-in');
    observer.observe(el);
});

// ============================================
// SKILL CARD EXPANDABLE
// ============================================

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const subSkills = card.querySelector('.sub-skills');
        if (subSkills.style.display === 'block') {
            subSkills.style.display = 'none';
        } else {
            // Close other open sub-skills
            document.querySelectorAll('.sub-skills').forEach(ul => {
                ul.style.display = 'none';
            });
            subSkills.style.display = 'block';
        }
    });
});

// ============================================
// NAVBAR STICKY EFFECT
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Add shadow effect on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.3)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current nav link
    if (current) {
        const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

// ============================================
// PARALLAX EFFECT (Subtle)
// ============================================

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ============================================
// HOVER 3D EFFECT ON SKILL CARDS
// ============================================

const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// ============================================
// RIPPLE EFFECT ON BUTTONS
// ============================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ============================================
// LAZY LOADING IMAGES (if added in future)
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #64ffda;
    color: #0a192f;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.4);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top on button click
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
    scrollToTopBtn.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.6)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 4px 15px rgba(100, 255, 218, 0.4)';
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// FORM VALIDATION (if contact form added)
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Here you would typically send the data to a server
        console.log('Form submitted with data:', Object.fromEntries(formData));
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ============================================
// DARK MODE TOGGLE (Optional)
// ============================================

// Create dark mode toggle button
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #64ffda;
    color: #0a192f;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.4);
`;

// Check for saved dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Dark mode toggle functionality
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ============================================
// CURSOR FOLLOWER (Optional)
// ============================================

const cursorDot = document.createElement('div');
cursorDot.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: #64ffda;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.5;
    display: none;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
`;

document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursorDot.style.display = 'block';
        cursorDot.style.left = (e.clientX - 5) + 'px';
        cursorDot.style.top = (e.clientY - 5) + 'px';
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%cWelcome to Kamsini Sivakuru\'s Portfolio! 👋', 'color: #64ffda; font-size: 16px; font-weight: bold;');
console.log('%cIf you\'re interested in collaborating, feel free to reach out!', 'color: #ccd6f6; font-size: 14px;');

// PROFILE PHOTO - static (no upload controls)
const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.style.cursor = 'default';
    // Ensure placeholder remains if no custom image is provided
    if (!profileImage.src || profileImage.src.trim() === '') {
        profileImage.src = 'https://via.placeholder.com/520x520.png?text=Profile';
    }
}

// ============================================
// TYPING ANIMATION FOR ROLE
// ============================================

const roles = ["Software Engineer Undergraduate", "Aspiring Web Developer Intern"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 20;
const deletingSpeed = 20;
const pauseTime = 2000;

const textElement = document.getElementById('text');

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    } else {
        textElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000); // Start after 1 second
});
