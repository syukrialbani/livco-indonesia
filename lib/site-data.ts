export type Product = {
  slug: string;
  eyebrow: string;
  name: string;
  shortName: string;
  description: string;
  applications: string[];
  specification: string;
  grade: string;
  format: string;
  highlight: string;
  features: string[];
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "virgin-coconut-oil",
    eyebrow: "Flagship ingredient",
    name: "Virgin Coconut Oil",
    shortName: "VCO",
    description:
      "Minyak kelapa murni dari daging kelapa matang, diproses secara mekanis untuk mempertahankan karakter alami tanpa proses refining, bleaching, atau deodorizing.",
    applications: ["Food & beverage", "Personal care", "Nutraceutical"],
    specification: "Food grade · Bulk & private label",
    grade: "Virgin / food grade",
    format: "Bulk · private label",
    highlight: "Naturally aromatic, clear, and designed for ingredient-led brands.",
    features: ["Mechanical process", "Natural coconut character", "Flexible pack options"],
    image: "/images/livco-vco-bottle.jpg",
    imageAlt: "Botol LIVCO VCO dengan kelapa segar",
  },
  {
    slug: "rbd-coconut-oil",
    eyebrow: "Consistent performance",
    name: "RBD Coconut Oil",
    shortName: "RBD CNO",
    description:
      "Minyak kelapa refined, bleached, dan deodorized dengan profil netral untuk formulasi pangan dan kebutuhan manufaktur berskala besar.",
    applications: ["Food manufacturing", "Oleochemical", "Bakery"],
    specification: "Industrial grade · Bulk supply",
    grade: "Refined / industrial",
    format: "Bulk supply",
    highlight: "A neutral profile for consistent use across scaled production lines.",
    features: ["Neutral aroma", "Manufacturing ready", "Consistent profile"],
    image: "/images/rbd-coconut-oil.png",
    imageAlt: "Botol minyak kelapa dan kelapa untuk RBD Coconut Oil",
  },
  {
    slug: "mct-oil",
    eyebrow: "Functional oil",
    name: "MCT Oil",
    shortName: "MCT",
    description:
      "Minyak trigliserida rantai menengah berbasis kelapa untuk formulasi nutrisi, pangan fungsional, dan personal care.",
    applications: ["Functional food", "Sports nutrition", "Cosmetics"],
    specification: "C8/C10 options · Custom packing",
    grade: "Functional ingredient",
    format: "C8/C10 options",
    highlight: "A clean, versatile oil for contemporary functional formulations.",
    features: ["C8/C10 options", "Clear liquid", "Custom packing"],
    image: "/images/mct-oil.png",
    imageAlt: "Still life minyak bening berbasis kelapa untuk MCT Oil",
  },
  {
    slug: "coconut-flour",
    eyebrow: "Upcycled goodness",
    name: "Coconut Flour",
    shortName: "Flour",
    description:
      "Tepung dari daging kelapa yang dikeringkan dan digiling halus, cocok untuk inovasi bakery dan produk pangan berbasis tumbuhan.",
    applications: ["Bakery", "Snacks", "Plant-based food"],
    specification: "Fine milled · Food grade",
    grade: "Food grade",
    format: "Fine milled",
    highlight: "A finely milled coconut ingredient for thoughtful bakery and snack concepts.",
    features: ["Fine milled", "Plant-based", "Ingredient flexibility"],
    image: "/images/coconut-flour.png",
    imageAlt: "Coconut flour dalam mangkuk dengan kelapa segar",
  },
];

export const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/products", label: "Produk" },
  { href: "/sustainability", label: "Keberlanjutan" },
  { href: "/contact", label: "Kontak" },
];

export const industries = [
  ["01", "Food & Beverage", "Bahan baku untuk bakery, minuman, dan pangan fungsional."],
  ["02", "Personal Care", "Basis alami untuk skincare, haircare, dan formulasi kosmetik."],
  ["03", "Nutraceutical", "Ingredient untuk suplemen dan produk nutrisi modern."],
  ["04", "Industrial", "Pasokan stabil untuk oleochemical dan manufaktur."],
];
