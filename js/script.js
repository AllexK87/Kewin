const burger = document.querySelector('.header__icon');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu-open');
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('menu-open');
    const bars = document.querySelector('.ic-bars');
    bars.classList.toggle('ic-plus');
})