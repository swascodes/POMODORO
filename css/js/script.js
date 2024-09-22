let timer;
let timeLeft;
let isPaused = false;

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const playBtn = document.getElementById('playBtn');
const resetBtn = document.getElementById('resetBtn');
const timeSelect = document.getElementById('timeSelect');
const congratsMessage = document.getElementById('congratsMessage');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
    if (isPaused) {
        isPaused = false; // Resume timer
        playBtn.style.display = 'none'; // Hide Play button
    } else {
        timeLeft = parseInt(timeSelect.value); // Initialize time
        timerDisplay.textContent = formatTime(timeLeft);
    }

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            showCongrats();
        } else {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true; // Set pause state
    clearInterval(timer);
    playBtn.style.display = 'inline-block'; // Show Play button
}

function resetTimer() {
    clearInterval(timer);
    isPaused = false;
    timeLeft = parseInt(timeSelect.value);
    timerDisplay.textContent = formatTime(timeLeft);
    congratsMessage.classList.remove('show');
    playBtn.style.display = 'none'; // Hide Play button
}

function showCongrats() {
    congratsMessage.classList.add('show');
    setTimeout(() => {
        congratsMessage.classList.remove('show');
    }, 3000);
}

// Event listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
playBtn.addEventListener('click', startTimer); 
