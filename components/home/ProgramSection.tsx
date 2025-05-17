'use client'

import Link from 'next/link'
import { BookOpen, GraduationCap, Brain, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export const ProgramSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            프로그램 소개
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            의대 합격을 위한 체계적인 프로그램으로 여러분의 꿈을 현실로 만들어
            드립니다.
          </motion.p>
        </motion.div>

        {/* 새로운 슬로건 추가 */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <p className="font-medium">
              "전교1등 공부습관캠프는{' '}
              <span className="font-bold">공부방법부터 달라집니다</span>"
            </p>
          </motion.div>
        </motion.div>

        {/* 프로그램 버튼 */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/program/study-habits" className="block">
              <motion.div 
                className="rounded-xl p-4 md:p-8 flex flex-col items-center justify-center h-36 md:h-48 bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 shadow-sm group relative overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 15px 30px -5px rgba(59, 130, 246, 0.3)",
                  borderColor: "rgb(147, 197, 253)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-2 h-full bg-blue-500"
                  whileHover={{ width: "100%", opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-blue-500 mb-2 md:mb-4" />
                </motion.div>
                <span className="text-blue-600 font-bold text-base md:text-xl">
                  공부습관
                </span>
                <p className="text-blue-500/80 text-xs md:text-sm mt-1 md:mt-2 text-center">
                  효율적인 학습 방법과 습관 형성
                </p>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/program/progress-maintenance" className="block">
              <motion.div 
                className="rounded-xl p-4 md:p-8 flex flex-col items-center justify-center h-36 md:h-48 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow-sm group relative overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 15px 30px -5px rgba(99, 102, 241, 0.3)",
                  borderColor: "rgb(165, 180, 252)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-2 h-full bg-indigo-500"
                  whileHover={{ width: "100%", opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-indigo-500 mb-2 md:mb-4" />
                </motion.div>
                <span className="text-indigo-600 font-bold text-base md:text-xl">
                  진도유지
                </span>
                <p className="text-indigo-500/80 text-xs md:text-sm mt-1 md:mt-2 text-center">
                  체계적인 학습 진도 관리
                </p>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/program/self-directed-research" className="block">
              <motion.div 
                className="rounded-xl p-4 md:p-8 flex flex-col items-center justify-center h-36 md:h-48 bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 shadow-sm group relative overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 15px 30px -5px rgba(20, 184, 166, 0.3)",
                  borderColor: "rgb(153, 246, 228)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-2 h-full bg-teal-500"
                  whileHover={{ width: "100%", opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Brain className="h-8 w-8 md:h-10 md:w-10 text-teal-500 mb-2 md:mb-4" />
                </motion.div>
                <span className="text-teal-600 font-bold text-base md:text-xl text-center">
                  자기주도
                  <br />
                  주제탐구
                </span>
                <p className="text-teal-500/80 text-xs md:text-sm mt-1 md:mt-2 text-center">
                  창의적 사고력 향상
                </p>
              </motion.div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/program/med-school-care" className="block">
              <motion.div 
                className="rounded-xl p-4 md:p-8 flex flex-col items-center justify-center h-36 md:h-48 bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 shadow-sm group relative overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 15px 30px -5px rgba(244, 63, 94, 0.3)",
                  borderColor: "rgb(254, 205, 211)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute top-0 left-0 w-2 h-full bg-rose-500"
                  whileHover={{ width: "100%", opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.15, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Award className="h-8 w-8 md:h-10 md:w-10 text-rose-500 mb-2 md:mb-4" />
                </motion.div>
                <span className="text-rose-600 font-bold text-base md:text-xl text-center">
                  의대.명문대입시
                  <br />
                  토탈케어
                </span>
                <p className="text-rose-500/80 text-xs md:text-sm mt-1 md:mt-2 text-center">
                  의대/명문대합격을 위한 종합관리
                </p>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
