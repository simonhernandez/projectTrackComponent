// Constants
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
const icon = document.getElementById('icon');

navToggle.addEventListener('click', () => {
    
    menu.classList.toggle('show');

    if (icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else if (icon.classList.contains('fa-times')){
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
})