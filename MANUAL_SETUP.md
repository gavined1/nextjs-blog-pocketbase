# Manual PocketBase Setup Guide

## 🚀 Quick Setup Steps

Your blog is ready, but you need to set up the PocketBase database collections. Follow these steps:

### Step 1: Access PocketBase Admin

1. Open your browser and go to: **http://127.0.0.1:8090/_/**
2. You'll see the PocketBase admin interface
3. Create your first admin account (this will be your superuser account)

### Step 2: Create Authors Collection

1. Click **"Collections"** in the left sidebar
2. Click **"New Collection"**
3. Fill in:
   - **Name**: `authors`
   - **Type**: `Base`
4. Click **"Create"**
5. Add these fields:
   - **name** (Text, Required)
   - **email** (Email, Required, Unique)
   - **bio** (Text, Optional)
   - **avatar** (File, Optional, Max 5MB, Images only)

### Step 3: Create Blog Posts Collection

1. Click **"New Collection"** again
2. Fill in:
   - **Name**: `blog_posts`
   - **Type**: `Base`
3. Click **"Create"**
4. Add these fields:
   - **title** (Text, Required)
   - **content** (Editor, Required)
   - **excerpt** (Text, Required)
   - **slug** (Text, Required, Unique)
   - **featured_image** (File, Optional, Max 10MB, Images only)
   - **published** (Bool, Default: false)
   - **author** (Relation, Required, Collection: authors)
   - **tags** (JSON, Default: [])

### Step 4: Set Collection Rules (Important!)

For each collection (authors and blog_posts):

1. Click on the collection name
2. Go to **"Settings"** tab
3. Scroll down to **"API Rules"**
4. Set all rules to **empty** (public access):
   - **List rule**: (leave empty)
   - **View rule**: (leave empty)
   - **Create rule**: (leave empty)
   - **Update rule**: (leave empty)
   - **Delete rule**: (leave empty)
5. Click **"Save"**

### Step 5: Create Sample Data

1. Go to **"Collections"** → **"authors"**
2. Click **"New Record"**
3. Fill in:
   - **name**: "John Doe"
   - **email**: "john@example.com"
   - **bio**: "A passionate writer and developer"
4. Click **"Create"**

5. Go to **"Collections"** → **"blog_posts"**
6. Click **"New Record"**
7. Fill in:
   - **title**: "Welcome to Our Blog!"
   - **content**: "Welcome to our amazing blog built with Next.js and PocketBase! This is our first post..."
   - **excerpt**: "Welcome to our amazing blog built with Next.js and PocketBase!"
   - **slug**: "welcome-to-our-blog"
   - **published**: true
   - **author**: (select the author you just created)
   - **tags**: ["welcome", "introduction", "nextjs", "pocketbase"]
8. Click **"Create"**

### Step 6: Test Your Blog

1. Go to **http://localhost:3000** in your browser
2. You should now see your blog with the sample post!
3. Click on the post to view it individually
4. Visit **http://localhost:3000/admin** to create more posts

## 🎉 You're Done!

Your blog is now fully functional! You can:

- ✅ View blog posts on the homepage
- ✅ Read individual posts
- ✅ Create new posts via the admin panel
- ✅ Manage authors and content

## 🔧 Troubleshooting

**If you still see errors:**

1. Make sure PocketBase is running: `./pocketbase.exe serve --http=127.0.0.1:8090`
2. Make sure Next.js is running: `pnpm dev`
3. Check that collection rules are set to public (empty)
4. Verify the collection names are exactly `authors` and `blog_posts`

**Need help?** Check the browser console for any error messages and make sure all steps were followed correctly.
