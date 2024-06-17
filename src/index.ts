import './index.css';

import { fromTo, initScrollAnimation } from '$utils/gsap';
import { swiperNft, swiperPepos } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperNft();
  swiperPepos();
  fromTo();
  initScrollAnimation();
});
