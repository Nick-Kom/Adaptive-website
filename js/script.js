menu.onclick = function myFunction() {
    var x = document.getElementById("myTopnav")
    var b = document.getElementById("menu");
    if (x.className === "topnav") {
        b.innerHTML = "&#9747;";
        x.className += " responsive";

    } else {
        x.className = "topnav";
        b.innerHTML = "&#9776;";
    }
}