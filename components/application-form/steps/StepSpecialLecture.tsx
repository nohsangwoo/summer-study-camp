'use client'

import { useState, useEffect } from "react"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog"
import { InfoIcon, GraduationCap, BookOpen, Bookmark, X } from "lucide-react"
import { UseFormReturn } from "react-hook-form"
import { FormValues, studentGradeOptions } from "../FormSchema"
import { StepType, nextStep, prevStep, getStepNumber, STEP_LABELS } from "../FormUtils"

// SpecialLectureSection 컴포넌트에서 사용하는 특강 데이터를 가져옴
interface LectureItem {
  title: string
  description: string
  category: string
  content?: string // 추가적인 상세 내용
}

// 고등학교 특강 데이터
const highSchoolLectures: LectureItem[] = [
  { category: "국어", title: "고전 운문 읽기의 실전 감각 기르기", description: "운문(고전)", content: "고전 운문의 특징과 이해 방법, 주요 작품 분석 등을 배웁니다. 수능과 내신에 자주 출제되는 작품을 중심으로 학습합니다." },
  { category: "국어", title: "현대시 기본기 : 유명 작품 톺아보기", description: "운문(현대)", content: "현대시의 주요 작품과 이해 방법, 핵심 기법을 배웁니다. 수능 기출 문제를 중심으로 실전 감각을 키울 수 있습니다." },
  { category: "국어", title: "고전과 현대를 잇는 소설 독해 전략", description: "산문(고전+현대)", content: "고전 소설과 현대 소설의 연결점을 분석하고, 공통적인 독해 전략을 학습합니다. 서사 구조와 인물 분석 방법을 익힙니다." },
  { category: "국어", title: "비문학 독해 유형별 집중특강 : 경제편", description: "경제", content: "경제 관련 비문학 지문의 특징과 독해 방법을 배웁니다. 자주 등장하는 경제 개념과 용어를 학습하고 지문 분석 연습을 합니다." },
  { category: "국어", title: "비문학 독해 유형별 집중특강 : 법+논리편", description: "법+논리", content: "법과 논리 관련 비문학 지문의 특징과 독해 방법을 배웁니다. 논리적 오류 찾기와 주장-근거 관계 파악 연습을 합니다." },
  { category: "영어", title: "영어 킬러유형 정복 : 빈칸", description: "빈칸", content: "수능 영어의 최고 난도 유형인 빈칸 추론 문제의 해결 전략을 배웁니다. 문맥 파악과 논리적 사고력을 향상시킵니다." },
  { category: "영어", title: "영어 킬러유형 정복 : 순서,삽입", description: "순삽", content: "수능 영어의 고난도 유형인 문장 순서 배열과 문장 삽입 문제의 해결 전략을 배웁니다. 글의 흐름과 논리 구조 파악 방법을 익힙니다." },
  { category: "영어", title: "수능영어 빈출 어법 총정리", description: "문법", content: "수능과 내신에 자주 출제되는 영어 어법 사항을 총정리합니다. 문법적 오류를 찾는 연습과 실전 문제 풀이를 병행합니다." },
  { category: "수학", title: "원방 두려움으로부터 한 방에 해방", description: "원방", content: "원과 방정식 관련 문제의 해결 전략을 배웁니다. 기하와 대수의 연결성을 이해하고 다양한 문제 해결 방법을 익힙니다." },
  { category: "수학", title: "합성함수+역함수 뽀개기", description: "합성+역함수", content: "합성함수와 역함수의 개념과 성질을 깊이 이해하고, 관련 문제 해결 방법을 배웁니다. 수능 고난도 문항 대비 전략을 익힙니다." },
  { category: "수학", title: "이차함수 킬러문항 정복 : 수능 출제진처럼 생각하기", description: "이차함수(1)-대칭성, 킬러", content: "이차함수의 성질과 그래프를 활용한 고난도 문제 해결 전략을 배웁니다. 수능 출제 경향과 패턴을 분석하여 효과적인 학습법을 익힙니다." },
  { category: "수학", title: "도형 울렁증 극복하기 : 다 알고 있는 것 같지? 아닐걸?^^", description: "도형특강", content: "기하와 도형 문제에 대한 두려움을 극복하고, 체계적인 접근법을 배웁니다. 도형의 성질과 증명 방법, 좌표 기하의 활용법을 익힙니다." },
  { category: "수학", title: "교과서 밖 수능 함수 필수 지식 : 대칭성, 구간별로 정의된 함수, 절댓값, 주기 등", description: "함수특강", content: "교과서에서 다루지 않는 심화 함수 개념을 배웁니다. 대칭성, 구간별 함수, 절댓값 함수, 주기함수 등의 성질과 활용법을 익힙니다." },
  { category: "수학", title: "당신이 일등급을 받을 경우의 수를 구하시오.", description: "경우의수 심화", content: "경우의 수와 확률 관련 심화 개념과 문제 해결 전략을 배웁니다. 수능 고난도 문항에 대비한 효과적인 접근법을 익힙니다." },
]

