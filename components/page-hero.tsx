import { Reveal } from "./reveal";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="page-hero-noise" /><div className="page-hero-orbit" aria-hidden="true" /><div className="container"><Reveal immediate><span className="eyebrow eyebrow--light">{eyebrow}</span><h1>{title}</h1><p>{description}</p></Reveal></div></section>;
}
