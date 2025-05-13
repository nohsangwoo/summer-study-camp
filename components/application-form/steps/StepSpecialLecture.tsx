'use client'

import { useState, useEffect } from "react"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { UseFormReturn } from "react-hook-form"
import { FormValues, studentGradeOptions, middleSchoolLectureOptions, highSchoolLectureOptions } from "../FormSchema"
import { StepType, nextStep, prevStep, getStepNumber, STEP_LABELS } from "../FormUtils"

interface StepSpecialLectureProps {
  form: UseFormReturn<FormValues>
  setActiveTab: (step: StepType) => void
  activeTab: StepType
}

export function StepSpecialLecture({ form, setActiveTab, activeTab }: StepSpecialLectureProps) {
  const [selectedGrade, setSelectedGrade] = useState<string>("")
  
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

        {selectedGrade === "middle" && (
          <FormField
            control={form.control}
            name="middleSchoolLectures"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>중학생 특강 선택 (최소 2개, 최대 4개 선택) *</FormLabel>
                  <FormDescription>
                    참여하고 싶은 특강을 2개 이상 4개 이하로 선택해주세요.
                  </FormDescription>
                </div>
                <div className="space-y-2">
                  {middleSchoolLectureOptions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="middleSchoolLectures"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...(field.value || []), item.id]
                                    : field.value?.filter((value) => value !== item.id) || []
                                  
                                  field.onChange(updatedValue)
                                  // 선택 개수 제한 확인 (UI 경고만, 실제 검증은 다음 버튼 클릭 시)
                                  if (updatedValue.length > 4) {
                                    form.setError("middleSchoolLectures", {
                                      type: "manual",
                                      message: "중학생은 최대 4개까지 특강을 선택할 수 있습니다."
                                    })
                                  } else {
                                    form.clearErrors("middleSchoolLectures")
                                  }
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
        )}

        {selectedGrade === "high" && (
          <FormField
            control={form.control}
            name="highSchoolLectures"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>고등학생 특강 선택 (최소 2개, 최대 7개 선택) *</FormLabel>
                  <FormDescription>
                    참여하고 싶은 특강을 2개 이상 7개 이하로 선택해주세요.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {highSchoolLectureOptions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="highSchoolLectures"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...(field.value || []), item.id]
                                    : field.value?.filter((value) => value !== item.id) || []
                                  
                                  field.onChange(updatedValue)
                                  // 선택 개수 제한 확인 (UI 경고만, 실제 검증은 다음 버튼 클릭 시)
                                  if (updatedValue.length > 7) {
                                    form.setError("highSchoolLectures", {
                                      type: "manual",
                                      message: "고등학생은 최대 7개까지 특강을 선택할 수 있습니다."
                                    })
                                  } else {
                                    form.clearErrors("highSchoolLectures")
                                  }
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
    </Card>
  )
} 