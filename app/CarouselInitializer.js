"use client";

import { useEffect } from "react";

export default function CarouselInitializer() {
  useEffect(() => {
    const cleanups = [];

    document.querySelectorAll(".service-carousel, .js-carousel").forEach((carousel) => {
      const viewport = carousel.querySelector(".carousel-viewport, .service-carousel-viewport");
      const cards = [...carousel.querySelectorAll(".service-card, .review-card")];
      const dots = [...carousel.querySelectorAll(".carousel-dot")];
      const prevButton = carousel.querySelector('[data-carousel="prev"]');
      const nextButton = carousel.querySelector('[data-carousel="next"]');

      if (!viewport || cards.length === 0 || !prevButton || !nextButton) {
        return;
      }

      const getActiveIndex = () => Math.round(viewport.scrollLeft / viewport.clientWidth);
      const setActiveDot = () => {
        const activeIndex = getActiveIndex();

        dots.forEach((dot, index) => {
          dot.classList.toggle("is-active", index === activeIndex);
          dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
        });
      };

      const goToSlide = (index) => {
        const normalizedIndex = (index + cards.length) % cards.length;
        viewport.scrollTo({
          left: normalizedIndex * viewport.clientWidth,
          behavior: "smooth",
        });
      };

      const goPrev = () => goToSlide(getActiveIndex() - 1);
      const goNext = () => goToSlide(getActiveIndex() + 1);
      const dotHandlers = dots.map((dot) => {
        const handler = () => goToSlide(Number(dot.dataset.slide));
        dot.addEventListener("click", handler);
        return [dot, handler];
      });

      prevButton.addEventListener("click", goPrev);
      nextButton.addEventListener("click", goNext);
      viewport.addEventListener("scroll", setActiveDot, { passive: true });
      window.addEventListener("resize", setActiveDot);
      setActiveDot();

      cleanups.push(() => {
        prevButton.removeEventListener("click", goPrev);
        nextButton.removeEventListener("click", goNext);
        viewport.removeEventListener("scroll", setActiveDot);
        window.removeEventListener("resize", setActiveDot);
        dotHandlers.forEach(([dot, handler]) => dot.removeEventListener("click", handler));
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
