'use client'

import { useState } from "react"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { InfoIcon, BookOpen, HelpCircle } from "lucide-react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { UseFormReturn } from "react-hook-form"
import { FormValues, careerOptions, tutoringSubjects } from "../FormSchema"
import { StepType, nextStep, prevStep, getStepNumber, STEP_LABELS } from "../FormUtils"

interface Step4Props {
  form: UseFormReturn<FormValues>
  setActiveTab: (step: StepType) => void
  activeTab: StepType
}

export function Step4ParticipationInfo({ form, setActiveTab, activeTab }: Step4Props) {
  // 과외 신청 여부 상태
  const [requestTutoring, setRequestTutoring] = useState<boolean>(false)

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
      <CardContent className="space-y-6">
        {/* 성적 정보 안내 */}
        <Alert className="bg-blue-50 border-blue-200">
          <InfoIcon className="h-4 w-4 text-blue-500" />
          <AlertTitle>성적 정보 작성 안내</AlertTitle>
          <AlertDescription className="text-sm mt-2">
            내신/모의고사 성적대, 성적 변화 추이 등을 과목별로 자유롭게 서술해주세요.
            구체적인 정보를 입력해주시면 학생 맞춤형 학습 계획 수립에 도움이 됩니다.
          </AlertDescription>
        </Alert>

        {/* 국어 성적 서술 */}
        <FormField
          control={form.control}
          name="koreanGradeDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>국어 성적 서술</FormLabel>
              <FormDescription>
                최근 국어 내신/모의고사 등급, 점수대, 변화 추이, 강점과 약점 등을 자유롭게 작성해주세요.
              </FormDescription>
              <FormControl>
                <Textarea 
                  placeholder="예) 3학년 1학기 내신 3등급, 최근 모의고사는 4등급으로 하락. 문학은 강점이나 비문학에서 어려움을 겪고 있음." 
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 수학 성적 서술 */}
        <FormField
          control={form.control}
          name="mathGradeDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>수학 성적 서술</FormLabel>
              <FormDescription>
                최근 수학 내신/모의고사 등급, 점수대, 변화 추이, 강점과 약점 등을 자유롭게 작성해주세요.
              </FormDescription>
              <FormControl>
                <Textarea 
                  placeholder="예) 3학년 1학기 내신 2등급, 최근 6월 모의평가 3등급. 미적분은 잘하나 기하에서 약점이 있음." 
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 영어 성적 서술 */}
        <FormField
          control={form.control}
          name="englishGradeDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>영어 성적 서술</FormLabel>
              <FormDescription>
                최근 영어 내신/모의고사 등급, 점수대, 변화 추이, 강점과 약점 등을 자유롭게 작성해주세요.
              </FormDescription>
              <FormControl>
                <Textarea 
                  placeholder="예) 3학년 1학기 내신 2등급, 최근 모의고사 1등급으로 상승세. 독해는 강점이나 어휘력에서 부족함이 있음." 
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 기타 과목 성적 서술 */}
        <FormField
          control={form.control}
          name="otherSubjectsDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>기타 과목 성적 서술 (선택)</FormLabel>
              <FormDescription>
                과학, 사회 등 기타 과목의 성적이나 특이사항을 자유롭게 작성해주세요.
              </FormDescription>
              <FormControl>
                <Textarea 
                  placeholder="예) 과학은 물리 3등급, 화학 2등급으로 자연계열 진학 준비 중. 특히 생명과학에 관심이 많음." 
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 진로 선택 */}
        <FormField
          control={form.control}
          name="careerPath"
          render={({ field }) => (
            <FormItem>
              <FormLabel>희망 진로 분야 *</FormLabel>
              <FormDescription>
                학생이 현재 희망하는 진로 분야를 선택해주세요.
              </FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="진로 분야를 선택해주세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {careerOptions.map((option) => (
                    <SelectItem key={option.id} value={option.id}>{option.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 추가 진로 상세 정보 */}
        <FormField
          control={form.control}
          name="careerDetail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>진로 상세 정보 (선택)</FormLabel>
              <FormDescription>
                희망 진로에 대한 구체적인 계획이나 관심 분야가 있다면 자유롭게 작성해주세요.
              </FormDescription>
              <FormControl>
                <Textarea 
                  placeholder="예) 의대 진학 후 소아과 전문의를 목표로 하고 있음. 평소 아동 심리에도 관심이 많음." 
                  className="min-h-[80px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="my-6" />

        {/* 1:1 과외 신청 섹션 */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-start mb-4">
            <BookOpen className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
            <div>
              <h3 className="font-medium text-gray-900">1:1 멘토 과외 신청 (선택)</h3>
              <p className="text-sm text-gray-600 mt-1">
                전교 1등 의대생 멘토와 1:1 과외를 신청하시겠습니까? (45만원, 최대 1개 과목 선택 가능)
              </p>
            </div>
          </div>

          <FormField
            control={form.control}
            name="requestTutoring"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                      field.onChange(value)
                      setRequestTutoring(value === "yes")
                    }}
                    defaultValue={field.value}
                    className="flex space-x-4"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="yes" />
                      </FormControl>
                      <FormLabel className="font-normal">신청합니다</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="no" />
                      </FormControl>
                      <FormLabel className="font-normal">신청하지 않습니다</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {requestTutoring && (
            <div className="mt-4 space-y-4 pl-4 border-l-2 border-blue-200">
              <FormField
                control={form.control}
                name="tutoringSubject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>신청 과목 *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="과외 받고 싶은 과목을 선택해주세요" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tutoringSubjects.map((subject) => (
                          <SelectItem key={subject.id} value={subject.id}>{subject.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tutoringReason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>과외 신청 이유 *</FormLabel>
                    <FormDescription>
                      해당 과목을 선택한 이유와 과외를 통해 향상시키고 싶은 부분을 작성해주세요.
                    </FormDescription>
                    <FormControl>
                      <Textarea 
                        placeholder="예) 수학 기하 영역에서 어려움을 겪고 있어 집중적인 지도가 필요함. 특히 공간도형 관련 문제 풀이 능력을 향상시키고 싶음." 
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Alert className="bg-amber-50 border-amber-200">
                <HelpCircle className="h-4 w-4 text-amber-500" />
                <AlertDescription className="text-sm">
                  과외 신청 후 캠프 입소 전 개별 연락을 통해 세부 일정 및 커리큘럼을 조율합니다.
                  신청 후 결제는 캠프비와 별도로 진행됩니다.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
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