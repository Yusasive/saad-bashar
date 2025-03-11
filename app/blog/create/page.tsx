"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    categories: "",
    year: "",
    image: "",
    description: "",
    users: "",
    timeline: "",
    role: "",
    collaborators: "",
    companyLogo: "",
    website: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.title || !form.categories || !form.year) {
      toast.error("Please fill in all required fields!");
      setLoading(false);
      return;
    }

    let imageUrl = form.image;
    let logoUrl = form.companyLogo;

    try {
      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) throw new Error("Image upload failed!");
        const { url } = await uploadRes.json();
        imageUrl = url;
      }

      if (logoFile) {
        const formData = new FormData();
        formData.append("file", logoFile);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) throw new Error("Logo upload failed!");
        const { url } = await uploadRes.json();
        logoUrl = url;
      }

      const postData = {
        title: form.title,
        categories: form.categories.split(",").map((c) => c.trim()),
        year: Number(form.year),
        image: imageUrl,
        description: form.description,
        users: form.users ? form.users.split(",").map((u) => u.trim()) : [],
        timeline: form.timeline,
        role: form.role,
        collaborators: form.collaborators,
        companyLogo: logoUrl,
        website: form.website,
      };

      const postRes = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (!postRes.ok) {
        const errorData = await postRes.json();
        throw new Error(errorData.error || "Failed to create post!");
      }

      toast.success("Post created successfully!");
      setForm({
        title: "",
        categories: "",
        year: "",
        image: "",
        description: "",
        users: "",
        timeline: "",
        role: "",
        collaborators: "",
        companyLogo: "",
        website: "",
      });
      setImagePreview(null);
      setLogoPreview(null);
      setImageFile(null);
      setLogoFile(null);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 mt-20">
      <div className="flex flex-row justify-between py-6">
        <h1 className="text-3xl font-bold">Create Projects</h1>
        <Link href="/blog">
          <h1 className="text-3xl font-bold border border-rose-100 rounded-2xl px-3 py-2">
            Projects List
          </h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title *"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.title}
        />
        <input
          name="categories"
          placeholder="Categories (comma-separated) *"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.categories}
        />
        <input
          name="year"
          type="number"
          placeholder="Year *"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.year}
        />

        <input
          name="users"
          placeholder="Users (Unilorin)"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.users}
        />
        <input
          name="timeline"
          type="text"
          placeholder="Timeline (e.g., Q1 2025)"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.timeline}
        />
        <input
          name="role"
          type="text"
          placeholder="Role (e.g., Lead Developer)"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.role}
        />
        <input
          name="collaborators"
          placeholder="Collaborators (manager, developer)"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.collaborators}
        />

        {/* Company Logo Upload */}
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleLogoChange}
        />
        {logoPreview && (
          <img
            src={logoPreview}
            alt="Company Logo Preview"
            className="w-20 h-20 object-cover rounded-lg"
          />
        )}

        <input
          name="website"
          type="url"
          placeholder="Company Website (https://example.com)"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.website}
        />

        {/* Project Image Upload */}
        <input
          type="file"
          accept="image/*"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleImageChange}
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-lg"
          />
        )}

        <textarea
          name="description"
          placeholder="Short Description (Unilorin website)"
          className="w-full p-2 rounded-lg bg-gray-700 text-lg text-white border"
          onChange={handleChange}
          value={form.description}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
