'use client'
import { useState } from 'react'
import { CheckCircle2, Bookmark, GraduationCap, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type TabType = 'high' | 'middle'

interface LectureItem {
  title: string
  description: string
  category: string
}

export const SpecialLectureSection = ({
  className,
}: {
  className?: string
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('high')
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

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

  // 고등학교 특강 데이터
  const highSchoolLectures: LectureItem[] = [
    {
      category: '국어',
      title: '고전 운문 읽기의 실전 감각 기르기',
      description: '운문(고전)',
    },
    {
      category: '국어',
      title: '현대시 기본기 : 유명 작품 톺아보기',
      description: '운문(현대)',
    },
    {
      category: '국어',
      title: '고전과 현대를 잇는 소설 독해 전략',
      description: '산문(고전+현대)',
    },
    {
      category: '국어',
      title: '비문학 독해 유형별 집중특강 : 경제편',
      description: '경제',
    },
    {
      category: '국어',
      title: '비문학 독해 유형별 집중특강 : 법+논리편',
      description: '법+논리',
    },
    {
      category: '영어',
      title: '영어 킬러유형 정복 : 빈칸',
      description: '빈칸',
    },
    {
      category: '영어',
      title: '영어 킬러유형 정복 : 순서,삽입',
      description: '순삽',
    },
    {
      category: '영어',
      title: '수능영어 빈출 어법 총정리',
      description: '문법',
    },
    {
      category: '수학',
      title: '원방 두려움으로부터 한 방에 해방',
      description: '원방',
    },
    {
      category: '수학',
      title: '합성함수+역함수 뽀개기',
      description: '합성+역함수',
    },
    {
      category: '수학',
      title: '이차함수 킬러문항 정복 : 수능 출제진처럼 생각하기',
      description: '이차함수(1)-대칭성, 킬러',
    },
    {
      category: '수학',
      title: '도형 울렁증 극복하기 : 다 알고 있는 것 같지? 아닐걸?^^',
      description: '도형특강',
    },
    {
      category: '수학',
      title:
        '교과서 밖 수능 함수 필수 지식 : 대칭성, 구간별로 정의된 함수, 절댓값, 주기 등',
      description: '함수특강',
    },
    {
      category: '수학',
      title: '당신이 일등급을 받을 경우의 수를 구하시오.',
      description: '경우의수 심화',
    },
  ]

  // 중학교 특강 데이터
  const middleSchoolLectures: LectureItem[] = [
    {
      category: '국어',
      title: '중학생을 위한 고전시 읽는 법',
      description: '고전시입문',
    },
    {
      category: '국어',
      title: '문학사 흐름에 따른 대표작품 살펴보기',
      description: '문학사 흐름',
    },
    {
      category: '수학',
      title: '3시간만에 중학교 도형 마스터하기',
      description: '도형특강',
    },
    {
      category: '수학',
      title: '3시간만에 중학교 함수 마스터하기',
      description: '함수특강',
    },
  ]

  // 특장점 데이터
  const features = [
    '100% 의대생 멘토로 구성',
    '골라들을 수 있는 과목별 집중특강',
    '부울경 유일 공부캠프 – 부울경에서 쉽게 접하기 어려운 프로그램',
    '(고등) 주제탐구활동 진행 : 3차시(9시간)에 걸쳐 세특을 위한 보고서 완성',
    '(중등) 매일 독서 후 독서일지 작성 : 독서활동과 연계하여 주1회 시사토론 진행 (총3권)',
    '(중등) 학생 수준별 영어 수업 진행(15차시)',
    '전교1등 의대생 멘토와 1:1 밀착과외',
    '매일 저녁 개별 상담 진행',
    '후원 병원 1일 의사체험',
    '의대생 멘토 자체제작 자료 제공',
    '전교1등 의대생 멘토 자체 제작 교재 제공',
  ]

  const activeLectures =
    activeTab === 'high' ? highSchoolLectures : middleSchoolLectures

  return (
    <div className={cn("py-10 sm:py-16 bg-gray-50", className)}>
      <div className="container">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-gray-800">특별 집중 특강</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
            원하는 과목을 자유롭게 선택하여 특강을 들을 수 있습니다. 전교1등 의대생 멘토들이 직접 제작한 자료로 진행되는 특강을 통해 효율적인 학습 방법을 배우고 취약한 부분을 보완하세요.
          </p>
        </motion.div>

        {/* 새로운 슬로건 추가 */}
        <motion.div 
          className="text-center mb-6 sm:mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-block bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-b-4 border-blue-400 shadow-md">
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              "특별 집중 특강으로{' '}
              <span className="text-blue-600 font-bold">취약 과목</span>을 잡고{' '}
              <span className="text-blue-600 font-bold">성적 향상</span>의
              기회를 잡으세요"
            </p>
          </div>
        </motion.div>

        {/* 탭 */}
        <motion.div 
          className="flex justify-center mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col sm:flex-row w-full max-w-sm sm:max-w-none">
            <button
              onClick={() => setActiveTab('high')}
              className={`px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium flex items-center justify-center ${
                activeTab === 'high'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <GraduationCap className="inline-block mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              고등학교 (14개)
            </button>
            <button
              onClick={() => setActiveTab('middle')}
              className={`px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium flex items-center justify-center ${
                activeTab === 'middle'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="inline-block mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              중학교 (4개)
            </button>
          </div>
        </motion.div>

        {/* 특강 목록 */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab} // Re-animate when tab changes
        >
          {activeLectures.map((lecture, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-gray-100 transition-all hover:shadow-lg hover:border-blue-200"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-wrap items-start gap-2 mb-2 sm:mb-3">
                <span
                  className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                    lecture.category === '국어'
                      ? 'bg-rose-100 text-rose-800'
                      : lecture.category === '영어'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {lecture.category}
                </span>
                <span className="inline-block px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                  {lecture.description}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                {lecture.title}
              </h3>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex justify-end">
                <span className="text-blue-600 text-xs sm:text-sm font-medium flex items-center">
                  <Bookmark className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  멘토 특별 제작 자료 제공
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 캠프 특장점 */}
        <motion.div 
          className="bg-white rounded-xl p-5 sm:p-8 shadow-lg border border-gray-200 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-center mb-5 sm:mb-8 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            캠프 특장점
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="bg-blue-100 rounded-full p-1 mr-2 sm:mr-3 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
