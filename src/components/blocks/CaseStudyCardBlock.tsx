import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Award, ArrowRight, Users, Building } from 'lucide-react';
import type { CaseStudyCardData } from './types';

interface CaseStudyCardBlockProps {
  data: CaseStudyCardData;
}

export function CaseStudyCardBlock({ data }: CaseStudyCardBlockProps) {
  const { studies, columns = 2 } = data;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const gridCols = {
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {studies.map((study, index) => {
        const isExpanded = expandedId === study.id;

        return (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card border border-card rounded-2xl overflow-hidden"
          >
            {/* Header with optional image */}
            <div
              className="relative h-32 bg-gradient-to-br from-white/5 to-white/10 cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : study.id)}
            >
              {study.image && (
                <img
                  src={study.image}
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

              {/* Awards badge */}
              {study.awards && study.awards.length > 0 && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-amber-500/20 rounded-full">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span className="text-xs font-medium text-amber-400">{study.awards.length}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div
              className="p-5 cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : study.id)}
            >
              <h3 className="text-lg font-semibold text-white mb-1">{study.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{study.subtitle}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {study.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-white/5 rounded text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
                {study.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-xs text-gray-500">
                    +{study.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Expand indicator */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{isExpanded ? 'Hide details' : 'View details'}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 border-t border-card pt-4 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-gray-400">{study.description}</p>

                    {/* Metrics */}
                    {study.metrics && study.metrics.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Key Metrics
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="p-2 bg-white/5 rounded-lg text-center">
                              <p className="text-lg font-bold text-white">{metric.value}</p>
                              <p className="text-xs text-gray-500">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Building Type */}
                    {study.buildingType && study.buildingType.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          <Building className="w-3 h-3 inline mr-1" />
                          Building Features
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.buildingType.map((type, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Strategies */}
                    {study.strategies && study.strategies.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Massing & Orientation Strategies
                        </p>
                        <div className="space-y-2">
                          {study.strategies.map((strategy, i) => (
                            <div
                              key={i}
                              className="p-3 bg-white/5 rounded-lg"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-white">{strategy.name}</span>
                                <div className="flex items-center gap-1 text-emerald-400">
                                  <ArrowRight className="w-3 h-3" />
                                  <span className="text-xs">{strategy.impact}</span>
                                </div>
                              </div>
                              {strategy.description && (
                                <p className="text-xs text-gray-500">{strategy.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Team */}
                    {study.team && study.team.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          <Users className="w-3 h-3 inline mr-1" />
                          Project Team
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {study.team.map((member, i) => (
                            <div key={i} className="text-xs">
                              <span className="text-gray-500">{member.role}:</span>{' '}
                              <span className="text-gray-400">{member.company}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Awards */}
                    {study.awards && study.awards.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                          Awards
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.awards.map((award, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-1 px-2 py-1 bg-amber-500/10 rounded text-xs text-amber-400"
                            >
                              <Award className="w-3 h-3" />
                              {award}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
