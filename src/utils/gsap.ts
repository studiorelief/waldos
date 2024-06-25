import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Navbar - COMPONENTS
// Background-color Navbar at scroll down
export function initScrollAnimation() {
  const navigation = document.querySelector('.navigation');

  if (!navigation) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      gsap.to(navigation, { backgroundColor: 'rgba(112, 0, 255, 0.9)', duration: 0.5 });
    } else {
      gsap.to(navigation, { backgroundColor: 'rgba(112, 0, 255, 0.9)', duration: 0.5 });
    }
  });
}

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

// HOMEPAGE
// left to right Waldos character in Hero Section
gsap.to('.hero_introduce-picture', {
  x: '-2vw', // Déplacement de -2vw à droite
  duration: 3,
  yoyo: true, // back to initial statement
  repeat: -1, // loop
  ease: 'power1.inOut', // flow
});

// HOMEPAGE
// Progress bar - HOME PAGE
export function fromTo() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.nft_progress-line-content',
        start: 'top 40%', // When the top is 40% of the height of the screen
        end: 'top -30%', // When the top is -30% of the height of the screen
        scrub: true, // follow scroll
      },
    })
    .fromTo(
      '.progress-line_front',
      { width: 0, opacity: 0 }, // initial state
      { opacity: 1, width: '1%', duration: 1 } // opacity change at 1% width
    )
    .to(
      '.progress-line_front',
      { width: '100%', duration: 99 } // continue to 100% width
    );

  // Progress bar - Text animation 0 at 100 - HOME PAGE
  const obj = { count: 0 };
  gsap.fromTo(
    obj,
    { count: 0 }, // initial statement
    {
      count: 420,
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
}

// PEPOS PAGE
// Roadmap Ellipse - PEPOS PAGE
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

//PEPOS PAGE PHASE HEADING
// Fonction pour animer roadmap-phase2 lorsqu'il entre dans le viewport
export function animatePhase2() {
  const roadmapPhase2 = document.querySelector('#roadmap-phase2');

  if (roadmapPhase2) {
    gsap.fromTo(
      roadmapPhase2,
      { opacity: 0 }, // opacité initiale
      {
        opacity: 1, // opacité finale
        duration: 1, // durée de l'animation
        scrollTrigger: {
          trigger: roadmapPhase2,
          start: 'top 80%', // commence quand le haut est à 85% de la vue
          end: 'bottom 70%', // termine quand le bas est à 50% de la vue
          toggleActions: 'play none none none', // déclenche l'animation uniquement lorsqu'il entre dans la vue
          scrub: true, // suit le scroll
        },
      }
    );
  }
}

// PEPOS PAGE
// Animation picture on the TOP of road map section
export function animateRoadmapImages() {
  const images = document.querySelectorAll<HTMLImageElement>('.roadmap_grow-container img');

  if (images.length >= 3) {
    gsap.set(images, { opacity: 0 });

    const animateImages = () => {
      // Animate the first image to be visible immediately
      gsap.to(images[0], { opacity: 1, duration: 1 });

      // Animate the second image to appear 4 seconds later
      gsap.to(images[1], { opacity: 1, duration: 1, delay: 2 });

      // Animate the third image to appear 8 seconds later
      gsap.to(images[2], { opacity: 1, duration: 1, delay: 4 });
    };

    ScrollTrigger.create({
      trigger: images[0].parentElement, // Assuming the parent container triggers the animation
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        gsap.set(images, { opacity: 0 }); // Reset opacity
        animateImages(); // Start animations
      },
      onLeaveBack: () => gsap.set(images, { opacity: 0 }), // Hide images when scrolling back up
    });
  }
}

// Fonction pour animer roadmap-phase3 lorsqu'il entre dans le viewport
export function animatePhase3() {
  const roadmapPhase3 = document.querySelector('#roadmap-phase3');

  if (roadmapPhase3) {
    gsap.fromTo(
      roadmapPhase3,
      { opacity: 0 }, // opacité initiale
      {
        opacity: 1, // opacité finale
        duration: 1, // durée de l'animation
        scrollTrigger: {
          trigger: roadmapPhase3,
          start: 'top 80%', // commence quand le haut est à 85% de la vue
          end: 'bottom 70%', // termine quand le bas est à 50% de la vue
          toggleActions: 'play none none none', // déclenche l'animation uniquement lorsqu'il entre dans la vue
          scrub: true, // suit le scroll
        },
      }
    );
  }
}

// PEPOS PAGE
// Boat
const imgWrapperBoat = document.querySelector('.img-wrapper_boat');

if (imgWrapperBoat) {
  gsap.from(imgWrapperBoat, {
    x: '100%', // at the right screen
    opacity: 0,
    scale: 0.2, // start with smallest size
    duration: 2,
    scrollTrigger: {
      trigger: imgWrapperBoat,
      start: 'top 80%', // start when the top it's 80% of viewport
      end: 'top 60%', // end when the bottom it's 60% of viewport
      toggleActions: 'restart none none none', // Start when trigger is in viewport
    },
  });
}
