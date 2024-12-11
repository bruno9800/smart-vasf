import Link from "next/link";
import { LoginForm } from "../_components/LoginForm";
import { RegisterForm } from "../_components/RegisterForm";

export default function Register() {
  return (
    <section className="flex flex-col gap-4 border-[0.2px] shadow-md max-w-[520px]  p-8 rounded-lg flex-1">
      <h1 className="text-2xl font-bold text-blue-400">Crie sua conta</h1>
      <RegisterForm />
      <p>
        Já possui uma conta?{" "}
        <Link href={"/login"} className="text-blue-500">
          clique aqui
        </Link>
      </p>
    </section>
  );
}
