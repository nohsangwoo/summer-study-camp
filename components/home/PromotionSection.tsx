import Image from "next/image"
import { MapPin, TrendingUp, CheckCircle2 } from "lucide-react"

export const PromotionSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        {/* 수도권 인기 캠프 안내 */}
        <div className="mb-12 text-center">
          <div className="bg-yellow-400 text-gray-900 py-6 px-4 rounded-lg inline-block mb-6 shadow-lg transform -rotate-1">
            <h2 className="text-2xl md:text-3xl font-bold">
              수도권에서 맘들에게 입소문난 공부습관캠프
              <br />
              드디어 부산경남지역에 오픈
              <br />
              <span className="text-3xl md:text-4xl">전교1등공부습관캠프 전일공</span>
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-700 mb-8">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="font-medium">부산경남지역 첫 오픈</span>
            <span className="mx-2">|</span>
            <TrendingUp className="h-5 w-5 text-rose-600" />
            <span className="font-medium">수도권 학부모 만족도 98%</span>
          </div>
        </div>

        {/* 프로모션 배너 */}
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-12 transform transition-all hover:shadow-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-30VSvC2LZ1mxgF5KgQ1icRsx6bBg9X.png"
            alt="전교1등 멘토의 1:1 학습교정 캠프"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* 새로운 슬로건 추가 */}
        <div className="text-center mb-10">
          <p className="text-xl font-medium text-gray-700 italic border-l-4 border-r-4 border-blue-500 px-6 py-3 inline-block">
            "전교1등 멘토들의 <span className="text-blue-600 font-bold">공부비법 전수</span>로 내 아이의 성적이
            달라집니다"
          </p>
        </div>

        {/* 캠프 하이라이트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">전교1등 멘토의 1:1 학습교정</h3>
            </div>
            <p className="text-gray-700">
              여름방학 20박 21일 동안 전교1등 출신 멘토들이 1:1로 학생들의 학습 방법을 교정하고 최적의 공부습관을
              형성합니다.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-600 rounded-full p-2 mr-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-indigo-800">국내유일 1:4-5 담임멘토제</h3>
            </div>
            <p className="text-gray-700">
              한 명의 담임멘토가 4-5명의 학생만을 전담하여 밀착 관리하는 국내 유일의 시스템으로 학생 개개인에게 맞춤형
              학습 지도를 제공합니다.
            </p>
          </div>

          <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 rounded-full p-2 mr-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-rose-800">2025 여름방학 3주 특별 프로그램</h3>
            </div>
            <p className="text-gray-700">
              2025년 여름방학 3주 동안 진행되는 특별 프로그램으로, 담임멘토의 1:1 배움 공부법을 직접 전수받아 학습
              효율을 극대화합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 