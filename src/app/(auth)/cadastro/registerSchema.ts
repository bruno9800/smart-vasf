import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

export type RegisterProps = z.infer<typeof registerSchema>;
