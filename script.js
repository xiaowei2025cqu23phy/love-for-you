const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const heart = document.querySelector('.heart');
const container = document.getElementById('container');
const buttonsDiv = document.querySelector('.buttons');

// Make the 'No' button run away!
noBtn.addEventListener('mouseover', function() {
    // When the mouse hovers, we'll position the button absolutely
    noBtn.style.position = 'absolute';

    // Get the viewport dimensions
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Generate random coordinates within the screen bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button to the new coordinates
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Also make it move on touch devices to ensure it's unclickable
noBtn.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Prevent touch click
    noBtn.style.position = 'absolute';
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Handle the "Yes" button click
yesBtn.addEventListener('click', function() {
    // Hide buttons and change the text
    buttonsDiv.classList.add('hidden');
    question.innerHTML = '太好了！我就知道你也会答应的！<br>💕 永远爱你 💕';

    // Create lots of falling hearts (simple confetti effect)
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const conf = document.createElement('div');
        conf.innerHTML = '❤️';
        conf.style.position = 'absolute';

        // Random start position
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-20px'; // Start slightly off screen

        // Random size
        const size = Math.random() * 20 + 10;
        conf.style.fontSize = `${size}px`;

        // Random animation duration
        const duration = Math.random() * 3 + 2; // 2 to 5 seconds
        conf.style.animation = `fall ${duration}s linear forwards`;

        document.body.appendChild(conf);

        // Cleanup after animation finishes
        setTimeout(() => {
            conf.remove();
        }, duration * 1000);
    }
}

// Add falling animation dynamically to the page
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(110vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
