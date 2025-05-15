'use client'

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { UseFormReturn } from "react-hook-form"
import { FormValues } from "../FormSchema"
import { StepType, nextStep, prevStep, getStepNumber, STEP_LABELS } from "../FormUtils"
import { useEffect, useState } from "react"

interface Step2Props {
  form: UseFormReturn<FormValues>
  setActiveTab: (step: StepType) => void
  activeTab: StepType
}

declare global {
  interface Window {
    daum: any;
  }
}

export function Step2BasicInfo({ form, setActiveTab, activeTab }: Step2Props) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // 다음 우편번호 스크립트 로드
    const script = document.createElement("script");
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      // 스크립트 제거 시 오류 방지를 위한 확인 과정 추가
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const openPostcodeSearch = () => {
    if (!isScriptLoaded || !window.daum?.Postcode) {
      alert('우편번호 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data: any) => {
        // 우편번호와 주소 정보를 폼에 설정
        form.setValue('zipCode', data.zonecode);
        
        // 도로명 주소 또는 지번 주소 사용
        const address = data.roadAddress || data.jibunAddress;
        form.setValue('address', address);
        
        // 상세 주소 필드로 포커스 이동
        document.getElementById('address-detail')?.focus();
      }
    }).open();
  };

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

        <div className="grid grid-cols-3 gap-4 items-end">
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

        {/* 우편번호 검색 */}
        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>우편번호 *</FormLabel>
              <div className="flex space-x-2">
                <FormControl>
                  <Input placeholder="우편번호" readOnly {...field} />
                </FormControl>
                <Button 
                  type="button" 
                  onClick={openPostcodeSearch}
                  variant="outline"
                >
                  우편번호 검색
                </Button>
              </div>
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
                <Input placeholder="주소" readOnly {...field} />
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
                <Input id="address-detail" placeholder="101동 1001호" {...field} />
              </FormControl>
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