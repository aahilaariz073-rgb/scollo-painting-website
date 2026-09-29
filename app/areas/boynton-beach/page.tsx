import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Boynton Beach House Painters | Scollo Painting Inc." },
  description:
    "Boynton Beach painters serving Intracoastal & canal-front homes. Family-run 45+ years, licensed & insured. Call 561-306-1813 for a free quote.",
  alternates: { canonical: "https://scollopainting.com/areas/boynton-beach" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Boynton Beach Painting Company | Scollo Painting Inc.",
    description:
      "Boynton Beach painters serving Intracoastal & canal-front homes. Family-run 45+ years, licensed & insured. Call 561-306-1813 for a free quote.",
    url: "https://scollopainting.com/areas/boynton-beach",
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
          name: "Boynton Beach",
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
                areaServed: "Boynton Beach",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Painting",
                areaServed: "Boynton Beach",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Painting",
                areaServed: "Boynton Beach",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wall & Ceiling Texture and Drywall Repair",
                areaServed: "Boynton Beach",
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
            name: "Boynton Beach",
            item: "https://scollopainting.com/areas/boynton-beach",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does exterior painting cost in Boynton Beach?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A typical single-family exterior in Boynton Beach costs $3,500–$8,000 depending on square footage, surface condition, and coating. Waterfront homes near the Intracoastal or canal communities may require additional prep for salt exposure. We offer fixed-price estimates — what we quote is what you pay, with no hidden costs added at the end of the job.",
            },
          },
          {
            "@type": "Question",
            name: "Do you paint HOA-managed properties in Boynton Beach?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — we work with HOAs and property management companies throughout Boynton Beach. We understand HOA color approval requirements, documentation needs, and the logistics of coordinating work across multiple units in planned communities. We can provide formal written proposals, material specifications, and warranty documentation that HOA boards require.",
            },
          },
          {
            "@type": "Question",
            name: "How do I prepare my Boynton Beach home before exterior painting?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our crew handles all preparation — you don't need to do anything beyond clearing furniture and plants away from exterior walls. We power wash, prime bare areas, caulk gaps around trim and windows, and protect landscaping before any paint goes on. Just provide access to an outdoor water bib and a 110V outlet — we take care of the rest.",
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
              <span className="breadcrumb-current">Boynton Beach</span>
            </nav>
            <span className="eyebrow eyebrow--light">
              Professional painters · Boynton Beach, FL
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
              Boynton Beach house painters you can rely on.
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
              Boynton Beach's rapidly growing waterfront neighborhoods — from
              the Intracoastal communities of Quantum Lakes to the established
              suburban developments near Lake Worth and Delray Beach — reflect a
              city that takes pride in its homes. Scollo Painting brings 45+
              years of South Florida painting expertise to every project here,
              from first-coat prep to final walkthrough.
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
                <span className="eyebrow">What we offer in Boynton Beach</span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem,2.5vw,2.2rem)",
                    fontWeight: "600",
                    letterSpacing: "-0.02em",
                    margin: "0 0 16px",
                  }}
                >
                  Everything Boynton Beach homeowners need, one crew.
                </h2>
                <p>
                  Boynton Beach spans a wide range of residential styles, from
                  1970s concrete-block ranch homes to newer townhome communities
                  along Congress Avenue, and the luxury waterfront estates near
                  the marina. Our crews tailor their approach to each property
                  type: thorough pressure washing and caulk replacement before
                  coating older stucco, careful masking of the decorative trim
                  that many newer developments feature, and premium water-based
                  paints that resist the humidity that comes off the
                  Intracoastal. We serve both the residential neighborhoods and
                  commercial corridors throughout Boynton Beach and the
                  surrounding area.
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
                    Why Boynton Beach homeowners choose us
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
              Boynton Beach spans a wide range of residential styles — from
              Leisureville and Quail Ridge to Hunters Run and newer developments
              near Congress Avenue. Whether refreshing a condominium, repainting
              a villa exterior, or updating a single-family home, Scollo
              Painting brings thorough prep, premium Florida-grade products, and
              a clean professional finish. We've worked across Boynton Beach for
              decades and understand the specific construction styles and
              material types common throughout the area.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "var(--text-body)",
                margin: "0",
              }}
            >
              Florida's humidity shows in Boynton Beach interiors where
              bathrooms, laundry rooms, and kitchens frequently show
              moisture-related paint failure. We use moisture-resistant formulas
              in high-humidity spaces, apply mildewcide primers where
              appropriate, and address surface damage before painting rather
              than covering it. For exterior projects, our power-washing
              protocol removes the algae and mildew Florida's climate promotes,
              ensuring the new coating bonds properly and lasts through multiple
              rainy seasons. If you're planning ahead, our guide on{" "}
              <Link href="/blog/best-time-to-paint-exterior-florida">
                the best time to paint an exterior in Florida
              </Link>{" "}
              can help you pick the right window.
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
              Frequently asked questions about painting in Boynton Beach, FL
            </h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-summary">
                  What does exterior painting cost in Boynton Beach?{" "}
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
                    A typical single-family exterior in Boynton Beach costs
                    $3,500–$8,000 depending on square footage, surface
                    condition, and coating. Waterfront homes near the
                    Intracoastal or canal communities may require additional
                    prep for salt exposure. We offer fixed-price estimates —
                    what we quote is what you pay, with no hidden costs added at
                    the end of the job.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Do you paint HOA-managed properties in Boynton Beach?{" "}
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
                    Yes — we work with HOAs and property management companies
                    throughout Boynton Beach. We understand HOA color approval
                    requirements, documentation needs, and the logistics of
                    coordinating work across multiple units in planned
                    communities. We can provide formal written proposals,
                    material specifications, and warranty documentation that HOA
                    boards require.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  How do I prepare my Boynton Beach home before exterior
                  painting?{" "}
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
                    Our crew handles all preparation — you don't need to do
                    anything beyond clearing furniture and plants away from
                    exterior walls. We power wash, prime bare areas, caulk gaps
                    around trim and windows, and protect landscaping before any
                    paint goes on. Just provide access to an outdoor water bib
                    and a 110V outlet — we take care of the rest.
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
