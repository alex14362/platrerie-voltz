"use client";
import { useEffect } from "react";

export default function PageReveal() {
  useEffect(() => {
    // Apparition du conteneur principal
    const roots = document.querySelectorAll(".reveal");
    roots.forEach((el) => {
      (el as HTMLElement).style.transitionDelay = "80ms"; // petit offset global
      el.classList.add("is-in");
    });

    // Stagger premium des enfants
    const groups = document.querySelectorAll(".reveal-stagger");
    groups.forEach((group) => {
      const kids = Array.from(group.children) as HTMLElement[];
      kids.forEach((child, i) => {
        child.style.willChange = "opacity, transform, filter";
        child.style.transitionDelay = `${120 + i * 90}ms`; // 120ms + 90ms par item
        child.classList.add("is-in");
      });
    });

    // (optionnel) apparition au scroll pour éléments isolés
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-in"));
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
