import { useEffect } from 'react';

declare global {
  interface Window {
    jQuery: any;
    $: any;
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
    CustomEase: any;
    Swiper: any;
  }
}

export const useTemplateScripts = () => {
  useEffect(() => {
    let resizeHandler: (() => void) | null = null;
    
    // Wait for DOM to be ready and scripts to be loaded
    const initScripts = () => {
      // Check if jQuery and GSAP are loaded
      if (typeof window.jQuery === 'undefined' || typeof window.gsap === 'undefined') {
        // Retry after a short delay
        setTimeout(initScripts, 100);
        return;
      }

      const $ = window.jQuery;

      // Register GSAP plugins first
      if (typeof window.ScrollTrigger !== 'undefined' && 
          typeof window.ScrollSmoother !== 'undefined' && 
          typeof window.CustomEase !== 'undefined') {
        try {
          window.gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother, window.CustomEase);
        } catch (e) {
          console.warn('GSAP plugins already registered or error:', e);
        }
      }

      // Wrap the original main.js functionality
      try {
        // Data Css js
        $("[data-background]").each(function (this: HTMLElement) {
          $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
          );
        });

        // Smooth active - with null check
        const hasSmoothElement = document.querySelector("#has_smooth");
        if (hasSmoothElement && hasSmoothElement.classList.contains("has-smooth")) {
          const device_width = window.screen.width;
          if (device_width > 767) {
            if (typeof window.ScrollSmoother !== 'undefined' && typeof window.gsap !== 'undefined') {
              try {
                window.ScrollSmoother.create({
                  smooth: 1.5,
                  effects: device_width < 1025 ? false : true,
                  smoothTouch: 0.1,
                  normalizeScroll: {
                    allowNestedScroll: true,
                  },
                  ignoreMobileResize: true,
                });
              } catch (e) {
                console.warn('ScrollSmoother already created or error:', e);
              }
            }
          }
        }

        // GSAP Fade Animation with ScrollTrigger
        const fadeArray_items = document.querySelectorAll(".fade-anim");
        if (fadeArray_items.length > 0 && typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
          fadeArray_items.forEach((item) => {
            try {
              // Get animation attributes
              const fade_direction = item.getAttribute("data-direction") || "bottom";
              const onscroll_value = item.getAttribute("data-on-scroll");
              const shouldScrollTrigger = onscroll_value === null || onscroll_value !== "0";
              const duration_value = parseFloat(item.getAttribute("data-duration") || "1.15");
              let fade_offset = parseInt(item.getAttribute("data-offset") || "50");
              const delay_value = parseFloat(item.getAttribute("data-delay") || "0.15");
              const ease_value = item.getAttribute("data-ease") || "power2.out";

              // Build animation settings - these are the STARTING values (from)
              let animation_settings: any = {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
              };

              // Add direction-based movement (starting position)
              if (fade_direction === "top") {
                animation_settings.y = -fade_offset;
              } else if (fade_direction === "left") {
                animation_settings.x = -fade_offset;
              } else if (fade_direction === "bottom") {
                animation_settings.y = fade_offset;
              } else if (fade_direction === "right") {
                animation_settings.x = fade_offset;
              }

              // Add ScrollTrigger if on-scroll is enabled (default is enabled)
              if (shouldScrollTrigger) {
                animation_settings.scrollTrigger = {
                  trigger: item,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  markers: false, // Set to true for debugging
                };
              }

              // Use from() to animate from the settings to current state
              // GSAP automatically sets starting values and animates to current computed state
              const anim = window.gsap.from(item, animation_settings);
              
              // If animation fails, fallback to visible
              if (!anim) {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translate(0, 0)';
              }
            } catch (e) {
              console.warn('Fade animation error for element:', item, e);
              // Fallback: make visible
              (item as HTMLElement).style.opacity = '1';
              (item as HTMLElement).style.transform = 'translate(0, 0)';
            }
          });
        } else if (fadeArray_items.length > 0) {
          // Fallback: make fade-anim elements visible if GSAP is not available
          setTimeout(() => {
            fadeArray_items.forEach((item) => {
              (item as HTMLElement).style.opacity = '1';
              (item as HTMLElement).style.visibility = 'visible';
              (item as HTMLElement).style.transform = 'translate(0, 0)';
            });
          }, 500);
        }

        // Preloader Animation
        const loaderWrap = document.querySelector(".loader-wrap") as HTMLElement;
        if (loaderWrap) {
          const svg = document.getElementById("svg");
          let animationCompleted = false;

          // Try GSAP animation if available
          if (svg && typeof window.gsap !== 'undefined') {
            try {
              const tl = window.gsap.timeline({
                onComplete: () => {
                  animationCompleted = true;
                  // Remove loader from DOM after animation
                  if (loaderWrap && loaderWrap.parentNode) {
                    loaderWrap.style.display = 'none';
                    loaderWrap.remove();
                  }
                }
              });

              const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
              const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

              tl.to(".loader-wrap-heading .load-text, .loader-wrap-heading .cont", {
                delay: 1,
                y: -100,
                opacity: 0,
                duration: 0.5,
              });
              tl.to(svg, {
                duration: 0.5,
                attr: {
                  d: curve
                },
                ease: "power2.easeIn",
              }, "-=0.3");
              tl.to(svg, {
                duration: 0.5,
                attr: {
                  d: flat
                },
                ease: "power2.easeOut",
              });
              tl.to(".loader-wrap", {
                y: -1500,
                duration: 0.5,
              });
              tl.to(".loader-wrap", {
                zIndex: -1,
                display: "none",
                duration: 0.1,
              });
            } catch (e) {
              console.warn('GSAP loader animation error:', e);
              // Fall through to jQuery fallback
            }
          }

          // Fallback: Hide loader after timeout if animation doesn't complete
          setTimeout(() => {
            if (!animationCompleted && loaderWrap && loaderWrap.parentNode) {
              try {
                $(loaderWrap).fadeOut(500, function (this: HTMLElement) {
                  if (this.parentNode) {
                    this.remove();
                  }
                });
              } catch (e) {
                // Simple fallback if jQuery fails
                loaderWrap.style.transition = 'opacity 0.5s';
                loaderWrap.style.opacity = '0';
                setTimeout(() => {
                  if (loaderWrap.parentNode) {
                    loaderWrap.remove();
                  }
                }, 500);
              }
            }
          }, 3000);
        }

        // Side toggle animation
        const sideToggle = document.querySelector(".side-toggle");
        if (sideToggle) {
          $(sideToggle).on("click", function () {
            $(".side-info").addClass("info-open");
            $(".offcanvas-overlay").addClass("overlay-open");
          });
        }

        // Side info close
        const sideInfoClose = document.getElementById("side-info-close");
        if (sideInfoClose) {
          $(sideInfoClose).on("click", function () {
            $(".side-info").removeClass("info-open");
            $(".offcanvas-overlay").removeClass("overlay-open");
          });
        }

        // Overlay close
        const overlay = document.querySelector(".offcanvas-overlay");
        if (overlay) {
          $(overlay).on("click", function () {
            $(".side-info").removeClass("info-open");
            $(".offcanvas-overlay").removeClass("overlay-open");
          });
        }

        // Image Reveal Animation (matching main.js exactly)
        const imgRevealElements = document.querySelectorAll(".img-reveal-anim");
        if (imgRevealElements.length > 0 && typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
          imgRevealElements.forEach((imgReveal) => {
            const image = imgReveal.querySelector("img");
            if (image) {
              try {
                // Match original main.js implementation exactly
                const tl = window.gsap.timeline({
                  scrollTrigger: {
                    trigger: imgReveal,
                    start: "top 50%",
                  }
                });

                tl.set(imgReveal, { autoAlpha: 1 });
                tl.from(imgReveal, {
                  duration: 1.5,
                  xPercent: -100,
                  ease: "power2.out"
                });
                tl.from(image, {
                  duration: 1.5,
                  xPercent: 100,
                  scale: 1.3,
                  delay: -1.5,
                  ease: "power2.out"
                }, "-=1.5");
              } catch (e) {
                console.warn('Image reveal animation error:', e);
                // Fallback: make it visible
                (imgReveal as HTMLElement).style.visibility = 'visible';
                (imgReveal as HTMLElement).style.opacity = '1';
              }
            } else {
              // If no image found, make container visible
              (imgReveal as HTMLElement).style.visibility = 'visible';
              (imgReveal as HTMLElement).style.opacity = '1';
            }
          });

          // Refresh ScrollTrigger after animations are set up
          setTimeout(() => {
            if (typeof window.ScrollTrigger !== 'undefined') {
              try {
                window.ScrollTrigger.refresh();
              } catch (e) {
                console.warn('ScrollTrigger refresh error:', e);
              }
            }
          }, 1000);
        } else if (imgRevealElements.length > 0) {
          // Fallback: make images visible if GSAP is not available
          setTimeout(() => {
            imgRevealElements.forEach((imgReveal) => {
              (imgReveal as HTMLElement).style.visibility = 'visible';
              (imgReveal as HTMLElement).style.opacity = '1';
            });
          }, 500);
        }

        // Initialize sliders if Swiper is available
        if (typeof window.Swiper !== 'undefined') {
          // Hero slider
          const heroSlider = document.querySelector(".slider-active");
          if (heroSlider) {
            const sliderInit1 = new window.Swiper(".slider-active", {
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
              effect: "fade",
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              navigation: {
                nextEl: ".slider-button-next",
                prevEl: ".slider-button-prev",
              },
            });

            // Hero slider animation handler (matching main.js animated_swiper function)
            const animated_swiper = (selector: string, init: any) => {
              const animated = () => {
                $(selector + " [data-animation]").each(function (this: HTMLElement) {
                  const anim = $(this).data("animation");
                  const delay = $(this).data("delay");
                  const duration = $(this).data("duration") || "1s";

                  $(this)
                    .removeClass("anim" + anim)
                    .addClass(anim + " animated")
                    .css({
                      webkitAnimationDelay: delay,
                      animationDelay: delay,
                      webkitAnimationDuration: duration,
                      animationDuration: duration,
                    })
                    .one(
                      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                      function (this: HTMLElement) {
                        $(this).removeClass(anim + " animated");
                      }
                    );
                });
              };
              animated();
              // Make animated when slide change
              init.on("slideChange", function () {
                $(selector + " [data-animation]").removeClass("animated");
              });
              init.on("slideChange", animated);
            };

            animated_swiper(".slider-active", sliderInit1);
          }

          // Testimonial slider
          const testimonialSlider = document.querySelector(".testimonial-active");
          if (testimonialSlider) {
            new window.Swiper(".testimonial-active", {
              loop: true,
              slidesPerView: 1,
              spaceBetween: 30,
              speed: 2000,
              watchSlidesProgress: true,
              centeredSlides: true,
              pagination: {
                el: ".testimonial-pagination",
                type: "progressbar",
                clickable: true,
              },
              breakpoints: {
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 60,
                },
                1201: {
                  slidesPerView: 2.3,
                  spaceBetween: 100,
                },
                1367: {
                  slidesPerView: 2.3,
                  spaceBetween: 100,
                },
                1600: {
                  slidesPerView: 3,
                  spaceBetween: 110,
                },
              }
            });
          }
          // Project slider - initialize visible project sliders only
          // Only initialize sliders in visible tab panes
          const visibleTabPane = document.querySelector('.tab-pane.show.active');
          if (visibleTabPane) {
            const projectSlider = visibleTabPane.querySelector('.project-active') as HTMLElement;
            if (projectSlider && !(projectSlider as any).swiper) {
              try {
                new window.Swiper(projectSlider, {
                  loop: true,
                  slidesPerView: 1,
                  spaceBetween: 28,
                  speed: 2000,
                  watchSlidesProgress: true,
                  breakpoints: {
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1201: {
                      slidesPerView: 2,
                    },
                    1367: {
                      slidesPerView: 2,
                    },
                  },
                });
              } catch (e) {
                console.warn('Project slider initialization error:', e);
              }
            }
          } else {
            // Fallback: initialize first project slider if no tabs found
            const projectSlider = document.querySelector(".project-active") as HTMLElement;
            if (projectSlider && !(projectSlider as any).swiper) {
              try {
                new window.Swiper(projectSlider, {
                  loop: true,
                  slidesPerView: 1,
                  spaceBetween: 28,
                  speed: 2000,
                  watchSlidesProgress: true,
                  breakpoints: {
                    576: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1201: {
                      slidesPerView: 2,
                    },
                    1367: {
                      slidesPerView: 2,
                    },
                  },
                });
              } catch (e) {
                console.warn('Project slider initialization error:', e);
              }
            }
          }
        }

      } catch (error) {
        console.error('Error initializing template scripts:', error);
      }
    };

    // Wait for scripts to load and React to render
    const checkAndInit = () => {
      if (typeof window.jQuery !== 'undefined' && typeof window.gsap !== 'undefined') {
        // Wait longer for React to fully render the DOM and for all components to mount
        setTimeout(() => {
          initScripts();
          
          // Refresh ScrollTrigger after animations are set up
          setTimeout(() => {
            if (typeof window.ScrollTrigger !== 'undefined') {
              try {
                window.ScrollTrigger.refresh();
                
                // Also refresh on window resize
                resizeHandler = () => {
                  if (typeof window.ScrollTrigger !== 'undefined') {
                    try {
                      window.ScrollTrigger.refresh();
                    } catch (e) {
                      console.warn('ScrollTrigger refresh on resize error:', e);
                    }
                  }
                };
                window.addEventListener('resize', resizeHandler);
              } catch (e) {
                console.warn('ScrollTrigger refresh error:', e);
              }
            }
          }, 800);
          
          // Final refresh after everything is loaded
          setTimeout(() => {
            if (typeof window.ScrollTrigger !== 'undefined') {
              try {
                window.ScrollTrigger.refresh();
              } catch (e) {
                console.warn('ScrollTrigger final refresh error:', e);
              }
            }
          }, 1500);
        }, 500);
      } else {
        // Scripts not loaded yet, retry
        setTimeout(checkAndInit, 100);
      }
    };

    // Start checking after a short delay
    const timeoutId = setTimeout(checkAndInit, 200);

    return () => {
      clearTimeout(timeoutId);
      // Cleanup resize listener
      if (resizeHandler) {
        window.removeEventListener('resize', resizeHandler);
      }
      // Kill all ScrollTriggers on unmount
      if (typeof window.ScrollTrigger !== 'undefined') {
        try {
          window.ScrollTrigger.getAll().forEach((st: any) => st.kill());
        } catch (e) {
          // Ignore errors
        }
      }
    };
  }, []);
};

