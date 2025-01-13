import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Bonus Kingdoms - Best Casino Bonuses",
  description: "Find the best casino bonuses and reviews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <NavBar />
        <main className="md:ml-64 p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
