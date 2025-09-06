"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/pocketbase";
import { useAuthor } from "@/hooks/useBlog";
import { getAuthor } from "@/lib/blog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardClientProps {
  post: BlogPost;
}

export default function BlogCardClient({ post }: BlogCardClientProps) {
  const { author } = useAuthor(post.author);

  // Fetch author data if not in cache
  useEffect(() => {
    if (!author) {
      getAuthor(post.author);
    }
  }, [author, post.author]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {post.featured_image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={post.created}>{formatDate(post.created)}</time>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author?.name || "Unknown Author"}</span>
          </div>
        </div>

        <h2 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:no-underline">
            {post.title}
          </Link>
        </h2>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{post.tags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        <Button asChild variant="ghost" className="p-0 h-auto font-medium">
          <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
            Read Article
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
