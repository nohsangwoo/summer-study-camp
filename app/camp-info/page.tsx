import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, MapPin, Calendar, Users, BookOpen, Award, Clock, School } from "lucide-react"

export default function CampInfoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">위캔 여름방학 캠프</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          위캔 여름방학 캠프는 학생들의 학습 습관과 자기주도적 학습 능력을 향상시키기 위한 특별한 프로그램을 제공합니다.
          전문 멘토들의 지도 아래 효과적인 학습 방법을 배우고 실천할 수 있는 기회를 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src="/camp-banner.png" alt="여름방학 캠프 배너" width={600} height={400} className="w-full h-auto" />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">캠프 개요</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>기간:</strong> 2025년 7월 15일 ~ 8월 15일 (4주)
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>장소:</strong> 서울특별시 강남구 위캔캠프 교육센터
                </span>
              </li>
              <li className="flex items-start">
                <Users className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>대상:</strong> 중학생 및 고등학생
                </span>
              </li>
              <li className="flex items-start">
                <BookOpen className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>내용:</strong> 자기주도학습, 학습 습관 형성, 과목별 학습 전략
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/camp-info/guide">
                <Button className="w-full">
                  자세한 안내 보기
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">캠프 신청 안내</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>신청 기간:</strong> 2025년 5월 1일 ~ 6월 30일
                </span>
              </li>
              <li className="flex items-start">
                <Award className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>선발 방식:</strong> 선착순 및 학생 면담
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>결과 발표:</strong> 신청 후 1주일 이내 개별 연락
                </span>
              </li>
              <li className="flex items-start">
                <School className="mr-2 h-5 w-5 text-blue-500 mt-0.5" />
                <span>
                  <strong>참가비:</strong> 4주 프로그램 - 2,800,000원 (숙식 포함)
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/application/guide">
                <Button className="w-full">
                  신청 방법 알아보기
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/student-group-activity.png"
            alt="학생 그룹 활동"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* 멘토링 프로그램 섹션 추가 */}
      <div className="mb-16 bg-gray-50 py-10 px-6 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-8">최고의 멘토링 프로그램</h2>

        <div className="max-w-4xl mx-auto mb-8">
          <Image
            src="/mentor-banners.png"
            alt="서울대 멘토링 프로그램"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">우수한 멘토진</h3>
          <p className="text-gray-700 mb-6">
            서울대, 연세대, 고려대 출신의 우수한 멘토들이 학생들의 학습을 1:1로 지도합니다. 각 분야 전문가들의 체계적인
            멘토링으로 학습 효율을 극대화합니다.
          </p>

          <div className="max-w-4xl mx-auto">
            <Image
              src="/mentor-profiles.png"
              alt="멘토 프로필"
              width={800}
              height={200}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="/metoda/lineup">
            <Button variant="outline" className="bg-white hover:bg-gray-100">
              멘토진 더 알아보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">캠프 특징</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">자기주도학습 습관 형성</h3>
                <p className="text-gray-600">
                  학생 스스로 학습 계획을 세우고 실천하는 습관을 기르도록 체계적인 프로그램을 제공합니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1:1 맞춤형 멘토링</h3>
                <p className="text-gray-600">
                  각 학생의 학습 스타일과 성향에 맞는 개인별 맞춤형 학습 지도와 상담을 제공합니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">체계적인 학습 환경</h3>
                <p className="text-gray-600">
                  집중력을 높이는 최적의 학습 환경과 규칙적인 일과로 효율적인 학습을 지원합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">캠프 정보 둘러보기</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/camp-info/curriculum">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">커리큘럼</h3>
              <p className="text-sm text-gray-600">캠프의 세부 학습 프로그램과 일정을 확인하세요.</p>
            </div>
          </Link>

          <Link href="/camp-info/facilities">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">시설 안내</h3>
              <p className="text-sm text-gray-600">학습실, 기숙사, 식당 등 캠프 시설을 살펴보세요.</p>
            </div>
          </Link>

          <Link href="/camp-info/recommendations">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Award className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">추천의 글</h3>
              <p className="text-sm text-gray-600">캠프를 경험한 학생과 학부모의 후기를 읽어보세요.</p>
            </div>
          </Link>

          <Link href="/camp-info/greeting">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">대표 인사말</h3>
              <p className="text-sm text-gray-600">위캔캠프 대표의 교육 철학과 인사말을 확인하세요.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
