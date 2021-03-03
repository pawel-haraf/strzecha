document.addEventListener("DOMContentLoaded", function () {
  // slider
  const slider = document.querySelector(".slider__list");
  const sliderStage = document.querySelector(".slider__stage");
  const slides = document.querySelectorAll(".slider__list--item");
  const prev = document.querySelector(".slider__previous-arrow");
  const next = document.querySelector(".slider__next-arrow");

  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;
  let slidesNumber= slides.length - 1;

  function goToSlide(index) {
    if (index < 0) {
      index = slidesNumber;
    } else if (index > slidesNumber) {
      index =  0;
    }
    slider.style.left = index * (-slideWidth) + "px";
    currentIndex = index;
  }

  function slideToNext() {
    goToSlide(currentIndex + 1);

  }

  function slideToPrev() {
    goToSlide(currentIndex - 1);
  }

  prev.addEventListener("click", slideToPrev);
  next.addEventListener("click", slideToNext);

  function hello() {
    console.log("hello");
  }

  setInterval(slideToNext, 4000)
});
