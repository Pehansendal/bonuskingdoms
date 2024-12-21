import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BonusKingdoms - Your Guide to Online Casinos",
  description: "Discover and compare the best online casinos with detailed reviews, ratings, and exclusive bonuses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
