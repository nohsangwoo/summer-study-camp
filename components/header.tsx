'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight, BookOpen, Users, Home, Calendar, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const mainMenuItems = [
  {
    title: '캠프안내',
    href: '/', // Changed from "/camp-info/greeting" to "/camp-info"
    subMenu: [
      { title: '메인페이지', href: '/' },
      { title: '대표인사말', href: '/camp-info/greeting' },
      { title: '추천사', href: '/camp-info/recommendations' },
      { title: '캠프시설', href: '/camp-info/facilities' },
      { title: '캠프안내', href: '/camp-info/guide' },
      { title: '커리큘럼', href: '/camp-info/curriculum' },
      { title: '멘토소개', href: '/camp-info/mentors' },
    ],
  },
  {
    title: '공부습관연구소',
    href: '/metoda/director-greeting', // 첫 번째 하위 메뉴 항목으로 변경
    subMenu: [
      { title: '연구소장인사말', href: '/metoda/director-greeting' },
      { title: '연구소라인업', href: '/metoda/lineup' },
      { title: '연구소역할', href: '/metoda/role' },
      { title: '멘토단', href: '/metoda/about' },
      { title: '전략담임소개', href: '/metoda/strategy-teachers' },
      { title: '전략담임역할', href: '/metoda/strategy-teachers-role' },
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
    title: '입소상담',
    href: '/admission',
    subMenu: [],
  },
  {
    title: '캠프신청',
    href: '/application/guide', // 첫 번째 하위 메뉴 항목으로 변경
    subMenu: [
      { title: '신청안내', href: '/application/guide' },
      { title: '캠프신청', href: '/application/form' },
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  
  const toggleExpand = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title)
  }
  
  // Get icon based on menu title
  const getMenuIcon = (title: string) => {
    switch (title) {
      case '캠프안내':
        return <Home className="h-4 w-4" />
      case '공부습관연구소':
        return <BookOpen className="h-4 w-4" />
      case '입소상담':
        return <Phone className="h-4 w-4" />
      case '캠프신청':
        return <Calendar className="h-4 w-4" />
      default:
        return <ChevronRight className="h-4 w-4" />
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex flex-col items-start space-y-0">
            <span className="font-medium text-sm md:text-base bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight">
              전교1등공부습관캠프
            </span>
            <span className="font-extrabold text-xl md:text-3xl bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight">
              전일공
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
          {mainMenuItems.map(item => (
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
                    {item.subMenu.map(subItem => (
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm md:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="container flex h-16 items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-6">
                <Link href="/" className="flex flex-col items-start space-y-0" onClick={() => setIsMenuOpen(false)}>
                  <span className="font-medium text-sm bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight">
                    전교1등공부습관캠프
                  </span>
                  <span className="font-extrabold text-xl bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent leading-tight">
                    전일공
                  </span>
                </Link>
              </div>
              <motion.div
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="메뉴 닫기"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-blue-50 hover:bg-blue-100"
                >
                  <X className="h-5 w-5 text-blue-600" />
                  <span className="sr-only">메뉴 닫기</span>
                </Button>
              </motion.div>
            </motion.div>
            
            <nav className="container py-4">
              <motion.div 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                {mainMenuItems.map((item, index) => (
                  <motion.div 
                    key={item.title} 
                    className="border-b border-gray-100 last:border-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05) }}
                  >
                    <div className="flex items-center justify-between">
                      {/* If there's a submenu, don't navigate on main menu click, just toggle dropdown */}
                      {item.subMenu.length > 0 ? (
                        <div 
                          className="flex items-center gap-3 p-4 text-base font-medium text-gray-800 hover:text-blue-600 transition-colors w-full cursor-pointer"
                          onClick={() => toggleExpand(item.title)}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600">
                            {getMenuIcon(item.title)}
                          </div>
                          <span>{item.title}</span>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 p-4 text-base font-medium text-gray-800 hover:text-blue-600 transition-colors w-full"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600">
                            {getMenuIcon(item.title)}
                          </div>
                          <span>{item.title}</span>
                        </Link>
                      )}
                      {item.subMenu.length > 0 && (
                        <motion.div
                          className="mr-4"
                          animate={{ rotate: expandedItem === item.title ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </motion.div>
                      )}
                    </div>
                    
                    {item.subMenu.length > 0 && (
                      <AnimatePresence>
                        {expandedItem === item.title && (
                          <motion.div 
                            className="bg-gray-50 overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-2 pt-0">
                              {item.subMenu.map((subItem, subIndex) => (
                                <motion.div
                                  key={subItem.title}
                                  initial={{ opacity: 0, x: -5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.05 * subIndex }}
                                >
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center rounded-md pl-12 pr-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <span>{subItem.title}</span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-gray-500">
                  전교1등 의대생 멘토와 함께하는<br />
                  <span className="text-blue-600 font-medium">전일공</span> 캠프에 참여하세요
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
