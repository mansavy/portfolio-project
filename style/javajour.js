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
