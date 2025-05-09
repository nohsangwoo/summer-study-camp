import type { ReactNode } from "react"

interface ApplicationGuideLayoutProps {
  children: ReactNode
}

export default function ApplicationGuideLayout({ children }: ApplicationGuideLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 캠프신청 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-blue-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">캠프신청안내</h1>
        </div>
      </div>

      <div className="flex-1 py-8 bg-gray-50">{children}</div>
    </div>
  )
}
