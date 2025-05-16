import React from 'react';

interface ScheduleTabNavProps {
  activeDay: 'weekday' | 'saturday' | 'sunday';
  setActiveDay: (day: 'weekday' | 'saturday' | 'sunday') => void;
  activeGrade: 'high' | 'middle';
  setActiveGrade: (grade: 'high' | 'middle') => void;
}

const ScheduleTabNav = ({
  activeDay,
  setActiveDay,
  activeGrade,
  setActiveGrade,
}: ScheduleTabNavProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col gap-4 mb-4">
        {/* 학년 선택 탭 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2">
            <button
              onClick={() => setActiveGrade('high')}
              className={`py-4 text-sm md:text-base font-medium focus:outline-none transition-colors ${
                activeGrade === 'high'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              고등학생
            </button>
            <button
              onClick={() => setActiveGrade('middle')}
              className={`py-4 text-sm md:text-base font-medium focus:outline-none transition-colors ${
                activeGrade === 'middle'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              중학생
            </button>
          </div>
        </div>
        
        {/* 요일 선택 탭 - 모바일 */}
        <div className="md:hidden">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3">
              <button
                onClick={() => setActiveDay('weekday')}
                className={`py-4 text-sm font-medium focus:outline-none transition-colors ${
                  activeDay === 'weekday'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                평일
              </button>
              <button
                onClick={() => setActiveDay('saturday')}
                className={`py-4 text-sm font-medium focus:outline-none transition-colors ${
                  activeDay === 'saturday'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                토요일
              </button>
              <button
                onClick={() => setActiveDay('sunday')}
                className={`py-4 text-sm font-medium focus:outline-none transition-colors ${
                  activeDay === 'sunday'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                일요일
              </button>
            </div>
          </div>
        </div>
        
        {/* 요일 선택 탭 - 데스크톱 */}
        <div className="hidden md:block">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveDay('weekday')}
                className={`px-4 py-3 text-base font-medium focus:outline-none flex-1 ${
                  activeDay === 'weekday'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                평일
              </button>
              <button
                onClick={() => setActiveDay('saturday')}
                className={`px-4 py-3 text-base font-medium focus:outline-none flex-1 ${
                  activeDay === 'saturday'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                토요일
              </button>
              <button
                onClick={() => setActiveDay('sunday')}
                className={`px-4 py-3 text-base font-medium focus:outline-none flex-1 ${
                  activeDay === 'sunday'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                일요일
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTabNav; 