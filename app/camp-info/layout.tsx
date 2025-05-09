import type { ReactNode } from "react"
import SidebarLink from "@/components/sidebar-link"

interface CampInfoLayoutProps {
  children: ReactNode
}

export default function CampInfoLayout({ children }: CampInfoLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 캠프안내 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-sky-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">캠프안내</h1>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row py-8 gap-8">
        {/* 좌측 메뉴 */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 sticky top-24">
            <SidebarLink href="/" label="메인페이지" />
            <SidebarLink href="/camp-info/greeting" label="대표인사말" />
            <SidebarLink href="/camp-info/recommendations" label="추천사" />
            <SidebarLink href="/camp-info/facilities" label="캠프시설" />
            <SidebarLink href="/camp-info/guide" label="캠프안내" />
            <SidebarLink href="/camp-info/curriculum" label="커리큘럼" />
            <SidebarLink href="/camp-info/mentors" label="멘토소개" />
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow-sm border border-gray-200">{children}</div>
      </div>
    </div>
  )
}
