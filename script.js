document.addEventListener('DOMContentLoaded', () => {
    const timerHours = document.getElementById('hours');
    const timerMinutes = document.getElementById('minutes');
    const timerSeconds = document.getElementById('seconds');
    const showcaseCard = document.getElementById('showcaseCard');
    const notifyBtn = document.getElementById('notifyBtn');
    const emailInput = document.getElementById('email');
    const emailStatus = document.getElementById('emailStatus');

    let countdownDate = new Date().getTime() + 1 * 1 * 60 * 1000; // 2 hours from now

    // Countdown Timer
    const countdown = setInterval(() => {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerHours.textContent = hours.toString().padStart(2, '0');
        timerMinutes.textContent = minutes.toString().padStart(2, '0');
        timerSeconds.textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.launch-page').style.display = 'none';
            showcaseCard.style.display = 'block';
        }
    }, 1000);

    // Email Validation
    emailInput.addEventListener('input', () => {
        const email = emailInput.value;
        if (validateEmail(email)) {
            notifyBtn.disabled = false;
            emailStatus.textContent = '';
        } else {
            notifyBtn.disabled = true;
            emailStatus.textContent = 'Invalid email address';
        }
    });

    notifyBtn.addEventListener('click', () => {
        if (validateEmail(emailInput.value)) {
            emailStatus.textContent = 'Email is valid';
            notifyBtn.disabled = true;
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

  
    document.getElementById('ctaBtn').addEventListener('click', () => {
        window.location.href = 'launch.html';
    });
});
