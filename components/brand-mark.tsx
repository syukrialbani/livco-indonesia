import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-mark ${light ? "brand-mark--light" : ""}`} href="/" aria-label="LIVCO Indonesia — Beranda">
      <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
      <span><b>LIVCO</b><small>INDONESIA</small></span>
    </Link>
  );
}
