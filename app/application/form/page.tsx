"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Sparkles } from "lucide-react"

const formSchema = z.object({
  // 01. 방학캠프 신청 과정
  campPeriod: z.string({
    required_error: "캠프 기간을 선택해주세요.",
  }),

  // 02. 기본정보 입력
  studentName: z.string().min(2, {
    message: "이름은 2글자 이상이어야 합니다.",
  }),
  gender: z.string({
    required_error: "성별을 선택해주세요.",
  }),
  birthYear: z.string().min(4, {
    message: "출생년도를 입력해주세요.",
  }),
  birthMonth: z.string().min(1, {
    message: "출생월을 입력해주세요.",
  }),
  birthDay: z.string().min(1, {
    message: "출생일을 입력해주세요.",
  }),
  phone: z.string().min(10, {
    message: "유효한 전화번호를 입력해주세요.",
  }),
  address: z.string().min(1, {
    message: "주소를 입력해주세요.",
  }),
  addressDetail: z.string().optional(),

  // 03. 보호자 정보 입력
  fatherName: z.string().optional(),
  fatherPhone: z.string().optional(),
  fatherEmail: z
    .string()
    .email({
      message: "유효한 이메일 주소를 입력해주세요.",
    })
    .optional(),
  motherName: z.string().optional(),
  motherPhone: z.string().optional(),
  motherEmail: z
    .string()
    .email({
      message: "유효한 이메일 주소를 입력해주세요.",
    })
    .optional(),
  emergencyContact: z.string().min(1, {
    message: "비상연락처를 입력해주세요.",
  }),

  // 04. 참여 및 신청 정보 입력
  mathLevel: z.string({
    required_error: "수학 관련 선택을 해주세요.",
  }),
  mathCourses: z.array(z.string()).optional(),
  englishLevel: z.string({
    required_error: "영어 관련 선택을 해주세요.",
  }),
  koreanLevel: z.string({
    required_error: "국어 관련 선택을 해주세요.",
  }),
  applicationDate: z.string({
    required_error: "참가신청일을 선택해주세요.",
  }),
  applicationReason: z.array(z.string()).optional(),

  // 05. 선택정보 입력
  referral: z.string().optional(),
  campSelection: z.string({
    required_error: "캠프 선택 방법을 선택해주세요.",
  }),
  covidConsent: z.string({
    required_error: "코로나 심각 등급에 관한 동의 여부를 선택해주세요.",
  }),
  referralChannels: z.array(z.string()).optional(),

  // 개인정보 수집 및 이용 동의
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해주세요.",
  }),
})

