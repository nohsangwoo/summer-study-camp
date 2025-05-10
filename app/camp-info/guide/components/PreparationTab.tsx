import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Backpack, FileText, Shirt, ShowerHead, BookOpen, Pill, AlertTriangle } from "lucide-react"

export default function PreparationTab() {
  return (
    <Card>
      <CardHeader className="bg-slate-50">
        <CardTitle className="flex items-center gap-2">
          <Backpack className="h-5 w-5 text-blue-600" />
          캠프 생활 준비물
        </CardTitle>
        <CardDescription>캠프 참가를 위해 준비해야 할 물품 안내입니다.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* 지참서류 섹션 */}
        <div className="mb-8 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800 border-b pb-2">
            <FileText className="h-5 w-5 mr-2 text-blue-600" />
            지참서류
          </h3>
          <p className="pl-2">캠프 서약서 및 확인서</p>
        </div>

        {/* 필수 준비물 섹션 */}
        <div className="mb-8 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800 border-b pb-2">
            <Backpack className="h-5 w-5 mr-2 text-blue-600" />
            필수 준비물
          </h3>
          <ul className="pl-2 space-y-1.5">
            <li>책가방</li>
            <li>덮개있는물컵</li>
            <li>슬리퍼</li>
            <li>방석(장시간학습대비)</li>
            <li>장금장치 가능한 가방(분실물 예방)</li>
            <li>세탁망 2개(60x60)</li>
            <li>독서대(현장 구매 가능)</li>
            <li>두꺼운 수면 양말(3~4족 여분)</li>
            <li>결제 카드(매점 이용)</li>
            <li>귀마개 2개(낮잠잘 때 유용)</li>
          </ul>
        </div>

        {/* 침구류 의류 섹션 */}
        <div className="mb-8 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800 border-b pb-2">
            <Shirt className="h-5 w-5 mr-2 text-blue-600" />
            침구류 의류
          </h3>
          <ul className="pl-2 space-y-1.5 mb-4">
            <li>활동복 상,하의(편한복장)</li>
            <li>면츄리닝(잠옷대용)</li>
            <li>무릎덮개</li>
            <li>편한티셔츠 6장 이상</li>
            <li>운동화(고가품사절)</li>
            <li>양말</li>
            <li>속옷(최소 6벌 이상)</li>
            <li>긴팔옷</li>
            <li>후드 짚업</li>
            <li>가디건등</li>
          </ul>
          <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200 text-sm">
            <p className="font-semibold mb-2">* 세탁망을 준비하셔야 합니다.</p>
            <p className="mb-2">- 단체 주3회 세탁하므로 찢어지지 않도록 튼튼한 세탁망(남학생 월수금/여학생 화목토)</p>
            <p className="mb-2">* 후드 짚업, 청바지 등 두꺼운 외투는 세탁이 불가합니다.</p>
            <p>의류손상 및 분실시 책임지지 않으니 절대 고가품의 의류는 지참하지 마세요.</p>
          </div>
        </div>

        {/* 생활용품 섹션 */}
        <div className="mb-8 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800 border-b pb-2">
            <ShowerHead className="h-5 w-5 mr-2 text-blue-600" />
            생활용품
          </h3>
          <ul className="pl-2 space-y-1.5">
            <li>운동화</li>
            <li>수건(4~5장)</li>
            <li>칫솔</li>
            <li>치약</li>
            <li>샴푸</li>
            <li>스킨/로션</li>
            <li>헤어드라이어</li>
            <li>휴지</li>
            <li>손목시계(고가품은 분실위험)</li>
            <li>소정의 용돈</li>
          </ul>
        </div>

        {/* 학습관련 섹션 */}
        <div className="mb-8 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800 border-b pb-2">
            <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
            학습관련
          </h3>
          <ul className="pl-2 space-y-1.5 mb-4">
            <li>인강용 태블릿 PC, 노트북 지참 가능(게임, 음악파일 불가)</li>
            <li>독서대 (현장 구매 가능)</li>
            <li>두꺼운 연습장 3권 이상</li>
            <li>필기구</li>
            <li>본인 학습을 위한 교재(사전류, 문제집 및 참고서)</li>
          </ul>
          <div className="bg-blue-50 p-3 rounded-md border border-blue-200 text-sm">
            <p className="mb-2">학습 집중을 위해 학습외에 불필요한 메신저, SNS 어플 초기화후 들어오는 것 권장합니다.</p>
            <p>학습장에서는 신발을 벗고 입실합니다.(겨울철에는 두꺼운 수면양말을 준비해주세요)</p>
          </div>
        </div>

        {/* 개인 상비약 섹션 */}
        <div className="mb-8 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800 border-b pb-2">
            <Pill className="h-5 w-5 mr-2 text-blue-600" />
            개인 상비약
          </h3>
          <p className="pl-2">
            전문의약품은 병원에서 미리 처방 받아 올 수 있도록 하며, 개인적으로는 복용하는 약은 이름과 복용방법을 기록해
            지참해주세요. 기본 상비약(해열제, 두통약 등)은 제공되며, 비타민C나 감기 몸살약은 미리 준비할 것을
            권장합니다.
          </p>
        </div>

        {/* 금지물품 섹션 */}
        <div className="bg-red-50 p-5 rounded-lg border border-red-100 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center text-red-800 border-b border-red-200 pb-2">
            <AlertTriangle className="h-5 w-5 mr-2" />
            금지물품
          </h3>
          <ol className="pl-5 list-decimal space-y-2">
            <li>
              <strong>전자제품:</strong> 핸드폰 및 학습에 방해되는 전자기기, 보조배터리, wi-fi에그, 핸드폰 공기계
            </li>
            <li>
              <strong>위험물:</strong> 전열기구, 커터칼, 라이터등
            </li>
            <li>
              <strong>불건전 행위품:</strong> 담배, 주류, 도박물품, 잡지, 소설책, 인형등
            </li>
            <li>
              <strong>사치품:</strong> 고액 현찰소지, 학습지와 관련없는 일체의 용품과 고가의 신발 및 의류등
            </li>
            <li>
              <strong>색조화장팜:</strong> 젤, 왁스, 무스, 스프레이등
            </li>
            <li>
              <strong>기타:</strong> 라면, 컵라면
            </li>
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
