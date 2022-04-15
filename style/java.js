function hide() {
  let button = document.querySelector(".more-button");
  button.style.display = "none";
}

function show() {
  let button = document.querySelector(".more-button");
  button.style.display = "block";
}

function hideWeb() {
  let button = document.querySelector(".web-more-button");
  button.style.display = "none";
}

function showWeb() {
  let button = document.querySelector(".web-more-button");
  button.style.display = "block";
}

let button = document.querySelector(".more-button");
button.addEventListener("click", hide);

let less = document.querySelector(".less-button");
less.addEventListener("click", show);

let buttonMore = document.querySelector(".web-more-button");
buttonMore.addEventListener("click", hideWeb);

let lessLess = document.querySelector(".web-less-button");
lessLess.addEventListener("click", showWeb);
