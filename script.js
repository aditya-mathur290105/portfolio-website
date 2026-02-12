// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// 1. Check if user has a saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

// 2. Toggle Theme on Click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// 3. Helper to change the icon (Moon <-> Sun)
function updateIcon(theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Form Submission (Simple Alert)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});