alert[" This is the Portfolio of Faiz"]
const roles = ["Web Developer", "Game Developer", "JavaScript Enthusiast"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

if (!isDeleting && j <= roles[i].length) {
    current = roles[i].substring(0, j++);
}
else if (isDeleting && j >= 0) {
    current = roles[i].substring(0, j--);
}

typing.innerHTML = current;

if (j === roles[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
}

if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % roles.length;
}

setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();