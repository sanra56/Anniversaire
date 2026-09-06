document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("app");


    /*
    ========================================
    CRÉATION DE LA FEUILLE
    ========================================
    */

    const paper = document.createElement("div");

    paper.className = "paper";


    /*
    ========================================
    CONTENU DE LA FEUILLE
    ========================================
    */

    const content = document.createElement("div");

    content.className = "paper-content";


    const title = document.createElement("h1");

    title.textContent = "Une lettre pour toi ❤️";


    const text = document.createElement("p");

    text.textContent = "";


    content.appendChild(title);

    content.appendChild(text);

    paper.appendChild(content);

    app.appendChild(paper);


    /*
    ========================================
    MESSAGE
    ========================================
    */

    const message = `Joyeux anniversaire mon cœur ❤️

Tu viens d’avoir 18 ans… t’es grande maintenant. 🥹

Tu grandis super vite, mais tu resteras mon gosse pour l’éternité. ❤️

Je suis énormément fier de toi et de la personne que tu es devenue.

C’est pour ça que j’ai souhaité te le dire d’une manière un peu spéciale, avec ce site totalement dédié à toi, rien que pour toi.

J’espère vraiment que tu vas apprécier cette petite surprise…

Parce que ce n’est que le début. 🍒❤️`;


    /*
    ========================================
    INSTRUCTION
    ========================================
    */

    const instruction = document.createElement("div");

    instruction.className = "instruction";

    instruction.textContent = "Clique sur la lettre 💌";

    app.appendChild(instruction);


    /*
    ========================================
    CLIC SUR LA FEUILLE
    ========================================
    */

    paper.addEventListener("click", function () {

        instruction.textContent = "Clique sur le stylo 🖊️";


        /*
        Création du bouton stylo
        */

        const pen = document.createElement("button");

        pen.className = "pen";

        pen.textContent = "🖊️";

        app.appendChild(pen);


        /*
        ========================================
        CLIC SUR LE STYLO
        ========================================
        */

        pen.addEventListener("click", function (event) {

            event.stopPropagation();

            pen.remove();

            instruction.textContent = "";

            text.textContent = "";

            let position = 0;


            /*
            ========================================
            ÉCRITURE PROGRESSIVE
            ========================================
            */

            function writeText() {

                if (position < message.length) {

                    text.textContent += message[position];

                    position++;

                    setTimeout(writeText, 35);

                }

            }

            writeText();

        });

    });

});
