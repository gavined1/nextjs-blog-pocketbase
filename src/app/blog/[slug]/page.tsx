import { getBlogPost, getAuthor } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Share2, Heart } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig, getPageTitle, getFullUrl } from "@/lib/config";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const author = await getAuthor(post.author);
  const publishedTime = new Date(post.created).toISOString();
  const modifiedTime = new Date(post.updated).toISOString();

  return {
    title: getPageTitle(post.title),
    description: post.excerpt,
    keywords: post.tags?.join(", ") || [],
    authors: [{ name: author?.name || "Unknown Author" }],
    creator: author?.name || "Unknown Author",
    publisher: siteConfig.name,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [author?.name || "Unknown Author"],
      tags: post.tags || [],
      images: post.featured_image
        ? [
            {
              url: post.featured_image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
      siteName: siteConfig.name,
    },
    twitter: {
      card: siteConfig.twitter.cardType,
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [post.featured_image] : [],
      creator: author?.name || "Unknown Author",
    },
    alternates: {
      canonical: getFullUrl(`/blog/${post.slug}`),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const author = await getAuthor(post.author);
  const publishedTime = new Date(post.created).toISOString();
  const modifiedTime = new Date(post.updated).toISOString();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image ? [post.featured_image] : [],
    author: {
      "@type": "Person",
      name: author?.name || "Unknown Author",
      email: author?.email || "unknown@example.com",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: getFullUrl("/logo.png"),
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getFullUrl(`/blog/${post.slug}`),
    },
    keywords: post.tags?.join(", ") || [],
    articleSection: "Technology",
    wordCount: post.content.replace(/<[^>]*>/g, "").split(" ").length,
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className="pt-16">
        {/* Hero Image Section */}
        {post.featured_image && (
          <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.created}>
                      {formatDate(post.created)}
                    </time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By {author?.name || post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Content */}
          <Card>
            {!post.featured_image && (
              <CardHeader>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.created}>
                      {formatDate(post.created)}
                    </time>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By {author?.name || post.author}</span>
                  </div>
                </div>
              </CardHeader>
            )}

            <CardContent className="pt-6">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Content */}
              <div
                className="prose prose-neutral dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
