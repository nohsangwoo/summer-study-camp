"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  FileText,
  BookOpen,
  Calendar,
  Settings,
  LogOut,
  Menu,
  Bell,
  User,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}

export default function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  const navItems = [
    {
      title: "대시보드",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "학생 관리",
      href: "/admin/dashboard/students",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "공지사항 관리",
      href: "/admin/dashboard/notices",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "프로그램 관리",
      href: "/admin/dashboard/programs",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "일정 관리",
      href: "/admin/dashboard/schedule",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "설정",
      href: "/admin/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 사이드바 */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-0 md:w-20"
        } flex-shrink-0 hidden md:block`}
      >
        <div className="h-full flex flex-col">
          {/* 로고 */}
          <div
            className={`h-16 flex items-center px-6 border-b border-gray-200 ${isSidebarOpen ? "" : "justify-center"}`}
          >
            {isSidebarOpen ? (
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                관리자 페이지
              </h1>
            ) : (
              <span className="text-xl font-bold text-blue-600">A</span>
            )}
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                } ${isSidebarOpen ? "" : "justify-center"}`}
              >
                {item.icon}
                {isSidebarOpen && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}
          </nav>

          {/* 로그아웃 버튼 */}
          <div className="p-4 border-t border-gray-200">
            <Link href="/admin">
              <Button
                variant="ghost"
                className={`w-full flex items-center text-gray-700 hover:text-red-600 hover:bg-red-50 ${
                  isSidebarOpen ? "" : "justify-center"
                }`}
              >
                <LogOut className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-2">로그아웃</span>}
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 헤더 */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="mr-2 hidden md:flex"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">메뉴 토글</span>
            </Button>

            {/* 모바일 메뉴 버튼 */}
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">모바일 메뉴</span>
            </Button>

            <h2 className="text-lg font-semibold text-gray-800 md:hidden">관리자 페이지</h2>
          </div>

          <div className="flex items-center space-x-3">
            {/* 알림 */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* 사용자 메뉴 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium">관리자</div>
                    <div className="text-xs text-gray-500">admin@example.com</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필 설정</DropdownMenuItem>
                <DropdownMenuItem>비밀번호 변경</DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link href="/admin">
                  <DropdownMenuItem className="text-red-600">로그아웃</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* 페이지 콘텐츠 */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
