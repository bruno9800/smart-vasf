"use server";

import api from "@/utils/api";
import { RegisterProps } from "./registerSchema";
import { cookies } from "next/headers";

export async function userRegister(data: RegisterProps) {
  try {
    console.log("Dados de login:", data);

    const response = await api.post("/user-register", data);

    const cookie = await cookies();

    cookie.set("@auth:smart-vasf", response.token, {
      path: "/", // Disponível em todas as rotas
      httpOnly: true, // Não acessível pelo JavaScript
      secure: process.env.NODE_ENV === "production", // Apenas em HTTPS no ambiente de produção
      sameSite: "strict", // Prevenir vazamentos entre sites
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

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
