import Image from "next/image"
import { Quote, Award, BookOpen, GraduationCap } from "lucide-react"

export default function DirectorGreetingPage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* 연구소장 사진 */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-b from-purple-100 to-white p-4">
            <Image
              src="/mentors/kimdongheon.jpg"
              alt="김동헌 연구소장"
              width={300}
              height={400}
              className="mx-auto rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-600/80 text-white p-4 text-center">
              <h3 className="text-lg font-medium">대표 겸 연구소장</h3>
              <h2 className="text-xl font-bold">김동헌</h2>
            </div>
          </div>
        </div>

        {/* 인사말 내용 */}
        <div className="w-full lg:w-2/3">
          <div className="flex items-start mb-6">
            <Quote className="h-8 w-8 text-purple-500 mr-2 flex-shrink-0 mt-1" />
            <h2 className="text-2xl font-bold text-gray-800">연구소장 인사말</h2>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              학생들을 지도한 경험을 통해 수많은 아이들을 만나고, 또 그들이 성장해가는 과정을 함께해왔습니다. 그
              과정에서 제가 얻어낸 깨달음 한 가지는{" "}
              <span className="font-semibold text-purple-700">"학습의 본질은 성적이 아니라 방향과 습관"</span>이라는
              점입니다.
            </p>

            <p>
              성공적인 진학은 단순한 점수의 결과가 아니라,{" "}
              <span className="font-semibold">'어떻게 공부하고, 왜 공부해야 하는가'</span>에 대한{" "}
              <span className="font-semibold text-purple-700">스스로의 답</span>을 찾는 데서 시작됩니다.
            </p>

            <p>
              저희 캠프는 이 답을 찾게 해주는 특별한 프로그램입니다. 전국 각지의 의대생 멘토들이 직접 학생들과 함께
              생활하며 최상위권의 공부습관을 전수하고, 각자의 학습 여정을 진솔하게 들려주는 이 캠프는 그 자체로{" "}
              <span className="font-semibold text-purple-700">'살아있는 교육'</span>이라 할 수 있습니다.
            </p>

            <p>
              진학을 꿈꾸는 학생들에게 가장 필요한 것은 단기적 성취가 아니라, 지속 가능한 루틴과{" "}
              <span className="font-semibold text-purple-700">스스로를 이끄는 힘</span>입니다. 저희 캠프는 이 두 가지를
              함께 갖춘 제가 자신 있게 추천할 수 있는 진로·학습 통합 프로그램입니다. 학생은 물론 학부모님들께도 진심으로
              권합니다.
            </p>

            <p>
              이 캠프는 단순한 여름방학 프로그램이 아니라, 아이의 진짜 성장을 위한 전환점이 될 것입니다. 교육 현장에서
              수많은 아이들을 지켜봐 온 저 김동헌이{" "}
              <span className="font-semibold text-purple-700">자신 있게 추천</span>합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 학력 및 경력 */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <Award className="h-6 w-6 text-purple-500 mr-2" />
          학력 및 경력
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-purple-700 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              학력
            </h4>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>부산대학교 의과대학 의학과</li>
              <li>부산과학고등학교 졸업</li>
              <li>전국 수학 올림피아드 수상</li>
              <li>의학교육 혁신 포럼 발표자</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-700 mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              경력
            </h4>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>의대생 멘토링 캠프 대표</li>
              <li>전국 의대생 학습법 연구 프로젝트 리더</li>
              <li>학습 멘토링 100회 이상 진행</li>
              <li>의학 입문 가이드북 집필</li>
              <li>학생 관리 시스템 개발</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 서명 */}
      <div className="flex justify-end mt-8">
        <div className="text-right">
          <h3 className="text-xl font-bold text-purple-600 mb-1">대표 겸 연구소장</h3>
          <h4 className="text-2xl font-bold text-gray-800">김동헌</h4>
        </div>
      </div>
    </div>
  )
}
