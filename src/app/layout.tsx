import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WebSocketProvider } from "@/context/WebsocketProvider";

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
          <main>{children}</main>
        </body>
      </WebSocketProvider>
    </html>
  );
}
