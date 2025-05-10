import { Clock } from "lucide-react"

export default function DailySchedule() {
  return (
    <div className="mt-12 mb-16">
      <div className="border-b border-gray-200 mb-6">
        <h2 className="inline-block text-xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-indigo-600" />
          일과 시간표
        </h2>
      </div>

      <h3 className="text-lg font-bold text-gray-700 mb-4">아는공부캠프 하루일과 스케줄표</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left border-b border-gray-300 w-1/4">시 간</th>
              <th className="py-3 px-4 text-left border-b border-gray-300 w-1/2">학습내용</th>
              <th className="py-3 px-4 text-left border-b border-gray-300 w-1/4">비 고</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-700">06:00 ~ 06:30</td>
              <td className="py-3 px-4 text-gray-700">기상 및 집합</td>
              <td className="py-3 px-4 text-blue-600 font-medium">시간 엄수</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-3 px-4 text-gray-700">06:30 ~ 08:00</td>
              <td className="py-3 px-4 font-bold">
                공동체 학습 <span className="text-red-500">(1시간 30분)</span>
              </td>
              <td className="py-3 px-4 text-gray-700">30분 계획표 학습</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-700">08:00 ~ 08:30</td>
              <td className="py-3 px-4 text-gray-700">아침식사</td>
              <td className="py-3 px-4 text-blue-600 font-medium">시간 엄수</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-3 px-4 text-gray-700">08:30 ~ 11:30</td>
              <td className="py-3 px-4 font-bold">
                공동체 학습 <span className="text-red-500">(3시간)</span>
              </td>
              <td className="py-3 px-4 text-gray-700">
                30분 계획표
                <br />
                학습진도관리표 작성
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-700">11:30 ~ 13:00</td>
              <td className="py-3 px-4 text-gray-700">낮잠 및 점심식사</td>
              <td className="py-3 px-4"></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-3 px-4 text-gray-700">13:00 ~ 17:30</td>
              <td className="py-3 px-4 font-bold">
                공동체 학습 <span className="text-red-500">(4시간 30분)</span>
              </td>
              <td className="py-3 px-4">
                30분 계획표
                <br />
                <span className="text-red-500 font-medium">S.K.Y.메디컬 멘토 특강</span>
                <br />
                학습 진도 중간 점검
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-700">17:30 ~ 18:30</td>
              <td className="py-3 px-4 text-gray-700">저녁식사 및 운동</td>
              <td className="py-3 px-4"></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-3 px-4 text-gray-700">18:30 ~ 23:30</td>
              <td className="py-3 px-4 font-bold">
                공동체 학습 <span className="text-red-500">(5시간)</span>
              </td>
              <td className="py-3 px-4">
                30분 계획표
                <br />
                <span className="text-red-500 font-medium">S.K.Y.메디컬 멘토 특강</span>
                <br />
                학습 진도 최종 확인
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-700">23:30 ~ 24:00</td>
              <td className="py-3 px-4 text-gray-700">취침준비 및 취침</td>
              <td className="py-3 px-4 text-blue-600 font-medium">시간 엄수</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-md text-gray-700 text-sm">
        일요일은 저녁먹기 전까지 자유시간이며, 산책, 운동, 영화시청, 부족한 수면 보충 시간으로 휴식을 가지고 저녁식사 후
        진도 관리표 작성 및 상담 시간이 있습니다.
      </div>
    </div>
  )
}
