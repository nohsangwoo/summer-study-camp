export const StatsSection = () => {
  return (
    <div className="py-10 md:py-16 bg-gradient-to-r from-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-bg.png')] bg-repeat"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">캠프 성과</h2>
          <p className="text-base md:text-lg text-blue-200 max-w-3xl mx-auto px-2 md:px-0">
            전일공 캠프의 체계적인 프로그램을 통해 많은 학생들이 꿈을 이루었습니다.
          </p>
        </div>

        {/* 새로운 슬로건 추가 */}
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg border border-white/20">
            <p className="text-white font-medium">
              "전교1등 공부습관캠프, <span className="text-yellow-300 font-bold">결과로 증명</span>합니다"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/20">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-yellow-300 mb-0 md:mb-2">98%</h3>
            <p className="text-center text-blue-100 text-xs md:text-base">학습 만족도</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/20">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-yellow-300 mb-0 md:mb-2">85%</h3>
            <p className="text-center text-blue-100 text-xs md:text-base">성적 향상률</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/20">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-yellow-300 mb-0 md:mb-2">92%</h3>
            <p className="text-center text-blue-100 text-xs md:text-base">목표 대학 합격률</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/20">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-yellow-300 mb-0 md:mb-2">1,200+</h3>
            <p className="text-center text-blue-100 text-xs md:text-base">누적 수료 학생</p>
          </div>
        </div>
      </div>
    </div>
  )
} 