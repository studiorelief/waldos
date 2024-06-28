import './index.css';

import {
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
import { swiperNft, swiperPepos } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperNft();
  swiperPepos();
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
});
