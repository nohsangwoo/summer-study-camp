"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Users,
  FileText,
  Calendar,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // 대시보드 통계 데이터
  const stats = [
    {
      title: "총 학생 수",
      value: "124",
      change: "+12%",
      trend: "up",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "신규 신청",
      value: "28",
      change: "+4%",
      trend: "up",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "이번 달 일정",
      value: "12",
      change: "-2",
      trend: "down",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "방문자 수",
      value: "1,245",
      change: "+18%",
      trend: "up",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ]

  // 최근 신청 데이터
  const recentApplications = [
    {
      id: "APP-2025-042",
      name: "김지훈",
      course: "썸머캠프 A코스(4주)",
      date: "2025-04-18",
      status: "신규",
    },
    {
      id: "APP-2025-041",
      name: "이서연",
      course: "썸머캠프 B코스(3주)",
      date: "2025-04-17",
      status: "승인완료",
    },
    {
      id: "APP-2025-040",
      name: "박민준",
      course: "썸머캠프 A코스(4주)",
      date: "2025-04-16",
      status: "결제대기",
    },
    {
      id: "APP-2025-039",
      name: "정하은",
      course: "썸머캠프 A코스(4주)",
      date: "2025-04-15",
      status: "승인완료",
    },
    {
      id: "APP-2025-038",
      name: "최준서",
      course: "썸머캠프 B코스(3주)",
      date: "2025-04-14",
      status: "신규",
    },
  ]

  // 최근 공지사항 데이터
  const recentNotices = [
    {
      id: 10,
      title: "2025년 썸머 공부습관 캠프 조기 신청 할인 안내",
      date: "2025-04-15",
      views: 342,
    },
    {
      id: 9,
      title: "2024년 겨울방학 캠프 수료생 대학 합격 소식",
      date: "2025-03-20",
      views: 287,
    },
    {
      id: 8,
      title: "의대생 멘토 추가 모집 안내 (서울대, 연세대 의대 재학생)",
      date: "2025-03-15",
      views: 215,
    },
    {
      id: 7,
      title: "2025 썸머 캠프 커리큘럼 업데이트 안내",
      date: "2025-03-10",
      views: 198,
    },
    {
      id: 6,
      title: "학부모 설명회 일정 안내 (4월 둘째주 토요일)",
      date: "2025-03-05",
      views: 176,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
          <p className="text-muted-foreground">썸머 공부습관 캠프 관리자 대시보드입니다.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            보고서 다운로드
          </Button>
        </div>
      </div>

      {/* 통계 카드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-blue-50 p-2 rounded-md">{stat.icon}</div>
                <div
                  className={`flex items-center text-xs font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">개요</TabsTrigger>
          <TabsTrigger value="applications">신청 현황</TabsTrigger>
          <TabsTrigger value="notices">공지사항</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* 차트 */}
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>신청 추이</CardTitle>
                <CardDescription>최근 30일간 신청 현황</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-md">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 mx-auto text-gray-300" />
                    <p className="mt-2 text-sm text-gray-500">차트 데이터 로딩 중...</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 최근 활동 */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>최근 활동</CardTitle>
                <CardDescription>최근 시스템 활동 내역</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                      <Users className="h-3 w-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">새로운 학생 등록</p>
                      <p className="text-xs text-gray-500">김지훈님이 등록되었습니다.</p>
                      <p className="text-xs text-gray-400">10분 전</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                      <FileText className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">공지사항 등록</p>
                      <p className="text-xs text-gray-500">새 공지사항이 등록되었습니다.</p>
                      <p className="text-xs text-gray-400">1시간 전</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-purple-100 p-2 rounded-full">
                      <Calendar className="h-3 w-3 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">일정 업데이트</p>
                      <p className="text-xs text-gray-500">학부모 설명회 일정이 변경되었습니다.</p>
                      <p className="text-xs text-gray-400">3시간 전</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-amber-100 p-2 rounded-full">
                      <Users className="h-3 w-3 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">결제 완료</p>
                      <p className="text-xs text-gray-500">이서연님의 결제가 완료되었습니다.</p>
                      <p className="text-xs text-gray-400">5시간 전</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>최근 신청 현황</CardTitle>
                <CardDescription>최근 접수된 캠프 신청 내역입니다.</CardDescription>
              </div>
              <Link href="/admin/dashboard/students">
                <Button variant="outline" size="sm">
                  모든 신청 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm">신청번호</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">이름</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">신청 과정</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">신청일</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">상태</th>
                      <th className="text-right py-3 px-4 font-medium text-sm">관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app) => (
                      <tr key={app.id} className="border-b">
                        <td className="py-3 px-4 text-sm">{app.id}</td>
                        <td className="py-3 px-4 text-sm font-medium">{app.name}</td>
                        <td className="py-3 px-4 text-sm">{app.course}</td>
                        <td className="py-3 px-4 text-sm">{app.date}</td>
                        <td className="py-3 px-4 text-sm">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              app.status === "신규"
                                ? "bg-blue-100 text-blue-800"
                                : app.status === "승인완료"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {app.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-right">
                          <Button variant="ghost" size="sm">
                            상세보기
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notices" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>최근 공지사항</CardTitle>
                <CardDescription>최근 등록된 공지사항입니다.</CardDescription>
              </div>
              <Link href="/admin/dashboard/notices">
                <Button variant="outline" size="sm">
                  모든 공지사항 보기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm">번호</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">제목</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">등록일</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">조회수</th>
                      <th className="text-right py-3 px-4 font-medium text-sm">관리</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentNotices.map((notice) => (
                      <tr key={notice.id} className="border-b">
                        <td className="py-3 px-4 text-sm">{notice.id}</td>
                        <td className="py-3 px-4 text-sm font-medium">{notice.title}</td>
                        <td className="py-3 px-4 text-sm">{notice.date}</td>
                        <td className="py-3 px-4 text-sm">{notice.views}</td>
                        <td className="py-3 px-4 text-sm text-right">
                          <Button variant="ghost" size="sm">
                            수정
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
