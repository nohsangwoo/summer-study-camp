import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Star, Award, TrendingUp, Sparkles, Users } from "lucide-react"

export default function StrategyTeachersPage() {
  const teachers = [
    {
      id: 1,
      name: "김민영 선생님",
      role: "수학 전략담임",
      image: "/mentors/kimminyoung.jpg",
      university: "서울대학교 수학교육과",
      description:
        "10년 이상의 수학 교육 경력을 바탕으로 학생들의 수학적 사고력을 향상시키는 데 중점을 둡니다. 개념 이해부터 문제 해결까지 체계적인 지도를 제공합니다.",
    },
    {
      id: 2,
      name: "이지원 선생님",
      role: "국어 전략담임",
      image: "/asian-female-teacher-portrait.png",
      university: "고려대학교 국어국문학과",
      description:
        "문학과 비문학 모두에 정통한 국어 전문가로, 학생들의 독해력과 사고력 향상에 탁월한 지도력을 발휘합니다.",
    },
    {
      id: 3,
      name: "박준서 선생님",
      role: "영어 전략담임",
      image: "/asian-male-teacher-portrait.png",
      university: "연세대학교 영어영문학과",
      description:
        "영어 독해와 문법에 특화된 지도로 학생들의 영어 실력을 단기간에 향상시키는 전략적 학습법을 제공합니다.",
    },
    {
      id: 4,
      name: "최서연 선생님",
      role: "과학 전략담임",
      image: "/placeholder.svg?key=i86t1",
      university: "서울대학교 화학과",
      description: "물리, 화학, 생물 등 과학 전 영역에 걸친 체계적인 지도로 이과 학생들의 성적 향상을 이끌어냅니다.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">전략담임 소개</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          위캔캠프의 전략담임은 각 과목별 전문성을 갖춘 우수한 교육자들로 구성되어 있습니다. 학생 개개인의 특성과 목표에
          맞는 맞춤형 교육을 제공하여 최상의 결과를 이끌어냅니다.
        </p>
      </div>

      {/* 대형 슬로건 배너 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          "전교1등 공부습관캠프, <span className="text-yellow-300">전략담임</span>과 함께 성적 향상의 길을 열다"
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
        <p className="text-gray-600 mb-6">위캔캠프 전략담임이 어떤 역할을 수행하는지 자세히 알아보세요.</p>
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
          위캔캠프의 전략담임들은 학생 개개인의 특성과 목표에 맞는 맞춤형 교육을 제공합니다. 지금 바로 상담을 신청하고
          최상의 교육 서비스를 경험해보세요.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/application/form">입학 상담 신청하기</Link>
        </Button>
      </div>
    </div>
  )
}
