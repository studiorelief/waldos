import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function nameAnim() {
  // Scale effect
  gsap.set('.class', { scale: 0.3, rotation: 0 });

  gsap.to('.class', {
    scrollTrigger: {
      markers: false,
      trigger: '.class',
      start: '-50% 25%',
      end: '10% 25%',
      scrub: true,
    },
    scale: 1,
    duration: 2,
    ease: 'linear',
  });
}
