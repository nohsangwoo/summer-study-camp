"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Clock, Mail, ArrowRight, CheckCircle, Info, Calendar, DollarSign, Users, BookOpen } from "lucide-react"

export default function ApplicationGuidePage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="container py-6 md:py-10 max-w-4xl px-4 md:px-6" 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-8 md:mb-10 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-blue-800">2025 전일공 썸머캠프 신청 안내</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">국내 최고 & 국내 최다 규모의 독보적인 자기주도학습 프로그램</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex items-center mb-4">
          <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-blue-800">프로그램 정보</h2>
        </div>
        
        <Card className="mb-8 overflow-hidden border-blue-100 hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-4 md:p-6">
            <motion.div 
              className="bg-blue-50 p-4 rounded-lg mb-4 flex items-center space-x-3"
              whileHover={{ backgroundColor: "#e1f0ff" }}
            >
              <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-blue-800">자기 주도형 학습법 프로그램</h3>
            </motion.div>
            
            <div className="space-y-5">
              <div>
                <p className="font-medium mb-3 text-gray-700">
                  전국 명문고 학생들이 참여하는 자기 주도형 학습법 과정을 운영합니다.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div 
                  className="bg-white border border-blue-200 rounded-lg p-4 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-700">썸머캠프 A코스 (4주)</h4>
                  </div>
                  <div className="ml-2 text-sm md:text-base">
                    <p className="mb-1"><span className="font-medium">기간:</span> 2025.07.27(토) ~ 2025.08.16(토)</p>
                    <div className="flex items-center mt-3">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      <p>수업 시간: 10:00-14:30</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-white border border-blue-200 rounded-lg p-4 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-blue-700">썸머캠프 B코스 (3주)</h4>
                  </div>
                  <div className="ml-2 text-sm md:text-base">
                    <p className="mb-1"><span className="font-medium">기간:</span> 2025.07.27(토) ~ 2025.08.09(토)</p>
                    <div className="flex items-center mt-3">
                      <Clock className="h-4 w-4 text-blue-500 mr-2" />
                      <p>수업 시간: 10:00-14:30</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-center mb-4">
          <Calendar className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-blue-800">접수기간</h2>
        </div>
        
        <Card className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center bg-blue-50 rounded-lg p-4 mb-2">
              <div className="bg-blue-600 rounded-full p-3 mb-3 md:mb-0 md:mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-blue-800 mb-1">온라인 접수</h3>
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <p className="text-gray-700 font-medium">선착순</p>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm animate-pulse">500명 한정</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="bg-amber-50 border-l-4 border-amber-400 p-3 mt-4 rounded-r-lg"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start">
                <Info className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-700">지금 신청하시면 우선순위로 입소할 수 있습니다.</p>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-center mb-4">
          <DollarSign className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-blue-800">프로그램비</h2>
        </div>
        
        <Card className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-4 md:p-6">
            <div className="space-y-5">
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-800">썸머캠프 A코스 (4주 과정)</h3>
                </div>
                
                <div className="ml-2 md:ml-10 space-y-2">
                  <div className="flex items-center">
                    <p className="font-medium text-gray-700 w-20">기간:</p>
                    <p>25.07.27(토) ~ 25.08.16(토)</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <p className="font-medium text-gray-700 w-20">비용:</p>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <span className="line-through text-gray-500 mr-2">3,800,000원</span>
                      <div className="bg-red-100 text-red-600 font-bold px-3 py-1 inline-block rounded-md mt-1 md:mt-0">
                        할인가 3,500,000원
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm italic text-blue-700 mt-1">
                    * 5월 마감까지 사전 등록 할인가 적용
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 rounded-full p-2 mr-3">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-blue-800">썸머캠프 B코스 (3주 과정)</h3>
                </div>
                
                <div className="ml-2 md:ml-10 space-y-2">
                  <div className="flex items-center">
                    <p className="font-medium text-gray-700 w-20">기간:</p>
                    <p>25.07.27(토) ~ 25.08.09(토)</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center">
                    <p className="font-medium text-gray-700 w-20">비용:</p>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <span className="line-through text-gray-500 mr-2">2,800,000원</span>
                      <div className="bg-red-100 text-red-600 font-bold px-3 py-1 inline-block rounded-md mt-1 md:mt-0">
                        할인가 2,600,000원
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm italic text-blue-700 mt-1">
                    * 5월 마감까지 사전 등록 할인가 적용
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 border-l-4 border-amber-400 p-3 mt-4 rounded-r-lg"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-700">
                    등급은 입소 후 평가를 통해 반이 나뉴게 되며 학생 본인의 학습 역량에 따라 맞춤형 반을 구성합니다.
                    학생의 수준과 학습 역량에 맞는 맞춤형 교육을 제공하기 위해 노력하고 있습니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* 좌측 라벨 */}
              <div className="bg-blue-50 p-4 flex items-center justify-center">
                <span className="font-semibold text-blue-700">1:1 계약 체결</span>
              </div>

              {/* 우측 내용 */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="font-semibold">1개월 (1기/2주과정 포함, 1회만 결제할 시) ▶ 220,000원</p>
                </div>

                <div className="ml-7 space-y-3">
                  <p>개인 상담시, 각 과목별(1:4 지도) 구체적 학습 지도내용을 설명합니다.</p>
                  <p>(예, 수학 2개월, 영어 1개월 + 수학 1개월, 영어 6개월과 수업료 결제 시간 스케줄 조율)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-center mb-4">
          <Users className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-blue-800">선발방법</h2>
        </div>
        
        <Card className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-4 md:p-6">
            <motion.div 
              className="bg-white rounded-lg p-4 border-2 border-blue-100 shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-lg text-blue-800">선착순 선발
                  <span className="bg-red-100 text-red-600 ml-2 px-2 py-1 text-sm rounded-lg animate-pulse inline-block">예약금 100만원 납부</span>
                </h3>
              </div>
              
              <div className="ml-3 md:ml-10 space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-700">
                      예약금 납부 시 우선적으로 <span className="font-semibold">학습자 대상으로 입소확정</span>됩니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                  <p className="text-gray-700">
                    모든 학습은 철저한 관리 하에 이루어지며 학생 개개인의 학습 역량에 맞춰 맞춤형 교육을 제공합니다.
                  </p>
                </div>
                
                <motion.div 
                  className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mt-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-amber-800 font-medium mb-1">예약금 안내</p>
                      <p className="text-sm text-amber-700">
                        예약금은 (1개월분) 44만 2100원/64만원 중 우선납부 하는 금액으로 총 학습비에 포함됩니다.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>  
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex items-center mb-4">
          <Mail className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-blue-800">접수방법</h2>
        </div>
        
        <Card className="overflow-hidden border-blue-100 hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-4 md:p-6">
            <motion.div 
              className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-3">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">이메일 접수 안내</h3>
              </div>
              
              <div className="ml-2 md:ml-10">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-700">아래의 내용과 함께 이메일로 신청해주세요.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-4 border-2 border-blue-100 shadow-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="font-semibold text-gray-700 mr-3 mb-1 md:mb-0 md:w-24">신청서 양식:</div>
                  <p className="text-blue-700">이메일에 첨부해 보내주세요 <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-md text-sm">다운로드</span></p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="font-semibold text-gray-700 mr-3 mb-1 md:mb-0 md:w-24">아래 필수정보:</div>
                  <div>
                    <p><span className="text-blue-700 font-medium">학생명</span> + <span className="text-blue-700 font-medium">학부모 연락처</span></p>
                    <p className="text-sm text-gray-500 mt-1">(예약금 납부후, 오리엔테이션 ZOOM 진행)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-10">
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
            <div className="space-y-2">
              <p className="text-amber-800 font-medium">신청 안내</p>
              <p className="text-sm text-amber-700">
                신청서는 첨부된 양식 또는, 학생명과 학부모 연락처만 보내셔도 됩니다. 예약금 납부 후, 오리엔테이션은 ZOOM을 통해 진행됩니다.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className="flex justify-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/application/form">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto font-bold shadow-lg">
              캠프 신청하기
              <motion.div
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}
