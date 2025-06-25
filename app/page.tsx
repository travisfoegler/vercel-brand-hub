import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Upload, 
  Palette, 
  Grid, 
  Type,
  Copy,
  Eye,
  CheckCircle,
  Star,
  ArrowRight 
} from 'lucide-react'

function HeroSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-heading-72 text-gray-10">
          Geist Design System
        </h1>
        <p className="text-copy-20 text-gray-9 max-w-2xl">
          Vercel design system for building consistent web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {/* Brand Assets */}
        <Link 
          href="/brands" 
          className="group p-6 bg-gray-1 border border-gray-4 rounded-geist-md hover:border-gray-6 transition-colors"
        >
          <div className="mb-4">
            <div className="w-12 h-12 bg-gray-2 rounded-md flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 19.777h20L12 2z" />
              </svg>
            </div>
          </div>
          <h3 className="text-label-16 font-medium text-gray-10 mb-2">
            Brand Assets
          </h3>
          <p className="text-copy-14 text-gray-9">
            Learn how to work with our brand assets.
          </p>
        </Link>

        {/* Icons */}
        <Link 
          href="/icons" 
          className="group p-6 bg-gray-1 border border-gray-4 rounded-geist-md hover:border-gray-6 transition-colors"
        >
          <div className="mb-4 grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-6 rounded-sm" />
            ))}
          </div>
          <h3 className="text-label-16 font-medium text-gray-10 mb-2">
            Icons
          </h3>
          <p className="text-copy-14 text-gray-9">
            Icon set tailored for developer tools.
          </p>
        </Link>

        {/* Components */}
        <Link 
          href="/button" 
          className="group p-6 bg-gray-1 border border-gray-4 rounded-geist-md hover:border-gray-6 transition-colors"
        >
          <div className="mb-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-copy-13-mono text-gray-9">$ npm init next-app</span>
              <Button size="small" variant="ghost" svgOnly>
                <Copy className="w-3 h-3" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button size="small" variant="secondary">
                <Star className="w-3 h-3" />
                Collaborate
              </Button>
              <Button size="small" variant="ghost" svgOnly>
                <Eye className="w-3 h-3" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="radio" 
                checked 
                readOnly
                className="w-4 h-4" 
              />
              <input 
                type="text" 
                placeholder="Not a real input!" 
                className="px-2 py-1 text-copy-13 bg-gray-2 border border-gray-4 rounded"
                readOnly
              />
            </div>
          </div>
          <h3 className="text-label-16 font-medium text-gray-10 mb-2">
            Components
          </h3>
          <p className="text-copy-14 text-gray-9">
            Building blocks for React applications.
          </p>
        </Link>

        {/* Colors */}
        <Link 
          href="/colors" 
          className="group p-6 bg-gray-1 border border-gray-4 rounded-geist-md hover:border-gray-6 transition-colors"
        >
          <div className="mb-4 flex items-center gap-2">
            {[
              'bg-blue-6',
              'bg-purple-6', 
              'bg-red-6',
              'bg-amber-6',
              'bg-green-6',
              'bg-teal-6',
              'bg-pink-6'
            ].map((color, i) => (
              <div key={i} className={`w-6 h-12 ${color} rounded`} />
            ))}
          </div>
          <h3 className="text-label-16 font-medium text-gray-10 mb-2">
            Colors
          </h3>
          <p className="text-copy-14 text-gray-9">
            A high contrast, accessible color system.
          </p>
        </Link>

        {/* Grid */}
        <Link 
          href="/grid" 
          className="group p-6 bg-gray-1 border border-gray-4 rounded-geist-md hover:border-gray-6 transition-colors"
        >
          <div className="mb-4">
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-8 bg-gray-3 rounded" />
              ))}
            </div>
          </div>
          <h3 className="text-label-16 font-medium text-gray-10 mb-2">
            Grid
          </h3>
          <p className="text-copy-14 text-gray-9">
            A huge part of the new Vercel aesthetic.
          </p>
        </Link>

        {/* Typography */}
        <Link 
          href="/typography" 
          className="group p-6 bg-gray-1 border border-gray-4 rounded-geist-md hover:border-gray-6 transition-colors"
        >
          <div className="mb-4 space-y-2">
            <div className="text-heading-20 font-sans">Geist Sans</div>
            <div className="text-label-14-mono">Geist Mono</div>
          </div>
          <h3 className="text-label-16 font-medium text-gray-10 mb-2">
            Typeface
          </h3>
          <p className="text-copy-14 text-gray-9">
            Specifically designed for developers and designers.
          </p>
        </Link>
      </div>
    </div>
  )
}

function FeedbackSection() {
  return (
    <div className="border-t border-gray-4 pt-8 mt-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-label-14 text-gray-9">Give feedback</span>
          <div className="flex items-center gap-2">
            {['😍', '😐', '😕', '😞'].map((emoji, i) => (
              <button
                key={i}
                className="w-8 h-8 hover:bg-gray-2 rounded transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder=""
            className="px-3 py-1 bg-gray-1 border border-gray-4 rounded text-copy-13"
          />
          <Button size="small">Send</Button>
        </div>
        
        <Link 
          href="/colors"
          className="flex items-center gap-2 text-label-14 text-gray-9 hover:text-gray-10 transition-colors"
        >
          Next Colors
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto p-8">
      <HeroSection />
      <FeedbackSection />
    </div>
  )
} 