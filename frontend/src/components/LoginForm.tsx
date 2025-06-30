"use client";
import { useState } from "react";
import Icon from "./ui/Icon";
import Form from "next/form";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const supabase = createClient();

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.replace("/");
  }

  return (
    <div className="shadow-2xl rounded-2xl min-w-96 w-1/2 flex flex-col gap-4 items-center py-4">
      <div className="flex items-center justify-center h-12 w-12">
          <Icon />
      </div>
      <h1 className="text-4xl font-bold">Login</h1>
      <Form className="flex flex-col" action={() => handleLogin()}>
        <label className="text-sm mt-4" htmlFor="email">Email</label>
        <input className="text-lg" id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="some@example.com" required />
        <label className="text-sm mt-4" htmlFor="password">Password</label>
        <input className="text-lg" id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="..." required />
        <button className="mt-4 py-4 bg-[var(--primary-color)] text-white font-bold rounded-3xl cursor-pointer" type="submit" disabled={loading}>{loading ? "Logging in..." : "Log in"}</button>
      </Form>
    </div>
  )
}
