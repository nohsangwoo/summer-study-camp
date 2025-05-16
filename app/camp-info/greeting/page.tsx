import Image from "next/image"
import { Quote } from 'lucide-react'

export default function GreetingPage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* 대표 사진 */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg shadow-md bg-gray-200 p-4">
            <Image
              src="/placeholder.svg"
              alt="김동헌 대표"
              width={400}
              height={500}
              className="mx-auto rounded-md w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-600/80 text-white p-4 text-center">
              <h3 className="text-lg font-medium">부산대 의대</h3>
              <h2 className="text-xl font-bold">김동헌</h2>
            </div>
          </div>
        </div>

        {/* 인사말 내용 */}
        <div className="w-full lg:w-2/3">
          <div className="flex items-start mb-6">
            <Quote className="h-8 w-8 text-blue-500 mr-2 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-800">대표인사말</h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              안녕하세요, 전교1등 공부방법 연구소 전일공 대표 멘토인 튜터의 부산대의대 김동헌입니다. 전원 의대생으로
              구성된 저희 캠프는 각자의 학습 노하우 및 방향성, 구체적인 사고 과정, 그리고 한 해의 공부 계획 및 전략들을
              공유하여 의대를 또는 명문대를 진학하고자 하는 전국의 1등 학생들에게 다방면으로 도움을 주고자 합니다.
            </p>

            <p>
              본 캠프에서는 저를 포함한 4명의 스태프 이외에 20여명의 의대생들이 멘버로 참여하고 있고 과외연구팀,
              콘텐츠개발팀, 튜터연구팀, 학생관리팀 으로 구성되어 체계적으로 학생 관리 및 학습관리를 하고 있습니다.
            </p>

            <p>
              캠프에서는 전국 전교1등 학생들의 공통된 공부방법을 찾아내 개발한 전교1등의 공부법과 함께 캠프 참가자
              개개인의 영어, 수학, 국어 3과목 진도 유지, 그리고 동기부여를 위한 또는 실전에 활용할 수 있는 의대합격
              심층상담, 자기주도의 의대합격 생기부를 위한 주제탐구활동, 생기부 토탈케어를 지원하는 것은 물론 저희를
              통해하고 있는 극소병원의 도움을 받아 현직의사선생님의 특강과 병원 견학, 그리고 명사특강을 특별히 제공하고
              있어 여타 썸머캠프와는 차원이 틀린 캠프라 자부할 수 있습니다.
            </p>

            <p>
              이번 캠프를 통해 의대를 또는 명문대를 희망하는 후배들이 꿈을 이룰 수 있도록 모든 방면에서 최선을 다해
              돕겠습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 서명 */}
      <div className="flex justify-end mt-12">
        <div className="text-right">
          <h3 className="text-xl font-bold text-blue-600 mb-1">전일공대표멘토</h3>
          <h4 className="text-2xl font-bold text-gray-800">김동헌</h4>
        </div>
      </div>
    </div>
  )
}
