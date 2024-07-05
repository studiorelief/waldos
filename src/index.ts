import './index.css';

import {
  addHoverEffect,
  animateIntroElements,
  animatePhase2,
  animatePhase3,
  animateProgressBar,
  heroHomeParallax,
  hoverFooterLink,
  hoverFooterLinkInsta,
  hoverNavContainer,
  initPeposHeroParallax,
  initWeedosCloudParallax,
  scrollNavbar,
} from '$utils/gsap';
import { swiperGoodies, swiperNft, swiperPepos } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperNft();
  swiperPepos();
  swiperGoodies();
  scrollNavbar();
  hoverFooterLink();
  hoverFooterLinkInsta();
  animatePhase2();
  animatePhase3();
  hoverNavContainer();
  animateProgressBar();
  initPeposHeroParallax();
  initWeedosCloudParallax();
  heroHomeParallax();
  addHoverEffect();
  animateIntroElements();
});
