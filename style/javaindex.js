let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.scrollY > 615 && window.scrollY < 1330) {
    navbar.classList.add("nav-active");
    navbar.classList.remove("nav-second");
  } else if (window.scrollY > 1328) {
    navbar.classList.add("nav-second");
    document.getElementById("brand").style.display = "none";
  } else {
    navbar.classList.remove("nav-second");
    navbar.classList.remove("nav-active");
    document.getElementById("brand").style.display = "block";
  }
};
