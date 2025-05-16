import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MentorsPage() {
  const mentors = [
    {
      id: 'kimdongheon',
      name: '김동헌',
      university: '부산대의대',
      position: '총괄 및 콘텐츠 개발팀장',
      image: '/mentors/kimdongheon.webp',
      motto: '습관이 실력을 만들고, 실력이 미래를 바꿉니다.',
      description: [
        '콘텐츠개발팀에서는 단순한 공부법 전달이 아닌, 학생 개개인의 학습 성향을 분석하고, 입시 경쟁력을 갖춘 실전형 공부습관을 설계하는 것이 핵심입니다.',
        '입시전문가 그룹인 전략담당교수들과 함께 이 모든 과정을 기획하고 총관하고 있습니다.',
      ],
    },
    {
      id: 'jangseo-won',
      name: '장서원',
      university: '부산대의대',
      position: '학습연구팀장',
      image: '/mentors/jangserwon.webp',
      motto:
        '혼자 하는 공부가 막막할 때, 가장 먼저 떠올리는 사람. 전일공 멘토는 단순한 도우미가 아닌, 습관을 바꾸는 동행자입니다.',
      description: [
        '전일공 학습연구팀은 저희 20명의 멘토들이 단순한 멘토링을 넘어, 학생 개인의 고민과 상황에 깊이 공감하고 실질적인 변화를 이끌어낼 수 있도록 4년간의 교육봉사그룹에서의 학습 노하우를 체계적으로 연구하여 멘토들에게 전수하는 역할을 합니다.',
        '[학습연구팀의 주요 역할]',
        '- 의대생 멘토 대상 학습법·멘토링 연수 운영',
        '- 참가자 맞춤형 학습 전략 제공을 위한 사례 기반 트레이닝',
        '- 1:1 질의응답 및 개별 피드백 대응 시나리오 개발',
        '- 그룹 스터디 및 메타인지 코칭 방법 설계',
        '- 전일공 시그니처 프로그램(습관관리/과목별집중특강등) 실전 적용 훈련',
      ],
    },
    {
      id: 'yoontaehyun',
      name: '윤태현',
      university: '부산대의대',
      position: '인사관리팀장',
      image: '/mentors/yoontaehyun.webp',
      motto: '관리란 통제가 아닌 돌봄입니다. 전일공의 모든 사람을 끝까지 챙기는 팀, 인사관리팀입니다.',
      description: [
        '전일공 캠프의 인사관리팀은 멘토와 멘티 모두가 캠프 안에서 최상의 콘디션과 집중력을 유지할 수 있도록 운영 전반에서 사람을 세심하게 관리하고 지원하는 현장 중심의 핵심 부서입니다.',
        '특히 군장교/공교육 교사 출신 안전실을 필두로 안전을 최우선으로 단순한 행정이 아닌, 관계를 관리하고, 문제를 예방하며, 캠프의 흐름을 안전하게 유지하는 역할을 담당합니다.',
      ],
    },
    {
      id: 'leesangmin',
      name: '이상민',
      university: '부산대의대',
      position: '전략분석팀장',
      image: '/mentors/leesangmin.jpg',
      motto: '공부법 이전에 습관과 전략이 있어야 합니다. 전일공의 시작은, 데이터 기반 입시 분석입니다.',
      description: [
        '전일공 전략분석팀은 전략담당교수와 함께 단순한 학습 코칭을 넘어 학생 한 명 한 명이 어떤 방향으로 공부해야 성과를 낼 수 있는지를 정확하게 진단하고, 구체적인 전략을 설계하는 팀입니다.',
        '입시제도는 매년 바뀌고, 학생의 상황도 모두 다릅니다. 그렇기에 필요한 건 일반적인 공부법이 아니라, "나에게 맞는 전략"과 "타이밍"입니다.',
      ],
    }
  ]

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">멘토 소개</h1>
          <div className="text-lg text-gray-600 max-w-3xl mx-auto space-y-3">
            <p>
              <span className="font-medium">전교1등공부습관캠프의 멘토들</span>
              은 인성, 강의력이 검증된 의대생들로만 구성되어있는 교육봉사그룹
              메디쌤 소속 의대생들입니다.
            </p>
            <p>
              지역에서 느끼던 교육격차를 몸소 이겨내었던 경험과 노하우를
              바탕으로 우리 지역 학생들의 학습을 지원합니다.
            </p>
          </div>
        </div>

        <div className="space-y-12 mt-8">
          {mentors.map(mentor => (
            <div
              key={mentor.id}
              className="flex flex-col md:flex-row gap-6 border-b pb-8"
            >
              <div className="w-full md:w-64 shrink-0">
                <div className="bg-gray-200 rounded-md p-4">
                  <Image
                    src={mentor.image || '/placeholder.svg'}
                    alt={mentor.name}
                    width={240}
                    height={300}
                    className="w-full h-auto rounded-md"
                  />
                  <div className="mt-3 text-center">
                    <p className="text-gray-700">{mentor.university}</p>
                    <p className="font-semibold text-lg">{mentor.name}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">
                  <span className="text-purple-600 mr-2">▶</span>
                  {mentor.name} {mentor.university}-{mentor.position}
                </h3>

                {/* 좌우명/모토 표시 */}
                {mentor.motto && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 my-3 rounded">
                    <p className="text-blue-800 font-medium italic">
                      "{mentor.motto}"
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  {mentor.description.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-800">
              멘토와 함께하는 학습 프로그램
            </h2>
            <p className="text-gray-700">
              최상위권 의대생 멘토들과 함께 1:1 맞춤형 학습 지도를 받아보세요.
              개인별 학습 상황에 맞는 전략적 접근으로 목표 달성을 도와드립니다.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/application/form">멘토링 신청하기</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">연구소 라인업 보기</h3>
            <p className="text-gray-600 mb-4">
              썸머 공부습관 캠프의 연구소 조직과 역할에 대해 자세히 알아보세요.
            </p>
            <Button variant="outline" asChild>
              <Link href="/metoda/lineup">자세히 보기</Link>
            </Button>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">멘토링 프로그램 안내</h3>
            <p className="text-gray-600 mb-4">
              다양한 멘토링 프로그램과 학습 지원 서비스에 대해 알아보세요.
            </p>
            <Button variant="outline" asChild>
              <Link href="/program/med-student-care">자세히 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
