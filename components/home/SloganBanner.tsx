import { Sparkles } from "lucide-react"

export const SloganBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4">
      <div className="container">
        <div className="flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
          <p className="text-white font-medium text-center">
            "전교 1등의 비밀은 타고난 재능이 아닌 <span className="text-yellow-300 font-bold">올바른 공부습관</span>
            입니다"
          </p>
          <Sparkles className="h-5 w-5 text-yellow-300 ml-2" />
        </div>
      </div>
    </div>
  )
} 