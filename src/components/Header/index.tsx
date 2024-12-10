import { ComponentProps } from "react";
import Image from "next/image";

import logoSmart from "@/../public/logo-smart.png";

import styles from "./styles.module.css";

type HeaderProps = ComponentProps<"header"> & {};

export const Header = ({ children, ...props }: HeaderProps) => {
  const user = {
    name: "Rodrigo Leandro",
    email: 'rodrigo@gmail.com',
  };

  const resolveAvatar = () => `https://avatar.oxro.io/avatar.svg?name=${user?.name.toUpperCase()}`;

  return (
    <header {...props} className={styles.header}>
      <Image
        src={logoSmart}
        width={100}
        alt="Logo da UNIVASF - universidade federal do vale do rio são francisco"
      />

      <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full cursor-pointer" src={resolveAvatar()} />
          <div className="flex flex-col gap-0">
              <div className="text-base font-semibold">{user.name}</div>
              <a href="logout" className="text-sm font-normal text-blue-600 dark:text-blue-500 hover:underline">
                Sair
              </a>
          </div>
      </div>
    </header>
  );
};
