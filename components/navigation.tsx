'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Sun, Moon, Monitor, Menu, X } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from './ui/button'
import { VercelLogo } from './icons/vercel-logo'

const foundationItems = [
  { name: 'Introduction', href: '/introduction' },
  { name: 'Colors', href: '/colors' },
  { name: 'Icons', href: '/icons' },
  { name: 'Typography', href: '/typography' },
  { name: 'Materials', href: '/materials' },
]

const resourceItems = [
  { name: 'Guidelines', href: '/guidelines', external: true },
  { name: 'Changelog', href: '/changelog', external: true },
]

const brandItems = [
  { name: 'Vercel', href: '/brands#vercel' },
  { name: 'Next.js', href: '/brands#next-js' },
  { name: 'Turbo', href: '/brands#turbo' },
  { name: 'v0', href: '/brands#v0' },
]

const componentItems = [
  'Avatar', 'Badge', 'Book', 'Button', 'Calendar', 'Checkbox', 'Choicebox', 
  'Code Block', 'Collapse', 'Combobox', 'Command Menu', 'Context Card', 
  'Context Menu', 'Description', 'Drawer', 'Empty State', 'Entity', 'Error',
  'Feedback', 'Gauge', 'Grid', 'Input', 'Keyboard Input', 'Loading Dots',
  'Material', 'Menu', 'Modal', 'Note', 'Pagination', 'Pill', 'Progress',
  'Project Banner', 'Radio', 'Relative Time Card', 'Scroller', 'Select',
  'Show more', 'Skeleton', 'Slider', 'Snippet', 'Spinner', 'Split Button',
  'Stack', 'Status Dot', 'Switch', 'Table', 'Tabs', 'Text', 'Textarea',
  'Theme Switcher', 'Toast', 'Toggle', 'Tooltip'
]

function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()

  const getThemeIcon = () => {
    if (theme === 'system') {
      return <Monitor className="w-4 h-4" />
    }
    return theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />
  }

  return (
    <div className="flex items-center gap-2 p-2 rounded-md bg-gray-2">
      <span className="text-label-13 text-gray-9">Select a display theme:</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setTheme('system')}
          className={`flex items-center gap-1 px-2 py-1 rounded text-label-12 transition-colors ${
            theme === 'system' 
              ? 'bg-gray-1 text-gray-10' 
              : 'text-gray-8 hover:text-gray-10'
          }`}
        >
          <Monitor className="w-3 h-3" />
          system
        </button>
        <button
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1 px-2 py-1 rounded text-label-12 transition-colors ${
            theme === 'light' 
              ? 'bg-gray-1 text-gray-10' 
              : 'text-gray-8 hover:text-gray-10'
          }`}
        >
          <Sun className="w-3 h-3" />
          light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1 px-2 py-1 rounded text-label-12 transition-colors ${
            theme === 'dark' 
              ? 'bg-gray-1 text-gray-10' 
              : 'text-gray-8 hover:text-gray-10'
          }`}
        >
          <Moon className="w-3 h-3" />
          dark
        </button>
      </div>
    </div>
  )
}

function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen border-r border-gray-4 bg-bg-1 overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Foundations */}
        <div>
          <h3 className="text-label-14 font-medium text-gray-10 mb-3">
            Foundations
          </h3>
          <nav className="space-y-1">
            {foundationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-label-14 rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-gray-3 text-gray-10'
                    : 'text-gray-9 hover:text-gray-10 hover:bg-gray-2'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-label-14 font-medium text-gray-10 mb-3">
            Resources
          </h3>
          <nav className="space-y-1">
            {resourceItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 text-label-14 text-gray-9 hover:text-gray-10 hover:bg-gray-2 rounded-md transition-colors"
              >
                {item.name}
                {item.external && (
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H7.29289L3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355C3.34171 9.04882 3.65829 9.04882 3.85355 8.85355L8 4.70711V8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5V3.5C9 3.22386 8.77614 3 8.5 3H3.5Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-label-14 font-medium text-gray-10 mb-3">
            Brands
          </h3>
          <nav className="space-y-1">
            {brandItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 text-label-14 text-gray-9 hover:text-gray-10 hover:bg-gray-2 rounded-md transition-colors"
              >
                <div className="w-4 h-4 bg-gray-6 rounded-sm" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Components */}
        <div>
          <h3 className="text-label-14 font-medium text-gray-10 mb-3">
            Components
          </h3>
          <nav className="space-y-1">
            {componentItems.map((item) => {
              const href = `/${item.toLowerCase().replace(/\s+/g, '-')}`
              return (
                <Link
                  key={item}
                  href={href}
                  className={`block px-3 py-2 text-label-14 rounded-md transition-colors ${
                    pathname === href
                      ? 'bg-gray-3 text-gray-10'
                      : 'text-gray-9 hover:text-gray-10 hover:bg-gray-2'
                  }`}
                >
                  {item}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </aside>
  )
}

export function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-4 bg-bg-1/80 backdrop-blur-md">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-2 rounded-md transition-colors"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
            
            <Link href="/" className="flex items-center gap-2">
              <VercelLogo className="w-6 h-6" />
              <span className="text-label-16 font-medium">Geist Design System</span>
            </Link>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-gray-8"
            >
              <Search className="w-4 h-4" />
              Search Geist ⌘ K
            </Button>
          </div>

          <ThemeToggle />
        </div>
      </header>

      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black/20" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-16 bottom-0 w-64 bg-bg-1 border-r border-gray-4">
            <Sidebar />
          </div>
        </div>
      )}
    </>
  )
} 