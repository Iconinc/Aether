import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Aether - Crafting Next-Gen Web Experiences",
  description: "Crafting Next-Gen Web Experiences - Digital Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased layout-section`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
