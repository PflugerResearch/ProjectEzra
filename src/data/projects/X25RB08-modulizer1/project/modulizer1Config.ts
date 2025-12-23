import type { ProjectConfig } from '../../../../components/blocks/types';

export const modulizer1Config: ProjectConfig = {
  id: 'X25-RB08',
  title: 'The Modulizer Part 1',
  code: 'X25-RB08',
  subtitle: 'Defining the Shape - Kennedy Elementary Energy Analysis',
  category: 'sustainability',
  researcher: 'Agustin Gonzalez, Alex Wickes',
  totalHours: 60,
  accentColor: '#10b981',

  blocks: [
    // Overview Section
    {
      type: 'section',
      id: 'section-overview',
      data: { title: 'Overview' },
    },
    {
      type: 'text-content',
      id: 'overview-intro',
      title: 'Research Context',
      data: {
        content: `This study examined energy and design implications of massing strategies in sustainable school architecture. Through literature review, precedent analysis, and computational modeling, we identified key strategies that directly impact building performance.

**Research Type:** Mid-Level Literature Review
**Project Context:** Kennedy Elementary`,
      },
    },
    {
      type: 'key-findings',
      id: 'overview-findings',
      data: {
        findings: [
          {
            title: 'Main Finding',
            value: 'Data-Backed Design',
            detail: 'Thoughtful, data-backed design makes a measurable difference',
            icon: 'award',
          },
          {
            title: 'Energy Impact',
            value: '9%',
            detail: 'Reduction possible through orientation alone',
            icon: 'energy',
          },
          {
            title: 'Research Hours',
            value: '60 hrs',
            detail: 'Phase 1 allocation',
            icon: 'target',
          },
          {
            title: 'Precedents',
            value: '5',
            detail: 'COTE projects analyzed',
            icon: 'lightbulb',
          },
        ],
      },
    },

    // Insights Section
    {
      type: 'section',
      id: 'section-insights',
      data: { title: 'Insights' },
    },
    {
      type: 'stat-grid',
      id: 'insights-strategies',
      title: 'Key Strategies',
      data: {
        stats: [
          { label: 'East-West Orientation', value: '9%', detail: 'Energy reduction (John Lewis)' },
          { label: 'Roof Optimization', value: '100%', detail: 'Renewable offset achievable' },
          { label: 'Glazing Fine-Tuning', value: 'Balanced', detail: 'Daylight vs heat gain' },
          { label: 'Shading Solutions', value: 'Critical', detail: 'For problem facades' },
        ],
        columns: 4,
      },
    },
    {
      type: 'text-content',
      id: 'strategies-detail',
      data: {
        content: `**East-West Orientation** - Orient buildings along east-west axis to minimize solar exposure. Up to 9% energy reduction demonstrated at John Lewis Elementary.

**Roof/Facade Optimization** - Design roof planes and facades to maximize PV and minimize self-shading. Increased renewable energy capture across all precedents.

**Glazing Fine-Tuning** - Customize glazing by orientation for daylight vs. heat gain balance. Reduced cooling loads and improved occupant comfort.

**Integrated PV Systems** - Include photovoltaic arrays in early massing decisions. 100% renewable offset achievable as shown in multiple COTE projects.

**Shading Solutions** - Deep overhangs, cantilevers, and solar screens for less-than-ideal orientations. Mitigated heat gain on problem facades.`,
      },
    },

    // Modeling Tools Section
    {
      type: 'section',
      id: 'section-tools',
      data: { title: 'Modeling Tools' },
    },
    {
      type: 'tool-comparison',
      id: 'tools-comparison',
      title: 'Energy Modeling Software Comparison',
      description: 'Evaluation of tools for different project phases',
      data: {
        tools: [
          {
            name: 'Climate Studio',
            rating: 90,
            color: '#10b981',
            price: '$2,500/year',
            category: 'Rhino Extension',
            description: 'Detailed results for DD and CD stages with comprehensive evaluation tools.',
            pros: ['Detailed DD/CD results', 'Comprehensive tools', 'More accurate for validation'],
            cons: ['Requires Rhino skills', 'Higher cost'],
          },
          {
            name: 'Sefaira',
            rating: 84,
            color: '#3b82f6',
            price: '$1,995/year',
            category: 'SketchUp + Web',
            description: 'Useful for PD, SD, & DD stages with easy-to-use SketchUp extension.',
            pros: ['Easy to use', 'Good for early stages', 'No extensive input required'],
            cons: ['Extension can fail', 'Limited EUI in extension'],
          },
          {
            name: 'Ladybug/Honeybee',
            rating: 80,
            color: '#8b5cf6',
            price: 'Free',
            category: 'Grasshopper (Rhino)',
            description: 'Fully customizable tools with large community support.',
            pros: ['All phases capable', 'Fully customizable', 'Free & open source'],
            cons: ['Complex setup', 'Requires expertise'],
          },
          {
            name: 'Autodesk Forma',
            rating: 70,
            color: '#f59e0b',
            price: '$1,550/year',
            category: 'Web-based',
            description: 'Wide range of site design evaluation tools, good for site-level assessments.',
            pros: ['Site-level tools', 'Part of Pfluger suite', 'Good for assessments'],
            cons: ['No energy modeling', 'Lacks building analysis'],
          },
        ],
        columns: 2,
      },
    },

    // Precedents Section
    {
      type: 'section',
      id: 'section-precedents',
      data: { title: 'Precedent Studies' },
    },
    {
      type: 'case-study-card',
      id: 'precedent-cards',
      title: 'COTE Award-Winning Projects',
      description: 'Analysis of sustainable design strategies from leading projects',
      data: {
        studies: [
          {
            id: 'fleet',
            title: 'Alice West Fleet Elementary School',
            subtitle: 'Arlington Public Schools - VMDO Architects',
            location: 'Arlington, Virginia',
            architect: 'VMDO Architects',
            year: 2022,
            siteArea: '204,235 SF',
            conditionedArea: '111,634 SF',
            stories: 6,
            tags: ['Education', 'COTE 2024', 'Mass Timber', 'Geothermal'],
            description: 'Six-story elementary school with innovative Y-shaped massing. Roofs designed to avoid self-shading while maximizing PV collection. The building demonstrates how strategic orientation and envelope design can achieve exceptional sustainability performance.',
            buildingType: ['Added insulation', 'Operable windows', 'Geothermal energy', 'Mass timber'],
            metrics: [
              { label: 'Site Area', value: '204,235 SF' },
              { label: 'Conditioned', value: '111,634 SF' },
              { label: 'Stories', value: '6' },
            ],
            strategies: [
              {
                name: 'Roof Plane & Shape Optimization',
                description: 'Using roofs that don\'t shade each other, concept design options were blocked and stacked with the sun, while keeping the principal parti axis east-west and minimizing the building footprint.',
                impact: 'Max PV capture'
              },
              {
                name: 'Y-Shaped Massing Optimization',
                description: 'The two "arms of the Y" each had less than ideal solar orientation. The arm aligned with the street used mass timber with deep overhangs to produce shade, while the other arm fine-tuned apertures and used custom shading.',
                impact: 'Shade on poor orientations'
              },
              {
                name: 'Vertical Glazing Optimization',
                description: 'Each elevation was fine tuned to allow maximum daylight with minimal solar heat gain. Northwest facing classrooms "pushed out" for floor-to-ceiling north glass, while southeast classrooms did the opposite.',
                impact: 'Balanced daylight/heat'
              },
            ],
            team: [
              { role: 'General Contractor', company: 'Whiting-Turner Contracting' },
              { role: 'MEP Engineer', company: 'CMTA' },
              { role: 'Structural Engineer', company: 'Springpoint' },
              { role: 'Civil Engineer', company: 'Bowman Consulting' },
              { role: 'Landscape', company: 'Waterstreet Studio' },
              { role: 'Traffic Engineer', company: 'Toole Design Group' },
            ],
            awards: ['AIA COTE Top Ten 2024'],
          },
          {
            id: 'lewis',
            title: 'John Lewis Elementary',
            subtitle: 'Washington, D.C. - Perkins Eastman',
            tags: ['Education', 'COTE 2025', 'Net Zero'],
            description: 'Flipped and rotated building to orient along east-west axis, achieving 9% reduction in energy consumption through orientation alone.',
            metrics: [
              { label: 'Size', value: '88,588 SF' },
              { label: 'Stories', value: '2' },
              { label: 'Year', value: '2021' },
            ],
            strategies: [
              { name: '90 Degree Rotation', impact: '9% energy reduction' },
            ],
            awards: ['AIA COTE Top Ten 2025', '2023 American Architecture Award', 'Planet Positive Award'],
          },
          {
            id: 'coliseum',
            title: 'Coliseum Place',
            subtitle: 'Oakland, California - David Baker Architects',
            tags: ['Housing', 'COTE', 'Affordable'],
            description: 'Simple massing combined with solar orientation response achieved ambitious energy-consumption-reduction goals.',
            metrics: [
              { label: 'Size', value: '71,512 SF' },
              { label: 'EUI', value: '15' },
              { label: 'Year', value: '2021' },
            ],
            strategies: [
              { name: 'Simple Massing', impact: 'Energy goals achieved' },
              { name: 'Solar Screen', impact: 'Reduced cooling' },
            ],
            awards: ['AIA COTE'],
          },
          {
            id: 'westwood',
            title: 'Westwood Hills Nature Center',
            subtitle: 'St. Louis Park, MN - HGA',
            tags: ['Civic', 'COTE', 'Zero Energy'],
            description: 'Orientation and shading optimized for passive heating, cooling, and daylighting achieving 100% zero energy.',
            metrics: [
              { label: 'Size', value: '13,565 SF' },
              { label: 'Renewable', value: '100%' },
              { label: 'Year', value: '2020' },
            ],
            strategies: [
              { name: 'Envelope Optimization', impact: '100% zero energy' },
            ],
            awards: ['AIA COTE Top Ten'],
          },
        ],
        columns: 2,
      },
    },

    // Case Study Section
    {
      type: 'section',
      id: 'section-casestudy',
      data: { title: 'Kennedy Elementary Case Study' },
    },
    {
      type: 'text-content',
      id: 'casestudy-intro',
      data: {
        content: `**Project:** Kennedy Elementary
**Focus:** SD/DD interventions focusing on reducing heat gain, glare, and improving seasonal daylighting

Heat maps were delivered at 9am, 12pm, and 5pm across all seasons (Spring, Summer, Fall, Winter) to guide design decisions.`,
      },
    },
    {
      type: 'workflow-steps',
      id: 'casestudy-workflow',
      title: 'Design Process Phases',
      data: {
        steps: [
          {
            number: 1,
            title: 'Base Model Analysis',
            status: 'complete',
            findings: [
              'Collaboration spaces rendered overlit (75+ fc range)',
              'Illuminance swings identified across seasons',
              'Deep overhangs insufficient for glazing choices',
            ],
          },
          {
            number: 2,
            title: 'Design Team Handoff',
            status: 'complete',
            deliverables: [
              'Illuminance heat maps',
              'Base EUI model',
              'Spatial analysis',
            ],
          },
          {
            number: 3,
            title: 'Iterative Refinement',
            status: 'complete',
            interventions: [
              { action: 'Decreased VLT by half in certain zones', impact: 'Reduced glare hotspots' },
              { action: 'Fine-tuned VLT reductions by 10% in others', impact: 'Balanced light distribution' },
              { action: 'Extended overhangs where impactful', impact: 'Target fc readings achieved' },
            ],
          },
          {
            number: 4,
            title: 'Revised Model Results',
            status: 'complete',
            outcomes: [
              'Glare zones cooled down',
              'Footcandle readings in target range',
              'Daylight distribution balanced across spaces',
            ],
          },
        ],
      },
    },

    // Conclusions Section
    {
      type: 'section',
      id: 'section-conclusions',
      data: { title: 'Conclusions' },
    },
    {
      type: 'text-content',
      id: 'conclusions-main',
      data: {
        content: `**Main Finding:** Thoughtful, data-backed design makes a measurable difference in sustainable school performance.

**Key Points:**
1. Strategic orientation, solar-responsive envelopes, and smart massing directly translate to lower energy use
2. Performance modeling cannot be an afterthought - must be integrated early
3. Iterative simulation data guides real decisions on shading, window placement, and materials
4. Establishes repeatable methodology for future Pfluger projects

**Next Phase:** Phase 2 will test massing iterations, quantify facade performance, and advance cross-disciplinary collaboration

**Future Projects:** Cornerstone, Flour Bluff CTE`,
      },
    },

    // Sources Section
    {
      type: 'section',
      id: 'section-sources',
      data: { title: 'Sources' },
    },
    {
      type: 'sources',
      id: 'research-sources',
      data: {
        sources: [
          { id: 1, title: 'AIA COTE Top Ten Database', author: 'AIA' },
          { id: 2, title: 'Climate Studio Documentation', author: 'Solemma' },
          { id: 3, title: 'Sefaira User Guide', author: 'Trimble' },
          { id: 4, title: 'Ladybug Tools Documentation', author: 'Ladybug Tools LLC' },
          { id: 5, title: 'ASHRAE 90.1-2019', author: 'ASHRAE' },
        ],
      },
    },
  ],
};
