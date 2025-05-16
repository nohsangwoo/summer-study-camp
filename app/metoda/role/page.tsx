import Image from 'next/image'
import type { Metadata } from 'next'
import { BookOpen, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: '연구소 역할 | 의대생공부습관연구소',
  description:
    '의대생공부습관연구소(메디쌤)의 주요 역할과 연구 분야에 대한 안내입니다.',
}

export default function ResearchRolePage() {
  return (
    <div className="space-y-8">
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">연구소 역할</h1>
        <div className="text-lg text-gray-700 mb-6 space-y-3">
          <p>
            <span className="font-medium">의대생 교육봉사그룹의 최정예 인원으로 구성된 공부습관연구소 메디쌤</span>은 초중고생들의 공부습관과 효율적인 학습방법을 연구하고 개발하는 전문연구소입니다.
          </p>
          <p>
            저희는 다음과 같은 세가지 핵심 영역에서 연구와 개발을 진행하고 있습니다:
          </p>
        </div>
      </section>

      {/* 대형 슬로건 배너 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mb-12 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          "전교1등 공부습관캠프,{' '}
          <span className="text-yellow-300">공부하는 방법</span>부터 달라집니다"
        </h2>
      </div>

      <section className="space-y-12">
        {/* 수업 연구 섹션 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/research-study.png"
            alt="수업 연구"
            width={1200}
            height={600}
            className="w-full"
          />

          {/* 슬로건 오버레이 */}
          <div className="absolute bottom-0 left-0 right-0 bg-blue-600/80 text-white p-4">
            <p className="text-lg font-medium text-center">
              "전교1등 공부습관캠프는{' '}
              <span className="font-bold">과학적 연구</span>를 바탕으로 합니다"
            </p>
          </div>
        </div>

        {/* 콘텐츠 개발 섹션 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/research-content.png"
            alt="콘텐츠 개발"
            width={1200}
            height={600}
            className="w-full"
          />

          {/* 슬로건 오버레이 */}
          <div className="absolute bottom-0 left-0 right-0 bg-purple-600/80 text-white p-4">
            <p className="text-lg font-medium text-center">
              "전교1등 공부습관캠프만의{' '}
              <span className="font-bold">차별화된 콘텐츠</span>로 학습 효율을
              극대화합니다"
            </p>
          </div>
        </div>

        {/* 커리큘럼 연구 섹션 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/research-curriculum.png"
            alt="커리큘럼 연구"
            width={1200}
            height={600}
            className="w-full"
          />

          {/* 슬로건 오버레이 */}
          <div className="absolute bottom-0 left-0 right-0 bg-indigo-600/80 text-white p-4">
            <p className="text-lg font-medium text-center">
              "전���1등 공부습관캠프의{' '}
              <span className="font-bold">맞춤형 커리큘럼</span>으로 성적 향상을
              경험하세요"
            </p>
          </div>
        </div>
      </section>

      {/* 중간 슬로건 */}
      <div className="my-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
          <p className="text-xl font-semibold text-blue-700">
            "전교1등 공부습관캠프, 3주의 투자로{' '}
            <span className="text-blue-900 font-bold">평생의 학습 습관</span>을
            만듭니다"
          </p>
        </div>
      </div>

      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          연구소 역할의 중요성
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            의대생공부습관연구소는 단순한 학습 방법을 넘어 의대생들의 학습
            습관과 패턴을 심층적으로 분석하고 연구합니다. 이를 통해 각 학생에게
            최적화된 학습 방법과 커리큘럼을 제공하여 의과대학 진학과 학업 성취에
            실질적인 도움을 드립니다.
          </p>
          <p className="text-gray-700">
            수년간의 연구와 데이터 분석을 통해 개발된 저희 연구소의 학습
            방법론과 커리큘럼은 많은 학생들이 의과대학에 진학하는 데 큰 도움이
            되었습니다. 저희는 계속해서 연구와 개발을 통해 더 나은 학습 방법을
            제시하고자 노력하고 있습니다.
          </p>
        </div>
      </section>

      <section className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">연구 성과</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            연간 100명 이상의 학생들이 의대생공부습관연구소의 커리큘럼을 통해
            의과대학에 진학
          </li>
          <li>학생별 맞춤형 학습 방법론 개발 및 적용</li>
          <li>의과대학 입시 트렌드 분석 및 대응 전략 연구</li>
          <li>학습 효율성 향상을 위한 다양한 콘텐츠 개발</li>
          <li>학습 습관 개선을 통한 학업 성취도 향상 사례 연구</li>
        </ul>
      </section>

      {/* 하단 슬로건 */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg shadow-lg">
          <TrendingUp className="h-6 w-6 mr-3 text-yellow-400" />
          <p className="text-2xl font-bold">
            "전교1등 공부습관캠프,{' '}
            <span className="text-yellow-400">결과로 증명</span>합니다"
          </p>
        </div>
      </div>
    </div>
  )
}
