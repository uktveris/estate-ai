"use client"

import { createClient } from "@/utils/supabase/client"
import { redirect } from "next/navigation"

export default function LogoutButton() {
  const supabase = createClient()
  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect("/")
  }
  return (
    <button onClick={handleLogout}>Log out</button>
  )
}
