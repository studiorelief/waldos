import './index.css';

import {
  addHoverEffect,
  animateIntro,
  animateMobileProgressBar,
  animatePhase2,
  animatePhase3,
  animateProgressBar,
  ctaShopParallax,
  heroHomeParallax,
  hoverNavContainer,
  hoverSocialLink,
  PeposHeroParallax,
  peposTokenParallax,
} from '$utils/gsap';
import { swiperBook, swiperNft } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperNft();
  swiperBook;
  hoverSocialLink();
  animatePhase2();
  animatePhase3();
  hoverNavContainer();
  animateProgressBar();
  animateMobileProgressBar();
  heroHomeParallax();
  addHoverEffect();
  animateIntro();
  ctaShopParallax();
  peposTokenParallax();
  PeposHeroParallax();
});
