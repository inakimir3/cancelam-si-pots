// app.js

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
    const opinionText = document.getElementById('opinionText');

    const option1Btn = document.getElementById('option1');
    const option2Btn = document.getElementById('option2');
    const optionsContainer = document.getElementById('options');

    const hudIndicators = document.getElementById('hudIndicators');
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

    function showIndicator(text, type = "positive") {
        const indicator = document.createElement('div');
        indicator.className = `hud-indicator ${type}`;
        indicator.textContent = text;
        hudIndicators.appendChild(indicator);
        setTimeout(() => indicator.remove(), 1600);
    }

    function updateUI() {
        seguidorsDisplay.textContent = formatNumber(seguidors);
        ingressosDisplay.textContent = formatNumber(ingressos);

        const angle = (opinioPublica / 100) * 180 - 90;
        needle.style.transform = `rotate(${angle}deg)`;

        if (opinioPublica > 70) {
            opinionText.textContent = "El públic t'adora 🔥";
            opinionText.style.color = "#6ee7b7";
        } else if (opinioPublica > 40) {
            opinionText.textContent = "Opinió dividida 🤔";
            opinionText.style.color = "#fde68a";
        } else {
            opinionText.textContent = "En risc de cancel·lació ⚠️";
            opinionText.style.color = "#fca5a5";
        }
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
            applyImpact(situation.impacte);
        }

        const keys = Object.keys(situation.opcions);
        option1Btn.textContent = situation.opcions[keys[0]].title;
        option2Btn.textContent = situation.opcions[keys[1]].title;

        option1Btn.onclick = () => chooseOption(keys[0]);
        option2Btn.onclick = () => chooseOption(keys[1]);

        optionsContainer.style.display = 'flex';
        optionsContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    function applyImpact(impact) {
        if (impact.seguidors) {
            const val = impact.seguidors;
            seguidors += val;
            showIndicator(`${val > 0 ? '+' : ''}${formatNumber(val)} seguidors`, val > 0 ? "positive" : "negative");
        }
        if (impact.ingressos) {
            const val = impact.ingressos;
            ingressos += val;
            showIndicator(`${val > 0 ? '+' : ''}${formatNumber(val)} €`, val > 0 ? "positive" : "negative");
        }
        if (impact.opinio) {
            const val = impact.opinio;
            opinioPublica += val;
            opinioPublica = Math.max(0, Math.min(100, opinioPublica));
            showIndicator(`${val > 0 ? '+' : ''}${val} opinió`, val > 0 ? "positive" : "negative");
        }
    }

    function chooseOption(type) {
        playClick();
        const situation = situacions[currentSituation];
        const selected = situation.opcions[type];

        optionsContainer.style.display = 'none';
        addPublicationCard(selected.text || "");

        if (selected.impacte) applyImpact(selected.impacte);

        setTimeout(() => {
            if (selected.final) {
                addNarradorCard(finals[selected.final]);
                addTheoryButton();
            } else if (selected.next) {
                renderSituation(selected.next);
            }
        }, 800);
    }

    // --- EVENTS ---
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
