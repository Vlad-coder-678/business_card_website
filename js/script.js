const burger = document.querySelector(".header__burger-svg");
const burgerActive = document.querySelector(".header__burger-svg--active");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const btnTop = document.getElementById("btn__top");

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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
btnTop.addEventListener("click", () => {
  scrollToTop();
});
function scrollToTop() {
  let diff = -window.scrollY / 20;
  if (Math.abs(diff) > 2) {
    window.scrollTo(0, window.scrollY + diff);
    clearTimeout(window._top);
    if (diff !== 0) {
      window._top = setTimeout(scrollToTop, 2); //чтобы изменить скорость, выбираем нужное время
    }
  }
}
