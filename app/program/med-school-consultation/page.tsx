import Link from "next/link"
import { Check, ArrowRight, Clock, Users, MapPin, Video, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MedSchoolConsultationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 의대합격 심층상담 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-blue-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">의대합격 심층상담</h1>
        </div>
      </div>

      <div className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          {/* 메인 콘텐츠 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">의대합격 심층상담</h2>

              {/* 상담 정보 */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="font-semibold">대상:</span> 학생과 학부모님
                  </p>
                </div>
                <div className="flex items-start">
                  <User className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="font-semibold">선생님:</span> 서울대 의대 출신 원장님, 메디브릿지 임시연구소장님
                    2인
                  </p>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="font-semibold">시간:</span> 1회 1시간 진행
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lg">
                    <span className="font-semibold">상담 방식:</span> 대면 또는 줌 모두 가능
                  </p>
                </div>
              </div>

              {/* 주요 안내 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                <p className="text-red-600 font-medium">
                  의치한약수 합격의 가능성이 있는 고객분들만 대상으로 심층상담을 진행하고 있습니다.
                </p>
              </div>

              <p className="text-gray-600 mb-8 text-center italic">
                고객의 시간을 아껴드리기 위한 조치이니 이 점은 양해부탁드립니다.
              </p>

              {/* 상담 내용 설명 */}
              <div className="space-y-4 text-gray-700 mb-10">
                <p className="font-medium text-lg text-center">
                  저희 메디브릿지를 방문하신 고객분들께 건하는 컨설팅입니다.
                </p>
                <p>
                  메디브릿지 원장님과 컨설턴트가 함께 참석하여 교과 성적, 생활기록부 내용(자/동/봉/진/세특/행종)을
                  분석하고 이를 바탕으로 입시전략을 수립하는 컨설팅입니다.
                </p>
                <p>메디브릿지는 300개 이상의 의대 생기부 정보를 보유하고 있습니다.</p>
                <p>
                  메디브릿지가 보유한 압도적인 합격자 스펙 및 생활기록부 데이터를 토대로 서울대 의대 출신 원장님과
                  임시연구소장님이 학생의 강약점을 분석합니다.
                </p>
                <p>
                  서울대 의대 출신 원장님은 생기부 진단 및 스토리라인에 전중하시며 임시연구소장님은 내신, 모의고사 점수
                  등을 종합적으로 분석합니다. 두 분의 다각적 진단을 통해 학생에게 맞는 최적의 조언을 해드립니다.
                </p>
              </div>

              {/* 주요 상담 내용 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800">주요 상담 내용</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>지난 고등학교 분석, 생활기록부 기재 방법에 대한 체크</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>의대 합격 관점에서 현 생활기록부 분석</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>전반적인 스토리 조언 및 생활기록부 각 항목 별 전략 수립</span>
                  </li>
                </ul>
              </div>

              {/* 강조 메시지 */}
              <div className="bg-red-50 p-6 rounded-lg text-center mb-8">
                <p className="text-red-600 font-bold text-xl">
                  "의대합격 심층상담의 로드맵대로만 한다면
                  <br />
                  내신과 수능 공부에만 300% 더 집중하실 수 있습니다."
                </p>
              </div>

              {/* 참고 사항 */}
              <div className="text-sm text-gray-500 mb-8">
                <p>
                  고3 자녀분 대상 6개 대학 원서 추천은 해당 컨설팅에는 포함되지 않습니다. (별도의 수시 원서접수 컨설팅
                  진행 필요)
                </p>
              </div>

              {/* 상담 신청 버튼 */}
              <div className="flex justify-center">
                <Link href="/admission">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                    상담 신청하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* 추가 정보 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-white p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold">대면 상담</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    서울 강남구 테헤란로 123에 위치한 메디브릿지 본사에서 진행되는 1:1 맞춤형 상담입니다.
                  </p>
                  <p className="text-sm text-gray-500">* 주차 가능, 사전 예약 필수</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-white p-6">
                  <div className="flex items-center mb-4">
                    <Video className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold">비대면 상담 (Zoom)</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    시간과 장소에 구애받지 않고 편안하게 참여할 수 있는 화상 상담입니다.
                  </p>
                  <p className="text-sm text-gray-500">* 상담 전 Zoom 링크 발송, 안정적인 인터넷 환경 필요</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 상담 후기 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">상담 후기</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "막연하게 의대를 목표로 했었는데, 심층상담을 통해 구체적인 방향과 전략을 세울 수 있었습니다. 특히
                  생기부 관리에 대한 조언이 정말 도움이 되었습니다."
                </p>
                <p className="text-right text-sm font-medium">- 김○○ 학부모님</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "실제 의대에 합격한 선배들의 사례를 바탕으로 한 조언을 들을 수 있어서 좋았습니다. 제가 부족한 부분과
                  앞으로 집중해야 할 부분을 명확하게 알게 되었습니다."
                </p>
                <p className="text-right text-sm font-medium">- 이○○ 학생</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
