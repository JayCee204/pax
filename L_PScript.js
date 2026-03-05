document.addEventListener('DOMContentLoaded', () => {
    
    const readinessElement = document.querySelector('.metric-card:nth-child(1) .card-value');
    const teamLoadElement = document.querySelector('.metric-card:nth-child(2) .card-value');

    
    animateValue(readinessElement, 0, randomScore, 1000);

    const btn = document.querySelector('.cta-button');
    btn.addEventListener('click', () => {
        btn.innerText = "LOADING DATA...";
        btn.style.backgroundColor = "#fff";
        setTimeout(() => {
            alert("Welcome to Lions Pride FC Analytics!");
            btn.innerText = "SMART RECOVERY START";
            btn.style.backgroundColor = "#C3F53C";
        }, 1000);
    });
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}