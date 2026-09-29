"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { areas, PHONE_DISPLAY, PHONE_HREF, services } from "@/lib/site-data";
import { ArrowRight, ChevronDown, Menu, Phone, ServiceGlyph, X } from "./icons";

function useCurrent() {
  const pathname = usePathname() || "/";
  return (href: string) => (pathname === href ? ({ "aria-current": "page" } as const) : {});
}

export default function Header() {
  const pathname = usePathname();
  const current = useCurrent();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openList, setOpenList] = useState<"services" | "areas" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleList = (name: "services" | "areas") =>
    setOpenList((v) => (v === name ? null : name));

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="header-logo">
            <img src="/assets/logo.svg" alt="Scollo Painting Inc." width={140} height={32} />
          </Link>

          <nav className="header-nav" aria-label="Main navigation">
            <Link href="/" {...current("/")}>Home</Link>
            <Link href="/about" {...current("/about")}>About</Link>

            <div className="nav-dropdown">
              <button className="nav-dropdown-btn">
                Services <ChevronDown />
              </button>
              <div className="nav-dropdown-panel">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`}>
                    <ServiceGlyph name={s.icon} /> {s.name}
                  </Link>
                ))}
                <div className="nav-dropdown-divider" />
                <Link href="/services" className="nav-dropdown-all">
                  View All Services <ArrowRight />
                </Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <button className="nav-dropdown-btn">
                Areas Serviced <ChevronDown />
              </button>
              <div className="nav-dropdown-panel nav-dropdown-panel--areas">
                <div className="nav-dd-grid">
                  {areas.map((a) => (
                    <Link key={a.slug} href={`/areas/${a.slug}`}>{a.name}</Link>
                  ))}
                </div>
                <div className="nav-dropdown-divider" />
                <Link href="/areas" className="nav-dropdown-all">
                  View All Areas <ArrowRight />
                </Link>
              </div>
            </div>

            <Link href="/gallery" {...current("/gallery")}>Gallery</Link>
            <Link href="/blog" {...current("/blog")}>Blog</Link>
            <Link href="/faq" {...current("/faq")}>FAQ</Link>
            <Link href="/contact" {...current("/contact")}>Contact</Link>
          </nav>

          <div className="header-actions">
            <a href={PHONE_HREF} className="phone-link">
              <Phone />
              {PHONE_DISPLAY}
            </a>
            <Link href="/quote" className="btn btn--primary btn--md">Get a Free Quote</Link>
          </div>

          <button
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <button
          className={`mobile-nav-dropdown-btn${openList === "services" ? " open" : ""}`}
          onClick={() => toggleList("services")}
        >
          Services <ChevronDown />
        </button>
        <div className={`mobile-nav-dropdown-list${openList === "services" ? " open" : ""}`}>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>
          ))}
          <Link href="/services">View All Services</Link>
        </div>

        <button
          className={`mobile-nav-dropdown-btn${openList === "areas" ? " open" : ""}`}
          onClick={() => toggleList("areas")}
        >
          Areas Serviced <ChevronDown />
        </button>
        <div className={`mobile-nav-dropdown-list${openList === "areas" ? " open" : ""}`}>
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`}>{a.name}</Link>
          ))}
          <Link href="/areas">View All Areas</Link>
        </div>

        <Link href="/gallery">Gallery</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
        <div className="mobile-menu-actions">
          <Link href="/quote" className="btn btn--primary btn--md btn--full">Get a Free Quote</Link>
          <a href={PHONE_HREF} className="btn btn--secondary btn--md">Call</a>
        </div>
      </div>
    </header>
  );
}
