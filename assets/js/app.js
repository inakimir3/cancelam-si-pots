document.addEventListener('DOMContentLoaded', () => {

    const clickSound = new Audio('./assets/music/click.wav');
    clickSound.volume = 1;

    const formButton = document.getElementById('formButton');
    const playButton = document.getElementById('playButton');
    const menuSection = document.getElementById('menu');
    const formSection = document.getElementById('form');

    const userNameInput = document.getElementById('userNameInput');
    const userNameDisplay = document.getElementById('userNameDisplay');

    formButton.onclick = () => {
        playClick();
        menuSection.style.display = 'none';
    };


    const seguidorsDisplay = document.getElementById('followersCount');
    const ingressosDisplay = document.getElementById('incomeCount');
    const needle = document.getElementById('needle');

    const option1Btn = document.getElementById('option1');
    const option2Btn = document.getElementById('option2');
    const optionsContainer = document.getElementById('options');

    const gameContainer = document.querySelector('#game article:nth-child(1)');

    let currentSituation = "1";
    let seguidors = 0;
    let ingressos = 0;
    let opinioPublica = 50;

    function playClick() {
        clickSound.currentTime = 0;
        clickSound.play();
    }


    function formatNumber(value) {
        if (value >= 1000000) {
            const num = value / 1000000;
            return Number.isInteger(num) ? num + 'M' : num.toFixed(1) + 'M';
        }
        if (value >= 1000) {
            const num = value / 1000;
            return Number.isInteger(num) ? num + 'k' : num.toFixed(1) + 'k';
        }
        return value;
    }

    function updateUI() {
        seguidorsDisplay.textContent = formatNumber(seguidors);
        ingressosDisplay.textContent = formatNumber(ingressos);

        const angle = (opinioPublica / 100) * 180 - 90;
        needle.style.transform = `rotate(${angle}deg)`;
    }



    function addNarradorCard(text) {
        const card = document.createElement('div');
        card.className = "col-span-3 col-start-2 c-card-narrador mt-4";
        card.textContent = text;

        gameContainer.appendChild(card);
        gameContainer.appendChild(optionsContainer);

        card.scrollIntoView({ behavior: 'smooth', block: 'end' });
        optionsContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    function addPublicationCard(text) {
        const card = document.createElement('div');
        card.className = "col-span-3 col-start-2 c-card-publicacio mt-2";
        card.innerHTML = `
            <div class="flex gap-4 items-center mb-5 text-[20px]">
                <img src="./assets/images/profile.png" class="w-[50px]">
                <span>${userNameDisplay.textContent}</span>
            </div>
            <div>${text}</div>`;

        gameContainer.appendChild(card);
        card.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    function renderSituation(id) {
        const situation = situacions[id];
        currentSituation = id;

        if (situation.final) {
            addNarradorCard(finals[situation.final]);
            optionsContainer.style.display = 'none';
            return;
        }

        addNarradorCard(situation.narrador);

        if (situation.impacte) {
            seguidors += situation.impacte.seguidors || 0;
            opinioPublica += situation.impacte.opinio || 0;
            opinioPublica = Math.max(0, Math.min(100, opinioPublica));
        }

        const keys = Object.keys(situation.opcions);
        option1Btn.textContent = situation.opcions[keys[0]].title;
        option2Btn.textContent = situation.opcions[keys[1]].title;

        option1Btn.onclick = () => chooseOption(keys[0]);
        option2Btn.onclick = () => chooseOption(keys[1]);

        optionsContainer.style.display = 'flex';
    }

    function chooseOption(type) {
        playClick();
        const situation = situacions[currentSituation];
        const selected = situation.opcions[type];

        addPublicationCard(selected.text || "");

        if (selected.next) {
            setTimeout(() => renderSituation(selected.next), 600);
        }

        if (selected.final) {
            addNarradorCard(finals[selected.final]);
            optionsContainer.style.display = 'none';
        }
    }

    playButton.onclick = () => {
        playClick();
        const name = userNameInput.value.trim();
        if (name) {
            userNameDisplay.textContent = name;
            document.getElementById('userNameDisplayCard').textContent = name;
        }

        formSection.style.display = 'none';

        renderSituation("1"); 
    };

    setInterval(updateUI, 100);
});