// 중학교 특강 데이터
const middleSchoolLectures: LectureItem[] = [
  { category: "국어", title: "중학생을 위한 고전시 읽는 법", description: "고전시입문", content: "중학생 수준에 맞춘 고전시 이해 방법을 배웁니다. 주요 작품과 표현 기법, 감상 방법을 익히며 문학적 감수성을 키웁니다." },
  { category: "국어", title: "문학사 흐름에 따른 대표작품 살펴보기", description: "문학사 흐름", content: "한국 문학의 역사적 흐름과 주요 작가, 작품을 배웁니다. 시대별 특징과 문학 사조를 이해하고 작품 감상 능력을 향상시킵니다." },
  { category: "수학", title: "3시간만에 중학교 도형 마스터하기", description: "도형특강", content: "중학교 과정의 핵심 도형 개념을 집중적으로 배웁니다. 평면도형과 입체도형의 성질, 닮음과 합동, 피타고라스 정리 등을 깊이 이해합니다." },
  { category: "수학", title: "3시간만에 중학교 함수 마스터하기", description: "함수특강", content: "중학교 과정의 핵심 함수 개념을 집중적으로 배웁니다. 일차함수와 이차함수의 성질, 그래프 그리기와 해석, 함수의 활용 등을 학습합니다." },
]

interface StepSpecialLectureProps {
  form: UseFormReturn<FormValues>
  setActiveTab: (step: StepType) => void
  activeTab: StepType
}

