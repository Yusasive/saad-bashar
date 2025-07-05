// Add this directive at the very top of the file
"use client";

// import { useState } from "react";
import { usePathname } from "next/navigation";
// import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  // const [isSplashFinished, setIsSplashFinished] = useState(false);
  const pathname = usePathname();

  // Corrected Regular Expression: Matches /projects/ followed by one or more characters
  // Use \/projects\/ to match the literal "/projects/" path segment
  const projectsDetailRegex = /^\/projects\/.+$/; // <-- Changed project to projects

  // Test if the current pathname matches the projects detail pattern
  const isProjectsDetailPage = projectsDetailRegex.test(pathname ?? ''); // Use ?? '' for safety if pathname could be null/undefined

  // Show the footer if the current path is NOT a projects detail page
  const showFooter = !isProjectsDetailPage;

  return (
    <>
      {/* {!isSplashFinished ? (
        <SplashScreen onFinish={() => setIsSplashFinished(true)} />
      ) : ( */}
        <>
          <ToastContainer position="top-right" autoClose={3000} />
          <Navbar />
          <main className="w-full">{children}</main>

          {/* Conditionally render the Footer */}
          {showFooter && <Footer />}
        </>
      {/* )} */}
    </>
  );
}