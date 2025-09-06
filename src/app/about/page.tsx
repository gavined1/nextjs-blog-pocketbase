import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Database, Palette, Type } from "lucide-react";
import type { Metadata } from "next";
import { siteConfig, getPageTitle } from "@/lib/config";

export const metadata: Metadata = {
  title: getPageTitle("About Us"),
  description:
    "Learn about our blog's mission to share knowledge and connect people through meaningful content about technology, development, and creativity.",
  keywords: ["about", "mission", "technology", "blog", "team", "company"],
  openGraph: {
    title: getPageTitle("About Us"),
    description:
      "Learn about our blog's mission to share knowledge and connect people through meaningful content about technology, development, and creativity.",
    type: "website",
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardHeader>
              <h1 className="text-3xl font-bold">About Our Blog</h1>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Welcome to our modern blog platform! We&apos;re passionate about
                sharing knowledge, insights, and stories that matter. Our blog
                is built with cutting-edge technology to provide you with the
                best reading experience possible.
              </p>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  We believe in the power of sharing knowledge and connecting
                  people through meaningful content. Our mission is to create a
                  platform where writers, developers, and thinkers can share
                  their ideas with the world.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Technology Stack
                </h2>
                <p className="text-muted-foreground mb-4">
                  This blog is built with modern web technologies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Code className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Next.js 15</div>
                      <div className="text-sm text-muted-foreground">
                        React framework for production
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Database className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">PocketBase</div>
                      <div className="text-sm text-muted-foreground">
                        Backend-as-a-Service
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Palette className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Tailwind CSS</div>
                      <div className="text-sm text-muted-foreground">
                        Utility-first CSS framework
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Type className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">TypeScript</div>
                      <div className="text-sm text-muted-foreground">
                        Type-safe JavaScript
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
                <p className="text-muted-foreground">
                  We&apos;re always looking for contributors and interesting
                  content. If you have something to share, we&apos;d love to
                  hear from you!
                </p>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Ready to Start Writing?
                  </h3>
                  <p className="text-muted-foreground">
                    Join our community of writers and share your knowledge with
                    the world. Contact us to get started!
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
