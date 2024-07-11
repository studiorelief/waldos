import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperNft() {
  new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 50, // variable
    slideActiveClass: 'is-active',
    speed: 1000,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
      // Paramètres pour les écrans d'ordinateur
      1024: {
        slidesPerGroup: 3,
      },
      // Paramètres pour les tablettes
      768: {
        slidesPerGroup: 1,
      },
      // Paramètres pour les téléphones
      0: {
        slidesPerGroup: 1,
      },
    },
  });
}

export function swiperPepos() {
  new Swiper('.pepos-swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 50, // variable
    loop: true,
    autoplay: {
      delay: 0, // délai de défilement en millisecondes (2000ms = 2s)
    },
    centeredSlides: false,
    slideActiveClass: 'is-active',
    speed: 1500,
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
