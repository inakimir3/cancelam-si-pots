document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.getElementById('formButton');
    const formSection = document.querySelector('#form');
    const playButton = document.getElementById('playButton');
    const menuSection = document.querySelector('#menu');

    const userNameInput = document.getElementById('userNameInput');
    const userNameDisplay = document.getElementById('userNameDisplay');

    formButton.addEventListener('click', () => {
        menuSection.style.display = 'none';
    });

    playButton.addEventListener('click', () => {
        const name = userNameInput.value.trim();

        if (name !== "") {
            userNameDisplay.textContent = name;
        }

        formSection.style.display = 'none';
    });
});
