// Site Configuration - Uses environment variables for sensitive data
export const siteConfig = {
  // Basic Site Information
  name: process.env.NEXT_PUBLIC_SITE_NAME || "My Blog",
  title:
    process.env.NEXT_PUBLIC_SITE_TITLE || "Technology & Development Articles",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "A modern blog platform featuring technology articles, development tutorials, and insights about web development, design, and the creative process.",

  // URLs and Domains
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "/og-image.jpg",

  // Social Media
  twitter: {
    handle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@myblog",
    cardType:
      (process.env.NEXT_PUBLIC_TWITTER_CARD_TYPE as
        | "summary"
        | "summary_large_image"
        | "app"
        | "player") || "summary_large_image",
  },

  // Author Information
  author: {
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "My Blog Team",
    email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL || "hello@yourdomain.com",
    twitter: process.env.NEXT_PUBLIC_AUTHOR_TWITTER || "@myblog",
  },

  // SEO Keywords
  keywords: [
    "blog",
    "technology",
    "web development",
    "tutorials",
    "programming",
    "design",
    "Next.js",
    "PocketBase",
    "TypeScript",
    "React",
  ] as string[],

  // Navigation
  navItems: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  // Footer Information
  footer: {
    description: "A modern blog platform built with Next.js and PocketBase.",
    links: {
      technology: ["Next.js 15", "PocketBase", "Tailwind CSS", "TypeScript"],
      connect: "Follow us for updates and new content.",
    },
  },

  // Contact Information
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@yourdomain.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (555) 123-4567",
    address: {
      street: process.env.NEXT_PUBLIC_CONTACT_STREET || "123 Blog Street",
      city: process.env.NEXT_PUBLIC_CONTACT_CITY || "Tech City",
      state: process.env.NEXT_PUBLIC_CONTACT_STATE || "TC",
      zip: process.env.NEXT_PUBLIC_CONTACT_ZIP || "12345",
    },
  },

  // Google Analytics and Verification
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",
    googleSearchConsole: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },

  // Blog Settings
  blog: {
    postsPerPage: parseInt(process.env.NEXT_PUBLIC_POSTS_PER_PAGE || "6"),
    featuredPostsCount: parseInt(
      process.env.NEXT_PUBLIC_FEATURED_POSTS_COUNT || "3"
    ),
    excerptLength: parseInt(process.env.NEXT_PUBLIC_EXCERPT_LENGTH || "160"),
  },

  // Theme Settings
  theme: {
    defaultTheme:
      (process.env.NEXT_PUBLIC_DEFAULT_THEME as "light" | "dark" | "system") ||
      "system",
    enableSystem: process.env.NEXT_PUBLIC_ENABLE_SYSTEM_THEME === "true",
  },
} as const;

// Helper function to get full URL
export function getFullUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

// Helper function to get page title
export function getPageTitle(pageTitle?: string) {
  if (pageTitle) {
    return `${pageTitle} | ${siteConfig.name}`;
  }
  return `${siteConfig.name} - ${siteConfig.title}`;
}
