import { useEffect } from 'react';
import anime from 'animejs';
import { getMousePos } from './helpers'

const useTiltObj = (el: any, options: any) => {
    if (!el) return;

    const DOM = {
      img: el.querySelector(".content__img"),
      title: el.querySelector(".content__title"),
    };

    const movement = {
      img: {
        translation: {
          x: -40,
          y: -40,
          ...options?.movement?.img?.translation,
        },
      },
      title: {
        translation: {
          x: 20,
          y: 20,
          ...options?.movement?.title?.translation,
        },
      },
    };

    const mouseEnterFn = (ev: any) => {
      anime.remove(DOM.img);
      anime.remove(DOM.title);
    };

    const mouseMoveFn = (ev: any) => {
        requestAnimationFrame(() => {
            // Mouse position relative to the document.
            const mousepos = getMousePos(ev);
            // Document scrolls.
            const docScrolls = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop
            };
            const bounds = el.getBoundingClientRect();
            // Mouse position relative to the main element.
            const relmousepos = {
                x: mousepos.x - bounds.left - docScrolls.left,
                y: mousepos.y - bounds.top - docScrolls.top
            };
    
            // Movement settings for the animatable elements.
            const t = {
                img: movement.img.translation,  // Assuming movement is defined somewhere in the parent scope.
                title: movement.title.translation
            };
            const transforms = {
                img: {
                    x: ((-1 * t.img.x - t.img.x) / bounds.width) * relmousepos.x + t.img.x,
                    y: ((-1 * t.img.y - t.img.y) / bounds.height) * relmousepos.y + t.img.y
                },
                title: {
                    x: ((-1 * t.title.x - t.title.x) / bounds.width) * relmousepos.x + t.title.x,
                    y: ((-1 * t.title.y - t.title.y) / bounds.height) * relmousepos.y + t.title.y
                }
            };
    
            const imgElement = el.querySelector(".content__img");
            const titleElement = el.querySelector(".content__title");

            if (imgElement) {
              imgElement.style.WebkitTransform = imgElement.style.transform = `translateX(${transforms.img.x}px) translateY(${transforms.img.y}px)`;
          }
  
          if (titleElement) {
              titleElement.style.WebkitTransform = titleElement.style.transform = `translateX(${transforms.title.x}px) translateY(${transforms.title.y}px)`;
          }
        });
    };
    

    const mouseLeaveFn = (ev: any) => {
      requestAnimationFrame(() => {
        const validTargets = [DOM.img, DOM.title].filter(Boolean);
        anime({
          targets: [validTargets],
          duration: 1500,
          easing: "easeOutElastic",
          elasticity: 400,
          translateX: 0,
          translateY: 0,
        });
      });
    };

    el.addEventListener("mousemove", mouseMoveFn);
    el.addEventListener("mouseleave", mouseLeaveFn);
    el.addEventListener("mouseenter", mouseEnterFn);

    return () => {
      el.removeEventListener("mousemove", mouseMoveFn);
      el.removeEventListener("mouseleave", mouseLeaveFn);
      el.removeEventListener("mouseenter", mouseEnterFn);
    };
};

export default useTiltObj;
