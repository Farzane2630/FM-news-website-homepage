const menuIconOpenBtn = document.querySelector(".menu-icon-open-btn");
const menuIconCloseBtn = document.querySelector(".menu-icon-close-btn");
const mobileMenu = document.querySelector(".navbar");

menuIconOpenBtn.addEventListener("click", () => {
  const state = menuIconOpenBtn.getAttribute("aria-expanded") === "false";

  menuIconOpenBtn.setAttribute("aria-expanded", state);
  mobileMenu.classList.add("expanded");
  menuIconOpenBtn.style.display="none"
});

menuIconCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("expanded");
  menuIconOpenBtn.style.display="flex"

});
