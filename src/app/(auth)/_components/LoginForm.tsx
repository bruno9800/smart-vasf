"use client";

import { Button } from "@/components/Button";
import { InputComponent } from "@/components/Input";
import { useForm } from "react-hook-form";
import { loginProps, loginSchema } from "../login/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/utils/api";
import { userLogin } from "../login/action";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginProps>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(data: loginProps) {
    console.log("oi");
    const { response, error } = await userLogin(data);

    if (error) {
      console.error("Erro ao fazer login:", error.message);
      // Mostrar mensagem de erro ao usuário, etc.
    } else {
      console.log("Login bem-sucedido!", response);
      localStorage.setItem("authToken", response.token);
      // Armazenar token, redirecionar usuário, etc.
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-4 items-start"
    >
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <InputComponent
          type="text"
          {...register("email")}
          autoComplete="email" // Adicione o atributo autocomplete
        />
      </div>
      <div className="w-full  flex flex-col gap-2">
        <label htmlFor="password">Senha:</label>
        <InputComponent
          type="password"
          {...register("password")}
          autoComplete="current-password" // Adicione o atributo autocomplete
        />
      </div>
      <Button label="enviar" type="submit" />
    </form>
  );
};
