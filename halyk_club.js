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

let menuOpen2 = document.querySelector('.menu-open2');
let menuClose2 = document.querySelector('.menu-close2');
let menu2 = document.querySelector('.menu2');

menuOpen2.addEventListener('click', function () {
    menu2.style.display = 'block';
    menuOpen2.style.display = 'none';
    menuClose2.style.display = 'block';
});

menuClose2.addEventListener('click', function () {
    menu2.style.display = 'none';
    menuOpen2.style.display = 'block';
    menuClose2.style.display = 'none';
});

