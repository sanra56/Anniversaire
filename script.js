const button = document.getElementById("openButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {

    message.classList.remove("hidden");

    button.textContent = "❤️";

    button.disabled = true;

});
