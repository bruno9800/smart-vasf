import InteractionRoom from "@/components/InteractionRoom";
import Room from "@/components/Room";

export default function Home() {
  return (
    <section className="flex justify-between gap-[100px]">
      <InteractionRoom />
      <Room />
    </section>
  );
}
