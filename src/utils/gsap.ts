import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimation() {
  // Background-color Navbar at scroll down
  const navigation = document.querySelector('.navigation');

  if (!navigation) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      gsap.to(navigation, { backgroundColor: 'rgba(112, 0, 255, 0.9)', duration: 0.5 });
    } else {
      gsap.to(navigation, { backgroundColor: 'transparent', duration: 0.5 });
    }
  });
}

export function fromTo() {
  // Progress bar
  gsap.fromTo(
    '.progress-line_front',
    { width: 0 }, //initial statement
    {
      width: '100%',
      duration: 100,
      scrollTrigger: {
        trigger: '.nft_progress-line-content',
        start: 'top 40%', // When the top it's 40% of height screen
        end: 'top -30%', // When the top it's -30% of height screen
        scrub: true, // follow scroll
      },
    }
  );

  // Text animation 0 at 100
  const obj = { count: 0 };
  gsap.fromTo(
    obj,
    { count: 0 }, //initial statement
    {
      count: 100,
      duration: 100,
      scrollTrigger: {
        trigger: '.nft_progress-line-content',
        start: 'top 40%', // When the top it's 40% of viewport
        end: 'top -30%', // When the top it's -30% of viewport
        scrub: true, // follow scroll
      },
      onUpdate: function () {
        const progressText = document.querySelector('.progress_anime-text');
        if (progressText instanceof HTMLElement) {
          progressText.innerText = Math.round(obj.count).toString();
        }
      },
    }
  );

  // Roadmap Ellipse
  const roadmapEllipses = document.querySelectorAll<HTMLDivElement>('.roadmap_ellipse');
  roadmapEllipses.forEach((div) => {
    gsap.fromTo(
      div,
      { width: '2rem', height: '2rem' }, //initial size
      {
        width: '6rem',
        height: '6rem', // final size
        scrollTrigger: {
          trigger: div,
          start: 'top 85%', //  start when the top it's 85% of viewport
          end: 'bottom 50%', // end when the bottom it's 40% of viewport
          scrub: true, // follow scroll
        },
      }
    );
  });
}

// Roadmap Text
const roadmapTextContents = document.querySelectorAll<HTMLDivElement>('.roadmap_text-content');
roadmapTextContents.forEach((div) => {
  gsap.fromTo(
    div,
    { width: '2rem', height: '2rem' }, //initial size
    {
      width: '6rem',
      height: '6rem', // final size
      scrollTrigger: {
        trigger: div,
        start: 'top 85%', //  start when the top it's 85% of viewport
        end: 'bottom 50%', // end when the bottom it's 40% of viewport
        scrub: true, // follow scroll
      },
    }
  );
});

// Animation de l'élément img-wrapper_boat
const imgWrapperBoat = document.querySelector('.img-wrapper_boat');

if (imgWrapperBoat) {
  gsap.from(imgWrapperBoat, {
    x: '100%', // at the right screen
    opacity: 0,
    scale: 0.2, // start with smallest size
    duration: 2,
    scrollTrigger: {
      trigger: imgWrapperBoat,
      start: 'top 80%', //  start when the top it's 80% of viewport
      end: 'top 60%', // end when the bottom it's 60% of viewport
      toggleActions: 'restart none none none', // Start when trigger is in viewport
    },
  });
}
