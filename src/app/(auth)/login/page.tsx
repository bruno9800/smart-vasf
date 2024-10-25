import Link from "next/link";
import { LoginForm } from "../_components/LoginForm";

export default function Login() {
  return (
    <section className="flex flex-col gap-4 border-[0.2px] shadow-md max-w-[520px]  p-8 rounded-lg flex-1">
      <h1 className="text-2xl font-bold text-blue-400">Bem vindo!</h1>
      <LoginForm />
      <p>
        Ainda não possui conta?{" "}
        <Link href={"/cadastro"} className="text-blue-500">
          clique aqui
        </Link>
      </p>
    </section>
  );
}
