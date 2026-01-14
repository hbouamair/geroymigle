# Gero & Miglė - Bachata Dance Platform

A modern, beautiful website for Gero & Miglė's bachata dance teaching platform, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern 2026 Design** - Beautiful gradient effects, glass morphism, and smooth animations
- **Fully Responsive** - Works perfectly on all devices
- **Fast Performance** - Built with Next.js 14 App Router
- **Smooth Animations** - Powered by Framer Motion
- **Custom Styling** - Tailwind CSS with custom gradients and effects
- **Accessible** - Semantic HTML and ARIA labels

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features section
│   ├── About.tsx       # About section
│   ├── Methodology.tsx # Methodology section
│   └── Footer.tsx      # Footer with social links
└── public/             # Static assets (add your images here)
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The current design uses:
- Primary: Purple gradient
- Accent: Pink gradient
- Background: Dark slate with purple tones

### Content

Update the content in each component file to match your needs:
- `components/Hero.tsx` - Main hero section
- `components/Features.tsx` - Platform features
- `components/About.tsx` - About section
- `components/Methodology.tsx` - Teaching methodology

### Images

Add your images to the `public/` folder and update the image references in the components.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

© 2024 Gero & Miglė. All rights reserved.

