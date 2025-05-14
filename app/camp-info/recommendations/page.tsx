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
        "몇 년 전부터 유행처럼 번지기 시작한 자기주도학습이나 멘토링 캠프에 대한 학생과 부모님의 관심이 여전히 높다. 특히 명문대생들과의멘토링 캠프는 부모들이 가장 선호하는 형태의 캠프라 해도 과언이 아니다.",
        "멘토링 캠프는 올바른 학습 목표 및 공부습관을 정립할 수 있고, 공부에 대한 동기 부여가 된다는 점에서 인기다. 무엇보다 눈높이가 맞고 이야기가 통하는 멘토들과 함께 생활한다는 부분이 부모나 학생에게는 가장 큰 매력으로 다가온다.",
        "그래서 전원 전교 1등 공부 습관 캠프 '전1공 캠프'은야주 특별한 멘토들과의만남을 선물한다. 전원 의대생들이 멘토로 참여하는 이번 캠프는 미래 의사를 꿈꾸는그리고 명문대를 희망하는 아이들을 위한 진로 비전 캠프다.",
        "'10년 의대공부'에서의대생들은 시간을 붙 담워 초 단위로 나누어 쓰며 공부 실습, 연구, 시험에 파묻혀 살 것처럼 보인다. 그리원해서는 무조건 착상위권 성적만이 답인 것만 같다. 하지만 실제 의대에 재학중인 학생들은 그런 것만은 아니라고 고 의대 인시를 앓을 무으다 의대를 선택하게 된 동기와 나만의 의대 입시전략 성적 이외에도 의대 생활을 위해서 꼭 필요한 부분들, 의대생들은 어떻게 생활하고 어떻게 공부하는지에 대한 모든 것들 현재 의대에 재학 중인 멘토들이 직접 이야기를 들려준다. 이를 통해 아이들은 조금 더 생생하게 의사라는 꿈을 그릴 수 있고 꼭 의사가 꿈이 아닌 학생들도 뜻깊게 노력하는 의대생들의 열정을 배울 수 있는 값진 시간이 될 것이다.",
        "또한 의사로서의소명 의식을 갖고 올바른 진로비전을 세우기 위하여 이번 캠프를 후원하는 큰솔병원의 현직 의사들을 초청해 진짜 의사 이야기를 들어보는 시간도 마련 되어있다. 병원 견학, 명사와의 만남 등 다채로운 활동으로 구성된 본 캠프는 그래서 더 가치 있어 보인다",
      ],
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
