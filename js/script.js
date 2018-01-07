

function Go_to_login() {
  document.getElementById("logged-out").style.display = "none";
  document.getElementById("login").style.display = "block";
}


function Login() {
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
