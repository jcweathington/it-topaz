/* Set the width of the side navigation */
function openNav() {
    var x = document.querySelector(".menu");
    if (window.matchMedia("(max-width: 400px)").matches) {
      x.style.width = "90%";
    } 
   else {
      x.style.width = "307px";
    }
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.querySelector(".menu").style.width = "0"; 
  }


// Alternate Configuation Options Here https://accessible360.github.io/accessible-slick/#demos 

$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 7000
    });


});
