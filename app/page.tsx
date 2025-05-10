import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  GraduationCap,
  Brain,
  Award,
  ArrowRight,
  Star,
  Users,
  Clock,
  MapPin,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
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

      {/* 새로운 슬로건 배너 추가 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4">
        <div className="container">
          <div className="flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
            <p className="text-white font-medium text-center">
              "전교 1등의 비밀은 타고난 재능이 아닌 <span className="text-yellow-300 font-bold">올바른 공부습관</span>
              입니다"
            </p>
            <Sparkles className="h-5 w-5 text-yellow-300 ml-2" />
          </div>
        </div>
      </div>

      {/* 새로운 프로모션 섹션 */}
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

      {/* 멘토링 프로그램 섹션 추가 */}
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

      {/* 캠프 특징 섹션 */}
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

      {/* 프로그램 소개 섹션 */}
      <div className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">프로그램 소개</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              의대 합격을 위한 체계적인 프로그램으로 여러분의 꿈을 현실로 만들어 드립니다.
            </p>
          </div>

          {/* 새로운 슬로건 추가 */}
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
              <p className="font-medium">
                "전교1등 공부습관캠프는 <span className="font-bold">공부방법부터 달라집니다</span>"
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
                <p className="text-blue-500/80 text-sm mt-2 text-center">효율적인 학습 방법과 습관 형성</p>
              </div>
            </Link>
            <Link href="/program/progress-maintenance" className="block">
              <div className="rounded-xl p-8 flex flex-col items-center justify-center h-48 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-md transition-all hover:translate-y-[-2px] group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10"></div>
                <GraduationCap className="h-10 w-10 text-indigo-500 mb-4 group-hover:text-indigo-600 transition-colors" />
                <span className="text-indigo-600 font-bold text-xl group-hover:text-indigo-700 transition-colors">
                  진도유지
                </span>
                <p className="text-indigo-500/80 text-sm mt-2 text-center">체계적인 학습 진도 관리</p>
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
                <p className="text-teal-500/80 text-sm mt-2 text-center">창의적 사고력 향상</p>
              </div>
            </Link>
            <Link href="/program/med-school-care" className="block">
              <div className="rounded-xl p-8 flex flex-col items-center justify-center h-48 bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 hover:shadow-md transition-all hover:translate-y-[-2px] group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-rose-500 transition-all duration-300 group-hover:w-full group-hover:opacity-10"></div>
                <Award className="h-10 w-10 text-rose-500 mb-4 group-hover:text-rose-600 transition-colors" />
                <span className="text-rose-600 font-bold text-xl text-center group-hover:text-rose-700 transition-colors">
                  의대입시
                  <br />
                  토탈케어
                </span>
                <p className="text-rose-500/80 text-sm mt-2 text-center">의대 합격을 위한 종합 관리</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 통계 및 성과 섹션 */}
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.png')] bg-repeat"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">캠프 성과</h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              전1공 캠프의 체계적인 프로그램을 통해 많은 학생들이 꿈을 이루었습니다.
            </p>
          </div>

          {/* 새로운 슬로건 추가 */}
          <div className="text-center mb-10">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <p className="text-white font-medium">
                "전교1등 공부습관캠프, <span className="text-yellow-300 font-bold">결과로 증명</span>합니다"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-4xl font-bold text-center text-yellow-300 mb-2">98%</h3>
              <p className="text-center text-blue-100">학습 만족도</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-4xl font-bold text-center text-yellow-300 mb-2">85%</h3>
              <p className="text-center text-blue-100">성적 향상률</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-4xl font-bold text-center text-yellow-300 mb-2">92%</h3>
              <p className="text-center text-blue-100">목표 대학 합격률</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-4xl font-bold text-center text-yellow-300 mb-2">1,200+</h3>
              <p className="text-center text-blue-100">누적 수료 학생</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA 섹션 */}
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

      {/* 카카오톡 및 인스타그램 링크 */}
      <div className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex justify-center gap-6">
            <Link href="https://pf.kakao.com" target="_blank" rel="noopener noreferrer">
              <div className="p-4 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors shadow-md flex items-center gap-3">
                <Image src="/kakaotalk-icon.png" alt="카카오톡 채널" width={32} height={32} className="rounded-md" />
                <span className="font-medium text-gray-800">카카오톡 채널</span>
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="p-4 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-colors shadow-md flex items-center gap-3">
                <Image src="/instagram-icon.png" alt="인스타그램" width={32} height={32} className="rounded-md" />
                <span className="font-medium text-white">인스타그램</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
