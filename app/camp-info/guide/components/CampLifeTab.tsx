import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { School, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function CampLifeTab() {
  return (
    <Card>
      <CardHeader className="bg-slate-50">
        <CardTitle className="flex items-center gap-2">
          <School className="h-5 w-5 text-blue-600" />
          캠프 기간 학생 생활
        </CardTitle>
        <CardDescription>캠프 기간 동안의 학생 생활 규칙 및 안내사항입니다.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <Image
            src="/camp-student-life.png"
            alt="캠프 기간 학생 생활 안내"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                01
              </div>
              <h3 className="text-lg font-bold text-blue-800">캠프 적응하기</h3>
            </div>
            <p className="text-sm mb-3">
              14시간씩의 야간공부 프로그램에는 완벽보다는 꾸준함을 중요로 하여 카페를 운영합니다.
            </p>
            <p className="text-sm mb-3">
              캠프기간 중 공지사항과 학생들의 생활을 담은 사진과 동영상 등을 업로드 합니다.
            </p>
            <p className="text-sm">
              캠프시작 후 2일 택배에는 1일 1회 학생들의 공부 상태를 각조 담당 선생님이 공유 업로드합니다. 기타 모든
              궁금한 사항은 카톡 및 문자를 통하여 문의바랍니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                02
              </div>
              <h3 className="text-lg font-bold text-blue-800">비상연락</h3>
            </div>
            <p className="text-sm mb-3">
              급하게 자녀분과 연락하셔야 할 경우 상담실로 연락주시면, 학생들의 점심과 저녁 식사시간을 이용하여 전화
              통화를 연결해드립니다.
            </p>
            <p className="text-sm font-bold text-red-600 mb-3">
              ※ 응급연락 (비상연락망) : T. 010-5939-1400 / 010-2177-1400
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                03
              </div>
              <h3 className="text-lg font-bold text-blue-800">증상 발생 시</h3>
            </div>
            <p className="text-sm mb-3">
              캠프진행에는 질상 인근의 병원과의 협력관계를 유지하여 학생들의 건강과 응급상황에 대비합니다.
            </p>
            <p className="text-sm mb-3">
              가벼운 증상의 경우에는 문자상태에서 치료를 받으며, 기타 질환이나 긴급 상황 발생 시에는 고객 병원으로
              후송하여 치료합니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                04
              </div>
              <h3 className="text-lg font-bold text-blue-800">동영상 및 사진</h3>
            </div>
            <p className="text-sm mb-3">
              카페에서 학생들의 학습, 생활 장면을 업로드하고 사진을 통해 보실 수 있습니다. 활발한 댓글남겨주시면 각 조
              담당선생님께서 학생들의 모습을 활영하여 캠프생활을 공유하실 수 있도록 매일 업로드 하니 많은 관심
              부탁드립니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                05
              </div>
              <h3 className="text-lg font-bold text-blue-800">택배 이용 안내</h3>
            </div>
            <p className="text-sm mb-3">
              매일 저녁 7시 이전에 도착한 택배는 당일 작성하다고 수소로 들어가는 시간에 학생들에게 전달합니다.
            </p>
            <p className="text-sm">
              학부모님께서는 택배 이용 시 학업과 관련 없는 물품은 최소한 보내주십시오. 학생에게 꼭 필요한 물품은
              보내주시기 바랍니다.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm bg-gray-50">
            <h3 className="text-lg font-bold mb-4 text-center">당부의 말씀 드립니다.</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>택배 발송 시 학생의 이름과 학년을 꼭 기재해 주시기 바랍니다.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>많은 물품 발송 시 타 학생과의 위화감 조성이 있을 수 있습니다.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>캠프장에 매점이 있으니 학생들이 간식적으로 이용 가능합니다.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>상세주소는 아는공부법으로 학생 학년 이름 꼭 적어 주세요.</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="text-sm font-medium">
                택배 발송주소: <span className="text-blue-700">경기 광주시 남한산 고라산길 99-32</span> /{" "}
                <span className="text-blue-700">상세주소: 아는공부법(학생)조 학년 이름</span>
              </p>
              <p className="text-sm font-medium mt-1">
                택배 발송시:{" "}
                <span className="text-blue-700">
                  받는 사람은 꼭 [아는공부법 OO조 중1 홍길동] 으로 기재 부탁드립니다.
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
