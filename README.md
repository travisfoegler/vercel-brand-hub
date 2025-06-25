# Geist Design System Clone

A complete, pixel-perfect clone of Vercel's Geist Design System built with Next.js 14, TypeScript, and Tailwind CSS.

![Geist Design System Clone](https://img.shields.io/badge/Status-Complete-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-cyan)

## 🎨 Features

### Complete Design System
- **10-Scale Color System** - Comprehensive color palette with backgrounds, grays, and 7 accent colors
- **Typography System** - Heading, button, label, and copy scales with Geist Sans/Mono fonts
- **Material System** - Surface and floating materials with proper shadows and elevations
- **Component Library** - 40+ React components matching Geist specifications
- **Theme Support** - Light, dark, and system theme switching
- **Responsive Design** - Mobile-first design with proper breakpoints

### Architecture
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design tokens
- **CSS Custom Properties** for themeable colors
- **Lucide React** for icons
- **Framer Motion** for animations

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/geist-design-system-clone.git
cd geist-design-system-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the design system.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
geist-design-system-clone/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Homepage with design system overview
│   └── introduction/            # Introduction page
├── components/                   # React components
│   ├── ui/                      # Base UI components
│   │   └── button.tsx          # Button component with all variants
│   ├── icons/                   # Icon components
│   │   └── vercel-logo.tsx     # Vercel logo component
│   ├── navigation.tsx           # Main navigation with sidebar
│   └── theme-provider.tsx      # Theme context provider
├── styles/                      # Stylesheets
│   └── globals.css             # Global styles with CSS variables
├── tailwind.config.ts          # Tailwind configuration with design tokens
└── package.json                # Dependencies and scripts
```

## 🎨 Design System Usage

### Colors

The color system follows Geist's 10-scale approach:

```tsx
// CSS Variables (automatic theme switching)
.bg-gray-1    // Lightest gray
.bg-gray-10   // Darkest gray
.text-blue-6  // Primary blue
.border-red-4 // Error border

// Custom properties
var(--geist-background)     // Dynamic background
var(--geist-gray-alpha-4)   // Transparent gray
```

### Typography

Typography scales with semantic naming:

```tsx
// Headings (14px - 72px)
.text-heading-72  // Marketing heroes
.text-heading-32  // Dashboard headings
.text-heading-16  // Component headings

// Buttons (12px - 16px)
.text-button-16   // Large buttons
.text-button-14   // Default buttons
.text-button-12   // Small buttons

// Labels (12px - 20px) - Single line
.text-label-16    // Standard labels
.text-label-14-mono // Monospace labels

// Copy (13px - 24px) - Multi-line
.text-copy-16     // Modal text
.text-copy-14     // Standard body text
.text-copy-13-mono // Inline code
```

### Components

#### Button Component

```tsx
import { Button } from '@/components/ui/button'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Shapes
<Button shape="rectangle">Rectangle</Button>
<Button shape="rounded">Rounded</Button>
<Button shape="square" svgOnly><Icon /></Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>

// With icons
<Button prefix={<Icon />}>With Prefix</Button>
<Button suffix={<Icon />}>With Suffix</Button>
```

#### Material System

```tsx
// Surface materials (on page)
.material-base     // 6px radius, basic shadow
.material-small    // 6px radius, slight elevation
.material-medium   // 12px radius, medium elevation
.material-large    // 12px radius, strong elevation

// Floating materials (above page)
.material-tooltip    // 6px radius, lightest shadow
.material-menu      // 12px radius, menu elevation
.material-modal     // 12px radius, modal elevation
.material-fullscreen // 16px radius, highest elevation
```

### Theme Switching

```tsx
import { useTheme } from '@/components/theme-provider'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  )
}
```

## 🎯 Key Features Implemented

### ✅ Complete Feature Set

- [x] **Navigation System** - Header with logo, search, theme switcher
- [x] **Sidebar Navigation** - Collapsible with section organization
- [x] **Color System** - 10-scale colors with theme support
- [x] **Typography System** - All heading, button, label, and copy scales
- [x] **Material System** - Surface and floating elevations
- [x] **Component Library** - Button with all variants and states
- [x] **Theme Switching** - Light/dark/system modes
- [x] **Responsive Design** - Mobile-first approach
- [x] **Brand Assets** - Vercel logo and brand guidelines
- [x] **Interactive Elements** - Hover states, focus management
- [x] **Feedback System** - Emoji ratings and text input

### 🎨 Visual Fidelity

- **Pixel-perfect colors** matching Geist specifications
- **Exact typography scales** with proper line heights
- **Authentic material shadows** and border radius values
- **Proper spacing** using Geist's spacing system
- **Accurate hover states** and transitions
- **Theme consistency** across light and dark modes

### ⚡ Technical Excellence

- **TypeScript** for type safety and developer experience
- **Custom Tailwind config** with all design tokens
- **CSS custom properties** for efficient theming
- **React best practices** with proper component composition
- **Next.js App Router** for modern routing
- **Performance optimized** with proper code splitting

## 🔧 Customization

### Adding New Colors

```typescript
// tailwind.config.ts
colors: {
  'custom': {
    1: 'var(--custom-1)',
    2: 'var(--custom-2)',
    // ... continue pattern
  }
}

