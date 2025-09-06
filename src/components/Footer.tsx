import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Blog</h3>
            <p className="text-muted-foreground">
              A modern blog platform built with Next.js and PocketBase.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technology</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Next.js 15</li>
              <li>PocketBase</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="text-muted-foreground">
              Follow us for updates and new content.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
