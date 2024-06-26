import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Navbar - COMPONENTS
// Background-color Navbar at scroll down
export function scrollNavbar() {
  const navigation = document.querySelector('.navigation') as HTMLElement;

  if (!navigation) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      gsap.to(navigation, {
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(112, 0, 255, 0.8)',
        duration: 0.5,
      });
    } else {
      gsap.to(navigation, {
        backdropFilter: 'none',
        backgroundColor: 'rgba(112, 0, 255, 0.8)',
        duration: 0.5,
      });
    }
  });
}

// Navbar - COMPONENTS
// Hover on Navlinks
export function hoverNavContainer() {
  const containers = document.querySelectorAll('.nav-link-container');

  containers.forEach((container) => {
    // Enregistrer l'état initial de chaque conteneur
    const initialStyles = {
      backgroundColor: getComputedStyle(container).backgroundColor || 'var(--background-primary)',
      borderRadius: getComputedStyle(container).borderRadius || '0px',
      boxShadow: getComputedStyle(container).boxShadow || 'none',
      scale: 1, // État initial de l'échelle
    };

    container.addEventListener('mouseenter', () => {
      gsap.to(container, {
        backgroundColor: '#5400bf',
        borderRadius: '30px',
        boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2)',
        scale: 1.1, // Augmente légèrement la taille
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      });
    });

    container.addEventListener('mouseleave', () => {
      gsap.to(container, {
        backgroundColor: 'var(--background-primary)', // Utiliser la variable CSS
        borderRadius: initialStyles.borderRadius,
        boxShadow: initialStyles.boxShadow,
        scale: initialStyles.scale, // Revenir à la taille initiale
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
}

// Footer - COMPONENTS
// Hover on Social Network Logo - FOOTER
export function hoverFooterLink() {
  const footerLinks = document.querySelectorAll<HTMLDivElement>('.footer_link');

  footerLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.2, duration: 0.2, ease: 'bounce.out' });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, duration: 0.5, ease: 'bounce.out' });
    });
  });
}

// Footer - COMPONENTS
// Hover on Instagram Logo
export function hoverFooterLinkInsta() {
  const footerLinks = document.querySelectorAll<HTMLDivElement>('.is-instagram');

  footerLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.2, rotate: -90, duration: 0.2, ease: 'power1.in' });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, rotate: 0, duration: 0.5, ease: 'bounce.out' });
    });
  });
}

//HOME PAGE
// Progress bar
export function animateProgressBar() {
  const progressLineFront = document.querySelector('.progress-line_front') as HTMLElement;

  if (progressLineFront) {
    gsap.set(progressLineFront, { width: '100%', opacity: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.nft_progress-line-content',
          start: 'top 40%',
          end: 'top -30%',
          scrub: true,
        },
      })
      .to(progressLineFront, {
        width: '0%', // Fin à 0%
        duration: 1, // Durée de l'animation
        ease: 'power3.inOut', // Lissage doux
        onUpdate: function () {
          // Vérifiez si la largeur est à 0% et supprimez le box-shadow
          const currentWidth = window.getComputedStyle(progressLineFront).width;
          if (currentWidth === '0px') {
            progressLineFront.style.boxShadow = 'none';
          }
        },
      });
  }
}

// Progress bar - Text animation 0 at 100 - HOME PAGE
const obj = { count: 0 };
gsap.fromTo(
  obj,
  { count: 420 }, // initial statement
  {
    count: 0,
    duration: 100,
    scrollTrigger: {
      trigger: '.nft_progress-line-content',
      start: 'top 40%',
      end: 'top -30%',
      scrub: true,
    },
    onUpdate: function () {
      const progressText = document.querySelector('.progress_anime-text');
      if (progressText instanceof HTMLElement) {
        progressText.innerText = Math.round(obj.count).toString();
      }
    },
  }
);

