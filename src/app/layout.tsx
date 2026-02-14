import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Saint Systems - ICT & Electrical Engineering Solutions",
    template: "%s | Saint Systems",
  },
  description:
    "Malaysian provider of managed IT services, networking, infrastructure, and electrical engineering solutions. Powering businesses with smart, reliable technology.",
  keywords: [
    "managed IT services Malaysia",
    "ICT services provider KL",
    "electrical engineering consultancy Malaysia",
    "managed security services",
    "IT infrastructure Malaysia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
