import Image from "next/image"
import Link from "next/link"
import { ArrowRight, GraduationCap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

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
            여름방학 전교1등 공부습관캠프 <span className="text-yellow-300">전일공</span>
          </h1>
          {/* 새로운 슬로건 추가 */}
          <p className="text-white text-lg mt-3 italic">
            <span className="bg-blue-700/50 px-3 py-1 rounded-full">
              "3주만에 바뀌는 학습습관, 1년 내내 지속되는 성적향상"
            </span>
          </p>
        </div>

        {/* 핵심 메시지 - 훅 */}
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="text-white">성적향상은</div>
              <div className="text-yellow-300 my-4 md:my-6 text-5xl md:text-7xl lg:text-8xl">전교1등 공부습관이</div>
              <div className="text-white">답이다</div>
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
                  <span>전교1등 멘토의 1:1 공부습관캠프</span>
                </div>
                <div className="flex items-center justify-center text-center p-3 border-b border-white/20">
                  <span>여름방학 3주간 학원 끊고 공부습관 먼저 잡아 주세요</span>
                </div>
                <div className="flex items-center justify-center text-center p-3">
                  <span>
                    전환기 최고의 여름방학캠프 "<span className="text-yellow-300 font-bold">전일공</span>"
                  </span>
                </div>
              </div>
            </div>

            {/* 캠프 소개 - 개선된 레이아웃 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">캠프 소개</h3>
              <div className="space-y-4 text-blue-50">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-yellow-300 mr-3 mt-1"></div>
                  <p>
                    <span className="font-semibold text-yellow-200">전교1등캠프 전일공</span>은 부산 최대
                    회복기재활의료기관 의료법인{" "}
                    <a
                      href="https://www.keunsol.co.kr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-yellow-300 hover:text-yellow-100 transition-colors"
                    >
                      영재의료재단 큰솔병원
                    </a>
                    이 후원하고 전국의 전교1등 의대생 멘토들이 지역의 후배들을 위해 만든 공부습관 멘토링 캠프입니다.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-1 h-full bg-yellow-300 mr-3 mt-1"></div>
                  <p>
                    방학기간 전환기에 성적향상을 필요로 하는 전국의 학생들과 명문대, 의대를 희망하는 학생들에게
                    의대생멘토들이 공부습관을 잡아 주고 성적향상을 보장하는 캠프입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link href="/application/form">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                  지금 신청하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/camp-info/curriculum">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  커리큘럼 살펴보기
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-1 transition-transform hover:rotate-0 duration-300">
              <Image
                src="/student-group-activity.png"
                alt="학생 그룹 활동"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
                <p className="text-white font-medium">의학계열, 명문대 진학을 희망하는 입시생을 위한 캠프</p>
              </div>
            </div>

            {/* 장식 요소들 */}
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
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