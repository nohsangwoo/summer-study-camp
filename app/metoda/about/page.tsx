import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "위캔캠프 교육멘토단 | 위캔캠프",
  description: "위캔캠프의 우수한 교육멘토단을 소개합니다.",
}

// 멘토 데이터 타입 정의
interface Mentor {
  id: number
  name: string
  university: string
  department: string
  imageUrl: string
}

// 멘토 데이터
const mentors: Mentor[] = [
  {
    id: 1,
    name: "김한아",
    university: "서울대",
    department: "수의학과",
    imageUrl: "/mentors/kimhana.jpg",
  },
  {
    id: 2,
    name: "이동환",
    university: "서울대",
    department: "경제학과",
    imageUrl: "/mentors/leedonghwan.jpg",
  },
  {
    id: 3,
    name: "김채연",
    university: "서울대",
    department: "경영학과",
    imageUrl: "/mentors/kimchaeyeon.jpg",
  },
  {
    id: 4,
    name: "권한희",
    university: "서울대",
    department: "체육교육과",
    imageUrl: "/mentors/kwonhanhee.jpg",
  },
  {
    id: 5,
    name: "박아름",
    university: "서울대",
    department: "경제학과",
    imageUrl: "/mentors/parkarum.jpg",
  },
  {
    id: 6,
    name: "손아영",
    university: "서울대",
    department: "경제학과",
    imageUrl: "/mentors/sonahyoung.jpg",
  },
  {
    id: 7,
    name: "정준환",
    university: "서울대",
    department: "경영학과",
    imageUrl: "/mentors/jungjunhwan.jpg",
  },
  {
    id: 8,
    name: "장효근",
    university: "서울대",
    department: "사회교육과",
    imageUrl: "/mentors/janghyogeun.jpg",
  },
  {
    id: 9,
    name: "정현선",
    university: "서울대",
    department: "자유전공학과",
    imageUrl: "/mentors/junghyunsun.jpg",
  },
  {
    id: 10,
    name: "이재빈",
    university: "서울대",
    department: "경제학과",
    imageUrl: "/mentors/leejaebin.jpg",
  },
  {
    id: 11,
    name: "문경률",
    university: "서울대",
    department: "조경학과",
    imageUrl: "/mentors/moonkyungryul.jpg",
  },
  {
    id: 12,
    name: "조정은",
    university: "서울대",
    department: "미술/영상문화학과",
    imageUrl: "/mentors/chojungeun.jpg",
  },
  {
    id: 13,
    name: "경세민",
    university: "서울대",
    department: "수의학과",
    imageUrl: "/mentors/kyungsemin.jpg",
  },
  {
    id: 14,
    name: "배영원",
    university: "서울대",
    department: "물리학부",
    imageUrl: "/mentors/baeyoungwon.jpg",
  },
  {
    id: 15,
    name: "손지민",
    university: "서울대",
    department: "경영학과",
    imageUrl: "/mentors/sonjimin.jpg",
  },
  {
    id: 16,
    name: "김서연",
    university: "서울대",
    department: "경제학부",
    imageUrl: "/mentors/kimseoyeon.jpg",
  },
  {
    id: 17,
    name: "박종현",
    university: "서울대",
    department: "의학생명과학과",
    imageUrl: "/mentors/parkjonghyun.jpg",
  },
  {
    id: 18,
    name: "장혜원",
    university: "서울대",
    department: "독어교육과",
    imageUrl: "/mentors/janghyewon.jpg",
  },
  {
    id: 19,
    name: "우주현",
    university: "서울대",
    department: "인문대학",
    imageUrl: "/mentors/woojuhyun.jpg",
  },
  {
    id: 20,
    name: "박창국",
    university: "서울대",
    department: "에너지시스템공학과",
    imageUrl: "/mentors/parkchangkook.jpg",
  },
]

export default function MetodaAboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-600 inline-block border-b-4 border-blue-400 pb-2">
          위캔캠프 교육멘토단
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-3 rounded-full overflow-hidden border-4 border-blue-100">
              <Image
                src={mentor.imageUrl || "/placeholder.svg?height=128&width=128&query=person"}
                alt={`${mentor.name} 멘토 프로필`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  // 이미지 로드 실패 시 기본 이미지로 대체
                  const target = e.target as HTMLImageElement
                  target.src = "/diverse-group.png"
                }}
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800">{mentor.name}</h3>
            <p className="text-sm text-blue-600">
              {mentor.university} {mentor.department}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">멘토단 소개</h2>
        <p className="text-gray-700 mb-4">
          위캔캠프 교육멘토단은 서울대를 비롯한 국내 최상위권 대학교 재학생들로 구성되어 있습니다. 각 멘토는 자신의 전공
          분야에서 뛰어난 학업 성취를 이루었으며, 학생들에게 효과적인 학습 방법과 진로 상담을 제공합니다.
        </p>
        <p className="text-gray-700">
          멘토들은 엄격한 선발 과정을 거쳐 선발되었으며, 정기적인 교육과 훈련을 통해 멘토링 역량을 지속적으로 향상시키고
          있습니다. 학생들은 멘토와의 1:1 상담, 그룹 스터디, 진로 워크샵 등 다양한 프로그램을 통해 멘토들의 도움을 받을
          수 있습니다.
        </p>
      </div>
    </div>
  )
}
