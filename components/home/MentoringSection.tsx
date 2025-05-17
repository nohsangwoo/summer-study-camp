'use client'
/* 커스텀 애니메이션 CSS 클래스 추가 */
import './mentoring-section.css'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ChevronRight,
  Medal,
  Sparkles,
  BookOpen,
  Target,
  Star,
  TrendingUp,
  GraduationCap,
  Award,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'

export const MentoringSection = () => {
  const router = useRouter()

  const handleGotoApplication = () => {
    router.push('/application/form')
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">
          최고의 멘토링 프로그램
        </h2>

        {/* 새로운 슬로건 추가 */}
        <div className="max-w-3xl mx-auto mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100 hover:shadow-lg transition-all duration-300">
          <p className="text-center text-gray-700 font-medium">
            "<span className="text-blue-600 font-bold">전교1등 멘토</span>가
            알려주는 공부법으로{' '}
            <span className="text-indigo-600 font-bold">내 아이도 전교1등</span>
            이 될 수 있습니다"
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          {/* 첫 번째 배너 */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg overflow-hidden mb-6 p-8 py-10 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative">
            <div className="absolute top-0 right-0 mt-4 mr-4 animate-pulse">
              <Medal className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-yellow-300 font-extrabold text-3xl md:text-4xl mb-6 text-center flex items-center justify-center">
              <Sparkles className="w-8 h-8 mr-2 animate-pulse text-yellow-300" />
              100% 최정예 전교1등 의대생 멘토 군단
              <Sparkles className="w-8 h-8 ml-2 animate-pulse text-yellow-300" />
            </h3>
            <div className="text-center text-white text-2xl md:text-3xl font-bold mt-4 animate-bounce-slow">
              전교1등공부습관캠프 전일공{' '}
              <span className="text-yellow-300">1555-1157</span>
            </div>
          </div>

          {/* 두 번째 배너 */}
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-lg overflow-hidden mb-6 p-10 py-12 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <BookOpen className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-yellow-300 font-extrabold text-2xl md:text-3xl mb-6 text-center flex items-center justify-center">
              <Target className="w-6 h-6 mr-2 text-yellow-300" />
              아이 학원 진도 때문에 망설이지 마세요
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-white text-lg md:text-xl font-bold text-center bg-blue-600 bg-opacity-40 p-3 rounded-lg transform hover:scale-105 transition-transform duration-300">
                취약한 과목 골라들을 수 있는 과목별 집중특강 프로그램
              </p>
              <p className="text-white text-lg md:text-xl font-bold text-center bg-blue-600 bg-opacity-40 p-3 rounded-lg transform hover:scale-105 transition-transform duration-300">
                공부습관과 함께 전교1등 의대생 쌤에게 1:1 과외 까지
              </p>
            </div>
            <div className="text-center text-yellow-300 text-2xl font-bold mt-6 flex items-center justify-center">
              <Star className="h-6 w-6 mr-2 animate-spin-slow" />
              전교1등공부습관캠프 전일공
              <Star className="h-6 w-6 ml-2 animate-spin-slow" />
            </div>
          </div>

          {/* 세 번째 배너 */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg overflow-hidden p-10 py-14 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <Award className="h-10 w-10 text-yellow-300" />
            </div>
            <h3 className="text-yellow-300 font-extrabold text-3xl md:text-4xl mb-6 text-center flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-2 text-yellow-300" />
              여름방학 3주 전일공캠프
            </h3>
            <div className="text-white text-xl md:text-2xl font-bold text-center mb-8 bg-blue-700 bg-opacity-30 p-4 rounded-lg">
              전교1등 의대생 1:1 집중 프로미엄 공부습관캠프
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <BookOpen className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  공부습관
                </span>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <Target className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  학습태도
                </span>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <TrendingUp className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  진도
                </span>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center flex flex-col items-center justify-center h-24 transform hover:scale-110 transition-transform duration-300 shadow-md">
                <GraduationCap className="h-8 w-8 text-yellow-300 mb-2" />
                <span className="text-yellow-300 font-bold text-lg md:text-xl">
                  성적향상
                </span>
              </div>
            </div>
            <div className="text-center text-white text-2xl font-bold mt-6 animate-pulse-slow">
              전교1등공부습관캠프{' '}
              <span className="text-yellow-300">전일공</span>
            </div>
          </div>

          {/* 네 번째 배너 (새로 추가) */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl overflow-hidden p-12 py-24 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer relative mt-6">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-3">
              <GraduationCap className="h-10 w-10 text-yellow-300 animate-pulse" />
              <Award className="h-8 w-8 text-yellow-300 animate-spin-slow" />
              <Medal className="h-12 w-12 text-yellow-300 animate-bounce-slow" />
            </div>

            <div className="relative z-10">
              <h2 className="text-yellow-300 font-extrabold text-4xl md:text-5xl mb-8 text-center">
                여름방학 3주 전교1등공부습관캠프
              </h2>

              <div className="max-w-3xl mx-auto bg-indigo-600 bg-opacity-40 rounded-xl p-6 mb-10 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <h3 className="text-white text-2xl md:text-4xl font-bold mb-4 text-center">
                  성적향상은
                </h3>
                <p className="text-yellow-300 text-3xl md:text-5xl font-extrabold text-center">
                  공부습관이 답입니다
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="flex-1 bg-blue-700 bg-opacity-40 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <Sparkles className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white text-xl font-bold text-center leading-relaxed">
                    인성과 실력을 겸비한
                    <br />
                    부산대의대 멘토들이
                    <br />
                    뭉쳤습니다
                  </p>
                </div>

                <div className="flex-1 bg-blue-700 bg-opacity-40 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <Target className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white text-xl font-bold text-center leading-relaxed">
                    지역에 공부봉사활동을 위해
                    <br />
                    뭉친 멘토군단
                  </p>
                </div>

                <div className="flex-1 bg-blue-700 bg-opacity-40 rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-white text-xl font-bold text-center leading-relaxed">
                    과목별 전문가들의
                    <br />
                    체계적인 멘토링으로
                    <br />
                    캠프 효율을 극대화합니다
                  </p>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={handleGotoApplication}
                  className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  지금 바로 신청하기 →
                </button>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="text-center mb-8 my-12 md:my-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 px-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            전교1등공부습관캠프 1:1 멘토진
          </motion.h3>
          <motion.div 
            className="max-w-4xl mx-auto text-gray-700 mb-8 bg-white md:p-6 rounded-lg shadow-lg border-2 border-blue-100 md:mx-auto border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
          
            <div className="space-y-4 md:space-y-6 text-left">
              <motion.div 
                className="flex flex-wrap items-center justify-center mb-3 md:mb-4"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-10 md:w-20 h-1 bg-blue-500 rounded mr-2 md:mr-3"></div>
                <span className="text-lg md:text-xl font-semibold text-blue-800 my-2">
                  전일공 캠프
                </span>
                <div className="w-10 md:w-20 h-1 bg-blue-500 rounded ml-2 md:ml-3"></div>
              </motion.div>

              <motion.div 
                className="bg-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-blue-500 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "rgb(239, 246, 255)" }}
              >
                <motion.div 
                  className="flex flex-wrap items-start mb-3 md:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-blue-600 rounded-full p-1 md:p-2 mr-2 md:mr-3 flex-shrink-0 mb-1 md:mb-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgb(37, 99, 235)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-800">
                    특별 프로그램
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <span className="block md:inline">영어·수학·국어 진도 유지부터</span>{' '}
                  <span className="block md:inline">의대(명문대) 합격 전략 상담,</span>
                  <span className="block md:inline">자기주도 생기부 설계,</span>{' '}
                  <motion.span 
                    className="font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block mt-2 md:mt-0 mb-1"
                    whileHover={{ backgroundColor: "rgb(219, 234, 254)" }}
                  >
                    후원 병원인 큰솔병원에서의 1일 의사체험
                  </motion.span>
                  까지
                </motion.p>
              </motion.div>

              <motion.div 
                className="bg-yellow-50 p-4 md:p-6 rounded-lg border-l-4 border-yellow-500 mt-5 md:mt-6 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "rgb(254, 249, 195)" }}
              >
                <motion.div 
                  className="flex flex-wrap items-start mb-3 md:mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-yellow-500 rounded-full p-1 md:p-2 mr-2 md:mr-3 flex-shrink-0 mb-1 md:mb-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgb(234, 179, 8)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold text-yellow-800">
                    전문연구팀 구성
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    className="font-semibold text-blue-600 inline-block md:inline mt-1 mb-1 md:mt-0 md:mb-0"
                    whileHover={{ color: "rgb(37, 99, 235)" }}
                  >
                    전문연구팀인 공부습관연구소
                  </motion.span>
                  <span className="block md:inline">(콘텐츠개발, 학습법연구, 인사관리, 입시전략개발)와</span>
                  <motion.span 
                    className="font-semibold text-blue-600 inline-block md:inline mt-2 mb-1 md:mt-0 md:mb-0"
                    whileHover={{ color: "rgb(37, 99, 235)" }}
                  >
                    입시전문가 전략담당교수
                  </motion.span>
                  <span className="block md:inline">가 함께하는 이번 캠프에서,</span>{' '}
                  <span className="block md:inline">의대 및 명문대를 준비하는 여러분의</span>
                  <span className="block md:inline">꿈을 실현할 수 있도록 최선을 다해 도우겠습니다.</span>
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          <motion.p 
            className="text-gray-700 mb-8 mx-3 md:mx-auto text-base md:text-lg leading-relaxed px-2 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            위 대표멘토들이 함께 활동하던 지역의 의대생들만 20여명을 엄선하여
            <motion.span 
              className="font-semibold text-blue-700 mx-1"
              whileHover={{ color: "rgb(29, 78, 216)" }}
            >
              100% 인성+실력을 겨비한 정예멘토들
            </motion.span>
            로 구성 하여 
            <motion.span 
              className="font-semibold text-blue-700 mx-1"
              whileHover={{ color: "rgb(29, 78, 216)" }}
            >
              1:5 전담 멘토제로 운영됩니다
            </motion.span>
          </motion.p>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Mentor Cards with animation */}
              {[
                { name: "김동현", school: "부산대의대", image: "/mentors/kimdongheon.webp" },
                { name: "장서원", school: "부산대의대", image: "/mentors/jangserwon.webp" },
                { name: "윤태현", school: "부산대의대", image: "/mentors/yoontaehyun.webp" },
                { name: "이상민", school: "부산대의대", image: "/mentors/yoontaehyun.webp" }
              ].map((mentor, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.03, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative w-full" style={{ paddingTop: "120%" }}>
                    <Image
                      src={mentor.image}
                      alt={`${mentor.name} 멘토`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center 15%" }}
                    />
                  </div>
                  <motion.div 
                    className="p-3 text-center"
                  >
                    <p className="text-gray-700 font-medium">
                      {mentor.school}
                      <br />
                      {mentor.name}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-10" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              ease: "easeOut" 
            }}
            viewport={{ once: true }}
          >
            <Link href="/metoda/lineup">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-100 transition-all duration-300"
                >
                  멘토진 더 알아보기
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
