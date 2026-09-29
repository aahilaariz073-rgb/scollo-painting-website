import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Interior Painters Stuart & Palm Beach County, FL | Scollo",
  },
  description:
    "Family-run interior painters in Stuart, FL since 1979 — walls, ceilings, trim & cabinets. Licensed, insured, 4.9★ rated. Get your free quote today!",
  alternates: {
    canonical: "https://scollopainting.com/services/interior-painting",
  },
  openGraph: {
    type: "website",
    title:
      "Interior Painters Stuart & Palm Beach County, FL | Scollo Painting Inc.",
    description:
      "Family-run interior painting in Stuart & Palm Beach County, FL since 1979. Licensed, insured, and rated 4.9★ from 54 reviews. Call Scollo Painting at 561-306-1813 for a free quote.",
    url: "https://scollopainting.com/services/interior-painting",
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
    serviceType: "Interior Painting",
    name: "Interior Painting",
    description:
      "Professional interior painting services including walls, ceilings, trim, doors and cabinets throughout Palm Beach County and the Treasure Coast.",
    provider: {
      "@type": "LocalBusiness",
      name: "Scollo Painting Inc.",
      telephone: "+1-561-306-1813",
      url: "https://scollopainting.com",
    },
    areaServed: { "@type": "State", name: "Florida" },
    url: "https://scollopainting.com/services/interior-painting",
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
        name: "Interior Painting",
        item: "https://scollopainting.com/services/interior-painting",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does interior painting cost in Stuart, FL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interior painting in Stuart typically costs $2.50–$4.50 per square foot of wall surface, including prep and two coats. A standard bedroom runs $300–$600; a full-house interior is typically $5,000–$14,000 depending on ceiling heights, trim complexity, and finish grade. We provide free itemized quotes broken down by room — our quoted price is fixed and doesn't change once approved.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to paint the interior of a house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A full interior repaint — walls, ceilings, and trim throughout — typically takes 4–7 days for a standard 2,000–3,000 sq ft home. A single room can usually be completed in one day. We'll give you a specific start-to-finish timeline in your quote, and we stick to it. We work in phases that let you continue using most of the home while work progresses through each area.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to move furniture before interior painting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We handle furniture moving as part of every interior project. We move pieces to the center of the room, cover them with protective sheeting, and return everything to its original position when we're done. We ask that you remove small fragile items, wall-hung artwork, and electronics yourself. We also protect flooring with drop cloths and tape throughout the project.",
        },
      },
      {
        "@type": "Question",
        name: "What paint sheen should I use for interior walls in a Florida home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Florida homes, we typically recommend eggshell or satin finish for walls — both resist humidity better than flat paint and are easier to clean. Satin is ideal for high-traffic areas, bathrooms, and kitchens. Ceilings almost always get flat white. Trim, doors, and cabinetry get semi-gloss or gloss for durability and easy cleaning. We'll advise on the right sheen for each surface during your free estimate.",
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
              <span aria-current="page">Interior Painting</span>
            </nav>
            <h1>Interior Painting Services in Stuart & Palm Beach County</h1>
            <p className="service-page-hero__lead">
              From a single accent wall to a whole-house refresh, Scollo
              Painting is the interior house painter Stuart, FL homeowners have
              trusted for 45+ years. We protect your home, prep every surface
              properly, and leave nothing behind but a flawless finish.
            </p>
            <Link href="/quote" className="btn btn--primary btn--lg">
              Get a Free Quote
            </Link>
          </div>
        </section>
        <section className="service-page-content">
          <div className="container">
            <span className="eyebrow">What's included</span>
            <h2>
              Interior painting services: walls, ceilings, trim & cabinets
            </h2>
            <p>
              Interior painting is more than rolling color onto a wall. A
              lasting finish starts long before the first brush stroke — with
              proper surface preparation, the right products for Florida's
              humidity, and a team that respects your home and your schedule.
              Whether we're refreshing the living room, repainting kitchen
              cabinets, or working through an entire home room by room, our
              process is the same: thorough, tidy, and built to last.
            </p>
            <p>
              We paint walls, ceilings, trim, baseboards, doors, window casings,
              crown molding, and cabinetry. Each surface type gets the specific
              preparation and product it needs — walls get patched and primed,
              trim gets sanded smooth, cabinets get degreased and properly
              bonded so the finish won't chip or peel. No shortcuts, no skipped
              steps.
            </p>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "var(--space-7) 0 var(--space-4)",
              }}
            >
              Our interior painting process
            </h3>
            <p>
              <strong>Furniture & floor protection.</strong> Before a drop of
              paint is mixed, we move or cover your furniture, lay down drop
              cloths on every floor surface, and tape off anything that
              shouldn't be painted. Your home stays clean from start to finish.
            </p>
            <p>
              <strong>Surface preparation.</strong> We fill nail holes, patch
              cracks, sand rough spots, and spot-prime wherever needed. In
              Florida homes, we pay special attention to areas prone to humidity
              damage — soft drywall, stains from moisture, or hairline cracks
              from seasonal expansion. Skipping prep is how paint fails early;
              we don't skip it.
            </p>
            <p>
              <strong>Priming & painting.</strong> We use premium interior
              paints chosen for Florida's climate — low-VOC formulas that resist
              mildew, stand up to humidity, and hold their color over time.
              Every room gets the coats it needs for full, even coverage with
              clean cut-ins at every edge.
            </p>
            <p>
              <strong>Cleanup & walkthrough.</strong> When the work is done, we
              remove all masking and protection, clean up completely, and walk
              through the finished space with you. If anything needs a touch-up,
              we handle it before we leave.
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Careful Surface Prep</h4>
                  <p>
                    Holes patched, cracks filled, surfaces sanded and primed —
                    every wall and trim piece is properly prepared before paint
                    is applied. Prep is where a lasting finish is made or
                    broken.
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
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h4>Furniture & Floor Protection</h4>
                  <p>
                    We move, cover, and protect everything in the work area
                    before starting. Drop cloths on every floor, masking on
                    every fixture. Your home is treated with the same care we'd
                    want for ours.
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Clean Lines & Edges</h4>
                  <p>
                    Crisp cut-ins at ceilings, baseboards, and trim are what
                    separate a professional paint job from a DIY weekend
                    project. We take the time to tape and cut properly — every
                    room, every edge.
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
                    <polyline points="3 12 3 19 21 19 21 12"></polyline>
                    <path d="M3 7l9-4 9 4"></path>
                    <line x1="12" y1="3" x2="12" y2="19"></line>
                  </svg>
                </div>
                <div>
                  <h4>Full Post-Job Cleanup</h4>
                  <p>
                    All masking, drop cloths, and materials are removed when
                    we're done. We vacuum, wipe down surfaces, and walk through
                    the finished space with you before calling the job complete.
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
                src="/assets/dark_green_bedroom_field_trip_hero_720x.webp"
                alt="Interior bedroom painting — deep green finish by Scollo Painting Inc."
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            </div>{" "}
            <span className="eyebrow">Why Scollo</span>
            <h2>Why our interior painting stands out</h2>
            <p>
              Florida homes present unique challenges that most painting guides
              don't mention. High humidity means paint can fail if applied to
              surfaces with elevated moisture content. Salt air in coastal homes
              can accelerate corrosion on metal fixtures and cause adhesion
              problems on surfaces that weren't properly primed. Seasonal
              temperature swings cause wood trim and door frames to expand and
              contract, creating hairline cracks that need proper flexible
              filler — not just paint over them. After 45 years working in Palm
              Beach and Martin County, we know these issues and how to address
              them before they become problems.
            </p>
            <p>
              We also know the difference between product lines that simply look
              good on a paint chip and products that actually hold up in a
              Florida home. We've tested paints across decades of real-world use
              in this climate — through humid summers, heavy rain seasons, and
              the harsh UV exposure that fades lower-grade paints within a year
              or two. Our product recommendations come from experience, not from
              whatever's on sale.
            </p>
            <p>
              Beyond the technical side, we understand that having painters in
              your home is a matter of trust. We show up when we say we will,
              work cleanly, keep disruption to a minimum, and give you a fixed
              price up front with no surprise charges at the end. That's how
              we've built a reputation that keeps customers calling us back —
              and recommending us to their neighbors — for more than four
              decades.
            </p>
            <p>
              Not sure which colors work best in Florida's light? Read our{" "}
              <Link href="/blog/interior-paint-color-trends-2026">
                2026 interior color trends guide
              </Link>{" "}
              for palette ideas suited to South Florida homes before you book
              your project.
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
                  every job.
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
                href="/services/commercial-painting"
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
                    <rect x="2" y="7" width="20" height="14" rx="2"></rect>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
                  </svg>
                </div>
                <h3>Commercial Painting</h3>
                <p>
                  Retail, office, and industrial projects completed on your
                  schedule — including nights and weekends — with minimal
                  disruption to your business.
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
                  Patches, skim coats, and texture matching done right — we
                  diagnose what caused the damage before we repair it so the
                  problem doesn't come back.
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
                Frequently asked questions about interior painting in Stuart, FL
              </h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    How much does interior painting cost in Stuart, FL?{" "}
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
                      Interior painting in Stuart typically costs $2.50–$4.50
                      per square foot of wall surface, including prep and two
                      coats. A standard bedroom runs $300–$600; a full-house
                      interior is typically $5,000–$14,000 depending on ceiling
                      heights, trim complexity, and finish grade. We provide
                      free itemized quotes broken down by room — our quoted
                      price is fixed and doesn't change once approved.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    How long does it take to paint the interior of a house?{" "}
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
                      A full interior repaint — walls, ceilings, and trim
                      throughout — typically takes 4–7 days for a standard
                      2,000–3,000 sq ft home. A single room can usually be
                      completed in one day. We'll give you a specific
                      start-to-finish timeline in your quote, and we stick to
                      it. We work in phases that let you continue using most of
                      the home while work progresses through each area.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Do I need to move furniture before interior painting?{" "}
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
                      We handle furniture moving as part of every interior
                      project. We move pieces to the center of the room, cover
                      them with protective sheeting, and return everything to
                      its original position when we're done. We ask that you
                      remove small fragile items, wall-hung artwork, and
                      electronics yourself. We also protect flooring with drop
                      cloths and tape throughout the project.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    What paint sheen should I use for interior walls in a
                    Florida home?{" "}
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
                      For Florida homes, we typically recommend eggshell or
                      satin finish for walls — both resist humidity better than
                      flat paint and are easier to clean. Satin is ideal for
                      high-traffic areas, bathrooms, and kitchens. Ceilings
                      almost always get flat white. Trim, doors, and cabinetry
                      get semi-gloss or gloss for durability and easy cleaning.
                      We'll advise on the right sheen for each surface during
                      your free estimate.
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
