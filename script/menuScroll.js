const menu = document.querySelectorAll(".list > li");

menu.forEach((list, i) => {
  list.addEventListener("click", () => {
    if (i === 3) {
      bodyWrapper.scrollTo({
        top: window.innerHeight * (i + 2),
        behavior: "smooth",
      });
    } else {
      bodyWrapper.scrollTo({
        top: window.innerHeight * (i + 1),
        behavior: "smooth",
      });
    }
    toGrey();
    toBlack(i);
  });
});

bodyWrapper.addEventListener("scroll", (e) => {
  let scrollPos = e.target.scrollTop;
  for (let i = 1; i <= menu.length; i++) {
    if (
      scrollPos >= window.innerHeight * 3 &&
      scrollPos < window.innerHeight * 5
    ) {
      toGrey();
      toBlack(2);
    } else if (scrollPos >= window.innerHeight * 5) {
      toGrey();
      toBlack(3);
    } else if (
      scrollPos >= window.innerHeight * i &&
      scrollPos < window.innerHeight * i + 1
    ) {
      toGrey();
      toBlack(i - 1);
    } else if (scrollPos < window.innerHeight) {
      toGrey();
    }
  }
});

function toGrey() {
  menu.forEach((list) => (list.style.color = "var(--grey)"));
}
function toBlack(i) {
  menu[i].style.color = "var(--black)";
}
