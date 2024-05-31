import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperTeam() {
  new Swiper('.swiper', {
    direction: 'horizontal',
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 64, // variable
    centeredSlides: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    slideActiveClass: 'is-active',
    speed: 3000,
  });
}
