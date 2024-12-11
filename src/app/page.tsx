import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const auth = (await cookies()).get("@auth:smart-vasf");

  if (auth) {
    redirect("/dashboard");
  }

  return (
    <section className="flex justify-evenly gap-4 flex-wrap md:flex-nowrap">
      <h1>landing page</h1>
    </section>
  );
}
