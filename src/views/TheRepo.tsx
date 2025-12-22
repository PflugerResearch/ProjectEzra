import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Users, Calendar, Target, Megaphone } from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import { getResearchCategoryColor } from '../components/System/ThemeManager';
import { ChatPanel } from '../components/Chat/ChatPanel';

interface TheRepoProps {
  onNavigate: (view: string) => void;
}

// Marketing status for projects (placeholder data)
const PROJECT_MARKETING: Record<string, { status: string; items: string[] }> = {
  'X25-RB01': {
    status: 'Published',
    items: ['Texas Architect Article', 'Conference Presentation', 'Case Study PDF']
  },
  'X25-RB02': {
    status: 'In Progress',
    items: ['Technical Report Draft', 'Client Presentation']
  },
  'X25-RB03': {
    status: 'Not Started',
    items: []
  },
  'X25-RB05': {
    status: 'Planning',
    items: ['Research Brief']
  },
  'X25-RB06': {
    status: 'Not Started',
    items: []
  },
  'X25-RB08': {
    status: 'Published',
    items: ['Technical Report', 'UTSA Presentation', 'Internal Documentation']
  },
  'X25-RB09': {
    status: 'Confidential',
    items: []
  },
  'X25-RB10': {
    status: 'Confidential',
    items: []
  },
  'X25-RB11': {
    status: 'Confidential',
    items: []
  },
};

// Scope mapping based on phase
const SCOPE_LABELS: Record<string, string> = {
  'Pre-Research': 'Simple Research',
  'Developmental': 'Active Development',
  'Completed': 'Full Research Cycle'
};

const TheRepo: React.FC<TheRepoProps> = ({ onNavigate }) => {
  const { projects, loading } = useProjects();
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  // Sort projects by ID
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const numA = parseInt(a.id.replace(/\D/g, ''));
      const numB = parseInt(b.id.replace(/\D/g, ''));
      return numA - numB;
    });
  }, [projects]);

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="px-12 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">The Repo</h1>
        <p className="text-gray-400">Research project repository and knowledge hub</p>
      </div>

      <div className="flex gap-8">
        {/* Left column - Projects (2/3) - scrolls with page */}
        <div className="flex-1 lg:w-2/3 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Research Projects</h2>
            <span className="text-sm text-gray-500">{sortedProjects.length} projects</span>
          </div>

          {sortedProjects.map((project, index) => {
            const isExpanded = expandedProjects.has(project.id);
            const categoryColor = getResearchCategoryColor(project.category);
            const marketing = PROJECT_MARKETING[project.id] || { status: 'Unknown', items: [] };
            const scope = SCOPE_LABELS[project.phase] || project.phase;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="bg-card border border-card rounded-xl overflow-hidden"
              >
                {/* Project Header - Always visible */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full p-4 flex items-center gap-4 hover:bg-gray-800/30 transition-colors"
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  </motion.div>

                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: categoryColor.color }}
                  />

                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gray-500">{project.id}</span>
                      <span className="text-white font-medium">{project.title}</span>
                    </div>
                  </div>

                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${categoryColor.color}20`,
                      color: categoryColor.color
                    }}
                  >
                    {project.phase}
                  </span>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-2 border-t border-gray-800">
                        <div className="grid grid-cols-2 gap-4">
                          {/* Team */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500">
                              <Users className="w-4 h-4" />
                              <span className="text-xs font-medium">Team</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {project.researcher.split(',').map((member, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                                >
                                  {member.trim()}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Dates */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span className="text-xs font-medium">Timeline</span>
                            </div>
                            <div className="text-sm text-gray-300">
                              <p>Start: {project.startDate || 'TBD'}</p>
                              <p>End: {project.completionDate || 'Ongoing'}</p>
                            </div>
                          </div>

                          {/* Scope */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500">
                              <Target className="w-4 h-4" />
                              <span className="text-xs font-medium">Scope</span>
                            </div>
                            <p className="text-sm text-gray-300">{scope}</p>
                          </div>

                          {/* Marketing */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500">
                              <Megaphone className="w-4 h-4" />
                              <span className="text-xs font-medium">Marketing</span>
                            </div>
                            <div>
                              <span
                                className={`text-xs px-2 py-0.5 rounded ${
                                  marketing.status === 'Published'
                                    ? 'bg-green-900/50 text-green-400'
                                    : marketing.status === 'In Progress'
                                    ? 'bg-yellow-900/50 text-yellow-400'
                                    : marketing.status === 'Confidential'
                                    ? 'bg-gray-800 text-gray-500'
                                    : 'bg-gray-800 text-gray-400'
                                }`}
                              >
                                {marketing.status}
                              </span>
                              {marketing.items.length > 0 && (
                                <div className="mt-1 space-y-0.5">
                                  {marketing.items.map((item, i) => (
                                    <p key={i} className="text-xs text-gray-500">
                                      {item}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mt-4 pt-3 border-t border-gray-800">
                          <p className="text-sm text-gray-400">{project.description}</p>
                        </div>

                        {/* Partners if any */}
                        {project.partners && project.partners.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-800">
                            <p className="text-xs text-gray-500 mb-1">Partners</p>
                            <div className="flex flex-wrap gap-1">
                              {project.partners.map((partner, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-2 py-0.5 bg-gray-800/50 text-gray-400 rounded"
                                >
                                  {partner}
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

        {/* Right column - Chat (1/3) - stays fixed */}
        <div className="hidden lg:block lg:w-1/3 shrink-0">
          <div className="fixed top-24 right-12 w-[calc((100vw-6rem-2rem)*0.333)] h-[calc(100vh-120px)]">
            <ChatPanel
              title="Ask"
              subtitle="Research assistant"
              placeholder="Ask about any project..."
              initialMessage="Hello! I can help you find information about any research project. What would you like to know?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheRepo;
