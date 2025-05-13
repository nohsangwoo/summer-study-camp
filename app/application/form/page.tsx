"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Sparkles } from "lucide-react"
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

export default function ApplicationForm() {
  const [activeTab, setActiveTab] = useState<StepType>("step1")
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        <TabsList className="grid grid-cols-7 mb-8">
          {STEPS.map((step) => (
            <TabsTrigger key={step} value={step} className="relative">
              <span className="hidden md:inline">{getStepNumber(step)}. {STEP_LABELS[step].title}</span>
              <span className="md:hidden">{getStepNumber(step)}</span>
              {isStepCompleted(step) && (
                <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
              )}
            </TabsTrigger>
          ))}
        </TabsList>

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
    </div>
  )
}
