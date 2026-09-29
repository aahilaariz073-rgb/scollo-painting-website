"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = ".service-card, .trust-item, .about-stat, .area-card, .faq-item";

/** Fades matching elements in as they scroll into view. Re-scans on every route change. */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(SELECTOR).forEach((el) => {
      el.classList.add("reveal");
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
