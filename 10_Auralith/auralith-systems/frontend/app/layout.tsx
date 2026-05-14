import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auralith Systems | Engineering Scalable Intelligence",

  description:
    "Auralith Systems builds scalable software infrastructure, intelligent automation systems, and enterprise-grade digital platforms for modern businesses.",

  keywords: [
    "Auralith Systems",
    "Software Engineering",
    "Full-Stack Development",
    "Cloud Infrastructure",
    "Automation Systems",
    "Enterprise Platforms",
    "AI Systems",
    "Technology Consulting",
    "Modern Web Development",
  ],

  authors: [{ name: "Kevin Jerome" }],

  creator: "Kevin Jerome",

  metadataBase: new URL("https://auralithsystems.com"),

  openGraph: {
    title: "Auralith Systems",
    description:
      "Engineering scalable intelligence through modern infrastructure, automation, and enterprise-grade systems.",
    url: "https://auralithsystems.com",
    siteName: "Auralith Systems",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Auralith Systems",
    description:
      "Modern software infrastructure, automation systems, and enterprise-grade digital platforms.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}