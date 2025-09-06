import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig, getFullUrl } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const blogPosts = posts.map((post) => ({
    url: getFullUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: getFullUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: getFullUrl("/about"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: getFullUrl("/contact"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...blogPosts,
  ];
}
