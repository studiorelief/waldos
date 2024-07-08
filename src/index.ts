import './index.css';

import {
  addHoverEffect,
  animateIntro,
  animatePhase2,
  animatePhase3,
  animateProgressBar,
  ctaShopParallax,
  heroHomeParallax,
  hoverFooterLink,
  hoverFooterLinkInsta,
  hoverNavContainer,
  initPeposHeroParallax,
  initWeedosCloudParallax,
  peposTokenParallax,
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
  animateIntro();
  ctaShopParallax();
  peposTokenParallax();
});
