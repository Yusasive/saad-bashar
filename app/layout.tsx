// Remove "use client"; from here if it was added

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import AppWrapper from "@/components/AppWrapper"; // Import the new wrapper
import AppWrapper from "./AppWrapper";
// Remove useState import: import { useState } from "react";
// Remove SplashScreen import if not needed elsewhere directly in layout
// Remove Navbar/Footer/ToastContainer imports - they move to the wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Keep metadata export if you have one
// export const metadata = { ... }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Remove useState hook:
  // const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <html lang="en">
      {/* Add suppressHydrationWarning if necessary, often helpful for extensions modifying HTML */}
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Use the AppWrapper to handle state and conditional rendering */}
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}