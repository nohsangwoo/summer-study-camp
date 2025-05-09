import type { ReactNode } from "react"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <div className="min-h-screen bg-gray-100">{children}</div>
}
