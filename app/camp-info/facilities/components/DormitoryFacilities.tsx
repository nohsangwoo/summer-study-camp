import Image from 'next/image'
import { Bed } from 'lucide-react'

export default function DormitoryFacilities() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dormitory-1.jpg"
              alt="숙소 내부모습"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              숙소 내부모습
            </h3>
            <p className="text-gray-600">
              편안한 휴식을 취할 수 있는 깨끗하고 아늑한 숙소 환경을
              제공합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dormitory-2.jpg"
              alt="숙소 내부모습"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              숙소 내부모습
            </h3>
            <p className="text-gray-600">
              개인 공간이 보장되는 침대와 수납공간으로 쾌적한 생활이
              가능합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dormitory-3.jpg"
              alt="숙소 화장실"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              숙소 화장실
            </h3>
            <p className="text-gray-600">
              청결하게 관리되는 화장실과 샤워 시설로 위생적인 생활 환경을
              제공합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dormitory-4.jpg"
              alt="숙소 내부모습"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              4인실 숙소
            </h3>
            <p className="text-gray-600">
              4인 1실 구조로, 각 학생에게 개인 공간이 제공됩니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dormitory-5.jpg"
              alt="숙소 화장실"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              숙소 화장실
            </h3>
            <p className="text-gray-600">
              각 층마다 위치한 화장실은 항상 청결하게 관리되고 있습니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/dormitory-6.jpg"
              alt="세탁실"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              세탁실
            </h3>
            <p className="text-gray-600">
              세탁 서비스를 제공하며, 필요시 직접 세탁할 수 있는 시설도
              갖추고 있습니다.
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
  )
} 