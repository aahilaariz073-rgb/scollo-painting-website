import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Stuart FL Painters | House Painting Company Since 1979 | Scollo Painting",
  },
  description:
    "Scollo Painting Inc. is Stuart, FL's family-run house painting company since 1979. Interior, exterior & commercial painters serving Palm Beach & Martin County. Licensed, insured, 4.9★ (54 reviews). Free quote: 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title:
      "Stuart FL Painters | House Painting Company Since 1979 | Scollo Painting",
    description:
      "Family-run house painting company serving Stuart, Palm Beach & Martin County since 1979. Interior, exterior & commercial painters. Licensed & insured. Call 561-306-1813.",
    url: "https://scollopainting.com/",
    siteName: "Scollo Painting Inc.",
    images: ["https://scollopainting.com/assets/icon-512.png"],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["Painter", "LocalBusiness"],
    name: "Scollo Painting Inc.",
    alternateName: "Scollo Painting",
    description:
      "Family-run house painting company serving Stuart, Palm Beach County and Martin County, FL since 1979. Interior painting, exterior painting, commercial painting and drywall repair.",
    telephone: "+1-561-306-1813",
    url: "https://scollopainting.com",
    logo: "https://scollopainting.com/assets/icon-512.png",
    image: "https://scollopainting.com/assets/icon-512.png",
    foundingDate: "1979",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted:
      "Cash, Check, Visa, Mastercard, Discover, American Express",
    sameAs: [],
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
    "@type": "WebSite",
    name: "Scollo Painting Inc.",
    url: "https://scollopainting.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://scollopainting.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to paint a house in Stuart, FL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most interior rooms range from a few hundred to over a thousand dollars depending on size and prep work, while full exterior repaints typically run a few thousand dollars. Scollo Painting provides a fixed, written quote after an in-person estimate, so you know the total cost before work begins.",
        },
      },
      {
        "@type": "Question",
        name: "Is Scollo Painting Inc. licensed and insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Scollo Painting Inc. is fully licensed and insured for residential and commercial painting throughout Martin and Palm Beach County, Florida.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does Scollo Painting serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scollo Painting serves Stuart, Jensen Beach, Hobe Sound, Palm Beach Gardens, West Palm Beach, Jupiter, Wellington, Lake Worth, Delray Beach, Boca Raton, Boynton Beach, Fort Lauderdale and surrounding Treasure Coast and Palm Beach County communities.",
        },
      },
      {
        "@type": "Question",
        name: "How long has Scollo Painting been in business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scollo Painting Inc. is a family-run painting contractor that has served Stuart and the surrounding Treasure Coast since 1979 — more than 45 years of interior, exterior and commercial painting experience.",
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
        <section className="hero hero--fullbleed">
          <img
            className="hero-bg-img"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?fm=jpg&q=85&w=1800&auto=format&fit=crop"
            alt="Modern home exterior with fresh paint finish"
            loading="eager"
          />
          <div className="hero-bg-overlay"></div>
          <div className="container hero-fullbleed-inner">
            <div className="hero-content">
              <div className="hero-badges">
                <span className="badge badge--amber badge--amber-light">
                  Over 45 years in business
                </span>{" "}
                <span className="badge badge--outline badge--outline-light">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Stuart, FL & the Treasure Coast{" "}
                </span>
              </div>
              <h1 className="hero-heading hero-heading--light">
                A finish your home
                <br />
                <em className="accent-italic">deserves.</em>
              </h1>
              <p className="hero-lead hero-lead--light">
                Scollo Painting Inc. is a family-run interior, exterior &
                commercial painting company serving Stuart, Palm Beach County
                and the Treasure Coast. Licensed, insured, and rated 4.9★ from
                54 reviews — we show up on time, prep thoroughly, and back every
                job with a fixed, written quote.
              </p>
              <div className="hero-actions">
                <Link href="/quote" className="btn btn--primary btn--lg">
                  Get a Free Quote
                </Link>{" "}
                <a href="tel:+15613061813" className="btn btn--inverse btn--lg">
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
              <div className="hero-trust hero-trust--light">
                <div className="trust-item">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>{" "}
                  Licensed & fully insured
                </div>
                <div className="trust-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>{" "}
                  45+ years experience
                </div>
                <div className="trust-item">
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
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  20 cities served
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section services-section">
          <div className="container">
            <div className="section-header section-header--center">
              <p className="eyebrow">What we do</p>
              <h2>
                Residential & commercial painting services{" "}
                <em className="accent-italic">in Stuart, FL.</em>
              </h2>
              <p className="section-lead">
                From a single room refresh to a full commercial repaint, our
                Stuart-based painting crew delivers consistent quality backed by
                45+ years of hands-on experience across Palm Beach and Martin
                County.
              </p>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-card-icon">
                  <Icon name="home" aria-hidden="true" />
                </div>
                <h3>Interior Painting</h3>
                <p>
                  Walls, ceilings, trim, cabinets — we handle every interior
                  surface with proper prep and premium paints that look great
                  and stand up to daily life.
                </p>
                <Link
                  href="/services/interior-painting"
                  className="service-card-link"
                >
                  {" "}
                  Learn more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                  </svg>{" "}
                </Link>
              </article>
              <article className="service-card">
                <div className="service-card-icon">
                  <Icon name="sun" aria-hidden="true" />
                </div>
                <h3>Exterior Painting</h3>
                <p>
                  Florida weather demands more. We use weather-resistant
                  coatings and thorough surface preparation to protect and
                  beautify your home's exterior for years to come.
                </p>
                <Link
                  href="/services/exterior-painting"
                  className="service-card-link"
                >
                  {" "}
                  Learn more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                  </svg>{" "}
                </Link>
              </article>
              <article className="service-card">
                <div className="service-card-icon">
                  <Icon name="building-2" aria-hidden="true" />
                </div>
                <h3>Commercial Painting</h3>
                <p>
                  Offices, retail, multi-family — we work around your schedule
                  to deliver professional results with minimal disruption to
                  your operations.
                </p>
                <Link
                  href="/services/commercial-painting"
                  className="service-card-link"
                >
                  {" "}
                  Learn more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                  </svg>{" "}
                </Link>
              </article>
              <article className="service-card">
                <div className="service-card-icon">
                  <Icon name="hammer" aria-hidden="true" />
                </div>
                <h3>Wall & Ceiling Texture and Drywall Repair</h3>
                <p>
                  Cracks, holes, water damage — we repair and restore surfaces
                  to a seamless finish before painting, so the final result is
                  truly flawless.
                </p>
                <Link
                  href="/services/texture-drywall-repair"
                  className="service-card-link"
                >
                  {" "}
                  Learn more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
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
                  </svg>{" "}
                </Link>
              </article>
            </div>
          </div>
        </section>
        <section className="section why-section">
          <div className="container">
            <div className="why-grid">
              <div className="why-content">
                <p className="eyebrow eyebrow--light">
                  Why homeowners choose us
                </p>
                <h2 className="why-heading">
                  A local painting contractor with{" "}
                  <em className="accent-italic--light">45+ years of trust.</em>
                </h2>
                <p className="why-lead">
                  We've been part of the Stuart and Palm Beach County community
                  for over four decades. Every project gets the same attention
                  to detail — whether it's a single bedroom or a full commercial
                  building.
                </p>
                <Link href="/about" className="btn btn--outline-light btn--md">
                  Learn about us
                </Link>
              </div>
              <div className="why-trust-grid">
                <div className="trust-card">
                  <div className="trust-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <h3>Industry experts</h3>
                  <p>
                    45+ years of hands-on experience painting homes and
                    businesses across South Florida.
                  </p>
                </div>
                <div className="trust-card">
                  <div className="trust-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
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
                  </div>
                  <h3>Quick turnaround</h3>
                  <p>
                    We respect your time. Projects are scheduled promptly and
                    completed on the agreed timeline.
                  </p>
                </div>
                <div className="trust-card">
                  <div className="trust-card-icon">
                    <Icon name="receipt" aria-hidden="true" />
                  </div>
                  <h3>Cost transparency</h3>
                  <p>
                    Every quote is fixed and detailed up front — no surprise
                    charges when the job is done.
                  </p>
                </div>
                <div className="trust-card">
                  <div className="trust-card-icon">
                    <Icon name="heart-handshake" aria-hidden="true" />
                  </div>
                  <h3>Customer service</h3>
                  <p>
                    We stay in communication throughout every job and don't
                    leave until you're fully satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section gallery-section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Our work</p>
              <h2>
                Before & after{" "}
                <em className="accent-italic">painting projects.</em>
              </h2>
              <p className="section-lead">
                Drag the slider to compare before and after on a real interior
                project. <Link href="/gallery">View the full gallery →</Link>
              </p>
            </div>
            <BeforeAfter
              style={{ height: "460px" }}
              ariaLabel="Interior painting transformation by Scollo Painting Inc."
            >
              <div className="ba-after-panel">
                <img
                  src="/assets/before-after-makeovers.webp"
                  alt="After: beautifully painted modern living room"
                  loading="lazy"
                />{" "}
                <span className="ba-label ba-label--after">After</span>
              </div>
              <div className="ba-before-clip">
                <div className="ba-before-panel">
                  <img
                    src="/assets/before-after-makeovers-livingroom.webp"
                    alt="Before: room before painting"
                    loading="lazy"
                  />{" "}
                  <span className="ba-label ba-label--before">Before</span>
                </div>
              </div>
              <div className="ba-handle">
                <div className="ba-handle-knob">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0a1626"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {" "}
                    <polyline points="15 18 9 12 15 6"></polyline>
                    <polyline points="9 6 15 12 9 18"></polyline>{" "}
                  </svg>
                </div>
              </div>
            </BeforeAfter>
          </div>
        </section>
        <section className="section areas-section">
          <div className="container">
            <div className="section-header section-header--center">
              <p className="eyebrow">Where we work</p>
              <h2>
                Painters serving Stuart, Palm Beach County{" "}
                <em className="accent-italic">& the Treasure Coast.</em>
              </h2>
              <p className="section-lead">
                From Stuart and Jensen Beach to Boca Raton and Fort Lauderdale,
                Scollo Painting brings the same craftsmanship to every job site
                in these 20 communities.
              </p>
            </div>
            <div className="city-chips">
              <Link href="/areas/stuart" className="city-chip">
                Stuart
              </Link>{" "}
              <Link href="/areas/delray-beach" className="city-chip">
                Delray Beach
              </Link>{" "}
              <Link href="/areas/boca-raton" className="city-chip">
                Boca Raton
              </Link>{" "}
              <Link href="/areas/boynton-beach" className="city-chip">
                Boynton Beach
              </Link>{" "}
              <Link href="/areas/wellington" className="city-chip">
                Wellington
              </Link>{" "}
              <Link href="/areas/palm-beach-gardens" className="city-chip">
                Palm Beach Gardens
              </Link>{" "}
              <Link href="/areas/west-palm-beach" className="city-chip">
                West Palm Beach
              </Link>{" "}
              <Link href="/areas/jupiter" className="city-chip">
                Jupiter
              </Link>{" "}
              <Link href="/areas/hobe-sound" className="city-chip">
                Hobe Sound
              </Link>{" "}
              <Link href="/areas/jensen-beach" className="city-chip">
                Jensen Beach
              </Link>{" "}
              <Link href="/areas/lake-worth" className="city-chip">
                Lake Worth
              </Link>{" "}
              <Link href="/areas/highland-beach" className="city-chip">
                Highland Beach
              </Link>{" "}
              <Link href="/areas/lighthouse-point" className="city-chip">
                Lighthouse Point
              </Link>{" "}
              <Link href="/areas/fort-lauderdale" className="city-chip">
                Fort Lauderdale
              </Link>{" "}
              <Link href="/areas/pompano-beach" className="city-chip">
                Pompano Beach
              </Link>{" "}
              <Link href="/areas/coral-springs" className="city-chip">
                Coral Springs
              </Link>{" "}
              <Link href="/areas/parkland" className="city-chip">
                Parkland
              </Link>{" "}
              <Link href="/areas/deerfield-beach" className="city-chip">
                Deerfield Beach
              </Link>{" "}
              <Link href="/areas/manalapan" className="city-chip">
                Manalapan
              </Link>{" "}
              <Link href="/areas/north-palm-beach" className="city-chip">
                North Palm Beach
              </Link>{" "}
              <Link href="/areas/royal-palm-beach" className="city-chip">
                Royal Palm Beach
              </Link>
            </div>
            <div className="areas-cta">
              <Link href="/areas" className="btn btn--secondary btn--md">
                View all service areas
              </Link>
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="container">
            <div className="section-header section-header--center">
              <p className="eyebrow">Common questions</p>
              <h2>
                Frequently asked <em className="accent-italic">questions.</em>
              </h2>
            </div>
            <div
              className="faq-list"
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                display: "grid",
                gap: "24px",
              }}
            >
              <div>
                <h3>How much does it cost to paint a house in Stuart, FL?</h3>
                <p>
                  Most interior rooms range from a few hundred to over a
                  thousand dollars depending on size and prep work, while full
                  exterior repaints typically run a few thousand dollars. Scollo
                  Painting provides a fixed, written quote after an in-person
                  estimate, so you know the total cost before work begins.
                </p>
              </div>
              <div>
                <h3>Is Scollo Painting Inc. licensed and insured?</h3>
                <p>
                  Yes. Scollo Painting Inc. is fully licensed and insured for
                  residential and commercial painting throughout Martin and Palm
                  Beach County, Florida.
                </p>
              </div>
              <div>
                <h3>What areas does Scollo Painting serve?</h3>
                <p>
                  We serve Stuart, Jensen Beach, Hobe Sound, Palm Beach Gardens,
                  West Palm Beach, Jupiter, Wellington, Lake Worth, Delray
                  Beach, Boca Raton, Boynton Beach, Fort Lauderdale and
                  surrounding Treasure Coast and Palm Beach County communities.{" "}
                  <Link href="/areas">See all 20 service areas →</Link>
                </p>
              </div>
              <div>
                <h3>How long has Scollo Painting been in business?</h3>
                <p>
                  Scollo Painting Inc. is a family-run painting contractor that
                  has served Stuart and the surrounding Treasure Coast since
                  1979 — more than 45 years of interior, exterior and commercial
                  painting experience.
                </p>
              </div>
            </div>
            <div className="areas-cta">
              <Link href="/faq" className="btn btn--secondary btn--md">
                View all FAQs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <section className="section reviews-section">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="eyebrow">What clients say</p>
            <h2>
              Trusted by homeowners{" "}
              <em className="accent-italic">
                across Palm Beach & Martin County.
              </em>
            </h2>
            <div className="reviews-aggregate">
              <span className="reviews-stars" aria-label="4.9 out of 5 stars">
                ★★★★★
              </span>{" "}
              <span className="reviews-score">4.9</span>{" "}
              <span className="reviews-count">— Based on 54 reviews</span>
            </div>
          </div>
          <div className="reviews-grid">
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-body">
                "Scollo Painting completely transformed our home. The crew was
                professional, on time, and the finish is absolutely flawless.
                We've had many contractors over the years — this is the best
                experience by far."
              </blockquote>
              <footer className="review-author">
                <strong>Robert K.</strong> <span>Palm Beach Gardens, FL</span>
              </footer>
            </article>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-body">
                "45 years in business shows — they know exactly what they're
                doing. Our Jupiter exterior looks brand new and the prep work
                was incredibly thorough. Salt air won't stand a chance."
              </blockquote>
              <footer className="review-author">
                <strong>Linda M.</strong> <span>Jupiter, FL</span>
              </footer>
            </article>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-body">
                "Fixed price, no surprises, no upsells. They painted our entire
                interior in two days and the cleanup was spotless. Our living
                room looks like a magazine spread. Will absolutely use again."
              </blockquote>
              <footer className="review-author">
                <strong>James R.</strong> <span>Stuart, FL</span>
              </footer>
            </article>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-body">
                "Hired Scollo for our Delray Beach condo exterior after the HOA
                flagged it. They handled color approval paperwork, matched the
                finish perfectly, and finished ahead of schedule. Incredible
                service."
              </blockquote>
              <footer className="review-author">
                <strong>Patricia H.</strong> <span>Delray Beach, FL</span>
              </footer>
            </article>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-body">
                "Used them for a drywall repair and full repaint on a rental we
                were turning over. They matched the existing texture perfectly.
                Tenant moved in on time. Very reliable team."
              </blockquote>
              <footer className="review-author">
                <strong>Steve & Carol T.</strong> <span>Boca Raton, FL</span>
              </footer>
            </article>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <blockquote className="review-body">
                "From the estimate visit to the final walkthrough, Scollo was
                communicative and detailed. Our West Palm Beach commercial space
                looks sharp and professional. Already recommended them to two
                other businesses."
              </blockquote>
              <footer className="review-author">
                <strong>Michelle D.</strong> <span>West Palm Beach, FL</span>
              </footer>
            </article>
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
