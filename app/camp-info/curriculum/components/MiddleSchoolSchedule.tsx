import React from 'react';

const MiddleSchoolSchedule = ({ day }: { day: 'weekday' | 'saturday' | 'sunday' }) => {
  const schedules = {
    weekday: [
      { time: '6:30', content: '기상', note: '' },
      { time: '6:30-7:00', content: '강의장 입실', note: '' },
      { time: '7:00-7:50', content: '아침식사 (7:00~7:35 배식)', note: '50분' },
      { time: '7:50-8:00', content: '쉬는시간', note: '10분' },
      { time: '8:00-8:30', content: '영단어테스트', note: '30분' },
      { time: '8:40-9:35', content: '자습 + 과외(1) - 영어(상) 고급중급초급', note: '55분' },
      { time: '9:40-10:35', content: '자습 + 과외(2) - 영어(하)', note: '55분' },
      { time: '10:40-11:35', content: '자습 + 과외(3) - 영어(중)', note: '55분' },
      { time: '11:35-12:00', content: '자습', note: '25분' },
      { time: '12:00-13:30', content: '점심식사 + 체육활동', note: '90분' },
      { time: '13:30-14:25', content: '자습 + 과외(4)', note: '55분' },
      { time: '14:30-15:25', content: '독서A + 자습 + 과외(5)', note: '55분' },
      { time: '15:30-16:25', content: '독서B + 자습 + 과외(6)', note: '55분' },
      { time: '16:30-17:25', content: '자습 + 과외(7)', note: '55분' },
      { time: '17:25-18:00', content: '자습', note: '35분' },
      { time: '18:00-19:00', content: '저녁식사', note: '60분' },
      { time: '19:00-19:55', content: '자습 + 과외(8)', note: '55분' },
      { time: '20:00-20:55', content: '자습 + 과외(9)', note: '55분' },
      { time: '21:00-21:55', content: '자습 + 과외(10)', note: '55분' },
      { time: '22:00-22:55', content: '자습 + 과외(11)', note: '55분' },
      { time: '21:00-23:00', content: '개인상담 및 자습', note: '100분' },
    ],
    saturday: [
      { time: '6:30', content: '기상', note: '' },
      { time: '6:30-7:00', content: '강의장 입실', note: '' },
      { time: '7:00-7:50', content: '아침식사 (7:00~7:35 배식)', note: '50분' },
      { time: '7:50-8:00', content: '쉬는시간', note: '10분' },
      { time: '8:00-9:30', content: '주간영어단어테스트+채점+오답', note: '90분' },
      { time: '9:40-10:35', content: '주간영어테스트', note: '55분' },
      { time: '10:40-11:35', content: '주간수학테스트 -매쓰플랫 활용', note: '55분' },
      { time: '11:35-12:00', content: '주간테스트오답', note: '25분' },
      { time: '12:00-13:30', content: '점심식사', note: '90분' },
      { time: '13:30-14:25', content: '주간테스트 오답', note: '55분' },
      { time: '14:30-15:25', content: '주간수학오답문제테스트(자습)', note: '55분' },
      { time: '15:30-16:25', content: '주간수학오답문제테스트(자습)', note: '55분' },
      { time: '16:30-18:00', content: '특강 1차시(필수)', note: '90분' },
      { time: '18:00-19:00', content: '저녁식사', note: '60분' },
      { time: '19:00-20:30', content: '특강 2차시(필수)', note: '90분' },
      { time: '20:40-21:00', content: '자습', note: '20분' },
      { time: '21:00-23:00', content: '개인상담', note: '120분' },
    ],
    sunday: [
      { time: '7:30', content: '기상', note: '' },
      { time: '8:00-8:50', content: '아침식사 (8:00-8:30 배식)', note: '50분' },
      { time: '10:00', content: '강의장 입실 (이전까지는 자율)', note: '' },
      { time: '10:00-12:00', content: '시사토론', note: '120분' },
      { time: '12:00-13:30', content: '점심식사', note: '90분' },
      { time: '13:30-14:25', content: '자습 / 직업탐방', note: '55분' },
      { time: '14:30-15:25', content: '자습 / 직업탐방', note: '55분' },
      { time: '15:30-16:25', content: '자습 / 직업탐방', note: '55분' },
      { time: '16:30-17:25', content: '자습 / 직업탐방', note: '55분' },
      { time: '17:30-18:00', content: '직업탐방(보고서작성)', note: '30분' },
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

export default MiddleSchoolSchedule; 