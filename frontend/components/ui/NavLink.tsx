"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  title: string;
  href: Url;
  className: string;
}

export default function NavLink({title, href, className}: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;
  const updatedClassName = isActive ? `${className} active` : className;
  return (
    <Link className={updatedClassName} href={href}>{ title }</Link>
  )
}