// PEPOS PAGE
// Roadmap Ellipse
const roadmapSteps = document.querySelectorAll<HTMLDivElement>('.roadmap_step');
roadmapSteps.forEach((step) => {
  const ellipse = step.querySelector('.roadmap_ellipse');
  const img = ellipse?.querySelector('img');
  const textContent = step.querySelector('.roadmap_text-content');

  if (ellipse) {
    gsap.fromTo(
      ellipse,
      { width: '2rem', height: '2rem' }, // initial size
      {
        width: '6rem',
        height: '6rem', // final size
        scrollTrigger: {
          trigger: ellipse,
          start: 'top 85%', // start when the top is 85% of viewport
          end: 'bottom 50%', // end when the bottom is 50% of viewport
          scrub: true, // follow scroll
        },
      }
    );
  }

  if (img) {
    gsap.fromTo(
      img,
      { opacity: 0 }, // initial opacity
      {
        opacity: 1, // final opacity
        scrollTrigger: {
          trigger: ellipse,
          start: 'top 85%', // start when the top is 85% of viewport
          end: 'bottom 50%', // end when the bottom is 50% of viewport
          scrub: true, // follow scroll
        },
      }
    );
  }

  if (textContent) {
    gsap.fromTo(
      textContent,
      { opacity: 0 }, // initial opacity
      {
        opacity: 1, // final opacity
        scrollTrigger: {
          trigger: ellipse,
          start: 'top 85%', // start when the top is 85% of viewport
          end: 'bottom 50%', // end when the bottom is 50% of viewport
          scrub: true, // follow scroll
        },
      }
    );
  }
});

//PEPOS PAGE - PHASE & GROW DRAWING
// Fonction pour animer roadmap-phase2 et grow2 lorsqu'ils entrent dans le viewport
export function animatePhase2() {
  const roadmapPhase2 = document.querySelector('#roadmap-phase2');
  const grow2 = document.querySelector('#grow2');

  if (roadmapPhase2 && grow2) {
    const elements = [roadmapPhase2, grow2];

    gsap.fromTo(
      elements,
      { opacity: 0 }, // opacité initiale
      {
        opacity: 1, // opacité finale
        duration: 1,
        scrollTrigger: {
          trigger: roadmapPhase2,
          start: 'top 80%',
          end: 'bottom 70%',
          toggleActions: 'play none none none', // déclenche l'animation uniquement lorsqu'il entre dans la vue
          scrub: true,
        },
      }
    );
  }
}

// Fonction pour animer roadmap-phase3 & grow3 lorsqu'il entre dans le viewport
export function animatePhase3() {
  const roadmapPhase3 = document.querySelector('#roadmap-phase3');
  const grow3 = document.querySelector('#grow3');

  if (roadmapPhase3 && grow3) {
    const elements = [roadmapPhase3, grow3];
    gsap.fromTo(
      elements,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: roadmapPhase3,
          start: 'top 80%',
          end: 'bottom 70%',
          toggleActions: 'play none none none', // déclenche l'animation uniquement lorsqu'il entre dans la vue
          scrub: true,
        },
      }
    );
  }
}

// PEPOS PAGE
// Boat
const imgWrapperBoat = document.querySelector('.img-wrapper_boat');
if (imgWrapperBoat) {
  // Initial position offscreen to the right
  gsap.set(imgWrapperBoat, { x: '100%' });

  // Animation to move the boat from right to left
  gsap.to(imgWrapperBoat, {
    x: '0', // move to the left of the screen
    ease: 'power1.out', // smoothing the animation
    scrollTrigger: {
      trigger: imgWrapperBoat,
      start: 'top 60%', // start when the top it's 75% of viewport
      end: 'top 50%', // end when the top it's 70% of viewport
      scrub: true, // smooth follow with the scroll
      markers: false, // show markers for debugging
    },
  });
}

