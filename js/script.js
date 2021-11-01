var ul = document.querySelector('.header-list'); // Parent
console.log(ul);
ul.addEventListener('click', function(e) {
    const listItem = document.querySelectorAll(".list-item");
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].classList.remove("active");

    }

    e.target.classList.add("active");
});