import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-background text-foreground flex flex-col min-h-screen selection:bg-primary selection:text-primary-foreground`}
      >
        <SmoothScroll>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
