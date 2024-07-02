import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperNft() {
  new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    slideActiveClass: 'is-active',
    speed: 1000,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });
}

export function swiperPepos() {
  new Swiper('.pepos-swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    loop: true,
    autoplay: {
      delay: 100, // délai de défilement en millisecondes (2000ms = 2s)
      disableOnInteraction: false, // continue l'autoplay après l'interaction de l'utilisateur
    },
    slideActiveClass: 'is-active',
    speed: 1000,
  });
}

export function swiperGoodies() {
  new Swiper('.goodies-swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    slideActiveClass: 'is-active',
    speed: 1000,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });
}
