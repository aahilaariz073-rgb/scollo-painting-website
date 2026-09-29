import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import GalleryGrid from "@/components/GalleryGrid";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Painting Gallery | Scollo Painting Inc. | Stuart, FL" },
  description:
    "See before & after photos from Scollo Painting Inc. projects across Stuart, Palm Beach & the Treasure Coast. Interior, exterior & commercial results. Call 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/gallery" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title:
      "Project Gallery | Before & After Painting Projects | Scollo Painting Inc.",
    description:
      "See before & after photos from Scollo Painting Inc. projects across Stuart, Palm Beach & the Treasure Coast. Interior, exterior & commercial results. Call 561-306-1813.",
    url: "https://scollopainting.com/gallery",
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
        name: "Gallery",
        item: "https://scollopainting.com/gallery",
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
              <span aria-current="page">Gallery</span>
            </nav>
          </div>
        </div>
        <section className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">Our work</p>
              <h1>
                Before & after —{" "}
                <em className="accent-italic">see the difference.</em>
              </h1>
              <p className="page-hero-lead">
                Every project in our gallery represents a real client's home or
                business. Drag the slider below to compare results, then browse
                our project grid.
              </p>
            </div>
          </div>
        </section>
        <section className="section gallery-slider-section">
          <div className="container">
            <BeforeAfter
              style={{ height: "460px" }}
              ariaLabel="Interior painting transformation by Scollo Painting Inc."
            >
              <div className="ba-after-panel">
                <img
                  src="/assets/clare_burgundy_bedroom_makeover_vintage_1.webp"
                  alt="After: beautifully painted bedroom"
                  loading="lazy"
                />{" "}
                <span className="ba-label ba-label--after">After</span>
              </div>
              <div className="ba-before-clip">
                <div className="ba-before-panel">
                  <img
                    src="/assets/clare_burgundy_bedroom_makeover_before_2.webp"
                    alt="Before: bedroom before painting"
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
        <section className="section gallery-grid-section">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Project photos</p>
              <h2>
                From our <em className="accent-italic">recent projects.</em>
              </h2>
            </div>
            <GalleryGrid>
              <figure className="gallery-item">
                <img
                  src="/assets/%5B%20Kitchen%20cabinet%20repaint%20%E2%80%94%20Stuart%2C%20FL%20%5D.webp"
                  alt="Kitchen cabinet repaint — Stuart, FL"
                  loading="lazy"
                />
                <figcaption>Kitchen cabinet repaint — Stuart, FL</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/%5B%20Retail%20storefront%20%E2%80%94%20Boca%20Raton%2C%20FL%20%5D.jpg"
                  alt="Retail storefront — Boca Raton, FL"
                  loading="lazy"
                />
                <figcaption>Retail storefront — Boca Raton, FL</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/%5B%20Exterior%20stucco%20repaint%20%E2%80%94%20West%20Palm%20Beach%2C%20FL%20%5D.jpg"
                  alt="Exterior stucco repaint — West Palm Beach, FL"
                  loading="lazy"
                />
                <figcaption>
                  Exterior stucco repaint — West Palm Beach, FL
                </figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/%5B%20Drywall%20repair%20%26%20paint%20%E2%80%94%20Stuart%2C%20FL%20%5D.jpg"
                  alt="Drywall repair & paint — Stuart, FL"
                  loading="lazy"
                />
                <figcaption>Drywall repair & paint — Stuart, FL</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/%5B%20Commercial%20office%20%E2%80%94%20Palm%20Beach%20Gardens%2C%20FL%20%5D.jpg"
                  alt="Commercial office — Palm Beach Gardens, FL"
                  loading="lazy"
                />
                <figcaption>
                  Commercial office — Palm Beach Gardens, FL
                </figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/Living%20Room.webp"
                  alt="Living Room"
                  loading="lazy"
                />
                <figcaption>Living Room</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/%5B%20Exterior%20repaint%20%E2%80%94%20Jupiter%2C%20FL%20%5D.png"
                  alt="Exterior repaint — Jupiter, FL"
                  loading="lazy"
                />
                <figcaption>Exterior repaint — Jupiter, FL</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/Screenshot%202026-06-10%20135935.png"
                  alt="Painting project"
                  loading="lazy"
                />
                <figcaption>Painting project</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/Screenshot%202026-06-10%20135741.png"
                  alt="Painting project"
                  loading="lazy"
                />
                <figcaption>Painting project</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/Screenshot%202026-06-10%20135630.png"
                  alt="Painting project"
                  loading="lazy"
                />
                <figcaption>Painting project</figcaption>
              </figure>
              <figure className="gallery-item">
                <img
                  src="/assets/Screenshot%202026-06-10%20135517.png"
                  alt="Painting project"
                  loading="lazy"
                />
                <figcaption>Painting project</figcaption>
              </figure>
            </GalleryGrid>
            <p className="gallery-caption">
              All photography is from real client projects.{" "}
              <Link href="/contact">Contact us</Link> to see additional project
              photos.
            </p>
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
