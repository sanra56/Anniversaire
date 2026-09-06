document.addEventListener("DOMContentLoaded", function () {

    const discover = document.getElementById("discover");

    const welcome = document.getElementById("welcome");

    const letterPage = document.getElementById("letter-page");

    const paper = document.getElementById("paper");

    const pen = document.getElementById("pen");

    const instruction = document.getElementById("instruction");

    const letterText = document.getElementById("letter-text");


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

    discover.addEventListener("click", function () {

        welcome.classList.add("hidden");

        letterPage.classList.remove("hidden");

    });


    /* =========================
       CLIC SUR LA FEUILLE
    ========================= */

    paper.addEventListener("click", function () {

        pen.classList.remove("hidden");

        instruction.textContent =
            "Clique sur le stylo 🖊️";

    });


    /* =========================
       CLIC SUR LE STYLO
    ========================= */

    pen.addEventListener("click", function (event) {

        event.stopPropagation();

        pen.classList.add("hidden");

        instruction.textContent = "";

        let index = 0;


        /* =========================
           ÉCRITURE PROGRESSIVE
        ========================= */

        function writeLetter() {

            if (index < message.length) {

                letterText.textContent += message[index];

                index++;

                setTimeout(writeLetter, 40);

            }

        }

        writeLetter();

    });

});
