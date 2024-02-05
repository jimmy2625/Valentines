document.addEventListener("DOMContentLoaded", function() {

    var imgElement = document.querySelector(".container img");
    var h1 = document.querySelector(".container h1");
    var h2 = document.querySelector(".container h2");
    var yesButton = document.querySelector(".button.yes");
    var noButton = document.querySelector(".button.no")
    var body = document.body;

    yesButton.addEventListener("click", function() {
        imgElement.src = "cute.jpg";
        imgElement.width = 220;
        imgElement.height = 300;

        h1.textContent = "LUKSUS";
        h2.textContent = "Vi ses på bowlingbanen";

        body.style.backgroundImage = "url('crazy.gif')";
    });

    noButton.addEventListener("click", function() {
        imgElement.src = "guncat.gif";
        imgElement.width = 350;
        imgElement.height = 350;

        h1.textContent = "Mobis...";
        h2.textContent = "Prøv igen...";

        body.style.backgroundImage = "url('skull.png')";
    })
});