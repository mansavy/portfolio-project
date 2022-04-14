function hide() {
  let button = document.querySelector(".more-button");
  button.style.display = "none";
}

function show() {
  let button = document.querySelector(".more-button");
  button.style.display = "block";
}

let button = document.querySelector(".more-button");
button.addEventListener("click", hide);

let less = document.querySelector(".less-button");
less.addEventListener("click", show);
