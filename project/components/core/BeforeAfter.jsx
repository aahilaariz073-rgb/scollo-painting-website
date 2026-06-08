import React from "react";

/**
 * Before/After comparison slider. Pass before/after as image src strings, or
 * leave empty to render labeled placeholder blocks for the client to fill.
 */
export function BeforeAfter({ before, after, beforeLabel = "Before", afterLabel = "After", alt = "Before and after painting comparison", height = 420 }) {
  const [pos, setPos] = React.useState(50);
  const ref = React.useRef(null);
  const dragging = React.useRef(false);

  const move = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  React.useEffect(() => {
    const up = () => (dragging.current = false);
    const mv = (e) => dragging.current && move(e.touches ? e.touches[0].clientX : e.clientX);
    window.addEventListener("mousemove", mv);
    window.addEventListener("touchmove", mv);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("touchmove", mv);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  const Panel = ({ src, label, side }) => (
    <div style={{ position: "absolute", inset: 0 }}>
      {src ? (
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <div style={{
          width: "100%", height: "100%",
          background: side === "before"
            ? "repeating-linear-gradient(135deg,#8c8378,#8c8378 14px,#827a6f 14px,#827a6f 28px)"
            : "repeating-linear-gradient(135deg,#3a5170,#3a5170 14px,#34496685 14px,#344966 28px)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "rgba(255,255,255,0.85)", letterSpacing: "0.05em", padding: "0 16px", textAlign: "center" }}>
            [ {side === "before" ? "Worn / faded surface" : "Freshly painted finish"} — drop client photo ]
          </span>
        </div>
      )}
      <span style={{
        position: "absolute", top: 14, [side === "before" ? "left" : "right"]: 14,
        fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 12, letterSpacing: "0.08em",
        textTransform: "uppercase", color: "#fff", background: "rgba(15,32,52,0.72)",
        padding: "5px 11px", borderRadius: "var(--radius-pill)",
      }}>{label}</span>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", height, borderRadius: "var(--radius-lg)", overflow: "hidden", userSelect: "none", boxShadow: "var(--shadow-md)", cursor: "ew-resize" }}
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
    >
      <Panel src={after} label={afterLabel} side="after" />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Panel src={before} label={beforeLabel} side="before" />
      </div>
      {/* handle */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "var(--amber-500)", transform: "translateX(-1px)" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 44, height: 44, borderRadius: "50%", background: "var(--amber-500)",
          display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--navy-950)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/><polyline points="9 6 15 12 9 18" transform="translate(0)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
