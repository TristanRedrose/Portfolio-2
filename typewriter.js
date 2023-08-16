const dynamicText = document.getElementById('typewriter');
const words = ["self-taught", "driven", "constantly-improving"];
const colors = ["#555", "#0072b1", "orange"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let lastFrameTime = performance.now();

function typeEffect() {
    const currentTime = performance.now();
    const deltaTime = currentTime - lastFrameTime;
    let waitTime = 0;

    if (deltaTime > 50) {
        lastFrameTime = currentTime;

        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);

        dynamicText.textContent = currentChar;

        if (charIndex === 0) {
            dynamicText.style.borderColor = colors[wordIndex];
        }

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
        } else {
            isDeleting = !isDeleting;
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            dynamicText.style.color = colors[wordIndex];
            waitTime = 1200;
        }
    }

    if (waitTime) {
        setTimeout(() => {
            waitTime = 0;
            requestAnimationFrame(typeEffect);
        }, waitTime)
    } else {
        requestAnimationFrame(typeEffect);
    }
}

requestAnimationFrame(typeEffect);