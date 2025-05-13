'use client'

import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../FormSchema"
import { StepType, prevStep, getStepNumber, STEP_LABELS } from "../FormUtils"
import { useState } from "react"

interface Step6Props {
  form: UseFormReturn<FormValues>
  setActiveTab: (step: StepType) => void
  activeTab: StepType
  onSubmit: () => void
  isSubmitting: boolean
}

export function Step6PrivacyConsent({ form, setActiveTab, activeTab, onSubmit, isSubmitting }: Step6Props) {
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
        <Button variant="outline" type="button" onClick={handlePrev}>
          이전
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "제출 중..." : "신청서 제출하기"}
        </Button>
      </CardFooter>
    </Card>
  )
} 