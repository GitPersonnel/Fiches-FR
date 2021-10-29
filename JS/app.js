const BURGER_MENU = document.querySelector(".burger-menu")
const BARS = document.querySelectorAll(".bar")
const NAVIGATION = document.querySelector(".main-ul")

BURGER_MENU.addEventListener('click',()=>{

NAVIGATION.classList.toggle('active')
BARS.forEach(BAR => {
    BAR.classList.toggle("active")
});

})