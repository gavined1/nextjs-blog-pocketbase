# Modern Blog with Next.js & PocketBase

A beautiful, modern blog platform built with Next.js 15, PocketBase, and shadcn/ui. Features a clean design, theme switching, and a powerful content management system.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with shadcn/ui components
- 🌙 **Theme Switching** - Light, dark, and system theme support
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack
- 🗄️ **PocketBase Backend** - Self-hosted database and API
- 📝 **Rich Content** - Support for images, tags, and rich text
- 🔍 **SEO Optimized** - Server-side rendering and meta tags
- 🎯 **TypeScript** - Full type safety throughout

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: PocketBase
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd nextjs-blog-pocketbase
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   # Quick setup - creates .env.local from template
   pnpm run setup-env

   # Or manually copy the template
   cp env.example .env.local
   ```

4. **Configure your environment**

   Edit `.env.local` with your actual values:

   - Update `NEXT_PUBLIC_SITE_URL` to your domain
   - Set your contact information
   - Configure PocketBase URL if different
   - Add analytics IDs when ready

5. **Start PocketBase**

   ```bash
   # Make sure pocketbase.exe is in the root directory
   ./pocketbase.exe serve
   ```

6. **Start the development server**

   ```bash
   pnpm dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### 1. Access PocketBase Admin

Go to [http://127.0.0.1:8090/\_/](http://127.0.0.1:8090/_/) and create an admin account.

### 2. Create Collections

#### Authors Collection

- **Name**: `authors`
- **Fields**:
  - `name` (text, required)
  - `email` (email, required)
  - `bio` (text, optional)
  - `avatar` (file, optional)

#### Blog Posts Collection

- **Name**: `blog_posts`
- **Fields**:
  - `title` (text, required)
  - `content` (editor, required)
  - `excerpt` (text, required)
  - `slug` (text, required)
  - `featured_image` (file, optional)
  - `published` (bool, optional)
  - `author` (relation to authors, required)
  - `tags` (json, optional)

### 3. Set API Rules

Set all collection rules to **public** (empty) for both `list` and `view` operations.

### 4. Add Sample Data

Create some authors and blog posts through the PocketBase admin interface.

## 🎨 Theme Customization

The blog supports three themes:

- **Light** - Clean, bright interface
- **Dark** - Easy on the eyes for night reading
- **System** - Automatically follows your OS preference

Users can switch themes using the theme toggle in the header.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── BlogCard.tsx      # Blog post card
│   ├── BlogList.tsx      # Blog posts list
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   ├── theme-provider.tsx # Theme provider
│   └── theme-toggle.tsx  # Theme switcher
└── lib/                  # Utility functions
    ├── blog.ts           # Blog-related functions
    └── pocketbase.ts     # PocketBase client
```

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Components

This project uses shadcn/ui for components. To add new components:

```bash
npx shadcn@latest add [component-name]
```

### Styling

The project uses Tailwind CSS with shadcn/ui design tokens. All styling follows the design system for consistency.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables if needed
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean
- AWS

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [PocketBase](https://pocketbase.io/) - The backend
- [shadcn/ui](https://ui.shadcn.com/) - The component library
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [Lucide](https://lucide.dev/) - The icon library

---

Built with ❤️ using Next.js and PocketBase
