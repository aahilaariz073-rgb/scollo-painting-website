import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

type P = { size?: number; strokeWidth?: number; className?: string };

export const ChevronDown = ({ size = 13 }: P) => (
  <svg width={size} height={size} {...base} strokeWidth={2.2}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const ArrowRight = ({ size = 13 }: P) => (
  <svg width={size} height={size} {...base} strokeWidth={2.2}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Phone = ({ size = 17 }: P) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...base}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export const MapPin = ({ size = 17 }: P) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...base}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = ({ size = 17 }: P) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...base}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const Menu = ({ size = 26 }: P) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...base}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const X = ({ size = 26, strokeWidth = 1.9 }: P) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...base} strokeWidth={strokeWidth}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const ServiceGlyph = ({ name }: { name: "panel" | "home" | "video" | "wrench" }) => {
  switch (name) {
    case "panel":
      return (
        <svg width={15} height={15} {...base}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
        </svg>
      );
    case "home":
      return (
        <svg width={15} height={15} {...base}>
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "video":
      return (
        <svg width={15} height={15} {...base}>
          <rect x="2" y="7" width="20" height="15" rx="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      );
    case "wrench":
      return (
        <svg width={15} height={15} {...base}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
  }
};
