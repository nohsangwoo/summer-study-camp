import { Utensils } from 'lucide-react'
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion'

export default function MenuTable() {
  const weekDays = ['월', '화', '수', '목', '금', '토', '일']
  
  // 요일별 식단 데이터
  const menuData = [
    // 월요일
    {
      breakfast: {
        main: '쌀밥',
        soup: '미역국',
        side1: '계란말이',
        side2: '김치'
      },
      lunch: {
        main: '쌀밥',
        soup: '부대찌개',
        side1: '오징어볶음',
        side2: '계란찜'
      },
      dinner: {
        main: '쌀밥',
        soup: '버섯국',
        side1: '제육볶음',
        side2: '깍두기'
      }
    },
    // 화요일
    {
      breakfast: {
        main: '쌀밥',
        soup: '된장찌개',
        side1: '잡채',
        side2: '김치'
      },
      lunch: {
        main: '쌀밥',
        soup: '김치찌개',
        side1: '탕수육',
        side2: '샐러드'
      },
      dinner: {
        main: '쌀밥',
        soup: '어묵국',
        side1: '닭볶음탕',
        side2: '무말랭이'
      }
    },
    // 수요일
    {
      breakfast: {
        main: '쌀밥',
        soup: '콩나물국',
        side1: '소시지구이',
        side2: '김치'
      },
      lunch: {
        main: '쌀밥',
        soup: '육개장',
        side1: '불고기',
        side2: '무생채'
      },
      dinner: {
        main: '쌀밥',
        soup: '쇠고기무국',
        side1: '낙지볶음',
        side2: '김치'
      }
    },
    // 목요일
    {
      breakfast: {
        main: '쌀밥',
        soup: '유부국',
        side1: '생선구이',
        side2: '김치'
      },
      lunch: {
        main: '쌀밥',
        soup: '된장찌개',
        side1: '닭갈비',
        side2: '시금치나물'
      },
      dinner: {
        main: '쌀밥',
        soup: '계란국',
        side1: '고등어구이',
        side2: '김치'
      }
    },
    // 금요일
    {
      breakfast: {
        main: '쌀밥',
        soup: '떡국',
        side1: '멸치볶음',
        side2: '김치'
      },
      lunch: {
        main: '쌀밥',
        soup: '순두부찌개',
        side1: '갈비찜',
        side2: '콩나물무침'
      },
      dinner: {
        main: '쌀밥',
        soup: '북어국',
        side1: '갈비찜',
        side2: '김치'
      }
    },
    // 토요일
    {
      breakfast: {
        main: '쌀밥',
        soup: '시금치국',
        side1: '햄구이',
        side2: '김치'
      },
      lunch: {
        main: '쌀밥',
        soup: '미소국',
        side1: '돈까스',
        side2: '단무지'
      },
      dinner: {
        main: '쌀밥',
        soup: '들깨탕',
        side1: '돈까스',
        side2: '김치'
      }
    },
    // 일요일
    {
      breakfast: {
        main: '쌀밥',
        soup: '맑은국',
        side1: '두부조림',
        side2: '김치'
      },
      lunch: {
        main: '쌀밥',
        soup: '감자국',
        side1: '두루치기',
        side2: '호박볶음'
      },
      dinner: {
        main: '쌀밥',
        soup: '순두부찌개',
        side1: '불고기',
        side2: '김치'
      }
    }
  ]

  // 모바일용 아코디언 메뉴 UI
  const MobileMenuUI = () => (
    <Accordion type="single" collapsible className="w-full">
      {weekDays.map((day, index) => (
        <AccordionItem key={index} value={`day-${index}`}>
          <AccordionTrigger className="text-blue-700 font-bold py-3 px-4 bg-blue-50 hover:bg-blue-100 rounded-t-lg border border-blue-200">
            {day}요일 식단
          </AccordionTrigger>
          <AccordionContent className="border border-t-0 border-blue-200 rounded-b-lg p-0 overflow-hidden">
            <div className="bg-white p-4 border-b border-blue-100">
              <h4 className="font-bold bg-blue-500 text-white py-2 px-3 rounded-md mb-3">아침</h4>
              <div className="ml-2 space-y-1">
                <p className="font-bold text-gray-800">{menuData[index].breakfast.main}</p>
                <p className="text-blue-600">{menuData[index].breakfast.soup}</p>
                <p className="text-gray-700">{menuData[index].breakfast.side1}</p>
                <p className="text-red-500">{menuData[index].breakfast.side2}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 border-b border-blue-100">
              <h4 className="font-bold bg-blue-500 text-white py-2 px-3 rounded-md mb-3">점심</h4>
              <div className="ml-2 space-y-1">
                <p className="font-bold text-gray-800">{menuData[index].lunch.main}</p>
                <p className="text-red-500">{menuData[index].lunch.soup}</p>
                <p className="text-gray-700">{menuData[index].lunch.side1}</p>
                <p className="text-gray-700">{menuData[index].lunch.side2}</p>
              </div>
            </div>
            
            <div className="bg-white p-4">
              <h4 className="font-bold bg-blue-500 text-white py-2 px-3 rounded-md mb-3">저녁</h4>
              <div className="ml-2 space-y-1">
                <p className="font-bold text-gray-800">{menuData[index].dinner.main}</p>
                <p className="text-green-600">{menuData[index].dinner.soup}</p>
                <p className="text-gray-700">{menuData[index].dinner.side1}</p>
                <p className="text-red-500">{menuData[index].dinner.side2}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )

  return (
    <div className="mb-8 bg-white p-4 md:p-6 rounded-lg border border-blue-300 shadow-md">
      <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 md:mb-6 flex items-center justify-center">
        <Utensils className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2" />
        미리캠퍼스 주간 식단표
      </h3>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
        <p className="text-center text-sm md:text-lg font-medium text-blue-800">
          <span className="text-red-600 font-bold">
            전교1등 공부습관캠프
          </span>
          는 균형 잡힌 영양식으로 학생들의 건강과 집중력을 지원합니다
        </p>
      </div>

      {/* 모바일 화면용 아코디언 UI */}
      <div className="block md:hidden">
        <MobileMenuUI />
      </div>

      {/* 데스크톱 화면용 테이블 UI */}
      <div className="hidden md:block overflow-x-auto">
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