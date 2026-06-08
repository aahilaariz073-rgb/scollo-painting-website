// Quote + Services screens for the Scollo Painting website UI kit.
(function () {
  const DS = window.ScolloPaintingDesignSystem_9ecefb || {};
  const { Button, PhoneLink, Badge, SectionHeading, ServiceCard, Input, Select, Textarea, Card } = DS;
  const Icon = window.Icon;
  const Placeholder = window.Placeholder;

  function Breadcrumb({ items, onNavigate }) {
    return (
      <nav style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--text-muted)", marginBottom: 22 }}>
        {items.map((it, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Icon name="chevron-right" size={14} color="var(--stone-400)" />}
            {it.route ? (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(it.route); }} style={{ color: "var(--text-muted)", textDecoration: "none" }}>{it.label}</a>
            ) : (
              <span style={{ color: "var(--text-strong)", fontWeight: 600 }}>{it.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }
  window.Breadcrumb = Breadcrumb;

  function QuoteScreen({ onNavigate }) {
    const [sent, setSent] = React.useState(false);
    const cities = window.CITIES || [];
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--space-7) 0 var(--space-9)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <Breadcrumb items={[{ label: "Home", route: "home" }, { label: "Get a Free Quote" }]} onNavigate={onNavigate} />
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 48, alignItems: "start" }} className="quote-grid">
            <div>
              <SectionHeading as="h1" eyebrow="Get a free quote" title="Tell us about" accent="your project."
                lead="Fill out the form and our team will follow up with a fixed, transparent quote — usually within one business day." />
              <Card variant="default" padding="var(--space-7)" style={{ marginTop: 30 }}>
                {sent ? (
                  <div style={{ textAlign: "center", padding: "30px 10px" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--amber-50)", border: "1px solid var(--amber-100)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--amber-600)", marginBottom: 18 }}>
                      <Icon name="check" size={30} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 26, margin: "0 0 10px", color: "var(--text-strong)" }}>Thanks — we'll be in touch.</h3>
                    <p style={{ margin: "0 0 22px", color: "var(--text-body)" }}>Your request is in. Expect a call from our team at 561-306-1813 shortly.</p>
                    <Button variant="secondary" onClick={() => setSent(false)}>Submit another</Button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="form-grid">
                      <Input label="Full name" required placeholder="Jane Smith" id="q-name" />
                      <Input label="Phone" type="tel" required placeholder="561-000-0000" id="q-phone" />
                      <Input label="Email" type="email" required placeholder="you@email.com" id="q-email" />
                      <Select label="City" placeholder="Select your city…" options={["Stuart", ...cities]} id="q-city" />
                      <div style={{ gridColumn: "1 / -1" }}>
                        <Select label="Service type" required placeholder="Choose a service…" id="q-service"
                          options={["Interior Painting", "Exterior Painting", "Commercial Painting", "Plaster & Drywall Repair"]} />
                      </div>
                      <div style={{ gridColumn: "1 / -1" }}>
                        <Textarea label="Project details" rows={4} placeholder="Tell us about your project — rooms, square footage, timeline…" id="q-details" />
                      </div>
                    </div>
                    <div style={{ marginTop: 24, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                      <Button variant="primary" size="lg" type="submit">Request my free quote</Button>
                      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>No obligation · Fixed pricing up front</span>
                    </div>
                  </form>
                )}
              </Card>
            </div>

            <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <Card variant="navy" padding="var(--space-6)">
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, color: "var(--text-on-dark)", margin: "0 0 16px" }}>Prefer to call?</h3>
                <span style={{ fontSize: 20 }}><PhoneLink tone="light" /></span>
                <div style={{ height: 1, background: "var(--border-on-dark)", margin: "20px 0" }} />
                <Row icon="map-pin" tone="light">848 S.E. Fleming Way, Stuart, FL 34997</Row>
                <Row icon="clock" tone="light">Mon–Sat 9:00 AM – 5:00 PM · Sun Closed</Row>
                <Row icon="shield-check" tone="light">Licensed &amp; fully insured</Row>
              </Card>
              <Card variant="panel" padding="var(--space-6)">
                <div style={{ display: "flex", gap: 3, color: "var(--amber-500)", marginBottom: 10 }}>
                  {[0,1,2,3,4].map((i) => <Icon key={i} name="star" size={18} color="var(--amber-500)" />)}
                </div>
                <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 18, lineHeight: 1.5, color: "var(--text-strong)", margin: "0 0 10px" }}>
                  "[ Drop a real customer testimonial here — quality, clean-up, and value. ]"
                </p>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>— Homeowner, [ City ], FL</div>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  function Row({ icon, children, tone }) {
    const light = tone === "light";
    return (
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: light ? "var(--text-on-dark-muted)" : "var(--text-body)", marginBottom: 12 }}>
        <Icon name={icon} size={17} color="var(--amber-500)" style={{ flex: "0 0 auto", marginTop: 1 }} />
        <span>{children}</span>
      </div>
    );
  }

  function ServicesScreen({ onNavigate }) {
    const services = window.SERVICES || [];
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--space-7) 0 var(--space-9)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <Breadcrumb items={[{ label: "Home", route: "home" }, { label: "Services" }]} onNavigate={onNavigate} />
          <SectionHeading as="h1" eyebrow="Our services" title="Residential & commercial" accent="painting." maxWidth="640px"
            lead="From a single room to a full commercial exterior — careful prep, durable finishes, and a single point of contact from quote to final walkthrough." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, marginTop: 44 }} className="services-grid-2">
            {services.map((s) => (
              <div key={s.title} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--surface-card)", boxShadow: "var(--shadow-sm)" }} className="service-row">
                <Placeholder label={`[ ${s.title} photo ]`} ratio="auto" radius="0" />
                <div style={{ padding: "var(--space-6)" }}>
                  <div style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--amber-50)", border: "1px solid var(--amber-100)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--amber-600)", marginBottom: 16 }}>
                    <Icon name={s.icon} size={24} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, margin: "0 0 10px", color: "var(--text-strong)" }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 18px" }}>{s.desc}</p>
                  <Button variant="ghost" size="sm" onClick={() => onNavigate("quote")} iconRight={<Icon name="arrow-right" size={16} />}>Get a quote</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function SimpleScreen({ title, eyebrow, lead, onNavigate, crumb }) {
    return (
      <section style={{ background: "var(--surface-page)", padding: "var(--space-7) 0 var(--space-9)", minHeight: "50vh" }}>
        <div style={{ maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <Breadcrumb items={[{ label: "Home", route: "home" }, { label: crumb || title }]} onNavigate={onNavigate} />
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} />
          <Card variant="panel" padding="var(--space-7)" style={{ marginTop: 32, textAlign: "center" }}>
            <Icon name="hammer" size={30} color="var(--amber-600)" />
            <p style={{ margin: "14px 0 20px", color: "var(--text-body)" }}>This page follows the same system — section header, content blocks, and a closing quote CTA. Built out in the full site.</p>
            <Button variant="primary" onClick={() => onNavigate("quote")}>Get a Free Quote</Button>
          </Card>
        </div>
      </section>
    );
  }

  Object.assign(window, { QuoteScreen, ServicesScreen, SimpleScreen });
})();
