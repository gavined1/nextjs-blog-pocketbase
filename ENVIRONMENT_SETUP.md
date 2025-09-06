# 🔐 Environment Variables Setup Guide

## 📋 **Overview**

This guide explains how to set up environment variables for your Next.js blog with PocketBase. Environment variables help keep sensitive data secure and make your application configurable across different environments.

## 🚀 **Quick Setup**

### **1. Copy Environment Template**

```bash
# Copy the example file to create your local environment file
cp env.example .env.local
```

### **2. Edit Your Environment Variables**

Open `.env.local` and update the values with your actual data:

```bash
# Example configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Blog Name
NEXT_PUBLIC_AUTHOR_EMAIL=your-email@domain.com
POCKETBASE_URL=https://your-pocketbase-instance.com
```

## 📁 **File Structure**

```
your-project/
├── env.example          # Template with all available variables
├── .env.local          # Your local development variables (create this)
├── .env.production     # Production variables (create this)
└── .gitignore          # Should include .env.local and .env.production
```

## 🔧 **Environment Variables Reference**

### **PocketBase Configuration**

| Variable                    | Description               | Example                 |
| --------------------------- | ------------------------- | ----------------------- |
| `POCKETBASE_URL`            | PocketBase server URL     | `http://127.0.0.1:8090` |
| `POCKETBASE_ADMIN_EMAIL`    | Admin email (dev only)    | `admin@example.com`     |
| `POCKETBASE_ADMIN_PASSWORD` | Admin password (dev only) | `your_password`         |

### **Site Configuration**

| Variable                       | Description      | Example                     |
| ------------------------------ | ---------------- | --------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Your website URL | `https://yourdomain.com`    |
| `NEXT_PUBLIC_SITE_NAME`        | Site name        | `My Awesome Blog`           |
| `NEXT_PUBLIC_SITE_TITLE`       | Site title       | `Technology & Development`  |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | Site description | `A modern blog platform...` |

### **Author Information**

| Variable                     | Description    | Example            |
| ---------------------------- | -------------- | ------------------ |
| `NEXT_PUBLIC_AUTHOR_NAME`    | Author name    | `John Doe`         |
| `NEXT_PUBLIC_AUTHOR_EMAIL`   | Author email   | `john@example.com` |
| `NEXT_PUBLIC_AUTHOR_TWITTER` | Twitter handle | `@johndoe`         |

### **Social Media & SEO**

| Variable                        | Description       | Example               |
| ------------------------------- | ----------------- | --------------------- |
| `NEXT_PUBLIC_TWITTER_HANDLE`    | Twitter handle    | `@yourblog`           |
| `NEXT_PUBLIC_TWITTER_CARD_TYPE` | Twitter card type | `summary_large_image` |
| `NEXT_PUBLIC_OG_IMAGE`          | Open Graph image  | `/og-image.jpg`       |

### **Contact Information**

| Variable                     | Description    | Example                |
| ---------------------------- | -------------- | ---------------------- |
| `NEXT_PUBLIC_CONTACT_EMAIL`  | Contact email  | `hello@yourdomain.com` |
| `NEXT_PUBLIC_CONTACT_PHONE`  | Contact phone  | `+1 (555) 123-4567`    |
| `NEXT_PUBLIC_CONTACT_STREET` | Street address | `123 Main Street`      |
| `NEXT_PUBLIC_CONTACT_CITY`   | City           | `New York`             |
| `NEXT_PUBLIC_CONTACT_STATE`  | State          | `NY`                   |
| `NEXT_PUBLIC_CONTACT_ZIP`    | ZIP code       | `10001`                |

### **Analytics & Verification**

