const BURGER_MENU = document.querySelector(".burger-menu")
const BARS = document.querySelectorAll(".bar")
const NAVIGATION = document.querySelector(".main-ul")

BURGER_MENU.addEventListener('click',()=>{

NAVIGATION.classList.toggle('active')
BARS.forEach(BAR => {
    BAR.classList.toggle("active")
});

})
SECTIONS.forEach(SECTION => {
    SECTION.addEventListener('click',()=>{
        if(NAVIGATION.classList.contains('active')){
            NAVIGATION.classList.remove('active')
            BARS.forEach(BAR => {
                BAR.classList.toggle("active")
            });
        }
    })
});

BURGER_MENU.addEventListener('touch',()=>{

    NAVIGATION.classList.toggle('active')
    BARS.forEach(BAR => {
        BAR.classList.toggle("active")
    });
    
    })
    
    SECTIONS.forEach(SECTION => {
        SECTION.addEventListener('click',()=>{
            if(NAVIGATION.classList.contains('active')){
                NAVIGATION.classList.remove('active')
                BARS.forEach(BAR => {
                    BAR.classList.toggle("active")
                });
            }
        })
    });
