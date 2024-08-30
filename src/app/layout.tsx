import type { Metadata } from "next";
import { Poppins, Comic_Neue } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const comic_neue = Comic_Neue({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic-neue",
});

export const metadata: Metadata = {
  title: "Stock Predictions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${comic_neue.variable}`}>
      <body className="bg-slate-100 h-screen flex flex-col overscroll-none">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
