import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function goRight() {
  gsap.to('.box', {
    x: 200,
  });
}
