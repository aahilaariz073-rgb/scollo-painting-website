// Site chrome for the Scollo Painting website: Header, CtaBand, Footer.
(function () {
  const DS = window.ScolloPaintingDesignSystem_9ecefb || {};
  const { Button, PhoneLink, Badge } = DS;
  const Icon = window.Icon;

  const NAV = [
    { label: "Home", route: "home" },
    { label: "About", route: "about" },
    { label: "Services", route: "services" },
    { label: "Areas Serviced", route: "areas" },
    { label: "Gallery", route: "gallery" },
    { label: "FAQ", route: "faq" },
    { label: "Contact", route: "contact" },
  ];

  function Header({ route, onNavigate }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    React.useEffect(() => {
      const el = document.querySelector("[data-scroll-root]") || window;
      const onScroll = () => {
        const y = el === window ? window.scrollY : el.scrollTop;
        setScrolled(y > 24);
      };
      el.addEventListener("scroll", onScroll);
      return () => el.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <header
        style={{
          position: "sticky", top: 0, zIndex: 50,
          background: scrolled ? "rgba(250,248,244,0.86)" : "var(--surface-page)",
          backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`,
          transition: "background var(--dur-base), border-color var(--dur-base)",
        }}
      >
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)", height: "var(--header-h)", display: "flex", alignItems: "center", gap: 24 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }} style={{ display: "flex", alignItems: "center" }}>
            <img src={(window.__resources && window.__resources.logoLight) || "../../assets/logo-wordmark.svg"} alt="Scollo Painting Inc." style={{ height: 42 }} />
          </a>
          <nav style={{ display: "flex", gap: 4, marginLeft: 12 }} className="primary-nav">
            {NAV.map((n) => (
              <a
                key={n.route}
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate(n.route); }}
                style={{
                  fontFamily: "var(--font-ui)", fontSize: 14.5, fontWeight: 600,
                  color: route === n.route ? "var(--amber-700)" : "var(--stone-600)",
                  padding: "8px 12px", borderRadius: "var(--radius-sm)", textDecoration: "none",
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 18 }} className="header-actions">
            <span className="header-phone" style={{ fontSize: 15 }}><PhoneLink /></span>
            <Button variant="primary" size="md" onClick={() => onNavigate("quote")}>Get a Free Quote</Button>
          </div>
          <button
            className="menu-btn"
            aria-label="Menu"
            onClick={() => setMenu((m) => !m)}
            style={{ display: "none", marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--navy-900)" }}
          >
            <Icon name={menu ? "x" : "menu"} size={26} />
          </button>
        </div>

        {menu && (
          <div className="mobile-menu" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--surface-page)", padding: "12px var(--gutter) 20px" }}>
            {NAV.map((n) => (
              <a key={n.route} href="#" onClick={(e) => { e.preventDefault(); setMenu(false); onNavigate(n.route); }}
                style={{ display: "block", padding: "12px 4px", fontFamily: "var(--font-ui)", fontWeight: 600, color: "var(--navy-900)", borderBottom: "1px solid var(--border-subtle)", textDecoration: "none" }}>
                {n.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              <Button variant="primary" fullWidth onClick={() => { setMenu(false); onNavigate("quote"); }}>Get a Free Quote</Button>
              <Button variant="secondary" href="tel:+15613061813" iconLeft={<Icon name="phone" size={17} />}>Call</Button>
            </div>
          </div>
        )}
      </header>
    );
  }

  function CtaBand({ onNavigate }) {
    return (
      <section style={{ background: "var(--navy-900)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-9) var(--gutter)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32, justifyContent: "space-between" }}>
          <div style={{ maxWidth: 620 }}>
            <hr style={{ width: 48, height: 3, background: "var(--brand-accent)", border: 0, borderRadius: 999, margin: "0 0 18px" }} />
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,3.4vw,2.6rem)", fontWeight: 600, color: "var(--text-on-dark)", lineHeight: 1.12, letterSpacing: "-0.02em", margin: "0 0 12px" }}>
              Ready for a finish that lasts? <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--amber-400)" }}>Let's talk.</span>
            </h2>
            <p style={{ color: "var(--text-on-dark-muted)", fontSize: 17, lineHeight: 1.6, margin: 0 }}>
              Fixed pricing quoted up front — no hidden costs. Serving Stuart and the Treasure Coast for over 45 years.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 230 }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate("quote")}>Get a Free Quote</Button>
            <span style={{ fontSize: 17, display: "flex", justifyContent: "center" }}><PhoneLink tone="light" /></span>
          </div>
        </div>
      </section>
    );
  }

  const CITIES = ["Delray Beach","Boca Raton","Boynton Beach","Wellington","Palm Beach Gardens","West Palm Beach","Jupiter","Hobe Sound","Jensen Beach","Lake Worth","Highland Beach","Lighthouse Point","Fort Lauderdale","Pompano Beach","Coral Springs","Parkland","Deerfield Beach","Manalapan","North Palm Beach","Royal Palm Beach"];
  const PAYMENTS = ["Visa","Mastercard","Discover","Amex","Check","Cash"];

  function Footer({ onNavigate }) {
    return (
      <footer style={{ background: "var(--navy-950)", color: "var(--text-on-dark-muted)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-9) var(--gutter) var(--space-6)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 40 }} className="footer-grid">
            <div>
              <img src={(window.__resources && window.__resources.logoDark) || "../../assets/logo-wordmark-dark.svg"} alt="Scollo Painting Inc." style={{ height: 46, marginBottom: 18 }} />
              <p style={{ fontSize: 14.5, lineHeight: 1.65, margin: "0 0 16px", maxWidth: 280 }}>
                Family-run residential & commercial painting contractor. Over 45 years of clean lines and durable finishes across the Treasure Coast.
              </p>
              <span style={{ fontSize: 15 }}><PhoneLink tone="light" /></span>
            </div>
            <div>
              <FooterHead>Company</FooterHead>
              {[["About","about"],["Services","services"],["Gallery","gallery"],["FAQ","faq"],["Get a Quote","quote"]].map(([l,r]) => (
                <FooterLink key={r} onClick={() => onNavigate(r)}>{l}</FooterLink>
              ))}
            </div>
            <div>
              <FooterHead>Services</FooterHead>
              {["Interior Painting","Exterior Painting","Commercial Painting","Plaster & Drywall Repair"].map((s) => (
                <FooterLink key={s} onClick={() => onNavigate("services")}>{s}</FooterLink>
              ))}
            </div>
            <div>
              <FooterHead>Visit / Contact</FooterHead>
              <div style={{ display: "flex", gap: 10, fontSize: 14, marginBottom: 12 }}>
                <Icon name="map-pin" size={17} color="var(--amber-500)" style={{ flex: "0 0 auto", marginTop: 1 }} />
                <span>848 S.E. Fleming Way<br/>Stuart, FL 34997</span>
              </div>
              <div style={{ display: "flex", gap: 10, fontSize: 14, marginBottom: 16 }}>
                <Icon name="clock" size={17} color="var(--amber-500)" style={{ flex: "0 0 auto", marginTop: 1 }} />
                <span>Mon–Sat 9:00 AM – 5:00 PM<br/>Sunday Closed</span>
              </div>
              {/* Google Map placeholder */}
              <div style={{ height: 120, borderRadius: "var(--radius-md)", border: "1px solid var(--border-on-dark)", background: "linear-gradient(135deg,#1b2c44,#16263d)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "var(--text-on-dark-muted)", fontSize: 12.5 }}>
                <Icon name="map" size={18} color="var(--amber-400)" /> [ Embed Google Map — Stuart, FL ]
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--border-on-dark)", marginTop: 40, paddingTop: 22 }}>
            <div style={{ fontSize: 12.5, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-on-dark-muted)", marginBottom: 12 }}>Areas Serviced</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px", fontSize: 13.5, marginBottom: 26 }}>
              {CITIES.map((c) => (
                <a key={c} href="#" onClick={(e) => { e.preventDefault(); onNavigate("areas"); }} style={{ color: "var(--text-on-dark-muted)", textDecoration: "none" }}>{c}</a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--border-on-dark)", paddingTop: 22, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18, justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
              {PAYMENTS.map((p) => (
                <span key={p} style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 700, letterSpacing: "0.03em", color: "var(--text-on-dark)", background: "rgba(255,255,255,0.07)", border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-xs)", padding: "5px 9px" }}>{p}</span>
              ))}
              <span style={{ fontSize: 12.5, marginLeft: 6 }}>Licensed &amp; fully insured</span>
            </div>
            <div style={{ fontSize: 12.5 }}>© {new Date().getFullYear()} Scollo Painting Inc. · All rights reserved.</div>
          </div>
        </div>
      </footer>
    );
  }

  function FooterHead({ children }) {
    return <div style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-on-dark)", marginBottom: 14 }}>{children}</div>;
  }
  function FooterLink({ children, onClick }) {
    return <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }} style={{ display: "block", fontSize: 14.5, color: "var(--text-on-dark-muted)", textDecoration: "none", padding: "5px 0" }}>{children}</a>;
  }

  Object.assign(window, { Header, Footer, CtaBand, CITIES, PAYMENTS });
})();
