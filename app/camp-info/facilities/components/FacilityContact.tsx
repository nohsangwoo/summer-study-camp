export default function FacilityContact() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">시설 문의</h2>
      <p className="text-gray-600 mb-4">
        캠프 시설에 대한 자세한 정보나 문의사항이 있으시면 아래 연락처로
        문의해 주세요.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">전화 문의</h3>
          <p className="text-blue-600 font-bold">1555-1157</p>
          <p className="text-gray-500 text-sm">평일 09:00 ~ 18:00</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">이메일 문의</h3>
          <p className="text-blue-600 font-bold">
            facilities@summerstudycamp.kr
          </p>
          <p className="text-gray-500 text-sm">24시간 접수 가능</p>
        </div>
      </div>
    </div>
  )
} 