import type { ReactNode } from "react"
import SidebarLink from "@/components/sidebar-link"

interface MetodaLayoutProps {
  children: ReactNode
}

export default function MetodaLayout({ children }: MetodaLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 멘토단 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-purple-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">공부습관연구소</h1>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row py-8 gap-8">
        {/* 좌측 메뉴 */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 sticky top-24">
            <SidebarLink href="/metoda/director-greeting" label="연구소장인사말" />
            <SidebarLink href="/metoda/lineup" label="연구소라인업" />
            <SidebarLink href="/metoda/role" label="연구소역할" />
            <SidebarLink href="/metoda/about" label="멘토단" />
            <SidebarLink href="/metoda/strategy-teachers" label="전략담임소개" />
            <SidebarLink href="/metoda/strategy-teachers-role" label="전략담임역할" />
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-200">{children}</div>
      </div>
    </div>
  )
}
