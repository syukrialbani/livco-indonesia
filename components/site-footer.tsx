import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { navItems } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-intro">
          <BrandMark light />
          <p>Natural coconut ingredients, thoughtfully sourced from Indonesia for the world.</p>
        </div>
        <div><span className="footer-label">Jelajahi</span>{navItems.slice(1).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
        <div><span className="footer-label">Hubungi</span><a href="mailto:hello@livcoindonesia.com">hello@livcoindonesia.com</a><a href="tel:+6282386250224">+62 823 8625 0224</a><p>Pariaman, Indonesia</p></div>
      </div>
      <div className="footer-bottom container"><span>© 2026 LIVCO Indonesia</span><span>Quality · Traceability · Partnership</span></div>
    </footer>
  );
}
