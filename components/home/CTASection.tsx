import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const CTASection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100 relative overflow-hidden">
          {/* 장식 요소 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500 rounded-full opacity-10 transform -translate-x-12 translate-y-12"></div>

          {/* 새로운 슬로건 추가 */}
          <div className="text-center mb-8">
            <p className="text-xl font-bold text-blue-800">
              "전교1등 공부습관캠프와 함께 <span className="text-indigo-600">성적 향상의 기적</span>을 경험하세요"
            </p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">지금 바로 캠프에 참여하세요</h2>
              <p className="text-gray-600 max-w-2xl">
                전교 1등 의대생들의 공부 방법을 배우고, 체계적인 학습 관리를 통해 여러분의 꿈을 이루세요. 전문
                멘토진이 여러분의 학습을 함께 합니다.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/application/form">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                  캠프 신청하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 