//PEPOS PAGE
//Parallax hero
export function initPeposHeroParallax() {
  const peposHero5 = document.querySelector('#pepos-hero5') as HTMLElement;
  if (peposHero5) {
    gsap.to(peposHero5, {
      y: '300', // move up by 300px
      ease: 'power1.out', // effect
      scrollTrigger: {
        trigger: '.hero_image-wrapper',
        start: 'top 120',
        end: '100%',
        scrub: true, // smooth catch-up with the scroll
        markers: false, // show markers for debugging
      },
    });
  }
  // Parallax effect for #pepos-hero4
  const peposHero4 = document.querySelector('#pepos-hero4') as HTMLElement;
  if (peposHero4) {
    gsap.to(peposHero4, {
      y: '200',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.hero_image-wrapper',
        start: 'top 120',
        end: '100%',
        scrub: true,
      },
    });
  }
  // Parallax effect for #pepos-hero4
  const peposHero3 = document.querySelector('#pepos-hero3') as HTMLElement;
  if (peposHero3) {
    gsap.to(peposHero3, {
      y: '150',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.hero_image-wrapper',
        start: 'top 120',
        end: '100%',
        scrub: true,
      },
    });
  }
}

//Weedos Header - Parallax
export function initWeedosCloudParallax() {
  const weedosCloud = document.querySelector('#weedos-cloud') as HTMLElement;
  if (weedosCloud) {
    gsap.to(weedosCloud, {
      y: '300', // move up by 300px
      ease: 'power1.inOut', // easing for a smooth effect
      scrollTrigger: {
        trigger: weedosCloud,
        start: 'top 150', // start when the top of the wrapper hits the top of the viewport
        end: '100%', // end when the bottom of the viewport is reached
        scrub: true, // smooth catch-up with the scroll
      },
    });
  }
  const weedosCloud1 = document.querySelector('#weedos-cloud1') as HTMLElement;
  if (weedosCloud) {
    gsap.to(weedosCloud1, {
      y: '100', // move up by 300px
      ease: 'power1.inOut', // easing for a smooth effect
      scrollTrigger: {
        trigger: weedosCloud,
        start: 'top 150', // start when the top of the wrapper hits the top of the viewport
        end: '100%', // end when the bottom of the viewport is reached
        scrub: true, // smooth catch-up with the scroll
      },
    });
  }
}

//HOME PAGE
//HEADER HERO - PARALLAX
export function heroHomeParallax() {
  const heroImg1 = document.querySelector('#hero-img1') as HTMLElement;
  if (heroImg1) {
    gsap.to(heroImg1, {
      y: '400', // move up by 300px
      ease: 'power1.out', // easing effect
      scrollTrigger: {
        trigger: '.hero-img1-wrapper', // Ajustez ce sélecteur pour correspondre à la div contenant #hero-img1
        start: 'top+=100 top', // commence 100px après que le haut de l'élément déclencheur atteint le haut de la vue
        end: 'bottom+=200 top', // termine 200px après que le bas de l'élément déclencheur atteint le haut de la vue
        scrub: true, // smooth catch-up with the scroll
        markers: true, // show markers for debugging
      },
    });
  }

  const heroImg2 = document.querySelector('#hero-img2') as HTMLElement;
  if (heroImg2) {
    gsap.to(heroImg2, {
      y: '350',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.hero-img2-wrapper',
        start: 'top+=100 top',
        end: 'bottom+=200 top',
        scrub: true,
        markers: true,
      },
    });
  }

  const heroImg3 = document.querySelector('#hero-img3') as HTMLElement;
  if (heroImg3) {
    gsap.to(heroImg3, {
      y: '300',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.hero-img3-wrapper',
        start: 'top+=100 top',
        end: 'bottom+=200 top',
        scrub: true,
        markers: true,
      },
    });
  }

  const heroImg4 = document.querySelector('#hero-img4') as HTMLElement;
  if (heroImg4) {
    gsap.to(heroImg4, {
      y: '250',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.hero-img4-wrapper',
        start: 'top+=100 top',
        end: 'bottom+=200 top',
        scrub: true,
      },
    });
  }

  const heroImg5 = document.querySelector('#hero-img5') as HTMLElement;
  if (heroImg5) {
    gsap.to(heroImg5, {
      y: '150',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.hero-img5-wrapper',
        end: 'bottom+=200 top',
        scrub: true,
      },
    });
  }
}
