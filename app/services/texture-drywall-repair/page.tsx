import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Drywall Repair & Texture Matching | Stuart, FL | Scollo",
  },
  description:
    "Drywall repair & texture matching in Stuart, FL since 1979 — patching, skim coating, water damage repair. Licensed & insured, 4.9★ rated. Free estimate: 561-306-1813.",
  alternates: {
    canonical: "https://scollopainting.com/services/texture-drywall-repair",
  },
  openGraph: {
    type: "website",
    title:
      "Drywall Repair & Texture Matching | Stuart, FL | Scollo Painting Inc.",
    description:
      "Wall & ceiling texture and drywall repair in Stuart, FL since 1979 — patching, skim coating, texture matching, and water damage repair. Licensed, insured, 4.9★ rated. Call 561-306-1813.",
    url: "https://scollopainting.com/services/texture-drywall-repair",
    siteName: "Scollo Painting Inc.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=85&w=1200&auto=format&fit=crop",
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Painter",
    name: "Scollo Painting Inc.",
    telephone: "+1-561-306-1813",
    address: {
      "@type": "PostalAddress",
      streetAddress: "848 S.E. Fleming Way",
      addressLocality: "Stuart",
      addressRegion: "FL",
      postalCode: "34997",
      addressCountry: "US",
    },
    openingHours: "Mo-Sa 09:00-17:00",
    paymentAccepted:
      "Cash, Check, Visa, Mastercard, Discover, American Express",
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
        name: "Wall & Ceiling Texture and Drywall Repair",
        item: "https://scollopainting.com/services/texture-drywall-repair",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does drywall repair cost in Stuart, FL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Drywall repair pricing depends on the number, size, and type of damage. Small nail holes and minor cracks are typically $150–$350 for a small group. A larger hole (6–12 inches) requiring a patch and texture match runs $250–$600. Extensive repairs — multiple rooms, water damage, or skim coating large areas — are quoted by the scope. We provide free on-site estimates so you know the exact cost before any work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match the existing texture on my walls after a repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — texture matching is one of the most skilled parts of drywall repair, and it's a particular focus for us. Florida homes were built across many decades, each with popular texture styles of the era: orange peel, knockdown, skip trowel, smooth, and various custom finishes. We match texture by hand or with spray equipment depending on what the existing surface requires. When we're done, the repair should be invisible after painting.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a building permit for drywall repair in Stuart?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most routine drywall repairs — patching holes, fixing cracks, addressing water damage after a confirmed-repaired leak — don't require a permit in Stuart or surrounding Martin and Palm Beach County municipalities. Structural repairs, repairs related to mold remediation, or work that's part of a larger renovation may require permits. We'll advise on whether your specific project needs a permit before work begins and can assist with documentation if needed.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle water-damaged drywall in Florida homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Water damage requires a careful approach. First, we confirm the source of the moisture has been corrected — painting or patching over active moisture is pointless. Once the source is dry, we assess whether the drywall needs to be cut out and replaced or whether it can be repaired. Soft, crumbling, or moldy drywall comes out completely; structurally sound material that was just stained gets a stain-blocking primer before any repair compound or paint goes on.",
        },
      },
      {
        "@type": "Question",
        name: "Should drywall repair be done before or after painting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always before. Repairs need to be patched, primed, and texture-matched first so the surface cures fully and accepts paint evenly — painting over a fresh repair too soon can leave flashing or a visible patch. We're happy to combine repair and paint into a single scheduled project.",
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
              </svg>{" "}
              <Link href="/services">Services</Link>{" "}
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
              <span aria-current="page">
                Wall & Ceiling Texture and Drywall Repair
              </span>
            </nav>
            <h1>
              Wall & ceiling texture and drywall repair — we fix the cause, not
              just the crack.
            </h1>
            <p className="service-page-hero__lead">
              A painted-over crack that isn't properly repaired will reappear —
              usually within a season. Scollo Painting takes a diagnostic
              approach to wall and ceiling texture and drywall repair: we
              identify what caused the damage, address it at the source, and
              restore the surface to a condition that holds paint and stays
              looking right. Serving Stuart and the Treasure Coast for over 45
              years.
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
              Drywall & texture repair that lasts — we find the cause first
            </h2>
            <p>
              Most homeowners discover they need texture and drywall repair when
              they decide to repaint. A crack that seemed minor, a water stain
              from a leak that was since fixed, a section of wall that was
              punched or dented — these need to be properly repaired, not just
              skim-coated over and painted. The difference between a repair that
              lasts and one that fails within months comes down to whether the
              underlying cause was addressed and whether the repair was done
              with the right materials and technique for that type of damage.
            </p>
            <p>
              We handle the full range of interior surface repair work: small
              holes from nails and hardware, larger holes from doorknobs and
              accidents, cracks of all sizes and patterns, water-damaged drywall
              and drywall, sections that need to be cut out and replaced, skim
              coating over problem surfaces, and texture matching to blend
              repairs invisibly into surrounding walls and ceilings. When the
              repair is done, you shouldn't be able to tell it was ever there.
            </p>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: "600",
                margin: "var(--space-7) 0 var(--space-4)",
              }}
            >
              Common issues we repair in Florida homes
            </h3>
            <p>
              <strong>Settlement cracks.</strong> Florida's sandy soil and the
              effects of nearby water — both inland waterways and the ocean —
              cause ongoing foundation movement that shows up as cracks in walls
              and ceilings. Many of these are cosmetic and can be properly
              filled and painted. Others are symptomatic of ongoing movement and
              need flexible filler that can accommodate future expansion and
              contraction. We assess each crack and repair it appropriately, not
              with a one-size-fits-all approach.
            </p>
            <p>
              <strong>Humidity and moisture damage.</strong> South Florida's
              humidity is the primary cause of drywall failure in homes that
              aren't properly insulated or ventilated. Drywall paper absorbs
              moisture and grows mold; the core softens and loses structural
              integrity. We assess moisture-damaged areas carefully — sometimes
              a repair is appropriate, but sometimes the drywall needs to be
              replaced entirely. We'll give you an honest assessment either way,
              and we won't just skim over damaged material that should come out.
            </p>
            <p>
              <strong>Water damage from leaks.</strong> Ceiling stains and wall
              damage from plumbing or roof leaks are common repair jobs we
              handle. Importantly, we confirm the source of the leak has been
              corrected before we make the repair — applying a stain-blocking
              primer and patching a ceiling that's still getting wet is a waste
              of time and money. Once the source is confirmed dry, we cut out
              any compromised material, replace or patch, prime with an
              appropriate stain-blocking product, and texture-match the repair
              area before painting.
            </p>
            <p>
              <strong>Texture matching.</strong> Florida homes were built across
              many decades, each with its own popular texture styles — orange
              peel, knockdown, skip trowel, smooth, and various custom finishes.
              Blending a repair into existing texture so it's invisible after
              painting is a skilled task. We match texture by hand or with spray
              equipment depending on what the existing surface requires, and we
              take the time to get it right rather than rushing through this
              step.
            </p>
            <p>
              <strong>Skim coating.</strong> Walls that have been repainted many
              times, wallpaper that was improperly removed, or surfaces with
              widespread cracking or imperfections sometimes need skim coating —
              applying a thin layer of joint compound across a broader area to
              create a flat, consistent surface for painting. It's more
              labor-intensive than spot repair, but it's often the right
              solution for walls that are beyond cosmetic patching.
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div>
                  <h4>Root Cause Diagnosis</h4>
                  <p>
                    We don't just patch and paint. We assess what caused the
                    crack or damage — settlement, moisture, impact, or something
                    ongoing — and address it at the source before making the
                    repair.
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
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Patch & Skim Coat</h4>
                  <p>
                    From small nail holes to large cut-and-replace sections, we
                    patch properly using the right materials. For surfaces with
                    widespread imperfections, skim coating restores a flat,
                    paint-ready finish across the whole area.
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
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Texture Matching</h4>
                  <p>
                    Orange peel, knockdown, skip trowel, smooth — we match the
                    existing texture by hand or spray so repairs are invisible
                    after painting. This step is what separates a professional
                    repair from an obvious patch.
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
                  <h4>Seamless Paint-Ready Finish</h4>
                  <p>
                    Every repair is properly primed and prepared for paint —
                    including stain-blocking primer where needed. We leave the
                    surface smooth, stable, and ready for a finish coat that
                    will look uniform across the entire wall or ceiling.
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "16/9",
                margin: "var(--space-7) 0",
              }}
            >
              <img
                src="/assets/texturesss.webp"
                alt="Texture matching and drywall repair — Scollo Painting Inc."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>{" "}
            <span className="eyebrow">Why Scollo</span>
            <h2>Why repair quality matters before you paint</h2>
            <p>
              A paint job is only as good as the surface it goes on. Painting
              over improperly repaired cracks, soft drywall, or inadequately
              primed patches leads to results that look fine for a month and
              then start showing every flaw beneath. We see the aftermath of
              this regularly — homeowners who paid for a paint job and are
              watching the cracks reappear through the new paint because the
              underlying repair wasn't done correctly. Proper repair takes more
              time and more product than a skim-and-paint approach, but it's the
              only approach that produces results that hold.
            </p>
            <p>
              Florida homes have specific challenges that drive higher repair
              volumes than most other states. The combination of humidity, the
              seasonal expansion and contraction of building materials, the
              sandy and variable soil conditions, and the prevalence of stucco
              construction all contribute to surfaces that require more care and
              attention than homes in less demanding climates. After 45 years
              working in this environment, we've developed a practical,
              experience-based approach to diagnosing and repairing the full
              range of interior surface problems that show up in South Florida
              homes.
            </p>
            <p>
              If you're planning to repaint and you have cracks, stains, holes,
              or rough surfaces that need attention, we'll often combine the
              repair and painting into a single project. That approach gives you
              the best result — the repair is integrated into the overall
              painting prep, the surface is prepared consistently from one end
              to the other, and the finished product looks like a properly done
              job rather than a patched one.
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
                  every exterior job across the Treasure Coast.
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
                  disruption to your operations.
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
                Frequently asked questions about texture & drywall repair in
                Stuart, FL
              </h2>
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-summary">
                    How much does drywall repair cost in Stuart, FL?{" "}
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
                      Drywall repair pricing depends on the number, size, and
                      type of damage. Small nail holes and minor cracks are
                      typically $150–$350 for a small group. A larger hole (6–12
                      inches) requiring a patch and texture match runs
                      $250–$600. Extensive repairs — multiple rooms, water
                      damage, or skim coating large areas — are quoted by the
                      scope. We provide free on-site estimates so you know the
                      exact cost before any work begins.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Can you match the existing texture on my walls after a
                    repair?{" "}
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
                      Yes — texture matching is one of the most skilled parts of
                      drywall repair, and it's a particular focus for us.
                      Florida homes were built across many decades, each with
                      popular texture styles of the era: orange peel, knockdown,
                      skip trowel, smooth, and various custom finishes. We match
                      texture by hand or with spray equipment depending on what
                      the existing surface requires. When we're done, the repair
                      should be invisible after painting.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Do I need a building permit for drywall repair in Stuart?{" "}
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
                      Most routine drywall repairs — patching holes, fixing
                      cracks, addressing water damage after a confirmed-repaired
                      leak — don't require a permit in Stuart or surrounding
                      Martin and Palm Beach County municipalities. Structural
                      repairs, repairs related to mold remediation, or work
                      that's part of a larger renovation may require permits.
                      We'll advise on whether your specific project needs a
                      permit before work begins and can assist with
                      documentation if needed.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    How do you handle water-damaged drywall in Florida homes?{" "}
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
                      Water damage requires a careful approach. First, we
                      confirm the source of the moisture has been corrected —
                      painting or patching over active moisture is pointless.
                      Once the source is dry, we assess whether the drywall
                      needs to be cut out and replaced or whether it can be
                      repaired. Soft, crumbling, or moldy drywall comes out
                      completely; structurally sound material that was just
                      stained gets a stain-blocking primer before any repair
                      compound or paint goes on.
                    </p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary className="faq-summary">
                    Should drywall repair be done before or after painting?{" "}
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
                      Always before. Repairs need to be patched, primed, and
                      texture-matched first so the surface cures fully and
                      accepts paint evenly — painting over a fresh repair too
                      soon can leave flashing or a visible patch. For a full
                      walkthrough of what to check before you paint, see our{" "}
                      <Link href="/blog/drywall-repair-before-painting-guide">
                        drywall repair before painting guide
                      </Link>
                      . We're happy to combine repair and paint into a single
                      scheduled project.
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
