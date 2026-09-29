import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "House Painting Contractor — Palm Beach Gardens, FL | Scollo Painting",
  },
  description:
    "Palm Beach Gardens, FL painters serving PGA National & BallenIsles HOA communities. 45+ years, licensed & insured, 4.9★ rated. Call 561-306-1813.",
  alternates: {
    canonical: "https://scollopainting.com/areas/palm-beach-gardens",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title:
      "House Painting Contractor — Palm Beach Gardens, FL | Scollo Painting",
    description:
      "Palm Beach Gardens, FL painters serving PGA National & BallenIsles HOA communities. 45+ years, licensed & insured, 4.9★ rated. Call 561-306-1813.",
    url: "https://scollopainting.com/areas/palm-beach-gardens",
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
          name: "Palm Beach Gardens",
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
                areaServed: "Palm Beach Gardens",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Painting",
                areaServed: "Palm Beach Gardens",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Painting",
                areaServed: "Palm Beach Gardens",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wall & Ceiling Texture and Drywall Repair",
                areaServed: "Palm Beach Gardens",
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
            name: "Palm Beach Gardens",
            item: "https://scollopainting.com/areas/palm-beach-gardens",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does exterior painting cost in Palm Beach Gardens?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Exterior painting in Palm Beach Gardens typically runs $4,000–$11,000 for a standard home. Golf-course communities like PGA National, Mirasol, and Ballenisles often have HOA color guidelines that affect product selection. We provide detailed quotes with color consultation and can coordinate approval documentation for HOAs before the project begins.",
            },
          },
          {
            "@type": "Question",
            name: "Can you match the paint colors required by my Palm Beach Gardens HOA?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — we routinely work with HOA-mandated palettes in Palm Beach Gardens' planned communities. We can work from paint codes on file with your HOA, match approved color samples, and provide documentation for HOA approval requests. We can also advise on which approved shades tend to hold up longest under South Florida's UV conditions.",
            },
          },
          {
            "@type": "Question",
            name: "Do you paint interior spaces in Palm Beach Gardens condos and townhomes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — we handle interior painting for condos, townhomes, single-family homes, and estate properties throughout Palm Beach Gardens. We work carefully in smaller spaces, protecting flooring, cabinetry, and fixtures, and clean up thoroughly at the end of each day. For condo buildings, we coordinate with property management on access, elevator protection, and work-hour restrictions.",
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
              <span className="breadcrumb-current">Palm Beach Gardens</span>
            </nav>
            <span className="eyebrow eyebrow--light">
              Professional painters · Palm Beach Gardens, FL
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
              Professional painters in Palm Beach Gardens, FL — HOA-approved
              finishes.
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
              Palm Beach Gardens' meticulously planned communities — from the
              golf-course homes of PGA National to the upscale neighborhoods
              near Jupiter and North Palm Beach — are defined by a uniform
              standard of exterior curb appeal that requires skilled,
              detail-oriented painting work. Scollo Painting has helped Palm
              Beach Gardens homeowners maintain and elevate that standard for
              over four decades.
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
                <span className="eyebrow">
                  What we offer in Palm Beach Gardens
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem,2.5vw,2.2rem)",
                    fontWeight: "600",
                    letterSpacing: "-0.02em",
                    margin: "0 0 16px",
                  }}
                >
                  Palm Beach Gardens painting services, done right.
                </h2>
                <p>
                  Palm Beach Gardens is home to some of Palm Beach County's most
                  sought-after planned communities, where HOA color palette
                  requirements and architectural review boards mean that
                  painting jobs must be done precisely and to specification.
                  Whether it's a concrete-tile-roofed Mediterranean home in
                  BallenIsles, a newer construction in Alton, or a retail space
                  along PGA Boulevard, our crews understand how to navigate
                  community requirements while delivering a finish that holds up
                  to Florida's relentless sun. We coordinate closely with
                  property owners and management companies to schedule work with
                  minimal disruption.
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
                    Why Palm Beach Gardens homeowners choose us
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
              Palm Beach Gardens is one of Palm Beach County's most desirable
              communities — from the golf-course homes along the PGA Corridor to
              the upscale developments of BallenIsles, Mirasol, and Frenchman's
              Creek. Many communities here have HOA requirements for exterior
              paint colors and finishes. Scollo Painting is experienced with the
              HOA approval process, familiar with the palettes common in Palm
              Beach Gardens, and committed to delivering the quality this market
              expects.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "var(--text-body)",
                margin: "0",
              }}
            >
              Palm Beach Gardens' inland location provides some protection from
              direct coastal salt exposure, but Florida's humidity and UV
              intensity remain significant challenges for exterior paint
              throughout the area. The stucco construction typical of most homes
              requires specific preparation — thorough power washing, careful
              crack repair and caulking replacement, and elastomeric coatings
              where appropriate. Interior projects frequently involve high-end
              finishes, custom millwork, and premium surfaces that need the
              careful preparation and skilled application Scollo Painting brings
              to every job. Curious what a project like this runs? Our{" "}
              <Link href="/blog/how-much-does-it-cost-to-paint-a-house-in-stuart-fl">
                house painting cost guide
              </Link>{" "}
              breaks down the factors that drive pricing on South Florida homes.
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
              Frequently asked questions about painting in Palm Beach Gardens,
              FL
            </h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-summary">
                  How much does exterior painting cost in Palm Beach Gardens?{" "}
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
                    Exterior painting in Palm Beach Gardens typically runs
                    $4,000–$11,000 for a standard home. Golf-course communities
                    like PGA National, Mirasol, and Ballenisles often have HOA
                    color guidelines that affect product selection. We provide
                    detailed quotes with color consultation and can coordinate
                    approval documentation for HOAs before the project begins.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Can you match the paint colors required by my Palm Beach
                  Gardens HOA?{" "}
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
                    Yes — we routinely work with HOA-mandated palettes in Palm
                    Beach Gardens' planned communities. We can work from paint
                    codes on file with your HOA, match approved color samples,
                    and provide documentation for HOA approval requests. We can
                    also advise on which approved shades tend to hold up longest
                    under South Florida's UV conditions.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Do you paint interior spaces in Palm Beach Gardens condos and
                  townhomes?{" "}
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
                    Yes — we handle interior painting for condos, townhomes,
                    single-family homes, and estate properties throughout Palm
                    Beach Gardens. We work carefully in smaller spaces,
                    protecting flooring, cabinetry, and fixtures, and clean up
                    thoroughly at the end of each day. For condo buildings, we
                    coordinate with property management on access, elevator
                    protection, and work-hour restrictions.
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
