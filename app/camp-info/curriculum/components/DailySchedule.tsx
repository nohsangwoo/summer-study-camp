'use client'

import { Clock } from "lucide-react"
import { useState } from "react"
import HighSchoolSchedule from "./HighSchoolSchedule"
import MiddleSchoolSchedule from "./MiddleSchoolSchedule"
import ScheduleTabNav from "./ScheduleTabNav"

export default function DailySchedule() {
  const [activeDay, setActiveDay] = useState<'weekday' | 'saturday' | 'sunday'>('weekday')
  const [activeGrade, setActiveGrade] = useState<'high' | 'middle'>('high')

  return (
    <div className="mt-12 mb-16">
      <div className="border-b border-gray-200 mb-6">
        <h2 className=" text-xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-2 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-indigo-600" />
          일과 시간표
        </h2>
      </div>

      <h3 className="text-lg font-bold text-gray-700 mb-4">전교1등 공부습관캠프 하루일과 스케줄표</h3>
      
      <ScheduleTabNav
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        activeGrade={activeGrade}
        setActiveGrade={setActiveGrade}
      />

      <div className="mb-4">
        <div className="bg-blue-50 px-4 py-3 rounded-lg border border-blue-100">
          <h4 className="text-md font-semibold text-blue-800 mb-1">
            {activeGrade === 'high' ? '고등학생' : '중학생'} 
            {activeDay === 'weekday' ? ' 평일' : activeDay === 'saturday' ? ' 토요일' : ' 일요일'} 
            일과표
          </h4>
        </div>
      </div>

      {activeGrade === 'high' ? (
        <HighSchoolSchedule day={activeDay} />
      ) : (
        <MiddleSchoolSchedule day={activeDay} />
      )}

      <div className="mt-4 p-4 bg-gray-100 rounded-md text-gray-700 text-sm">
        {activeDay === 'sunday' ? (
          <p>
            일요일은 오전 시간 일부가 자유시간이며, 휴식과 함께 소그룹 활동을 통해 다음 주 학습을 준비하는 시간으로 활용됩니다.
          </p>
        ) : (
          <p>
            전교1등 공부습관캠프에서는 학생들의 자기주도학습 습관을 형성하기 위해 체계적인 시간 관리와 학습 방법을 교육합니다.
          </p>
        )}
      </div>
    </div>
  )
}
