import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="container flex flex-col gap-8 py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              썸머 공부습관 캠프
            </h3>
            <p className="text-sm text-gray-600 max-w-md">
              의대생 공부습관 연구소가 제공하는 최고의 학습 캠프로, 효율적인 학습 방법과 습관 형성을 통해 학생들의
              성공적인 진학을 돕습니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:text-right">
            <div className="flex items-center md:justify-end gap-2 text-gray-600">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <p className="text-sm">02-123-4567</p>
            </div>
            <div className="flex items-center md:justify-end gap-2 text-gray-600">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <p className="text-sm">info@summerstudycamp.kr</p>
            </div>
            <div className="flex items-center md:justify-end gap-2 text-gray-600">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <p className="text-sm">서울특별시 강남구 테헤란로 123</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} 썸머 공부습관 캠프. 모든 권리 보유.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
              이용약관
            </Link>
            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
