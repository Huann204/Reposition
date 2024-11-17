let menu = document.querySelector(".menu");
let navmobile = document.querySelector(".nav-mobile");

menu.addEventListener("click", () => {
  navmobile.classList.toggle("active");
});
