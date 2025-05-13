import { Users, Clock, Brain } from "lucide-react"

export const CampFeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">캠프 특징</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            '임시전문가' + '현직 의사' + '실제 의치약한수 대학생 선배'들이 전교일등 공부습관과 함께 의학 계열 관련
            모든 정보를 쉽고 빠르게 전달합니다.
          </p>
        </div>

        {/* 새로운 슬로건 추가 */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-100 px-6 py-3 rounded-lg border-b-4 border-yellow-400 shadow-md">
            <p className="text-gray-800 font-medium">
              "전교1등 공부습관캠프에서 <span className="text-yellow-600 font-bold">3주 투자</span>로{" "}
              <span className="text-yellow-600 font-bold">1년 성적 상승</span>의 효과를 경험하세요"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">전문 멘토진</h3>
            <p className="text-gray-600 text-center">
              전국 각지의 의대생 멘토들이 직접 학생들과 함께 생활하며 전교 1등의 공부습관을 전수합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">14시간 집중 학습</h3>
            <p className="text-gray-600 text-center">
              하루 14시간 체계적인 학습 일정으로 학습 효율성을 극대화하고, 자기주도적 학습 습관을 형성합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Brain className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">맞춤형 교육</h3>
            <p className="text-gray-600 text-center">
              학생 개인의 학습 수준과 진도에 맞춰 1:1 또는 소규모 그룹으로 진행되는 맞춤형 교육 프로그램을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 