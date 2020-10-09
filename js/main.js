// Constants
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
var toggle = false;

function toggleImg(){
    
    if (toggle){
        navToggle.style.backgroundImage = "url(images/icon-hamburger.svg)"
    } else {
        navToggle.style.backgroundImage = "url(images/icon-close.svg)"
    }

    toggle = !toggle;
}

navToggle.addEventListener('click', () => {
    
    menu.classList.toggle('show');

    toggleImg();
})