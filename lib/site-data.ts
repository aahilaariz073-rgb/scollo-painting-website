export const SITE_URL = "https://scollopainting.com";
export const SITE_NAME = "Scollo Painting Inc.";
export const PHONE_DISPLAY = "561-306-1813";
export const PHONE_HREF = "tel:+15613061813";
export const FORM_ENDPOINT = "https://formsubmit.co/hello@skyliftgroup.com";

export type ServiceIcon = "panel" | "home" | "video" | "wrench";

export const services = [
  { slug: "interior-painting", name: "Interior Painting", icon: "home" },
  { slug: "exterior-painting", name: "Exterior Painting", icon: "panel" },
  { slug: "commercial-painting", name: "Commercial Painting", icon: "video" },
  {
    slug: "texture-drywall-repair",
    name: "Wall & Ceiling Texture and Drywall Repair",
    icon: "wrench",
  },
] as const;

export const areas = [
  { slug: "boca-raton", name: "Boca Raton" },
  { slug: "boynton-beach", name: "Boynton Beach" },
  { slug: "coral-springs", name: "Coral Springs" },
  { slug: "deerfield-beach", name: "Deerfield Beach" },
  { slug: "delray-beach", name: "Delray Beach" },
  { slug: "fort-lauderdale", name: "Fort Lauderdale" },
  { slug: "highland-beach", name: "Highland Beach" },
  { slug: "hobe-sound", name: "Hobe Sound" },
  { slug: "jensen-beach", name: "Jensen Beach" },
  { slug: "jupiter", name: "Jupiter" },
  { slug: "lake-worth", name: "Lake Worth Beach", footerName: "Lake Worth" },
  { slug: "lighthouse-point", name: "Lighthouse Point" },
  { slug: "manalapan", name: "Manalapan" },
  { slug: "north-palm-beach", name: "North Palm Beach" },
  { slug: "palm-beach-gardens", name: "Palm Beach Gardens" },
  { slug: "parkland", name: "Parkland" },
  { slug: "pompano-beach", name: "Pompano Beach" },
  { slug: "royal-palm-beach", name: "Royal Palm Beach" },
  { slug: "stuart", name: "Stuart" },
  { slug: "wellington", name: "Wellington" },
  { slug: "west-palm-beach", name: "West Palm Beach" },
] as const;

/** Order used by the footer "Areas Serviced" list. */
export const footerAreaOrder = [
  "stuart", "delray-beach", "boca-raton", "boynton-beach", "wellington",
  "palm-beach-gardens", "west-palm-beach", "jupiter", "hobe-sound",
  "jensen-beach", "lake-worth", "highland-beach", "lighthouse-point",
  "fort-lauderdale", "pompano-beach", "coral-springs", "parkland",
  "deerfield-beach", "manalapan", "north-palm-beach", "royal-palm-beach",
] as const;
