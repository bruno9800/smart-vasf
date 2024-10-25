"use server";

import api from "@/utils/api";
import { loginProps } from "./loginSchema";

export async function userLogin(data: loginProps) {
  try {
    console.log("Dados de login:", data);

    const response = await api.post("/user-login", data);

    return {
      response,
      error: null, // Nenhum erro se a resposta for bem-sucedida
    };
  } catch (error: any) {
    console.error("Falha no login:", error);

    return {
      response: null,
      error: {
        message: error.message || "Erro desconhecido",
      },
    };
  }
}
