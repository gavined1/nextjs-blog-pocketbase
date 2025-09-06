"use client";

import { useEffect } from "react";
import { useBlogPosts } from "@/hooks/useBlog";
import { getBlogPosts } from "@/lib/blog";
import BlogCardClient from "./BlogCardClient";
import { Card, CardContent } from "@/components/ui/card";

import { BlogPost } from "@/lib/pocketbase";

interface BlogListClientProps {
  initialPosts?: BlogPost[];
}

export default function BlogListClient({
  initialPosts = [],
}: BlogListClientProps) {
  const { posts, loading, error, isCacheValid } = useBlogPosts();

  // Load posts if not cached or if we have initial posts
  useEffect(() => {
    if (!isCacheValid && posts.length === 0) {
      getBlogPosts();
    }
  }, [isCacheValid, posts.length]);

  // Use initial posts if available and no cached posts
  const displayPosts = posts.length > 0 ? posts : initialPosts;

  if (loading && posts.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-48 bg-muted rounded mb-4" />
              <div className="h-4 bg-muted rounded mb-2" />
              <div className="h-4 bg-muted rounded mb-2 w-3/4" />
              <div className="h-3 bg-muted rounded mb-4 w-1/2" />
              <div className="h-8 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            Failed to load blog posts. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (displayPosts.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No blog posts available yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayPosts.map((post) => (
        <BlogCardClient key={post.id} post={post} />
      ))}
    </div>
  );
}