export function StepSpecialLecture({ form, setActiveTab, activeTab }: StepSpecialLectureProps) {
  const [selectedGrade, setSelectedGrade] = useState<string>("")
  const [showModal, setShowModal] = useState(false)
  const [selectedLecture, setSelectedLecture] = useState<LectureItem | null>(null)
  
  // 학생 구분에 따라 필드 검증
  useEffect(() => {
    const grade = form.getValues("studentGrade")
    setSelectedGrade(grade)
  }, [form.watch("studentGrade"), form])

  const handleNext = () => {
    // 중학생인 경우 최소 2개, 최대 4개 선택 확인
    if (selectedGrade === "middle") {
      const selectedLectures = form.getValues("middleSchoolLectures")
      if (selectedLectures.length < 2) {
        form.setError("middleSchoolLectures", {
          type: "manual",
          message: "중학생은 최소 2개 이상의 특강을 선택해야 합니다."
        })
        return
      }
      if (selectedLectures.length > 4) {
        form.setError("middleSchoolLectures", {
          type: "manual",
          message: "중학생은 최대 4개까지 특강을 선택할 수 있습니다."
        })
        return
      }
    }
    
    // 고등학생인 경우 최소 2개, 최대 7개 선택 확인
    if (selectedGrade === "high") {
      const selectedLectures = form.getValues("highSchoolLectures")
      if (selectedLectures.length < 2) {
        form.setError("highSchoolLectures", {
          type: "manual",
          message: "고등학생은 최소 2개 이상의 특강을 선택해야 합니다."
        })
        return
      }
      if (selectedLectures.length > 7) {
        form.setError("highSchoolLectures", {
          type: "manual",
          message: "고등학생은 최대 7개까지 특강을 선택할 수 있습니다."
        })
        return
      }
    }

    const nextStepValue = nextStep(activeTab)
    if (nextStepValue) {
      setActiveTab(nextStepValue)
      window.scrollTo(0, 0)
    }
  }

  const handlePrev = () => {
    const prevStepValue = prevStep(activeTab)
    if (prevStepValue) {
      setActiveTab(prevStepValue)
      window.scrollTo(0, 0)
    }
  }

  // 특강 선택 상태 확인
  const isLectureSelected = (grade: string, lectureTitle: string) => {
    if (grade === "high") {
      const selectedLectures = form.getValues("highSchoolLectures") || []
      return selectedLectures.includes(lectureTitle)
    } else {
      const selectedLectures = form.getValues("middleSchoolLectures") || []
      return selectedLectures.includes(lectureTitle)
    }
  }

  // 특강 선택 토글
  const toggleLectureSelection = (grade: string, lectureTitle: string) => {
    if (grade === "high") {
      const currentSelections = form.getValues("highSchoolLectures") || []
      if (currentSelections.includes(lectureTitle)) {
        const newSelections = currentSelections.filter(title => title !== lectureTitle)
        form.setValue("highSchoolLectures", newSelections)
      } else {
        form.setValue("highSchoolLectures", [...currentSelections, lectureTitle])
      }
      
      // 선택 개수 제한 확인 (UI 경고만, 실제 검증은 다음 버튼 클릭 시)
      const updatedSelections = form.getValues("highSchoolLectures") || []
      if (updatedSelections.length > 7) {
        form.setError("highSchoolLectures", {
          type: "manual",
          message: "고등학생은 최대 7개까지 특강을 선택할 수 있습니다."
        })
      } else {
        form.clearErrors("highSchoolLectures")
      }
    } else {
      const currentSelections = form.getValues("middleSchoolLectures") || []
      if (currentSelections.includes(lectureTitle)) {
        const newSelections = currentSelections.filter(title => title !== lectureTitle)
        form.setValue("middleSchoolLectures", newSelections)
      } else {
        form.setValue("middleSchoolLectures", [...currentSelections, lectureTitle])
      }
      
      // 선택 개수 제한 확인 (UI 경고만, 실제 검증은 다음 버튼 클릭 시)
      const updatedSelections = form.getValues("middleSchoolLectures") || []
      if (updatedSelections.length > 4) {
        form.setError("middleSchoolLectures", {
          type: "manual",
          message: "중학생은 최대 4개까지 특강을 선택할 수 있습니다."
        })
      } else {
        form.clearErrors("middleSchoolLectures")
      }
    }
  }

  // 특강 상세정보 모달 열기
  const openLectureDetail = (lecture: LectureItem) => {
    setSelectedLecture(lecture)
    setShowModal(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{getStepNumber(activeTab)}. {STEP_LABELS[activeTab].title}</CardTitle>
        <CardDescription>{STEP_LABELS[activeTab].description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert className="bg-amber-50 text-amber-800 border-amber-200">
          <InfoIcon className="h-4 w-4 text-amber-500" />
          <AlertTitle>수요조사 안내</AlertTitle>
          <AlertDescription>
            이 특강 신청은 현재 수요조사 단계입니다. 선택하신 특강은 추후 별도 공지를 통해 정식 신청을 받을 예정입니다.
          </AlertDescription>
        </Alert>

        <FormField
          control={form.control}
          name="studentGrade"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>학생 구분 *</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    field.onChange(value)
                    setSelectedGrade(value)
                    // 학생 구분이 변경되면 기존 선택 초기화
                    if (value === "middle") {
                      form.setValue("highSchoolLectures", [])
                    } else {
                      form.setValue("middleSchoolLectures", [])
                    }
                  }}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  {studentGradeOptions.map((option) => (
                    <FormItem key={option.id} className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={option.id} />
                      </FormControl>
                      <FormLabel className="font-normal">{option.label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedGrade && (
          <FormField
            control={form.control}
            name={selectedGrade === "high" ? "highSchoolLectures" : "middleSchoolLectures"}
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>
                    {selectedGrade === "high" ? "고등학생 특강 선택 (최소 2개, 최대 7개)" : "중학생 특강 선택 (최소 2개, 최대 4개)"} *
                  </FormLabel>
                  <FormDescription>
                    참여하고 싶은 특강을 선택해주세요. 특강을 클릭하면 상세 정보를 볼 수 있습니다.
                  </FormDescription>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {(selectedGrade === "high" ? highSchoolLectures : middleSchoolLectures).map((lecture, idx) => (
                    <div
                      key={idx}
                      className={`
                        bg-white rounded-xl p-4 shadow-sm border transition-all
                        ${isLectureSelected(selectedGrade, lecture.title) 
                          ? "border-blue-400 bg-blue-50" 
                          : "border-gray-200 hover:border-blue-200 hover:shadow"}
                      `}
                    >
                      <div className="flex justify-between">
                        <span
                          className={`
                            inline-block px-2 py-1 rounded-full text-xs font-medium
                            ${lecture.category === "국어"
                              ? "bg-rose-100 text-rose-800"
                              : lecture.category === "영어"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"}
                          `}
                        >
                          {lecture.category}
                        </span>
                        <Checkbox
                          checked={isLectureSelected(selectedGrade, lecture.title)}
                          onCheckedChange={() => toggleLectureSelection(selectedGrade, lecture.title)}
                          className="h-5 w-5"
                        />
                      </div>
                      
                      <h3 className="text-md font-semibold mt-3 mb-1">{lecture.title}</h3>
                      <div className="text-xs text-gray-500 mb-3">{lecture.description}</div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full text-blue-600 mt-2 text-xs"
                        onClick={() => openLectureDetail(lecture)}
                      >
                        상세 정보 보기
                      </Button>
                    </div>
                  ))}
                </div>
                
                <FormMessage className="mt-4" />
              </FormItem>
            )}
          />
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" type="button" onClick={handlePrev}>
          이전
        </Button>
        <Button type="button" onClick={handleNext}>
          다음
        </Button>
      </CardFooter>

      {/* 특강 세부 정보 모달 */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center">
                {selectedLecture && (
                  <span
                    className={`
                      inline-block px-2 py-1 mr-2 rounded-full text-xs font-medium
                      ${selectedLecture.category === "국어"
                        ? "bg-rose-100 text-rose-800"
                        : selectedLecture.category === "영어"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"}
                    `}
                  >
                    {selectedLecture?.category}
                  </span>
                )}
                <span>{selectedLecture?.title}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowModal(false)}>
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-500">
              {selectedLecture?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="text-sm">
              {selectedLecture?.content}
            </div>
            
            <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
              <div className="flex items-center text-sm text-blue-700">
                <Bookmark className="h-4 w-4 mr-2" />
                <span>멘토 특별 제작 자료 제공</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <span className="text-sm text-gray-500">
                {selectedGrade === "high" ? (
                  <div className="flex items-center text-sm">
                    <GraduationCap className="h-4 w-4 mr-1" /> 고등학생 대상 특강
                  </div>
                ) : (
                  <div className="flex items-center text-sm">
                    <BookOpen className="h-4 w-4 mr-1" /> 중학생 대상 특강
                  </div>
                )}
              </span>
              
              <Button 
                onClick={() => {
                  if (selectedLecture) {
                    toggleLectureSelection(selectedGrade, selectedLecture.title)
                    setShowModal(false)
                  }
                }}
                variant={isLectureSelected(selectedGrade, selectedLecture?.title || "") ? "destructive" : "default"}
                size="sm"
              >
                {isLectureSelected(selectedGrade, selectedLecture?.title || "") ? "선택 취소" : "선택하기"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
} 