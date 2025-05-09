"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 2글자 이상이어야 합니다.",
  }),
  phone: z.string().min(10, {
    message: "유효한 연락처를 입력해주세요.",
  }),
  message: z.string().min(10, {
    message: "문의 내용은 10글자 이상이어야 합니다.",
  }),
  referral: z.string({
    required_error: "메디브릿지를 알게 된 경로를 선택해주세요.",
  }),
  otherReferral: z.string().optional(),
})

export default function InquiryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOtherInput, setShowOtherInput] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      referral: "",
      otherReferral: "",
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
        title: "상담 문의가 접수되었습니다.",
        description: "빠른 시일 내에 연락드리겠습니다.",
      })
      form.reset()
      setShowOtherInput(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 상담문의 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-blue-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">상담문의</h1>
        </div>
      </div>

      <div className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">메디브릿지 상담문의</h2>

            <div className="text-center mb-10 space-y-4">
              <p className="text-gray-700">
                아래에 고객 이름 및 상담내용을 남겨주시면 빠른 시일내 개별 상담 연락드립니다.
              </p>
              <p className="text-gray-700">
                예외에 계시서 한국 연락처가 없는 경우에는{" "}
                <span className="text-yellow-500 font-semibold">카카오톡 ID</span>를 남겨주시거나
              </p>
              <p className="text-gray-700">
                카카오톡 채널 <span className="text-yellow-500 font-semibold">문의전화번호</span>로 연락 부탁드립니다.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="이름을 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>연락처</FormLabel>
                      <FormControl>
                        <Input placeholder="연락처를 입력해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>내용</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="문의 내용을 입력해주세요"
                          className="resize-none min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referral"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>메디브릿지를 어떻게 알게 되셨나요? *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value)
                            setShowOtherInput(value === "other")
                          }}
                          className="space-y-2"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="friend" />
                            </FormControl>
                            <FormLabel className="font-normal">지인추천</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="sns" />
                            </FormControl>
                            <FormLabel className="font-normal">SNS광고(페이스북, 인스타그램)</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="naver-blog" />
                            </FormControl>
                            <FormLabel className="font-normal">네이버 블로그 글</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="naver-search" />
                            </FormControl>
                            <FormLabel className="font-normal">네이버 상위노출 키워드</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="news" />
                            </FormControl>
                            <FormLabel className="font-normal">언론(기사)</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="youtube" />
                            </FormControl>
                            <FormLabel className="font-normal">유투브</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="other" />
                            </FormControl>
                            <div className="space-y-2 w-full">
                              <FormLabel className="font-normal">기타:</FormLabel>
                              {showOtherInput && (
                                <FormField
                                  control={form.control}
                                  name="otherReferral"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input placeholder="직접입력" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              )}
                            </div>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center pt-4">
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8 py-2" disabled={isSubmitting}>
                    {isSubmitting ? "제출 중..." : "작성"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* 추가 연락처 정보 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">추가 연락 방법</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-5 rounded-lg text-center">
                <h4 className="text-lg font-semibold mb-2">카카오톡 채널</h4>
                <p className="text-yellow-600 font-bold text-lg">@medibridge</p>
                <p className="text-sm text-gray-600 mt-2">카카오톡에서 '@medibridge' 검색</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg text-center">
                <h4 className="text-lg font-semibold mb-2">전화 문의</h4>
                <p className="text-blue-600 font-bold text-lg">02-123-4567</p>
                <p className="text-sm text-gray-600 mt-2">평일 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
