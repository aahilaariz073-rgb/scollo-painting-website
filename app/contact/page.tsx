import Link from "next/link";
import SentSwitch from "@/components/SentSwitch";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Scollo Painting Inc. | Stuart, FL | 561-306-1813",
  },
  description:
    "Contact Scollo Painting Inc. in Stuart, FL. Call 561-306-1813, visit 848 S.E. Fleming Way, or use our contact form. Mon–Sat 9 AM–5 PM.",
  alternates: { canonical: "https://scollopainting.com/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Contact Scollo Painting Inc. | Stuart, FL | 561-306-1813",
    description:
      "Contact Scollo Painting Inc. in Stuart, FL. Call 561-306-1813, visit 848 S.E. Fleming Way, or use our contact form. Mon–Sat 9 AM–5 PM.",
    url: "https://scollopainting.com/contact",
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
        name: "Contact",
        item: "https://scollopainting.com/contact",
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
              <span aria-current="page">Contact</span>
            </nav>
          </div>
        </div>
        <section className="page-hero page-hero--sm">
          <div className="container">
            <div className="page-hero-content">
              <p className="eyebrow">Get in touch</p>
              <h1>
                Let's talk about{" "}
                <em className="accent-italic">your project.</em>
              </h1>
              <p className="page-hero-lead">
                Whether you have a question, want to schedule an estimate, or
                need to discuss an ongoing project — we're here and happy to
                help.
              </p>
            </div>
          </div>
        </section>
        <section className="section contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Find us</h2>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <div className="contact-info-label">Phone</div>
                    <a
                      href="tel:+15613061813"
                      className="contact-info-value contact-info-link"
                    >
                      561-306-1813
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  </div>
                  <div className="contact-info-text">
                    <div className="contact-info-label">Address</div>
                    <address className="contact-info-value">
                      848 S.E. Fleming Way
                      <br /> Stuart, FL 34997
                    </address>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  <div className="contact-info-text">
                    <div className="contact-info-label">Hours</div>
                    <div className="contact-info-value">
                      Monday – Saturday: 9:00 AM – 5:00 PM
                      <br /> Sunday: Closed
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  <div className="contact-info-text">
                    <div className="contact-info-label">
                      License & insurance
                    </div>
                    <div className="contact-info-value">
                      Licensed & fully insured
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginTop: "8px",
                  }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=848+SE+Fleming+Way,+Stuart,+FL+34997&output=embed"
                    width="100%"
                    height="260"
                    style={{ border: "0", display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Scollo Painting Inc. — 848 S.E. Fleming Way, Stuart FL"
                  ></iframe>
                </div>
              </div>
              <div className="contact-form-wrap">
                <h2>Send a message</h2>
                <SentSwitch
                  success={
                    <div className="quote-success visible" id="contactSuccess">
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
                      <h2>Message received!</h2>
                      <p>
                        Thank you for reaching out to Scollo Painting Inc. We'll
                        get back to you within one business day. If you need
                        immediate assistance, please call us at{" "}
                        <a href="tel:+15613061813">561-306-1813</a>.
                      </p>
                    </div>
                  }
                >
                  <form
                    className="contact-form"
                    id="contactForm"
                    action="https://formsubmit.co/hello@skyliftgroup.com"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Contact Message — Scollo Painting Inc."
                    />{" "}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://scollopainting.com/contact?sent=1"
                    />{" "}
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="form-group">
                      <label htmlFor="contactName" className="form-label">
                        Full name{" "}
                        <span className="form-required" aria-hidden="true">
                          *
                        </span>
                      </label>{" "}
                      <input
                        type="text"
                        id="contactName"
                        name="name"
                        className="form-input"
                        placeholder="Jane Smith"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contactPhone" className="form-label">
                          Phone{" "}
                          <span className="form-required" aria-hidden="true">
                            *
                          </span>
                        </label>{" "}
                        <input
                          type="tel"
                          id="contactPhone"
                          name="phone"
                          className="form-input"
                          placeholder="(561) 555-0100"
                          required
                          autoComplete="tel"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contactEmail" className="form-label">
                          Email{" "}
                          <span className="form-required" aria-hidden="true">
                            *
                          </span>
                        </label>{" "}
                        <input
                          type="email"
                          id="contactEmail"
                          name="email"
                          className="form-input"
                          placeholder="jane@example.com"
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactMessage" className="form-label">
                        Message{" "}
                        <span className="form-required" aria-hidden="true">
                          *
                        </span>
                      </label>{" "}
                      <textarea
                        id="contactMessage"
                        name="message"
                        className="form-textarea"
                        rows={6}
                        placeholder="Tell us how we can help…"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn--primary btn--lg btn--full"
                    >
                      Send message
                    </button>
                  </form>
                </SentSwitch>
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
