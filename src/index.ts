import './index.css';

import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});

import { swiperTeam } from '$utils/swiper';
window.Webflow ||= [];
window.Webflow.push(() => {
  swiperTeam();
});
