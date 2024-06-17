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
    autoplay: true,
    loop: true,
    slideActiveClass: 'is-active',
    speed: 1000,
  });
}
