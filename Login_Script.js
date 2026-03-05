document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorDiv = document.getElementById('errorMessage');
    const toast = document.getElementById('successToast');
    const progress = document.querySelector('.toast-progress');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const user = document.getElementById('coachId').value;
            const pass = document.getElementById('password').value;
            const btn = document.getElementById('loginBtn');

            errorDiv.style.display = "none";
            errorDiv.innerText = "";

            if (user !== "C.Jesse") {
                errorDiv.innerText = "incorrect username";
                errorDiv.style.display = "block";
                return;
            }

            if (pass !== "jesse204") {
                errorDiv.innerText = "invalid password";
                errorDiv.style.display = "block";
                return;
            }

            btn.innerHTML = '<i class="fa-solid fa-gear fa-spin"></i> LOGGING IN...';
            btn.disabled = true;

            setTimeout(() => {
                toast.classList.add('show');
                if (progress) {
                    progress.style.transition = 'width 1.5s linear';
                    progress.style.width = '0%';
                }
            }, 500);

            setTimeout(() => {
                window.location.href = "index.HTML";
            }, 2000);
        });
    }

});