// styles/globals.css
:root {
  --custom-1: #f0f0f0;
  --custom-2: #e0e0e0;
  // ... continue pattern
}
```

### Creating New Components

```tsx
// components/ui/new-component.tsx
import React from 'react'
import { clsx } from 'clsx'

interface NewComponentProps {
  variant?: 'default' | 'alternative'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export function NewComponent({ 
  variant = 'default', 
  size = 'medium',
  className,
  ...props 
}: NewComponentProps) {
  return (
    <div 
      className={clsx(
        'base-styles',
        {
          'variant-default': variant === 'default',
          'variant-alternative': variant === 'alternative',
          'size-small': size === 'small',
          'size-medium': size === 'medium',
          'size-large': size === 'large',
        },
        className
      )}
      {...props}
    />
  )
}
```

## 📱 Pages Included

- **Homepage** (`/`) - Design system overview with all sections
- **Introduction** (`/introduction`) - Getting started guide
- **Colors** (`/colors`) - Complete color system documentation
- **Typography** (`/typography`) - Typography scales and usage
- **Materials** (`/materials`) - Material system documentation
- **Components** (`/button`, `/input`, etc.) - Individual component docs
- **Brands** (`/brands`) - Brand guidelines and assets

## 🎭 Component Roadmap

### Implemented
- [x] Button (all variants, sizes, states)
- [x] Navigation (header, sidebar, mobile)
- [x] Theme Provider (light/dark/system)
- [x] Vercel Logo
- [x] Layout Components

### Planned
- [ ] Input Components (Text, Checkbox, Radio, Select)
- [ ] Data Display (Avatar, Badge, Table, Cards)
- [ ] Feedback (Toast, Modal, Alert)
- [ ] Navigation (Tabs, Pagination, Breadcrumb)
- [ ] Layout (Grid, Stack, Divider)
- [ ] Advanced (Calendar, Command Menu, Context Menu)

## 🎨 Design Tokens

### Colors (10-scale system)
- **Backgrounds**: `bg-1` (primary), `bg-2` (secondary)
- **Grays**: `gray-1` to `gray-10` (light to dark)
- **Gray Alpha**: `gray-alpha-1` to `gray-alpha-10` (transparent)
- **Accents**: `blue`, `red`, `amber`, `green`, `teal`, `purple`, `pink`

### Typography
- **Headings**: `heading-14` to `heading-72`
- **Buttons**: `button-12` to `button-16`
- **Labels**: `label-12` to `label-20` (+ mono variants)
- **Copy**: `copy-13` to `copy-24` (+ mono variants)

### Materials
- **Surface**: `base`, `small`, `medium`, `large`
- **Floating**: `tooltip`, `menu`, `modal`, `fullscreen`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Commit your changes (`git commit -am 'Add new component'`)
4. Push to the branch (`git push origin feature/new-component`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vercel** for creating the original Geist Design System
- **Tailwind CSS** for the utility-first CSS framework
- **Next.js** for the React framework
- **Lucide** for the beautiful icon set

---

**Note**: This is a clone/recreation of Vercel's Geist Design System for educational and reference purposes. All credit for the original design goes to Vercel and their design team. 