| Variable                            | Description                 | Example                  |
| ----------------------------------- | --------------------------- | ------------------------ |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`   | Google Analytics ID         | `G-XXXXXXXXXX`           |
| `NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE` | Search Console verification | `your_verification_code` |
| `NEXT_PUBLIC_YANDEX_VERIFICATION`   | Yandex verification         | `your_yandex_code`       |

### **Blog Settings**

| Variable                           | Description          | Default |
| ---------------------------------- | -------------------- | ------- |
| `NEXT_PUBLIC_POSTS_PER_PAGE`       | Posts per page       | `6`     |
| `NEXT_PUBLIC_FEATURED_POSTS_COUNT` | Featured posts count | `3`     |
| `NEXT_PUBLIC_EXCERPT_LENGTH`       | Excerpt length       | `160`   |

### **Theme Settings**

| Variable                          | Description         | Options                   |
| --------------------------------- | ------------------- | ------------------------- |
| `NEXT_PUBLIC_DEFAULT_THEME`       | Default theme       | `light`, `dark`, `system` |
| `NEXT_PUBLIC_ENABLE_SYSTEM_THEME` | Enable system theme | `true`, `false`           |

## 🌍 **Environment-Specific Setup**

### **Development (.env.local)**

```bash
# Local development
POCKETBASE_URL=http://127.0.0.1:8090
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=  # Leave empty for development
```

### **Production (.env.production)**

```bash
# Production deployment
POCKETBASE_URL=https://your-pocketbase-instance.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE=your_verification_code
```

## 🔒 **Security Best Practices**

### **✅ Do:**

- Use `NEXT_PUBLIC_` prefix for client-side variables
- Keep sensitive data in server-side only variables
- Use different values for development and production
- Never commit `.env.local` or `.env.production` to git

### **❌ Don't:**

- Put sensitive data in `NEXT_PUBLIC_` variables
- Commit environment files to version control
- Use production credentials in development
- Share your `.env.local` file

## 🚀 **Deployment Setup**

### **Vercel Deployment**

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add all your production environment variables
4. Redeploy your application

### **Other Platforms**

- **Netlify**: Site settings → Environment variables
- **Railway**: Variables tab in your project
- **DigitalOcean**: App platform → Settings → Environment

## 🐛 **Troubleshooting**

### **Common Issues:**

#### **1. Variables Not Loading**

```bash
# Check if .env.local exists
ls -la .env.local

# Restart development server
pnpm run dev
```

#### **2. Build Errors**

```bash
# Check for typos in variable names
# Ensure NEXT_PUBLIC_ prefix for client-side variables
```

#### **3. PocketBase Connection Issues**

```bash
# Verify PocketBase URL is correct
# Check if PocketBase server is running
# Ensure network connectivity
```

## 📝 **Example Configuration Files**

### **Complete .env.local Example**

```bash
# PocketBase
POCKETBASE_URL=http://127.0.0.1:8090

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=My Development Blog
NEXT_PUBLIC_SITE_TITLE=Tech Articles & Tutorials
NEXT_PUBLIC_SITE_DESCRIPTION=A modern blog for developers

# Author
NEXT_PUBLIC_AUTHOR_NAME=John Developer
NEXT_PUBLIC_AUTHOR_EMAIL=john@example.com
NEXT_PUBLIC_AUTHOR_TWITTER=@johndeveloper

# Social
NEXT_PUBLIC_TWITTER_HANDLE=@myblog
NEXT_PUBLIC_OG_IMAGE=/og-image.jpg

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=hello@myblog.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567

# Blog Settings
NEXT_PUBLIC_POSTS_PER_PAGE=6
NEXT_PUBLIC_FEATURED_POSTS_COUNT=3

# Theme
NEXT_PUBLIC_DEFAULT_THEME=system
NEXT_PUBLIC_ENABLE_SYSTEM_THEME=true
```

## 🎉 **You're All Set!**

Once you've configured your environment variables:

1. Restart your development server: `pnpm run dev`
2. Your blog will use the new configuration
3. Deploy with confidence knowing your sensitive data is secure!

---

**Need Help?** Check the [Next.js Environment Variables Documentation](https://nextjs.org/docs/basic-features/environment-variables) for more details.
