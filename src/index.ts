import './index.css';

import { goRight } from '$utils/gsap';
import { swiperTeam } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  swiperTeam();
  goRight();
});
