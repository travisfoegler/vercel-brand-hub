import React from 'react'

interface VercelLogoProps {
  className?: string
  size?: number
}

export function VercelLogo({ className, size = 24 }: VercelLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2L2 19.777h20L12 2z"
        fill="currentColor"
      />
    </svg>
  )
} 