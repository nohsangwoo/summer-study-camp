import Image from "next/image"
import { Download } from "lucide-react"

export default function ProgramGuideImage() {
  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-md">
        <Image
          src="/camp-program-guide.png"
          alt="캠프 프로그램 안내"
          width={800}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-tl-md">
          <Download className="h-3 w-3 inline mr-1" /> 안내 이미지
        </div>
      </div>
    </div>
  )
}
