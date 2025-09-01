const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

const hamburgerClick = hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
