"use client";

import { Button } from "@/components/Button";
import { InputComponent } from "@/components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLogin } from "../login/action";
import { RegisterProps, registerSchema } from "../cadastro/registerSchema";
import { userRegister } from "../cadastro/action";
import { redirect } from "next/navigation";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: zodResolver(registerSchema),
  });

  async function handleLogin(data: RegisterProps) {
    console.log("oi");
    const { response, error } = await userRegister(data);

    if (error) {
      console.error("Erro ao fazer cadastro:", error.message);
    } else {
      console.log("Login bem-sucedido!", response);
      localStorage.setItem("authToken", response.token);
      // Armazenar token, redirecionar usuário, etc.
      redirect("/login");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-4 items-start"
    >
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="name">Nome:</label>
        <InputComponent
          type="text"
          {...register("name")}
          autoComplete="name" // Adicione o atributo autocomplete
        />
      </div>
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
      {errors && <p>{errors.root?.message}</p>}
      <Button label="enviar" type="submit" />
    </form>
  );
};
