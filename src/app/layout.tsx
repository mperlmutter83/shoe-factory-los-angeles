import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Shoe Factory Los Angeles | Footwear Consulting, Production & Manufacturing", template: "%s | Shoe Factory LA" },
  description: "LA-based footwear and accessories manufacturer. Full-package services from concept to end-product. 15+ years experience. Call (323) 918-4993.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body className={`${inter.variable} font-sans antialiased`}><Header /><main>{children}</main><Footer /></body></html>
  );
}
