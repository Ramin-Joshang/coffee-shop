// navbar item
var ul = document.querySelector('.header-list'); // Parent
ul.addEventListener('click', function(e) {
    const listItem = document.querySelectorAll(".list-item");
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.remove("active");

    }
    e.target.classList.add("active");
});

// responsive navbar

const navbarList = document.querySelector(".header-list");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".closeBtn");
const body = document.getElementsByTagName("body");

// open and close menu when user click on hamburgerBtn
hamburgerBtn.addEventListener("click", () => {
    navbarList.classList.add("showHide");
    closeBtn.style.display = "block"
    body[0].style.overflow = "hidden";
});

// close menu when user click on windows
closeBtn.addEventListener("click", () => {
    navbarList.classList.remove("showHide");
    closeBtn.style.display = "none"
    body[0].style.overflow = "auto";

})