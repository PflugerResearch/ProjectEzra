import type { ProjectConfig } from '../../../../components/blocks/types';

export const timberlyneConfig: ProjectConfig = {
  id: 'X25-RB06',
  title: 'Timberlyne Study',
  code: 'X25-RB06',
  subtitle: 'Mass Engineered Timber Design Assist',
  category: 'sustainability',
  researcher: 'Alex Wickes',
  totalHours: 20,
  accentColor: '#67823A',

  blocks: [
    // Overview Section
    {
      type: 'section',
      id: 'section-overview',
      data: { title: 'Overview' },
    },
    {
      type: 'text-content',
      id: 'overview-text',
      data: {
        content: `This study documents insights from Timberlyne's design assist process for mass engineered timber (MET) construction.

**Meeting Date:** May 27, 2025

**Key Topics:**
- Design Assist workflow with open specifications
- Project estimates comparing MET vs steel systems
- Maintenance services and scope considerations`,
      },
    },

    // Design Assist Process
    {
      type: 'section',
      id: 'section-process',
      data: { title: 'Design Assist Process', sources: [1] },
    },
    {
      type: 'text-content',
      id: 'process-text',
      data: {
        content: `**How Design Assist Works with Open Spec:**
- Get a set of drawings and bid the scope
- Work with structural engineer on overall design
- Timberlyne handles connections
- Number of hours and scope determined collaboratively

**Project Workflow:**
- Timberlyne would be sub to GC
- Only provide MET scope
- Only do full MET package
- Can do precon services
- Can provide MET estimates (GC prices alternative design)`,
      },
    },
    {
      type: 'image-gallery',
      id: 'process-images',
      data: {
        images: [
          { src: '/images/projects/X25RB06-timberlyne/WetlandMET1.jpg', alt: 'Wetland MET View 1', caption: 'Dock Structure' },
          { src: '/images/projects/X25RB06-timberlyne/WetlandMET2.jpg', alt: 'Wetland MET View 2', caption: 'Timber Details' },
          { src: '/images/projects/X25RB06-timberlyne/WetlandMET3.jpg', alt: 'Wetland MET View 3', caption: 'Connection Details' },
        ],
        columns: 3,
      },
    },

    // Technical Considerations
    {
      type: 'section',
      id: 'section-technical',
      data: { title: 'Technical Considerations', sources: [1, 2] },
    },
    {
      type: 'text-content',
      id: 'technical-text',
      data: {
        content: `**Structural Requirements:**
- EOR needs to figure out moment frames
- Need diaphragm on roof
- Consider two learning walls

**Material & Finishing:**
- TG ply, bulk paper and metal panel would need waterproofing
- Glulam can be PT (pressure treated) and coated with Sansin
- Solid timber has to be treated
- Consider flip orientation and slope

**Maintenance:**
- Maintenance services are built into original scope of work
- Would defer to Sansin for reapplication`,
      },
    },

    // Next Steps
    {
      type: 'section',
      id: 'section-next',
      data: { title: 'Next Steps', sources: [1] },
    },
    {
      type: 'text-content',
      id: 'next-text',
      data: {
        content: `**Action Items:**
- Timberlyne would need additional contact for follow-up
- Coordinate with structural engineer on moment frame design
- Evaluate MET vs steel cost comparison
- Determine waterproofing requirements for exposed elements`,
      },
    },

    // Sources
    {
      type: 'section',
      id: 'section-sources',
      data: { title: 'Sources' },
    },
    {
      type: 'sources',
      id: 'sources-list',
      data: {
        sources: [
          { id: 1, title: 'Timberlyne Design Assist Meeting Notes', author: 'May 27, 2025' },
          { id: 2, title: 'Sansin Wood Care Products', author: 'Sansin Corporation' },
        ],
      },
    },
  ],
};
