import type { Metadata } from "next";
import "./globals.css";
import { lexend } from "./font";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "FOSO entrance test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <Navbar />
        <div className="min-h-screen px-8 py-4">{children}</div>
      </body>
    </html>
  );
}
