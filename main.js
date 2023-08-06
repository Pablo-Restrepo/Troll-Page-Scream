/* Toggle Button to Unmute the Video */

function toggleMute() {
    var video = document.getElementById('video');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

/* Delay Function to Add SetTimeOut After Defined Interval */

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/* Show Video Function to Add Display Property to Show the Video on Click of Button which will fulfilled User Interaction Needs to Browser to Run the Video with Unmute State */

function showVideo() {
    var element = document.getElementById('video');
    var button = document.getElementById('container');
    element.style.display = 'block';
    button.style.display = 'none';
    delay(100).then(() => toggleMute());
}

const fullscreenButton = document.getElementById('button');
const content = document.getElementById('container-video');

fullscreenButton.addEventListener('click', () => {
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.mozRequestFullScreen) { // Firefox
        content.mozRequestFullScreen();
    } else if (content.webkitRequestFullscreen) { // Chrome, Safari and Opera
        content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) { // Internet Explorer/Edge
        content.msRequestFullscreen();
    }
});

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        content.style.display = 'block';
    } else {
        content.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contadorElement = document.getElementById("contador");
    const mensajeElement = document.getElementById("recaptcha-container");
    const mensajeElementText = document.getElementById("text-captcha");

    let segundos = 3;

    function actualizarContador() {
        contadorElement.textContent = "Please allow up to " + segundos + " seconds...";
        segundos--;

        if (segundos < 0) {
            clearInterval(intervalo);
            contadorElement.style.display = "none";
            mensajeElement.style.display = "flex";
            mensajeElementText.style.display = "flex"
        }
    }

    actualizarContador();
    const intervalo = setInterval(actualizarContador, 1000);
});

