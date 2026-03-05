const playerScripts = {
    "Player #10": "Coach, Player 10's sprint volume is 30% high. Suggest tactical positioning and reduced minutes in drills today.",
    "Player #7": "Warning: Player 7 is showing signs of moderate fatigue. Recommend a recovery session and monitoring heart rate variability.",
    "Player #3": "Player 3 is in optimal condition. Full participation in all high-intensity drills is cleared.",
    "Player #4": "Player 4 is maintaining steady progress. Continue with the current load management plan.",
    "Player #12": "Player 12 has recovered well. Ready for increased intensity in today's training."
};

document.addEventListener('DOMContentLoaded', () => {
    const riskCards = document.querySelectorAll('.risk-card');
    const aiScriptBody = document.querySelector('.ai-script-body');
    const aiScriptHeader = document.querySelector('.ai-script-header');

    riskCards.forEach(card => {
        card.addEventListener('click', () => {
            const playerName = card.querySelector('p')?.innerText || card.innerText;
            
            if (playerScripts[playerName]) {
                aiScriptHeader.innerText = `AI Script: ${playerName}`;
                aiScriptBody.innerText = playerScripts[playerName];
                
                riskCards.forEach(c => c.style.border = "none");
                card.style.border = "2px solid #3366ff";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.nav-item');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});