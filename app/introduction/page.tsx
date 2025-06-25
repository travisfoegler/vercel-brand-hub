import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function IntroductionPage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto p-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-heading-32 text-gray-10">
            Geist Design System
          </h1>
          <p className="text-copy-16 text-gray-9 max-w-2xl">
            Vercel design system for building consistent web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <button className="p-1 hover:bg-gray-2 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-gray-3 border border-gray-4 rounded text-copy-13 hover:bg-gray-4 transition-colors">
                  Collaborate
                </button>
                <button className="p-1 hover:bg-gray-2 rounded">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" checked readOnly className="w-4 h-4" />
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

      {/* Feedback Section */}
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
            <button className="px-3 py-1 bg-gray-10 text-gray-1 rounded text-copy-13 hover:bg-gray-9 transition-colors">
              Send
            </button>
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
    </div>
  )
} 