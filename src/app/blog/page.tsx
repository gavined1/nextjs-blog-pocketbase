import { getBlogPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import { siteConfig, getPageTitle } from "@/lib/config";

export const metadata: Metadata = {
  title: getPageTitle("Blog"),
  description:
    "Explore our collection of technology articles, development tutorials, and insights about web development, design, and the creative process.",
  keywords: siteConfig.keywords as unknown as string[],
  openGraph: {
    title: getPageTitle("Blog"),
    description:
      "Explore our collection of technology articles, development tutorials, and insights about web development, design, and the creative process.",
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: siteConfig.twitter.cardType,
    title: getPageTitle("Blog"),
    description:
      "Explore our collection of technology articles, development tutorials, and insights about web development, design, and the creative process.",
  },
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              All Articles
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">My Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about technology, development,
              and the creative process
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogList posts={posts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
