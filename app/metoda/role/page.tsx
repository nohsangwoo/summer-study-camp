import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "연구소 역할 | 의대생공부습관연구소",
  description: "의대생공부습관연구소(메토다)의 주요 역할과 연구 분야에 대한 안내입니다.",
}

export default function ResearchRolePage() {
  return (
    <div className="space-y-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">연구소 역할</h1>
        <p className="text-lg text-gray-700 mb-4">
          의대생공부습관연구소(메토다)는 의대생들의 학습 습관과 효율적인 학습 방법을 연구하고 개발하는 전문
          연구소입니다. 저희는 다음과 같은 세 가지 핵심 영역에서 연구와 개발을 진행하고 있습니다.
        </p>
      </section>

      <section className="space-y-12">
        {/* 수업 연구 섹션 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image src="/research-study.png" alt="수업 연구" width={1200} height={600} className="w-full" />
        </div>

        {/* 콘텐츠 개발 섹션 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image src="/research-content.png" alt="콘텐츠 개발" width={1200} height={600} className="w-full" />
        </div>

        {/* 커리큘럼 연구 섹션 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image src="/research-curriculum.png" alt="커리큘럼 연구" width={1200} height={600} className="w-full" />
        </div>
      </section>

      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">연구소 역할의 중요성</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            의대생공부습관연구소는 단순한 학습 방법을 넘어 의대생들의 학습 습관과 패턴을 심층적으로 분석하고 연구합니다.
            이를 통해 각 학생에게 최적화된 학습 방법과 커리큘럼을 제공하여 의과대학 진학과 학업 성취에 실질적인 도움을
            드립니다.
          </p>
          <p className="text-gray-700">
            수년간의 연구와 데이터 분석을 통해 개발된 저희 연구소의 학습 방법론과 커리큘럼은 많은 학생들이 의과대학에
            진학하는 데 큰 도움이 되었습니다. 저희는 계속해서 연구와 개발을 통해 더 나은 학습 방법을 제시하고자 노력하고
            있습니다.
          </p>
        </div>
      </section>

      <section className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">연구 성과</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>연간 100명 이상의 학생들이 의대생공부습관연구소의 커리큘럼을 통해 의과대학에 진학</li>
          <li>학생별 맞춤형 학습 방법론 개발 및 적용</li>
          <li>의과대학 입시 트렌드 분석 및 대응 전략 연구</li>
          <li>학습 효율성 향상을 위한 다양한 콘텐츠 개발</li>
          <li>학습 습관 개선을 통한 학업 성취도 향상 사례 연구</li>
        </ul>
      </section>
    </div>
  )
}
