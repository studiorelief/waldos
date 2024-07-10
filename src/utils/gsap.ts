import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

//NAVBAR && COUNTDOWN
// Function to add the boxShadow on hover - btn Joint The Quest
export function addHoverEffect(): void {
  // Get the button elements by class names
  const btns = document.querySelectorAll(
    '.btn-join-quest, .countdown_btn'
  ) as NodeListOf<HTMLElement>;

  // Iterate over each button and add event listeners
  btns.forEach((btn) => {
    if (btn) {
      // Add event listener for mouseover
      btn.addEventListener('mouseover', () => {
        btn.style.boxShadow = '0 8px 10px rgba(0, 0, 0, 0.2)';
      });

      // Add event listener for mouseout
      btn.addEventListener('mouseout', () => {
        btn.style.boxShadow = '';
      });
    }
  });
}

// SOCIAL NAV - COMPONENTS
// Hover on Social Network Logo - FOOTER
export function hoverSocialLink() {
  const footerLinks = document.querySelectorAll<HTMLDivElement>('.social_logo-content');

  footerLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.2, duration: 0.2, ease: 'bounce.out' });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, duration: 0.5, ease: 'bounce.out' });
    });
  });
}

// INTRO
//logo animation
export function animateIntro() {
  const logoWeed = document.querySelector('.intro_logo-weed') as HTMLElement;
  const logoText = document.querySelector('.intro_logo-text') as HTMLElement;

  if (logoWeed && logoText) {
    // Fade in animation for .intro_logo-text
    gsap.fromTo(
      logoText,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.8 }
    );
  }
  // Scale up animation for .intro_logo-weed
  gsap.fromTo(logoWeed, { scale: 0 }, { scale: 1, duration: 2, ease: 'power3.out' });
}

// HOMEPAGE
//Hero background Parallax
const backgroundHero = document.querySelector('#hero-pattern1') as HTMLElement;
if (backgroundHero) {
  gsap.to(backgroundHero, {
    y: '250',
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.navigation',
      start: 'top top',
      end: 'bottom -2800',
      scrub: true,
    },
  });
}

// HOME PAGE
// Progress bar and counter animation
export function animateProgressBar() {
  const progressLineFront = document.querySelector('.progress-line_front') as HTMLElement;
  const progressText = document.querySelector('.progress_anime-text') as HTMLElement;
  const totalCount = 116;

  if (progressLineFront && progressText) {
    // Set initial width and opacity
    gsap.set(progressLineFront, { width: '3%', opacity: 1 });

    // Timeline for animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.nft_progress-line-content',
        start: 'top 50%',
        end: 'top -10%',
        scrub: true,
        onUpdate: function () {
          if (progressLineFront.parentElement) {
            // Calculate the progress percentage based on the scroll position
            const progress =
              parseFloat(window.getComputedStyle(progressLineFront).width) /
                progressLineFront.parentElement.offsetWidth -
              0.03; // Adjust for 3% starting point

            // Update the text based on the adjusted progress
            const adjustedProgress = Math.max(0, progress / 0.96); // Adjust for 96% remaining (99% - 3%)
            const currentCount = Math.round(totalCount * adjustedProgress);
            progressText.innerText = `${Math.min(currentCount, totalCount)}`;
          }
        },
      },
    });

    // Animation for progress line
    timeline.to(progressLineFront, {
      width: '99%', // End at 99% to ensure the counter reaches 117
      duration: 1, // Duration of the animation
      ease: 'power3.inOut', // Smooth easing
      onUpdate: function () {
        if (progressLineFront.parentElement) {
          const progress =
            parseFloat(window.getComputedStyle(progressLineFront).width) /
              progressLineFront.parentElement.offsetWidth -
            0.03; // Adjust for 3% starting point

          const adjustedProgress = Math.max(0, progress / 0.96); // Adjust for 96% remaining (99% - 3%)
          const currentCount = Math.round(totalCount * adjustedProgress);
          progressText.innerText = `${Math.min(currentCount, totalCount)} / ${totalCount}`;
          // Remove box-shadow if the width is close to 1%
          const currentWidth = parseFloat(window.getComputedStyle(progressLineFront).width);
          if (currentWidth <= progressLineFront.parentElement.offsetWidth * 0.01) {
            progressLineFront.style.boxShadow = 'none';
          }
        }
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
      y: '100',
      ease: 'power1.out', // easing effect
      scrollTrigger: {
        trigger: '.navigation',
        start: 'top',
        end: 'bottom+=700 top', // termine 700px après que le bas de l'élément déclencheur atteint le haut de la vue
        scrub: true, // smooth catch-up with the scroll
      },
    });
  }

  const heroImg2 = document.querySelector('#hero-img2') as HTMLElement;
  if (heroImg2) {
    gsap.to(heroImg2, {
      y: '200',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.navigation',
        start: 'top',
        end: 'bottom+=700 top', // termine 700px après que le bas de l'élément déclencheur atteint le haut de la vue
        scrub: true,
      },
    });
  }

  const heroImg3 = document.querySelector('#hero-img3') as HTMLElement;
  if (heroImg3) {
    gsap.to(heroImg3, {
      y: '300',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.navigation',
        start: 'top',
        end: 'bottom+=700 top', // termine 700px après que le bas de l'élément déclencheur atteint le haut de la vue
        scrub: true,
      },
    });
  }

  const heroImg4 = document.querySelector('#hero-img4') as HTMLElement;
  if (heroImg4) {
    gsap.to(heroImg4, {
      y: '400',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.navigation',
        start: 'top',
        end: 'bottom+=700 top', // termine 700px après que le bas de l'élément déclencheur atteint le haut de la vue
        scrub: true,
      },
    });
  }

  const heroImg5 = document.querySelector('#hero-img5') as HTMLElement;
  if (heroImg5) {
    gsap.to(heroImg5, {
      y: '500',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.navigation',
        start: 'top',
        end: 'bottom+=700 top', // termine 700px après que le bas de l'élément déclencheur atteint le haut de la vue
        scrub: true,
      },
    });
  }
}

