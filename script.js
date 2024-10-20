const lightModeToggle = document.getElementById('light-mode-toggle');

lightModeToggle.addEventListener('click', () => {
    
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        lightModeToggle.textContent = 'Dark Mode';
    } else {
        lightModeToggle.textContent = 'Light Mode';
    }
});


const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
