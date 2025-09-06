import { useBlogStore } from "@/lib/store";

// Hook for accessing blog posts
export function useBlogPosts() {
  const posts = useBlogStore((state) => state.posts);
  const loading = useBlogStore((state) => state.postsLoading);
  const error = useBlogStore((state) => state.postsError);
  const isCacheValid = useBlogStore((state) => state.isPostsCacheValid());

  return {
    posts,
    loading,
    error,
    isCacheValid,
  };
}

// Hook for accessing a specific blog post
export function useBlogPost(slug: string) {
  const post = useBlogStore((state) => state.getPost(slug));
  const loading = useBlogStore((state) => state.postsLoading);
  const error = useBlogStore((state) => state.postsError);

  return {
    post,
    loading,
    error,
  };
}

// Hook for accessing authors
export function useAuthors() {
  const authors = useBlogStore((state) => Array.from(state.authors.values()));
  const loading = useBlogStore((state) => state.authorsLoading);
  const error = useBlogStore((state) => state.authorsError);

  return {
    authors,
    loading,
    error,
  };
}

// Hook for accessing a specific author
export function useAuthor(id: string) {
  const author = useBlogStore((state) => state.getAuthor(id));
  const loading = useBlogStore((state) => state.authorsLoading);
  const error = useBlogStore((state) => state.authorsError);

  return {
    author,
    loading,
    error,
  };
}

// Hook for blog store actions
export function useBlogActions() {
  const setPosts = useBlogStore((state) => state.setPosts);
  const setPostsLoading = useBlogStore((state) => state.setPostsLoading);
  const setPostsError = useBlogStore((state) => state.setPostsError);
  const setPost = useBlogStore((state) => state.setPost);
  const setAuthor = useBlogStore((state) => state.setAuthor);
  const clearCache = useBlogStore((state) => state.clearCache);

  return {
    setPosts,
    setPostsLoading,
    setPostsError,
    setPost,
    setAuthor,
    clearCache,
  };
}
