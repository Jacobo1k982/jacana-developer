import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // ← ¡ESTO DEBE ESTAR!

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JACANA DEV",
  description: "Fullstack Developer Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}