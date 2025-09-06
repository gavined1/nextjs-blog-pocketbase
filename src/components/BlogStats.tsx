"use client";

import { useBlogPosts } from "@/hooks/useBlog";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Calendar, TrendingUp } from "lucide-react";

export default function BlogStats() {
  const { posts, loading } = useBlogPosts();

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-muted rounded mb-2" />
              <div className="h-8 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const totalPosts = posts.length;
  const totalWords = posts.reduce((acc, post) => {
    return acc + (post.content?.replace(/<[^>]*>/g, "").split(" ").length || 0);
  }, 0);
  const avgWordsPerPost =
    totalPosts > 0 ? Math.round(totalWords / totalPosts) : 0;
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();
  const postsThisMonth = posts.filter((post) => {
    const postDate = new Date(post.created);
    return (
      postDate.getMonth() === thisMonth && postDate.getFullYear() === thisYear
    );
  }).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Total Posts
            </span>
          </div>
          <div className="text-2xl font-bold">{totalPosts}</div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              This Month
            </span>
          </div>
          <div className="text-2xl font-bold">{postsThisMonth}</div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Avg Words
            </span>
          </div>
          <div className="text-2xl font-bold">
            {avgWordsPerPost.toLocaleString()}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Authors
            </span>
          </div>
          <div className="text-2xl font-bold">
            {new Set(posts.map((post) => post.author)).size}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
