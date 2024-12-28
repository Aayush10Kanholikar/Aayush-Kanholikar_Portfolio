import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aayush Kanholikar | Portfolio",
  description:
    "Explore Aayush Kanholikar’s portfolio showcasing projects, skills, and experience in web development and software engineering.",
  keywords: [
    "Aayush Kanholikar",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Aayush Kanholikar",
      url: "https://aayush-kanholikar-portfolio.vercel.app/",
    },
  ],
  openGraph: {
    title: "Aayush Kanholikar | Portfolio",
    description:
      "Discover innovative web development projects and professional achievements by Aayush Kanholikar.",
    url: "https://aayush-kanholikar-portfolio.vercel.app/",
    siteName: "Aayush Kanholikar Portfolio",
    images: [
      {
        url: "./favicon.ico",
        width: 1200,
        height: 630,
        alt: "Aayush Kanholikar Portfolio Cover Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Kanholikar | Portfolio",
    description:
      "Explore web development projects and achievements by Aayush Kanholikar.",
    images: ["./favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
