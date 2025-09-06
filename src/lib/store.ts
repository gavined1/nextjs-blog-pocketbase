import { create } from "zustand";
import { BlogPost, Author } from "./pocketbase";

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

  // Cache duration (5 minutes)
  CACHE_DURATION: number;

  // Actions
  setPosts: (posts: BlogPost[]) => void;
  setPostsLoading: (loading: boolean) => void;
  setPostsError: (error: string | null) => void;
  getPost: (slug: string) => BlogPost | null;
  setPost: (slug: string, post: BlogPost) => void;
  getAuthor: (id: string) => Author | null;
  setAuthor: (id: string, author: Author) => void;
  setAuthorsLoading: (loading: boolean) => void;
  setAuthorsError: (error: string | null) => void;
  isPostsCacheValid: () => boolean;
  clearCache: () => void;
}

export const useBlogStore = create<BlogState>((set, get) => ({
  // Initial state
  posts: [],
  postsLoading: false,
  postsError: null,
  postsLastFetch: null,
  postCache: new Map(),
  authors: new Map(),
  authorsLoading: false,
  authorsError: null,
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes

  // Actions
  setPosts: (posts) =>
    set((state) => {
      // Cache individual posts
      const newPostCache = new Map(state.postCache);
      posts.forEach((post) => {
        newPostCache.set(post.slug, post);
      });

      return {
        posts,
        postsLastFetch: Date.now(),
        postCache: newPostCache,
        postsError: null,
      };
    }),

  setPostsLoading: (loading) => set({ postsLoading: loading }),

  setPostsError: (error) => set({ postsError: error }),

  getPost: (slug) => {
    const state = get();
    return state.postCache.get(slug) || null;
  },

  setPost: (slug, post) =>
    set((state) => {
      const newPostCache = new Map(state.postCache);
      newPostCache.set(slug, post);
      return { postCache: newPostCache };
    }),

  getAuthor: (id) => {
    const state = get();
    return state.authors.get(id) || null;
  },

  setAuthor: (id, author) =>
    set((state) => {
      const newAuthors = new Map(state.authors);
      newAuthors.set(id, author);
      return { authors: newAuthors };
    }),

  setAuthorsLoading: (loading) => set({ authorsLoading: loading }),

  setAuthorsError: (error) => set({ authorsError: error }),

  isPostsCacheValid: () => {
    const state = get();
    if (!state.postsLastFetch) return false;
    return Date.now() - state.postsLastFetch < state.CACHE_DURATION;
  },

  clearCache: () =>
    set({
      posts: [],
      postsLastFetch: null,
      postCache: new Map(),
      authors: new Map(),
      postsError: null,
      authorsError: null,
    }),
}));
