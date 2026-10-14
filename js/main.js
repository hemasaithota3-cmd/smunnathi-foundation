// ============================================================
// SAMUNNATHI FOUNDATION — main.js
// FINAL STABLE VERSION
// ============================================================

(function () {

  'use strict';


  /* ============================================================
     MAIN INITIALIZATION
  ============================================================ */

  function init() {


    /* ==========================================================
       INTRO
       Duration: 3.2 seconds
    ========================================================== */

    const intro =
      document.getElementById(
        'samunnathiIntro'
      );


    if (intro) {

      document.body.classList.add(
        'samunnathi-intro-active'
      );


      window.setTimeout(
        function () {

          intro.classList.add(
            'hide'
          );


          document.body.classList.remove(
            'samunnathi-intro-active'
          );


          /*
             Remove intro after fade animation.
          */

          window.setTimeout(
            function () {

              if (
                intro &&
                intro.parentNode
              ) {

                intro.remove();

              }

            },
            900
          );


        },
        3200
      );

    }


    /* ==========================================================
       FORM LINKS
    ========================================================== */

    document
      .querySelectorAll(
        '[data-form]'
      )
      .forEach(
        function (el) {

          const key =
            el.getAttribute(
              'data-form'
            );


          if (
            typeof FORM_LINKS !==
              'undefined' &&
            FORM_LINKS &&
            FORM_LINKS[key]
          ) {

            el.setAttribute(
              'href',
              FORM_LINKS[key]
            );


            el.setAttribute(
              'target',
              '_blank'
            );


            el.setAttribute(
              'rel',
              'noopener noreferrer'
            );

          }

        }
      );


    /* ==========================================================
       NAVBAR SCROLL
    ========================================================== */

    const navbar =
      document.querySelector(
        '.navbar'
      );


    if (navbar) {

      function updateNavbar() {

        navbar.classList.toggle(
          'scrolled',
          window.scrollY > 40
        );

      }


      updateNavbar();


      window.addEventListener(
        'scroll',
        updateNavbar,
        {
          passive: true
        }
      );

    }


    /* ==========================================================
       MOBILE MENU
    ========================================================== */

    const hamburger =
      document.querySelector(
        '.hamburger'
      );


    const mobileMenu =
      document.querySelector(
        '.mobile-menu'
      );


    const mobileClose =
      document.querySelector(
        '.mobile-close'
      );


    function setMenu(open) {

      if (
        !mobileMenu ||
        !hamburger
      ) {

        return;

      }


      mobileMenu.classList.toggle(
        'open',
        open
      );


      hamburger.setAttribute(
        'aria-expanded',
        String(open)
      );


      document.body.style.overflow =
        open ? 'hidden' : '';


      if (open) {

        if (mobileClose) {

          mobileClose.focus();

        }

      } else {

        hamburger.focus({
          preventScroll: true
        });

      }

    }


    if (
      hamburger &&
      mobileMenu
    ) {

      hamburger.addEventListener(
        'click',
        function () {

          setMenu(true);

        }
      );


      if (mobileClose) {

        mobileClose.addEventListener(
          'click',
          function () {

            setMenu(false);

          }
        );

      }


      mobileMenu
        .querySelectorAll('a')
        .forEach(
          function (link) {

            link.addEventListener(
              'click',
              function () {

                mobileMenu.classList.remove(
                  'open'
                );


                hamburger.setAttribute(
                  'aria-expanded',
                  'false'
                );


                document.body.style.overflow =
                  '';

              }
            );

          }
        );


      document.addEventListener(
        'keydown',
        function (event) {

          if (
            event.key === 'Escape' &&
            mobileMenu.classList.contains(
              'open'
            )
          ) {

            setMenu(false);

          }

        }
      );


      window.addEventListener(
        'resize',
        function () {

          if (
            window.innerWidth > 1024 &&
            mobileMenu.classList.contains(
              'open'
            )
          ) {

            setMenu(false);

          }

        }
      );

    }


    /* ==========================================================
       PREMIUM SCROLL REVEAL
       
       IMPORTANT:
       Founders and continuous horizontal gallery
       are intentionally NOT included here.
    ========================================================== */

    document.body.classList.add(
      'motion-enabled'
    );


    const motionGroups = [

      {
        selector: '.about-media',
        animation: 'motion-left'
      },

      {
        selector: '.about-copy',
        animation: 'motion-right'
      },

      {
        selector: '.why-media',
        animation: 'motion-left'
      },

      {
        selector: '.why-copy',
        animation: 'motion-right'
      },

      {
        selector: '.featured',
        animation: 'motion-scale'
      },

      {
        selector: '.work-row',
        animation: 'motion-up'
      },

      {
        selector: '.gallery-grid .g-item',
        animation: 'motion-up'
      },

      {
        selector: '.involve-row',
        animation: 'motion-left'
      },

      {
        selector: '.vision-panel',
        animation: 'motion-scale'
      },

      {
        selector: '.process-step',
        animation: 'motion-up'
      },

      {
        selector: '.initiative-item',
        animation: 'motion-up'
      }

    ];


    /* ==========================================================
       APPLY MOTION CLASSES
    ========================================================== */

    motionGroups.forEach(
      function (group) {

        document
          .querySelectorAll(
            group.selector
          )
          .forEach(
            function (element, index) {

              element.classList.add(
                'motion-element'
              );


              element.classList.add(
                group.animation
              );


              element.classList.add(
                'motion-stagger-' +
                ((index % 6) + 1)
              );


              /*
                 Work rows alternate direction.
              */

              if (
                group.selector ===
                '.work-row'
              ) {

                element.classList.remove(
                  'motion-up',
                  'motion-left',
                  'motion-right'
                );


                element.classList.add(

                  index % 2 === 0

                    ? 'motion-left'

                    : 'motion-right'

                );

              }


              /*
                 Get Involved rows alternate direction.
              */

              if (
                group.selector ===
                '.involve-row'
              ) {

                element.classList.remove(
                  'motion-left',
                  'motion-right'
                );


                element.classList.add(

                  index % 2 === 0

                    ? 'motion-left'

                    : 'motion-right'

                );

              }


              /*
                 Initiative items alternate direction.
              */

              if (
                group.selector ===
                '.initiative-item'
              ) {

                element.classList.remove(
                  'motion-up',
                  'motion-left',
                  'motion-right'
                );


                element.classList.add(

                  index % 2 === 0

                    ? 'motion-left'

                    : 'motion-right'

                );

              }

            }
          );

      }
    );


    /* ==========================================================
       EXISTING .reveal ELEMENTS
    ========================================================== */

    document
      .querySelectorAll(
        '.reveal:not(.motion-element)'
      )
      .forEach(
        function (element, index) {

          element.classList.add(
            'motion-element'
          );


          element.classList.add(
            'motion-up'
          );


          element.classList.add(
            'motion-stagger-' +
            ((index % 6) + 1)
          );

        }
      );


    /* ==========================================================
       INTERSECTION OBSERVER
    ========================================================== */

    const motionElements =
      document.querySelectorAll(
        '.motion-element'
      );


    if (
      'IntersectionObserver' in window
    ) {

      const motionObserver =
        new IntersectionObserver(

          function (
            entries,
            observer
          ) {

            entries.forEach(
              function (entry) {

                if (
                  !entry.isIntersecting
                ) {

                  return;

                }


                entry.target.classList.add(
                  'is-visible'
                );


                /*
                   Animate each element only once.
                */

                observer.unobserve(
                  entry.target
                );

              }
            );

          },

          {
            threshold: 0.12,

            rootMargin:
              '0px 0px -8% 0px'
          }

        );


      motionElements.forEach(
        function (element) {

          motionObserver.observe(
            element
          );

        }
      );

    } else {

      /*
         Fallback for browsers without
         IntersectionObserver.
      */

      motionElements.forEach(
        function (element) {

          element.classList.add(
            'is-visible'
          );

        }
      );

    }


    /* ==========================================================
       FOUNDERS + HORIZONTAL GALLERY AUTO-SCROLL
    ========================================================== */

    function initDriftStrip(
      wrapSelector,
      trackSelector,
      options
    ) {

      options =
        options || {};


      const wrap =
        document.querySelector(
          wrapSelector
        );


      const track =
        document.querySelector(
          trackSelector
        );


      if (
        !wrap ||
        !track
      ) {

        return;

      }


      const baseSpeed =
        options.baseSpeed ??
        0.35;


      const maxCursorSpeed =
        options.maxCursorSpeed ??
        1.4;


      const mobileBaseSpeed =
        options.mobileBaseSpeed ??
        baseSpeed * 0.68;


      const mobileMaxCursorSpeed =
        options.mobileMaxCursorSpeed ??
        maxCursorSpeed * 0.72;


      const reduceMotion =
        window.matchMedia
          ? window.matchMedia(
              '(prefers-reduced-motion: reduce)'
            )
          : {
              matches: false
            };


      /*
         Duplicate the original content once.

         This creates the seamless infinite loop.
      */

      if (
        !track.dataset.loopDuplicated
      ) {

        track.innerHTML +=
          track.innerHTML;


        track.dataset.loopDuplicated =
          'true';

      }


      let position = 0;

      let dragging = false;

      let startX = 0;

      let startPosition = 0;

      let hovering = false;

      let cursorRatio = 0;

      let singleSetWidth =
        track.scrollWidth / 2;


      function isMobile() {

        return window.innerWidth <= 768;

      }


      function getBaseSpeed() {

        return isMobile()

          ? mobileBaseSpeed

          : baseSpeed;

      }


      function getMaxCursorSpeed() {

        return isMobile()

          ? mobileMaxCursorSpeed

          : maxCursorSpeed;

      }


      function wrapPosition() {

        if (
          singleSetWidth <= 0
        ) {

          return;

        }


        if (
          position <=
          -singleSetWidth
        ) {

          position +=
            singleSetWidth;

        }


        if (
          position > 0
        ) {

          position -=
            singleSetWidth;

        }

      }


      function render() {

        track.style.transform =
          'translate3d(' +
          position +
          'px,0,0)';

      }


      function animate() {

        /*
           Keep auto-scrolling unless
           reduced motion is requested.
        */

        if (
          !dragging &&
          !reduceMotion.matches
        ) {

          let speed =
            getBaseSpeed();


          /*
             Desktop cursor direction.

             Move cursor to the right:
             strip moves right.

             Move cursor to the left:
             strip moves left.

             Near the center:
             normal automatic movement.
          */

          if (
            hovering &&
            Math.abs(cursorRatio) > 0.06
          ) {

            speed =
              cursorRatio *
              getMaxCursorSpeed();

          }


          position -=
            speed;


          wrapPosition();

          render();

        }


        requestAnimationFrame(
          animate
        );

      }


      requestAnimationFrame(
        animate
      );


      /* ========================================================
         MOUSE HOVER
      ======================================================== */

      wrap.addEventListener(
        'mouseenter',
        function () {

          hovering = true;

        }
      );


      wrap.addEventListener(
        'mouseleave',
        function () {

          hovering = false;

          cursorRatio = 0;

        }
      );


      /* ========================================================
         MOUSE CURSOR DIRECTION
      ======================================================== */

      wrap.addEventListener(
        'mousemove',
        function (event) {

          const rect =
            wrap.getBoundingClientRect();


          if (
            rect.width <= 0
          ) {

            return;

          }


          const ratio =
            (
              (
                event.clientX -
                rect.left
              ) /
              rect.width
            ) * 2 - 1;


          cursorRatio =
            Math.max(
              -1,
              Math.min(
                1,
                ratio
              )
            );

        }
      );


      /* ========================================================
         MOUSE DRAG
      ======================================================== */

      wrap.addEventListener(
        'mousedown',
        function (event) {

          if (
            event.button !== 0
          ) {

            return;

          }


          dragging = true;

          wrap.classList.add(
            'dragging'
          );


          startX =
            event.clientX;


          startPosition =
            position;


          event.preventDefault();

        }
      );


      window.addEventListener(
        'mouseup',
        function () {

          if (
            !dragging
          ) {

            return;

          }


          dragging = false;


          wrap.classList.remove(
            'dragging'
          );

        }
      );


      window.addEventListener(
        'mousemove',
        function (event) {

          if (
            !dragging
          ) {

            return;

          }


          position =
            startPosition +
            (
              event.clientX -
              startX
            );


          wrapPosition();

          render();

        }
      );


      /* ========================================================
         TOUCH / MOBILE SWIPE
      ======================================================== */

      wrap.addEventListener(
        'touchstart',
        function (event) {

          if (
            !event.touches.length
          ) {

            return;

          }


          dragging = true;


          startX =
            event.touches[0].clientX;


          startPosition =
            position;

        },
        {
          passive: true
        }
      );


      wrap.addEventListener(
        'touchmove',
        function (event) {

          if (
            !dragging ||
            !event.touches.length
          ) {

            return;

          }


          position =
            startPosition +
            (
              event.touches[0].clientX -
              startX
            );


          wrapPosition();

          render();

        },
        {
          passive: true
        }
      );


      wrap.addEventListener(
        'touchend',
        function () {

          dragging = false;

        }
      );


      wrap.addEventListener(
        'touchcancel',
        function () {

          dragging = false;

        }
      );


      /* ========================================================
         HORIZONTAL WHEEL
      ======================================================== */

      wrap.addEventListener(
        'wheel',
        function (event) {

          /*
             Only capture horizontal wheel movement.
             Normal vertical page scrolling continues normally.
          */

          if (
            Math.abs(event.deltaX) <
            Math.abs(event.deltaY)
          ) {

            return;

          }


          event.preventDefault();


          position -=
            event.deltaX;


          wrapPosition();

          render();

        },
        {
          passive: false
        }
      );


      /* ========================================================
         RESIZE
      ======================================================== */

      window.addEventListener(
        'resize',
        function () {

          singleSetWidth =
            track.scrollWidth / 2;

        }
      );

    }


    /* ==========================================================
       FOUNDERS STRIP
    ========================================================== */

    initDriftStrip(
      '.founders-strip-wrap',
      '.founders-track',
      {
        baseSpeed: 0.28,
        maxCursorSpeed: 1.2,

        mobileBaseSpeed: 0.18,
        mobileMaxCursorSpeed: 0.82
      }
    );


    /* ==========================================================
       HORIZONTAL GALLERY STRIP
    ========================================================== */

    initDriftStrip(
      '.hscroll-wrap',
      '.hscroll-track',
      {
        baseSpeed: 0.40,
        maxCursorSpeed: 1.6,

        mobileBaseSpeed: 0.24,
        mobileMaxCursorSpeed: 1.0
      }
    );


    /* ==========================================================
       LIGHTBOX
    ========================================================== */

    const lightbox =
      document.querySelector(
        '.lightbox'
      );


    if (lightbox) {

      const lbImg =
        lightbox.querySelector(
          'img'
        );


      const lbCaption =
        lightbox.querySelector(
          '.lightbox-caption'
        );


      const openers =
        document.querySelectorAll(
          '[data-lightbox]'
        );


      const items = [];


      let current = 0;


      openers.forEach(
        function (element) {

          items.push({

            src:
              element.getAttribute(
                'data-lightbox'
              ),

            caption:
              element.getAttribute(
                'data-caption'
              ) || ''

          });

        }
      );


      function updateLightbox() {

        if (
          !items[current]
        ) {

          return;

        }


        if (lbImg) {

          lbImg.src =
            items[current].src;


          lbImg.alt =
            items[current].caption;

        }


        if (lbCaption) {

          lbCaption.textContent =
            items[current].caption;

        }

      }


      function openLightbox(
        index
      ) {

        if (
          !items.length
        ) {

          return;

        }


        current =
          index;


        updateLightbox();


        lightbox.classList.add(
          'open'
        );


        document.body.style.overflow =
          'hidden';

      }


      function closeLightbox() {

        lightbox.classList.remove(
          'open'
        );


        document.body.style.overflow =
          '';

      }


      /* Click gallery images */

      openers.forEach(
        function (
          element,
          index
        ) {

          element.addEventListener(
            'click',
            function () {

              openLightbox(
                index
              );

            }
          );

        }
      );


      /* Close */

      lightbox
        .querySelector(
          '.lb-close'
        )
        ?.addEventListener(
          'click',
          closeLightbox
        );


      /* Click outside */

      lightbox.addEventListener(
        'click',
        function (event) {

          if (
            event.target ===
            lightbox
          ) {

            closeLightbox();

          }

        }
      );


      /* Previous */

      lightbox
        .querySelector(
          '.lb-prev'
        )
        ?.addEventListener(
          'click',
          function () {

            if (
              !items.length
            ) {

              return;

            }


            current =
              (
                current -
                1 +
                items.length
              ) %
              items.length;


            updateLightbox();

          }
        );


      /* Next */

      lightbox
        .querySelector(
          '.lb-next'
        )
        ?.addEventListener(
          'click',
          function () {

            if (
              !items.length
            ) {

              return;

            }


            current =
              (
                current +
                1
              ) %
              items.length;


            updateLightbox();

          }
        );


      /* Keyboard */

      document.addEventListener(
        'keydown',
        function (event) {

          if (
            !lightbox.classList.contains(
              'open'
            )
          ) {

            return;

          }


          if (
            event.key ===
            'Escape'
          ) {

            closeLightbox();

          }


          if (
            event.key ===
            'ArrowLeft'
          ) {

            current =
              (
                current -
                1 +
                items.length
              ) %
              items.length;


            updateLightbox();

          }


          if (
            event.key ===
            'ArrowRight'
          ) {

            current =
              (
                current +
                1
              ) %
              items.length;


            updateLightbox();

          }

        }
      );

    }


    /* ==========================================================
       GALLERY PAGE FILTER
    ========================================================== */

    const filterBtns =
      document.querySelectorAll(
        '.filter-btn'
      );


    const masonryItems =
      document.querySelectorAll(
        '.masonry .m-item'
      );


    filterBtns.forEach(
      function (button) {

        button.addEventListener(
          'click',
          function () {

            filterBtns.forEach(
              function (item) {

                item.classList.remove(
                  'active'
                );

              }
            );


            button.classList.add(
              'active'
            );


            const category =
              button.getAttribute(
                'data-filter'
              );


            masonryItems.forEach(
              function (item) {

                const show =
                  category === 'all' ||
                  item.getAttribute(
                    'data-category'
                  ) === category;


                item.style.display =
                  show
                    ? ''
                    : 'none';


                if (show) {

                  item.classList.remove(
                    'is-visible'
                  );


                  requestAnimationFrame(
                    function () {

                      item.classList.add(
                        'is-visible'
                      );

                    }
                  );

                }

              }
            );

          }
        );

      }
    );

  }


  /* ============================================================
     SAFE START
     
     This allows the file to work whether it is loaded
     before or after DOMContentLoaded.
  ============================================================ */

  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      init,
      {
        once: true
      }
    );

  } else {

    init();

  }


})();