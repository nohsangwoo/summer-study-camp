"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Plus, Trash2, Edit, Eye, ChevronLeft, ChevronRight } from "lucide-react"

// 공지사항 데이터 타입
interface Notice {
  id: number
  title: string
  category: "공지" | "이벤트" | "안내" | "모집"
  date: string
  isPinned: boolean
  views: number
  content?: string
}

export default function AdminNoticesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedNotices, setSelectedNotices] = useState<number[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newNotice, setNewNotice] = useState<Partial<Notice>>({
    title: "",
    category: "공지",
    isPinned: false,
    content: "",
  })

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

  // 체크박스 토글 핸들러
  const toggleNoticeSelection = (id: number) => {
    setSelectedNotices((prev) => (prev.includes(id) ? prev.filter((noticeId) => noticeId !== id) : [...prev, id]))
  }

  // 전체 선택 핸들러
  const toggleSelectAll = () => {
    if (selectedNotices.length === paginatedNotices.length) {
      setSelectedNotices([])
    } else {
      setSelectedNotices(paginatedNotices.map((notice) => notice.id))
    }
  }

  // 삭제 핸들러
  const handleDelete = () => {
    // 실제로는 API 호출로 삭제 처리
    console.log("삭제할 공지사항 ID:", selectedNotices)
    setSelectedNotices([])
    setIsDeleteDialogOpen(false)
  }

  // 공지사항 추가 핸들러
  const handleAddNotice = () => {
    // 실제로는 API 호출로 추가 처리
    console.log("추가할 공지사항:", newNotice)
    setNewNotice({
      title: "",
      category: "공지",
      isPinned: false,
      content: "",
    })
    setIsAddDialogOpen(false)
  }

  // 카테고리별 배지 색상
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "공지":
        return "bg-blue-100 text-blue-800"
      case "이벤트":
        return "bg-purple-100 text-purple-800"
      case "안내":
        return "bg-green-100 text-green-800"
      case "모집":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">공지사항 관리</h1>
          <p className="text-muted-foreground">캠프 공지사항을 관리할 수 있습니다.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                공지사항 추가
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>새 공지사항 작성</DialogTitle>
                <DialogDescription>새로운 공지사항을 작성합니다. 모든 필드를 입력해주세요.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">제목</Label>
                  <Input
                    id="title"
                    value={newNotice.title}
                    onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                    placeholder="공지사항 제목을 입력하세요"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">카테고리</Label>
                  <Select
                    value={newNotice.category}
                    onValueChange={(value) => setNewNotice({ ...newNotice, category: value as any })}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="공지">공지</SelectItem>
                      <SelectItem value="이벤트">이벤트</SelectItem>
                      <SelectItem value="안내">안내</SelectItem>
                      <SelectItem value="모집">모집</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="content">내용</Label>
                  <Textarea
                    id="content"
                    value={newNotice.content}
                    onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                    placeholder="공지사항 내용을 입력하세요"
                    rows={8}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isPinned"
                    checked={newNotice.isPinned}
                    onCheckedChange={(checked) => setNewNotice({ ...newNotice, isPinned: !!checked })}
                  />
                  <Label htmlFor="isPinned">상단 고정</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  취소
                </Button>
                <Button onClick={handleAddNotice}>저장</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {selectedNotices.length > 0 && (
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  선택 삭제 ({selectedNotices.length})
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>공지사항 삭제</DialogTitle>
                  <DialogDescription>
                    선택한 {selectedNotices.length}개의 공지사항을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                    취소
                  </Button>
                  <Button variant="destructive" onClick={handleDelete}>
                    삭제
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>공지사항 목록</CardTitle>
          <CardDescription>전체 공지사항을 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
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

          {/* 공지사항 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left">
                    <div className="flex items-center">
                      <Checkbox
                        checked={paginatedNotices.length > 0 && selectedNotices.length === paginatedNotices.length}
                        onCheckedChange={toggleSelectAll}
                        aria-label="전체 선택"
                      />
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left font-medium text-sm">번호</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">제목</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">카테고리</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">등록일</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">조회수</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">고정</th>
                  <th className="py-3 px-4 text-right font-medium text-sm">관리</th>
                </tr>
              </thead>
              <tbody>
                {paginatedNotices.map((notice) => (
                  <tr key={notice.id} className="border-b">
                    <td className="py-3 px-4">
                      <Checkbox
                        checked={selectedNotices.includes(notice.id)}
                        onCheckedChange={() => toggleNoticeSelection(notice.id)}
                        aria-label={`${notice.title} 선택`}
                      />
                    </td>
                    <td className="py-3 px-4 text-sm">{notice.id}</td>
                    <td className="py-3 px-4 text-sm font-medium">{notice.title}</td>
                    <td className="py-3 px-4 text-sm">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getCategoryColor(
                          notice.category,
                        )}`}
                      >
                        {notice.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">{notice.date}</td>
                    <td className="py-3 px-4 text-sm">{notice.views}</td>
                    <td className="py-3 px-4 text-sm">
                      {notice.isPinned ? (
                        <span className="text-red-500 font-medium">고정</span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              총 {filteredNotices.length}개 중 {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, filteredNotices.length)}개 표시
            </div>
            <div className="flex items-center gap-2">
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
