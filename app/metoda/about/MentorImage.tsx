"use client"

import { useState } from "react"
import Image from "next/image"

export default function MentorImage({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  
  return (
    <Image
      src={imgSrc || "/placeholder.svg?height=128&width=128&query=person"}
      alt={alt}
      fill
      className="object-cover"
      sizes={sizes}
      onError={() => setImgSrc("/diverse-group.png")}
    />
  )
} 