export const STEPS = [
  "step1", // 방학캠프 신청 과정
  "step2", // 기본정보 입력
  "step3", // 보호자 정보 입력
  "step4", // 참여 및 신청 정보
  "step5", // 선택정보 입력
  "step6", // 특강 신청 (새로 추가)
  "step7", // 개인정보 동의
] as const

export type StepType = typeof STEPS[number]

// 단계별 제목과 설명
export const STEP_LABELS = {
  step1: { title: "방학캠프 신청 과정", description: "참가를 원하시는 캠프 기간을 선택해주세요." },
  step2: { title: "기본정보 입력", description: "학생의 기본 정보를 입력해주세요." },
  step3: { title: "보호자 정보 입력", description: "보호자 정보를 입력해주세요." },
  step4: { title: "참여 및 신청 정보", description: "학습 관련 정보와 참가 신청 정보를 입력해주세요." },
  step5: { title: "선택정보 입력", description: "추가 정보를 입력해주세요." },
  step6: { title: "특강 신청", description: "참여하고 싶은 특강을 선택해주세요. (수요조사)" },
  step7: { title: "개인정보 동의", description: "개인정보 수집 및 이용에 대한 동의를 확인해주세요." },
}

// 단계 번호 반환 (1부터 시작)
export function getStepNumber(step: StepType): string {
  const index = STEPS.indexOf(step)
  return index !== -1 ? `0${index + 1}` : ''
}

// 다음 단계 반환
export function nextStep(currentStep: StepType): StepType | null {
  const currentIndex = STEPS.indexOf(currentStep)
  if (currentIndex < STEPS.length - 1) {
    return STEPS[currentIndex + 1]
  }
  return null
}

// 이전 단계 반환
export function prevStep(currentStep: StepType): StepType | null {
  const currentIndex = STEPS.indexOf(currentStep)
  if (currentIndex > 0) {
    return STEPS[currentIndex - 1]
  }
  return null
} 