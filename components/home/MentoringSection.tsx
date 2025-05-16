'use client'
/* 커스텀 애니메이션 CSS 클래스 추가 */
import './mentoring-section.css'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronRight,
  Medal,
  Sparkles,
  BookOpen,
  Target,
  Star,
  TrendingUp,
  GraduationCap,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'

export const MentoringSection = () => {
  const router = useRouter()

  const handleGotoApplication = () => {
    router.push('/application/form')
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">
          최고의 멘토링 프로그램
        </h2>

        {/* 새로운 슬로건 추가 */}
        <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-lg transition-all duration-300">
          <p className="text-center text-gray-700 font-medium">
            "<span className="text-blue-600 font-bold">전교1등 멘토</span>가
            알려주는 공부법으로{' '}
            <span className="text-indigo-600 font-bold">내 아이도 전교1등</span>
            이 될 수 있습니다"
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          {/* 첫 번째 배너 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg overflow-hidden mb-6 p-8 py-10 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative">
            <div className="absolute top-0 right-0 mt-4 mr-4 animate-pulse">
              <Medal className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-yellow-300 font-extrabold text-3xl md:text-4xl mb-6 text-center flex items-center justify-center">
              <Sparkles className="w-8 h-8 mr-2 animate-pulse text-yellow-300" />
              100% 최정예 전교1등 의대생 멘토 군단
              <Sparkles className="w-8 h-8 ml-2 animate-pulse text-yellow-300" />
            </h3>
            <div className="text-center text-white text-2xl md:text-3xl font-bold mt-4 animate-bounce-slow">
              전교1등공부습관캠프 전일공{' '}
              <span className="text-yellow-300">1555-1157</span>
            </div>
          </div>

          {/* 두 번째 배너 */}
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg overflow-hidden mb-6 p-10 py-12 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <BookOpen className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-yellow-300 font-extrabold text-2xl md:text-3xl mb-6 text-center flex items-center justify-center">
              <Target className="w-6 h-6 mr-2 text-yellow-300" />
              아이 학원 진도 때문에 망설이지 마세요
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-white text-lg md:text-xl font-bold text-center bg-blue-600 bg-opacity-40 p-3 rounded-lg transform hover:scale-105 transition-transform duration-300">
                취약한 과목 골라들을 수 있는 과목별 집중특강 프로그램
              </p>
              <p className="text-white text-lg md:text-xl font-bold text-center bg-blue-600 bg-opacity-40 p-3 rounded-lg transform hover:scale-105 transition-transform duration-300">
                공부습관과 함께 전교1등 의대생 쌤에게 1:1 과외 까지
              </p>
            </div>
            <div className="text-center text-yellow-300 text-2xl font-bold mt-6 flex items-center justify-center">
              <Star className="h-6 w-6 mr-2 animate-spin-slow" />
              전교1등공부습관캠프 전일공
              <Star className="h-6 w-6 ml-2 animate-spin-slow" />
            </div>
          </div>

          {/* 세 번째 배너 */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg overflow-hidden p-10 py-14 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <Award className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-yellow-300 font-extrabold text-3xl md:text-4xl mb-6 text-center flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-2 text-yellow-300" />
              여름방학 3주 전일공캠프
            </h3>
            <div className="text-white text-xl md:text-2xl font-bold text-center mb-8 bg-blue-700 bg-opacity-30 p-4 rounded-lg">
              전교1등 의대생 1:1 집중 프로미엄 공부습관캠프
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <BookOpen className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  공부습관
                </span>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <Target className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  학습태도
                </span>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <TrendingUp className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  진도
                </span>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <GraduationCap className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  성적향상
                </span>
              </div>
            </div>
            <div className="text-center text-white text-2xl font-bold mt-6 animate-pulse-slow">
              전교1등공부습관캠프{' '}
              <span className="text-yellow-300">전일공</span>
            </div>
          </div>

          {/* 네 번째 배너 (새로 추가) */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl overflow-hidden p-12 py-24 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative mt-6">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-yellow-300 animate-pulse" />
              <Award className="h-8 w-8 text-yellow-300 animate-spin-slow" />
              <Medal className="h-12 w-12 text-yellow-300 animate-bounce-slow" />
            </div>

            <div className="relative z-10">
              <h2 className="text-yellow-300 font-extrabold text-4xl md:text-5xl mb-8 text-center">
                여름방학 3주 전교1등공부습관캠프
              </h2>

              <div className="max-w-3xl mx-auto bg-indigo-600 bg-opacity-40 rounded-xl p-6 mb-10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-4 text-center">
                  성적향상은
                </h3>
                <p className="text-yellow-300 text-3xl md:text-5xl font-extrabold text-center">
                  공부습관이 답입니다
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="flex-1 bg-blue-700 bg-opacity-40 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white text-xl font-bold text-center leading-relaxed">
                    인성과 실력을 겸비한
                    <br />
                    부산대의대 멘토들이
                    <br />
                    뭉쳤습니다
                  </p>
                </div>

                <div className="flex-1 bg-blue-700 bg-opacity-40 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <Target className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white text-xl font-bold text-center leading-relaxed">
                    지역에 공부봉사활동을 위해
                    <br />
                    뭉친 멘토군단
                  </p>
                </div>

                <div className="flex-1 bg-blue-700 bg-opacity-40 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white text-xl font-bold text-center leading-relaxed">
                    과목별 전문가들의
                    <br />
                    체계적인 멘토링으로
                    <br />
                    캠프 효율을 극대화합니다
                  </p>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={handleGotoApplication}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  지금 바로 신청하기 →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 my-24">
          <h3 className="text-xl font-semibold mb-4">
            전교1등공부습관캠프 1:1 멘토진
          </h3>
          <div className="max-w-4xl mx-auto text-gray-700 mb-8 bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium mb-4">
              전교1등 공부방법 연구소 전일공 캠프에 오신 것을 환영합니다.
            </p>
            <div className="space-y-4 text-left">
              <p>
                안녕하세요. 전교1등공부습관캠프 전일공의 대표이자 공부연구소장인
                부산대 의대 김동헌입니다. 전국 의대생으로 구성된 저희 전일공
                캠프는, 단순한 과외나 공부 지도가 아닌{' '}
                <span className="font-semibold text-blue-600">
                  '전교 1등의 공부법'
                </span>
                과{' '}
                <span className="font-semibold text-blue-600">
                  '자기주도 학습 시스템'
                </span>
                을 바탕으로 공부방해요소가 넘치는 요즘 아이들에게 실질적인
                공부방법과 전략을 함께 제시하고자 합니다.
              </p>
              <p>
                아울러 영어·수학·국어 진도 유지부터 의대(명문대) 합격 전략 상담,
                자기주도 생기부 설계, 명사 특강과 병원 견학까지 전일공 캠프는
                학습과 진로, 동기부여를 모두 아우르는 고밀도의 프로그램을
                운영합니다.
              </p>
              <p>
                전문 연구팀(과외연구·튜터연구·콘텐츠개발·학생관리)이 함께하는
                이번 캠프에서, 의대 및 명문대를 준비하는 여러분의 꿈을 실현할 수
                있도록 최선을 다해 돕겠습니다.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            위 대표멘토들이 함께 활동하던 지역의 의대생들만 20여명을 엄선하여
            100% 인성+실력을 겸비한 정예멘토들로 구성 하여 1:5 전담 멘토제로
            운영됩니다
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* 첫 번째 멘토 */}
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/placeholder.svg"
                    alt="김동현 멘토"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-gray-700 font-medium">
                    부산대의대
                    <br />
                    김동현
                  </p>
                </div>
              </div>

              {/* 두 번째 멘토 */}
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/placeholder.svg"
                    alt="장서원 멘토"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-gray-700 font-medium">
                    부산대의대
                    <br />
                    장서원
                  </p>
                </div>
              </div>

              {/* 세 번째 멘토 */}
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/placeholder.svg"
                    alt="윤태현 멘토"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-gray-700 font-medium">
                    부산대의대
                    <br />
                    윤태현
                  </p>
                </div>
              </div>

              {/* 네 번째 멘토 */}
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/placeholder.svg"
                    alt="이상민 멘토"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-gray-700 font-medium">
                    부산대의대
                    <br />
                    이상민
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/metoda/lineup">
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 hover:scale-105 transition-transform duration-300"
            >
              멘토진 더 알아보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
