/*var navigationLinks = document.querySelectorAll(".navigation__link");

function underlineCurrentSectionName() {

    for (var i=0; i < navigationLinks.length; i++) {
        navigationLinks[i].addEventListener('click', function(){
            underlineCurrentSection(this);
        });
    }
    
    function underlineCurrentSection(currentLink) {
        for (var i=0; i < navigationLinks.length; i++) {
            navigationLinks[i].classList.remove('currentSection');
        }
    
        currentLink.classList.add('currentSection');
    };
}*/

/*underlineCurrentSectionName();

function navOnScroll() {
    window.addEventListener('scroll', function(){
        console.log("Scroll11");
        for (var i=0; i < navigationLinks.length; i++) {
            navigationLinks[i].classList.remove('currentSection');
        }; 
    });
}
navOnScroll();*/

window.addEventListener('scroll', (event) => {
    let nav = document.querySelector(".navigation");
    let windowPosition = window.scrollY > 0;

    nav.classList.toggle("scrolling-active", windowPosition);
});

const mobileNavigation = document.querySelector(".navigation__mobile");

mobileNavigation.addEventListener('click', (event) => {
    const mobileNavigation = document.querySelector('.navigation__mobile');
    const navigationList = document.querySelector('.navigation__list');
    const navigationLink = document.querySelectorAll(".navigation__link");

    mobileNavigation.classList.toggle("open");

    navigationList.classList.toggle("open");
    navigationLink.forEach(link => {
        link.classList.toggle("fade");
    })
})









