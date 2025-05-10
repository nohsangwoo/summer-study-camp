import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MentorsPage() {
  const mentors = [
    {
      id: "kimtaeyoon",
      name: "김태윤",
      university: "중앙대 의예과",
      position: "콘텐츠연구실장",
      image: "/mentors/kimdongheon.jpg",
      description: [
        "콘텐츠 연구실에서는 문제를 보는 시각이 나무라도 중요하다고 생각합니다.",
        "따라서 기출과 실모 등의 문제에 대한 메디컬 팀을 작성합니다.",
        "메디컬팀은 의대생들이 지침 면접문제를 풀어보고, 문제를 접근하는 포인트와 정답을 찾아가는 최상위권 시각을 정리한 것입니다.",
        "또한 의대생의 시각에서 선구문한 출제와 문항선별등에도 참여해서 수험생의 입장에서 고민해야하는 문항, 지문 등에 대한 노하우를 의대권 학생들과 함께 하겠습니다.",
      ],
    },
    {
      id: "shinjungho",
      name: "신정호",
      university: "서울대 의예",
      position: "튜터연구실장",
      image: "/mentors/shinjungho.jpg",
      description: [
        "튜터 연구실에서는 저희가 1년간 공부하면서 터득한 성공 노하우를 개인별 상황에 맞게 공유하고, 함께 고민하는 역할을 하는 팀입니다.",
        "학생들과 1:1질의응답, 학습멘토링, 그룹스터디 코칭 등 의대권격생들이",
        "학생들과 열공을 맺대고 고민을 함께 풀어주는 든든한 도우미가 될거에요.",
      ],
    },
    {
      id: "kangyejin",
      name: "강예진",
      university: "연세대 의예",
      position: "강좌연구실장",
      image: "/mentors/kangyejin.jpg",
      description: [
        "강좌연구실에서는 의대권에서 진행하는 연간 수업과 콘텐츠 커리큘럼을 기획하고,",
        "수업하시는 선생님과 함께 1년간 학습계획을 진행합니다.",
        "저희가 기획한 주시즉해, 문시문해, 수능파지점 등 의대권에서만 할 수 있는 프로그램들을 준비했습니다.",
        "특히 주시즉해와 문시문해 수업은 최상위권 의대도전 학생들에게 꼭 필요한 수업이라고 생각합니다.",
        "주시즉해는 '즉각적으로 시험보고, 즉각적으로 해제한다'는 뜻입니다. 이름도 저희 의대권구소에 만든거구요.",
        "주시즉해라는 문제를 여유롭게 풀어내는 사추적인 풀이가 아니라 마치 시험을 보는 듯이 수업시간에 즉석에서 풀어내는 프로그램입니다.",
        "순간순간 떠오르는 풀이의 이유나 문제 속 함정에 빠지지 않고 빠르고 예도 빠르게 출제 된 방향으로 풀어가는 판단 등을",
        "생생하게 보여줄 수 있습니다 문시문해는 '문제를 보는 시각이 문제를 해결하는 힘이다' 라는 뜻입니다.",
        "이거 또한 저희 수업연구실에서 기획한거구요 또한 문시문해는 기출문제는 물론 계속해서 나오는",
        "실모에 의대생의 관점으로 본 생생한 풀이와 팁을 바탕으로 진행되는 수업입니다.",
      ],
    },
    {
      id: "kimminyoung",
      name: "김민영",
      university: "고려대 의예",
      position: "학습연구실장",
      image: "/mentors/kimminyoung.jpg",
      description: [
        "학습연구실에서는 학생들의 학습 계획과 진도 관리를 담당합니다.",
        "개인별 학습 상황에 맞는 맞춤형 학습 계획을 수립하고,",
        "정기적인 학습 점검과 피드백을 통해 학생들이 목표를 달성할 수 있도록 지원합니다.",
        "특히 의대 입시에 필요한 과목별 학습 전략과 시간 관리 방법을 제시하여",
        "효율적인 학습이 가능하도록 돕습니다.",
      ],
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">멘토 소개</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            썸머 공부습관 캠프의 멘토들은 서울대, 연세대, 고려대 등 최상위권 의대생들로 구성되어 있습니다. 각 멘토는
            자신의 경험과 노하우를 바탕으로 학생들의 학습을 지원합니다.
          </p>
        </div>

        <div className="space-y-12 mt-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="flex flex-col md:flex-row gap-6 border-b pb-8">
              <div className="w-full md:w-64 shrink-0">
                <div className="bg-gray-200 rounded-md p-4">
                  <Image
                    src={mentor.image || "/placeholder.svg"}
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
            <h2 className="text-2xl font-bold text-blue-800">멘토와 함께하는 학습 프로그램</h2>
            <p className="text-gray-700">
              최상위권 의대생 멘토들과 함께 1:1 맞춤형 학습 지도를 받아보세요. 개인별 학습 상황에 맞는 전략적 접근으로
              목표 달성을 도와드립니다.
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
            <p className="text-gray-600 mb-4">썸머 공부습관 캠프의 연구소 조직과 역할에 대해 자세히 알아보세요.</p>
            <Button variant="outline" asChild>
              <Link href="/metoda/lineup">자세히 보기</Link>
            </Button>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">멘토링 프로그램 안내</h3>
            <p className="text-gray-600 mb-4">다양한 멘토링 프로그램과 학습 지원 서비스에 대해 알아보세요.</p>
            <Button variant="outline" asChild>
              <Link href="/program/med-student-care">자세히 보기</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
