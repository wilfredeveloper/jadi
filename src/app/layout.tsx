import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/component/NavBar/NavBar";
import { Toaster } from "@/components/ui/toaster"
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Jadi platform",
  description: "Jadi empowers you to craft a personalized learning journey that unlocks your full potential. Leverage Kinde Auth for effortless login and dive into a world of possibilities tailored to your interests, goals, and learning style. Explore, connect, and achieve more with Jadi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex `}>
        <NavBar />
        <main className={`main-content`}>
        {children}
        </main>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
