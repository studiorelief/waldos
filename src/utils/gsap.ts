import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Navbar - COMPONENTS
// Background-color Navbar at scroll down
export function initScrollAnimation() {
  const navigation = document.querySelector('.navigation') as HTMLElement;

  if (!navigation) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      gsap.to(navigation, {
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(112, 0, 255, 0.8)', // Utilisation directe de la couleur avec opacité
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

// HOMEPAGE
// Déplacer le personnage de Waldos dans la section Hero
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  const direction = st > lastScrollTop ? 1 : -1; // 1 pour down, -1 pour up
  lastScrollTop = st <= 0 ? 0 : st;

  if (direction === 1) {
    // Scroll down
    gsap.to('.hero_introduce-picture', {
      x: '2rem', // Déplacement de 1vw à droite
      duration: 0.8, // Durée de l'animation
      ease: 'power2.inOut', // Flow
    });
  } else {
    // Scroll up
    gsap.to('.hero_introduce-picture', {
      x: '-2rem', // Revenir à la place initiale
      duration: 0.8, // Durée de l'animation
      ease: 'power2.inOut', // Flow
    });
  }
});

// HOMEPAGE
// Progress bar - HOME PAGE
export function fromTo() {
  // Assurez-vous que la barre de progression est visible avant l'animation
  const progressLineFront = document.querySelector('.progress-line_front') as HTMLElement;

  if (progressLineFront) {
    gsap.set(progressLineFront, { width: '100%', opacity: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.nft_progress-line-content',
          start: 'top 40%', // Quand le haut est à 40% de la hauteur de l'écran
          end: 'top -30%', // Quand le haut est à -30% de la hauteur de l'écran
          scrub: true, // suivre le défilement
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
  } else {
    console.error('Element .progress-line_front not found.');
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
        duration: 1, // durée de l'animation
        scrollTrigger: {
          trigger: roadmapPhase2,
          start: 'top 80%', // commence quand le haut est à 80% de la vue
          end: 'bottom 70%', // termine quand le bas est à 70% de la vue
          toggleActions: 'play none none none', // déclenche l'animation uniquement lorsqu'il entre dans la vue
          scrub: true, // suit le scroll
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
