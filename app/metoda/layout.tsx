"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import SidebarLink from "@/components/sidebar-link"
import Link from "next/link"
import { ChevronDown, BookOpen, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface MetodaLayoutProps {
  children: ReactNode
}

export default function MetodaLayout({ children }: MetodaLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  
  // Get the current page name for mobile dropdown display
  const navItems = [
    { href: "/metoda/director-greeting", label: "연구소장인사말" },
    { href: "/metoda/lineup", label: "연구소라인업" },
    { href: "/metoda/role", label: "연구소역할" },
    { href: "/metoda/about", label: "멘토단" },
    { href: "/metoda/strategy-teachers", label: "전략담임소개" },
    { href: "/metoda/strategy-teachers-role", label: "전략담임역할" },
  ]
  
  const currentPage = navItems.find(item => item.href === pathname)?.label || "연구소장인사말"
  
  // Check if on mobile when component mounts
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* 멘토단 헤더 */}
      <motion.div 
        className="w-full border-b border-gray-200 py-6 sm:py-8 bg-gradient-to-r from-purple-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">공부습관연구소</h1>
        </div>
      </motion.div>

      <div className="container flex flex-col md:flex-row py-4 sm:py-8 gap-4 sm:gap-8 px-0 sm:px-8">
        {/* 모바일 메뉴 - 드롭다운 형태 */}
        <div className="md:hidden w-full mb-4">
          <motion.div 
            className="w-full relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200 text-left"
            >
              <div className="flex items-center">
                <div className="mr-2 bg-purple-50 p-1 rounded text-purple-600">
                  <BookOpen size={16} />
                </div>
                <span className="font-medium">{currentPage}</span>
              </div>
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  className="absolute top-full left-0 right-0 mt-1 rounded-lg overflow-hidden shadow-md z-10 bg-white border border-gray-200"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 hover:bg-gray-50 ${pathname === item.href ? 'text-purple-600 font-medium bg-purple-50' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        
        {/* 데스크톱 사이드바 */}
        <motion.div 
          className="hidden md:block w-64 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 sticky top-24">
            <SidebarLink href="/metoda/director-greeting" label="연구소장인사말" />
            <SidebarLink href="/metoda/lineup" label="연구소라인업" />
            <SidebarLink href="/metoda/role" label="연구소역할" />
            <SidebarLink href="/metoda/about" label="멘토단" />
            <SidebarLink href="/metoda/strategy-teachers" label="전략담임소개" />
            <SidebarLink href="/metoda/strategy-teachers-role" label="전략담임역할" />
          </div>
        </motion.div>

        {/* 메인 콘텐츠 */}
        <motion.div 
          className="flex-1 bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
