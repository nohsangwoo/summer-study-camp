"use client"

import { useState } from "react"
import { Filter, MoreHorizontal, Plus, Search, Trash2, Edit, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

// 프로그램 타입 정의
interface Program {
  id: string
  name: string
  category: "썸머캠프" | "특강" | "멘토링" | "상담" | "기타"
  duration: string
  price: number
  discountPrice?: number
  status: "모집중" | "모집마감" | "진행중" | "종료"
  capacity: number
  enrolled: number
  targetGrade: string
  description: string
  startDate: string
  endDate: string
}

// 샘플 프로그램 데이터
const samplePrograms: Program[] = [
  {
    id: "PRG-2025-001",
    name: "2025 썸머 공부습관 캠프 A코스",
    category: "썸머캠프",
    duration: "4주",
    price: 2800000,
    discountPrice: 2500000,
    status: "모집중",
    capacity: 30,
    enrolled: 18,
    targetGrade: "고등학교 1-3학년",
    description: "의대 진학을 목표로 하는 학생들을 위한 4주 집중 학습 캠프입니다.",
    startDate: "2025-07-01",
    endDate: "2025-07-28",
  },
  {
    id: "PRG-2025-002",
    name: "2025 썸머 공부습관 캠프 B코스",
    category: "썸머캠프",
    duration: "3주",
    price: 2200000,
    status: "모집중",
    capacity: 30,
    enrolled: 12,
    targetGrade: "고등학교 1-3학년",
    description: "의대 진학을 목표로 하는 학생들을 위한 3주 집중 학습 캠프입니다.",
    startDate: "2025-07-08",
    endDate: "2025-07-29",
  },
  {
    id: "PRG-2025-003",
    name: "의대생 멘토링 프로그램",
    category: "멘토링",
    duration: "8주",
    price: 1500000,
    status: "모집중",
    capacity: 20,
    enrolled: 8,
    targetGrade: "고등학교 2-3학년",
    description: "서울대, 연세대 의대생 멘토와 함께하는 1:1 멘토링 프로그램입니다.",
    startDate: "2025-06-15",
    endDate: "2025-08-10",
  },
  {
    id: "PRG-2025-004",
    name: "의대 입시 전략 특강",
    category: "특강",
    duration: "1일",
    price: 150000,
    discountPrice: 120000,
    status: "모집중",
    capacity: 50,
    enrolled: 32,
    targetGrade: "고등학교 1-3학년, 학부모",
    description: "최신 의대 입시 전략과 학습 방법론을 다루는 특강입니다.",
    startDate: "2025-05-25",
    endDate: "2025-05-25",
  },
  {
    id: "PRG-2025-005",
    name: "1:1 맞춤형 입시 상담",
    category: "상담",
    duration: "2시간",
    price: 300000,
    status: "모집중",
    capacity: 10,
    enrolled: 4,
    targetGrade: "고등학교 3학년",
    description: "개인별 성적과 목표에 맞춘 1:1 맞춤형 입시 상담 서비스입니다.",
    startDate: "2025-06-01",
    endDate: "2025-08-31",
  },
  {
    id: "PRG-2025-006",
    name: "2024 겨울방학 특강 (종료)",
    category: "특강",
    duration: "2주",
    price: 800000,
    status: "종료",
    capacity: 40,
    enrolled: 38,
    targetGrade: "고등학교 1-2학년",
    description: "겨울방학 동안 진행된 의대 진학 준비 특강입니다.",
    startDate: "2025-01-05",
    endDate: "2025-01-19",
  },
  {
    id: "PRG-2025-007",
    name: "학부모 진학 설명회",
    category: "기타",
    duration: "3시간",
    price: 50000,
    status: "모집마감",
    capacity: 100,
    enrolled: 100,
    targetGrade: "학부모",
    description: "의대 진학을 준비하는 학생의 학부모를 위한 진학 설명회입니다.",
    startDate: "2025-05-18",
    endDate: "2025-05-18",
  },
]

// 카테고리별 색상 정의
const categoryColors = {
  썸머캠프: "bg-blue-100 text-blue-800",
  특강: "bg-purple-100 text-purple-800",
  멘토링: "bg-green-100 text-green-800",
  상담: "bg-amber-100 text-amber-800",
  기타: "bg-gray-100 text-gray-800",
}

// 상태별 색상 정의
const statusColors = {
  모집중: "bg-green-100 text-green-800",
  모집마감: "bg-amber-100 text-amber-800",
  진행중: "bg-blue-100 text-blue-800",
  종료: "bg-gray-100 text-gray-800",
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>(samplePrograms)
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)
  const [isAddProgramOpen, setIsAddProgramOpen] = useState(false)
  const [isEditProgramOpen, setIsEditProgramOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [currentTab, setCurrentTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // 필터링된 프로그램 목록
  const filteredPrograms = programs.filter((program) => {
    // 탭 필터링
    const matchesTab =
      currentTab === "all" ||
      (currentTab === "active" && program.status !== "종료") ||
      (currentTab === "recruiting" && program.status === "모집중") ||
      (currentTab === "closed" && program.status === "모집마감")

    // 검색어 필터링
    const matchesSearch =
      searchQuery === "" ||
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase())

    // 카테고리 필터링
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(program.category)

    // 상태 필터링
    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(program.status)

    return matchesTab && matchesSearch && matchesCategory && matchesStatus
  })

  // 페이지네이션
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage)
  const paginatedPrograms = filteredPrograms.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // 프로그램 추가 핸들러
  const handleAddProgram = (newProgram: Omit<Program, "id">) => {
    const id = `PRG-2025-${String(programs.length + 1).padStart(3, "0")}`
    setPrograms([...programs, { ...newProgram, id }])
    setIsAddProgramOpen(false)
  }

  // 프로그램 수정 핸들러
  const handleEditProgram = (updatedProgram: Program) => {
    setPrograms(programs.map((program) => (program.id === updatedProgram.id ? updatedProgram : program)))
    setIsEditProgramOpen(false)
    setSelectedProgram(null)
  }

  // 프로그램 삭제 핸들러
  const handleDeleteProgram = () => {
    if (selectedProgram) {
      setPrograms(programs.filter((program) => program.id !== selectedProgram.id))
      setIsDeleteDialogOpen(false)
      setSelectedProgram(null)
    }
  }

  // 카테고리 토글 핸들러
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // 상태 토글 핸들러
  const toggleStatus = (status: string) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status))
    } else {
      setSelectedStatuses([...selectedStatuses, status])
    }
  }

  // 가격 포맷 함수
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price) + "원"
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">프로그램 관리</h1>
          <p className="text-muted-foreground">썸머 공부습관 캠프 프로그램을 관리합니다.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button onClick={() => setIsAddProgramOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />새 프로그램 추가
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={currentTab} onValueChange={setCurrentTab}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <TabsList>
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="active">활성화</TabsTrigger>
            <TabsTrigger value="recruiting">모집중</TabsTrigger>
            <TabsTrigger value="closed">마감</TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="프로그램 검색..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>카테고리 필터</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {(["썸머캠프", "특강", "멘토링", "상담", "기타"] as const).map((category) => (
                  <DropdownMenuItem key={category} onSelect={(e) => e.preventDefault()}>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <Label htmlFor={`category-${category}`} className="flex-1 cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>상태 필터</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {(["모집중", "모집마감", "진행중", "종료"] as const).map((status) => (
                  <DropdownMenuItem key={status} onSelect={(e) => e.preventDefault()}>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`status-${status}`}
                        checked={selectedStatuses.includes(status)}
                        onCheckedChange={() => toggleStatus(status)}
                      />
                      <Label htmlFor={`status-${status}`} className="flex-1 cursor-pointer">
                        {status}
                      </Label>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setSelectedCategories([])
                    setSelectedStatuses([])
                  }}
                >
                  필터 초기화
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>프로그램 목록</CardTitle>
              <CardDescription>{filteredPrograms.length}개의 프로그램이 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm">ID</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">프로그램명</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">카테고리</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">기간</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">가격</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">상태</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">인원</th>
                      <th className="text-right py-3 px-4 font-medium text-sm">관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedPrograms.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-6 text-center text-gray-500">
                          표시할 프로그램이 없습니다. 새 프로그램을 추가하거나 검색 조건을 변경해보세요.
                        </td>
                      </tr>
                    ) : (
                      paginatedPrograms.map((program) => (
                        <tr key={program.id} className="border-b">
                          <td className="py-3 px-4 text-sm">{program.id}</td>
                          <td className="py-3 px-4 text-sm font-medium">{program.name}</td>
                          <td className="py-3 px-4 text-sm">
                            <Badge className={categoryColors[program.category]}>{program.category}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">{program.duration}</td>
                          <td className="py-3 px-4 text-sm">
                            {program.discountPrice ? (
                              <div>
                                <span className="line-through text-gray-500">{formatPrice(program.price)}</span>
                                <span className="ml-1 text-red-600">{formatPrice(program.discountPrice)}</span>
                              </div>
                            ) : (
                              formatPrice(program.price)
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <Badge className={statusColors[program.status]}>{program.status}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">
                            {program.enrolled}/{program.capacity}
                            <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1">
                              <div
                                className="h-1.5 bg-blue-600 rounded-full"
                                style={{
                                  width: `${Math.min((program.enrolled / program.capacity) * 100, 100)}%`,
                                }}
                              ></div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedProgram(program)
                                    setIsEditProgramOpen(true)
                                  }}
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  수정
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-red-600"
                                  onClick={() => {
                                    setSelectedProgram(program)
                                    setIsDeleteDialogOpen(true)
                                  }}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  삭제
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {/* 활성화 탭 콘텐츠 - 위와 동일한 구조 */}
          <Card>
            <CardHeader>
              <CardTitle>활성화된 프로그램</CardTitle>
              <CardDescription>{filteredPrograms.length}개의 활성화된 프로그램이 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* 테이블 및 페이지네이션 - 위와 동일한 구조 */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm">ID</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">프로그램명</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">카테고리</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">기간</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">가격</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">상태</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">인원</th>
                      <th className="text-right py-3 px-4 font-medium text-sm">관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedPrograms.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-6 text-center text-gray-500">
                          표시할 프로그램이 없습니다.
                        </td>
                      </tr>
                    ) : (
                      paginatedPrograms.map((program) => (
                        <tr key={program.id} className="border-b">
                          <td className="py-3 px-4 text-sm">{program.id}</td>
                          <td className="py-3 px-4 text-sm font-medium">{program.name}</td>
                          <td className="py-3 px-4 text-sm">
                            <Badge className={categoryColors[program.category]}>{program.category}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">{program.duration}</td>
                          <td className="py-3 px-4 text-sm">
                            {program.discountPrice ? (
                              <div>
                                <span className="line-through text-gray-500">{formatPrice(program.price)}</span>
                                <span className="ml-1 text-red-600">{formatPrice(program.discountPrice)}</span>
                              </div>
                            ) : (
                              formatPrice(program.price)
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm">
                            <Badge className={statusColors[program.status]}>{program.status}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">
                            {program.enrolled}/{program.capacity}
                            <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1">
                              <div
                                className="h-1.5 bg-blue-600 rounded-full"
                                style={{
                                  width: `${Math.min((program.enrolled / program.capacity) * 100, 100)}%`,
                                }}
                              ></div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedProgram(program)
                                    setIsEditProgramOpen(true)
                                  }}
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  수정
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-red-600"
                                  onClick={() => {
                                    setSelectedProgram(program)
                                    setIsDeleteDialogOpen(true)
                                  }}
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  삭제
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-6">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recruiting" className="space-y-4">
          {/* 모집중 탭 콘텐츠 - 위와 동일한 구조 */}
          <Card>
            <CardHeader>
              <CardTitle>모집중인 프로그램</CardTitle>
              <CardDescription>{filteredPrograms.length}개의 모집중인 프로그램이 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>{/* 테이블 및 페이지네이션 - 위와 동일한 구조 */}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="closed" className="space-y-4">
          {/* 마감 탭 콘텐츠 - 위와 동일한 구조 */}
          <Card>
            <CardHeader>
              <CardTitle>마감된 프로그램</CardTitle>
              <CardDescription>{filteredPrograms.length}개의 마감된 프로그램이 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>{/* 테이블 및 페이지네이션 - 위와 동일한 구조 */}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 새 프로그램 추가 다이얼로그 */}
      <Dialog open={isAddProgramOpen} onOpenChange={setIsAddProgramOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>새 프로그램 추가</DialogTitle>
            <DialogDescription>새로운 프로그램 정보를 입력하세요.</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const newProgram = {
                name: formData.get("name") as string,
                category: formData.get("category") as Program["category"],
                duration: formData.get("duration") as string,
                price: Number(formData.get("price")),
                discountPrice: formData.get("discountPrice") ? Number(formData.get("discountPrice")) : undefined,
                status: formData.get("status") as Program["status"],
                capacity: Number(formData.get("capacity")),
                enrolled: Number(formData.get("enrolled") || 0),
                targetGrade: formData.get("targetGrade") as string,
                description: formData.get("description") as string,
                startDate: formData.get("startDate") as string,
                endDate: formData.get("endDate") as string,
              }
              handleAddProgram(newProgram)
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  프로그램명 *
                </Label>
                <Input id="name" name="name" placeholder="프로그램 이름을 입력하세요" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  카테고리 *
                </Label>
                <Select name="category" defaultValue="썸머캠프" required>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="카테고리 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="썸머캠프">썸머캠프</SelectItem>
                    <SelectItem value="특강">특강</SelectItem>
                    <SelectItem value="멘토링">멘토링</SelectItem>
                    <SelectItem value="상담">상담</SelectItem>
                    <SelectItem value="기타">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  기간 *
                </Label>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="예: 4주, 2일, 3시간"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  가격 (원) *
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="가격을 입력하세요"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="discountPrice" className="text-right">
                  할인 가격 (원)
                </Label>
                <Input
                  id="discountPrice"
                  name="discountPrice"
                  type="number"
                  placeholder="할인 가격을 입력하세요 (선택사항)"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  상태 *
                </Label>
                <Select name="status" defaultValue="모집중" required>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="상태 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="모집중">모집중</SelectItem>
                    <SelectItem value="모집마감">모집마감</SelectItem>
                    <SelectItem value="진행중">진행중</SelectItem>
                    <SelectItem value="종료">종료</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="capacity" className="text-right">
                  정원 *
                </Label>
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  placeholder="최대 인원 수"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="enrolled" className="text-right">
                  현재 등록 인원
                </Label>
                <Input
                  id="enrolled"
                  name="enrolled"
                  type="number"
                  placeholder="현재 등록된 인원 수"
                  className="col-span-3"
                  defaultValue="0"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="targetGrade" className="text-right">
                  대상 학년 *
                </Label>
                <Input
                  id="targetGrade"
                  name="targetGrade"
                  placeholder="예: 고등학교 1-3학년"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate" className="text-right">
                  시작일 *
                </Label>
                <Input id="startDate" name="startDate" type="date" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endDate" className="text-right">
                  종료일 *
                </Label>
                <Input id="endDate" name="endDate" type="date" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  설명 *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="프로그램에 대한 설명을 입력하세요"
                  className="col-span-3"
                  rows={3}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsAddProgramOpen(false)}>
                취소
              </Button>
              <Button type="submit">추가</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 프로그램 수정 다이얼로그 */}
      {selectedProgram && (
        <Dialog open={isEditProgramOpen} onOpenChange={setIsEditProgramOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>프로그램 수정</DialogTitle>
              <DialogDescription>프로그램 정보를 수정하세요.</DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const updatedProgram = {
                  ...selectedProgram,
                  name: formData.get("name") as string,
                  category: formData.get("category") as Program["category"],
                  duration: formData.get("duration") as string,
                  price: Number(formData.get("price")),
                  discountPrice: formData.get("discountPrice") ? Number(formData.get("discountPrice")) : undefined,
                  status: formData.get("status") as Program["status"],
                  capacity: Number(formData.get("capacity")),
                  enrolled: Number(formData.get("enrolled") || 0),
                  targetGrade: formData.get("targetGrade") as string,
                  description: formData.get("description") as string,
                  startDate: formData.get("startDate") as string,
                  endDate: formData.get("endDate") as string,
                }
                handleEditProgram(updatedProgram)
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-name" className="text-right">
                    프로그램명 *
                  </Label>
                  <Input
                    id="edit-name"
                    name="name"
                    defaultValue={selectedProgram.name}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-category" className="text-right">
                    카테고리 *
                  </Label>
                  <Select name="category" defaultValue={selectedProgram.category} required>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="썸머캠프">썸머캠프</SelectItem>
                      <SelectItem value="특강">특강</SelectItem>
                      <SelectItem value="멘토링">멘토링</SelectItem>
                      <SelectItem value="상담">상담</SelectItem>
                      <SelectItem value="기타">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-duration" className="text-right">
                    기간 *
                  </Label>
                  <Input
                    id="edit-duration"
                    name="duration"
                    defaultValue={selectedProgram.duration}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-price" className="text-right">
                    가격 (원) *
                  </Label>
                  <Input
                    id="edit-price"
                    name="price"
                    type="number"
                    defaultValue={selectedProgram.price}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-discountPrice" className="text-right">
                    할인 가격 (원)
                  </Label>
                  <Input
                    id="edit-discountPrice"
                    name="discountPrice"
                    type="number"
                    defaultValue={selectedProgram.discountPrice}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-status" className="text-right">
                    상태 *
                  </Label>
                  <Select name="status" defaultValue={selectedProgram.status} required>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="상태 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="모집중">모집중</SelectItem>
                      <SelectItem value="모집마감">모집마감</SelectItem>
                      <SelectItem value="진행중">진행중</SelectItem>
                      <SelectItem value="종료">종료</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-capacity" className="text-right">
                    정원 *
                  </Label>
                  <Input
                    id="edit-capacity"
                    name="capacity"
                    type="number"
                    defaultValue={selectedProgram.capacity}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-enrolled" className="text-right">
                    현재 등록 인원
                  </Label>
                  <Input
                    id="edit-enrolled"
                    name="enrolled"
                    type="number"
                    defaultValue={selectedProgram.enrolled}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-targetGrade" className="text-right">
                    대상 학년 *
                  </Label>
                  <Input
                    id="edit-targetGrade"
                    name="targetGrade"
                    defaultValue={selectedProgram.targetGrade}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-startDate" className="text-right">
                    시작일 *
                  </Label>
                  <Input
                    id="edit-startDate"
                    name="startDate"
                    type="date"
                    defaultValue={selectedProgram.startDate}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-endDate" className="text-right">
                    종료일 *
                  </Label>
                  <Input
                    id="edit-endDate"
                    name="endDate"
                    type="date"
                    defaultValue={selectedProgram.endDate}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-description" className="text-right">
                    설명 *
                  </Label>
                  <Textarea
                    id="edit-description"
                    name="description"
                    defaultValue={selectedProgram.description}
                    className="col-span-3"
                    rows={3}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    setIsEditProgramOpen(false)
                    setIsDeleteDialogOpen(true)
                  }}
                >
                  삭제
                </Button>
                <div className="flex-1"></div>
                <Button type="button" variant="outline" onClick={() => setIsEditProgramOpen(false)}>
                  취소
                </Button>
                <Button type="submit">저장</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* 프로그램 삭제 확인 다이얼로그 */}
      {selectedProgram && (
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>프로그램 삭제</DialogTitle>
              <DialogDescription>
                정말로 이 프로그램을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="font-medium">{selectedProgram.name}</p>
              <p className="text-sm text-gray-500">
                {selectedProgram.category} | {selectedProgram.duration} | {formatPrice(selectedProgram.price)}
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                취소
              </Button>
              <Button variant="destructive" onClick={handleDeleteProgram}>
                삭제
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
