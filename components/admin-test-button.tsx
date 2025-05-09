"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function AdminTestButton() {
  return (
    <div className="fixed top-4 left-4 z-[9999]">
      <Link href="/admin">
        <Button
          className="bg-red-500 hover:bg-red-600 text-white font-bold flex items-center gap-2 shadow-lg border-2 border-red-300 relative"
          size="sm"
        >
          <Settings className="h-4 w-4" />
          <span>관리자 테스트</span>
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black px-1.5 py-0.5 rounded-full font-bold animate-pulse">
            TEST
          </span>
        </Button>
      </Link>
    </div>
  )
}
