import type { Metadata } from "next";
import { Inter, Taprom, Square_Peg } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  weight: ["400", "500", "700"] 
});

const taprom = Taprom({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: '--font-taprom' 
});

const squarePeg = Square_Peg({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: '--font-square-peg' 
});

export const metadata: Metadata = {
  title: "Khushi Banthia - Portfolio",
  description: "Portfolio of Khushi Banthia, showcasing skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${taprom.variable} ${squarePeg.variable}`}>
      <body className={`${inter.className} bg-[#050505] text-white`}>{children}</body>
    </html>
  );
}
