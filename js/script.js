// Burger menu
const burger = document.querySelector('.header__icon');

burger.addEventListener('click', function () {
    burger.classList.toggle('menu-open');
    const menu = document.querySelector('.header__menu');
    menu.classList.toggle('menu-open');
    const bars = document.querySelector('.ic-bars');
    bars.classList.toggle('ic-plus');
})

// Slaider works
const swiper = new Swiper('.works__slieder', {
    autoplay: {
        delay: 5000,
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 2.5,
        },
      },
})