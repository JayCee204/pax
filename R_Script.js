const performanceData = [
            { name: "Marcus Rashford (#3)", acute: 480, chronic: 410 },
            { name: "Bukayo Saka   (#10)", acute: 620, chronic: 380 },
            { name: "Jude Bellingham (#4)", acute: 310, chronic: 300 },
            { name: "Erling Haaland   (#12)", acute: 550, chronic: 540 },
            { name: "Phil Foden (#7)", acute: 500, chronic: 400 }
        ];

        function initReports() {
            const tableBody = document.getElementById('athlete-table-body');
            tableBody.innerHTML = '';
            let totalRatio = 0;

            performanceData.forEach(player => {
                const ratio = (player.acute / player.chronic).toFixed(2);
                totalRatio += parseFloat(ratio);
                
                let statusLabel = "";
                let statusClass = "";
                if (ratio > 1.5) {
                    statusLabel = "High Danger";
                    statusClass = "bg-danger";
                } else if (ratio >= 1.2) {
                    statusLabel = "Fatigued";
                    statusClass = "bg-warning";
                } else {
                    statusLabel = "Optimal";
                    statusClass = "bg-success";
                }

                const row = `
                    <tr>
                        <td><strong>${player.name}</strong></td>
                        <td>${player.acute}</td>
                        <td>${player.chronic}</td>
                        <td>${ratio}</td>
                        <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            document.getElementById('stat-count').innerText = performanceData.length;
            document.getElementById('stat-acwr').innerText = (totalRatio / performanceData.length).toFixed(2);
        }

        function refreshData() {
            console.log("Fetching latest P.A.X. data...");
            initReports();
        }

        window.onload = initReports;