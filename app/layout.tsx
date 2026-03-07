import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from './components/Header'

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Proof Over Past",
  description: "Business to help troubled youth turn their lives around",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
