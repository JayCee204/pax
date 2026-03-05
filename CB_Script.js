function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user-message");
    input.value = "";

    setTimeout(() => {
        let response = chatbotReply(message);
        addMessage(response, "bot-message");
    }, 800);
}

function addMessage(text, className) {
    let chatBox = document.getElementById("chatBox");
    let msg = document.createElement("div");
    msg.className = className;
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function chatbotReply(userText) {
    userText = userText.toLowerCase();

    const responses = {
        "hello": "Hello! How can I assist you today coach?",
        "hi": "Greetings, Coach. P.A.X is ready.",
        "how are you": "I am functioning optimally and ready for use. What shall we begin with?",
        "Whats your name": "I am P.A.X, an advanced coaching assistant to prevent injury and improve game plays and wins.",
        "how can you help": "I can detect players fatigue before injury and give the best method on how to avoid it and majorly I analayse and provide formation and tactics for best results",
        "bye": "Goodbye! Have a great day.",
        "injury": "Scanning for injury risks... Player #19 is showing elevated fatigue.",
        "report": "Generating weekly performance report...",
    };

    for (let key in responses) {
        if (userText.includes(key)) {
            return responses[key];
        }
    }

    return "I'm still learning. Can you rephrase that?";
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            this.classList.add('active');
        });
    });
});