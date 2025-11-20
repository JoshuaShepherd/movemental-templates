# Design Game - Movemental

A Next.js application for experimenting with different design styles from the Modern Web Design Guide. Each design implementation is self-contained and can be archived with its own distinct style.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the Design Game.

## How It Works

1. **Choose Design Style**: Pick from 6 current design styles:
   - Content-First Minimalism
   - Bold Typography with Contrast
   - Subtle Glassmorphism
   - Dark Mode with High Contrast
   - Gradient Meshes
   - Micro-Interactions & Motion

2. **Choose Content**: Select from predefined content prompts or use custom content

3. **View Implementation**: See the design implemented with the chosen content

4. **Evaluate**: Review the implementation with automated evaluation metrics

5. **Archive**: If you like it, archive the design to preserve it with its own distinct style

## Architecture

### Scoped Styles

Each archived design maintains its own isolated styles using CSS Modules. This means:
- Global `globals.css` doesn't affect archived designs
- Each archived design can have its own color scheme, typography, and layout
- Designs can coexist without style conflicts

### Structure

```
app/
├── app/
│   ├── page.tsx              # Design Game home
│   ├── design/[style]/       # Live design implementations
│   └── archive/              # Archived designs (scoped styles)
├── components/
│   ├── DesignGame.tsx        # Main game interface
│   ├── DesignImplementation.tsx  # Wrapper for design components
│   ├── DesignEvaluation.tsx  # Evaluation panel
│   └── designs/              # Individual design implementations
└── lib/
    └── designData.ts         # Design styles and content prompts
```

## Adding New Designs

1. Create a new component in `components/designs/`
2. Export it as a named export matching the style ID
3. Add the style to `lib/designData.ts`
4. Import and add to `designComponents` in `DesignImplementation.tsx`

## Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **ShadCN UI** - Component library
- **CSS Modules** - Scoped styles for archived designs

## Design Philosophy

This app follows the **MAYA (Most Advanced Yet Acceptable)** principle:
- Designs are current and fashionable
- Content leads, design supports
- Each design is implementable and scalable
- Styles are distinct but not avant-garde

## Archive System

When a design is archived:
1. It's moved to `/archive/[id]`
2. It gets its own CSS Module for scoped styling
3. It maintains its original implementation
4. It's accessible independently of the main game
# movemental-templates
