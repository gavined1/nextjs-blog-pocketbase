import { BlogPost } from "@/lib/pocketbase";
import BlogListClient from "./BlogListClient";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  return <BlogListClient initialPosts={posts} />;
}
