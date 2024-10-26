"use client";

import InteractionRoom from "@/components/InteractionRoom";
import Room from "@/components/Room";

export default function Home() {
  return (
    <section className="flex justify-evenly gap-4 flex-wrap md:flex-nowrap">
      <InteractionRoom />
      <Room />
    </section>
  );
}
