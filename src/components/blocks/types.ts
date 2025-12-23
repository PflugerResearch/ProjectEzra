// Block System Types

export interface ProjectConfig {
  id: string;
  title: string;
  code: string;
  subtitle: string;
  category: string;
  researcher: string;
  totalHours: number;
  accentColor: string;
  blocks: BlockConfig[];
}

export interface TabConfig {
  id: string;
  label: string;
  icon: string;
  blocks: BlockConfig[];
}

export interface BlockConfig {
  type: BlockType;
  id: string;
  title?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export type BlockType =
  | 'section'
  | 'stat-grid'
  | 'bar-chart'
  | 'donut-chart'
  | 'line-chart'
  | 'comparison-table'
  | 'image-gallery'
  | 'text-content'
  | 'timeline'
  | 'key-findings'
  | 'sources';

export interface SectionData {
  title: string;
  sources?: number[];
}

// Data shapes for each block type

export interface StatItem {
  label: string;
  value: string;
  detail?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface StatGridData {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
}

export interface BarChartItem {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartBar {
  title: string;
  items: BarChartItem[];
}

export interface BarChartGroup {
  label: string;
  color?: string;
  items: BarChartItem[];
}

export interface BarChartGroupedBar {
  title: string;
  groups: BarChartGroup[];
}

export interface BarChartData {
  // Single bar mode (backwards compatible)
  items?: BarChartItem[];
  // Multi-bar mode
  bars?: BarChartBar[];
  // Grouped mode - collapses into groups, expands on hover
  groups?: BarChartGroup[];
  // Multi-bar grouped mode - multiple bars, each with groups
  groupedBars?: BarChartGroupedBar[];
  unit?: string;
  showValues?: boolean;
  legendPosition?: 'inline' | 'end' | 'none';
}

export interface DonutChartData {
  segments: { label: string; value: number; color: string }[];
  total?: number;
  centerLabel?: string;
}

export interface ComparisonRow {
  label: string;
  values: (string | number)[];
  highlight?: boolean;
}

export interface ComparisonTableData {
  headers: string[];
  rows: ComparisonRow[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ImageGalleryData {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export interface TextContentData {
  content: string; // markdown supported
}

export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  status: 'complete' | 'in-progress' | 'pending';
}

export interface TimelineData {
  events: TimelineEvent[];
  // Optional project events to show below the timeline
  projectEvents?: Array<{
    date: string;
    title: string;
  }>;
  // Workload intensity - thickness of timeline
  workload?: Array<{
    date: string;
    hours: number;
  }>;
  // Layout mode
  layout?: 'vertical' | 'horizontal';
}

export interface KeyFinding {
  title: string;
  value: string;
  detail: string;
  icon?: string;
}

export interface KeyFindingsData {
  findings: KeyFinding[];
}

export interface Source {
  id: number;
  title: string;
  author?: string;
  url?: string;
}

export interface SourcesData {
  sources: Source[];
}