export default function ApplicationForm() {
  const [activeTab, setActiveTab] = useState("step1")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
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
      privacyConsent: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
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

  const nextStep = (currentStep: string) => {
    const steps = ["step1", "step2", "step3", "step4", "step5", "step6"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setActiveTab(steps[currentIndex + 1])
      window.scrollTo(0, 0)
    }
  }

  const prevStep = (currentStep: string) => {
    const steps = ["step1", "step2", "step3", "step4", "step5", "step6"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setActiveTab(steps[currentIndex - 1])
      window.scrollTo(0, 0)
    }
  }

  const mathCourseOptions = [
    { id: "math1", label: "초1~2학년" },
    { id: "math2", label: "초3~4학년" },
    { id: "math3", label: "초5~6학년" },
    { id: "math4", label: "중등수준" },
    { id: "math5", label: "고등수준" },
    { id: "math6", label: "기타" },
  ]

  const applicationReasonOptions = [
    { id: "reason1", label: "진로 및 학업에 도움이 될 것 같아서" },
    { id: "reason2", label: "주변 추천 (학교, 학원, 부모님, 지인 등)" },
    { id: "reason3", label: "자녀 추천 (예전 참가 경험, 관심 선택, 입소 희망 본인)" },
  ]

  const referralChannelOptions = [
    { id: "channel1", label: "네이버 검색" },
    { id: "channel2", label: "유튜브 검색" },
    { id: "channel3", label: "페이스북/인스타그램" },
    { id: "channel4", label: "카페" },
    { id: "channel5", label: "지인추천/소개" },
    { id: "channel6", label: "학원소개" },
    { id: "channel7", label: "기존참가" },
    { id: "channel8", label: "선생님추천" },
  ]

  return (
    <div className="container py-10 max-w-4xl">
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-6 mb-8">
          <TabsTrigger value="step1" className="relative">
            <span className="hidden md:inline">01. 방학캠프 신청 과정</span>
            <span className="md:hidden">01</span>
            {form.formState.dirtyFields.campPeriod && (
              <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
            )}
          </TabsTrigger>
          <TabsTrigger value="step2" className="relative">
            <span className="hidden md:inline">02. 기본정보 입력</span>
            <span className="md:hidden">02</span>
            {form.formState.dirtyFields.studentName && form.formState.dirtyFields.phone && (
              <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
            )}
          </TabsTrigger>
          <TabsTrigger value="step3" className="relative">
            <span className="hidden md:inline">03. 보호자 정보 입력</span>
            <span className="md:hidden">03</span>
            {form.formState.dirtyFields.emergencyContact && (
              <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
            )}
          </TabsTrigger>
          <TabsTrigger value="step4" className="relative">
            <span className="hidden md:inline">04. 참여 및 신청 정보</span>
            <span className="md:hidden">04</span>
            {form.formState.dirtyFields.mathLevel && form.formState.dirtyFields.applicationDate && (
              <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
            )}
          </TabsTrigger>
          <TabsTrigger value="step5" className="relative">
            <span className="hidden md:inline">05. 선택정보 입력</span>
            <span className="md:hidden">05</span>
            {form.formState.dirtyFields.campSelection && (
              <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
            )}
          </TabsTrigger>
          <TabsTrigger value="step6" className="relative">
            <span className="hidden md:inline">06. 개인정보 동의</span>
            <span className="md:hidden">06</span>
            {form.formState.dirtyFields.privacyConsent && (
              <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
            )}
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <TabsContent value="step1">
              <Card>
                <CardHeader>
                  <CardTitle>01. 방학캠프 신청 과정</CardTitle>
                  <CardDescription>참가를 원하시는 캠프 기간을 선택해주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="campPeriod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>캠프 기간 선택 *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="period1" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                [캠프/1주 수학특강] 07월 20일 (토) ~ 08월 15일 (목) 🔥
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="period2" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                [캠프/2주 수학특강] 07월 27일 (토) ~ 08월 16일 (금)
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" disabled>
                    이전
                  </Button>
                  <Button type="button" onClick={() => nextStep("step1")}>
                    다음
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="step2">
              <Card>
                <CardHeader>
                  <CardTitle>02. 기본정보 입력</CardTitle>
                  <CardDescription>학생의 기본 정보를 입력해주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="studentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>학생이름 *</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>학생성별 *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex space-x-4"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="male" />
                              </FormControl>
                              <FormLabel className="font-normal">남</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="female" />
                              </FormControl>
                              <FormLabel className="font-normal">여</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="birthYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>생년월일 *</FormLabel>
                          <FormControl>
                            <Input placeholder="2010" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="birthMonth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">월</FormLabel>
                          <FormControl>
                            <Input placeholder="01" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="birthDay"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">일</FormLabel>
                          <FormControl>
                            <Input placeholder="01" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>휴대전화 *</FormLabel>
                        <FormControl>
                          <Input placeholder="010-1234-5678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>주소 *</FormLabel>
                        <FormControl>
                          <Input placeholder="서울특별시 강남구..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="addressDetail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>세부주소/건물명</FormLabel>
                        <FormControl>
                          <Input placeholder="101동 1001호" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => prevStep("step2")}>
                    이전
                  </Button>
                  <Button type="button" onClick={() => nextStep("step2")}>
                    다음
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="step3">
              <Card>
                <CardHeader>
                  <CardTitle>03. 보호자 정보 입력</CardTitle>
                  <CardDescription>보호자 정보를 입력해주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">아버지 정보</h3>
                      <FormField
                        control={form.control}
                        name="fatherName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>아버지 이름</FormLabel>
                            <FormControl>
                              <Input placeholder="홍길동" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fatherPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>아버지 휴대전화</FormLabel>
                            <FormControl>
                              <Input placeholder="010-1234-5678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fatherEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>아버지 이메일</FormLabel>
                            <FormControl>
                              <Input placeholder="example@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">어머니 정보</h3>
                      <FormField
                        control={form.control}
                        name="motherName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>어머니 이름</FormLabel>
                            <FormControl>
                              <Input placeholder="홍길동" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="motherPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>어머니 휴대전화</FormLabel>
                            <FormControl>
                              <Input placeholder="010-1234-5678" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="motherEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>어머니 이메일</FormLabel>
                            <FormControl>
                              <Input placeholder="example@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="emergencyContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>비상연락처 (주로 연락 가능한 번호) *</FormLabel>
                        <FormControl>
                          <Input placeholder="010-1234-5678" {...field} />
                        </FormControl>
                        <FormDescription>비상시 연락 가능한 번호를 입력해주세요.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => prevStep("step3")}>
                    이전
                  </Button>
                  <Button type="button" onClick={() => nextStep("step3")}>
                    다음
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="step4">
              <Card>
                <CardHeader>
                  <CardTitle>04. 참여 및 신청 정보 입력</CardTitle>
                  <CardDescription>학습 관련 정보와 참가 신청 정보를 입력해주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="mathLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>수학 관련 선택 *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="level1">상위권</SelectItem>
                            <SelectItem value="level2">중위권</SelectItem>
                            <SelectItem value="level3">하위권</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mathCourses"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>수학 수업 과정 (원하는 반으로 선택)</FormLabel>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {mathCourseOptions.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="mathCourses"
                              render={({ field }) => {
                                return (
                                  <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(field.value?.filter((value) => value !== item.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item.label}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="englishLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>영어 관련 선택 *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="level1">상위권</SelectItem>
                            <SelectItem value="level2">중위권</SelectItem>
                            <SelectItem value="level3">하위권</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="koreanLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>국어 관련 선택 *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="level1">상위권</SelectItem>
                            <SelectItem value="level2">중위권</SelectItem>
                            <SelectItem value="level3">하위권</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="applicationDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>참가신청일 선택 *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="date1">6월 1일</SelectItem>
                            <SelectItem value="date2">6월 15일</SelectItem>
                            <SelectItem value="date3">7월 1일</SelectItem>
                            <SelectItem value="date4">7월 15일</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="applicationReason"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>참가신청의 이유 (참가신청일 선택하신 분들)</FormLabel>
                        </div>
                        <div className="space-y-2">
                          {applicationReasonOptions.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="applicationReason"
                              render={({ field }) => {
                                return (
                                  <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(field.value?.filter((value) => value !== item.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item.label}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => prevStep("step4")}>
                    이전
                  </Button>
                  <Button type="button" onClick={() => nextStep("step4")}>
                    다음
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="step5">
              <Card>
                <CardHeader>
                  <CardTitle>05. 선택정보 입력</CardTitle>
                  <CardDescription>추가 정보를 입력해주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="referral"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>아는 구성원 참여 추천</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">없음</SelectItem>
                            <SelectItem value="friend">친구</SelectItem>
                            <SelectItem value="family">가족</SelectItem>
                            <SelectItem value="teacher">선생님</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="campSelection"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>캠프 선택 방법 (10자 이내의 짧은 설명으로 작성해 주세요.) *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="선택해주세요" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="internet">인터넷 검색</SelectItem>
                            <SelectItem value="recommendation">지인 추천</SelectItem>
                            <SelectItem value="advertisement">광고</SelectItem>
                            <SelectItem value="revisit">재방문</SelectItem>
                            <SelectItem value="other">기타</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="covidConsent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>코로나 심각 등급에 따라 동의에 체크해주세요. *</FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">예</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">아니오</FormLabel>
                          </FormItem>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="referralChannels"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel>아는 구성원으로 오게된 경로</FormLabel>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {referralChannelOptions.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="referralChannels"
                              render={({ field }) => {
                                return (
                                  <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(field.value?.filter((value) => value !== item.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item.label}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => prevStep("step5")}>
                    이전
                  </Button>
                  <Button type="button" onClick={() => nextStep("step5")}>
                    다음
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="step6">
              <Card>
                <CardHeader>
                  <CardTitle>06. 개인정보 수집 및 이용 동의</CardTitle>
                  <CardDescription>개인정보 수집 및 이용에 대한 동의를 확인해주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-4">
                    <h3 className="font-semibold mb-2">개인정보 수집 및 이용 동의</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      회사명(이하 '회사'라 한다)는 개인정보보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와
                      관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립,
                      공개합니다.
                    </p>
                    <div className="text-sm text-gray-700">
                      <p className="font-medium mb-1">제1조 (개인정보의 처리목적)</p>
                      <p className="mb-4">
                        회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                        용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의
                        동의를 받는 등 필요한 조치를 이행할 예정입니다.
                      </p>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="privacyConsent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-medium">개인정보 수집 및 이용에 동의합니다. *</FormLabel>
                          <FormDescription>
                            개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으나, 동의 거부 시 캠프 신청이
                            제한됩니다.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => prevStep("step6")}>
                    이전
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? "제출 중..." : "신청서 제출하기"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </form>
        </Form>
      </Tabs>
      <Toaster />
    </div>
  )
}
