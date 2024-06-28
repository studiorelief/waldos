import './index.css';

import {
  animatePhase2,
  animatePhase3,
  fromTo,
  hoverFooterLink,
  hoverFooterLinkInsta,
  hoverNavContainer,
  initScrollAnimation,
} from '$utils/gsap';
import { swiperNft, swiperPepos } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperNft();
  swiperPepos();
  fromTo();
  initScrollAnimation();
  hoverFooterLink();
  hoverFooterLinkInsta();
  animatePhase2();
  animatePhase3();
  hoverNavContainer();
});
