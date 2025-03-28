import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saad Bashar | UI/UX Designer & Product Designer",
  description:
    "I am a UI/UX and Product Designer with expertise in creating compelling landing pages and seamless user experiences.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Saad Bashar",
    "Web Design",
    "Frontend Developer",
  ],
  authors: [{ name: "Saad Bashar", url: "https://saadbashar.netlify.app" }],
  creator: "Saad Bashar",
  metadataBase: new URL("https://saadbashar.netlify.app"),
  openGraph: {
    title: "Saad Bashar | UI/UX & Product Designer",
    description:
      "I specialize in creating engaging, user-friendly, and responsive designs.",
    url: "https://saadbashar.netlify.app",
    siteName: "Saad Bashar Portfolio",
    images: [
      {
        url: "https://saadbashar.netlify.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Saad Bashar UI/UX Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saadbashar.netlify.app",
  },
};
