"use client"; // Essential: This component needs client-side state and effects

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget Toastify CSS

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  // State now lives safely inside a Client Component
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <> {/* Use a Fragment to avoid adding an unnecessary div */}
      {!isSplashFinished ? (
        <SplashScreen onFinish={() => setIsSplashFinished(true)} />
      ) : (
        <>
          {/* Ensure ToastContainer is rendered within the client boundary */}
          <ToastContainer position="top-right" autoClose={3000} />
          <Navbar />
          <main>{children}</main> {/* Render the actual page content passed down */}
          <Footer />
        </>
      )}
    </>
  );
}