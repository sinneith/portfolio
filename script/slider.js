const slider = document.querySelector(".content_wrapper");
const slides = document.querySelectorAll(".content_wrapper > li");
const prev = document.querySelector(".fa-chevron-left");
const next = document.querySelector(".fa-chevron-right");
let currIdx = 0;
let windowWidth = 0;
let slideWidth = 1200;
let slideCount = slides.length;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  resizer();
});

function resizer() {
  if (windowWidth > 1330) {
    slideWidth = 1200;
  } else if (windowWidth <= 1330 && windowWidth > 1200) {
    slideWidth = 1000;
  } else if (windowWidth <= 1200 && windowWidth > 1050) {
    slideWidth = 800;
  } else if (windowWidth <= 1050 && windowWidth > 860) {
    slideWidth = 700;
  } else if (windowWidth <= 860 && windowWidth > 770) {
    slideWidth = 600;
  } else if (windowWidth <= 770 && windowWidth > 620) {
    slideWidth = 400;
  }
  initFunc();
}
function makeClone() {
  let cloneSlideFirst = slides[0].cloneNode(true);
  let cloneSlideLast = slides[slides.length - 1].cloneNode(true);
  slider.insertBefore(cloneSlideLast, slider.firstChild);
  slider.appendChild(cloneSlideFirst);

  initFunc();
}
function initFunc() {
  let currSlides = document.querySelectorAll(".content_wrapper li");
  let currSlideCount = currSlides.length;
  slider.style.width = currSlideCount * slideWidth + "px";
  slider.style.left = -slideWidth + "px";
  currIdx = 1;
}
function moveSlide(num) {
  slider.style.left = -num * slideWidth + "px";
  slider.classList.add("animated");
  currIdx = num;

  if (currIdx === slideCount + 1) {
    setTimeout(() => {
      slider.classList.remove("animated");
      slider.style.left = -slideWidth + "px";
      currIdx = 1;
    }, 500);
  }

  if (currIdx === 0) {
    setTimeout(() => {
      slider.classList.remove("animated");
      slider.style.left = -(slideWidth * slideCount) + "px";
      currIdx = 5;
    }, 500);
  }
}

makeClone();
next.addEventListener("click", () => moveSlide(currIdx + 1));
prev.addEventListener("click", () => moveSlide(currIdx - 1));
