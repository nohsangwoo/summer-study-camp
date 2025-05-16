import Image from 'next/image'
import { MapPin, Home, Utensils, ShowerHead, Coffee } from 'lucide-react'

export default function LocationInfo() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
        <div className="relative h-96">
          <Image
            src="/camp-map.png"
            alt="전일공캠프 오시는 길"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <MapPin className="h-5 w-5 text-red-600 mr-2" />
            전일공캠프 오시는 길
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">주소</h4>
              <p className="text-gray-600">경기도 부천시 남양동 동로리 196</p>
              <p className="text-gray-600">
                도로명 주소: 경기 부천시 남양동 고한로봉길 99-32
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">
                대중교통 이용 시
              </h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  • 지하철: 7호선 부천시청역 2번 출구에서 마을버스 이용
                </li>
                <li>
                  • 버스: 66번, 12번 버스 이용 후 전일공캠프 정류장 하차
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-1">
                자가용 이용 시
              </h4>
              <ul className="space-y-1 text-gray-600">
                <li>
                  • 서울 방면: 서울외곽순환고속도로 → 부천IC → 남양동 방면
                </li>
                <li>
                  • 인천 방면: 제2경인고속도로 → 부천IC → 남양동 방면
                </li>
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
              <ShowerHead className="h-4 w-4 text-blue-600 mr-2" />
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
  )
} 