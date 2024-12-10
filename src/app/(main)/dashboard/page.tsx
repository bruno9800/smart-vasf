"use client";

import RoomControls from "@/components/RoomControls";
import History from "@/components/History";

export default function Dashboard() {
  return (
    <section className="flex justify-evenly gap-12 flex-wrap md:flex-nowrap">
      <RoomControls />
      <History />
    </section>
  );
};
