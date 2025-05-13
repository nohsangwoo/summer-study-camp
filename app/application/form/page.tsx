"use client"

import { useState, useEffect, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { FormValues, formSchema } from "@/components/application-form/FormSchema"
import { StepType, STEPS, getStepNumber, STEP_LABELS } from "@/components/application-form/FormUtils"
import { Step1CampSelection } from "@/components/application-form/steps/Step1CampSelection"
import { Step2BasicInfo } from "@/components/application-form/steps/Step2BasicInfo"
import { Step3GuardianInfo } from "@/components/application-form/steps/Step3GuardianInfo"
import { Step4ParticipationInfo } from "@/components/application-form/steps/Step4ParticipationInfo"
import { Step5OptionalInfo } from "@/components/application-form/steps/Step5OptionalInfo"
import { StepSpecialLecture } from "@/components/application-form/steps/StepSpecialLecture"
import { Step6PrivacyConsent } from "@/components/application-form/steps/Step6PrivacyConsent"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ApplicationForm() {
  const [activeTab, setActiveTab] = useState<StepType>("step1")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const tabsContainerRef = useRef<HTMLDivElement>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      campPeriod: "",
      studentName: "",
      gender: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
      phone: "",
      address: "",
      addressDetail: "",
      fatherName: "",
      fatherPhone: "",
      fatherEmail: "",
      motherName: "",
      motherPhone: "",
      motherEmail: "",
      emergencyContact: "",
      koreanGradeDescription: "",
      mathGradeDescription: "",
      englishGradeDescription: "",
      otherSubjectsDescription: "",
      careerPath: "",
      careerDetail: "",
      requestTutoring: "no",
      tutoringSubject: "",
      tutoringReason: "",
      mathLevel: "",
      mathCourses: [],
      englishLevel: "",
      koreanLevel: "",
      applicationDate: "",
      applicationReason: [],
      referral: "",
      campSelection: "",
      covidConsent: "",
      referralChannels: [],
      studentGrade: "",
      middleSchoolLectures: [],
      highSchoolLectures: [],
      privacyConsent: false,
    },
  })

  function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    // 여기에 폼 제출 로직 구현
    console.log(values)

    // 제출 성공 시뮬레이션
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "신청이 완료되었습니다.",
        description: "입소 상담 일정에 대해 곧 연락드리겠습니다.",
      })
      form.reset()
      setActiveTab("step1")
    }, 1500)
  }

  const handleSubmit = () => {
    form.handleSubmit(onSubmit)()
  }

  // 각 단계별 완료 상태 확인 함수
  const isStepCompleted = (step: StepType) => {
    switch (step) {
      case "step1":
        return !!form.formState.dirtyFields.campPeriod
      case "step2":
        return !!form.formState.dirtyFields.studentName && !!form.formState.dirtyFields.phone
      case "step3":
        return !!form.formState.dirtyFields.emergencyContact
      case "step4":
        return !!form.formState.dirtyFields.mathLevel && !!form.formState.dirtyFields.applicationDate
      case "step5":
        return !!form.formState.dirtyFields.campSelection
      case "step6":
        return !!form.formState.dirtyFields.studentGrade
      case "step7":
        return !!form.formState.dirtyFields.privacyConsent
      default:
        return false
    }
  }

  // 활성 탭 인덱스 계산
  const activeIndex = STEPS.findIndex(step => step === activeTab)

  // 탭 슬라이드 제어
  useEffect(() => {
    const container = tabsContainerRef.current
    if (container) {
      // 활성 탭 요소를 가운데로 스크롤
      const activeElement = container.querySelector(`[data-state="active"]`) as HTMLElement
      if (activeElement) {
        const containerWidth = container.offsetWidth
        const scrollLeft = activeElement.offsetLeft - containerWidth / 2 + activeElement.offsetWidth / 2
        container.scrollTo({ left: scrollLeft, behavior: "smooth" })
      }
    }
  }, [activeTab])

  // 화살표로 스크롤
  const scroll = (direction: "left" | "right") => {
    const container = tabsContainerRef.current
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="container py-10 max-w-5xl">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold text-center">썸머 공부습관 캠프 신청서</h1>
        <p className="text-muted-foreground text-center">
          아래 양식을 작성하여 썸머 공부습관 캠프에 신청하세요. 모든 필수 항목(*)을 작성해주세요.
        </p>

        {/* 새로운 슬로건 추가 */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-lg border border-blue-200">
            <Sparkles className="h-5 w-5 mr-2 text-blue-500" />
            <p className="text-gray-700 font-medium">
              "전교1등 공부습관캠프, <span className="text-blue-600 font-bold">3주의 변화</span>로{" "}
              <span className="text-blue-600 font-bold">평생의 성공</span>을 준비하세요"
            </p>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as StepType)} className="w-full">
        {/* 개선된 인터랙티브 탭 내비게이션 */}
        <div className="relative mb-8 overflow-hidden">
          {/* 좌우 화살표 */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          {/* 탭 컨테이너 - 고정 높이로 설정하여 애니메이션 영향 최소화 */}
          <div 
            className="flex items-center h-16 overflow-x-auto scrollbar-hide bg-gray-100 rounded-lg border border-gray-200" 
            ref={tabsContainerRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center h-full px-4 space-x-1 md:space-x-2">
              {STEPS.map((step, index) => {
                const isActive = step === activeTab
                const isCompleted = isStepCompleted(step)
                const isPast = index < activeIndex
                const isFuture = index > activeIndex
                
                return (
                  <button
                    key={step}
                    onClick={() => setActiveTab(step)}
                    data-state={isActive ? "active" : "inactive"}
                    className={cn(
                      "relative h-10 flex items-center justify-center rounded-md transition-all duration-200 whitespace-nowrap",
                      isActive 
                        ? "px-4 py-2 bg-white text-blue-700 font-medium shadow-sm border border-blue-200 min-w-[110px]" 
                        : isPast
                        ? "px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 min-w-[48px]"
                        : "px-3 py-1.5 bg-gray-50 text-gray-600 border border-gray-200 min-w-[48px]"
                    )}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={cn(
                        "font-medium",
                        isActive ? "text-blue-700" : isPast ? "text-blue-600" : "text-gray-700"
                      )}>
                        {getStepNumber(step)}
                      </span>
                      
                      <span className={cn(
                        isActive ? "inline" : "hidden md:inline",
                        isActive ? "text-blue-700" : isPast ? "text-blue-600" : "text-gray-700",
                        "text-sm"
                      )}>
                        {STEP_LABELS[step].title}
                      </span>
                    </div>
                    
                    {isCompleted && (
                      <CheckCircle2 
                        className={cn(
                          "h-3.5 w-3.5 absolute -top-1 -right-1",
                          isActive ? "text-blue-600" : "text-green-500"
                        )} 
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* 현재 단계 표시기 */}
          <div className="flex justify-center mt-3">
            <div className="flex items-center space-x-1">
              {STEPS.map((step, idx) => (
                <div 
                  key={`dot-${step}`} 
                  className={cn(
                    "rounded-full transition-all duration-200",
                    activeIndex === idx 
                      ? "w-4 h-2 bg-blue-500" 
                      : "w-2 h-2 bg-gray-300"
                  )} 
                />
              ))}
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <TabsContent value="step1">
              <Step1CampSelection form={form} setActiveTab={setActiveTab} activeTab="step1" />
            </TabsContent>

            <TabsContent value="step2">
              <Step2BasicInfo form={form} setActiveTab={setActiveTab} activeTab="step2" />
            </TabsContent>

            <TabsContent value="step3">
              <Step3GuardianInfo form={form} setActiveTab={setActiveTab} activeTab="step3" />
            </TabsContent>

            <TabsContent value="step4">
              <Step4ParticipationInfo form={form} setActiveTab={setActiveTab} activeTab="step4" />
            </TabsContent>

            <TabsContent value="step5">
              <Step5OptionalInfo form={form} setActiveTab={setActiveTab} activeTab="step5" />
            </TabsContent>

            <TabsContent value="step6">
              <StepSpecialLecture form={form} setActiveTab={setActiveTab} activeTab="step6" />
            </TabsContent>

            <TabsContent value="step7">
              <Step6PrivacyConsent 
                form={form} 
                setActiveTab={setActiveTab} 
                activeTab="step7" 
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </TabsContent>
          </form>
        </Form>
      </Tabs>
      <Toaster />
      
      {/* 스크롤바 숨김을 위한 스타일 */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
