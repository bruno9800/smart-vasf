import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { WebSocketProvider } from "@/context/WebsocketProvider";
// import { MobileNav } from "@/components/MobileNav";

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
    <WebSocketProvider>
      <section>
        <Header />

        <div className="max-w-[1200px] mx-auto px-4 mt-20">{children}</div>
        {/* <MobileNav /> */}
      </section>
    </WebSocketProvider>
  );
}
