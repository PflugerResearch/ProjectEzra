import type { ProjectConfig } from '../../../../components/blocks/types';

export const immersiveConfig: ProjectConfig = {
  id: 'X25-RB00',
  title: 'Immersive Learning',
  code: 'X25-RB00',
  subtitle: 'Exploring Immersive Technologies in Education',
  category: 'immersive',
  researcher: 'Alex Wickes',
  totalHours: 40,
  accentColor: '#00A9E0',

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
        content: `Content coming soon.`,
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
        sources: [],
      },
    },
  ],
};
