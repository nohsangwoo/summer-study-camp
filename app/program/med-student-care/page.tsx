import { Book, Clock, Users, Calendar, Award, ArrowRight, CheckCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MedStudentCarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 의대생기부토탈케어 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-green-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">의대생기부토탈케어</h1>
        </div>
      </div>

      <div className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          {/* 메인 콘텐츠 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                예비 고등학교 의대 생기부 컨설팅 (Basic 6회 / Advanced 6회)
              </h2>

              {/* 기본 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">대상</h3>
                  <p className="text-gray-700">의학계열 입시를 계획하는 중학교 학생 학부모님</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Calendar className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">회차</h3>
                  <p className="text-gray-700">6회 (Basic course) / 6회 (Advanced course)</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">컨설팅 시간</h3>
                  <p className="text-gray-700">1시간</p>
                </div>
              </div>

              {/* 프로그램 소개 */}
              <div className="space-y-6 mb-10">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    고등학교를 입학하는 순간 이미 의대 수시를 위한 시점은 시작되었습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    고교 담임이든 제도가 처음인 시점에서 내신은 예산, 비교과는 전신이라고 할 정도로{" "}
                    <span className="font-bold text-green-700">비교과가 최상위 의대 합격의 최대 관건</span>이었습니다.
                    현 중학생은 고교내신 마방영, 의무 봉사 마방영, 자소서 폐지, 서울 동아리 활동 폐지 등 단언의 비교과를
                    드러낼 수 있는 방법이 많이 없습니다.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    결국 스토리와 관련된 것은 의대 세특에 최대한 녹여내야 합니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    지금 의대 수시를 준비하는 모든 학생들의 생기부 수준은 상당히 높습니다.
                    <br />
                    그런 와중에 신선하고 기발한 생기부를 만들어내는 것이 아닌 비교과에서 높은 점수를 받을 수 있습니다.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    메디브릿지는 의대를 꿈꾸는 모든 학생이 학 중학교 때 고등학교 의대 생기부를 위한 계획을 다 짜놓고
                    가기를 권유드립니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    컨설팅은 수제로 정하는 것이 70%라고 말할 수 있을 정도로 방향을 정하는 것이 중요합니다.
                    <br />
                    그러기 위해서는 정확한 입시 정보 뿐만 아니라 전체적으로 본인이 들어야 시간이 중요합니다.
                    <br />
                    고등학교 때는 최대한 내신을 위해 올인할 때입니다. 그럴기 때문에 중학교 때 그러한 마무 그려 놓는 것이
                    중요합니다.
                    <br />
                    서울대 의대, 연세대 의대를 비롯한 최상위권 의학계열 중심 메인 컨설턴트 한 명과 세 명 이상의 서브
                    컨설턴트들이
                    <br />한 명의 고객을 위해 고등학교 의대 세특에 활용할 수 있는 활동을 미리 전형하고 고등학교 생기부
                    계획을 완성시켜줍니다.
                  </p>
                </div>
              </div>

              {/* 코스 내용 탭 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <Book className="h-5 w-5 text-green-600 mr-2" />
                  컨설팅 내용
                </h3>

                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="basic">Basic Course</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced Course</TabsTrigger>
                  </TabsList>
                  <TabsContent value="basic">
                    <Card>
                      <CardContent className="p-0">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-green-100">
                              <TableHead className="w-[100px] font-bold">회차</TableHead>
                              <TableHead className="font-bold">내용</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">1-2회차</TableCell>
                              <TableCell>
                                <p className="font-semibold mb-1">의학이란 무엇인가?</p>
                                <p>위대한 의사들은 세상에 어떤 업적을 남겼을까?</p>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">3-4회차</TableCell>
                              <TableCell>
                                <p className="font-semibold mb-1">의사라는 직업의 무게</p>
                                <p>의료윤리</p>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">5-6회차</TableCell>
                              <TableCell>
                                <p className="font-semibold mb-1">나는 어떤 의사가 될 것이며</p>
                                <p>어떻게 세상을 밝게 것인가?</p>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="advanced">
                    <Card>
                      <CardContent className="p-0">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-green-100">
                              <TableHead className="w-[100px] font-bold">회차</TableHead>
                              <TableHead className="font-bold">내용</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">1회차</TableCell>
                              <TableCell>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>메인 컨설턴트와 미팅</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>고등학교 각 과목/단원 스토리 기반으로 2-5회차 컨설팅 주제 완성하기</span>
                                  </li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">2-5회차</TableCell>
                              <TableCell>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>
                                      국어/영어/사회/수학/물리/화학/생물/지구과학/정보 (과목에 두 명 정도 수도 있음,
                                      중요도에 따라 진행)
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>
                                      1회차에 계획된 주제를 바탕으로 시온대, 연세대 의대 출신 선생님 또는 각 과목 전문
                                      시온대 석박사 출신 선생님들과 함께 '생기부 제출용 보고서' 작성하기
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>이 보고서를 바탕으로 가내하는 예상 세특까지 함께 완성하기</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>
                                      담임선생님 또는 대학교수님이 활용에 대해 잘 수 있는 '예상질문 및 모범답안'
                                      완성하기
                                    </span>
                                  </li>
                                </ul>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">6회차</TableCell>
                              <TableCell>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>
                                      메인컨설턴트와 지금까지 작성해놓은 모든 보고서들이 현재 스토리와 잘 연계되는지
                                      최종 점검
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span>
                                      과목별 선생님 및 의대면접 교수님의 질문에 대비한 '예상질문 및 모범답안' 잘
                                      완성되었는지 점검
                                    </span>
                                  </li>
                                </ul>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* 기대 효과 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  기대 효과
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>고등학교 입학 전 의대 생기부를 위한 체계적인 계획 수립</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>의학 관련 주제에 대한 깊이 있는 이해와 탐구 능력 향상</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>각 교과목별 의학 연계 주제 발굴 및 세특 작성 준비</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>의대 면접 대비 예상 질문 및 모범 답안 준비</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>최상위권 의대 합격을 위한 차별화된 생기부 전략 수립</span>
                  </li>
                </ul>
              </div>

              {/* 신청 버튼 */}
              <div className="flex justify-center">
                <Link href="/application/form">
                  <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 h-auto">
                    프로그램 신청하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* 컨설턴트 소개 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">컨설턴트 소개</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="text-lg font-semibold">메인 컨설턴트</h4>
                </div>
                <p className="text-gray-700 mb-2">
                  서울대 의대, 연세대 의대 출신의 전문 컨설턴트가 학생의 전체적인 생기부 방향성을 설계하고 관리합니다.
                </p>
                <p className="text-sm text-gray-500">* 의대 입시 경험과 의학 전문 지식을 바탕으로 한 맞춤형 컨설팅</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="text-lg font-semibold">과목별 전문 컨설턴트</h4>
                </div>
                <p className="text-gray-700 mb-2">
                  각 교과목별 전문 컨설턴트가 의학 관련 주제와 연계한 세특 작성을 지원합니다.
                </p>
                <p className="text-sm text-gray-500">
                  * 국어, 영어, 수학, 과학 등 각 과목별 의학 연계 주제 발굴 및 보고서 작성 지도
                </p>
              </div>
            </div>
          </div>

          {/* 수강생 후기 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">수강생 후기</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "중학교 때부터 의대 진학을 목표로 했지만 어떻게 준비해야 할지 막막했습니다. 이 프로그램을 통해
                  고등학교 생기부를 어떻게 준비해야 하는지 구체적인 방향을 잡을 수 있었고, 각 과목별로 의학과 연계된
                  주제를 탐구하면서 더욱 확고한 진로 의식을 갖게 되었습니다."
                </p>
                <p className="text-right text-sm font-medium">- 김○○ 학생 (현 고등학교 1학년)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "아이가 의대 진학을 희망하고 있어서 어떻게 도와줘야 할지 고민이었는데, 이 프로그램을 통해 체계적인
                  준비가 가능했습니다. 특히 과목별로 의학 관련 주제를 미리 탐구하고 보고서를 작성하는 과정이 실제
                  고등학교 생기부 작성에 큰 도움이 될 것 같습니다. 전문적인 컨설팅에 매우 만족합니다."
                </p>
                <p className="text-right text-sm font-medium">- 박○○ 학부모님</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
