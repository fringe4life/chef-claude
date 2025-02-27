import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  fallback: ['sans-serif']
});

export const metadata: Metadata = {
  title: "Chef Claude",
  description: "Enter your list of ingredients and Chef Claude will give you a recipe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased `}
      >
        <div className="max-w-180 w-full  m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
