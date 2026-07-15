import Link from "next/link";
import type { Product } from "../lib/site-data";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className={`product-card product-card--${index + 1}`}>
      <div className="product-card-media"><img src={product.image} alt={product.imageAlt} /><span className="product-index">0{index + 1}</span><span className="product-grade">{product.grade}</span></div>
      <div className="product-copy">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-bottom"><span>{product.format}</span><Link href={`/products/${product.slug}`} className="text-link">Lihat detail <span>→</span></Link></div>
      </div>
    </article>
  );
}
