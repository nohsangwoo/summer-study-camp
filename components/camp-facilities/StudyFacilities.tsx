import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import MenuTable from './MenuTable'

export default function StudyFacilities() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/study-hall-1.jpg"
              alt="공용체 학습장"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              공용체 학습장
            </h3>
            <p className="text-gray-600">
              넓은 공간에 개인별 학습 공간이 마련되어 있어 집중력 있는
              학습이 가능합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/study-hall-2.jpg"
              alt="공용체 학습장"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              공용체 학습장
            </h3>
            <p className="text-gray-600">
              밝은 조명과 쾌적한 환경에서 학생들이 효율적으로 학습할 수
              있도록 설계되었습니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/study-hall-3.jpg"
              alt="고급 학습장"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              고급 학습장
            </h3>
            <p className="text-gray-600">
              현대적인 시설과 편안한 의자로 장시간 학습에도 피로감을
              최소화합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/study-hall-4.jpg"
              alt="1:1 학습강당"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              1:1 학습강당
            </h3>
            <p className="text-gray-600">
              개인 맞춤형 학습을 위한 공간으로, 멘토와의 1:1 학습에
              최적화되어 있습니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/study-hall-5.jpg"
              alt="그룹 스터디룸"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              그룹 스터디룸
            </h3>
            <p className="text-gray-600">
              소규모 그룹 학습을 위한 공간으로, 토론과 협업 학습에
              적합합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
          <div className="relative h-64">
            <Image
              src="/study-hall-6.jpg"
              alt="멀티미디어 학습실"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              멀티미디어 학습실
            </h3>
            <p className="text-gray-600">
              최신 멀티미디어 장비를 갖춘 학습실로, 다양한 형태의 학습
              자료를 활용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      <MenuTable />

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
  )
} 