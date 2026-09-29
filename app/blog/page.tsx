import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Painting Tips & Guides | Scollo Painting Blog | Stuart, FL",
  },
  description:
    "Practical painting tips, cost guides & contractor advice from Scollo Painting Inc. — for homeowners in Stuart, FL and Palm Beach County.",
  alternates: { canonical: "https://scollopainting.com/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Painting Tips & Guides | Scollo Painting Blog | Stuart, FL",
    description:
      "Practical painting tips, cost guides & contractor advice from Scollo Painting Inc. — for homeowners in Stuart, FL and Palm Beach County.",
    url: "https://scollopainting.com/blog",
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
    "@type": "CollectionPage",
    name: "Scollo Painting Blog",
    url: "https://scollopainting.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Scollo Painting Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://scollopainting.com/assets/icon-512.png",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          url: "https://scollopainting.com/blog/how-much-does-it-cost-to-paint-a-house-in-stuart-fl",
        },
        {
          "@type": "ListItem",
          position: 2,
          url: "https://scollopainting.com/blog/best-time-to-paint-exterior-florida",
        },
        {
          "@type": "ListItem",
          position: 3,
          url: "https://scollopainting.com/blog/interior-paint-color-trends-2026",
        },
        {
          "@type": "ListItem",
          position: 4,
          url: "https://scollopainting.com/blog/how-to-choose-a-painting-contractor-palm-beach-county",
        },
        {
          "@type": "ListItem",
          position: 5,
          url: "https://scollopainting.com/blog/drywall-repair-before-painting-guide",
        },
      ],
    },
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
              <span aria-current="page">Blog</span>
            </nav>
          </div>
        </div>
        <section className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">The Scollo Painting journal</p>
              <h1>
                Painting tips & <em className="accent-italic">guides.</em>
              </h1>
              <p className="page-hero-lead">
                Straightforward advice on cost, color, prep, and hiring the
                right contractor — written for homeowners in Stuart and across
                Palm Beach County.
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="blog-grid">
              <Link
                href="/blog/how-much-does-it-cost-to-paint-a-house-in-stuart-fl"
                className="blog-card"
              >
                {" "}
                <img
                  src="/assets/Living%20Room.webp"
                  alt="Freshly painted living room in a Stuart, FL home"
                  className="blog-card-img"
                  loading="lazy"
                />
                <div className="blog-card-body">
                  <span className="blog-card-tag">Cost Guides</span>
                  <h3>
                    How Much Does It Cost to Paint a House in Stuart, FL? (2026
                    Price Guide)
                  </h3>
                  <p>
                    Real interior and exterior price ranges, plus the factors
                    that move your quote up or down. Learn what drives cost
                    before you call for estimates.
                  </p>
                  <span className="blog-card-meta">
                    Sep 20, 2026 · 7 min read
                  </span>{" "}
                  <span className="blog-card-link">Read more →</span>
                </div>
              </Link>{" "}
              <Link
                href="/blog/best-time-to-paint-exterior-florida"
                className="blog-card"
              >
                {" "}
                <img
                  src="/assets/%5B%20Exterior%20repaint%20%E2%80%94%20Jupiter%2C%20FL%20%5D.png"
                  alt="Exterior repaint of a home in Jupiter, FL"
                  className="blog-card-img"
                  loading="lazy"
                />
                <div className="blog-card-body">
                  <span className="blog-card-tag">Exterior</span>
                  <h3>
                    Best Time of Year to Paint Your Home's Exterior in Florida
                  </h3>
                  <p>
                    Humidity, heat, and afternoon storms all affect how paint
                    cures. Here's how to time an exterior repaint so it lasts.
                  </p>
                  <span className="blog-card-meta">
                    Sep 10, 2026 · 6 min read
                  </span>{" "}
                  <span className="blog-card-link">Read more →</span>
                </div>
              </Link>{" "}
              <Link
                href="/blog/interior-paint-color-trends-2026"
                className="blog-card"
              >
                {" "}
                <img
                  src="/assets/dark_green_bedroom_field_trip_hero_720x.webp"
                  alt="Deep green accent bedroom color trend"
                  className="blog-card-img"
                  loading="lazy"
                />
                <div className="blog-card-body">
                  <span className="blog-card-tag">Interior Design</span>
                  <h3>
                    Interior Paint Color Trends for South Florida Homes in 2026
                  </h3>
                  <p>
                    Five color directions that work with Florida's natural
                    light, from warm neutrals to deep coastal greens. Plus tips
                    for testing before you commit.
                  </p>
                  <span className="blog-card-meta">
                    Sep 1, 2026 · 6 min read
                  </span>{" "}
                  <span className="blog-card-link">Read more →</span>
                </div>
              </Link>{" "}
              <Link
                href="/blog/how-to-choose-a-painting-contractor-palm-beach-county"
                className="blog-card"
              >
                {" "}
                <img
                  src="/assets/Commercial-painting.jpg"
                  alt="Professional painting crew at work on a Palm Beach County project"
                  className="blog-card-img"
                  loading="lazy"
                />
                <div className="blog-card-body">
                  <span className="blog-card-tag">Hiring a Contractor</span>
                  <h3>
                    How to Choose a Painting Contractor in Palm Beach County: 7
                    Questions to Ask
                  </h3>
                  <p>
                    Licensing, written quotes, warranties, and payment red flags
                    — the questions that separate a solid contractor from a
                    risky hire.
                  </p>
                  <span className="blog-card-meta">
                    Aug 15, 2026 · 7 min read
                  </span>{" "}
                  <span className="blog-card-link">Read more →</span>
                </div>
              </Link>{" "}
              <Link
                href="/blog/drywall-repair-before-painting-guide"
                className="blog-card"
              >
                {" "}
                <img
                  src="/assets/texture.jpeg"
                  alt="Drywall texture repair before painting"
                  className="blog-card-img"
                  loading="lazy"
                />
                <div className="blog-card-body">
                  <span className="blog-card-tag">Maintenance</span>
                  <h3>
                    Why Drywall Repair Should Always Come Before Painting (And
                    How to Spot Damage)
                  </h3>
                  <p>
                    Cracks, nail pops, and water stains will telegraph right
                    through a fresh coat. Here's what to look for and why
                    repair-first matters.
                  </p>
                  <span className="blog-card-meta">
                    Aug 1, 2026 · 6 min read
                  </span>{" "}
                  <span className="blog-card-link">Read more →</span>
                </div>
              </Link>
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
