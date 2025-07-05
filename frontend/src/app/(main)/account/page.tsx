import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>user data:</h1>
      <p>{user.email}</p>
      <p>{user.created_at}</p>
    </div>
  )
}
