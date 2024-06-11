import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { nanum_myeongjo } from "./font";

export const metadata: Metadata = {
  title: "SUJIN's",
  description: "This is SUJIN's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen w-full flex-col items-center justify-between bg-main text-black ${nanum_myeongjo.className}`}
      >
        <Header />
        <main className="w-full flex-auto pt-[69px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
