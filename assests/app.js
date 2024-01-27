//!================= header side Bar =================
let header = document.querySelector(".header");
let searchBar = document.querySelector(".sideBar-btn");
let menuBar = document.querySelector(".menu-bar");
console.log(menuBar);
searchBar.addEventListener("click", () => {
  header.classList.toggle("show-sideBar");
});

menuBar.addEventListener("click", () => {
  header.classList.toggle("show-sideBar");
});

//!================= header Sub Menu =================
let linkWrapper = document.querySelectorAll(".link-wrapper");
let subMenu = document.querySelector(".subMenu");
let wrapperOne = document.querySelector(".wrapper-one");
let wrapperTwo = document.querySelector(".wrapper-two");

linkWrapper.forEach((val) => {
  val.addEventListener("click", () => {
    val.classList.toggle("show");
  });
});

wrapperOne.addEventListener("click", () => {
  wrapperTwo.classList.remove("show");
});

wrapperTwo.addEventListener("click", () => {
  wrapperOne.classList.remove("show");
});
