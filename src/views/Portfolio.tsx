import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Users,
  Grid,
  List,
  ChevronRight,
  Lock,
  BarChart3
} from 'lucide-react';
import { useProjects } from '../context/ProjectsContext';
import { getResearchCategoryColor } from '../components/System/ThemeManager';

// Projects with custom data visualization dashboards
const PROJECTS_WITH_DASHBOARDS = ['X25-RB02', 'X25-RB05', 'X25-RB08'];
const CONFIDENTIAL_IDS = ['X25-RB09', 'X25-RB10', 'X25-RB11'];

interface PortfolioProps {
  onOpenProjectDashboard?: (projectId: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpenProjectDashboard }) => {
  const { projects, loading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPhase, setFilterPhase] = useState<string>('all');

  // Show ALL projects (not just completed)
  const filteredByPhase = useMemo(() =>
    filterPhase === 'all' ? projects : projects.filter(p => p.phase === filterPhase),
    [projects, filterPhase]
  );

  const categories = [
    { id: 'all', label: 'All Research', color: 'from-gray-400 to-gray-600' },
    { id: 'sustainability', label: 'Sustainability', color: 'from-lime-400 to-green-500' },
    { id: 'immersive', label: 'Immersive Learning', color: 'from-blue-400 to-cyan-500' },
    { id: 'health-safety', label: 'Health & Safety', color: 'from-green-400 to-green-600' },
    { id: 'psychology', label: 'Psychology', color: 'from-red-400 to-red-600' },
    { id: 'fine-arts', label: 'Fine Arts', color: 'from-purple-400 to-pink-500' },
    { id: 'campus-life', label: 'Campus Life', color: 'from-blue-400 to-indigo-500' },
  ];

  const phases = [
    { id: 'all', label: 'All Phases' },
    { id: 'Completed', label: 'Completed' },
    { id: 'Developmental', label: 'In Development' },
    { id: 'Pre-Research', label: 'Pre-Research' },
  ];

  const filteredProjects = filteredByPhase.filter(
    project => filterCategory === 'all' || project.category === filterCategory
  );

  const handleProjectClick = (project: any) => {
    // If project has a dashboard and callback exists, navigate to it
    if (PROJECTS_WITH_DASHBOARDS.includes(project.id) && onOpenProjectDashboard) {
      onOpenProjectDashboard(project.id);
    } else {
      // Otherwise show the detail modal
      setSelectedProject(project);
    }
  };

  const getPhaseStyle = (phase: string) => {
    switch (phase) {
      case 'Completed':
        return { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' };
      case 'Developmental':
        return { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' };
      case 'Pre-Research':
        return { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' };
      default:
        return { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/30' };
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-neon-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading completed research...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2 text-white">Research Portfolio</h1>
        <p className="text-gray-400">
          Explore all research projects and their data visualizations
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} shown
        </p>
      </motion.div>

      {/* Filters and View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-card rounded-xl shadow-lg p-4 border border-gray-700/50"
      >
        <div className="flex flex-col gap-4">
          {/* Phase Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-gray-400 text-sm mr-2">Phase:</span>
            {phases.map(phase => (
              <motion.button
                key={phase.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterPhase(phase.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all text-sm ${
                  filterPhase === phase.id
                    ? 'bg-neon-red-500/20 text-neon-red-400 border border-neon-red-500/30'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700 border border-transparent'
                }`}
              >
                {phase.label}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <span className="text-gray-400 text-sm mr-2">Category:</span>
              {categories.map(cat => {
                const catInfo = cat.id !== 'all' ? getResearchCategoryColor(cat.id) : null;
                return (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all text-sm flex items-center gap-1.5 ${
                      filterCategory === cat.id
                        ? 'text-white shadow-lg'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                    }`}
                    style={{
                      backgroundColor: filterCategory === cat.id && catInfo ? catInfo.color : undefined,
                    }}
                  >
                    {catInfo && <catInfo.icon className="w-4 h-4" />}
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-neon-red-500 text-white'
                    : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-neon-red-500 text-white'
                    : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Display */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              const categoryInfo = getResearchCategoryColor(project.category);
              const CategoryIcon = categoryInfo.icon;
              const phaseStyle = getPhaseStyle(project.phase);
              const isConfidential = CONFIDENTIAL_IDS.includes(project.id);
              const hasDashboard = PROJECTS_WITH_DASHBOARDS.includes(project.id);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`bg-dark-card rounded-xl shadow-lg overflow-hidden cursor-pointer group border ${
                    isConfidential ? 'border-dashed border-gray-600' : 'border-gray-700/50'
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Image with Category Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Category Badge */}
                    <div
                      className="absolute top-3 left-3 px-2 py-1 rounded-lg flex items-center gap-1.5 text-xs font-medium text-white"
                      style={{ backgroundColor: isConfidential ? '#666' : categoryInfo.color }}
                    >
                      {isConfidential ? <Lock className="w-3 h-3" /> : <CategoryIcon className="w-3 h-3" />}
                      {isConfidential ? 'Confidential' : categoryInfo.label}
                    </div>

                    {/* Phase Badge */}
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-medium ${phaseStyle.bg} ${phaseStyle.text} border ${phaseStyle.border}`}>
                      {project.phase}
                    </div>

                    {/* Dashboard indicator */}
                    {hasDashboard && (
                      <div className="absolute bottom-3 right-3 px-2 py-1 rounded-lg bg-neon-red-500/90 text-white text-xs font-medium flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        Dashboard
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-300 font-mono">{project.id}</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.researcher}</p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{project.partners?.length || 0} partners</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>{project.startDate ? new Date(project.startDate).getFullYear() : 'TBD'}</span>
                      </div>
                    </div>

                    {/* View More */}
                    <div className="mt-4 flex items-center justify-end">
                      <span className="text-neon-red-400 text-sm font-medium group-hover:text-neon-red-300 transition-colors flex items-center">
                        {hasDashboard ? 'View Dashboard' : 'View Details'}
                        <ChevronRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {filteredProjects.map((project, index) => {
              const categoryInfo = getResearchCategoryColor(project.category);
              const CategoryIcon = categoryInfo.icon;
              const phaseStyle = getPhaseStyle(project.phase);
              const isConfidential = CONFIDENTIAL_IDS.includes(project.id);
              const hasDashboard = PROJECTS_WITH_DASHBOARDS.includes(project.id);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className={`bg-dark-card rounded-xl shadow-lg p-6 cursor-pointer border ${
                    isConfidential ? 'border-dashed border-gray-600' : 'border-gray-700/50'
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                      {/* Category icon overlay */}
                      <div
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: isConfidential ? '#666' : categoryInfo.color }}
                      >
                        {isConfidential ? (
                          <Lock className="w-4 h-4 text-white" />
                        ) : (
                          <CategoryIcon className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500 font-mono">{project.id}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${phaseStyle.bg} ${phaseStyle.text}`}>
                              {project.phase}
                            </span>
                            {hasDashboard && (
                              <span className="px-2 py-0.5 rounded bg-neon-red-500/20 text-neon-red-400 text-xs font-medium flex items-center gap-1">
                                <BarChart3 className="w-3 h-3" />
                                Dashboard
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
                          <p className="text-sm text-gray-400 mb-2">
                            {project.researcher}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-neon-red-400" />
                      </div>
                      <p className="text-gray-400 mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.partners?.length || 0} partners
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.startDate ? new Date(project.startDate).getFullYear() : 'TBD'}
                          {project.completionDate && ` — ${new Date(project.completionDate).getFullYear()}`}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded text-xs"
                          style={{ backgroundColor: `${categoryInfo.color}20`, color: categoryInfo.color }}
                        >
                          {categoryInfo.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const categoryInfo = getResearchCategoryColor(selectedProject.category);
          const CategoryIcon = categoryInfo.icon;
          const phaseStyle = getPhaseStyle(selectedProject.phase);
          const isConfidential = CONFIDENTIAL_IDS.includes(selectedProject.id);
          const hasDashboard = PROJECTS_WITH_DASHBOARDS.includes(selectedProject.id);

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-medium text-white"
                    style={{ backgroundColor: isConfidential ? '#666' : categoryInfo.color }}
                  >
                    {isConfidential ? <Lock className="w-4 h-4" /> : <CategoryIcon className="w-4 h-4" />}
                    {isConfidential ? 'Confidential' : categoryInfo.label}
                  </div>

                  {/* Phase Badge */}
                  <div className={`absolute top-4 left-36 px-3 py-1.5 rounded-lg text-sm font-medium ${phaseStyle.bg} ${phaseStyle.text} border ${phaseStyle.border}`}>
                    {selectedProject.phase}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-sm text-gray-300 font-mono mb-1 block">{selectedProject.id}</span>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-white/80">
                      {selectedProject.researcher}
                    </p>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Research Overview</h3>
                    <p className="text-gray-400">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-neon-red-500" />
                        <div>
                          <p className="text-xs text-gray-500">Timeline</p>
                          <p className="font-semibold text-gray-300">
                            {selectedProject.startDate ? new Date(selectedProject.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'TBD'}
                            {' — '}
                            {selectedProject.completionDate
                              ? new Date(selectedProject.completionDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                              : 'Ongoing'
                            }
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-neon-red-400" />
                        <div>
                          <p className="text-xs text-gray-500">Partners</p>
                          <p className="font-semibold text-gray-300">{selectedProject.partners?.length || 0}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Research Partners */}
                  {selectedProject.partners && selectedProject.partners.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-white">Research Partners</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.partners.map((partner: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded-lg text-sm"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dashboard Button (if available) */}
                  {hasDashboard && onOpenProjectDashboard && (
                    <div className="pt-4 border-t border-gray-700/50">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedProject(null);
                          onOpenProjectDashboard(selectedProject.id);
                        }}
                        className="w-full py-3 px-4 bg-neon-red-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-neon-red-600 transition-colors"
                      >
                        <BarChart3 className="w-5 h-5" />
                        View Data Dashboard
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;