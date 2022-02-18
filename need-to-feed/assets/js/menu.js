
/* Set the width of the side navigation */
function openNav() {
  var x = document.getElementById("sidenav");
  if (window.matchMedia("(max-width: 400px)").matches) {
    x.style.width = "90%";
  } else {
    x.style.width = "307px";
  }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}
