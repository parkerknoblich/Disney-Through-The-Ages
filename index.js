(function() {

    window.addEventListener("load", setUp);

    function setUp() {
        let selectionCircles = document.getElementsByClassName("selectionCircle");
        let introduction = document.getElementById("welcomeMessage");
        for (let i = 0; i < selectionCircles.length; i++) {
            selectionCircles[i].addEventListener("click", function() {
                introduction.style.display = "none";
            });
        }
    }

}) ();
