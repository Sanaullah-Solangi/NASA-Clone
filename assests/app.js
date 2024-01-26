//!================= header search Bar =================
var searchBar = document.querySelector(".sideBar-btn");
console.log(searchBar);
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
