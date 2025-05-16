import React from 'react';

const HighSchoolSchedule = ({ day }: { day: 'weekday' | 'saturday' | 'sunday' }) => {
  // 활동 유형에 따른 색상 구분
  const activityColors = {
    식사: 'bg-orange-100 border-l-4 border-orange-400',
    학습: 'bg-blue-50 border-l-4 border-blue-400',
    휴식: 'bg-green-50 border-l-4 border-green-400',
    특강: 'bg-purple-50 border-l-4 border-purple-400',
    기타: 'bg-gray-50 border-l-4 border-gray-400',
  };

  // 활동 유형 결정 함수
  const getActivityType = (content: string) => {
    if (content.includes('식사') || content.includes('아침') || content.includes('점심') || content.includes('저녁')) return '식사';
    if (content.includes('쉬는') || content.includes('기상') || content.includes('강의장 입실')) return '휴식';
    if (content.includes('특강')) return '특강';
    if (content.includes('자습') || content.includes('모의고사') || content.includes('오답') || content.includes('테스트')) return '학습';
    return '기타';
  };

  // 시간 문자열을 분으로 변환하는 함수
  const timeToMinutes = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // 시간 범위의 총 분 계산 함수
  const calculateDuration = (timeRange: string) => {
    if (!timeRange.includes('-')) return 0;
    
    const [startTime, endTime] = timeRange.split('-');
    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);
    
    // 만약 종료 시간이 시작 시간보다 이전이면 (다음날까지 이어지는 경우)
    return endMinutes < startMinutes 
      ? endMinutes + 24 * 60 - startMinutes 
      : endMinutes - startMinutes;
  };

  // 일정 아이템 타입 정의
  type ScheduleItem = {
    time: string;
    content: string;
    note: string;
  };

  // 처리된 일정 아이템 타입 정의
  type ProcessedScheduleItem = ScheduleItem & {
    duration: string;
  };

  // 시간대별 일정 그룹 타입 정의
  type TimeBlockGroups = {
    early: ScheduleItem[];
    morning: ScheduleItem[];
    afternoon: ScheduleItem[];
    evening: ScheduleItem[];
  };

  // 처리된 시간대별 일정 그룹 타입 정의
  type ProcessedTimeBlockGroups = {
    early: ProcessedScheduleItem[];
    morning: ProcessedScheduleItem[];
    afternoon: ProcessedScheduleItem[];
    evening: ProcessedScheduleItem[];
  };

  // 일정 데이터를 시간대별로 구조화
  const getScheduleByTimeBlocks = <T extends ScheduleItem>(scheduleData: T[]): {
    early: T[];
    morning: T[];
    afternoon: T[];
    evening: T[];
  } => {
    const result = {
      early: [] as T[],
      morning: [] as T[],
      afternoon: [] as T[],
      evening: [] as T[],
    };

    scheduleData.forEach(item => {
      const timeStart = item.time.split('-')[0] || item.time;
      const hour = parseInt(timeStart.split(':')[0]);

      if (hour < 8) {
        result.early.push(item);
      } else if (hour >= 8 && hour < 12) {
        result.morning.push(item);
      } else if (hour >= 12 && hour < 18) {
        result.afternoon.push(item);
      } else {
        result.evening.push(item);
      }
    });

    return result;
  };

  // 일정 데이터
  const schedules = {
    weekday: [
      { time: '6:30', content: '기상', note: '' },
      { time: '6:30-7:00', content: '강의장 입실', note: '' },
      { time: '7:00-7:50', content: '아침식사 (7:00~7:35 배식)', note: '50분' },
      { time: '7:50-8:00', content: '쉬는시간', note: '10분' },
      { time: '8:00-8:30', content: '영단어테스트', note: '30분' },
      { time: '8:30-8:40', content: '쉬는시간', note: '10분' },
      { time: '8:40-9:20', content: '국어 하프 모의고사', note: '40분' },
      { time: '9:20-10:00', content: '국어 모의고사 오답/분석', note: '40분' },
      { time: '10:00-10:10', content: '쉬는시간', note: '10분' },
      { time: '10:10-12:00', content: '수학 자습', note: '110분' },
      { time: '12:00-13:30', content: '점심식사, 체육활동', note: '90분' },
      { time: '13:30-14:00', content: '영어 하프 모의고사', note: '30분' },
      { time: '14:00-14:20', content: '영어 모의고사 오답/분석', note: '20분' },
      { time: '14:20-14:30', content: '쉬는시간', note: '10분' },
      { time: '14:30-15:25', content: '자습 + 과외(1)', note: '55분' },
      { time: '15:30-16:25', content: '자습 + 과외(2)', note: '55분' },
      { time: '16:30-18:00', content: '자습', note: '90분' },
      { time: '18:00-19:00', content: '저녁식사', note: '60분' },
      { time: '19:00-20:30', content: '특강 (월요일은 자습) / 자습', note: '90분' },
      { time: '20:40-21:00', content: '플래너 작성 (수학 오답테스트)', note: '20분' },
      { time: '21:00-23:00', content: '개인상담 및 자습', note: '120분' },
    ],
    saturday: [
      { time: '6:30', content: '기상', note: '' },
      { time: '6:30-7:00', content: '강의장 입실', note: '' },
      { time: '7:00-7:50', content: '아침식사 (7:00~7:35 배식)', note: '50분' },
      { time: '7:50-8:00', content: '쉬는시간', note: '10분' },
      { time: '8:00-8:30', content: '영단어테스트', note: '30분' },
      { time: '8:40-10:00', content: '국어 모의고사', note: '80분' },
      { time: '10:00-10:10', content: '쉬는시간', note: '10분' },
      { time: '10:10-11:50', content: '수학 모의고사', note: '100분' },
      { time: '11:50-13:10', content: '점심식사', note: '80분' },
      { time: '13:10-14:20', content: '영어 모의고사', note: '70분' },
      { time: '14:30-16:20', content: '모의고사 오답', note: '110분' },
      { time: '16:30-18:00', content: '특강 1차시', note: '90분' },
      { time: '18:00-19:00', content: '저녁식사', note: '60분' },
      { time: '19:00-20:30', content: '특강 2차시', note: '90분' },
      { time: '20:40-21:00', content: '자습 (수학 오답테스트)', note: '20분' },
      { time: '21:00-23:00', content: '개인상담', note: '120분' },
    ],
    sunday: [
      { time: '7:30', content: '기상', note: '' },
      { time: '8:00-8:50', content: '아침식사 (8:00-8:30 배식)', note: '50분' },
      { time: '9:00-12:00', content: '주제탐구보고서-필수', note: '180분' },
      { time: '12:00-13:30', content: '점심식사', note: '90분' },
      { time: '13:30-14:25', content: '주간영단어테스트', note: '55분' },
      { time: '14:30-15:25', content: '수학 주간 오답테스트', note: '55분' },
      { time: '15:30-16:25', content: '자습', note: '55분' },
      { time: '16:30-17:25', content: '자습', note: '55분' },
      { time: '17:30-18:00', content: '자습', note: '30분' },
      { time: '18:00-19:00', content: '저녁식사', note: '60분' },
      { time: '19:00-20:50', content: '소감문 작성 + 다음주 계획 세우기', note: '110분' },
      { time: '21:00-23:00', content: '개인상담', note: '120분' },
    ],
  };

  // 일정 데이터에 시간 계산 추가
  const processedSchedules = {
    weekday: schedules.weekday.map(item => ({
      ...item,
      duration: item.note || (item.time.includes('-') ? `${calculateDuration(item.time)}분` : '')
    })),
    saturday: schedules.saturday.map(item => ({
      ...item,
      duration: item.note || (item.time.includes('-') ? `${calculateDuration(item.time)}분` : '')
    })),
    sunday: schedules.sunday.map(item => ({
      ...item,
      duration: item.note || (item.time.includes('-') ? `${calculateDuration(item.time)}분` : '')
    })),
  };

  // 총 시간 계산 함수
  const calculateTotalTime = (activities: string, items: Array<{ time: string; content: string; note: string }>) => {
    let total = 0;
    items.forEach(item => {
      if (item.content.toLowerCase().includes(activities.toLowerCase()) && item.note) {
        const minutes = parseInt(item.note.replace(/[^0-9]/g, ''));
        if (!isNaN(minutes)) total += minutes;
      }
    });
    return total;
  };

  // 하루 일정 요약 정보
  const getDaySummary = (daySchedule: Array<{ time: string; content: string; note: string }>) => {
    const studyTime = calculateTotalTime('자습', daySchedule) + 
                      calculateTotalTime('모의고사', daySchedule) + 
                      calculateTotalTime('테스트', daySchedule) +
                      calculateTotalTime('오답', daySchedule);
    
    const mealTime = calculateTotalTime('식사', daySchedule);
    const lectureTime = calculateTotalTime('특강', daySchedule);
    
    const wakeupTime = daySchedule[0].time;
    const lastActivity = daySchedule[daySchedule.length - 1];
    const bedtime = lastActivity.time.includes('-') 
                  ? lastActivity.time.split('-')[1] 
                  : '23:00';
    
    return {
      wakeupTime,
      bedtime,
      studyTime,
      mealTime,
      lectureTime
    };
  };

  const timeBlocks = getScheduleByTimeBlocks(schedules[day]);
  const summary = getDaySummary(schedules[day]);
  const processedTimeBlocks = getScheduleByTimeBlocks(processedSchedules[day]);

  // 시간대별 일정표 구성요소
  const TimeBlockSection = ({ title, items, icon }: 
    { title: string; items: ProcessedScheduleItem[]; icon: string }) => (
    <div className="mb-6">
      <h3 className="text-base font-bold mb-3 flex items-center">
        <span className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">{icon}</span>
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item, idx) => {
          const activityType = getActivityType(item.content);
          return (
            <div key={idx} className={`p-3 rounded-md ${activityColors[activityType as keyof typeof activityColors]}`}>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="font-semibold text-gray-800 min-w-24 mb-1 sm:mb-0">{item.time}</div>
                <div className="flex-1">
                  <div className="font-medium">{item.content}</div>
                  <div className="flex justify-between items-center mt-1">
                    {/* 모바일에서는 아래에 표시 */}
                    <div className="text-xs text-gray-500 sm:hidden">
                      {item.duration && (
                        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    {/* 데스크톱에서는 오른쪽에 표시 */}
                    <div className="hidden sm:block">
                      {item.duration && (
                        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                          {item.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // 모바일 및 데스크톱용 시간표 뷰
  const ScheduleView = () => (
    <div>
      {/* 일정 요약 정보 */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">일일 일정 요약</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">기상시간</div>
            <div className="font-bold text-lg text-gray-800">{summary.wakeupTime}</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">취침시간</div>
            <div className="font-bold text-lg text-gray-800">{summary.bedtime}</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">학습시간</div>
            <div className="font-bold text-lg text-blue-600">{Math.floor(summary.studyTime / 60)}시간 {summary.studyTime % 60}분</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <div className="text-xs text-gray-500">식사시간</div>
            <div className="font-bold text-lg text-orange-600">{Math.floor(summary.mealTime / 60)}시간 {summary.mealTime % 60}분</div>
          </div>
          <div className="bg-white p-3 rounded-md shadow-sm md:col-span-1">
            <div className="text-xs text-gray-500">특강시간</div>
            <div className="font-bold text-lg text-purple-600">{Math.floor(summary.lectureTime / 60)}시간 {summary.lectureTime % 60}분</div>
          </div>
        </div>
      </div>

      {/* 활동 유형 범례 */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
        <div className="text-sm font-medium ml-1 mr-2">활동 유형:</div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-400 rounded-sm mr-1"></div>
          <span className="text-xs text-gray-700">학습</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-400 rounded-sm mr-1"></div>
          <span className="text-xs text-gray-700">식사</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded-sm mr-1"></div>
          <span className="text-xs text-gray-700">휴식</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-400 rounded-sm mr-1"></div>
          <span className="text-xs text-gray-700">특강</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-400 rounded-sm mr-1"></div>
          <span className="text-xs text-gray-700">기타</span>
        </div>
      </div>

      {/* 시간대별 일정표 */}
      <div className="space-y-4">
        {processedTimeBlocks.early.length > 0 && (
          <TimeBlockSection title="이른 아침" items={processedTimeBlocks.early} icon="🌅" />
        )}
        {processedTimeBlocks.morning.length > 0 && (
          <TimeBlockSection title="오전" items={processedTimeBlocks.morning} icon="☀️" />
        )}
        {processedTimeBlocks.afternoon.length > 0 && (
          <TimeBlockSection title="오후" items={processedTimeBlocks.afternoon} icon="🌤️" />
        )}
        {processedTimeBlocks.evening.length > 0 && (
          <TimeBlockSection title="저녁" items={processedTimeBlocks.evening} icon="🌙" />
        )}
      </div>
    </div>
  );

  return (
    <div className="overflow-x-auto">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-0">
        <ScheduleView />
      </div>
    </div>
  );
};

export default HighSchoolSchedule; 