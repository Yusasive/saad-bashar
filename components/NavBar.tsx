"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#19191933] backdrop-blur-lg  z-50">
      <div className="mx-6 lg:mx-12 py-4 flex border-b border-gray-400 justify-between items-center">
        {/* Profile Image */}
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-20 text-[#CDCDCD] text-xl font-mori font-semibold">
          <div className="items-center space-x-6">
            {" "}
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            {" "}
            <Link
              href="/book-call"
              className=" border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              Book a Call ↗
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#19191933] backdrop-blur-md absolute top-full left-0 w-full py-6 flex flex-col items-center space-y-4 text-[#CDCDCD] text-xl font-mori font-semibold">
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-gray-300"
          >
            LinkedIn ↗
          </a>
          <Link
            href="/book-call"
            className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            Book a Call ↗
          </Link>
        </div>
      )}
    </nav>
  );
}
