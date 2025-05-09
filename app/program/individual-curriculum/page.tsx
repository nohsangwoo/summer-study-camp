import {
  Book,
  Clock,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  FileText,
  Video,
  User,
  GraduationCap,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function IndividualCurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 개인 교과 진도유지 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-indigo-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">개인 교과 진도유지</h1>
        </div>
      </div>

      <div className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          {/* 메인 콘텐츠 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">개인 교과 진도유지 프로그램</h2>

              {/* 기본 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">대상</h3>
                  <p className="text-gray-700">중학생 및 고등학생</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <BookOpen className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">과목</h3>
                  <p className="text-gray-700">국어, 영어, 수학, 과학</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center">
                  <Clock className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">수업 시간</h3>
                  <p className="text-gray-700">과목당 주 1-2회, 회당 2시간</p>
                </div>
              </div>

              {/* 프로그램 소개 */}
              <div className="space-y-6 mb-10">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    학교 교과 진도를 따라가기 어려운 학생들을 위한 맞춤형 학습 프로그램입니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    학생 개인의 학습 수준과 진도에 맞춰 1:1 또는 소규모 그룹으로 진행되며, 학교 수업에서 부족한 부분을
                    보완하고 선행학습을 통해 학업 성취도를 높이는 것을 목표로 합니다.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed font-medium">
                    단순한 문제 풀이가 아닌, 개념 이해부터 응용력 향상까지 체계적인 학습을 지원합니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    각 과목별 전문 선생님들이 학생의 취약점을 파악하고 맞춤형 학습 계획을 수립하여 효율적인 학습이
                    이루어질 수 있도록 지도합니다. 정기적인 평가를 통해 학습 성과를 확인하고 피드백을 제공하여 지속적인
                    성장을 돕습니다.
                  </p>
                </div>
              </div>

              {/* 과목별 특징 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <Book className="h-5 w-5 text-indigo-600 mr-2" />
                  과목별 특징
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-100 p-3 rounded-full mr-4">
                          <BookOpen className="h-6 w-6 text-red-600" />
                        </div>
                        <h4 className="text-lg font-semibold">국어</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          <span>문학 작품 이해 및 비평 능력 향상</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          <span>독해력과 논리적 사고력 개발</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                          <span>글쓰기 능력 향상을 위한 체계적 지도</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <GraduationCap className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-semibold">영어</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span>영문법 및 어휘력 강화</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span>영어 독해 및 듣기 능력 향상</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span>실용 영어 활용 능력 개발</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                          <Book className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="text-lg font-semibold">수학</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          <span>기초 개념부터 심화 문제까지 단계별 학습</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          <span>문제 해결 능력 및 수학적 사고력 향상</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          <span>수학 경시대회 및 올림피아드 대비</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-yellow-100 p-3 rounded-full mr-4">
                          <Book className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h4 className="text-lg font-semibold">과학</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                          <span>물리, 화학, 생물, 지구과학 전 영역 학습</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                          <span>실험 및 탐구 활동을 통한 과학적 사고력 배양</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                          <span>과학 경시대회 및 올림피아드 대비</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 기대 효과 */}
              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Award className="h-5 w-5 text-indigo-600 mr-2" />
                  기대 효과
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>학교 수업 진도를 따라가는 데 어려움이 없도록 지원</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>취약 과목 보완 및 학업 성취도 향상</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>자기주도적 학습 습관 형성</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>학업 스트레스 감소 및 자신감 향상</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>내신 및 수능 대비 기초 실력 다지기</span>
                  </li>
                </ul>
              </div>

              {/* 신청 버튼 */}
              <div className="flex justify-center">
                <Link href="/application/form">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6 h-auto">
                    프로그램 신청하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* 고3 수시컨설팅 섹션 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">MEDIBRIDGE CONSULTING</h3>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">고3 수시컨설팅 (6개 원서)</h2>
            </div>

            {/* 기본 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold mb-1">대상</h3>
                <p className="text-gray-700">고등학교 3학년 학부모님</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center">
                <User className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold mb-1">선생님</h3>
                <p className="text-gray-700">메디브릿지 임시연구소장님</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold mb-1">시간</h3>
                <p className="text-gray-700">1회 1시간 진행</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center">
                <Video className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold mb-1">방식</h3>
                <p className="text-gray-700">대면 또는 줌 모두 가능</p>
              </div>
            </div>

            {/* 컨설팅 설명 */}
            <div className="space-y-6 mb-10">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed font-medium text-center">
                  1회기 기말고사가 끝난 고3 학부모님들께 권하는 컨설팅입니다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  메디브릿지 임시연구소장님께서 모의고사 성적, 교과 성적, 생활기록부 내용(자/동/봉/진/세특/행종)을
                  분석하고 이를 바탕으로 6개 대학 수시원서 전략을 수립하는 컨설팅입니다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  메디브릿지가 보유한 압도적인 합격자 스펙 및 생활기록부 데이터를 토대로 단순히 경험에 기반한 컨설팅이
                  아닌 Evidence-based 수시원서를 구성합니다.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  전국의 모든 의대/치대/한의대/약대/수의대의 합격자 스펙만 연구하시는 임시연구소장님이 직접 전화하시며
                  모의고사, 교과 성적 뿐만 아니라 생활기록부의 정확한 진단을 통해서 각 학교 별로 자기소개서 스토리
                  조언까지 해드립니다.
                </p>
              </div>
            </div>

            {/* 주요 내용 */}
            <div className="bg-gray-50 p-6 rounded-lg mb-10">
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                컨설팅 내용
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">자녀의 모의고사 성적, 교과 성적, 생활기록부에 대한 평가</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    전국 의대/치대/한의대/약대/수의대에, 고객이 원할 경우 서울대/연세대/고려대 타 전공까지 포함하여 6개
                    수시원서 구성
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    전반적인 대학별 자기소개서 스토리 조언 및 최종합격을 위한 면접대비 계획 수립
                  </span>
                </li>
              </ul>
            </div>

            {/* 결론 */}
            <div className="bg-indigo-100 p-6 rounded-lg text-center mb-8">
              <p className="text-indigo-800 font-bold text-lg">
                메디브릿지의 모든 노하우가 담긴 고3 수시원서 컨설팅, 19년간의 노하우던 노력의 결실을
                <br />
                최고의 대학 합격으로 맺을 수 있도록 도와드리겠습니다.
              </p>
            </div>

            {/* 신청 버튼 */}
            <div className="flex justify-center">
              <Link href="/admission">
                <Button className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6 h-auto">
                  수시컨설팅 신청하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* 수강생 후기 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">수강생 후기</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "학교 수업만으로는 부족했던 부분을 개인 교과 진도유지 프로그램을 통해 보완할 수 있었습니다. 특히 수학
                  과목에서 큰 향상이 있었고, 자신감도 많이 생겼습니다. 선생님들이 친절하게 설명해주시고 질문에도 상세히
                  답변해주셔서 매우 만족스러웠습니다."
                </p>
                <p className="text-right text-sm font-medium">- 이○○ 학생 (고등학교 2학년)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="italic text-gray-600 mb-2">
                  "아이가 영어에 어려움을 겪고 있어서 이 프로그램을 신청했는데, 개인 맞춤형 수업 덕분에 영어 성적이 크게
                  향상되었습니다. 학교 진도를 따라가는 것뿐만 아니라 영어에 대한 흥미까지 생겨서 매우 기쁩니다. 다른
                  과목도 함께 수강할 계획입니다."
                </p>
                <p className="text-right text-sm font-medium">- 김○○ 학부모님</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
