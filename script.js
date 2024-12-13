const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = newYear - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        countdownElement.innerHTML = 'Happy New Year!';
    }
}

function showPreviewMessage() {
    alert('Happy New Year! Wishing you joy, health, and prosperity in the year ahead!');
}

setInterval(updateCountdown, 1000);

