// Social media links
const socialLinks = {
    instagram: 'https://www.instagram.com/arsyahmlnaa?igsh=MXQ5MDcxbG41Nmtybw==',
    linkedin: 'https://www.linkedin.com/in/arsyah-maulana',
    github: 'https://github.com/ArsyahMaulana'
};

// Function to open links in new tab
function openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Add click event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Instagram link
    const instagramLink = document.getElementById('instagram-link');
    if (instagramLink) {
        instagramLink.addEventListener('click', function(e) {
            e.preventDefault();
            openLink(socialLinks.instagram);
        });
    }

    // LinkedIn link
    const linkedinLink = document.getElementById('linkedin-link');
    if (linkedinLink) {
        linkedinLink.addEventListener('click', function(e) {
            e.preventDefault();
            openLink(socialLinks.linkedin);
        });
    }

    // GitHub link
    const githubLink = document.getElementById('github-link');
    if (githubLink) {
        githubLink.addEventListener('click', function(e) {
            e.preventDefault();
            openLink(socialLinks.github);
        });
    }

    // Add hover effects
    const socialLinkElements = document.querySelectorAll('.social-link');
    socialLinkElements.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click animation
    socialLinkElements.forEach(link => {
        link.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px) scale(0.98)';
        });

        link.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
    });
});

// Optional: Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('social-link')) {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Console message for developers
console.log('👋 Halo! Profile card Arsyah Maulana telah dimuat.');
console.log('🔗 Social Links:', socialLinks);