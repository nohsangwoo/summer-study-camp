import Image from "next/image"
import { GraduationCap, BookOpen, FileText, Users, Brain } from "lucide-react"

interface MentorProfile {
  id: string
  name: string
  university: string
  role: string
  image: string
  description: string
  achievements?: string[]
}

export default function LineupPage() {
  // 이미지 파일 확장자를 .png에서 .jpg로 변경합니다.
  const coreTeam: MentorProfile[] = [
    {
      id: "kimdongheon",
      name: "김동헌",
      university: "부산대 의예과",
      role: "대표",
      image: "/mentors/kimdongheon.jpg",
      description: "의대생 멘토링 캠프를 제안하고 다양한 프로그램 기획에 주도적인 역할을 담당하고 있습니다.",
      achievements: [
        "부산대학교 의과대학 수석 입학",
        "전국 의대생 학습법 연구 프로젝트 리더",
        "의학교육 혁신 포럼 발표자",
      ],
    },
    {
      id: "yoonseoin",
      name: "윤서인",
      university: "부산대 의예과",
      role: "학습연구팀장",
      image: "/mentors/yoonseoin.jpg",
      description: "효율적인 학습 방법론 연구와 학생 맞춤형 학습 전략 개발을 담당하고 있습니다.",
      achievements: [
        "학습법 연구 논문 공동저자",
        "의대생 학습 효율성 향상 프로그램 개발",
        "학습 멘토링 100회 이상 진행",
      ],
    },
    {
      id: "kimchaerin",
      name: "김채린",
      university: "부산대 의예과",
      role: "콘텐츠개발팀장",
      image: "/mentors/kimchaerin.jpg",
      description: "학생들의 이해를 돕는 학습 콘텐츠 개발 및 교육 자료 제작을 담당하고 있습니다.",
      achievements: [
        "의학 입문 가이드북 집필",
        "온라인 학습 플랫폼 콘텐츠 기획",
        "교육 콘텐츠 디자인 전문가 과정 수료",
      ],
    },
    {
      id: "yoontaehyun",
      name: "윤태현",
      university: "부산대 의예과",
      role: "튜터연구팀장",
      image: "/mentors/yoontaehyun.jpg",
      description: "효과적인 튜터링 방법론 연구 및 멘토 교육 프로그램 개발을 담당하고 있습니다.",
      achievements: ["튜터 교육 프로그램 개발", "멘토-멘티 매칭 시스템 설계", "학습 코칭 전문가 과정 수료"],
    },
    {
      id: "jangserwon",
      name: "장서원",
      university: "부산대 의예과",
      role: "학생관리팀장",
      image: "/mentors/jangserwon.jpg",
      description: "학생들의 학습 진행 상황 모니터링 및 개인별 맞춤 관리 시스템을 운영하고 있습니다.",
      achievements: ["학생 관리 시스템 개발", "학습 진도 추적 프로그램 설계", "학생 상담 전문가 과정 수료"],
    },
  ]

  const partnerMentors: MentorProfile[] = [
    {
      id: "shinjungho",
      name: "신정호",
      university: "서울대 의예과",
      role: "의학 전문 멘토",
      image: "/mentors/shinjungho.jpg",
      description: "서울대 의대에서의 경험을 바탕으로 학생들에게 실질적인 의학 공부 방법을 전수합니다.",
    },
    {
      id: "kangyejin",
      name: "강예진",
      university: "연세대 의예과",
      role: "입시 전략 멘토",
      image: "/mentors/kangyejin.jpg",
      description: "연세대 의대 입시 경험을 바탕으로 효과적인 수시/정시 전략 수립을 지원합니다.",
    },
    {
      id: "kimminyoung",
      name: "김민영",
      university: "한양대 의예과",
      role: "학습 코칭 멘토",
      image: "/mentors/kimminyoung.jpg",
      description: "학생 개개인의 특성에 맞는 맞춤형 학습 코칭 및 진로 상담을 제공합니다.",
    },
  ]

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">연구소 라인업</h1>
        <p className="text-gray-600 max-w-3xl">
          의대생 멘토링 캠프를 이끄는 우수한 멘토들을 소개합니다. 각 분야의 전문성을 갖춘 의대생 멘토들이 여러분의
          학습과 진로를 함께 고민하고 지원합니다.
        </p>
      </div>

      {/* 핵심 팀 소개 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-purple-100 p-2 rounded-full mr-3">
            <GraduationCap className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">핵심 연구팀</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-80 bg-gradient-to-b from-purple-100 to-white">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <Image
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {mentor.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{mentor.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{mentor.university}</p>
                <p className="text-gray-600 mb-4">{mentor.description}</p>

                {mentor.achievements && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">주요 성과</h4>
                    <ul className="space-y-1">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 협력 멘토 소개 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">협력 멘토단</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-72 bg-gradient-to-b from-blue-100 to-white">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <Image
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {mentor.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{mentor.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{mentor.university}</p>
                <p className="text-gray-600">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 연구소 조직도 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <FileText className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">연구소 조직도</h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-purple-600 text-white rounded-lg p-4 text-center w-64 shadow-md">
              <h3 className="font-bold">김동헌 대표</h3>
              <p className="text-sm text-purple-100">부산대 의예과</p>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">윤서인</h3>
                <p className="text-xs text-blue-100">학습연구팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-blue-100 rounded-lg p-3 text-center w-full border border-blue-200">
                <p className="text-sm text-blue-800">학습법 연구</p>
                <p className="text-sm text-blue-800">학습 전략 개발</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-pink-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">김채린</h3>
                <p className="text-xs text-pink-100">콘텐츠개발팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-pink-100 rounded-lg p-3 text-center w-full border border-pink-200">
                <p className="text-sm text-pink-800">교육 자료 제작</p>
                <p className="text-sm text-pink-800">학습 콘텐츠 개발</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-amber-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">윤태현</h3>
                <p className="text-xs text-amber-100">튜터연구팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-amber-100 rounded-lg p-3 text-center w-full border border-amber-200">
                <p className="text-sm text-amber-800">튜터링 방법론</p>
                <p className="text-sm text-amber-800">멘토 교육 프로그램</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">장서원</h3>
                <p className="text-xs text-green-100">학생관리팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-green-100 rounded-lg p-3 text-center w-full border border-green-200">
                <p className="text-sm text-green-800">학습 진행 모니터링</p>
                <p className="text-sm text-green-800">맞춤형 관리 시스템</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 연구소 특징 */}
      <div>
        <div className="flex items-center mb-8">
          <div className="bg-indigo-100 p-2 rounded-full mr-3">
            <Brain className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">연구소 특징</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <BookOpen className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">전문성</h3>
            </div>
            <p className="text-gray-600">
              모든 멘토는 국내 최상위권 의과대학 재학생으로 구성되어 있으며, 각자의 전문 분야에서 깊이 있는 지식과
              경험을 보유하고 있습니다. 학생들에게 실질적이고 효과적인 학습 방법과 전략을 제공합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <Users className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">맞춤형 교육</h3>
            </div>
            <p className="text-gray-600">
              학생 개개인의 학습 스타일, 강점, 약점을 분석하여 맞춤형 학습 계획을 수립합니다. 일방적인 지식 전달이 아닌,
              학생의 특성에 맞는 개인화된 교육을 제공합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <FileText className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">체계적인 관리</h3>
            </div>
            <p className="text-gray-600">
              학생의 학습 진행 상황을 실시간으로 모니터링하고 피드백을 제공합니다. 정기적인 평가와 상담을 통해 학습 목표
              달성을 위한 지속적인 지원을 제공합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-full mr-3">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">지속적인 연구</h3>
            </div>
            <p className="text-gray-600">
              최신 교육 트렌드와 학습 방법론을 지속적으로 연구하여 프로그램을 개선합니다. 학생들의 피드백을 적극
              반영하여 더 나은 교육 서비스를 제공하기 위해 노력합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
