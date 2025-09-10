const menuIconBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".mobile-view-menu ");

menuIconBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  closeBtn.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  closeBtn.classList.remove("show");
});
