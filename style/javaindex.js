let navbar = document.querySelector(".navbar");
window.onscroll = () => {
  if (window.scrollY > 650 && window.scrollY < 1350) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
