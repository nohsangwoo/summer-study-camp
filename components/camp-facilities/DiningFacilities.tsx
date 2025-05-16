import Image from 'next/image'
import { Utensils } from 'lucide-react'

export default function DiningFacilities() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dining-hall-1.jpg"
              alt="식당 내부모습"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              식당 내부모습
            </h3>
            <p className="text-gray-600">
              청결하고 쾌적한 환경에서 영양가 있는 식사를 제공합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dining-hall-2.jpg"
              alt="식당 내부모습"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              식당 내부모습
            </h3>
            <p className="text-gray-600">
              청결하고 쾌적한 환경에서 영양가 있는 식사를 제공합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dining-hall-3.jpg"
              alt="식당 내부모습"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              식당 내부모습
            </h3>
            <p className="text-gray-600">
              넓은 공간에서 여유롭게 식사를 즐길 수 있으며, 다양한 메뉴를
              제공합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dining-hall-4.jpg"
              alt="조리실"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              조리실
            </h3>
            <p className="text-gray-600">
              위생적인 조리 환경에서 전문 영양사가 직접 식단을 구성하고
              조리합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dining-hall-5.jpg"
              alt="식사 메뉴"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              식사 메뉴
            </h3>
            <p className="text-gray-600">
              영양 균형을 고려한 다양한 메뉴를 제공하여 학생들의 건강을
              지원합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dining-hall-6.jpg"
              alt="카페테리아"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              카페테리아
            </h3>
            <p className="text-gray-600">
              간식과 음료를 제공하는 카페테리아에서 휴식 시간을 즐길 수
              있습니다.
            </p>
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
  )
} 