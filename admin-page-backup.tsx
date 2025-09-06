// ADMIN PAGE BACKUP - Restore this file to src/app/admin/page.tsx when needed
"use client";

import { useState, useEffect } from "react";
import { createBlogPost, generateSlug, generateExcerpt } from "@/lib/blog";
import { BlogPost } from "@/lib/pocketbase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    tags: "",
    published: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      ...formData,
      slug: generateSlug(formData.title),
      excerpt: generateExcerpt(formData.content),
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    const newPost = await createBlogPost(postData);

    if (newPost) {
      setPosts([newPost, ...posts]);
      setFormData({
        title: "",
        content: "",
        author: "",
        tags: "",
        published: false,
      });
      setIsCreating(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your blog posts and content
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create New Post
              </h2>
              <button
                onClick={() => setIsCreating(!isCreating)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {isCreating ? "Cancel" : "New Post"}
              </button>
            </div>

            {isCreating && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="author"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Author
                  </label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Content
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={10}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tags"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="react, nextjs, tutorial"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="published"
                    className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                  >
                    Publish immediately
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Create Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCreating(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Posts
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              {posts.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">
                  No posts created yet. Create your first post above!
                </p>
              ) : (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
                    >
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        By {post.author} •{" "}
                        {new Date(post.created).toLocaleDateString()}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {post.excerpt}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            post.published
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}
                        >
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
