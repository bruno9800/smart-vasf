import PhosphorIcon from "@/utils/PhosphorIcons";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  Icon?: keyof typeof import("phosphor-react");
  label: string;
};

export default function Button({ Icon, label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className=" flex gap-1 items-center justify-center bg-blue-500 text-white font-semibold py-2 px-4 hover:bg-blue-600 transition-colors rounded-[32px] flex-1 min-w-40"
    >
      {Icon && <PhosphorIcon name={Icon} className="" size={24} />}{" "}
      {/* Renderiza o ícone utilizando PhosphorIcon */}
      {label}
    </button>
  );
}
