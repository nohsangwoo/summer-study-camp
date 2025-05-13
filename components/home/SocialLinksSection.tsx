import Image from "next/image"
import Link from "next/link"

export const SocialLinksSection = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container">
        <div className="flex justify-center gap-6">
          <Link href="https://pf.kakao.com" target="_blank" rel="noopener noreferrer">
            <div className="p-4 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors shadow-md flex items-center gap-3">
              <Image src="/kakaotalk-icon.png" alt="카카오톡 채널" width={32} height={32} className="rounded-md" />
              <span className="font-medium text-gray-800">카카오톡 채널</span>
            </div>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="p-4 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-colors shadow-md flex items-center gap-3">
              <Image src="/instagram-icon.png" alt="인스타그램" width={32} height={32} className="rounded-md" />
              <span className="font-medium text-white">인스타그램</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
} 