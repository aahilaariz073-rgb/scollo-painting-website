import { Award, Building2, Hammer, Heart, HeartHandshake, Home, Receipt, Sun } from "lucide-react";
import type { LucideProps } from "lucide-react";

const icons = {
  award: Award,
  "building-2": Building2,
  hammer: Hammer,
  heart: Heart,
  "heart-handshake": HeartHandshake,
  home: Home,
  receipt: Receipt,
  sun: Sun,
} as const;

export type IconName = keyof typeof icons;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp strokeWidth={1.9} {...props} />;
}
