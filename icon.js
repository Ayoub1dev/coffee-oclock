// animaion for hamburger menu from hamburger to X.
const icon = document.querySelector(".icon");
icon.addEventListener("click", function () {
    console.log("j");
    icon.classList.toggle("menu");
    icon.classList.toggle("close");
});

