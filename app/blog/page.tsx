"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  categories: string[];
  year: number;
  image: string;
  description: string;
  content: string;
  users: string[];
  timeline: string;
  role: string;
  collaborators: string[];
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/posts");
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data: Post[] = await res.json();
      setPosts(data);
    } catch (err) {
      setError((err as Error).message);
      toast.error("Error fetching posts.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete post");
      toast.success("Post deleted successfully!");
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (err) {
      toast.error((err as Error).message || "Error deleting post.");
    }
  };

  const handleEdit = (post: Post) => {
    setEditingPost({
      ...post,
      categories: post.categories || [],
      collaborators: post.collaborators || [],
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    try {
      const res = await fetch(`/api/posts/${editingPost._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingPost),
      });

      if (!res.ok) throw new Error("Failed to update post");

      toast.success("Post updated successfully!");
      fetchPosts();
      setEditingPost(null);
    } catch (err) {
      toast.error((err as Error).message || "Error updating post.");
    }
  };

  return (
    <div className="container mx-auto p-6 mt-20">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold">Projects Posts</h1>
        <Link href="/blog/create">
          <h1 className="text-3xl font-bold border border-rose-100 rounded-2xl px-3 py-2">
            Create Projects
          </h1>
        </Link>
      </div>

      {loading && <p className="text-gray-400 mt-4 py-52">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className="text-sm text-gray-400">
              {post.year} - {post.categories?.join(", ") || "No categories"}
            </p>
            <p className="mt-2">{post.description}</p>
            <p className="text-sm text-gray-400">Timeline: {post.timeline}</p>
            <p className="text-sm text-gray-400">Role: {post.role}</p>
            <p className="text-sm text-gray-400">
              Collaborators: {post.collaborators?.join(", ") || "None"}
            </p>
            <div className="mt-4 flex gap-4">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => handleEdit(post)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(post._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingPost && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-white">Edit Post</h2>
            <form onSubmit={handleUpdate} className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={editingPost.title}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, title: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Description"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={editingPost.description}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    description: e.target.value,
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="Timeline"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={editingPost.timeline}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, timeline: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Role"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={editingPost.role}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, role: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Categories (comma-separated)"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={editingPost.categories?.join(", ") || ""}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    categories: e.target.value.split(",").map((c) => c.trim()),
                  })
                }
                required
              />
              <input
                type="text"
                placeholder="Collaborators (developer , designer)"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={editingPost.collaborators}
                onChange={(e) =>
                  setEditingPost({
                    ...editingPost,
                    collaborators: e.target.value
                      .split(",")
                      .map((c) => c.trim()),
                  })
                }
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-3 py-1 rounded w-full"
              >
                Update Post
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-3 py-1 rounded w-full mt-2"
                onClick={() => setEditingPost(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
