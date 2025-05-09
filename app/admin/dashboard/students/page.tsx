"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, FileDown, Eye, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react"

// 학생 데이터 타입
interface Student {
  id: string
  name: string
  course: string
  grade: string
  status: "신청완료" | "결제대기" | "결제완료" | "취소" | "수료"
  phone: string
  parentPhone: string
  applicationDate: string
}

export default function AdminStudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [courseFilter, setCourseFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("all")

  // 학생 더미 데이터
  const students: Student[] = [
    {
      id: "STD-2025-001",
      name: "김지훈",
      course: "썸머스쿨 A코스(4주)",
      grade: "고등학교 2학년",
      status: "신청완료",
      phone: "010-1234-5678",
      parentPhone: "010-9876-5432",
      applicationDate: "2025-04-18",
    },
    {
      id: "STD-2025-002",
      name: "이서연",
      course: "썸머스쿨 B코스(3주)",
      grade: "고등학교 1학년",
      status: "결제완료",
      phone: "010-2345-6789",
      parentPhone: "010-8765-4321",
      applicationDate: "2025-04-17",
    },
    {
      id: "STD-2025-003",
      name: "박민준",
      course: "썸머스쿨 A코스(4주)",
      grade: "고등학교 3학년",
      status: "결제대기",
      phone: "010-3456-7890",
      parentPhone: "010-7654-3210",
      applicationDate: "2025-04-16",
    },
    {
      id: "STD-2025-004",
      name: "정하은",
      course: "썸머스쿨 A코스(4주)",
      grade: "고등학교 2학년",
      status: "결제완료",
      phone: "010-4567-8901",
      parentPhone: "010-6543-2109",
      applicationDate: "2025-04-15",
    },
    {
      id: "STD-2025-005",
      name: "최준서",
      course: "썸머스쿨 B코스(3주)",
      grade: "고등학교 1학년",
      status: "신청완료",
      phone: "010-5678-9012",
      parentPhone: "010-5432-1098",
      applicationDate: "2025-04-14",
    },
    {
      id: "STD-2025-006",
      name: "강지원",
      course: "썸머스쿨 A코스(4주)",
      grade: "고등학교 3학년",
      status: "취소",
      phone: "010-6789-0123",
      parentPhone: "010-4321-0987",
      applicationDate: "2025-04-13",
    },
    {
      id: "STD-2025-007",
      name: "윤서진",
      course: "썸머스쿨 B코스(3주)",
      grade: "고등학교 2학년",
      status: "결제완료",
      phone: "010-7890-1234",
      parentPhone: "010-3210-9876",
      applicationDate: "2025-04-12",
    },
    {
      id: "STD-2025-008",
      name: "임도현",
      course: "썸머스쿨 A코스(4주)",
      grade: "고등학교 1학년",
      status: "결제완료",
      phone: "010-8901-2345",
      parentPhone: "010-2109-8765",
      applicationDate: "2025-04-11",
    },
    {
      id: "STD-2025-009",
      name: "한소율",
      course: "썸머스쿨 B코스(3주)",
      grade: "고등학교 3학년",
      status: "결제대기",
      phone: "010-9012-3456",
      parentPhone: "010-1098-7654",
      applicationDate: "2025-04-10",
    },
    {
      id: "STD-2025-010",
      name: "송민석",
      course: "썸머스쿨 A코스(4주)",
      grade: "고등학교 2학년",
      status: "수료",
      phone: "010-0123-4567",
      parentPhone: "010-0987-6543",
      applicationDate: "2025-04-09",
    },
  ]

  // 탭 필터링
  const filteredByTab =
    activeTab === "all"
      ? students
      : students.filter((student) => {
          if (activeTab === "pending") return student.status === "신청완료" || student.status === "결제대기"
          if (activeTab === "completed") return student.status === "결제완료"
          if (activeTab === "cancelled") return student.status === "취소"
          if (activeTab === "graduated") return student.status === "수료"
          return true
        })

  // 상태 필터링
  const filteredByStatus =
    statusFilter === "all" ? filteredByTab : filteredByTab.filter((student) => student.status === statusFilter)

  // 코스 필터링
  const filteredByCourse =
    courseFilter === "all" ? filteredByStatus : filteredByStatus.filter((student) => student.course === courseFilter)

  // 검색어 필터링
  const filteredStudents = filteredByCourse.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // 페이지네이션 설정
  const itemsPerPage = 5
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage)

  // 상태별 배지 색상
  const getStatusColor = (status: string) => {
    switch (status) {
      case "신청완료":
        return "bg-blue-100 text-blue-800"
      case "결제대기":
        return "bg-amber-100 text-amber-800"
      case "결제완료":
        return "bg-green-100 text-green-800"
      case "취소":
        return "bg-red-100 text-red-800"
      case "수료":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">학생 관리</h1>
          <p className="text-muted-foreground">캠프 신청 학생 및 수료생을 관리할 수 있습니다.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            학생 추가
          </Button>
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" />
            엑셀 다운로드
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>학생 목록</CardTitle>
          <CardDescription>전체 학생 정보를 관리합니다.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* 탭 메뉴 */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid grid-cols-5">
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="pending">신청/대기</TabsTrigger>
              <TabsTrigger value="completed">결제완료</TabsTrigger>
              <TabsTrigger value="cancelled">취소</TabsTrigger>
              <TabsTrigger value="graduated">수료</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* 검색 및 필터 */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="이름 또는 ID로 검색"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[150px]">
                  <SelectValue placeholder="상태 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">모든 상태</SelectItem>
                  <SelectItem value="신청완료">신청완료</SelectItem>
                  <SelectItem value="결제대기">결제대기</SelectItem>
                  <SelectItem value="결제완료">결제완료</SelectItem>
                  <SelectItem value="취소">취소</SelectItem>
                  <SelectItem value="수료">수료</SelectItem>
                </SelectContent>
              </Select>

              <Select value={courseFilter} onValueChange={setCourseFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="코스 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">모든 코스</SelectItem>
                  <SelectItem value="썸머스쿨 A코스(4주)">A코스(4주)</SelectItem>
                  <SelectItem value="썸머스쿨 B코스(3주)">B코스(3주)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 학생 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left font-medium text-sm">ID</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">이름</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">학년</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">신청 코스</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">상태</th>
                  <th className="py-3 px-4 text-left font-medium text-sm">신청일</th>
                  <th className="py-3 px-4 text-right font-medium text-sm">관리</th>
                </tr>
              </thead>
              <tbody>
                {paginatedStudents.map((student) => (
                  <tr key={student.id} className="border-b">
                    <td className="py-3 px-4 text-sm">{student.id}</td>
                    <td className="py-3 px-4 text-sm font-medium">{student.name}</td>
                    <td className="py-3 px-4 text-sm">{student.grade}</td>
                    <td className="py-3 px-4 text-sm">{student.course}</td>
                    <td className="py-3 px-4 text-sm">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusColor(
                          student.status,
                        )}`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">{student.applicationDate}</td>
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
              총 {filteredStudents.length}명 중 {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, filteredStudents.length)}명 표시
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
