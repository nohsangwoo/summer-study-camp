import {
  HeroSection,
  SloganBanner,
  PromotionSection,
  MentoringSection,
  CampFeaturesSection,
  ProgramSection,
  StatsSection,
  CTASection,
  SocialLinksSection
} from "@/components/home"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <HeroSection />
      
      {/* 새로운 슬로건 배너 추가 */}
      <SloganBanner />
      
      {/* 새로운 프로모션 섹션 */}
      <PromotionSection />
      
      {/* 멘토링 프로그램 섹션 추가 */}
      <MentoringSection />
      
      {/* 캠프 특징 섹션 */}
      <CampFeaturesSection />
      
      {/* 프로그램 소개 섹션 */}
      <ProgramSection />
      
      {/* 통계 및 성과 섹션 */}
      <StatsSection />
      
      {/* CTA 섹션 */}
      <CTASection />
      
      {/* 카카오톡 및 인스타그램 링크 */}
      <SocialLinksSection />
    </div>
  )
}
