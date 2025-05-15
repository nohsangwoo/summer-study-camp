import Image from "next/image"
import { MapPin, Home, Utensils, BookOpen, Bed, ShowerHeadIcon as Shower, Coffee } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FacilitiesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">캠프시설</h1>
        <p className="text-gray-600">
          편안함과 집중을 위한 최고의 학습 환경, 아는공부 학습장 및 기숙사 시설을 소개합니다.
        </p>
      </div>

      <Tabs defaultValue="study" className="mb-12">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="study" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>학습시설</span>
          </TabsTrigger>
          <TabsTrigger value="dining" className="flex items-center gap-2">
            <Utensils className="h-4 w-4" />
            <span>식당 내부모습</span>
          </TabsTrigger>
          <TabsTrigger value="dormitory" className="flex items-center gap-2">
            <Bed className="h-4 w-4" />
            <span>숙소 내부모습</span>
          </TabsTrigger>
          <TabsTrigger value="location" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>오시는 길</span>
          </TabsTrigger>
        </TabsList>

        {/* 학습시설 */}
        <TabsContent value="study">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/study-hall-1.jpg" alt="공용체 학습장" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">공용체 학습장</h3>
                  <p className="text-gray-600">
                    넓은 공간에 개인별 학습 공간이 마련되어 있어 집중력 있는 학습이 가능합니다.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/study-hall-2.jpg" alt="공용체 학습장" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">공용체 학습장</h3>
                  <p className="text-gray-600">
                    밝은 조명과 쾌적한 환경에서 학생들이 효율적으로 학습할 수 있도록 설계되었습니다.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/study-hall-3.jpg" alt="고급 학습장" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">고급 학습장</h3>
                  <p className="text-gray-600">현대적인 시설과 편안한 의자로 장시간 학습에도 피로감을 최소화합니다.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/study-hall-4.jpg" alt="1:1 학습강당" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">1:1 학습강당</h3>
                  <p className="text-gray-600">
                    개인 맞춤형 학습을 위한 공간으로, 멘토와의 1:1 학습에 최적화되어 있습니다.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/study-hall-5.jpg" alt="그룹 스터디룸" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">그룹 스터디룸</h3>
                  <p className="text-gray-600">소규모 그룹 학습을 위한 공간으로, 토론과 협업 학습에 적합합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/study-hall-6.jpg" alt="멀티미디어 학습실" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">멀티미디어 학습실</h3>
                  <p className="text-gray-600">
                    최신 멀티미디어 장비를 갖춘 학습실로, 다양한 형태의 학습 자료를 활용할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8 bg-blue-100 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Utensils className="h-5 w-5 text-blue-600 mr-2" />
                미리캠퍼스 주간 메뉴표
              </h3>
              <div className="overflow-x-auto">
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-1">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="py-2 px-1 border border-blue-300 text-center">구분</th>
                        <th className="py-2 px-1 border border-blue-300 text-center">월</th>
                        <th className="py-2 px-1 border border-blue-300 text-center">화</th>
                        <th className="py-2 px-1 border border-blue-300 text-center">수</th>
                        <th className="py-2 px-1 border border-blue-300 text-center">목</th>
                        <th className="py-2 px-1 border border-blue-300 text-center">금</th>
                        <th className="py-2 px-1 border border-blue-300 text-center">토</th>
                        <th className="py-2 px-1 border border-blue-300 text-center">일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 조식 */}
                      <tr>
                        <td className="py-2 px-1 border border-blue-300 bg-blue-500 text-white font-bold text-center">조식</td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-blue-600">미역국</div>
                          <div className="text-center text-sm">계란말이</div>
                          <div className="text-center text-sm text-red-500">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-blue-600">된장찌개</div>
                          <div className="text-center text-sm">잡채</div>
                          <div className="text-center text-sm text-red-500">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-blue-600">콩나물국</div>
                          <div className="text-center text-sm">소시지구이</div>
                          <div className="text-center text-sm text-red-500">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-blue-600">유부국</div>
                          <div className="text-center text-sm">생선구이</div>
                          <div className="text-center text-sm text-red-500">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-blue-600">떡국</div>
                          <div className="text-center text-sm">멸치볶음</div>
                          <div className="text-center text-sm text-red-500">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-blue-600">시금치국</div>
                          <div className="text-center text-sm">햄구이</div>
                          <div className="text-center text-sm text-red-500">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-blue-600">맑은국</div>
                          <div className="text-center text-sm">두부조림</div>
                          <div className="text-center text-sm text-red-500">김치</div>
                        </td>
                      </tr>
                      
                      {/* 중식 */}
                      <tr>
                        <td className="py-2 px-1 border border-blue-300 bg-blue-500 text-white font-bold text-center">중식</td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-red-500">부대찌개</div>
                          <div className="text-center text-sm">오징어볶음</div>
                          <div className="text-center text-sm">계란찜</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-red-500">김치찌개</div>
                          <div className="text-center text-sm">탕수육</div>
                          <div className="text-center text-sm">샐러드</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-red-500">육개장</div>
                          <div className="text-center text-sm">불고기</div>
                          <div className="text-center text-sm">무생채</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-red-500">된장찌개</div>
                          <div className="text-center text-sm">닭갈비</div>
                          <div className="text-center text-sm">시금치나물</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-red-500">순두부찌개</div>
                          <div className="text-center text-sm">갈비찜</div>
                          <div className="text-center text-sm">콩나물무침</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-red-500">미소국</div>
                          <div className="text-center text-sm">돈까스</div>
                          <div className="text-center text-sm">단무지</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-red-500">감자국</div>
                          <div className="text-center text-sm">두루치기</div>
                          <div className="text-center text-sm">호박볶음</div>
                        </td>
                      </tr>
                      
                      {/* 석식 */}
                      <tr>
                        <td className="py-2 px-1 border border-blue-300 bg-blue-500 text-white font-bold text-center">석식</td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-green-600">버섯국</div>
                          <div className="text-center text-sm">제육볶음</div>
                          <div className="text-center text-sm">깍두기</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-green-600">어묵국</div>
                          <div className="text-center text-sm">닭볶음탕</div>
                          <div className="text-center text-sm">무말랭이</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-green-600">쇠고기무국</div>
                          <div className="text-center text-sm">낙지볶음</div>
                          <div className="text-center text-sm">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-green-600">계란국</div>
                          <div className="text-center text-sm">고등어구이</div>
                          <div className="text-center text-sm">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-green-600">북어국</div>
                          <div className="text-center text-sm">갈비찜</div>
                          <div className="text-center text-sm">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-green-600">들깨탕</div>
                          <div className="text-center text-sm">돈까스</div>
                          <div className="text-center text-sm">김치</div>
                        </td>
                        <td className="py-1 px-2 border border-blue-300 bg-white">
                          <div className="text-center font-semibold">쌀밥</div>
                          <div className="text-center text-sm text-green-600">순두부찌개</div>
                          <div className="text-center text-sm">불고기</div>
                          <div className="text-center text-sm">김치</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-500 text-center mt-2 mb-1">※ 식단은 식자재 수급 상황에 따라 변경될 수 있습니다. 알러지 정보는 식당에 문의해주세요.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                학습시설 특징
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>최대 300명을 수용할 수 있는 넓은 학습 공간</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>개인별 집중 학습이 가능한 독립 책상 및 파티션</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>눈의 피로를 줄이는 간접 조명 시스템</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>쾌적한 학습 환경을 위한 최신 냉난방 시스템</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>무선 인터넷 및 전자기기 충전 시설 완비</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* 식당 내부모습 */}
        <TabsContent value="dining">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dining-hall-1.jpg" alt="식당 내부모습" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">식당 내부모습</h3>
                  <p className="text-gray-600">청결하고 쾌적한 환경에서 영양가 있는 식사를 제공합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dining-hall-2.jpg" alt="식당 내부모습" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">식당 내부모습</h3>
                  <p className="text-gray-600">청결하고 쾌적한 환경에서 영양가 있는 식사를 제공합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dining-hall-3.jpg" alt="식당 내부모습" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">식당 내부모습</h3>
                  <p className="text-gray-600">
                    넓은 공간에서 여유롭게 식사를 즐길 수 있으며, 다양한 메뉴를 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dining-hall-4.jpg" alt="조리실" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">조리실</h3>
                  <p className="text-gray-600">위생적인 조리 환경에서 전문 영양사가 직접 식단을 구성하고 조리합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dining-hall-5.jpg" alt="식사 메뉴" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">식사 메뉴</h3>
                  <p className="text-gray-600">영양 균형을 고려한 다양한 메뉴를 제공하여 학생들의 건강을 지원합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dining-hall-6.jpg" alt="카페테리아" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-600 mb-2">카페테리아</h3>
                  <p className="text-gray-600">간식과 음료를 제공하는 카페테리아에서 휴식 시간을 즐길 수 있습니다.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Utensils className="h-5 w-5 text-green-600 mr-2" />
                식당 시설 특징
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>전문 영양사가 설계한 균형 잡힌 식단</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>신선한 재료로 매일 조리되는 건강한 식사</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>식이 제한이 있는 학생들을 위한 맞춤형 메뉴 제공</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>청결하고 위생적인 조리 및 식사 환경</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <span>간식 및 음료를 제공하는 별도의 휴게 공간</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* 숙소 내부모습 */}
        <TabsContent value="dormitory">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dormitory-1.jpg" alt="숙소 내부모습" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">숙소 내부모습</h3>
                  <p className="text-gray-600">편안한 휴식을 취할 수 있는 깨끗하고 아늑한 숙소 환경을 제공합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dormitory-2.jpg" alt="숙소 내부모습" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">숙소 내부모습</h3>
                  <p className="text-gray-600">개인 공간이 보장되는 침대와 수납공간으로 쾌적한 생활이 가능합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dormitory-3.jpg" alt="숙소 화장실" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">숙소 화장실</h3>
                  <p className="text-gray-600">
                    청결하게 관리되는 화장실과 샤워 시설로 위생적인 생활 환경을 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dormitory-4.jpg" alt="숙소 내부모습" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">4인실 숙소</h3>
                  <p className="text-gray-600">4인 1실 구조로, 각 학생에게 개인 공간이 제공됩니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dormitory-5.jpg" alt="숙소 화장실" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">숙소 화장실</h3>
                  <p className="text-gray-600">각 층마다 위치한 화장실은 항상 청결하게 관리되고 있습니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-64">
                  <Image src="/dormitory-6.jpg" alt="세탁실" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">세탁실</h3>
                  <p className="text-gray-600">
                    세탁 서비스를 제공하며, 필요시 직접 세탁할 수 있는 시설도 갖추고 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Bed className="h-5 w-5 text-purple-600 mr-2" />
                숙소 시설 특징
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>4인실 기준의 쾌적한 숙소 환경</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>개인별 침대, 책상, 옷장 제공</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>24시간 온수 공급 및 냉난방 시스템</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>청결하게 관리되는 공용 화장실 및 샤워실</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">•</span>
                  <span>안전한 생활을 위한 24시간 관리 시스템</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* 오시는 길 */}
        <TabsContent value="location">
          <div className="space-y-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="relative h-96">
                <Image src="/camp-map.png" alt="아는공부캠프 오시는 길" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-2" />
                  아는공부캠프 오시는 길
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">주소</h4>
                    <p className="text-gray-600">경기도 부천시 남양동 동로리 196</p>
                    <p className="text-gray-600">도로명 주소: 경기 부천시 남양동 고한로봉길 99-32</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">대중교통 이용 시</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 지하철: 7호선 부천시청역 2번 출구에서 마을버스 이용</li>
                      <li>• 버스: 66번, 12번 버스 이용 후 아는공부캠프 정류장 하차</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">자가용 이용 시</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 서울 방면: 서울외곽순환고속도로 → 부천IC → 남양동 방면</li>
                      <li>• 인천 방면: 제2경인고속도로 → 부천IC → 남양동 방면</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Home className="h-5 w-5 text-gray-600 mr-2" />
                주변 시설 안내
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <Coffee className="h-4 w-4 text-amber-600 mr-2" />
                    편의 시설
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 편의점 (도보 5분)</li>
                    <li>• 카페 (도보 10분)</li>
                    <li>• 문구점 (도보 5분)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <Utensils className="h-4 w-4 text-green-600 mr-2" />
                    식당 및 카페
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 한식당 (도보 10분)</li>
                    <li>• 분식점 (도보 7분)</li>
                    <li>• 패스트푸드 (도보 15분)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                    <Shower className="h-4 w-4 text-blue-600 mr-2" />
                    기타 시설
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 약국 (도보 10분)</li>
                    <li>• 병원 (도보 15분)</li>
                    <li>• 우체국 (도보 10분)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* 시설 이용 안내 */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">시설 이용 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">학습 시설</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• 이용 시간: 06:00 ~ 24:00</li>
              <li>• 자습실 24시간 개방</li>
              <li>• 개인 학습 공간 지정제 운영</li>
              <li>• 그룹 스터디룸 예약제 운영</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">식당 이용</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• 아침: 07:00 ~ 08:30</li>
              <li>• 점심: 12:00 ~ 13:30</li>
              <li>• 저녁: 18:00 ~ 19:30</li>
              <li>• 간식: 15:00 ~ 16:00, 21:00 ~ 22:00</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">숙소 이용</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• 입실: 14:00 이후</li>
              <li>• 퇴실: 11:00 이전</li>
              <li>• 소등 시간: 23:00</li>
              <li>• 세탁 서비스: 주 2회 제공</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">기타 시설</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• 체육관: 17:00 ~ 19:00 (주중)</li>
              <li>• 휴게실: 24시간 개방</li>
              <li>• 의무실: 09:00 ~ 18:00 (주중)</li>
              <li>• 상담실: 예약제 운영</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 시설 문의 */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">시설 문의</h2>
        <p className="text-gray-600 mb-4">
          캠프 시설에 대한 자세한 정보나 문의사항이 있으시면 아래 연락처로 문의해 주세요.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">전화 문의</h3>
            <p className="text-blue-600 font-bold">1555-1157</p>
            <p className="text-gray-500 text-sm">평일 09:00 ~ 18:00</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">이메일 문의</h3>
            <p className="text-blue-600 font-bold">facilities@summerstudycamp.kr</p>
            <p className="text-gray-500 text-sm">24시간 접수 가능</p>
          </div>
        </div>
      </div>
    </div>
  )
}
