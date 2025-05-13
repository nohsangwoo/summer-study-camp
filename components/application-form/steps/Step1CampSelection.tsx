'use client'

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../FormSchema"
import { StepType, nextStep, getStepNumber, STEP_LABELS } from "../FormUtils"

interface Step1Props {
  form: UseFormReturn<FormValues>
  setActiveTab: (step: StepType) => void
  activeTab: StepType
}

export function Step1CampSelection({ form, setActiveTab, activeTab }: Step1Props) {
  const handleNext = () => {
    const nextStepValue = nextStep(activeTab)
    if (nextStepValue) {
      setActiveTab(nextStepValue)
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
                      [캠프/1주 수학특강] 07월 20일 (토) ~ 08월 9일 (금) 🔥
                    </FormLabel>
                  </FormItem>
                  {/* <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="period2" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      [캠프/2주 수학특강] 07월 27일 (토) ~ 08월 16일 (금)
                    </FormLabel>
                  </FormItem> */}
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
        <Button type="button" onClick={handleNext}>
          다음
        </Button>
      </CardFooter>
    </Card>
  )
} 