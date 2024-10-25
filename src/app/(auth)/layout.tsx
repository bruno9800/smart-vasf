import type { Metadata } from "next";
import Image from "next/image";

import logoUnivasf from "@/../public/univasf-logo.png";
import logoSmart from "@/../public/logo-smart.png";

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
    <div className="flex flex-col min-h-screen ">
      <header className="flex self-stretch items-center justify-center p-4 pb-8 bg-slate-200">
        <Image
          src={logoUnivasf}
          width={260}
          alt="Logo da UNIVASF - universidade federal do vale do rio são francisco"
        />
      </header>
      <section className="max-w-[1200px] mx-auto px-4 flex flex-col w-full flex-1">
        <div className="flex justify-center flex-1 items-center">
          <div
            className="flex  gap-8 items-center justify-evenly w-full
        "
          >
            <Image
              src={logoSmart}
              alt="Logo da UNIVASF - universidade federal do vale do rio são francisco"
            />
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
