const burger = document.querySelector(".header__burger-svg");
const burgerActive = document.querySelector(".header__burger-svg--active");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");

burger.addEventListener("click", function (evt) {
  burger.classList.add("active");
  menu.classList.add("active");
  body.classList.add("lock");
});
burgerActive.addEventListener("click", function (evt) {
  burger.classList.remove("active");
  menu.classList.remove("active");
  body.classList.remove("lock");
});
/********************************************/
