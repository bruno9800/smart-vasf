import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  }
);

InputComponent.displayName = "InputComponent"; // Adiciona um nome ao componente para depuração
