// start js
let list = document.querySelector(".list");
let menu = document.querySelector(".menu");
let x = document.querySelector(".x");

x.onclick = function () {
  x.parentElement.classList.remove("open");
  x.parentElement.classList.add("hidden");
  x.classList.add("md:hidden");
  document.body.style.backgroundColor = "white";
};
menu.onclick = function () {
  list.classList.remove("hidden");
  x.classList.remove("md:hidden");
  list.classList.add("open");
  document.body.style.backgroundColor = "rgba(0,0,0,.6)";
};
  