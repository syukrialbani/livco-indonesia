import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { Reveal } from "../../components/reveal";

export const metadata: Metadata = {
  title: "Tentang LIVCO Indonesia",
  description: "Kenali LIVCO Indonesia—mitra ingredient kelapa untuk kualitas produk, alur pasok yang jelas, dan hubungan bisnis jangka panjang.",
  alternates: { canonical: "/about" },
  keywords: ["LIVCO Indonesia", "coconut ingredient supplier Indonesia", "VCO supplier", "coconut product sourcing"],
};

const principles = [
  ["01", "Quality with context", "Kami tidak berhenti pada kata kualitas. Kami memulai dari karakter bahan, aplikasi, dan kebutuhan produk akhir agar diskusi menjadi lebih relevan."],
  ["02", "Partnership over transactions", "LIVCO dibangun untuk membantu pelanggan bergerak lebih yakin—dengan komunikasi terbuka dan langkah kerja yang mudah dipahami."],
  ["03", "Nature, used thoughtfully", "Kami melihat kelapa sebagai sumber daya dengan banyak potensi. Portofolio kami diarahkan untuk membuka nilai pada berbagai kebutuhan industri."],
];

const journey = [
  ["01", "Understand", "Mendengar aplikasi, target produk, dan cara kerja yang Anda perlukan."],
  ["02", "Align", "Memetakan ingredient, karakter produk, dan format pengadaan yang sesuai."],
  ["03", "Prepare", "Menyelaraskan informasi produk dan kesiapan untuk langkah komersial berikutnya."],
  ["04", "Grow", "Menjaga hubungan agar kebutuhan yang berkembang dapat ditangani dengan lebih baik."],
];

export default function AboutPage() {
  return <main>
    <PageHero eyebrow="Tentang LIVCO" title="Alam memberi potensi. Kami membawanya lebih jauh." description="LIVCO Indonesia adalah mitra bahan baku kelapa yang berfokus pada produk berkualitas, komunikasi yang terbuka, dan alur pasok yang mudah dipahami." />
    <section className="about-intro"><div className="container about-intro-grid"><Reveal><span className="eyebrow">Our point of view</span><h2>Ketika ingredient dipahami dengan lebih baik, peluang ikut terbuka.</h2></Reveal><Reveal delay={.1}><p className="lead">Kami percaya nilai kelapa Indonesia tumbuh saat kualitas produk, kebutuhan pelanggan, dan tanggung jawab terhadap sumbernya bergerak dalam arah yang sama.</p><p>LIVCO hadir untuk menjembatani tiga hal tersebut. Kami menyederhanakan percakapan awal—dari kebutuhan produk, opsi ingredient, spesifikasi, sampai kesiapan pengadaan—agar pelanggan dapat fokus membangun produk yang lebih baik.</p><div className="about-signature"><span>Based in</span><b>Indonesia</b><i>for global ideas</i></div></Reveal></div></section>
    <section className="about-gallery" aria-label="Koleksi produk LIVCO"><div className="container about-gallery-grid"><Reveal className="about-gallery-primary"><img src="/images/livco-vco-bottle.jpg" alt="Botol LIVCO Extra Virgin Coconut Oil di samping kelapa" /></Reveal><Reveal delay={.08} className="about-gallery-secondary"><img src="/images/livco-vco-still.jpg" alt="Extra virgin coconut oil dengan kelapa segar" /></Reveal><Reveal delay={.16} className="about-gallery-note"><p>Made from Indonesian coconut, handled with care.</p><span>Natural ingredients · Thoughtful process</span></Reveal></div></section>
    <section className="about-principles"><div className="container"><Reveal><span className="eyebrow eyebrow--light">What guides us</span><h2>Lebih dari sekadar<br /><em>mencari bahan baku.</em></h2></Reveal><div className="principles-grid">{principles.map(([number,title,text],index)=><Reveal key={number} delay={index*.08} className="principle-card"><span>{number}</span><h3>{title}</h3><p>{text}</p><b aria-hidden="true">↗</b></Reveal>)}</div></div></section>
    <section className="about-journey"><div className="container"><div className="journey-heading"><Reveal><span className="eyebrow">How we collaborate</span><h2>Lebih ringkas di awal.<br />Lebih kuat ke depan.</h2></Reveal><Reveal delay={.08}><p>Kami menganggap setiap kebutuhan baru sebagai percakapan yang perlu dipahami dengan baik, bukan sekadar permintaan harga.</p></Reveal></div><div className="journey-list">{journey.map(([number,title,text],index)=><Reveal key={number} delay={index*.08} className="journey-step"><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="about-proof"><div className="container"><Reveal className="proof-copy"><span className="eyebrow">Designed for real teams</span><h2>Untuk tim yang<br />ingin bergerak dengan lebih jelas.</h2><p>Baik Anda sedang mengeksplorasi produk baru, mencari format pengadaan yang lebih tepat, atau membangun pilihan ingredient yang lebih relevan—LIVCO siap menjadi titik awal percakapan.</p><Link href="/contact" className="button" style={{ background: "var(--forest)", color: "white" }}>Mulai percakapan <span>↗</span></Link></Reveal><Reveal delay={.1} className="proof-points"><div><b>Product<br />thinking</b><span>Memulai dari aplikasi dan tujuan produk.</span></div><div><b>Clear<br />dialogue</b><span>Membuat informasi lebih mudah dipahami.</span></div><div><b>Natural<br />potential</b><span>Menghubungkan ide dengan kelapa Indonesia.</span></div></Reveal></div></section>
  </main>;
}
