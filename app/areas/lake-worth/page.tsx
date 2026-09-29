import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Lake Worth Beach Painting Contractor | Scollo Painting Inc.",
  },
  description:
    "Painting contractor for Lake Worth Beach's historic bungalows & coastal homes. Licensed & insured, 45+ years, 4.9★ rated. Call 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/areas/lake-worth" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Lake Worth Beach Painting Contractor | Scollo Painting Inc.",
    description:
      "Painting contractor for Lake Worth Beach's historic bungalows & coastal homes. Licensed & insured, 45+ years, 4.9★ rated. Call 561-306-1813.",
    url: "https://scollopainting.com/areas/lake-worth",
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
          name: "Lake Worth",
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
                areaServed: "Lake Worth",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Exterior Painting",
                areaServed: "Lake Worth",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Painting",
                areaServed: "Lake Worth",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wall & Ceiling Texture and Drywall Repair",
                areaServed: "Lake Worth",
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
            name: "Lake Worth",
            item: "https://scollopainting.com/areas/lake-worth",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does painting cost in Lake Worth Beach, FL?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Exterior painting in Lake Worth Beach typically costs $3,200–$8,500, depending on home size, condition, and coating. The city's housing stock ranges from smaller historic cottages near the beach to larger homes in northern neighborhoods — pricing reflects the specific scope and prep requirements of each property. Interior work is quoted separately based on room count and ceiling height.",
            },
          },
          {
            "@type": "Question",
            name: "Can you paint historic homes in the Lake Worth Beach historic district?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — we're experienced working with Lake Worth Beach's historic properties, including homes in the historic district near downtown and the older neighborhoods east of I-95. Historic homes often have wood siding, older stucco, and architectural details that require specific prep approaches and careful hand-painting to preserve their character.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer painting for Lake Worth Beach rental properties?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — we regularly work with rental property owners in Lake Worth Beach, including single-family rentals, duplexes, and small apartment buildings. We understand turnaround requirements and can schedule efficiently between tenants. We also use durable, washable interior finishes that hold up to tenant use and make subsequent touch-up work faster and easier.",
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
              <span className="breadcrumb-current">Lake Worth</span>
            </nav>
            <span className="eyebrow eyebrow--light">
              Professional painters · Lake Worth, FL
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
              Professional painters in Lake Worth, FL.
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
              Lake Worth — now Lake Worth Beach — is a historic coastal city
              between Boynton Beach and West Palm Beach with a rich cultural
              identity, eclectic architecture, and a downtown that's been the
              subject of significant revitalization investment. Scollo Painting
              has served Lake Worth homeowners and business owners with skilled,
              dependable painting work for over 45 years.
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
                <span className="eyebrow">What we offer in Lake Worth</span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem,2.5vw,2.2rem)",
                    fontWeight: "600",
                    letterSpacing: "-0.02em",
                    margin: "0 0 16px",
                  }}
                >
                  Full-service painting for Lake Worth Beach homes.
                </h2>
                <p>
                  Lake Worth Beach has one of the most architecturally diverse
                  housing stocks on the Palm Beach County coast — mid-century
                  CBS homes, early 20th-century wood-frame houses, Art
                  Deco-influenced commercial buildings, and newer construction
                  all coexist in the same neighborhoods. Working on older homes
                  here requires understanding how to prep and paint over
                  multiple layers of decades-old paint without creating adhesion
                  problems, while respecting the character of historic
                  structures. Our crews are equally comfortable handling the
                  commercial painting projects that support Lake Worth Beach's
                  ongoing downtown renaissance, delivering clean, professional
                  results that hold up to high foot traffic and Florida's
                  weather.
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
                    Why Lake Worth homeowners choose us
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
              Lake Worth Beach is one of Palm Beach County's most eclectic
              cities — a walkable, arts-oriented community with a rich stock of
              historic homes from the early and mid-20th century. The bungalows,
              Craftsman cottages, and Mediterranean Revival homes near the
              historic downtown require painting approaches that respect
              original construction: careful prep around original wood trim and
              moldings, and color choices that suit the historic character of
              the neighborhood. Scollo Painting has experience with all of these
              considerations.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "var(--text-body)",
                margin: "0",
              }}
            >
              Lake Worth Beach's location on the Lake Worth Lagoon and proximity
              to the Atlantic means coastal conditions apply throughout the
              city. Exterior projects benefit from thorough surface cleaning
              that removes salt deposits and biological growth, and from
              coatings selected for salt-air resistance and UV stability. The
              older housing stock also presents interior challenges — hairline
              cracking from decades of seasonal movement, and moisture-related
              damage near bathrooms and kitchens that needs proper attention
              before the new finish goes on. Curious what a project like this
              runs? Our{" "}
              <Link href="/blog/how-much-does-it-cost-to-paint-a-house-in-stuart-fl">
                Treasure Coast house painting cost guide
              </Link>{" "}
              breaks down typical pricing factors.
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
              Frequently asked questions about painting in Lake Worth, FL
            </h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-summary">
                  How much does painting cost in Lake Worth Beach, FL?{" "}
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
                    Exterior painting in Lake Worth Beach typically costs
                    $3,200–$8,500, depending on home size, condition, and
                    coating. The city's housing stock ranges from smaller
                    historic cottages near the beach to larger homes in northern
                    neighborhoods — pricing reflects the specific scope and prep
                    requirements of each property. Interior work is quoted
                    separately based on room count and ceiling height.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Can you paint historic homes in the Lake Worth Beach historic
                  district?{" "}
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
                    Yes — we're experienced working with Lake Worth Beach's
                    historic properties, including homes in the historic
                    district near downtown and the older neighborhoods east of
                    I-95. Historic homes often have wood siding, older stucco,
                    and architectural details that require specific prep
                    approaches and careful hand-painting to preserve their
                    character.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Do you offer painting for Lake Worth Beach rental properties?{" "}
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
                    Yes — we regularly work with rental property owners in Lake
                    Worth Beach, including single-family rentals, duplexes, and
                    small apartment buildings. We understand turnaround
                    requirements and can schedule efficiently between tenants.
                    We also use durable, washable interior finishes that hold up
                    to tenant use and make subsequent touch-up work faster and
                    easier.
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
