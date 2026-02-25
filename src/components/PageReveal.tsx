"use client";

import { useEffect } from "react";

export default function PageReveal() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      el.style.transitionDelay = "80ms";
      el.classList.add("is-in");
    });

    document.querySelectorAll<HTMLElement>(".reveal-stagger").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.willChange = "opacity, transform, filter";
        el.style.transitionDelay = `${120 + i * 90}ms`;
        el.classList.add("is-in");
      });
    });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in")),
      { threshold: 0.12 }
    );

    document.querySelectorAll<HTMLElement>(".reveal-on-scroll").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}