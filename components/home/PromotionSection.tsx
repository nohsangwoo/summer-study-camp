import Image from 'next/image'
import { MapPin, TrendingUp, CheckCircle2 } from 'lucide-react'

export const PromotionSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container">
        {/* 수도권 인기 캠프 안내 */}
        <div className="mb-12 text-center">
          <div className="bg-yellow-400 text-gray-900 py-6 px-4 rounded-lg inline-block mb-6 shadow-lg transform -rotate-1">
            <h2 className="text-2xl md:text-3xl font-bold">
              대치맘들이 학원대신 선택했다는 공부습관캠프
              <br />
              드디어 드디어 부울경 상륙
              <br />
              <span className="text-3xl md:text-4xl text-blue-800">
                전교1등 공부습관의 비밀, 지금 확인하세요
              </span>
            </h2>
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-700 mb-8">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="font-medium">부산경남지역 첫 오픈</span>
            <span className="mx-2">|</span>
            <TrendingUp className="h-5 w-5 text-rose-600" />
            <span className="font-medium">수도권 학부모 만족도 98%</span>
          </div>
        </div>

        {/* 프로모션 배너 */}
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-12 transform transition-all hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            {/* 좌측 배너 */}
            <div
              className="w-full md:w-2/5 p-8 relative"
              style={{
                backgroundImage: "url('/placeholder.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* 오버레이 추가 */}
              <div className="absolute inset-0 bg-black opacity-80"></div>
              <div className="absolute top-0 left-0 bg-yellow-500 text-black font-bold py-1 px-4 rotate-[-45deg] translate-x-[-1rem] translate-y-[1rem] z-10">
                BEST
              </div>
              <div className="h-full flex flex-col justify-center relative z-10">
                <h3 className="text-yellow-400 text-2xl md:text-4xl font-bold mb-2">
                  전교1등 의대생 멘토의
                </h3>
                <h2 className="text-yellow-400 text-3xl md:text-4xl font-extrabold mb-6">
                  1:1 학습교정!
                </h2>
                <p className="text-white text-3xl mb-6 font-bold">
                  여름방학 3주
                </p>
                <div className="bg-yellow-400 text-black font-bold text-xl md:text-3xl py-4 px-4 mb-6 flex justify-center items-center">
                  전교1등 의대생들의 공부습관 캠프
                </div>
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full w-max mx-auto transition-all">
                  자세히보기 → GO!
                </button>
              </div>
            </div>

            {/* 우측 배너 */}
            <div
              className="w-full md:w-3/5 p-8 relative"
              style={{
                backgroundImage: "url('/placeholder.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* 오버레이 추가 */}
              <div className="absolute inset-0 bg-blue-600 opacity-80"></div>
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="flex flex-col gap-2 h-full justify-between pb-2 transform rotate-[-12deg] relative">
                  <div className="relative top-[-12px]">
                    <div className="bg-blue-700 rounded-[16px] md:text-3xl px-4 py-2 text-yellow-300 font-bold inline-block mb-3">
                      전국유일 1:5 의대생 담임 멘토제!
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-700 rounded-[16px] md:text-3xl px-4 py-2 text-yellow-300 font-bold inline-block mt-3">
                      담임멘토의 1:1 공부방법 전수!
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="bg-yellow-400 text-black font-bold text-xl md:text-5xl py-3 px-4">
                    <span className="text-red-600 text-2xl md:text-3xl">
                      2025 여름방학 3주
                    </span>{' '}
                    전교1등 공부습관캠프
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 새로운 슬로건 추가 */}
        <div className="text-center mb-10">
          <p className="text-xl font-medium text-gray-700 italic border-l-4 border-r-4 border-blue-500 px-6 py-3 inline-block">
            "3주간 전교1등 의대생 멘토들의{' '}
            <span className="text-blue-600 font-bold">공부습관 전수</span>로 내
            아이의 평생 성적이 달라집니다"
          </p>
        </div>

        {/* 캠프 하이라이트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">
                전교1등 의대생 멘토의 1:1 학습 교정
              </h3>
            </div>
            <p className="text-gray-700">
              여름방학 20박21일 동안 전교1등 의대생 중심 멘토들이 1:1로 학생들의
              학습 방법을 교정하고 최적의 공부습관을 형성합니다.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-600 rounded-full p-2 mr-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-indigo-800">
                국내 유일 1:5 담임멘토제
              </h3>
            </div>
            <p className="text-gray-700">
              한명의 담임멘토가 5명의 학생만을 전담하여 밀착 관리하는 국내
              유일의 시스템으로 학생 개개인에게 맞춤형 학습 지도를 제공합니다.
            </p>
          </div>

          <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 rounded-full p-2 mr-3">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-rose-800">
                2025 여름방학 3주 특별프로그램
              </h3>
            </div>
            <p className="text-gray-700">
              공부습관+과목별집중특강+주제탐구활동+독서활동+병원견학 프로그램 등
              전국 어디서도 볼 수 없는 전일공만의 특별 프로그램으로 학습효율을
              극대화 합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
