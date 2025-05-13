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
      <div className="flex flex-col md:flex-row gap-4 md:items-center mb-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex">
            <button
              onClick={() => setActiveGrade('high')}
              className={`px-4 py-3 text-sm font-medium focus:outline-none flex-1 whitespace-nowrap ${
                activeGrade === 'high'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              고등학생
            </button>
            <button
              onClick={() => setActiveGrade('middle')}
              className={`px-4 py-3 text-sm font-medium focus:outline-none flex-1 ${
                activeGrade === 'middle'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              중학생
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex">
            <button
              onClick={() => setActiveDay('weekday')}
              className={`px-4 py-3 text-sm font-medium focus:outline-none ${
                activeDay === 'weekday'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              평일
            </button>
            <button
              onClick={() => setActiveDay('saturday')}
              className={`px-4 py-3 text-sm font-medium focus:outline-none ${
                activeDay === 'saturday'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              토요일
            </button>
            <button
              onClick={() => setActiveDay('sunday')}
              className={`px-4 py-3 text-sm font-medium focus:outline-none ${
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
  );
};

export default ScheduleTabNav; 