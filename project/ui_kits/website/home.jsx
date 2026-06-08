// Home page sections for the Scollo Painting website UI kit.
(function () {
  const DS = window.ScolloPaintingDesignSystem_9ecefb || {};
  const { Button, PhoneLink, Badge, SectionHeading, ServiceCard, TrustItem, BeforeAfter, Card } = DS;
  const Icon = window.Icon;

  const SERVICES = [
    { icon: "paint-roller", title: "Interior Painting", desc: "Walls, ceilings, trim, doors and cabinets — careful prep, furniture protection, clean lines, and full post-job cleanup." },
    { icon: "home", title: "Exterior Painting", desc: "Transform your curb appeal — siding, stucco, trim and doors with Florida-climate-appropriate prep and durable finishes." },
    { icon: "building-2", title: "Commercial Painting", desc: "Retail, industrial and institutional projects, small to large — scheduled flexibly around your business operations." },
    { icon: "wrench", title: "Plaster & Drywall Repair", desc: "We fix the root cause, not just the symptom — patching, skim coating and texture matching for a durable next coat." },
  ];

  const WHY = [
    { icon: "award", title: "Industry experts", body: "Over 45 years of hands-on craftsmanship across thousands of homes and businesses." },
    { icon: "timer", title: "Quick turnaround", body: "On schedule and out of your way — we respect your time and your property." },
    { icon: "receipt-text", title: "Cost transparency", body: "Fixed pricing quoted up front. No hidden costs, no surprises on the final invoice." },
    { icon: "heart-handshake", title: "Customer service", body: "One company, one point of contact — the full package under a single roof." },
  ];

  // Resolve a bundled resource (standalone build) or fall back to a live URL.
  function res(id, fallback) {
    return (typeof window !== "undefined" && window.__resources && window.__resources[id]) || fallback;
  }
  const IMG = {
    interior: () => res("imgInterior", "https://images.unsplash.com/photo-1759238136854-a43787126db7?fm=jpg&q=70&w=1400&auto=format&fit=crop"),
    crew: () => res("imgCrew", "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?fm=jpg&q=70&w=1400&auto=format&fit=crop"),
  };
  window.IMG = IMG;

  function Placeholder({ label, ratio = "16/10", tone = "warm", radius = "var(--radius-lg)", src, alt, children }) {
    const bg = tone === "navy"
      ? "repeating-linear-gradient(135deg,#26405f,#26405f 16px,#22395420 16px,#223954 32px)"
      : "repeating-linear-gradient(135deg,#cdbfa8,#cdbfa8 16px,#c3b59d 16px,#c3b59d 32px)";
    return (
      <div style={{ position: "relative", aspectRatio: ratio, borderRadius: radius, overflow: "hidden", background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {src
          ? <img src={src} alt={alt || label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          : <span style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: tone === "navy" ? "rgba(255,255,255,0.78)" : "var(--stone-600)", letterSpacing: "0.04em", textAlign: "center", padding: "0 18px" }}>
              {label}
            </span>}
        {children}
      </div>
    );
  }
  window.Placeholder = Placeholder;

  function Hero({ onNavigate }) {
    return (
      <section style={{ position: "relative" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-8) var(--gutter) var(--space-9)", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 22 }}>
              <Badge tone="accent">Over 45 years in business</Badge>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 5 }}>
                <Icon name="map-pin" size={14} color="var(--amber-600)" /> Stuart, FL
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.6rem,5vw,4.25rem)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.025em", color: "var(--text-strong)", margin: "0 0 20px" }}>
              A finish your home <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--amber-600)" }}>deserves.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 30px", maxWidth: 520 }}>
              For over 45 years, families and businesses across the Treasure Coast have trusted our crew for clean lines, durable finishes, and pricing quoted up front — with no surprises.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Button variant="primary" size="lg" onClick={() => onNavigate("quote")}>Get a Free Quote</Button>
              <Button variant="secondary" size="lg" href="tel:+15613061813" iconLeft={<Icon name="phone" size={18} />}>561-306-1813</Button>
            </div>
            <div style={{ display: "flex", gap: 26, marginTop: 34, flexWrap: "wrap" }}>
              {[["shield-check","Licensed & fully insured"],["star","45+ years experience"],["map","20 cities served"]].map(([ic, t]) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontSize: 13.5, fontWeight: 600, color: "var(--stone-600)" }}>
                  <Icon name={ic} size={17} color="var(--amber-600)" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Placeholder src={IMG.interior()} alt="Freshly painted, light-filled modern living room by Scollo Painting Inc. in Stuart, FL" ratio="4/5" />
            <div style={{ position: "absolute", bottom: 22, left: -26, background: "var(--surface-card)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, border: "1px solid var(--border-subtle)", width: 268 }} className="hero-card">
              <div style={{ display: "flex", gap: 2, color: "var(--amber-500)", flex: "0 0 auto" }}>
                {[0,1,2,3,4].map((i) => <Icon key={i} name="star" size={15} color="var(--amber-500)" />)}
              </div>
              <div style={{ lineHeight: 1.35 }}>
                <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 14, color: "var(--text-strong)" }}>Trusted by homeowners</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--text-muted)", marginTop: 2 }}>[ Pull live review count ]</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function ServicesGrid({ onNavigate }) {
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--space-9) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <SectionHeading eyebrow="What we do" title="Painting services," accent="done right." align="center" maxWidth="600px"
            lead="Residential and commercial painting and repair — one company, one point of contact, the full package under a single roof." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22, marginTop: 48 }} className="services-grid">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} icon={<Icon name={s.icon} size={26} />} title={s.title} description={s.desc} onClick={() => onNavigate("services")} href="#" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  function WhyUs() {
    return (
      <section style={{ background: "var(--navy-900)", padding: "var(--space-9) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "center" }} className="why-grid">
          <div>
            <SectionHeading tone="light" eyebrow="Why homeowners choose us" title="Professionalism, expertise," accent="and genuine care."
              lead="Quality work at fair, transparent prices — delivered with the kind of care we'd want for our own homes." />
            <div style={{ marginTop: 30 }}>
              <Button variant="primary" size="lg" href="#">About our family business</Button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="why-items">
            {WHY.map((w) => (
              <TrustItem key={w.title} tone="light" title={w.title} icon={<Icon name={w.icon} size={18} />}>{w.body}</TrustItem>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function GallerySection() {
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--space-9) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <SectionHeading eyebrow="See the difference" title="Before &" accent="after."
            lead="Drag to reveal the transformation. Real projects across Palm Beach, Martin and Broward Counties." />
          <div style={{ marginTop: 40 }}>
            <BeforeAfter height={460} before={IMG.crew()} after={IMG.interior()} beforeLabel="Mid-project" afterLabel="Finished" alt="Interior repaint in progress and finished by Scollo Painting Inc." />
          </div>
        </div>
      </section>
    );
  }

  function AreasSection({ onNavigate }) {
    const cities = window.CITIES || [];
    return (
      <section style={{ background: "var(--surface-panel)", padding: "var(--space-9) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <SectionHeading eyebrow="Areas serviced" title="Painters across the" accent="Treasure Coast." align="center" maxWidth="620px"
            lead="Proudly serving 20 communities throughout Palm Beach, Martin and Broward Counties — from Stuart to Fort Lauderdale." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 40, maxWidth: 880, marginInline: "auto" }}>
            {cities.map((c) => (
              <a key={c} href="#" onClick={(e) => { e.preventDefault(); onNavigate("areas"); }}
                style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: "var(--navy-800)", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-pill)", padding: "8px 16px", textDecoration: "none" }}>
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { Hero, ServicesGrid, WhyUs, GallerySection, AreasSection, SERVICES, WHY });
})();
