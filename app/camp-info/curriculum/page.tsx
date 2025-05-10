import Image from "next/image"
import { Sparkles } from "lucide-react"
import DailySchedule from "./components/DailySchedule"

export default function CurriculumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">전교1등 공부습관캠프 커리큘럼</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          전교1등 공부습관캠프는 학생들의 학습 습관과 자기주도적 학습 능력을 향상시키기 위한 체계적인 프로그램을
          제공합니다.
        </p>

        {/* 새로운 슬로건 추가 */}
        <div className="mt-6">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
            <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />
            <p className="font-medium">
              "전교1등 공부습관캠프, <span className="font-bold">공부 방법부터 달라집니다</span>"
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">커리큘럼 특징</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>1:1 맞춤형 멘토링:</strong> 학생 개인별 학습 스타일과 성향에 맞는 맞춤형 학습 지도
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>체계적인 학습 계획:</strong> 학생의 현재 수준과 목표에 맞는 단계별 학습 계획 수립
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>자기주도학습 습관 형성:</strong> 스스로 학습 목표를 설정하고 실천하는 습관 형성
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>학습 동기 부여:</strong> 성취감을 통한 학습 동기 부여 및 자신감 향상
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>전인적 성장:</strong> 학습뿐만 아니라 인성, 리더십, 협동심 등 전인적 성장 도모
                </span>
              </li>
            </ul>
          </div>
          <Image
            src="/curriculum-point1.jpg"
            alt="멘토와 함께하는 학습"
            width={500}
            height={350}
            className="w-full h-auto"
          />
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/curriculum-point2.jpg" alt="학습 계획 수립" width={500} height={350} className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">프로그램 구성</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>학습 진단 및 목표 설정:</strong> 개인별 학습 수준 진단 및 목표 설정
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>학습 방법론 교육:</strong> 효율적인 학습 방법 및 시간 관리 전략 교육
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>과목별 심화 학습:</strong> 주요 과목별 심화 학습 및 취약점 보완
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>멘토링 세션:</strong> 의대생 멘토와의 1:1 및 그룹 멘토링 세션
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>학습 성과 평가:</strong> 정기적인 학습 성과 평가 및 피드백 제공
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 새로운 슬로건 추가 */}
      <div className="text-center mb-12">
        <div className="inline-block bg-yellow-100 px-6 py-3 rounded-lg border-b-4 border-yellow-400 shadow-md">
          <p className="text-gray-800 font-medium">
            "전교1등 공부습관캠프에서 <span className="text-yellow-600 font-bold">3주 투자</span>로{" "}
            <span className="text-yellow-600 font-bold">1년 성적 상승</span>의 효과를 경험하세요"
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">주요 커리큘럼 포인트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700">1. 학습 진단 및 분석</h3>
              <p className="text-gray-700 mb-4">
                개인별 학습 스타일, 강점, 약점을 진단하고 분석하여 맞춤형 학습 계획을 수립합니다. 학생의 현재 수준과
                목표를 고려한 체계적인 접근을 통해 효율적인 학습 방향을 설정합니다.
              </p>
            </div>
            <Image
              src="/curriculum-point3.jpg"
              alt="학습 진단 및 분석"
              width={500}
              height={350}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700">2. 학습 습관 형성</h3>
              <p className="text-gray-700 mb-4">
                규칙적인 학습 시간 관리, 효율적인 노트 정리법, 집중력 향상 기법 등 학습 효율을 높이는 습관을 형성합니다.
                전교 1등 멘토들의 실제 학습 습관을 직접 체험하고 내재화합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 px-6 pb-6">
              <Image
                src="/curriculum-point4-1.jpg"
                alt="학습 계획표"
                width={240}
                height={320}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/curriculum-point4-2.jpg"
                alt="학습 시간표"
                width={240}
                height={320}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700">3. 과목별 학습 전략</h3>
              <p className="text-gray-700 mb-4">
                수학, 영어, 국어 등 주요 과목별 효과적인 학습 전략을 제시하고, 각 과목의 특성에 맞는 학습 방법을
                교육합니다. 과목별 취약점을 보완하고 강점을 더욱 강화하는 전략적 접근을 지도합니다.
              </p>
            </div>
            <Image
              src="/curriculum-point5.jpg"
              alt="과목별 학습 전략"
              width={500}
              height={350}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700">4. 자기주도학습 역량 강화</h3>
              <p className="text-gray-700 mb-4">
                스스로 학습 목표를 설정하고, 계획을 수립하며, 실천하는 자기주도학습 역량을 강화합니다. 학습 동기 부여 및
                자기 관리 능력 향상을 통해 지속 가능한 학습 습관을 형성합니다.
              </p>
            </div>
            <Image
              src="/curriculum-point6.jpg"
              alt="자기주도학습 역량 강화"
              width={500}
              height={350}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700">5. 멘토링 및 코칭</h3>
              <p className="text-gray-700 mb-4">
                의대생 멘토들의 1:1 및 그룹 멘토링을 통해 학습 방법, 시간 관리, 진로 상담 등 다양한 영역에서 실질적인
                도움을 제공합니다. 멘토의 경험과 노하우를 직접 전수받는 기회를 제공합니다.
              </p>
            </div>
            <Image
              src="/curriculum-point7.jpg"
              alt="멘토링 및 코칭"
              width={500}
              height={350}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-700">6. 학습 성과 관리</h3>
              <p className="text-gray-700 mb-4">
                정기적인 학습 성과 평가 및 피드백을 통해 지속적인 개선을 도모합니다. 학습 과정에서의 어려움을 즉시
                해결하고, 성취감을 통해 학습 동기를 유지할 수 있도록 지원합니다.
              </p>

              {/* 새로운 슬로건 추가 */}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-center text-gray-700 font-medium">
                  "전교1등 공부습관캠프, <span className="text-blue-600 font-bold">성적 향상의 시작</span>입니다"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">일일 학습 일정</h2>
        <DailySchedule />
      </div>

      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">캠프 기간 중 학습 성과</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-blue-700 text-center">1주차</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>학습 진단 및 개인별 학습 계획 수립</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>효율적인 학습 방법론 습득</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>시간 관리 전략 수립 및 실천</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>과목별 학습 전략 이해</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-blue-700 text-center">2주차</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>학습 습관 형성 및 강화</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>과목별 심화 학습 진행</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>취약점 보완 및 강점 강화</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>중간 학습 성과 평가 및 피드백</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-blue-700 text-center">3주차</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>자기주도학습 역량 완성</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>학습 성과 종합 평가</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>캠프 이후 학습 계획 수립</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>지속 가능한 학습 전략 확립</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 새로운 슬로건 추가 */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg shadow-lg">
          <Sparkles className="h-6 w-6 mr-3 text-yellow-300" />
          <p className="text-xl font-medium">
            "전교1등 공부습관캠프, <span className="font-bold">성적 향상을 넘어 미래를 준비</span>합니다"
          </p>
          <Sparkles className="h-6 w-6 ml-3 text-yellow-300" />
        </div>
      </div>
    </div>
  )
}
