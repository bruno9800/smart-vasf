import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { WebSocketProvider } from "@/context/WebSocketProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Vasf",
  description: "IOT das salas da UNIVASF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <WebSocketProvider>
        <body className={inter.className}>
          <Header />
          <main className="max-w-[1200px] mx-auto mt-[110px] px-4">
            {children}
          </main>
          <MobileNav />
        </body>
      </WebSocketProvider>
    </html>
  );
}
