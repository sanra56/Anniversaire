const openButton = document.getElementById("openButton");
const welcome = document.getElementById("welcome");
const letterPage = document.getElementById("letterPage");
const envelope = document.getElementById("envelope");

let envelopeStep = 0;


/* =========================
   BOUTON DÉCOUVRIR
========================= */

openButton.addEventListener("click", function () {

    welcome.style.animation = "fadeOut 0.8s ease forwards";

    setTimeout(function () {

        welcome.style.display = "none";

        letterPage.classList.remove("hidden");

    }, 800);

});


/* =========================
   OUVERTURE EN 3 CLICS
========================= */

envelope.addEventListener("click", function () {

    if (envelopeStep >= 3) {
        return;
    }

    envelopeStep++;

    envelope.classList.remove(
        "step-1",
        "step-2",
        "step-3"
    );

    envelope.classList.add(
        "step-" + envelopeStep
    );

});
