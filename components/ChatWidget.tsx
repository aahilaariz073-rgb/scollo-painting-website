"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FORM_ENDPOINT } from "@/lib/site-data";

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [labelHidden, setLabelHidden] = useState(false);
  const [sent, setSent] = useState(false);
  const submitted = useRef(false);

  // The "Have a question?" label fades away after a few seconds.
  useEffect(() => {
    const t = setTimeout(() => setLabelHidden(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    setOpen((v) => !v);
    setLabelHidden(true);
  };

  return (
    <div className="chat-widget" id="chatWidget">
      <iframe
        name="chatFrame"
        id="chatFrame"
        aria-hidden="true"
        tabIndex={-1}
        onLoad={() => {
          if (submitted.current) setSent(true);
        }}
      />
      <div className={`chat-panel${open ? " open" : ""}`} id="chatPanel">
        <div className="chat-panel-head">
          <div className="chat-panel-head-inner">
            <img src="/assets/logo-dark.svg" alt="Scollo Painting Inc." className="chat-logo" width={110} height={25} />
          </div>
          <button className="chat-panel-close" id="chatClose" aria-label="Close chat" onClick={() => setOpen(false)}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="chat-panel-body">
          <p className="chat-intro">Enter your question below and a representative will get right back to you.</p>
          {!sent && (
            <form
              id="chatForm"
              action={FORM_ENDPOINT}
              method="POST"
              target="chatFrame"
              onSubmit={() => {
                submitted.current = true;
              }}
            >
              <input type="hidden" name="_subject" value="Chat Inquiry — Scollo Painting Inc." />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_page" value={pathname ?? ""} />
              <div className="chat-field">
                <input type="text" name="name" className="chat-input" placeholder="Name *" required />
              </div>
              <div className="chat-field">
                <input type="tel" name="phone" className="chat-input" placeholder="Phone *" required />
              </div>
              <div className="chat-field">
                <textarea name="message" className="chat-textarea" placeholder="How can we help?" rows={3} />
              </div>
              <button type="submit" className="chat-submit">
                Send{" "}
                <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
          {sent && (
            <div className="chat-success" id="chatSuccess">
              <svg width={42} height={42} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p className="chat-success-title">We&apos;ll be in touch soon!</p>
              <p className="chat-success-sub">A member of our team will call or email you within one business day.</p>
            </div>
          )}
        </div>
      </div>
      <div className="chat-bubble-row">
        <span className={`chat-bubble-label${labelHidden ? " hidden" : ""}`} id="chatLabel">
          Have a question?
        </span>
        <button className={`chat-bubble${open ? " open" : ""}`} id="chatBubble" aria-label="Chat with us" aria-expanded={open} onClick={toggle}>
          <svg className="icon-chat" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <svg className="icon-close" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
