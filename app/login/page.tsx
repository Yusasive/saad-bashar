"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Login successful!", { autoClose: 2000 });
        setTimeout(() => {
          router.push("/blog");
        }, 2000);
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero1 text-white">
      <ToastContainer position="top-right" />
      <div className="p-8 rounded-lg shadow-lg bg-[#16161799] max-w-xl w-full">
        <h2 className="text-4xl font-bold text-[#CDCDCD] text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-8">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 text-[#CDCDCD] text-lg py-3 bg-gray-700 rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 text-[#CDCDCD] text-lg py-3 bg-gray-700 rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#1E1E1E] p-2 py-3 rounded-xl text-[#CDCDCD]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
