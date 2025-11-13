/***************************************************
==================== JS INDEX ======================
****************************************************

// Data Css js
//  sticky header
// Register GSAP Plugins
// Smooth active
// GSAP Fade Animation 
// Preloader Animation
// side-toggle animaton
// Side Info Js
// meanmenu activation 
// Magnific Video popup
// GSAP title animation
// slider active 
// project active
// project-2 active
// project-5 active
// testimonial active
// testimonial-2 active
// testimonial-3 active
// testimonial-4 active
// nice select 
// odometer active 
// service-2 active
// text-slider activation
// text-slider-2 activation
// brand-slider activation
// brand-3-slider activation
// brand-4-slider activation
// WOW active
// team-3 active
// Image Reveal Animation


****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);
  let mm = gsap.matchMedia();

  // Data Css js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  //  sticky header
  function pinned_header() {
    var lastScrollTop = 0;

    windowOn.on('scroll', function () {
      var currentScrollTop = $(this).scrollTop();
      if (currentScrollTop > lastScrollTop) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').addClass('transformed');
      } else if ($(this).scrollTop() <= 500) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').removeClass('transformed');
      } else {
        // Scrolling up, remove the class
        $('.header-sticky').addClass('sticky');
        $('.header-sticky').removeClass('transformed');
      }
      lastScrollTop = currentScrollTop;
    });
  }
  pinned_header();

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);

  // Smooth active
  var device_width = window.screen.width;

  if (device_width > 767) {
    if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
      const smoother = ScrollSmoother.create({
        // smooth: 0.9,
        smooth: 1.5,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        // normalizeScroll: false,
        normalizeScroll: {
          allowNestedScroll: true,
        },
        ignoreMobileResize: true,
      });
    }

  }

  // GSAP Fade Animation 
  let fadeArray_items = document.querySelectorAll(".fade-anim");
  if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(".fade-anim")
    fadeArray.forEach((item, i) => {
      var fade_direction = "bottom"
      var onscroll_value = 1
      var duration_value = 1.15
      var fade_offset = 50
      var delay_value = 0.15
      var ease_value = "power2.out"
      if (item.getAttribute("data-offset")) {
        fade_offset = item.getAttribute("data-offset");
      }
      if (item.getAttribute("data-duration")) {
        duration_value = item.getAttribute("data-duration");
      }
      if (item.getAttribute("data-direction")) {
        fade_direction = item.getAttribute("data-direction");
      }
      if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
      }
      if (item.getAttribute("data-delay")) {
        delay_value = item.getAttribute("data-delay");
      }
      if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
      }
      let animation_settings = {
        opacity: 0,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      }
      if (fade_direction == "top") {
        animation_settings['y'] = -fade_offset
      }
      if (fade_direction == "left") {
        animation_settings['x'] = -fade_offset;
      }
      if (fade_direction == "bottom") {
        animation_settings['y'] = fade_offset;
      }
      if (fade_direction == "right") {
        animation_settings['x'] = fade_offset;
      }
      if (onscroll_value == 1) {
        animation_settings['scrollTrigger'] = {
          trigger: item,
          start: 'top 85%',
        }
      }
      gsap.from(item, animation_settings);
    })
  }

  // Preloader Animation
  if (document.querySelectorAll(".loader-wrap").length > 0) {
    $(document).ready(function () {
      setTimeout(function () {
        $('#container').addClass('loaded');
      }, 500);

      setTimeout(function () {
        $('.loader-wrap').fadeOut(1000, function () {
          $(this).remove();
        });
      }, 3000);
    });

    const svg = document.getElementById("svg");
    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: {
        d: curve
      },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.5,
      attr: {
        d: flat
      },
      ease: "power2.easeOut",
    });
    tl.to(".loader-wrap", {
      y: -1500,
    });
    tl.to(".loader-wrap", {
      zIndex: -1,
      display: "none",
    });
    tl.from(
      "main", {
      y: 0,
      opacity: 0,
      delay: 0.3,
    },
      "-=1.5"
    );

  }
  // Preloader end

  // side-toggle animaton
  document.addEventListener("DOMContentLoaded", () => {
    const dotGrid = document.querySelector(".side-toggle");

    if (dotGrid) {
      const dotSize = 4;
      const gapX = 5;
      const gapY = 5;
      const centerOffset = 27;

      const baseOffset = dotSize + gapX;
      const baseOffsetY = dotSize + gapY;

      const positions = [
        { x: 0, y: 0 },
        { x: baseOffset, y: 0 },
        { x: baseOffset * 2, y: 0 },
        { x: 0, y: baseOffsetY },
        { x: baseOffset, y: baseOffsetY },
        { x: baseOffset, y: baseOffsetY * 2 },
        { x: baseOffset * 2, y: baseOffsetY * 2 },
      ];

      const originalPositions = [...positions];
      const dots = [];

      function setDotPosition(dot, pos) {
        dot.style.left = `${centerOffset + pos.x - baseOffset}px`;
        dot.style.top = `${centerOffset + pos.y - baseOffsetY}px`;
      }

      positions.forEach(pos => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        setDotPosition(dot, pos);
        dotGrid.appendChild(dot);
        dots.push(dot);
      });

      function applyShuffledPositions() {
        const shuffled = [...positions].sort(() => Math.random() - 0.5);
        dots.forEach((dot, i) => setDotPosition(dot, shuffled[i]));
      }

      function resetPositions() {
        dots.forEach((dot, i) => setDotPosition(dot, originalPositions[i]));
      }

      dotGrid.addEventListener("mouseenter", applyShuffledPositions);
      dotGrid.addEventListener("mouseleave", resetPositions);
    }
  });

  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  $(window).scroll(function () {
    if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
      $(".side-info").removeClass("info-open");
      $(".offcanvas-overlay").removeClass("overlay-open");
    }
  });

  // meanmenu activation 
  $('.main-menu').meanmenu({
    meanScreenWidth: "1300",
    meanMenuContainer: '.mobile-menu',
    meanMenuCloseSize: '28px',
  });

  // Magnific Video popup
  if ($('.video-popup').length && 'magnificPopup' in jQuery) {
    $('.video-popup').magnificPopup({
      type: 'iframe',
    });
  }

  // GSAP title animation
  if (document.querySelectorAll(".rr_title_anim").length > 0) {
    if ($('.rr_title_anim').length > 0) {
      let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none reverse'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.2
        });
      });
    }
  }

  // slider active 
  if (document.querySelectorAll(".slider-active").length > 0) {

    let sliderActive1 = ".slider-active";
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 1,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 5000,
      },

      // If we need pagination
      pagination: {
        el: ".slider-swiper-paginations",
        // dynamicBullets: true,
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

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
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }



  // project active
  if (document.querySelectorAll(".project-active").length > 0) {
    var project_active = new Swiper(".project-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 28,
      speed: 2000,
      watchSlidesProgress: true,
      breakpoints: {
        // when window width is >= px
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
      }
    });
  }


  // project-2 active
  if (document.querySelectorAll(".project-2-active").length > 0) {
    var project_2_active = new Swiper(".project-2-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 2000,
      watchSlidesProgress: true,
      breakpoints: {
        // when window width is >= px
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
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: '.project-2-button-next',
        prevEl: '.project-2-button-prev',
      },
    });
  }


  // project-5 active
  if (document.querySelectorAll(".project-5-active").length > 0) {
    var project_5_active = new Swiper(".project-5-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 2000,
      watchSlidesProgress: true,
      centeredSlides: true,
      pagination: {
        el: ".project-5-pagination",
        type: "progressbar",
        clickable: true,
      },
      navigation: {
        nextEl: '.project-5-button-next',
        prevEl: '.project-5-button-prev',
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.4,
        },
        992: {
          slidesPerView: 2,

        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,

        },
      }
    });
  }



  // testimonial active
  if (document.querySelectorAll(".testimonial-active").length > 0) {
    var testimonial_active = new Swiper(".testimonial-active", {
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
        // when window width is >= px
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

  // testimonial-2 active
  if (document.querySelectorAll(".testimonial-2-active").length > 0) {
    var testimonial_2_active = new Swiper(".testimonial-2-active", {
      loop: true,
      slidesPerView: 1.1,
      spaceBetween: 24,
      speed: 2000,
      watchSlidesProgress: true,
      centeredSlides: true,
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 1.1,
        },
        992: {
          slidesPerView: 1.2,
        },
        1201: {
          slidesPerView: 1.5,
        },
        1367: {
          slidesPerView: 1.5,
        },
        1600: {
          slidesPerView: 2,
        },
      }
    });
  }

  // testimonial-3 active
  if (document.querySelectorAll(".testimonial-3-wrapper").length > 0) {
    var test_3_thumb = new Swiper(".testimonial-3-thumb", {
      spaceBetween: 15,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 5,
        },
      },
    });
    var swiper2 = new Swiper(".testimonial-3-active", {
      spaceBetween: 10,
      thumbs: {
        swiper: test_3_thumb,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  }


  // testimonial-4 active
  if (document.querySelectorAll(".testimonial-4-active").length > 0) {
    var testimonial_4_active = new Swiper(".testimonial-4-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 2000,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.testimonial-4-button-next',
        prevEl: '.testimonial-4-button-prev',
      },
    });
  }

  // nice select 
  $(document).ready(function () {
    $('select').niceSelect();
  });

  // odometer active 
  $(document).ready(function () {
    $('.odometer').waypoint(function (direction) {
      if (direction === 'down') {
        let countNumber = $(this.element).attr("data-count");
        $(this.element).html(countNumber);
      }
    }, {
      offset: '80%'
    });
  });

  // service-2 active
  if (document.querySelectorAll(".service-2-active").length > 0) {
    var service_2_active = new Swiper(".service-2-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 2000,
      watchSlidesProgress: true,
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: '.service-2-button-next',
        prevEl: '.service-2-button-prev',
      },
    });
  }

  // text-slider activation
  if ('.text-slider-active') {
    var text_slider_active = new Swiper(".text-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 38,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
      },
    });
  }

  // text-slider-2 activation
  if ('.text-slider-2-active') {
    var text_slider_2_active = new Swiper(".text-slider-2-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 38,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
      },
    });
  }

  // brand-slider activation
  if ('.brand-slider-active') {
    var brand_slider_active = new Swiper(".brand-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 10,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
      },
    });
  }

  // brand-3-slider activation
  if ('.brand-3-slider-active') {
    var brand_slider_active = new Swiper(".brand-3-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 50,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
      },
      breakpoints: {
        // when window width is >= px
        576: {
          spaceBetween: 50,
        },
        768: {
          spaceBetween: 70,
        },
        992: {
          spaceBetween: 90,
        },
        1201: {
          spaceBetween: 110,
        },
        1367: {
          spaceBetween: 150,
        },
      },
    });
  }

  // brand-4-slider activation
  if ('.brand-4-slider-active') {
    var brand_4_slider_active = new Swiper(".brand-4-slider-active", {
      slidesPerView: 'auto',
      loop: true,
      autoplay: true,
      spaceBetween: 32,
      speed: 10000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
      },
    });
  }


  // WOW active
  new WOW().init();


  // team-3 active
  if (document.querySelectorAll(".team-3-active").length > 0) {
    var team_3_active = new Swiper(".team-3-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 44,
      speed: 2000,
      watchSlidesProgress: true,
      centeredSlides: true,
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,

        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,

        },
      },
      navigation: {
        nextEl: '.team-3-button-next',
        prevEl: '.team-3-button-prev',
      },
    });
  }

  // Image Reveal Animation
  if (document.querySelectorAll(".img-reveal-anim").length > 0) {
    let img_reveal_anim = document.querySelectorAll(".img-reveal-anim");
    img_reveal_anim.forEach((img_reveal) => {
      let image = img_reveal.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: img_reveal,
          start: "top 50%",
        }
      });

      tl.set(img_reveal, { autoAlpha: 1 });
      tl.from(img_reveal, 1.5, {
        xPercent: -100,
        ease: Power2.out
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
      });
    });
  }

})(jQuery);


