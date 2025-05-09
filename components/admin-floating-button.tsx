"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function AdminFloatingButton() {
  return (
    <div
      className="fixed top-20 left-4 z-[9999]"
      style={{
        pointerEvents: "auto",
        position: "fixed",
        display: "block",
      }}
    >
      <Link href="/admin">
        <Button
          className="bg-red-500 hover:bg-red-600 text-white font-bold flex items-center gap-2 shadow-lg border-2 border-red-300 relative"
          style={{
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Settings className="h-4 w-4" />
          <span>관리자 테스트</span>
          <span
            className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black px-1.5 py-0.5 rounded-full font-bold animate-pulse"
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              backgroundColor: "#FBBF24",
              borderRadius: "9999px",
              padding: "2px 6px",
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "black",
              animation: "pulse 2s infinite",
            }}
          >
            TEST
          </span>
        </Button>
      </Link>
    </div>
  )
}
