import './index.css';

import {
  addHoverEffect,
  animateIntro,
  animatePhase2,
  animatePhase3,
  animateProgressBar,
  ctaShopParallax,
  hoverNavContainer,
  hoverSocialLink,
  initPeposHeroParallax,
  initWeedosCloudParallax,
  peposTokenParallax,
} from '$utils/gsap';
import { swiperGoodies, swiperNft, swiperPepos } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperNft();
  swiperPepos();
  swiperGoodies();
  hoverSocialLink();
  animatePhase2();
  animatePhase3();
  hoverNavContainer();
  animateProgressBar();
  initPeposHeroParallax();
  initWeedosCloudParallax();
  addHoverEffect();
  animateIntro();
  ctaShopParallax();
  peposTokenParallax();
});
