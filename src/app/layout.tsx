import type { Metadata } from "next";
import { Nanum_Gothic, Nanum_Myeongjo, Rock_Salt } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const sans_serif = Nanum_Gothic({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const serif = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const point = Rock_Salt({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUJIN's",
  description: "This is SUJIN's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen w-full flex-col items-center justify-between bg-main text-black ${serif.className}`}
      >
        <Header />
        <main className="w-full flex-auto pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
