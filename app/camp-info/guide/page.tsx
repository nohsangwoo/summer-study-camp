'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ScheduleTab from './components/ScheduleTab'
import RegistrationTab from './components/RegistrationTab'
import ProgramTab from './components/ProgramTab'
import PreparationTab from './components/PreparationTab'

import CampLifeTab from './components/CampLifeTab'
import ContactInfo from './components/ContactInfo'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CampGuidePage() {
  return (
    <div className="container mx-auto py-8 px-0 sm:px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">캠프 안내</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          전교1등 공부습관캠프 전일공의 일정, 등록 방법, 그리고 주차별
          프로그램에 대한 상세 안내입니다.
        </p>
      </div>

      <Tabs defaultValue="schedule" className="w-full mb-12">
        <div className="relative mb-8 pb-3">
          {/* Fixed scroll buttons - positioned absolutely relative to parent */}
          <div className="absolute left-0 top-[calc(50%_-_6px)] -translate-y-1/2 z-20 md:hidden">
            <button 
              className="bg-gray-400/30 hover:bg-gray-500/70 transition-colors w-5 h-10 flex items-center justify-center rounded-md shadow-md"
              onClick={() => {
                const tabsContainer = document.querySelector('.tabs-scroll-container');
                if (tabsContainer) {
                  tabsContainer.scrollBy({ left: -150, behavior: 'smooth' });
                }
              }}
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
          </div>
          
          <div className="absolute right-0 top-[calc(50%_-_6px)] -translate-y-1/2 z-20 md:hidden">
            <button 
              className="bg-gray-400/30 hover:bg-gray-500/70 transition-colors w-5 h-10 flex items-center justify-center rounded-md shadow-md"
              onClick={() => {
                const tabsContainer = document.querySelector('.tabs-scroll-container');
                if (tabsContainer) {
                  tabsContainer.scrollBy({ left: 150, behavior: 'smooth' });
                }
              }}
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>
          
          <div className="overflow-x-auto tabs-scroll-container px-6 md:px-0">
            <TabsList className="flex w-max min-w-full space-x-2">
            <TabsTrigger 
              value="schedule" 
              className="text-xs md:text-base py-2 whitespace-nowrap"
            >
              일정 안내
            </TabsTrigger>
            <TabsTrigger 
              value="registration" 
              className="text-xs md:text-base py-2 whitespace-nowrap"
            >
              등록 방법
            </TabsTrigger>
            <TabsTrigger 
              value="program" 
              className="text-xs md:text-base py-2 whitespace-nowrap"
            >
              프로그램 안내
            </TabsTrigger>
            <TabsTrigger 
              value="preparation" 
              className="text-xs md:text-base py-2 whitespace-nowrap"
            >
              준비물 안내
            </TabsTrigger>
            <TabsTrigger 
              value="camplife" 
              className="text-xs md:text-base py-2 whitespace-nowrap"
            >
              캠프 생활
            </TabsTrigger>
          </TabsList>
          </div>
        </div>

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
