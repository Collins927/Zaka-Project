const textSpan = document.getElementById("animated-text");
const textOptions = [
    "Frontend Developer",
    "Graphic Designer",
    "YouTuber",
    "Electronic Knitting Operator"
];

let currentIndex = 0;

function rotateText() {
    textSpan.classList.remove("highlight-text");
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % textOptions.length;
        textSpan.textContent = textOptions[currentIndex];
        textSpan.classList.add("highlight-text");
    }, 300); // Slight fade/reset effect
}

setInterval(rotateText, 3000);
