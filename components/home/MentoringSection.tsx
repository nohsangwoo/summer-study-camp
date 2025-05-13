import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const MentoringSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">최고의 멘토링 프로그램</h2>

        {/* 새로운 슬로건 추가 */}
        <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
          <p className="text-center text-gray-700 font-medium">
            "<span className="text-blue-600 font-bold">전교1등 멘토</span>가 알려주는 공부법으로{" "}
            <span className="text-indigo-600 font-bold">내 아이도 전교1등</span>이 될 수 있습니다"
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Image
            src="/mentor-banners.png"
            alt="서울대 멘토링 프로그램"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">우수한 멘토진</h3>
          <p className="text-gray-700 mb-6">
            서울대, 연세대, 고려대 출신의 우수한 멘토들이 학생들의 학습을 1:1로 지도합니다. 각 분야 전문가들의
            체계적인 멘토링으로 학습 효율을 극대화합니다.
          </p>

          <div className="max-w-4xl mx-auto">
            <Image
              src="/mentor-profiles.png"
              alt="멘토 프로필"
              width={800}
              height={200}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="/metoda/lineup">
            <Button variant="outline" className="bg-white hover:bg-gray-100">
              멘토진 더 알아보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 