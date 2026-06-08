// Lucide icon helper for the Scollo website UI kit.
// Renders a Lucide line icon at a given em-size; color via currentColor.
function Icon({ name, size = 20, color, strokeWidth = 1.9, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}"></i>`;
      window.lucide.createIcons({ attrs: { "stroke-width": strokeWidth }, nameAttr: "data-lucide", root: ref.current });
    }
  }, [name, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: size, color: color || "inherit", lineHeight: 0, ...style }}
    />
  );
}

window.Icon = Icon;
