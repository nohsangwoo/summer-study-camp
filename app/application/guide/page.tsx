import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, ArrowRight, CheckCircle, Info } from "lucide-react"

export default function ApplicationGuidePage() {
  return (
    <div className="container py-10 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">2025 전일공 썸머캠프 신청 안내</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">국내 최고 & 국내 최다 규모의 독보적인 자기주도학습 프로그램</p>
      </div>

      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* 좌측 라벨 */}
              <div className="bg-blue-50 p-4 flex items-center justify-center">
                <span className="font-semibold text-blue-700">프로그램</span>
              </div>

              {/* 우측 내용 */}
              <div className="md:col-span-4 space-y-4">
                <div>
                  <div className="flex items-start mb-2">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="font-semibold">
                      전국 명문고 학생들이 참여하는 자기 주도형 학습법 4주 과정을 운영합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-200 pl-4 ml-7 space-y-3">
                    <div>
                      <p className="font-semibold">【썸머캠프 A코스(4주)】</p>
                      <p>2025년 07월 27일(토요일) ~ 2025년 08월 16일(토요일): 4주 과정</p>
                    </div>

                    <div>
                      <p className="font-semibold">【썸머캠프 B코스(3주)】</p>
                      <p>2025년 07월 27일(토요일) ~ 2025년 08월 09일(토요일): 3주 과정</p>
                    </div>

                    <div className="flex items-center mt-2">
                      <Clock className="h-5 w-5 text-blue-500 mr-2" />
                      <p>수업 시간: 10:00-14:30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* 좌측 라벨 */}
              <div className="bg-blue-50 p-4 flex items-center justify-center">
                <span className="font-semibold text-blue-700">접수기간</span>
              </div>

              {/* 우측 내용 */}
              <div className="md:col-span-4">
                <p>온라인 접수 - 선착순 30명</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* 좌측 라벨 */}
              <div className="bg-blue-50 p-4 flex items-center justify-center">
                <span className="font-semibold text-blue-700">프로그램비</span>
              </div>

              {/* 우측 내용 */}
              <div className="md:col-span-4 space-y-4">
                <div>
                  <p className="font-semibold">【썸머캠프 A코스(4주)】</p>
                  <p>
                    25.07.27(토) ~ 25.08.16(토) 4주 과정: 정가가 <span className="line-through">3,800,000원</span> ▶{" "}
                    <span className="text-red-500 font-bold">할인가 3,500,000원</span> (5월 00일까지 사전 등록 할인)
                  </p>
                </div>

                <div>
                  <p className="font-semibold">【썸머캠프 B코스(3주)】</p>
                  <p>
                    25.07.27(토) ~ 25.08.09(토) 3주 과정: 정가가 <span className="line-through">3,000,000원</span> ▶{" "}
                    <span className="text-red-500 font-bold">할인가 2,780,000원</span> (5월 00일까지 사전 등록 할인)
                  </p>
                </div>

                <div className="flex items-start mt-2">
                  <Info className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    등급은 입소 후 평가를 통해 반이 나뉘게 되며 학생 본인의 학습 역량에 따라 맞춤형 반을 구성합니다.
                    학생의 수준과 학습 역량에 맞는 맞춤형 교육을 제공하기 위해 노력하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* 좌측 라벨 */}
              <div className="bg-blue-50 p-4 flex items-center justify-center">
                <span className="font-semibold text-blue-700">1:1 계약 체결</span>
              </div>

              {/* 우측 내용 */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="font-semibold">1개월 (1기/2주과정 포함, 1회만 결제할 시) ▶ 220,000원</p>
                </div>

                <div className="ml-7 space-y-3">
                  <p>개인 상담시, 각 과목별(1:4 지도) 구체적 학습 지도내용을 설명합니다.</p>
                  <p>(예, 수학 2개월, 영어 1개월 + 수학 1개월, 영어 6개월과 수업료 결제 시간 스케줄 조율)</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* 좌측 라벨 */}
              <div className="bg-blue-50 p-4 flex items-center justify-center">
                <span className="font-semibold text-blue-700">선발방법</span>
              </div>

              {/* 우측 내용 */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>
                    선착순 선발 후 <span className="text-red-500 font-bold">예약금 100만원</span> 납부
                  </p>
                </div>

                <div className="ml-7 space-y-3">
                  <p>예약금 납부 시 우선적으로 학습자 대상으로 입소확정됩니다.</p>
                  <p>
                    *모든 학습은 철저한 관리 하에 이루어지며 학생 개개인의 학습 역량에 맞춰 맞춤형 교육을 제공합니다.
                  </p>
                </div>

                <div className="flex items-start mt-2">
                  <Info className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    * 예약금은 (1개월분) 44만 2100원/64만원 중 우선납부 하는 금액으로 총 학습비에 포함됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-10 overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* 좌측 라벨 */}
              <div className="bg-blue-50 p-4 flex items-center justify-center">
                <span className="font-semibold text-blue-700">접수방법 이메일</span>
              </div>

              {/* 우측 내용 */}
              <div className="md:col-span-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>아래의 내용 및 첨부로 신청 이메일 보내시면 됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
        <p className="text-sm text-gray-600 mb-4">
          * 신청서는 첨부된 양식 또는, 학생명과 학부모 연락처만 보내셔도 됩니다. (예약금 납부후, 오리엔테이션 ZOOM 진행)
        </p>
      </div>

      <div className="flex justify-center">
        <Link href="/application/form">
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
            캠프 신청하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
