// Function to set the countdown timer manually
function setCountdown() {
  const inputDate = new Date(document.getElementById("countdownDate").value);
  countdownDate = inputDate.getTime();
  startCountdown();
}

// Set initial countdown date (for demonstration purposes)
let countdownDate = new Date().getTime() + (10 * 1000); // Set initial countdown to 10 seconds
let timerInterval;

// Start the countdown timer
function startCountdown() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Update immediately after setting
}

// Update the countdown timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  const timerDisplay = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById("timer").innerHTML = timerDisplay;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}

// Start the countdown on page load
startCountdown();
