'use client'
import { Users, Clock, Brain, Book, CheckSquare, Star, FileText, Award, BookOpen, FileCheck, FileSearch, UserRound, ClipboardEdit } from "lucide-react"
import { motion } from "framer-motion"

export const CampFeaturesSection = () => {
  // Animation variants for the container elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">전교1등공부습관캠프 전일공 특징</h2>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={itemVariants}
          >
            <div className="bg-blue-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-center mb-2 text-gray-800">1:1 전담 멘토 매칭</h3>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={itemVariants}
          >
            <div className="bg-indigo-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <CheckSquare className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-center mb-2 text-gray-800">약점/공부습관케어</h3>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={itemVariants}
          >
            <div className="bg-green-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-center mb-2 text-gray-800">학습&진로 동기부여</h3>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            variants={itemVariants}
          >
            <div className="bg-yellow-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-center mb-2 text-gray-800">수업종료리뷰발송</h3>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-5 sm:p-8 shadow-lg border border-gray-100 mb-10 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-center"
            variants={itemVariants}
          >
            우리아이 공부계획<br/>어떻게 세워야할지 고민이신가요?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-700 text-center mb-4 sm:mb-6"
            variants={itemVariants}
          >
            전교1등 의대생이 1:1 밀착관리하는<br/>
            전일공과 함께 하세요
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mt-4 sm:mt-8"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-blue-50 p-3 sm:p-5 rounded-lg h-full flex items-center justify-center"
              variants={itemVariants}
            >
              <p className="text-gray-800 font-medium text-center text-xs sm:text-sm md:text-base">전교1등 의대생이 함께 세우는 3주 계획표</p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 p-3 sm:p-5 rounded-lg h-full flex items-center justify-center"
              variants={itemVariants}
            >
              <p className="text-gray-800 font-medium text-center text-xs sm:text-sm md:text-base">전교1등 의대생과 전문가의 3주완성 커리큘럼</p>
            </motion.div>
            <motion.div 
              className="bg-blue-50 p-3 sm:p-5 rounded-lg h-full flex items-center justify-center"
              variants={itemVariants}
            >
              <p className="text-gray-800 font-medium text-center text-xs sm:text-sm md:text-base">부모님께 공부의 전 과정을 매일 리뷰합니다</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl p-5 sm:p-8 shadow-lg border border-gray-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="flex flex-col items-center mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="bg-purple-100 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 text-center">수행평가, 제대로 준비하지 않으면 내신도 놓칩니다</h2>
            <div className="w-16 h-1 bg-purple-500 rounded-full mb-3"></div>
            <p className="text-base sm:text-lg text-gray-700 text-center max-w-2xl">
              전교1등 자기주도 공부습관 캠프
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gray-50 hover:bg-blue-50 p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col sm:flex-row items-center mb-3">
                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                  <FileSearch className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center sm:text-left">주제탐구활동 보고서</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">실제 탐구 경험을 토대로 학생부에 기록될 활동을 계획하고 진행합니다</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 hover:bg-indigo-50 p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col sm:flex-row items-center mb-3">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                  <FileCheck className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center sm:text-left">교과 수행평가 작성</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">내신에 반영되는 수행평가의 작성 방법과 편집 트릭을 익히고 실습합니다</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 hover:bg-green-50 p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col sm:flex-row items-center mb-3">
                <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center sm:text-left">독서활동 및 보고서</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">개인의 진로에 맞는 독서를 계획하고 학생부에 작성할 우수한 독서보고서 작성법을 익힍니다</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 hover:bg-yellow-50 p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 sm:col-span-2"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col sm:flex-row items-center mb-3">
                <div className="bg-yellow-100 rounded-full w-10 h-10 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                  <UserRound className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center sm:text-left">학생부 스스로 디자인하기</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">학생부에 기록될 내용을 미리 설계하고 기획하는 전략적 접근법을 배워봅니다</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 hover:bg-red-50 p-5 rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col sm:flex-row items-center mb-3">
                <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                  <ClipboardEdit className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center sm:text-left">자기평가서 작성방법</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">자신의 활동을 객관적으로 평가하고 가치를 드러낼 수 있는 자기평가서 작성법을 배웁니다</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="bg-purple-50 p-4 sm:p-6 rounded-lg border border-purple-100 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div className="shrink-0 bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 sm:mb-0 sm:mr-5">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-center sm:text-left">전교1등 의대멘토지도 프로그램</h4>
                <p className="text-gray-700 text-xs sm:text-sm text-center sm:text-left">
                  학종으로 의대 입시한 전교1등 의대멘토들이 개개인의 생활기록부를 분석하고 교과와 진로를 연결한 입시 맞춤형 프로그램을 진행합니다. 학생의 강점을 살리고 개선점을 보완하여 최적의 학습 성과와 입시 경쟁력을 향상시킵니다.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}