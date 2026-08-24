export const PHONES = [
  { display: "+36 30 194 0602", href: "tel:+36301940602" },
] as const;

export const PHONES_META = PHONES.map((p) => p.display).join(", ");
