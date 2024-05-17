import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Coffee",
  description: "Venta de tortas y otras cosas ricas",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-to-br to-teal-200 from-yellow-200
      `}>{children}</body>
    </html>
  );
}
