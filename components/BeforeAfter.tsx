"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** Draggable before/after comparison. Children must contain `.ba-before-clip` and `.ba-handle`. */
export default function BeforeAfter({
  children,
  style,
  ariaLabel,
}: {
  children: ReactNode;
  style?: CSSProperties;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const setPos = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const handle = el.querySelector<HTMLElement>(".ba-handle");
    const clip = el.querySelector<HTMLElement>(".ba-before-clip");
    if (handle) handle.style.left = pct + "%";
    if (clip) clip.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => setPos(e.clientX);
    const touch = (e: TouchEvent) => setPos(e.touches[0].clientX);
    const stop = () => setDragging(false);
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", touch, { passive: true });
    document.addEventListener("mouseup", stop);
    document.addEventListener("touchend", stop);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", touch);
      document.removeEventListener("mouseup", stop);
      document.removeEventListener("touchend", stop);
    };
  }, [dragging, setPos]);

  return (
    <div
      ref={ref}
      className="before-after"
      style={style}
      role="img"
      aria-label={ariaLabel}
      onMouseDown={(e) => {
        setDragging(true);
        setPos(e.clientX);
        e.preventDefault();
      }}
      onTouchStart={(e) => {
        setDragging(true);
        setPos(e.touches[0].clientX);
      }}
    >
      {children}
    </div>
  );
}
