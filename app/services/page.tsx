import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Painting Services in Stuart, FL | Interior, Exterior & Commercial | Scollo Painting",
  },
  description:
    "Interior, exterior, commercial painting & drywall repair in Stuart, FL and Palm Beach County. Scollo Painting Inc. — family-owned since 1979. Free estimates. Call 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/services" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Painting Services in Stuart, FL | Scollo Painting Inc.",
    description:
      "Interior, exterior & commercial painting in Stuart, FL. Scollo Painting Inc. — family-owned, 45+ years. Free estimates. 561-306-1813.",
    url: "https://scollopainting.com/services",
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
              <span aria-current="page">Services</span>
            </nav>
          </div>
        </div>
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">What we offer</p>
              <h1>
                Painting services in Stuart, FL{" "}
                <em className="accent-italic">— delivered right.</em>
              </h1>
              <p className="page-hero-lead">
                Scollo Painting Inc. is a full-service painting contractor
                handling everything from a single interior room to
                multi-building commercial projects. Every service comes with
                thorough prep, premium materials, and a fixed price quoted up
                front.
              </p>
            </div>
          </div>
        </section>
        <section className="section service-rows-section">
          <div className="container">
            <div className="service-row">
              <div className="service-row-img">
                <img
                  src="/assets/dark_green_bedroom_field_trip_hero_720x.webp"
                  alt="Interior bedroom painting — deep green finish by Scollo Painting Inc."
                  width="700"
                  height="520"
                  loading="lazy"
                />
              </div>
              <div className="service-row-content">
                <div className="service-row-icon">
                  <Icon name="home" aria-hidden="true" />
                </div>
                <h2>Interior Painting</h2>
                <p>
                  Whether you're refreshing a single bedroom or repainting your
                  entire home, our interior painting crews deliver exceptional
                  results. We prepare every surface correctly — patching
                  imperfections, sanding, and priming before applying premium
                  paint for a finish that looks great and lasts.
                </p>
                <ul className="service-list">
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Walls, ceilings, and trim
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Doors, cabinets, and built-ins
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Color consultations available
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Furniture protection included
                  </li>
                </ul>
                <Link
                  href="/services/interior-painting"
                  className="btn btn--primary btn--md"
                >
                  Learn more about interior painting
                </Link>
              </div>
            </div>
            <div className="service-row service-row--reverse">
              <div className="service-row-img">
                <img
                  src="/assets/[%20Exterior%20stucco%20repaint%20%E2%80%94%20West%20Palm%20Beach,%20FL%20].jpg"
                  alt="Exterior stucco repaint by Scollo Painting Inc. — West Palm Beach, FL"
                  width="700"
                  height="520"
                  loading="lazy"
                />
              </div>
              <div className="service-row-content">
                <div className="service-row-icon">
                  <Icon name="sun" aria-hidden="true" />
                </div>
                <h2>Exterior Painting</h2>
                <p>
                  Florida's heat, humidity, and salt air are hard on exterior
                  paint. We use high-performance weather-resistant coatings
                  specifically formulated for South Florida conditions, applied
                  over thoroughly cleaned and prepared surfaces for maximum
                  adhesion and longevity.
                </p>
                <ul className="service-list">
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Stucco, wood, and masonry surfaces
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Power washing and full surface prep
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Caulking and sealing included
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    UV-resistant premium finishes
                  </li>
                </ul>
                <Link
                  href="/services/exterior-painting"
                  className="btn btn--primary btn--md"
                >
                  Learn more about exterior painting
                </Link>
              </div>
            </div>
            <div className="service-row">
              <div className="service-row-img">
                <img
                  src="/assets/Commercial%20Painting.jpg"
                  alt="Commercial painting project completed by Scollo Painting Inc."
                  width="700"
                  height="520"
                  loading="lazy"
                />
              </div>
              <div className="service-row-content">
                <div className="service-row-icon">
                  <Icon name="building-2" aria-hidden="true" />
                </div>
                <h2>Commercial Painting</h2>
                <p>
                  We understand that commercial clients have tight schedules and
                  high standards. Scollo Painting has completed projects for
                  offices, retail centers, medical facilities, multi-family
                  buildings, and more — always delivered on time and with
                  minimal disruption to your operations.
                </p>
                <ul className="service-list">
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Offices, retail, and medical facilities
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Multi-family and HOA properties
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    After-hours and weekend scheduling
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Licensed, insured, and bonded
                  </li>
                </ul>
                <Link
                  href="/services/commercial-painting"
                  className="btn btn--primary btn--md"
                >
                  Learn more about commercial painting
                </Link>
              </div>
            </div>
            <div className="service-row service-row--reverse">
              <div className="service-row-img">
                <img
                  src="/assets/texturesss.webp"
                  alt="Wall texture and drywall repair by Scollo Painting Inc."
                  width="700"
                  height="520"
                  loading="lazy"
                />
              </div>
              <div className="service-row-content">
                <div className="service-row-icon">
                  <Icon name="hammer" aria-hidden="true" />
                </div>
                <h2>Wall & Ceiling Texture and Drywall Repair</h2>
                <p>
                  A perfect paint job starts with a perfect surface. We repair
                  cracks, holes, and water damage in both drywall before
                  painting, ensuring a smooth, seamless result. Whether it's a
                  hairline crack or significant structural damage, our team has
                  the skills to restore your walls.
                </p>
                <ul className="service-list">
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Hairline cracks and nail pops
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Water damage and stain blocking
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Hole patching and panel replacement
                  </li>
                  <li>
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Texture matching available
                  </li>
                </ul>
                <Link
                  href="/services/texture-drywall-repair"
                  className="btn btn--primary btn--md"
                >
                  Learn more about wall & ceiling texture and drywall repair
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section why-summary-section">
          <div className="container">
            <div className="section-header section-header--center">
              <p className="eyebrow">Why Scollo Painting</p>
              <h2>
                Every service,{" "}
                <em className="accent-italic">the same high standard.</em>
              </h2>
            </div>
            <div className="why-summary-grid">
              <div className="why-summary-item">
                <div className="why-summary-icon">
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
                <h3>Licensed & insured</h3>
                <p>
                  Fully licensed and insured for residential and commercial work
                  in Florida.
                </p>
              </div>
              <div className="why-summary-item">
                <div className="why-summary-icon">
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
                <h3>On-time delivery</h3>
                <p>
                  We commit to a schedule and stick to it — respecting your home
                  and your time.
                </p>
              </div>
              <div className="why-summary-item">
                <div className="why-summary-icon">
                  <Icon name="receipt" aria-hidden="true" />
                </div>
                <h3>Fixed-price quotes</h3>
                <p>
                  No surprise invoices. Every quote is detailed, fixed, and
                  transparent from day one.
                </p>
              </div>
              <div className="why-summary-item">
                <div className="why-summary-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3>45+ years experience</h3>
                <p>
                  Decades of real-world experience means we've encountered and
                  solved every challenge.
                </p>
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
