import Link from "next/link";
import { ProductCard } from "../components/product-card";
import { Reveal } from "../components/reveal";
import { industries, products } from "../lib/site-data";
import { HeroVisual } from "../components/hero-visual";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <HeroVisual />
        <div className="hero-shade" />
        <div className="container hero-content">
          <Reveal immediate><span className="eyebrow eyebrow--light">From Indonesia, naturally</span><h1>Pure coconut.<br /><em>Real possibilities.</em></h1><p>LIVCO Indonesia menghadirkan bahan baku kelapa berkualitas untuk industri pangan, personal care, dan nutrisi—dengan proses yang transparan dari sumber hingga pengiriman.</p><div className="hero-actions"><Link className="button button--ivory" href="/products">Jelajahi produk <span>↗</span></Link><Link className="button-link" href="/about">Kenali LIVCO <span>→</span></Link></div></Reveal>
        </div>
        <div className="hero-meta"><span>Jakarta · Indonesia</span><span>Scroll to discover ↓</span></div>
      </section>

      <section className="intro section">
        <div className="container intro-grid">
          <Reveal><span className="eyebrow">Tentang LIVCO</span><h2>Nilai terbaik dari<br />setiap buah kelapa.</h2></Reveal>
          <Reveal delay={0.12}><p className="lead">Kami menghubungkan kekayaan alam Indonesia dengan kebutuhan industri global melalui produk kelapa yang konsisten, dapat ditelusuri, dan relevan.</p><p>LIVCO dibangun sebagai mitra ingredient, bukan sekadar pemasok. Kami menyelaraskan spesifikasi, kemasan, dan alur pasok agar setiap pelanggan menerima solusi yang tepat.</p><Link className="text-link" href="/about">Cerita kami <span>↗</span></Link></Reveal>
        </div>
        <div className="container stats-row">
          <Reveal><strong>4</strong><span>Kategori produk<br />utama</span></Reveal><Reveal delay={0.1}><strong>3</strong><span>Sektor aplikasi<br />prioritas</span></Reveal><Reveal delay={0.2}><strong>1</strong><span>Sumber daya alam,<br />banyak kemungkinan</span></Reveal>
        </div>
      </section>

      <section className="products-section section">
        <div className="container section-heading"><Reveal><span className="eyebrow eyebrow--light">Portofolio produk</span><h2>Dari kelapa terpilih,<br /><em>untuk beragam industri.</em></h2></Reveal><Reveal><p>Portofolio awal yang terfokus agar kualitas, spesifikasi, dan layanan tetap terjaga.</p></Reveal></div>
        <div className="container product-grid">{products.map((product, index) => <Reveal key={product.slug} delay={index * 0.08}><ProductCard product={product} index={index} /></Reveal>)}</div>
      </section>

      <section className="process section">
        <div className="container process-grid">
          <Reveal className="process-title"><span className="eyebrow">Cara kami bekerja</span><h2>Terjaga dari asal<br />hingga tiba.</h2><p>Setiap tahapan dirancang untuk konsistensi produk dan komunikasi yang lebih sederhana.</p></Reveal>
          <div className="process-list">
            {[['01','Source','Bekerja dengan jaringan pengolahan dan sumber kelapa Indonesia.'],['02','Select','Menyelaraskan grade, parameter mutu, dan kebutuhan aplikasi.'],['03','Secure','Menjaga dokumentasi, kemasan, dan kesiapan pengiriman.'],['04','Supply','Menyediakan dukungan responsif untuk kebutuhan berulang.']].map(([no,title,text],i)=><Reveal key={no} delay={i*.08} className="process-item"><span>{no}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="industries section">
        <div className="container"><Reveal><span className="eyebrow">Sektor aplikasi</span><h2>Satu bahan alami.<br />Banyak ruang inovasi.</h2></Reveal><div className="industry-list">{industries.map(([no,title,text],i)=><Reveal key={no} delay={i*.07} className="industry-row"><span>{no}</span><h3>{title}</h3><p>{text}</p><b>↗</b></Reveal>)}</div></div>
      </section>

      <section className="cta-section"><div className="container"><Reveal><span className="eyebrow eyebrow--light">Let’s grow together</span><h2>Punya kebutuhan<br />produk kelapa?</h2><p>Ceritakan aplikasi, spesifikasi, dan volume yang Anda cari. Tim kami akan membantu memetakan opsi yang paling sesuai.</p><Link className="button button--ivory" href="/contact">Mulai percakapan <span>↗</span></Link></Reveal></div></section>
    </main>
  );
}
