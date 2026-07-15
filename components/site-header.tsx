"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { navItems } from "../lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", close);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown", close); };
  }, [open]);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="nav-shell">
        <BrandMark light />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}>
          <span /><span />
        </button>
        <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={(item.href === "/products" ? pathname.startsWith("/products") : pathname === item.href) ? "page" : undefined} className={(item.href === "/products" ? pathname.startsWith("/products") : pathname === item.href) ? "active" : ""}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Minta penawaran <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
