import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "../../../components/page-hero";
import { Reveal } from "../../../components/reveal";
import { products } from "../../../lib/site-data";

export function generateStaticParams() { return products.map(({slug})=>({slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const product=products.find((item)=>item.slug===slug);
  return product ? { title: product.name, description: product.description, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.name} | LIVCO Indonesia`, description: product.description, images: [{ url: "/og.png", width: 1200, height: 630, alt: `${product.name} from LIVCO Indonesia` }] } } : {};
}

export default async function ProductDetailPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const product=products.find((item)=>item.slug===slug); if(!product) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description, category: "Coconut ingredient", countryOfOrigin: "Indonesia", brand: { "@type": "Brand", name: "LIVCO Indonesia" }, additionalProperty: [{ "@type": "PropertyValue", name: "Grade", value: product.grade }, { "@type": "PropertyValue", name: "Format", value: product.format }] };
  return <main>
    <PageHero eyebrow={product.eyebrow} title={product.name} description={product.description}/>
    <section className="product-detail"><div className="container product-detail-grid"><Reveal className="detail-visual"><img src={product.image} alt={product.imageAlt} /><span className="detail-visual-caption">LIVCO / {product.shortName}</span></Reveal><Reveal delay={.08} className="detail-copy"><span className="eyebrow">Product overview</span><h1>{product.name}</h1><p>{product.highlight}</p><div className="detail-list"><div><span>Aplikasi</span><b>{product.applications.join(" · ")}</b></div><div><span>Grade</span><b>{product.grade}</b></div><div><span>Format</span><b>{product.format}</b></div><div><span>Asal</span><b>Indonesia</b></div></div><Link className="button" style={{background:"var(--forest)",color:"white"}} href="/contact">Minta spesifikasi <span>↗</span></Link></Reveal></div></section>
    <section className="ingredient-focus"><div className="container"><Reveal><span className="eyebrow">Why this ingredient</span><h2>Karakter yang memberi<br /><em>ruang untuk berkembang.</em></h2></Reveal><div className="ingredient-feature-grid">{product.features.map((feature,index)=><Reveal delay={index*.08} className="ingredient-feature" key={feature}><span>0{index + 1}</span><h3>{feature}</h3><p>{index === 0 ? "Diformulasikan untuk memulai percakapan ingredient dengan lebih spesifik." : index === 1 ? "Membantu tim produk menentukan peran bahan yang sesuai untuk aplikasinya." : "Siap dibahas bersama kebutuhan format dan pengadaan Anda."}</p></Reveal>)}</div></div></section>
    <section className="product-application"><div className="container"><Reveal><span className="eyebrow eyebrow--light">Built for application</span><h2>Dari bahan baku<br />ke <em>produk yang terasa tepat.</em></h2></Reveal><div className="application-columns">{product.applications.map((application,index)=><Reveal className="application-column" delay={index*.08} key={application}><span>0{index + 1}</span><h3>{application}</h3><p>{product.name} dapat dibicarakan sebagai salah satu fondasi ingredient untuk pengembangan kategori ini.</p></Reveal>)}</div></div></section>
    <section className="product-next"><div className="container"><Reveal><span className="eyebrow">Next conversation</span><h2>Sudah punya<br />brief produk?</h2><p>Kirimkan aplikasi, kebutuhan ingredient, dan konteks pengadaan Anda. Kami akan membantu mengarahkan diskusi yang lebih relevan.</p><Link className="text-link" href="/contact">Hubungi LIVCO <span>↗</span></Link></Reveal></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
