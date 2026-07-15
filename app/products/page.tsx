import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { ProductCard } from "../../components/product-card";
import { Reveal } from "../../components/reveal";
import { products } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Produk Kelapa untuk Industri",
  description: "Jelajahi VCO, RBD Coconut Oil, MCT Oil, dan Coconut Flour dari LIVCO Indonesia untuk kebutuhan food, personal care, nutraceutical, dan industri.",
  alternates: { canonical: "/products" },
  keywords: ["VCO Indonesia", "virgin coconut oil", "MCT oil Indonesia", "RBD coconut oil", "coconut flour supplier"],
};

const faqs = [
  ["Produk mana yang tepat untuk aplikasi saya?", "Tim LIVCO membantu memetakan produk berdasarkan aplikasi, kebutuhan karakter bahan, format, dan rencana volume Anda."],
  ["Apakah LIVCO melayani kebutuhan bulk?", "Ya. Portofolio kami disiapkan untuk diskusi pengadaan bulk, kebutuhan berulang, dan opsi kemasan yang sesuai proyek."],
  ["Bisakah saya meminta spesifikasi produk?", "Bisa. Kirimkan detail aplikasi Anda melalui halaman Kontak agar kami dapat menyiapkan informasi produk yang paling relevan."],
];

export default function ProductsPage() {
  const schema = { "@context": "https://schema.org", "@type": "ItemList", name: "LIVCO Indonesia Coconut Ingredient Portfolio", itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Product", name: product.name, description: product.description, category: "Coconut ingredient" } })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <main>
    <PageHero eyebrow="Produk kami" title="Ingredient kelapa untuk ide yang lebih besar." description="Portofolio terfokus untuk kebutuhan pangan, personal care, nutraceutical, dan industri—tersedia untuk pasokan bulk maupun pengembangan private label." />
    <section className="catalog"><div className="container">
      <div className="catalog-intro"><Reveal><span className="eyebrow">Complete portfolio</span><h2>Pilih fondasi untuk<br /><em>produk berikutnya.</em></h2></Reveal><Reveal delay={.08}><p>Setiap produk diposisikan dengan jelas: apa karakternya, di mana ia bekerja, dan bagaimana LIVCO dapat membantu menyiapkan alur pengadaannya.</p><Link href="/contact" className="text-link">Diskusikan kebutuhan Anda <span>↗</span></Link></Reveal></div>
      <div className="product-grid">{products.map((product,index)=><Reveal key={product.slug} delay={index*.07}><ProductCard product={product} index={index}/></Reveal>)}</div>
    </div></section>
    <section className="product-selection"><div className="container"><Reveal><span className="eyebrow eyebrow--light">Beyond the product</span><h2>Lebih jelas sejak<br /><em>percakapan pertama.</em></h2></Reveal><div className="selection-grid">{[["01","Application-first","Kami mulai dari produk akhir dan kebutuhan aplikasi Anda, bukan dari katalog semata."],["02","Specification-led","Diskusi grade, format, dan karakter bahan dibuat lebih ringkas untuk mempermudah keputusan."],["03","Supply-minded","Kami mengarahkan percakapan pada kebutuhan pengadaan yang realistis dan berkelanjutan."]].map(([no,title,text],index)=><Reveal key={no} delay={index*.08} className="selection-card"><span>{no}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="product-faq"><div className="container"><Reveal><span className="eyebrow">Procurement, simplified</span><h2>Jawaban sebelum<br />Anda bertanya.</h2></Reveal><div className="faq-list">{faqs.map(([question,answer],index)=><Reveal className="faq-item" delay={index*.08} key={question}><span>0{index + 1}</span><div><h3>{question}</h3><p>{answer}</p></div></Reveal>)}</div></div></section>
    <section className="cta-section product-cta"><div className="container"><Reveal><span className="eyebrow eyebrow--light">Let’s make it specific</span><h2>Siap memilih<br />ingredient yang tepat?</h2><p>Mulai dengan aplikasi, kebutuhan produk, dan target pengadaan Anda. Tim kami akan membantu mengarahkan langkah berikutnya.</p><Link className="button button--ivory" href="/contact">Minta konsultasi produk <span>↗</span></Link></Reveal></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </main>;
}
