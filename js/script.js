window.onload = function() {
  var header = document.querySelector("h1").innerHTML;

  if (header == "My watchlist" ||
      header == "My auctions"  ||
      header == "Add a new auction" ||
      header == "Profile") {
    Login();
  }


  $('#SliderAuctions').carousel({
      interval: 8000
  });

  var $heightSetter = $('.position');
  $('#SliderAuctions .carousel-control-prev').css("height", $heightSetter.height() + "px");
  $('#SliderAuctions .carousel-control-next').css("height", $heightSetter.height() + "px");

};


function Go_to_login() {
  document.getElementById("logged-out").style.display = "none";
  document.getElementById("login").style.display = "block";
}


function Login() {
  document.getElementById("logged-out").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("logged-in").style.display = "block";
}


function Logout() {
  document.getElementById("logged-in").style.display = "none";
  document.getElementById("logged-out").style.display = "block";
}

function Popular_switch() {
  document.getElementById("more-arrow").style.background = "url('images/carousel-pijltjes.png') 27px 0px";
}



(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();
