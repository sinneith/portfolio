const bodyWrapper = document.querySelector(".body_wrapper");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const mouseScroll = document.getElementById("scroll");

bodyWrapper.addEventListener("scroll", (e) => {
  let scrollPos = e.target.scrollTop;
  if (scrollPos >= window.innerHeight) {
    scrollTopBtn.style.opacity = 1;
    mouseScroll.style.opacity = 0;
  } else {
    scrollTopBtn.style.opacity = 0;
  }
});

scrollTopBtn.addEventListener("click", () => {
  bodyWrapper.scrollTo({ top: 0, behavior: "smooth" });
});
