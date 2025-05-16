'use client'
import Image from 'next/image'
import { Quote, Award, BookOpen, User, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function GreetingPage() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sm:px-6 py-6 space-y-8"
    >
      {/* 페이지 타이틀 */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 pb-4 border-b border-gray-200"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">대표인사말</h1>
        <p className="text-sm sm:text-base text-gray-600">부산대학교 의과대학 의학과 김동헌 대표</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* 대표 사진 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-1/3 flex-shrink-0"
        >
          <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-gray-100 p-3 sm:p-4 border border-gray-200">
            <Image
              src="/mentors/kimdongheon_whole.webp"
              alt="김동헌 대표"
              width={400}
              height={500}
              className="mx-auto rounded-md w-full h-auto shadow-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-600/80 text-white p-3 sm:p-4 text-center">
              <h3 className="text-base sm:text-lg font-medium">부산대 의대</h3>
              <h2 className="text-lg sm:text-xl font-bold">김동헌</h2>
            </div>
          </div>
        </motion.div>

        {/* 인사말 내용 */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <div className="flex items-start mb-5 sm:mb-6">
            <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 mr-2 flex-shrink-0 mt-1" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">대표 인사말</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-blue-50 p-3 sm:p-4 rounded-lg border-l-4 border-blue-400"
            >
              <p className="text-blue-600 text-lg sm:text-xl font-semibold italic">
                "공부는 습관이고, 전략입니다 — 의대생이 함께하는 3주, 당신의
                공부가 달라집니다."
              </p>
            </motion.div>

            <motion.p variants={itemVariants}>
              안녕하세요. 대표 겸 연구소장을 맡고 있는 부산대학교 의과대학
              의학과 김동헌입니다.
            </motion.p>

            <motion.p variants={itemVariants}>
              저는 대학 입학 후, 같은 학교 의대생들과 함께 메디쌤이라는
              교육봉사그룹을 만들어 중·고등학생을 대상으로 다양한 학습 멘토링
              활동을 해왔습니다. 현장에서 만난 수많은 학생들은 단순히 정보를
              몰라서가 아니라, 자신에게 맞는 공부 방법을 찾지 못해 헤매고,
              습관을 만들지 못해 무너지고, 마음을 붙잡을 동기가 부족해서
              지쳐가는 경우가 많았습니다.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="my-6 px-3 py-4 sm:py-5 bg-gray-50 rounded-lg border border-gray-200 text-center"
            >
              <p className="font-medium text-gray-800">
                그 과정에서 느꼈습니다.
                <br />
                <span className="text-blue-600 font-semibold">"진짜 도움이 되는 교육"</span>은 단기적인 조언이 아니라,
                <br />
                학생이 스스로 성장할 수 있는 시스템과 환경을 만들어주는 일이라는
                것을요.
              </p>
            </motion.div>

            <motion.p variants={itemVariants}>
              이런 생각을 바탕으로, 저는 '메디쌤'을 넘어 더 많은 학생들에게
              다가가기 위해 교육 플랫폼 전일공을 만들었습니다.
            </motion.p>

            <motion.p variants={itemVariants}>
              이번 캠프는 전일공의 핵심 프로그램이자, 가장 공들여 준비한
              프로젝트입니다.
            </motion.p>

            <motion.p variants={itemVariants}>
              이 캠프는 단순한 공부 캠프가 아닙니다. 저와 함께 캠프를 운영하는
              25명의 의대 멘토들은 각자 다른 환경과 방식으로 입시에 성공한
              사람들이며, 효율적인 공부 전략, 시간 관리, 마음 관리, 그리고
              자기주도적 학습 습관 형성에 대한 실질적인 노하우를 가지고
              있습니다. 그 내용을 실제 학생들에게 맞춤형으로 전하고, 캠프
              이후에도 스스로를 관리할 수 있도록 도와주는 것이 우리가 진심으로
              추구하는 목표입니다.
            </motion.p>

            <motion.p variants={itemVariants}>
              3주라는 시간 동안 여러분은 단지 '공부를 배우는 것'을 넘어서,
              '공부하는 나'를 새롭게 설계하게 될 것입니다. 계획을 세우고,
              실천하고, 피드백을 받으며, 자기만의 루틴을 완성해 나가는 경험
              속에서 여러분은 '공부를 잘할 수 있는 사람'으로 성장하게 될
              것입니다.
            </motion.p>

            <motion.p variants={itemVariants}>
              공부는 단기간의 열정이 아니라, 방향을 알고 가는 마라톤입니다. 그
              출발점에서, 조금 앞서 달리고 있는 선배로서, 그리고 신뢰할 수 있는
              멘토로서 이 여름을 함께하고 싶습니다.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-5 border-l-4 border-blue-500 rounded-lg my-6 shadow-sm"
            >
              <p className="text-base sm:text-lg font-medium text-blue-800 flex items-start">
                <Heart className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                <span>
                  여러분의 공부에 방향이 생기고, 습관이 바뀌는 3주.
                  <br />그 변화의 출발점을 함께 만들 수 있기를 진심으로
                  기대합니다.
                </span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* 학력 및 경력 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 sm:mt-12 bg-gradient-to-b from-gray-50 to-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-sm"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
          <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 mr-2" />
          학력 및 경력
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
          >
            <h4 className="text-base sm:text-lg font-semibold text-blue-700 mb-3 sm:mb-4 flex items-center">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              학력
            </h4>
            <ul className="space-y-2 list-disc list-inside text-sm sm:text-base text-gray-700">
              <motion.li
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >부산대학교 의과대학 의학과 재학</motion.li>
              <motion.li
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
              >부산남고등학교 수석 졸업</motion.li>
              <motion.li
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >부산남고등학교 수석 입학</motion.li>
              <motion.li
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 }}
              >전국 수학 올림피아드 수상</motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
          >
            <h4 className="text-base sm:text-lg font-semibold text-blue-700 mb-3 sm:mb-4 flex items-center">
              <User className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              경력
            </h4>
            <ul className="space-y-2 list-disc list-inside text-sm sm:text-base text-gray-700">
              <motion.li
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >의대생 멘토링 캠프 전일공 대표</motion.li>
              <motion.li
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
              >학습 멘토링 4년</motion.li>
              <motion.li
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >수학, 과학 학원 강사 3년</motion.li>
              <motion.li
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 }}
              >{`현) 의대생교육봉사그룹 메디쌤 대표`}</motion.li>
              <motion.li
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >{`전) 부산대학교 의예과 학생회장`}</motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* 서명 */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-end mt-8"
      >
        <div className="text-right bg-blue-50 rounded-lg px-6 py-3 shadow-sm border border-blue-100">
          <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-1">
            전일공대표멘토
          </h3>
          <h4 className="text-xl sm:text-2xl font-bold text-gray-800">김동헌</h4>
        </div>
      </motion.div>
    </motion.div>
  )
}
