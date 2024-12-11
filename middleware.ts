import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Acessar o cookie de autenticação
  const authToken = request.cookies.get("@auth:smart-vasf")?.value;

  // Verificar se o token existe
  if (!authToken) {
    // Redirecionar para a página de login se não autenticado
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Permitir a continuidade para rotas autenticadas
  return NextResponse.next();
}

// Configurar as rotas onde o middleware será aplicado
export const config = {
  matcher: [
    // Aplicar middleware apenas em rotas que precisam de autenticação
    "/home/:path*", // Exemplo: Rotas iniciadas por /home
    "/dashboard/:path*",
  ],
};
