import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { CreditCard, FileText, CheckCircle2, ArrowRight, ExternalLink, Send, DollarSign, CalendarClock } from "lucide-react"
import Link from "next/link"


export default function RegistrationTab() {

  const covidInfo = [
    "입소 시 음성 확인서를 제출하지 않으셔도 됩니다.",
    "캠프기간 마스크 착용은 필수가 아닌 권고사항입니다.",
    "등교기 전날 증상 발현 시, 마스크를 착용합니다. (KF94 권고)",
    "캠프 중 코로나 양성이 판명 될 경우, 격리 및 퇴소처리 되지 않습니다.",
    "상비약품은 응급함을 준비해 구비되어 있습니다."
  ]

  // 모바일용 카드 형태 UI
  const MobileRegistrationView = () => (
    <div className="space-y-6">
      {/* 온라인 접수 신청 버튼 */}
      <div className="text-center mb-2">
        <Link href="/application/form">
          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 text-lg rounded-lg shadow-md transition-all" size="lg">
            <Send className="mr-2 h-5 w-5" />
            온라인 접수 신청하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* 등록방법 */}
      <Card className="border-l-4 border-l-blue-500 overflow-hidden">
        <CardHeader className="pb-2 pt-4 px-4 bg-blue-50">
          <CardTitle className="text-lg text-blue-700 flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
            등록방법
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-4 border-b border-gray-100">
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <CalendarClock className="h-4 w-4 mr-2 text-blue-500" />
              접수 절차
            </h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="text-gray-700">온라인 원서 접수 ("캠프 신청하기" 버튼 클릭)</li>
              <li className="text-gray-700">예약금 납부 (₩1,000,000)</li>
              <li className="text-gray-700">접수 완료 확인 연락</li>
            </ol>


          </div>

          {/* 계좌 정보 - 눈에 띄게 표시 */}
          <div className="bg-gray-50 p-4 border-b border-gray-100">
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-blue-500" />
              입금 계좌 정보
            </h4>
            <div className="bg-white rounded-lg border border-blue-200 p-4 shadow-sm">
              <div className="font-medium text-gray-700 mb-1">예약금: ₩1,000,000</div>
              <div className="bg-blue-50 p-3 rounded-md">
                <div className="font-bold text-blue-800">하나은행</div>
                <div className="text-lg font-bold text-blue-900 my-1">448-910057-84804</div>
                <div className="text-sm text-blue-700">예금주: 아이는공부하듯</div>
              </div>
              <div className="mt-3 text-sm text-gray-600 pl-1">
                <p className="flex items-start">
                  <span className="text-red-500 mr-1">※</span>
                  <span>입금자는 학생이름으로 해주세요. (예: 중3 김아무)</span>
                </p>
                <p className="flex items-start">
                  <span className="text-red-500 mr-1">※</span>
                  <span>잔금 납부일: 캠프 신청 홈페이지 참조</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 일대일 상담 안내 */}
      <Card className="border-l-4 border-l-purple-500 overflow-hidden">
        <CardHeader className="pb-2 pt-4 px-4 bg-purple-50">
          <CardTitle className="text-lg text-purple-700 flex items-center">
            <CalendarClock className="h-5 w-5 mr-2 text-purple-600" />
            일대일 상담 안내
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="bg-purple-50/80 p-3 rounded-md border border-purple-100 flex items-center mb-3">
              <div className="text-lg font-bold text-purple-700 mr-3">₩220,000</div>
              <div className="text-gray-700">1구좌 / 6시간</div>
            </div>
            
            <ol className="list-decimal pl-5 space-y-2">
              <li className="text-gray-700">캠프 시작 2주전까지 신청 가능</li>
              <li className="text-gray-700">학생이 원하는 부분으로 진행 가능 (국어, 수학, 영어)</li>
              <li className="text-gray-700">6구좌 이상 신청 시 전화 상담 먼저 진행</li>
              <li className="text-gray-700 font-medium">캠프 시작 후에는 추가 신청 불가</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* 제출 서류 */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader className="pb-2 pt-4 px-4 bg-green-50">
          <CardTitle className="text-lg flex items-center">
            <FileText className="h-5 w-5 mr-2 text-green-600" />
            제출 서류
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="mb-4 text-gray-700">
            코로나19 감염병 4급으로 하향 조정됨에 따라 캠프 진행 시 코로나 관련 자료를 안내드립니다.
          </p>
          <ul className="space-y-3">
            {covidInfo.map((info, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{info}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-bold mb-2">캠프서약서 및 입소 확인서</h4>
            <p>- 자 후 별도 안내 드리는 캠프 안내문을 통해 작성하실 수 있습니다.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <Card>
      <CardHeader className="bg-slate-50">
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          등록 방법
        </CardTitle>
        <CardDescription>캠프 등록 및 결제 방법에 대한 안내입니다.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* 모바일 화면용 카드 레이아웃 */}
        <div className="block md:hidden">
          <MobileRegistrationView />
        </div>

        {/* 데스크톱 화면용 카드 레이아웃 */}
        <div className="hidden md:block space-y-8">
          {/* 캠프 신청 버튼 */}
          <div className="text-center py-4">
            <Link href="/application/form">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-md transition-all" size="lg">
                <Send className="mr-2 h-5 w-5" />
                캠프 신청하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* 등록 방법 섹션 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="bg-blue-600 p-4 text-white">
              <h2 className="text-xl font-bold flex items-center">
                <CreditCard className="h-6 w-6 mr-3" />
                등록 방법
              </h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 등록 절차 */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center text-blue-700">
                    <CalendarClock className="h-5 w-5 mr-2" />
                    등록 절차
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-700 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">온라인 원서 접수</h4>
                        <p className="text-gray-600">"캠프 신청하기" 버튼을 클릭하여 온라인 접수를 진행합니다.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-700 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">예약금 납부</h4>
                        <p className="text-gray-600">지정된 계좌로 예약금을 입금합니다.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-blue-700 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">접수 완료 확인</h4>
                        <p className="text-gray-600">접수 완료 후 확인 연락을 드립니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 계좌 정보 */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold mb-4 flex items-center text-blue-700">
                    <DollarSign className="h-5 w-5 mr-2" />
                    입금 계좌 정보
                  </h3>
                  
                  <div className="bg-white p-5 rounded-lg border border-blue-200 shadow-sm">
                    <div className="mb-3 text-gray-700">
                      <span className="font-medium">예약금:</span> <span className="text-lg font-bold text-blue-800">₩1,000,000</span>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-md mb-4">
                      <div className="font-bold text-blue-800">하나은행</div>
                      <div className="text-xl font-bold text-blue-900 my-2">448-910057-84804</div>
                      <div className="text-sm text-blue-700">예금주: 아이는공부하듯</div>
                    </div>
                    
                    <div className="text-sm text-gray-600 space-y-2">
                      <p className="flex items-start">
                        <span className="text-red-500 mr-1 flex-shrink-0">※</span>
                        <span>입금자는 학생이름으로 해주세요. (예: 중3 김아무)</span>
                      </p>
                      <p className="flex items-start">
                        <span className="text-red-500 mr-1 flex-shrink-0">※</span>
                        <span>잔금 납부일: 캠프 신청 홈페이지 참조</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 일대일 상담 섹션 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="bg-purple-600 p-4 text-white">
              <h2 className="text-xl font-bold flex items-center">
                <CalendarClock className="h-6 w-6 mr-3" />
                일대일 상담 안내
              </h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">캠프 시작 <span className="font-medium">2주전까지</span> 신청 가능합니다.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">학생이 원하는 부분으로 진행 가능하며, 과목은 <span className="font-medium">국어, 수학, 영어</span>입니다.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">6구좌 이상 신청 시 전화 상담을 먼저 진행해주세요.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-3 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">캠프 시작 후에는 추가 신청이 불가합니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-bold mb-3 text-purple-800">가격 안내</h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                    <div className="text-2xl font-bold text-purple-700 mb-1">₩220,000</div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <span className="font-medium mr-2">한 구좌 당</span> 
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">6시간</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">* 구좌는 학생의 필요에 따라 추가 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              제출 서류
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="mb-4">
                코로나19 감염병 4급으로 하향 조정됨에 따라 캠프 진행 시 코로나 관련 자료를 안내드립니다.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>입소 시 음성 확인서를 제출하지 않으셔도 됩니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>캠프기간 마스크 착용은 필수가 아닌 권고사항입니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>등교기 전날 증상 발현 시, 마스크를 착용합니다. (KF94 권고)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>캠프 중 코로나 양성이 판명 될 경우, 격리 및 퇴소처리 되지 않습니다.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>상비약품은 응급함을 준비해 구비되어 있습니다.</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold mb-2">캠프서약서 및 입소 확인서</h4>
                <p>- 자 후 별도 안내 드리는 캠프 안내문을 통해 작성하실 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
