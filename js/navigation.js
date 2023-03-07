/* Open Sidenavigation */
var open = false

function openNav() {
    if (open != true) {
        document.getElementById("mySidenav").style.width = "250px";
        open = true;
    }
    else {
        closeNav();
        open = false;
    }
}

/* Close Sidenavigation */
function closeNav() {
    if (open) {
        document.getElementById("mySidenav").style.width = "0";
    }
}