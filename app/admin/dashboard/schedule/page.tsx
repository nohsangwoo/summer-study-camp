"use client"

import { useState } from "react"
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, parseISO } from "date-fns"
import { ko } from "date-fns/locale"
import {
  Calendar,
  Plus,
  List,
  Filter,
  Search,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Trash2,
  Edit,
} from "lucide-react"
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

// 일정 타입 정의
interface ScheduleEvent {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  allDay: boolean
  category: "캠프" | "설명회" | "상담" | "미팅" | "기타"
  location: string
  important: boolean
}

// 샘플 일정 데이터
const sampleEvents: ScheduleEvent[] = [
  {
    id: "event-1",
    title: "2025 썸머 공부습관 캠프 A코스 시작",
    description: "4주 과정 썸머 공부습관 캠프 A코스 시작일",
    startDate: "2025-07-01T09:00:00",
    endDate: "2025-07-01T10:00:00",
    allDay: true,
    category: "캠프",
    location: "메인 캠퍼스",
    important: true,
  },
  {
    id: "event-2",
    title: "학부모 설명회",
    description: "2025년 썸머 캠프 학부모 설명회",
    startDate: "2025-05-15T14:00:00",
    endDate: "2025-05-15T16:00:00",
    allDay: false,
    category: "설명회",
    location: "서울 강남 본원",
    important: true,
  },
  {
    id: "event-3",
    title: "의대 진학 상담의 날",
    description: "의대 진학을 희망하는 학생들을 위한 1:1 상담",
    startDate: "2025-05-20T10:00:00",
    endDate: "2025-05-20T18:00:00",
    allDay: false,
    category: "상담",
    location: "온라인 (Zoom)",
    important: false,
  },
  {
    id: "event-4",
    title: "멘토 사전 교육",
    description: "2025 썸머 캠프 멘토 사전 교육 및 오리엔테이션",
    startDate: "2025-06-20T13:00:00",
    endDate: "2025-06-20T17:00:00",
    allDay: false,
    category: "미팅",
    location: "서울 강남 본원",
    important: true,
  },
  {
    id: "event-5",
    title: "2025 썸머 공부습관 캠프 B코스 시작",
    description: "3주 과정 썸머 공부습관 캠프 B코스 시작일",
    startDate: "2025-07-08T09:00:00",
    endDate: "2025-07-08T10:00:00",
    allDay: true,
    category: "캠프",
    location: "메인 캠퍼스",
    important: true,
  },
  {
    id: "event-6",
    title: "학부모 간담회",
    description: "캠프 중간 학부모 간담회",
    startDate: "2025-07-15T19:00:00",
    endDate: "2025-07-15T21:00:00",
    allDay: false,
    category: "미팅",
    location: "메인 캠퍼스 대강당",
    important: false,
  },
  {
    id: "event-7",
    title: "A코스 수료식",
    description: "4주 과정 A코스 수료식 및 발표회",
    startDate: "2025-07-28T14:00:00",
    endDate: "2025-07-28T17:00:00",
    allDay: false,
    category: "캠프",
    location: "메인 캠퍼스 대강당",
    important: true,
  },
  {
    id: "event-8",
    title: "B코스 수료식",
    description: "3주 과정 B코스 수료식 및 발표회",
    startDate: "2025-07-29T14:00:00",
    endDate: "2025-07-29T17:00:00",
    allDay: false,
    category: "캠프",
    location: "메인 캠퍼스 대강당",
    important: true,
  },
]

// 카테고리별 색상 정의
const categoryColors = {
  캠프: "bg-blue-100 text-blue-800",
  설명회: "bg-purple-100 text-purple-800",
  상담: "bg-green-100 text-green-800",
  미팅: "bg-amber-100 text-amber-800",
  기타: "bg-gray-100 text-gray-800",
}

