import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { SupportedLocale } from "@/types/lang";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EV Finder",
  description: "A comprehensive electric vehicle database and research tool",
};

type LayoutProps = {
  children: React.ReactNode;
  params: { lang: SupportedLocale };
};

export default function RootLayout({
  children,
  params: { lang },
}: LayoutProps) {
  return (
    <html lang="en">
      <Providers locale={lang}>
        <body className={`${inter.className} flex`}>
          <Sidebar />
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
