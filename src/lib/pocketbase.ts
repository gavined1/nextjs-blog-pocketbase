import PocketBase from "pocketbase";

const pb = new PocketBase(
  process.env.POCKETBASE_URL || "http://127.0.0.1:8090"
);

export default pb;

// Types for our blog collections
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featured_image?: string;
  published: boolean;
  created: string;
  updated: string;
  author: string;
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  created: string;
  updated: string;
}
