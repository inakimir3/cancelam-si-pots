document.addEventListener('DOMContentLoaded', () => {

    // --- ÀUDIO ---
    const clickSound = new Audio('./assets/music/click.wav');
    clickSound.volume = 1;

    // --- ELEMENTS DEL DOM ---
    const formButton = document.getElementById('formButton');
    const playButton = document.getElementById('playButton');
    const menuSection = document.getElementById('menu');
    const formSection = document.getElementById('form');

    const userNameInput = document.getElementById('userNameInput');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userNameDisplayCard = document.getElementById('userNameDisplayCard');

    const seguidorsDisplay = document.getElementById('followersCount');
    const ingressosDisplay = document.getElementById('incomeCount');
    const needle = document.getElementById('needle');

    const option1Btn = document.getElementById('option1');
    const option2Btn = document.getElementById('option2');
    const optionsContainer = document.getElementById('options');

    const gameContainer = document.querySelector('#game article:nth-child(1)');

    // --- VARIABLES D'ESTAT ---
    let currentSituation = "1";
    let seguidors = 0;
    let ingressos = 0;
    let opinioPublica = 50;

    // --- FUNCIONS AUXILIARS ---
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

    // --- COMPONENTS VISUALS ---
    function addNarradorCard(text) {
        const card = document.createElement('div');
        card.className = "col-span-3 col-start-2 c-card-narrador mt-6";
        card.innerHTML = text;
        gameContainer.appendChild(card);
        gameContainer.appendChild(optionsContainer);
        card.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    function addPublicationCard(text) {
        const now = new Date();
        const timeStr = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');
        const dateStr = now.getDate() + " de gen. de 2026";
        
        // Simulem mètriques basades en seguidors reals per donar realisme
        const likes = formatNumber(Math.floor(seguidors * 0.08) + Math.floor(Math.random() * 50));
        const rts = formatNumber(Math.floor(seguidors * 0.02) + Math.floor(Math.random() * 10));

        const card = document.createElement('div');
        card.className = "col-span-3 col-start-2 c-card-publicacio mt-4";
        card.innerHTML = `
            <div class="tweet-header">
                <img src="./assets/images/profile.png" class="tweet-pfp">
                <div class="tweet-user-info">
                    <span class="tweet-name">${userNameDisplay.textContent}</span>
                    <span class="tweet-handle">@${userNameDisplay.textContent.toLowerCase().replace(/\s/g, '_')}</span>
                </div>
            </div>
            <div class="tweet-content">${text}</div>
            <div class="tweet-metrics">
                <span class="metric-item"><b>${rts}</b> Retweets</span>
                <span class="metric-item"><b>${likes}</b> M'agrada</span>
            </div>
        `;

        gameContainer.appendChild(card);
        card.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    function addTheoryButton() {
        const btn = document.createElement('button');
        btn.textContent = "VEURE TEORIA";
        btn.className = "col-span-3 col-start-2 mt-10 px-10 py-4 bg-white text-sky-900 font-bold cursor-pointer hover:bg-sky-100 transition duration-300 block mx-auto border-2 border-sky-900 mb-20";
        btn.onclick = () => { window.location.href = 'teoria.html'; };
        gameContainer.appendChild(btn);
        btn.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    // --- LÒGICA DE JOC ---
    function renderSituation(id) {
        const situation = situacions[id];
        if (!situation) return;
        currentSituation = id;

        if (situation.final) {
            addNarradorCard(finals[situation.final]);
            optionsContainer.style.display = 'none';
            addTheoryButton();
            return;
        }

        addNarradorCard(situation.narrador);

        if (situation.impacte) {
            seguidors += situation.impacte.seguidors || 0;
            opinioPublica += situation.impacte.opinio || 0;
            ingressos += situation.impacte.ingressos || 0;
            opinioPublica = Math.max(0, Math.min(100, opinioPublica));
        }

        const keys = Object.keys(situation.opcions);
        option1Btn.textContent = situation.opcions[keys[0]].title;
        option2Btn.textContent = situation.opcions[keys[1]].title;

        option1Btn.onclick = () => chooseOption(keys[0]);
        option2Btn.onclick = () => chooseOption(keys[1]);

        optionsContainer.style.display = 'flex';
        optionsContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    function chooseOption(type) {
        playClick();
        const situation = situacions[currentSituation];
        const selected = situation.opcions[type];

        optionsContainer.style.display = 'none';
        addPublicationCard(selected.text || "");

        if (selected.impacte) {
            seguidors += selected.impacte.seguidors || 0;
            opinioPublica += selected.impacte.opinio || 0;
            ingressos += selected.impacte.ingressos || 0;
            opinioPublica = Math.max(0, Math.min(100, opinioPublica));
        }

        setTimeout(() => {
            if (selected.final) {
                addNarradorCard(finals[selected.final]);
                addTheoryButton();
            } else if (selected.next) {
                renderSituation(selected.next);
            }
        }, 800);
    }

    formButton.onclick = () => {
        playClick();
        menuSection.style.display = 'none';
    };

    playButton.onclick = () => {
        playClick();
        const name = userNameInput.value.trim() || "Usuari Anònim";
        userNameDisplay.textContent = name;
        userNameDisplayCard.textContent = name;
        formSection.style.display = 'none';
        document.querySelectorAll('.initial-card').forEach(el => el.style.display = 'none');
        renderSituation("1"); 
    };

    setInterval(updateUI, 100);
});