import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Users, CalendarDays, CalendarCheck, Award, ArrowRight, MapPin } from "lucide-react"

export default function ProgramTab() {
  const programs = [
    {
      id: 1,
      label: "입소일",
      bgColor: "bg-teal-500",
      title: "입소안내 (캠프기간 캠프 일정 참조 요망)",
      items: [
        "입소시 제출서류: 캠프 입소 서약서 및 입소 확인서",
        "코배지, 방배정, 캠퍼 티셔츠 상장넘 배정",
        "입소시간: 13:00(중1,고1)/ 14:00(중2,고2)/ 15:00(중3,고3)"
      ]
    },
    {
      id: 2,
      label: "1주차",
      bgColor: "bg-blue-600",
      title: "입소 후 5일은 학습 적응 훈련기간입니다.",
      items: [
        "※ 30분 학습 적응법 및 집도력으로 학습법 교육",
        "※ 학습방향성 체크 및 성격 및 학습성향 소개",
        "※ 멘토는 학생당 고정",
        "※ 이 기간 동안은 학생들의 연락을 차단하지 않습니다. 특별한 일이 발생할 시 안내드리겠습니다."
      ]
    },
    {
      id: 3,
      label: "2주차",
      bgColor: "bg-teal-500",
      title: "학습능력 향상 및 자기주도학습 능력 배양",
      items: [
        "※ 매일 진행되는 상담을 통한 학습능력 보완 시간 및 부족한 학습자료 점검",
        "※ 분석된 고민 파악 후, 극복할 수 있게 해결책 제시",
        "※ 상담을 통한 학생별 맞춤 학습방향 제시",
        "※ 3주차적 학생들은 2주차 프로그램에 상주자, 진행(카)에어 와 직국 부여)"
      ]
    },
    {
      id: 4,
      label: "3주차",
      bgColor: "bg-blue-600",
      title: "학부모 세미나 / 학습 습관 정지 기간",
      items: [
        "※ 개인당 순수 공부시간 체크와 14시간에 개개별 공부 할 수 있도록 방법 및 핸드북 제공",
        "※ Back to the Basic 기본으로 돌아가 30분 집중법 및 집도력과 학습 습관",
        "※ 14시간 학습 세미나 이해하지 않는는 자신감 부여",
        "※ 학부모 세미나 / 온라인 화상형 교육",
        "※ 4주차적 학생들은 3주차 프로그램에 상주자, 진행(카)에어 와 직국 부여)"
      ]
    },
    {
      id: 5,
      label: "4주차",
      bgColor: "bg-teal-500",
      title: "지속 가능한 학습 습관 배양 기간",
      items: [
        "※ 온라인 화상형 교육",
        "※ 이는 공부법프로그램 통해서 방학기간동안은 14시간 공부를 해낼수 있었지만, 캠프 후 각 가정으로 돌아가면 자세가 무너지기 쉽기때문에, 자가 후 학습 연계 및 습관 유지에 대한 계획 및 방향 제시."
      ]
    },
    {
      id: 6,
      label: "퇴소일",
      bgColor: "bg-blue-600",
      title: "해당기간 퇴소 일정 참조 요망",
      items: [
        "※ 캠프 후속프로그램안 프로포즈적 금액할인 캠프 안내",
        "※ 퇴소시에 끝나는 학생들 퇴소시간 확인하시면 됩니다."
      ]
    },
    {
      id: 7,
      label: "학부모 세미나",
      bgColor: "bg-teal-500",
      title: "[캠프 중 진행 / 일정 별도 안내] 캠프진행으로 오셔서 단체 세션하고 상담도 하시고",
      description: "고생한 학생들과 맛난 음식도 먹으며, 학생들이 어떻게 공부를 하고 있는지 전체적인 상황에 대해서 안내를 드립니다. 또한 공부수행성향에서 캠프 후 학업을 관리해야하 공부방향성에 대해 세미나 진행합니다. 캠프 후속 프로그램이 프로포즈적, 금액할인캠프 안내도 진행합니다."
    }
  ];

  return (
    <Card>
      <CardHeader className="bg-slate-50">
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          프로그램 안내
        </CardTitle>
        <CardDescription>캠프 기간 동안의 주차별 프로그램 안내입니다.</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {programs.map((program) => (
            <div key={program.id} className="relative">
              {/* 모바일 뷰 */}
              <div className="md:hidden">
                <div className={`${program.bgColor} text-white font-bold py-3 px-4 rounded-t-lg flex items-center justify-between`}>
                  <div className="flex items-center">
                    {program.label === "입소일" && <CalendarCheck className="h-5 w-5 mr-2" />}
                    {program.label === "퇴소일" && <CalendarDays className="h-5 w-5 mr-2" />}
                    {program.label === "학부모 세미나" && <Users className="h-5 w-5 mr-2" />}
                    {program.label.includes("주차") && <Award className="h-5 w-5 mr-2" />}
                    <span className="text-lg">{program.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-70" />
                </div>
                
                <div className="border border-gray-200 rounded-b-lg p-5 bg-white">
                  {/* 타이틀과 입소일 특별 처리 */}
                  <h3 className="font-medium mb-4 text-gray-700 leading-tight">{program.title}</h3>
                  
                  {/* 입소일/퇴소일 특별 처리 */}
                  {program.label === "입소일" && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-3 border border-blue-100">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="font-bold text-blue-700">입소 시간</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2 ml-7">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">중1, 고1</span>
                          <span className="font-bold text-blue-800 bg-white px-3 py-1 rounded-full shadow-sm">13:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">중2, 고2</span>
                          <span className="font-bold text-blue-800 bg-white px-3 py-1 rounded-full shadow-sm">14:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">중3, 고3</span>
                          <span className="font-bold text-blue-800 bg-white px-3 py-1 rounded-full shadow-sm">15:00</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* 주차별 프로그램 내용 */}
                  {program.items && (
                    <div className="space-y-3">
                      {program.items.map((item, idx) => {
                        const itemText = item.startsWith("※ ") ? item.substring(2) : item;
                        return (
                          <div key={idx} className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                              <span className="text-xs font-bold text-gray-500">{idx+1}</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-tight flex-1">{itemText}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {/* 학부모 세미나 특별 처리 */}
                  {program.description && (
                    <div className="mt-3 bg-purple-50 rounded-lg p-3 text-sm leading-relaxed border border-purple-100">
                      <p className="text-gray-700">{program.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 데스크톱 뷰 */}
              <div className="hidden md:block relative">
                <div className={`absolute left-0 top-0 w-24 h-10 ${program.bgColor} flex items-center justify-center text-white font-bold -ml-2 shadow-md`}>
                  {program.label}
                </div>
                <div className="border border-gray-200 rounded-lg p-6 pl-28 ml-6 bg-white">
                  <h3 className={`font-bold mb-2 ${program.id === 7 ? "text-red-500" : ""}`}>{program.title}</h3>
                  {program.items && (
                    <ul className="space-y-1 text-sm">
                      {program.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {program.description && (
                    <p className="text-sm">{program.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
