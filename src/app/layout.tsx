import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
import { Next13NProgress } from "nextjs13-progress";

import Header from "./Header";

export const metadata: Metadata = {
  title: "ENUM Select Example",
  description: "An example of using ENUMs to make select inputs type-safe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-base-300 flex flex-col min-h-screen">
          <Header />
          {children}
        </main>
        <Next13NProgress height={7} />
      </body>
    </html>
  );
}
