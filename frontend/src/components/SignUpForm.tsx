"use client";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Icon from "./ui/Icon";
import Link from "next/link";


export default function SignUpForm() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== repPassword) {
      setError("Passwords do not match!");
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
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
      <h1 className="text-4xl font-bold">Sign up</h1>
      <form
        className="flex flex-col"
        onSubmit={(e) => { e.preventDefault();  handleSignUp()}}
        onChange={() => setError(null)}
        onInvalid={(e) => { e.preventDefault();  setError("Enter valid email address")}}
      >
        {error && <p className="text-red-800">{error}</p>}
        <label className="text-sm mt-4" htmlFor="email">Email</label>
        <input className="text-lg" id="email" name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="some@example.com" required />
        <label className="text-sm mt-4" htmlFor="password">Password</label>
        <input className="text-lg" id="password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="..." required />
        <label className="text-sm mt-4" htmlFor="password">Repeat password</label>
        <input className="text-lg" id="password" name="password" type="password" value={repPassword} onChange={e => setRepPassword(e.target.value)} placeholder="..." required />
        <button
          className="mt-4 py-4 bg-[var(--primary-color)] text-white font-bold rounded-3xl cursor-pointer hover:opacity-90"
          type="submit"
          disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
      </form>
      <Link className="text-xs underline" href="/login">Log in</Link>
    </div>
  )
}
