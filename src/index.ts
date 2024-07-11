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
  animateMobileProgressBar();
  initPeposHeroParallax();
  initWeedosCloudParallax();
  heroHomeParallax();
  addHoverEffect();
  animateIntro();
  ctaShopParallax();
  peposTokenParallax();
});
