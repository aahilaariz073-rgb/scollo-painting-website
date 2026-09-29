import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Commercial Painting Contractor | Stuart, FL | Scollo" },
  description:
    "Commercial painting contractor in Stuart, FL since 1979 — offices, retail & HOA properties. Licensed & insured, 4.9★ rated. Get a free quote: 561-306-1813.",
  alternates: {
    canonical: "https://scollopainting.com/services/commercial-painting",
  },
  openGraph: {
    type: "website",
    title:
      "Commercial Painting Contractor | Palm Beach & Broward County | Scollo Painting Inc.",
    description:
      "Commercial painting contractor serving Palm Beach & Broward County since 1979. Retail, office, industrial & institutional projects. Licensed, insured, 4.9★ rated. Call 561-306-1813.",
    url: "https://scollopainting.com/services/commercial-painting",
    siteName: "Scollo Painting Inc.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=85&w=1200&auto=format&fit=crop",
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["Painter", "LocalBusiness"],
    name: "Scollo Painting Inc.",
    telephone: "+1-561-306-1813",
    url: "https://scollopainting.com",
    logo: "https://scollopainting.com/assets/logo.svg",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=85&w=1200&auto=format&fit=crop",
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
    paymentAccepted:
      "Cash, Check, Visa, Mastercard, Discover, American Express",
    areaServed: [
      "Stuart",
      "Delray Beach",
      "Boca Raton",
      "Boynton Beach",
      "Wellington",
      "Palm Beach Gardens",
      "West Palm Beach",
      "Jupiter",
      "Hobe Sound",
      "Jensen Beach",
      "Lake Worth",
      "Highland Beach",
      "Lighthouse Point",
      "Fort Lauderdale",
      "Pompano Beach",
      "Coral Springs",
      "Parkland",
      "Deerfield Beach",
      "Manalapan",
      "North Palm Beach",
      "Royal Palm Beach",
    ],
    hasMap: "https://maps.google.com/?q=848+SE+Fleming+Way+Stuart+FL+34997",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "54",
      bestRating: "5",
      worstRating: "1",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Painting",
    name: "Commercial Painting",
    description:
      "Commercial painting for retail, industrial and institutional projects scheduled around your operations.",
    provider: {
      "@type": "LocalBusiness",
      name: "Scollo Painting Inc.",
      telephone: "+1-561-306-1813",
      url: "https://scollopainting.com",
    },
    areaServed: { "@type": "State", name: "Florida" },
    url: "https://scollopainting.com/services/commercial-painting",
  },
  {
    "@context": "https://schema.org",
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
        name: "Services",
        item: "https://scollopainting.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Commercial Painting",
        item: "https://scollopainting.com/services/commercial-painting",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does commercial painting cost in Stuart, FL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commercial painting pricing depends significantly on project type, square footage, surface conditions, and scheduling requirements. A small retail storefront might run $1,500–$4,000; a larger office building or industrial facility can range from $15,000 to well over $100,000. We provide formal written proposals with itemized scope, materials specifications, and timeline for all commercial projects — no estimates, just documented fixed pricing.",
        },
      },
      {
        "@type": "Question",
        name: "Can you paint our business without closing or disrupting operations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — minimizing operational disruption is standard practice for our commercial clients. We schedule around your business hours, working nights, weekends, or in phases through different sections of the building. For retail or hospitality clients where any paint smell during business hours is unacceptable, we use low-VOC coatings and ventilate aggressively. We coordinate directly with your facilities manager or property management company throughout the project.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed for commercial painting in Florida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Scollo Painting Inc. holds all required Florida state contractor licensing for commercial painting work. We carry general liability insurance with limits appropriate for commercial projects and can provide a Certificate of Insurance (COI) naming your property owner or management company as additional insured. We also have W-9 documentation, contractor registration, and any other paperwork commercial landlords and property managers typically require.",
        },
      },
      {
        "@type": "Question",
        name: "What types of commercial properties do you paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We handle the full spectrum of commercial painting: retail storefronts, office buildings, medical and dental practices, restaurant and hospitality facilities, light industrial and warehouse properties, HOA common areas and amenity buildings, multi-unit residential buildings, schools, and institutional facilities. Each type has specific requirements — we discuss those upfront and price accordingly.",
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main>
        <section className="service-page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <div className="nav-dropdown">
                <button className="nav-dropdown-btn">
                  Services{" "}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="nav-dropdown-panel">
                  <Link href="/services/interior-painting">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                    </svg>{" "}
                    Interior Painting
                  </Link>
                  <Link href="/services/exterior-painting">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>{" "}
                    Exterior Painting
                  </Link>
                  <Link href="/services/commercial-painting">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>{" "}
                    Commercial Painting
                  </Link>
                  <Link href="/services/texture-drywall-repair">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
                    </svg>{" "}
                    Wall & Ceiling Texture and Drywall Repair
                  </Link>
                  <div className="nav-dropdown-divider"></div>
                  <Link href="/services" className="nav-dropdown-all">
                    View All Services{" "}
                    <svg
                      width="13"
                      height="13"
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
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>{" "}
              <span aria-current="page">Commercial Painting</span>
            </nav>
            <h1>
              Commercial Painting Contractor in Stuart & Palm Beach County
            </h1>
            <p className="service-page-hero__lead">
              Scollo Painting has been the trusted commercial painting
              contractor Stuart, FL businesses rely on for 45+ years. We work
              around your hours — including nights and weekends — to get the job
              done without disrupting operations. Fixed pricing, one point of
              contact, and a team that respects your timeline.
            </p>
            <Link href="/quote" className="btn btn--primary btn--lg">
              Get a Free Quote
            </Link>
          </div>
        </section>
        <section className="service-page-content">
          <div className="container">
            <span className="eyebrow">Who we work with</span>
            <h2>
              Commercial painting for offices, retail, industrial & HOA
              properties
            </h2>
            <p>
              Commercial painting is a different discipline from residential
              work. The scale is larger, the scheduling demands are more
              complex, and the cost of disrupting a business is real. A retail
              store that can't open on time, a medical office that can't see
              patients, a warehouse crew that can't access a section of the
              facility — these aren't abstract inconveniences. We understand
              that, and our commercial operations are structured around working
              within your constraints rather than asking you to work around
              ours.
            </p>
            <p>
              We serve a wide range of commercial clients across Palm Beach and
              Broward County: retail storefronts and shopping centers,
              professional office suites and multi-tenant buildings, light
              industrial and warehouse facilities, healthcare and medical
              facilities, schools and institutional buildings, HOA common areas,
              and multi-family residential properties. Each type of facility
              gets a tailored approach — surface-by-surface product selection,
              containment protocols appropriate to the environment, and
              scheduling that works for the business.
            </p>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "var(--space-7) 0 var(--space-4)",
              }}
            >
              How we approach commercial projects
            </h3>
            <p>
              <strong>Pre-job planning.</strong> Before we start a commercial
              project, we walk the facility with you to understand the scope,
              identify any operational constraints, determine what areas need to
              be phased or sequenced, and agree on a work schedule that protects
              your business. We provide a fixed price for the full scope — not a
              range, not a "not to exceed" number with built-in cushion.
            </p>
            <p>
              <strong>Flexible scheduling.</strong> Most commercial clients
              can't have painters in their facility during business hours. We
              regularly work evenings, nights, and weekends to complete painting
              while businesses are closed. We've done phased projects in active
              retail centers, hospital corridors painted overnight between
              wings, and warehouse facilities completed over a single weekend.
              Where you need us, when you need us.
            </p>
            <p>
              <strong>Minimal disruption protocol.</strong> We set up
              containment and protection before every shift, maintain clean
              access paths throughout, and leave the area spotless at the end of
              each session. Your customers, tenants, and employees shouldn't
              know we're there — or if they do, only because they're watching
              the space improve around them.
            </p>
            <p>
              <strong>Commercial-grade products.</strong> Commercial surfaces
              see heavier use than residential ones, and we specify products
              accordingly — high-traffic wall finishes that stand up to scuffs
              and cleaning, commercial-grade epoxies for industrial floors and
              wet areas, appropriate primers for metal and concrete, and low-VOC
              options for occupied or sensitive environments like healthcare
              facilities.
            </p>
            <p>
              <strong>Single point of contact.</strong> For the full duration of
              a commercial project — from initial walkthrough to final punch
              list — you deal with one person who knows the job, knows your
              facility, and can give you a straight answer on any question. No
              hand-offs, no guessing which crew member to call.
            </p>
            <div
              className="feature-grid"
              style={{
                gridTemplateColumns: "repeat(2,1fr)",
                margin: "var(--space-8) 0",
              }}
            >
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Flexible Scheduling</h4>
                  <p>
                    We work evenings, nights, and weekends to keep your business
                    fully operational. Projects are phased and sequenced around
                    your hours — your schedule comes first, not ours.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 010 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4>Minimal Disruption</h4>
                  <p>
                    Containment set up before every shift, clean access paths
                    maintained throughout, and a spotless site at the end of
                    each session. Your operations continue without interruption.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h4>Large Project Capacity</h4>
                  <p>
                    From single-suite refreshes to multi-building campuses, we
                    have the crew capacity and project management experience to
                    handle large commercial scopes on time and on budget.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <h4>Single Point of Contact</h4>
                  <p>
                    One person who knows your project, your facility, and your
                    requirements — from initial walkthrough through final punch
                    list. No hand-offs, no crossed wires.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                aspectRatio: "16/9",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                margin: "var(--space-7) 0",
              }}
            >
              <img
                src="/assets/Commercial%20Painting.jpg"
                alt="Commercial painting project by Scollo Painting Inc."
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>{" "}
            <span className="eyebrow">Why Scollo</span>
            <h2>What sets our commercial work apart</h2>
            <p>
              Commercial clients have been choosing Scollo Painting over larger
              painting contractors for a straightforward reason: we're
              accountable in a way that big operations often aren't. When you
              call, you reach someone who knows your job. When we say we'll be
              there at a certain time, we're there. When we quote a price,
              that's the price. Over 45 years, we've built long-term
              relationships with property managers, facility directors, and
              business owners who've found that reliability to be harder to come
              by than they expected.
            </p>
            <p>
              We're also fluent in Florida's commercial construction environment
              — including the specific challenges of the South Florida climate
              on commercial facilities. Stucco exteriors on retail plazas,
              concrete block walls in industrial buildings, humidity issues in
              storage areas, salt corrosion on coastal commercial properties —
              we've handled all of it, and we know what products and approaches
              work in this environment long-term.
            </p>
            <p>
              If you manage a facility or property portfolio in Palm Beach or
              Broward County, we're happy to discuss ongoing maintenance
              programs as well. Many of our commercial clients keep us on a
              recurring basis — exterior refreshes on a set cycle, common-area
              updates between tenants, touch-up programs for high-traffic areas.
              We can quote those engagements with the same fixed-price
              transparency as project work.
            </p>
          </div>
        </section>
        <section className="page-section page-section--panel">
          <div className="container">
            <div style={{ marginBottom: "var(--space-5)" }}>
              <span className="eyebrow">Also offered</span>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem,2.5vw,2rem)",
                  fontWeight: "600",
                  letterSpacing: "-0.02em",
                  margin: "0 0 var(--space-6)",
                }}
              >
                Our other services
              </h2>
            </div>
            <div className="services-grid">
              <Link href="/services/interior-painting" className="service-card">
                <div className="service-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3>Interior Painting</h3>
                <p>
                  Walls, ceilings, trim, doors, and cabinetry — careful prep,
                  clean lines, and a thorough cleanup on every interior project
                  across Stuart and Palm Beach County.
                </p>
                <span className="service-card__link">
                  Learn more{" "}
                  <svg
                    width="16"
                    height="16"
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
                </span>{" "}
              </Link>{" "}
              <Link href="/services/exterior-painting" className="service-card">
                <div className="service-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <h3>Exterior Painting</h3>
                <p>
                  Florida-grade coatings applied over a thorough surface prep —
                  power washing, priming, and weather monitoring built into
                  every residential and commercial exterior job.
                </p>
                <span className="service-card__link">
                  Learn more{" "}
                  <svg
                    width="16"
                    height="16"
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
                </span>{" "}
              </Link>{" "}
              <Link
                href="/services/texture-drywall-repair"
                className="service-card"
              >
                <div className="service-card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3>Wall & Ceiling Texture and Drywall Repair</h3>
                <p>
                  Patches, skim coats, and texture matching done right — we find
                  and fix what caused the damage so the same problem doesn't
                  reappear after painting.
                </p>
                <span className="service-card__link">
                  Learn more{" "}
                  <svg
                    width="16"
                    height="16"
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
                </span>{" "}
              </Link>
            </div>
          </div>
        </section>{" "}
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
                Frequently asked questions about commercial painting in Stuart,
                FL
              </h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    How much does commercial painting cost in Stuart, FL?{" "}
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
                      Commercial painting pricing depends significantly on
                      project type, square footage, surface conditions, and
                      scheduling requirements. A small retail storefront might
                      run $1,500–$4,000; a larger office building or industrial
                      facility can range from $15,000 to well over $100,000. We
                      provide formal written proposals with itemized scope,
                      materials specifications, and timeline for all commercial
                      projects — no estimates, just documented fixed pricing.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Can you paint our business without closing or disrupting
                    operations?{" "}
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
                      Yes — minimizing operational disruption is standard
                      practice for our commercial clients. We schedule around
                      your business hours, working nights, weekends, or in
                      phases through different sections of the building. For
                      retail or hospitality clients where any paint smell during
                      business hours is unacceptable, we use low-VOC coatings
                      and ventilate aggressively. We coordinate directly with
                      your facilities manager or property management company
                      throughout the project.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Are you licensed for commercial painting in Florida?{" "}
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
                      Yes — Scollo Painting Inc. holds all required Florida
                      state contractor licensing for commercial painting work.
                      We carry general liability insurance with limits
                      appropriate for commercial projects and can provide a
                      Certificate of Insurance (COI) naming your property owner
                      or management company as additional insured. We also have
                      W-9 documentation, contractor registration, and any other
                      paperwork commercial landlords and property managers
                      typically require.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    What types of commercial properties do you paint?{" "}
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
                      We handle the full spectrum of commercial painting: retail
                      storefronts, office buildings, medical and dental
                      practices, restaurant and hospitality facilities, light
                      industrial and warehouse properties, HOA common areas and
                      amenity buildings, multi-unit residential buildings,
                      schools, and institutional facilities. Each type has
                      specific requirements — we discuss those upfront and price
                      accordingly.
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
                  Fixed pricing quoted up front — no hidden costs. Serving
                  Stuart and the Treasure Coast for over 45 years.
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
      </main>
    </>
  );
}
