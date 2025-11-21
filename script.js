document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const menuSection = document.querySelector('section.menu');


    startButton.addEventListener('click', () => {
        menuSection.style.display = 'none';
    });
});