import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWrapper from "./AppWrapper";

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

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}