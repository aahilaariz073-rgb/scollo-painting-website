import Link from "next/link";
import { areas, footerAreaOrder, PHONE_DISPLAY, PHONE_HREF, services } from "@/lib/site-data";
import { Clock, MapPin, Phone } from "./icons";

const byslug = Object.fromEntries(areas.map((a) => [a.slug, a]));

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <img src="/assets/logo-dark.svg" alt="Scollo Painting Inc." className="footer-logo-img" />
              <p className="footer-desc">
                Family-run residential &amp; commercial painting contractor. Over 45 years of clean
                lines and durable finishes across the Treasure Coast.
              </p>
              <a href={PHONE_HREF} className="phone-link phone-link--light">
                <Phone /> {PHONE_DISPLAY}
              </a>
            </div>

            <div>
              <div className="footer-head">Company</div>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/gallery" className="footer-link">Gallery</Link>
              <Link href="/blog" className="footer-link">Blog</Link>
              <Link href="/faq" className="footer-link">FAQ</Link>
              <Link href="/quote" className="footer-link">Get a Quote</Link>
            </div>

            <div>
              <div className="footer-head">Services</div>
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="footer-link">{s.name}</Link>
              ))}
            </div>

            <div>
              <div className="footer-head">Contact</div>
              <div className="footer-contact-row">
                <MapPin />
                <span>848 S.E. Fleming Way<br />Stuart, FL 34997</span>
              </div>
              <div className="footer-contact-row">
                <Clock />
                <span>Mon–Sat 9:00 AM – 5:00 PM<br />Sunday Closed</span>
              </div>
              <div className="footer-map">
                <iframe
                  src="https://maps.google.com/maps?q=848+SE+Fleming+Way,+Stuart,+FL+34997&output=embed"
                  width="100%"
                  height={200}
                  style={{ border: 0, borderRadius: 8, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Scollo Painting Inc. — 848 S.E. Fleming Way, Stuart FL"
                />
              </div>
            </div>
          </div>

          <div className="footer-areas-row">
            <div className="footer-areas-label">Areas Serviced</div>
            <div className="footer-cities">
              {footerAreaOrder.map((slug) => {
                const a = byslug[slug] as { slug: string; name: string; footerName?: string };
                return (
                  <Link key={slug} href={`/areas/${slug}`}>
                    {a.footerName ?? a.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="footer-bottom">
            <div className="payment-badges">
              {["Visa", "Mastercard", "Discover", "Amex", "Check", "Cash"].map((p) => (
                <span key={p} className="payment-badge">{p}</span>
              ))}
              <span className="footer-insured">Licensed &amp; fully insured</span>
            </div>
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} Scollo Painting Inc. &middot; All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
