const videoElement = document.getElementById('liveVideo');
const goLiveBtn = document.getElementById('goLiveBtn');
const stopBtn = document.getElementById('stopBtn');
const statusIndicator = document.getElementById('statusIndicator');
const logList = document.getElementById('logList');

let mediaStream = null;
let aiInterval = null;

async function startCamera() {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "environment" }, 
            audio: true 
        });
        
        videoElement.srcObject = mediaStream;

        goLiveBtn.classList.add('hidden');
        stopBtn.classList.remove('hidden');
        statusIndicator.classList.remove('hidden');
        
        logMessage("System: Connected to camera feed.");
        startAIAnalysis();

    } catch (err) {
        console.error("Error accessing camera: ", err);
        alert("Could not access camera. Please allow permissions.");
    }
}

function stopCamera() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        videoElement.srcObject = null;
    }

    clearInterval(aiInterval);

    stopBtn.classList.add('hidden');
    goLiveBtn.classList.remove('hidden');
    statusIndicator.classList.add('hidden');
    logMessage("System: Session ended.");
}

function startAIAnalysis() {
    logMessage("AI: Analyzing player formations...");
    
    const mockEvents = [
        "⚠️ High Press detected on left flank",
        "ℹ️ Player #14 fatigue level rising",
        "✅ Defensive line holding formation",
        "🚀 Counter-attack opportunity identified",
        "⚠️ Gap in midfield coverage"
    ];

    aiInterval = setInterval(() => {
        const randomEvent = mockEvents[Math.floor(Math.random() * mockEvents.length)];
        
        sendToCoachingStaff(randomEvent);
        
    }, 3000);
}

function sendToCoachingStaff(data) {
    const timestamp = new Date().toLocaleTimeString();
    logMessage(`[${timestamp}] Sent to Coaches: ${data}`);
}

function logMessage(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    logList.prepend(li);
}

goLiveBtn.addEventListener('click', startCamera);
stopBtn.addEventListener('click', stopCamera);