import Link from "next/link";
import Icon from "./ui/Icon";
import NavLink from "./ui/NavLink";

export default function Header() {
  return (
    <header className="flex items-center bg-gray-200 px-3 h-15">
      <Link href="/">
      <div className="flex items-center justify-center h-12 w-12">
          <Icon />
      </div>
      </Link>
      <ul className="flex">
        <li className="ml-7 font-bold"><NavLink title="Home" href="/" className="[&.active]:text-[var(--primary-color)]" /></li>
        <li className="ml-7 font-bold"><NavLink title="Listings" href="/listings" className="[&.active]:text-[var(--primary-color)]" /></li>
        <li className="ml-7 font-bold"><NavLink title="Search" href="/search" className="[&.active]:text-[var(--primary-color)]" /></li>
      </ul>
    </header>
  )
}
