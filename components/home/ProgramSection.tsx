import Link from 'next/link'
import { BookOpen, GraduationCap, Brain, Award } from 'lucide-react'

export const ProgramSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            프로그램 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            의대 합격을 위한 체계적인 프로그램으로 여러분의 꿈을 현실로 만들어
            드립니다.
          </p>
        </div>

        {/* 새로운 슬로건 추가 */}
        <div className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
            <p className="font-medium">
              "전교1등 공부습관캠프는{' '}
              <span className="font-bold">공부방법부터 달라집니다</span>"
            </p>
          </div>
        </div>

        {/* 프로그램 버튼 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/program/study-habits" className="block">
            <div className="rounded-xl p-8 flex flex-col items-center justify-center h-48 bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 hover:shadow-md transition-all hover:translate-y-[-2px] group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10"></div>
              <BookOpen className="h-10 w-10 text-blue-500 mb-4 group-hover:text-blue-600 transition-colors" />
              <span className="text-blue-600 font-bold text-xl group-hover:text-blue-700 transition-colors">
                공부습관
              </span>
              <p className="text-blue-500/80 text-sm mt-2 text-center">
                효율적인 학습 방법과 습관 형성
              </p>
            </div>
          </Link>
          <Link href="/program/progress-maintenance" className="block">
            <div className="rounded-xl p-8 flex flex-col items-center justify-center h-48 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-md transition-all hover:translate-y-[-2px] group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10"></div>
              <GraduationCap className="h-10 w-10 text-indigo-500 mb-4 group-hover:text-indigo-600 transition-colors" />
              <span className="text-indigo-600 font-bold text-xl group-hover:text-indigo-700 transition-colors">
                진도유지
              </span>
              <p className="text-indigo-500/80 text-sm mt-2 text-center">
                체계적인 학습 진도 관리
              </p>
            </div>
          </Link>
          <Link href="/program/self-directed-research" className="block">
            <div className="rounded-xl p-8 flex flex-col items-center justify-center h-48 bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 hover:shadow-md transition-all hover:translate-y-[-2px] group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10"></div>
              <Brain className="h-10 w-10 text-teal-500 mb-4 group-hover:text-teal-600 transition-colors" />
              <span className="text-teal-600 font-bold text-xl text-center group-hover:text-teal-700 transition-colors">
                자기주도
                <br />
                주제탐구
              </span>
              <p className="text-teal-500/80 text-sm mt-2 text-center">
                창의적 사고력 향상
              </p>
            </div>
          </Link>
          <Link href="/program/med-school-care" className="block">
            <div className="rounded-xl p-8 flex flex-col items-center justify-center h-48 bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 hover:shadow-md transition-all hover:translate-y-[-2px] group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10"></div>
              <Award className="h-10 w-10 text-rose-500 mb-4 group-hover:text-rose-600 transition-colors" />
              <span className="text-rose-600 font-bold text-xl text-center group-hover:text-rose-700 transition-colors">
                의대.명문대입시
                <br />
                토탈케어
              </span>
              <p className="text-rose-500/80 text-sm mt-2 text-center">
                의대/명문대합격을 위한 종합관리
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
