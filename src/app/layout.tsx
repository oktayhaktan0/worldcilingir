import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "World Çilingir - İzmir 7/24 Acil Çilingir Hizmeti",
  description: "İzmir Karabağlar merkezli World Çilingir. Tüm ilçelerde 15 dakikada kapınızdayız. Hasarsız kapı açma, oto çilingir. 0530 350 86 07",
};

import FloatingCall from "@/components/FloatingCall";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.variable}>
        {children}
        <FloatingCall />
      </body>
    </html>
  );
}
