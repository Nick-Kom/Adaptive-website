hamburgerMenu.onclick = function myFunction() {
    var x = document.getElementById("navMenu")
    var b = document.getElementById("hamburgerMenu");
    if (x.className === "nav-menu") {
        b.innerHTML = "&#9747;";
        x.className += " responsive";

    } else {
        x.className = "nav-menu";
        b.innerHTML = "&#9776;";
    }
}