let menu = document.querySelector(".menu");
let modal = document.querySelector(".modal");
let modelclose = document.querySelector(".model-close");
let btnticket = document.querySelectorAll(".btn-ticket");
let navmobile = document.querySelector(".nav-mobile");
let slider = document.querySelector("#slider");
menu.addEventListener("click", () => {
  navmobile.classList.toggle("active");
});
btnticket.forEach(function (e) {
  e.addEventListener("click", function () {
    modal.style.display = "flex";
  });
});

modelclose.addEventListener("click", function () {
  modal.style.display = "none";
});
var index = 1;
function changeImg() {
  let img = [
    "./assets/img/slider/1.jpeg",
    "./assets/img/slider/2.jpeg",
    "./assets/img/slider/3.jpeg",
    "./assets/img/slider/4.jpeg",
  ];
  let textheading = document.querySelector(".text-heading");
  slider.style.backgroundImage = `url(${img[index]})`;
  let texttitle = ["Los Angeles", "Chicago", "Viet Nam", "Ha Noi"];
  textheading.textContent = texttitle[index];
  index++;
  if (index == img.length) {
    index = 0;
  }
}
slider.addEventListener("click", changeImg);
setInterval(changeImg, 3000);
