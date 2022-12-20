let menu = document.querySelector('.menu');

let menuOpen = document.querySelector('.menu-open');
let menuClose = document.querySelector('.menu-close');


menuOpen.addEventListener('click', function () {
    menu.style.display = 'block';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
});

menuClose.addEventListener('click', function () {
    menu.style.display = 'none';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
});
