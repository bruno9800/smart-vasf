import { User } from "@phosphor-icons/react/dist/ssr";
import { ComponentProps } from "react";

type HeaderProps = ComponentProps<"header"> & {};

export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <header {...props}>
      <p>Logo</p>

      <div>
        <ul>
          <li>Inicio</li>
          <li>Salas</li>
          <li>Histórico</li>
        </ul>

        <div>
          <User />
        </div>
      </div>
    </header>
  );
};
