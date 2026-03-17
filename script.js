// Elements
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letter-content');
const nextBtn = document.getElementById('nextBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const buttonsDiv = document.querySelector('.buttons');
const bgHeartsContainer = document.getElementById('bg-hearts');

// Sincere Letter Text
const textToType = `亲爱的，

从我们相遇的那一刻起，
我的世界就因为你而变得不同。

你的笑容，你的温柔，
你的一举一动都深深地吸引着我。

我花了很多心思做这个网页，
只是想用最特别的方式告诉你：
我喜欢你，很久了。

你想知道我接下来的问题吗？`;

let typingIndex = 0;
let typingSpeed = 100; // milliseconds per character

// Background Hearts
function createBgHearts() {
    const heartsCount = 20;
    for (let i = 0; i < heartsCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('bg-heart');
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
            bgHeartsContainer.appendChild(heart);

            // Infinite cleanup and recreate to save memory
            heart.addEventListener('animationend', () => {
                heart.remove();
                createSingleBgHeart();
            });
        }, i * 500); // Stagger creation
    }
}

function createSingleBgHeart() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    bgHeartsContainer.appendChild(heart);
    heart.addEventListener('animationend', () => {
        heart.remove();
        createSingleBgHeart();
    });
}

// Flow Logic
// Step 1: Open Envelope
envelope.addEventListener('click', () => {
    envelope.classList.add('opened');
    setTimeout(() => {
        switchScreen(screen1, screen2);
        setTimeout(typeLetter, 500); // Start typing after transition
    }, 800);
});

// Step 2: Type Letter
function typeLetter() {
    if (typingIndex < textToType.length) {
        letterContent.textContent += textToType.charAt(typingIndex);
        letterContent.classList.add('typing-cursor');
        typingIndex++;

        // Randomize typing speed slightly for realism
        let speed = typingSpeed;
        if (textToType.charAt(typingIndex - 1) === '，' || textToType.charAt(typingIndex - 1) === '。' || textToType.charAt(typingIndex - 1) === '\n') {
            speed += 400; // Pause at punctuation and newlines
        } else {
            speed += (Math.random() * 50 - 25);
        }

        setTimeout(typeLetter, speed);
    } else {
        letterContent.classList.remove('typing-cursor');
        nextBtn.classList.remove('hidden'); // Show Next button
    }
}

// Step 3: Go to Question
nextBtn.addEventListener('click', () => {
    switchScreen(screen2, screen3);
});

// Helper to switch screens
function switchScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    hideScreen.classList.add('hidden');

    setTimeout(() => {
        showScreen.classList.remove('hidden');
        showScreen.classList.add('active');
    }, 1000); // Wait for fade out
}


// The Playful "No" Button
function moveNoBtn() {
    noBtn.style.position = 'absolute';

    // Bounds check to keep button safely on screen
    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoBtn();
});

// The Success "Yes" Button
yesBtn.addEventListener('click', () => {
    buttonsDiv.classList.add('hidden');
    question.innerHTML = '太好了！这真的是我最开心的一天！<br>💕 余生请多指教 💕';
    question.style.fontSize = '2.5rem';
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const conf = document.createElement('div');
        conf.classList.add('confetti');

        // Mix of hearts and sparkles
        const shapes = ['❤', '✨', '💖'];
        conf.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];

        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-50px';

        const size = Math.random() * 20 + 15;
        conf.style.fontSize = `${size}px`;

        const duration = Math.random() * 4 + 3;

        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 200;

        conf.animate([
            { transform: 'translate3d(0,0,0) rotate(0deg)', opacity: 1 },
            { transform: `translate3d(${drift}px, 120vh, 0) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(.37,0,.63,1)',
            fill: 'forwards'
        });

        document.body.appendChild(conf);

        setTimeout(() => conf.remove(), duration * 1000);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 获取 DOM 元素
    const heart = document.querySelector('.heart');
    const message = document.querySelector('.message');
    const btn = document.querySelector('.love-btn');
    
    // 心跳动画
    function heartbeat() {
        heart.classList.add('pulse');
        setTimeout(() => {
            heart.classList.remove('pulse');
        }, 300);
    }
    
    // 定时心跳
    setInterval(heartbeat, 1000);
    
    // 按钮点击事件
    btn.addEventListener('click', function() {
        showMessage('❤️ 我爱你，永远永远 ❤️');
        createHearts();
    });
    
    // 显示消息
    function showMessage(text) {
        message.textContent = text;
        message.style.opacity = 1;
    }
    
    // 创建爱心雨
    function createHearts() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.textContent = '❤️';
                document.body.appendChild(heart);
                
                // 动画结束后移除
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 100);
        }
    }
});

// Initialize
createBgHearts();
