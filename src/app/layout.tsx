import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Noise } from "@/components/ui/Noise";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leon Lee Dorsey | Bassist, Composer, Educator",
  description: "Official website of jazz bassist Leon Lee Dorsey. Featuring new releases, tour dates, biography, and discography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bodoni.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen selection:bg-primary selection:text-primary-foreground`}
      >
        <SmoothScroll>
          <Noise />
          <CustomCursor />
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
