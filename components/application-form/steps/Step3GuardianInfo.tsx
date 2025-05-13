'use client'

import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../FormSchema"
import { StepType, nextStep, prevStep, getStepNumber, STEP_LABELS } from "../FormUtils"

interface Step3Props {
  form: UseFormReturn<FormValues>
  setActiveTab: (step: StepType) => void
  activeTab: StepType
}

export function Step3GuardianInfo({ form, setActiveTab, activeTab }: Step3Props) {
  const handleNext = () => {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>{getStepNumber(activeTab)}. {STEP_LABELS[activeTab].title}</CardTitle>
        <CardDescription>{STEP_LABELS[activeTab].description}</CardDescription>
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
        <Button variant="outline" type="button" onClick={handlePrev}>
          이전
        </Button>
        <Button type="button" onClick={handleNext}>
          다음
        </Button>
      </CardFooter>
    </Card>
  )
} 