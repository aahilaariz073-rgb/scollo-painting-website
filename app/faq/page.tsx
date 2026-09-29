import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Painting FAQs | Stuart, FL | Scollo Painting Inc." },
  description:
    "Answers to common painting questions from Scollo Painting Inc. — scheduling, prep, pricing, colors, payments & more. Stuart, FL. Call 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/faq" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title:
      "FAQ | Painting Questions Answered | Scollo Painting Inc. | Stuart, FL",
    description:
      "Answers to common painting questions from Scollo Painting Inc. — scheduling, prep, pricing, colors, payments & more. Stuart, FL. Call 561-306-1813.",
    url: "https://scollopainting.com/faq",
    siteName: "Scollo Painting Inc.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=85&w=1200&auto=format&fit=crop",
    ],
  },
  twitter: { card: "summary_large_image" },
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
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Robert K." },
        reviewBody:
          "Scollo Painting completely transformed our home in Palm Beach Gardens. The crew was professional, on time, and the finish is flawless. Highly recommend.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "Linda M." },
        reviewBody:
          "45 years in business shows. They know exactly what they are doing. Our Jupiter exterior looks brand new and the prep work was incredibly thorough.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        author: { "@type": "Person", name: "James R." },
        reviewBody:
          "Fixed price, no surprises. They painted our entire interior in two days and the cleanup was spotless. Will use again for our exterior next spring.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you schedule my project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We typically book residential projects within one to two weeks of accepting a quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to prepare before the crew arrives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For interior projects, remove small items and fragile decor. We handle all furniture protection with drop cloths.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to paint a room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard room takes one to two days. Larger rooms or those needing repairs take longer.",
        },
      },
      {
        "@type": "Question",
        name: "Can you paint the exterior during Florida's rainy season?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We schedule exterior work in the mornings and monitor weather conditions closely.",
        },
      },
      {
        "@type": "Question",
        name: "How is your pricing determined?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed-price quotes based on square footage, surface condition, coats required, paint quality, and any repair work.",
        },
      },
      {
        "@type": "Question",
        name: "How do you protect my furniture and flooring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover all furniture with drop cloths and lay floor protection throughout work areas.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help me choose paint colors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer guidance and provide color samples during your free estimate visit.",
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
        <div className="breadcrumb-bar">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>{" "}
              <span className="breadcrumb-sep" aria-hidden="true">
                /
              </span>{" "}
              <span aria-current="page">FAQ</span>
            </nav>
          </div>
        </div>
        <section className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">Common questions</p>
              <h1>
                Frequently asked <em className="accent-italic">questions.</em>
              </h1>
              <p className="page-hero-lead">
                Can't find what you're looking for? Call us at{" "}
                <a href="tel:+15613061813">561-306-1813</a> — we're happy to
                answer any question about your project.
              </p>
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="container">
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-summary">
                  How quickly can you schedule my project?{" "}
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
                <div className="faq-body">
                  <p>
                    Scheduling depends on our current workload and the season,
                    but we typically book residential projects within one to two
                    weeks of accepting a quote. Commercial projects may vary
                    depending on scope. We'll give you a clear start date when
                    we provide your estimate so you can plan accordingly.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Do I need to do anything to prepare before the crew arrives?{" "}
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
                <div className="faq-body">
                  <p>
                    For interior projects, we ask that you remove small items,
                    valuables, and fragile decor from the work areas. We handle
                    all furniture protection — moving pieces to the center of
                    the room and covering them with drop cloths. For exterior
                    projects, please ensure we have clear access to all sides of
                    the home and that any vehicles are moved from the immediate
                    work area.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  How long does it take to paint a room?{" "}
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
                <div className="faq-body">
                  <p>
                    A standard bedroom or living room typically takes one to two
                    days — one day for prep and priming, one day for finish
                    coats. Larger rooms, rooms requiring significant repairs, or
                    rooms with high ceilings and extensive trim will take
                    longer. We always provide a timeline with your estimate so
                    there are no surprises.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Can you paint the exterior during Florida's rainy season?{" "}
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
                <div className="faq-body">
                  <p>
                    Yes, with proper planning. Florida's afternoon rain is
                    predictable, and we schedule exterior work in the mornings
                    when surfaces are dry. We monitor weather conditions closely
                    and will never apply paint on a wet surface. If persistent
                    rain or high humidity causes a delay, we'll reschedule at
                    the next suitable opportunity and keep you informed
                    throughout.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  How is your pricing determined?{" "}
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
                <div className="faq-body">
                  <p>
                    We provide fixed-price quotes based on the scope of work we
                    assess during our free on-site estimate. Factors include the
                    square footage of surfaces to be painted, surface condition,
                    number of coats required, paint quality, and any repair work
                    needed. The price on your written quote is the price you pay
                    — period.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  How do you protect my furniture and flooring?{" "}
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
                <div className="faq-body">
                  <p>
                    We move furniture away from walls and to the center of the
                    room, cover all pieces with professional-grade drop cloths,
                    and lay floor protection throughout the work areas. Trim,
                    window frames, fixtures, and hardware are masked before any
                    painting begins. We take these steps on every single job —
                    there are no shortcuts.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Can you help me choose paint colors?{" "}
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
                <div className="faq-body">
                  <p>
                    We're happy to offer guidance based on our experience with
                    what works well in Florida's light conditions. We can
                    provide color samples and help you narrow down options
                    during your estimate visit. For more involved color
                    selection, we can recommend professional color consultants
                    we've worked with. Ultimately, the choice is always yours
                    and we'll match any color you select from any major brand.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  Do you handle commercial painting projects?{" "}
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
                <div className="faq-body">
                  <p>
                    Absolutely. Commercial painting is a significant part of our
                    business. We've completed projects for offices, medical and
                    dental facilities, retail centers, restaurants, multi-family
                    residential buildings, and HOA communities. We're
                    experienced working in occupied spaces and can schedule work
                    after hours or on weekends to minimize disruption to your
                    operations. Please <Link href="/contact">contact us</Link>{" "}
                    for a commercial estimate.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  What payment methods do you accept?{" "}
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
                <div className="faq-body">
                  <p>
                    We accept Visa, Mastercard, Discover, American Express,
                    personal check, and cash. Payment is typically structured as
                    a deposit at project start and the remaining balance upon
                    satisfactory completion of the work. Full payment details
                    are outlined in your written quote.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  What areas do you serve?{" "}
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
                <div className="faq-body">
                  <p>
                    We serve Stuart and 20 communities across Palm Beach County,
                    Martin County, and Broward County — including Delray Beach,
                    Boca Raton, Boynton Beach, Wellington, Palm Beach Gardens,
                    West Palm Beach, Jupiter, Hobe Sound, Jensen Beach, Lake
                    Worth, Fort Lauderdale, Pompano Beach, Coral Springs, and
                    more. See our full{" "}
                    <Link href="/areas">service area list</Link> or{" "}
                    <Link href="/contact">contact us</Link> if you're unsure
                    whether we cover your location.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
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
