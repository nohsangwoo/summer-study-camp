import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AdmissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 입소상담 헤더 */}
      <div className="w-full border-b border-gray-200 py-8 bg-gradient-to-r from-red-50 to-white">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-800">입소상담</h1>
        </div>
      </div>

      <div className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/korea-university-logo.png"
                alt="고려대학교 로고"
                width={120}
                height={150}
                className="mx-auto"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-700 mb-6">고려대학교 KU캠프</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              썸머 공부습관 캠프에 관심을 가져주셔서 감사합니다. 아래 채널을 통해 캠프에 대한 상세한 정보와 입소 상담을
              받아보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* 카카오톡 상담 카드 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-white p-8 flex flex-col items-center">
                  <div className="bg-yellow-400 rounded-full p-4 mb-4">
                    <Image src="/kakao-icon.png" alt="카카오톡 아이콘" width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">캠프관련문의</h3>
                  <p className="text-gray-500 mb-6">실시간채팅 상담</p>
                  <Link href="https://pf.kakao.com" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">문의하기</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* 네이버 톡톡 상담 카드 */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-white p-8 flex flex-col items-center">
                  <div className="bg-green-400 rounded-full p-4 mb-4">
                    <Image src="/naver-icon.png" alt="네이버 톡톡 아이콘" width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">캠프관련문의</h3>
                  <p className="text-gray-500 mb-6">실시간채팅 상담</p>
                  <Link href="https://talk.naver.com" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      문의하기 <span className="ml-1">›</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 전화 문의 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-white px-6 py-4 rounded-full shadow-md mb-4">
              <Phone className="h-6 w-6 text-red-500 mr-3" />
              <span className="text-xl font-medium text-gray-700">전화문의</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">1599-3290</h3>
            <p className="text-gray-500 mt-2">평일 09:00 - 18:00 | 토요일 09:00 - 13:00</p>
          </div>

          {/* 추가 정보 */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800">입소상담 안내</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center text-xs mr-3 mt-0.5">
                  1
                </span>
                <span>입소상담은 학생의 학습 수준과 목표를 파악하여 최적의 학습 계획을 수립하는 과정입니다.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center text-xs mr-3 mt-0.5">
                  2
                </span>
                <span>
                  상담 시 학생의 성적표, 학습 이력, 관심 분야 등의 정보를 준비해주시면 더 정확한 상담이 가능합니다.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center text-xs mr-3 mt-0.5">
                  3
                </span>
                <span>
                  입소상담 후 캠프 참가 신청이 가능하며, 상담 결과에 따라 맞춤형 학습 프로그램을 제공해 드립니다.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-5 h-5 bg-red-500 rounded-full text-white flex items-center justify-center text-xs mr-3 mt-0.5">
                  4
                </span>
                <span>
                  실시간 채팅 상담이 어려우신 경우, 전화 상담도 가능합니다. 운영 시간 내에 연락 주시기 바랍니다.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
