import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://harsh-robotics-portfolio.harsh8121998.chatgpt.site";
  return ["", "/projects", "/experience", "/about", "/resume"].map((path) => ({ url: `${base}${path}`, changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.8 : 1 }));
}
