"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const mainMenuItems = [
  {
    title: "캠프안내",
    href: "/", // Changed from "/camp-info/greeting" to "/camp-info"
    subMenu: [
      { title: "메인페이지", href: "/" },
      { title: "대표인사말", href: "/camp-info/greeting" },
      { title: "추천사", href: "/camp-info/recommendations" },
      { title: "캠프시설", href: "/camp-info/facilities" },
      { title: "캠프안내", href: "/camp-info/guide" },
      { title: "커리큘럼", href: "/camp-info/curriculum" },
      { title: "멘토소개", href: "/camp-info/mentors" },
    ],
  },
  {
    title: "멘토단",
    href: "/metoda/director-greeting", // 첫 번째 하위 메뉴 항목으로 변경
    subMenu: [
      { title: "연구소장인사말", href: "/metoda/director-greeting" },
      { title: "연구소라인업", href: "/metoda/lineup" },
      { title: "연구소역할", href: "/metoda/role" },
      { title: "멘토단", href: "/metoda/about" },
      { title: "전략담임소개", href: "/metoda/strategy-teachers" },
      { title: "전략담임역할", href: "/metoda/strategy-teachers-role" },
    ],
  },
  // {
  //   title: "프로그램",
  //   href: "/program/med-school-consultation", // 첫 번째 하위 메뉴 항목으로 변경
  //   subMenu: [
  //     { title: "의대합격심층상담", href: "/program/med-school-consultation" },
  //     { title: "종합전형대비주제탐구", href: "/program/comprehensive-exploration" },
  //     { title: "의대생기부토탈케어", href: "/program/med-student-care" },
  //     { title: "개인 교과 진도유지", href: "/program/individual-curriculum" },
  //     { title: "상담문의", href: "/program/inquiry" },
  //   ],
  // },
  {
    title: "입소상담",
    href: "/admission",
    subMenu: [],
  },
  {
    title: "캠프신청",
    href: "/application/guide", // 첫 번째 하위 메뉴 항목으로 변경
    subMenu: [
      { title: "신청안내", href: "/application/guide" },
      { title: "캠프신청", href: "/application/form" },
    ],
  },
  // {
  //   title: "공지사항",
  //   href: "/notice",
  //   subMenu: [],
  // },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              썸머 공부습관 캠프
            </span>
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="메뉴 열기"
            className="mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">메뉴 토글</span>
          </Button>
        </div>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex gap-6">
          {mainMenuItems.map((item) => (
            <div key={item.title} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-sm font-medium transition-colors hover:text-blue-600"
              >
                {item.title}
              </Link>

              {item.subMenu.length > 0 && (
                <div className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-lg shadow-lg min-w-[200px] z-50 overflow-hidden">
                  <div className="p-1">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-md transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                썸머 공부습관 캠프
              </span>
            </Link>
            <Button variant="ghost" size="icon" aria-label="메뉴 닫기" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">메뉴 닫기</span>
            </Button>
          </div>
          <nav className="container grid gap-6 pb-8 pt-6">
            {mainMenuItems.map((item) => (
              <div key={item.title} className="space-y-3">
                <Link
                  href={item.href}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.subMenu.length > 0 && (
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
