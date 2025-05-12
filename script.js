// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Gallery Images
const galleryImages = [
    {
        src: './images/hair cut 1.jpg',
        alt: 'Haircut Style 1'
    },
    {
        src: './images/female cut 2.jpg',
        alt: 'Haircut Style 2'
    },
    {
        src: './images/beard trim 3.jpg',
        alt: 'Beard Trim'
    },
    {
        src: './images/hair coloring 4.jpg',
        alt: 'Hair Coloring'
    },
    {
        src: './images/hair style5.jpg',
        alt: 'Hair Styling'
    },
    {
        src: './images/complete look 6.jpg',
        alt: 'Complete Look'
    }
];

// Load Gallery Images
const galleryGrid = document.querySelector('.gallery-grid');
galleryImages.forEach(image => {
    const imgElement = document.createElement('div');
    imgElement.className = 'gallery-item';
    imgElement.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" loading="lazy">
        <div class="gallery-overlay">
            <p>${image.alt}</p>
        </div>
    `;
    galleryGrid.appendChild(imgElement);
});

// Form Submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Show success message
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
    this.reset();
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('loaded');
    });
});

// Add CSS for gallery items
const style = document.createElement('style');
style.textContent = `
    .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 10px;
        cursor: pointer;
    }

    .gallery-item img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 1rem;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    }

    .gallery-item:hover img {
        transform: scale(1.1);
    }

    .gallery-item:hover .gallery-overlay {
        transform: translateY(0);
    }

    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style); 