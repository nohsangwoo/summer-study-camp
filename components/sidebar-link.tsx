"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarLinkProps {
  href: string
  label: string
}

export default function SidebarLink({ href, label }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`block p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
        isActive ? "border-l-4 border-l-blue-600 bg-blue-50 font-bold text-blue-600" : ""
      }`}
    >
      {label}
    </Link>
  )
}
