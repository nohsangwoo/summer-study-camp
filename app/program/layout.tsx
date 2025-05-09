import type { ReactNode } from "react"
import SidebarLink from "@/components/sidebar-link"

interface ProgramLayoutProps {
  children: ReactNode
}

export default function ProgramLayout({ children }: ProgramLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 프로그램 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-blue-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">프로그램</h1>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row py-8 gap-8">
        {/* 좌측 메뉴 */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 sticky top-24">
            <SidebarLink href="/program/med-school-consultation" label="의대합격심층상담" />
            <SidebarLink href="/program/comprehensive-exploration" label="종합전형대비주제탐구" />
            <SidebarLink href="/program/med-student-care" label="의대생기부토탈케어" />
            <SidebarLink href="/program/individual-curriculum" label="개인 교과 진도유지" />
            <SidebarLink href="/program/inquiry" label="상담문의" />
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
