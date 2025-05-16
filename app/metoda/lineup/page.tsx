import Image from 'next/image'
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Brain,
  UserCog,
  HeartHandshake,
} from 'lucide-react'

interface MentorProfile {
  id: string
  name: string
  university: string
  role: string
  image: string
  description: string
  motto?: string
  achievements?: string[]
}

export default function LineupPage() {
  // 이미지 파일 확장자를 .png에서 .jpg로 변경합니다.
  const coreTeam: MentorProfile[] = [
    {
      id: 'kimdongheon',
      name: '김동헌',
      university: '부산대 의학과',
      role: '대표 겸 연구소장',
      image: '/mentors/kimdongheon.jpg',
      description:
        '의대생 멘토링 캠프를 제안하고 다양한 프로그램 기획에 주도적인 역할을 담당하고 있습니다.',
      achievements: [
        '부산대학교 의과대학 수석 입학',
        '전국 의대생 학습법 연구 프로젝트 리더',
        '의학교육 혁신 포럼 발표자',
      ],
    },
  ]

  const contentTeam: MentorProfile[] = [
    {
      id: 'kimdongheon',
      name: '김동헌',
      university: '부산대 의학과',
      role: '컨텐츠개발팀장',
      image: '/mentors/kimdongheon.jpg',
      description:
        '효율적인 학습 방법론 연구와 학생 맞춤형 학습 전략 개발을 담당하고 있습니다.',
      achievements: [
        '부산대학교 의과대학 수석 입학',
        '전국 의대생 학습법 연구 프로젝트 리더',
        '의학교육 혁신 포럼 발표자',
      ],
    },
  ]

  const learningTeam: MentorProfile[] = [
    {
      id: 'jangseo-won',
      name: '장서원',
      university: '부산대 의학과',
      role: '학습연구팀장',
      image: '/mentors/jangseo-won.jpg',
      motto:
        '혼자 하는 공부가 막막할 때, 가장 먼저 떠올리는 사람. 전일공 멘토는 단순한 도우미가 아닌, 습관을 바꾸는 동행자입니다.',
      description:
        '멘토들의 실전 경험을 토대로 성적이 아닌 학습 습관과 동기부여에 초점을 맞춥니다.',
      achievements: [
        '연구팀장으로서 직접 개발한 멘토링 프로그램으로 20명 멘토들 교육',
        '4년간의 멘토링 경험을 바탕으로 학생 맞춤형 학습전략 구축',
        '단순 주입이 아닌 학생이 스스로 성장하는 자기주도 학습 시스템 설계',
      ],
    },
  ]

  const personalManagementTeam: MentorProfile[] = [
    {
      id: 'yoontaehyun',
      name: '윤태현',
      university: '부산대 의학과',
      role: '멘토관리팀장',
      image: '/mentors/yoontaehyun.jpg',
      description:
        '효과적인 튜터링 방법론 연구 및 멘토 교육 프로그램 개발을 담당하고 있습니다.',
      achievements: [
        '튜터 교육 프로그램 개발',
        '멘토-멘티 매칭 시스템 설계',
        '학습 코칭 전문가 과정 수료',
      ],
    },
  ]

  const strategyAnalysisTeam: MentorProfile[] = [
    {
      id: 'leesangmin',
      name: '이상민',
      university: '부산대 의학과',
      role: '전략분석팀장',
      image: '/mentors/leesangmin.jpg',
      description: '데이터 기반 입시 분석을 위한 전략분석팀을 운영합니다.',
      achievements: [
        '데이터 기반 입시 분석을 위한 전략분석팀을 운영합니다.',
        '데이터 기반 입시 분석을 위한 전략분석팀을 운영합니다.',
        '데이터 기반 입시 분석을 위한 전략분석팀을 운영합니다.',
      ],
    },
  ]

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">연구소 라인업</h1>
        <p className="text-gray-600 max-w-3xl">
          의대생 멘토링 캠프를 이끄는 우수한 멘토들을 소개합니다. 각 분야의
          전문성을 갖춘 의대생 멘토들이 여러분의 학습과 진로를 함께 고민하고
          지원합니다.
        </p>
      </div>

      {/* 연구소장 소개 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-red-100 p-2 rounded-full mr-3">
            <GraduationCap className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">연구소장</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-80 md:w-1/3 bg-gradient-to-b from-red-100 to-white">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <Image
                  src={coreTeam[0].image || '/placeholder.svg'}
                  alt={coreTeam[0].name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {coreTeam[0].role}
                </div>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {coreTeam[0].name}
                </h3>
                <p className="text-red-600 font-medium mb-4">
                  {coreTeam[0].university}
                </p>
                <p className="text-gray-600 mb-4">{coreTeam[0].description}</p>

                {coreTeam[0].achievements && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      주요 성과
                    </h4>
                    <ul className="space-y-1">
                      {coreTeam[0].achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="text-red-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 컨텐츠제작팀 소개 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-teal-100 p-2 rounded-full mr-3">
            <HeartHandshake className="h-6 w-6 text-teal-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">컨텐츠제작팀</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentTeam.map(member => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-72 bg-gradient-to-b from-teal-100 to-white">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {member.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  {member.university}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 학습연구팀 소개 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-purple-100 p-2 rounded-full mr-3">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">학습연구팀</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTeam.map(mentor => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 "
            >
              <div className="relative h-72 bg-gradient-to-b from-purple-100 to-white">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <Image
                  src={mentor.image || '/placeholder.svg'}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {mentor.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-purple-600 font-medium mb-4">
                  {mentor.university}
                </p>
                <p className="text-gray-600 mb-4">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 멘토관리팀 소개 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <UserCog className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">인사관리팀</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalManagementTeam.map(mentor => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-72 bg-gradient-to-b from-blue-100 to-white">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <Image
                  src={mentor.image || '/placeholder.svg'}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {mentor.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {mentor.university}
                </p>
                <p className="text-gray-600">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 전략분석팀 소개 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-green-100 p-2 rounded-full mr-3">
            <UserCog className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">전략분석팀</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategyAnalysisTeam.map(mentor => (
            <div
              key={mentor.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-72 bg-gradient-to-b from-green-100 to-white">
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10"></div>
                <Image
                  src={mentor.image || '/placeholder.svg'}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {mentor.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {mentor.name}
                </h3>
                <p className="text-green-600 font-medium mb-4">
                  {mentor.university}
                </p>
                <p className="text-gray-600">{mentor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 연구소 조직도 */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="bg-amber-100 p-2 rounded-full mr-3">
            <FileText className="h-6 w-6 text-amber-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">연구소 조직도</h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <div className="flex flex-col items-center mb-10">
            <div className="bg-red-600 text-white rounded-lg p-4 text-center w-64 shadow-md">
              <h3 className="font-bold">김동헌 연구소장</h3>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="flex flex-col items-center">
              <div className="bg-purple-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">김동헌</h3>
                <p className="text-xs text-purple-100">콘텐츠개발팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-purple-100 rounded-lg p-3 text-center w-full border border-purple-200">
                <p className="text-sm text-purple-800">실전형 공부습관 설계</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">장서원</h3>
                <p className="text-xs text-blue-100">학습연구팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-blue-100 rounded-lg p-3 text-center w-full border border-blue-200">
                <p className="text-sm text-blue-800">
                  학습법 개발 및 멘토 연수
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-teal-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">윤태현</h3>
                <p className="text-xs text-teal-100">인사관리팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-teal-100 rounded-lg p-3 text-center w-full border border-teal-200">
                <p className="text-sm text-teal-800">
                  멘토선발, 안전관리, 관계관리
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white rounded-lg p-3 text-center w-full shadow-md">
                <h3 className="font-bold">이상민</h3>
                <p className="text-xs text-green-100">전략분석팀장</p>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="bg-green-100 rounded-lg p-3 text-center w-full border border-green-200">
                <p className="text-sm text-green-800">
                  개인 데이터 기반 입시 분석 및 전략 설계
                </p>
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
              모든 멘토는 국내 최상위권 의과대학 재학생으로 구성되어 있으며,
              각자의 전문 분야에서 깊이 있는 지식과 경험을 보유하고 있습니다.
              학생들에게 실질적이고 효과적인 학습 방법과 전략을 제공합니다.
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
              학생 개개인의 학습 스타일, 강점, 약점을 분석하여 맞춤형 학습
              계획을 수립합니다. 일방적인 지식 전달이 아닌, 학생의 특성에 맞는
              개인화된 교육을 제공합니다.
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
              학생의 학습 진행 상황을 실시간으로 모니터링하고 피드백을
              제공합니다. 정기적인 평가와 상담을 통해 학습 목표 달성을 위한
              지속적인 지원을 제공합니다.
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
              최신 교육 트렌드와 학습 방법론을 지속적으로 연구하여 프로그램을
              개선합니다. 학생들의 피드백을 적극 반영하여 더 나은 교육 서비스를
              제공하기 위해 노력합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
