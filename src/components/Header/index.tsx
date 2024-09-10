import { User } from "@phosphor-icons/react/dist/ssr";
import { ComponentProps } from "react";

import styles from './styles.module.css'

type HeaderProps = ComponentProps<"header"> & {};

export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <header {...props} className={styles.header}>
      <p>Logo</p>

      <div>
        <ul>
          <li>Inicio</li>
          <li>Salas</li>
          <li>Histórico</li>
          <li>teste</li>
        </ul>

        <div>
          <User />
        </div>
      </div>
    </header>
  );
};
