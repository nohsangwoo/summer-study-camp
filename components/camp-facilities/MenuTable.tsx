import { Utensils } from 'lucide-react'

export default function MenuTable() {
  return (
    <div className="mb-8 bg-white p-6 rounded-lg border border-blue-300 shadow-md">
      <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center justify-center">
        <Utensils className="h-6 w-6 text-blue-600 mr-2" />
        미리캠퍼스 주간 식단표
      </h3>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg mb-6">
        <p className="text-center text-lg font-medium text-blue-800">
          <span className="text-red-600 font-bold">
            전교1등 공부습관캠프
          </span>
          는 균형 잡힌 영양식으로 학생들의 건강과 집중력을 지원합니다
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600">
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                구분
              </th>
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                월
              </th>
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                화
              </th>
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                수
              </th>
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                목
              </th>
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                금
              </th>
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                토
              </th>
              <th className="py-3 px-4 text-white font-bold text-center border-2 border-blue-300 text-lg">
                일
              </th>
            </tr>
          </thead>
          <tbody>
            {/* 조식 */}
            <tr>
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-500 text-white font-bold text-center text-lg">
                조식
              </td>
              {/* 월요일 조식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-blue-600 font-medium mb-1">
                  미역국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  계란말이
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 화요일 조식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-blue-600 font-medium mb-1">
                  된장찌개
                </div>
                <div className="text-center text-gray-700 mb-1">
                  잡채
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 수요일 조식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-blue-600 font-medium mb-1">
                  콩나물국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  소시지구이
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 목요일 조식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-blue-600 font-medium mb-1">
                  유부국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  생선구이
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 금요일 조식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-blue-600 font-medium mb-1">
                  떡국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  멸치볶음
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 토요일 조식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-blue-600 font-medium mb-1">
                  시금치국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  햄구이
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 일요일 조식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-blue-600 font-medium mb-1">
                  맑은국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  두부조림
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
            </tr>

            {/* 중식 */}
            <tr>
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-500 text-white font-bold text-center text-lg">
                중식
              </td>
              {/* 월요일 중식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-50">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-red-500 font-medium mb-1">
                  부대찌개
                </div>
                <div className="text-center text-gray-700 mb-1">
                  오징어볶음
                </div>
                <div className="text-center text-gray-700">계란찜</div>
              </td>
              {/* 화요일 중식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-50">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-red-500 font-medium mb-1">
                  김치찌개
                </div>
                <div className="text-center text-gray-700 mb-1">
                  탕수육
                </div>
                <div className="text-center text-gray-700">샐러드</div>
              </td>
              {/* 수요일 중식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-50">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-red-500 font-medium mb-1">
                  육개장
                </div>
                <div className="text-center text-gray-700 mb-1">
                  불고기
                </div>
                <div className="text-center text-gray-700">무생채</div>
              </td>
              {/* 목요일 중식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-50">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-red-500 font-medium mb-1">
                  된장찌개
                </div>
                <div className="text-center text-gray-700 mb-1">
                  닭갈비
                </div>
                <div className="text-center text-gray-700">
                  시금치나물
                </div>
              </td>
              {/* 금요일 중식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-50">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-red-500 font-medium mb-1">
                  순두부찌개
                </div>
                <div className="text-center text-gray-700 mb-1">
                  갈비찜
                </div>
                <div className="text-center text-gray-700">
                  콩나물무침
                </div>
              </td>
              {/* 토요일 중식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-50">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-red-500 font-medium mb-1">
                  미소국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  돈까스
                </div>
                <div className="text-center text-gray-700">단무지</div>
              </td>
              {/* 일요일 중식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-50">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-red-500 font-medium mb-1">
                  감자국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  두루치기
                </div>
                <div className="text-center text-gray-700">
                  호박볶음
                </div>
              </td>
            </tr>

            {/* 석식 */}
            <tr>
              <td className="py-3 px-4 border-2 border-blue-300 bg-blue-500 text-white font-bold text-center text-lg">
                석식
              </td>
              {/* 월요일 석식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-green-600 font-medium mb-1">
                  버섯국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  제육볶음
                </div>
                <div className="text-center text-red-500 font-medium">
                  깍두기
                </div>
              </td>
              {/* 화요일 석식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-green-600 font-medium mb-1">
                  어묵국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  닭볶음탕
                </div>
                <div className="text-center text-gray-700">
                  무말랭이
                </div>
              </td>
              {/* 수요일 석식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-green-600 font-medium mb-1">
                  쇠고기무국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  낙지볶음
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 목요일 석식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-green-600 font-medium mb-1">
                  계란국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  고등어구이
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 금요일 석식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-green-600 font-medium mb-1">
                  북어국
                </div>
                <div className="text-center text-gray-700 mb-1">
                  갈비찜
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 토요일 석식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-green-600 font-medium mb-1">
                  들깨탕
                </div>
                <div className="text-center text-gray-700 mb-1">
                  돈까스
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
              {/* 일요일 석식 */}
              <td className="py-3 px-4 border-2 border-blue-300 bg-white">
                <div className="text-center font-bold text-gray-800 mb-2">
                  쌀밥
                </div>
                <div className="text-center text-green-600 font-medium mb-1">
                  순두부찌개
                </div>
                <div className="text-center text-gray-700 mb-1">
                  불고기
                </div>
                <div className="text-center text-red-500 font-medium">
                  김치
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-center text-gray-700 font-medium">
          ※ 식단은 식자재 수급 상황에 따라 변경될 수 있습니다.
        </p>
        <p className="text-center text-gray-700">
          알러지 정보는 식당에 문의해주세요. (☎ 02-123-4567)
        </p>
      </div>
    </div>
  )
} 