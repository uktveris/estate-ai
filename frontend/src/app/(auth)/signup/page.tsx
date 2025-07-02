import SignUpForm from "@/components/SignUpForm";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    redirect("/");
  }

  return (
    <div className="flex grow items-center justify-center">
      <SignUpForm />
    </div>
  )
}
