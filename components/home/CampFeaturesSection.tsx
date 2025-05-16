import { Users, Clock, Brain, Book, CheckSquare, Star, FileText, Award } from "lucide-react"

export const CampFeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">전교1등공부습관캠프 전일공 특징</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-gray-800">1:1 전담 멘토 매칭</h3>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <CheckSquare className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-gray-800">약점/공부습관케어</h3>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Star className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-gray-800">학습&진로 동기부여</h3>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <FileText className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2 text-gray-800">수업종료리뷰발송</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">우리아이 공부계획<br/>어떻게 세워야할지 고민이신가요?</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            전교1등 의대생이 1:1 밀착관리하는<br/>
            전일공과 함께 하세요
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-3 sm:p-5 rounded-lg h-full flex items-center justify-center">
              <p className="text-gray-800 font-medium text-center text-xs sm:text-sm md:text-base">전교1등 의대생이 함께 세우는 3주 계획표</p>
            </div>
            <div className="bg-blue-50 p-3 sm:p-5 rounded-lg h-full flex items-center justify-center">
              <p className="text-gray-800 font-medium text-center text-xs sm:text-sm md:text-base">전교1등 의대생과 전문가의 3주완성 커리큘럼</p>
            </div>
            <div className="bg-blue-50 p-3 sm:p-5 rounded-lg h-full flex items-center justify-center">
              <p className="text-gray-800 font-medium text-center text-xs sm:text-sm md:text-base">부모님께 공부의 전 과정을 매일 리뷰합니다</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">수행평가, 제대로 준비하지 않으면 내신도 놓칩니다</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            전교1등 자기주도 공부습관 캠프
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 text-center">주제탐구활동 보고서 익히기</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 text-center">교과 수행평가 보고서 작성방법 익히기</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 text-center">독서활동 및 독서보고서 작성방법 익히기</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <p className="text-gray-800 text-center">학생부 스스로 디자인하기 익히기</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 text-center">자기평가서 작성방법 익히기</p>
            </div>
          </div>
          
          <p className="text-gray-700 text-center">
            학종으로 의대 입시한 전교1등 의대멘토들이 개개인의 생활기록부를 분석하고 교과와 진로를 연결한 입시 맞춤형 프로그램 진행
          </p>
        </div>
      </div>
    </div>
  )
} 