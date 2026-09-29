import Link from "next/link";
import SentSwitch from "@/components/SentSwitch";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Get a Free Quote | Scollo Painting Inc. | Stuart, FL" },
  description:
    "Request a free painting estimate from Scollo Painting Inc. in Stuart, FL. Fixed pricing, no hidden fees. Interior, exterior & commercial. Call 561-306-1813.",
  alternates: { canonical: "https://scollopainting.com/quote" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Get a Free Quote | Scollo Painting Inc. | Stuart, FL",
    description:
      "Request a free painting estimate from Scollo Painting Inc. in Stuart, FL. Fixed pricing, no hidden fees. Interior, exterior & commercial. Call 561-306-1813.",
    url: "https://scollopainting.com/quote",
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
        name: "Get a Free Quote",
        item: "https://scollopainting.com/quote",
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
              <span aria-current="page">Get a Free Quote</span>
            </nav>
          </div>
        </div>
        <section className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">Free estimates</p>
              <h1>
                Tell us about <em className="accent-italic">your project.</em>
              </h1>
              <p className="page-hero-lead">
                Fill in the form below and we'll be in touch within one business
                day. All estimates are free, detailed, and fixed-price — no
                surprises.
              </p>
            </div>
          </div>
        </section>
        <section className="section quote-section">
          <div className="container">
            <div className="quote-grid">
              <div className="quote-form-card">
                <SentSwitch
                  success={
                    <div className="quote-success visible" id="quoteSuccess">
                      <div className="quote-success-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
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
                      <h2>Thank you! We'll be in touch soon.</h2>
                      <p>
                        Your quote request has been received. A member of the
                        Scollo Painting team will contact you within one
                        business day to discuss your project and schedule a free
                        on-site estimate.
                      </p>
                      <p>
                        In the meantime, feel free to call us at{" "}
                        <a href="tel:+15613061813">561-306-1813</a> if you have
                        any questions.
                      </p>
                    </div>
                  }
                >
                  <form
                    className="quote-form"
                    id="quoteForm"
                    action="https://formsubmit.co/hello@skyliftgroup.com"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Quote Request — Scollo Painting Inc."
                    />{" "}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://scollopainting.com/quote?sent=1"
                    />{" "}
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full name{" "}
                        <span className="form-required" aria-hidden="true">
                          *
                        </span>
                      </label>{" "}
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-input"
                        placeholder="Jane Smith"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone{" "}
                          <span className="form-required" aria-hidden="true">
                            *
                          </span>
                        </label>{" "}
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-input"
                          placeholder="(561) 555-0100"
                          required
                          autoComplete="tel"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email{" "}
                          <span className="form-required" aria-hidden="true">
                            *
                          </span>
                        </label>{" "}
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder="jane@example.com"
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>{" "}
                      <select id="city" name="city" className="form-select">
                        {" "}
                        <option value="">Select your city…</option>{" "}
                        <option value="Stuart">Stuart</option>{" "}
                        <option value="Delray Beach">Delray Beach</option>{" "}
                        <option value="Boca Raton">Boca Raton</option>{" "}
                        <option value="Boynton Beach">Boynton Beach</option>{" "}
                        <option value="Wellington">Wellington</option>{" "}
                        <option value="Palm Beach Gardens">
                          Palm Beach Gardens
                        </option>{" "}
                        <option value="West Palm Beach">West Palm Beach</option>{" "}
                        <option value="Jupiter">Jupiter</option>{" "}
                        <option value="Hobe Sound">Hobe Sound</option>{" "}
                        <option value="Jensen Beach">Jensen Beach</option>{" "}
                        <option value="Lake Worth">Lake Worth</option>{" "}
                        <option value="Highland Beach">Highland Beach</option>{" "}
                        <option value="Lighthouse Point">
                          Lighthouse Point
                        </option>{" "}
                        <option value="Fort Lauderdale">Fort Lauderdale</option>{" "}
                        <option value="Pompano Beach">Pompano Beach</option>{" "}
                        <option value="Coral Springs">Coral Springs</option>{" "}
                        <option value="Parkland">Parkland</option>{" "}
                        <option value="Deerfield Beach">Deerfield Beach</option>{" "}
                        <option value="Manalapan">Manalapan</option>{" "}
                        <option value="North Palm Beach">
                          North Palm Beach
                        </option>{" "}
                        <option value="Royal Palm Beach">
                          Royal Palm Beach
                        </option>{" "}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="serviceType" className="form-label">
                        Service type
                      </label>{" "}
                      <select
                        id="serviceType"
                        name="serviceType"
                        className="form-select"
                      >
                        {" "}
                        <option value="">Select a service…</option>{" "}
                        <option value="Interior Painting">
                          Interior Painting
                        </option>{" "}
                        <option value="Exterior Painting">
                          Exterior Painting
                        </option>{" "}
                        <option value="Commercial Painting">
                          Commercial Painting
                        </option>{" "}
                        <option value="Wall & Ceiling Texture and Drywall Repair">
                          Wall & Ceiling Texture and Drywall Repair
                        </option>{" "}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="projectDetails" className="form-label">
                        Project details
                      </label>{" "}
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        className="form-textarea"
                        rows={5}
                        placeholder="Tell us about your project — size, surfaces, timeline, any special requirements…"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn--primary btn--lg btn--full"
                    >
                      Request my free quote
                    </button>
                  </form>
                </SentSwitch>
              </div>
              <aside className="quote-aside">
                <div className="quote-aside-card">
                  <h2>Contact us directly</h2>
                  <div className="aside-contact-row">
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
                    </svg>
                    <div>
                      <div className="aside-label">Phone</div>
                      <a href="tel:+15613061813" className="aside-value">
                        561-306-1813
                      </a>
                    </div>
                  </div>
                  <div className="aside-contact-row">
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
                    </svg>
                    <div>
                      <div className="aside-label">Address</div>
                      <div className="aside-value">
                        848 S.E. Fleming Way
                        <br />
                        Stuart, FL 34997
                      </div>
                    </div>
                  </div>
                  <div className="aside-contact-row">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <div>
                      <div className="aside-label">Hours</div>
                      <div className="aside-value">
                        Mon–Sat 9:00 AM – 5:00 PM
                        <br />
                        Sunday Closed
                      </div>
                    </div>
                  </div>
                  <div className="aside-contact-row">
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
                    </svg>
                    <div>
                      <div className="aside-label">
                        Licensed & fully insured
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quote-testimonial-card">
                  <div className="review-stars">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <blockquote>
                    <p>
                      "The quote process was easy and the price was exactly what
                      we paid. No upsells, no surprises. Our home looks brand
                      new."
                    </p>
                  </blockquote>
                  <p className="review-author">
                    — Robert K., Palm Beach Gardens
                  </p>
                </div>
              </aside>
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
