const openButton = document.getElementById("openButton");

const welcome = document.getElementById("welcome");

const letterPage = document.getElementById("letterPage");

const envelope = document.getElementById("envelope");


/* BOUTON "DÉCOUVRIR" */

openButton.addEventListener("click", function () {

    welcome.style.animation = "fadeOut 0.8s ease forwards";

    setTimeout(function () {

        welcome.style.display = "none";

        letterPage.classList.remove("hidden");

    }, 700);

});


/* OUVRIR L'ENVELOPPE */

envelope.addEventListener("click", function () {

    if (!envelope.classList.contains("open")) {

        envelope.classList.add("open");

    }

});
