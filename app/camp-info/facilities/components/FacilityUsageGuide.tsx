export default function FacilityUsageGuide() {
  return (
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
  )
} 