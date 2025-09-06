import pb, { BlogPost, Author } from "./pocketbase";
import { useBlogStore } from "./store";

// Get all published blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  const store = useBlogStore.getState();

  // Check if we have valid cached data
  if (store.isPostsCacheValid() && store.posts.length > 0) {
    return store.posts;
  }

  // Set loading state
  store.setPostsLoading(true);
  store.setPostsError(null);

  try {
    const records = await pb.collection("blog_posts").getList(1, 50, {
      filter: "published = true",
      sort: "-created",
    });

    const blogPosts = records.items as unknown as BlogPost[];

    // Update store with new data
    store.setPosts(blogPosts);
    store.setPostsLoading(false);

    return blogPosts;
  } catch (error) {
    const isAbortError = (error as Error & { isAbort?: boolean }).isAbort;

    // Only log non-abort errors
    if (!isAbortError) {
      console.error("Error fetching blog posts:", error);
      store.setPostsError("Failed to fetch blog posts");
    }

    store.setPostsLoading(false);

    // Return cached data if available, otherwise empty array
    return store.posts.length > 0 ? store.posts : [];
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const store = useBlogStore.getState();

  // Check cache first
  const cachedPost = store.getPost(slug);
  if (cachedPost) {
    return cachedPost;
  }

  try {
    const record = await pb
      .collection("blog_posts")
      .getFirstListItem(`slug = "${slug}" && published = true`);

    const blogPost = record as unknown as BlogPost;

    // Cache the result
    store.setPost(slug, blogPost);

    return blogPost;
  } catch (error) {
    const isAbortError = (error as Error & { isAbort?: boolean }).isAbort;

    // Only log non-abort errors
    if (!isAbortError) {
      console.error("Error fetching blog post:", error);
    }

    return null;
  }
}

// Get all authors
export async function getAuthors(): Promise<Author[]> {
  const store = useBlogStore.getState();

  try {
    const records = await pb.collection("authors").getList(1, 50);
    const authors = records.items as unknown as Author[];

    // Cache authors
    authors.forEach((author) => {
      store.setAuthor(author.id, author);
    });

    return authors;
  } catch (error) {
    const isAbortError = (error as Error & { isAbort?: boolean }).isAbort;

    // Only log non-abort errors
    if (!isAbortError) {
      console.error("Error fetching authors:", error);
    }

    return [];
  }
}

// Get author by ID
export async function getAuthor(id: string): Promise<Author | null> {
  const store = useBlogStore.getState();

  // Check cache first
  const cachedAuthor = store.getAuthor(id);
  if (cachedAuthor) {
    return cachedAuthor;
  }

  try {
    const record = await pb.collection("authors").getOne(id);
    const author = record as unknown as Author;

    // Cache the result
    store.setAuthor(id, author);

    return author;
  } catch (error) {
    const errorStatus = (error as Error & { status?: number }).status;
    const isAbortError = (error as Error & { isAbort?: boolean }).isAbort;

    // Create fallback author
    const fallbackAuthor = {
      id,
      name: "Unknown Author",
      email: "unknown@example.com",
      bio: "Author information not available",
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
    };

    // If author can't be fetched or request was cancelled, return a fallback author object
    if (errorStatus === 403 || errorStatus === 404 || isAbortError) {
      // Cache the fallback to prevent repeated failed requests
      store.setAuthor(id, fallbackAuthor);
      return fallbackAuthor;
    }

    // Only log non-abort errors
    if (!isAbortError) {
      console.error("Error fetching author:", error);
    }

    // Cache the fallback
    store.setAuthor(id, fallbackAuthor);
    return fallbackAuthor;
  }
}

// Create a new blog post
export async function createBlogPost(
  data: Partial<BlogPost>
): Promise<BlogPost | null> {
  try {
    const record = await pb.collection("blog_posts").create(data);
    const blogPost = record as unknown as BlogPost;

    // Update cache
    const store = useBlogStore.getState();
    store.setPost(blogPost.slug, blogPost);

    return blogPost;
  } catch (error) {
    console.error("Error creating blog post:", error);
    return null;
  }
}

// Update a blog post
export async function updateBlogPost(
  id: string,
  data: Partial<BlogPost>
): Promise<BlogPost | null> {
  try {
    const record = await pb.collection("blog_posts").update(id, data);
    const blogPost = record as unknown as BlogPost;

    // Update cache
    const store = useBlogStore.getState();
    store.setPost(blogPost.slug, blogPost);

    return blogPost;
  } catch (error) {
    console.error("Error updating blog post:", error);
    return null;
  }
}

// Delete a blog post
export async function deleteBlogPost(id: string): Promise<boolean> {
  try {
    await pb.collection("blog_posts").delete(id);

    // Remove from cache
    const store = useBlogStore.getState();
    const post = store.posts.find((p) => p.id === id);
    if (post) {
      const newPostCache = new Map(store.postCache);
      newPostCache.delete(post.slug);
      store.setPosts(store.posts.filter((p) => p.id !== id));
    }

    return true;
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return false;
  }
}

// Generate a URL-friendly slug from a title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Generate an excerpt from content
export function generateExcerpt(
  content: string,
  maxLength: number = 160
): string {
  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, "");

  if (textContent.length <= maxLength) {
    return textContent;
  }

  return textContent.substring(0, maxLength).trim() + "...";
}

// Clear all caches (useful for development or when you want to force refresh)
export function clearBlogCache(): void {
  const store = useBlogStore.getState();
  store.clearCache();
}
