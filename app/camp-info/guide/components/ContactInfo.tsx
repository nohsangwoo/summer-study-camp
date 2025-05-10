import { Users, Clock, Phone } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
      <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center">
        <Phone className="h-5 w-5 mr-2" />
        캠프 문의
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Users className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <h4 className="font-bold text-blue-800">상담 문의</h4>
            <p className="text-gray-700">010-1234-5678</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Clock className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <h4 className="font-bold text-blue-800">상담 시간</h4>
            <p className="text-gray-700">평일 09:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
