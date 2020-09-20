/*
let picture = document.querySelector('.pic1 img')
let popupWrapper = document.querySelector('.popup-wrapper')

let isAlreadyClicked = false

picture.addEventListener('click', () => {
    if (isAlreadyClicked === false) {
        popupWrapper.style.display = 'flex'
    } 
})

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none'
    isAlreadyClicked = true
})
*/

var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        lofin.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
        }
    }
});

mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
});

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
        }
    }
});