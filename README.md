# VGAC Website

The official website for VGAC - GPU Cluster Queue Prediction Platform.

**Stop waiting. Start computing.**

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
vgac-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Homepage
│   └── components/
│       ├── Navigation.tsx   # Fixed header navigation
│       ├── Hero.tsx         # Main hero section
│       ├── Problems.tsx     # Pain points section
│       ├── Solution.tsx     # Product benefits
│       ├── HowItWorks.tsx   # 4-step process
│       ├── Metrics.tsx      # Key results/stats
│       ├── UseCases.tsx     # Target customers
│       ├── Blog.tsx         # Blog posts section
│       ├── Investors.tsx    # Investor pitch section
│       ├── CTA.tsx          # Email capture/contact
│       └── Footer.tsx       # Site footer
├── tailwind.config.ts       # Tailwind configuration
├── package.json
└── README.md
```

## 🎨 Design System

### Colors

- **Midnight** (Dark backgrounds): `#0a0a0f` → `#252532`
- **Electric** (Primary accent): `#00f5d4` - Cyan/Teal
- **Plasma** (Secondary accent): `#7b2cbf` - Purple
- **Flame** (Warning/Problem): `#ff6b35` / `#f72585` - Orange/Pink

### Typography

- **Display font**: Syne - Bold headers
- **Body font**: Outfit - Clean, modern text
- **Mono font**: JetBrains Mono - Code/technical elements

### Key Features

- Responsive design (mobile-first)
- Smooth scroll animations with Framer Motion
- Gradient text and glowing effects
- Glassmorphism card styles
- Grid pattern background

## 📝 Content Sections

1. **Hero**: Main value proposition + dashboard preview
2. **Problems**: Pain points GPU teams face
3. **Solution**: How VGAC solves them
4. **How It Works**: 4-step integration process
5. **Metrics**: Real results and impact
6. **Use Cases**: Enterprise, Research, Startups, Cloud
7. **Blog**: Thought leadership content
8. **Investors**: Market opportunity and pitch
9. **CTA**: Email capture and contact
10. **Footer**: Links and social

## 🔧 Customization

### Update Content

All content is hardcoded in components for easy editing:
- Company info: `Hero.tsx`, `Footer.tsx`
- Metrics/stats: `Metrics.tsx`
- Blog posts: `Blog.tsx`
- Use cases: `UseCases.tsx`
- Investor info: `Investors.tsx`

### Add New Sections

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to the component tree

## 📧 Contact

- Website: [vgac.ai](https://vgac.ai)
- Email: hello@vgac.ai
- Investors: investors@vgac.ai

