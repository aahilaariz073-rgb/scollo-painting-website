"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "./icons";

type Item = { src: string; alt: string; caption: string };

/** Gallery grid with a click-to-open lightbox (arrow keys / Esc supported). */
export default function GalleryGrid({ children }: { children: ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const figs = Array.from(gridRef.current?.querySelectorAll<HTMLElement>(".gallery-item") ?? []);
    setItems(
      figs.map((fig) => {
        const img = fig.querySelector("img");
        return {
          src: img?.currentSrc || img?.src || "",
          alt: img?.alt ?? "",
          caption: fig.querySelector("figcaption")?.textContent ?? "",
        };
      }),
    );
  }, []);

  const open = current !== null && items.length > 0;
  const close = useCallback(() => setCurrent(null), []);
  const step = useCallback(
    (d: number) => setCurrent((c) => (c === null ? c : (c + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const item = current !== null ? items[current] : undefined;

  return (
    <>
      <div
        ref={gridRef}
        className="gallery-grid"
        onClick={(e) => {
          const fig = (e.target as HTMLElement).closest<HTMLElement>(".gallery-item");
          if (!fig || !gridRef.current) return;
          const idx = Array.from(gridRef.current.querySelectorAll(".gallery-item")).indexOf(fig);
          if (idx >= 0) setCurrent(idx);
        }}
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>

      <div
        className={`lb-overlay${open ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <button className="lb-close" aria-label="Close" onClick={close}>
          <X size={28} strokeWidth={2.2} />
        </button>
        <button className="lb-prev" aria-label="Previous" onClick={() => step(-1)}>
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="lb-content">
          {item && <img className="lb-img" src={item.src} alt={item.alt} />}
          <p className="lb-caption">{item?.caption}</p>
        </div>
        <button className="lb-next" aria-label="Next" onClick={() => step(1)}>
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
