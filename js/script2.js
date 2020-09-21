var open1 = document.querySelector(".employment");
var open2 = document.querySelector(".press");
var open3 = document.querySelector(".business");
var click1 = document.querySelector(".cont-for1");
var click2 = document.querySelector(".cont-for2");
var click3 = document.querySelector(".cont-for3");


click1.addEventListener("click", function (event) {
    event.preventDefault();
    open1.classList.add("cont-open");
    click1.classList.add("cont-for-open");
});

click2.addEventListener("click", function (event) {
    event.preventDefault();
    open2.classList.add("cont-open");
    click2.classList.add("cont-for-open");
});

click3.addEventListener("click", function (event) {
    event.preventDefault();
    open3.classList.add("cont-open");
    click3.classList.add("cont-for-open");
});

open1.addEventListener("click", function (event) {
    event.preventDefault();
    open1.classList.remove("cont-open");
    click1.classList.remove("cont-for-open");
});

open2.addEventListener("click", function (event) {
    event.preventDefault();
    open2.classList.remove("cont-open");
    click2.classList.remove("cont-for-open");
});

open3.addEventListener("click", function (event) {
    event.preventDefault();
    open3.classList.remove("cont-open");
    click3.classList.remove("cont-for-open");
});