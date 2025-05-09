import Link from "next/link"
import { ArrowLeft, Calendar, Eye, Pin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// 공지사항 상세 데이터 타입
interface NoticeDetail {
  id: number
  title: string
  category: "공지" | "이벤트" | "안내" | "모집"
  date: string
  isPinned: boolean
  views: number
  content: string
  attachments?: { name: string; size: string }[]
}

// 공지사항 상세 데이터 (실제로는 DB에서 가져올 것)
const noticeDetails: Record<number, NoticeDetail> = {
  10: {
    id: 10,
    title: "2025년 썸머 공부습관 캠프 조기 신청 할인 안내",
    category: "공지",
    date: "2025-04-15",
    isPinned: true,
    views: 342,
    content: `
      <h2>2025년 썸머 공부습관 캠프 조기 신청 할인 안내</h2>
      
      <p>안녕하세요, 썸머 공부습관 캠프입니다.</p>
      
      <p>2025년 썸머 공부습관 캠프의 조기 신청 할인 혜택을 안내해 드립니다.</p>
      
      <h3>조기 신청 할인 혜택</h3>
      <ul>
        <li>A코스(4주): 정가 3,800,000원 → <strong>할인가 3,500,000원</strong></li>
        <li>B코스(3주): 정가 3,000,000원 → <strong>할인가 2,780,000원</strong></li>
      </ul>
      
      <p>조기 신청 할인은 <strong>2025년 5월 31일까지</strong> 신청 및 예약금을 납부하신 분들에게 적용됩니다.</p>
      
      <h3>신청 방법</h3>
      <ol>
        <li>홈페이지 캠프 신청 페이지에서 신청서 작성</li>
        <li>예약금 100만원 납부</li>
        <li>담당자 확인 후 신청 완료 안내 연락</li>
      </ol>
      
      <p>많은 관심과 신청 부탁드립니다.</p>
      
      <p>감사합니다.</p>
    `,
    attachments: [
      { name: "2025_썸머캠프_안내문.pdf", size: "2.4MB" },
      { name: "2025_썸머캠프_신청서.docx", size: "1.1MB" },
    ],
  },
  9: {
    id: 9,
    title: "2024년 겨울방학 캠프 수료생 대학 합격 소식",
    category: "안내",
    date: "2025-03-20",
    isPinned: true,
    views: 287,
    content: `
      <h2>2024년 겨울방학 캠프 수료생 대학 합격 소식</h2>
      
      <p>안녕하세요, 썸머 공부습관 캠프입니다.</p>
      
      <p>2024년 겨울방학 캠프에 참여했던 수료생들의 대학 합격 소식을 전해드립니다.</p>
      
      <h3>주요 합격 대학</h3>
      <ul>
        <li>서울대학교 의과대학: 3명</li>
        <li>연세대학교 의과대학: 5명</li>
        <li>고려대학교 의과대학: 4명</li>
        <li>성균관대학교 의과대학: 6명</li>
        <li>기타 의과대학: 12명</li>
      </ul>
      
      <p>총 30명의 수료생 중 25명이 의과대학에 합격하는 쾌거를 이루었습니다.</p>
      
      <p>모든 합격생들에게 축하의 말씀을 전하며, 앞으로의 학업과 진로에도 큰 성공이 있기를 기원합니다.</p>
      
      <p>썸머 공부습관 캠프는 앞으로도 학생들의 꿈을 실현시키기 위해 최선을 다하겠습니다.</p>
      
      <p>감사합니다.</p>
    `,
  },
}

// 공지사항 상세 페이지 컴포넌트
export default function NoticeDetailPage({ params }: { params: { id: string } }) {
  const noticeId = Number.parseInt(params.id)
  const notice = noticeDetails[noticeId]

  // 카테고리별 배지 색상
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "공지":
        return "bg-blue-500"
      case "이벤트":
        return "bg-purple-500"
      case "안내":
        return "bg-green-500"
      case "모집":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  // 공지사항이 없는 경우
  if (!notice) {
    return (
      <div className="container py-10 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">존재하지 않는 공지사항입니다.</h1>
          <Link href="/notice">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              공지사항 목록으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10 max-w-4xl">
      {/* 상단 네비게이션 */}
      <div className="mb-6">
        <Link href="/notice">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            공지사항 목록으로 돌아가기
          </Button>
        </Link>
      </div>

      {/* 공지사항 상세 내용 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* 제목 영역 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={getCategoryColor(notice.category)}>{notice.category}</Badge>
            {notice.isPinned && (
              <Badge variant="outline" className="text-red-500 border-red-200">
                <Pin className="h-3 w-3 mr-1" />
                중요
              </Badge>
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{notice.title}</h1>
          <div className="flex flex-wrap gap-4 mt-4 text-gray-500 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {notice.date}
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              조회수 {notice.views}
            </div>
          </div>
        </div>

        {/* 본문 영역 */}
        <div className="p-6 border-b border-gray-200">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: notice.content }} />
        </div>

        {/* 첨부파일 영역 */}
        {notice.attachments && notice.attachments.length > 0 && (
          <div className="p-6 bg-gray-50">
            <h3 className="font-medium text-gray-700 mb-3">첨부파일</h3>
            <div className="space-y-2">
              {notice.attachments.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-white rounded border border-gray-200 hover:bg-blue-50 transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="flex-1 font-medium text-blue-600">{file.name}</span>
                  <span className="text-sm text-gray-500">{file.size}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 이전글/다음글 네비게이션 */}
      <div className="mt-8 space-y-2">
        <Link href={`/notice/${notice.id + 1}`} className={notice.id >= 10 ? "pointer-events-none opacity-50" : ""}>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-2">다음글</span>
              <span className="text-gray-600">
                {notice.id < 10 ? "2025년 썸머 공부습관 캠프 조기 신청 할인 안내" : "다음글이 없습니다."}
              </span>
            </div>
          </div>
        </Link>
        <Link href={`/notice/${notice.id - 1}`} className={notice.id <= 1 ? "pointer-events-none opacity-50" : ""}>
          <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <div className="flex items-center">
              <span className="font-medium text-gray-700 mr-2">이전글</span>
              <span className="text-gray-600">
                {notice.id > 1 ? "2024년 겨울방학 캠프 수료생 대학 합격 소식" : "이전글이 없습니다."}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
