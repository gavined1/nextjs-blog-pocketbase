# 🗃️ Zustand State Management Guide

## 📋 **Overview**

Your blog now uses **Zustand** for state management instead of simple Map-based caching. This provides better performance, real-time updates, and a more maintainable codebase.

## 🏗️ **Architecture**

### **Store Structure** (`src/lib/store.ts`)

```typescript
interface BlogState {
  // Blog posts
  posts: BlogPost[];
  postsLoading: boolean;
  postsError: string | null;
  postsLastFetch: number | null;

  // Individual blog post cache
  postCache: Map<string, BlogPost>;

  // Authors
  authors: Map<string, Author>;
  authorsLoading: boolean;
  authorsError: string | null;

  // Actions
  setPosts: (posts: BlogPost[]) => void;
  getPost: (slug: string) => BlogPost | null;
  setPost: (slug: string, post: BlogPost) => void;
  // ... more actions
}
```

### **Hooks** (`src/hooks/useBlog.ts`)

- `useBlogPosts()` - Access all blog posts
- `useBlogPost(slug)` - Access specific blog post
- `useAuthors()` - Access all authors
- `useAuthor(id)` - Access specific author
- `useBlogActions()` - Access store actions

## 🚀 **Key Features**

### ✅ **Intelligent Caching**

- **5-minute cache** for blog posts list
- **Individual post caching** by slug
- **Author caching** by ID
- **Automatic cache invalidation**

### ✅ **Error Handling**

- **Abort error detection** - No more console spam
- **Graceful fallbacks** - Returns cached data when API fails
- **Loading states** - Proper loading indicators

### ✅ **Real-time Updates**

- **Client components** can subscribe to store changes
- **Automatic re-renders** when data changes
- **Optimistic updates** for better UX

## 📖 **Usage Examples**

### **Server Components** (Pages)

```typescript
// These work exactly the same as before
import { getBlogPosts, getBlogPost } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getBlogPosts(); // Uses Zustand internally
  return <BlogList posts={posts} />;
}
```

### **Client Components** (Interactive)

```typescript
"use client";
import { useBlogPosts } from "@/hooks/useBlog";

export default function BlogStats() {
  const { posts, loading, error } = useBlogPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Total posts: {posts.length}</div>;
}
```

### **Actions** (Programmatic Updates)

```typescript
"use client";
import { useBlogActions } from "@/hooks/useBlog";

export default function RefreshButton() {
  const { clearCache } = useBlogActions();

  const handleRefresh = () => {
    clearCache(); // Clear all caches
    // Next data fetch will be fresh
  };

  return <button onClick={handleRefresh}>Refresh</button>;
}
```

## 🔧 **Available Hooks**

### **useBlogPosts()**

```typescript
const { posts, loading, error, isCacheValid } = useBlogPosts();
```

- `posts` - Array of all blog posts
- `loading` - Boolean loading state
- `error` - Error message if any
- `isCacheValid` - Whether cache is still valid

### **useBlogPost(slug)**

```typescript
const { post, loading, error } = useBlogPost("my-post-slug");
```

- `post` - Single blog post or null
- `loading` - Boolean loading state
- `error` - Error message if any

### **useAuthors()**

```typescript
const { authors, loading, error } = useAuthors();
```

- `authors` - Array of all authors
- `loading` - Boolean loading state
- `error` - Error message if any

### **useAuthor(id)**

```typescript
const { author, loading, error } = useAuthor("author-id");
```

- `author` - Single author or null
- `loading` - Boolean loading state
- `error` - Error message if any

### **useBlogActions()**

```typescript
const { setPosts, setPost, setAuthor, clearCache } = useBlogActions();
```

- `setPosts(posts)` - Update all posts
- `setPost(slug, post)` - Update single post
- `setAuthor(id, author)` - Update single author
- `clearCache()` - Clear all caches

## 🎯 **Benefits Over Previous System**

### **Performance**

- ✅ **Faster loading** - Intelligent caching
- ✅ **Reduced API calls** - Smart cache management
- ✅ **Better memory usage** - Efficient data structures

### **Developer Experience**

- ✅ **Type safety** - Full TypeScript support
- ✅ **Easy debugging** - Zustand devtools support
- ✅ **Cleaner code** - Separation of concerns

### **User Experience**

- ✅ **Real-time updates** - Components update automatically
- ✅ **Loading states** - Better feedback
- ✅ **Error handling** - Graceful degradation

## 🛠️ **Advanced Usage**

### **Custom Selectors**

```typescript
// Select only published posts
const publishedPosts = useBlogStore((state) =>
  state.posts.filter((post) => post.published)
);

// Select posts by author
const postsByAuthor = useBlogStore((state) =>
  state.posts.filter((post) => post.author === "author-id")
);
```

### **Subscribing to Changes**

```typescript
useEffect(() => {
  const unsubscribe = useBlogStore.subscribe(
    (state) => state.posts,
    (posts) => {
      console.log("Posts updated:", posts.length);
    }
  );

  return unsubscribe;
}, []);
```

### **Persistence** (Optional)

```typescript
// Add to store.ts if you want to persist data
import { persist } from "zustand/middleware";

export const useBlogStore = create(
  persist<BlogState>(
    (set, get) => ({
      // ... your state
    }),
    {
      name: "blog-storage", // localStorage key
      partialize: (state) => ({
        posts: state.posts,
        postCache: Array.from(state.postCache.entries()),
      }),
    }
  )
);
```

## 🎉 **Migration Complete!**

Your blog now uses **Zustand** for state management with:

- ✅ **Better performance** with intelligent caching
- ✅ **Real-time updates** for client components
- ✅ **Type-safe** hooks and actions
- ✅ **Error handling** without console spam
- ✅ **Easy to extend** and maintain

The API remains the same for server components, but you now have powerful client-side state management! 🚀
