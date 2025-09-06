# Blog Setup Guide

## 🚀 Quick Start

Your Next.js blog with PocketBase is ready! Follow these steps to complete the setup:

### 1. PocketBase Setup

1. **Access PocketBase Admin**: Open http://127.0.0.1:8090/_/ in your browser
2. **Create Admin Account**: Set up your first admin account
3. **Create Collections**: Follow the steps below to create the required collections

### 2. Create Collections

#### Authors Collection

1. Go to Collections → New Collection
2. Name: `authors`
3. Type: `Base`
4. Add these fields:
   - `name` (Text, Required)
   - `email` (Email, Required, Unique)
   - `bio` (Text, Optional)
   - `avatar` (File, Optional, Max 5MB, Images only)

#### Blog Posts Collection

1. Go to Collections → New Collection
2. Name: `blog_posts`
3. Type: `Base`
4. Add these fields:
   - `title` (Text, Required)
   - `content` (Editor, Required)
   - `excerpt` (Text, Required)
   - `slug` (Text, Required, Unique)
   - `featured_image` (File, Optional, Max 10MB, Images only)
   - `published` (Bool, Default: false)
   - `author` (Relation, Required, Collection: authors)
   - `tags` (JSON, Default: [])

### 3. Create Sample Data

#### Create an Author

1. Go to Collections → authors → New Record
2. Fill in:
   - name: "John Doe"
   - email: "john@example.com"
   - bio: "A passionate writer and developer"

#### Create a Blog Post

1. Go to Collections → blog_posts → New Record
2. Fill in:
   - title: "Welcome to Our Blog!"
   - content: "Welcome to our amazing blog built with Next.js and PocketBase! This is our first post..."
   - excerpt: "Welcome to our amazing blog built with Next.js and PocketBase!"
   - slug: "welcome-to-our-blog"
   - published: true
   - author: [Select the author you created]
   - tags: ["welcome", "introduction", "nextjs", "pocketbase"]

### 4. Access Your Blog

- **Frontend**: http://localhost:3000
- **Admin Panel**: http://127.0.0.1:8090/_/
- **Create Posts**: http://localhost:3000/admin

## 🎨 Features

✅ **Modern UI**: Beautiful, responsive design with dark mode support
✅ **Fast Performance**: Built with Next.js 15 and optimized for speed
✅ **Easy Management**: Admin panel for creating and managing posts
✅ **SEO Friendly**: Clean URLs and meta tags
✅ **Tag System**: Organize posts with tags
✅ **Author System**: Multiple authors support
✅ **Image Support**: Featured images for posts
✅ **Responsive Design**: Works on all devices

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   ├── [slug]/        # Individual post pages
│   │   └── page.tsx       # Blog listing page
│   ├── admin/             # Admin dashboard
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── BlogCard.tsx       # Blog post card
│   ├── BlogList.tsx       # Blog posts list
│   ├── Header.tsx         # Site header
│   └── Footer.tsx         # Site footer
└── lib/                   # Utility functions
    ├── pocketbase.ts      # PocketBase configuration
    └── blog.ts            # Blog-related functions
```

## 🛠️ Development

- **Start Development Server**: `pnpm dev`
- **Start PocketBase**: `./pocketbase.exe serve --http=127.0.0.1:8090`
- **Build for Production**: `pnpm build`
- **Start Production Server**: `pnpm start`

## 🎯 Next Steps

1. Customize the design and branding
2. Add more features like comments, search, or categories
3. Set up authentication for admin users
4. Deploy to production (Vercel, Netlify, etc.)
5. Configure PocketBase for production

## 🐛 Troubleshooting

- **PocketBase not running**: Make sure to start PocketBase with `./pocketbase.exe serve`
- **Collections not found**: Ensure you've created the collections in PocketBase admin
- **Build errors**: Check that all dependencies are installed with `pnpm install`

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [PocketBase Documentation](https://pocketbase.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

Happy blogging! 🎉
