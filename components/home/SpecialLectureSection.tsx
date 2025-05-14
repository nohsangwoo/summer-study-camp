'use client'
import { useState } from "react"
import { CheckCircle2, Bookmark, GraduationCap, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

type TabType = "high" | "middle"

interface LectureItem {
  title: string
  description: string
  category: string
}

export const SpecialLectureSection = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState<TabType>("high")

  // 고등학교 특강 데이터
  const highSchoolLectures: LectureItem[] = [
    { category: "국어", title: "고전 운문 읽기의 실전 감각 기르기", description: "운문(고전)" },
    { category: "국어", title: "현대시 기본기 : 유명 작품 톺아보기", description: "운문(현대)" },
    { category: "국어", title: "고전과 현대를 잇는 소설 독해 전략", description: "산문(고전+현대)" },
    { category: "국어", title: "비문학 독해 유형별 집중특강 : 경제편", description: "경제" },
    { category: "국어", title: "비문학 독해 유형별 집중특강 : 법+논리편", description: "법+논리" },
    { category: "영어", title: "영어 킬러유형 정복 : 빈칸", description: "빈칸" },
    { category: "영어", title: "영어 킬러유형 정복 : 순서,삽입", description: "순삽" },
    { category: "영어", title: "수능영어 빈출 어법 총정리", description: "문법" },
    { category: "수학", title: "원방 두려움으로부터 한 방에 해방", description: "원방" },
    { category: "수학", title: "합성함수+역함수 뽀개기", description: "합성+역함수" },
    { category: "수학", title: "이차함수 킬러문항 정복 : 수능 출제진처럼 생각하기", description: "이차함수(1)-대칭성, 킬러" },
    { category: "수학", title: "도형 울렁증 극복하기 : 다 알고 있는 것 같지? 아닐걸?^^", description: "도형특강" },
    { category: "수학", title: "교과서 밖 수능 함수 필수 지식 : 대칭성, 구간별로 정의된 함수, 절댓값, 주기 등", description: "함수특강" },
    { category: "수학", title: "당신이 일등급을 받을 경우의 수를 구하시오.", description: "경우의수 심화" },
  ]

  // 중학교 특강 데이터
  const middleSchoolLectures: LectureItem[] = [
    { category: "국어", title: "중학생을 위한 고전시 읽는 법", description: "고전시입문" },
    { category: "국어", title: "문학사 흐름에 따른 대표작품 살펴보기", description: "문학사 흐름" },
    { category: "수학", title: "3시간만에 중학교 도형 마스터하기", description: "도형특강" },
    { category: "수학", title: "3시간만에 중학교 함수 마스터하기", description: "함수특강" },
  ]

  // 특장점 데이터
  const features = [
    "100% 의대생 멘토로 구성",
    "골라들을 수 있는 과목별 집중특강",
    "부울경 유일 공부캠프 – 부울경에서 쉽게 접하기 어려운 프로그램",
    "(고등) 주제탐구활동 진행 : 3차시(9시간)에 걸쳐 세특을 위한 보고서 완성",
    "(중등) 매일 독서 후 독서일지 작성 : 독서활동과 연계하여 주1회 시사토론 진행 (총3권)",
    "(중등) 학생 수준별 영어 수업 진행(15차시)",
    "의대 멘토와 1:1 밀착 과외",
    "매일 저녁 개별 상담 진행",
    "병원 직업탐방",
    "의대생 멘토 자체제작 자료 제공",
    "상위권 학생을 위한 캠프로 더 효율적인 교육 운영이 가능",
  ]

  const activeLectures = activeTab === "high" ? highSchoolLectures : middleSchoolLectures

  return (
    <div className={cn("py-16 bg-gradient-to-r from-blue-50 to-indigo-50", className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">특별 집중 특강</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            전교1등 의대생 멘토들이 직접 준비한 과목별 집중 특강으로 취약점을 극복하고 학습 능력을 향상시키세요.
          </p>
        </div>

        {/* 새로운 슬로건 추가 */}
        <div className="text-center mb-10">
          <div className="inline-block bg-white px-6 py-3 rounded-lg border-b-4 border-blue-400 shadow-md">
            <p className="text-gray-800 font-medium">
              "특별 집중 특강으로 <span className="text-blue-600 font-bold">취약 과목</span>을 잡고{" "}
              <span className="text-blue-600 font-bold">성적 향상</span>의 기회를 잡으세요"
            </p>
          </div>
        </div>

        {/* 탭 */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <button
              onClick={() => setActiveTab("high")}
              className={`px-8 py-3 text-lg font-medium ${
                activeTab === "high"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <GraduationCap className="inline-block mr-2 h-5 w-5" />
              고등학교 (14개)
            </button>
            <button
              onClick={() => setActiveTab("middle")}
              className={`px-8 py-3 text-lg font-medium ${
                activeTab === "middle"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <BookOpen className="inline-block mr-2 h-5 w-5" />
              중학교 (4개)
            </button>
          </div>
        </div>

        {/* 특강 목록 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activeLectures.map((lecture, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all hover:shadow-lg hover:border-blue-200"
            >
              <div className="flex items-start mb-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-2 ${
                    lecture.category === "국어"
                      ? "bg-rose-100 text-rose-800"
                      : lecture.category === "영어"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {lecture.category}
                </span>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                  {lecture.description}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{lecture.title}</h3>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                <span className="text-blue-600 text-sm font-medium flex items-center">
                  <Bookmark className="h-4 w-4 mr-1" />
                  멘토 특별 제작 자료 제공
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 캠프 특장점 */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-10">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">캠프 특장점</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 