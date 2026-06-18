# Webflow Prototype Starter Template

This is a template for building prototypes of Webflow UIs using realistic Spring Design System components. It is not intended for production use.

## Features

- Mock templates of both the Designer and Dashboard
- Realistic looking Spring components (themed shadcn components)
- [Style guide page](http://localhost:3000/style-guide) for Spring components

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## Customization

This template provides a minimal setup that you can easily customize:

1. Update the theme in `tailwind.config.js`
2. Modify the layout components in `src/components`
3. Add your own pages and components
4. Customize the navigation and mode switching functionality

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Root page
│   ├── globals.css          # Global styles
│   ├── dashboard/           # Dashboard routes
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── site/
│   │       └── settings/
│   ├── designer/            # Designer routes
│   ├── plan-tool/           # Plan tool routes
│   └── style-guide/         # Style guide routes
│       ├── layout.tsx
│       ├── page.tsx
│       └── components/
├── components/
│   ├── spring-ui/           # Spring Design System components
│   ├── designer/            # Designer interface components
│   │   ├── layout/          # Designer layout components
│   │   │   ├── Canvas.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── panels/      # Left/right panel components
│   │   ├── canvas-content/  # Canvas content components
│   │   │   └── pages/       # Page templates
│   │   └── sections/        # Layouts for App Gen, CMS, Insights...
│   │       ├── AppGen/
│   │       ├── CMS/
│   │       └── insights/
│   └── dashboard/           # Dashboard interface components
├── context/                 # React context providers
│   ├── ModeContext.tsx      # Mode switching context
│   ├── NavigatorContext.tsx # Navigation state context
│   └── PagesContext.tsx     # Pages state context
├── config/                  # Configuration files
├── lib/                     # Utility libraries
├── styles/                  # Global style files
└── icons/                   # Icon components
```


## Dependencies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Radix UI (for UI components)

## License

MIT
