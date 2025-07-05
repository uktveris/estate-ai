import Link from "next/link";
import Icon from "./ui/Icon";
import NavLink from "./ui/NavLink";
import { createClient } from "@/utils/supabase/server";
import UserIcon from "./ui/UserIcon";

export default async function Header() {
  const supabase = await createClient();
  const {data: {user }}= await supabase.auth.getUser();

  return (
    <header className="flex items-center bg-gray-200 px-3 h-15">
      <Link href="/">
      <div className="flex items-center justify-center h-12 w-12">
        <Icon />
      </div>
      </Link>
      <ul className="flex">
        <li className="ml-7 font-bold"><NavLink title="Home" href="/" className="[&.active]:text-white [&.active]:bg-[var(--primary-color)] [&.active]:rounded-2xl [&.active]:p-2" /></li>
        <li className="ml-7 font-bold"><NavLink title="Listings" href="/listings" className="[&.active]:text-white [&.active]:bg-[var(--primary-color)] [&.active]:rounded-2xl [&.active]:p-2" /></li>
        <li className="ml-7 font-bold"><NavLink title="Search" href="/search" className="[&.active]:text-white [&.active]:bg-[var(--primary-color)] [&.active]:rounded-2xl [&.active]:p-2" /></li>
      </ul>
      <div className="ml-auto">
        { user ? (
          <Link href="/account"><UserIcon /></Link>
        ): (
          <Link className="font-bold underline" href="/login">Log in</Link>
        )}
      </div>
    </header>
  )
}
