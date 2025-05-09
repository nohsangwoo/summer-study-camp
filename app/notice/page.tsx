"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ChevronLeft, ChevronRight, Pin, Calendar, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// 공지사항 데이터 타입 정의
interface Notice {
  id: number
  title: string
  category: "공지" | "이벤트" | "안내" | "모집"
  date: string
  isPinned: boolean
  views: number
}

export default function NoticePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  // 공지사항 더미 데이터
  const notices: Notice[] = [
    {
      id: 10,
      title: "2025년 썸머 공부습관 캠프 조기 신청 할인 안내",
      category: "공지",
      date: "2025-04-15",
      isPinned: true,
      views: 342,
    },
    {
      id: 9,
      title: "2024년 겨울방학 캠프 수료생 대학 합격 소식",
      category: "안내",
      date: "2025-03-20",
      isPinned: true,
      views: 287,
    },
    {
      id: 8,
      title: "의대생 멘토 추가 모집 안내 (서울대, 연세대 의대 재학생)",
      category: "모집",
      date: "2025-03-15",
      isPinned: false,
      views: 215,
    },
    {
      id: 7,
      title: "2025 썸머 캠프 커리큘럼 업데이트 안내",
      category: "안내",
      date: "2025-03-10",
      isPinned: false,
      views: 198,
    },
    {
      id: 6,
      title: "학부모 설명회 일정 안내 (4월 둘째주 토요일)",
      category: "이벤트",
      date: "2025-03-05",
      isPinned: false,
      views: 176,
    },
    {
      id: 5,
      title: "캠프 시설 리모델링 완료 및 신규 학습 공간 안내",
      category: "안내",
      date: "2025-02-28",
      isPinned: false,
      views: 154,
    },
    {
      id: 4,
      title: "2025년 의대 입시 전략 특강 안내",
      category: "이벤트",
      date: "2025-02-20",
      isPinned: false,
      views: 203,
    },
    {
      id: 3,
      title: "캠프 참가자 준비물 및 유의사항 안내",
      category: "안내",
      date: "2025-02-15",
      isPinned: false,
      views: 167,
    },
    {
      id: 2,
      title: "2025년 썸머 캠프 프로그램 세부 일정 공개",
      category: "공지",
      date: "2025-02-10",
      isPinned: false,
      views: 231,
    },
    {
      id: 1,
      title: "2025년 썸머 공부습관 캠프 신청 접수 시작",
      category: "공지",
      date: "2025-02-01",
      isPinned: false,
      views: 312,
    },
  ]

  // 카테고리 필터링
  const filteredByCategory =
    categoryFilter === "all" ? notices : notices.filter((notice) => notice.category === categoryFilter)

  // 검색어 필터링
  const filteredNotices = filteredByCategory.filter((notice) =>
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // 페이지네이션 설정
  const itemsPerPage = 5
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedNotices = filteredNotices.slice(startIndex, startIndex + itemsPerPage)

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

  return (
    <div className="container py-10 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">공지사항</h1>
        <p className="text-gray-600">썸머 공부습관 캠프의 중요 소식과 안내사항을 확인하실 수 있습니다.</p>
      </div>

      {/* 검색 및 필터 */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="검색어를 입력하세요"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="공지">공지</SelectItem>
            <SelectItem value="이벤트">이벤트</SelectItem>
            <SelectItem value="안내">안내</SelectItem>
            <SelectItem value="모집">모집</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 공지사항 목록 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 border-b border-gray-200 font-medium text-gray-700">
          <div className="col-span-1 text-center">번호</div>
          <div className="col-span-7">제목</div>
          <div className="col-span-2 text-center">작성일</div>
          <div className="col-span-2 text-center">조회수</div>
        </div>

        {paginatedNotices.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {paginatedNotices.map((notice) => (
              <Link href={`/notice/${notice.id}`} key={notice.id}>
                <div className="grid grid-cols-1 md:grid-cols-12 p-4 hover:bg-gray-50 transition-colors">
                  {/* 모바일 뷰 */}
                  <div className="md:hidden space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className={`${getCategoryColor(notice.category)}`}>{notice.category}</Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {notice.date}
                      </div>
                    </div>
                    <div className="flex items-start">
                      {notice.isPinned && <Pin className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />}
                      <h3 className="font-medium">{notice.title}</h3>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Eye className="h-3 w-3 mr-1" />
                      {notice.views}
                    </div>
                  </div>

                  {/* 데스크톱 뷰 */}
                  <div className="hidden md:block col-span-1 text-center self-center">
                    {notice.isPinned ? <Pin className="h-4 w-4 text-red-500 mx-auto" /> : <span>{notice.id}</span>}
                  </div>
                  <div className="hidden md:flex col-span-7 items-center self-center">
                    <Badge className={`mr-2 ${getCategoryColor(notice.category)}`}>{notice.category}</Badge>
                    <span className="font-medium">{notice.title}</span>
                  </div>
                  <div className="hidden md:block col-span-2 text-center self-center text-gray-600">{notice.date}</div>
                  <div className="hidden md:block col-span-2 text-center self-center text-gray-600">{notice.views}</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <p>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>

      {/* 페이지네이션 */}
      {filteredNotices.length > 0 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
