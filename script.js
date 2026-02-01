let musicStarted = false;
let noButtonActive = false;

// Navigate to Yes page
function nextPage() {
    
    window.location.href = "yes.html";
    
}

// First click on No → start music, change GIF, change header, then start moving button
function firstNoClick() {
    if (!musicStarted) {
        // 1️⃣ Play music
        const music = document.getElementById("bgMusic");
        music.play();
        musicStarted = true;

        // 2️⃣ Change GIF
        const gif = document.getElementById("valentineGif");
        gif.src = "https://i.gifer.com/r86.gif"; // new GIF

        // 3️⃣ Change header text
        const header = document.getElementById("headerText");
        header.textContent = "PLEASEEEEEEE 👉👈"; // new text

        // 4️⃣ Enable No button to start dodging
        const noBtn = document.getElementById("noButton");
        noButtonActive = true;

        // Replace click with hover/touch for future dodging
        noBtn.addEventListener('onclick', moveButton);
        noBtn.addEventListener('mouseover', moveButton);
        noBtn.addEventListener('touchstart', moveButton);
    }
}

// Move the No button randomly
function moveButton() {
    if (!noButtonActive) return;

    const noBtn = document.getElementById("noButton");

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

