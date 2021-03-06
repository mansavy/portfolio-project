function hide() {
  let button = document.querySelector("#moreButton");
  button.style.display = "none";
}

function show() {
  let button = document.querySelector("#moreButton");
  button.style.display = "block";
}

function hideWeb() {
  let button = document.querySelector("#webMoreButton");
  button.style.display = "none";
}

function showWeb() {
  let button = document.querySelector("#webMoreButton");
  button.style.display = "block";
}

let button = document.querySelector("#moreButton");
button.addEventListener("click", hide);

let less = document.querySelector("#lessButton");
less.addEventListener("click", show);

let buttonMore = document.querySelector("#webMoreButton");
buttonMore.addEventListener("click", hideWeb);

let lessLess = document.querySelector("#webLessButton");
lessLess.addEventListener("click", showWeb);

let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.scrollY > 85) {
    navbar.classList.add("nav-second");
    document.getElementById("brand").style.display = "none";
  } else {
    navbar.classList.remove("nav-second");
    document.getElementById("brand").style.display = "block";
  }
};
