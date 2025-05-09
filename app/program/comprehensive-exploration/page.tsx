import { Book, Clock, Users, Calendar, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ComprehensiveExplorationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 종합전형대비주제탐구 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-amber-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">종합전형대비주제탐구</h1>
        </div>
      </div>

      <div className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          {/* 메인 콘텐츠 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">종합전형대비주제탐구</h2>

              {/* 기본 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-amber-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">대상</h3>
                  <p className="text-gray-700">중학생</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Calendar className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">회차</h3>
                  <p className="text-gray-700">월 1회 12개월 과정</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">수업 시간</h3>
                  <p className="text-gray-700">1.5시간</p>
                </div>
              </div>

              {/* 프로그램 소개 */}
              <div className="space-y-6 mb-10">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">
                    전국대학생토론대회 우승자 출신의 독서토론 전문가가 AP 형식으로 수업을 구성하였습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    토론대회는 AP와 BP 두 가지 형태가 있습니다. AP는 Asian Parliamentary Debate를 의미하고 BP는 British
                    Parliamentary Debate를 의미합니다. 모든 학생이 찬성과 반대 두 팀으로 나뉘게 되며, 발언 순서가 정해져
                    각 팀이 번갈아가면서 발표를 하게 됩니다. AP는 아시아에서 가장 널리 쓰이는 방식으로 YTN 토론대회,
                    HAFS 토론대회, KYDC 한국청소년 토론대회 등도 이 방식을 쓰고 있습니다.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">
                    흥미와 난이도를 최우선으로 고려하면서, 고등학교 생기부와 의대면접에서도 다루는 주제들을 많이
                    포함하였습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    중학생 의학 독서토론 수업은 학생들에게 흥미를 계속 유지시켜주는 것이 가장 중요합니다. 따라서
                    중학생이 이해하기에도 어렵지 않은 주제로 토론을 구성하였습니다. 이 때 했던 토론들이 미래에 고등학교
                    생기부와 의대면접에도 도움이 되면 좋으니 딜레마 문제, 동물실험, 전염병 등을 다루고 있습니다.
                  </p>
                </div>
              </div>

              {/* 수업 구성 표 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Book className="h-5 w-5 text-amber-600 mr-2" />
                  수업 구성
                </h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-amber-100">
                        <TableHead className="w-[150px] font-bold">시간</TableHead>
                        <TableHead className="font-bold">수업 구성</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">~ 15분</TableCell>
                        <TableCell>책 내용 정리 및 질의응답</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">15 ~ 30분</TableCell>
                        <TableCell>
                          AP 형식 토론 주제 선반으로 팀 나누시 발표 순서 정하기. 15분간 각자 5분 발표할 내용 준비하기
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">30 ~ 60분</TableCell>
                        <TableCell>순서대로 5분간 발표하기</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">60 ~ 70분</TableCell>
                        <TableCell>독서토론 승자 발표 및 리뷰</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">70 ~ 90분</TableCell>
                        <TableCell>오늘 책과 토론 내용 노트로 정리하고 감사 받기</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* 기대 효과 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Award className="h-5 w-5 text-amber-600 mr-2" />
                  기대 효과
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>논리적 사고력과 비판적 사고력 향상</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>의학 관련 주제에 대한 깊이 있는 이해</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>고등학교 생활기록부 작성을 위한 기초 역량 강화</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>의대 면접 대비 윤리적 딜레마 해결 능력 향상</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>발표 능력 및 자신감 향상</span>
                  </li>
                </ul>
              </div>

              {/* 추천 도서 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Book className="h-5 w-5 text-amber-600 mr-2" />
                  추천 도서
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>「의사는 어떻게 생각하는가」 - 제롬 그루프먼</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>「의학의 역사」 - 재컬린 더핀</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>「팬데믹의 시대」 - 마크 헤니건</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>「의료윤리」 - 토니 호프</span>
                  </li>
                </ul>
              </div>

              {/* 신청 버튼 */}
              <div className="flex justify-center">
                <Link href="/application/form">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6 h-auto">
                    프로그램 신청하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* 수강생 후기 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">수강생 후기</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "처음에는 토론이 어려울 것 같아 걱정했는데, 선생님께서 쉽게 설명해주셔서 재미있게 참여할 수 있었어요.
                  의학 관련 주제를 다루면서 진로에 대해 더 깊이 생각해볼 수 있는 기회가 되었습니다."
                </p>
                <p className="text-right text-sm font-medium">- 김○○ 학생 (중학교 2학년)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "아이가 평소 말하기를 어려워했는데, 이 수업을 통해 자신의 생각을 논리적으로 표현하는 능력이 크게
                  향상되었습니다. 특히 의학 관련 주제에 관심을 갖게 되어 진로 탐색에도 큰 도움이 되고 있습니다."
                </p>
                <p className="text-right text-sm font-medium">- 이○○ 학부모님</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
