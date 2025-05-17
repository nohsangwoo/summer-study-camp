'use client'
import {
  MapPin,
  Home,
  Utensils,
  BookOpen,
  Bed,
  ShowerHead,
  Coffee,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import StudyFacilities from '@/app/camp-info/facilities/components/StudyFacilities'
import DiningFacilities from '@/app/camp-info/facilities/components/DiningFacilities'
import DormitoryFacilities from '@/app/camp-info/facilities/components/DormitoryFacilities'
import LocationInfo from '@/app/camp-info/facilities/components/LocationInfo'
import FacilityUsageGuide from '@/app/camp-info/facilities/components/FacilityUsageGuide'
import FacilityContact from '@/app/camp-info/facilities/components/FacilityContact'

export default function FacilitiesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">캠프시설</h1>
        <p className="text-gray-600">
          편안함과 집중을 위한 최고의 학습 환경, 전일공 학습장 및 기숙사 시설을
          소개합니다.
        </p>
      </div>

      <Tabs defaultValue="study" className="mb-12">
        <div className="relative">
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
          
          {/* Scrollable tabs container with padding for buttons */}
          <div className="overflow-x-auto tabs-scroll-container px-6 md:px-0 mb-8 pb-3">
            <TabsList className="flex w-max min-w-full space-x-2">
            <TabsTrigger
              value="study"
              className="flex items-center gap-2 text-xs md:text-sm py-2 whitespace-nowrap"
            >
              <BookOpen className="h-4 w-4" />
              <span>학습시설</span>
            </TabsTrigger>
            <TabsTrigger
              value="dining"
              className="flex items-center gap-2 text-xs md:text-sm py-2 whitespace-nowrap"
            >
              <Utensils className="h-4 w-4" />
              <span>식당 내부모습</span>
            </TabsTrigger>
            <TabsTrigger
              value="dormitory"
              className="flex items-center gap-2 text-xs md:text-sm py-2 whitespace-nowrap"
            >
              <Bed className="h-4 w-4" />
              <span>숙소 내부모습</span>
            </TabsTrigger>
            <TabsTrigger
              value="location"
              className="flex items-center gap-2 text-xs md:text-sm py-2 whitespace-nowrap"
            >
              <MapPin className="h-4 w-4" />
              <span>오시는 길</span>
            </TabsTrigger>
          </TabsList>
          </div>
        </div>

        {/* 학습시설 */}
        <TabsContent value="study">
          <StudyFacilities />
        </TabsContent>

        {/* 식당 내부모습 */}
        <TabsContent value="dining">
          <DiningFacilities />
        </TabsContent>

        {/* 숙소 내부모습 */}
        <TabsContent value="dormitory">
          <DormitoryFacilities />
        </TabsContent>

        {/* 오시는 길 */}
        <TabsContent value="location">
          <LocationInfo />
        </TabsContent>
      </Tabs>

      {/* 시설 이용 안내 */}
      <FacilityUsageGuide />

      {/* 시설 문의 */}
      <FacilityContact />
    </div>
  )
}
