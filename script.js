// Set your app's launch date (YYYY-MM-DD)
const launchDate = new Date("2025-07-01").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = launchDate - now;

    // Time calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // Display
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Form submission (will enhance later)
document.querySelector('.notify-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thanks! We'll notify you at ${email} when we launch.`);
    e.target.reset();
});