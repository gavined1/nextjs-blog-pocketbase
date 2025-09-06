import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { siteConfig, getFullUrl } from "@/lib/config";

export default async function Home() {
  const posts = await getBlogPosts();
  const featuredPosts = posts.slice(0, 3);

  // Structured data for the homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: getFullUrl("/blog?q={search_term_string}"),
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: getFullUrl("/logo.png"),
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Live & Updated
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Hi, I&apos;m a{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I write about{" "}
              <span className="text-primary font-semibold">
                web development
              </span>
              , <span className="text-primary font-semibold">design</span>, and{" "}
              <span className="text-primary font-semibold">technology</span>.
              Join me on this journey of learning and creating amazing things.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/blog">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/about">Get to Know Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                ✨ Latest Articles
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Stories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dive into my latest thoughts on technology, development, and the
                creative process
              </p>
            </div>

            {featuredPosts.length > 0 ? (
              <BlogList posts={featuredPosts} />
            ) : (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      No blog posts available yet
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Follow the setup guide to create your first post!
                    </p>
                    <div className="text-left space-y-2 text-sm text-muted-foreground">
                      <p>
                        1. Go to{" "}
                        <a
                          href="http://127.0.0.1:8090/_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline"
                        >
                          PocketBase Admin
                        </a>
                      </p>
                      <p>
                        2. Create collections:{" "}
                        <code className="bg-muted px-1 rounded">authors</code>{" "}
                        and{" "}
                        <code className="bg-muted px-1 rounded">
                          blog_posts
                        </code>
                      </p>
                      <p>3. Set collection rules to public (empty)</p>
                      <p>4. Add some sample data</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {posts.length > 3 && (
              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/blog">View All Posts</Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Blog?</h2>
              <p className="text-muted-foreground">
                Built with modern technology for the best reading experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fast & Modern</h3>
                  <p className="text-muted-foreground">
                    Built with Next.js and PocketBase for lightning-fast
                    performance
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Easy to Use</h3>
                  <p className="text-muted-foreground">
                    Intuitive interface for both readers and content creators
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Community Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Join a community of passionate learners and contributors
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
