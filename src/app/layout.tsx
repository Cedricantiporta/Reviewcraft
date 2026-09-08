import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ReviewCraft | Amazon Review Removal Service for Sellers",
  description:
    "We identify and remove reviews that violate Amazon's policies—systematically, compliantly, and effectively. Sign up free, pay $200 only when reviews are removed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white font-sans text-body">{children}</body>
    </html>
  );
}
