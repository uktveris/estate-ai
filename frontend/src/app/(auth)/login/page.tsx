import LoginForm from "@/components/LoginForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    console.log("already logged in, redirecting to /")
    redirect("/");
  }

  return (
    <div className="flex grow items-center justify-center">
      <LoginForm />
    </div>
  )
}
