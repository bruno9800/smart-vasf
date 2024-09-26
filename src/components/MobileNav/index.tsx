import PhosphorIcon from "@/utils/PhosphorIcons";

export const MobileNav = () => {
  return (
    <nav className="text-black items-center justify-between gap-4 px-12 py-5  bg-[#DAE7FB] rounded-t-[48px] backdrop-blur-[200px] flex fixed bottom-0 w-full sm:hidden">
      <a href="#">
        <PhosphorIcon name="ChartBar" />
      </a>
      <a href="#">
        <PhosphorIcon name="House" />
      </a>
      <a href="#">
        <PhosphorIcon name="Gear" />
      </a>
    </nav>
  );
};
