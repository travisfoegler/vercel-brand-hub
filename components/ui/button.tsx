'use client'

import React from 'react'
import { clsx } from 'clsx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'small' | 'medium' | 'large'
  shape?: 'rectangle' | 'rounded' | 'square'
  loading?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  shadow?: boolean
  svgOnly?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'medium',
      shape = 'rectangle',
      loading = false,
      disabled,
      prefix,
      suffix,
      shadow = false,
      svgOnly = false,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    const baseStyles = clsx(
      // Base styles
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-6',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Shape styles
      {
        'rounded-md': shape === 'rectangle',
        'rounded-full': shape === 'rounded',
        'rounded-md aspect-square': shape === 'square' || svgOnly,
      },
      
      // Size styles
      {
        'h-8 px-3 text-button-12': size === 'small',
        'h-10 px-4 text-button-14': size === 'medium',
        'h-12 px-6 text-button-16': size === 'large',
      },
      
      // SVG only styles
      {
        'w-8 px-0': svgOnly && size === 'small',
        'w-10 px-0': svgOnly && size === 'medium',
        'w-12 px-0': svgOnly && size === 'large',
      },
      
      // Shadow
      {
        'shadow-sm': shadow,
      }
    )

    const variantStyles = clsx({
      // Primary variant
      'bg-gray-10 text-gray-1 hover:bg-gray-9 active:bg-gray-8': 
        variant === 'primary' && !isDisabled,
      
      // Secondary variant
      'bg-gray-3 text-gray-10 hover:bg-gray-4 active:bg-gray-5 border border-gray-4': 
        variant === 'secondary' && !isDisabled,
      
      // Ghost variant
      'bg-transparent text-gray-9 hover:bg-gray-2 hover:text-gray-10 active:bg-gray-3': 
        variant === 'ghost' && !isDisabled,
      
      // Outline variant
      'bg-transparent text-gray-10 border border-gray-4 hover:bg-gray-2 active:bg-gray-3': 
        variant === 'outline' && !isDisabled,
    })

    return (
      <button
        className={clsx(baseStyles, variantStyles, className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="w-4 h-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && prefix}
        {!svgOnly && children}
        {!loading && suffix}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button } 