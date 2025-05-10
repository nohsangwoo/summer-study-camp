import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function StrategyTeachersRolePage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">전략담임 역할</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          위캔캠프의 전략담임은 학생들의 학습과 생활을 체계적으로 관리하며, 최상의 결과를 이끌어내기 위한 다양한 역할을
          수행합니다.
        </p>
      </div>

      {/* Role 1 */}
      <div className="border-b pb-8">
        <div className="flex flex-col items-center">
          <Image
            src="/strategy-role-1.png"
            alt="개인별 학습 심층 분석"
            width={700}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />
          <div className="text-center max-w-3xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              <span className="inline-flex items-center justify-center bg-red-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                1
              </span>
              개인별 학습 심층 분석을 진행합니다
            </h2>
            <p className="text-gray-600 mb-4">
              저희 담임 첫 임무 중, 학생의 선택에 대한 분석 상담이 진행됩니다. 학생들의 학습 성향, 학습 방법, 분석 결과,
              성향 상담 등 최상위권 맞춤 학습 설계를 위해 체계적으로 개인화 된 학습 자료를 수집합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Role 2 */}
      <div className="border-b pb-8">
        <div className="flex flex-col items-center">
          <Image
            src="/strategy-role-2.png"
            alt="개별 분석자료를 통한 수업과 학습 설계"
            width={700}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />
          <div className="text-center max-w-3xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              <span className="inline-flex items-center justify-center bg-red-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                2
              </span>
              누적된 개별 분석자료를 통해 최상위권에게 필요한 수업과 학습을 설계합니다
            </h2>
            <p className="text-gray-600 mb-4">
              학생 개인별 분석 데이터를 바탕으로 최상위권 맞춤 학습 계획을 수립합니다. 각 학생의 강점과 약점을 파악하여
              효율적인 학습 방향을 제시하고, 개인별 맞춤형 학습 전략을 구체화합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Role 3 */}
      <div className="border-b pb-8">
        <div className="flex flex-col items-center">
          <Image
            src="/strategy-role-3.png"
            alt="학생 생활 관리"
            width={700}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />
          <div className="text-center max-w-3xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              <span className="inline-flex items-center justify-center bg-red-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                3
              </span>
              흔들림 없이 학습에 집중할 수 있도록 최상위권 생활 관리도 철저하게 진행합니다
            </h2>
            <p className="text-gray-600 mb-4">
              일일 생활관리와 상시 멘탈케어를 통해 학생들이 학업에만 집중할 수 있는 환경을 조성합니다. 매일 출석 시간을
              확인하고 학습환경을 점검하며, 학생들의 심리적 안정을 위한 지속적인 상담과 격려를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Role 4 */}
      <div className="pb-8">
        <div className="flex flex-col items-center">
          <Image
            src="/strategy-role-4.png"
            alt="맞춤형 입시 전략"
            width={700}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />
          <div className="text-center max-w-3xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              <span className="inline-flex items-center justify-center bg-red-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                4
              </span>
              촘촘한 최상위권 입시를 꿰뚫는 최상위권 맞춤 입시 전략을 수립합니다
            </h2>
            <p className="text-gray-600 mb-4">
              정기적인 입시 간담회, 학부모 상담, 수시/정시 원서 상담 등을 통해 각 학생에게 최적화된 입시 전략을
              수립합니다. 학생의 성적과 목표에 맞는 대학 및 학과 선택을 지원하고, 합격 가능성을 높이기 위한 구체적인
              방안을 제시합니다.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">전략담임과 함께 최상위권 입시 성공을 향해 나아가세요</h3>
        <p className="text-gray-600 mb-6">
          위캔캠프의 전문 전략담임들이 학생 개개인에게 맞춤화된 학습 및 입시 전략으로 여러분의 성공적인 대학 입시를
          지원합니다.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/application/form">입학 상담 신청하기</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/metoda/strategy-teachers">전략담임 소개 보기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
