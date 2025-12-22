# The Repo - Research Platform

**The Repo** is Pfluger Architects' Research & Benchmarking platform. It serves as both a public showcase of research work and an internal management tool for the R&B team.

## Overview

The platform serves two audiences:
- **Public Mode**: Showcase research portfolio to school districts, partners, and the public
- **Internal Mode**: Research management tools for Pfluger team members (login required)

## Technology Stack

- **React 18** with TypeScript
- **Vite** - Build tooling
- **Tailwind CSS v3** - Styling with custom dark theme
- **Mapbox GL JS** - 3D interactive mapping
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **PapaParse** - CSV data parsing

## Features

### Navigation

The app uses a centered top navigation bar with expandable mega-menu dropdowns:

- **Campus** - Interactive map of research projects by office location
- **Explore** - Portfolio of research work organized by year
- **Dashboard** (internal) - Project management, schedule, contacts
- **Pitch** (internal) - Submit and manage research proposals
- **Connect** - Contact form for partnership inquiries
- **About** - Information about the R&B department

### About Section

- **Research & Benchmarking** - Department overview and team
- **Our Process** - Six-step research methodology
- **Our Tools** - Software and custom tools used
- **Use of AI** - Transparency about AI in research
- **Sources & Citations** - APA formatting standards

### Research Campus Map

- Floating glassmorphism sidebar
- Projects organized by office (Austin, Corpus Christi, etc.)
- Search functionality
- Project detail panel with dashboard links

### Team

- Alexander Wickes, RA, LEED BD+C - Design Performance Leader, Research
- Christian Owens, AIA - Director of Design
- Brenda Swirczynski, MSc, ALEP - Education Facilities Planner

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

## Authentication

For internal team members, click the login icon in the top navigation:
- Email: `apps@pflugerarchitects.com`
- Password: `123456`

*Note: Hardcoded for development. Production will use proper authentication.*

## Project Structure

```
src/
├── components/
│   ├── Navigation/
│   │   └── TopNavbar.tsx           # Main navigation bar
│   ├── System/
│   │   ├── ThemeManager.tsx        # Theme colors & utilities
│   │   └── AuthContext.tsx         # Authentication state
│   └── ui/                         # Radix UI components
├── views/
│   ├── Home.tsx                    # Landing page
│   ├── ResearchMap.tsx             # Interactive map
│   ├── Portfolio.tsx               # Research gallery
│   ├── Collaborate.tsx             # Contact page
│   ├── Dashboard.tsx               # Internal hub
│   ├── AboutRB.tsx                 # About R&B
│   ├── AboutProcess.tsx            # Our process
│   ├── AboutTools.tsx              # Software & custom tools
│   ├── AboutAI.tsx                 # Use of AI
│   └── AboutSources.tsx            # Sources & citations
├── data/
│   └── loadProjects.ts             # CSV data loader
├── context/
│   └── ProjectsContext.tsx         # Global project state
public/
└── data/
    └── research_projects.csv       # Research project data
```

## Data Management

Research projects are stored in `/public/data/research_projects.csv`:

| Field | Description |
|-------|-------------|
| `id` | Project identifier (e.g., X25-RB01) |
| `title` | Project name |
| `researcher` | Lead researchers (comma-separated) |
| `category` | Research category |
| `phase` | Pre-Research, Developmental, or Completed |
| `description` | Project summary |
| `latitude` / `longitude` | Map coordinates |
| `partners` | Collaborating organizations (pipe-separated) |
| `startDate` / `completionDate` | Project timeline |
| `office` | Office location (Austin, Corpus Christi, etc.) |

## Theme & Design

The app uses an Apple-inspired dark theme with glassmorphism effects:

**Colors:**
- Background: `#181019` (deep purple)
- Cards: `#221a28`
- Borders: `#2d2435`

**Typography:**
- SF Pro system font stack

**UI Patterns:**
- Floating glassmorphism panels with backdrop blur
- White pill buttons for primary actions
- Minimal, clean layouts
- Smooth Framer Motion animations

## Research Categories

Each category has a dedicated color:
- **Psychology** - Brick Red `#9A3324`
- **Health & Safety** - Salmon `#f16555`
- **Sustainability** - Olive Green `#67823A`
- **Immersive Learning** - Sky Blue `#00A9E0`
- **Campus Life** - Chartreuse `#B5BD00`
- **Fine Arts** - Orange `#F2A900`

## Tools

### Software
- Custom Development (React, Python, D3.js, Mapbox, APIs)
- Revit
- Rhino + Grasshopper
- Enscape
- ArcGIS
- Qualtrics

### Custom Tools
- The Repo (this platform)
- Modulizer
- POE Dashboard (in development)
- Region Intel (in development)

## License

Proprietary - Pfluger Architects
