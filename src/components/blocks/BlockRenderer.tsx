import type { BlockConfig, StatGridData, BarChartData, KeyFindingsData, ComparisonTableData, TimelineData, TextContentData, SectionData, ImageGalleryData, SourcesData } from './types';
import { StatGridBlock } from './StatGridBlock';
import { BarChartBlock } from './BarChartBlock';
import { KeyFindingsBlock } from './KeyFindingsBlock';
import { ComparisonTableBlock } from './ComparisonTableBlock';
import { TimelineBlock } from './TimelineBlock';
import { TextContentBlock } from './TextContentBlock';
import { SectionBlock } from './SectionBlock';
import { ImageGalleryBlock } from './ImageGalleryBlock';
import { SourcesBlock } from './SourcesBlock';

interface BlockRendererProps {
  block: BlockConfig;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  const { type, title, description, data } = block;

  const renderBlock = () => {
    switch (type) {
      case 'section':
        return <SectionBlock data={data as SectionData} />;
      case 'stat-grid':
        return <StatGridBlock data={data as StatGridData} />;
      case 'bar-chart':
        return <BarChartBlock data={data as BarChartData} />;
      case 'key-findings':
        return <KeyFindingsBlock data={data as KeyFindingsData} />;
      case 'comparison-table':
        return <ComparisonTableBlock data={data as ComparisonTableData} />;
      case 'timeline':
        return <TimelineBlock data={data as TimelineData} />;
      case 'text-content':
        return <TextContentBlock data={data as TextContentData} />;
      case 'image-gallery':
        return <ImageGalleryBlock data={data as ImageGalleryData} />;
      case 'sources':
        return <SourcesBlock data={data as SourcesData} />;
      default:
        return (
          <div className="p-4 bg-card border border-card rounded-xl text-gray-400 text-sm">
            Unknown block type: {type}
          </div>
        );
    }
  };

  // Section and image-gallery blocks don't need wrapper (handled by parent)
  if (type === 'section' || type === 'image-gallery') {
    return renderBlock();
  }

  return (
    <div className="mb-8">
      {(title || description) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-bold text-white mb-1">{title}</h3>}
          {description && <p className="text-gray-500">{description}</p>}
        </div>
      )}
      {renderBlock()}
    </div>
  );
}
