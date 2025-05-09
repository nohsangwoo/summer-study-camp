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
              src="/female-doctor-portrait.png"
              alt="박미정 연구소장"
              width={300}
              height={400}
              className="mx-auto rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-600/80 text-white p-4 text-center">
              <h3 className="text-lg font-medium">임시 연구소장</h3>
              <h2 className="text-xl font-bold">박미정</h2>
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
              임시를 지도한 35년 동안 수많은 아이들을 만나고, 또 그들이 성장해가는 과정을 함께해왔습니다. 그 과정에서
              제가 얻어낸 깨달음 한 가지는{" "}
              <span className="font-semibold text-purple-700">"임시의 본질은 성적이 아니라 방향과 습관"</span>이라는
              점입니다.
            </p>

            <p>
              성공적인 진학은 단순한 점수의 결과가 아니라,{" "}
              <span className="font-semibold">'어떻게 공부하고, 왜 공부해야 하는가'</span>에 대한{" "}
              <span className="font-semibold text-purple-700">스스로의 답</span>을 찾는 데서 시작됩니다.
            </p>

            <p>
              전일공 캠프는 이 답을 찾게 해주는 아주 드문 프로그램입니다. 전국 각지의 의대생 멘토들이 직접 학생들과 함께
              생활하며 전교 1등의 공부습관을 전수하고, 각자의 임시 여정을 진솔하게 들려주는 이 캠프는 그 자체로{" "}
              <span className="font-semibold text-purple-700">'살아있는 임시 교육'</span>이라 할 수 있습니다.
            </p>

            <p>
              진학을 꿈꾸는 학생들에게 가장 필요한 것은 단기적 성취가 아니라, 지속 가능한 루틴과{" "}
              <span className="font-semibold text-purple-700">스스로를 이끄는 힘</span>입니다. 전일공 캠프는 이 두
              가지를 함께 갖춘 제가 자신 있게 추천할 수 있는 진로·학습 통합 프로그램입니다. 학생은 물론 학부모님들께도
              진심으로 권합니다.
            </p>

            <p>
              이 캠프는 다수화, 여름방학 프로그램이 아니라, 아이의 진짜 성장을 위한 전환점이 될 것입니다. 임시 현장에서
              수많은 아이들을 지켜봐 온 저 박미정이{" "}
              <span className="font-semibold text-purple-700">자신 있게 추천</span>합니다. 활동으로 구성된 본 캠프는
              그래서 더 가치 있어 보입니다.
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
              <li>부산대학교 의과대학 졸업</li>
              <li>부산대학교 재활의학과 전문의</li>
              <li>부산대학교 의과대학 의학박사</li>
              <li>부산대학교병원 재활의학과 교수</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-700 mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              경력
            </h4>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>세계재활의학회 정회원</li>
              <li>세계신경성 뇌손상 학회 정회원</li>
              <li>대한 재활의학회 정회원</li>
              <li>대한 뇌손상 재활학회 정회원</li>
              <li>대한 임상통증학회 정회원</li>
              <li>대한 재활의학회 학술상</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 서명 */}
      <div className="flex justify-end mt-8">
        <div className="text-right">
          <h3 className="text-xl font-bold text-purple-600 mb-1">임시 연구소장</h3>
          <h4 className="text-2xl font-bold text-gray-800">박미정</h4>
        </div>
      </div>
    </div>
  )
}
