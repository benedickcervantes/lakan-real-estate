import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Outfit } from "next/font/google";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lakan Real Estate · Land. Legacy. Life.",
    template: "%s · Lakan Real Estate",
  },
  description:
    "A modern property listing house for homes, condominiums, and commercial space across Metro Manila, Cebu, and Davao. Filipino-owned. Est. 2012.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-parchment">
        <Intro />
        <Grain />
        <Cursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
