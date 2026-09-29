import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Hobe Sound House Painters | Scollo Painting Inc." },
  description:
    "Painting contractor near Jonathan Dickinson State Park & Jupiter Island in Hobe Sound, FL. Licensed & insured, 45+ years, 4.9★ rated. Call 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/areas/hobe-sound" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Hobe Sound House Painters | Scollo Painting Inc.",
    description:
      "Painting contractor near Jonathan Dickinson State Park & Jupiter Island in Hobe Sound, FL. Licensed & insured, 45+ years, 4.9★ rated. Call 561-306-1813.",
    url: "https://scollopainting.com/areas/hobe-sound",
    siteName: "Scollo Painting Inc.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=85&w=1200&auto=format&fit=crop",
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Painter"],
        "@id": "https://scollopainting.com/#business",
        name: "Scollo Painting Inc.",
        url: "https://scollopainting.com",
        telephone: "+1-561-306-1813",
        address: {
          "@type": "PostalAddress",
          streetAddress: "848 S.E. Fleming Way",
          addressLocality: "Stuart",
          addressRegion: "FL",
          postalCode: "34997",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "27.1975",
          longitude: "-80.2528",
        },
        openingHours: "Mo-Sa 09:00-17:00",
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: "Hobe Sound",
          containedInPlace: { "@type": "State", name: "Florida" },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Painting Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interior Painting",
                areaServed: "Hobe Sound",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Painting",
                areaServed: "Hobe Sound",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Painting",
                areaServed: "Hobe Sound",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wall & Ceiling Texture and Drywall Repair",
                areaServed: "Hobe Sound",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://scollopainting.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas Serviced",
            item: "https://scollopainting.com/areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hobe Sound",
            item: "https://scollopainting.com/areas/hobe-sound",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does exterior painting cost in Hobe Sound?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Exterior painting in Hobe Sound typically costs $3,500–$9,000 for a standard home. Waterfront properties along the Intracoastal or on the southern end of Jupiter Island tend to require additional prep for salt exposure — pressure washing, sealing, and salt-resistant primers — which affects total cost. We provide fixed-price estimates so you know exactly what you're paying before we start.",
            },
          },
          {
            "@type": "Question",
            name: "Do you serve the Jupiter Island area near Hobe Sound?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — we serve the northern portion of Jupiter Island accessible from Hobe Sound, as well as communities along U.S. 1 and Bridge Road. This is one of the most environmentally sensitive areas in South Florida, and we handle paint containment, cleanup, and material disposal carefully to meet the expectations of residents who value the natural environment here.",
            },
          },
          {
            "@type": "Question",
            name: "How do salt air and humidity affect exterior paint on Hobe Sound homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Salt air and high humidity are the primary drivers of paint failure in Hobe Sound. Salt deposits accelerate corrosion on metal fasteners, cause paint to blister faster, and damage caulking around windows and trim. The solution is thorough power washing before every paint job, a quality bonding primer on all bare surfaces, and a 100% acrylic top coat with documented salt-air resistance.",
            },
          },
        ],
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <section className="location-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>{" "}
              <Link href="/areas">Areas Serviced</Link>{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>{" "}
              <span className="breadcrumb-current">Hobe Sound</span>
            </nav>
            <span className="eyebrow eyebrow--light">
              Professional painters · Hobe Sound, FL
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem,4vw,3.5rem)",
                fontWeight: "600",
                lineHeight: "1.08",
                letterSpacing: "-0.025em",
                color: "var(--text-on-dark)",
                margin: "0 0 20px",
                maxWidth: "700px",
              }}
            >
              Professional painters in Hobe Sound, FL.
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "var(--text-on-dark-muted)",
                maxWidth: "600px",
                margin: "0 0 30px",
              }}
            >
              Hobe Sound is a quiet, nature-oriented coastal community nestled
              near the Martin County line — close to Jupiter to the south and
              Jensen Beach to the north — where homes range from modest Old
              Florida cottages to multi-million-dollar estates behind private
              gates. Scollo Painting serves Hobe Sound with the same careful
              craftsmanship and respect for the local environment that this
              community values.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link href="/quote" className="btn btn--primary btn--lg">
                Get a Free Quote
              </Link>{" "}
              <a href="tel:+15613061813" className="btn btn--inverse btn--lg">
                561-306-1813
              </a>
            </div>
          </div>
        </section>
        <section className="location-content">
          <div className="container">
            <div className="location-grid">
              <div>
                <span className="eyebrow">What we offer in Hobe Sound</span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem,2.5vw,2.2rem)",
                    fontWeight: "600",
                    letterSpacing: "-0.02em",
                    margin: "0 0 16px",
                  }}
                >
                  Full-service painting for Hobe Sound homes.
                </h2>
                <p>
                  Hobe Sound's proximity to Hobe Sound National Wildlife Refuge
                  and Jonathan Dickinson State Park gives the community a
                  distinctly natural character, and many homeowners here choose
                  paint colors and finishes that complement rather than compete
                  with the surroundings. Our crews are experienced working on
                  the older wood-frame and CBS (concrete block and stucco)
                  construction common throughout this area, applying quality
                  primers and topcoats that seal out moisture while standing up
                  to the salt air from the nearby Atlantic. Whether it's a
                  beachside bungalow or a larger estate property, we bring a
                  respectful, unhurried approach to every project in Hobe Sound.
                </p>
                <div className="location-services">
                  <div className="location-service-row">
                    <div className="location-service-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 6px" }}>Interior Painting</h4>
                      <p
                        style={{
                          fontSize: "14.5px",
                          margin: "0",
                          color: "var(--text-body)",
                        }}
                      >
                        Walls, ceilings, trim, doors and cabinets — careful
                        prep, furniture protection, and full post-job cleanup.
                      </p>
                      <Link
                        href="/services/interior-painting"
                        className="service-card__link"
                        style={{
                          fontSize: "13px",
                          marginTop: "8px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--amber-600)",
                          fontWeight: "600",
                        }}
                      >
                        Learn more{" "}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="location-service-row">
                    <div className="location-service-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 6px" }}>Exterior Painting</h4>
                      <p
                        style={{
                          fontSize: "14.5px",
                          margin: "0",
                          color: "var(--text-body)",
                        }}
                      >
                        Florida-climate-appropriate prep and durable finishes
                        for siding, stucco, trim and doors.
                      </p>
                      <Link
                        href="/services/exterior-painting"
                        className="service-card__link"
                        style={{
                          fontSize: "13px",
                          marginTop: "8px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--amber-600)",
                          fontWeight: "600",
                        }}
                      >
                        Learn more{" "}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="location-service-row">
                    <div className="location-service-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                        <polyline points="17 2 12 7 7 2"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 6px" }}>Commercial Painting</h4>
                      <p
                        style={{
                          fontSize: "14.5px",
                          margin: "0",
                          color: "var(--text-body)",
                        }}
                      >
                        Retail, industrial and institutional projects scheduled
                        flexibly around your operations.
                      </p>
                      <Link
                        href="/services/commercial-painting"
                        className="service-card__link"
                        style={{
                          fontSize: "13px",
                          marginTop: "8px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--amber-600)",
                          fontWeight: "600",
                        }}
                      >
                        Learn more{" "}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="location-service-row">
                    <div className="location-service-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 6px" }}>
                        Wall & Ceiling Texture and Drywall Repair
                      </h4>
                      <p
                        style={{
                          fontSize: "14.5px",
                          margin: "0",
                          color: "var(--text-body)",
                        }}
                      >
                        Patching, skim coating and texture matching — we fix the
                        root cause before the next coat.
                      </p>
                      <Link
                        href="/services/texture-drywall-repair"
                        className="service-card__link"
                        style={{
                          fontSize: "13px",
                          marginTop: "8px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "var(--amber-600)",
                          fontWeight: "600",
                        }}
                      >
                        Learn more{" "}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card"
                  style={{ marginBottom: "var(--space-5)" }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      margin: "0 0 16px",
                    }}
                  >
                    Why Hobe Sound homeowners choose us
                  </h3>
                  <div className="location-trust-grid">
                    <div className="location-trust-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        <polyline points="9 12 11 14 15 10"></polyline>
                      </svg>{" "}
                      Licensed & insured
                    </div>
                    <div className="location-trust-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>{" "}
                      Quick turnaround
                    </div>
                    <div className="location-trust-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
                      </svg>{" "}
                      Fixed-price quotes
                    </div>
                    <div className="location-trust-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 010 7.75"></path>
                      </svg>{" "}
                      45+ years experience
                    </div>
                  </div>
                </div>
                <div className="card card--navy">
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      color: "var(--text-on-dark)",
                      margin: "0 0 16px",
                    }}
                  >
                    Ready to get started?
                  </h3>
                  <Link
                    href="/quote"
                    className="btn btn--primary btn--md btn--full"
                    style={{ marginBottom: "14px" }}
                  >
                    Get a Free Quote
                  </Link>{" "}
                  <a
                    href="tel:+15613061813"
                    className="phone-link phone-link--light btn--full"
                    style={{ justifyContent: "center" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                    </svg>{" "}
                    561-306-1813
                  </a>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--border-on-dark)",
                      margin: "18px 0",
                    }}
                  ></div>
                  <div className="quote-aside-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    848 S.E. Fleming Way, Stuart, FL 34997
                  </div>
                  <div className="quote-aside-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Mon–Sat 9:00 AM – 5:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section
        className="location-extra-content"
        style={{ background: "var(--cloud)", padding: "var(--space-8) 0" }}
      >
        <div className="container">
          <div className="container--narrow">
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "var(--text-body)",
                margin: "0 0 var(--space-5)",
              }}
            >
              Hobe Sound occupies a unique position on Florida's Treasure Coast
              — balancing exclusivity with a connection to the natural
              environment, from the oceanfront estates of Jupiter Island to the
              mainland neighborhoods near Bridge Road. Homes here range from
              expansive waterfront estates to modest residential properties, and
              Scollo Painting serves the full range. We're familiar with the
              construction styles throughout Martin County and understand the
              environmental demands Hobe Sound's coastal and riverside settings
              place on exterior paint.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "var(--text-body)",
                margin: "0",
              }}
            >
              The natural landscape around Hobe Sound — proximity to Jonathan
              Dickinson State Park, the Intracoastal Waterway, and the Atlantic
              — creates conditions where biological growth on exterior surfaces
              is accelerated. Algae, mildew, and organic staining are common on
              any painted surface that doesn't receive direct afternoon sun. We
              use algaecide wash treatments on affected surfaces, allow proper
              dry time, and apply coatings with built-in mildewcide protection
              to slow re-growth and extend the life of the finish. For tips on
              timing your project around Florida's weather patterns, see our
              guide on{" "}
              <Link href="/blog/best-time-to-paint-exterior-florida">
                the best time to paint an exterior in Florida
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <section
        className="page-section"
        style={{ padding: "var(--space-10) 0" }}
      >
        <div className="container">
          <div className="container--narrow">
            <span className="eyebrow">Common Questions</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem,2.5vw,2rem)",
                fontWeight: "600",
                letterSpacing: "-0.02em",
                margin: "var(--space-3) 0 0",
              }}
            >
              Frequently asked questions about painting in Hobe Sound, FL
            </h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-summary">
                  How much does exterior painting cost in Hobe Sound?{" "}
                  <svg
                    className="faq-chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p>
                    Exterior painting in Hobe Sound typically costs
                    $3,500–$9,000 for a standard home. Waterfront properties
                    along the Intracoastal or on the southern end of Jupiter
                    Island tend to require additional prep for salt exposure —
                    pressure washing, sealing, and salt-resistant primers —
                    which affects total cost. We provide fixed-price estimates
                    so you know exactly what you're paying before we start.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Do you serve the Jupiter Island area near Hobe Sound?{" "}
                  <svg
                    className="faq-chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p>
                    Yes — we serve the northern portion of Jupiter Island
                    accessible from Hobe Sound, as well as communities along
                    U.S. 1 and Bridge Road. This is one of the most
                    environmentally sensitive areas in South Florida, and we
                    handle paint containment, cleanup, and material disposal
                    carefully to meet the expectations of residents who value
                    the natural environment here.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  How do salt air and humidity affect exterior paint on Hobe
                  Sound homes?{" "}
                  <svg
                    className="faq-chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p>
                    Salt air and high humidity are the primary drivers of paint
                    failure in Hobe Sound. Salt deposits accelerate corrosion on
                    metal fasteners, cause paint to blister faster, and damage
                    caulking around windows and trim. The solution is thorough
                    power washing before every paint job, a quality bonding
                    primer on all bare surfaces, and a 100% acrylic top coat
                    with documented salt-air resistance.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <div className="cta-band-text">
              <hr className="rule-accent" />
              <h2>
                Ready for a finish that lasts?{" "}
                <em className="accent-italic--light">Let's talk.</em>
              </h2>
              <p>
                Fixed pricing quoted up front — no hidden costs. Serving Stuart
                and the Treasure Coast for over 45 years.
              </p>
            </div>
            <div className="cta-band-actions">
              <Link
                href="/quote"
                className="btn btn--primary btn--lg btn--full"
              >
                Get a Free Quote
              </Link>{" "}
              <a
                href="tel:+15613061813"
                className="phone-link phone-link--light"
                style={{ justifyContent: "center", fontSize: "17px" }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                </svg>{" "}
                561-306-1813{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