export default function SchedulePage() {
  const [events, setEvents] = useState<ScheduleEvent[]>(sampleEvents)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null)
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [isEditEventOpen, setIsEditEventOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("week")

  // 현재 주의 날짜 범위 계산
  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 }) // 월요일부터 시작
  const endDate = endOfWeek(currentDate, { weekStartsOn: 1 }) // 일요일까지
  const weekDays = eachDayOfInterval({ start: startDate, end: endDate })

  // 필터링된 이벤트 목록
  const filteredEvents = events.filter((event) => {
    // 검색어 필터링
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())

    // 카테고리 필터링
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category)

    return matchesSearch && matchesCategory
  })

  // 날짜별 이벤트 그룹화
  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter((event) => {
      const eventStartDate = parseISO(event.startDate)
      return isSameDay(eventStartDate, date)
    })
  }

  // 이벤트 추가 핸들러
  const handleAddEvent = (newEvent: Omit<ScheduleEvent, "id">) => {
    const id = `event-${events.length + 1}`
    setEvents([...events, { ...newEvent, id }])
    setIsAddEventOpen(false)
  }

  // 이벤트 수정 핸들러
  const handleEditEvent = (updatedEvent: ScheduleEvent) => {
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)))
    setIsEditEventOpen(false)
    setSelectedEvent(null)
  }

  // 이벤트 삭제 핸들러
  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter((event) => event.id !== selectedEvent.id))
      setIsDeleteDialogOpen(false)
      setSelectedEvent(null)
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

  // 이전/다음 주 이동 핸들러
  const goToPreviousWeek = () => {
    setCurrentDate(addDays(currentDate, -7))
  }

  const goToNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7))
  }

  // 오늘로 이동 핸들러
  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">일정 관리</h1>
          <p className="text-muted-foreground">썸머 공부습관 캠프 일정을 관리합니다.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button onClick={() => setIsAddEventOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />새 일정 추가
          </Button>
        </div>
      </div>

      <Tabs defaultValue="calendar">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <TabsList>
            <TabsTrigger value="calendar">
              <Calendar className="h-4 w-4 mr-2" />
              캘린더 보기
            </TabsTrigger>
            <TabsTrigger value="list">
              <List className="h-4 w-4 mr-2" />
              목록 보기
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="일정 검색..."
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
                {(["캠프", "설명회", "상담", "미팅", "기타"] as const).map((category) => (
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
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault()
                    setSelectedCategories([])
                  }}
                >
                  필터 초기화
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={goToToday}>
                    오늘
                  </Button>
                  <Button variant="outline" size="sm" onClick={goToNextWeek}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-lg font-semibold">
                  {format(startDate, "yyyy년 MM월 dd일", { locale: ko })} -{" "}
                  {format(endDate, "MM월 dd일", { locale: ko })}
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "day" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("day")}
                  >
                    일
                  </Button>
                  <Button
                    variant={viewMode === "week" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("week")}
                  >
                    주
                  </Button>
                  <Button
                    variant={viewMode === "month" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("month")}
                  >
                    월
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {/* 요일 헤더 */}
                {weekDays.map((day) => (
                  <div key={day.toString()} className="text-center py-2 font-medium text-sm border-b">
                    {format(day, "EEE", { locale: ko })}
                    <div className="text-xs text-gray-500">{format(day, "d")}</div>
                  </div>
                ))}

                {/* 일정 그리드 */}
                {weekDays.map((day) => {
                  const dayEvents = getEventsForDate(day)
                  const isToday = isSameDay(day, new Date())

                  return (
                    <div
                      key={day.toString()}
                      className={`min-h-[150px] border border-gray-100 p-1 ${isToday ? "bg-blue-50" : ""}`}
                    >
                      <div className="space-y-1">
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className={`p-1 rounded text-xs cursor-pointer ${
                              categoryColors[event.category]
                            } ${event.important ? "border-l-2 border-red-500" : ""}`}
                            onClick={() => {
                              setSelectedEvent(event)
                              setIsEditEventOpen(true)
                            }}
                          >
                            <div className="font-medium truncate">{event.title}</div>
                            <div className="text-xs opacity-75">{format(parseISO(event.startDate), "HH:mm")}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>일정 목록</CardTitle>
              <CardDescription>모든 일정을 날짜순으로 확인합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredEvents.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    표시할 일정이 없습니다. 새 일정을 추가하거나 검색 조건을 변경해보세요.
                  </div>
                ) : (
                  filteredEvents
                    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
                    .map((event) => (
                      <div key={event.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{event.title}</h3>
                              {event.important && (
                                <Badge variant="destructive" className="text-xs">
                                  중요
                                </Badge>
                              )}
                              <Badge
                                className={`${categoryColors[event.category].replace("bg-", "").replace("text-", "")}`}
                              >
                                {event.category}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                                {format(parseISO(event.startDate), "yyyy년 MM월 dd일", {
                                  locale: ko,
                                })}
                                {!event.allDay && (
                                  <>
                                    {" "}
                                    {format(parseISO(event.startDate), "HH:mm", { locale: ko })} -{" "}
                                    {format(parseISO(event.endDate), "HH:mm", { locale: ko })}
                                  </>
                                )}
                                {event.allDay && <span className="ml-1">(종일)</span>}
                              </div>
                              {event.location && (
                                <div className="text-gray-500">
                                  <span>📍 {event.location}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedEvent(event)
                                  setIsEditEventOpen(true)
                                }}
                              >
                                <Edit className="h-4 w-4 mr-2" />
                                수정
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600"
                                onClick={() => {
                                  setSelectedEvent(event)
                                  setIsDeleteDialogOpen(true)
                                }}
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                삭제
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 새 일정 추가 다이얼로그 */}
      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>새 일정 추가</DialogTitle>
            <DialogDescription>새로운 일정 정보를 입력하세요.</DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const newEvent = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                startDate: formData.get("startDate") as string,
                endDate: formData.get("endDate") as string,
                allDay: formData.get("allDay") === "on",
                category: formData.get("category") as ScheduleEvent["category"],
                location: formData.get("location") as string,
                important: formData.get("important") === "on",
              }
              handleAddEvent(newEvent)
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  일정명 *
                </Label>
                <Input id="title" name="title" placeholder="일정 제목을 입력하세요" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  설명
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="일정에 대한 설명을 입력하세요"
                  className="col-span-3"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  카테고리 *
                </Label>
                <Select name="category" defaultValue="캠프" required>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="카테고리 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="캠프">캠프</SelectItem>
                    <SelectItem value="설명회">설명회</SelectItem>
                    <SelectItem value="상담">상담</SelectItem>
                    <SelectItem value="미팅">미팅</SelectItem>
                    <SelectItem value="기타">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startDate" className="text-right">
                  시작일시 *
                </Label>
                <Input id="startDate" name="startDate" type="datetime-local" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endDate" className="text-right">
                  종료일시 *
                </Label>
                <Input id="endDate" name="endDate" type="datetime-local" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="location" className="text-right">
                  장소
                </Label>
                <Input id="location" name="location" placeholder="일정 장소를 입력하세요" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="text-right">옵션</div>
                <div className="col-span-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="allDay" name="allDay" />
                    <Label htmlFor="allDay">종일 일정</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="important" name="important" />
                    <Label htmlFor="important">중요 일정</Label>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsAddEventOpen(false)}>
                취소
              </Button>
              <Button type="submit">추가</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* 일정 수정 다이얼로그 */}
      {selectedEvent && (
        <Dialog open={isEditEventOpen} onOpenChange={setIsEditEventOpen}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>일정 수정</DialogTitle>
              <DialogDescription>일정 정보를 수정하세요.</DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const updatedEvent = {
                  ...selectedEvent,
                  title: formData.get("title") as string,
                  description: formData.get("description") as string,
                  startDate: formData.get("startDate") as string,
                  endDate: formData.get("endDate") as string,
                  allDay: formData.get("allDay") === "on",
                  category: formData.get("category") as ScheduleEvent["category"],
                  location: formData.get("location") as string,
                  important: formData.get("important") === "on",
                }
                handleEditEvent(updatedEvent)
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-title" className="text-right">
                    일정명 *
                  </Label>
                  <Input
                    id="edit-title"
                    name="title"
                    defaultValue={selectedEvent.title}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-description" className="text-right">
                    설명
                  </Label>
                  <Textarea
                    id="edit-description"
                    name="description"
                    defaultValue={selectedEvent.description}
                    className="col-span-3"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-category" className="text-right">
                    카테고리 *
                  </Label>
                  <Select name="category" defaultValue={selectedEvent.category} required>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="캠프">캠프</SelectItem>
                      <SelectItem value="설명회">설명회</SelectItem>
                      <SelectItem value="상담">상담</SelectItem>
                      <SelectItem value="미팅">미팅</SelectItem>
                      <SelectItem value="기타">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-startDate" className="text-right">
                    시작일시 *
                  </Label>
                  <Input
                    id="edit-startDate"
                    name="startDate"
                    type="datetime-local"
                    defaultValue={selectedEvent.startDate.slice(0, 16)}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-endDate" className="text-right">
                    종료일시 *
                  </Label>
                  <Input
                    id="edit-endDate"
                    name="endDate"
                    type="datetime-local"
                    defaultValue={selectedEvent.endDate.slice(0, 16)}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-location" className="text-right">
                    장소
                  </Label>
                  <Input
                    id="edit-location"
                    name="location"
                    defaultValue={selectedEvent.location}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="text-right">옵션</div>
                  <div className="col-span-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edit-allDay" name="allDay" defaultChecked={selectedEvent.allDay} />
                      <Label htmlFor="edit-allDay">종일 일정</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="edit-important" name="important" defaultChecked={selectedEvent.important} />
                      <Label htmlFor="edit-important">중요 일정</Label>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => {
                    setIsEditEventOpen(false)
                    setIsDeleteDialogOpen(true)
                  }}
                >
                  삭제
                </Button>
                <div className="flex-1"></div>
                <Button type="button" variant="outline" onClick={() => setIsEditEventOpen(false)}>
                  취소
                </Button>
                <Button type="submit">저장</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* 일정 삭제 확인 다이얼로그 */}
      {selectedEvent && (
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>일정 삭제</DialogTitle>
              <DialogDescription>정말로 이 일정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="font-medium">{selectedEvent.title}</p>
              <p className="text-sm text-gray-500">
                {format(parseISO(selectedEvent.startDate), "yyyy년 MM월 dd일", { locale: ko })}
                {!selectedEvent.allDay && (
                  <>
                    {" "}
                    {format(parseISO(selectedEvent.startDate), "HH:mm", { locale: ko })} -{" "}
                    {format(parseISO(selectedEvent.endDate), "HH:mm", { locale: ko })}
                  </>
                )}
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                취소
              </Button>
              <Button variant="destructive" onClick={handleDeleteEvent}>
                삭제
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
