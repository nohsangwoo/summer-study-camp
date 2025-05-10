import Image from "next/image"
import { BookOpen, CheckCircle, Clock, Calendar, Award, Users, GraduationCap } from "lucide-react"
import DailySchedule from "./components/DailySchedule"

export default function CurriculumPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">커리큘럼</h1>
        <p className="text-gray-600">
          모든 학생들이 '스스로' 공부하는 자기주도적인 학습 기관, 아는공부캠프 학습 커리큘럼
        </p>
      </div>

      {/* 일과 시간표 */}
      <DailySchedule />

      {/* POINT 01 */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="inline-block text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2">POINT 01</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/curriculum-point1.jpg"
              alt="명치전략과 멘토 선생님과의 공부법 1:1 학습상담"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              입문 SKY및 명치전략과 멘토 선생님과의
              <br />
              <span className="text-indigo-600">공부법 1:1 학습상담</span>
            </h3>
            <p className="text-gray-600 mb-4">
              멘토 및 담임 선생님은 모든 학생들의 자신의 가치관 및 목표, 그리고 공부법을 통해 각 학생 담임 SKY 및
              명치전략과 멘토 선생님과 함께 1:1로 주간 별 맞춤 학습진도관리를 진행하게 됩니다.
            </p>
            <p className="text-gray-600">
              각 날마다 3교시마다 본 그룹의 세부적 그룹을 재편성으로 14:4(2) 학습의 특성을 무엇이 됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* POINT 02 */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="inline-block text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2">POINT 02</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/curriculum-point2.jpg"
              alt="학부모님과 매일 소통 및 보고"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              철저하고 꼼꼼한 관리!
              <br />
              <span className="text-indigo-600">학부모님과 매일 소통 및 보고</span>
            </h3>
            <p className="text-gray-600 mb-4">
              각 조별 멘토 선생님들은 학생들의 1:1로 학습한 학습진도관리표를 토대로 한 주간리포트를 작성하며 매일 학생
              상담과 함께 주간 학습 진행 상황을 30초영상으로 정리하여 학부모님께 보고합니다.
            </p>
            <p className="text-gray-600">
              이를 통해 조금 더 긴 안목 속에서 학생의 학습을 보시고 학부모님들께 마음을 편하게합니다.
            </p>
          </div>
        </div>
      </div>

      {/* POINT 03 */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="inline-block text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2">POINT 03</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/curriculum-point3.jpg"
              alt="14시간동안 함시 상주하는 SKY 및 명치전략과 멘토 선생님"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              14시간동안 함시 상주하는
              <br />
              <span className="text-indigo-600">SKY 및 명치전략과 멘토 선생님!</span>
            </h3>
            <p className="text-gray-600 mb-4">
              하루 14시간 동안 공부하는 보다 많은 학생이 있지만 어떻게 공부고 조금 더 효과적으로 어떻게 문제의 난이도
              만족하기 어렵습니다. 이런 학생을 언제든 자신의 소통 공간 옆에 상주하고 계시는 SKY 및 명치전략과 멘토
              선생님과의 즉석 질의가 학생의 어려움 문제에 빠르게 1:1로 답변 해결해주십니다.
            </p>
          </div>
        </div>
      </div>

      {/* POINT 04 */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="inline-block text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2">POINT 04</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/curriculum-point4-1.jpg"
                alt="30분 정리된 학습진도표와 누적된 자세히 시간표 공부 파악"
                width={240}
                height={320}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/curriculum-point4-2.jpg"
                alt="30분 정리된 학습진도표와 누적된 자세히 시간표 공부 파악"
                width={240}
                height={320}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              30분 정리된 학습진도표와 누적된
              <br />
              <span className="text-indigo-600">자세히 시간표 공부 파악!</span>
            </h3>
            <p className="text-gray-600 mb-4">
              SKY 서울대 의대생들 학습을 통해서 자신의 학습의 학습진도관리표는 자신의 학습의 진도와 학습량을 한눈에
              파악할 수 있게 해줍니다. 이는 학생들이 자신의 학습 상황을 객관적으로 파악하고 효율적인 학습 계획을 세울 수
              있도록 도와줍니다.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>30분마다 30초의 자신의 학습 확인을 통하여 자신만의 학습법!</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  매 시간마다 30분마다 시간 학습진도 확인을 하고 있으며, 자신의 시간의 활용도와 집중력을 스스로 체크하며
                  자신만의 학습법을 만들어 나갑니다.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* POINT 05 */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="inline-block text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2">POINT 05</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/curriculum-point5.jpg"
              alt="SKY 및 명치전략과 선생님들의 다양한 특강"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              실력이 확보 된 멘토
              <br />
              <span className="text-indigo-600">SKY 및 명치전략과 선생님들의 다양한 특강!</span>
            </h3>
            <p className="text-gray-600 mb-4">
              SKY 의대생들의 학습법과 자신 공부 시간, 자신 공부 방법 등 다양한 학습법을 공유하며 자신만의 학습법을
              찾아가는 과정에서 도움을 주는 특강을 진행합니다. 이를 통해 학생들은 효율적인 학습 방법을 습득하고 자신의
              학습 스타일에 맞는 전략을 개발할 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* POINT 06 */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="inline-block text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2">POINT 06</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/curriculum-point6.jpg"
              alt="철저하게 1대 1대로 수업되는 수학화상 일대일반 1대 수학실 / 영어교육 특성"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              철저하게 1대 1대로 수업되는 수학화상
              <br />
              <span className="text-indigo-600">일대일반 1대 수학실 / 영어교육 특성</span>
            </h3>
            <p className="text-gray-600 mb-4">
              SKY 의대생들의 철저하게 개인 맞춤 수업과 1:1 화상으로 진행되는 수학 수업은 학생 개개인의 수준과 학습
              속도에 맞춰 진행됩니다. 이를 통해 학생들은 자신의 약점을 보완하고 강점을 더욱 강화할 수 있으며, 효율적인
              학습이 가능합니다. 또한 영어교육도 학생의 수준에 맞게 맞춤형으로 진행되어 최대한의 학습 효과를 얻을 수
              있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* POINT 07 */}
      <div className="mb-16">
        <div className="border-b border-gray-200 mb-6">
          <h2 className="inline-block text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-2">POINT 07</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/curriculum-point7.jpg"
              alt="SKY 및 명치전략과 선생님들의 1:1 집중 수업"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              SKY 및 명치전략과 선생님들의 1:1 집중 수업!
              <br />
              <span className="text-indigo-600">1회 60분, 최대 2~3명 진행되는 1:1 수업!</span>
            </h3>
            <p className="text-gray-600 mb-4">
              1:1 집중수업 시간에는 학생, 선생님 학습법을 공유하는 SKY 및 명치전략과 멘토 선생님과 함께, 단순한 문제
              풀이가 아닌 학습 방법과 전략에 대한 깊이 있는 논의가 이루어집니다. 1회 60분 동안 최대 2~3명의 소규모
              그룹으로 진행되어 각 학생에게 충분한 관심과 지도가 가능합니다. 이를 통해 학생들은 자신의 학습 스타일을
              발견하고 효율적인 학습 방법을 습득할 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 커리큘럼 특징 */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">아는공부캠프 커리큘럼 특징</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">14시간 집중 학습</h3>
            </div>
            <p className="text-gray-600">
              하루 14시간 동안 체계적인 학습 일정으로 학습 효율성을 극대화하고, 자기주도적 학습 습관을 형성합니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">1:1 맞춤형 지도</h3>
            </div>
            <p className="text-gray-600">
              SKY 및 명치전략과 멘토 선생님들의 1:1 맞춤형 지도로 학생 개개인의 학습 수준과 속도에 맞는 교육을
              제공합니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">체계적인 학습 관리</h3>
            </div>
            <p className="text-gray-600">
              30분 단위로 정리된 학습진도표와 주간 리포트를 통해 학습 상황을 체계적으로 관리하고 학부모님과 공유합니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">다양한 특강 프로그램</h3>
            </div>
            <p className="text-gray-600">
              SKY 및 명치전략과 선생님들의 다양한 특강을 통해 효율적인 학습 방법과 전략을 습득할 수 있습니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">검증된 멘토진</h3>
            </div>
            <p className="text-gray-600">
              SKY 및 명치전략과 출신의 검증된 멘토진이 학생들의 학습을 지도하여 높은 교육 품질을 보장합니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">자기주도적 학습</h3>
            </div>
            <p className="text-gray-600">
              학생 스스로 학습 계획을 세우고 실천하는 자기주도적 학습 환경을 조성하여 장기적인 학습 능력을 향상시킵니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
