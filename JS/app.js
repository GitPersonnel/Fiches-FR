const BURGER_MENU = document.querySelector(".burger-menu")
const BARS = document.querySelectorAll(".bar")
const NAVIGATION = document.querySelector(".main-ul")
const SECTIONS = document.querySelectorAll('section')


function change(){
    NAVIGATION.classList.toggle('active')
BARS.forEach(BAR => {
    BAR.classList.toggle("active")
});
}
function close(){
    if(NAVIGATION.classList.contains('active')){
        NAVIGATION.classList.remove('active')
        BARS.forEach(BAR => {
            BAR.classList.toggle("active")
        });
    }
}
BURGER_MENU.addEventListener('click',()=>{
    change()
})
BURGER_MENU.addEventListener('touch',()=>{
    change()
})

SECTIONS.forEach(SECTION => {
    SECTION.addEventListener('click',()=>{
       close()
    })
    SECTION.addEventListener('touch',()=>{
        close()
     })
});
