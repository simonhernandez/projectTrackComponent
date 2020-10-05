// Constants
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');

navToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
})