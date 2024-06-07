import type { Metadata } from "next";
import { East_Sea_Dokdo, Nanum_Gothic, Nanum_Myeongjo } from "next/font/google";
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
export const point = East_Sea_Dokdo({
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
        className={`flex min-h-screen w-full flex-col items-center justify-between ${serif.className}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