//HOME PAGE
// girl on top of pepos token
const girlOnTop = document.querySelector('#girl-on-top');
if (girlOnTop) {
  // Initial position offscreen to the right
  gsap.set(girlOnTop, { x: '100%' });

  // Animation to move the boat from right to left
  gsap.to(girlOnTop, {
    x: '0', // move to the left of the screen
    ease: 'power1.out', // smoothing the animation
    scrollTrigger: {
      trigger: '#nft-grid1',
      start: 'top 50%', // start when the top it's 75% of viewport
      end: 'top -100', // end when the top it's 70% of viewport
      scrub: true, // smooth follow with the scroll
    },
  });
}

//HOME PAGE
// man on hero content
const manSlide = document.querySelector('#waldos-guy-hero');
if (manSlide) {
  // Initial position offscreen to the right
  gsap.set(manSlide, { x: '-100%' });

  // Animation to move the guy from lefdt to right
  gsap.to(manSlide, {
    x: '0',
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.hero_content',
      start: 'top +800',
      end: 'top -100',
      scrub: true,
    },
  });
}

//HOME PAGE
//PEPOS TOKEN HEADER - PARALLAX
export function peposTokenParallax() {
  const tokenImg2 = document.querySelector('#token2') as HTMLElement;
  if (tokenImg2) {
    gsap.to(tokenImg2, {
      y: '-100',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.a--button-fat',
        start: 'top',
        end: 'bottom -3000',
        scrub: true,
      },
    });
  }

  const tokenImg3 = document.querySelector('#token3') as HTMLElement;
  if (tokenImg3) {
    gsap.to(tokenImg3, {
      y: '-50',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.a--button-fat',
        start: 'top',
        end: 'bottom -3000',
        scrub: true,
      },
    });
  }

  const tokenImg4 = document.querySelector('#token4') as HTMLElement;
  if (tokenImg4) {
    gsap.to(tokenImg4, {
      y: '300',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.a--button-fat',
        start: 'top',
        end: 'bottom -3000',
        scrub: true,
      },
    });
  }

  const tokenImg5 = document.querySelector('#token5') as HTMLElement;
  if (tokenImg5) {
    gsap.to(tokenImg5, {
      y: '100',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.a--button-fat',
        start: 'top',
        end: 'bottom -3000',
        scrub: true,
      },
    });
  }
}

//HOME PAGE
//CTA SHOP HEADER - PARALLAX
export function ctaShopParallax() {
  const heroImg1 = document.querySelector('#cta-img1') as HTMLElement;
  if (heroImg1) {
    gsap.to(heroImg1, {
      y: '-100',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.section_cta-shop',
        start: 'top +900',
        end: 'bottom -500',
        scrub: true,
      },
    });
  }
  const heroImg2 = document.querySelector('#cta-img2') as HTMLElement;
  if (heroImg2) {
    gsap.to(heroImg2, {
      y: '-80',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.section_cta-shop',
        start: 'top +900',
        end: 'bottom',
        scrub: true,
      },
    });
  }

  /*const heroImg3 = document.querySelector('#cta-img3') as HTMLElement;
  if (heroImg3) {
    gsap.to(heroImg3, {
      y: '-100',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.section_cta-shop',
        start: 'top +900',
        end: 'bottom -500',
        scrub: true,
      },
    });
  }*/

  const heroImg4 = document.querySelector('#cta-img4') as HTMLElement;
  if (heroImg4) {
    gsap.to(heroImg4, {
      y: '180',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.section_cta-shop',
        start: 'top +900',
        end: 'bottom -500',
        scrub: true,
      },
    });
  }
}

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
        duration: 2,
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
        duration: 2,
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
    x: '0',
    ease: 'power1.out',
    scrollTrigger: {
      trigger: imgWrapperBoat,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      markers: false,
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
  // Parallax effect for #pepos-hero3
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

// Parallax effect for #pepos-hero2
const peposHero2 = document.querySelector('#pepos-hero2') as HTMLElement;
if (peposHero2) {
  gsap.to(peposHero2, {
    y: '75',
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.hero_image-wrapper',
      start: 'top 120',
      end: '100%',
      scrub: true,
    },
  });
}

//PEPOS PAGE
//Weedos Header - Parallax
export function initWeedosCloudParallax() {
  const weedosCloud = document.querySelector('#weedos-cloud') as HTMLElement;
  if (weedosCloud) {
    gsap.to(weedosCloud, {
      x: '-600',
      ease: 'power1.inOut', // easing for a smooth effect
      scrollTrigger: {
        trigger: weedosCloud,
        start: 'top 400', // start when the top of the wrapper hits the top of the viewport
        end: '100%', // end when the bottom of the viewport is reached
        scrub: true, // smooth catch-up with the scroll
      },
    });
  }
  const weedosCloud1 = document.querySelector('#weedos-cloud1') as HTMLElement;
  if (weedosCloud) {
    gsap.to(weedosCloud1, {
      x: '150', // move up by 300px
      ease: 'power1.inOut', // easing for a smooth effect
      scrollTrigger: {
        trigger: weedosCloud,
        start: 'top 400', // start when the top of the wrapper hits the top of the viewport
        end: '100%', // end when the bottom of the viewport is reached
        scrub: true, // smooth catch-up with the scroll
      },
    });
  }
}
