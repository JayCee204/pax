document.getElementById('aiFileInput').addEventListener('change', function(e) {
    const fileName = e.target.files[0].name;
    runPAXEngine(fileName);
});

function runPAXEngine(file) {
    const welcome = document.getElementById('welcomeSection');
    const output = document.getElementById('analysisOutput');
    const loader = document.getElementById('aiProcessing');

    welcome.style.display = 'none';
    loader.style.display = 'flex';

    setTimeout(() => {
        loader.style.display = 'none';
        output.style.display = 'block';

        const reportHtml = `
            <div class="ai-response">
                <h3><i class="fa-solid fa-microchip"></i> Analysis Complete: ${file}</h3>
                <p>I have processed the biometrics. Here are the key workload ratios:</p>
                <table style="width:100%; border-collapse: collapse; margin-top: 15px;">
                    <tr style="color: #888; font-size: 0.8rem; text-align: left;">
                        <th style="padding: 10px;">ATHLETE</th>
                        <th>ACWR RATIO</th>
                        <th>STATUS</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">Marcus Rashford (#3)</td>
                        <td>1.17</td>
                        <td style="color: #C3F53C;">OPTIMAL</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">Bukayo Saka (#10)</td>
                        <td>1.63</td>
                        <td style="color: #ff4d4d;">HIGH DANGER</td>
                    </tr>
                </table>
                <p style="margin-top: 15px; font-size: 0.9rem; color: #888;">
                    <strong>Recommendation:</strong> Saka is in the danger zone (ACWR > 1.5). Reduce training intensity by 20% for the next 48 hours.
                </p>
            </div>
        `;
        output.innerHTML += reportHtml;
    }, 2500);
}