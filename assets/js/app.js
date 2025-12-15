document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const menuSection = document.querySelector('section#menu');


    playButton.addEventListener('click', () => {
        menuSection.style.display = 'none';
    });
});