import Image from "next/image"
import { Quote, Award, BookOpen, Star, User } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  title: string
  image: string
  content: string[]
  education?: string[]
  career?: string[]
}

export default function RecommendationsPage() {
  const testimonials: Testimonial[] = [
    {
      id: "park",
      name: "박재홍",
      title: "큰솔병원 병원장",
      image: "/placeholder.svg",
      content: [
        "진짜 성장은, 스스로 공부하는 법을 깨닫는 순간부터 시작됩니다.",
        "의사라는 꿈을 품든, 아직 뚜렷한 진로를 찾지 못했든 모든 청소년에게 필요한 첫걸음은 '스스로 생각하고 스스로 공부하는 힘', 바로 자기주도학습의 기반을 다지는 것입니다.",
        "전일공 캠프는 단순한 성적 향상을 넘어, 공부의 본질을 이해하고 자기 삶의 방향을 스스로 설계할 수 있는 힘을 길러주는 특별한 여정입니다.",
        "지역의 의대생 멘토들이 직접 함께 생활하며 실패와 성장, 고민과 극복의 과정을 진솔하게 들려주는 이 캠프는 단순한 강의나 정보 전달을 넘어서는 **'살아 있는 배움'**을 제공합니다.",
        "우리는 이 뜻깊은 캠프를 함께 만드는 후원 의료인 그룹으로서, 이 프로그램이 아이들의 자기주도성과 진로 감각을 일깨우는 결정적인 전환점이 되리라 믿습니다.",
        "스스로를 이끄는 힘이 진짜 실력입니다. 전일공 캠프는 그 힘을 깨우는 첫 번째 경험이 되어줄 것입니다.",
      ],
      education: [
        "부산대학교 의과대학 졸업",
        "부산대학교 재활의학과 전문의",
        "부산대학교 의과대학 의학박사",
        "부산대학교병원 재활의학과 교수",
      ],
      career: [
        "세계재활의학회 정회원",
        "세계외상성 뇌손상 학회 정회원",
        "대한 재활의학회 정회원",
        "대한 뇌손상 재활학회 정회원",
        "대한 임상통증학회 정회원",
        "대한 재활의학회 학술상",
      ],
    },
    {
      id: "jung",
      name: "정제원",
      title: "EBS대표컨설턴트",
      image: "/consultant-jung.png",
      content: [
        "최근 몇 년간 자기주도학습과 멘토링 캠프에 대한 학생들과 학부모님의 관심이 지속적으로 높아지고 있습니다. 특히 명문대생들과 함께하는 멘토링 캠프는 많은 부모님들께서 가장 선호하는 캠프 형태로 자리 잡고 있습니다.",
        "이러한 캠프는 올바른 학습 목표 설정과 공부 습관 형성에 도움을 주며, 학습에 대한 동기를 부여한다는 점에서 인기를 끌고 있습니다. '전교 1등 공부 습관 캠프', 전일공 캠프는 전원 의대생 멘토들과 함께하는 특별한 진로 비전 캠프로, 미래 의사와 명문대 진학을 꿈꾸는 학생들에게 맞춤형 동기를 부여하고자 기획되었습니다.",
        "과거 교육격차 해소를 위한 재능기부 멘토링 활동 중, 진로에 대해 깊이 고민하고 스스로 방향을 찾기 위해 노력하던 한 학생을 만났습니다. 그 학생이 바로 현재 전일공 캠프를 준비하고 있는 김동헌 대표입니다.",
        "그 인연을 계기로 그는 이후에도 진로와 교육에 대한 꾸준한 열정을 이어왔고, 현재는 지역 학생들을 위한 멘토링 캠프를 직접 기획하고 있습니다. 전일공 캠프는 단순한 공부법을 가르치는 것을 넘어, 학생들이 스스로 목표를 설정하고 그 꿈을 구체화할 수 있도록 돕는 자기주도학습의 본질을 담고 있습니다.",
        "현직 교사로서 직접 캠프 운영에 참여하지는 않지만, 한 사람의 조언자로서 이 캠프의 진심 어린 취지에 공감하며, 지역 학생들에게 양질의 멘토링 기회가 제공되길 진심으로 응원합니다."
      ],
      education: [
        "서울대학교 사범대학 졸업",
        "교육학 석사",
        "EBS 입시컨설턴트"
      ],
      career: [
        "전국 교육청 진로진학 특강 강사",
        "EBS 대표컨설턴트",
        "입시전략연구소 소장",
        "교육부 자문위원"
      ]
    },
  ]

  return (
    <div>
      <div className="flex items-start mb-8">
        <Star className="h-8 w-8 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
        <h2 className="text-2xl font-bold text-gray-800">추천사</h2>
      </div>

      <p className="text-gray-600 mb-10">
        전일공 캠프는 다양한 분야의 전문가들로부터 높은 평가를 받고 있습니다. 의료계와 교육계의 전문가들이 직접 경험하고
        추천하는 전일공 캠프의 가치를 확인해보세요.
      </p>

      <div className="space-y-16">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8 mb-8">
                {/* 추천인 사진 */}
                <div className="w-full lg:w-1/3 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-b from-blue-50 to-white p-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.name} 사진`}
                      width={300}
                      height={400}
                      className="mx-auto rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-600/80 text-white p-4 text-center">
                      <h3 className="text-lg font-medium">{testimonial.title}</h3>
                      <h2 className="text-xl font-bold">{testimonial.name}</h2>
                    </div>
                  </div>
                </div>

                {/* 추천사 내용 */}
                <div className="w-full lg:w-2/3">
                  <div className="flex items-start mb-6">
                    <Quote className="h-8 w-8 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      {testimonial.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 학력 및 경력 (있는 경우에만 표시) */}
              {(testimonial.education || testimonial.career) && (
                <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Award className="h-6 w-6 text-blue-500 mr-2" />
                    학력 및 경력
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonial.education && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2" />
                          학력
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                          {testimonial.education.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {testimonial.career && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          경력
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                          {testimonial.career.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 서명 */}
              <div className="flex justify-end mt-8">
                <div className="text-right">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">{testimonial.title}</h3>
                  <h4 className="text-2xl font-bold text-gray-800">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
