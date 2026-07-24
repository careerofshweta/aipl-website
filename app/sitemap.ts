import type { MetadataRoute } from "next";

const BASE_URL = "";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/projects`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
