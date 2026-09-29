import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Scollo Painting Inc. | Family-Run Painters in Stuart, FL Since 1979",
  },
  description:
    "Meet Scollo Painting Inc. — a family-run house painting company in Stuart, FL with 45+ years serving Palm Beach & Martin County. Licensed & insured. Call 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/about" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "About Scollo Painting Inc. | 45+ Years of Family-Run Craftsmanship",
    description:
      "Meet Scollo Painting Inc. — a family-run painting contractor in Stuart, FL with 45+ years of experience in residential & commercial painting. Call 561-306-1813.",
    url: "https://scollopainting.com/about",
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
    "@type": "Painter",
    name: "Scollo Painting Inc.",
    telephone: "+1-561-306-1813",
    url: "https://scollopainting.com",
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
        name: "About",
        item: "https://scollopainting.com/about",
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
              <span aria-current="page">About</span>
            </nav>
          </div>
        </div>
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">Our story</p>
              <h1>
                A family business built on{" "}
                <em className="accent-italic">craft and trust.</em>
              </h1>
              <p className="page-hero-lead">
                For more than 45 years, Scollo Painting Inc. has been a fixture
                of the Stuart, Florida community — delivering meticulous
                residential and commercial painting work backed by old-fashioned
                reliability and modern expertise.
              </p>
            </div>
          </div>
        </section>
        <section className="section stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">45+</div>
                <div className="stat-label">Years in business</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20</div>
                <div className="stat-label">Cities served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Licensed & fully insured</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-text">
                <p className="eyebrow">Who we are</p>
                <h2>
                  Built from the ground up,{" "}
                  <em className="accent-italic">one coat at a time.</em>
                </h2>
                <p>
                  Scollo Painting Inc. was founded in Stuart, Florida with a
                  simple promise: do the job right and stand behind your work.
                  What started as a small local operation has grown into one of
                  the most trusted painting contractors across the Treasure
                  Coast and Palm Beach County — not through advertising, but
                  through word of mouth and repeat business from satisfied
                  homeowners and property managers.
                </p>
                <p>
                  We remain a family-run business today. That means every
                  estimate, every project, and every follow-up is handled with
                  personal accountability. When you call Scollo Painting, you
                  speak to someone who cares about the outcome as much as you
                  do. We've watched our clients' children grow up and come back
                  to us for their own homes — that kind of relationship is what
                  we're most proud of.
                </p>
              </div>
              <div className="story-photo">
                <div className="photo-placeholder">
                  <img
                    src="/assets/vecteezy_high-rise-building-maintenance-engineers-using-cranes_16561368.jpg"
                    alt="Building maintenance engineers painting a high-rise"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section values-section">
          <div className="container">
            <div className="section-header section-header--center">
              <p className="eyebrow">What we stand for</p>
              <h2>
                Our values, <em className="accent-italic">in practice.</em>
              </h2>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-card-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                <h3>Professionalism</h3>
                <p>
                  We arrive on time, communicate clearly, and treat your
                  property with the same respect we'd give our own. Every job is
                  approached with a professional mindset from start to finish.
                </p>
              </div>
              <div className="value-card">
                <div className="value-card-icon">
                  <Icon name="award" aria-hidden="true" />
                </div>
                <h3>Expertise</h3>
                <p>
                  Decades of real-world experience means we've seen and solved
                  every painting challenge imaginable — from historic textured
                  walls to high-humidity coastal exteriors.
                </p>
              </div>
              <div className="value-card">
                <div className="value-card-icon">
                  <Icon name="heart" aria-hidden="true" />
                </div>
                <h3>Care</h3>
                <p>
                  We genuinely care about how your home or business looks. We
                  don't rush, we don't cut corners, and we don't leave until the
                  work meets our own high standards.
                </p>
              </div>
              <div className="value-card">
                <div className="value-card-icon">
                  <Icon name="receipt" aria-hidden="true" />
                </div>
                <h3>Transparency</h3>
                <p>
                  No hidden fees, no bait-and-switch quotes. You'll always know
                  exactly what you're paying before a single drop of paint is
                  opened.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="approach-section"
          style={{ padding: "var(--space-8) 0 var(--space-9)" }}
        >
          <div className="container">
            <div className="approach-inner">
              <div className="approach-text">
                <p className="eyebrow">How we work</p>
                <h2>
                  Thorough prep. Careful execution.{" "}
                  <em className="accent-italic">Flawless results.</em>
                </h2>
                <p>
                  Our process begins well before the first brush stroke. We
                  conduct a detailed walkthrough with every client, assess
                  surface conditions, discuss color and sheen options, and
                  provide a written fixed-price quote. We believe preparation is
                  80% of the final result — so we patch, sand, prime, and
                  protect before we ever open a paint can.
                </p>
                <p>
                  Our crews are experienced, courteous, and fully
                  background-checked. We use premium paints from leading
                  manufacturers and apply them correctly for maximum durability.
                  When we're done, we do a final walkthrough with you to make
                  sure every detail meets your expectations.
                </p>
                <Link
                  href="/quote"
                  className="btn btn--primary btn--sm"
                  style={{ alignSelf: "flex-start" }}
                >
                  Get a free estimate
                </Link>
              </div>
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
