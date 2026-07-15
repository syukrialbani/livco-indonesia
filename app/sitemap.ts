import type { MetadataRoute } from "next";
import { products } from "../lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://livcoindonesia.com";
  const routes = ["", "/about", "/products", "/sustainability", "/contact"];
  return [...routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.8 })), ...products.map((product) => ({ url: `${base}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.7 }))];
}
