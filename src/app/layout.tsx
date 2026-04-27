import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "minimalblinding.store | Elegant Anti-Tarnish Jewelry",
  description: "Elegant Anti-Tarnish Jewelry for Everyday Shine. Waterproof, Affordable Luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-brand-beige text-brand-charcoal`}>
        {children}
      </body>
    </html>
  );
}
