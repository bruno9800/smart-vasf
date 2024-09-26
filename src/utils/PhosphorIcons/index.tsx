// components/PhosphorIcon.tsx
"use client";

import React from "react";
import * as Icons from "phosphor-react";
import { IconProps } from "phosphor-react";

interface PhosphorIconProps extends IconProps {
  name: keyof typeof Icons; // Chave do ícone
}

const PhosphorIcon = ({
  name,
  size = 24,
  color = "currentColor",
  weight = "regular",
  ...props
}: PhosphorIconProps) => {
  const IconComponent = Icons[name] as React.ElementType; // Explicita o tipo como React.ElementType

  if (!IconComponent) {
    return null; // Retorna null se o ícone não for encontrado
  }

  return <IconComponent size={size} color={color} weight={weight} {...props} />;
};

export default PhosphorIcon;
