"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isSplashFinished && (
          <SplashScreen onFinish={() => setIsSplashFinished(true)} />
        )}
        {isSplashFinished && (
          <>
            <ToastContainer position="top-right" autoClose={3000} />
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
