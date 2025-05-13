import React from 'react';

const HighSchoolSchedule = ({ day }: { day: 'weekday' | 'saturday' | 'sunday' }) => {
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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-3 px-4 text-left border-b border-gray-300 w-1/4">시간</th>
            <th className="py-3 px-4 text-left border-b border-gray-300 w-1/2">학습내용</th>
            <th className="py-3 px-4 text-left border-b border-gray-300 w-1/4">비고</th>
          </tr>
        </thead>
        <tbody>
          {schedules[day].map((item, index) => (
            <tr 
              key={index} 
              className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
            >
              <td className="py-3 px-4 text-gray-700">{item.time}</td>
              <td className="py-3 px-4 text-gray-700">{item.content}</td>
              <td className="py-3 px-4 text-gray-700">{item.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighSchoolSchedule; 