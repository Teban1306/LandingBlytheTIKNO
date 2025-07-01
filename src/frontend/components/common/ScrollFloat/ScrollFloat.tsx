import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03
}: ScrollFloatProps) => {
  const containerRef = useRef(null);



  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;



    gsap.fromTo(
      el,
      {
        willChange: "opacity, transform",
        opacity: 0,
        y: 100,
        scale: 0.9,
        transformOrigin: "center center"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: 0.5,
          toggleActions: "play none none reverse"
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <div
      ref={containerRef}
      className={containerClassName}
    >
      {children}
    </div>
  );
};

export default ScrollFloat;