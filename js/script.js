const fefuWindow = document.getElementById("fefu-window");
const fefuOpen = document.getElementById("fefu-open");
const fefuClose = document.getElementById("fefu-close");

const silenceWindow = document.getElementById("silence-window");
const silenceOpen = document.getElementById("silence-open");
const silenceClose = document.getElementById("silence-close");

fefuOpen.onclick = function() {
    fefuWindow.style.display = "block";
}

fefuClose.onclick = function() {
    fefuWindow.style.display = "none";
}

silenceOpen.onclick = function() {
    silenceWindow.style.display = "block";
}

silenceClose.onclick = function() {
    silenceWindow.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === fefuWindow) {
        fefuWindow.style.display = "none";
    }
    if (event.target === silenceWindow) {
        silenceWindow.style.display = "none";
    }
}

function mobileMenu() {
    const menu = document.getElementById("site-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
