# 🎛️ Easy Configuration Guide

## 📝 **How to Customize Your Blog**

All your blog settings are now centralized in **one file**: `src/lib/config.ts`

### 🔧 **Quick Setup**

1. **Open** `src/lib/config.ts`
2. **Edit** the values you want to change
3. **Save** the file
4. **Done!** All pages will automatically use your new settings

---

## ⚙️ **Configuration Options**

### 🏠 **Basic Site Information**

```typescript
export const siteConfig = {
  // Your blog name
  name: "My Blog",

  // Your blog tagline
  title: "Technology & Development Articles",

  // Your blog description
  description: "A modern blog platform featuring technology articles...",

  // Your website URL (change this!)
  url: "https://yourdomain.com",
};
```

### 🎨 **Social Media & Branding**

```typescript
// Your social media handles
twitter: {
  handle: "@myblog", // Your Twitter handle
  cardType: "summary_large_image",
},

// Your contact information
author: {
  name: "My Blog Team",
  email: "hello@yourdomain.com",
  twitter: "@myblog",
},
```

### 🔍 **SEO Keywords**

```typescript
// Add your target keywords
keywords: [
  "blog",
  "technology",
  "web development",
  "tutorials",
  "programming",
  "design",
  // Add more keywords here
],
```

### 📞 **Contact Information**

```typescript
contact: {
  email: "hello@yourdomain.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Blog Street",
    city: "Tech City",
    state: "TC",
    zip: "12345",
  },
},
```

### 📊 **Analytics & Verification**

```typescript
analytics: {
  googleAnalyticsId: "", // Add your GA4 ID
  googleSearchConsole: "", // Add your GSC verification code
  yandex: "", // Add your Yandex verification code
},
```

---

## 🚀 **Quick Start Checklist**

### ✅ **Required Changes**

- [ ] Change `url` to your actual domain
- [ ] Update `author.name` and `author.email`
- [ ] Add your `twitter.handle`
- [ ] Update `contact` information

### ✅ **Optional Improvements**

- [ ] Add your `googleAnalyticsId`
- [ ] Add your `googleSearchConsole` verification code
- [ ] Customize `keywords` for your niche
- [ ] Update `contact.address` with your real address

### ✅ **Images to Add**

- [ ] Add `/public/og-image.jpg` (1200x630px) for social sharing
- [ ] Add `/public/logo.png` for structured data

---

## 🎯 **What Gets Updated Automatically**

When you change the config file, these will update across your entire blog:

- ✅ **Page titles** and meta descriptions
- ✅ **Social media** sharing previews
- ✅ **Structured data** for search engines
- ✅ **Sitemap** and robots.txt
- ✅ **Contact information** on all pages
- ✅ **Footer** and navigation
- ✅ **SEO metadata** for all pages

---

## 💡 **Pro Tips**

### 🎨 **Branding**

- Use consistent naming across all fields
- Keep descriptions under 160 characters
- Use your actual domain for better SEO

### 🔍 **SEO**

- Add 5-10 relevant keywords
- Use your target keywords in descriptions
- Keep titles under 60 characters

### 📱 **Social Media**

- Use your actual Twitter handle
- Add a high-quality og-image.jpg
- Test your social sharing with [Open Graph Preview](https://www.opengraph.xyz/)

---

## 🆘 **Need Help?**

If you need to make changes that aren't in the config file:

1. **Check** if it's already there
2. **Add** it to the config if missing
3. **Update** the component to use the config
4. **Ask** for help if you're stuck!

---

**That's it!** Your blog is now super easy to customize! 🎉
