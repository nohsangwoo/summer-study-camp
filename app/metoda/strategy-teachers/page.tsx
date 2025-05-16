import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Star, Award, TrendingUp, Sparkles, Users, Quote, GraduationCap } from "lucide-react"

export default function StrategyTeachersPage() {
  const teachers = [
    {
      id: 1,
      name: "박미정 선생님",
      role: "전략담임부장",
      image: "/strategy-teachers/1.webp",
      university: "부산대학교 교육학과",
      description:
        "35년간 진학지도 경험을 바탕으로 학생 개인별 학습 심층분석, 학습설계, 입시전략 수립을 담당하고 있습니다.",
    },
    {
      id: 2,
      name: "우태연 선생님",
      role: "전략담임",
      image: "/strategy-teachers/2.webp",
      university: "경북대학교 사범대학",
      description:
        "35년간 진학지도 경험을 바탕으로 학생들이 학습에 집중할 수 있도록 생활관리를 담당하고 있습니다.",
    },
  ]

  return (
    <div className="space-y-8">
      {/* 전략담임부장 소개 섹션 */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* 전략담임부장 사진 */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-b from-blue-100 to-white p-4">
            <Image
              src="/strategy-teachers/1.webp" 
              alt="박미정 전략담임부장"
              width={300}
              height={400}
              className="mx-auto rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-600/80 text-white p-4 text-center">
              <h3 className="text-lg font-medium">전략담임부장</h3>
              <h2 className="text-xl font-bold">박미정</h2>
            </div>
          </div>
        </div>

        {/* 인사말 내용 */}
        <div className="w-full lg:w-2/3">
          <div className="flex items-start mb-6">
            <Quote className="h-8 w-8 text-blue-500 mr-2 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-800">전략담임부장소개</h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              35년간 입시 현장에서 수많은 학생들의 진로와 성장을 함께하며 제가 확신하게 된 한 가지는,
              <span className="font-semibold text-blue-700">"입시의 본질은 점수가 아니라 '방향과 습관'"</span>이라는 사실입니다.
            </p>

            <p>
              진정한 진학의 시작은 <span className="font-semibold">"왜 공부하는가"</span>에 대한 
              <span className="font-semibold text-blue-700"> 스스로의 답</span>을 찾는 데서 시작됩니다.
            </p>
            
            <p>
              전교1등공부습관캠프 전일공 캠프는 이 질문에 답하게 해주는 살아있는 입시 교육의 장입니다.
              전국의 의대생 멘토들이 학생들과 함께 생활하며 실전적인 공부 루틴과 동기,
              그리고 진로에 대한 진솔한 통찰을 전해주는 이 프로그램은 단순한 학습 캠프가 아닙니다.
            </p>

            <p>
              저는 전일공 캠프의 전략담임부장으로서,
              김동헌 대표를 도와 학생들이 방향을 잃지 않고 지속 가능한 공부습관을 만들어갈 수 있도록
              전체 프로그램을 구조화하고, 학생과 멘토, 학부모 모두를 연결하는 가교 역할을 하겠습니다.
            </p>

            <p>
              이 캠프가 학생들의 진짜 성장을 위한 전환점이 되도록,
              그리고 입시를 넘어 삶의 방향을 세우는 시간으로 남도록 전력을 다하겠습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 학력 및 경력 */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <Award className="h-6 w-6 text-blue-500 mr-2" />
          학력 및 경력
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              학력
            </h4>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>부산대 사범대학 교육학과 졸업</li>
              <li>부산대 교육대학원 교육학 석사(상담심리전공)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              경력
            </h4>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>부산시 소재 중·고등학교 중등교사 35년간 근무</li>
              <li>진로진학상담교사 14년간 근무</li>
              <li>부산교육청 진로교육연구회 회장 역임</li>
              <li>부산교육청 진학지원단 전문위원 역임</li>
              <li>한국대학교육협의회 대입상담교사단 역임</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 우태연 전략담임 학력 및 경력 */}
      <div className="mt-8 mb-12 bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 우태연 전략담임 이미지 */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-b from-yellow-100 to-white p-4">
              <Image
                src="/strategy-teachers/2.webp"
                alt="우태연 전략담임"
                width={220}
                height={300}
                className="mx-auto rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-600 to-yellow-600/80 text-white p-4 text-center">
                <h3 className="text-lg font-medium">전략담임</h3>
                <h2 className="text-xl font-bold">우태연</h2>
              </div>
            </div>
          </div>
          
          {/* 학력 및 경력 정보 */}
          <div className="lg:w-3/4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-500 rounded-full p-2">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">우태연 전략담임 학력 및 경력</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">학력</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>경북대학교 사학과 졸업</li>
                  <li>경북대학교 사학과 대학원 졸업</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4">경력</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>부산진고, 금정고, 분포고 진로진학상담교사</li>
                  <li>덕문여자고등학교 역사 및 진로진학상담교사</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">전략담임 소개</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          전일공의 전략담임은 각 과목별 전문성을 갖춘 우수한 교육자들로 구성되어 있습니다. 학생 개개인의 특성과 목표에
          맞는 맞춤형 교육을 제공하여 최상의 결과를 이끌어냅니다.
        </p>
      </div>

      {/* 대형 슬로건 배너 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-yellow-300">전략담임</span>과 함께하는 성적향상 여정
        </h2>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-100 p-4 flex items-center justify-center">
                <Image
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  width={150}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{teacher.role}</p>
                <p className="text-gray-500 text-sm mb-4">{teacher.university}</p>
                <p className="text-gray-600">{teacher.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 중간 슬로건 1 */}
      <div className="my-12 bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
        <div className="flex items-center justify-center">
          <Star className="h-8 w-8 text-yellow-500 mr-3" />
          <p className="text-2xl font-bold text-blue-800">
            "전교1등 공부습관캠프, <span className="text-blue-600">전략담임</span>의 맞춤형 지도로 성적이 달라집니다"
          </p>
          <Star className="h-8 w-8 text-yellow-500 ml-3" />
        </div>
      </div>

      {/* 중간 슬로건 2 - 통계 강조 */}
      <div className="my-12 bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-6">전교1등 공부습관캠프 학생들의 성적 향상률</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-4xl font-bold text-yellow-400 mb-2">95%</p>
              <p className="text-sm">학생들의 성적 향상률</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-4xl font-bold text-yellow-400 mb-2">3주</p>
              <p className="text-sm">공부습관 형성 기간</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-4xl font-bold text-yellow-400 mb-2">98%</p>
              <p className="text-sm">학부모 만족도</p>
            </div>
          </div>
        </div>
      </div>

      {/* Role Link Section */}
      <div className="bg-blue-50 p-6 rounded-lg text-center mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">전략담임의 역할이 궁금하신가요?</h3>
        <p className="text-gray-600 mb-6">전일공 전략담임이 어떤 역할을 수행하는지 자세히 알아보세요.</p>
        <Button asChild>
          <Link href="/metoda/strategy-teachers-role">전략담임 역할 알아보기</Link>
        </Button>
      </div>

      {/* 중간 슬로건 3 */}
      <div className="my-12 text-center">
        <div className="inline-flex items-center bg-white border-2 border-blue-500 px-8 py-4 rounded-full shadow-md">
          <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
          <p className="text-xl font-bold text-blue-800">
            "전교1등 공부습관캠프, <span className="text-blue-600">공부 방법</span>부터 달라집니다"
          </p>
        </div>
      </div>

      {/* 전략담임 특징 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">전교1등 공부습관캠프 전략담임의 특징</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">최고의 교육 전문가</h4>
                <p className="text-gray-600">
                  SKY 및 명문대 출신의 교육 전문가들로 구성된 전략담임들은 각 과목별 깊이 있는 지식과 풍부한 교육 경험을
                  보유하고 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">맞춤형 학습 지도</h4>
                <p className="text-gray-600">
                  학생 개개인의 학습 스타일과 성향을 분석하여 최적화된 학습 방법과 전략을 제시합니다. 일방적인 강의가
                  아닌 상호작용을 통한 맞춤형 교육을 제공합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">검증된 학습법</h4>
                <p className="text-gray-600">
                  수년간의 연구와 경험을 통해 개발된 전교1등 공부습관캠프만의 독자적인 학습법으로 단기간에 효과적인 성적
                  향상을 이끌어냅니다.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">지속적인 관리</h4>
                <p className="text-gray-600">
                  캠프 기간 동안의 지도뿐만 아니라, 캠프 이후에도 지속적인 학습 관리와 피드백을 제공하여 형성된
                  공부습관이 유지될 수 있도록 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 슬로건 */}
      <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-2xl font-bold">
          "전교1등 공부습관캠프, <span className="text-yellow-300">3주의 투자</span>로{" "}
          <span className="text-yellow-300">평생의 공부습관</span>을 만듭니다"
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">전문적인 전략담임과 함께 성적 향상을 경험하세요</h3>
        <p className="text-gray-600 mb-6">
          전일공의 전략담임들은 학생 개개인의 특성과 목표에 맞는 맞춤형 교육을 제공합니다. 지금 바로 상담을 신청하고
          최상의 교육 서비스를 경험해보세요.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/application/form">입학 상담 신청하기</Link>
        </Button>
      </div>
    </div>
  )
}
