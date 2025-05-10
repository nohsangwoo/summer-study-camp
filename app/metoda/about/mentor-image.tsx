"use client"

import Image from "next/image"
import { useState } from "react"

interface MentorImageProps {
  src: string
  alt: string
}

export default function MentorImage({ src, alt }: MentorImageProps) {
  const [error, setError] = useState(false)

  return (
    <Image
      src={error ? "/diverse-group.png" : src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setError(true)}
    />
  )
} 