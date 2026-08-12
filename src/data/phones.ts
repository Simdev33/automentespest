export const PHONES = [
  { display: "+36 30 194 0603", href: "tel:+36301940603" },
  { display: "+36 50 126 3990", href: "tel:+36501263990" },
] as const;

export const PHONES_META = PHONES.map((p) => p.display).join(", ");
