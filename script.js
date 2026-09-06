const openButton = document.getElementById("openButton");
const welcome = document.getElementById("welcome");
const letterPage = document.getElementById("letterPage");

const paper = document.getElementById("paper");
const penButton = document.getElementById("penButton");
const clickText = document.getElementById("clickText");
const letterText = document.getElementById("letterText");


/* =========================
   MESSAGE
========================= */

const message = `Joyeux anniversaire mon cœur ❤️

Tu viens d’avoir 18 ans… t’es grande maintenant. 🥹

Tu grandis super vite, mais tu resteras mon gosse pour l’éternité. ❤️

Je suis énormément fier de toi et de la personne que tu es devenue.

C’est pour ça que j’ai souhaité te le dire d’une manière un peu spéciale, avec ce site totalement dédié à toi, rien que pour toi.

J’espère vraiment que tu vas apprécier cette petite surprise…

Parce que ce n’est que le début. 🍒❤️`;


/* =========================
   ACCUEIL → LETTRE
========================= */

openButton.addEventListener("click", function () {

    welcome.style.animation = "fadeOut 0.8s ease forwards";

    setTimeout(function () {

        welcome.style.display = "none";

        letterPage.classList.remove("hidden");

    }, 800);

});


/* =========================
   CLIC SUR LA FEUILLE
========================= */

paper.addEventListener("click", function () {

    penButton.classList.remove("hidden");

    clickText.textContent = "Clique sur le stylo 🖊️";

});


/* =========================
   CLIC SUR LE STYLO
========================= */

penButton.addEventListener("click", function (event) {

    event.stopPropagation();

    penButton.classList.add("hidden");

    clickText.textContent = "";

    writeLetter();

});


/* =========================
   ÉCRITURE
========================= */

function writeLetter() {

    let index = 0;

    letterText.textContent = "";

    function typeWriter() {

        if (index < message.length) {

            letterText.textContent += message[index];

            index++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();

}
