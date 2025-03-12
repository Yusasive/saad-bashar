"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FaceLogo from "@/public/images/projects/FaceLogo.png";
import { ArrowUp } from "@/components/SvgLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#19191933] backdrop-blur-lg z-50">
      <div className="mx-6 lg:mx-12 py-6 flex border-b border-[#CDCDCD33] justify-between items-center">
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <Image
            src={FaceLogo}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
            width={66}
            height={66}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-20 text-[#CDCDCD] text-xl font-mori font-semibold">
          <div className="items-center space-x-6">
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
              LinkedIn
            </a>
          </div>
          <div>
            <Link
              href="/book-call"
              className="flex flex-row items-center border border-white px-4 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Book a Call{" "}
              <span className="ml-3">
                <ArrowUp />
              </span>
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

      {/* Scroll Progress Bar */}
      <div
        className="h-0.5 bg-gray-400 fixed left-0 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-80 py-6 flex flex-col items-center space-y-4 text-[#CDCDCD] text-xl font-mori font-semibold transition-all duration-300 ease-in-out">
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            Contact
          </Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300 flex flex-row items-center"
          >
            LinkedIn{" "}
            <span className="ml-3">
              <ArrowUp />
            </span>
          </a>
          <Link
            href="/book-call"
            onClick={() => setIsOpen(false)}
            className="flex flex-row items-center border border-white p-4 rounded-lg hover:bg-white hover:text-black transition"
          >
            Book a Call{" "}
            <span className="ml-3">
              <ArrowUp />
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
