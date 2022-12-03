const menuMobile = document.querySelector(".menu");
const menuPage = document.querySelector("#menu_mobile > ul");
const menuList = document.querySelectorAll("#menu_mobile > ul > li");
const menuIcon = `<i class="fa-solid fa-bars"></i>`;
const xMark = `<i class="fa-solid fa-xmark"></i>`;
let currIcon;

menuMobile.addEventListener("click", () => {
  if (currIcon === xMark) {
    menuMobile.innerHTML = menuIcon;
    currIcon = menuIcon;
    menuPage.classList.remove("open");
  } else {
    menuMobile.innerHTML = xMark;
    currIcon = xMark;
    menuPage.classList.add("open");
  }
});

menuList.forEach((list, i) => {
  list.addEventListener("click", () => {
    if (i === 3) {
      bodyWrapper.scrollTo({
        top: window.innerHeight * (i + 2),
      });
    } else {
      bodyWrapper.scrollTo({
        top: window.innerHeight * (i + 1),
      });
    }
    menuMobile.innerHTML = menuIcon;
    currIcon = menuIcon;
    menuPage.classList.remove("open");
  });
});
