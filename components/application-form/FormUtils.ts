export const STEPS = ["step1", "step2", "step3", "step4", "step5", "step6"] as const
export type StepType = typeof STEPS[number]

export function nextStep(currentStep: StepType): StepType | null {
  const currentIndex = STEPS.indexOf(currentStep)
  if (currentIndex < STEPS.length - 1) {
    return STEPS[currentIndex + 1]
  }
  return null
}

export function prevStep(currentStep: StepType): StepType | null {
  const currentIndex = STEPS.indexOf(currentStep)
  if (currentIndex > 0) {
    return STEPS[currentIndex - 1]
  }
  return null
} 