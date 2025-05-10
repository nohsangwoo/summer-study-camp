import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Star, Award, BookOpen } from "lucide-react"

interface MentorProfile {
  id: string
  name: string
  university: string
  position: string
  image: string
  description: string[]
  shortDescription?: string
}

export default function MentorsPage() {
  const mentors: MentorProfile[] = [
    {
      id: "kimtaeyoon",
      name: "김태윤",
      university: "중앙대 의예과",
      position: "콘텐츠연구실장",
      image: "/mentors/kimdongheon.jpg", // 기존 이미지 재사용
      shortDescription: "의대생들의 학습 콘텐츠 개발 및 연구를 담당합니다.",
      description: [
        "콘텐츠 연구실에서는 문제를 보는 시각이 나무라도 중요하다고 생각합니다.",
        "따라서 기출과 실모 등의 문제에 대한 메디컬 팀을 작성합니다.",
        "메디컬팀은 의대생들이 지침 면저문제를 풀어보고, 문제를 접근하는 포인트와 정답을 찾아가는 최상위권 시각을 정리한 것입니다.",
        "또한 의대생의 시각에서 선구문한 출제와 문항선별등에도 참여해서 수험생의 입장에서 고민해야하는 문항, 지문 등에 대한 노하우를 의대학 학생들과 함께 하겠습니다.",
      ],
    },
    {
      id: "shinjungho",
      name: "신정호",
      university: "서울대 의예",
      position: "튜터연구실장",
      image: "/mentors/shinjungho.jpg",
      shortDescription: "1:1 맞춤형 튜터링 시스템을 연구하고 개발합니다.",
      description: [
        "튜터 연구실에서는 저희가 1년간 공부하면서 터득한 성공 노하우를 개인별 상황에 맞게 공유하고, 함께 고민하는 역할을 하는 팀입니다.",
        "학생들과 1:1질의응답, 학습멘토링, 그룹스터디 코칭 등 의대학격생들이",
        "학생들과 열공을 맞대고 고민을 함께 풀어주는 든든한 도우미가 될거에요.",
      ],
    },
    {
      id: "kangyejin",
      name: "강예진",
      university: "연세대 의예",
      position: "강좌연구실장",
      image: "/mentors/kangyejin.jpg",
      shortDescription: "효과적인 강의 커리큘럼을 연구하고 개발합니다.",
      description: [
        "강좌연구실에서는 의대관에서 진행하는 연간 수업과 콘텐츠 커리큘럼을 기획하고,",
        "수업하시는 선생님과 함께 1년간 학습과정을 진행합니다.",
        "저희가 기획한 족시숙제, 문시문제, 수능파지철 등 의대관에서만 할 수 있는 프로그램들을 준비했습니다.",
        "특히 족시숙제와 문시문제 수업은 최상위권 의대도전 학생들에게 꼭 필요한 수업이라고 생각합니다.",
        "족시숙제는 '족적으로 시험보고, 족적으로 해제한다'는 뜻입니다. 이름도 저희 의대연구소에 만든거구요.",
        "족시숙제라는 문제를 여유롭게 풀어내는 사추적인 풀이가 아니라 마치 시험을 보는 듯이 수업시간에 속에서 풀어내는 프로그램입니다.",
        "순간순간 떠오르는 풀이의 이유나 문제 속 함정에 빠지지 않고 빠졌다 해도 빠르게 출제 단원으로 돌아가는 판단 등을",
        "생생하게 보여줄 수 있습니다 문시문제는 '문제를 보는 시각이 문제를 해결하는 힘이다' 라는 뜻입니다.",
        "이거 또한 저희 수업연구실에서 기획한거구요 또한 문시문제는 기출문제는 물론 계속해서 나오는",
        "실모에 의대생의 관점으로 본 생생한 풀이와 팁을 바탕으로 진행되는 수업입니다.",
      ],
    },
    {
      id: "kimchaerin",
      name: "김채린",
      university: "부산대 의예과",
      position: "학습관리실장",
      image: "/mentors/kimchaerin.jpg",
      shortDescription: "학생들의 학습 진도와 성취도를 체계적으로 관리합니다.",
      description: [
        "학습관리실에서는 학생들의 학습 진행 상황을 실시간으로 모니터링하고 개인별 맞춤 피드백을 제공합니다.",
        "정기적인 학습 점검과 상담을 통해 학생들이 목표를 향해 꾸준히 나아갈 수 있도록 지원합니다.",
        "특히 취약 과목 분석과 보완 전략 수립에 중점을 두어 균형 잡힌 학습이 이루어질 수 있도록 합니다.",
        "학생 개개인의 학습 스타일과 페이스를 존중하면서도 최적의 학습 효율을 달성할 수 있는 방법을 함께 찾아갑니다.",
      ],
    },
    {
      id: "yoontaehyun",
      name: "윤태현",
      university: "부산대 의예과",
      position: "입시전략실장",
      image: "/mentors/yoontaehyun.jpg",
      shortDescription: "최신 의대 입시 전략과 정보를 연구하고 제공합니다.",
      description: [
        "입시전략실에서는 매년 변화하는 의대 입시 트렌드를 분석하고 최적의 전략을 수립합니다.",
        "수시와 정시의 균형, 학생부 관리, 자기소개서 작성 등 입시의 모든 측면에서 전문적인 가이드를 제공합니다.",
        "각 대학별 입시 요강과 합격 사례를 철저히 분석하여 학생 개개인에게 가장 적합한 지원 전략을 제시합니다.",
        "단순한 정보 제공을 넘어 학생의 강점을 최대한 살릴 수 있는 맞춤형 입시 로드맵을 함께 설계합니다.",
      ],
    },
    {
      id: "jangserwon",
      name: "장서원",
      university: "부산대 의예과",
      position: "심리상담실장",
      image: "/mentors/jangserwon.jpg",
      shortDescription: "학업 스트레스 관리와 심리적 안정을 지원합니다.",
      description: [
        "심리상담실에서는 입시 준비 과정에서 겪는 스트레스와 불안을 관리하는 방법을 지도합니다.",
        "학업과 정신 건강의 균형을 유지할 수 있는 다양한 기법과 전략을 제공합니다.",
        "정기적인 심리 상담과 그룹 세션을 통해 학생들이 정서적 안정을 찾고 학업에 집중할 수 있도록 돕습니다.",
        "특히 슬럼프와 번아웃 예방에 중점을 두어 장기적인 학습 동기와 의지를 유지할 수 있도록 지원합니다.",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">위캔캠프 멘토 소개</h1>
        <p className="text-gray-600 max-w-3xl">
          위캔캠프의 멘토들은 모두 국내 최상위권 의과대학 재학생으로 구성되어 있습니다. 각자의 전문 분야에서 학생들에게
          실질적이고 효과적인 학습 방법과 전략을 제공합니다.
        </p>
      </div>

      {/* 대형 슬로건 배너 */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          "전교1등 공부습관캠프, <span className="text-yellow-300">의대생 멘토</span>와 함께하는 성공 경험"
        </h2>
      </div>

      {/* 멘토 상세 프로필 */}
      <div className="space-y-12">
        {mentors.map((mentor, index) => (
          <div key={mentor.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="flex flex-col md:flex-row">
              {/* 멘토 사진 및 기본 정보 */}
              <div className="w-full md:w-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <div className="p-6 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <p className="text-gray-700 font-medium mb-1">{mentor.university}</p>
                    <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
                  </div>
                  <div className="relative h-48 md:h-64 mt-4">
                    <Image
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* 멘토 상세 설명 */}
              <div className="p-6 flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-purple-600 rounded-sm mr-2"></div>
                  <h3 className="text-lg font-bold text-purple-600">
                    {mentor.name} {mentor.university}-{mentor.position}
                  </h3>
                </div>
                <div className="space-y-3">
                  {mentor.description.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 중간 슬로건 */}
      <div className="my-12 bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
        <div className="flex items-center justify-center">
          <Star className="h-8 w-8 text-yellow-500 mr-3" />
          <p className="text-2xl font-bold text-blue-800">
            "전교1등 공부습관캠프, <span className="text-purple-700">최상위권 의대생</span>이 직접 가르칩니다"
          </p>
          <Star className="h-8 w-8 text-yellow-500 ml-3" />
        </div>
      </div>

      {/* 멘토 팀 소개 */}
      <div className="mt-16">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">멘토 팀 구성</h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{mentor.name}</h3>
                    <p className="text-sm text-purple-600 mb-2">{mentor.position}</p>
                    <p className="text-sm text-gray-600">{mentor.shortDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 슬로건 배너 */}
      <div className="mt-12 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <Award className="h-10 w-10 text-yellow-400 mr-4" />
          <p className="text-2xl font-bold">
            "전교1등 공부습관캠프, <span className="text-yellow-400">3주 투자</span>로{" "}
            <span className="text-yellow-400">1년 성적 향상</span>의 효과"
          </p>
        </div>
      </div>

      {/* 멘토링 신청 섹션 */}
      <div className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-8 shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">멘토와 함께하는 1:1 맞춤 학습</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            위캔캠프의 멘토들과 함께 여러분의 학습 목표를 달성해보세요. 각 분야 전문 멘토들이 여러분의 학습을 처음부터
            끝까지 책임지고 지도합니다.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/application/form"
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            멘토링 신청하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* 하단 슬로건 */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center bg-white border-2 border-purple-500 px-8 py-4 rounded-full shadow-md">
          <BookOpen className="h-6 w-6 mr-3 text-purple-600" />
          <p className="text-xl font-bold text-purple-800">
            "전교1등 공부습관캠프, <span className="text-purple-600">공부 방법</span>부터 달라집니다"
          </p>
        </div>
      </div>

      {/* 추가 정보 링크 */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/metoda/lineup"
          className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-purple-300 transition-all duration-300"
        >
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">연구소 라인업 보기</h3>
            <p className="text-gray-600">연구소의 전체 멘토 라인업과 조직도를 확인하세요.</p>
          </div>
          <ChevronRight className="h-6 w-6 text-purple-600" />
        </Link>

        <Link
          href="/program/med-student-care"
          className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-purple-300 transition-all duration-300"
        >
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">멘토링 프로그램 알아보기</h3>
            <p className="text-gray-600">의대생 멘토들과 함께하는 다양한 프로그램을 확인하세요.</p>
          </div>
          <ChevronRight className="h-6 w-6 text-purple-600" />
        </Link>
      </div>
    </div>
  )
}
