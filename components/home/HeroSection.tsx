import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const HeroSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.png')] bg-repeat"></div>
      </div>

      {/* 히어로 콘텐츠 */}
      <div className="container relative z-10 py-16 md:py-24">
        {/* 캠프 타이틀 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            여름방학 전교1등 공부습관캠프{' '}
            <span className="text-yellow-300">전일공</span>
          </h1>
          {/* 새로운 슬로건 추가 */}
          <p className="text-white text-lg mt-3 italic">
            <span className="bg-blue-700/50 px-3 py-1 rounded-full">
              "관리학원,개인과외,인강 장점만 담았습니다"
            </span>
          </p>
          <p className="text-white text-lg mt-2 italic">
            <span className="bg-blue-700/50 px-3 py-1 rounded-full">
              "3주만 투자하세요, 자기주도학습태도로 1년 내내 지속되는 성적"
            </span>
          </p>
        </div>

        {/* 핵심 메시지 - 훅 */}
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 max-w-5xl mx-auto">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="text-white">공부습관부터 내신까지</div>
              <div className="text-yellow-300 my-4 md:my-6 text-5xl md:text-7xl lg:text-8xl">
                전교1등 공부습관캠프
              </div>
              <div className="text-yellow-300 my-4 md:my-6 text-5xl md:text-7xl lg:text-8xl">
                전일공
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white mb-10 md:mb-0 md:pr-8">
            {/* 주요 포인트 */}
            <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 mb-8">
              <div className="text-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  <span className="text-yellow-300">전일공</span>의 약속
                </h2>
              </div>
              <div className="space-y-6 text-xl md:text-2xl font-medium">
                <div className="flex items-center justify-center text-center p-3 border-b border-white/20">
                  <span>하루 14시간 3주 공부 습관 완성</span>
                </div>
                <div className="flex items-center justify-center text-center p-3 border-b border-white/20">
                  <span>과목별 집중 특강으로 학교공부 대비</span>
                </div>
                <div className="flex items-center justify-center text-center p-3 border-b border-white/20">
                  <span>수준별 관리로 국영수심화까지</span>
                </div>
                <div className="flex items-center justify-center text-center p-3 border-b border-white/20">
                  <span>
                    수행평가 대비 주제탐구 및 독서보고서 작성 방법 익히기
                  </span>
                </div>
                <div className="flex items-center justify-center text-center p-3">
                  <span>실제 병원에서의 1일 의사체험으로 동기부여까지</span>
                </div>
              </div>
            </div>

            {/* 캠프 소개 - 개선된 레이아웃 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                캠프 소개
              </h3>
              <div className="space-y-4 text-blue-50">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-yellow-300 mr-3 mt-1"></div>
                  <p className="font-semibold text-yellow-200 text-xl">
                    "전교 1등의 공부습관을, 내 아이의 습관으로"
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-yellow-300 mr-3 mt-1"></div>
                  <p>
                    <span className="font-semibold text-yellow-200">
                      전일공
                    </span>
                    은 부산대학교 의과대학 교육봉사 동아리{' '}
                    <span className="text-yellow-200">'메디쌤'</span> 리더,
                    김동헌 멘토를 필두로 인성과 실력을 겸비한 의대생 멘토
                    20여명이 함께 하는 공부습관 전문 집중 캠프입니다.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-yellow-300 mr-3 mt-1"></div>
                  <p>
                    특히 본 캠프는 부산대 의대 선배이자, 부산 최대 회복기
                    재활의료기관{' '}
                    <a
                      href="https://www.keunsol.co.kr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-yellow-300 hover:text-yellow-100 transition-colors"
                    >
                      큰솔병원(의료법인 영재의료재단)
                    </a>{' '}
                    박재흥 원장의 공식 후원으로 운영됩니다.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-yellow-300 mr-3 mt-1"></div>
                  <p>
                    매 학기 전환점이 되는 방학 기간,
                    <br />
                    공부습관 리셋이 필요한 학생,
                    <br />
                    명문대, 의대를 목표로 도약을 준비 중인 학생들을 위해
                    <br />
                    실제 전교 1등을 경험한 멘토들이 직접 습관을 설계하고, 실전
                    루틴을 만들어줍니다.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-yellow-300 mr-3 mt-1"></div>
                  <p className="font-semibold text-yellow-200">
                    수도권 학부모 만족도 98%,
                    <br />
                    이제 부산·경남에서도 만날 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 신청하기 버튼 부분 강화 */}
            <div className="flex flex-col gap-4 justify-center md:justify-start">
              <div className="animate-pulse">
                <Link href="/application/form">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-xl px-8 py-7 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400 w-full"
                  >
                    지금 신청하기
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
              <Link href="/camp-info/curriculum">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 mt-2"
                >
                  커리큘럼 살펴보기
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            {/* 상단에 배지 요소 추가 */}
            <div className="mb-6 flex justify-between items-center">
              <div className="bg-blue-900/70 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 flex items-center">
                <GraduationCap className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-white font-medium text-sm">
                  전교1등 멘토 직접 지도
                </span>
              </div>
              <div className="bg-blue-900/70 backdrop-blur-sm rounded-lg p-3 border border-blue-400/30 flex items-center">
                <Star className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-white font-medium text-sm">
                  부산 유일 의사체험 프로그램
                </span>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-1 transition-transform hover:rotate-0 duration-300">
              <Image
                src="/student-group-activity.png"
                alt="학생 그룹 활동"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
                <p className="text-white font-medium">
                  의학계열, 명문대 진학을 희망하는 입시생을 위한 캠프
                </p>
              </div>
            </div>

            {/* 하단에 실적 지표 추가 */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20 text-center">
                <p className="text-yellow-300 text-2xl font-bold">98%</p>
                <p className="text-white text-sm">학부모 만족도</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20 text-center">
                <p className="text-yellow-300 text-2xl font-bold">3주</p>
                <p className="text-white text-sm">공부습관 형성 기간</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20 text-center">
                <p className="text-yellow-300 text-2xl font-bold">20+</p>
                <p className="text-white text-sm">의대생 멘토 인원</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20 text-center">
                <p className="text-yellow-300 text-2xl font-bold">14시간</p>
                <p className="text-white text-sm">하루 집중학습</p>
              </div>
            </div>

            {/* 장식 요소들 유지 */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
              <Star className="h-6 w-6 text-blue-900" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-indigo-700 rounded-full p-3 shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* 물결 모양 구분선 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto"
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}
