"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useUserStore } from "@/@store/userStore"; // Ajuste o caminho conforme necessário

export const SessionManager = () => {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const token = localStorage.getItem("AuthToken");
    if (token) {
      // Simula chamada de API para buscar dados do usuário
      const fetchUser = async () => {
        const response = await fetch("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = await response.json();

        setUser(userData);
        redirect("/home");
      };

      fetchUser();
    }
  }, [setUser]);

  return null;
};
