import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { ProjectConfig } from '../../components/blocks/types';
import { BlockRenderer } from '../../components/blocks';

interface ProjectDashboardProps {
  config: ProjectConfig;
  onBack?: () => void;
}

export default function ProjectDashboard({ config, onBack }: ProjectDashboardProps) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-10 bg-background/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <motion.button
                  onClick={onBack}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  whileHover={{ x: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400" />
                </motion.button>
              )}
              <div>
                <h1 className="text-4xl font-bold text-white tracking-tight font-mono">
                  {config.code}
                </h1>
                <p className="text-xl text-gray-300 mt-1">{config.title}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Researcher</p>
              <p className="text-lg text-white">{config.researcher}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content - All blocks scroll */}
      <main className="py-8">
        {config.blocks.map((block) => {
          // Full-bleed blocks render without container constraints
          const isFullBleed = block.type === 'image-gallery';

          if (isFullBleed) {
            return (
              <div key={block.id} className="mb-8">
                {(block.title || block.description) && (
                  <div className="max-w-5xl mx-auto px-12 mb-6">
                    {block.title && <h3 className="text-xl font-bold text-white mb-1">{block.title}</h3>}
                    {block.description && <p className="text-gray-500">{block.description}</p>}
                  </div>
                )}
                <BlockRenderer block={block} />
              </div>
            );
          }

          // Add extra top margin for section blocks
          const isSection = block.type === 'section';

          return (
            <div key={block.id} className={`max-w-5xl mx-auto px-12 ${isSection ? 'mt-24 first:mt-0' : ''}`}>
              <BlockRenderer block={block} />
            </div>
          );
        })}
      </main>
    </div>
  );
}
