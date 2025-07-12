# Modern Next.js Website

A modern website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ⚡ Next.js 13+ with App Router
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📦 shadcn/ui components
- 📱 Responsive design
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To create a production build:

```bash
pnpm build
```

### Production

To start the production server:

```bash
pnpm start
```

## Deployment

This project is ready to be deployed on Vercel. Simply push to your repository and import the project on Vercel for automatic deployments.

## Project Structure

```
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── navigation/  # Navigation components
│   └── lib/             # Utility functions
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
