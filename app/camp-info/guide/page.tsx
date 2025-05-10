import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScheduleTab from "./components/ScheduleTab"
import RegistrationTab from "./components/RegistrationTab"
import ProgramTab from "./components/ProgramTab"
import PreparationTab from "./components/PreparationTab"
import CampLifeTab from "./components/CampLifeTab"
import ContactInfo from "./components/ContactInfo"
import ProgramGuideImage from "./components/ProgramGuideImage"

export default function CampGuidePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">캠프 안내</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          전교1등 공부습관캠프 전일공의 일정, 등록 방법, 그리고 주차별 프로그램에 대한 상세 안내입니다.
        </p>
      </div>

      <Tabs defaultValue="schedule" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="schedule" className="text-base">
            일정 안내
          </TabsTrigger>
          <TabsTrigger value="registration" className="text-base">
            등록 방법
          </TabsTrigger>
          <TabsTrigger value="program" className="text-base">
            프로그램 안내
          </TabsTrigger>
          <TabsTrigger value="preparation" className="text-base">
            준비물 안내
          </TabsTrigger>
          <TabsTrigger value="camplife" className="text-base">
            캠프 생활
          </TabsTrigger>
        </TabsList>

        {/* 일정 안내 탭 */}
        <TabsContent value="schedule">
          <ScheduleTab />
        </TabsContent>

        {/* 등록 방법 탭 */}
        <TabsContent value="registration">
          <RegistrationTab />
        </TabsContent>

        {/* 프로그램 안내 탭 */}
        <TabsContent value="program">
          <ProgramGuideImage />
          <ProgramTab />
        </TabsContent>

        {/* 준비물 안내 탭 */}
        <TabsContent value="preparation">
          <PreparationTab />
        </TabsContent>

        {/* 캠프 생활 탭 */}
        <TabsContent value="camplife">
          <CampLifeTab />
        </TabsContent>
      </Tabs>

      <ContactInfo />
    </div>
  )
}
